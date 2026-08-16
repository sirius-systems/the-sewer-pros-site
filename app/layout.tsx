import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SITE_NAME } from '@/data/business'

/**
 * Root layout.
 *
 * Governed by docs/02-nextjs-technical-architecture.md §30, §37, §60-62;
 * docs/18-design-system.md §42, §94-95, §116.
 *
 * Build sequence step 16. Header, footer, skip link, and landmark
 * structure. Design-system primitives are step 17; page sections are
 * step 18.
 *
 * ---------------------------------------------------------------------------
 * ⚠ metadataBase IS STILL ABSENT
 * ---------------------------------------------------------------------------
 * It requires the production canonical origin, which is unresolved
 * (PENDING-001: the domain, and apex vs www). 02 §53 and CLAUDE.md
 * §53-54 forbid baking a guessed or development origin into production
 * metadata, and under `output: 'export'` whatever is present at build
 * time ships as static text.
 *
 * `siteOrigin()` in `data/business/site.ts` is the single place that
 * will supply it, sourced from NEXT_PUBLIC_SITE_URL. Wiring metadata
 * properly is step 14, which is blocked on the same decision.
 */
export const metadata: Metadata = {
  title: SITE_NAME,
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
      <body className="flex min-h-screen flex-col antialiased">
        {/*
          18 §95, 02 §60 — keyboard users must be able to bypass the
          header. Visually hidden until focused, then pinned on top.
        */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to main content
        </a>

        <SiteHeader />

        {/* Single main landmark; `tabIndex={-1}` makes the skip target focusable. */}
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  )
}
