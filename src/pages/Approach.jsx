import { Link } from 'react-router-dom'

export default function Approach() {
  return (
    <section className="section">
      <div className="container-narrow prose">
        <p className="eyebrow">Ratio docendi</p>
        <h1>The Approach</h1>
        <p className="lead">
          Virgil teaches Latin the way Ørberg’s <em>Lingua Latina</em> does: by reading, in Latin, from the very first
          sentence.
        </p>

        <h2>Why start with <em>Familia Romana</em>?</h2>
        <p>
          Most courses begin with a grammar table and a list of words to memorise. Ørberg does the opposite. A new word
          is never thrown at you alone — it arrives inside a sentence whose meaning is already clear from the words you
          know, from a picture, or from a note in the margin. Latin explains Latin.
        </p>
        <p>
          That is why this site keeps the two inseparable: every chapter pairs the reading with its{' '}
          <em>Grammatica Latina</em> and its <em>Pensa</em>. You meet a form in context, then see it named, then use
          it.
        </p>

        <h2>How each chapter is built</h2>
        <ul className="approach-list">
          <li>
            <strong>Lectio</strong> — the reading, with marginal notes that gloss the new words and forms.
          </li>
          <li>
            <strong>Grammatica Latina</strong> — the grammar the reading has just shown you, with the paradigms.
          </li>
          <li>
            <strong>Vocabula</strong> — the chapter’s new words, with a flashcard trainer.
          </li>
          <li>
            <strong>Pensa A · B · C</strong> — the original exercises, with instant checking and model answers.
          </li>
        </ul>

        <h2>From the basics to Virgil</h2>
        <p>
          <em>Familia Romana</em> takes you through all the essential grammar and a working vocabulary. Its sequel,
          <em>Roma Aeterna</em>, then reads the Roman story itself — Aeneas, the kings, the Republic — in the words of
          Vergil, Livy, Cicero and Sallust. From there the project will add the companion volume, other reading courses,
          and finally the works of Virgil themselves — the <em>Aeneid</em>, the <em>Eclogues</em> and the
          <em>Georgics</em> — so that the poetry of Rome can be read as literature, not decoded as a puzzle.
        </p>

        <div className="divider-deco" aria-hidden="true">
          <span className="latin">Arma virumque cano…</span>
        </div>

        <p>
          <Link className="btn btn--primary" to="/library/familia-romana/imperium-romanum">
            Begin Capitulum I →
          </Link>
        </p>
      </div>
    </section>
  )
}
