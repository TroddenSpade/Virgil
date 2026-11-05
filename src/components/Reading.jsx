import { useState } from 'react'

export default function Reading({ readings }) {
  const [showNotes, setShowNotes] = useState(true)

  if (!readings?.length) return null

  return (
    <div className="readings">
      <div className="readings__bar">
        <span className="muted" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
          Lectio
        </span>
        <button type="button" className="btn btn--ghost btn--sm" onClick={() => setShowNotes((v) => !v)}>
          {showNotes ? 'Hide notes' : 'Show notes'}
        </button>
      </div>

      {readings.map((reading, index) => (
        <section key={reading.id || index} className="reading card rise" id={reading.id}>
          <header className="reading__head">
            {reading.latinTitle && <p className="reading__latin-title">{reading.latinTitle}</p>}
            <h3 className="reading__title">{reading.title}</h3>
          </header>

          <div className={`reading__grid ${showNotes && reading.notes?.length ? 'has-notes' : ''}`}>
            <div className="reading__text latin">
              {reading.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {showNotes && reading.notes?.length > 0 && (
              <aside className="reading__notes" aria-label="Notes">
                <p className="reading__notes-title">Notes</p>
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
