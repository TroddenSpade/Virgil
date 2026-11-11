import { outline } from './outline.js'
import { extras } from './extras.js'
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

// Full commentary, keyed by chapter number.
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

export const chapters = outline.map((entry) => ({
  ...entry,
  ...detailed[entry.number],
}))

export const book = {
  id: 'companion-roma-aeterna',
  slug: 'companion-to-roma-aeterna',
  title: 'A Companion to Roma Aeterna',
  latinTitle: 'COMES RŌMAE AETERNAE',
  shortTitle: 'Companion II',
  author: 'Jeanne Marie Neumann',
  edition: 'First Edition',
  year: 2017,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-1-58510-841-1',
  level: 'Companion — grammar, style and reading aids',
  language: 'English + Latin',
  summary:
    'A running grammatical, stylistic and reading commentary on every chapter of Roma Aeterna, ' +
    'with Ørberg’s introductions, reading aids and the book’s own vocabulary.',
  description:
    'Based on Ørberg’s Instructions, this Companion follows each chapter of Roma Aeterna through ' +
    'Rēs Grammaticae Novae, Rēs Grammaticae Fūsius Explicātae, Dēmonstrātiō Verbōrum, Recēnsiō and ' +
    'Points of Style, then adds Ørberg’s Introduction, the Auxilia Legendī and the chapter vocabulary. ' +
    'The volume also includes the complete Grammatica Latīna and Index.',
  accent: 'gold',
  status: 'active',
  kind: 'commentary',
  unit: 'Capitulum',
  startLabel: 'Begin Capitulum XXXVI',
  chapterCount: outline.length,
  readyCount: chapters.filter((c) => c.complete).length,
  chapters,
  extras,
}

export default book
