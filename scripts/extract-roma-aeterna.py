#!/usr/bin/env python3
"""Extract the text layer of the Roma Aeterna EPUB into per-chapter dumps.

The EPUB is a page-image edition with an invisible OCR text layer.  Each
chapter is a run of pageNNN.xhtml files; this script reconstructs readable
lines, separates the main column from the marginal notes, and writes one
plain-text file per chapter under sources/roma-aeterna/.

Usage:
    python3 scripts/extract-roma-aeterna.py [path/to/book.epub]

The output is an authoring aid only; it is intentionally not imported by the
site.  The EPUB and the generated dumps are kept out of git.
"""
from __future__ import annotations

import re
import statistics
import sys
import zipfile
from collections import Counter
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_EPUB = next((ROOT / "books").glob("*Roma*terna*.epub"), None)
OUT = ROOT / "sources" / "roma-aeterna"

# The 21 capitula of Pars II, in the book's order.  The page ranges are the
# pageNNN.xhtml files that belong to each chapter (the next chapter starts the
# range after the last page of the previous one).
CHAPTERS = [
    ("36", "XXXVI", "ROMA AETERNA", "Roma Aeterna", 10, 31),
    ("37", "XXXVII", "TROIA CAPTA", "Troy Captured", 32, 46),
    ("38", "XXXVIII", "PIVS AENEAS", "Pious Aeneas", 47, 57),
    ("39", "XXXIX", "KARTHAGO", "Carthage", 58, 72),
    ("40", "XL", "INFELIX DIDO", "Unhappy Dido", 73, 87),
    ("41", "XLI", "ORIGINES", "Origins", 88, 100),
    ("42", "XLII", "BELLVM ET PAX", "War and Peace", 101, 118),
    ("43", "XLIII", "ROMA ET ALBA", "Rome and Alba", 119, 135),
    ("44", "XLIV", "REGES ET REGINAE", "Kings and Queens", 136, 158),
    ("45", "XLV", "ROMA LIBERATA", "Rome Liberated", 159, 178),
    ("46", "XLVI", "POST REGES EXACTOS", "After the Kings Were Expelled", 179, 201),
    ("47", "XLVII", "GRAECI ET ROMANI", "Greeks and Romans", 202, 211),
    ("48", "XLVIII", "BELLVM PVNICVM SECVNDVM", "The Second Punic War", 212, 250),
    ("49", "XLIX", "HANNIBAL", "Hannibal", 251, 265),
    ("50", "L", "GRAECIA LIBERATA", "Greece Liberated", 266, 294),
    ("51", "LI", "SCIPIO AEMILIANVS", "Scipio Aemilianus", 295, 311),
    ("52", "LII", "IVGVRTHA", "Jugurtha", 312, 341),
    ("53", "LIII", "MARIVS ET SVLLA", "Marius and Sulla", 342, 361),
    ("54", "LIV", "CN. POMPEIVS MAGNVS", "Pompey the Great", 362, 389),
    ("55", "LV", "DE RE PVBLICA", "On the Republic", 390, 409),
    ("56", "LVI", "SOMNIVM SCIPIONIS", "The Dream of Scipio", 410, 426),
]

# Pages that are illustrations or chronological charts rather than reading text.
SKIP_PAGES = {13, 27, 28}


def spans_for(epub: zipfile.ZipFile, page: int):
    name = f"OEBPS/page{page:03d}.xhtml"
    try:
        raw = epub.read(name)
    except KeyError:
        return []
    soup = BeautifulSoup(raw, "html.parser")
    spans = []
    for sp in soup.find_all("span"):
        text = sp.get_text()
        if not text.strip():
            continue
        style = sp.get("style", "")
        def px(key):
            m = re.search(key + r":(-?[\d.]+)px", style)
            return float(m.group(1)) if m else None
        cls = " ".join(sp.get("class") or [])
        fs = re.search(r"\bfs(\d+)\b", cls)
        ff = re.search(r"\bf(\d+)\b", cls)
        spans.append({
            "left": px("left"),
            "bottom": px("bottom"),
            "text": text.strip(),
            "fs": int(fs.group(1)) if fs else None,
            "ff": ff.group(1) if ff else None,
        })
    return spans


