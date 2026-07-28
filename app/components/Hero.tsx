const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/anushkab16' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anushkabatte/' },
  { label: 'Email', href: 'mailto:anushkabatte.work@gmail.com' },
]

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Above-the-fold hero: eyebrow, name, tagline, badges, socials, and a
 * polaroid-style photo placeholder.
 */
export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:px-10 md:pb-32 md:pt-24">
      <div className="animate-fade-in-up">
        <p className="font-display text-xl font-light italic tracking-wide text-burgundy">
          hi, i&apos;m
        </p>
        <h1 className="mt-1 font-display text-6xl font-bold italic leading-[1.05] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-9xl">
          Anushka Batte.
        </h1>
        <p className="mt-6 text-lg text-text">
          AI/ML researcher. Future Developer Advocate.
        </p>
        <p className="mt-3 max-w-md text-base text-muted">
          I play around with tech, content, design, and everything in
          between.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg px-4 py-1.5 text-sm text-text">
            <span className="h-2 w-2 animate-pulse rounded-full bg-burgundy" />
            available for DevRel roles
          </span>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="flex items-center gap-2 transition-colors hover:text-burgundy"
              >
                <ArrowIcon />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-fade-in-up flex w-full max-w-sm -rotate-2 flex-col rounded-sm border-[10px] border-white bg-white shadow-md justify-self-center md:justify-self-end">
        <div className="flex aspect-[4/5] w-full items-center justify-center bg-surface">
          <span className="text-sm text-muted">[ photo coming soon ]</span>
        </div>
        <div className="bg-rose px-3 py-2 text-center text-sm text-text">
          Anushka Batte
        </div>
      </div>
    </section>
  )
}
