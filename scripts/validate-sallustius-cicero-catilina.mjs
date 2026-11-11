// Validate the authored Catilina reader (Sallust and Cicero, ed. Ørberg).
import { chapters, book } from '../src/data/sallustius-cicero-catilina/index.js'

const problems = []
const stats = {
  chapters: 0,
  readings: 0,
  paragraphs: 0,
  notes: 0,
  latinWords: 0,
  extras: 0,
  extraSections: 0,
  extraBlocks: 0,
}

function words(text) {
  return (String(text).match(/[A-Za-zÀ-ÿĀ-ſ]+/g) || []).length
}

function checkText(where, text) {
  if (typeof text !== 'string') {
    problems.push(`${where}: not a string`)
    return
  }
  if (/[\t\u0000\u0008\u000b\u000c\u000e-\u001f\u007f\u00ad]/.test(text)) {
    problems.push(`${where}: contains a tab, control or soft character`)
  }
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(text)) {
    problems.push(`${where}: contains a control character`)
  }
  stats.latinWords += words(text)
}

if (book.kind !== 'reader') problems.push(`expected kind 'reader', found ${book.kind}`)
if (book.status !== 'active') problems.push(`expected status 'active', found ${book.status}`)
if (chapters.length !== 9) problems.push(`expected 9 chapters, found ${chapters.length}`)
if (book.chapterCount !== chapters.length) {
  problems.push(`book.chapterCount ${book.chapterCount} != ${chapters.length}`)
}

const seen = new Set()
for (const [index, chapter] of chapters.entries()) {
  stats.chapters += 1
  const expected = index + 1
  if (chapter.number !== expected) problems.push(`chapter ${expected}: number is ${chapter.number}`)
  if (!chapter.roman || !chapter.slug || !chapter.latinTitle || !chapter.title) {
    problems.push(`chapter ${expected}: missing roman/slug/latinTitle/title`)
  }
  if (seen.has(chapter.slug)) problems.push(`duplicate slug ${chapter.slug}`)
  seen.add(chapter.slug)
  if (!Array.isArray(chapter.readings) || chapter.readings.length === 0) {
    problems.push(`chapter ${expected}: no readings`)
    continue
  }
  for (const reading of chapter.readings) {
    stats.readings += 1
    if (!reading.id || !reading.latinTitle) {
      problems.push(`chapter ${expected}: reading without id/latinTitle`)
    }
    if (!Array.isArray(reading.paragraphs) || reading.paragraphs.length === 0) {
      problems.push(`chapter ${expected}/${reading.id}: no Latin paragraphs`)
      continue
    }
    for (const [i, p] of reading.paragraphs.entries()) {
      stats.paragraphs += 1
      if (!/[A-Za-z]/.test(p)) {
        problems.push(`chapter ${expected}/${reading.id}/p${i + 1}: no Latin letters`)
      }
      if (!p.trim()) problems.push(`chapter ${expected}/${reading.id}/p${i + 1}: empty`)
      checkText(`chapter ${expected}/${reading.id}/p${i + 1}`, p)
    }
    if (!Array.isArray(reading.notes) || reading.notes.length === 0) {
      problems.push(`chapter ${expected}/${reading.id}: no notes`)
    }
    for (const [i, note] of (reading.notes || []).entries()) {
      stats.notes += 1
      if (!note || typeof note !== 'object') {
        problems.push(`chapter ${expected}/${reading.id}/note${i + 1}: not an object`)
        continue
      }
      if (typeof note.term !== 'string' || typeof note.gloss !== 'string') {
        problems.push(`chapter ${expected}/${reading.id}/note${i + 1}: term/gloss not strings`)
      }
      if (!note.term && !note.gloss) {
        problems.push(`chapter ${expected}/${reading.id}/note${i + 1}: empty term and gloss`)
      }
      checkText(`chapter ${expected}/${reading.id}/note${i + 1}`, note.term || '')
      checkText(`chapter ${expected}/${reading.id}/note${i + 1}`, note.gloss || '')
    }
  }
}

if (book.readingCount !== stats.readings) {
  problems.push(`book.readingCount ${book.readingCount} != ${stats.readings}`)
}
if (book.readyCount !== chapters.filter((c) => c.complete).length) {
  problems.push(`book.readyCount does not match complete chapters`)
}

const wanted = ['index-vocabulorum', 'index-nominum', 'notae']
const extraIds = new Set((book.extras || []).map((e) => e.id))
for (const id of wanted) {
  if (!extraIds.has(id)) problems.push(`missing extra: ${id}`)
}
for (const extra of book.extras || []) {
  stats.extras += 1
  if (!extra.slug || !extra.title || !extra.latinTitle) {
    problems.push(`extra ${extra.id}: missing slug/title/latinTitle`)
  }
  if (!Array.isArray(extra.sections) || extra.sections.length === 0) {
    problems.push(`extra ${extra.id}: no sections`)
    continue
  }
  for (const section of extra.sections) {
    stats.extraSections += 1
    if (!Array.isArray(section.blocks) || section.blocks.length === 0) {
      problems.push(`extra ${extra.id}/${section.id}: no blocks`)
      continue
    }
    for (const block of section.blocks) {
      stats.extraBlocks += 1
      if (block.t === 'p' || block.t === 'h') {
        if (!block.text?.trim()) problems.push(`extra ${extra.id}/${section.id}: empty ${block.t}`)
        checkText(`extra ${extra.id}/${section.id}`, block.text || '')
      } else if (block.t === 'pre') {
        if (!block.text?.trim()) problems.push(`extra ${extra.id}/${section.id}: empty pre`)
        checkText(`extra ${extra.id}/${section.id}`, block.text || '')
      } else if (block.t === 'table') {
        if (!Array.isArray(block.rows) || block.rows.length === 0) {
          problems.push(`extra ${extra.id}/${section.id}: empty table`)
        } else {
          for (const row of block.rows) {
            if (!Array.isArray(row) || row.length === 0) {
              problems.push(`extra ${extra.id}/${section.id}: empty table row`)
            }
          }
        }
      } else {
        problems.push(`extra ${extra.id}/${section.id}: unknown block type ${block.t}`)
      }
    }
  }
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s):`)
  for (const p of problems.slice(0, 80)) console.error('  - ' + p)
  process.exit(1)
}

console.log('✓ Catilina (Sallust and Cicero, ed. Ørberg)')
console.log(`  chapters:        ${stats.chapters}`)
console.log(`  readings:        ${stats.readings}`)
console.log(`  paragraphs:      ${stats.paragraphs}`)
console.log(`  notes:           ${stats.notes}`)
console.log(`  extras:          ${stats.extras} (${stats.extraSections} sections, ${stats.extraBlocks} blocks)`)
console.log(`  Latin words:     ${stats.latinWords}`)
