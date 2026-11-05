import { outline } from './outline.js'
import capitulum01 from './capitulum-01.js'
import capitulum02 from './capitulum-02.js'
import capitulum03 from './capitulum-03.js'

// Full lesson content, keyed by chapter number.
const detailed = {
  1: capitulum01,
  2: capitulum02,
  3: capitulum03,
}

// Merge the complete table of contents with the chapters that are written up.
export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  if (content) {
    return { ...entry, ...content, complete: true }
  }
  return { ...entry, complete: false, status: 'planned', overview: null, readings: [], grammar: [], vocabulary: [], pensa: [] }
})

export const book = {
  id: 'familia-romana',
  slug: 'familia-romana',
  title: 'Lingua Latina: Pars I — Familia Romana',
  latinTitle: 'LINGVA LATINA PER SE ILLVSTRATA · PARS I',
  shortTitle: 'Familia Romana',
  author: 'Hans H. Ørberg',
  edition: 'Second Edition',
  year: 2012,
  publisher: 'Focus Publishing / R. Pullins',
  isbn: '978-1-58510-420-8',
  level: 'Beginning — complete foundation',
  language: 'Latin',
  // 35 capitula + appendices
  chapterCount: outline.length,
  // How many chapters currently have full lesson content (kept in sync automatically).
  readyCount: chapters.filter((c) => c.complete).length,
  summary:
    'The celebrated "direct method" course that teaches Latin entirely in Latin. ' +
    'You begin with one sentence about the Roman Empire and, chapter by chapter, arrive at ' +
    'real Latin stories — all without a single word of translation.',
  description:
    'Familia Romana is the first part of Ørberg’s Lingua Latina per se Illustrata. Its genius is ' +
    'that the meaning of every new word is made clear by the words around it, by pictures and by ' +
    'marginal notes — so you learn to think in Latin from the very first page. This section presents ' +
    'each of the thirty-five capitula as a self-contained lesson: reading, grammar, vocabulary and ' +
    'the original exercises (pensa).',
  accent: 'wine',
  status: 'active',
}

export default book
