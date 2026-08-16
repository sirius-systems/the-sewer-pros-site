import type { Metadata } from 'next'
import './globals.css'
import { rootMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Analytics } from '@/components/tracking'

/**
 * Root layout.
 *
 * Governed by docs/02-nextjs-technical-architecture.md §30, §37, §53,
 * §60-62; docs/18-design-system.md §42, §94-95, §116.
 *
 * `metadataBase` is now set, sourced from `siteOrigin()` and therefore
 * from NEXT_PUBLIC_SITE_URL rather than a literal (02 §53).
 *
 * It was deliberately absent from the scaffold until DEC-078 confirmed
 * the canonical origin as https://www.thesewerpros.com. Under
 * `output: 'export'` the origin is baked into canonicals, schema `@id`
 * values, and the sitemap as static text, and 15 §5 requires those stay
 * stable once published — so a guess could not have been corrected
 * later without breaking entity identity.
 */
export const metadata: Metadata = rootMetadata()

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

        {/*
          Renders nothing while NEXT_PUBLIC_GA_MEASUREMENT_ID is unset,
          which it currently is — see the consent note in
          components/tracking (19 §106).
        */}
        <Analytics />
      </body>
    </html>
  )
}
