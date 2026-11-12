#!/usr/bin/env node
/**
 * Build the Iter — a single, gradually advancing Latin path assembled from
 * every book in the library.
 *
 * The path is grouped into grammatical stages, ordered from the first
 * rudiments to the reading of the authors. Every complete, routable chapter
 * of every book is placed in exactly one stage: a chapter joins the stage
 * that most of its grammar keywords belong to (ties go to the later stage,
 * so nothing is met before its foundations). Chapters that teach no grammar
 * — the readers and the original texts — fall into Lectiones, the final
 * reading stage, ordered by level.
 *
 * Output: src/data/learning-path.generated.js
 *
 * Run with: node scripts/build-learning-path.mjs
 * (after `npm run keywords`, which the chapter keywords depend on)
 */
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { books } from '../src/data/library.js'
import { describeKeyword } from '../src/data/keywords.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

/* ------------------------------------------------------------------ */
/* Stages: an ordered grammar curriculum                              */
/* ------------------------------------------------------------------ */

const STAGES = [
  {
    id: 'initium',
    latin: 'Initium',
    title: 'First steps',
    blurb:
      'The alphabet and the parts of speech; what a sentence is and how Latin marks its work with endings rather than word order.',
    topics: [
      'alphabet', 'parts-of-speech', 'inflection', 'noun', 'verb', 'adjective',
      'adverb', 'preposition', 'conjunction', 'interjection', 'gender', 'number',
      'agreement', 'word-order', 'questions', 'negation', 'commands',
      'present-tense', 'indicative',
    ],
  },
  {
    id: 'casus',
    latin: 'Casus',
    title: 'The cases and the declensions',
    blurb:
      'The six cases and the five declensions — how nouns, adjectives and pronouns change shape to show who does what to whom.',
    topics: [
      'case', 'nominative', 'accusative', 'genitive', 'dative', 'ablative',
      'vocative', 'locative', 'declension', 'first-declension',
      'second-declension', 'third-declension', 'fourth-declension',
      'fifth-declension', 'i-stems', 'numerals', 'time', 'place',
    ],
  },
  {
    id: 'tempora',
    latin: 'Tempora',
    title: 'Verbs and the tenses',
    blurb:
      'The four conjugations and the whole tense system, active and passive, with the principal parts that unlock every form.',
    topics: [
      'conjugation', 'first-conjugation', 'second-conjugation',
      'third-conjugation', 'fourth-conjugation', 'principal-parts',
      'verb-stems', 'imperfect-tense', 'future-tense', 'perfect-tense',
      'pluperfect-tense', 'future-perfect', 'active-voice', 'passive-voice',
      'deponent-verbs', 'infinitive', 'irregular-verbs', 'compound-verbs',
    ],
  },
  {
    id: 'pronomina',
    latin: 'Pronomina',
    title: 'Pronouns, comparison and word-building',
    blurb:
      'Personal, reflexive and demonstrative pronouns; possession; the comparison of adjectives and adverbs; and how Latin builds new words.',
    topics: [
      'pronoun', 'personal-pronouns', 'reflexive-pronouns',
      'demonstratives', 'possession', 'comparison', 'word-formation',
    ],
  },
  {
    id: 'subiunctivus',
    latin: 'Subiunctivus',
    title: 'The subjunctive and subordinate clauses',
    blurb:
      'The subjunctive mood with its sequence of tenses, and the clauses it governs: purpose, result, cum, indirect speech and conditions.',
    topics: [
      'subjunctive', 'sequence-of-tenses', 'purpose-clauses',
      'result-clauses', 'indirect-command', 'indirect-statement',
      'indirect-question', 'cum-clauses', 'conditionals',
      'ablative-absolute',
    ],
  },
  {
    id: 'verba-nominalia',
    latin: 'Verba nōminālia',
    title: 'Participles, gerund and gerundive',
    blurb:
      'The verbal adjectives and nouns — participles, the gerund and gerundive, the supine, and the periphrastic conjugations.',
    topics: ['participles', 'gerund', 'gerundive', 'supine', 'periphrastic'],
  },
  {
    id: 'ars-metrica',
    latin: 'Ars mētrica',
    title: 'The measure of verse',
    blurb:
      'Syllables and quantity, elision, and the scanning of hexameter and lyric metres — preparing the ear for Latin poetry.',
    topics: ['prosody', 'meter', 'reading-poetry'],
  },
  {
    id: 'lectiones',
    latin: 'Lēctiōnēs',
    title: 'The graded readers',
    blurb:
      'Longer reading in adapted and paraphrase Latin — the Sermones and the sacred history — where the grammar met so far is put to work on continuous narrative.',
    topics: [],
  },
  {
    id: 'auctores',
    latin: 'Auctōrēs',
    title: 'The authors themselves',
    blurb:
      'Original Latin at last, unadapted — Caesar and Sallust in history, Plautus on the stage, and the verse of Vergil, Ovid and Petronius.',
    topics: [],
  },
]

