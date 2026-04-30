"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"

const categories = {
  "Tools & Comparisons": ["Databricks", "Snowflake", "dbt", "Airflow", "Kafka", "Spark"],
  "Career": ["Salaries", "Interview Prep", "Roadmaps", "Certifications"],
  "Concepts": ["Architecture", "Data Modeling", "Streaming", "Lakehouse"],
  "Tutorials": ["Beginner", "Intermediate", "Advanced", "Projects"],
}

const posts = [
  {
    slug: "databricks-vs-snowflake-2026",
    category: "Tools & Comparisons",
    tag: "DATABRICKS",
    title: "Databricks vs Snowflake in 2026: The Definitive Guide",
    excerpt: "A deep-dive comparison of pricing, performance, ecosystem, and use cases to help you choose the right platform for your data stack.",
    date: "April 28, 2026",
    readTime: "8 MIN READ",
    featured: true,
    coverBg: "#1B3A4B",
    coverAccent: "#FF3621",
  },
  {
    slug: "data-engineer-salary-2026",
    category: "Career",
    tag: "CAREER",
    title: "Data Engineer Salary Guide — US, EU & MENA 2026",
    excerpt: "Comprehensive salary benchmarks by experience level, location, tech stack, and company size. Based on 2,400+ data points.",
    date: "April 25, 2026",
    readTime: "6 MIN READ",
    featured: true,
    coverBg: "#0F2E1E",
    coverAccent: "#03EF62",
  },
  {
    slug: "first-dbt-pipeline",
    category: "Tutorials",
    tag: "TUTORIAL",
    title: "Building Your First dbt Pipeline from Scratch",
    excerpt: "Step-by-step from raw tables to production-ready transformation models. Includes tests, documentation, and CI/CD setup.",
    date: "April 22, 2026",
    readTime: "12 MIN READ",
    featured: false,
    coverBg: "#2D1B4E",
    coverAccent: "#A435F0",
  },
  {
    slug: "what-is-data-lakehouse",
    category: "Concepts",
    tag: "CONCEPTS",
    title: "What Is a Data Lakehouse? Architecture Explained",
    excerpt: "The architecture that combines the flexibility of data lakes with the performance of data warehouses — and why it matters in 2026.",
    date: "April 20, 2026",
    readTime: "5 MIN READ",
    featured: false,
    coverBg: "#1A2E3B",
    coverAccent: "#0056D2",
  },
  {
    slug: "apache-spark-vs-flink",
    category: "Tools & Comparisons",
    tag: "STREAMING",
    title: "Apache Spark vs Apache Flink: Stream Processing in 2026",
    excerpt: "When to use Spark Structured Streaming versus Flink for real-time data pipelines. Benchmarks, trade-offs, and decision framework.",
    date: "April 18, 2026",
    readTime: "10 MIN READ",
    featured: false,
    coverBg: "#2A1A0F",
    coverAccent: "#EF9F27",
  },
  {
    slug: "aws-data-engineer-cert",
    category: "Career",
    tag: "CERTIFICATIONS",
    title: "How to Pass the AWS Certified Data Engineer Associate",
    excerpt: "Study plan, key topics, practice questions, and exam tips from engineers who passed on the first attempt.",
    date: "April 15, 2026",
    readTime: "7 MIN READ",
    featured: false,
    coverBg: "#0F1E2E",
    coverAccent: "#FF9900",
  },
  {
    slug: "airflow-vs-prefect-vs-dagster",
    category: "Tools & Comparisons",
    tag: "ORCHESTRATION",
    title: "Airflow vs Prefect vs Dagster: Which Orchestrator in 2026?",
    excerpt: "A practical guide to choosing your workflow orchestrator based on team size, complexity, and cloud strategy.",
    date: "April 12, 2026",
    readTime: "9 MIN READ",
    featured: false,
    coverBg: "#1C2B1C",
    coverAccent: "#1D9E75",
  },
  {
    slug: "data-engineering-roadmap-2026",
    category: "Career",
    tag: "ROADMAP",
    title: "The Complete Data Engineering Roadmap for 2026",
    excerpt: "Everything you need to learn to become a data engineer in 2026 — from SQL to distributed systems, with timelines and resources.",
    date: "April 10, 2026",
    readTime: "15 MIN READ",
    featured: false,
    coverBg: "#1E1A2E",
    coverAccent: "#7F77DD",
  },
]

const tagColors: Record<string, string> = {
  "DATABRICKS": "#FF3621",
  "CAREER": "#1D9E75",
  "TUTORIAL": "#A435F0",
  "CONCEPTS": "#0056D2",
  "STREAMING": "#EF9F27",
  "CERTIFICATIONS": "#FF9900",
  "ORCHESTRATION": "#1D9E75",
  "ROADMAP": "#7F77DD",
}

