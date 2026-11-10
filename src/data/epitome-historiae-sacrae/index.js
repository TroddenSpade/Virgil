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
import capitulum10 from './capitulum-10.js'
import capitulum11 from './capitulum-11.js'
import capitulum12 from './capitulum-12.js'
import capitulum13 from './capitulum-13.js'
import capitulum14 from './capitulum-14.js'
import capitulum15 from './capitulum-15.js'

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
  10: capitulum10,
  11: capitulum11,
  12: capitulum12,
  13: capitulum13,
  14: capitulum14,
  15: capitulum15,
}

export const chapters = outline.map((entry) => {
  const content = detailed[entry.number]
  return { ...entry, ...content }
})

export const book = {
  id: 'epitome-historiae-sacrae',
  slug: 'epitome-historiae-sacrae',
  title: 'Epitome Historiae Sacrae',
  latinTitle: 'EPITOME HISTORIAE SACRAE',
  shortTitle: 'Epitome',
  author: 'Carolus Franciscus Lhomond',
  edition: 'Focus Edition',
  year: 2011,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-88-95611-19-8',
  level: 'Reader — 246 Latin sections',
  language: 'Latin',
  summary:
    'The history of the Bible retold in clear Latin, from the creation of the world to the life, death and resurrection of Jesus.',
  description:
    'Lhomond’s Epitome Historiae Sacrae presents the whole of sacred history in simple, graded Latin. ' +
    'This reader follows the Focus edition of 2011: the fifteen Aetates of the Old Testament, the two parts ' +
    'of the Novum Testamentum, and the book’s own marginal notes. The text is reproduced in the book’s order, ' +
    'with its headings, section numbers and marginalia.',
  accent: 'ivory',
  status: 'active',
  kind: 'reader',
  unit: 'Aetas',
  unitPlural: 'Aetātēs',
  readingUnit: 'sectiō',
  readingUnitPlural: 'sectiōnēs',
  collectionLabel: 'Sectiōnēs',
  readingLabel: 'Sectiōnēs',
  collectionNote:
    'Two hundred and forty-six numbered sections of sacred history, with the book’s own marginal notes.',
  startLabel: 'Incipe ā Prīmā Aetāte',
  chapterCount: outline.length,
  readingCount: chapters.reduce((sum, c) => sum + (c.readings?.length || 0), 0),
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
