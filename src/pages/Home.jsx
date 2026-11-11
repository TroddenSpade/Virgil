import { Link } from 'react-router-dom'
import { books, familiaRomanaBook, romaAeternaBook, exercitiaBook, latinViaOvidBook, companionBook, colloquiaBook, fabulaeBook, sermonesBook, exercitiaIIBook, caesarBook, epitomeBook, petroniusBook, arsBook, companionRABook, aeneisBook, catilinaBook, amphitryoBook } from '../data/library.js'
import { useProgress } from '../hooks/useLocalStorage.js'

const firstChapter = familiaRomanaBook.chapters[0]
const firstRomaAeternaChapter = romaAeternaBook.chapters[0]

export default function Home() {
  const { count, percent } = useProgress(familiaRomanaBook.id, familiaRomanaBook.chapterCount)
  const romaProgress = useProgress(romaAeternaBook.id, romaAeternaBook.chapterCount)
  const companionProgress = useProgress(companionBook.id, companionBook.chapterCount)
  const colloquiaProgress = useProgress(colloquiaBook.id, colloquiaBook.chapterCount)
  const fabulaeProgress = useProgress(fabulaeBook.id, fabulaeBook.chapterCount)

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__inscription rise">
              <span>Lingua Latina</span>
              <span aria-hidden="true">·</span>
              <span>per se illustrata</span>
            </p>
            <h1 className="hero__title rise">
              Learn Latin,
              <br />
              and arrive at <em>Virgil</em>.
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
                <strong>
                  {familiaRomanaBook.chapterCount + romaAeternaBook.chapterCount + exercitiaBook.chapterCount + latinViaOvidBook.chapterCount + companionBook.chapterCount + colloquiaBook.chapterCount + fabulaeBook.chapterCount + sermonesBook.chapterCount + exercitiaIIBook.chapterCount + caesarBook.chapterCount + epitomeBook.chapterCount + petroniusBook.chapterCount + arsBook.chapterCount + companionRABook.chapterCount + aeneisBook.chapterCount + catilinaBook.chapterCount + amphitryoBook.chapterCount}
                </strong>{' '}
                chapters, readings &amp; fables
              </li>
              <li>
                <strong>
                  {familiaRomanaBook.readyCount + romaAeternaBook.readyCount + exercitiaBook.readyCount + latinViaOvidBook.readyCount + companionBook.readyCount + colloquiaBook.readyCount + fabulaeBook.readyCount + sermonesBook.readyCount + exercitiaIIBook.readyCount + caesarBook.readyCount + epitomeBook.readyCount + petroniusBook.readyCount + arsBook.readyCount + companionRABook.readyCount + aeneisBook.readyCount + catilinaBook.readyCount + amphitryoBook.readyCount}
                </strong>{' '}
                texts ready
              </li>
              <li>installable app</li>
            </ul>
          </div>

          <figure className="hero__portrait rise">
            <div className="hero__portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}icons/icon-512.png`}
                alt="Engraved medallion portrait of the poet Virgil"
                width="512"
                height="512"
              />
            </div>
            <figcaption>
              <span className="hero__portrait-name">PVBLIVS·VERGILIVS·MARO</span>
              <span className="hero__portrait-dates">70–19 BC · Mantua</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">The path</p>
          <h2>How the project works</h2>
          <div className="feature-grid">
            <article className="feature card">
              <span className="feature__num" aria-hidden="true">I</span>
              <h3>Read from day one</h3>
              <p>
                Following Ørberg’s direct method, every word is explained by the words around it, by pictures and
                by short marginal notes — so meaning comes first and grammar grows out of the reading.
              </p>
            </article>
            <article className="feature card">
              <span className="feature__num" aria-hidden="true">II</span>
              <h3>Grammar in context</h3>
              <p>
                Each chapter has a <em>Grammatica Latina</em> section with clear paradigms — singular and plural,
                the cases, the verb — always tied to sentences you have just read.
              </p>
            </article>
            <article className="feature card">
              <span className="feature__num" aria-hidden="true">III</span>
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
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
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

          <div className="book-feature card">
            <div className="book-feature__body">
              <p className="eyebrow">Now available · Companion</p>
              <h2>{companionBook.title}</h2>
              <p className="lead latin">{companionBook.latinTitle}</p>
              <p>{companionBook.summary}</p>
              <div className="book-feature__progress">
                <div className="progress" role="progressbar" aria-valuenow={companionProgress.percent} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress__fill" style={{ width: `${companionProgress.percent}%` }} />
                </div>
                <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
                  {companionProgress.count} of {companionBook.chapterCount} chapters marked as learned
                </span>
              </div>
              <div className="hero__actions">
                <Link className="btn btn--primary" to={`/library/${companionBook.slug}`}>
                  Open the Companion
                </Link>
                <Link className="btn btn--ghost" to={`/library/${companionBook.slug}/${companionBook.chapters[0].slug}`}>
                  Start Chapter I
                </Link>
              </div>
            </div>
            <div className="book-feature__spine" aria-hidden="true" style={{ background: 'linear-gradient(160deg, #7a5a1f, #3c2a0c)' }}>
              <span className="book-feature__spine-text">COMES</span>
            </div>
          </div>

          <div className="book-feature card">
            <div className="book-feature__body">
              <p className="eyebrow">Now available · Reader</p>
              <h2>{colloquiaBook.title}</h2>
              <p className="lead latin">{colloquiaBook.latinTitle}</p>
              <p>{colloquiaBook.summary}</p>
              <div className="book-feature__progress">
                <div className="progress" role="progressbar" aria-valuenow={colloquiaProgress.percent} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress__fill" style={{ width: `${colloquiaProgress.percent}%` }} />
                </div>
                <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
                  {colloquiaProgress.count} of {colloquiaBook.chapterCount} colloquia marked as learned
                </span>
              </div>
              <div className="hero__actions">
                <Link className="btn btn--primary" to={`/library/${colloquiaBook.slug}`}>
                  Open the reader
                </Link>
                <Link className="btn btn--ghost" to={`/library/${colloquiaBook.slug}/${colloquiaBook.chapters[0].slug}`}>
                  Start Colloquium I
                </Link>
              </div>
            </div>
            <div className="book-feature__spine" aria-hidden="true" style={{ background: 'linear-gradient(160deg, var(--laurel), #2f4a28)' }}>
              <span className="book-feature__spine-text">COLLOQVIA</span>
            </div>
          </div>


          <div className="book-feature card">
            <div className="book-feature__body">
              <p className="eyebrow">Now available · Fables</p>
              <h2>{fabulaeBook.title}</h2>
              <p className="lead latin">{fabulaeBook.latinTitle}</p>
              <p>{fabulaeBook.summary}</p>
              <div className="book-feature__progress">
                <div className="progress" role="progressbar" aria-valuenow={fabulaeProgress.percent} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress__fill" style={{ width: `${fabulaeProgress.percent}%` }} />
                </div>
                <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
                  {fabulaeProgress.count} of {fabulaeBook.chapterCount} capitula marked as learned · {fabulaeBook.readingCount} fables
                </span>
              </div>
              <div className="hero__actions">
                <Link className="btn btn--primary" to={`/library/${fabulaeBook.slug}`}>
                  Open the fables
                </Link>
                <Link className="btn btn--ghost" to={`/library/${fabulaeBook.slug}/${fabulaeBook.chapters[0].slug}`}>
                  Start Capitulum XXVI
                </Link>
              </div>
            </div>
            <div className="book-feature__spine" aria-hidden="true" style={{ background: 'linear-gradient(160deg, #6d5a2a, #2f2a17)' }}>
              <span className="book-feature__spine-text">FABVLAE SYRAE</span>
            </div>
          </div>

          <div className="book-feature card">
            <div className="book-feature__body">
              <p className="eyebrow">Now available · Pars II</p>
              <h2>{romaAeternaBook.title}</h2>
              <p className="lead latin">{romaAeternaBook.latinTitle}</p>
              <p>{romaAeternaBook.summary}</p>
              <div className="book-feature__progress">
                <div className="progress" role="progressbar" aria-valuenow={romaProgress.percent} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress__fill" style={{ width: `${romaProgress.percent}%` }} />
                </div>
                <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
                  {romaProgress.count} of {romaAeternaBook.chapterCount} chapters marked as learned
                </span>
              </div>
              <div className="hero__actions">
                <Link className="btn btn--primary" to={`/library/${romaAeternaBook.slug}`}>
                  Open the book
                </Link>
                <Link className="btn btn--ghost" to={`/library/${romaAeternaBook.slug}/${firstRomaAeternaChapter.slug}`}>
                  Start Capitulum XXXVI
                </Link>
              </div>
            </div>
            <div className="book-feature__spine" aria-hidden="true" style={{ background: 'linear-gradient(160deg, var(--gold), #6f4c12)' }}>
              <span className="book-feature__spine-text">ROMA AETERNA</span>
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

      <section className="section-tight">
        <div className="container">
          <blockquote className="motto">
            <p className="motto__latin latin">Arma virumque canō, Troiae quī prīmus ab ōrīs</p>
            <footer className="motto__source">Vergil, Aeneid I.1</footer>
          </blockquote>
        </div>
      </section>
    </>
  )
}
