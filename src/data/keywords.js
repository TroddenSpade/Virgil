import {
  chapterKeywords,
  keywordDefinitions,
  keywordGroups,
  keywordIndex,
} from './chapter-keywords.generated.js'

export { chapterKeywords, keywordDefinitions, keywordGroups, keywordIndex }

export function keywordsFor(bookSlug, chapterSlug) {
  return chapterKeywords[`${bookSlug}/${chapterSlug}`] || []
}

export function describeKeyword(id) {
  return keywordDefinitions[id] || { group: 'other', label: id }
}

export function groupKeywords(ids) {
  const groups = {}
  for (const id of ids || []) {
    const definition = describeKeyword(id)
    ;(groups[definition.group] ||= []).push(definition.label)
  }
  return groups
}

export function chaptersForKeyword(id) {
  return keywordIndex[id] || []
}

export function keywordCounts() {
  return Object.fromEntries(
    Object.entries(keywordIndex).map(([id, chapters]) => [id, chapters.length]),
  )
}

export function keywordsByGroup() {
  const out = {}
  for (const [id, definition] of Object.entries(keywordDefinitions)) {
    ;(out[definition.group] ||= []).push({ id, label: definition.label })
  }
  for (const list of Object.values(out)) list.sort((a, b) => a.label.localeCompare(b.label))
  return out
}
