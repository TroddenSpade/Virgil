import { Link, Navigate, useParams } from 'react-router-dom'
import { getBook, getSource } from '../data/library.js'
import { useSourceChapter } from '../hooks/useSourceChapter.js'

export default function ReferencePage() {
  const { bookSlug, chapterId } = useParams()
  const book = getBook(bookSlug)

  if (!book?.referenceChapters?.length) return <Navigate to="/library" replace />

  return <Reader book={book} chapterId={chapterId} />
}

function Reader({ book, chapterId }) {
  const source = getSource(book.sourceSlug)
  const chapters = book.referenceChapters
  const index = chapters.findIndex((c) => c.id === chapterId)
  const chapter = chapters[index]
  const { status, data, error } = useSourceChapter(book.sourceSlug, chapterId)

  if (!chapter) return <Navigate to={`/library/${book.slug}`} replace />

  const prev = index > 0 ? chapters[index - 1] : null
  const next = index < chapters.length - 1 ? chapters[index + 1] : null
  const label = chapter.roman || chapter.number

  return (
    <article className="reader">
      <div className="container reader__container">
        <Link to={`/library/${book.slug}`} className="back-link">
          ← {book.shortTitle}
        </Link>

        <header className="reader__header rise">
          <p className="eyebrow">{source?.title || book.title}</p>
          <div className="reader__heading">
            <span className="reader__numeral" aria-hidden="true">
              {label}
            </span>
            <div className="reader__heading-text">
              <h1 className="reader__title">{chapter.title || `Chapter ${chapter.number}`}</h1>
              {chapter.latinTitle && <p className="reader__latin latin">{chapter.latinTitle}</p>}
            </div>
          </div>
          <p className="reader__source muted">
            Full text · {book.author}
            {book.edition ? ` · ${book.edition}` : ''}
          </p>
        </header>

        <div className="reader__body">
          {status === 'loading' && <p className="reader__status muted">Loading the chapter…</p>}
          {status === 'error' && (
            <p className="reader__status notice">
              Could not load this chapter. {error?.message || ''}
            </p>
          )}
          {status === 'ready' &&
            data?.blocks?.map((block, i) =>
              block.t === 'h' ? (
                <h2 key={i} className="reader__h">
                  {block.text}
                </h2>
              ) : (
                <p key={i}>{block.text}</p>
              ),
            )}
        </div>

        <nav className="reader__nav" aria-label="Chapter navigation">
          {prev ? (
            <Link className="reader__nav-link reader__nav-link--prev" to={`/library/${book.slug}/read/${prev.id}`}>
              <span className="muted">← {prev.roman || prev.number}</span>
              <span>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="reader__nav-link reader__nav-link--next" to={`/library/${book.slug}/read/${next.id}`}>
              <span className="muted">{next.roman || next.number} →</span>
              <span>{next.title}</span>
            </Link>
          ) : (
            <Link className="reader__nav-link reader__nav-link--next" to={`/library/${book.slug}`}>
              <span className="muted">Back to →</span>
              <span>{book.shortTitle}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  )
}