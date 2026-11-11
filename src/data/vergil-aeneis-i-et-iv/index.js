import { outline } from './outline.js'
import { extras } from './extras.js'
import liberI from './liber-i.js'
import liberIIIII from './liber-ii-iii.js'
import liberIV from './liber-iv.js'

const detailed = {
  1: liberI,
  2: liberIIIII,
  3: liberIV,
}

export const chapters = outline.map((entry) => ({
  ...entry,
  ...detailed[entry.number],
}))

export const book = {
  id: 'vergil-aeneis-i-et-iv',
  slug: 'vergil-aeneis-i-et-iv',
  title: 'Vergil: Aeneis Libros I et IV',
  latinTitle: 'AENEIS LIBROS I ET IV',
  shortTitle: 'Aeneis I & IV',
  author: 'P. Vergilius Marō',
  edition: 'Hans H. Ørberg (ed.), aliquōt versibus dēmptīs',
  year: 2012,
  publisher: 'Hackett Publishing Company',
  isbn: '978-1-58510-633-2',
  level: 'Reader — Aeneid I and IV',
  language: 'Latin',
  summary:
    'The first and fourth books of Vergil’s Aeneid, with the brief excerpt from Books II and III, ' +
    'in the school edition of Hans H. Ørberg.',
  description:
    'This reader presents Āenēās’ voyage from Troy to Carthage and the tragedy of Dīdō in the text ' +
    'of Vergil’s Aeneid as edited for students by Hans H. Ørberg. The edition prints macra throughout ' +
    'and explains the harder words in marginal notes. Liber I is given in full apart from a few ' +
    'passages omitted by the editor; from Liber II only the opening twelve verses are printed, and ' +
    'from Liber III the closing three. Liber IV follows Dīdō from her first passion to her death, ' +
    'again with the editor’s omissions. The volume closes with the life of Vergil and the two indexes.',
  accent: 'laurel',
  status: 'active',
  kind: 'reader',
  unit: 'Liber',
  unitPlural: 'Libri',
  readingUnit: 'pars',
  readingUnitPlural: 'partes',
  collectionLabel: 'Versūs',
  readingLabel: 'Versūs',
  collectionNote:
    'The Aeneid in Ørberg’s school edition, with the printed macra, the marginal notes, and the life of Vergil and indexes.',
  startLabel: 'Start Liber I',
  chapterCount: outline.length,
  readingCount: chapters.reduce((sum, c) => sum + (c.readings?.length || 0), 0),
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
