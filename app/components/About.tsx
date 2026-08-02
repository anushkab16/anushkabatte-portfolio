'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function PaperclipIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M8 12.5 15 5a3 3 0 0 1 4.24 4.24l-8.4 8.4a5 5 0 0 1-7.07-7.07l7.7-7.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const STATS = [
  {
    number: '2',
    label: 'Published Papers',
    description: 'Peer-reviewed ML research in Wiley and Cortexplore journals.',
    rotate: -6,
    y: 10,
  },
  {
    number: '4+',
    label: 'Projects Built',
    description: 'From agentic AI systems to Android apps with computer vision.',
    rotate: 3,
    y: 4,
  },
  {
    number: '3',
    label: 'Years in Tech Communities',
    description: 'ACM and Taqneeq Fest — leading teams, producing content, building things.',
    rotate: -3,
    y: -28,
  },
  {
    number: '1',
    label: 'Internship',
    description: 'Data Science at Acuradyne, incubated at SINE IIT Bombay.',
    rotate: 4,
    y: 10,
  },
]

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(query.matches)
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])

  return isDesktop
}

export function About() {
  const isDesktop = useIsDesktop()

  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* section label tag */}
        <div
          className="mb-8 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium text-text"
          style={{
            background: 'rgba(42,24,32,0.94)',
            borderColor: 'rgba(232,217,193,0.16)',
            transform: 'rotate(-2deg)',
          }}
        >
          <PaperclipIcon />
          About
        </div>

        <h2 className="font-display text-[clamp(30px,5vw,72px)] font-black uppercase leading-[1.05] text-text">
          Tech that makes
          <br />
          people give a damn
        </h2>

        <p
          className="mt-6 max-w-[560px] text-[16px] font-light leading-relaxed"
          style={{ color: 'rgba(232,217,193,0.7)' }}
        >
          Most people can build it. Few can explain it.
          <br />
          I&rsquo;m working on being both.
        </p>

        <a
          href="https://anushkabatte-portfolio.vercel.app/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full bg-burgundy px-6 py-3 text-[14px] font-medium text-text transition-colors hover:bg-rose hover:text-bg"
        >
          View CV &rarr;
        </a>
      </div>

      {/* fanned, overlapping stat cards (desktop) / clean stack (mobile & tablet) */}
      <div className="mx-auto mt-24 flex max-w-5xl flex-col items-center gap-6 lg:flex-row lg:flex-nowrap lg:justify-center lg:gap-0">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            animate={{
              rotate: isDesktop ? stat.rotate : 0,
              y: isDesktop ? stat.y : 0,
            }}
            whileHover={isDesktop ? { rotate: 0, y: stat.y - 10 } : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`relative z-0 w-full max-w-[300px] shrink-0 overflow-hidden rounded-2xl border bg-surface p-7 hover:z-20 lg:w-80 ${
              i > 0 && isDesktop ? '-ml-12' : ''
            }`}
            style={{ borderColor: 'rgba(232,217,193,0.08)' }}
          >
            <div
              className="absolute right-0 top-0 h-0 w-0"
              style={{
                borderStyle: 'solid',
                borderWidth: '0 32px 32px 0',
                borderColor: 'transparent #4b1d3f transparent transparent',
              }}
            />
            <div className="font-display text-[48px] font-black leading-none text-text">
              {stat.number}
            </div>
            <div className="mt-3 text-[15px] font-medium text-text">{stat.label}</div>
            <p className="mt-2 text-[14px] font-light leading-relaxed text-muted">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
