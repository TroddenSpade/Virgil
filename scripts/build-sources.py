#!/usr/bin/env python3
"""
Build browsable "reference book" content for the Virgil library.

Reads the raw text extracted from the source editions (in sources/raw/) and
emits, for each book:

  public/sources/<slug>/index.json      -- table of contents
  public/sources/<slug>/<id>.json       -- one chapter of reading blocks
  src/data/sources.generated.js         -- lightweight metadata + TOC for the UI

The heavy reading text is served as static JSON (fetched on demand) so it never
ends up in the app bundle.

Usage:  python3 scripts/build-sources.py [slug ...]
"""
from __future__ import annotations

import html
import json
import re
import subprocess
import sys
import unicodedata
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "sources" / "raw"
OUT = ROOT / "public" / "sources"
GEN = ROOT / "src" / "data" / "sources.generated.js"

ROMAN = [
    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
    "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
    "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX",
    "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV",
]


# --------------------------------------------------------------------------- #
# helpers
# --------------------------------------------------------------------------- #

def read_lines(name: str) -> list[str]:
    text = (RAW / name).read_text(encoding="utf-8", errors="replace")
    text = normalise_glyphs(text)
    # drop control characters (form feeds mark PDF page breaks)
    text = "".join(c for c in text if c == "\n" or c >= " ")
    return text.splitlines()


LIGATURES = {
    "\ufb00": "ff", "\ufb01": "fi", "\ufb02": "fl",
    "\ufb03": "ffi", "\ufb04": "ffl", "\ufb05": "st", "\ufb06": "st",
}


def normalise_glyphs(s: str) -> str:
    for a, b in LIGATURES.items():
        s = s.replace(a, b)
    return s


def clean_inline(s: str) -> str:
    s = s.replace("\u00ad", "")            # soft hyphen
    s = re.sub(r"\s+", " ", s).strip()
    return s


def dehyphenate(paragraph: str) -> str:
    # join words broken across a line: "Grae-\ncia" -> "Graecia"
    return re.sub(r"(\w)-\s+(\w)", r"\1\2", paragraph)


def strip_noise_lines(lines: list[str]) -> list[str]:
    """Drop pure page-number lines and obvious running furniture."""
    out = []
    for ln in lines:
        s = ln.strip()
        if not s:
            out.append("")
            continue
        if re.fullmatch(r"\d{1,4}", s):
            continue
        out.append(ln)
    return out


HEADING_HINTS = re.compile(
    r"^("
    r"Rēs Grammaticae Novae|Lēctiō\b|"
    r"[A-Z][A-Za-zāēīōūȳĀĒĪŌŪȲ'’\- ]{2,60}$"
    r")"
)


def is_heading(text: str, patterns: list[re.Pattern]) -> bool:
    for p in patterns:
        if p.match(text):
            return True
    return False


def reflow(entries: list[tuple[str, int]], heading_patterns: list[re.Pattern]) -> list[dict]:
    """Merge cleaned lines into heading / paragraph blocks.

    Lines that share the same indentation belong to one paragraph; a change of
    indentation (or a blank line) starts a new one.
    """
    blocks: list[dict] = []
    para: list[str] = []
    pid: int | None = None

    def flush():
        nonlocal pid
        if para:
            text = dehyphenate(" ".join(para))
            blocks.append({"t": "p", "text": clean_inline(text)})
            para.clear()
        pid = None

    for raw, indent in entries:
        # A line with a wide internal gap is a vocabulary entry or a table row
        # (word / meaning, paradigm columns, a table of contents entry); keep it
        # on its own line instead of running it into the surrounding prose.
        is_row = re.search(r"\S[ \t]{3,}\S", raw) is not None
        text = clean_inline(raw)
        if not text:
            flush()
            continue
        if is_heading(text, heading_patterns):
            flush()
            blocks.append({"t": "h", "text": text})
            continue
        if is_row:
            flush()
            blocks.append({"t": "p", "text": text})
            continue
        if not para:
            para.append(text)
            pid = indent
        elif indent == pid:
            para.append(text)
        else:
            flush()
            para.append(text)
            pid = indent
    flush()
    return blocks


def write_book(slug: str, meta: dict) -> dict:
    d = OUT / slug
    d.mkdir(parents=True, exist_ok=True)
    (d / "index.json").write_text(
        json.dumps({"slug": slug, **meta["index"]}, ensure_ascii=False, indent=0),
        encoding="utf-8",
    )
    for ch in meta["chapters"]:
        (d / f"{ch['id']}.json").write_text(
            json.dumps(ch, ensure_ascii=False), encoding="utf-8"
        )
    return {
        "slug": slug,
        "title": meta["index"]["title"],
        "latinTitle": meta["index"].get("latinTitle"),
        "author": meta["index"].get("author"),
        "chapters": [
            {"id": c["id"], "number": c.get("number"), "roman": c.get("roman"),
             "title": c["title"], "latinTitle": c.get("latinTitle")}
            for c in meta["chapters"]
        ],
    }


# --------------------------------------------------------------------------- #
# Familia Romana (2nd ed.) — two-column pages, extracted via word coordinates
# --------------------------------------------------------------------------- #

FR_PDF = None
for base in (ROOT / "books", ROOT):
    for p in base.glob("*.pdf"):
        if "Familia Romana" in p.name and "Second Edition" in p.name:
            FR_PDF = p
            break
    if FR_PDF:
        break


def fr_words(pages: tuple[int, int] | None = None):
    """Yield (page_no, page_width, [ (xMin,yMin,text) ... ]) from the bbox dump."""
    cmd = ["pdftotext", "-bbox"]
    if pages:
        cmd += ["-f", str(pages[0]), "-l", str(pages[1])]
    cmd += [str(FR_PDF), "-"]
    xml = subprocess.run(cmd, capture_output=True, text=True, check=True).stdout

    for m in re.finditer(r'<page width="([\d.]+)" height="([\d.]+)">(.*?)</page>', xml, re.S):
        width = float(m.group(1))
        body = m.group(3)
        words = []
        for w in re.finditer(
            r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="[\d.]+" yMax="[\d.]+">(.*?)</word>',
            body,
        ):
            words.append((float(w.group(1)), float(w.group(2)), html.unescape(w.group(3))))
        yield width, words


def group_lines(words, tol=3.0):
    """Cluster words into visual lines by yMin."""
    lines: list[list] = []
    for x, y, t in sorted(words, key=lambda w: (w[1], w[0])):
        placed = False
        for ln in lines:
            if abs(ln[0] - y) <= tol:
                ln[1].append((x, t))
                placed = True
                break
        if not placed:
            lines.append([y, [(x, t)]])
    for ln in lines:
        ln[1].sort()
    return [(y, items) for y, items in sorted(lines, key=lambda l: l[0])]


FR_TITLES = {
    1: ("IMPERIVM ROMANVM", "The Roman Empire"), 2: ("FAMILIA ROMANA", "The Roman Family"),
    3: ("PVER IMPROBVS", "The Naughty Boy"), 4: ("DOMINVS ET SERVI", "Master and Slaves"),
    5: ("VILLA ET HORTVS", "The Villa and the Garden"), 6: ("VIA LATINA", "The Latin Road"),
    7: ("PVELLA ET ROSA", "The Girl and the Rose"), 8: ("TABERNA ROMANA", "The Roman Tavern"),
    9: ("PASTOR ET OVES", "The Shepherd and the Sheep"), 10: ("BESTIAE ET HOMINES", "Beasts and Men"),
    11: ("CORPVS HVMANVM", "The Human Body"), 12: ("MILES ROMANVS", "The Roman Soldier"),
    13: ("ANNVS ET MENSES", "The Year and the Months"), 14: ("NOVVS DIES", "A New Day"),
    15: ("MAGISTER ET DISCIPVLI", "The Teacher and the Pupils"), 16: ("TEMPESTAS", "The Storm"),
    17: ("NVMERI DIFFICILES", "Difficult Numbers"), 18: ("LITTERAE LATINAE", "Latin Letters"),
    19: ("MARITVS ET VXOR", "Husband and Wife"), 20: ("PARENTES", "Parents"),
    21: ("PVGNA DISCIPVLORVM", "The Pupils’ Fight"), 22: ("CAVE CANEM", "Beware of the Dog"),
    23: ("EPISTVLA MAGISTRI", "The Teacher’s Letter"), 24: ("PVER AEGROTVS", "The Sick Boy"),
    25: ("THESEVS ET MINOTAVRVS", "Theseus and the Minotaur"), 26: ("DAEDALVS ET ICARVS", "Daedalus and Icarus"),
    27: ("RES RVSTICAE", "Country Matters"), 28: ("PERICVLA MARIS", "Dangers of the Sea"),
    29: ("NAVIGARE NECESSE EST", "To Sail Is Necessary"), 30: ("CONVIVIVM", "The Dinner Party"),
    31: ("INTER POCVLA", "Between the Cups"), 32: ("CLASSIS ROMANA", "The Roman Fleet"),
    33: ("EXERCITVS ROMANVS", "The Roman Army"), 34: ("DE ARTE POETICA", "On the Art of Poetry"),
    35: ("ARS GRAMMATICA", "The Art of Grammar"),
}

FR_ORD = {
    "PRIMVM": 1, "SECVNDVM": 2, "TERTIVM": 3, "QVARTVM": 4, "QVINTVM": 5, "SEXTVM": 6,
    "SEPTIMVM": 7, "OCTAVM": 8, "OCTAWM": 8, "NONVM": 9, "DECIMVM": 10, "VNDECIMVM": 11, "DVODECIMVM": 12,
    "TERTIVM DECIMVM": 13, "QVARTVM DECIMVM": 14, "QVINTVM DECIMVM": 15, "SEXTVM DECIMVM": 16,
    "SEPTIMVM DECIMVM": 17, "DVODEVICESIMVM": 18, "VNDEVICESIMVM": 19, "VICESIMVM": 20,
    "VNVM ET VICESIMVM": 21, "ALTERVM ET VICESIMVM": 22, "VICESIMVM TERTIVM": 23,
    "VICESIMVM QVARTVM": 24, "VICESIMVM QVINTVM": 25, "VICESIMVM SEXTVM": 26,
    "VICESIMVM SEPTIMVM": 27, "DVODETRICESIMVM": 28, "VNDETRICESIMVM": 29, "TRICESIMVM": 30,
    "VNVM ET TRICESIMVM": 31, "ALTERVM ET TRICESIMVM": 32, "TRICESIMVM TERTIVM": 33,
    "TRICESIMVM QVARTVM": 34, "TRICESIMVM QVINTVM": 35,
}


def ordinal_to_int(s: str) -> int | None:
    return FR_ORD.get(re.sub(r"\s+", " ", s.strip().upper()))


def fr_is_heading(text: str) -> bool:
    letters = [c for c in text if c.isalpha()]
    if len(letters) < 3:
        return False
    upper = sum(1 for c in letters if c.isupper())
    return upper / len(letters) > 0.85 and len(text) <= 80


