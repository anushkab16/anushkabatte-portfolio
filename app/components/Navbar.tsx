'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/#work', label: 'work' },
  { href: '/#writing', label: 'writing' },
  { href: '/#research', label: 'research' },
  { href: '/#about', label: 'about' },
]

/**
 * Sticky site navigation. No logo — right-aligned section links only,
 * collapsing into a hamburger menu on mobile.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-end px-6 py-4 md:px-10">
        <ul className="hidden items-center gap-8 text-sm text-text md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-burgundy"
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

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-border bg-bg px-6 pb-4 text-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-text transition-colors hover:text-burgundy"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
