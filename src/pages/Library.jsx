import { Link } from 'react-router-dom'
import { books } from '../data/library.js'

export default function Library() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Bibliotheca</p>
        <h1>The Library</h1>
        <p className="lead" style={{ maxWidth: '60ch' }}>
          The whole course, arranged as a shelf of books. Familia Romana begins the course and Roma Aeterna
          carries it on through Aeneas and the Roman Republic, with the Exercitia Latina beside them; the
          Companion, Learn Latin from the Romans and Latin via Ovid are here in full as references. Together
          they lead from your first Latin sentence to the poetry of Virgil.
        </p>

        <div className="book-grid">
          {books.map((book) => {
            const isActive = book.status === 'active'
            const Card = isActive ? Link : 'div'
            const cardProps = isActive
              ? { to: `/library/${book.slug}`, className: `book-card card is-active accent-${book.accent}` }
              : { className: `book-card card is-planned accent-${book.accent}` }
            return (
              <Card key={book.id} {...cardProps}>
                <div className="book-card__top">
                  <span className="book-card__level">{book.level}</span>
                  {isActive ? (
                    <span className="tag tag--laurel">open</span>
                  ) : (
                    <span className="tag tag--gold">soon</span>
                  )}
                </div>
                <h2 className="book-card__title">{book.title}</h2>
                {book.latinTitle && <p className="book-card__latin latin">{book.latinTitle}</p>}
                <p className="book-card__meta muted">
                  {book.author}
                  {book.year ? ` · ${book.year}` : ''}
                </p>
                <p className="book-card__summary">{book.summary}</p>
                {isActive && (
                  <p className="book-card__cta">
                    {book.chapterCount} chapters ·{' '}
                    {book.kind === 'reference' ? 'full text' : `${book.readyCount} lessons`}{' '}
                    <span aria-hidden="true">→</span>
                  </p>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