def build_familia_romana() -> dict:
    chapters: dict[int, dict] = {}
    order: list[int] = []
    cur = None
    page_num = 0

    for width, words in fr_words():
        page_num += 1

        # Chapter openings are centred independently of the body columns, so
        # detect them from the unfiltered page before removing the margin.
        for _y, items in group_lines(words):
            head = clean_inline(" ".join(t for _, t in items))
            if not head.upper().startswith("CAPITVLVM "):
                continue
            m = re.match(r"^CAPITVLVM\s+(.+?)(?:\s+CAP\.\s*:?[IVXL]+)?$", head, re.I)
            if m:
                num = ordinal_to_int(m.group(1))
                if num and num not in chapters:
                    latin, title = FR_TITLES[num]
                    cur = {"id": f"cap-{num:02d}", "number": num, "roman": ROMAN[num],
                           "title": title, "latinTitle": latin, "lines": []}
                    chapters[num] = cur
                    order.append(num)
            break

        odd = page_num % 2 == 1
        # The marginal notes alternate sides: right on recto (odd) pages,
        # left on verso (even) pages. Keep only the main text column.
        edge = (0.69 if odd else 0.30) * width
        main = [(x, y, t) for (x, y, t) in words if (x < edge if odd else x >= edge)]

        cleaned: list[tuple[float, float, str]] = []
        for y, items in group_lines(main):
            items = list(items)
            if odd and len(items) > 1:
                x0, t0 = items[0]
                rest = " ".join(t for _, t in items[1:])
                if x0 < 48 and len(t0) <= 3 and (t0.isdigit() or not fr_is_heading(rest)):
                    items = items[1:]
            if (not odd) and len(items) > 1:
                x1, t1 = items[-1]
                if x1 > 0.82 * width and len(t1) <= 3 and t1.isdigit():
                    items = items[:-1]
            if not items:
                continue
            text = clean_inline(" ".join(t for _, t in items))
            if text:
                cleaned.append((y, items[0][0], text))
        if not cleaned:
            continue

        # Continuation indent for this page = most common x0 among text lines.
        buckets: dict[int, int] = {}
        for _y, x0, text in cleaned:
            if fr_is_heading(text) or text.upper().startswith(("CAPITVLVM ", "CAP. ")):
                continue
            b = round(x0 / 2) * 2
            buckets[b] = buckets.get(b, 0) + 1
        base = max(buckets, key=buckets.get) if buckets else min(c[1] for c in cleaned)

        for _y, x0, text in cleaned:
            up = text.upper()
            if up.startswith("CAPITVLVM "):
                num = ordinal_to_int(text[len("CAPITVLVM "):])
                if num and num not in chapters:
                    latin, title = FR_TITLES[num]
                    cur = {"id": f"cap-{num:02d}", "number": num, "roman": ROMAN[num],
                           "title": title, "latinTitle": latin, "lines": []}
                    chapters[num] = cur
                    order.append(num)
                continue
            if up.startswith("CAP. "):
                continue
            if re.fullmatch(r"\d{1,3}", text):
                continue
            if cur is None:
                continue
            if fr_is_heading(text):
                cur["lines"].append(("h", text))
            elif x0 > base + 6:
                cur["lines"].append(("P", text))     # indented → new paragraph
            else:
                cur["lines"].append(("p", text))     # continuation

    for num in order:
        ch = chapters[num]
        blocks: list[dict] = []
        para: list[str] = []

        def flush():
            if para:
                blocks.append({"t": "p", "text": clean_inline(dehyphenate(" ".join(para)))})
                para.clear()

        for kind, text in ch["lines"]:
            if kind == "h":
                flush()
                blocks.append({"t": "h", "text": text})
            elif kind == "P":
                flush()
                para.append(text)
            else:
                para.append(text)
        flush()
        ch["blocks"] = blocks
        ch.pop("lines", None)

    return {
        "index": {
            "title": "Lingua Latina: Pars I — Familia Romana",
            "latinTitle": "LINGVA LATINA PER SE ILLVSTRATA · PARS I",
            "author": "Hans H. Ørberg",
        },
        "chapters": [chapters[n] for n in order],
    }


def roman_to_int(s: str) -> int | None:
    for i, r in enumerate(ROMAN):
        if r == s:
            return i
    return None


# --------------------------------------------------------------------------- #
# Shared: parse a book whose chapters are delimited by title lines
# --------------------------------------------------------------------------- #

def _find_heading(lines: list[str], phrase: str, start: int) -> int | None:
    """Index of a line that consists of exactly this heading (case/accent-insensitive)."""
    key = re.sub(r"\s+", " ", fold(phrase)).strip()
    for i in range(start, len(lines)):
        if re.sub(r"\s+", " ", fold(lines[i])).strip() == key:
            return i
    return None


def _is_furniture_line(s: str, titles_lc: set[str]) -> bool:
    """True for running heads that merely repeat a chapter/part title."""
    core = re.sub(r"\d+", "", fold(s))
    core = re.sub(r"\s+", " ", core).strip(" .·—-")
    if len(core) < 12:
        return False
    return any(core in t or t in core for t in titles_lc if len(t) >= 12)


def _is_running_head(s: str, title: str, titles_lc: set[str]) -> bool:
    """True for a page number glued to a chapter title, e.g. "406 Gerunds I".

    These are printed page headers, kept in the text layer but absent from
    the book's body; unlike `_is_furniture_line` the titles here can be short.
    """
    if not any(c.isdigit() for c in s):
        return False
    core = re.sub(r"^\d{1,3}\s+", "", s)
    core = re.sub(r"\s+\d{1,3}$", "", core)
    core = core.strip(" .·—-")
    if core == s.strip(" .·—-"):      # no page number at either edge
        return False
    fc = fold(core)
    if not fc:
        return False
    return fc == fold(title).strip() or fc in titles_lc


_HEADING_CELLS = {"word", "part of speech"}


def _is_heading_row(row: list[str]) -> bool:
    """True for a table's printed column headings, e.g. a row of "Word /
    Part of speech" pairs repeated at each page break (chapter 64's Key)."""
    cells = [c.strip().lower() for c in row if c.strip()]
    return bool(cells) and all(c in _HEADING_CELLS for c in cells)


def _looks_like_page_header(s: str) -> bool:
    """True for a printed page header: a short label with a page number glued
    to one edge, e.g. "406 Gerunds I" or "Exercise A 443"."""
    core = re.sub(r"^\d{1,3}\s+", "", s)
    core = re.sub(r"\s+\d{1,3}$", "", core)
    if core == s:
        return False
    core = core.strip(" .·—-")
    return bool(core) and len(core) <= 32 and not _phrase_end(core)


def _delimited_sections(lines, toc: list[tuple[int, str, str]], head_re_builder,
                        extra_titles: list[str] | None = None,
                        back_sections: list[tuple[str, str, str, str]] | None = None):
    """Locate where every chapter (and back-matter section) starts in `lines`.

    Returns (sections, titles_lc): sections is a list of dicts with keys
    line/id/number/roman/title; titles_lc is the lower-cased title set used to
    recognise running heads.
    """
    titles_lc = {fold(t).strip() for _, _, t in toc}
    for t in (extra_titles or []):
        titles_lc.add(fold(t).strip())
    for _sid, _roman, t, _phrase in (back_sections or []):
        titles_lc.add(fold(t).strip())

    # find the line index where each chapter body starts
    starts: list[tuple[int, int, str, str]] = []
    search_from = 0
    for number, roman, title in toc:
        rx = head_re_builder(number, title)
        found = None
        for i in range(search_from, len(lines)):
            s = lines[i].strip()
            if not rx.match(fold(s)):
                continue
            # skip table-of-contents / running-header lines (they end in a page number)
            if re.search(r"\d\s*$", s):
                continue
            found = i
            break
        if found is None:
            continue
        starts.append((found, number, roman, title))
        search_from = found + 1

    # Locate the back matter, each section starting at its own heading.
    last_start = starts[-1][0] if starts else 0
    back: list[tuple[int, str, str, str]] = []
    search_from = last_start
    for sid, roman, title, phrase in (back_sections or []):
        idx = _find_heading(lines, phrase, search_from)
        if idx is None:
            continue
        back.append((idx, sid, roman, title))
        search_from = idx + 1

    # Chapters and back matter in reading order. The final chapter now ends
    # where the first back section begins, instead of swallowing all of it.
    secs = [(ln, f"ch-{n:02d}", n, r, t) for ln, n, r, t in starts]
    secs += [(ln, sid, None, r, t) for ln, sid, r, t in back]
    secs.sort(key=lambda s: s[0])
    out = [{"line": ln, "id": sid, "number": n, "roman": r, "title": t}
           for ln, sid, n, r, t in secs]
    return out, titles_lc


def build_delimited(slug, lines, toc: list[tuple[int, str, str]], head_re_builder,
                    noise_res: list[re.Pattern], section_types=None,
                    extra_titles: list[str] | None = None,
                    back_sections: list[tuple[str, str, str, str]] | None = None) -> dict:
    """toc: list of (number, roman, title). head_re_builder(number,title)->compiled re.

    back_sections: (id, roman, title, heading) for the matter that follows the
    final chapter (appendices, vocabularies, index...). Each becomes its own
    browsable section instead of being folded into the last chapter."""
    sections, _titles = _delimited_sections(lines, toc, head_re_builder, extra_titles, back_sections)

    chapters = []
    for idx, sec in enumerate(sections):
        end = sections[idx + 1]["line"] if idx + 1 < len(sections) else len(lines)
        body = lines[sec["line"] + 1:end]
        entries: list[tuple[str, int]] = []
        for ln in strip_noise_lines(body):
            if not ln.strip():
                entries.append(("", 0))
                continue
            if any(r.match(ln) for r in noise_res):
                continue
            if _is_furniture_line(ln, _titles):
                continue
            indent = len(ln) - len(ln.lstrip(" "))
            entries.append((ln, indent))
        blocks = reflow(entries, section_types or [])
        chapters.append(
            {"id": sec["id"], "number": sec["number"], "roman": sec["roman"],
             "title": sec["title"], "blocks": blocks}
        )

    return {
        "index": {"title": slug},
        "chapters": chapters,
    }


# --------------------------------------------------------------------------- #
# Dickey — Learn Latin from the Romans
# --------------------------------------------------------------------------- #

