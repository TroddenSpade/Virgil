import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const LEVEL_LABEL = {
  beginner: 'Beginner',
  elementary: 'Elementary',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

/* Vertical rhythm of the road, in pixels. */
const NODE_GAP = 32
const WAY_GAP = 34
const TOP_PAD = 36
const BOTTOM_PAD = 76
const TICK = 30 // lead from the road to a label
const RAIL_WINDOW = 11 // lessons shown in the right-hand index

const lessonKey = (lesson) => `${lesson.bookSlug}/${lesson.slug}`

const trunc = (text, max) => {
  const s = String(text || '').replace(/\s+/g, ' ').trim()
  if (!s || s.length <= max) return s
  const cut = s.slice(0, max - 1)
  const trim = cut.lastIndexOf(' ')
  return (trim > max * 0.6 ? cut.slice(0, trim) : cut).trimEnd() + '…'
}

function useWidth(ref) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const measure = () => setWidth(el.clientWidth || 0)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
  return width
}

/* The geometry of the road: a meander that sways with one period while its
   depth slowly breathes with another, so the line never quite repeats. */
function buildLayout(stages, width) {
  const cx = width / 2
  const narrow = width < 640
  const amp = narrow
    ? Math.max(34, Math.min(0.14 * width, 100))
    : Math.max(46, Math.min(0.2 * width, 240))
  const sideSpace = width / 2 - amp - TICK - 8
  const titleChars = Math.max(9, Math.min(46, Math.floor(sideSpace / 7)))
  const roadX = (y) => cx + amp * Math.sin(y / 64) * Math.sin(y / 480 + 0.9)

  const items = []
  let y = TOP_PAD
  let side = 1
  const nextSide = () => (side = -side)

  stages.forEach((stage, si) => {
    const gateGap = narrow ? 80 : 62
    const gateY = y + (narrow ? 44 : 31)
    y += gateGap
    items.push({
      type: 'gate',
      stage,
      si,
      y: gateY,
      x: roadX(gateY),
      side: si % 2 ? -1 : 1,
      centered: narrow,
      half: narrow ? 18 : 22,
    })

    const lessons = stage.lessons
    let i = 0
    while (i < lessons.length) {
      let j = i
      while (j + 1 < lessons.length && lessons[j + 1].bookSlug === lessons[i].bookSlug) j += 1
      const first = lessons[i]
      if (j - i + 1 >= 3) {
        const wayY = y + 15
        y += WAY_GAP
        items.push({
          type: 'way',
          y: wayY,
          x: roadX(wayY),
          label: first.bookMark || first.bookShort,
          side: nextSide(),
        })
      }
      for (let k = i; k <= j; k += 1) {
        const lessonY = y + NODE_GAP / 2
        y += NODE_GAP
        items.push({ type: 'lesson', lesson: lessons[k], y: lessonY, x: roadX(lessonY), side: nextSide() })
      }
      i = j + 1
    }
  })

  const endY = y + 26
  items.push({ type: 'way', terminal: true, y: endY, x: roadX(endY), label: 'Finis', side: nextSide() })
  const height = endY + 50

  const points = []
  for (let yy = 16; yy <= height - 16; yy += 7) points.push([roadX(yy), yy])
  const d = points.map(([px, py], idx) => `${idx === 0 ? 'M' : 'L'}${px.toFixed(1)} ${py}`).join('')

  return { items, height, d, titleChars }
}

/* The whole itinerary as one winding road: stage milestones, waystations for
   each work, and a stop for every lesson. Clicking a stop opens the chapter;
   clicking its dot marks it learned. The road is flanked by two indexes —
   the stages on the left, the lessons on the right — which follow the scroll
   and bold the point the reader is actually looking at. */
