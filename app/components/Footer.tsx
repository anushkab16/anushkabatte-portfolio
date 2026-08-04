'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ContactModal } from './ContactModal'

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M11 16.5V13a2 2 0 0 1 4 0v3.5M11 10v6.5" strokeLinecap="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.5c-2.53.55-3.06-1.22-3.06-1.22-.41-1.05-1.01-1.33-1.01-1.33-.83-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.81 1.38 2.12.99 2.64.76.08-.59.32-.99.58-1.22-2.02-.23-4.15-1.01-4.15-4.5 0-1 .35-1.81.94-2.45-.1-.23-.41-1.16.09-2.42 0 0 .77-.25 2.5.94a8.6 8.6 0 0 1 4.55 0c1.73-1.19 2.5-.94 2.5-.94.5 1.26.19 2.19.09 2.42.59.64.94 1.45.94 2.45 0 3.5-2.13 4.27-4.16 4.5.33.29.62.85.62 1.72v2.55c0 .23.16.51.62.43A9 9 0 0 0 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MediumIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="12" r="4" />
      <ellipse cx="16" cy="12" rx="2.2" ry="4" />
      <ellipse cx="20.5" cy="12" rx="0.8" ry="3.5" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', icon: <InstagramIcon />, href: 'https://instagram.com/nushki.exe' },
  { label: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://linkedin.com/in/anushkabatte' },
  { label: 'GitHub', icon: <GitHubIcon />, href: 'https://github.com/anushkab16' },
  { label: 'Medium', icon: <MediumIcon />, href: 'https://medium.com/@anushkabatte.work' },
]

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <footer id="contact" className="relative overflow-hidden px-6 pb-24 pt-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(40px,7vw,80px)] font-black uppercase leading-[1.02] text-text">
          Let&rsquo;s make
          <br />
          something worth
          <br />
          talking about
        </h2>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-5">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] text-text opacity-80 transition-opacity hover:opacity-100"
            >
              {social.icon}
              {social.label}
            </a>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={() => setContactOpen(true)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="shrink-0 rounded-full bg-burgundy px-7 py-3.5 text-[14px] font-medium text-text transition-colors hover:bg-rose hover:text-bg"
        >
          Let&rsquo;s talk &rarr;
        </motion.button>
      </div>

      <AnimatePresence>
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </footer>
  )
}
