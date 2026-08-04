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

const SKILLS = [
  {
    label: 'Machine Learning & AI',
    surface: 'linear-gradient(160deg, #46252f, #3d1f28)',
    tools: [
      'Python',
      'PyTorch',
      'scikit-learn',
      'LangChain',
      'LangGraph',
      'RAG',
      'Computer Vision',
    ],
  },
  {
    label: 'Data Science',
    surface: 'linear-gradient(160deg, #212a4a, #1a2240)',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Time-Series', 'FastAPI', 'Jupyter'],
  },
  {
    label: 'Research & Writing',
    surface: 'linear-gradient(160deg, #3f3710, #352e0a)',
    tools: [
      '2 Published Papers',
      'Wiley',
      'Cortexplore',
      'Technical Writing',
      'Literature Review',
    ],
  },
  {
    label: 'Content & Community',
    surface: 'linear-gradient(160deg, #20392c, #1a3024)',
    tools: ['Instagram Reels', 'ACM', 'Taqneeq Fest', 'Social Media', 'Team Leadership'],
  },
  {
    label: 'Building & Shipping',
    surface: 'linear-gradient(160deg, #302044, #281838)',
    tools: ['Next.js', 'Android', 'Firebase', 'Framer', 'Git', 'Vercel', 'REST APIs'],
  },
]

type Skill = (typeof SKILLS)[number]

function SkillRow({
  skill,
  isOpen,
  onToggle,
}: {
  skill: Skill
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px'
  }, [isOpen])

  return (
    <div className="overflow-hidden rounded-xl" style={{ background: skill.surface }}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
        style={{ padding: '20px 28px' }}
      >
        <span className="text-[18px] font-medium text-text">{skill.label}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: 'rgba(232,217,193,0.1)' }}
        >
          <PlusIcon />
        </motion.span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.25s ease-in-out' }}
      >
        <div className="flex flex-wrap gap-2" style={{ padding: '0 28px 24px' }}>
          {skill.tools.map((tool) => (
            <span
              key={tool}
              style={{
                background: 'rgba(232,217,193,0.1)',
                border: '0.5px solid rgba(232,217,193,0.2)',
                borderRadius: '100px',
                padding: '4px 14px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: '#E8D9C1',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="relative px-6 pb-24 pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div
          className="mb-8 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium text-text"
          style={{
            background: 'rgba(42,24,32,0.94)',
            borderColor: 'rgba(232,217,193,0.16)',
          }}
        >
          <PaperclipIcon />
          Skills
        </div>

        <h2 className="font-display text-[clamp(30px,5vw,72px)] font-black uppercase leading-[1.05] text-text">
          Tools of the trade
        </h2>

        <p
          className="mt-6 max-w-[560px] text-[16px] font-light leading-relaxed"
          style={{ color: 'rgba(232,217,193,0.7)' }}
        >
          Picked up along the way.
          <br />
          Still adding more.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-4">
        {SKILLS.map((skill, i) => (
          <SkillRow
            key={skill.label}
            skill={skill}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
