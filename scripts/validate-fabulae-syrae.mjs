// Validate the authored Fabulae Syrae reader.
import { chapters, book } from '../src/data/fabulae-syrae/index.js'

const problems = []
const stats = {
  chapters: 0,
  readings: 0,
  plates: 0,
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
  if (/\u0000|\u001f|\u00ad/.test(text)) problems.push(`${where}: contains a control/soft character`)
  if (/\^|_ae|_i\b|_f\b/.test(text)) problems.push(`${where}: leftover OCR mark`)
  stats.words += words(text)
}

if (chapters.length !== 9) problems.push(`expected 9 chapters, found ${chapters.length}`)

for (const chapter of chapters) {
  stats.chapters += 1
  if (!chapter.number || !chapter.roman) problems.push('chapter without number/roman')
  if (!chapter.latinTitle || !chapter.slug) problems.push(`chapter ${chapter.number}: missing title/slug`)
  if (chapter.readings?.length !== 5) {
    problems.push(`chapter ${chapter.roman}: expected 5 fables, found ${chapter.readings?.length || 0}`)
  }
  for (const plate of chapter.plates || []) {
    stats.plates += 1
    checkText(`chapter ${chapter.roman}/plate`, plate)
    if (!plate.trim()) problems.push(`chapter ${chapter.roman}: empty plate caption`)
  }
  for (const reading of chapter.readings || []) {
    stats.readings += 1
    if (!reading.paragraphs?.length) problems.push(`chapter ${chapter.roman}: fable without paragraphs`)
    if (!reading.notes?.length) problems.push(`chapter ${chapter.roman}/${reading.id}: no marginalia`)
    for (const [i, p] of (reading.paragraphs || []).entries()) {
      stats.paragraphs += 1
      checkText(`chapter ${chapter.roman}/${reading.id}/p${i}`, p)
      if (!p.trim()) problems.push(`chapter ${chapter.roman}/${reading.id}: empty paragraph`)
    }
    for (const note of reading.notes || []) {
      stats.notes += 1
      if (!note.term && !note.gloss) problems.push(`chapter ${chapter.roman}/${reading.id}: empty marginal note`)
      checkText(`chapter ${chapter.roman}/${reading.id}/note`, note.term || '')
      checkText(`chapter ${chapter.roman}/${reading.id}/note`, note.gloss || '')
    }
  }
}

if (stats.readings !== 45) problems.push(`expected 45 fables, found ${stats.readings}`)

for (const extra of book.extras || []) {
  stats.extras += 1
  if (!extra.sections?.length) problems.push(`extra ${extra.id}: no sections`)
  for (const section of extra.sections || []) {
    if (!section.blocks?.length) problems.push(`extra ${extra.id}: no blocks`)
    for (const block of section.blocks || []) {
      if (block.t === 'p' || block.t === 'h') checkText(`extra ${extra.id}`, block.text)
      if (block.t === 'pre') {
        if (!block.text?.trim()) problems.push(`extra ${extra.id}: empty pre`)
        if (/\u0000|\u001f|\u00ad/.test(block.text || '')) problems.push(`extra ${extra.id}: control char in pre`)
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

if (stats.extras !== 4) problems.push(`expected 4 extras, found ${stats.extras}`)

console.log(stats)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const problem of problems.slice(0, 100)) console.log(' -', problem)
  process.exitCode = 1
} else {
  console.log('\n0 problem(s)')
}
