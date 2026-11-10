// Validate the authored Colloquia Personarum reader.
import { chapters, book } from '../src/data/colloquia-personarum/index.js'

const problems = []
const stats = {
  chapters: 0, paragraphs: 0, personae: 0, notes: 0, words: 0, extras: 0,
}

function words(text) {
  return (String(text).match(/[A-Za-zÀ-ÿ]+/g) || []).length
}

function checkText(where, text) {
  if (typeof text !== 'string') {
    problems.push(`${where}: not a string`)
    return
  }
  if (/\t/.test(text)) problems.push(`${where}: contains a tab`)
  if (/\u0000|\u001f|\u00ad/.test(text)) problems.push(`${where}: contains a control/soft character`)
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
  if (!chapter.latinTitle || !chapter.slug) problems.push(`chapter ${chapter.number}: missing title/slug`)
  if (!chapter.readings?.length) {
    problems.push(`chapter ${chapter.number}: no reading`)
    continue
  }
  for (const reading of chapter.readings) {
    if (!reading.paragraphs?.length) problems.push(`chapter ${chapter.number}: no paragraphs`)
    if (reading.personae) {
      stats.personae += 1
      checkText(`chapter ${chapter.number}/personae`, reading.personae)
    }
    for (const [i, p] of (reading.paragraphs || []).entries()) {
      stats.paragraphs += 1
      checkText(`chapter ${chapter.number}/p${i}`, p)
      if (!p.trim()) problems.push(`chapter ${chapter.number}: empty paragraph`)
    }
    for (const note of reading.notes || []) {
      stats.notes += 1
      if (!note.term && !note.gloss) problems.push(`chapter ${chapter.number}: empty marginal note`)
      checkText(`chapter ${chapter.number}/note`, note.term || '')
      checkText(`chapter ${chapter.number}/note`, note.gloss || '')
    }
  }
}

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

console.log(stats)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const problem of problems.slice(0, 80)) console.log(' -', problem)
  process.exitCode = 1
} else {
  console.log('\n0 problem(s)')
}
