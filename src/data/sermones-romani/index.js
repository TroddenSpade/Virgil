import { outline } from './outline.js'
import { extras } from './extras.js'
import sermo01 from './sermo-01.js'
import sermo02 from './sermo-02.js'
import sermo03 from './sermo-03.js'
import sermo04 from './sermo-04.js'
import sermo05 from './sermo-05.js'
import sermo06 from './sermo-06.js'
import sermo07 from './sermo-07.js'
import sermo08 from './sermo-08.js'
import sermo09 from './sermo-09.js'
import sermo10 from './sermo-10.js'
import sermo11 from './sermo-11.js'
import sermo12 from './sermo-12.js'
import sermo13 from './sermo-13.js'
import sermo14 from './sermo-14.js'
import sermo15 from './sermo-15.js'
import sermo16 from './sermo-16.js'
import sermo17 from './sermo-17.js'
import sermo18 from './sermo-18.js'
import sermo19 from './sermo-19.js'
import sermo20 from './sermo-20.js'

const detailed = {
  1: sermo01,
  2: sermo02,
  3: sermo03,
  4: sermo04,
  5: sermo05,
  6: sermo06,
  7: sermo07,
  8: sermo08,
  9: sermo09,
  10: sermo10,
  11: sermo11,
  12: sermo12,
  13: sermo13,
  14: sermo14,
  15: sermo15,
  16: sermo16,
  17: sermo17,
  18: sermo18,
  19: sermo19,
  20: sermo20,
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  return { ...entry, ...content }
})

export const book = {
  id: 'sermones-romani',
  slug: 'sermones-romani',
  title: 'Sermones Romani',
  latinTitle: 'SERMONES ROMANI',
  shortTitle: 'Sermones Romani',
  author: 'Hans H. Ørberg',
  edition: 'First Edition',
  year: 2004,
  publisher: 'Domus Latina',
  isbn: '978-1-58510-156-6',
  level: 'Reader — 20 Latin readings',
  language: 'Latin',
  summary:
    'Twenty Latin readings from Plautus to the Acts of the Scillitan Martyrs, edited for students of Familia Romana.',
  description:
    'Sermones Romani gathers twenty passages of Latin prose and verse, from Plautus and Phaedrus through Cato, Tacitus, Luke, Cicero, Horace, Martial and Pliny to the Passio Scillitanorum. The readings are printed in the book’s own order with its marginal notes; the volume closes with the Notae and the two indexes.',
  accent: 'laurel',
  status: 'active',
  kind: 'reader',
  unit: 'Sermo',
  unitPlural: 'Sermones',
  readingUnit: 'lectiō',
  readingUnitPlural: 'lectiōnēs',
  collectionLabel: 'Sermones',
  readingLabel: 'Sermōnēs',
  collectionNote:
    'Twenty Latin readings, from Plautus to the Scillitan martyrs, with the book’s own marginalia.',
  startLabel: 'Incipit Interpretamenta',
  chapterCount: outline.length,
  readingCount: chapters.reduce((sum, c) => sum + (c.readings?.length || 0), 0),
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
