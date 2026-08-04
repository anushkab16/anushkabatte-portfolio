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

const PAPERS = [
  {
    source: 'WIREs Data Mining & Knowledge Discovery · Wiley · 2025',
    title: 'Exploring Machine Learning Models for Schizophrenia Detection: A Systematic Review',
    body: 'Systematic review of ML approaches for identifying schizophrenia biomarkers from clinical data.',
    href: 'https://doi.org/10.1002/widm.70048',
  },
  {
    source: 'Journal of Cortexplore · Vol. 1 No. 2 · 2026',
    title:
      'Impact of Automation on Neuroplasticity: A Systematic Literature Review and Conceptual Framework of Cognitive Adaptation in Human–AI Interaction',
    body: "Conceptual framework for cognitive adaptation in human-AI interaction and automation's effect on neuroplasticity.",
    href: 'https://cortexplore.org/index.php/jce/article/view/11',
  },
]

const DOTS = [
  { top: '8%', left: '6%' },
  { top: '18%', left: '92%' },
  { top: '70%', left: '4%' },
  { top: '82%', left: '90%' },
  { top: '45%', left: '50%' },
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

export function Research() {
  const isDesktop = useIsDesktop()

  return (
    <section id="research" className="relative overflow-hidden px-6 pb-24 pt-24">
      {DOTS.map((dot, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full"
          style={{ top: dot.top, left: dot.left, background: 'rgba(232,217,193,0.06)' }}
        />
      ))}

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div
          className="mb-8 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium text-text"
          style={{
            background: 'rgba(42,24,32,0.94)',
            borderColor: 'rgba(232,217,193,0.16)',
            transform: 'rotate(-2deg)',
          }}
        >
          <PaperclipIcon />
          Research
        </div>

        <h2 className="font-display text-[clamp(30px,5vw,72px)] font-black uppercase leading-[1.05] text-text">
          Ideas that
          <br />
          got published
        </h2>

        <p
          className="mt-6 max-w-[560px] text-[16px] font-light leading-relaxed"
          style={{ color: 'rgba(232,217,193,0.7)' }}
        >
          Two peer-reviewed papers. AI, brains, and what happens when they meet.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center">
        {PAPERS.map((paper) => (
          <motion.div
            key={paper.href}
            whileHover={isDesktop ? { scale: 1.03, y: -6 } : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative z-0 flex w-full max-w-[440px] shrink-0 flex-col overflow-hidden rounded-2xl border bg-surface p-6 pb-20 hover:z-10 lg:w-[440px]"
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

            <div className="flex items-center justify-between">
              <span className="text-[28px] leading-none">📄</span>
              <span
                className="text-[11px] font-medium text-text"
                style={{
                  background: 'rgba(232,217,193,0.1)',
                  border: '0.5px solid rgba(232,217,193,0.2)',
                  borderRadius: '100px',
                  padding: '4px 12px',
                }}
              >
                ⭐ Peer Reviewed
              </span>
            </div>

            <div className="mt-5 text-[11px] uppercase tracking-[0.08em] text-muted">
              {paper.source}
            </div>

            <h3
              title={paper.title}
              className="mt-2 line-clamp-3 text-[14px] font-semibold leading-snug text-text"
            >
              {paper.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-[13px] font-light leading-relaxed text-muted">
              {paper.body}
            </p>

            <a
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 inline-block rounded-full bg-burgundy px-5 py-2.5 text-[13px] font-medium text-text transition-colors hover:bg-rose hover:text-bg"
            >
              Read Paper &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
