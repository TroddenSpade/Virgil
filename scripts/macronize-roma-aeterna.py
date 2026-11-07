#!/usr/bin/env python3
"""Add missing macra to the Roma Aeterna readings and vocabulary.

The public Alatius Latin Macronizer is used as a reference.  Existing macra in
the authored files are trusted; only words that currently have no macron are
filled in from the macronizer.  Chapters whose readings have no macra at all
(currently XLII-XLIV) are macronized wholesale.

Usage:
    python3 scripts/macronize-roma-aeterna.py [--chapters 42,43,44] [--all]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "sources" / "roma-aeterna" / "content.json"
OUT = ROOT / "sources" / "roma-aeterna" / "macronized.json"
CACHE = ROOT / "sources" / "roma-aeterna" / "macronizer-cache.json"
API = "https://alatius.com/macronizer/"
MACRA = set("āēīōūȳĀĒĪŌŪȲ")


def has_macra(s: str) -> bool:
    return any(ch in MACRA for ch in s)


def strip_marks(s: str) -> str:
    return "".join(
        ch for ch in unicodedata.normalize("NFD", s)
        if not unicodedata.combining(ch)
    )


def tokenize(s: str):
    return re.split(r"(\s+|[^\w\u00c0-\u024f]+)", s)


def merge_missing(old: str, new: str) -> str:
    """Fill macra only in words that currently have none."""
    old_parts = tokenize(old)
    new_parts = tokenize(new)
    if len(old_parts) != len(new_parts):
        return old
    out = []
    for a, b in zip(old_parts, new_parts):
        if not a or a.isspace() or not any(c.isalpha() for c in a):
            out.append(a)
        elif has_macra(a):
            out.append(a)
        elif strip_marks(a).lower() == strip_marks(b).lower():
            out.append(b)
        else:
            out.append(a)
    return "".join(out)


_cache = {}
if CACHE.exists():
    try:
        _cache = json.loads(CACHE.read_text(encoding="utf-8"))
    except Exception:
        _cache = {}


def macronize(text: str) -> str:
    key = str(len(text)) + ":" + text[:120] + ":" + text[-120:]
    if key in _cache:
        return _cache[key]
    data = urllib.parse.urlencode({
        "textcontent": text,
        "macronize": "on",
        "utov": "on",
    }).encode()
    req = urllib.request.Request(API, data=data, headers={"User-Agent": "Virgil-content-audit/1.0"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        html = resp.read().decode("utf-8", "replace")
    soup = BeautifulSoup(html, "html.parser")
    div = soup.find("div", id="selectme")
    if not div:
        raise RuntimeError("macronizer returned no result")
    result = div.get_text()
    _cache[key] = result
    CACHE.write_text(json.dumps(_cache, ensure_ascii=False), encoding="utf-8")
    return result


def macronize_batch(items: list[str]) -> list[str]:
    if not items:
        return []
    joined = "\n\n".join(items)
    out = macronize(joined)
    parts = out.split("\n\n")
    if len(parts) != len(items):
        # Fall back to individual requests rather than mis-align paragraphs.
        return [macronize(x) for x in items]
    return parts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--chapters", default="42,43,44")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--vocab", action="store_true", help="also macronize vocabulary lemmas")
    args = ap.parse_args()
    chapters = json.loads(SRC.read_text(encoding="utf-8"))
    wanted = {int(x) for x in args.chapters.split(",") if x.strip()} if not args.all else None

    updated = []
    for ch in chapters:
        if wanted is not None and ch["number"] not in wanted:
            continue
        print(f"chapter {ch['number']} …", flush=True)
        # Reading paragraphs: send the whole chapter in one request.
        all_paras = []
        spans = []
        for reading in ch["readings"]:
            start = len(all_paras)
            all_paras.extend(reading["paragraphs"])
            spans.append((reading, start, len(all_paras)))
        new_all = macronize_batch(all_paras)
        zero = sum(1 for p in all_paras if not has_macra(p)) == len(all_paras)
        for reading, start, end in spans:
            old = reading["paragraphs"]
            new = new_all[start:end]
            if zero:
                reading["paragraphs"] = new
            else:
                reading["paragraphs"] = [merge_missing(a, b) for a, b in zip(old, new)]

        # Vocabulary lemmas are deliberately left alone: the macronizer does
        # not understand dictionary format (e.g. "spolia, -orum").
        if args.vocab:
            lemmas = [w["latin"] for w in ch.get("vocabulary", [])]
            new_lemmas = macronize_batch(lemmas)
            for w, old, new in zip(ch.get("vocabulary", []), lemmas, new_lemmas):
                w["latin"] = new if not has_macra(old) else old

        updated.append(ch)

    OUT.write_text(json.dumps(updated, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUT} ({len(updated)} chapters)")


if __name__ == "__main__":
    main()
