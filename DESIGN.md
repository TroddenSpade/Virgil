# Virgil · Tabula

A redesign note for [virgil.parsasam.ir](https://virgil.parsasam.ir/) — the Latin reading
project. This document records the research, the visual system and how the new mark is made.

---

## 1. The brief

Virgil is the third site in a small family:

| Site | Character |
| --- | --- |
| **Rhetoric** — `rhetoric.parsasam.ir` | A warm-paper writing studio: cobalt and vermilion, Instrument Serif, Space Grotesk, hard offset shadows and printer's rules. |
| **Cadence** — `cadence.parsasam.ir` | A dark conservatory: green-black, lamp-lit gold, a soft serif, generous rounded panels. |
| **Virgil** — `virgil.parsasam.ir` | The reading room: papyrus, verdigris bronze, oxblood, inscriptional capitals. |

The goal was not to clone either sibling but to make a third volume from the same
imprint. The family traits that carry across all three are:

- warm paper or warm-black grounds, never pure white or pure black;
- a display serif and a grotesque for the interface;
- hairline rules, small-caps labels and a single, confident accent;
- flat, printed depth rather than glassy gradients.

Virgil's own branch is **Tabula** — the wax tablet, the bronze tablet, the carved
dedication. It is a reading app, so the page should feel like a codex, not a dashboard.

---

## 2. Research

**Roman writing.** The display face is modelled on *capitalis monumentalis* — the
wide, flared capitals of the Trajan inscription (AD 113), cut with a chisel and
finished with a brush. Roman inscriptions also give the system its structural
vocabulary: the double frame, the beaded border, the centered dedication, the
medallion portrait, and the *tabula ansata* (a framed tablet with handle tabs).
Rustic capitals and Roman cursive contribute the idea of a hand-made line: the
italic word inside a heading, the drawn stroke of the monogram.

**Bronze and papyrus.** Roman bronze tablets survive with a green patina; papyrus
and parchment warm toward ochre. That pairing — oxidized green against warm paper —
is Virgil's distinguishing note. Oxblood is kept as a second accent for the human
voice (the poet's name, the drop cap, corrections), and bronze is the metal that
ties the two together.

**Contemporary editorial systems.** The print-shop language of Rhetoric (flat
offset shadows, 1–2px rules, letter-spaced uppercase labels) and the warm dark of
Cadence were both studied. The type pairing follows the same logic: a high-contrast
display serif for the monumental voice, a book serif for reading, and a geometric
grotesque for the interface. Space Grotesk is deliberately shared with Rhetoric so
the two sites feel like siblings; Cinzel, Gentium and EB Garamond give Virgil its
Latin-specific voice.

**Framework decision.** The app stays on **React 19 + Vite 7 + React Router 7 +
vite-plugin-pwa**. It is a content-heavy, offline-capable reading app with an
existing data pipeline; rewriting the framework would add risk without improving
the reading experience. No CSS framework was introduced. The design is bespoke —
ornamental frames, macron-aware Latin typography and a portrait medallion are not
well served by utility defaults — so it is expressed as CSS custom properties plus
one design layer (`src/styles/tabula.css`) over the existing component sheet.

---

## 3. The system

### Palette

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--paper` | `#ece3d0` | `#0e1411` | Page ground |
| `--surface` | `#f8f2e3` | `#151d18` | Tablets, cards |
| `--ink` | `#19160f` | `#ede3ce` | Body text |
| `--patina` | `#2d5a4a` | `#96c3ad` | Primary accent, links |
| `--oxblood` | `#7b302a` | `#df9a8b` | Human voice, corrections |
| `--bronze` | `#7c5d2a` | `#d4b478` | Rules, labels, the seal |
| `--line` | `#cbbda1` | `#35433a` | Hairlines |
| `--footer-bg` | `#1b3b30` | `#070c09` | Colophon |

The light palette keeps body text at 14.2:1 and secondary text above 4.5:1 against
paper; the dark palette keeps body text at 14.6:1. The bronze was darkened from its
decorative value to `#7c5d2a` so 11px small-caps labels still pass AA (4.8:1).

### Type

| Role | Face | Notes |
| --- | --- | --- |
| Display | **Cinzel** | Trajan-derived inscriptional capitals. Headings, numerals, labels. |
| Body | **EB Garamond** | Long-form prose and the italic word inside a heading. |
| Latin | **Gentium Book Plus** | Chosen for full macron coverage (ā ē ī ō ū ȳ). |
| Interface | **Space Grotesk** | Shared with Rhetoric; uppercase labels and controls. |

Headings are sentence-case Cinzel at a tight line-height; the one italic word in a
heading (usually *Virgil*) is set in EB Garamond italic and oxblood, so the stone
inscription has a human voice.

### Geometry & ornament

- **2–3px radii.** The tablet has cut edges, not rounded cards.
- **Double hairlines.** `--frame` draws a 3px paper inset and a 1px inner rule,
  giving every card the look of a framed *tabula*. Borders stay 1px.
- **Flat lift.** Hovering a card moves it `-2px, -2px` and reveals a 3px hard
  shadow, a printer's offset rather than a blur.
- **Beaded ring.** The icon carries a 72-tick border, like a Roman coin.
- **Rule with a second line.** `hr.rule` is a 1px line with a second hairline
  two pixels below it.

### Voice & motion

The site speaks in Latin first and English second: *Bibliotheca*, *Lēctiō*,
*Grammatica Latīna*, *Pāgina non inventa*. Labels are small-caps; prose is warm and
direct. Motion is a single 10px rise on first paint, disabled by
`prefers-reduced-motion`. There are no parallax or decorative loops.

---

## 4. The mark

The old mark was a laurel wreath with a letter V. The new mark is a **Roman coin**:
an engraved portrait of Virgil inside a bronze ring, with the inscription
`PVBLIVS · VERGILIVS · MARO` around the top and `MANTVA` at the foot.

- **Source portrait:** the Vatican bust of Virgil, a public-domain photograph from
  Wikimedia Commons (`File:Publius Vergilius Maro.jpg`). The source is kept in
  `public/art/virgil-bust.jpg`; see `public/art/README.md`.
- **Treatment:** a square crop of the head and shoulders is converted to a
  four-stop bronze duotone (green-black → patina → bronze → cream), softened and
  vignetted into a deep patina field. The face stays legible at 512px and becomes a
  warm silhouette at 32px.
- **Furniture:** a cream hairline, a bronze band and a dark outer hairline around
  the portrait; a 72-tick beaded border; `PVBLIVS · VERGILIVS · MARO` set on an arc in
  Cinzel; `MANTVA` — the Roman spelling of Mantua, Virgil's birthplace, with V for U — and two bronze diamonds at the foot. The portrait and the
  inscription live in separate bands — the ring's top sits at 0.163 of the coin,
  the inscription between 0.377 and 0.417 — so the face is never covered by the
  lettering.
- **Outputs:** `public/icons/icon-192.png`, `icon-512.png`,
  `icon-maskable-512.png`, `apple-touch-icon.png`, `favicon-64.png`, and
  `virgil-medallion.svg` (a light SVG wrapper with an embedded raster copy for the
  header and favicon). `public/favicon.svg` is the same medallion.
- **Regenerate:** `npm run icons` (requires Pillow) — see
  `scripts/generate-icons.py`. The Cinzel cut used for the inscription is in
  `scripts/fonts/` under the SIL Open Font License.

The header uses the medallion at 40px beside the wordmark **VIRGIL**; the hero uses
the 512px version inside a bronze registration ring. The wordmark's second line,
`PVBLIVS·VERGILIVS·MARO`, is the poet's name in the Roman manner.

---

## 5. Files

```
src/styles/theme.css        tokens, light + dark palettes
src/styles/global.css       base, header, footer, buttons, cards, rules
src/styles/components.css   structural component styles (pre-existing)
src/styles/tabula.css       the Tabula visual layer (loaded last)
src/components/Logo.jsx     the medallion mark
src/pages/Home.jsx          inscription hero + portrait + closing motto
src/components/Footer.jsx   colophon with the sibling sites
scripts/generate-icons.py   portrait medallion rasteriser
public/art/                 public-domain source portrait
```

## 6. Sources

- Trajan's Column inscription, Rome (AD 113) — the model for *capitalis monumentalis*.
- *Virgil*, Vatican bust — public-domain photograph, Wikimedia Commons.
- *Virgil mosaic*, Bardo Museum, Tunis (3rd c. AD) — reference for the portrait
  medallion and the poet's iconography.
- Rhetoric (`rhetoric.parsasam.ir`) and Cadence (`cadence.parsasam.ir`) — the
  family's shared paper/ink/editorial language, studied in their shipped CSS.
- Cinzel by Natanael Gama; EB Garamond by Georg Duffner; Gentium by Victor Gaultney;
  Space Grotesk by Florian Karsten — all under the SIL Open Font License.
