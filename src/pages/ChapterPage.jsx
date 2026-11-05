import { Link, useParams, Navigate } from 'react-router-dom'
import { getBook } from '../data/library.js'
import { useProgress } from '../hooks/useLocalStorage.js'
import Reading from '../components/Reading.jsx'
import GrammarSection from '../components/GrammarSection.jsx'
import Vocabulary from '../components/Vocabulary.jsx'
import Pensum from '../components/Pensum.jsx'

export default function ChapterPage() {
  const { bookSlug, chapterSlug } = useParams()
  const book = getBook(bookSlug)
  const chapter = book?.chapters.find((c) => c.slug === chapterSlug && c.complete)

  if (!book || !chapter) return <Navigate to={`/library/${bookSlug || ''}`} replace />

  return <Lesson book={book} chapter={chapter} />
}

function Lesson({ book, chapter }) {
  const { isDone, toggle } = useProgress(book.id, book.chapterCount)
  const done = isDone(chapter.number)

  const ready = book.chapters.filter((c) => c.complete)
  const index = ready.findIndex((c) => c.number === chapter.number)
  const prev = index > 0 ? ready[index - 1] : null
  const next = index < ready.length - 1 ? ready[index + 1] : null

  const sections = [
    chapter.readings.length && { id: 'lectio', label: 'Lectio' },
    chapter.grammar.length && { id: 'grammatica', label: 'Grammatica' },
    chapter.vocabulary.length && { id: 'vocabula', label: 'Vocabula' },
    chapter.pensa.length && { id: 'pensa', label: 'Pensa' },
  ].filter(Boolean)

  return (
    <article className="lesson">
      <div className="container lesson__container">
        <Link to={`/library/${book.slug}`} className="back-link">
          ← {book.shortTitle}
        </Link>

        <header className="lesson__header rise">
          <div className="lesson__heading">
            <span className="lesson__numeral" aria-hidden="true">
              {chapter.roman}
            </span>
            <div>
              <p className="eyebrow">Capitulum {chapter.roman}</p>
              <h1 className="lesson__latin-title latin">{chapter.latinTitle}</h1>
              <p className="lesson__title">{chapter.title}</p>
            </div>
          </div>
          <p className="lesson__tagline">{chapter.tagline}</p>

          <div className="lesson__toolbar">
            <button
              type="button"
              className={`btn btn--sm ${done ? 'btn--primary' : 'btn--ghost'}`}
              onClick={() => toggle(chapter.number)}
              aria-pressed={done}
            >
              {done ? '✓ Marked as learned' : 'Mark as learned'}
            </button>
            <nav className="lesson__toc" aria-label="On this page">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}>
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="lesson__overview card">
          <h2 className="lesson__section-title">In this chapter</h2>
          <p>{chapter.overview}</p>
          {chapter.objectives?.length > 0 && (
            <ul className="objectives">
              {chapter.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          )}
        </section>

        {chapter.readings.length > 0 && (
          <section className="lesson__section" id="lectio">
            <h2 className="lesson__section-title">Lectio</h2>
            <Reading readings={chapter.readings} />
          </section>
        )}

        {chapter.grammar.length > 0 && (
          <section className="lesson__section" id="grammatica">
            <h2 className="lesson__section-title">
              Grammatica Latina <span className="muted">· grammar</span>
            </h2>
            <GrammarSection entries={chapter.grammar} />
          </section>
        )}

        {chapter.vocabulary.length > 0 && (
          <section className="lesson__section" id="vocabula">
            <h2 className="lesson__section-title">
              Vocabula <span className="muted">· vocabulary</span>
            </h2>
            <Vocabulary words={chapter.vocabulary} />
          </section>
        )}

        {chapter.pensa.length > 0 && (
          <section className="lesson__section" id="pensa">
            <h2 className="lesson__section-title">
              Pensa <span className="muted">· exercises</span>
            </h2>
            <Pensum pensa={chapter.pensa} />
          </section>
        )}

        <nav className="lesson__nav" aria-label="Chapter navigation">
          {prev ? (
            <Link className="lesson__nav-link lesson__nav-link--prev" to={`/library/${book.slug}/${prev.slug}`}>
              <span className="muted">← Capitulum {prev.roman}</span>
              <span className="latin">{prev.latinTitle}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="lesson__nav-link lesson__nav-link--next" to={`/library/${book.slug}/${next.slug}`}>
              <span className="muted">Capitulum {next.roman} →</span>
              <span className="latin">{next.latinTitle}</span>
            </Link>
          ) : (
            <Link className="lesson__nav-link lesson__nav-link--next" to={`/library/${book.slug}`}>
              <span className="muted">Back to →</span>
              <span>{book.shortTitle}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  )
}
