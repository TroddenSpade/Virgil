// Validate the authored Exercitia Latina II workbook.
import { chapters, book } from '../src/data/exercitia-latina-ii/index.js'

const problems = []
const stats = {
  chapters: 0,
  readings: 0,
  exercises: 0,
  paragraphs: 0,
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
  if (!text.trim()) problems.push(`${where}: empty text`)
  if (/\t/.test(text)) problems.push(`${where}: contains a tab`)
  if (/\u0000|\u001f|\u00ad/.test(text)) problems.push(`${where}: contains a control/soft character`)
  if (/[\u0400-\u04ff]/.test(text)) problems.push(`${where}: contains Cyrillic characters`)
  const opens = (text.match(/\{b\}/g) || []).length
  const closes = (text.match(/\{\/b\}/g) || []).length
  if (opens !== closes) problems.push(`${where}: unbalanced bold markup`)
  stats.words += words(text)
}

if (chapters.length !== 21) problems.push(`expected 21 chapters, found ${chapters.length}`)
if (book.kind !== 'workbook') problems.push(`expected kind "workbook", found ${book.kind}`)

const numbers = chapters.map((c) => c.number)
for (let n = 36; n <= 56; n += 1) {
  if (!numbers.includes(n)) problems.push(`missing chapter ${n}`)
}

for (const chapter of chapters) {
  stats.chapters += 1
  if (!chapter.complete || chapter.status !== 'complete') {
    problems.push(`chapter ${chapter.roman}: not marked complete`)
  }
  if (!chapter.latinTitle || !chapter.slug || !chapter.roman) {
    problems.push(`chapter ${chapter.number}: missing title/slug/roman`)
  }
  if (!chapter.readings?.length) {
    problems.push(`chapter ${chapter.roman}: no readings`)
    continue
  }

  let expectedExercise = 1
  for (const reading of chapter.readings) {
    stats.readings += 1
    if (!reading.id) problems.push(`chapter ${chapter.roman}: reading without id`)
    if (!reading.latinTitle) problems.push(`chapter ${chapter.roman}/${reading.id}: missing Lēctiō heading`)
    if (!reading.paragraphs?.length) {
      problems.push(`chapter ${chapter.roman}/${reading.id}: no paragraphs`)
      continue
    }
    let readingExercises = 0
    for (const [i, p] of reading.paragraphs.entries()) {
      stats.paragraphs += 1
      checkText(`chapter ${chapter.roman}/${reading.id}/p${i}`, p)
      const m = p.match(/^\{b\}Exercitium (\d+)\{\/b\}$/)
      if (m) {
        readingExercises += 1
        stats.exercises += 1
        const found = Number(m[1])
        if (found !== expectedExercise) {
          problems.push(`chapter ${chapter.roman}: expected Exercitium ${expectedExercise}, found ${found}`)
        }
        expectedExercise = found + 1
      }
    }
    if (!readingExercises) problems.push(`chapter ${chapter.roman}/${reading.id}: no Exercitium heading`)
  }
  if (expectedExercise < 2) problems.push(`chapter ${chapter.roman}: no exercises`)
}

if (stats.exercises !== 290) problems.push(`expected 290 exercises, found ${stats.exercises}`)

for (const extra of book.extras || []) {
  stats.extras += 1
  if (!extra.sections?.length) problems.push(`extra ${extra.id}: no sections`)
  for (const section of extra.sections || []) {
    if (!section.blocks?.length) problems.push(`extra ${extra.id}: no blocks`)
    for (const block of section.blocks || []) {
      if (block.t === 'p' || block.t === 'h') checkText(`extra ${extra.id}`, block.text)
      if (block.t === 'table') {
        if (!block.rows?.length) problems.push(`extra ${extra.id}: empty table`)
        for (const row of block.rows || []) {
          if (!row.length) problems.push(`extra ${extra.id}: empty table row`)
          for (const cell of row) checkText(`extra ${extra.id}/cell`, cell)
        }
      }
    }
  }
}

if (!stats.extras) problems.push('expected at least one extra (Index Lectionum)')

console.log(stats)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const problem of problems.slice(0, 100)) console.log(' -', problem)
  process.exitCode = 1
} else {
  console.log('\n0 problem(s)')
}
