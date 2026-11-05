import { book as familiaRomana, chapters as familiaRomanaChapters } from './familia-romana/index.js'

// The curriculum. The site starts with one book and grows toward Virgil.
export const familiaRomanaBook = {
  ...familiaRomana,
  chapters: familiaRomanaChapters,
}

export const books = [
  {
    ...familiaRomanaBook,
  },
  {
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
    status: 'planned',
    accent: 'gold',
  },
  {
    id: 'learn-latin',
    slug: 'learn-latin-from-the-romans',
    title: 'Learn Latin from the Romans',
    latinTitle: 'DISCERE LATINAM A ROMANIS',
    shortTitle: 'Learn Latin from the Romans',
    author: 'Eleanor Dickey',
    edition: 'First Edition',
    year: 2015,
    publisher: 'Cambridge University Press',
    isbn: '978-1-107-63577-0',
    level: 'Grammar-based alternative',
    language: 'English + Latin',
    summary:
      'A rigorous, grammar-and-exercises course that teaches Latin the way it was read for centuries, ' +
      'using passages from real Roman authors from the start.',
    status: 'planned',
    accent: 'laurel',
  },
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

export default books
