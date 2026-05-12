'use client'

import Link from 'next/link'

const courses = [
  {
    platform: 'Databricks',
    platformColor: '#FF3621',
    platformBg: '#FFF0EE',
    title: 'Data Engineering with Databricks',
    description:
      'Official Databricks course covering Delta Lake, Apache Spark, and production pipelines.',
    level: 'Intermediate',
    duration: '8h',
    price: 'Free',
    priceColor: 'green',
    url: 'https://www.databricks.com/learn/training/catalog',
    tags: ['Spark', 'Delta Lake', 'Python'],
  },
  {
    platform: 'Coursera',
    platformColor: '#0056D2',
    platformBg: '#E6F0FF',
    title: 'IBM Data Engineering Professional Certificate',
    description: '13-course series covering SQL, NoSQL, big data, Spark, and cloud platforms.',
    level: 'Beginner',
    duration: '8 months',
    price: '$49/mo',
    priceColor: 'blue',
    url: 'https://www.coursera.org/professional-certificates/ibm-data-engineer',
    tags: ['SQL', 'NoSQL', 'Kafka', 'Spark'],
  },
  {
    platform: 'Udemy',
    platformColor: '#A435F0',
    platformBg: '#F4E6FF',
    title: 'The Complete dbt Bootcamp',
    description:
      'Zero to hero in dbt: build, test, and document transformation pipelines from scratch.',
    level: 'Beginner',
    duration: '10h',
    price: '$19',
    priceColor: 'purple',
    url: 'https://www.udemy.com/course/complete-dbt-data-build-tool-bootcamp-zero-to-hero-learn-dbt',
    tags: ['dbt', 'SQL', 'Analytics Engineering'],
  },
  {
    platform: 'DataCamp',
    platformColor: '#03EF62',
    platformBg: '#E6FFF3',
    title: 'Data Engineer Career Track',
    description: 'Hands-on track covering Python, SQL, Airflow, Kafka, and cloud warehouses.',
    level: 'Intermediate',
    duration: '93h',
    price: '$38/mo',
    priceColor: 'green',
    url: 'https://www.datacamp.com/tracks/data-engineer',
    tags: ['Python', 'Airflow', 'Kafka'],
  },
  {
    platform: 'Coursera',
    platformColor: '#0056D2',
    platformBg: '#E6F0FF',
    title: 'Google Cloud Professional Data Engineer',
    description:
      'Prep course for the GCP Professional Data Engineer exam. Covers BigQuery, Dataflow, Pub/Sub.',
    level: 'Advanced',
    duration: '6 months',
    price: '$49/mo',
    priceColor: 'blue',
    url: 'https://www.coursera.org/professional-certificates/gcp-data-engineering',
    tags: ['BigQuery', 'Dataflow', 'GCP'],
  },
  {
    platform: 'Udemy',
    platformColor: '#A435F0',
    platformBg: '#F4E6FF',
    title: 'Apache Kafka Series — Learn Apache Kafka for Beginners',
    description:
      'Learn Kafka from scratch: producers, consumers, Kafka Streams, and Kafka Connect.',
    level: 'Beginner',
    duration: '8h',
    price: '$19',
    priceColor: 'purple',
    url: 'https://www.udemy.com/course/apache-kafka',
    tags: ['Kafka', 'Streaming', 'Java'],
  },
]

const levelStyles: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Intermediate: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Advanced: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300',
}

const priceStyles: Record<string, string> = {
  green: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  purple: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Nav */}
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/90 px-6 py-3.5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
        <Link href="/" className="text-base font-semibold text-gray-900 dark:text-white">
          Data<span className="text-blue-600">Enginex</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/blog"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Blog
          </Link>
          <Link href="/courses" className="font-medium text-blue-600">
            Courses
          </Link>
          <Link
            href="/auth"
            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700"
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="border-b border-gray-100 px-6 py-10 dark:border-gray-800">
        <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Curated courses
        </span>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Data engineering courses
        </h1>
        <p className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
          The best courses from Databricks, Coursera, Udemy, and DataCamp — hand-picked for data
          engineers at every level.
        </p>
      </div>

      {/* Courses grid */}
      <div className="grid gap-5 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.url}
            className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600"
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className="rounded-md px-2.5 py-1 text-xs font-semibold"
                style={{ backgroundColor: course.platformBg, color: course.platformColor }}
              >
                {course.platform}
              </span>
              <span
                className={`rounded px-2 py-0.5 text-xs font-medium ${levelStyles[course.level]}`}
              >
                {course.level}
              </span>
            </div>

            <h2 className="mb-2 text-sm leading-snug font-semibold text-gray-900 dark:text-white">
              {course.title}
            </h2>
            <p className="flex-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              {course.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 dark:text-gray-500">{course.duration}</span>
                <span
                  className={`rounded px-2 py-0.5 text-xs font-semibold ${priceStyles[course.priceColor]}`}
                >
                  {course.price}
                </span>
              </div>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
              >
                View course →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
