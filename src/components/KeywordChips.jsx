import { useState } from 'react'
import { describeKeyword } from '../data/keywords.js'

const GROUP_ORDER = ['level', 'grammar', 'theme', 'text', 'skill', 'author', 'work']
const GROUP_LIMIT = {
  level: 1,
  grammar: 1,
  theme: 2,
  text: 1,
  skill: 1,
  author: 0,
  work: 0,
}

const SKILL_ORDER = [
  'reading',
  'grammar',
  'vocabulary',
  'practice',
  'translation',
  'composition',
  'scansion',
  'commentary',
]
const TEXT_ORDER = [
  'dialogue',
  'fable',
  'letter',
  'history',
  'speech',
  'poetry',
  'comedy',
  'novel',
  'satire',
  'narrative',
  'coursebook',
  'commentary',
  'original-latin',
  'adapted-latin',
  'gospel',
  'acts',
  'inscription',
  'paraphrase',
  'anthology',
  'prose',
  'verse',
]

function rank(entry) {
  const name = entry.id.split(':')[1]
  if (entry.group === 'skill') {
    const index = SKILL_ORDER.indexOf(name)
    return index === -1 ? SKILL_ORDER.length : index
  }
  if (entry.group === 'text') {
    const index = TEXT_ORDER.indexOf(name)
    return index === -1 ? TEXT_ORDER.length : index
  }
  return 0
}

function resolve(ids = []) {
  return ids
    .map((id) => ({ id, ...describeKeyword(id) }))
    .sort(
      (a, b) =>
        GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group) ||
        rank(a) - rank(b),
    )
}

function pick(entries, variant) {
  if (variant === 'card') {
    const theme = entries.find((entry) => entry.group === 'theme')
    const grammar = entries.find((entry) => entry.group === 'grammar')
    const text = entries.find((entry) => entry.group === 'text')
    return [grammar, theme, text].filter(Boolean).slice(0, 2)
  }

  const picked = []
  const counts = {}
  for (const entry of entries) {
    const limit = GROUP_LIMIT[entry.group] ?? 1
    if ((counts[entry.group] || 0) >= limit) continue
    counts[entry.group] = (counts[entry.group] || 0) + 1
    picked.push(entry)
  }
  return picked
}

export function primaryKeywordLabels(ids = [], count = 2) {
  return pick(resolve(ids), 'card').slice(0, count).map((entry) => entry.label)
}

export default function KeywordChips({ ids = [], variant = 'lesson' }) {
  const [open, setOpen] = useState(false)
  const entries = resolve(ids)
  if (!entries.length) return null

  if (variant === 'card') {
    const labels = pick(entries, 'card')
    if (!labels.length) return null
    return (
      <span className="chapter-card__keywords" aria-hidden="true">
        {labels.map((entry, index) => (
          <span key={entry.id}>
            {index > 0 && <span className="chapter-card__keyword-sep">◆</span>}
            {entry.label}
          </span>
        ))}
      </span>
    )
  }

  const primary = pick(entries, 'lesson')
  const canExpand = entries.length > primary.length
  const shown = open ? entries : primary
  const chip = (entry) => (
    <li key={entry.id} className="keyword" data-group={entry.group} title={`${entry.group}: ${entry.label}`}>
      {entry.label}
    </li>
  )

  return (
    <div className="lesson__keywords">
      {canExpand ? (
        <button
          type="button"
          className="lesson__keywords-label"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          title={open ? 'Show fewer keywords' : 'Show all keywords'}
        >
          Keywords
        </button>
      ) : (
        <p className="lesson__keywords-label">Keywords</p>
      )}
      <ul className="keyword-row" aria-label="Chapter keywords">
        {shown.map(chip)}
      </ul>
    </div>
  )
}
