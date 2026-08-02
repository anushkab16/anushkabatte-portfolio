'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import DotGrid from './DotGrid'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function NotesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16v16H4z" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h8M8 17h4" strokeLinecap="round" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h5l2 2h9v11H4z" strokeLinejoin="round" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 3h4M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16v12H4z" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8 3 3 0 0 0 3.2 4.7A3 3 0 0 0 9 20a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8 3 3 0 0 1-3.2 4.7A3 3 0 0 1 15 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v11H8l-4 4z" strokeLinejoin="round" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m4 20 1-4L16 5l3 3L8 19z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SKILL_TAGS = [
  {
    label: 'AI/ML Research',
    icon: <BrainIcon />,
    style: { top: '-16px', left: 'calc(50% + 90px)', rotate: -6 },
  },
  {
    label: 'Tech Comm',
    icon: <ChatIcon />,
    style: { top: '48%', left: 'calc(50% - 420px)', rotate: 4 },
  },
  {
    label: 'Content',
    icon: <PencilIcon />,
    style: { bottom: '-16px', left: 'calc(50% + 60px)', rotate: 3 },
  },
]

const DOCK_ITEMS = [
  { label: 'About', icon: <NotesIcon />, onClick: () => scrollToSection('about') },
  { label: 'Projects', icon: <FolderIcon />, onClick: () => scrollToSection('projects') },
  { label: 'Research', icon: <FlaskIcon />, onClick: () => scrollToSection('research') },
  { label: 'Contact', icon: <MailIcon />, onClick: () => scrollToSection('contact') },
]

const FEATURED_PROJECTS = [
  {
    name: 'Agentic AI System',
    meta: 'Python · LangChain · 2026',
    url: 'https://github.com/anushkab16/B076_CC_AgenticAI',
  },
  {
    name: 'Adversarial ML on FHE',
    meta: 'Python · TenSEAL · 2026',
    url: 'https://github.com/anushkab16/ML-Against-Homomorphic-Encryption',
  },
  {
    name: 'Wildfire Monitor',
    meta: 'Python · scikit-learn · 2026',
    url: 'https://github.com/anushkab16/wildfire-ctrd',
  },
  {
    name: 'TEMPUS App',
    meta: 'Java · YOLOv8 · 2025',
    url: 'https://github.com/anushkab16/TempusProject',
  },
]

/**
 * Full-viewport hero. Every piece (availability card, headline+tags,
 * tagline, dock, featured-project stack) is absolutely positioned
 * against the section so hover-expanding cards never push the
 * centered headline around.
 *
 * hero-bg.jpg doesn't exist in /public yet — using a dark gradient
 * placeholder in its place. Drop a real photo in and swap the
 * background style below.
 */
