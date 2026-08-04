'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#ee6a5f' }} />
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#f5bd4f' }} />
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#61c454' }} />
    </div>
  )
}

function AgenticIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8 3 3 0 0 0 3.2 4.7A3 3 0 0 0 9 20a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8 3 3 0 0 1-3.2 4.7A3 3 0 0 1 15 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="9" rx="2" strokeLinejoin="round" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FlameIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 3s-5 4.5-5 9a5 5 0 0 0 10 0c0-1.5-1-2.5-1.5-3.2C15 10 14 11 14 12a2 2 0 1 1-4 0c0-2 2-3.5 2-5.5C12 5 12 3 12 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="3" width="10" height="18" rx="2" strokeLinejoin="round" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  )
}

export const PROJECTS = [
  {
    id: 'agentic',
    name: 'Agentic AI System',
    meta: 'Python · LangChain · 2026',
    icon: <AgenticIcon />,
    gradient: 'linear-gradient(160deg, #4b1d3f, #1a0f14 70%)',
    description:
      '4-agent LangGraph orchestration (Investigator → Researcher → Analyst → Responder) with RAG over Groq LLM. Hybrid ML classifier achieving 75.1% accuracy on support tickets. Self-updating docs loop that autonomously raises GitHub PRs when knowledge gaps emerge.',
    client: 'Personal Project',
    year: '2026',
    projectType: 'Agentic AI / LLM Engineering',
    tools: 'Python · LangChain · LangGraph · Groq',
    githubUrl: 'https://github.com/anushkab16/B076_CC_AgenticAI',
  },
  {
    id: 'fhe',
    name: 'Adversarial ML on FHE',
    meta: 'Python · TenSEAL · 2026',
    icon: <LockIcon />,
    gradient: 'linear-gradient(160deg, #1e1428, #1a0f14 70%)',
    description:
      'Built a privacy-preserving ML pipeline on CKKS Homomorphic Encryption, then engineered a Gaussian noise-injection defense that reduced attacker accuracy from 81% to 71% — closing the metadata side-channel leakage that most FHE implementations ignore.',
    client: 'Personal Project',
    year: '2026',
    projectType: 'Privacy-Preserving ML / Security',
    tools: 'Python · TenSEAL · PyTorch · scikit-learn',
    githubUrl: 'https://github.com/anushkab16/ML-Against-Homomorphic-Encryption',
  },
  {
    id: 'wildfire',
    name: 'Wildfire Monitor',
    meta: 'Python · scikit-learn · 2026',
    icon: <FlameIcon />,
    gradient: 'linear-gradient(160deg, #142318, #1a0f14 70%)',
    description:
      'Designed the Causal-Temporal Risk Decomposition (CT-RD) framework splitting wildfire risk into 5 interpretable components. 3-model ensemble achieving 0.041 MAE, fed by real-time NASA FIRMS and Google Earth Engine data.',
    client: 'Personal Project',
    year: '2026',
    projectType: 'Causal ML / Time-Series Forecasting',
    tools: 'Python · scikit-learn · D3.js · NASA FIRMS',
    githubUrl: 'https://github.com/anushkab16/wildfire-ctrd',
  },
  {
    id: 'tempus',
    name: 'TEMPUS App',
    meta: 'Java · YOLOv8 · 2025',
    icon: <PhoneIcon />,
    gradient: 'linear-gradient(160deg, #2a2410, #1a0f14 70%)',
    description:
      'End-to-end Android campus app with YOLOv8 lift crowd detection, timetable OCR pipeline using Mistral AI, Figma SVG floor-plan navigation across 5 floors, and a multi-format notes portal. Shipped as a 4-module capstone.',
    client: 'NMIMS University',
    year: '2025',
    projectType: 'Android App / Computer Vision',
    tools: 'Java · YOLOv8 · Mistral AI · FastAPI',
    githubUrl: 'https://github.com/anushkab16/TempusProject',
  },
]

export type Project = (typeof PROJECTS)[number]

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: 'rgba(10,6,8,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-[20px] border"
        style={{ background: '#2a1820', borderColor: 'rgba(232,217,193,0.12)' }}
      >
        <div
          className="sticky top-0 z-10 flex items-center gap-3 rounded-t-[20px] border-b px-4 py-3"
          style={{ background: '#2a1820', borderColor: 'rgba(232,217,193,0.08)' }}
        >
          <button type="button" onClick={onClose} aria-label="Close" className="cursor-pointer">
            <TrafficLights />
          </button>
          <div
            className="flex-1 rounded-md px-3 py-1 text-center text-[11px] text-muted"
            style={{ background: 'rgba(232,217,193,0.06)' }}
          >
            {project.name}
          </div>
        </div>

        <div
          className="mx-4 mt-4 flex h-[140px] items-center justify-center rounded-xl text-text"
          style={{ background: project.gradient }}
        >
          <div className="scale-150">{project.icon}</div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-[26px] font-bold text-text">{project.name}</h3>
          <p className="mt-3 text-[14px] font-light leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <div className="text-[11px] tracking-[0.08em] text-muted">CLIENT</div>
              <div className="mt-1 text-[13px] text-text">{project.client}</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.08em] text-muted">YEAR</div>
              <div className="mt-1 text-[13px] text-text">{project.year}</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.08em] text-muted">PROJECT TYPE</div>
              <div className="mt-1 text-[13px] text-text">{project.projectType}</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.08em] text-muted">TOOL USED</div>
              <div className="mt-1 text-[13px] text-text">{project.tools}</div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-burgundy px-5 py-2.5 text-[13px] font-medium text-text transition-colors hover:bg-rose hover:text-bg"
            >
              View GitHub &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
