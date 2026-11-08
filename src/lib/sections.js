// Turn a reference chapter's flat heading/paragraph blocks into the same
// structured, ordered sections used by the hand-written Familia Romana
// lessons (I Lectio → II Grammatica → III Vocabula → IV Pensa).
//
// Every source keeps its own section headings in the extracted text; here we
// recognise those headings, group the paragraphs beneath them, label each
// group with the canonical lesson name, and order the groups the way the
// lessons are ordered. The reading text itself is never altered.

const KIND_META = {
  lectio: { rank: 1, latin: 'Lectio', english: 'reading' },
  grammatica: { rank: 2, latin: 'Grammatica', english: 'grammar' },
  vocabula: { rank: 3, latin: 'Vocabula', english: 'vocabulary' },
  pensa: { rank: 4, latin: 'Pensa', english: 'exercises' },
  notes: { rank: 5, latin: 'Nōtae', english: 'notes' },
}

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

// Per-source rules. `sections` are tested in order against heading text;
// the first match starts a new canonical section. `defaultKind` is used for
// any content that appears before the first recognised heading. When
// `demoteHeadings` is set, headings that are not section headings become
// ordinary text (needed for books whose extraction promoted stray lines).
const SOURCE_RULES = {
  'familia-romana': {
    defaultKind: 'lectio',
    demoteHeadings: false,
    sections: [
      { re: /GRAMMATICA\s+LATINA/i, kind: 'grammatica' },
      { re: /^\s*LATINA\s*$/i, kind: 'grammatica' },
      { re: /^\s*SCAENA\b/i, kind: 'lectio' },
      { re: /^\s*PENSVM/i, kind: 'pensa' },
      { re: /^\s*VOCABULA\b/i, kind: 'vocabula' },
    ],
  },
  'latin-via-ovid': {
    defaultKind: 'lectio',
    demoteHeadings: false,
    sections: [
      { re: /^\s*Verba\s*$/i, kind: 'vocabula' },
      { re: /^\s*(NOUNS|VERBS|ADJECTIVES|OTHER WORDS)\s*$/i, kind: 'vocabula' },
      { re: /^\s*Structure\b/i, kind: 'grammatica' },
      { re: /^\s*Grammar\b/i, kind: 'grammatica' },
      { re: /^\s*Exercises\b/i, kind: 'pensa' },
      { re: /^\s*Practice\b/i, kind: 'pensa' },
      { re: /^\s*Dialogue\b/i, kind: 'pensa' },
      { re: /^\s*Etymology\b/i, kind: 'notes' },
      { re: /^\s*Sententiae\b/i, kind: 'notes' },
      { re: /^\s*Word Study\b/i, kind: 'notes' },
    ],
  },
  companion: {
    defaultKind: 'grammatica',
    demoteHeadings: false,
    sections: [
      { re: /R[ēe]s\s+Grammaticae/i, kind: 'grammatica' },
      { re: /^L[ēe]cti[ōo]/i, kind: 'lectio' },
      { re: /^\s*Vocabulary\b/i, kind: 'vocabula' },
      { re: /^\s*Exercis/i, kind: 'pensa' },
    ],
  },
  'learn-latin': {
    defaultKind: 'grammatica',
    demoteHeadings: true,
    sections: [
      { re: /^\s*\d+\.\d+\s+.*Vocabulary/i, kind: 'vocabula' },
      { re: /^\s*\d+\.\d+\s+.*Exercis/i, kind: 'pensa' },
      { re: /^\s*\d+\.\d+\s+/, kind: 'grammatica' },
    ],
  },
  exercitia: {
    defaultKind: 'pensa',
    demoteHeadings: false,
    sections: [
      { re: /^L[ēe]cti[ōo]\s+grammatica/i, kind: 'grammatica' },
      { re: /^L[ēe]cti[ōo]/i, kind: 'lectio' },
    ],
  },
}

function normalise(s) {
  return (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Za-z0-9]/g, '')
    .toUpperCase()
}

export function romanNumeral(n) {
  return ROMAN[n] || String(n)
}

/**
 * @param {{t:'h'|'p', text:string}[]} blocks
 * @param {string} sourceSlug
 * @param {{title?:string, latinTitle?:string}} [chapter]
 * @returns {{id,kind,num,latin,english,blocks}[] | null}
 */
export function buildSections(blocks, sourceSlug, chapter = {}) {
  const rules = SOURCE_RULES[sourceSlug]
  if (!rules || !Array.isArray(blocks) || blocks.length === 0) return null

  const titleKeys = new Set(
    [normalise(chapter.title), normalise(chapter.latinTitle)].filter(Boolean),
  )

  const raw = []
  let current = { kind: rules.defaultKind, blocks: [] }
  let sawSection = false

  for (const block of blocks) {
    let kind = null
    if (block.t === 'h') {
      for (const rule of rules.sections) {
        if (rule.re.test(block.text)) {
          kind = rule.kind
          break
        }
      }
    }

    if (kind) {
      sawSection = true
      if (current.blocks.length) raw.push(current)
      current = { kind, blocks: [{ t: 'h', text: block.text }] }
    } else if (block.t === 'h' && rules.demoteHeadings) {
      current.blocks.push({ t: 'p', text: block.text })
    } else {
      current.blocks.push(block)
    }
  }
  if (current.blocks.length) raw.push(current)

  if (!sawSection) return null

  // Drop a leading heading that only repeats the chapter title (already shown
  // in the page header).
  if (raw.length && raw[0].kind === rules.defaultKind) {
    const first = raw[0].blocks[0]
    if (first && first.t === 'h' && titleKeys.has(normalise(first.text))) {
      raw[0].blocks = raw[0].blocks.slice(1)
    }
  }

  // Gather all blocks of the same kind, preserving their original order.
  const byKind = new Map()
  for (const section of raw) {
    if (!section.blocks.length) continue
    if (!byKind.has(section.kind)) byKind.set(section.kind, [])
    byKind.get(section.kind).push(...section.blocks)
  }
  if (byKind.size === 0) return null

  const ordered = [...byKind.entries()]
    .map(([kind, kindBlocks]) => ({ kind, blocks: kindBlocks }))
    .sort((a, b) => KIND_META[a.kind].rank - KIND_META[b.kind].rank)

  return ordered.map((section, index) => ({
    id: `sec-${section.kind}`,
    kind: section.kind,
    num: romanNumeral(index + 1),
    latin: KIND_META[section.kind].latin,
    english: KIND_META[section.kind].english,
    blocks: section.blocks,
  }))
}

export default buildSections
