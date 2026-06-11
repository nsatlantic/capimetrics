import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Services',   path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact',    path: '/contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-bg/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 grid grid-cols-3 items-center">

        {/* Logo — left col */}
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0">
            <img src="/logos/logo.svg" alt="Capimetrics" className="h-9 w-auto" />
          </Link>
        </div>

        {/* Nav — center col, truly centered */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300
                ${isActive
                  ? 'text-primary after:w-full'
                  : 'text-body hover:text-heading after:w-0 hover:after:w-full'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA — right col */}
        <div className="flex items-center justify-end">
          <Link
            to="/contact"
            className="hidden md:inline-flex bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full
              hover:bg-primary/85 hover:shadow-md hover:shadow-primary/25
              transition-all duration-200"
          >
            Get in Touch
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-heading rounded transition-all duration-300 origin-center
              ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`block h-0.5 bg-heading rounded transition-all duration-300
              ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block h-0.5 bg-heading rounded transition-all duration-300 origin-center
              ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-bg border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200
                ${isActive ? 'text-primary' : 'text-body hover:text-heading'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full text-center
              hover:bg-primary/85 transition-colors duration-200 mt-2"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
