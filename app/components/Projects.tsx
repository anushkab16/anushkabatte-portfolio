import { FadeIn } from './FadeIn'

type Project = {
  name: string
  description: string
  tags: string[]
  href?: string
  comingSoon?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'Agentic AI for Headless E-commerce',
    description:
      'Autonomous AI agent that handles product discovery, cart management, and checkout without a traditional frontend.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Headless APIs'],
    href: 'https://github.com/anushkab16',
  },
  {
    name: 'Wildfire Risk Detection Pipeline',
    description:
      'ML pipeline ingesting satellite and weather data to predict wildfire risk scores across geographic regions.',
    tags: ['Python', 'scikit-learn', 'GeoData', 'Random Forest'],
    href: 'https://github.com/anushkab16',
  },
  {
    name: 'Smart Campus Management App',
    description:
      'Android app for managing campus resources, room bookings, and student services.',
    tags: ['Android', 'Java', 'Firebase', 'Google Maps API'],
    href: 'https://github.com/anushkab16',
  },
  {
    name: 'F1 Race Strategy Predictor',
    description:
      'Predicting optimal pit stop and tyre strategies using historical race data.',
    tags: ['Python', 'Pandas', 'ML'],
    comingSoon: true,
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-6">
      <h3 className="font-display text-2xl font-semibold text-text">
        {project.name}
      </h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-burgundy/60 px-3 py-1 text-xs text-burgundy"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5">
        {project.comingSoon ? (
          <span className="inline-block rounded-full bg-rose px-3 py-1 text-xs text-text">
            coming soon
          </span>
        ) : (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-burgundy underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

/** Grid of project cards. */
export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <FadeIn>
        <h2 className="font-display text-4xl font-semibold text-text sm:text-5xl">
          work.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