export default function IterMap({ stages, isDone, nextLesson, onToggle }) {
  const centerRef = useRef(null)
  const svgRef = useRef(null)
  const width = useWidth(centerRef)
  const navigate = useNavigate()
  const location = useLocation()
  // The hover card: which stop, and which side of it to open on.
  const [tip, setTip] = useState(null)
  // Which milestone and which lesson sit under the reading line.
  const [active, setActive] = useState({ gate: null, lesson: null })
  const layout = useMemo(
    () => (width > 260 ? buildLayout(stages, width) : null),
    [stages, width],
  )
  const flatLessons = useMemo(
    () => (layout ? layout.items.filter((item) => item.type === 'lesson') : []),
    [layout],
  )

  // A stage hash (#casus …) scrolls to that stage's milestone on the road.
  useEffect(() => {
    if (!layout) return
    const id = location.hash.replace('#', '')
    if (!id) return
    const gate = layout.items.find((item) => item.type === 'gate' && item.stage.id === id)
    if (!gate || !svgRef.current) return
    const top = svgRef.current.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + gate.y - 160, behavior: 'auto' })
  }, [layout, location.hash])

  /* Follow the scroll: the reading line sits a little above the middle of the
     viewport. The last milestone above it is the stage in view; the lesson
     whose stop is nearest to it is the lesson in view. */
  useEffect(() => {
    if (!layout) return undefined
    let frame = 0
    const update = () => {
      frame = 0
      const svg = svgRef.current
      if (!svg) return
      const local = window.innerHeight * 0.42 - svg.getBoundingClientRect().top
      let gateId = null
      let lessonId = null
      let nearest = Infinity
      for (const item of layout.items) {
        if (item.type === 'gate' && item.y <= local) gateId = item.stage.id
        if (item.type === 'lesson') {
          const distance = Math.abs(item.y - local)
          if (distance < nearest) {
            nearest = distance
            lessonId = lessonKey(item.lesson)
          }
        }
      }
      if (!gateId) {
        const firstGate = layout.items.find((item) => item.type === 'gate')
        gateId = firstGate ? firstGate.stage.id : null
      }
      setActive((prev) =>
        prev.gate === gateId && prev.lesson === lessonId ? prev : { gate: gateId, lesson: lessonId },
      )
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [layout])

  const scrollToY = (y) => {
    const svg = svgRef.current
    if (!svg) return
    const top = svg.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + y - 160, behavior: 'smooth' })
  }

  const jumpToGate = (id) => {
    const gate = layout?.items.find((item) => item.type === 'gate' && item.stage.id === id)
    if (gate) scrollToY(gate.y)
  }

  const jumpToLesson = (key) => {
    const item = layout?.items.find((item) => item.type === 'lesson' && lessonKey(item.lesson) === key)
    if (item) scrollToY(item.y)
  }

  const nextKey = nextLesson ? lessonKey(nextLesson) : null

  /* Show the hover card for a stop, opening above it when there is room
     between the sticky header and the stop, otherwise below — whichever
     side of the road actually has space in the viewport right now. */
  const showTip = (item, lesson) => () => {
    const svg = svgRef.current
    if (!svg) return
    const box = svg.getBoundingClientRect()
    const anchorTop = box.top + item.y - 8
    const anchorBottom = box.top + item.y + 8
    const roomAbove = anchorTop - 76 // sticky header + air
    const roomBelow = window.innerHeight - anchorBottom
    const est = lesson.focus ? 205 : 185 // card + stem, estimated
    const place =
      roomAbove >= est
        ? 'above'
        : roomBelow >= est
          ? 'below'
          : roomAbove >= roomBelow
            ? 'above'
            : 'below'
    setTip({ item, lesson, place })
  }
  const hideTip = () => setTip(null)

  return (
    <div className="iter-map">
      <div className="iter-map__legend" aria-hidden="true">
        <span><i className="dot dot--done" /> learned</span>
        <span><i className="dot" /> to read</span>
        <span><i className="dot dot--next" /> you are here</span>
        <span><i className="dot dot--reading" /> reading</span>
      </div>

      <div className="iter-map__frame">
        <StageRail
          stages={stages}
          activeGate={active.gate}
          isDone={isDone}
          onJump={jumpToGate}
        />

        <div className="iter-map__center" ref={centerRef}>
          {layout && (
            <svg
              ref={svgRef}
              className="iter-map__svg"
              width={width}
              height={layout.height}
              viewBox={`0 0 ${width} ${layout.height}`}
              role="group"
              aria-label="The whole itinerary as a winding road, from the first lesson to the last"
            >
              <path className="iter-map__road" d={layout.d} />
              <path className="iter-map__road-dash" d={layout.d} />

              {layout.items.map((item, index) => {
                if (item.type === 'gate') {
                  const { stage, si } = item
                  const anchor = item.side < 0 ? 'end' : 'start'
                  const learned = stage.lessons.filter(isDone).length
                  return (
                    <g
                      className="iter-map__gate"
                      key={`gate-${stage.id}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`${stage.latin} — ${stage.title}, milestone ${si + 1} of ${stages.length}`}
                      onClick={() => navigate(`/iter#${stage.id}`)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          navigate(`/iter#${stage.id}`)
                        }
                      }}
                    >
                      <rect
                        className="iter-map__gate-plaque"
                        x={item.x - item.half}
                        y={item.y - item.half}
                        width={item.half * 2}
                        height={item.half * 2}
                        rx={5}
                      />
                      <text className="iter-map__gate-num" x={item.x} y={item.y + 5} textAnchor="middle">
                        {ROMAN[si] || si + 1}
                      </text>
                      {item.centered ? (
                        <>
                          <text className="iter-map__gate-latin" x={item.x} y={item.y - 36} textAnchor="middle">
                            {stage.latin}
                          </text>
                          <text className="iter-map__gate-sub" x={item.x} y={item.y - 22} textAnchor="middle">
                            {trunc(`${stage.range} · ${learned}/${stage.lessonCount}`, 34)}
                          </text>
                        </>
                      ) : (
                        <>
                          <text
                            className="iter-map__gate-latin"
                            x={item.x + item.side * 46}
                            y={item.y - 5}
                            textAnchor={anchor}
                          >
                            {stage.latin}
                          </text>
                          <text
                            className="iter-map__gate-sub"
                            x={item.x + item.side * 46}
                            y={item.y + 12}
                            textAnchor={anchor}
                          >
                            {trunc(`${stage.range} · ${learned}/${stage.lessonCount}`, 34)}
                          </text>
                        </>
                      )}
                    </g>
                  )
                }

                if (item.type === 'way') {
                  return (
                    <g
                      className={`iter-map__way${item.terminal ? ' is-terminal' : ''}`}
                      key={`way-${index}`}
                      aria-hidden="true"
                    >
                      <path
                        className="iter-map__way-diamond"
                        d={`M ${item.x - 6} ${item.y} L ${item.x} ${item.y - 6} L ${item.x + 6} ${item.y} L ${item.x} ${item.y + 6} Z`}
                      />
                      <text
                        className="iter-map__way-label"
                        x={item.x + item.side * 17}
                        y={item.y + 3.5}
                        textAnchor={item.side < 0 ? 'end' : 'start'}
                      >
                        {item.label}
                      </text>
                    </g>
                  )
                }

                const { lesson } = item
                const key = lessonKey(lesson)
                const done = isDone(lesson)
                const isNext = nextKey === key
                const anchor = item.side < 0 ? 'end' : 'start'
                const labelX = item.x + item.side * TICK
                const rawLatin = lesson.latinTitle || ''
                const caput = /^cap(ut|vt|itvl|itul)/i.test(rawLatin)
                const main = caput || !rawLatin ? lesson.title || rawLatin : rawLatin
                const full = [lesson.bookMark || lesson.bookShort, lesson.roman, rawLatin, lesson.title]
                  .filter(Boolean)
                  .join(' · ')
                const stopClass = `iter-map__stop${done ? ' is-done' : ''}${isNext ? ' is-next' : ''}${
                  lesson.alternative ? ' is-alt' : ''
                }${lesson.reading ? ' is-reading' : ''}`

                return (
                  <g
                    className={stopClass}
                    key={key}
                    onMouseEnter={showTip(item, lesson)}
                    onMouseLeave={hideTip}
                    onFocus={showTip(item, lesson)}
                    onBlur={hideTip}
                  >
                    <g
                      role="button"
                      tabIndex={-1}
                      aria-label={done ? `Mark ${full} as not learned` : `Mark ${full} as learned`}
                      onClick={(event) => {
                        event.stopPropagation()
                        onToggle(lesson)
                      }}
                    >
                      <rect className="iter-map__hit" x={item.x - 14} y={item.y - 14} width={28} height={28} rx={7} />
                      <rect className="iter-map__dot" x={item.x - 7.5} y={item.y - 7.5} width={15} height={15} rx={4.5} />
                      {isNext && (
                        <rect
                          className="iter-map__pulse"
                          x={item.x - 7.5}
                          y={item.y - 7.5}
                          width={15}
                          height={15}
                          rx={4.5}
                        />
                      )}
                      {done && (
                        <path
                          className="iter-map__check"
                          transform={`translate(${item.x} ${item.y})`}
                          d="M -3.4 0.2 L -1 2.6 L 3.9 -2.6"
                        />
                      )}
                    </g>
                    <line
                      className="iter-map__tick"
                      x1={item.x + item.side * 10}
                      y1={item.y}
                      x2={item.x + item.side * (TICK - 4)}
                      y2={item.y}
                    />
                    <g
                      role="link"
                      tabIndex={0}
                      aria-label={`Open ${full}`}
                      onClick={() => navigate(lesson.href)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          navigate(lesson.href)
                        }
                      }}
                    >
                      <text className="iter-map__mark" x={labelX} y={item.y - 4} textAnchor={anchor}>
                        {`${lesson.bookMark || lesson.bookShort} · ${lesson.roman}`}
                      </text>
                      <text className="iter-map__title" x={labelX} y={item.y + 11} textAnchor={anchor}>
                        {trunc(main, layout.titleChars)}
                      </text>
                    </g>
                  </g>
                )
              })}
            </svg>
          )}

          {/* Hover card for the stop under the pointer, with what the
              chapter's own page shows: work and numeral, Latin title,
              English title, level, focus, and its tags. */}
          {tip && <HoverCard tip={tip} width={width} isDone={isDone} />}
        </div>

        {layout && (
          <LessonRail
            items={flatLessons}
            activeLesson={active.lesson}
            isDone={isDone}
            onJump={jumpToLesson}
          />
        )}
      </div>
    </div>
  )
}

