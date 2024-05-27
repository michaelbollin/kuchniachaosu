import Link from 'next/link'
import { PortableText } from 'next-sanity'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between text-pretty">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:pr-8 md:text-3xl">
            {title}
          </h1>
          <h4
            className={`mt-2 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
          <a href="https://instagram.com/kuchniachaosu">@kuchniachaosu</a>
          </h4>
        </header>
      )

    case 2:
      return (
        <header className="mb-10 mt-16 flex flex-col md:mb-12 md:flex-row md:justify-between text-pretty">
          <h2 className="mb-20 text-3xl font-bold leading-tight tracking-tight md:text-3xl md:tracking-tighter text-pretty">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
          <h4
            className={` text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
          <a href="https://instagram.com/kuchniachaosu">@kuchniachaosu</a>
          </h4>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