DICKEY_TOC = [
    (1, "I", "Verbs: Inflection and Word Order"),
    (2, "II", "Nouns: Nominative, Vocative, and Accusative of First and Second Declensions"),
    (3, "III", "Adjectives: Gender, Agreement, Neuters, and Vocabulary Format"),
    (4, "IV", "Tenses: Future, Perfect, and Principal Parts"),
    (5, "V", "Genitive Case, Sum"),
    (6, "VI", "First and Second Conjugations, Perfect Participles"),
    (7, "VII", "Dative Case, Possum"),
    (8, "VIII", "Second Declension in -r and -ius, Substantivization"),
    (9, "IX", "Ablative Case, Prepositions, Eō"),
    (10, "X", "Demonstratives and Imperatives"),
    (11, "XI", "Reading Texts"),
    (12, "XII", "Personal Pronouns, Partitive and Objective Genitives"),
    (13, "XIII", "Present Subjunctive, Quis"),
    (14, "XIV", "Third Declension"),
    (15, "XV", "Subordination, Imperfect Subjunctive, Purpose Clauses"),
    (16, "XVI", "Sequence of Tenses"),
    (17, "XVII", "Fourth and Mixed Conjugations"),
    (18, "XVIII", "Reading Practice"),
    (19, "XIX", "Infinitives and Indirect Statement"),
    (20, "XX", "Reflexives"),
    (21, "XXI", "Third-Declension Adjectives"),
    (22, "XXII", "Reading Practice"),
    (23, "XXIII", "Demonstratives, Ablative of Agent"),
    (24, "XXIV", "Participles"),
    (25, "XXV", "Relative Clauses and Volō"),
    (26, "XXVI", "Reading Practice"),
    (27, "XXVII", "Deponent Verbs: Forms from First Two Principal Parts"),
    (28, "XXVIII", "Indirect Commands"),
    (29, "XXIX", "Deponent Verbs: Perfect-Stem Forms"),
    (30, "XXX", "Fear Clauses and Long Sentences"),
    (31, "XXXI", "Reading Poetry"),
    (32, "XXXII", "Passive Voice, Agent and Means"),
    (33, "XXXIII", "Result Clauses"),
    (34, "XXXIV", "Fourth and Fifth Declensions, Uses of the Ablative"),
    (35, "XXXV", "Time and Place"),
    (36, "XXXVI", "Reading Practice"),
    (37, "XXXVII", "Nōlō and mālō"),
    (38, "XXXVIII", "Regular Comparison"),
    (39, "XXXIX", "Imperfect Tense"),
    (40, "XL", "Irregular Comparison, Negatives"),
    (41, "XLI", "Gerundives"),
    (42, "XLII", "Reading Practice"),
    (43, "XLIII", "Adverbs"),
    (44, "XLIV", "Pluperfect and Future Perfect Tenses"),
    (45, "XLV", "Impersonal Verbs"),
    (46, "XLVI", "Perfect and Pluperfect Subjunctives"),
    (47, "XLVII", "More Subordinate Clauses"),
    (48, "XLVIII", "Reading Practice"),
    (49, "XLIX", "Ferō, Roman Names"),
    (50, "L", "Conditional Clauses"),
    (51, "LI", "Fīō, Conditionals Continued"),
    (52, "LII", "Iste and Ipse"),
    (53, "LIII", "Reading Practice"),
    (54, "LIV", "Indirect Questions"),
    (55, "LV", "Numbers"),
    (56, "LVI", "Relative Clauses with the Subjunctive, Participle Overview"),
    (57, "LVII", "Ablative Absolute"),
    (58, "LVIII", "Īdem, Expressions of Price and Value"),
    (59, "LIX", "Reading Practice"),
    (60, "LX", "Gerunds I"),
    (61, "LXI", "Gerunds II"),
    (62, "LXII", "How to Use the Appendices"),
    (63, "LXIII", "Further Grammatical Explanations and Exercises"),
    (64, "LXIV", "Key to Further Exercises"),
    (65, "LXV", "Alphabetical Glossary of Grammatical Terminology"),
    (66, "LXVI", "The Metre of Virgil’s Aeneid"),
]


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip().lower()


def fold(s: str) -> str:
    """Lower-case and strip combining diacritics so macrons don't break matching."""
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


def dickey_head(number, title):
    # "1           Verbs: Inflection and Word Order" (titles may wrap onto a
    # second line, so match on the number + first word only)
    first = re.escape(fold(title.split()[0]))
    return re.compile(rf"^{number}\s{{2,}}{first}")


DICKEY_NOISE = [
    re.compile(r"^\d{1,3}\s*$"),
    re.compile(r"^\s*\d{1,3}\s+[A-Z].{0,60}\s+\d{1,3}\s*$"),   # running header "3 Vowels   5"
]


# --------------------------------------------------------------------------- #
# Dickey — Learn Latin from the Romans: faithful structural parse
# --------------------------------------------------------------------------- #
# The printed book's layout is preserved in the PDF text layer as column
# positions: cells of a paradigm table, vocabulary grid, or two-column exercise
# are separated by runs of 3+ spaces, and wrapped cells sit at a deeper indent
# than the column they belong to.  This parser reads those positions and emits
# the book's own block types:
#
#   h        "1.1 Inflection" section heading
#   p        ordinary paragraph
#   passage  italic Latin passage of a reading chapter (dialogue turns split
#            at letter-spaced speakers like "m a r c u s :")
#   practice the bold "Practice" label opening an exercise region
#   ex       one lettered exercise instruction ({"letter": "E", "text": ...})
#   li       one numbered exercise item ({"n": 1, "text": ...}, first item
#            of a multi-column exercise carries "cols": N)
#   table    paradigm/vocabulary grid ({"header": [...]|None, "rows": [[..]]})
#   vhead    bold "Nouns"/"Verbs"/... label inside a Vocabulary to Learn list
#   vlabel   "Vocabulary (in order of first appearance...)" label
#   exlabel  "Exercise A" label of the appendix answer key
#   note     numbered footnote ({"n": 1, "text": ...})
#   term     glossary entry ({"term": "Ablative", "text": ...})

DICKEY_SECTION_HEAD = re.compile(r"^(\d{1,2}\.\d{1,2})\s+(\S.*)$")
# a section heading glued to a right-aligned page number: running head
DICKEY_RUNNING_SECTION = re.compile(r"^\s{8,}\d{1,2}\.\d{1,2}\s+\S.*\s+\d{1,3}\s*$")
DICKEY_EXERCISE_WORD = re.compile(r"^Exercise\s+\S+$")
DICKEY_LETTER = re.compile(r"^([A-Z])\s+(\S.*)$")
DICKEY_ITEM = re.compile(r"^(\d{1,2})\s+(\S.*)$")
# speaker labels of the colloquium dialogues.  Two shapes occur in the PDF
# text layer: letter-spaced ("m a r c u s :"), which is unambiguous, and
# compact ("marcus:", "slave :", "father (to slaves):", "school o fficial :"),
# which is only trusted when speech follows the colon on the same line.
DICKEY_SPEAKER_SP = re.compile(r"^(?:[a-zāēīōūȳ][ \t]+){1,}[a-zāēīōūȳ][ \t]*:")
DICKEY_SPEAKER_CP = re.compile(
    r"^[a-zāēīōūȳ]{1,14}(?:[ \t]+[a-zāēīōūȳ]{1,14}){0,3}"
    r"[ \t]*(?:\([^)]{0,48}\))?[ \t]*:(?=[ \t]+\S)")
DICKEY_SPEAKER = re.compile(
    r"^(?:[a-zāēīōūȳ][ \t]+){1,}[a-zāēīōūȳ][ \t]*:"
    r"|^[a-zāēīōūȳ]{1,14}(?:[ \t]+[a-zāēīōūȳ]{1,14}){0,3}"
    r"[ \t]*(?:\([^)]{0,48}\))?[ \t]*:(?=[ \t]+\S)")


def dickey_speaker(label: str) -> str:
    """Normalise a matched speaker label: 'm a r c u s' -> 'marcus'."""
    lab = label.rstrip().rstrip(":").rstrip()
    words = lab.split()
    if words and all(len(w) == 1 for w in words):
        return "".join(words)
    return re.sub(r"[ \t]+", " ", lab)
DICKEY_VOCAB_HEADS = {
    "nouns", "adjectives", "verbs", "other words", "prepositions", "pronouns",
    "adverbs", "expressions", "numerals", "conjunctions", "interjections",
    "noun", "adjective", "verb", "other word", "preposition", "pronoun",
    "adverb", "expression", "numeral", "conjunction", "interjection",
}
DICKEY_GLOSSARY_TERM = re.compile(r"^([A-Z][A-Za-zāēīōūȳ ()’'–-]{1,48}?):\s+(\S.*)$")
TERMINAL_PUNCT = ".?!:’'\")"
_ABBREV_TAILS = ("i.e.", "e.g.", "cf.", "viz.", "etc.")


def _phrase_end(text: str) -> bool:
    """True when a cell's text ends a phrase; an abbreviation tail does not."""
    t = text.rstrip() if text else ""
    return bool(t) and t[-1] in TERMINAL_PUNCT and not t.lower().endswith(_ABBREV_TAILS)


def _unfinished(text: str) -> bool:
    """True when a cell's text leaves a quote or parenthesis open and does
    not itself end a phrase: the next cell in that column continues it."""
    if not text or _phrase_end(text):
        return False
    return text.count("‘") > text.count("’") or text.count("(") > text.count(")")
ROW_TOL = 2      # a cell this close to a column start opens a new entry
MATCH_TOL = 6    # a row-open cell snaps onto a column start within this
REBASE_TOL = 12  # a page break can shift a grid sideways by this much
PARA_MARGIN = 70  # a justified line reaches at least this column
DICKEY_LONG_LINE = 70

DICKEY_EXTRA_TITLES = [
    "PART I", "PART II", "PART III", "PART IV", "PART V",
    "Introduction: What Latin Is", "The Pronunciation of Latin",
    "Preface: What This Textbook Is", "Appendices", "Contents",
    "Cumulative Vocabulary, Latin to English", "Cumulative Vocabulary, English to Latin",
    "Index of Grammatical Topics Covered", "Index of Latin Passages Included",
]

DICKEY_BACK_SECTIONS = [
    ("cumulative-vocabulary-latin-english", "L→E",
     "Cumulative Vocabulary, Latin to English", "Cumulative Vocabulary, Latin to English"),
    ("cumulative-vocabulary-english-latin", "E→L",
     "Cumulative Vocabulary, English to Latin", "Cumulative Vocabulary, English to Latin"),
    ("index-of-grammatical-topics", "Topics",
     "Index of Grammatical Topics Covered", "Index of Grammatical Topics Covered"),
    ("index-of-latin-passages", "Idx",
     "Index of Latin Passages Included", "Index of Latin Passages Included"),
]


def split_cells(raw: str) -> list[tuple[int, str]]:
    """Split a line into (position, text) cells at runs of 3+ spaces."""
    cells = []
    pos = 0
    for m in re.finditer(r"[ \t]{3,}", raw):
        seg = raw[pos:m.start()]
        if seg.strip():
            cells.append((pos + len(seg) - len(seg.lstrip()), seg.strip()))
        pos = m.end()
    seg = raw[pos:]
    if seg.strip():
        cells.append((pos + len(seg) - len(seg.lstrip()), seg.strip()))
    return cells


def _incomplete(text: str) -> bool:
    """A label whose text does not end a sentence may continue on the next line."""
    return not (text and text.rstrip()[-1] in TERMINAL_PUNCT)


def read_lines_pages(name: str) -> list[str]:
    """Like read_lines, but keeps form feeds so page breaks can be detected."""
    text = (RAW / name).read_text(encoding="utf-8", errors="replace")
    text = normalise_glyphs(text)
    text = "".join(c for c in text if c == "\n" or c >= " " or c == "\x0c")
    return text.split("\n")


