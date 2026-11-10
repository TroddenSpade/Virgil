// Validate the authored Sermones Romani reader.
import { chapters, book } from '../src/data/sermones-romani/index.js'

const problems = []
const stats = {
  chapters: 0,
  readings: 0,
  paragraphs: 0,
  notes: 0,
  words: 0,
  extras: 0,
}

function words(text) {
  return (String(text).match(/[A-Za-zÀ-ÿĀ-ſ]+/g) || []).length
}

function checkText(where, text) {
  if (typeof text !== 'string') {
    problems.push(`${where}: not a string`)
    return
  }
  if (/\t/.test(text)) problems.push(`${where}: contains a tab`)
  if (/\u0000|\u001f|\u00ad|\ufffd/.test(text)) problems.push(`${where}: contains a control/soft character`)
  if (/\^|_ae|_i\b|_f\b/.test(text)) problems.push(`${where}: leftover OCR mark`)
  stats.words += words(text)
}

if (chapters.length !== 20) problems.push(`expected 20 chapters, found ${chapters.length}`)
if (book.kind !== 'reader') problems.push(`expected kind "reader", found ${book.kind}`)

for (const chapter of chapters) {
  stats.chapters += 1
  if (!chapter.number || !chapter.roman) problems.push('chapter without number/roman')
  if (!chapter.latinTitle || !chapter.slug) problems.push(`chapter ${chapter.number}: missing title/slug`)
  if (chapter.readings?.length !== 1) {
    problems.push(`chapter ${chapter.roman}: expected one reading, found ${chapter.readings?.length || 0}`)
  }
  for (const reading of chapter.readings || []) {
    stats.readings += 1
    if (!reading.id) problems.push(`chapter ${chapter.roman}: reading without id`)
    if (!reading.paragraphs?.length) problems.push(`chapter ${chapter.roman}: reading without paragraphs`)
    if (!reading.notes?.length) problems.push(`chapter ${chapter.roman}/${reading.id}: no marginalia`)
    for (const [i, p] of (reading.paragraphs || []).entries()) {
      stats.paragraphs += 1
      checkText(`chapter ${chapter.roman}/${reading.id}/p${i}`, p)
      if (!p.trim()) problems.push(`chapter ${chapter.roman}/${reading.id}: empty paragraph`)
      if (!/[A-Za-zÀ-ÿĀ-ſ]/.test(p)) problems.push(`chapter ${chapter.roman}/${reading.id}/p${i}: no Latin letters`)
    }
    for (const note of reading.notes || []) {
      stats.notes += 1
      if (typeof note.term !== 'string' || typeof note.gloss !== 'string') {
        problems.push(`chapter ${chapter.roman}/${reading.id}: note must have string term and gloss`)
        continue
      }
      if (!note.term.trim()) problems.push(`chapter ${chapter.roman}/${reading.id}: note without term`)
      checkText(`chapter ${chapter.roman}/${reading.id}/note`, note.term)
      checkText(`chapter ${chapter.roman}/${reading.id}/note`, note.gloss)
    }
  }
}

if (stats.readings !== 20) problems.push(`expected 20 readings, found ${stats.readings}`)

for (const extra of book.extras || []) {
  stats.extras += 1
  if (!extra.sections?.length) problems.push(`extra ${extra.id}: no sections`)
  for (const section of extra.sections || []) {
    if (!section.blocks?.length) problems.push(`extra ${extra.id}: no blocks`)
    for (const block of section.blocks || []) {
      if (block.t === 'p' || block.t === 'h') checkText(`extra ${extra.id}`, block.text)
      if (block.t === 'pre') {
        if (!block.text?.trim()) problems.push(`extra ${extra.id}: empty pre`)
        if (/\u0000|\u001f|\u00ad|\ufffd/.test(block.text || '')) problems.push(`extra ${extra.id}: control char in pre`)
      }
      if (block.t === 'table') {
        if (!block.rows?.length) problems.push(`extra ${extra.id}: empty table`)
        for (const row of block.rows || []) {
          if (!row.length) problems.push(`extra ${extra.id}: empty table row`)
        }
      }
    }
  }
}

if (stats.extras !== 3) problems.push(`expected 3 extras, found ${stats.extras}`)

console.log(stats)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const problem of problems.slice(0, 100)) console.log(' -', problem)
  process.exitCode = 1
} else {
  console.log('\n0 problem(s)')
}
