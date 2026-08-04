'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8D9C1" strokeWidth="1.5">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

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

const FAQS = [
  {
    q: 'What do you actually do?',
    a: "I'm a CS student who does AI/ML research, builds projects, creates content, and is working toward a career in Developer Relations. I exist at the intersection of tech and communication.",
    surface: 'linear-gradient(160deg, #46252f, #3d1f28)',
  },
  {
    q: 'You have research papers?',
    a: 'Yep. Two peer-reviewed ones — one in a Wiley journal on using ML for schizophrenia detection, and one on how AI automation affects the human brain. Published before graduating.',
    surface: 'linear-gradient(160deg, #20392c, #1a3024)',
  },
  {
    q: 'What kind of roles are you looking for?',
    a: 'Developer Relations, technical content, marketing at a tech company. Anything where explaining things well is the job.',
    surface: 'linear-gradient(160deg, #212a4a, #1a2240)',
  },
  {
    q: 'Are you open to opportunities?',
    a: 'Yes. Internships, collabs, research projects, content work, or just an interesting conversation.',
    email: 'anushkabatte.work@gmail.com',
    surface: 'linear-gradient(160deg, #3f3710, #352e0a)',
  },
]

type Faq = (typeof FAQS)[number]

function FaqCard({ faq, isOpen, onToggle }: { faq: Faq; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px'
  }, [isOpen])

  return (
    <div className="overflow-hidden rounded-2xl" style={{ background: faq.surface }}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        style={{ padding: '20px 28px' }}
      >
        <span className="text-[18px] font-medium text-text">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: 'rgba(232,217,193,0.1)' }}
        >
          <PlusIcon />
        </motion.span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.25s ease-in-out' }}
      >
        <p
          className="text-[13px] font-light leading-relaxed text-muted"
          style={{ padding: '0 28px 24px' }}
        >
          {faq.a}
          {faq.email && (
            <>
              {' '}
              Reach me at{' '}
              <a href={`mailto:${faq.email}`} className="text-rose hover:underline">
                {faq.email}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative px-6 pb-24 pt-24">
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
          FAQs
        </div>

        <h2 className="font-display text-[clamp(30px,5vw,72px)] font-black uppercase leading-[1.05] text-text">
          Let&rsquo;s get into it
        </h2>

        <p
          className="mt-6 max-w-[560px] text-[16px] font-light leading-relaxed"
          style={{ color: 'rgba(232,217,193,0.7)' }}
        >
          The stuff people actually want to know before reaching out.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-4">
        {FAQS.map((faq, i) => (
          <FaqCard
            key={faq.q}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
