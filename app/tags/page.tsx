import Link from 'next/link'

export default function TagsPage() {
  const tags = [
    'Next.js',
    'React',
    'Docker',
    'Kubernetes',
    'Airflow',
    'Kafka',
    'Spark',
    'AWS',
    'Python',
    'TypeScript',
    'DevOps',
    'Data Engineering',
  ]

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold">Tags</h1>

          <p className="mt-4 text-white/60">Explore topics across the platform.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm hover:bg-blue-600"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="rounded-xl border border-white/10 px-6 py-3 hover:bg-white/10">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}