export function Hero() {
  const [cardOpen, setCardOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(26,15,20,0.55), rgba(26,15,20,0.55)), radial-gradient(circle at 25% 15%, rgba(75,29,63,0.4), transparent 55%), linear-gradient(160deg, #2a1820, #1a0f14 65%)',
      }}
    >
      {/* interactive dot grid background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={26}
          baseColor="#3a2530"
          activeColor="#d8a7b1"
          proximity={120}
          shockRadius={200}
          shockStrength={3}
          resistance={750}
          returnDuration={1.2}
        />
      </div>

      {/* portrait — flush against the bottom-left edge, popping out of frame */}
      <div className="absolute bottom-0 left-0 z-10 h-[240px] w-[192px] sm:h-[320px] sm:w-[256px] md:h-[420px] md:w-[336px] lg:h-[520px] lg:w-[416px]">
        <Image
          src="/hero-image-v2.png"
          alt="Anushka Batte"
          fill
          priority
          className="object-contain object-bottom drop-shadow-2xl"
          sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 336px, 416px"
        />
      </div>

      {/* availability card */}
      <div className="absolute left-6 top-8 z-20 md:left-10">
        <motion.div
          layout
          onHoverStart={() => setCardOpen(true)}
          onHoverEnd={() => setCardOpen(false)}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="cursor-pointer overflow-hidden rounded-2xl border p-3"
          style={{
            background: 'rgba(26,15,20,0.85)',
            borderColor: 'rgba(232,217,193,0.1)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <motion.div layout="position" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-[11px] text-text">
              AB
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-rose" />
                Available for work
              </div>
              <div className="text-[11px] font-semibold tracking-wide text-text">
                ANUSHKA BATTE
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {cardOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[280px]"
              >
                <div className="mt-3 text-[11px] font-medium text-rose">
                  Available for DevRel &amp; Marketing roles
                </div>
                <p className="mt-2 text-[12px] font-light leading-relaxed text-muted">
                  I research AI systems, create content that actually gets
                  watched, and work at the intersection of tech and human
                  psychology.
                </p>
                <div className="mt-3 text-[11px] font-light text-muted">
                  AI/ML Research &middot; DevRel &middot; Content &middot;
                  Digital Marketing
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* headline + floating tags — pinned dead-center, independent of everything else */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="relative mx-auto w-fit max-w-3xl">
          <h1 className="font-display text-center text-[clamp(30px,5vw,72px)] font-black uppercase leading-[1.05] text-text">
            Building at the intersection of AI and everything else
          </h1>

          {SKILL_TAGS.map((tag) => (
            <motion.div
              key={tag.label}
              drag
              dragMomentum={false}
              dragElastic={0.15}
              whileDrag={{ scale: 1.05 }}
              initial={{ rotate: tag.style.rotate }}
              className="absolute z-10 hidden cursor-grab items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12px] font-medium text-text active:cursor-grabbing md:flex"
              style={{
                top: tag.style.top,
                left: tag.style.left,
                bottom: 'bottom' in tag.style ? tag.style.bottom : undefined,
                background: 'rgba(42,24,32,0.94)',
                borderColor: 'rgba(232,217,193,0.16)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {tag.icon}
              {tag.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* tagline */}
      <p
        className="font-display absolute right-6 top-8 z-10 text-right text-[18px] font-bold leading-relaxed md:right-10"
        style={{ color: 'rgba(232,217,193,0.7)' }}
      >
        CS student.
        <br />
        AI/ML enthusiast.
        <br />
        Content creator.
      </p>

      {/* dock */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 rounded-full px-5 py-3"
        style={{
          background: 'rgba(232,217,193,0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(232,217,193,0.12)',
        }}
      >
        {DOCK_ITEMS.map((item) => (
          <div key={item.label} className="group relative">
            <motion.button
              type="button"
              aria-label={item.label}
              onClick={item.onClick}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-text"
            >
              {item.icon}
            </motion.button>
            <span
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] text-text opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background: 'rgba(26,15,20,0.95)',
                border: '1px solid rgba(232,217,193,0.12)',
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* featured project stack */}
      <motion.div
        layout
        onHoverStart={() => setProjectsOpen(true)}
        onHoverEnd={() => setProjectsOpen(false)}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute bottom-8 right-6 z-10 hidden w-[280px] md:right-10 md:block"
      >
        <div
          className="absolute inset-x-2 -top-2 h-full rounded-2xl border"
          style={{ background: 'rgba(26,15,20,0.5)', borderColor: 'rgba(232,217,193,0.06)' }}
        />
        <div
          className="absolute inset-x-1 -top-1 h-full rounded-2xl border"
          style={{ background: 'rgba(26,15,20,0.65)', borderColor: 'rgba(232,217,193,0.08)' }}
        />

        <div
          className="relative overflow-hidden rounded-2xl border p-4"
          style={{
            background: 'rgba(26,15,20,0.85)',
            borderColor: 'rgba(232,217,193,0.1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {!projectsOpen ? (
            <a
              href={FEATURED_PROJECTS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between text-[10px] tracking-[0.08em] text-muted">
                <span>PYTHON &middot; LANGCHAIN</span>
                <span>2026</span>
              </div>
              <div className="font-display mt-1 text-[18px] font-bold text-text">
                Agentic AI System
              </div>
              <div className="mt-2 flex items-center gap-1 text-[12px] text-rose">
                VIEW PROJECT <span aria-hidden>&rarr;</span>
              </div>
            </a>
          ) : (
            <div>
              <div className="mb-3 text-[10px] tracking-[0.08em] text-muted">
                ALL PROJECTS
              </div>
              <div className="flex flex-col gap-3">
                {FEATURED_PROJECTS.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
                  >
                    <div className="font-display text-[18px] font-bold text-text">
                      {project.name}
                    </div>
                    <div className="mt-1 text-[12px] text-muted">{project.meta}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* divider marking the transition into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 h-px"
        style={{ background: 'rgba(232,217,193,0.4)' }}
      />
    </section>
  )
}
