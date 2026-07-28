import { FadeIn } from './FadeIn'

type Paper = {
  title: string
  journal: string
  summary: string
  href: string
}

const PAPERS: Paper[] = [
  {
    title: 'AI/ML Approaches for Schizophrenia Detection',
    journal: 'International Journal (AI/ML)',
    summary:
      'Using machine learning to identify schizophrenia biomarkers from clinical data.',
    href: '#',
  },
  {
    title: 'Human-AI Automation and Neuroplasticity',
    journal: 'International Journal (Cognitive Science / AI)',
    summary:
      'Investigating how increasing AI automation affects human brain adaptability and cognitive patterns.',
    href: '#',
  },
]

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-6">
      <h3 className="font-display text-2xl font-semibold text-text">
        {paper.title}
      </h3>
      <p className="mt-2 text-xs uppercase tracking-wide text-muted">
        {paper.journal}
      </p>
      <p className="mt-3 text-sm text-text">{paper.summary}</p>
      <a
        href={paper.href}
        className="mt-5 text-sm text-burgundy underline underline-offset-2 transition-opacity hover:opacity-80"
      >
        View Paper →
      </a>
    </div>
  )
}

/** Grid of research publication cards. */
export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <FadeIn>
        <h2 className="font-display text-4xl font-semibold text-text sm:text-5xl">
          research.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PAPERS.map((paper) => (
            <PaperCard key={paper.title} paper={paper} />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