def dickey_blocks(body: list[str], title: str, titles_lc: set[str],
                  number: int | None) -> list[dict]:
    """Parse one chapter body into the book's own typed blocks."""
    ftitle = fold(title)
    chapter_reading = "reading" in ftitle or "aeneid" in ftitle
    reading = False       # section-level: heads containing Reading/Colloquium
    glossary = "glossary" in ftitle
    vocab = number is None and "vocabulary" in ftitle
    indexing = number is None and "index" in ftitle

    blocks: list[dict] = []
    para: list[str] = []
    para_rc: list[int] = []       # right-hand column of each paragraph line
    para_page_break = False       # an unfinished paragraph crossed a page break
    pass_buf: list[str] = []
    pass_spk: str | None = None   # speaker of the current dialogue turn
    pass_ind = 0                  # base indent of the current dialogue
    pass_lang: str | None = None  # "en" for roman English dialogue turns
    pass_next = False             # a dialogue starts at the very next line
    pass_on = False
    pass_armed = False
    fresh_pg = False              # we are on a page that began with a break
    practice = False
    prev_letter = ""
    ex: dict | None = None
    tab: dict | None = None
    glos: dict | None = None
    fresh = False          # a page break just happened: next wide-gap line rebases
    page_top = False       # we are at the first non-blank line of a new page
    item_ord = 0

    def flush_para() -> None:
        nonlocal para, para_rc, para_page_break, pass_armed
        para_page_break = False
        if para:
            text = clean_inline(dehyphenate(" ".join(para)))
            if text:
                blocks.append({"t": "p", "text": text})
                pass_armed = reading and text.endswith(":")
            para = []
            para_rc = []

    def flush_pass() -> None:
        nonlocal pass_buf, pass_spk
        if pass_buf:
            text = clean_inline(dehyphenate(" ".join(pass_buf)))
            if text:
                blk = {"t": "passage", "text": text}
                if pass_spk:
                    blk["speaker"] = pass_spk
                if pass_lang:
                    blk["lang"] = pass_lang
                blocks.append(blk)
            pass_buf = []
            pass_spk = None

    def close_pass() -> None:
        nonlocal pass_on, pass_armed, pass_lang
        flush_pass()
        pass_on = False
        pass_armed = False
        pass_lang = None

    def flush_tab() -> None:
        nonlocal tab
        if tab is None:
            return
        groups = tab["groups"]
        tab = None
        if not groups:
            return
        starts = sorted({g["c"] for g in groups})
        idx_of = {p: i for i, p in enumerate(starts)}
        width = len(starts)
        rows: dict[int, list[str]] = {}
        order: list[int] = []
        for g in groups:
            ln = g["l"]
            if ln not in rows:
                rows[ln] = [""] * width
                order.append(ln)
            cur = rows[ln][idx_of[g["c"]]]
            rows[ln][idx_of[g["c"]]] = (cur + " " + g["t"]).strip() if cur else g["t"]
        order.sort()
        grid = [rows[k] for k in order]
        nonempty = [sum(1 for t in r if t) for r in grid]
        modal = Counter(nonempty).most_common(1)[0][0]
        n_head = 0
        while n_head < len(grid) and 0 < nonempty[n_head] < modal:
            n_head += 1
        header = None
        if n_head:
            header = [""] * width
            for k in range(n_head):
                for c, t in enumerate(grid[k]):
                    if t:
                        header[c] = (header[c] + " " + t).strip() if header[c] else t
            body_rows = grid[n_head:]
        elif not vocab and len(order) > 1 and any(
            not body[k].strip() for k in range(order[0] + 1, order[1])
        ):
            header = grid[0][:]
            body_rows = grid[1:]
        else:
            body_rows = grid
        # the book repeats its column headings at page and column breaks;
        # lift the first such row into the table header and drop the rest
        heading_rows = [r for r in body_rows if _is_heading_row(r)]
        if heading_rows:
            if header is None:
                header = heading_rows[0][:]
            body_rows = [r for r in body_rows if not _is_heading_row(r)]
        elif len(body_rows) > 2:
            first = body_rows[0]
            if first and all(len(c) <= 24 for c in first):
                body_rows = [r for k, r in enumerate(body_rows)
                             if k == 0 or r != first]
        blocks.append({"t": "table", "header": header, "rows": body_rows})

    def flush_ex() -> None:
        nonlocal ex
        if ex is None:
            return
        state = ex
        ex = None
        if state["letter"]:
            blocks.append({"t": "ex", "letter": state["letter"],
                           "text": clean_inline(dehyphenate(state["text"]))})
        items = sorted(state["items"], key=lambda it: (it["n"], it["ord"]))
        # an exercise may continue on a new page with re-anchored columns; the
        # faithful column count is the widest single-page arrangement
        ncols = max([len(state["starts"])] + state["segs"])
        for k, it in enumerate(items):
            blk = {"t": "li", "n": it["n"],
                   "text": clean_inline(dehyphenate(it["t"]))}
            if k == 0 and ncols > 1:
                blk["cols"] = ncols
            blocks.append(blk)
        blocks.extend(state["notes"])

    def emit_term() -> None:
        nonlocal glos
        if glos is None:
            return
        text = clean_inline(dehyphenate(" ".join(glos["parts"])))
        blocks.append({"t": "term", "term": glos["term"], "text": text})
        glos = None

    def close_all() -> None:
        nonlocal practice, pass_on, pass_armed, pass_next, pass_lang
        flush_para()
        flush_tab()
        flush_pass()
        flush_ex()
        emit_term()
        pass_on = False
        pass_armed = False
        pass_next = False
        pass_lang = None
        practice = False

    def open_tab() -> dict:
        return {"min": None, "starts": [], "groups": [], "last": {}}

    def col_near(pos: int, tol: int, skip: set[int] | None = None) -> int | None:
        """Position of the existing column start nearest `pos` within `tol`."""
        best, bd = None, tol + 1
        for s in tab["starts"]:
            if skip and s in skip:
                continue
            d = abs(s - pos)
            if d < bd:
                best, bd = s, d
        return best if bd <= tol else None

    def col_group(pos: int, line: int, text: str) -> None:
        g = {"c": pos, "l": line, "t": text}
        tab["groups"].append(g)
        tab["last"][pos] = g

    def col_continue(pos: int, text: str, line: int) -> None:
        best, bd = None, 10 ** 9
        for s in tab["starts"]:
            d = abs(s - pos)
            if d < bd:
                best, bd = s, d
        g = tab["last"].get(best)
        if g is None:
            col_group(best, line, text)
        else:
            g["t"] = (g["t"] + " " + text).strip()

    def row_complete() -> bool:
        """True when every cell of the last table row ended a phrase; a row
        still waiting for a wrapped gloss has none."""
        return all(not g["t"] or _phrase_end(g["t"])
                   for g in tab["last"].values())

    def col_attach(pos: int, line: int, text: str, row_open: bool) -> None:
        """Place `text` in the column whose start is `pos`: continue the entry
        above it or open a new one.  The book's grids flow each column
        independently, so the decision is per column, not per line."""
        g = tab["last"].get(pos)
        if g is not None and _unfinished(g["t"]):
            # the entry above left a quote or parenthesis open
            g["t"] = (g["t"] + " " + text).strip()
        elif g is not None and not row_open and text[:1] in "‘(":
            # a wrapped gloss or parenthetical belongs to the entry above
            g["t"] = (g["t"] + " " + text).strip()
        elif (g is not None and not row_open and vocab
              and not _phrase_end(g["t"]) and text[:1].islower()
              and "‘" not in text):
            # a lowercase fragment continuing an entry that is still open
            g["t"] = (g["t"] + " " + text).strip()
        else:
            col_group(pos, line, text)

    def take_col_line(cells: list[tuple[int, str]], line: int) -> None:
        nonlocal fresh
        first_pos = cells[0][0]
        if fresh:
            fresh = False
            if tab["starts"] and len(cells) >= 2:
                tgt = col_near(first_pos, REBASE_TOL)
                if (tgt is not None and abs(tgt - tab["min"]) <= MATCH_TOL
                        and first_pos > tab["min"] + ROW_TOL):
                    # the new page prints the same grid a few characters to
                    # the side: rebase the rows onto this page's indent and
                    # keep the previous page's column positions
                    tab["min"] = first_pos
                    cells = [(col_near(p, REBASE_TOL) if col_near(p, REBASE_TOL)
                              is not None else p, t) for p, t in cells]
            if tab["min"] is None or first_pos <= tab["min"] + ROW_TOL:
                row_open = True
                if tab["min"] is None or first_pos < tab["min"]:
                    tab["min"] = first_pos
            else:
                row_open = False
        elif tab["min"] is None or first_pos <= tab["min"] + ROW_TOL:
            row_open = True
            if tab["min"] is None or first_pos < tab["min"]:
                tab["min"] = first_pos
        else:
            row_open = False
        used: set[int] = set()
        # a page after a break may have shifted every column sideways, so
        # row cells attach to column starts within the wider tolerance
        tol = REBASE_TOL if fresh_pg else MATCH_TOL
        # vocabulary and index grids flow each column independently, so their
        # wrapped cells join the entry above; ordinary (paradigm) tables keep
        # strict geometry: a row-opening cell, or a cell landing on a column
        # start, begins a new entry
        flow = vocab or indexing
        for pos, text in cells:
            if row_open:
                target = col_near(pos, tol, used)
                if target is None:
                    target = pos
                    tab["starts"].append(target)
                used.add(target)
                if flow:
                    col_attach(target, line, text, True)
                else:
                    col_group(target, line, text)
            else:
                target = col_near(pos, tol)
                if target is None:
                    if tab["starts"]:
                        target = min(tab["starts"], key=lambda st: abs(st - pos))
                    else:
                        target = pos
                        tab["starts"].append(target)
                if flow:
                    col_attach(target, line, text, False)
                elif col_near(pos, ROW_TOL) is not None:
                    col_group(col_near(pos, ROW_TOL), line, text)
                else:
                    col_continue(pos, text, line)

    def take_ex_line(cells: list[tuple[int, str]]) -> None:
        nonlocal item_ord
        for pos, text in cells:
            m = DICKEY_ITEM.match(text)
            if m:
                target, bd = None, MATCH_TOL + 1
                for s in ex["starts"]:
                    d = abs(s - pos)
                    if d < bd:
                        target, bd = s, d
                if target is None or bd > MATCH_TOL:
                    target = pos
                    ex["starts"].append(target)
                item_ord += 1
                it = {"c": target, "n": int(m.group(1)), "t": m.group(2),
                      "ord": item_ord}
                ex["items"].append(it)
                ex["last"][target] = it
            elif ex["last"]:
                best, bd = None, 10 ** 9
                for s in ex["starts"]:
                    d = abs(s - pos)
                    if d < bd:
                        best, bd = s, d
                it = ex["last"].get(best)
                if it is not None:
                    it["t"] += " " + text
                    continue
                ex["text"] += " " + text
            else:
                ex["text"] += " " + text

    # drop a wrapped second line of the chapter title, e.g. "of First and
    # Second Declensions" under "Nouns: Nominative, Vocative, and Accusative"
    ftitle_norm = re.sub(r"\s+", " ", ftitle).strip()
    start = 0
    while start < len(body) and not body[start].replace("\x0c", "").strip():
        start += 1
    if start < len(body):
        first = re.sub(r"\s+", " ", fold(body[start])).strip()
        if len(first) < len(ftitle_norm) and ftitle_norm.endswith(first):
            start += 1

    i = start
    n = len(body)
    while i < n:
        raw = body[i]
        if raw.startswith("\x0c"):
            # page break: prose, dialogue, exercises and open tables all
            # continue onto the next page.  If the next page prints a grid a
            # few characters to the side, take_col_line re-anchors its rows
            # on the first shifted row; the grid therefore stays one table.
            fresh = True
            fresh_pg = True
            page_top = True
            if para and not _phrase_end(para[-1]):
                # the paragraph continues on the far side of the page break,
                # past the running head and the page's blank margin
                para_page_break = True
            raw = raw[1:]
            if ex is not None:
                ex["segs"].append(len(ex["starts"]))
                ex["starts"] = []
                ex["last"] = {}
        raw = raw.replace("\x0c", "")
        indent = len(raw) - len(raw.lstrip(" "))
        s = raw.strip()

        if not s:
            if not para_page_break:
                flush_para()
            i += 1
            continue

        if page_top:
            page_top = False
            # a printed page header repeating the book's furniture ("406
            # Gerunds I", "Exercise A 443") is not part of the text
            if (indent > 8 or not DICKEY_SECTION_HEAD.match(s)) and \
                    _looks_like_page_header(s):
                i += 1
                continue

        fm = DICKEY_SECTION_HEAD.match(s)
        if fm and indent <= 8:
            close_all()
            blocks.append({"t": "h", "text": clean_inline(s)})
            vocab = "vocabulary to learn" in fold(s)
            fhead = fold(s)
            reading = "reading" in fhead or "colloqui" in fhead
            # a dialogue may open directly under the heading (e.g. the
            # "Translate into Latin" sections built from dialogue turns)
            j = i + 1
            while j < n:
                ln = body[j].replace("\x0c", "")
                if not ln.strip() or DICKEY_RUNNING_SECTION.match(ln) or (
                    _is_furniture_line(ln.strip(), titles_lc)
                ):
                    j += 1
                    continue
                break
            nxt = body[j].replace("\x0c", "") if j < n else ""
            nind = len(nxt) - len(nxt.lstrip(" "))
            if nxt.strip() and nind <= 14 and DICKEY_SPEAKER.match(nxt.strip()):
                pass_next = True
                pass_lang = "en" if "translate" in fhead else None
            i += 1
            continue

        # running heads: a section title glued to a page number, or a chapter
        # title repeated at the top of the page
        if DICKEY_RUNNING_SECTION.match(raw) or (
            len(s) <= DICKEY_LONG_LINE and _is_furniture_line(s, titles_lc)
        ) or _is_running_head(s, title, titles_lc):
            i += 1
            continue

        if pass_next:
            # the section heading promised a dialogue here
            pass_next = False
            sm = DICKEY_SPEAKER.match(s)
            if sm:
                pass_on = True
                pass_ind = indent
                pass_spk = dickey_speaker(sm.group(0))
                rest = s[sm.end():].strip()
                pass_buf = [rest] if rest else []
                i += 1
                continue

        # a lone number is a footnote marker when the following non-blank line
        # is indented deeper and starts with a letter (all 56 in the book are)
        if re.fullmatch(r"\d{1,2}", s):
            j = i + 1
            while j < n and not body[j].replace("\x0c", "").strip():
                j += 1
            nxt = body[j].replace("\x0c", "") if j < n else ""
            nind = len(nxt) - len(nxt.lstrip(" "))
            if nxt.strip()[:1].isalpha() and nind >= indent + 2:
                if pass_on:
                    close_pass()
                parts = []
                k = j
                while k < n:
                    ln = body[k].replace("\x0c", "")
                    if not ln.strip():
                        break
                    if len(ln) - len(ln.lstrip(" ")) < indent + 2:
                        break
                    if DICKEY_RUNNING_SECTION.match(ln) or _is_furniture_line(ln.strip(), titles_lc):
                        break
                    parts.append(ln.strip())
                    k += 1
                note = {"t": "note", "n": int(s),
                        "text": clean_inline(dehyphenate(" ".join(parts)))}
                if ex is not None:
                    ex["notes"].append(note)
                else:
                    blocks.append(note)
                i = k
                continue
            i += 1
            continue

        if fold(s) == "practice":
            close_all()
            blocks.append({"t": "practice"})
            practice = True
            prev_letter = ""
            i += 1
            continue

        if vocab and fold(s) in DICKEY_VOCAB_HEADS:
            close_all()
            blocks.append({"t": "vhead", "text": clean_inline(s)})
            i += 1
            continue

        if fold(s) == "vocabulary" or fold(s).startswith("vocabulary ("):
            close_all()
            vocab = True
            label = [s]
            k = i + 1
            if "(" in s:      # parenthetical labels may wrap onto the next lines
                while k < n and body[k].replace("\x0c", "").strip():
                    nxt = body[k].replace("\x0c", "")
                    nind = len(nxt) - len(nxt.lstrip(" "))
                    if _incomplete(label[-1]) and nind >= indent:
                        label.append(nxt.strip())
                        k += 1
                    else:
                        break
            blocks.append({"t": "vlabel", "text": clean_inline(" ".join(label))})
            i = k
            continue

        if DICKEY_EXERCISE_WORD.match(s):
            close_all()
            blocks.append({"t": "exlabel", "text": clean_inline(s)})
            i += 1
            continue

        if glossary:
            tm = DICKEY_GLOSSARY_TERM.match(s)
            if tm:
                emit_term()
                glos = {"term": clean_inline(tm.group(1)), "parts": [tm.group(2)]}
                i += 1
                continue
            if glos is not None:
                glos["parts"].append(s)
                i += 1
                continue
            # pre-glossary prose falls through

        # ---- Practice regions ---------------------------------------------- #
        if practice:
            lm = DICKEY_LETTER.match(s)
            if lm and indent >= 4 and (not prev_letter or lm.group(1) > prev_letter):
                flush_ex()
                prev_letter = lm.group(1)
                ex = {"letter": lm.group(1), "text": lm.group(2),
                      "starts": [], "items": [], "last": {}, "notes": [],
                      "segs": [], "indent": indent}
                i += 1
                continue
            if ex is None:
                cells0 = split_cells(raw)
                if indent >= 4 and len(cells0) <= 1:
                    # unlettered exercise instruction
                    ex = {"letter": "", "text": s, "starts": [], "items": [],
                          "last": {}, "notes": [], "segs": [], "indent": indent}
                    i += 1
                    continue
                # dedented prose or a stray wide-gap line: fall through
                if indent <= 3:
                    practice = False
            else:
                cells = split_cells(raw)
                numbered = any(DICKEY_ITEM.match(t) for _, t in cells)
                if numbered or (cells and ex["items"]):
                    take_ex_line(cells)
                    i += 1
                    continue
                if not ex["items"] and indent >= ex["indent"] - 1:
                    ex["text"] += " " + s      # wrapped instruction line
                    i += 1
                    continue
                # prose at a shallower indent ends the exercise region
                flush_ex()
                practice = False
                # fall through to the table/prose logic below

        cells = split_cells(raw)
        if vocab and len(cells) == 1 and "‘" in s and (
            tab is None or indent <= tab["min"] + ROW_TOL
        ) and (tab is None or row_complete()):
            # a vocabulary row whose column gap collapsed below 3 spaces in
            # the PDF text layer, e.g. "sum, esse, fuī, futūrus ‘be’":
            # split at the opening quote — but only when the right-hand part
            # really lands on the grid's next column, otherwise the quote is
            # just the gloss of this single entry ("vāpulō … ‘be beaten’").
            qp = s.index("‘")
            if qp > 0 and tab is not None:
                t = col_near(indent + qp, REBASE_TOL)
                # only when the right-hand part really starts a *later*
                # column; otherwise the quote is just this entry's gloss
                if t is not None and t > indent + ROW_TOL:
                    cells = [(indent, s[:qp].strip()), (indent + qp, s[qp:])]

        # ---- Tables / vocabulary grids -------------------------------------- #
        if len(cells) >= 2:
            pass_armed = False
            flush_para()
            flush_pass()
            if tab is None:
                tab = open_tab()
                fresh_pg = False   # a new grid defines its own columns
            take_col_line(cells, i)
            i += 1
            continue
        if tab is not None and cells:
            pos0 = cells[0][0]
            # a line that begins to the left of the grid's first column is
            # outside it (a reading heading or a new paragraph): end the grid
            close_grid = pos0 + ROW_TOL < tab["min"]
            qm = (re.match(r"^(\S{1,12})[ \t]+‘", s)
                  if not close_grid and pos0 <= tab["min"] + 2 else None)
            if not close_grid and pos0 >= tab["min"] + 3 and not (
                s[:1].isupper()
                and any(_phrase_end(g["t"]) for g in tab["last"].values())
            ):
                # a deeper single cell continues the entry it belongs to
                for pos, text in cells:
                    if vocab or indexing:
                        target = col_near(pos, REBASE_TOL if fresh_pg else MATCH_TOL)
                        if target is None:
                            target = (min(tab["starts"], key=lambda st: abs(st - pos))
                                      if tab["starts"] else pos)
                            if target not in tab["starts"]:
                                tab["starts"].append(target)
                        col_attach(target, i, text, False)
                    elif col_near(pos, ROW_TOL) is not None:
                        col_group(col_near(pos, ROW_TOL), i, text)
                    else:
                        col_continue(pos, text, i)
                i += 1
                continue
            if not close_grid and qm:
                # a row whose column gap collapsed below 3 spaces in the PDF
                # text layer, e.g. "regimus ‘we rule’, ‘we are ruling’..."
                # Only split when the right part really starts a later column,
                # not when the quote is this entry's own gloss ("sīc ‘thus’").
                qpos = raw.find("‘")
                t = col_near(qpos, REBASE_TOL)
                if t is not None and t > indent + ROW_TOL:
                    cells = [(indent, qm.group(1)), (qpos, s[s.index("‘"):])]
                    take_col_line(cells, i)
                    i += 1
                    continue
            if (not close_grid and (vocab or indexing)
                    and pos0 <= tab["min"] + ROW_TOL):
                if row_complete() or s[:1].isupper():
                    # a vocabulary/index entry whose other cells start on
                    # later lines: open the row now, they join it below
                    take_col_line(cells, i)
                else:
                    # a wrapped fragment of an entry that is still unfinished
                    col_continue(pos0, s, i)
                i += 1
                continue
            flush_tab()
            # fall through: the line starts a fresh paragraph

        # ---- Reading passages ----------------------------------------------- #
        if pass_on:
            # a new turn can only start after a finished utterance; a line
            # whose predecessor ends mid-sentence is a wrap, not a label
            prev_done = bool(pass_buf) and (
                pass_buf[-1].rstrip()[-1:] in TERMINAL_PUNCT
            )
            sm = DICKEY_SPEAKER_SP.match(s) if prev_done else None
            if sm is None and prev_done and indent <= pass_ind + 2:
                sm = DICKEY_SPEAKER_CP.match(s)
            if sm:
                flush_pass()
                pass_spk = dickey_speaker(sm.group(0))
                rest = s[sm.end():].strip()
                if rest:
                    pass_buf = [rest]
            else:
                pass_buf.append(s)
            i += 1
            continue
        if pass_armed and not para:
            pass_on = True
            pass_armed = False
            pass_ind = indent
            pass_lang = None
            sm = DICKEY_SPEAKER.match(s)
            if sm:
                pass_spk = dickey_speaker(sm.group(0))
                rest = s[sm.end():].strip()
                pass_buf = [rest] if rest else []
            else:
                pass_buf = [s]
            i += 1
            continue

        # ---- Ordinary paragraphs --------------------------------------------- #
        text = clean_inline(s)
        if reading:
            # in a reading section a dialogue turn may follow the description
            # paragraph (with or without a blank line between)
            if para:
                last_text = para[-1]
            elif blocks and blocks[-1]["t"] == "p":
                last_text = blocks[-1]["text"]
            else:
                last_text = ""
            if last_text.rstrip() and last_text.rstrip()[-1] in TERMINAL_PUNCT:
                sm = DICKEY_SPEAKER.match(s)
                if sm:
                    flush_para()
                    pass_on = True
                    pass_armed = False
                    pass_ind = indent
                    pass_lang = None
                    pass_spk = dickey_speaker(sm.group(0))
                    rest = s[sm.end():].strip()
                    pass_buf = [rest] if rest else []
                    i += 1
                    continue
        if not para:
            para = [text]
            para_rc = [indent + len(s)]
        else:
            # An indented line continues the paragraph when the line above
            # stops mid-sentence; or when this line starts lowercase and is a
            # justified wrap, i.e. the line above reaches the book's right
            # margin and so does the line before it (justified prose wraps
            # with no hyphen, so the sentence continues even though the
            # previous line ends in a mark); or when this line itself stops
            # mid-sentence.  Two complete short lines in a row are separate
            # items: vocabulary entries, preposition lists, and the like.
            last = para[-1]
            rcol = indent + len(s)
            last_rc = para_rc[-1] if para_rc else 0
            wrapped = (
                (len(para_rc) >= 2 and last_rc >= PARA_MARGIN
                 and abs(last_rc - para_rc[-2]) <= 8)
                or (len(para_rc) == 1 and last_rc >= 84)
            )
            if last and last[-1] not in TERMINAL_PUNCT:
                para.append(text)
                para_rc.append(rcol)
            elif wrapped and text[:1].islower():
                para.append(text)
                para_rc.append(rcol)
            elif text[:1].islower() and text[-1:] and text[-1] not in TERMINAL_PUNCT:
                para.append(text)
                para_rc.append(rcol)
            else:
                flush_para()
                para = [text]
                para_rc = [rcol]
        i += 1

    close_all()
    return blocks


