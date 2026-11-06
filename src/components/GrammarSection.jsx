export default function GrammarSection({ entries }) {
  if (!entries?.length) return null

  return (
    <div className="grammar">
      {entries.map((entry) => (
        <section key={entry.id} className="grammar__entry card" id={entry.id}>
          <header className="grammar__head">
            <h3 className="grammar__title latin">{entry.latinTitle || entry.title}</h3>
            {entry.latinTitle && entry.title && <p className="grammar__subtitle">{entry.title}</p>}
          </header>

          {entry.intro && <p className="grammar__intro latin">{entry.intro}</p>}

          {entry.paradigms?.map((p, i) => (
            <figure className="paradigm" key={i}>
              {p.caption && <figcaption className="paradigm__caption latin">{p.caption}</figcaption>}
              <div className="paradigm__scroll">
                <table>
                  <thead>
                    <tr>
                      {p.head.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {p.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className={c === 0 ? 'paradigm__label latin' : 'latin'}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </figure>
          ))}

          {entry.points?.length > 0 && (
            <ul className="grammar__points">
              {entry.points.map((point, i) => (
                <li key={i} className="latin">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