/* The left index: every stage as a milestone in the margin, with its own
   progress rule. The stage in view is inked and its edge marked in oxblood. */
function StageRail({ stages, activeGate, isDone, onJump }) {
  return (
    <nav className="iter-map__rail iter-map__stages" aria-label="Stages of the itinerary">
      <p className="iter-map__rail-title">
        <span>Stages</span>
        <span className="iter-map__rail-count">{ROMAN[stages.length - 1] || stages.length}</span>
      </p>
      <ol className="iter-map__rail-list">
        {stages.map((stage, index) => {
          const learned = stage.lessons.filter(isDone).length
          const percent = stage.lessonCount
            ? Math.round((learned / stage.lessonCount) * 100)
            : 0
          const current = activeGate === stage.id
          return (
            <li key={stage.id}>
              <button
                type="button"
                className={`iter-map__stage${current ? ' is-active' : ''}`}
                aria-current={current ? 'true' : undefined}
                onClick={() => onJump(stage.id)}
              >
                <span className="iter-map__stage-num">{ROMAN[index] || index + 1}</span>
                <span className="iter-map__stage-name latin">{stage.latin}</span>
                <span className="iter-map__stage-meta">
                  {learned} / {stage.lessonCount}
                </span>
                <span className="iter-map__stage-bar" aria-hidden="true">
                  <span style={{ width: `${percent}%` }} />
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* The right index: a moving window of lessons around the one in view, so the
   reader always sees the next few stops without the whole 451-row roll. */
function LessonRail({ items, activeLesson, isDone, onJump }) {
  const total = items.length
  const found = items.findIndex((item) => lessonKey(item.lesson) === activeLesson)
  const current = found >= 0 ? found : 0
  const size = Math.min(RAIL_WINDOW, total)
  const start = Math.max(0, Math.min(current - Math.floor(size / 2), total - size))
  const shown = items.slice(start, start + size)

  return (
    <nav className="iter-map__rail iter-map__lessons" aria-label="Lessons at this point on the road">
      <p className="iter-map__rail-title">
        <span>Lectiō</span>
        <span className="iter-map__rail-count">
          {total ? current + 1 : 0} / {total}
        </span>
      </p>
      <ol className="iter-map__rail-list">
        {shown.map(({ lesson }) => {
          const key = lessonKey(lesson)
          const done = isDone(lesson)
          const isCurrent = key === activeLesson
          return (
            <li key={key}>
              <button
                type="button"
                className={`iter-map__lesson${isCurrent ? ' is-active' : ''}${done ? ' is-done' : ''}`}
                aria-current={isCurrent ? 'true' : undefined}
                onClick={() => onJump(key)}
              >
                <span className="iter-map__lesson-dot" aria-hidden="true" />
                <span className="iter-map__lesson-num">{lesson.roman}</span>
                <span className="iter-map__lesson-title latin">
                  {lesson.latinTitle || lesson.title}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* The card itself: parchment, a stem toward the stop, opening above or
   below depending on the space measured when the hover began. */
function HoverCard({ tip, width, isDone }) {
  const { item, lesson, place } = tip
  const tipW = Math.min(280, Math.max(170, width - 24))
  const left = Math.min(
    Math.max(item.x, tipW / 2 + 8),
    Math.max(tipW / 2 + 8, width - tipW / 2 - 8),
  )
  const done = isDone(lesson)
  const sameTitle =
    lesson.latinTitle &&
    lesson.title &&
    lesson.latinTitle.trim().toLowerCase() === lesson.title.trim().toLowerCase()

  return (
    <div
      className={`iter-map__tip is-${place}${done ? ' is-done' : ''}`}
      style={{ left, top: item.y, width: tipW }}
      aria-hidden="true"
    >
      <p className="iter-map__tip-meta">
        <span className="iter-map__tip-book">
          {lesson.bookMark || lesson.bookShort} · {lesson.roman}
        </span>
        <span className="iter-map__tip-level" data-level={lesson.level}>
          {LEVEL_LABEL[lesson.level] || lesson.level}
        </span>
      </p>
      <p className="iter-map__tip-latin latin">{lesson.latinTitle || lesson.title}</p>
      {!sameTitle && lesson.latinTitle && lesson.title && (
        <p className="iter-map__tip-title">{lesson.title}</p>
      )}
      {lesson.focus && <p className="iter-map__tip-focus">{lesson.focus}</p>}
      {(done || lesson.reading || lesson.alternative) && (
        <p className="iter-map__tip-tags">
          {done && <span className="iter-map__tip-tag is-learned">Learned</span>}
          {lesson.reading && <span className="iter-map__tip-tag">Reading</span>}
          {lesson.alternative && <span className="iter-map__tip-tag is-alt">Alternative</span>}
        </p>
      )}
    </div>
  )
}
