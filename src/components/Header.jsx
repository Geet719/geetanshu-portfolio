import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../data/portfolioData'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumePath}
              download
              className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-all hover:border-emerald-400 hover:bg-emerald-500/20"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-md md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumePath}
                download
                onClick={handleNavClick}
                className="mt-2 block rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2.5 text-center text-sm font-medium text-emerald-400"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
