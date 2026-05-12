import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">DataEnginex Blog</h1>

        <p className="mt-4 text-white/60">Tutorials, comparisons, and insights.</p>

        <Link href="/" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3">
          Back Home
        </Link>
      </div>
    </main>
  )
}
import Link from 'next/link'

const posts = [
  {
    title: 'Modern Data Engineering Roadmap',
    excerpt: 'Learn Spark, Kafka, Airflow, dbt, and cloud platforms step by step.',
    slug: 'modern-data-engineering-roadmap',
    category: 'Roadmap',
  },
  {
    title: 'Kafka vs RabbitMQ',
    excerpt: 'A deep comparison between Kafka and RabbitMQ for real-time systems.',
    slug: 'kafka-vs-rabbitmq',
    category: 'Architecture',
  },
  {
    title: 'Best SQL Practices',
    excerpt: 'Write scalable and optimized SQL for analytics and production.',
    slug: 'best-sql-practices',
    category: 'SQL',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-blue-400 uppercase">
            Data Engineering Articles
          </p>

          <h1 className="mb-6 text-6xl leading-tight font-black">DataEngineX Blog</h1>

          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Tutorials, comparisons, architecture breakdowns, and engineering insights for modern
            data teams.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <p className="mb-3 text-sm tracking-widest text-blue-400 uppercase">Featured Article</p>

          <h2 className="mb-4 text-4xl font-bold">Building Modern Data Pipelines</h2>

          <p className="mb-8 max-w-3xl text-white/60">
            Learn how companies build scalable ETL and streaming systems using Kafka, Spark,
            Airflow, and cloud-native infrastructure.
          </p>

          <Link
            href="/blog/modern-data-pipelines"
            className="inline-flex rounded-xl bg-blue-500 px-6 py-3 font-medium transition hover:bg-blue-400"
          >
            Read Article
          </Link>
        </div>

        {/* Articles */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Latest Articles</h2>

          <Link href="/tags" className="text-sm text-blue-400 transition hover:text-blue-300">
            Browse Tags →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/50 hover:bg-white/[0.08]"
            >
              <div className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs tracking-wider text-blue-400 uppercase">
                {post.category}
              </div>

              <h3 className="mb-4 text-2xl font-bold transition group-hover:text-blue-400">
                {post.title}
              </h3>

              <p className="mb-6 text-white/60">{post.excerpt}</p>

              <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-400">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
