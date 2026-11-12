import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

/* Vertical rhythm of the road, in pixels. */
const NODE_GAP = 32
const GATE_GAP = 62
const WAY_GAP = 34
const TOP_PAD = 36
const BOTTOM_PAD = 76
const TICK = 30 // lead from the road to a label

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
  const amp = Math.max(38, Math.min(0.16 * width, 132))
  const sideSpace = width / 2 - amp - TICK - 8
  const titleChars = Math.max(9, Math.min(38, Math.floor(sideSpace / 7)))
  const roadX = (y) => cx + amp * Math.sin(y / 88) * Math.sin(y / 610 + 0.9)

  const items = []
  let y = TOP_PAD
  let side = 1
  const nextSide = () => (side = -side)

  stages.forEach((stage, si) => {
    const gateY = y + 30
    y += GATE_GAP
    items.push({ type: 'gate', stage, si, y: gateY, x: roadX(gateY), side: si % 2 ? -1 : 1 })

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
   clicking its dot marks it learned. */
export default function IterMap({ stages, isDone, nextLesson, onToggle }) {
  const wrapRef = useRef(null)
  const width = useWidth(wrapRef)
  const navigate = useNavigate()
  const location = useLocation()
  const layout = useMemo(
    () => (width > 260 ? buildLayout(stages, width) : null),
    [stages, width],
  )

  // A stage hash (#casus …) scrolls to that stage's milestone on the road.
  useEffect(() => {
    if (!layout) return
    const id = location.hash.replace('#', '')
    if (!id) return
    const gate = layout.items.find((item) => item.type === 'gate' && item.stage.id === id)
    if (!gate || !wrapRef.current) return
    const top = wrapRef.current.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + gate.y - 160, behavior: 'auto' })
  }, [layout, location.hash])

  const nextKey = nextLesson ? lessonKey(nextLesson) : null

  return (
    <div className="iter-map" ref={wrapRef}>
      {layout && (
        <>
          <div className="iter-map__legend" aria-hidden="true">
            <span><i className="dot dot--done" /> learned</span>
            <span><i className="dot" /> to read</span>
            <span><i className="dot dot--next" /> you are here</span>
            <span><i className="dot dot--reading" /> reading</span>
          </div>

          <svg
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
                    <circle className="iter-map__gate-disc" cx={item.x} cy={item.y} r={14} />
                    <text className="iter-map__gate-num" x={item.x} y={item.y + 4} textAnchor="middle">
                      {ROMAN[si] || si + 1}
                    </text>
                    <text
                      className="iter-map__gate-latin"
                      x={item.x + item.side * 34}
                      y={item.y - 5}
                      textAnchor={anchor}
                    >
                      {stage.latin}
                    </text>
                    <text
                      className="iter-map__gate-sub"
                      x={item.x + item.side * 34}
                      y={item.y + 11}
                      textAnchor={anchor}
                    >
                      {trunc(`${stage.range} · ${learned}/${stage.lessonCount}`, 34)}
                    </text>
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
                      d={`M ${item.x - 5} ${item.y} L ${item.x} ${item.y - 5} L ${item.x + 5} ${item.y} L ${item.x} ${item.y + 5} Z`}
                    />
                    <text
                      className="iter-map__way-label"
                      x={item.x + item.side * 16}
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
                <g className={stopClass} key={key}>
                  <g
                    role="button"
                    tabIndex={-1}
                    aria-label={done ? `Mark ${full} as not learned` : `Mark ${full} as learned`}
                    onClick={(event) => {
                      event.stopPropagation()
                      onToggle(lesson)
                    }}
                  >
                    <circle className="iter-map__hit" cx={item.x} cy={item.y} r={11} />
                    <circle className="iter-map__dot" cx={item.x} cy={item.y} r={6.5} />
                    {isNext && <circle className="iter-map__pulse" cx={item.x} cy={item.y} r={6.5} />}
                    {done && (
                      <path
                        className="iter-map__check"
                        transform={`translate(${item.x} ${item.y})`}
                        d="M -2.8 0.2 L -0.7 2.1 L 3 -2.1"
                      />
                    )}
                  </g>
                  <line
                    className="iter-map__tick"
                    x1={item.x + item.side * 9}
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
                    <title>{full}</title>
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
        </>
      )}
    </div>
  )
}
