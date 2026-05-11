'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────
// Animated Counter
// ─────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

// ─────────────────────────────────────────────
// In View Hook
// ─────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

// ─────────────────────────────────────────────
// Stack Icons
// ─────────────────────────────────────────────
const stackItems = [
  { name: 'Spark', color: '#E25A1C', letter: 'S' },
  { name: 'dbt', color: '#FF694B', letter: 'd' },
  { name: 'Airflow', color: '#017CEE', letter: 'A' },
  { name: 'Snowflake', color: '#29B5E8', letter: '❄' },
  { name: 'Kafka', color: '#FFFFFF', letter: 'K' },
  { name: 'BigQuery', color: '#4285F4', letter: 'B' },
]

// ─────────────────────────────────────────────
// Articles
// ─────────────────────────────────────────────
const articles = [
  {
    title: 'Databricks vs Snowflake',
    excerpt:
      'A modern comparison between the two biggest cloud data platforms.',
    tag: 'Comparison',
    color: '#FF3621',
  },
  {
    title: 'Best Data Engineering Roadmap',
    excerpt:
      'Learn the exact skills needed to become a modern data engineer.',
    tag: 'Career',
    color: '#03EF62',
  },
  {
    title: 'Your First dbt Pipeline',
    excerpt:
      'Step-by-step guide to build a scalable transformation workflow.',
    tag: 'Tutorial',
    color: '#A435F0',
  },
]

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function HomePage() {
  const statsRef = useInView()

  const readers = useCounter(12400, 2000, statsRef.inView)
  const articlesCount = useCounter(50, 1500, statsRef.inView)
  const salary = useCounter(135, 1800, statsRef.inView)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0F1E] text-white">
      {/* Background Grid */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(55,138,221,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(55,138,221,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow Effects */}
      <div
        className="pointer-events-none fixed left-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(55,138,221,0.12) 0%, transparent 70%)',
        }}
      />

      <div
        className="pointer-events-none fixed bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,54,33,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 border-b border-white/5 px-6 py-4 backdrop-blur-xl"
        style={{ background: 'rgba(10,15,30,0.85)' }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, #378ADD, #1a5fa8)',
              }}
            >
              DE
            </div>

            <span className="text-lg font-semibold">
              Data<span className="text-blue-400">Enginex</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <Link href="/blog">Blog</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/about">About</Link>
          </div>

          <button
            className="rounded-xl px-5 py-2 text-sm font-medium"
            style={{
              background: 'linear-gradient(135deg, #378ADD, #1a5fa8)',
            }}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs text-blue-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          Modern Data Engineering Platform
        </div>

        <h1
          className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
          style={{
            fontFamily: 'Georgia, serif',
          }}
        >
          Master the <br />
          <span
            style={{
              background:
                'linear-gradient(135deg, #378ADD 0%, #60a5fa 50%, #378ADD 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Modern Data Stack
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50">
          Learn Spark, dbt, Snowflake, Airflow, Kafka, and cloud data
          engineering through practical tutorials and unbiased comparisons.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            className="rounded-xl px-7 py-3 text-sm font-medium"
            style={{
              background: 'linear-gradient(135deg, #378ADD, #1a5fa8)',
              boxShadow: '0 0 25px rgba(55,138,221,0.35)',
            }}
          >
            Explore Articles →
          </button>

          <button className="rounded-xl border border-white/10 px-7 py-3 text-sm text-white/70">
            Browse Courses
          </button>
        </div>

        {/* Stack Icons */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 text-lg font-bold"
              style={{
                background: `${item.color}15`,
                color: item.color,
              }}
            >
              {item.letter}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        ref={statsRef.ref}
        className="border-y border-white/5 py-14"
        style={{
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/5 px-6">
          <div className="text-center">
            <p className="mb-2 text-4xl font-bold">
              {readers.toLocaleString()}+
            </p>
            <p className="text-sm text-white/40">Monthly Readers</p>
          </div>

          <div className="text-center">
            <p className="mb-2 text-4xl font-bold">{articlesCount}+</p>
            <p className="text-sm text-white/40">Expert Articles</p>
          </div>

          <div className="text-center">
            <p className="mb-2 text-4xl font-bold">${salary}K</p>
            <p className="text-sm text-white/40">Average DE Salary</p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-2 text-xs uppercase tracking-widest text-blue-400">
            Latest Articles
          </p>

          <h2 className="text-3xl font-bold">Recent Insights</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.title}
              className="rounded-2xl border border-white/5 p-6 transition-all hover:-translate-y-1 hover:border-white/10"
              style={{
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <span
                className="mb-4 block text-xs font-bold uppercase tracking-wider"
                style={{ color: article.color }}
              >
                {article.tag}
              </span>

              <h3 className="mb-4 text-xl font-semibold">
                {article.title}
              </h3>

              <p className="leading-relaxed text-white/40">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-3xl border border-blue-500/10 p-12 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(55,138,221,0.06) 0%, rgba(10,15,30,0.95) 100%)',
          }}
        >
          <p className="mb-3 text-xs uppercase tracking-widest text-blue-400">
            Newsletter
          </p>

          <h2 className="mb-4 text-4xl font-bold">
            Stay Ahead of the Data Stack
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-white/40">
            Weekly insights on Spark, dbt, Snowflake, AI pipelines, salaries,
            and cloud engineering trends.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-72 rounded-xl border border-white/10 bg-white/5 px-5 py-3 outline-none"
            />

            <button
              className="rounded-xl px-6 py-3 font-medium"
              style={{
                background: 'linear-gradient(135deg, #378ADD, #1a5fa8)',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Data<span className="text-blue-400">Enginex</span>
            </h3>

            <p className="text-sm leading-relaxed text-white/40">
              The independent authority on data engineering.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-white">
              Content
            </p>

            <div className="space-y-3 text-sm text-white/40">
              <p>Blog</p>
              <p>Tutorials</p>
              <p>Courses</p>
              <p>Guides</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-white">
              Company
            </p>

            <div className="space-y-3 text-sm text-white/40">
              <p>About</p>
              <p>Contact</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-white">
              Social
            </p>

            <div className="space-y-3 text-sm text-white/40">
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-sm text-white/20">
          © 2026 DataEnginex. All rights reserved.
        </div>
      </footer>
    </main>
  )
}