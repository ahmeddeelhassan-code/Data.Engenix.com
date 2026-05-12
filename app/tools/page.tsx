import Link from 'next/link'

export default function ToolsPage() {
  const tools = [
    {
      title: 'SQL Formatter',
      description: 'Format and beautify SQL queries instantly.',
    },
    {
      title: 'JSON Validator',
      description: 'Validate and inspect JSON data.',
    },
    {
      title: 'Regex Tester',
      description: 'Test regular expressions in real time.',
    },
  ]

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold">Developer Tools</h1>

          <p className="mt-4 text-white/60">
            Powerful utilities for data engineers and developers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">{tool.title}</h2>

              <p className="mt-3 text-white/60">{tool.description}</p>

              <button className="mt-6 rounded-xl bg-blue-600 px-5 py-2 hover:bg-blue-500">
                Open Tool
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
