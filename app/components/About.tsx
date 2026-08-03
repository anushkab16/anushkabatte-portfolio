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
  },
  {
    number: '4+',
    label: 'Projects Built',
    description: 'From agentic AI systems to Android apps with computer vision.',
    rotate: 3,
  },
  {
    number: '3',
    label: 'Years in Tech Communities',
    description: 'ACM and Taqneeq Fest — leading teams, producing content, building things.',
    rotate: -3,
  },
  {
    number: '1',
    label: 'Internship',
    description: 'Data Science at Acuradyne, incubated at SINE IIT Bombay.',
    rotate: 4,
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
    <section id="about" className="relative px-6 pb-[80px] pt-28">
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

      {/* stat cards — flex row on desktop, stacked on mobile & tablet */}
      <div className="mx-auto mt-20 flex max-w-5xl flex-col items-center gap-6 lg:flex-row lg:flex-nowrap lg:justify-center">
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            animate={{ rotate: isDesktop ? stat.rotate : 0 }}
            whileHover={isDesktop ? { rotate: 0, scale: 1.04, y: -6 } : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative z-0 flex w-full max-w-[260px] shrink-0 flex-col justify-center overflow-hidden rounded-2xl border bg-surface p-5 hover:z-10 lg:w-[260px] lg:h-[244px]"
            style={{ borderColor: 'rgba(232,217,193,0.08)' }}
          >
            <div
              className="absolute right-0 top-0 h-0 w-0"
              style={{
                borderStyle: 'solid',
                borderWidth: '0 28px 28px 0',
                borderColor: 'transparent #4b1d3f transparent transparent',
              }}
            />
            <div className="font-display text-[40px] font-black leading-none text-text">
              {stat.number}
            </div>
            <div className="mt-3 text-[15px] font-medium text-text">{stat.label}</div>
            <p className="mt-2 line-clamp-3 text-[13px] font-light leading-relaxed text-muted">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
