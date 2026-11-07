import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const POS_ORDER = [
  'noun',
  'verb',
  'participle',
  'adjective',
  'adverb',
  'preposition',
  'conjunction',
  'pronoun',
  'numeral',
  'particle',
  'interjection',
  'other',
]

const norm = (s) =>
  (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const PAGE_SIZE = 80

export default function Dictionary() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [letter, setLetter] = useState('all')
  const [pos, setPos] = useState('all')
  const [visible, setVisible] = useState(PAGE_SIZE)

  useEffect(() => {
    let cancelled = false
    import('../data/dictionary.generated.js')
      .then((module) => {
        if (!cancelled) setData(module)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const entries = data?.entries || []
  const letters = data?.letters || []
  const stats = data?.stats || { entries: 0, withExamples: 0 }

  const posOptions = useMemo(
    () => POS_ORDER.filter((group) => entries.some((entry) => entry.posGroup === group)),
    [entries],
  )

  const filtered = useMemo(() => {
    const q = norm(query).trim()
    return entries.filter((entry) => {
      if (letter !== 'all' && entry.letter !== letter) return false
      if (pos !== 'all' && entry.posGroup !== pos) return false
      if (!q) return true
      return (
        norm(entry.latin).includes(q) ||
        norm(entry.headword).includes(q) ||
        norm(entry.english).includes(q)
      )
    })
  }, [entries, query, letter, pos])

  useEffect(() => {
    setVisible(PAGE_SIZE)
  }, [query, letter, pos])

  return (
    <section className="section dictionary-page">
      <div className="container">
        <p className="eyebrow">Lexicon</p>
        <h1>The Dictionary</h1>
        <p className="lead dictionary-page__lead">
          Every word taught in <em>Familia Romana</em> and <em>Roma Aeterna</em>, with its meaning, part of
          speech and examples drawn from the readings. Latin headwords carry their macra, so the dictionary can
          be used when checking or proofreading a passage.
        </p>
        <p className="muted dictionary-page__note">
          Examples are quoted from the course readings. The English meanings at the head of each entry are the
          senses taught in the course.
        </p>

        {error && <p className="notice">Could not load the dictionary. {error.message}</p>}

        {!data && !error && <p className="muted">Loading the dictionary…</p>}

        {data && (
          <>
            <div className="dictionary-stats">
              <span>
                <strong>{stats.entries.toLocaleString()}</strong> entries
              </span>
              <span>
                <strong>{stats.withExamples.toLocaleString()}</strong> with examples
              </span>
              <span>
                <strong>{letters.length}</strong> letters
              </span>
            </div>

            <div className="dictionary-controls card">
              <label className="dictionary-search">
                <span className="dictionary-search__label">Search Latin or English</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="e.g. rīpa, river, magnus…"
                  autoComplete="off"
                />
              </label>

              <label className="dictionary-select">
                <span>Part of speech</span>
                <select value={pos} onChange={(event) => setPos(event.target.value)}>
                  <option value="all">All</option>
                  {posOptions.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="dictionary-letters" aria-label="Filter by first letter">
              <button
                type="button"
                className={letter === 'all' ? 'is-active' : ''}
                onClick={() => setLetter('all')}
              >
                All
              </button>
              {letters.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={letter === item ? 'is-active' : ''}
                  onClick={() => setLetter(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>

            <p className="dictionary-count muted">
              {filtered.length.toLocaleString()} {filtered.length === 1 ? 'entry' : 'entries'}
              {query && ` matching “${query}”`}
            </p>

            <div className="dictionary-list">
              {filtered.slice(0, visible).map((entry) => (
                <article className="dict-entry card" key={entry.id}>
                  <div className="dict-entry__top">
                    <h2 className="dict-entry__latin latin">{entry.latin}</h2>
                    {entry.pos && <span className="dict-entry__pos">{entry.pos}</span>}
                  </div>

                  <p className="dict-entry__meaning">{entry.english}</p>

                  {entry.sources?.length > 0 && (
                    <p className="dict-entry__sources">
                      {entry.sources.slice(0, 4).map((source, index) => (
                        <span key={source.book + source.number}>
                          {index > 0 && <span aria-hidden="true"> · </span>}
                          <Link to={`/library/${source.bookSlug}/${source.slug}`}>
                            {source.book} {source.roman}
                          </Link>
                        </span>
                      ))}
                      {entry.sources.length > 4 && (
                        <span className="muted"> +{entry.sources.length - 4} more</span>
                      )}
                    </p>
                  )}

                  {entry.examples?.length > 0 && (
                    <div className="dict-entry__examples">
                      {entry.examples.map((example, index) => (
                        <blockquote className="dict-example" key={index}>
                          <p className="dict-example__latin latin">{example.latin}</p>
                          <footer className="dict-example__source">
                            {example.reading}
                            {' · '}
                            <Link to={`/library/${example.bookSlug}/${example.slug}`}>
                              {example.book} {example.roman}
                            </Link>
                          </footer>
                        </blockquote>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {filtered.length > visible && (
              <div className="dictionary-more">
                <button type="button" className="btn btn--ghost" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                  Show more ({filtered.length - visible} remaining)
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="dictionary-empty muted">No words match that search.</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
