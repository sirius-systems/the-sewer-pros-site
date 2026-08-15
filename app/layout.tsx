import type { Metadata } from 'next'
import './globals.css'

/**
 * Root layout.
 *
 * Governed by docs/02-nextjs-technical-architecture.md §30, §37, §60-62.
 *
 * Scaffold state. Header, footer, navigation, and schema are not yet
 * implemented — those are build sequence steps 16-17 (02 §103) and
 * depend on the navigation configuration (03 §63) and design system
 * primitives (18 §156).
 *
 * ⚠ metadataBase is intentionally absent.
 *
 * It requires the production canonical origin, which is unresolved
 * (PENDING-001: apex vs www, and the domain itself). 02 §53 and
 * CLAUDE.md §53-54 forbid hard-coding a guessed or development origin
 * into production metadata. Add it once PENDING-001 is decided, sourced
 * from NEXT_PUBLIC_SITE_URL rather than a literal.
 */
export const metadata: Metadata = {
  title: 'The Sewer Pros',
  description:
    'Independent sewer inspection, diagnostics, locating, and cleaning.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
