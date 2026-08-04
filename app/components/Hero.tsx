'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import DotGrid from './DotGrid'
import { PROJECTS, ProjectModal } from './projectsData'
import { ContactModal } from './ContactModal'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function NotesIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16v16H4z" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h8M8 17h4" strokeLinecap="round" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h5l2 2h9v11H4z" strokeLinejoin="round" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 3h4M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16v12H4z" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const DOCK_ITEMS = [
  { id: 'about', label: 'About', icon: <NotesIcon /> },
  { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
  { id: 'research', label: 'Research', icon: <FlaskIcon /> },
  { id: 'contact', label: 'Contact', icon: <MailIcon /> },
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
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) ?? null

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pb-[120px]"
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

      {/* portrait — hidden on mobile, flush against the bottom-left edge from md+, popping out of frame */}
      <div className="absolute bottom-0 left-0 z-10 hidden md:block md:h-[420px] md:w-[336px] lg:h-[520px] lg:w-[416px]">
        <Image
          src="/hero-image-v2.png"
          alt="Anushka Batte"
          fill
          priority
          className="object-contain object-bottom drop-shadow-2xl"
          sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 336px, 416px"
        />
      </div>

      {/* availability card — pinned top-left, width fits content */}
      <div className="absolute left-6 top-8 z-20 w-fit md:left-10">
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

      {/* headline — pinned dead-center, independent of everything else */}
      <div className="absolute left-0 right-0 top-44 bottom-32 z-10 flex items-center justify-start px-6 md:inset-0 md:items-center md:justify-center">
        <div className="relative w-fit max-w-3xl md:mx-auto">
          <h1 className="font-display text-left text-[clamp(32px,8vw,56px)] font-black uppercase leading-[1.05] text-text md:text-center md:text-[clamp(30px,5vw,72px)]">
            Building at the
            <br />
            intersection of AI
            <br />
            and everything else
          </h1>
        </div>
      </div>

      {/* tagline — desktop only */}
      <p
        className="absolute right-6 top-8 z-10 hidden text-right text-[18px] font-bold leading-relaxed md:right-10 md:block"
        style={{ color: 'rgba(232,217,193,0.7)' }}
      >
        CS student.
        <br />
        AI/ML enthusiast.
        <br />
        Content creator.
      </p>

      {/* dock — fixed to the viewport bottom at all breakpoints, stays put on scroll */}
      <div
        className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-5 rounded-full px-6 py-3.5 md:bottom-8"
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
              onClick={() =>
                item.id === 'contact' ? setContactOpen(true) : scrollToSection(item.id)
              }
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
              href={PROJECTS[0].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between text-[10px] tracking-[0.08em] text-muted">
                <span>PYTHON &middot; LANGCHAIN</span>
                <span>2026</span>
              </div>
              <div className="mt-1 text-[18px] font-bold text-text">
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
                {PROJECTS.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveProjectId(project.id)}
                    className="block w-full rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-white/5"
                  >
                    <div className="text-[18px] font-bold text-text">
                      {project.name}
                    </div>
                    <div className="mt-1 text-[12px] text-muted">{project.meta}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
        )}
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}
