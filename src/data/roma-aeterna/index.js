import { outline } from './outline.js'
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

// Full lesson content, keyed by chapter number.
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
  if (content) {
    return { ...entry, ...content, complete: true }
  }
  return { ...entry, complete: false, status: 'planned', overview: null, readings: [], grammar: [], vocabulary: [], pensa: [] }
})

export const book = {
  id: 'roma-aeterna',
  slug: 'roma-aeterna',
  title: 'Lingua Latina: Pars II — Roma Aeterna',
  latinTitle: 'LINGVA LATINA PER SE ILLVSTRATA · PARS II',
  shortTitle: 'Roma Aeterna',
  author: 'Hans H. Ørberg',
  edition: 'Second Edition, with Full Color Illustrations',
  year: 2017,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-1-58510-863-3',
  level: 'Intermediate — the story of Rome',
  language: 'Latin',
  chapterCount: outline.length,
  readyCount: chapters.filter((c) => c.complete).length,
  summary:
    'The second part of Lingua Latina per se Illustrata. The story leaves the household of Iūlius and ' +
    'follows Aeneas from burning Troy to Italy, then Rome herself from her first kings to the fall of ' +
    'the Republic — all in Latin, with the words of Vergil, Livy, Cicero and Sallust adapted for learners.',
  description:
    'Roma Aeterna continues the direct-method course of Familia Romana. Its twenty-one capitula read the ' +
    'Roman story in the original words of the classical authors — Vergil for Aeneas, Livy for the kings ' +
    'and the Republic, Cicero for its last days — with marginal notes that explain the new vocabulary and ' +
    'grammar in Latin. Each chapter keeps the book’s own readings, notes, vocabulary and pensa.',
  accent: 'gold',
  status: 'active',
}

export default book
