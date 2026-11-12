/* Validate the Learn Latin from the Romans source built from the book.
 *
 * The chapters are re-typeset faithfully from the printed book, so this
 * checks the block stream the parser emits (see scripts/build-sources.py):
 * paragraphs, headings, paradigm tables, the Practice blocks, lettered
 * exercises and their numbered items, footnotes, vocabulary grids,
 * reading passages and the glossary terms.
 */
import { chapters, book } from '../src/data/learn-latin/index.js'

const problems = []
const stats = {
  chapters: 0, sections: 0, blocks: 0, paragraphs: 0, tables: 0, exercises: 0,
  items: 0, passages: 0, terms: 0, notes: 0, vocab: 0,
}

const BLOCK_TYPES = new Set([
  'h', 'p', 'table', 'practice', 'ex', 'exlabel', 'li', 'note',
  'vhead', 'vlabel', 'term', 'passage',
])

const CTL = /[\t\u0000\u001f\u00ad]/
const str = (v) => typeof v === 'string'

function checkText(where, text) {
  if (!str(text)) {
    problems.push(`${where}: text is not a string`)
    return
  }
  if (CTL.test(text)) problems.push(`${where}: control character`)
  if (/\{\{?\w+\}?\}/.test(text)) problems.push(`${where}: unresolved markup: ${text.slice(0, 60)}`)
}

if (chapters.length !== 66) problems.push(`expected 66 chapters, found ${chapters.length}`)

for (const ch of chapters) {
  stats.chapters += 1
  const label = `ch${ch.number}`
  if (ch.roman == null) problems.push(`${label}: no roman numeral`)
  if (!str(ch.title) || !ch.title.trim()) problems.push(`${label}: no title`)

  const sections = ch.sections || []
  if (!sections.length) problems.push(`${label}: no sections`)

  for (const sec of sections) {
    stats.sections += 1
    if (!str(sec.latin) || !sec.latin.trim()) problems.push(`${label}/${sec.id}: no heading`)
    if (!sec.blocks?.length) problems.push(`${label}/${sec.id}: no blocks`)

    // exercise letters seen since the last Practice marker
    let letters = []
    for (const b of sec.blocks || []) {
      stats.blocks += 1
      if (!BLOCK_TYPES.has(b.t)) {
        problems.push(`${label}/${sec.id}: unknown block type "${b.t}"`)
        continue
      }
      switch (b.t) {
        case 'h':
          checkText(`${label}/${sec.id}/h`, b.text)
          break
        case 'p':
          stats.paragraphs += 1
          checkText(`${label}/${sec.id}/p`, b.text)
          break
        case 'vhead':
        case 'vlabel':
        case 'exlabel':
          checkText(`${label}/${sec.id}/${b.t}`, b.text)
          break
        case 'practice':
          letters = []
          break
        case 'ex':
          stats.exercises += 1
          if (!str(b.letter) || b.letter.length > 2) problems.push(`${label}/${sec.id}: bad exercise letter`)
          checkText(`${label}/${sec.id}/ex${b.letter}`, b.text)
          letters.push(b.letter)
          break
        case 'li': {
          stats.items += 1
          if (!Number.isInteger(b.n)) problems.push(`${label}/${sec.id}: item without number`)
          if (b.cols != null && (!Number.isInteger(b.cols) || b.cols < 1 || b.cols > 4)) {
            problems.push(`${label}/${sec.id}: bad cols ${b.cols}`)
          }
          checkText(`${label}/${sec.id}/li${b.n}`, b.text)
          break
        }
        case 'note':
          stats.notes += 1
          if (!Number.isInteger(b.n)) problems.push(`${label}/${sec.id}: note without number`)
          checkText(`${label}/${sec.id}/note${b.n}`, b.text)
          break
        case 'term':
          stats.terms += 1
          checkText(`${label}/${sec.id}/term`, b.term)
          checkText(`${label}/${sec.id}/term`, b.text)
          break
        case 'passage':
          stats.passages += 1
          checkText(`${label}/${sec.id}/passage`, b.text)
          if (b.speaker != null && !str(b.speaker)) problems.push(`${label}/${sec.id}: bad speaker`)
          break
        case 'table': {
          stats.tables += 1
          const rows = b.rows
          if (!Array.isArray(rows) || !rows.length) {
            problems.push(`${label}/${sec.id}: empty table`)
            break
          }
          const width = Math.max(...rows.map((r) => (Array.isArray(r) ? r.length : 0)))
          if (width < 2) problems.push(`${label}/${sec.id}: table width ${width}`)
          if (b.header != null && !Array.isArray(b.header)) {
            problems.push(`${label}/${sec.id}: bad table header`)
          }
          for (const r of rows) {
            if (!Array.isArray(r)) { problems.push(`${label}/${sec.id}: non-array table row`); continue }
            for (const c of r) {
              if (!str(c)) problems.push(`${label}/${sec.id}: non-string table cell`)
            }
          }
          break
        }
      }
    }
  }
}

const missingMacron = chapters.filter((c) => !/[\u0100-\u017f]/.test(JSON.stringify(c.sections || [])))
if (missingMacron.length) {
  console.log(`note: ${missingMacron.length} chapter(s) without marked long vowels: ${missingMacron.map((c) => c.number).join(', ')}`)
}

console.log(stats)
console.log(`vocabulary sections: ${chapters.filter((c) => (c.sections || []).some((s) => /vocabulary/i.test(s.latin))).length}`)
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  for (const p of problems.slice(0, 80)) console.log(' -', p)
  process.exitCode = 1
} else {
  console.log('\n0 problem(s)')
}
