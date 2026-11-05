// Parse exercise text containing {{answer}} or {{answer|alternative}} blanks
// into an array of text and blank nodes.
export function parseBlanks(text) {
  const nodes = []
  const regex = /\{\{([^}]+)\}\}/g
  let last = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push({ type: 'text', value: text.slice(last, match.index) })
    }
    nodes.push({
      type: 'blank',
      answers: match[1].split('|').map((s) => s.trim()),
    })
    last = regex.lastIndex
  }
  if (last < text.length) {
    nodes.push({ type: 'text', value: text.slice(last) })
  }
  return nodes
}

// Normalise a learner's answer for tolerant comparison.
export function normalise(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.,;:!?"'’]/g, '')
    .replace(/\s+/g, ' ')
}
