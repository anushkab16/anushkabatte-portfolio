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

/** Site footer with contact prompt and social links. */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <h2 className="font-display text-5xl font-bold italic text-text sm:text-6xl">
          let&apos;s talk.
        </h2>
        <p className="mt-4 max-w-md text-base text-text">
          Always open to DevRel conversations, collabs, or a good chat about
          F1.
        </p>
        <a
          href="mailto:anushkabatte.work@gmail.com"
          className="mt-2 inline-block text-base text-burgundy underline underline-offset-2 transition-opacity hover:opacity-80"
        >
          anushkabatte.work@gmail.com
        </a>

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

        <div className="mt-10 flex flex-col gap-1 text-xs text-muted">
          <p>© 2026 Anushka Batte</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
