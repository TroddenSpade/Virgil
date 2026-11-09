// Quick content check for the Latin via Ovid lesson data.
import { chapters } from '../src/data/latin-via-ovid/index.js'

let problems = []
let totals = { readings: 0, paragraphs: 0, notes: 0, grammar: 0, paradigms: 0, vocab: 0, pensa: 0, blanks: 0, questions: 0, words: 0 }
const slugs = new Set()

for (const c of chapters) {
  const where = `ch ${c.number} (${c.slug})`
  if (!c.complete) problems.push(`${where}: not complete`)
  if (!c.tagline) problems.push(`${where}: no tagline`)
  if (!c.overview) problems.push(`${where}: no overview`)
  if (!c.objectives?.length) problems.push(`${where}: no objectives`)
  if (!c.readings?.length) problems.push(`${where}: no readings`)
  if (!c.grammar?.length) problems.push(`${where}: no grammar`)
  if (!c.vocabulary?.length) problems.push(`${where}: no vocabulary`)
  if (!c.pensa?.length) problems.push(`${where}: no pensa`)
  if (slugs.has(c.slug)) problems.push(`${where}: duplicate slug`)
  slugs.add(c.slug)

  for (const r of c.readings || []) {
    if (!r.id) problems.push(`${where}: reading without id`)
    if (!r.latinTitle) problems.push(`${where}/${r.id}: no latinTitle`)
    if (!r.paragraphs?.length) problems.push(`${where}/${r.id}: empty paragraphs`)
    else {
      totals.paragraphs += r.paragraphs.length
      totals.words += r.paragraphs.join(' ').split(/\s+/).length
    }
    if (!r.notes?.length) problems.push(`${where}/${r.id}: no notes`)
    for (const n of r.notes || []) if (!n.term || !n.gloss) problems.push(`${where}/${r.id}: bad note`)
  }
  totals.readings += c.readings?.length || 0
  totals.notes += (c.readings || []).reduce((s, r) => s + (r.notes?.length || 0), 0)

  for (const g of c.grammar || []) {
    if (!g.id || !g.latinTitle || !g.title) problems.push(`${where}: bad grammar entry`)
    if (!g.points?.length && !g.paradigms?.length) problems.push(`${where}/${g.id}: empty grammar`)
    for (const p of g.paradigms || []) {
      if (!p.head?.length || !p.rows?.length) problems.push(`${where}/${g.id}: bad paradigm`)
      for (const row of p.rows || []) if (row.length !== p.head.length) problems.push(`${where}/${g.id}: row/head length mismatch`)
    }
  }
  totals.grammar += c.grammar?.length || 0
  totals.paradigms += (c.grammar || []).reduce((s, g) => s + (g.paradigms?.length || 0), 0)

  for (const w of c.vocabulary || []) if (!w.latin || !w.english) problems.push(`${where}: bad vocab ${JSON.stringify(w)}`)
  totals.vocab += c.vocabulary?.length || 0

  for (const p of c.pensa || []) {
    if (!p.id || !p.latinLabel || !p.type || !p.items?.length) problems.push(`${where}: bad pensum ${p.id || '?'}`)
    if (p.type === 'questions') {
      totals.questions += p.items.length
      for (const q of p.items) if (!q.q || !q.a) problems.push(`${where}/${p.id}: bad question`)
    } else {
      for (const item of p.items) {
        const blanks = [...String(item).matchAll(/\{\{([^}]+)\}\}/g)]
        if (!blanks.length) problems.push(`${where}/${p.id}: item has no blank: ${String(item).slice(0, 50)}`)
        totals.blanks += blanks.length
        for (const b of blanks) if (!b[1].trim()) problems.push(`${where}/${p.id}: empty blank`)
      }
    }
  }
  totals.pensa += c.pensa?.length || 0
}

console.log(totals)
console.log(`\n${problems.length} problem(s)`)
for (const p of problems.slice(0, 60)) console.log('-', p)
if (problems.length > 60) console.log(`... and ${problems.length - 60} more`)
process.exitCode = problems.length ? 1 : 0
