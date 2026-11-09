// Validate the authored Companion chapters.
import { chapters } from '../src/data/companion/index.js'

const problems = []
const stats = { chapters: 0, sections: 0, paragraphs: 0, headings: 0, tables: 0, vocab: 0, notes: 0, words: 0 }

function words(text) {
  return (String(text).match(/[A-Za-zÀ-ÿ]+/g) || []).length
}

function checkText(where, text) {
  if (typeof text !== 'string') {
    problems.push(`${where}: not a string`)
    return
  }
  if (/\t/.test(text)) problems.push(`${where}: contains a tab`)
  if (/\u0000|\u001f/.test(text)) problems.push(`${where}: contains a control character`)
  if (/\{\{[^}]*\}\}/.test(text) && !/\{\{\d+\}\}/.test(text)) {
    problems.push(`${where}: malformed note marker`)
  }
  const opens = (text.match(/\{i\}/g) || []).length
  const closes = (text.match(/\{\/i\}/g) || []).length
  const bopens = (text.match(/\{b\}/g) || []).length
  const bcloses = (text.match(/\{\/b\}/g) || []).length
  if (opens !== closes) problems.push(`${where}: unbalanced {i}`)
  if (bopens !== bcloses) problems.push(`${where}: unbalanced {b}`)
  stats.words += words(text)
}

for (const chapter of chapters) {
  stats.chapters += 1
  if (!chapter.number || !chapter.roman) problems.push('chapter without number/roman')
  if (!chapter.latinTitle) problems.push(`chapter ${chapter.number}: no latinTitle`)
  if (!chapter.slug) problems.push(`chapter ${chapter.number}: no slug`)
  if (!chapter.complete) problems.push(`chapter ${chapter.number}: not complete`)
  if (!Array.isArray(chapter.sections) || chapter.sections.length === 0) {
    problems.push(`chapter ${chapter.number}: no sections`)
    continue
  }
  const ids = new Set()
  for (const section of chapter.sections) {
    stats.sections += 1
    if (!section.id) problems.push(`chapter ${chapter.number}: section without id`)
    if (ids.has(section.id)) problems.push(`chapter ${chapter.number}: duplicate section id ${section.id}`)
    ids.add(section.id)
    if (!section.latin) problems.push(`chapter ${chapter.number}/${section.id}: no latin title`)
    for (const block of section.blocks || []) {
      if (block.t === 'p' || block.t === 'h' || block.t === 'li') {
        stats[block.t === 'p' ? 'paragraphs' : block.t === 'h' ? 'headings' : 'paragraphs'] += 1
        checkText(`chapter ${chapter.number}/${section.id}/${block.t}`, block.text)
      } else if (block.t === 'outline') {
        for (const item of block.items || []) checkText(`chapter ${chapter.number}/${section.id}/outline`, item.text)
      } else if (block.t === 'table') {
        stats.tables += 1
        for (const row of block.rows || []) {
          if (!row.length) problems.push(`chapter ${chapter.number}/${section.id}: empty table row`)
          for (const cell of row) checkText(`chapter ${chapter.number}/${section.id}/table`, cell)
        }
      } else {
        problems.push(`chapter ${chapter.number}/${section.id}: unknown block type ${block.t}`)
      }
    }
  }
  for (const word of chapter.vocabulary || []) {
    stats.vocab += 1
    if (!word.latin) problems.push(`chapter ${chapter.number}: vocabulary entry without latin`)
    if (!word.english) problems.push(`chapter ${chapter.number}: vocabulary entry without english: ${word.latin}`)
    checkText(`chapter ${chapter.number}/vocab`, word.latin)
    checkText(`chapter ${chapter.number}/vocab`, word.english)
  }
  for (const note of chapter.notes || []) {
    stats.notes += 1
    if (!note.n) problems.push(`chapter ${chapter.number}: note without number`)
    checkText(`chapter ${chapter.number}/note ${note.n}`, note.text)
  }
}

console.log(stats)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const problem of problems.slice(0, 80)) console.log(' -', problem)
  process.exitCode = 1
} else {
  console.log('\n0 problem(s)')
}
