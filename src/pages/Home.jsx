import { Link } from 'react-router-dom'
import { books, familiaRomanaBook } from '../data/library.js'
import { useProgress } from '../hooks/useLocalStorage.js'

const firstChapter = familiaRomanaBook.chapters[0]

export default function Home() {
  const { count, percent } = useProgress(familiaRomanaBook.id, familiaRomanaBook.chapterCount)

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <p className="eyebrow rise">Latina per se illustrata</p>
          <h1 className="hero__title rise">
            Learn Latin,
            <br />
            and arrive at <span className="accent">Virgil</span>.
          </h1>
          <p className="hero__lead lead rise">
            Virgil is a Latin reading project. You begin with the first sentence of Ørberg’s{' '}
            <em>Familia Romana</em> — <span className="latin">Roma in Italia est</span> — and, chapter by chapter,
            read your way toward the poetry of the <em>Aeneid</em>. No translation. No memorising word lists before
            you read. Just Latin, understood from the very first page.
          </p>
          <div className="hero__actions rise">
            <Link className="btn btn--primary" to={`/library/${familiaRomanaBook.slug}/${firstChapter.slug}`}>
              Begin Capitulum I →
            </Link>
            <Link className="btn btn--ghost" to="/library">
              Browse the library
            </Link>
          </div>
          <ul className="hero__meta rise">
            <li>
              <strong>{familiaRomanaBook.chapterCount}</strong> chapters
            </li>
            <li>
              <strong>{familiaRomanaBook.readyCount}</strong> full lessons ready
            </li>
            <li>installable app</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">The path</p>
          <h2>How the project works</h2>
          <div className="feature-grid">
            <article className="feature card">
              <h3>Read from day one</h3>
              <p>
                Following Ørberg’s direct method, every word is explained by the words around it, by pictures and
                by short marginal notes — so meaning comes first and grammar grows out of the reading.
              </p>
            </article>
            <article className="feature card">
              <h3>Grammar in context</h3>
              <p>
                Each chapter has a <em>Grammatica Latina</em> section with clear paradigms — singular and plural,
                the cases, the verb — always tied to sentences you have just read.
              </p>
            </article>
            <article className="feature card">
              <h3>Practise, then move on</h3>
              <p>
                The original exercises (<em>Pensum A, B, C</em>) are here with instant checking and model answers,
                and a vocabulary trainer with flashcards for every chapter.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="book-feature card">
            <div className="book-feature__body">
              <p className="eyebrow">Now available</p>
              <h2>{familiaRomanaBook.title}</h2>
              <p className="lead latin">{familiaRomanaBook.latinTitle}</p>
              <p>{familiaRomanaBook.summary}</p>
              <div className="book-feature__progress">
                <div className="progress" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress__fill" style={{ width: `${percent}%` }} />
                </div>
                <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
                  {count} of {familiaRomanaBook.chapterCount} chapters marked as learned
                </span>
              </div>
              <div className="hero__actions">
                <Link className="btn btn--primary" to={`/library/${familiaRomanaBook.slug}`}>
                  Open the book
                </Link>
                <Link className="btn btn--ghost" to={`/library/${familiaRomanaBook.slug}/${firstChapter.slug}`}>
                  Start Capitulum I
                </Link>
              </div>
            </div>
            <div className="book-feature__spine" aria-hidden="true">
              <span className="book-feature__spine-text">FAMILIA ROMANA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">The road to the Aeneid</p>
          <h2>Where this is going</h2>
          <ol className="roadmap">
            {books.map((book) => (
              <li key={book.id} className={`roadmap__item ${book.status === 'active' ? 'is-active' : ''}`}>
                <span className="roadmap__dot" aria-hidden="true" />
                <div>
                  <h3 className="roadmap__title">
                    {book.shortTitle}
                    {book.status === 'active' && <span className="tag tag--laurel" style={{ marginLeft: '0.6rem' }}>in progress</span>}
                    {book.isGoal && <span className="tag" style={{ marginLeft: '0.6rem' }}>the goal</span>}
                  </h3>
                  <p className="muted roadmap__meta">
                    {book.author}
                    {book.isbn ? ` · ${book.publisher}` : ''}
                  </p>
                  <p>{book.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
