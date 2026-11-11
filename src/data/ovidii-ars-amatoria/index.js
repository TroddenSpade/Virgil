import { outline } from './outline.js'
import { extras } from './extras.js'
import liberI from './liber-i.js'
import liberII from './liber-ii.js'
import liberIII from './liber-iii.js'
const detailed = { 1: liberI, 2: liberII, 3: liberIII }
export const chapters = outline.map((entry) => ({ ...entry, ...detailed[entry.number] }))
export const book = {
  id: 'ovidii-ars-amatoria',
  slug: 'ovidii-ars-amatoria',
  title: 'Ovidii Nasonis: Ars Amatoria',
  latinTitle: 'P. OVIDII NASONIS ARS AMATORIA',
  shortTitle: 'Ars Amatoria',
  author: 'P. Ovidius Naso',
  edition: 'Hans H. Ørberg (ed.)',
  year: 2010,
  publisher: 'Domus Latina',
  isbn: '978-87-90696-18-2',
  level: 'Reader — three books of elegiac verse',
  language: 'Latin',
  summary: 'Ovid’s mock-didactic poem on the art of love, edited for students of the Lingua Latina course.',
  description: 'The Ars Amatoria in three books, with Ovid’s elegiac couplets and the edition’s marginal notes. The text is reproduced in the edition’s order, book by book.',
  accent: 'wine',
  status: 'active',
  kind: 'reader',
  unit: 'Liber',
  unitPlural: 'Libri',
  readingUnit: 'pars',
  readingUnitPlural: 'partes',
  collectionLabel: 'Libri',
  readingLabel: 'Versūs',
  collectionNote: 'Three books of elegiac verse, with the edition’s marginalia.',
  startLabel: 'Incipit Liber Primus',
  chapterCount: 3,
  readingCount: chapters.reduce((n,c)=>n+c.readings.length,0),
  readyCount: 3,
  chapters,
  extras,
}
export default book
