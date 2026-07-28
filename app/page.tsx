import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Hi, I'm Anushka Batte 👋
      </h1>
      <p className="mb-4 text-neutral-400">
        BTech Computer Engineering student · AI/ML researcher · future Developer Advocate.
        I make complex technology make sense — for developers, teams, and everyone in between.
      </p>
      <p className="mb-8 text-neutral-300">
        Currently building at the intersection of AI and developer experience.
        Based in Mumbai, heading to Dublin in 2027 for my Masters.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}