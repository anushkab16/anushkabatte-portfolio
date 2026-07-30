'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/#work', label: 'work' },
  { href: '/writing', label: 'writing' },
  { href: '/#research', label: 'research' },
  { href: '/#about', label: 'about' },
]

/**
 * Sticky site navigation. No logo — right-aligned links only,
 * collapsing into a full-screen overlay menu on mobile.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm"
        style={{ borderBottom: '0.5px solid rgba(232,217,193,0.08)' }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-end px-4 py-4 md:px-8">
          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[14px] tracking-[0.08em] text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block h-0.5 w-6 bg-text transition-transform ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-text transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-text transition-transform ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-bg md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl tracking-[0.04em] text-text"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
