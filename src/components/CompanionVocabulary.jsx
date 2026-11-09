import { Inline } from './Commentary.jsx'

/* The chapter vocabulary exactly as the Companion prints it: grouped lists
   (Nōmina, Verba, Adiectīva, Numerī, Adverbia, Praepositiōnēs, Coniūnctiōnēs). */
export default function CompanionVocabulary({ words }) {
  if (!words?.length) return null

  const groups = []
  for (const word of words) {
    const name = word.group || 'Vocābula'
    let group = groups.find((g) => g.name === name)
    if (!group) {
      group = { name, words: [] }
      groups.push(group)
    }
    group.words.push(word)
  }

  return (
    <div className="cv">
      {groups.map((group) => (
        <section className="cv__group" key={group.name}>
          <h3 className="cv__group-title latin">
            <Inline text={group.name} />
          </h3>
          <dl className="cv__list">
            {group.words.map((word, i) => (
              <div className="cv__row" key={`${word.latin}-${i}`}>
                <dt className="cv__latin latin">
                  <Inline text={word.latin} />
                </dt>
                <dd className="cv__english">
                  <Inline text={word.english} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  )
}

/* The book's footnotes, gathered at the end of each chapter. */
export function CompanionNotes({ notes }) {
  if (!notes?.length) return null
  return (
    <ol className="cv-notes">
      {notes.map((note, i) => (
        <li className="cv-notes__item" key={i} value={note.n}>
          <span className="cv-notes__num">{note.n}</span>
          <span className="cv-notes__text">
            <Inline text={note.text} />
          </span>
        </li>
      ))}
    </ol>
  )
}
