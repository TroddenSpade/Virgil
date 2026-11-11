// Validate the authored Aeneis Libros I et IV reader.
import { chapters, book } from '../src/data/vergil-aeneis-i-et-iv/index.js'

const problems = []
const stats = {
  chapters: 0,
  readings: 0,
  paragraphs: 0,
  verseLines: 0,
  notes: 0,
  words: 0,
  extras: 0,
  tables: 0,
  tableRows: 0,
}

const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u00ad]/
const MACRA = /[āēīōūȳĀĒĪŌŪȲ]/

function words(text) {
  return (String(text).match(/[A-Za-zÀ-ÿĀ-ſ]+/g) || []).length
}

function checkText(where, text) {
  if (typeof text !== 'string') {
    problems.push(`${where}: not a string`)
    return
  }
  if (/\t/.test(text)) problems.push(`${where}: contains a tab`)
  if (/\r/.test(text)) problems.push(`${where}: contains a carriage return`)
  if (CONTROL.test(text)) problems.push(`${where}: contains a control/soft character`)
  if (/\uFFFD/.test(text)) problems.push(`${where}: contains a replacement character`)
  if (/\s{3,}/.test(text)) problems.push(`${where}: contains a run of spaces`)
  stats.words += words(text)
}

function checkNote(where, note) {
  if (!note || typeof note !== 'object') {
    problems.push(`${where}: note is not an object`)
    return
  }
  if (typeof note.term !== 'string' || typeof note.gloss !== 'string') {
    problems.push(`${where}: note needs string term and gloss`)
    return
  }
  if (!note.term.trim() && !note.gloss.trim()) problems.push(`${where}: empty note`)
  checkText(`${where}/term`, note.term)
  checkText(`${where}/gloss`, note.gloss)
}

if (chapters.length !== 3) problems.push(`expected 3 chapters, found ${chapters.length}`)

for (const chapter of chapters) {
  stats.chapters += 1
  if (!chapter.number || !chapter.roman) problems.push('chapter without number/roman')
  if (!chapter.latinTitle || !chapter.slug) problems.push(`chapter ${chapter.number}: missing title/slug`)
  if (!chapter.readings?.length) problems.push(`chapter ${chapter.roman}: no readings`)
  if (chapter.complete !== true) problems.push(`chapter ${chapter.roman}: not marked complete`)

  for (const reading of chapter.readings || []) {
    stats.readings += 1
    if (!reading.id) problems.push(`chapter ${chapter.roman}: reading without id`)
    if (!reading.latinTitle) problems.push(`chapter ${chapter.roman}/${reading.id}: missing latinTitle`)
    if (!reading.paragraphs?.length) {
      problems.push(`chapter ${chapter.roman}/${reading.id}: no verse paragraphs`)
    }
    for (const [i, p] of (reading.paragraphs || []).entries()) {
      stats.paragraphs += 1
      checkText(`chapter ${chapter.roman}/${reading.id}/v${i + 1}`, p)
      if (!p.trim()) problems.push(`chapter ${chapter.roman}/${reading.id}: empty verse line`)
      stats.verseLines += 1
    }
    if (!reading.notes?.length) {
      problems.push(`chapter ${chapter.roman}/${reading.id}: no marginal notes`)
    }
    for (const [i, note] of (reading.notes || []).entries()) {
      stats.notes += 1
      checkNote(`chapter ${chapter.roman}/${reading.id}/note${i + 1}`, note)
    }
    const joined = (reading.paragraphs || []).join(' ')
    if (!MACRA.test(joined)) {
      problems.push(`chapter ${chapter.roman}/${reading.id}: no macra in the Latin text`)
    }
  }
}

if (stats.readings !== 21) problems.push(`expected 21 readings, found ${stats.readings}`)
if (stats.verseLines !== 1233) problems.push(`expected 1233 verse lines, found ${stats.verseLines}`)

// Book totals follow the printed edition, including the editor's omissions.
const expectedVerses = { I: 638, II: 15, IV: 580 }
const verseCounts = {
  I: chapters.find((c) => c.slug === 'liber-i')?.readings.reduce((n, r) => n + r.paragraphs.length, 0),
  II: chapters.find((c) => c.slug === 'liber-ii-iii')?.readings.reduce((n, r) => n + r.paragraphs.length, 0),
  IV: chapters.find((c) => c.slug === 'liber-iv')?.readings.reduce((n, r) => n + r.paragraphs.length, 0),
}
for (const [key, expected] of Object.entries(expectedVerses)) {
  if (verseCounts[key] !== expected) {
    problems.push(`liber ${key}: expected ${expected} verse lines, found ${verseCounts[key]}`)
  }
}

if (!book || book.kind !== 'reader') problems.push('book kind is not reader')
if (book.chapterCount !== 3) problems.push(`book.chapterCount is ${book.chapterCount}, expected 3`)
if (book.readingCount !== 21) problems.push(`book.readingCount is ${book.readingCount}, expected 21`)
if (book.readyCount !== 3) problems.push(`book.readyCount is ${book.readyCount}, expected 3`)
if (!book.id || !book.slug || !book.isbn) problems.push('book metadata incomplete')
if (!book.summary || !book.description) problems.push('book summary/description missing')

if ((book.extras || []).length !== 3) problems.push(`expected 3 extras, found ${(book.extras || []).length}`)
const extraIds = new Set()
for (const extra of book.extras || []) {
  stats.extras += 1
  if (!extra.id || extraIds.has(extra.id)) problems.push(`extra ${extra.id}: missing or duplicate id`)
  extraIds.add(extra.id)
  if (!extra.title || !extra.latinTitle) problems.push(`extra ${extra.id}: missing title`)
  if (!extra.sections?.length) problems.push(`extra ${extra.id}: no sections`)
  for (const section of extra.sections || []) {
    if (!section.blocks?.length) problems.push(`extra ${extra.id}: no blocks`)
    for (const block of section.blocks || []) {
      if (block.t === 'p' || block.t === 'h') checkText(`extra ${extra.id}`, block.text)
      if (block.t === 'p' && !block.text?.trim()) problems.push(`extra ${extra.id}: empty paragraph`)
      if (block.t === 'pre') {
        if (!block.text?.trim()) problems.push(`extra ${extra.id}: empty pre`)
        if (CONTROL.test(block.text || '')) problems.push(`extra ${extra.id}: control char in pre`)
      }
      if (block.t === 'table') {
        stats.tables += 1
        if (!block.rows?.length) problems.push(`extra ${extra.id}: empty table`)
        if (!block.head?.length) problems.push(`extra ${extra.id}: table without head`)
        for (const row of block.rows || []) {
          stats.tableRows += 1
          if (!row.length) problems.push(`extra ${extra.id}: empty table row`)
          for (const cell of row) checkText(`extra ${extra.id}/table`, cell)
        }
      }
    }
  }
}

if (!extraIds.has('de-vita-vergilii')) problems.push('missing De Vita Vergilii')
if (!extraIds.has('index-vocabulorum')) problems.push('missing Index Vocabulorum')
if (!extraIds.has('index-nominum')) problems.push('missing Index Nominum')

console.log(stats)
console.log(`verse totals: ${JSON.stringify(verseCounts)}`)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const problem of problems.slice(0, 100)) console.log(' -', problem)
  process.exitCode = 1
} else {
  console.log('\n0 problem(s)')
}
