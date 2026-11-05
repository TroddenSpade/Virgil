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

    for text, indent in entries:
        text = clean_inline(text)
        if not text:
            flush()
            continue
        if is_heading(text, heading_patterns):
            flush()
            blocks.append({"t": "h", "text": text})
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
for p in ROOT.glob("*.pdf"):
    if "Second Edition" in p.name:
        FR_PDF = p
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

def build_delimited(slug, lines, toc: list[tuple[int, str, str]], head_re_builder,
                    noise_res: list[re.Pattern], section_types=None,
                    extra_titles: list[str] | None = None) -> dict:
    """toc: list of (number, roman, title). head_re_builder(number,title)->compiled re."""
    # running headers repeat a chapter/part title (sometimes with a page number
    # stuck to either side); collect them so we can drop such lines.
    titles_lc = {fold(t).strip() for _, _, t in toc}
    for t in (extra_titles or []):
        titles_lc.add(fold(t).strip())

    def is_furniture(s: str) -> bool:
        core = re.sub(r"\d+", "", fold(s))
        core = re.sub(r"\s+", " ", core).strip(" .·—-")
        if len(core) < 12:
            return False
        return any(core.startswith(t) or t.startswith(core) for t in titles_lc if len(t) >= 12)
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

    chapters = []
    for idx, (line_no, number, roman, title) in enumerate(starts):
        end = starts[idx + 1][0] if idx + 1 < len(starts) else len(lines)
        body = lines[line_no + 1:end]
        entries: list[tuple[str, int]] = []
        for ln in strip_noise_lines(body):
            if not ln.strip():
                entries.append(("", 0))
                continue
            if any(r.match(ln) for r in noise_res):
                continue
            if is_furniture(ln):
                continue
            indent = len(ln) - len(ln.lstrip(" "))
            entries.append((ln, indent))
        blocks = reflow(entries, section_types or [])
        chapters.append(
            {"id": f"ch-{number:02d}", "number": number, "roman": roman, "title": title, "blocks": blocks}
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

BUILDERS = {
    "learn-latin": lambda: build_delimited(
        "learn-latin", read_lines("learn-latin.txt"), DICKEY_TOC, dickey_head, DICKEY_NOISE,
        [re.compile(r"^\d+(\.\d+)?\s+[A-Z]")],
        extra_titles=[
            "PART I", "PART II", "PART III", "PART IV", "PART V",
            "Introduction: What Latin Is", "The Pronunciation of Latin",
            "Preface: What This Textbook Is", "Appendices", "Contents",
            "Cumulative Vocabulary, Latin to English", "Cumulative Vocabulary, English to Latin",
        ],
    ),
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
    ),
    "familia-romana": build_familia_romana,
}


def main():
    targets = sys.argv[1:] or list(BUILDERS)
    summary = []
    for slug in targets:
        result = BUILDERS[slug]()
        if slug == "familia-romana":
            meta = {
                "index": result["index"],
                "chapters": [c for c in result["chapters"] if c["blocks"]],
            }
            slug_final = "familia-romana"
        else:
            meta = {
                "index": {
                    "title": "Learn Latin from the Romans" if slug == "learn-latin" else "A Companion to Familia Romana",
                    "latinTitle": "DISCERE LATINAM A ROMANIS" if slug == "learn-latin" else "COMES FAMILIAE ROMANAE",
                    "author": "Eleanor Dickey" if slug == "learn-latin" else "Jeanne Marie Neumann",
                },
                "chapters": [c for c in result["chapters"] if c["blocks"]],
            }
            slug_final = slug
        info = write_book(slug_final, meta)
        summary.append(info)
        print(f"{slug_final}: {len(info['chapters'])} chapters -> {OUT / slug_final}")

    # write the generated JS metadata module
    lines = ["// AUTO-GENERATED by scripts/build-sources.py — do not edit by hand.", "export const sources = "]
    lines.append(json.dumps(summary, ensure_ascii=False, indent=2))
    lines.append("\n\nexport default sources\n")
    GEN.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {GEN}")


if __name__ == "__main__":
    main()
