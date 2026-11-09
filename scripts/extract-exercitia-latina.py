#!/usr/bin/env python3
"""Dump the Exercitia Latina I reference blocks into per-chapter authoring files."""
from __future__ import annotations
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "sources" / "exercitia"
OUT = ROOT / "sources" / "exercitia-latina"

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for number in range(1, 36):
        chapter_id = f"cap-{number:02d}"
        data = json.loads((SRC / f"{chapter_id}.json").read_text(encoding="utf-8"))
        buf = [
            f"CAPITULUM {data.get('roman') or number} — {data.get('latinTitle') or ''}",
            f"English title: {data.get('title') or ''}",
            "=" * 72,
            "",
            "===== MARGIN (vocabulary and grammar hints) =====",
        ]
        for item in data.get("margin", []):
            buf.append(item)
        buf.append("")
        for block in data.get("blocks", []):
            if block.get("t") == "h":
                buf.append("")
                buf.append(f"===== {block.get('text','').strip()} =====")
            elif block.get("t") == "li":
                buf.append("- " + block.get("text", "").strip())
            else:
                text = block.get("text", "").strip()
                if text:
                    buf.append(text)
        path = OUT / f"ch-{number:02d}.txt"
        path.write_text("\n".join(buf) + "\n", encoding="utf-8")
        print(path.relative_to(ROOT))

if __name__ == "__main__":
    main()
