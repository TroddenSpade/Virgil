import { outline } from './outline.js'
import { extras } from './extras.js'
import prologus from './prologus.js'
import actusi from './actus-i.js'
import actusii from './actus-ii.js'
import actusiii from './actus-iii.js'
import actusiv from './actus-iv.js'
import actusv from './actus-v.js'
const detailed = {
  1: prologus,
  2: actusi,
  3: actusii,
  4: actusiii,
  5: actusiv,
  6: actusv,
}
export const chapters = outline.map((entry) => ({ ...entry, ...detailed[entry.number] }))
export const book = {
  id: 'plautus-amphitryo',
  slug: 'plautus-amphitryo',
  title: 'Plautus: Amphitryo Comoedia',
  latinTitle: 'T. MACCI PLAVTI AMPHITRYO COMOEDIA',
  shortTitle: 'Amphitryo',
  author: 'T. Maccius Plautus',
  edition: 'Hans H. Ørberg (ed.)',
  year: 2014,
  publisher: 'Hackett Publishing',
  isbn: '978-1-58510-194-8',
  level: 'Reader — Plautus’ Amphitryo',
  language: 'Latin',
  summary: 'Plautus’ comedy of Jupiter, Mercury and the two Amphitryos, edited for students of the Lingua Latina course.',
  description: 'The Amphitryo in Plautus’ own words, with the edition’s preface, argument, personae, notes on grammar and verse, and indexes. The play is reproduced act by act.',
  accent: 'laurel',
  status: 'active',
  kind: 'reader',
  unit: 'Actus',
  unitPlural: 'Actūs',
  readingUnit: 'pars',
  readingUnitPlural: 'partes',
  collectionLabel: 'Actūs',
  readingLabel: 'Actus',
  collectionNote: 'The prologue and five acts of Plautus’ Amphitryo.',
  startLabel: 'Incipit Prologus',
  chapterCount: 6,
  readingCount: 6,
  readyCount: 6,
  chapters,
  extras,
}
export default book
