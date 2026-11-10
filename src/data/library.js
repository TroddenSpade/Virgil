import { book as familiaRomana, chapters as familiaRomanaChapters } from './familia-romana/index.js'
import { book as romaAeterna, chapters as romaAeternaChapters } from './roma-aeterna/index.js'
import { book as exercitiaLatina, chapters as exercitiaLatinaChapters } from './exercitia-latina/index.js'
import { book as latinViaOvid, chapters as latinViaOvidChapters } from './latin-via-ovid/index.js'
import { book as companion, chapters as companionChapters } from './companion/index.js'
import { book as colloquia, chapters as colloquiaChapters } from './colloquia-personarum/index.js'
import { sources } from './sources.generated.js'

// Reference sources are the full texts extracted from the source editions.
// Their chapter JSON lives in public/sources/<sourceSlug>/ and is fetched on
// demand, so the app bundle stays small.
const sourceBySlug = Object.fromEntries(sources.map((s) => [s.slug, s]))

function referenceChapters(sourceSlug) {
  const src = sourceBySlug[sourceSlug]
  if (!src) return []
  return src.chapters.map((c) => ({
    id: c.id,
    number: c.number,
    roman: c.roman,
    title: c.title,
    latinTitle: c.latinTitle || null,
    slug: c.id,
    complete: true,
    reference: true,
  }))
}

// Attach the matching full-text id to each Familia Romana chapter so that
// chapters without a written lesson can still be read in the original.
const familiaReference = sourceBySlug['familia-romana']
export const familiaRomanaBook = {
  ...familiaRomana,
  sourceSlug: 'familia-romana',
  referenceChapters: referenceChapters('familia-romana'),
  chapters: familiaRomanaChapters.map((chapter) => ({
    ...chapter,
    referenceId:
      familiaReference?.chapters.find((c) => c.number === chapter.number)?.id || null,
  })),
}

export const romaAeternaBook = {
  ...romaAeterna,
  chapters: romaAeternaChapters,
}

const companionSource = sourceBySlug['companion']
const learnLatinSource = sourceBySlug['learn-latin']
const latinViaOvidSource = sourceBySlug['latin-via-ovid']
const exercitiaSource = sourceBySlug['exercitia']

export const companionBook = {
  ...companion,
  sourceSlug: 'companion',
  referenceChapters: referenceChapters('companion'),
  chapters: companionChapters,
}

export const colloquiaBook = {
  ...colloquia,
  chapters: colloquiaChapters,
}

export const learnLatinBook = {
  id: 'learn-latin',
  slug: 'learn-latin-from-the-romans',
  title: 'Learn Latin from the Romans',
  latinTitle: 'DISCERE LATINAM A ROMANIS',
  shortTitle: 'Learn Latin from the Romans',
  author: 'Eleanor Dickey',
  edition: 'First Edition',
  year: 2018,
  publisher: 'Cambridge University Press',
  isbn: '978-1-107-63577-0',
  level: 'Grammar-based alternative',
  language: 'English + Latin',
  summary:
    'A rigorous, grammar-and-exercises course that teaches Latin the way it was read for centuries, ' +
    'using passages from real Roman authors from the start.',
  description:
    'A complete introductory course built from ancient Latin-learning materials, the Colloquia. ' +
    'It explains the grammar step by step with thousands of practice sentences and over 150 longer ' +
    'passages from Roman authors. The full text is available here chapter by chapter.',
  status: 'active',
  kind: 'reference',
  sourceSlug: 'learn-latin',
  accent: 'laurel',
  chapterCount: learnLatinSource?.chapters.length ?? 0,
  readyCount: learnLatinSource?.chapters.length ?? 0,
  chapters: referenceChapters('learn-latin'),
  referenceChapters: referenceChapters('learn-latin'),
}

export const latinViaOvidBook = {
  ...latinViaOvid,
  sourceSlug: 'latin-via-ovid',
  referenceChapters: referenceChapters('latin-via-ovid'),
  chapters: latinViaOvidChapters.map((chapter) => ({
    ...chapter,
    referenceId:
      latinViaOvidSource?.chapters.find((c) => c.number === chapter.number)?.id || null,
  })),
}

export const exercitiaBook = {
  ...exercitiaLatina,
  sourceSlug: 'exercitia',
  referenceChapters: referenceChapters('exercitia'),
  chapters: exercitiaLatinaChapters.map((chapter) => ({
    ...chapter,
    referenceId:
      exercitiaSource?.chapters.find((c) => c.number === chapter.number)?.id || null,
  })),
}

export const books = [
  familiaRomanaBook,
  romaAeternaBook,
  exercitiaBook,
  colloquiaBook,
  companionBook,
  learnLatinBook,
  latinViaOvidBook,
  {
    id: 'virgils-works',
    slug: 'virgils-works',
    title: 'The Works of Virgil',
    latinTitle: 'OPERA VERGILII',
    shortTitle: 'Virgil',
    author: 'P. Vergilius Maro',
    edition: 'Aeneid, Eclogues, Georgics',
    year: -19,
    publisher: 'Rome',
    isbn: null,
    level: 'The goal',
    language: 'Latin',
    summary:
      'The destination of the whole project: reading the Aeneid, the Eclogues and the Georgics ' +
      'in the original — with vocabulary, scansion and commentary laid over the text.',
    status: 'planned',
    accent: 'wine',
    isGoal: true,
  },
]

export function getBook(slug) {
  return books.find((b) => b.slug === slug)
}

export function getSource(slug) {
  return sourceBySlug[slug]
}

export default books