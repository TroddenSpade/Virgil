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

// Full exercise content, keyed by chapter number.
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
  if (content) return { ...entry, ...content, complete: true }
  return { ...entry, complete: false, status: 'planned', overview: null, readings: [], grammar: [], vocabulary: [], pensa: [] }
})

export const book = {
  id: 'exercitia-latina',
  slug: 'exercitia-latina',
  title: 'Lingua Latina: Exercitia Latina I',
  latinTitle: 'EXERCITIA LATINA I',
  shortTitle: 'Exercitia Latina',
  author: 'Hans H. Ørberg',
  edition: 'First Edition',
  year: 2005,
  publisher: 'Focus Publishing / R. Pullins',
  isbn: '978-1-58510-212-9',
  level: 'Exercise book to Familia Romana',
  language: 'Latin',
  chapterCount: outline.length,
  readyCount: chapters.filter((c) => c.complete).length,
  summary:
    'The companion exercise book to Familia Romana: extra written drills for every Lēctiō ' +
    'and every chapter of grammar, to be worked alongside the course.',
  description:
    'Exercitia Latina I supplies the additional exercises that sit beside each chapter of ' +
    'Familia Romana — a Lēctiō prīma, secunda and tertia set with a Lēctiō grammatica, all in ' +
    'Latin. Each chapter is presented as a sequence of interactive exercises with the ' +
    'side-margin vocabulary and grammar gathered for reference.',
  accent: 'laurel',
  status: 'active',
}

export default book