def dickey_sections(blocks: list[dict], title: str) -> list[dict]:
    """Group the flat block list into the book's own numbered sections."""
    has_heads = any(b["t"] == "h" for b in blocks)
    sections: list[dict] = []
    current: dict | None = None

    def new_section(latin: str, num: str | None) -> dict:
        sec = {"id": f"section-{len(sections) + 1}", "latin": latin,
               "num": num, "blocks": []}
        sections.append(sec)
        return sec

    for block in blocks:
        if block["t"] == "h":
            text = block["text"]
            num = text.split()[0] if text[:1].isdigit() else None
            current = new_section(text, num)
            continue
        if current is None:
            latin = title if not has_heads else "Introduction"
            current = new_section(latin, None)
        current["blocks"].append(block)
    return [sec for sec in sections if sec["blocks"]]


def build_learn_latin() -> dict:
    raw_lines = read_lines_pages("learn-latin.txt")
    clean = [ln.replace("\x0c", "") for ln in raw_lines]
    sections, titles_lc = _delimited_sections(
        clean, DICKEY_TOC, dickey_head, DICKEY_EXTRA_TITLES, DICKEY_BACK_SECTIONS,
    )
    chapters = []
    for idx, sec in enumerate(sections):
        end = sections[idx + 1]["line"] if idx + 1 < len(sections) else len(clean)
        body = raw_lines[sec["line"] + 1:end]
        blocks = dickey_blocks(body, sec["title"], titles_lc, sec["number"])
        chapters.append({
            "id": sec["id"],
            "number": sec["number"],
            "roman": sec["roman"],
            "title": sec["title"],
            "blocks": blocks,
            "sections": dickey_sections(blocks, sec["title"]),
        })
    return {"index": {"title": "learn-latin"}, "chapters": chapters}


