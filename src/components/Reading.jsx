import { useState } from 'react'

export default function Reading({ readings }) {
  const [showNotes, setShowNotes] = useState(true)

  if (!readings?.length) return null

  const hasNotes = readings.some((r) => r.notes?.length)

  return (
    <div className="readings">
      {hasNotes && (
        <div className="readings__bar">
          <button type="button" className="btn btn--ghost btn--sm" onClick={() => setShowNotes((v) => !v)}>
            {showNotes ? 'Hide marginal notes' : 'Show marginal notes'}
          </button>
        </div>
      )}

      {readings.map((reading, index) => (
        <section key={reading.id || index} className="reading rise" id={reading.id}>
          <header className="reading__head">
            <h3 className="reading__title latin">{reading.latinTitle || reading.title}</h3>
            {reading.latinTitle && reading.title && <p className="reading__subtitle">{reading.title}</p>}
          </header>

          <div className={`reading__grid ${showNotes && reading.notes?.length ? 'has-notes' : ''}`}>
            <div className="reading__text latin">
              {reading.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {showNotes && reading.notes?.length > 0 && (
              <aside className="reading__notes" aria-label="Notes">
                <p className="reading__notes-title">Marginalia</p>
                <ul>
                  {reading.notes.map((note, i) => (
                    <li key={i}>
                      <span className="reading__note-term latin">{note.term}</span>
                      <span className="reading__note-gloss latin">{note.gloss}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
