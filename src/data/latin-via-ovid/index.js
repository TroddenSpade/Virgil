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
import capitulum36 from './capitulum-36.js'
import capitulum37 from './capitulum-37.js'
import capitulum38 from './capitulum-38.js'
import capitulum39 from './capitulum-39.js'
import capitulum40 from './capitulum-40.js'

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
  36: capitulum36,
  37: capitulum37,
  38: capitulum38,
  39: capitulum39,
  40: capitulum40,
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  if (content) return { ...entry, ...content, complete: true }
  return { ...entry, complete: false, status: 'planned', overview: null, readings: [], grammar: [], vocabulary: [], pensa: [] }
})

export const book = {
  id: 'latin-via-ovid',
  slug: 'latin-via-ovid',
  title: 'Latin via Ovid: A First Course',
  latinTitle: 'LATIN VIA OVID',
  shortTitle: 'Latin via Ovid',
  author: 'Norma Goldman & Jacob E. Nyenhuis',
  edition: 'Second Edition',
  year: 1982,
  publisher: 'Wayne State University Press',
  isbn: '978-0-8143-1732-7',
  level: 'Reading-and-grammar course',
  language: 'English + Latin',
  chapterCount: outline.length,
  readyCount: chapters.filter((c) => c.complete).length,
  summary:
    'A first course in forty graded lessons, each built on an adapted story from Ovid’s Metamorphoses — ' +
    'from the geography of the ancient world all the way to Aeneas in Italy.',
  description:
    'A complete introductory course that teaches Latin through the stories of Ovid’s Metamorphoses. ' +
    'Every chapter pairs an adapted Latin reading with vocabulary (Verba), a grammar presentation ' +
    '(Structure), etymological notes and exercises. The lessons are arranged in the book’s own order ' +
    'and keep its Latin readings, vocabulary and exercises.',
  accent: 'wine',
  status: 'active',
}

export default book
