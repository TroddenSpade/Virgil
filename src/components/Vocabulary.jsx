import { useMemo, useState } from 'react'

export default function Vocabulary({ words }) {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState('list')
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const filtered = useMemo(() => {
    if (!words) return []
    const q = query.trim().toLowerCase()
    if (!q) return words
    return words.filter(
      (w) => w.latin.toLowerCase().includes(q) || w.english.toLowerCase().includes(q),
    )
  }, [words, query])

  if (!words?.length) return null

  const card = filtered[index]
  const go = (delta) => {
    setFlipped(false)
    setIndex((i) => (i + delta + filtered.length) % filtered.length)
  }

  return (
    <div className="vocab card">
      <div className="vocab__bar">
        <h3 className="vocab__heading">
          Vocabula <span className="muted">· {words.length} words</span>
        </h3>
        <div className="vocab__controls">
          <input
            type="search"
            className="vocab__search"
            placeholder="Search…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIndex(0)
              setFlipped(false)
            }}
            aria-label="Search vocabulary"
          />
          <div className="segmented" role="tablist" aria-label="Vocabulary view">
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'list'}
              className={mode === 'list' ? 'is-active' : ''}
              onClick={() => setMode('list')}
            >
              List
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'cards'}
              className={mode === 'cards' ? 'is-active' : ''}
              onClick={() => setMode('cards')}
            >
              Cards
            </button>
          </div>
        </div>
      </div>

      {mode === 'list' ? (
        <ul className="vocab__list">
          {filtered.map((w, i) => (
            <li key={i} className="vocab__item">
              <span className="vocab__latin latin">{w.latin}</span>
              <span className="vocab__english">{w.english}</span>
              {w.pos && <span className="vocab__pos">{w.pos}</span>}
            </li>
          ))}
          {filtered.length === 0 && <li className="vocab__empty muted">No words match “{query}”.</li>}
        </ul>
      ) : (
        <div className="flashcards">
          {card ? (
            <>
              <button
                type="button"
                className={`flashcard ${flipped ? 'is-flipped' : ''}`}
                onClick={() => setFlipped((f) => !f)}
                aria-label="Flip card"
              >
                <span className="flashcard__face flashcard__front latin">{card.latin}</span>
                <span className="flashcard__face flashcard__back">
                  <span className="flashcard__english">{card.english}</span>
                  {card.pos && <span className="flashcard__pos">{card.pos}</span>}
                </span>
                <span className="flashcard__hint muted">{flipped ? 'tap to see the Latin' : 'tap to reveal'}</span>
              </button>
              <div className="flashcards__nav">
                <button type="button" className="btn btn--ghost btn--sm" onClick={() => go(-1)}>
                  ← Previous
                </button>
                <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
                  {index + 1} / {filtered.length}
                </span>
                <button type="button" className="btn btn--ghost btn--sm" onClick={() => go(1)}>
                  Next →
                </button>
              </div>
            </>
          ) : (
            <p className="muted">No words to show.</p>
          )}
        </div>
      )}
    </div>
  )
}
