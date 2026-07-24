import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/members', label: 'Members', end: false },
  { to: '/merch', label: 'Merch', end: false },
  { to: '/news', label: 'News', end: false },
]

export function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={isHome ? 'nav nav-home' : 'nav nav-solid'}>
      <NavLink to="/" className="nav-brand" end>
        <img
          className="nav-logo"
          src={isHome ? '/images/logo-mark.png' : '/images/logo.png'}
          alt=""
          width={40}
          height={40}
        />
        <span className="nav-brand-text">
          <span className="nav-brand-name">Pink Dragons</span>
          <span className="nav-brand-place">Philippines</span>
        </span>
      </NavLink>
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'nav-link is-active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
