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

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  return { ...entry, ...content }
})

export const book = {
  id: 'sallustius-cicero-catilina',
  slug: 'sallustius-cicero-catilina',
  title: 'Catilina',
  latinTitle: 'CATILINA',
  shortTitle: 'Catilina',
  author: 'Sallust and Cicero',
  edition: 'Hans H. Ørberg (ed.)',
  year: 2005,
  publisher: 'Domus Latina',
  isbn: '87-90696-11-5',
  level: 'Latin reader — 9 selections',
  language: 'Latin',
  summary:
    'Sallust’s account of Catiline’s conspiracy and Cicero’s speeches against him, in the Ørberg edition for students.',
  description:
    'This reader gathers the central narrative of the Catilinarian conspiracy: Sallust’s De Catilinae coniuratione ' +
    'and Cicero’s In Catilinam I and III, with the portrait of Catiline from the Pro Caelio. The Latin text, the ' +
    'selection headings, the authors’ names and the marginal notes follow the printed edition of Hans H. Ørberg ' +
    '(Domus Latina, 2005), with macra restored. The book’s Index Vocabulorum, Index Nominum and Notae are included ' +
    'as back matter.',
  accent: 'wine',
  status: 'active',
  kind: 'reader',
  unit: 'Capitulum',
  unitPlural: 'Capitula',
  readingUnit: 'selecțiō',
  readingUnitPlural: 'selecțiōnēs',
  collectionLabel: 'Selecțiōnēs',
  readingLabel: 'Textus',
  collectionNote:
    'Nine selections from Sallust and Cicero, with the edition’s marginal notes and indexes.',
  startLabel: 'Incipit Catilīna',
  chapterCount: outline.length,
  readingCount: chapters.reduce((sum, c) => sum + (c.readings?.length || 0), 0),
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
