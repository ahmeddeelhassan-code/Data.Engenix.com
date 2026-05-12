import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Data Pipeline Platform',
      description: 'Modern ETL pipelines using Airflow and Spark.',
      stack: 'Airflow • Spark • Docker',
    },
    {
      title: 'Cloud Analytics Dashboard',
      description: 'Real-time analytics dashboard for cloud metrics.',
      stack: 'Next.js • AWS • PostgreSQL',
    },
    {
      title: 'Kafka Streaming System',
      description: 'Distributed streaming architecture with Kafka.',
      stack: 'Kafka • Python • Redis',
    },
  ]

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold">Projects</h1>

          <p className="mt-4 text-white/60">Engineering projects and real-world systems.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">{project.title}</h2>

              <p className="mt-3 text-white/60">{project.description}</p>

              <div className="mt-4 text-sm text-blue-400">{project.stack}</div>

              <button className="mt-6 rounded-xl bg-blue-600 px-5 py-2 hover:bg-blue-500">
                View Project
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="rounded-xl border border-white/10 px-6 py-3 hover:bg-white/10">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}
