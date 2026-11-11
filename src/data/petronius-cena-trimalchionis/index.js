import { outline } from './outline.js'
import { extras } from './extras.js'
import cena from './cena.js'

export const chapters = outline.map((entry) => ({ ...entry, ...cena }))

export const book = {
  id: 'petronius-cena-trimalchionis',
  slug: 'petronius-cena-trimalchionis',
  title: 'Petronius: Cena Trimalchionis',
  latinTitle: 'PETRONII CENA TRIMALCHIONIS',
  shortTitle: 'Cena Trimalchionis',
  author: 'Petronius',
  edition: 'First Edition',
  year: 2003,
  publisher: 'Domus Latina',
  isbn: '978-1-58510-156-6',
  level: 'Reader — Petronius’ Cena',
  language: 'Latin',
  summary: 'Petronius’ comic account of Trimalchio’s dinner, edited for students of the Lingua Latina course.',
  description: 'The Cena Trimalchionis, the most famous episode of Petronius’ Satyricon, with its feast, its freedmen and its grotesque host. The Latin text is reproduced in the edition’s order with a preface and the printed indexes.',
  accent: 'wine',
  status: 'active',
  kind: 'reader',
  unit: 'Cena',
  unitPlural: 'Cena',
  readingUnit: 'pars',
  readingUnitPlural: 'partes',
  collectionLabel: 'Cena',
  readingLabel: 'Cēna',
  collectionNote: 'The continuous text of the Cena, divided into reading sections.',
  startLabel: 'Incipit Cena',
  chapterCount: 1,
  readingCount: chapters.reduce((n,c)=>n+c.readings.length,0),
  readyCount: 1,
  chapters,
  extras,
}

export default book
