import { book as familiaRomana, chapters as familiaRomanaChapters } from './familia-romana/index.js'
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

const companionSource = sourceBySlug['companion']
const learnLatinSource = sourceBySlug['learn-latin']
const latinViaOvidSource = sourceBySlug['latin-via-ovid']

export const companionBook = {
  id: 'companion',
  slug: 'companion-to-familia-romana',
  title: 'A Companion to Familia Romana',
  latinTitle: 'COMES FAMILIAE ROMANAE',
  shortTitle: 'Companion',
  author: 'Jeanne Marie Neumann',
  edition: 'Second Edition',
  year: 2016,
  publisher: 'Focus / Hackett Publishing',
  isbn: '978-1-58510-809-1',
  level: 'Companion reference',
  language: 'English + Latin',
  summary:
    'Running alongside Familia Romana: fuller grammar explanations, cultural notes and ' +
    'translation help for every chapter — the ideal reference when a lesson needs unpacking.',
  description:
    'Based on Ørberg’s Latine Disco, this Companion walks through every chapter of Familia Romana ' +
    'with fuller explanations of the grammar, notes on points of style and culture, and vocabulary. ' +
    'Here the complete text is reproduced chapter by chapter as a browsable reference.',
  status: 'active',
  kind: 'reference',
  sourceSlug: 'companion',
  accent: 'gold',
  chapterCount: companionSource?.chapters.length ?? 0,
  readyCount: companionSource?.chapters.length ?? 0,
  chapters: referenceChapters('companion'),
  referenceChapters: referenceChapters('companion'),
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
  id: 'latin-via-ovid',
  slug: 'latin-via-ovid',
  title: 'Latin via Ovid: A First Course',
  latinTitle: 'LATIN VIA OVID',
  shortTitle: 'Latin via Ovid',
  author: 'Norma Goldman & Jacob E. Nyenhuis',
  edition: 'Second Edition',
  year: 1982,
  publisher: 'Wayne State University Press',
  isbn: '978-0-8143-1732-7',
  level: 'Reading-and-grammar course',
  language: 'English + Latin',
  summary:
    'A first course in forty graded lessons, each built on an adapted story from Ovid’s Metamorphoses — ' +
    'from the geography of the ancient world all the way to Aeneas in Italy.',
  description:
    'A complete introductory course that teaches Latin through the stories of Ovid’s Metamorphoses. ' +
    'Every chapter pairs an adapted Latin reading with vocabulary (Verba), a grammar presentation ' +
    '(Structure), etymological notes and exercises. The full text is reproduced here chapter by chapter ' +
    'as a browsable reference, together with the appendices, vocabularies and index.',
  status: 'active',
  kind: 'reference',
  sourceSlug: 'latin-via-ovid',
  accent: 'wine',
  chapterCount: latinViaOvidSource?.chapters.filter((c) => c.number).length ?? 0,
  readyCount: latinViaOvidSource?.chapters.filter((c) => c.number).length ?? 0,
  chapters: referenceChapters('latin-via-ovid'),
  referenceChapters: referenceChapters('latin-via-ovid'),
}

export const books = [
  familiaRomanaBook,
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