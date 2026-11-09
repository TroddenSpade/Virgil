// Put the Exercitia pensa back into the workbook's numeric order.
import { readFileSync, writeFileSync } from 'node:fs'

const num = (p) => Number((p.latinLabel?.match(/\d+/) || [0])[0]) || 0

for (let n = 1; n <= 35; n += 1) {
  const file = `src/data/exercitia-latina/capitulum-${String(n).padStart(2, '0')}.js`
  const chapter = (await import(`../${file}`)).default
  const before = chapter.pensa.map((p) => p.latinLabel).join('|')
  chapter.pensa.sort((a, b) => num(a) - num(b))
  const after = chapter.pensa.map((p) => p.latinLabel).join('|')
  if (before === after) continue
  const header = `// Capitulum ${chapter.roman} — ${chapter.latinTitle}\n// Source: Ørberg, Lingua Latina per se Illustrata: Exercitia Latina I (2005)\n// Exercise text adapted for the web.\n\n`
  writeFileSync(file, header + 'const chapter = ' + JSON.stringify(chapter, null, 2) + '\n\nexport default chapter\n', 'utf8')
  console.log('sorted', file)
}
