import { outline } from './outline.js'
import { extras } from './extras.js'
import capitulum01 from './capitulum-01.js'
import capitulum02 from './capitulum-02.js'
import capitulum03 from './capitulum-03.js'
import capitulum04 from './capitulum-04.js'
import capitulum05 from './capitulum-05.js'
import capitulum06 from './capitulum-06.js'
import capitulum07 from './capitulum-07.js'
import capitulum08 from './capitulum-08.js'
import capitulum09 from './capitulum-09.js'
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
}
export const chapters = outline.map((entry) => ({ ...entry, ...detailed[entry.number] }))
export const book = {
  id: 'sallustius-cicero-catilina',
  slug: 'sallustius-cicero-catilina',
  title: 'Sallustius & Cicero: Catilina',
  latinTitle: 'CATILINA',
  shortTitle: 'Catilina',
  author: 'Sallustius; Cicero',
  edition: 'Hans H. Ørberg (ed.)',
  year: 2005,
  publisher: 'Domus Latina',
  isbn: '978-1-58510-156-6',
  level: 'Reader — Sallust and Cicero on Catiline',
  language: 'Latin',
  summary: 'Sallust’s account of the Catilinarian conspiracy with Cicero’s first and third Catilinarian orations and the portrait from Pro Caelio.',
  description: 'The nine selections of Ørberg’s Catilina: Sallust’s narrative of the conspiracy and Cicero’s speeches, printed in the edition’s order with the Latin text and marginal notes.',
  accent: 'wine',
  status: 'active',
  kind: 'reader',
  unit: 'Caput',
  unitPlural: 'Capita',
  readingUnit: 'sectiō',
  readingUnitPlural: 'sectiōnēs',
  collectionLabel: 'Capita',
  readingLabel: 'Textus',
  collectionNote: 'Nine selections from Sallust and Cicero, with the edition’s marginalia.',
  startLabel: 'Incipit Catilina',
  chapterCount: 9,
  readingCount: 9,
  readyCount: 9,
  chapters,
  extras,
}
export default book