def write_capitula(chapters: list[dict]) -> None:
    """Refresh the hand-served capitulum modules from the faithful parse."""
    out_dir = ROOT / "src" / "data" / "learn-latin"
    written = 0
    for ch in chapters:
        number = ch.get("number")
        if not number:
            continue
        data = {
            "number": number,
            "roman": ch["roman"],
            "slug": f"capitulum-{number:02d}",
            "title": ch["title"],
            "status": "complete",
            "complete": True,
            "sections": ch["sections"],
        }
        path = out_dir / f"capitulum-{number:02d}.js"
        path.write_text(
            "const chapter = " + json.dumps(data, ensure_ascii=False, indent=2)
            + ";\n\nexport default chapter\n",
            encoding="utf-8",
        )
        written += 1
    print(f"wrote {written} capitulum modules -> {out_dir}")


# --------------------------------------------------------------------------- #
# Neumann — A Companion to Familia Romana
# --------------------------------------------------------------------------- #

COMPANION_TOC = [
    (1, "I", "Imperium Rōmānum"), (2, "II", "Familia Rōmāna"), (3, "III", "Puer Improbus"),
    (4, "IV", "Dominus et Servī"), (5, "V", "Vīlla et Hortus"), (6, "VI", "Via Latīna"),
    (7, "VII", "Puella et Rosa"), (8, "VIII", "Taberna Rōmāna"), (9, "IX", "Pāstor et Ovēs"),
    (10, "X", "Bēstiae et Hominēs"), (11, "XI", "Corpus Hūmānum"), (12, "XII", "Mīles Rōmānus"),
    (13, "XIII", "Annus et Mēnsēs"), (14, "XIV", "Novus Diēs"), (15, "XV", "Magister et Discipulī"),
    (16, "XVI", "Tempestās"), (17, "XVII", "Numerī Difficiles"), (18, "XVIII", "Litterae Latīnae"),
    (19, "XIX", "Marītus et Uxor"), (20, "XX", "Parentēs"), (21, "XXI", "Pugna Discipulōrum"),
    (22, "XXII", "Cave Canem"), (23, "XXIII", "Epistula Magistrī"), (24, "XXIV", "Puer Aegrōtus"),
    (25, "XXV", "Thēseus et Mīnōtaurus"), (26, "XXVI", "Daedalus et Icarus"), (27, "XXVII", "Rēs Rūsticae"),
    (28, "XXVIII", "Pericula Maris"), (29, "XXIX", "Nāvigāre Necesse Est"), (30, "XXX", "Convīvium"),
    (31, "XXXI", "Inter Pōcula"), (32, "XXXII", "Classis Rōmāna"), (33, "XXXIII", "Exercitus Rōmānus"),
    (34, "XXXIV", "De Arte Poēticā"), (35, "XXXV", "Ars Grammatica"),
]


def companion_head(number, title):
    first = re.escape(fold(title.split()[0]))
    return re.compile(rf"^{fold(ROMAN[number])}\.\s+{first}")


COMPANION_NOISE = [
    re.compile(r"^\d{1,3}\s*$"),
    re.compile(r"^\s*\d+\s+Lingva Latina: A Companion to Familia Romana\s*$"),
    re.compile(r"^\s*[IVXL]+\.\s+.{0,40}\s+\d+\s*$"),
]


# --------------------------------------------------------------------------- #
# Goldman & Nyenhuis — Latin via Ovid (2nd ed.)
# --------------------------------------------------------------------------- #

# (number, roman, display title, first-line token, second-line token)
LVO_TOC = [
    (1, "I", "Charta Geographica", "CHARTA GEOGRAPHICA", None),
    (2, "II", "Europa et Taurus", "EUROPA ET TAURUS", None),
    (3, "III", "Minerva et Arachne (Part 1)", "MINERVA ET ARACHNE", None),
    (4, "IV", "Minerva et Arachne (Part 2)", "MINERVA ET ARACHNE", None),
    (5, "V", "Minerva et Arachne (Part 3)", "MINERVA ET ARACHNE", None),
    (6, "VI", "Latona et Niobe (Part 1)", "LATONA ET NIOBE", None),
    (7, "VII", "Latona et Niobe (Part 2)", "LATONA ET NIOBE", None),
    (8, "VIII", "Pan et Syringa", "PAN ET SYRINGA", None),
    (9, "IX", "Callisto (Part 1)", "CALLISTO", None),
    (10, "X", "Callisto (Part 2)", "CALLISTO", None),
    (11, "XI", "Philemon et Baucis (Pars Prima)", "PHILEMON ET BAUCIS", None),
    (12, "XII", "Philemon et Baucis (Pars Secunda)", "PHILEMON ET BAUCIS", None),
    (13, "XIII", "Echo et Narcissus", "ECHO ET NARCISSUS", None),
    (14, "XIV", "Phoebus et Daphne", "PHOEBUS ET DAPHNE", None),
    (15, "XV", "Pyramus et Thisbe (Pars Prima)", "PYRAMUS ET THISBE", None),
    (16, "XVI", "Pyramus et Thisbe (Pars Secunda)", "PYRAMUS ET THISBE", None),
    (17, "XVII", "Atalanta et Hippomenes (Pars Prima)", "ATALANTA ET HIPPOMENES", None),
    (18, "XVIII", "Atalanta et Hippomenes (Pars Secunda)", "ATALANTA ET HIPPOMENES", None),
    (19, "XIX", "Midas et Vis Aurea", "MIDAS ET VIS AUREA", None),
    (20, "XX", "Midas et Pan", "MIDAS ET PAN", None),
    (21, "XXI", "Orpheus et Eurydice", "ORPHEUS ET EURYDICE", None),
    (22, "XXII", "Mors Orphei", "MORS ORPHEI", None),
    (23, "XXIII", "Iason et Argonautae", "IASON ET ARGONAUTAE", None),
    (24, "XXIV", "Amor Iasonis", "AMOR IASONIS", None),
    (25, "XXV", "Labores Iasonis", "LABORES IASONIS", None),
    (26, "XXVI", "Facta Magica Medeae", "FACTA MAGICA MEDEAE", None),
    (27, "XXVII", "Theseus Troezene", "THESEUS TROEZENE", None),
    (28, "XXVIII", "Theseus Athenis", "THESEUS ATHENIS", None),
    (29, "XXIX", "Theseus Cretae", "THESEUS CRETAE", None),
    (30, "XXX", "Theseus Rex", "THESEUS REX", None),
    (31, "XXXI", "Bellum Troianum: Sacrificium Iphigeniae", "BELLUM TROIANUM", "SACRIFICIUM IPHIGENIAE"),
    (32, "XXXII", "Bellum Troianum: Mors Cygni", "BELLUM TROIANUM", "MORS CYGNI"),
    (33, "XXXIII", "Bellum Troianum: Aiax et Ulixes", "BELLUM TROIANUM", "AIAX ET ULIXES"),
    (34, "XXXIV", "Bellum Troianum: Troia Capta", "BELLUM TROIANUM", "TROIA CAPTA"),
    (35, "XXXV", "Filming the Odyssey", "FILMING THE ODYSSEY", None),
    (36, "XXXVI", "Aeneas", "AENEAS", None),
    (37, "XXXVII", "Achaemenides", "ACHAEMENIDES", None),
    (38, "XXXVIII", "Circe", "CIRCE", None),
    (39, "XXXIX", "Sibylla Cumaea", "SIBYLLA CUMAEA", None),
    (40, "XL", "Aeneas in Italia", "AENEAS IN ITALIA", None),
]

# The back matter, in order. Each is located by its own heading (matched on the
# letters only, so the table of contents and the running heads are ignored).
LVO_BACK = [
    ("appendix-a", "A", "Appendix A"),
    ("appendix-b", "B", "Appendix B"),
    ("latin-english-vocabulary", "L–E", "Latin–English Vocabulary"),
    ("english-latin-vocabulary", "E–L", "English–Latin Vocabulary"),
    ("index", "Idx", "Index"),
]

LVO_JSONL = RAW / "latin-via-ovid.jsonl"


