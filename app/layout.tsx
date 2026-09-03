import type { Metadata } from 'next'
import { Archivo, Source_Sans_3 } from 'next/font/google'
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
/**
 * Brand typography (DEC-096, 18 §30).
 *
 * Two families, loaded here rather than named in components: the CSS
 * variables below are what `--font-heading` and `--font-sans` in
 * globals.css point at, so changing a face is a change here and
 * nowhere else (18 §124's reasoning, applied to type).
 *
 * Both are variable fonts, so the weight range DEC-096 specifies
 * (H1 700, H2 650-700, H3 600, body 400, nav/buttons 600) is served by
 * one file per family rather than a request per weight. `display:
 * 'swap'` keeps text readable during the font load rather than
 * blocking the first paint (18 §65 — avoid unnecessary performance
 * cost; a blank heading is the worst version of that).
 *
 * Self-hosted by next/font at build time, so no runtime request to
 * fonts.googleapis.com ships and no third-party origin sees the
 * visitor.
 */
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = rootMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        {/*
          18 §95, 02 §60 — keyboard users must be able to bypass the
          header. Visually hidden until focused, then pinned on top.
        */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-accent-secondary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-secondary-foreground"
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
