import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const norm = (s) =>
  (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

export default function DictionaryDetail() {
  const { word } = useParams()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

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

  const headword = word
  const normHeadword = norm(headword)

  const entry = useMemo(() => {
    if (!data) return null
    return data.entries.find((e) => norm(e.headword) === normHeadword)
  }, [data, normHeadword])

  if (error) {
    return (
      <section className="section dictionary-detail-page">
        <div className="container">
          <p className="eyebrow">Lexicon</p>
          <h1>Dictionary</h1>
          <p className="notice">Could not load the dictionary. {error.message}</p>
        </div>
      </section>
    )
  }

  if (!data) {
    return (
      <section className="section dictionary-detail-page">
        <div className="container">
          <p className="eyebrow">Lexicon</p>
          <h1>Dictionary</h1>
          <p className="muted">Loading the dictionary…</p>
        </div>
      </section>
    )
  }

  if (!entry) {
    return (
      <section className="section dictionary-detail-page">
        <div className="container">
          <p className="eyebrow">Lexicon</p>
          <h1>Dictionary</h1>
          <p className="notice">Word not found: “{headword}”</p>
          <p className="muted">
            <Link to="/dictionary">← Back to Dictionary</Link>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="section dictionary-detail-page">
      <div className="container">
        <p className="eyebrow">Lexicon</p>

        <header className="dictionary-detail__header">
          <Link to="/dictionary" className="dictionary-back">
            ← Back to Dictionary
          </Link>
          <h1 className="dictionary-detail__latin latin">{entry.latin}</h1>
          <div className="dictionary-detail__meta">
            {entry.pos && <span className="dictionary-detail__pos">{entry.pos}</span>}
            {entry.posGroup && <span className="muted">{entry.posGroup}</span>}
            {entry.letter && <span className="muted">Letter: {entry.letter.toUpperCase()}</span>}
          </div>
        </header>

        <p className="dictionary-detail__meaning">{entry.english}</p>

        {entry.sources?.length > 0 && (
          <section className="dictionary-detail__sources">
            <p className="dictionary-detail__sources-title">Sources</p>
            <div className="dictionary-detail__sources-list">
              {entry.sources.map((source, index) => (
                <span key={source.book + source.number} className="dictionary-detail__source">
                  {index > 0 && <span aria-hidden="true"> · </span>}
                  <Link to={`/library/${source.bookSlug}/${source.slug}`} className="dictionary-detail__source">
                    {source.book} {source.roman}: {source.title}
                  </Link>
                </span>
              ))}
            </div>
          </section>
        )}

        {entry.examples?.length > 0 && (
          <section className="dictionary-detail__examples">
            <p className="dictionary-detail__examples-title">Example Sentences</p>
            <div className="dictionary-detail__examples-list">
              {entry.examples.map((example, index) => (
                <blockquote className="dict-example" key={index}>
                  <p className="dict-example__latin latin">{example.latin}</p>
                  <footer className="dict-example__source">
                    {example.reading}
                    {' · '}
                    <Link to={`/library/${example.bookSlug}/${example.slug}`} className="dict-example__source">
                      {example.book} {example.roman}
                    </Link>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        <Link to="/dictionary" className="dictionary-back">
          ← Back to Dictionary
        </Link>
      </div>
    </section>
  )
}