const STAGE_OF = new Map()
for (const stage of STAGES) {
  for (const topic of stage.topics) STAGE_OF.set(`grammar:${topic}`, stage.id)
}

const LEVEL_RANK = { beginner: 0, elementary: 1, intermediate: 2, advanced: 3 }

const BOOK_RANK = [
  'familia-romana',
  'colloquia-personarum',
  'exercitia-latina',
  'fabulae-syrae',
  'roma-aeterna',
  'exercitia-latina-ii',
  'companion-to-familia-romana',
  'companion-to-roma-aeterna',
  'learn-latin-from-the-romans',
  'latin-via-ovid',
  'sermones-romani',
  'epitome-historiae-sacrae',
  'caesar-de-bello-gallico-vii',
  'sallustius-cicero-catilina',
  'plautus-amphitryo',
  'vergil-aeneis-i-et-iv',
  'ovidii-ars-amatoria',
  'petronius-cena-trimalchionis',
]
const rankOfBook = (slug) => {
  const index = BOOK_RANK.indexOf(slug)
  return index === -1 ? BOOK_RANK.length : index
}

/* ------------------------------------------------------------------ */
/* Assembly                                                            */
/* ------------------------------------------------------------------ */

function grammarIds(chapter) {
  return (chapter.keywords || []).filter((id) => id.startsWith('grammar:'))
}

// A chapter *teaches* grammar when its own data carries structured grammar
// entries or section headings. The pure readers and the original texts carry
// none: their grammar tags come from reading-text detection, which is a useful
// label but far too coarse to place a chapter on the road.
function teachesGrammar(chapter) {
  return Boolean(
    (chapter.grammar && chapter.grammar.length) || (chapter.sections && chapter.sections.length),
  )
}

// Tags so general that every chapter's early lessons mention them. A chapter
// is placed by its *topical* grammar — the cases, the tenses, the moods — and
// only falls back to these common tags when it teaches nothing more specific.
const FOUNDATIONAL = new Set([
  'alphabet', 'parts-of-speech', 'inflection', 'noun', 'verb', 'adjective',
  'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'gender',
  'number', 'case', 'agreement', 'word-order', 'questions', 'negation',
  'commands', 'present-tense', 'indicative', 'active-voice',
])

// Chapters that teach no grammar — the readers and the original texts — follow
// the level they are written for: the earliest join the first stages, the
// intermediate ones form the graded-reading stage, the advanced ones are the
// authors.
function readingStage(level) {
  if (level === 'beginner') return 'initium'
  if (level === 'elementary') return 'tempora'
  if (level === 'intermediate') return 'lectiones'
  return 'auctores'
}

// The workbook, reader and companion editions follow a core course chapter by
// number — the same link the keyword builder uses — so the path reuses it and
// e.g. Colloquium III sits beside Familia Romana chapter III.
const CORE_BOOK = {
  'familia-romana': 'familia-romana',
  'exercitia-latina': 'familia-romana',
  'colloquia-personarum': 'familia-romana',
  'fabulae-syrae': 'familia-romana',
  companion: 'familia-romana',
  'roma-aeterna': 'roma-aeterna',
  'exercitia-latina-ii': 'roma-aeterna',
  'companion-roma-aeterna': 'roma-aeterna',
}

function grammarStage(chapter) {
  const ids = grammarIds(chapter)
  const placed = ids.filter((id) => STAGE_OF.has(id))
  if (!placed.length) return { id: null, focus: null }

  const topical = placed.filter((id) => !FOUNDATIONAL.has(id.slice('grammar:'.length)))
  const pool = topical.length ? topical : placed

  const counts = new Map()
  for (const id of pool) {
    const stageId = STAGE_OF.get(id)
    counts.set(stageId, (counts.get(stageId) || 0) + 1)
  }

  let best = null
  let bestCount = -1
  for (const stage of STAGES) {
    const count = counts.get(stage.id) || 0
    if (count >= bestCount && count > 0) {
      // ties go to the later stage in the path, so nothing is met early
      best = stage.id
      bestCount = count
    }
  }
  // the focus shown on the card is the most relevant topical tag that belongs
  // to the stage the chapter was placed in, so the label always matches
  const focus = pool.find((id) => STAGE_OF.get(id) === best) || ids[0]
  return { id: best, focus }
}