def lvo_lines() -> list[str]:
    """Reconstruct the book's lines from the faithful vision-OCR records.

    The scanned edition's own text layer mangles every macron ("Eurōpa" ->
    "Eurdpa", "Rōma" -> "R5ma"), so we read the page-by-page transcription
    produced by scripts/ocr-book.py instead of the PDF text layer."""
    if not LVO_JSONL.exists():
        raise SystemExit(f"missing {LVO_JSONL} — run scripts/ocr-book.py first")
    pages: dict[int, str] = {}
    for line in LVO_JSONL.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        rec = json.loads(line)
        pages[rec["page"]] = rec.get("text", "")
    text = "\n".join(normalise_glyphs(pages[p]) for p in sorted(pages))
    text = "".join(c for c in text if c == "\n" or c >= " ")
    return text.splitlines()


def lvo_find(lines: list[str], phrase: str, start: int = 0) -> int | None:
    """Line index of a heading, matched on its letters (case/accent-insensitive)."""
    key = lvo_letters(phrase)
    for i in range(start, len(lines)):
        if lvo_letters(lines[i]).startswith(key):
            return i
    return None

LVO_SECTION_WORDS = re.compile(
    r"^(Verba|Structure|Etymology|Sententiae|Dialogue|Macrons|Vocabulary|"
    r"Exercises|Practice|Reading|Questions|Answers|Derivatives?|Notes?|"
    r"Translation|Grammar|Review|Drill|Conversation|Word Study|Contents)$",
    re.I,
)

# Running heads and page numbers to drop.
LVO_NOISE = [
    re.compile(r"^\s*\d{1,3}\s*$"),
    re.compile(r"^\s*\d{1,3}\s+Latin via Ovid\s*$", re.I),
    re.compile(r"^\s*[ivxlcdm]+\s+Latin via Ovid\s*$", re.I),
    re.compile(r"^\s*Latin via Ovid\s+\d{1,3}\s*$", re.I),
    re.compile(r"^\s*Introduction\s+[ivxlcdm]+\s*$", re.I),
    re.compile(r"^\s*[IVXLC][IVXLC ]{0,12}\s+[A-Za-z].{0,70}\s\d{1,3}\s*$"),
    re.compile(r"^\s*Appendix [AB]\s+\d{1,3}\s*$", re.I),
    re.compile(r"^\s*(Latin|English)[-–—]?[Ll]atin Vocabulary\s+\d{1,3}\s*$"),
    re.compile(r"^\s*Index\s+\d{1,3}\s*$", re.I),
    re.compile(r"^\s*/\s+.{0,60}\s\d{1,3}\s*$"),
]

# Vocabulary entries and translation columns keep a wide internal gap.
LVO_TABLE = re.compile(r"\S[ \t]{3,}\S")


def lvo_letters(s: str) -> str:
    return re.sub(r"[^A-Za-z]", "", s).upper()


def lvo_is_heading(text: str) -> bool:
    s = text.strip()
    if LVO_SECTION_WORDS.match(s):
        return True
    letters = [c for c in s if c.isalpha()]
    if len(letters) < 3:
        return False
    up = sum(1 for c in letters if c.isupper())
    return up / len(letters) > 0.8 and len(s) <= 72


def lvo_chapter_starts(lines: list[str]) -> list[tuple]:
    starts: list[tuple] = []
    cursor = 0
    for num, roman, title, tok1, tok2 in LVO_TOC:
        opener = "CHAPTER" + re.sub(r"\s+", "", roman)
        t1 = lvo_letters(tok1)
        t2 = lvo_letters(tok2) if tok2 else None
        found = None
        # Prefer the explicit "Chapter N" heading; only fall back to the title
        # line for chapters whose heading the OCR dropped (e.g. XXXII).
        for i in range(cursor, len(lines)):
            if lvo_letters(lines[i]) == opener:
                found = i
                break
        if found is None:
            for i in range(cursor, len(lines)):
                if lvo_letters(lines[i]) != t1:
                    continue
                if t2 is None or (i + 1 < len(lines) and lvo_letters(lines[i + 1]) == t2):
                    found = i
                    break
        if found is None:
            continue
        starts.append((found, num, roman, title, tok1, tok2))
        cursor = found + 1
    return starts


def lvo_strip_heading(lines, start, end, roman, markers) -> int:
    """Skip the opener / title / subtitle lines so the body starts clean."""
    i, removed = start, 0
    opener = "CHAPTER" + re.sub(r"\s+", "", roman)
    while i < end and removed < 6:
        s = lines[i].strip()
        if not s:
            i += 1
            continue
        L = lvo_letters(s)
        if L == opener or L in markers or re.match(r"^\(?\s*(pars|part)\b", s, re.I):
            i += 1
            removed += 1
            continue
        break
    return i


def lvo_blocks(body_lines: list[str]) -> list[dict]:
    blocks: list[dict] = []
    para: list[str] = []
    last_indent: int | None = None

    def flush():
        if para:
            blocks.append({"t": "p", "text": clean_inline(dehyphenate(" ".join(para)))})
            para.clear()

    for raw in body_lines:
        s = raw.rstrip()
        if not s.strip():
            flush()
            last_indent = None
            continue
        if any(rx.match(s) for rx in LVO_NOISE):
            continue
        text = s.strip()
        indent = len(s) - len(s.lstrip(" "))
        if lvo_is_heading(text):
            flush()
            blocks.append({"t": "h", "text": clean_inline(text)})
            last_indent = indent
            continue
        if LVO_TABLE.search(text):
            flush()
            blocks.append({"t": "p", "text": clean_inline(text)})
            last_indent = indent
            continue
        if not para:
            para.append(text)
        elif indent >= 4 and last_indent == 0:
            flush()
            para.append(text)
        else:
            para.append(text)
        last_indent = indent
    flush()
    return blocks


def build_latin_via_ovid() -> dict:
    lines = lvo_lines()

    sections: list[dict] = []
    intro_start = lvo_find(lines, "INTRODUCTION")
    if intro_start is not None:
        sections.append({
            "id": "intro", "number": 0, "roman": "Intro", "title": "Introduction",
            "latinTitle": None, "start": intro_start, "markers": {"INTRODUCTION"},
        })

    for start, num, roman, title, tok1, tok2 in lvo_chapter_starts(lines):
        lat = re.sub(r"\s+", " ", tok1.upper())
        if tok2:
            lat = f"{lat}: {tok2.upper()}"
        markers = {"CHAPTER" + re.sub(r"\s+", "", roman), lvo_letters(tok1)}
        if tok2:
            markers.add(lvo_letters(tok2))
        sections.append({
            "id": f"ch-{num:02d}", "number": num, "roman": roman,
            "title": title, "latinTitle": lat, "start": start, "markers": markers,
        })

    search_from = sections[-1]["start"] if sections else 0
    for sid, roman, title in LVO_BACK:
        start = lvo_find(lines, title, search_from)
        if start is None:
            continue
        sections.append({
            "id": sid, "number": None, "roman": roman, "title": title,
            "latinTitle": None, "start": start, "markers": {lvo_letters(title)},
        })
        search_from = start + 1
    sections.sort(key=lambda s: s["start"])

    chapters = []
    for idx, sec in enumerate(sections):
        end = sections[idx + 1]["start"] if idx + 1 < len(sections) else len(lines)
        body_start = lvo_strip_heading(lines, sec["start"], end, sec["roman"], sec["markers"])
        chapters.append({
            "id": sec["id"], "number": sec["number"], "roman": sec["roman"],
            "title": sec["title"], "latinTitle": sec["latinTitle"],
            "blocks": lvo_blocks(lines[body_start:end]),
        })

    return {
        "index": {
            "title": "Latin via Ovid: A First Course",
            "latinTitle": "LATIN VIA OVID",
            "author": "Norma Goldman & Jacob E. Nyenhuis",
        },
        "chapters": chapters,
    }


# --------------------------------------------------------------------------- #
# Ørberg — Exercitia Latina I (scanned; text comes from scripts/ocr-book.py)
# --------------------------------------------------------------------------- #

EXERCITIA_JSONL = RAW / "exercitia.jsonl"
EXERCITIA_PAGE_OFFSET = 8  # printed page 1 == PDF page 9

# The version of the site's chapter titles this exercise book belongs to.
FR_CHAPTER_TITLES = {n: t for n, (_lat, t) in FR_TITLES.items()}

CHAPTER_OPEN = re.compile(r"^CAPITVLVM\s+(.+)$", re.I)
LECTIO_RE = re.compile(r"^L[ēe]cti[ōo]\b(.*)$", re.I)
EXERCITIUM_RE = re.compile(r"^Exercitium\s+(\d+)\b(.*)$", re.I)
ITEM_RE = re.compile(r"^(\d{1,3})\.\s*(.*)$")


def ex_normalise(s: str) -> str:
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^A-Za-z ]", "", s).upper().strip()


def ex_ordinal(s: str) -> int | None:
    key = re.sub(r"\s+", " ", ex_normalise(s)).strip()
    if key in FR_ORD:
        return FR_ORD[key]
    # OCR sometimes drops a letter; fall back to a prefix match
    for k, v in FR_ORD.items():
        if k.startswith(key[:6]) and len(key) >= 5:
            return v
    return None


def ex_is_running_head(s: str) -> bool:
    t = s.strip()
    if not t:
        return False
    if re.fullmatch(r"\d{1,3}", t):
        return True
    if re.fullmatch(r"EXERCITIA\s+LATINA", t, re.I):
        return True
    # Running heads repeat "CAP. <roman>" and "EXERCITIA <n>-<n>", in either
    # order, sometimes with a stray page number ("… / 1"). Recognise them by
    # removing everything those heads are made of and seeing if nothing is left.
    if not re.search(r"(CAP\.|EXERCITIA)", t, re.I):
        return False
    leftover = re.sub(r"(CAP\.|EXERCITIA)", "", t, flags=re.I)
    leftover = re.sub(r"\d+", "", leftover)
    leftover = re.sub(r"[IVXL]", "", leftover, flags=re.I)
    leftover = re.sub(r"[\s/–—\-.]", "", leftover)
    return leftover == ""


def ex_blocks(lines: list[str]) -> tuple[list[dict], list[str]]:
    """Parse one chapter's main-column lines into blocks; also return margin lines."""
    blocks: list[dict] = []
    margin: list[str] = []

    def push_text(text: str) -> None:
        """Join a line onto the previous block if it is a wrap, else start a paragraph."""
        text = clean_inline(text)
        if not text:
            return
        if blocks and blocks[-1]["t"] == "li":
            blocks[-1]["text"] = clean_inline(blocks[-1]["text"] + " " + text)
        elif blocks and blocks[-1]["t"] == "p":
            blocks[-1]["text"] = clean_inline(blocks[-1]["text"] + " " + text)
        else:
            blocks.append({"t": "p", "text": text})

    for raw in lines:
        line = raw.rstrip()
        if not line.strip():
            continue
        if ex_is_running_head(line):
            continue
        if CHAPTER_OPEN.match(line.strip()):
            continue
        s = line.strip()

        m = LECTIO_RE.match(s)
        if m:
            blocks.append({"t": "h", "text": clean_inline("Lēctiō" + m.group(1))})
            continue
        m = EXERCITIUM_RE.match(s)
        if m:
            blocks.append({"t": "h", "text": f"Exercitium {m.group(1)}"})
            rest = m.group(2).strip()
            if rest:
                push_text(rest)
            continue
        m = ITEM_RE.match(s)
        if m:
            blocks.append({"t": "li", "n": int(m.group(1)), "text": clean_inline(m.group(2))})
            continue
        push_text(s)

    return blocks, margin


