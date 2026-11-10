// Validate the authored Caesar, De Bello Gallico VII reader.
import { chapters, book } from '../src/data/caesar-de-bello-gallico-vii/index.js'

const problems = []
const stats = {
  chapters: 0,
  readings: 0,
  paragraphs: 0,
  latinWords: 0,
  words: 0,
  extras: 0,
  extraSections: 0,
  extraBlocks: 0,
}

function words(text) {
  return (String(text).match(/[A-Za-zÀ-ÿ]+/g) || []).length
}

function checkText(where, text) {
  if (typeof text !== 'string') {
    problems.push(`${where}: not a string`)
    return
  }
  if (!text.trim()) problems.push(`${where}: empty`)
  if (/\t/.test(text)) problems.push(`${where}: contains a tab`)
  if (/\u0000|\u001f|\u00ad/.test(text)) problems.push(`${where}: contains a control/soft character`)
  if (/[\u0001-\u0008\u000b\u000c\u000e-\u001f]/.test(text)) {
    problems.push(`${where}: contains a control character`)
  }
  if (/[\u0100-\u017f]/.test(text)) problems.push(`${where}: contains a macron/length mark`)
  stats.words += words(text)
}

if (book.kind !== 'reader') problems.push(`expected kind 'reader', found ${book.kind}`)
if (chapters.length !== 90) problems.push(`expected 90 chapters, found ${chapters.length}`)

const seen = new Set()
for (const [index, chapter] of chapters.entries()) {
  stats.chapters += 1
  const expected = index + 1
  if (chapter.number !== expected) {
    problems.push(`chapter ${expected}: number is ${chapter.number}`)
  }
  if (!chapter.roman || !chapter.slug || !chapter.latinTitle) {
    problems.push(`chapter ${expected}: missing roman/slug/latinTitle`)
  }
  if (seen.has(chapter.slug)) problems.push(`duplicate slug ${chapter.slug}`)
  seen.add(chapter.slug)
  if (chapter.readings?.length !== 1) {
    problems.push(`chapter ${expected}: expected 1 reading, found ${chapter.readings?.length || 0}`)
  }
  for (const reading of chapter.readings || []) {
    stats.readings += 1
    if (!reading.paragraphs?.length) {
      problems.push(`chapter ${expected}: no Latin paragraphs`)
      continue
    }
    for (const [i, p] of reading.paragraphs.entries()) {
      stats.paragraphs += 1
      if (!/[A-Za-z]/.test(p)) {
        problems.push(`chapter ${expected}/p${i + 1}: no Latin letters`)
      }
      checkText(`chapter ${expected}/p${i + 1}`, p)
      stats.latinWords += words(p)
    }
  }
}

const wanted = ['introduction', 'notae', 'appendices', 'vocabulary']
const extraIds = new Set((book.extras || []).map((e) => e.id))
for (const id of wanted) {
  if (!extraIds.has(id)) problems.push(`missing extra: ${id}`)
}
for (const extra of book.extras || []) {
  stats.extras += 1
  if (!extra.sections?.length) problems.push(`extra ${extra.id}: no sections`)
  for (const section of extra.sections || []) {
    stats.extraSections += 1
    if (!section.blocks?.length) problems.push(`extra ${extra.id}/${section.id}: no blocks`)
    for (const block of section.blocks || []) {
      stats.extraBlocks += 1
      if (block.t === 'p' || block.t === 'h') {
        if (!block.text?.trim()) problems.push(`extra ${extra.id}/${section.id}: empty ${block.t}`)
        if (/\u0000|\u001f|\u00ad|\t/.test(block.text || '')) {
          problems.push(`extra ${extra.id}/${section.id}: control char`)
        }
        stats.words += words(block.text)
      }
      if (block.t === 'pre') {
        if (!block.text?.trim()) problems.push(`extra ${extra.id}/${section.id}: empty pre`)
        if (/\u0000|\u001f|\u00ad|\t/.test(block.text || '')) {
          problems.push(`extra ${extra.id}/${section.id}: control char in pre`)
        }
        stats.words += words(block.text)
      }
    }
  }
}

if (book.chapterCount !== chapters.length) {
  problems.push(`book.chapterCount ${book.chapterCount} != ${chapters.length}`)
}
if (book.readingCount !== stats.readings) {
  problems.push(`book.readingCount ${book.readingCount} != ${stats.readings}`)
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s):`)
  for (const p of problems) console.error('  - ' + p)
  process.exit(1)
}

console.log('✓ Caesar, De Bello Gallico VII')
console.log(`  chapters:        ${stats.chapters}`)
console.log(`  readings:        ${stats.readings}`)
console.log(`  paragraphs:      ${stats.paragraphs}`)
console.log(`  extras:          ${stats.extras} (${stats.extraSections} sections, ${stats.extraBlocks} blocks)`)
console.log(`  Latin words:     ${stats.latinWords}`)
console.log(`  all words:       ${stats.words}`)
