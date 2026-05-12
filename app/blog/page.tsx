import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">DataEnginex Blog</h1>

        <p className="mt-4 text-white/60">Tutorials, comparisons, and insights.</p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-500"
        >
          Back Home
        </Link>
      </div>
    </main>
  )
}
