import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          <strong style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>VIRGIL</strong> — a Latin
          reading project. Text and exercises after H. H. Ørberg, <em>Lingua Latina per se Illustrata</em>.
        </p>
        <p>
          <Link to="/library">Library</Link> · <Link to="/dictionary">Dictionary</Link> ·{' '}
          <Link to="/approach">Approach</Link>
        </p>
      </div>
    </footer>
  )
}
