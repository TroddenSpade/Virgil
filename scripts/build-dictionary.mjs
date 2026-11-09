// Build the site dictionary from the vocabulary of both course books.
// The output is a generated ES module loaded only by the Dictionary page.
import { chapters as familia } from '../src/data/familia-romana/index.js'
import { chapters as roma } from '../src/data/roma-aeterna/index.js'
import { chapters as ovid } from '../src/data/latin-via-ovid/index.js'
import { writeFileSync } from 'node:fs'

const BOOKS = [
  { book: 'Familia Romana', bookSlug: 'familia-romana', chapters: familia },
  { book: 'Roma Aeterna', bookSlug: 'roma-aeterna', chapters: roma },
  { book: 'Latin via Ovid', bookSlug: 'latin-via-ovid', chapters: ovid },
]

const MACRA = /[āēīōūȳĀĒĪŌŪȲ]/
const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const countMacra = (s) => [...s].filter((c) => MACRA.test(c)).length
const headword = (w) =>
  w.latin.split(',')[0].replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim()

function posGroup(pos) {
  const p = (pos || '').toLowerCase()
  // "pronoun" contains "noun" and "participle" contains "part", so test the
  // longer names first.
  if (p.includes('pron')) return 'pronoun'
  if (p.includes('participle')) return 'participle'
  if (p.includes('particle')) return 'particle'
  if (p.includes('noun')) return 'noun'
  if (p.includes('verb')) return 'verb'
  if (p.includes('adj')) return 'adjective'
  if (p.includes('adv')) return 'adverb'
  if (p.includes('prep')) return 'preposition'
  if (p.includes('conj')) return 'conjunction'
  if (p.includes('num')) return 'numeral'
  if (p.includes('interj')) return 'interjection'
  return 'other'
}

function cleanPos(pos) {
  return (pos || '')
    .replace(/\(([mfn])\.?\)/g, '$1.')
    .replace(/\s+/g, ' ')
    .trim()
}

function mergeMeanings(set) {
  const senses = []
  for (const meaning of set) {
    for (const part of meaning.split(/;|,/)) {
      const text = part.trim()
      if (text && !senses.some((s) => s.toLowerCase() === text.toLowerCase())) senses.push(text)
    }
  }
  return senses.join('; ')
}

function sentencesOf(chapter) {
  const out = []
  for (const reading of chapter.readings || []) {
    for (const para of reading.paragraphs || []) {
      const parts = para.split(/(?<=[.!?])\s+(?=[A-ZĀĒĪŌŪȲ"“])/)
      for (const raw of parts) {
        const text = raw.trim()
        if (text.length > 14 && text.length < 420) {
          out.push({
            text,
            normalized: norm(text),
            reading: reading.latinTitle || reading.title,
            readingTitle: reading.title,
          })
        }
      }
    }
  }
  return out
}

function patternsFor(head) {
  const n = norm(head)
  const patterns = []
  if (n.length >= 4) {
    const stem = n.slice(0, Math.min(6, n.length))
    patterns.push(new RegExp('\\b' + stem + '\\w{0,10}\\b', 'i'))
  } else {
    patterns.push(new RegExp('\\b' + n + '\\b', 'i'))
  }
  if (/(o|or)$/.test(n)) {
    const stem = n.replace(/(o|or)$/, '')
    if (stem.length >= 2) {
      const endings = [
        'o', 'as', 'at', 'amus', 'atis', 'ant', 'are', 'avi', 'atum',
        'or', 'aris', 'atur', 'amur', 'amini', 'antur', 'ari', 'atus',
        'eo', 'es', 'et', 'emus', 'etis', 'ent', 'ere', 'ui', 'itum',
        'io', 'is', 'it', 'imus', 'itis', 'iunt', 'ire', 'ivi', 'itum',
      ]
      patterns.push(new RegExp('\\b' + stem + '(?:' + endings.join('|') + ')\\b', 'i'))
    }
  }
  return patterns
}

const entries = new Map()

for (const { book, bookSlug, chapters } of BOOKS) {
  for (const chapter of chapters) {
    const sentences = sentencesOf(chapter)
    const source = {
      book,
      bookSlug,
      number: chapter.number,
      roman: chapter.roman,
      title: chapter.title,
      slug: chapter.slug,
    }
    for (const word of chapter.vocabulary || []) {
      const head = headword(word)
      if (!head) continue
      const key = norm(head)
      let entry = entries.get(key)
      if (!entry) {
        entry = { head, latin: word.latin, meanings: new Set(), poses: new Set(), sources: new Map(), examples: [] }
        entries.set(key, entry)
      }
      if (countMacra(word.latin) >= countMacra(entry.latin)) entry.latin = word.latin
      if (word.english) entry.meanings.add(word.english.trim())
      if (word.pos) entry.poses.add(cleanPos(word.pos))
      entry.sources.set(book + ':' + chapter.number, source)

      if (entry.examples.length < 2) {
        const patterns = patternsFor(head)
        const found = sentences.find((s) => patterns.some((re) => re.test(s.normalized)))
        if (found) {
          const already = entry.examples.some((e) => e.latin === found.text)
          if (!already) {
            entry.examples.push({
              latin: found.text,
              reading: found.reading,
              ...source,
            })
          }
        }
      }
    }
  }
}

const list = [...entries.values()]
  .map((entry) => {
    const poses = [...entry.poses]
    return {
      id: norm(entry.head),
      latin: entry.latin,
      headword: entry.head,
      letter: norm(entry.head).replace(/^[^a-z]+/, '')[0] || '',
      pos: poses.join('; '),
      posGroup: posGroup(poses[0] || ''),
      english: mergeMeanings(entry.meanings),
      sources: [...entry.sources.values()],
      examples: entry.examples,
    }
  })
  .sort((a, b) => norm(a.headword).replace(/^[^a-z]+/, '').localeCompare(norm(b.headword).replace(/^[^a-z]+/, '')))

const letters = [...new Set(list.map((e) => e.letter).filter((c) => /[a-z]/.test(c)))].sort()
const withExamples = list.filter((e) => e.examples.length).length

const banner = `// AUTO-GENERATED by scripts/build-dictionary.mjs — do not edit by hand.\n// Built from the vocabulary of Familia Romana and Roma Aeterna.\n`
const js = banner +
  'export const entries = ' + JSON.stringify(list, null, 0) + '\n\n' +
  'export const letters = ' + JSON.stringify(letters) + '\n\n' +
  'export const stats = ' + JSON.stringify({ entries: list.length, withExamples }) + '\n'

writeFileSync(new URL('../src/data/dictionary.generated.js', import.meta.url), js, 'utf8')
console.log({ entries: list.length, withExamples, letters: letters.length, bytes: js.length })