def make_lines(spans):
    spans = sorted(spans, key=lambda s: (-(s["bottom"] or 0), s["left"] or 0))
    lines = []
    for sp in spans:
        if sp["left"] is None or sp["bottom"] is None:
            continue
        if lines and abs(lines[-1]["bottom"] - sp["bottom"]) <= 8:
            lines[-1]["spans"].append(sp)
        else:
            lines.append({"bottom": sp["bottom"], "spans": [sp]})
    for ln in lines:
        ln["spans"].sort(key=lambda s: s["left"])
        ln["xmin"] = min(s["left"] for s in ln["spans"])
        ln["text"] = " ".join(s["text"] for s in ln["spans"])
        ln["ff"] = Counter(s["ff"] for s in ln["spans"] if s["ff"]).most_common(1)[0][0] if any(s["ff"] for s in ln["spans"]) else None
        ln["words"] = len(ln["text"].split())
    return lines


def page_side(lines):
    for ln in lines:
        if re.match(r"^CAP\s*\.", ln["text"], re.I):
            return "left" if ln["xmin"] < 12000 else "right"
    for ln in lines:
        if re.fullmatch(r"\d{1,4}", ln["text"].strip()):
            return "left" if ln["xmin"] < 12000 else "right"
    return "left"


def clean_text(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    return text


def join_lines(lines):
    if not lines:
        return ""
    parts = []
    for ln in lines:
        t = ln["text"].strip()
        if not t:
            continue
        if parts and parts[-1].endswith("-") and t[:1].islower():
            parts[-1] = parts[-1][:-1] + t
        else:
            parts.append(t)
    return clean_text(" ".join(parts))


def paragraphs(lines):
    if not lines:
        return []
    gaps = [abs(lines[i]["bottom"] - lines[i + 1]["bottom"]) for i in range(len(lines) - 1)]
    med = statistics.median(gaps) if gaps else 1100
    out, cur = [], []
    for i, ln in enumerate(lines):
        if cur:
            gap = abs(lines[i - 1]["bottom"] - ln["bottom"])
            if gap > max(med * 1.35, 1400):
                out.append(join_lines(cur))
                cur = []
        cur.append(ln)
    if cur:
        out.append(join_lines(cur))
    return [p for p in out if p]


def dump_chapter(epub, num, roman, latin, english, start, end):
    buf = [f"CAPITULUM {roman} — {latin} ({english})", "=" * 72, ""]
    for page in range(start, end + 1):
        if page in SKIP_PAGES:
            continue
        spans = spans_for(epub, page)
        lines = make_lines(spans)
        if not lines:
            continue
        side = page_side(lines)
        main, notes = [], []
        for ln in lines:
            text = ln["text"].strip()
            if re.match(r"^CAP\s*\.", text, re.I) or re.fullmatch(r"\d{1,4}", text):
                continue
            if side == "left":
                (notes if ln["xmin"] < 7800 else main).append(ln)
            else:
                (notes if ln["xmin"] > 19000 else main).append(ln)
        if len(main) < 3:
            continue
        buf.append(f"----- PAGE {page} -----")
        for para in paragraphs(main):
            buf.append(para)
        if notes:
            buf.append("[MARGINAL NOTES]")
            for ln in notes:
                buf.append(clean_text(ln["text"]))
        buf.append("")
    path = OUT / f"ch-{num}.txt"
    path.write_text("\n".join(buf), encoding="utf-8")
    print(path.relative_to(ROOT))


def main():
    epub_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_EPUB
    if not epub_path or not epub_path.exists():
        sys.exit("EPUB not found (pass it as the first argument).")
    OUT.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(epub_path) as epub:
        for num, roman, latin, english, start, end in CHAPTERS:
            dump_chapter(epub, num, roman, latin, english, start, end)


if __name__ == "__main__":
    main()
