import { useMemo, useState } from 'react'
import { parseBlanks, normalise } from '../lib/text.js'

function FillExercise({ pensum }) {
  const [values, setValues] = useState({})
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)

  // Flatten the pensum into items of {text|blank} nodes.
  const items = useMemo(() => pensum.items.map((text) => parseBlanks(text)), [pensum.items])

  const totalBlankCount = useMemo(
    () => items.reduce((sum, nodes) => sum + nodes.filter((n) => n.type === 'blank' && !n.open).length, 0),
    [items],
  )

  const key = (i, j) => `${i}:${j}`

  const correctCount = useMemo(() => {
    let correct = 0
    items.forEach((nodes, i) => {
      let j = 0
      nodes.forEach((node) => {
        if (node.type !== 'blank') return
        if (!node.open) {
          const given = normalise(values[key(i, j)] || '')
          if (given && node.answers.some((a) => normalise(a) === given)) correct += 1
        }
        j += 1
      })
    })
    return correct
  }, [items, values])

  const showAnswers = () => {
    const filled = {}
    items.forEach((nodes, i) => {
      let j = 0
      nodes.forEach((node) => {
        if (node.type === 'blank') {
          if (!node.open) filled[key(i, j)] = node.answers[0]
          j += 1
        }
      })
    })
    setValues(filled)
    setRevealed(true)
    setChecked(true)
  }

  return (
    <section className="pensum card" id={pensum.id}>
      <header className="pensum__head">
        <h3 className="pensum__title latin">{pensum.latinLabel || pensum.title}</h3>
        {pensum.latinLabel && pensum.title && <p className="pensum__subtitle">{pensum.title}</p>}
        {pensum.instruction && <p className="pensum__instruction">{pensum.instruction}</p>}
      </header>

      <div className="pensum__items latin">
        {items.map((nodes, i) => (
          <p className="pensum__item" key={i}>
            {nodes.map((node, k) => {
              if (node.type === 'text') return <span key={k}>{node.value}</span>
              // count blanks before this node within the item for a stable index
              let j = 0
              for (let n = 0; n < k; n += 1) if (nodes[n].type === 'blank') j += 1
              const fieldKey = key(i, j)
              const value = values[fieldKey] || ''
              const isBlankCorrect =
                value && node.answers.some((a) => normalise(a) === normalise(value))
              const cls = node.open ? 'is-open' : checked ? (isBlankCorrect ? 'is-correct' : 'is-wrong') : ''
              return (
                <input
                  key={k}
                  className={`blank-input ${cls}`}
                  value={value}
                  style={{ width: `${node.open ? 14 : Math.max(node.answers[0]?.length || 3, 3) + 1}ch` }}
                  spellCheck="false"
                  autoComplete="off"
                  onChange={(e) => {
                    setValues((v) => ({ ...v, [fieldKey]: e.target.value }))
                    setChecked(false)
                  }}
                  aria-label={`Blank ${j + 1}`}
                />
              )
            })}
          </p>
        ))}
      </div>

      <div className="pensum__actions">
        <button type="button" className="btn btn--primary btn--sm" onClick={() => setChecked(true)}>
          Check answers
        </button>
        {totalBlankCount > 0 && (
          <button type="button" className="btn btn--ghost btn--sm" onClick={showAnswers}>
            Show answers
          </button>
        )}
        {checked && (
          <span className="pensum__score" role="status">
            {totalBlankCount === 0
              ? 'Practice exercise — write your answers in the fields.'
              : `${revealed ? 'Answers shown · ' : ''}${correctCount} / ${totalBlankCount} correct`}
          </span>
        )}
      </div>
    </section>
  )
}

function QuestionExercise({ pensum }) {
  const [open, setOpen] = useState({})
  return (
    <section className="pensum card" id={pensum.id}>
      <header className="pensum__head">
        <h3 className="pensum__title latin">{pensum.latinLabel || pensum.title}</h3>
        {pensum.latinLabel && pensum.title && <p className="pensum__subtitle">{pensum.title}</p>}
        {pensum.instruction && <p className="pensum__instruction">{pensum.instruction}</p>}
      </header>

      <ol className="pensum__questions">
        {pensum.items.map((item, i) => (
          <li key={i} className="question">
            <p className="question__ask latin">{item.q}</p>
            <textarea
              className="question__input"
              rows={2}
              placeholder="Scribite responsum…"
              aria-label={`Answer to: ${item.q}`}
            />
            <div className="question__foot">
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                aria-expanded={Boolean(open[i])}
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
              >
                {open[i] ? 'Hide answer' : 'Reveal answer'}
              </button>
            </div>
            {open[i] && <p className="question__answer latin">Respondētur: {item.a}</p>}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function Pensum({ pensa }) {
  if (!pensa?.length) return null
  return (
    <div className="pensa">
      {pensa.map((pensum) =>
        pensum.type === 'questions' ? (
          <QuestionExercise key={pensum.id} pensum={pensum} />
        ) : (
          <FillExercise key={pensum.id} pensum={pensum} />
        ),
      )}
    </div>
  )
}
