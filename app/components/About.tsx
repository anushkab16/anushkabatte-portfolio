import { FadeIn } from './FadeIn'

/** First-person introduction section. */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <FadeIn>
        <h2 className="font-display text-4xl font-semibold text-text sm:text-5xl">
          about.
        </h2>
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-text md:text-lg">
          <p>
            I&apos;m a 20-year-old CS student who somehow ended up publishing
            research papers about AI before figuring out what I wanted for
            lunch.
          </p>
          <p>
            I love building things — but what I love more is explaining
            them. I&apos;m at my best when I&apos;m the bridge between
            something technically interesting and the person who needs to
            understand it. That&apos;s what DevRel is. That&apos;s why I
            want to do it.
          </p>
          <p>
            Right now I&apos;m doing a data science internship at a health
            tech company in Mumbai. In the meantime, I&apos;m building in
            public and figuring out my voice.
          </p>
          <p>When I&apos;m not doing that: F1, probably.</p>
        </div>
      </FadeIn>
    </section>
  )
}
