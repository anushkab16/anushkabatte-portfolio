import Image from 'next/image'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/anushkab16' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anushkabatte/' },
  { label: 'Instagram', href: 'https://www.instagram.com/nushki.exe/' },
  { label: 'Medium', href: 'https://medium.com/@anushkabatte.work' },
  { label: 'Email', href: 'mailto:anushkabatte.work@gmail.com' },
]

const hairline = { borderBottom: '0.5px solid rgba(232,217,193,0.35)' }

/**
 * Above-the-fold hero: eyebrow, name, taglines, status pill, socials,
 * and a polaroid photo.
 */
export function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-10 md:px-8 md:py-16">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="animate-fade-in-up">
          <p className="font-display text-[22px] italic font-bold text-text">
            hi, i&apos;m
          </p>
          <h1
            className="font-display mt-7 text-[clamp(84px,13vw,150px)] font-black text-text"
            style={{ lineHeight: 0.58 }}
          >
            Anushka
            <br />
            Batte
            <span className="text-[1.5em] text-rose">.</span>
          </h1>

          <div
            className="my-4 h-0 w-[72px]"
            style={{ borderTop: '0.5px solid #4B1D3F' }}
          />

          <p className="text-[16px] font-medium text-text">
            CS Student. AI/ML researcher. Future Developer Advocate.
          </p>
          <p className="mt-1 max-w-lg text-[16px] font-medium text-muted">
            I play around with tech, content, design, and everything in
            between.
          </p>

          <div className="mt-6">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] text-rose"
              style={{
                background: 'rgba(75,29,63,0.25)',
                border: '0.5px solid rgba(75,29,63,0.6)',
              }}
            >
              <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-rose" />
              available for DevRel roles
            </span>
          </div>

          <ul className="mt-8 flex flex-wrap gap-[24px]">
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
                  style={hairline}
                  className="text-[14px] text-muted transition-colors hover:text-text"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-in-up flex justify-center md:justify-end">
          <div
            className="relative flex aspect-[120/152] w-[260px] flex-col bg-surface shadow-sm sm:w-[320px] md:w-[380px]"
            style={{
              transform: 'rotate(1.5deg) translateZ(0)',
              backfaceVisibility: 'hidden',
              border: '2px solid #FFFFFF',
            }}
          >
            <svg
              viewBox="0 0 28 28"
              fill="none"
              stroke="#E8D9C1"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 left-8 z-10 h-10 w-10 -rotate-[24deg] drop-shadow-[0_3px_4px_rgba(0,0,0,0.55)] sm:-top-6 sm:left-10 sm:h-12 sm:w-12 md:-top-8 md:left-14 md:h-16 md:w-16"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/polaroid.jpg"
                alt="nush in her element"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 380px, (min-width: 640px) 320px, 260px"
                quality={95}
                priority
              />
            </div>
            <div className="bg-burgundy px-3 py-2.5 text-center text-[13px] tracking-[0.06em] text-text">
              nush in her element
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
