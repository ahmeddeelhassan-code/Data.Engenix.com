export default function HomePage() {
  const articles = [
    {
      title: 'Modern Data Pipelines',
      excerpt: 'Build scalable ETL and ELT workflows using Airflow and Kafka.',
    },
    {
      title: 'Cloud Data Engineering',
      excerpt: 'Deploy modern analytics infrastructure on AWS and Azure.',
    },
    {
      title: 'Real-Time Streaming',
      excerpt: 'Process millions of events using Kafka and Spark Streaming.',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-[-100px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">
              DE
            </div>
            <h1 className="text-2xl font-bold tracking-wide">DataEngineX</h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/blog" className="transition hover:text-white">
              Blog
            </a>
            <a href="/courses" className="transition hover:text-white">
              Courses
            </a>
            <a href="/projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="/about" className="transition hover:text-white">
              About
            </a>
          </nav>

          <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-500">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-24 text-center">
        <div className="mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          Modern Data Engineering Platform
        </div>

        <h1 className="max-w-5xl text-6xl leading-tight font-black md:text-8xl">
          Master the{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Modern Data Stack
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
          Learn Snowflake, Airflow, Kafka, Spark, and cloud data engineering through practical
          tutorials, production-ready architectures, and real engineering workflows.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-blue-500">
            Explore Articles
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white/80 backdrop-blur transition hover:bg-white/10">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-4xl font-black text-blue-400">50+</h3>
            <p className="mt-3 text-white/60">Engineering Tutorials</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-4xl font-black text-cyan-400">15K+</h3>
            <p className="mt-3 text-white/60">Monthly Readers</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-4xl font-black text-purple-400">24/7</h3>
            <p className="mt-3 text-white/60">Cloud Learning Access</p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 flex items-center justify-between">
          <div>
            <p className="mb-3 text-sm tracking-widest text-blue-400 uppercase">Latest Articles</p>
            <h2 className="text-4xl font-bold">Explore Modern Data Topics</h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/10"
            >
              <div className="mb-5 inline-flex rounded-full bg-blue-500/10 px-4 py-1 text-xs tracking-wider text-blue-300 uppercase">
                Data Engineering
              </div>

              <h3 className="mb-4 text-2xl font-bold transition group-hover:text-blue-400">
                {article.title}
              </h3>

              <p className="leading-7 text-white/60">{article.excerpt}</p>

              <button className="mt-8 text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                Read Article →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-12 text-center backdrop-blur-xl">
          <p className="mb-3 text-sm tracking-widest text-blue-300 uppercase">Newsletter</p>

          <h2 className="text-5xl leading-tight font-black">Stay Ahead of the Data Stack</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Weekly insights about data engineering, cloud infrastructure, analytics architecture,
            and modern pipelines.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 outline-none placeholder:text-white/30"
            />

            <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">DataEngineX</h3>
            <p className="mt-4 leading-7 text-white/50">
              Modern tutorials and resources for the next generation of data engineers.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Content</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>Blog</p>
              <p>Tutorials</p>
              <p>Courses</p>
              <p>Guides</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>About</p>
              <p>Careers</p>
              <p>Partners</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Social</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>GitHub</p>
              <p>LinkedIn</p>
              <p>Twitter</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