def ex_toc_starts(toc_lines: list[str]) -> dict[int, int]:
    """From the INDEX LECTIONVM, map each capitulum number to its printed start page."""
    starts: dict[int, int] = {}
    cur: int | None = None
    for ln in toc_lines:
        m = re.match(r"^Cap\.\s*([IVXL]+)\b", ln, re.I)
        if m:
            cur = roman_to_int(m.group(1).upper())
            continue
        if cur is None:
            continue
        m = re.search(r"ex\.\s*(\d+)(?:\s*[-–]\s*\d+)?\s+(\d{1,3})\s*$", ln)
        if m:
            page = int(m.group(2))
            if cur not in starts or page < starts[cur]:
                starts[cur] = page
    return starts


def build_exercitia() -> dict:
    if not EXERCITIA_JSONL.exists():
        raise SystemExit(f"missing {EXERCITIA_JSONL} — run scripts/ocr-book.py first")

    pages: dict[int, str] = {}
    for line in EXERCITIA_JSONL.read_text().splitlines():
        if line.strip():
            rec = json.loads(line)
            pages[rec["page"]] = rec.get("text", "")

    def page_main_margin(n: int) -> tuple[str, str]:
        text = pages.get(n, "")
        if "===MARGIN===" in text:
            main, _, marg = text.partition("===MARGIN===")
            return main, marg
        return text, ""

    chapters: list[dict] = []

    def ensure(sid, number, roman, title, latin, blocks, margin):
        ch = {"id": sid, "number": number, "roman": roman, "title": title,
              "latinTitle": latin, "blocks": [], "margin": []}
        chapters.append(ch)
        ch["blocks"].extend(blocks)
        ch["margin"].extend(margin)
        return ch

    # ---- front matter ----------------------------------------------------- #
    toc_lines: list[str] = []
    toc_start = None
    for n in range(1, EXERCITIA_PAGE_OFFSET + 1):
        if "INDEX LECTIONVM" in pages.get(n, "").upper():
            toc_start = n
            break
    if toc_start is not None:
        for n in range(toc_start, EXERCITIA_PAGE_OFFSET + 1):
            main, _ = page_main_margin(n)
            if not re.search(r"(Cap\.|L[ēe]cti[ōo])", main):
                break  # the index has ended; anything after is other front matter
            for ln in main.splitlines():
                ln = ln.strip()
                if ln and not re.fullmatch(r"INDEX LECTIONVM", ln, re.I):
                    toc_lines.append(ln)
    if toc_lines:
        blocks = []
        for ln in toc_lines:
            if re.match(r"^Cap\.", ln):
                blocks.append({"t": "h", "text": ln})
            else:
                blocks.append({"t": "p", "text": ln})
        ensure("index-lectionum", None, "Index", "Index Lēctiōnum", "INDEX LECTIONVM", blocks, [])

    notae = []
    for n in range(1, EXERCITIA_PAGE_OFFSET + 1):
        main, _ = page_main_margin(n)
        if re.search(r"^\s*NOTAE\s*$", main, re.M):
            for ln in main.splitlines():
                ln = ln.strip()
                if ln and not re.fullmatch(r"NOTAE", ln):
                    notae.append(ln)
    if notae:
        ensure("notae", None, "Notae", "Abbreviations", "NOTAE",
               [{"t": "p", "text": t} for t in notae], [])

    # ---- capitula --------------------------------------------------------- #
    # Chapter boundaries. The authoritative source is the book's own index
    # (INDEX LECTIONVM), which gives the printed start page of every capitulum;
    # a "CAPITVLVM …" heading found on the page is used to confirm it when the
    # OCR read it cleanly.
    detected: dict[int, int] = {}
    for n in sorted(pages):
        main, _ = page_main_margin(n)
        for ln in main.splitlines():
            m = CHAPTER_OPEN.match(ln.strip())
            if m:
                num = ex_ordinal(m.group(1))
                if num and num not in detected:
                    detected[num] = n
                break

    starts: dict[int, int] = dict(detected)
    for num, page in ex_toc_starts(toc_lines).items():
        pdf_page = page + EXERCITIA_PAGE_OFFSET
        # trust the index unless the heading was found right where it should be
        if num not in starts or abs(starts[num] - pdf_page) > 2:
            starts[num] = pdf_page

    nums = sorted(starts)
    for i, num in enumerate(nums):
        first = starts[num]
        if i + 1 < len(nums):
            last = starts[nums[i + 1]] - 1
        else:
            # For the final chapter, run on until the exercise pages stop.
            last = first
            for n in range(first + 1, max(pages) + 1):
                main, _ = page_main_margin(n)
                if not re.search(r"(Exercitium|L[ēe]cti[ōo]|\d\.\s)", main):
                    break
                last = n
        main_lines: list[str] = []
        margin: list[str] = []
        for n in range(first, last + 1):
            m_main, m_margin = page_main_margin(n)
            main_lines.extend(m_main.splitlines())
            for ln in m_margin.splitlines():
                ln = ln.strip()
                if not ln or ex_is_running_head(ln):
                    continue
                margin.append(ln)
        blocks, margin2 = ex_blocks(main_lines)
        margin.extend(margin2)
        # de-duplicate margin lines, preserving order
        seen = set()
        deduped = []
        for ln in margin:
            if ln not in seen:
                seen.add(ln)
                deduped.append(ln)
        latin = f"CAPITVLVM {ex_ordinal_inv(num)}"
        ensure(f"cap-{num:02d}", num, ROMAN[num], FR_CHAPTER_TITLES.get(num, ""), latin,
               blocks, deduped)

    # ---- back matter: the grammatical index ------------------------------- #
    idx_start = None
    for n in sorted(pages):
        main, _ = page_main_margin(n)
        if re.search(r"^\s*INDEX GRAMMATICVS\s*$", main, re.M):
            idx_start = n
            break
    if idx_start is not None:
        idx_blocks: list[dict] = []
        for n in range(idx_start, max(pages) + 1):
            main, _ = page_main_margin(n)
            head = next((l.strip() for l in main.splitlines() if l.strip()), "")
            if re.match(r"^L[ēe]cti[ōo]\b", head) or "This is the Focus edition" in main:
                break  # the index ends; what follows is a sample/advert
            for ln in main.splitlines():
                ln = ln.strip()
                if not ln or ex_is_running_head(ln):
                    continue
                if re.fullmatch(r"[A-Z]", ln):
                    idx_blocks.append({"t": "h", "text": ln})
                else:
                    idx_blocks.append({"t": "p", "text": ln})
        if idx_blocks:
            ensure("index-grammaticus", None, "Index", "Index Grammaticus",
                   "INDEX GRAMMATICVS", idx_blocks, [])

    return {
        "index": {
            "title": "Lingua Latina: Exercitia Latina I",
            "latinTitle": "LINGVA LATINA PER SE ILLVSTRATA · EXERCITIA LATINA I",
            "author": "Hans H. Ørberg",
        },
        "chapters": [c for c in chapters if c["blocks"]],
    }


def ex_ordinal_inv(num: int) -> str:
    for k, v in FR_ORD.items():
        if v == num:
            return k
    return str(num)


# --------------------------------------------------------------------------- #

BUILDERS = {
    "familia-romana": build_familia_romana,
    "companion": lambda: build_delimited(
        "companion", read_lines("companion.txt"), COMPANION_TOC, companion_head, COMPANION_NOISE,
        [re.compile(r"^\d+\.\s+[A-Z]"), re.compile(r"^[a-z]\.\s"), re.compile(r"^Lēctiō"),
         re.compile(r"^Rēs Grammaticae")],
        extra_titles=[
            "Grammatica Latina", "Vocabulary by Chapter", "Latin-English Vocabulary",
            "Latin–English Vocabulary", "Grammatical Terms", "Index", "Preface",
            "For the Instructor", "To the Student", "Familia Romana: Suggestions for the Classroom",
            "Lingua Latina as a Two-Semester Course",
        ],
        back_sections=[
            ("grammatica-latina", "Gram.", "Grammatica Latina", "Grammatica Latina"),
            ("vocabulary-by-chapter", "Voc.", "Vocabulary by Chapter", "Vocabulary by Chapter"),
            ("latin-english-vocabulary", "L–E", "Latin–English Vocabulary", "Latin–English Vocabulary"),
            ("grammatical-terms", "Terms", "Grammatical Terms", "Grammatical Terms"),
            ("index", "Idx", "Index", "Index"),
        ],
    ),
    "learn-latin": build_learn_latin,
    "latin-via-ovid": build_latin_via_ovid,
    "exercitia": build_exercitia,
}


BOOK_META = {
    "learn-latin": {
        "title": "Learn Latin from the Romans",
        "latinTitle": "DISCERE LATINAM A ROMANIS",
        "author": "Eleanor Dickey",
    },
    "companion": {
        "title": "A Companion to Familia Romana",
        "latinTitle": "COMES FAMILIAE ROMANAE",
        "author": "Jeanne Marie Neumann",
    },
    "latin-via-ovid": {
        "title": "Latin via Ovid: A First Course",
        "latinTitle": "LATIN VIA OVID",
        "author": "Norma Goldman & Jacob E. Nyenhuis",
    },
    "exercitia": {
        "title": "Lingua Latina: Exercitia Latina I",
        "latinTitle": "LINGVA LATINA PER SE ILLVSTRATA · EXERCITIA LATINA I",
        "author": "Hans H. Ørberg",
    },
}


def load_generated() -> dict[str, dict]:
    """Read the existing sources.generated.js so a partial rebuild does not drop
    the entries for books that were not rebuilt in this run."""
    if not GEN.exists():
        return {}
    txt = GEN.read_text(encoding="utf-8")
    m = re.search(r"export const sources =\s*(\[.*\])\s*\n*export default", txt, re.S)
    if not m:
        return {}
    try:
        return {s["slug"]: s for s in json.loads(m.group(1))}
    except (json.JSONDecodeError, KeyError):
        return {}


def main():
    targets = sys.argv[1:] or list(BUILDERS)
    existing = load_generated()
    built: dict[str, dict] = {}
    for slug in targets:
        result = BUILDERS[slug]()
        slug_final = "familia-romana" if slug == "familia-romana" else slug
        meta = {
            "index": result["index"] if slug == "familia-romana"
            else BOOK_META.get(slug, {"title": slug}),
            "chapters": [c for c in result["chapters"] if c["blocks"]],
        }
        built[slug_final] = write_book(slug_final, meta)
        print(f"{slug_final}: {len(built[slug_final]['chapters'])} chapters -> {OUT / slug_final}")
        if slug == "learn-latin":
            write_capitula(meta["chapters"])

    # Merge: keep the previously generated entries, replace only what we rebuilt.
    merged = {**existing, **built}
    ordered = [merged[s] for s in existing if s in merged] + [
        merged[s] for s in built if s not in existing
    ]

    lines = ["// AUTO-GENERATED by scripts/build-sources.py — do not edit by hand.",
             "export const sources = "]
    lines.append(json.dumps(ordered, ensure_ascii=False, indent=2))
    lines.append("\n\nexport default sources\n")
    GEN.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {GEN}")


if __name__ == "__main__":
    main()
