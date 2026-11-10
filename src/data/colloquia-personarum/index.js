import { outline } from './outline.js'
import { extras } from './extras.js'
import colloquium01 from './colloquium-01.js'
import colloquium02 from './colloquium-02.js'
import colloquium03 from './colloquium-03.js'
import colloquium04 from './colloquium-04.js'
import colloquium05 from './colloquium-05.js'
import colloquium06 from './colloquium-06.js'
import colloquium07 from './colloquium-07.js'
import colloquium08 from './colloquium-08.js'
import colloquium09 from './colloquium-09.js'
import colloquium10 from './colloquium-10.js'
import colloquium11 from './colloquium-11.js'
import colloquium12 from './colloquium-12.js'
import colloquium13 from './colloquium-13.js'
import colloquium14 from './colloquium-14.js'
import colloquium15 from './colloquium-15.js'
import colloquium16 from './colloquium-16.js'
import colloquium17 from './colloquium-17.js'
import colloquium18 from './colloquium-18.js'
import colloquium19 from './colloquium-19.js'
import colloquium20 from './colloquium-20.js'
import colloquium21 from './colloquium-21.js'
import colloquium22 from './colloquium-22.js'
import colloquium23 from './colloquium-23.js'
import colloquium24 from './colloquium-24.js'

// Full Latin colloquia, keyed by number.
const detailed = {
  1: colloquium01,
  2: colloquium02,
  3: colloquium03,
  4: colloquium04,
  5: colloquium05,
  6: colloquium06,
  7: colloquium07,
  8: colloquium08,
  9: colloquium09,
  10: colloquium10,
  11: colloquium11,
  12: colloquium12,
  13: colloquium13,
  14: colloquium14,
  15: colloquium15,
  16: colloquium16,
  17: colloquium17,
  18: colloquium18,
  19: colloquium19,
  20: colloquium20,
  21: colloquium21,
  22: colloquium22,
  23: colloquium23,
  24: colloquium24,
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  return { ...entry, ...content }
})

export const book = {
  id: 'colloquia-personarum',
  slug: 'colloquia-personarum',
  title: 'Lingua Latina: Colloquia Personarum',
  latinTitle: 'COLLOQVIA PERSONARVM',
  shortTitle: 'Colloquia Personarum',
  author: 'Hans H. Ørberg',
  edition: 'Second Edition',
  year: 2019,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-1-58510-938-8',
  level: 'Reader — 24 Latin colloquia',
  language: 'Latin',
  summary:
    'Twenty-four short Latin dialogues, one after each chapter of Familia Romana, ' +
    'with the book’s own marginal notes and characters.',
  description:
    'The Colloquia Personarum are the companion dialogues to Familia Romana: after every chapter ' +
    'of the reader, a short scene in Latin takes the same characters through the language they ' +
    'have just met. The text is reproduced here in the book’s own order and spelling, with its ' +
    'marginalia, declensions and vocabulary.',
  accent: 'laurel',
  status: 'active',
  kind: 'reader',
  chapterCount: outline.length,
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
