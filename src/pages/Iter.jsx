import { Fragment, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { iterStages, iterLessonCount } from '../data/learning-path.generated.js'
import { readBookProgress, setChapterDone } from '../lib/progress.js'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const LEVEL_LABEL = {
  beginner: 'Beginner',
  elementary: 'Elementary',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

function lessonKey(lesson) {
  return `${lesson.bookSlug}/${lesson.slug}`
}

export default function Iter() {
  const [revision, setRevision] = useState(0)
  const initialHash = () =>
    typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
  const [open, setOpen] = useState(() => {
    const hash = initialHash()
    const ids = iterStages.map((s) => s.id)
    if (hash && ids.includes(hash)) return new Set([hash])
    return new Set(iterStages[0] ? [iterStages[0].id] : [])
  })

  // Re-read every book's learned list whenever progress changes, here or in
  // another tab, so the whole path stays in step.
  useEffect(() => {
    const hash = initialHash()
    if (hash) {
      const node = document.getElementById(hash)
      if (node) node.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const bump = () => setRevision((value) => value + 1)
    const onStorage = (event) => {
      if (event.type === 'storage' || event.detail?.key?.startsWith('virgil:progress:')) bump()
    }
    window.addEventListener('virgil:storage', onStorage)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('virgil:storage', onStorage)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const progress = useMemo(() => {
    const map = new Map()
    for (const bookId of new Set(iterStages.flatMap((s) => s.lessons.map((l) => l.bookId)))) {
      map.set(bookId, new Set(readBookProgress(bookId)))
    }
    return map
  }, [revision])

  const done = (lesson) => progress.get(lesson.bookId)?.has(lesson.number) ?? false

  const { doneCount, nextLesson } = useMemo(() => {
    let count = 0
    let next = null
    for (const stage of iterStages) {
      for (const lesson of stage.lessons) {
        if (done(lesson)) count += 1
        else if (!next) next = { lesson, stage }
      }
    }
    return { doneCount: count, nextLesson: next }
  }, [progress])

  const overallPercent = iterLessonCount ? Math.round((doneCount / iterLessonCount) * 100) : 0

  const toggle = (lesson) => {
    setChapterDone(lesson.bookId, lesson.number, !done(lesson))
    setRevision((value) => value + 1)
  }

  const toggleStage = (id) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const allOpen = open.size === iterStages.length

  return (
    <section className="section iter">
      <div className="container">
        <header className="iter__hero rise">
          <p className="eyebrow">Iter Latinum</p>
          <h1 className="iter__title">The Itinerary</h1>
          <p className="lead iter__lead">
            One road through the whole library, following the route of <em>Lingua Latina</em> chapter by
            chapter: <em>Familia Romana</em> I–XXXV, then <em>Roma Aeterna</em> XXXVI–LVI, with the exercise
            books, companions and readers beside the chapter they belong to — and the authors at the end.
            Your mark follows you from the first page to the last.
          </p>

          <div className="iter__summary">
            <div className="iter__summary-progress">
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={overallPercent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress__fill" style={{ width: `${overallPercent}%` }} />
              </div>
              <p className="iter__summary-line">
                <strong>{doneCount}</strong> of {iterLessonCount} lessons learned
                <span className="iter__summary-pct"> · {overallPercent}%</span>
              </p>
            </div>
            <dl className="iter__summary-stats">
              <div>
                <dt>Stages</dt>
                <dd>{iterStages.length}</dd>
              </div>
              <div>
                <dt>Lessons</dt>
                <dd>{iterLessonCount}</dd>
              </div>
              <div>
                <dt>Books</dt>
                <dd>{new Set(iterStages.flatMap((s) => s.lessons.map((l) => l.bookSlug))).size}</dd>
              </div>
            </dl>
          </div>

          <div className="iter__actions">
            {nextLesson ? (
              <Link className="btn btn--primary" to={nextLesson.lesson.href}>
                Continue · {nextLesson.lesson.bookShort} {nextLesson.lesson.roman} →
              </Link>
            ) : (
              <Link className="btn btn--primary" to="/library">
                You have reached the end — to the library →
              </Link>
            )}
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() =>
                setOpen(allOpen ? new Set() : new Set(iterStages.map((s) => s.id)))
              }
            >
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
        </header>

        <ol className="iter__path">
          {iterStages.map((stage, index) => {
            const learned = stage.lessons.filter(done).length
            const percent = stage.lessonCount
              ? Math.round((learned / stage.lessonCount) * 100)
              : 0
            const isOpen = open.has(stage.id)
            const isCurrent = nextLesson?.stage.id === stage.id

            return (
              <li
                className={`iter-stage${isOpen ? ' is-open' : ''}${isCurrent ? ' is-current' : ''}`}
                key={stage.id}
                id={stage.id}
              >
                <span className="iter-stage__node" aria-hidden="true">
                  {ROMAN[index] || index + 1}
                </span>

                <div className="iter-stage__card">
                  <button
                    type="button"
                    className="iter-stage__head"
                    aria-expanded={isOpen}
                    onClick={() => toggleStage(stage.id)}
                  >
                    <span className="iter-stage__headings">
                      <span className="iter-stage__latin latin">{stage.latin}</span>
                      <span className="iter-stage__title">{stage.title}</span>
                      <span className="iter-stage__blurb">{stage.blurb}</span>
                    </span>
                    <span className="iter-stage__meter">
                      <span className="iter-stage__count">
                        {learned} / {stage.lessonCount}
                        {percent === 100 && <span className="iter-stage__done-tag"> learned</span>}
                      </span>
                      <span className="iter-stage__bar" aria-hidden="true">
                        <span className="iter-stage__bar-fill" style={{ width: `${percent}%` }} />
                      </span>
                      <span className="iter-stage__chevron" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </span>
                  </button>

                  {isOpen && (
                    <ul className="iter-lessons">
                      {stage.lessons.map((lesson, index) => {
                        const isDone = done(lesson)
                        const isNext =
                          nextLesson?.lesson.bookSlug === lesson.bookSlug &&
                          nextLesson?.lesson.number === lesson.number
                        const showHeader =
                          stage.groupByBook &&
                          (index === 0 || stage.lessons[index - 1].bookSlug !== lesson.bookSlug)
                        const sameTitle =
                          lesson.latinTitle &&
                          lesson.title &&
                          lesson.latinTitle.trim().toLowerCase() === lesson.title.trim().toLowerCase()
                        const titleSuffix = lesson.title && !sameTitle ? ` — ${lesson.title}` : ''
                        return (
                          <Fragment key={lessonKey(lesson)}>
                            {showHeader && (
                              <li className="iter-lessons__group" aria-hidden="true">
                                {lesson.bookMark || lesson.bookShort}
                              </li>
                            )}
                            <li
                              className={`iter-lesson${isDone ? ' is-done' : ''}${isNext ? ' is-next' : ''}`}
                            >
                              <button
                                type="button"
                                className="iter-lesson__tick"
                                aria-pressed={isDone}
                                aria-label={isDone ? 'Mark as not learned' : 'Mark as learned'}
                                onClick={() => toggle(lesson)}
                              >
                                {isDone ? '✓' : ''}
                              </button>
                              <Link className="iter-lesson__body" to={lesson.href}>
                                <span className="iter-lesson__book">
                                  {lesson.bookMark || lesson.bookShort}
                                </span>
                                <span className="iter-lesson__numeral">{lesson.roman}</span>
                                <span className="iter-lesson__text">
                                  {lesson.latinTitle && (
                                    <span className="iter-lesson__latin latin">
                                      {lesson.latinTitle}
                                      {titleSuffix}
                                    </span>
                                  )}
                                  {!lesson.latinTitle && lesson.title && (
                                    <span className="iter-lesson__latin">{lesson.title}</span>
                                  )}
                                </span>
                                <span className="iter-lesson__meta">
                                  {lesson.alternative && (
                                    <span className="iter-lesson__alt">Alternative</span>
                                  )}
                                  {lesson.reading && (
                                    <span className="iter-lesson__reading">Reading</span>
                                  )}
                                  <span className="iter-lesson__level" data-level={lesson.level}>
                                    {LEVEL_LABEL[lesson.level] || lesson.level}
                                  </span>
                                  {lesson.focus && (
                                    <span className="iter-lesson__focus">{lesson.focus}</span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          </Fragment>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
