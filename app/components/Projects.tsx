'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS, ProjectModal, TrafficLights, type Project } from './projectsData'

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

function ProjectCardInner({ project }: { project: Project }) {
  return (
    <div
      className="overflow-hidden rounded-xl border"
      style={{
        background: 'rgba(26,15,20,0.75)',
        borderColor: 'rgba(232,217,193,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex items-center justify-between px-3 pt-3">
        <TrafficLights />
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full text-muted"
          style={{ background: 'rgba(232,217,193,0.08)' }}
        >
          <PaperclipIcon />
        </span>
      </div>
      <div
        className="mx-3 mt-3 flex h-[120px] items-center justify-center rounded-lg text-text"
        style={{ background: project.gradient }}
      >
        {project.icon}
      </div>
      <div className="p-4">
        <div className="text-[17px] font-bold text-text">{project.name}</div>
        <div className="mt-1 text-[11px] text-muted">{project.meta}</div>
      </div>
    </div>
  )
}

export function Projects() {
  const isDesktop = useIsDesktop()
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null

  return (
    <section id="projects" className="relative px-6 pb-24 pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div
          className="mb-8 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium text-text"
          style={{
            background: 'rgba(42,24,32,0.94)',
            borderColor: 'rgba(232,217,193,0.16)',
          }}
        >
          <PaperclipIcon />
          Projects
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
          I&rsquo;m working on both.
        </p>
      </div>

      {isDesktop ? (
        <div className="relative z-0 mx-auto mt-20 flex max-w-5xl flex-row flex-nowrap items-start justify-center gap-6">
          {PROJECTS.map((project) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setActiveId(project.id)}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative z-0 w-[260px] shrink-0 cursor-pointer text-left hover:z-10"
            >
              <ProjectCardInner project={project} />
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-16 flex max-w-sm flex-col gap-6">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveId(project.id)}
              className="cursor-pointer text-left"
            >
              <ProjectCardInner project={project} />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
