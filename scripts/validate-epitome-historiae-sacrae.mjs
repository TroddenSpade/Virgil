// Validate the Epitome Historiae Sacrae data set.
// Run: node scripts/validate-epitome-historiae-sacrae.mjs

import { book, chapters } from '../src/data/epitome-historiae-sacrae/index.js'
import { extras } from '../src/data/epitome-historiae-sacrae/extras.js'
import { outline } from '../src/data/epitome-historiae-sacrae/outline.js'

const errors = []
const warn = []

function fail(message) {
  errors.push(message)
}

function warnIf(condition, message) {
  if (condition) warn.push(message)
}

const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u00AD]/
const TAB = /\t/
const LATIN = /[A-Za-zÀ-ÿĀ-ž]/

// 1. Chapters and outline
if (chapters.length !== 15) fail(`expected 15 chapters, found ${chapters.length}`)
if (outline.length !== 15) fail(`expected 15 outline entries, found ${outline.length}`)
if (book.chapterCount !== 15) fail(`book.chapterCount is ${book.chapterCount}`)
if (book.kind !== 'reader') fail(`book.kind should be 'reader', found ${book.kind}`)

chapters.forEach((chapter, index) => {
  const expected = index + 1
  if (chapter.number !== expected) fail(`chapter ${expected}: number is ${chapter.number}`)
  if (!chapter.slug) fail(`chapter ${expected}: missing slug`)
  if (!chapter.latinTitle) fail(`chapter ${expected}: missing latinTitle`)
  if (!chapter.title) fail(`chapter ${expected}: missing title`)
  if (!chapter.complete) fail(`chapter ${expected}: not marked complete`)
  if (!Array.isArray(chapter.readings) || chapter.readings.length === 0) {
    fail(`chapter ${expected}: no readings`)
    return
  }

  chapter.readings.forEach((reading, rIndex) => {
    const where = `chapter ${expected} reading ${rIndex + 1} (${reading.number || '?'})`
    if (!reading.id) fail(`${where}: missing id`)
    if (!reading.latinTitle) fail(`${where}: missing latinTitle`)
    if (!Array.isArray(reading.paragraphs) || reading.paragraphs.length === 0) {
      fail(`${where}: no paragraphs`)
    } else {
      reading.paragraphs.forEach((paragraph, pIndex) => {
        if (typeof paragraph !== 'string' || !paragraph.trim()) {
          fail(`${where} paragraph ${pIndex + 1}: empty`)
          return
        }
        if (!LATIN.test(paragraph)) fail(`${where} paragraph ${pIndex + 1}: no Latin letters`)
        if (CONTROL.test(paragraph)) fail(`${where} paragraph ${pIndex + 1}: control character`)
        if (TAB.test(paragraph)) fail(`${where} paragraph ${pIndex + 1}: tab character`)
        if (paragraph !== paragraph.trim()) warnIf(true, `${where} paragraph ${pIndex + 1}: leading/trailing space`)
      })
    }
    if (!Array.isArray(reading.notes)) {
      fail(`${where}: notes is not an array`)
    } else {
      reading.notes.forEach((note, nIndex) => {
        const nw = `${where} note ${nIndex + 1}`
        if (!note || typeof note !== 'object') return fail(`${nw}: not an object`)
        if (typeof note.term !== 'string' || !note.term.trim()) fail(`${nw}: empty term`)
        if (typeof note.gloss !== 'string') fail(`${nw}: gloss is not a string`)
        if (note.term && CONTROL.test(note.term)) fail(`${nw}: control character in term`)
        if (note.gloss && CONTROL.test(note.gloss)) fail(`${nw}: control character in gloss`)
        if (note.term && TAB.test(note.term)) fail(`${nw}: tab in term`)
        if (note.gloss && TAB.test(note.gloss)) fail(`${nw}: tab in gloss`)
      })
    }
  })
})

// 2. Reading count and numbering
const readingCount = chapters.reduce((sum, c) => sum + (c.readings?.length || 0), 0)
if (book.readingCount !== readingCount) {
  fail(`book.readingCount is ${book.readingCount}, but chapters contain ${readingCount}`)
}
if (readingCount !== 246) warnIf(true, `expected 246 readings, found ${readingCount}`)

// Old Testament sections 1–209 must be continuous
let expectedNumber = 1
for (const chapter of chapters.slice(0, 13)) {
  for (const reading of chapter.readings) {
    const n = Number(reading.number)
    if (!Number.isFinite(n)) fail(`non-numeric Old Testament section in chapter ${chapter.number}`)
    else if (n !== expectedNumber) fail(`expected section ${expectedNumber}, found ${n}`)
    expectedNumber = n + 1
  }
}

// New Testament readings use Roman numerals I–XXXVII
const romans = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII']
const nt = chapters.slice(13).flatMap((c) => c.readings.map((r) => r.number))
nt.forEach((n, i) => {
  if (n !== romans[i]) fail(`New Testament reading ${i + 1}: expected ${romans[i]}, found ${n}`)
})

// 3. Extras
if (!Array.isArray(extras) || extras.length === 0) fail('extras is empty')
else {
  extras.forEach((extra) => {
    if (!extra.id) fail(`extra ${extra.title || '?'}: missing id`)
    if (!extra.title) fail(`extra ${extra.id || '?'}: missing title`)
    if (!Array.isArray(extra.sections) || extra.sections.length === 0) {
      fail(`extra ${extra.id}: no sections`)
      return
    }
    extra.sections.forEach((section) => {
      if (!Array.isArray(section.blocks) || section.blocks.length === 0) {
        fail(`extra ${extra.id}: section ${section.id} has no blocks`)
      }
    })
  })
}

// 4. Word count and notes
let words = 0
let notes = 0
for (const chapter of chapters) {
  for (const reading of chapter.readings) {
    notes += reading.notes.length
    for (const paragraph of reading.paragraphs) {
      words += paragraph.split(/\s+/).filter(Boolean).length
    }
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} error(s)`)
  errors.slice(0, 40).forEach((e) => console.error('  - ' + e))
  if (errors.length > 40) console.error(`  … and ${errors.length - 40} more`)
  process.exit(1)
}

console.log('✓ Epitome Historiae Sacrae')
console.log(`  chapters:  ${chapters.length}`)
console.log(`  readings:  ${readingCount}`)
console.log(`  words:     ${words}`)
console.log(`  notes:     ${notes}`)
console.log(`  extras:    ${extras.length}`)
if (warn.length) {
  console.log(`  warnings:  ${warn.length}`)
  warn.slice(0, 10).forEach((w) => console.log('    · ' + w))
}
