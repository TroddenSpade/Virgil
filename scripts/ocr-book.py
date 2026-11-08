#!/usr/bin/env python3
"""
Transcribe a source PDF to clean, macron-preserving text for the Virgil library.

Scanned or badly-encoded source editions cannot be trusted to a text layer
(macrons come out mangled: "Eurōpa" -> "Eurdpa"). Instead we render each page
to a PNG and ask a vision-capable model on the 9Router to transcribe it
faithfully, keeping every macron (ā ē ī ō ū ȳ) and the book's own structure.

Output:
  sources/_render/<slug>/<slug>-NNN.png   rendered page images (gitignored)
  sources/raw/<slug>.jsonl                one JSON object per page
  sources/raw/<slug>.txt                  concatenated text with page markers

Usage:
  python3 scripts/ocr-book.py <slug> <pdf> [--pages A-B] [--dpi 200]
                             [--workers 4] [--model M] [--force]
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import re
import subprocess
import sys
import threading
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RENDER = ROOT / "sources" / "_render"
RAW = ROOT / "sources" / "raw"

DEFAULT_MODEL = os.environ.get("OCR_MODEL", "tokenharbor/deepseek-v4.1-flash:free")

DEFAULT_PROMPT = (
    "This page has TWO columns: a wide main column (the exercises) and a narrow "
    "side margin column (vocabulary and paradigm notes) on the left or the right.\n"
    "Steps:\n"
    "1. Transcribe ONLY the wide main column first, exactly as printed.\n"
    "2. Then output a line containing exactly ===MARGIN=== and transcribe ONLY the "
    "narrow side margin column. If there is no margin column, output ===MARGIN=== "
    "and nothing after it.\n"
    "Rules:\n"
    "- Output PLAIN TEXT ONLY. Never use Markdown (no **, no *, no #).\n"
    "- Preserve EVERY macron (long-vowel mark): ā ē ī ō ū ȳ and their capitals.\n"
    "- Keep section headings (e.g. 'Lēctiō prīma', 'Lēctiō grammatica') and the "
    "numbers of the exercises and items.\n"
    "- Where the book leaves a blank to be filled in, write ______ .\n"
    "- Keep the original language (Latin or English) and spelling.\n"
    "- Do NOT translate, summarise, correct or comment. Output only the transcription.\n"
    "- If the page is blank, output exactly: [BLANK]"
)

BAD_RESPONSES = (
    "output budget on reasoning",
    "entire output budget",
)


def load_router() -> tuple[str, str]:
    """Read the 9Router base URL + API key from the OpenCode config."""
    env_key = os.environ.get("NINE_ROUTER_KEY")
    env_base = os.environ.get("NINE_ROUTER_BASE", "http://localhost:20128/v1")
    if env_key:
        return env_base, env_key
    cfg_paths = [
        Path.home() / ".config" / "opencode" / "opencode.json",
        ROOT / "opencode.json",
    ]
    for p in cfg_paths:
        if not p.exists():
            continue
        cfg = json.loads(p.read_text())
        for prov in (cfg.get("provider") or {}).values():
            opts = prov.get("options") or {}
            if opts.get("baseURL") and opts.get("apiKey"):
                return opts["baseURL"], opts["apiKey"]
    raise SystemExit("No 9Router baseURL/apiKey found (set NINE_ROUTER_KEY / NINE_ROUTER_BASE).")


BASE, KEY = load_router()


def chat(model: str, prompt: str, image_b64: str, maxtok: int = 8000,
         timeout: int = 240, reasoning_effort: str | None = "low") -> str:
    payload = {
        "model": model,
        "stream": False,
        "max_tokens": maxtok,
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {"type": "image_url", "image_url": {"url": "data:image/png;base64," + image_b64}},
                ],
            }
        ],
    }
    if reasoning_effort:
        payload["reasoning_effort"] = reasoning_effort
    req = urllib.request.Request(
        BASE + "/chat/completions",
        data=json.dumps(payload).encode(),
        headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json"},
    )
    raw = urllib.request.urlopen(req, timeout=timeout).read().decode()
    try:
        return json.loads(raw)["choices"][0]["message"]["content"]
    except Exception:
        out = []
        for line in raw.splitlines():
            if line.startswith("data: ") and "[DONE]" not in line:
                try:
                    j = json.loads(line[6:])
                    out.append(j["choices"][0]["delta"].get("content", ""))
                except Exception:
                    pass
        return "".join(out)


def render(pdf: Path, slug: str, first: int, last: int, dpi: int) -> list[Path]:
    out = RENDER / slug
    out.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["pdftoppm", "-f", str(first), "-l", str(last), "-r", str(dpi), "-png",
         str(pdf), str(out / slug)],
        check=True,
    )
    return sorted(out.glob(f"{slug}-*.png"))


def page_number(png: Path) -> int:
    m = re.search(r"-(\d+)\.png$", png.name)
    return int(m.group(1)) if m else 0


def clean_text(s: str) -> str:
    """Strip stray Markdown and tidy whitespace, leaving the wording untouched."""
    s = s.replace("**", "")
    out = []
    blank = 0
    for ln in s.splitlines():
        ln = ln.rstrip()
        if ln.startswith("*") and ln.endswith("*") and len(ln) > 2:
            ln = ln[1:-1].rstrip()
        if not ln.strip():
            blank += 1
            if blank > 1:
                continue
        else:
            blank = 0
        out.append(ln)
    return "\n".join(out).strip()


def transcribe_page(args, png: Path) -> dict:
    n = page_number(png)
    b64 = base64.b64encode(png.read_bytes()).decode()
    last_err = None
    for attempt in range(1, 4):
        try:
            txt = chat(args.model, args.prompt, b64, maxtok=args.maxtok,
                       reasoning_effort=args.reasoning_effort)
            if txt and txt.strip() and not any(b in txt for b in BAD_RESPONSES):
                return {"page": n, "text": clean_text(txt)}
            last_err = "empty or truncated response"
        except Exception as e:  # noqa: BLE001
            last_err = f"{type(e).__name__}: {e}"
        time.sleep(2 * attempt)
    return {"page": n, "text": "", "error": last_err}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("slug")
    ap.add_argument("pdf")
    ap.add_argument("--pages", help="A-B (1-based, inclusive)")
    ap.add_argument("--dpi", type=int, default=200)
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--model", default=DEFAULT_MODEL)
    ap.add_argument("--maxtok", type=int, default=8000)
    ap.add_argument("--reasoning-effort", default="low")
    ap.add_argument("--prompt", default=DEFAULT_PROMPT)
    ap.add_argument("--prompt-file", help="read the prompt from a file (overrides --prompt)")
    ap.add_argument("--force", action="store_true", help="re-OCR pages already done")
    args = ap.parse_args()

    if args.prompt_file:
        args.prompt = Path(args.prompt_file).read_text(encoding="utf-8").strip()

    pdf = Path(args.pdf)
    if not pdf.exists():
        raise SystemExit(f"missing PDF: {pdf}")

    pages = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True).stdout
    m = re.search(r"Pages:\s+(\d+)", pages)
    if not m:
        raise SystemExit(f"could not read page count from pdfinfo for {pdf}")
    total = int(m.group(1))

    first, last = 1, total
    if args.pages:
        a, _, b = args.pages.partition("-")
        first = int(a)
        last = int(b) if b else int(a)

    if args.dpi:
        pngs = render(pdf, args.slug, first, last, args.dpi)
    else:
        pngs = sorted((RENDER / args.slug).glob(f"{args.slug}-*.png"))

    RAW.mkdir(parents=True, exist_ok=True)
    out_jsonl = RAW / f"{args.slug}.jsonl"

    done: dict[int, dict] = {}
    if out_jsonl.exists() and not args.force:
        for line in out_jsonl.read_text().splitlines():
            if line.strip():
                rec = json.loads(line)
                if not rec.get("error"):
                    done[rec["page"]] = rec
        print(f"resuming: {len(done)} pages already transcribed")

    todo = [p for p in pngs if (page_number(p) not in done or args.force)]
    print(f"{args.slug}: {len(pngs)} pages rendered, {len(todo)} to transcribe, "
          f"{args.workers} workers, model={args.model}")

    lock = threading.Lock()
    results = dict(done)
    counter = {"n": 0}

    def work(png: Path):
        rec = transcribe_page(args, png)
        with lock:
            results[rec["page"]] = rec
            counter["n"] += 1
            flag = rec.get("error", "")
            print(f"  [{counter['n']}/{len(todo)}] page {rec['page']:>3} "
                  f"({len(rec['text'])} chars){' ERR ' + flag if flag else ''}", flush=True)
            with out_jsonl.open("w") as f:
                for k in sorted(results):
                    f.write(json.dumps(results[k], ensure_ascii=False) + "\n")

    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        list(ex.map(work, todo))

    # concatenated text with page markers
    txt_path = RAW / f"{args.slug}.txt"
    with txt_path.open("w") as f:
        for k in sorted(results):
            f.write(f"\n<<<PAGE {k}>>>\n")
            f.write(results[k]["text"] + "\n")
    errs = [k for k, v in results.items() if v.get("error")]
    print(f"wrote {out_jsonl} and {txt_path} ({len(results)} pages, {len(errs)} errors)")


if __name__ == "__main__":
    main()
