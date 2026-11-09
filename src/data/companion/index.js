import { outline } from './outline.js'
import { extras } from './extras.js'
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
import capitulum16 from './capitulum-16.js'
import capitulum17 from './capitulum-17.js'
import capitulum18 from './capitulum-18.js'
import capitulum19 from './capitulum-19.js'
import capitulum20 from './capitulum-20.js'
import capitulum21 from './capitulum-21.js'
import capitulum22 from './capitulum-22.js'
import capitulum23 from './capitulum-23.js'
import capitulum24 from './capitulum-24.js'
import capitulum25 from './capitulum-25.js'
import capitulum26 from './capitulum-26.js'
import capitulum27 from './capitulum-27.js'
import capitulum28 from './capitulum-28.js'
import capitulum29 from './capitulum-29.js'
import capitulum30 from './capitulum-30.js'
import capitulum31 from './capitulum-31.js'
import capitulum32 from './capitulum-32.js'
import capitulum33 from './capitulum-33.js'
import capitulum34 from './capitulum-34.js'
import capitulum35 from './capitulum-35.js'

// Full commentary, keyed by chapter number.
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
  16: capitulum16,
  17: capitulum17,
  18: capitulum18,
  19: capitulum19,
  20: capitulum20,
  21: capitulum21,
  22: capitulum22,
  23: capitulum23,
  24: capitulum24,
  25: capitulum25,
  26: capitulum26,
  27: capitulum27,
  28: capitulum28,
  29: capitulum29,
  30: capitulum30,
  31: capitulum31,
  32: capitulum32,
  33: capitulum33,
  34: capitulum34,
  35: capitulum35,
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  return { ...entry, ...content }
})

export const book = {
  id: 'companion',
  slug: 'companion-to-familia-romana',
  title: 'A Companion to Familia Romana',
  latinTitle: 'COMES FAMILIAE ROMANAE',
  shortTitle: 'Companion',
  author: 'Jeanne Marie Neumann',
  edition: 'Second Edition',
  year: 2016,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-1-58510-809-1',
  level: 'Companion — grammar, style and culture',
  language: 'English + Latin',
  summary:
    'A running grammatical and cultural commentary on every chapter of Familia Romana, ' +
    'with the book’s own explanations, examples, vocabulary and notes.',
  description:
    'Based on Ørberg’s Latine Disco, this Companion walks through every chapter of Familia Romana ' +
    'with fuller explanations of the grammar, notes on points of style and culture, and vocabulary. ' +
    'Each chapter follows the book’s own plan: Rēs Grammaticae Novae, the three Lēctiōnēs, ' +
    'Recēnsiō, Studia Rōmāna, and the chapter vocabulary.',
  accent: 'gold',
  status: 'active',
  kind: 'commentary',
  chapterCount: outline.length,
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
