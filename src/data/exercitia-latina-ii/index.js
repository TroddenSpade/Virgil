import { outline } from './outline.js'
import { extras } from './extras.js'
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

const detailed = {
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
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  if (content) return { ...entry, ...content, complete: true }
  return { ...entry, complete: false, status: 'planned', overview: null, readings: [], grammar: [], vocabulary: [], pensa: [] }
})

export const book = {
  id: 'exercitia-latina-ii',
  slug: 'exercitia-latina-ii',
  kind: 'workbook',
  title: 'Lingua Latina: Exercitia Latina II',
  latinTitle: 'EXERCITIA LATINA II',
  shortTitle: 'Exercitia Latina II',
  author: 'Hans H. Ørberg',
  edition: 'First Edition',
  year: 2007,
  publisher: 'Focus Publishing / R. Pullins',
  isbn: '978-1-58510-067-5',
  level: 'Exercise book to Roma Aeterna',
  language: 'Latin',
  unit: 'Capitulum',
  unitPlural: 'capitula',
  readingUnit: 'exercitium',
  readingUnitPlural: 'exercitia',
  collectionLabel: 'Exercitia',
  readingLabel: 'Exercitia',
  exerciseLabel: 'Exercitia',
  collectionNote: 'The printed exercises for each chapter of Roma Aeterna, with blanks to complete.',
  startLabel: 'Start Capitulum XXXVI',
  chapterCount: outline.length,
  readingCount: chapters.reduce((sum, c) => sum + (c.pensa?.length || 0), 0),
  exerciseCount: chapters.reduce((sum, c) => sum + (c.pensa?.reduce((n, p) => n + p.items.length, 0) || 0), 0),
  readyCount: chapters.filter((c) => c.complete).length,
  summary:
    'The companion exercise book to Roma Aeterna: the printed drills for every Lēctiō ' +
    'and every chapter of grammar, from Capitulum XXXVI to Capitulum LVI.',
  description:
    'Exercitia Latina II supplies the written exercises that accompany each chapter of ' +
    'Roma Aeterna. The Latin text of every exercise is reproduced here in the book’s own ' +
    'order, under its Lēctiō headings and with the printed exercise numbers.',
  accent: 'laurel',
  status: 'active',
  chapters,
  extras,
}

export default book
