// Parse exercise text containing {{answer}} or {{answer|alternative}} blanks
// into an array of text and blank nodes.
export function parseBlanks(text) {
  const nodes = []
  const regex = /\{\{([^}]*)\}\}/g
  let last = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push({ type: 'text', value: text.slice(last, match.index) })
    }
    const raw = match[1].trim()
    const open = raw === '' || raw === '?'
    nodes.push({
      type: 'blank',
      open,
      answers: open ? [] : raw.split('|').map((s) => s.trim()),
    })
    last = regex.lastIndex
  }
  if (last < text.length) {
    nodes.push({ type: 'text', value: text.slice(last) })
  }
  return nodes
}

// Normalise a learner's answer for tolerant comparison.
// Macra (and other combining diacritics) are stripped so that answers
// count whether or not the learner types the long-vowel marks.
export function normalise(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,;:!?"'’]/g, '')
    .replace(/\s+/g, ' ')
}
