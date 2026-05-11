# DataEnginex Premium Homepage (Next.js + Tailwind)

ضع هذا الكود داخل:

```bash
app/page.tsx
```

أو:

```bash
src/app/page.tsx
```

---

```tsx
'use client'

import Link from 'next/link'

const technologies = [
  'Spark',
  'dbt',
  'Airflow',
  'Snowflake',
  'Databricks',
  'Kafka',
  'BigQuery',
]

const companies = [
  'airbnb',
  'stripe',
  'amazon',
  'Meta',
  'NETFLIX',
  'Google',
  'Microsoft',
  'Uber',
]

const articles = [
  {
    category: 'TOOL COMPARISON',
    title: 'Kafka vs Redpanda in 2026',
    desc: 'Performance, pricing, and operational comparison for modern streaming.',
  },
  {
    category: 'TUTORIAL',
    title: 'Advanced dbt Testing Strategies',
    desc: 'Level up your data quality with advanced testing patterns and macros.',
  },
  {
    category: 'CONCEPTS',
    title: 'Data Mesh: The Complete Guide',
    desc: 'Principles, architecture, and real-world implementation guides.',
  },
]

const tools = [
  {
    title: 'Salary Calculator',
    desc: 'Estimate your market value by role, location, and stack.',
    icon: '💰',
  },
  {
    title: 'Stack Chooser',
    desc: 'Answer 5 questions, get your ideal data engineering stack.',
    icon: '🧱',
  },
  {
    title: 'Cert Tracker',
    desc: 'Compare AWS, GCP, Azure, and dbt certifications.',
    icon: '🏆',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(55,138,221,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(55,138,221,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Glow orbs */}
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#050816]/80">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold shadow-lg shadow-blue-500/30">
              DE
            </div>

            <h1 className="text-xl font-bold tracking-tight">
              Data<span className="text-blue-400">Enginex</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <Link href="/">Blog</Link>
            <Link href="/">Courses</Link>
            <Link href="/">Tools</Link>
            <Link href="/">Topics</Link>
            <Link href="/">Resources</Link>
            <Link href="/">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm text-white/60">
              Sign in
            </button>

            <button className="h-11 px-5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-sm font-medium hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
              Join Newsletter
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left side */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              The independent authority on data engineering
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              Master the Modern
              <br />
              <span className="text-blue-400">
                Data Stack
              </span>
            </h1>

            <p className="text-lg text-white/55 leading-relaxed max-w-xl mb-10">
              In-depth guides, tool comparisons, salary insights,
              and hands-on tutorials for the modern data engineer.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="h-14 px-7 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 font-medium hover:scale-105 transition-all shadow-2xl shadow-blue-500/30">
                Browse Articles →
              </button>

              <button className="h-14 px-7 rounded-2xl border border-white/10 text-white/70 hover:border-white/30 transition-all">
                Explore Courses
              </button>
            </div>

            <div>
              <p className="text-sm text-white/30 mb-5">
                Explore technologies we cover
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-3 rounded-2xl border border-white/10 bg-white/5 text-sm text-white/70 hover:border-blue-500/30 transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="relative">

            <div className="absolute inset-0 bg-blue-500/20 blur-[120px]" />

            <div className="relative rounded-[32px] border border-blue-500/20 bg-[#0B1225] p-8 shadow-2xl shadow-blue-500/10 overflow-hidden">

              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />

              <div className="relative flex items-center justify-between mb-10">
                <h3 className="text-xl font-semibold">
                  Data Pipeline Overview
                </h3>

                <div className="text-green-400 text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  All systems operational
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">

                {['Ingestion', 'Raw Data', 'Transform', 'Analytics'].map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 mx-auto mb-4" />

                    <p className="text-sm text-white/70 mb-3">
                      {step}
                    </p>

                    <div className="w-5 h-5 rounded-full bg-green-500 mx-auto" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-white/40 text-sm mb-3">
                    Pipeline Runs
                  </p>

                  <h2 className="text-4xl font-bold mb-2">
                    1,429
                  </h2>

                  <p className="text-green-400 text-sm">
                    +12.5%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-white/40 text-sm mb-3">
                    Data Quality
                  </p>

                  <h2 className="text-4xl font-bold text-green-400 mb-2">
                    98.6%
                  </h2>

                  <p className="text-white/40 text-sm">
                    Success rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted companies */}
      <section className="border-y border-white/5 py-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center text-white/30 mb-10">
            Trusted by 12,000+ data engineers from leading companies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center text-white/40 text-xl font-semibold">
            {companies.map((company) => (
              <div key={company}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-[2fr,1fr] gap-6 mb-16">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 overflow-hidden relative">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />

            <div className="relative z-10">

              <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
                FEATURED
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="h-[260px] rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1225] flex items-center justify-center text-5xl font-bold text-blue-400">
                  VS
                </div>

                <div>
                  <p className="text-blue-400 text-xs uppercase tracking-widest mb-4">
                    TOOL COMPARISON
                  </p>

                  <h2 className="text-4xl font-bold leading-tight mb-5">
                    Databricks vs Snowflake in 2026
                  </h2>

                  <p className="text-white/50 leading-relaxed mb-8">
                    A definitive comparison of pricing, performance,
                    and ecosystem fit for modern data teams.
                  </p>

                  <div className="flex items-center gap-4 text-white/40 text-sm">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div>
                      <p>Apr 28, 2026</p>
                      <p>8 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">

            {[
              'Data Engineer Salary Guide 2026',
              'Building Your First dbt Pipeline',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="h-32 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1225] mb-5" />

                <h3 className="text-xl font-semibold mb-3">
                  {item}
                </h3>

                <p className="text-white/45 text-sm leading-relaxed">
                  Step-by-step guides and deep engineering insights.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest articles */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Latest Articles
          </h2>

          <Link href="/" className="text-blue-400">
            View all articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {articles.map((article) => (
            <div
              key={article.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1225] mb-6" />

              <p className="text-blue-400 text-xs uppercase tracking-widest mb-4">
                {article.category}
              </p>

              <h3 className="text-2xl font-semibold leading-snug mb-4">
                {article.title}
              </h3>

              <p className="text-white/50 leading-relaxed mb-6">
                {article.desc}
              </p>

              <div className="text-sm text-white/30">
                Apr 18, 2026 • 7 min read
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-white/5 py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">
              Free Tools for Data Engineers
            </h2>

            <Link href="/" className="text-blue-400">
              View all tools →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {tools.map((tool) => (
              <div
                key={tool.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6">
                  {tool.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {tool.title}
                </h3>

                <p className="text-white/50 leading-relaxed mb-6">
                  {tool.desc}
                </p>

                <button className="text-green-400 font-medium">
                  Try now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Why DataEnginex?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            'No Vendor Bias',
            'Practical & Actionable',
            'Expert Contributors',
            'Community Focused',
          ].map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 mb-6" />

              <h3 className="text-xl font-semibold mb-3">
                {item}
              </h3>

              <p className="text-white/45 leading-relaxed text-sm">
                Real-world engineering content designed for modern data teams.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="rounded-[36px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-12 overflow-hidden relative">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_40%)]" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div>
              <h2 className="text-5xl font-bold leading-tight mb-5">
                Join 12,400+ data engineers
              </h2>

              <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                Get weekly insights on tools, careers, architecture,
                and trends in modern data engineering.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">

              <input
                type="email"
                placeholder="your@email.com"
                className="h-16 w-full md:w-[340px] rounded-2xl bg-white/5 border border-white/10 px-6 outline-none"
              />

              <button className="h-16 px-8 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 font-semibold hover:scale-105 transition-all shadow-2xl shadow-blue-500/30">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold">
                DE
              </div>

              <h3 className="text-xl font-bold">
                Data<span className="text-blue-400">Enginex</span>
              </h3>
            </div>

            <p className="text-white/35 leading-relaxed text-sm">
              The independent authority on data engineering.
              No vendor bias, no fluff.
            </p>
          </div>

          {['Content', 'Topics', 'Company', 'Resources'].map((section) => (
            <div key={section}>
              <h4 className="font-semibold mb-5 text-white/90">
                {section}
              </h4>

              <div className="space-y-3 text-white/40 text-sm">
                <p>Blog</p>
                <p>Tutorials</p>
                <p>Courses</p>
                <p>Guides</p>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  )
}
