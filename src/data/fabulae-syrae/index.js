import { outline } from './outline.js'
import { extras } from './extras.js'
import capitulum26 from './capitulum-26.js'
import capitulum27 from './capitulum-27.js'
import capitulum28 from './capitulum-28.js'
import capitulum29 from './capitulum-29.js'
import capitulum30 from './capitulum-30.js'
import capitulum31 from './capitulum-31.js'
import capitulum32 from './capitulum-32.js'
import capitulum33 from './capitulum-33.js'
import capitulum34 from './capitulum-34.js'

const detailed = {
  26: capitulum26,
  27: capitulum27,
  28: capitulum28,
  29: capitulum29,
  30: capitulum30,
  31: capitulum31,
  32: capitulum32,
  33: capitulum33,
  34: capitulum34,
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  return { ...entry, ...content }
})

export const book = {
  id: 'fabulae-syrae',
  slug: 'fabulae-syrae',
  title: 'Fabulae Syrae',
  latinTitle: 'FABVLAE SYRAE',
  shortTitle: 'Fabulae Syrae',
  author: 'Luigi Miraglia',
  edition: 'First Edition',
  year: 2011,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-1-58510-428-4',
  level: 'Reader — 45 Latin fables',
  language: 'Latin',
  summary:
    'Forty-five Greek and Roman fables retold in Latin, five for each chapter of Familia Romana from XXVI to XXXIV.',
  description:
    'The Fabulae Syrae are the fable-reader that follows the second half of Familia Romana. Syra the nurse ' +
    'tells Greek and Roman stories in the Latin the student has just met, with the book’s own marginal notes, ' +
    'declensions and principal parts. The text is reproduced here in the book’s own order and spelling, five ' +
    'fables for each chapter from XXVI to XXXIV, with a preface and the two indexes.',
  accent: 'laurel',
  status: 'active',
  kind: 'reader',
  unit: 'Capitulum',
  unitPlural: 'Capitula',
  readingUnit: 'fable',
  readingUnitPlural: 'fables',
  collectionLabel: 'Fabulae',
  readingLabel: 'Fābulae',
  collectionNote:
    'Forty-five Greek and Roman fables, five for each chapter of Familia Romana, with the book’s own marginalia.',
  startLabel: 'Start Capitulum XXVI',
  chapterCount: outline.length,
  readingCount: chapters.reduce((sum, c) => sum + (c.readings?.length || 0), 0),
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
