import { outline } from './outline.js'
import capitulum01 from './capitulum-01.js'
import capitulum02 from './capitulum-02.js'
import capitulum03 from './capitulum-03.js'
import capitulum04 from './capitulum-04.js'
import capitulum05 from './capitulum-05.js'
import capitulum06 from './capitulum-06.js'
import capitulum07 from './capitulum-07.js'
import capitulum08 from './capitulum-08.js'
import capitulum09 from './capitulum-09.js'
import capitulum10 from './capitulum-10.js'
import capitulum11 from './capitulum-11.js'
import capitulum12 from './capitulum-12.js'
import capitulum13 from './capitulum-13.js'
import capitulum14 from './capitulum-14.js'
import capitulum15 from './capitulum-15.js'

// Full lesson content, keyed by chapter number.
const detailed = {
  1: capitulum01,
  2: capitulum02,
  3: capitulum03,
  4: capitulum04,
  5: capitulum05,
  6: capitulum06,
  7: capitulum07,
  8: capitulum08,
  9: capitulum09,
  10: capitulum10,
  11: capitulum11,
  12: capitulum12,
  13: capitulum13,
  14: capitulum14,
  15: capitulum15,
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
