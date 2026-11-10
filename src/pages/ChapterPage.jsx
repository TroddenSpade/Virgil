import { Link, useParams, Navigate } from 'react-router-dom'
import { getBook } from '../data/library.js'
import { useProgress } from '../hooks/useLocalStorage.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import Reading from '../components/Reading.jsx'
import GrammarSection from '../components/GrammarSection.jsx'
import Vocabulary from '../components/Vocabulary.jsx'
import Pensum from '../components/Pensum.jsx'
import CommentarySection, { Inline } from '../components/Commentary.jsx'
import CompanionVocabulary, { CompanionNotes } from '../components/CompanionVocabulary.jsx'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

export default function ChapterPage() {
  const { bookSlug, chapterSlug } = useParams()
  const book = getBook(bookSlug)
  const chapter = book?.chapters.find((c) => c.slug === chapterSlug && c.complete)

  if (!book || !chapter) return <Navigate to={`/library/${bookSlug || ''}`} replace />

  return <Lesson book={book} chapter={chapter} />
}

function chapterSections(chapter) {
  if (chapter.sections?.length) {
    return [
      ...chapter.sections.map((section, index) => ({
        id: section.id,
        label: section.latin,
        sub: section.english || '',
        num: ROMAN[index] || String(index + 1),
      })),
      chapter.vocabulary?.length && {
        id: 'vocabula',
        label: chapter.vocabularyTitle || 'Vocābula',
        sub: 'Vocabulary',
      },
      chapter.notes?.length && { id: 'notae', label: 'Nōtae', sub: 'Notes' },
    ].filter(Boolean)
  }

  return [
    chapter.readings?.length && { id: 'lectio', label: 'Lēctiō', sub: 'Reading' },
    chapter.grammar?.length && { id: 'grammatica', label: 'Grammatica Latīna', sub: 'Grammar' },
    chapter.vocabulary?.length && { id: 'vocabula', label: 'Vocābula', sub: 'Vocabulary' },
    chapter.pensa?.length && { id: 'pensa', label: 'Pēnsa', sub: 'Exercises' },
  ]
    .filter(Boolean)
    .map((section, index) => ({ ...section, num: ROMAN[index] || String(index + 1) }))
}

function SectionHead({ num, latin, english }) {
  return (
    <div className="lesson__section-head">
      <span className="lesson__section-index" aria-hidden="true">
        {num}
      </span>
      <div className="lesson__section-heading">
        <h2 className="lesson__section-title latin"><Inline text={latin} /></h2>
        <p className="lesson__section-kicker">{english}</p>
      </div>
    </div>
  )
}

