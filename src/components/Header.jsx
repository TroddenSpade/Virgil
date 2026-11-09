import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="Virgil — home">
          <Logo size={40} className="brand__mark" />
          <span className="brand__text">
            <span className="brand__name">VIRGIL</span>
            <span className="brand__tag">PVBLIVS·VERGILIVS·MARO</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/library">Library</NavLink>
          <NavLink to="/dictionary">Dictionary</NavLink>
          <NavLink to="/approach" className="hide-sm">
            Approach
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
