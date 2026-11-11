#!/usr/bin/env node
// Validator for the Plautus: Amphitryo Comoedia reader data.
// Checks structure, Latin paragraphs, notes and extras, and rejects control
// characters, tabs and soft hyphens.

import { book, chapters } from '../src/data/plautus-amphitryo/index.js'

let failures = 0
let checks = 0

function ok(cond, message) {
  checks += 1
  if (!cond) {
    failures += 1
    console.error('FAIL:', message)
  }
}

const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u00ad\t]/

function checkText(text, where) {
  ok(typeof text === 'string', `${where}: must be a string`)
  if (typeof text !== 'string') return
  ok(text.trim().length > 0, `${where}: empty text`)
  ok(!CONTROL.test(text), `${where}: control character, tab or soft hyphen`)
  ok(!/[\u0000]/.test(text), `${where}: NUL`)
}

// --- book metadata --------------------------------------------------------
const requiredBook = [
  'id', 'slug', 'title', 'latinTitle', 'shortTitle', 'author', 'edition',
  'year', 'publisher', 'isbn', 'level', 'language', 'summary', 'description',
  'accent', 'status', 'kind', 'unit', 'unitPlural', 'readingUnit',
  'readingUnitPlural', 'collectionLabel', 'readingLabel', 'collectionNote',
  'startLabel', 'chapterCount', 'readingCount', 'readyCount', 'chapters', 'extras',
]
for (const key of requiredBook) {
  ok(book[key] !== undefined && book[key] !== null && book[key] !== '', `book.${key} missing`)
}
ok(book.kind === 'reader', `book.kind must be 'reader', got ${book.kind}`)
ok(book.slug === 'plautus-amphitryo', 'book.slug')
ok(book.chapterCount === 6, `book.chapterCount must be 6, got ${book.chapterCount}`)
ok(Array.isArray(book.chapters) && book.chapters.length === 6,
  `expected 6 chapters, got ${book.chapters?.length}`)

// --- chapters -------------------------------------------------------------
const expected = [
  [1, 'prologus', 'PROLOGVS'],
  [2, 'actus-i', 'ACTVS PRIMVS'],
  [3, 'actus-ii', 'ACTVS SECVNDVS'],
  [4, 'actus-iii', 'ACTVS TERTIVS'],
  [5, 'actus-iv', 'ACTVS QVARTVS'],
  [6, 'actus-v', 'ACTVS QVINTVS'],
]

let paragraphs = 0
let notes = 0
let words = 0

chapters.forEach((chapter, i) => {
  const [num, slug, latinTitle] = expected[i] || []
  ok(chapter.number === num, `chapter ${i + 1}: number ${chapter.number} != ${num}`)
  ok(chapter.slug === slug, `chapter ${i + 1}: slug ${chapter.slug} != ${slug}`)
  ok(chapter.latinTitle === latinTitle, `chapter ${i + 1}: latinTitle`)
  ok(chapter.status === 'complete', `chapter ${i + 1}: status`)
  ok(chapter.complete === true, `chapter ${i + 1}: complete flag`)
  ok(Array.isArray(chapter.readings) && chapter.readings.length > 0,
    `chapter ${i + 1}: no readings`)
  ok(Array.isArray(chapter.grammar), `chapter ${i + 1}: grammar must be array`)
  ok(Array.isArray(chapter.vocabulary), `chapter ${i + 1}: vocabulary must be array`)
  ok(Array.isArray(chapter.pensa), `chapter ${i + 1}: pensa must be array`)

  for (const [ri, reading] of (chapter.readings || []).entries()) {
    const where = `chapter ${num} reading ${ri + 1}`
    ok(typeof reading.id === 'string' && reading.id.length > 0, `${where}: id`)
    ok(typeof reading.latinTitle === 'string', `${where}: latinTitle`)
    ok(typeof reading.title === 'string', `${where}: title`)
    ok(Array.isArray(reading.paragraphs) && reading.paragraphs.length > 0,
      `${where}: no paragraphs`)
    for (const [pi, p] of (reading.paragraphs || []).entries()) {
      checkText(p, `${where} paragraph ${pi + 1}`)
      paragraphs += 1
      words += p.trim().split(/\s+/).length
    }
    ok(Array.isArray(reading.notes), `${where}: notes must be array`)
    for (const [ni, note] of (reading.notes || []).entries()) {
      const nw = `${where} note ${ni + 1}`
      ok(note && typeof note === 'object', `${nw}: not an object`)
      ok(typeof note.term === 'string' && note.term.trim().length > 0,
        `${nw}: term missing`)
      ok(typeof note.gloss === 'string', `${nw}: gloss must be a string`)
      checkText(note.term, `${nw} term`)
      if (note.gloss) checkText(note.gloss, `${nw} gloss`)
      notes += 1
    }
  }
})

// --- extras ---------------------------------------------------------------
const requiredExtras = [
  'notae', 'praefatio', 'argumentum', 'personae', 'de-grammatica',
  'de-versibus', 'index-vocabulorum', 'index-nominum',
]
ok(Array.isArray(book.extras) && book.extras.length >= requiredExtras.length,
  `expected at least ${requiredExtras.length} extras, got ${book.extras?.length}`)
const extraIds = new Set((book.extras || []).map((e) => e.id))
for (const id of requiredExtras) {
  ok(extraIds.has(id), `extras: missing ${id}`)
}
let extraBlocks = 0
for (const extra of book.extras || []) {
  ok(typeof extra.title === 'string' && extra.title.length > 0, `extra ${extra.id}: title`)
  ok(Array.isArray(extra.sections) && extra.sections.length > 0,
    `extra ${extra.id}: no sections`)
  for (const section of extra.sections || []) {
    ok(Array.isArray(section.blocks) && section.blocks.length > 0,
      `extra ${extra.id}/${section.id}: no blocks`)
    for (const block of section.blocks || []) {
      extraBlocks += 1
      if (block.t === 'p' || block.t === 'pre') {
        checkText(block.text, `extra ${extra.id}/${section.id}`)
      } else if (block.t === 'table') {
        ok(Array.isArray(block.rows) && block.rows.length > 1,
          `extra ${extra.id}/${section.id}: table rows`)
      } else {
        ok(false, `extra ${extra.id}/${section.id}: unknown block ${block.t}`)
      }
    }
  }
}

console.log('Chapters:      ', chapters.length)
console.log('Readings:      ', chapters.reduce((n, c) => n + (c.readings?.length || 0), 0))
console.log('Paragraphs:    ', paragraphs)
console.log('Words:         ', words)
console.log('Notes:         ', notes)
console.log('Extras:        ', (book.extras || []).length)
console.log('Extra blocks:  ', extraBlocks)
console.log('Checks:        ', checks)
console.log('Failures:      ', failures)
if (failures) process.exit(1)
console.log('OK: plautus-amphitryo data is valid.')
