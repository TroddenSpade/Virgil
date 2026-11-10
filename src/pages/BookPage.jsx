import { Link, useParams, Navigate } from 'react-router-dom'
import { books, getBook } from '../data/library.js'
import { useProgress } from '../hooks/useLocalStorage.js'

const EXTRA_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

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

function BookSwitcher({ current }) {
  const others = books.filter(
    (book) => book.status === 'active' && book.kind !== 'reference' && book.id !== current.id,
  )
  if (!others.length) return null

  return (
    <nav className="book-switcher" aria-label="Other books">
      <span className="book-switcher__label">Other books</span>
      <div className="book-switcher__links">
        {others.map((book) => (
          <Link key={book.id} to={`/library/${book.slug}`} className="book-switcher__link">
            <span>{book.shortTitle}</span>
            <span className="book-switcher__count">{book.chapterCount}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

function ActiveBook({ book }) {
  const { isDone, count, percent } = useProgress(book.id, book.chapterCount)
  const first = book.chapters[0]

  return (
    <section className={`section book-page--framed${book.kind === 'commentary' ? ' book-page--commentary' : ''}`}>
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
              <span>{book.kind === 'reader' ? 'colloquia' : 'chapters'}</span>
            </div>
            <div>
              <strong>{book.readyCount}</strong>
              <span>
                {book.kind === 'commentary'
                  ? 'chapters written'
                  : book.kind === 'reader'
                    ? 'colloquia written'
                    : 'full lessons'}
              </span>
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

          <div className="book-hero__actions">
            <Link className="btn btn--primary" to={`/library/${book.slug}/${first.slug}`}>
              {book.kind === 'commentary'
                ? 'Begin Chapter I'
                : book.kind === 'reader'
                  ? `Start Colloquium ${first.roman}`
                  : book.id === 'familia-romana' || book.id === 'roma-aeterna'
                    ? `Start Capitulum ${first.roman}`
                    : 'Start Chapter I'} →
            </Link>
            {book.kind === 'commentary' && (
              <a className="btn btn--ghost" href="#commentary">
                Browse the commentary
              </a>
            )}
          </div>

          <BookSwitcher current={book} />
        </header>

        <hr className="rule" />

        <h2
          id={book.kind === 'reader' ? 'colloquia' : 'commentary'}
          className="section-heading"
        >
          {book.kind === 'commentary' ? 'Commentary' : book.kind === 'reader' ? 'Colloquia' : 'Capitula'}
        </h2>
        <p className="book-page__note muted" style={{ marginTop: '-0.75rem', marginBottom: '1.5rem' }}>
          {book.kind === 'commentary'
            ? 'Each chapter follows the book’s own sections: Rēs Grammaticae Novae, the Lēctiōnēs, Recēnsiō, Studia Rōmāna, and the chapter vocabulary.'
            : book.kind === 'reader'
              ? 'Twenty-four short Latin dialogues, one after each chapter of Familia Romana, with the book’s own marginalia.'
              : 'Lessons marked '}
          {book.kind !== 'commentary' && book.kind !== 'reader' && <span className="tag tag--laurel">lesson</span>}
          {book.kind !== 'commentary' && book.kind !== 'reader' && ' are fully written up; the rest open the original Latin text.'}
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

        {book.extras?.length > 0 && (
          <>
            <hr className="rule" />
            <h2 className="section-heading">Front matter &amp; reference</h2>
            <div className="chapter-grid">
              {book.extras.map((extra, extraIndex) => (
                <Link
                  key={extra.id}
                  to={`/library/${book.slug}/extra/${extra.slug}`}
                  className="chapter-card card is-ready"
                >
                  <span className="chapter-card__num" aria-hidden="true">
                    {EXTRA_NUMERALS[extraIndex] || '·'}
                  </span>
                  <span className="chapter-card__body">
                    <span className="chapter-card__latin latin">{extra.latinTitle}</span>
                    <span className="chapter-card__title">{extra.title}</span>
                  </span>
                  <span className="chapter-card__status">
                    <span className="chapter-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}