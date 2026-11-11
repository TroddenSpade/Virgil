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
import capitulum41 from './capitulum-41.js'
import capitulum42 from './capitulum-42.js'
import capitulum43 from './capitulum-43.js'
import capitulum44 from './capitulum-44.js'
import capitulum45 from './capitulum-45.js'
import capitulum46 from './capitulum-46.js'
import capitulum47 from './capitulum-47.js'
import capitulum48 from './capitulum-48.js'
import capitulum49 from './capitulum-49.js'
import capitulum50 from './capitulum-50.js'
import capitulum51 from './capitulum-51.js'
import capitulum52 from './capitulum-52.js'
import capitulum53 from './capitulum-53.js'
import capitulum54 from './capitulum-54.js'
import capitulum55 from './capitulum-55.js'
import capitulum56 from './capitulum-56.js'
import capitulum57 from './capitulum-57.js'
import capitulum58 from './capitulum-58.js'
import capitulum59 from './capitulum-59.js'
import capitulum60 from './capitulum-60.js'
import capitulum61 from './capitulum-61.js'
import capitulum62 from './capitulum-62.js'
import capitulum63 from './capitulum-63.js'
import capitulum64 from './capitulum-64.js'
import capitulum65 from './capitulum-65.js'
import capitulum66 from './capitulum-66.js'

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
  41: capitulum41,
  42: capitulum42,
  43: capitulum43,
  44: capitulum44,
  45: capitulum45,
  46: capitulum46,
  47: capitulum47,
  48: capitulum48,
  49: capitulum49,
  50: capitulum50,
  51: capitulum51,
  52: capitulum52,
  53: capitulum53,
  54: capitulum54,
  55: capitulum55,
  56: capitulum56,
  57: capitulum57,
  58: capitulum58,
  59: capitulum59,
  60: capitulum60,
  61: capitulum61,
  62: capitulum62,
  63: capitulum63,
  64: capitulum64,
  65: capitulum65,
  66: capitulum66,
}

export const chapters = outline.map((entry) => ({ ...entry, ...detailed[entry.number] }))

export const book = {
  id: 'learn-latin',
  slug: 'learn-latin-from-the-romans',
  title: 'Learn Latin from the Romans',
  latinTitle: 'DISCERE LATINAM A ROMANIS',
  shortTitle: 'Learn Latin from the Romans',
  author: 'Eleanor Dickey',
  edition: 'First Edition',
  year: 2018,
  publisher: 'Cambridge University Press',
  isbn: '978-1-107-63577-0',
  level: 'Grammar-based alternative',
  language: 'English + Latin',
  summary:
    'A rigorous, grammar-and-exercises course that teaches Latin the way it was read for centuries, using passages from real Roman authors from the start.',
  description:
    'A complete introductory course built from ancient Latin-learning materials, the Colloquia. It explains the grammar step by step with thousands of practice sentences and longer passages from Roman authors. The full course is reproduced here chapter by chapter, with grammar, vocabulary and interactive practice.',
  accent: 'gold',
  status: 'active',
  kind: 'coursebook',
  unit: 'Chapter',
  unitPlural: 'Chapters',
  readingUnit: 'chapter',
  readingUnitPlural: 'chapters',
  collectionLabel: 'Capitula',
  exerciseLabel: 'Practices',
  collectionNote: 'Sixty-six chapters of grammar, vocabulary and translation practice, from the first Latin verb to the metre of the Aeneid.',
  startLabel: 'Start Chapter 1',
  chapterCount: outline.length,
  readingCount: outline.length,
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
}

export default book
