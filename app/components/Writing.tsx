import Link from 'next/link'
import { getBlogPosts, formatDate } from 'app/blog/utils'
import { FadeIn } from './FadeIn'

const LATEST_POSTS_COUNT = 3

/** Latest blog posts, pulled from the existing MDX setup. */
export function Writing() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, LATEST_POSTS_COUNT)

  return (
    <section id="writing" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <FadeIn>
        <h2 className="font-display text-4xl font-semibold text-text sm:text-5xl">
          writing.
        </h2>

        {posts.length === 0 ? (
          <p className="mt-12 text-center font-display text-xl italic text-muted">
            thinking out loud, soon.
          </p>
        ) : (
          <div className="mt-8 flex flex-col divide-y divide-border">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-1 py-4 transition-colors hover:text-burgundy md:flex-row md:items-center md:gap-6"
              >
                <span className="text-sm text-muted md:w-32">
                  {formatDate(post.metadata.publishedAt, false)}
                </span>
                <span className="text-text">{post.metadata.title}</span>
              </Link>
            ))}
          </div>
        )}

        <Link
          href="/blog"
          className="mt-6 inline-block text-sm text-burgundy underline underline-offset-2 transition-opacity hover:opacity-80"
        >
          read more →
        </Link>
      </FadeIn>
    </section>
  )
}
