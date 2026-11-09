#!/usr/bin/env python3
"""Dump the Latin via Ovid reference blocks into per-chapter authoring files."""
from __future__ import annotations
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "sources" / "latin-via-ovid"
OUT = ROOT / "sources" / "latin-via-ovid"

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for number in range(1, 41):
        chapter_id = f"ch-{number:02d}"
        data = json.loads((SRC / f"{chapter_id}.json").read_text(encoding="utf-8"))
        buf = [
            f"CAPITULUM {data.get('roman') or number} — {data.get('latinTitle') or ''}",
            f"English title: {data.get('title') or ''}",
            "=" * 72,
            "",
        ]
        section = "READING"
        buf.append(f"===== {section} =====")
        for block in data.get("blocks", []):
            if block.get("t") == "h":
                section = block.get("text", "").strip() or "SECTION"
                buf.append("")
                buf.append(f"===== {section} =====")
            else:
                text = block.get("text", "").strip()
                if text:
                    buf.append(text)
        path = OUT / f"ch-{number:02d}.txt"
        path.write_text("\n".join(buf) + "\n", encoding="utf-8")
        print(path.relative_to(ROOT))

if __name__ == "__main__":
    main()
