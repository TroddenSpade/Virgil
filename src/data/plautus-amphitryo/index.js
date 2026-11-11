import { outline } from './outline.js'
import { extras } from './extras.js'
import prologus from './prologus.js'
import actusI from './actus-i.js'
import actusII from './actus-ii.js'
import actusIII from './actus-iii.js'
import actusIV from './actus-iv.js'
import actusV from './actus-v.js'

const detailed = {
  1: prologus,
  2: actusI,
  3: actusII,
  4: actusIII,
  5: actusIV,
  6: actusV,
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  return { ...entry, ...content }
})

export const book = {
  id: 'plautus-amphitryo',
  slug: 'plautus-amphitryo',
  title: 'Plautus: Amphitryo Comoedia',
  latinTitle: 'T. MACCI PLAVTI AMPHITRYO COMOEDIA',
  shortTitle: 'Amphitryo',
  author: 'T. Maccius Plautus',
  edition: 'Hans H. Ørberg (ed.)',
  year: 2014,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-1-58510-194-8',
  level: 'Reader — Plautus’ Amphitryo',
  language: 'Latin',
  summary:
    'Plautus’ comedy of Iuppiter, Mercurius and the two Amphitryos, edited for students of the Lingua Latina course.',
  description:
    'The Amphitryo of Plautus in the edition of Hans H. Ørberg, with the book’s own prologue, five acts, ' +
    'marginal notes, preface, argument, personae, notes on grammar and verse, and indexes. The Latin is ' +
    'reproduced in the edition’s order and spelling, act by act and scene by scene, with the printed macra restored.',
  accent: 'laurel',
  status: 'active',
  kind: 'reader',
  unit: 'Actus',
  unitPlural: 'Actūs',
  readingUnit: 'scaena',
  readingUnitPlural: 'scaenae',
  collectionLabel: 'Actūs',
  readingLabel: 'Scaenae',
  collectionNote:
    'The prologue and five acts of Plautus’ Amphitryo, with the edition’s marginal notes.',
  startLabel: 'Incipit Prologus',
  chapterCount: outline.length,
  readingCount: chapters.reduce((sum, c) => sum + (c.readings?.length || 0), 0),
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
