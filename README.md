# Virgil

**A Latin learning project — from Ørberg's _Familia Romana_ to the works of Virgil.**

🌐 **Live site:** https://virgil.parsasam.ir/

Virgil is an installable web app (PWA) that teaches Latin by reading. It begins with the first
sentence of Hans H. Ørberg's _Lingua Latina per se Illustrata, Pars I: Familia Romana_ and builds,
chapter by chapter, toward the poetry of the _Aeneid_.

> _Roma in Italia est._ — Rome is in Italy. That is the first sentence. Everything follows from it.

---

## What is in here

The site is organised as a **library of books**. The two course books are open, together with three reference texts; Virgil's own works are the goal still on the roadmap.

| Section | Status | What it is |
| --- | --- | --- |
| **Lingua Latina: Pars I — Familia Romana** (Ørberg) | **Open** — 35 of 35 chapters written up | The core course. Each _capitulum_ is a full lesson. |
| **Lingua Latina: Pars II — Roma Aeterna** (Ørberg) | **Open** — 21 of 21 chapters written up | The sequel: Aeneas, the kings, and the Roman Republic in the words of the classical authors. |
| A Companion to Familia Romana (Neumann) | **Open** — full text reference | Grammar, translation help and cultural notes. |
| Learn Latin from the Romans (Dickey) | **Open** — full text reference | A grammar-based, second track. |
| Latin via Ovid (Goldman & Nyenhuis) | **Open** — full text reference | A reading course built on Ovid's _Metamorphoses_. |
| **The Works of Virgil** | Planned — **the goal** | The _Aeneid_, _Eclogues_ and _Georgics_ in the original. |

### Every chapter is a self-contained lesson

Following Ørberg's direct method, each chapter contains:

- **Lectio** — the Latin reading, with marginal notes that gloss the new words and forms.
- **Grammatica Latina** — the grammar the reading has just demonstrated, with the paradigms.
- **Vocabula** — the chapter's new words, with a search and a flashcard trainer.
- **Pensa A · B · C** — the original exercises, with instant answer-checking and model answers.

Chapters are marked **learned** by the reader, and progress is shown per book.

### Dictionary

The site includes a searchable **Dictionary** at `/dictionary`, built from the vocabulary of both course
books. It contains every taught headword with its macra, part of speech, English meaning, the chapters in
which it appears, and examples drawn from the readings. The data is generated with:

```bash
node scripts/build-dictionary.mjs   # writes src/data/dictionary.generated.js
```

### Completed lessons

| Book | Chapters | Contents |
| --- | --- | --- |
| **Familia Romana** | I–XXXV | All thirty-five capitula, each with reading, grammar, vocabulary and three _pensa_. |
| **Roma Aeterna** | XXXVI–LVI | All twenty-one capitula, following Aeneas from Troy and Rome from its first kings to the fall of the Republic. |

---

## Tech

- **React 19 + Vite 7**
- **React Router 7**
- **vite-plugin-pwa** — installable PWA with an offline-capable service worker

Content is data-driven: each chapter is a module in `src/data/familia-romana/` or
`src/data/roma-aeterna/`, so adding a chapter means adding one file and listing it in the
book's `outline.js`.

```
src/
├─ data/
│  ├─ library.js                 # the curriculum (books + roadmap)
│  ├─ dictionary.generated.js    # the course dictionary (built by scripts/build-dictionary.mjs)
│  ├─ familia-romana/            # Pars I — 35 capitula
│  │  ├─ index.js                # book metadata + merges outline with content
│  │  ├─ outline.js              # the 35 chapter titles (table of contents)
│  │  └─ capitulum-01..35.js     # full lesson content
│  └─ roma-aeterna/              # Pars II — 21 capitula
│     ├─ index.js
│     ├─ outline.js
│     └─ capitulum-36..56.js
├─ components/                   # Reading, GrammarSection, Vocabulary, Pensum, …
├─ pages/                        # Home, Library, BookPage, ChapterPage, Approach
└─ hooks/                        # localStorage progress + PWA install prompt
```

### Exercise syntax

Exercise text uses `{{answer}}` (or `{{answer|alternative}}`) to mark a blank that the learner
fills in, e.g.:

```js
'Nilus fluvi{{us}} est. Nilus et Rhenus fluvi{{i}} sunt.'
```

Question exercises are `{ q: '…', a: '…' }` pairs that the learner can reveal.

---

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build (needed to test the PWA)
```

To see the **install prompt**, run `npm run build && npm run preview` and open the site —
a browser (Chrome/Edge) will offer to install Virgil as an app. It also works offline once
loaded, thanks to the service worker.

### Deployment (GitHub Pages)

The site is deployed automatically to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`, and served
at the custom domain **https://virgil.parsasam.ir/**.

The custom domain serves the site from the root, so the production build uses a `base` of `/`
(`public/CNAME` pins the domain). SPAs get a `404.html` fallback (generated by
`scripts/postbuild.mjs`). To build for Pages locally:

```bash
npm run build:pages   # sets VITE_BASE=/ and writes dist/404.html + dist/.nojekyll
```

### Regenerating icons

```bash
python3 scripts/generate-icons.py   # requires Pillow
```

---

## Notes on sources

The reading texts, grammar and exercises are adapted from **H. H. Ørberg, _Lingua Latina per se
Illustrata_**:

- **_Pars I: Familia Romana_** (2nd ed., Focus Publishing, 2012)
- **_Pars II: Roma Aeterna_** (2nd ed., Hackett Publishing)

They are re-typeset for the web. The PDFs/EPUBs of the source books are kept locally in `books/`
and are **not** tracked in git. The OCR text layer of the Roma Aeterna EPUB can be extracted for
authoring with:

```bash
python3 scripts/extract-roma-aeterna.py
```

---

## Roadmap

1. **Add the Companion** — grammar and translation help alongside the reading.
2. **Add a second track** — Dickey's _Learn Latin from the Romans_.
3. **Open Virgil** — the _Aeneid_, _Eclogues_ and _Georgics_, with vocabulary and scansion.

_Arma virumque cano…_