// Mini cover art component
function CoverArt({ bg, accent, tag }: { bg: string; accent: string; tag: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden" style={{ background: bg }}>
      {/* Geometric shapes */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20" style={{ background: accent, transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-15" style={{ background: accent, transform: "translate(-30%, 30%) rotate(45deg)" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 opacity-30 rotate-12" style={{ background: accent, clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
      </div>
      <span className="relative z-10 text-xs font-bold tracking-widest text-white/70 uppercase">{tag}</span>
    </div>
  )
}

export default function BlogPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [sort, setSort] = useState("Newest")
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [page, setPage] = useState(1)
  const PER_PAGE = 6

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
    setPage(1)
  }

  const filtered = useMemo(() => {
    let result = posts
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      )
    }
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedTags.length > 0) {
      result = result.filter((p) => selectedTags.includes(p.tag))
    }
    if (sort === "Oldest") result = [...result].reverse()
    return result
  }, [search, selectedCategory, selectedTags, sort])

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* ── Nav ──────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-20 bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-100 dark:border-gray-800 px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold text-gray-900 dark:text-white">
          Data<span className="text-blue-600">Enginex</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
          <Link href="/tools" className="hover:text-gray-900 dark:hover:text-white transition-colors">Tools</Link>
          <Link href="/courses" className="hover:text-gray-900 dark:hover:text-white transition-colors">Courses</Link>
          <Link href="/auth" className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors">
            Sign in
          </Link>
        </div>
      </nav>

      {/* ── Breadcrumb ───────────────────────────────────────── */}
      <div className="px-6 pt-5 pb-0">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
          <span className="mx-2">/</span>
          <span>Blog</span>
        </p>
      </div>

      {/* ── Header ───────────────────────────────────────────── */}
      <div className="px-6 py-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-100 dark:border-gray-800">
        <div>
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">All Posts</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""} on data engineering
          </p>
        </div>
        {/* Subscribe card */}
        <div className="shrink-0 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 max-w-xs w-full">
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Never miss a post</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            Weekly articles on tools, careers, and the data stack.
          </p>
          {subscribed ? (
            <p className="text-xs font-medium text-green-600 dark:text-green-400">✓ You&apos;re subscribed!</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true) }} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 min-w-0 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Filter bar ───────────────────────────────────────── */}
      <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-3">
        {/* Categories toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors ${
            showFilters
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          Categories
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${showFilters ? "rotate-180" : ""}`}>
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Search */}
        <div className="flex-1 min-w-48 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pl-9 pr-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 outline-none focus:border-blue-500"
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>

        {/* Active tag chips */}
        {selectedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className="flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
          >
            {tag}
            <span className="text-blue-400">✕</span>
          </button>
        ))}
      </div>

      {/* ── Category panel ───────────────────────────────────── */}
      {showFilters && (
        <div className="px-6 py-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Object.entries(categories).map(([cat, tags]) => (
              <div key={cat}>
                <button
                  onClick={() => { setSelectedCategory(selectedCategory === cat ? null : cat); setPage(1) }}
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 mb-3"
                >
                  {cat} →
                </button>
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <label key={tag} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag.toUpperCase())}
                        onChange={() => toggleTag(tag.toUpperCase())}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowFilters(false)}
            className="mt-6 w-full rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Apply filters
          </button>
        </div>
      )}

      {/* ── Posts grid ───────────────────────────────────────── */}
      <div className="px-6 py-10">
        {paginated.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">No articles found. Try a different search.</p>
            <button onClick={() => { setSearch(""); setSelectedTags([]); setSelectedCategory(null) }} className="mt-4 text-xs text-blue-600 dark:text-blue-400 hover:underline">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginated.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all"
              >
                {/* Cover */}
                <div className="h-40 w-full">
                  <CoverArt bg={post.coverBg} accent={post.coverAccent} tag={post.tag} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold tracking-wider"
                      style={{ color: tagColors[post.tag] || "#378ADD" }}
                    >
                      {post.tag}
                    </span>
                  </div>

                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-50 dark:border-gray-800">
                    <span>{post.date}</span>
                    <span>/</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── Pagination ─────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-400 dark:text-gray-500 mr-2">Page</span>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                    p === page
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {p}
                </button>
              ))}
              {page < totalPages && (
                <button
                  onClick={() => setPage(page + 1)}
                  className="ml-1 flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Next →
                </button>
              )}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} results
            </p>
          </div>
        )}
      </div>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 mt-10">
        <div className="px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-white font-semibold text-sm mb-4">DataEnginex</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The independent authority on data engineering. No vendor bias, no fluff.
            </p>
          </div>
          {[
            { title: "Content", links: ["Blog", "Tools", "Courses", "Newsletter"] },
            { title: "Topics", links: ["Tool Comparisons", "Career", "Tutorials", "Concepts"] },
            { title: "Company", links: ["About", "Editorial Policy", "Contact", "Privacy"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© DataEnginex 2026. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Notice", "Terms of Use", "Contact"].map((item) => (
              <Link key={item} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
