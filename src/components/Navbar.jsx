import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/our-gym', label: 'Our Gym' },
  { to: '/membership', label: 'Membership' },
  { to: '/training', label: 'Training' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-dark-light/95 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="font-heading text-2xl md:text-3xl font-bold text-primary tracking-wider">
              LYNN'S US GYM
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 text-sm font-medium tracking-wide uppercase no-underline transition-colors ${
                  location.pathname === to
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/free-trial"
              className="ml-4 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold uppercase tracking-wider rounded no-underline transition-colors"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white bg-transparent border-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-light border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 text-base font-medium uppercase tracking-wide no-underline ${
                  location.pathname === to
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/free-trial"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-3 py-3 bg-primary hover:bg-primary-dark text-white text-base font-bold uppercase tracking-wider rounded text-center no-underline transition-colors"
            >
              Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
