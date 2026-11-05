import { Link, useParams, Navigate } from 'react-router-dom'
import { getBook } from '../data/library.js'
import { useProgress } from '../hooks/useLocalStorage.js'

export default function BookPage() {
  const { bookSlug } = useParams()
  const book = getBook(bookSlug)

  if (!book) return <Navigate to="/library" replace />
  if (book.status !== 'active') return <Navigate to="/library" replace />

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return <ActiveBook book={book} />
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
        <div className="chapter-grid">
          {book.chapters.map((chapter) => {
            const ready = chapter.complete
            const done = ready && isDone(chapter.number)
            const inner = (
              <>
                <span className="chapter-card__num" aria-hidden="true">
                  {chapter.roman}
                </span>
                <span className="chapter-card__body">
                  <span className="chapter-card__latin latin">{chapter.latinTitle}</span>
                  <span className="chapter-card__title">{chapter.title}</span>
                </span>
                <span className="chapter-card__status">
                  {done ? (
                    <span className="tag tag--laurel">learned</span>
                  ) : ready ? (
                    <span className="chapter-card__arrow" aria-hidden="true">
                      →
                    </span>
                  ) : (
                    <span className="tag tag--gold">soon</span>
                  )}
                </span>
              </>
            )

            return ready ? (
              <Link
                key={chapter.number}
                to={`/library/${book.slug}/${chapter.slug}`}
                className={`chapter-card card is-ready ${done ? 'is-done' : ''}`}
              >
                {inner}
              </Link>
            ) : (
              <div key={chapter.number} className="chapter-card card is-planned">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
