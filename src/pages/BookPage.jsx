import { Link, useParams, Navigate } from 'react-router-dom'
import { getBook } from '../data/library.js'
import { useProgress } from '../hooks/useLocalStorage.js'

export default function BookPage() {
  const { bookSlug } = useParams()
  const book = getBook(bookSlug)

  if (!book) return <Navigate to="/library" replace />
  if (book.status !== 'active') return <Navigate to="/library" replace />
  if (book.kind === 'reference') return <ReferenceBook book={book} />

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return <ActiveBook book={book} />
}

/* A book whose full text is reproduced as a browsable reference. */
function ReferenceBook({ book }) {
  return (
    <section className="section">
      <div className="container">
        <Link to="/library" className="back-link">
          ← Library
        </Link>

        <header className="book-hero rise">
          <p className="eyebrow">{book.latinTitle}</p>
          <h1 className="book-hero__title">{book.title}</h1>
          <p className="book-hero__meta muted">
            {book.author} · {book.edition} · {book.publisher}, {book.year}
            {book.isbn ? ` · ISBN ${book.isbn}` : ''}
          </p>
          <p className="lead">{book.description}</p>

          <div className="book-hero__stats">
            <div>
              <strong>{book.chapterCount}</strong>
              <span>chapters</span>
            </div>
            <div>
              <strong>{book.referenceChapters.length}</strong>
              <span>full texts</span>
            </div>
          </div>
        </header>

        <hr className="rule" />

        <h2 className="section-heading">Contents</h2>
        <div className="chapter-grid">
          {book.referenceChapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/library/${book.slug}/read/${chapter.id}`}
              className="chapter-card card is-ready"
            >
              <span className="chapter-card__num" aria-hidden="true">
                {chapter.roman || chapter.number}
              </span>
              <span className="chapter-card__body">
                <span className="chapter-card__latin latin">
                  {chapter.latinTitle || chapter.title}
                </span>
                {chapter.latinTitle && <span className="chapter-card__title">{chapter.title}</span>}
              </span>
              <span className="chapter-card__status">
                <span className="chapter-card__arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActiveBook({ book }) {
  const { isDone, count, percent } = useProgress(book.id, book.chapterCount)

  return (
    <section className="section">
      <div className="container">
        <Link to="/library" className="back-link">
          ← Library
        </Link>

        <header className="book-hero rise">
          <p className="eyebrow">{book.latinTitle}</p>
          <h1 className="book-hero__title">{book.title}</h1>
          <p className="book-hero__meta muted">
            {book.author} · {book.edition} · {book.publisher}, {book.year}
            {book.isbn ? ` · ISBN ${book.isbn}` : ''}
          </p>
          <p className="lead">{book.description}</p>

          <div className="book-hero__stats">
            <div>
              <strong>{book.chapterCount}</strong>
              <span>chapters</span>
            </div>
            <div>
              <strong>{book.readyCount}</strong>
              <span>full lessons</span>
            </div>
            <div>
              <strong>{count}</strong>
              <span>learned by you</span>
            </div>
          </div>

          <div className="book-hero__progress">
            <div className="progress" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress__fill" style={{ width: `${percent}%` }} />
            </div>
            <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
              {percent}% complete
            </span>
          </div>
        </header>

        <hr className="rule" />

        <h2 className="section-heading">Capitula</h2>
        <p className="muted" style={{ marginTop: '-0.75rem', marginBottom: '1.5rem' }}>
          Lessons marked <span className="tag tag--laurel">lesson</span> are fully written up; the rest open the
          original Latin text.
        </p>
        <div className="chapter-grid">
          {book.chapters.map((chapter) => {
            const ready = chapter.complete
            const done = ready && isDone(chapter.number)

            const body = (
              <>
                <span className="chapter-card__num" aria-hidden="true">
                  {chapter.roman}
                </span>
                <span className="chapter-card__body">
                  <span className="chapter-card__latin latin">{chapter.latinTitle}</span>
                  <span className="chapter-card__title">{chapter.title}</span>
                </span>
              </>
            )

            if (ready) {
              return (
                <Link
                  key={chapter.number}
                  to={`/library/${book.slug}/${chapter.slug}`}
                  className={`chapter-card card is-ready ${done ? 'is-done' : ''}`}
                >
                  {body}
                  <span className="chapter-card__status">
                    {done ? (
                      <span className="tag tag--laurel">learned</span>
                    ) : (
                      <span className="chapter-card__arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                </Link>
              )
            }

            if (chapter.referenceId) {
              return (
                <Link
                  key={chapter.number}
                  to={`/library/${book.slug}/read/${chapter.referenceId}`}
                  className="chapter-card card is-ready"
                >
                  {body}
                  <span className="chapter-card__status">
                    <span className="tag tag--gold">text</span>
                  </span>
                </Link>
              )
            }

            return (
              <div key={chapter.number} className="chapter-card card is-planned">
                {body}
                <span className="chapter-card__status">
                  <span className="tag tag--gold">soon</span>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}