function Lesson({ book, chapter }) {
  const { isDone, toggle } = useProgress(book.id, book.chapterCount)
  const done = isDone(chapter.number)

  const ready = book.chapters.filter((c) => c.complete)
  const index = ready.findIndex((c) => c.number === chapter.number)
  const prev = index > 0 ? ready[index - 1] : null
  const next = index < ready.length - 1 ? ready[index + 1] : null

  const isCommentary = Boolean(chapter.sections?.length)
  const isReader = book.kind === 'reader'
  const unit = isReader ? 'Colloquium' : 'Capitulum'
  const sections = chapterSections(chapter)
  const sectionNum = (id) => sections.find((section) => section.id === id)?.num

  const active = useScrollSpy(sections.map((s) => s.id))

  return (
    <article className={`lesson${isCommentary ? ' lesson--commentary' : ''}`}>
      <div className="container lesson__container">
        <Link to={`/library/${book.slug}`} className="back-link">
          ← {book.shortTitle}
        </Link>

        <header className="lesson__header rise">
          <div className="lesson__heading">
            <span className="lesson__numeral" aria-hidden="true">
              {chapter.roman}
            </span>
            <div className="lesson__heading-text">
              <p className="eyebrow">{book.kind === 'commentary' ? 'Chapter' : isReader ? 'Colloquium' : 'Capitulum'} {chapter.roman}</p>
              <h1 className="lesson__latin-title latin">{chapter.latinTitle}</h1>
              <p className="lesson__title">{chapter.title}</p>
            </div>
          </div>
          {chapter.tagline && <p className="lesson__tagline">{chapter.tagline}</p>}
        </header>

        <div className="lesson__layout">
          <aside className="lesson__rail">
            <div className="lesson__rail-inner">
              <p className="lesson__rail-title">In this chapter</p>
              <nav className="lesson__toc" aria-label="On this page">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''}>
                    <span className="lesson__toc-num">{s.num}</span>
                    <span className="lesson__toc-label">
                      <span className="lesson__toc-latin latin"><Inline text={s.label} /></span>
                      <span className="lesson__toc-sub">{s.sub}</span>
                    </span>
                  </a>
                ))}
              </nav>

              <button
                type="button"
                className={`btn btn--sm lesson__done ${done ? 'btn--primary' : 'btn--ghost'}`}
                onClick={() => toggle(chapter.number)}
                aria-pressed={done}
              >
                {done ? '✓ Marked as learned' : 'Mark as learned'}
              </button>
            </div>
          </aside>

          <div className="lesson__main">
            {chapter.overview && (
              <section className="lesson__overview">
                <p className="eyebrow">Overview</p>
                <p>{chapter.overview}</p>
                {chapter.objectives?.length > 0 && (
                  <ul className="objectives">
                    {chapter.objectives.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {isCommentary ? (
              <>
                {chapter.sections.map((section) => (
                  <section className="lesson__section" id={section.id} key={section.id}>
                    <SectionHead
                      num={sectionNum(section.id)}
                      latin={section.latin}
                      english={section.english}
                    />
                    <CommentarySection blocks={section.blocks} />
                  </section>
                ))}

                {chapter.vocabulary?.length > 0 && (
                  <section className="lesson__section" id="vocabula">
                    <SectionHead
                      num={sectionNum('vocabula')}
                      latin={chapter.vocabularyTitle || 'Vocābula'}
                      english="vocabulary"
                    />
                    <CompanionVocabulary words={chapter.vocabulary} notes={chapter.vocabularyNotes} />
                  </section>
                )}

                {chapter.notes?.length > 0 && (
                  <section className="lesson__section" id="notae">
                    <SectionHead num={sectionNum('notae')} latin="Nōtae" english="notes" />
                    <CompanionNotes notes={chapter.notes} />
                  </section>
                )}
              </>
            ) : (
              <>
                {chapter.readings?.length > 0 && (
                  <section className="lesson__section" id="lectio">
                    <SectionHead num={sectionNum('lectio')} latin="Lēctiō" english="reading" />
                    <Reading readings={chapter.readings} />
                  </section>
                )}

                {chapter.grammar?.length > 0 && (
                  <section className="lesson__section" id="grammatica">
                    <SectionHead num={sectionNum('grammatica')} latin="Grammatica Latīna" english="grammar" />
                    <GrammarSection entries={chapter.grammar} />
                  </section>
                )}

                {chapter.vocabulary?.length > 0 && (
                  <section className="lesson__section" id="vocabula">
                    <SectionHead
                      num={sectionNum('vocabula')}
                      latin={chapter.vocabularyTitle || 'Vocābula'}
                      english="vocabulary"
                    />
                    <Vocabulary words={chapter.vocabulary} />
                  </section>
                )}

                {chapter.pensa?.length > 0 && (
                  <section className="lesson__section" id="pensa">
                    <SectionHead num={sectionNum('pensa')} latin="Pēnsa" english="exercises" />
                    <Pensum pensa={chapter.pensa} />
                  </section>
                )}
              </>
            )}
          </div>
        </div>

        <nav className="lesson__nav" aria-label="Chapter navigation">
          {prev ? (
            <Link className="lesson__nav-link lesson__nav-link--prev" to={`/library/${book.slug}/${prev.slug}`}>
              <span className="muted">← {unit} {prev.roman}</span>
              <span className="latin">{prev.latinTitle || prev.title}</span>
              {prev.latinTitle && <span className="lesson__nav-gloss">{prev.title}</span>}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="lesson__nav-link lesson__nav-link--next" to={`/library/${book.slug}/${next.slug}`}>
              <span className="muted">{unit} {next.roman} →</span>
              <span className="latin">{next.latinTitle || next.title}</span>
              {next.latinTitle && <span className="lesson__nav-gloss">{next.title}</span>}
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
