'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Mission', href: '#mission' },
  { label: 'Priorities', href: '#priorities' },
  { label: 'Donate', href: '#donate' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Events', href: '#events' },
  { label: 'Vote', href: '#vote' },
]

const LOGO_URL = 'https://imgix.cosmicjs.com/ecab15e0-4278-11f1-a330-fd23be7d3f55-generated-1777322255915.jpg'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: '#0A1628',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="content-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={`${LOGO_URL}?w=80&h=80&fit=crop&auto=format,compress`}
              alt="Hovinga for Mayor"
              width={40}
              height={40}
              className="rounded"
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
              }}
            />
            <span
              className="font-extrabold tracking-widest text-sm md:text-base"
              style={{ color: '#F5A623', letterSpacing: '0.18em' }}
            >
              HOVINGA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) =>
              link.label === 'Donate' ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="cta-btn cta-gold text-sm px-5 py-2"
                  style={{ minHeight: '38px', padding: '8px 20px' }}
                >
                  Donate Now
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150"
                  style={{ color: '#FFFFFF' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F5A623')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-200"
              style={{
                transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-200"
              style={{
                transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 flex flex-col"
          style={{ backgroundColor: '#0A1628', zIndex: 40 }}
        >
          <nav className="flex flex-col px-6 py-8 gap-6">
            {NAV_LINKS.map((link) =>
              link.label === 'Donate' ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="cta-btn cta-gold text-base w-full text-center"
                  onClick={handleNavClick}
                >
                  Donate Now
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-bold text-white border-b border-white/10 pb-4"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}