function levelOf(chapter) {
  const id = (chapter.keywords || []).find((k) => k.startsWith('level:'))
  return id ? id.split(':')[1] : 'intermediate'
}

// First pass: place every chapter that teaches grammar, and remember where each
// core-course chapter landed so its companions can follow it.
const stageByCore = new Map()
const placements = new Map()
for (const book of books) {
  for (const chapter of book.chapters || []) {
    if (!chapter.complete) continue
    const key = `${book.slug}/${chapter.slug}`
    const grammar = teachesGrammar(chapter) ? grammarStage(chapter) : { id: null, focus: null }
    if (grammar.id) {
      placements.set(key, { id: grammar.id, focus: grammar.focus, reading: false })
      if (book.id === 'familia-romana' || book.id === 'roma-aeterna') {
        stageByCore.set(`${book.id}:${chapter.number}`, grammar.id)
      }
    } else {
      placements.set(key, { id: null, focus: null, reading: true })
    }
  }
}

// Second pass: resolve the readers and workbooks — first by inheriting their
// core chapter's stage, then by level.
const lessonsByStage = new Map(STAGES.map((stage) => [stage.id, []]))
let total = 0
for (const book of books) {
  for (const chapter of book.chapters || []) {
    if (!chapter.complete) continue
    const level = levelOf(chapter)
    const placement = placements.get(`${book.slug}/${chapter.slug}`)
    let stageId = placement.id
    let reading = placement.reading
    let focus = placement.focus
    if (!stageId) {
      const coreId = CORE_BOOK[book.id]
      stageId = (coreId && stageByCore.get(`${coreId}:${chapter.number}`)) || readingStage(level)
      reading = true
      focus = null
    }
    const lesson = {
      bookSlug: book.slug,
      bookId: book.id,
      bookShort: book.shortTitle || book.title,
      bookMark: book.heroMark || null,
      number: chapter.number,
      roman: chapter.roman || String(chapter.number),
      slug: chapter.slug,
      latinTitle: chapter.latinTitle || null,
      title: chapter.title || null,
      level,
      focus: focus ? describeKeyword(focus).label : null,
      reading,
      href: `/library/${book.slug}/${chapter.slug}`,
    }
    lessonsByStage.get(stageId).push(lesson)
    total += 1
  }
}

// Order within a stage: level first, then the library's own course order,
// then the chapter number — so the path always advances.
for (const stage of STAGES) {
  const list = lessonsByStage.get(stage.id)
  list.sort(
    (a, b) =>
      LEVEL_RANK[a.level] - LEVEL_RANK[b.level] ||
      rankOfBook(a.bookSlug) - rankOfBook(b.bookSlug) ||
      a.number - b.number,
  )
  stage.lessons = list.map((lesson) => ({
    ...lesson,
    levelRank: LEVEL_RANK[lesson.level] ?? 2,
  }))
  stage.lessonCount = list.length
  stage.topics = stage.topics.map((topic) => `grammar:${topic}`)
}

// Integrity: every complete chapter of every book appears exactly once.
{
  const placed = new Set()
  for (const stage of STAGES) {
    for (const lesson of stage.lessons) {
      const key = `${lesson.bookSlug}/${lesson.slug}`
      if (placed.has(key)) throw new Error(`Iter: duplicate lesson ${key}`)
      placed.add(key)
    }
  }
  let expected = 0
  for (const book of books) {
    for (const chapter of book.chapters || []) {
      if (!chapter.complete) continue
      expected += 1
      const key = `${book.slug}/${chapter.slug}`
      if (!placed.has(key)) throw new Error(`Iter: missing lesson ${key}`)
    }
  }
  if (placed.size !== expected) {
    throw new Error(`Iter: placed ${placed.size} lessons but expected ${expected}`)
  }
}

const out = `// Generated by scripts/build-learning-path.mjs — do not edit by hand.
// The Iter: every complete chapter of every book, placed on one path and
// grouped into grammatical stages that run from the first rudiments to the
// reading of the authors. Learned state is added at runtime from the
// per-book progress document.

export const iterStages = ${JSON.stringify(STAGES, null, 2)}

export const iterLessonCount = ${total}

export default iterStages
`

await writeFile(join(ROOT, 'src/data/learning-path.generated.js'), out, 'utf8')

console.log('Wrote src/data/learning-path.generated.js')
console.log('lessons:', total)
for (const stage of STAGES) {
  console.log(`  ${stage.id.padEnd(18)} ${String(stage.lessonCount).padStart(4)}  ${stage.latin}`)
}
