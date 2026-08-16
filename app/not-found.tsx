import Link from 'next/link'
import { Section, ButtonLink } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'

/**
 * 404 page.
 *
 * Governed by docs/18-design-system.md §119;
 * docs/05-url-routing-strategy.md §77.
 *
 * 05 §77 requires unknown paths produce a legitimate Not Found — no
 * fallback to a market, no redirect to the homepage, no thin generic
 * template. This page is what that resolves to.
 *
 * 18 §119 asks for homepage, Services, Markets, and Contact links, and
 * warns against "joke-heavy error messaging that undermines trust".
 *
 * ⚠ The Markets link points at `/locations/`, the approved hub. It does
 * not link to an individual market: two of the three have no authored
 * content yet, and Las Vegas is gated (04 §4).
 */
export default function NotFound() {
  return (
    <Section density="sparse" width="reading">
      <h1 className="text-h1 font-semibold tracking-tight">Page not found</h1>

      <p className="mt-5 text-body-lg text-muted-foreground">
        This page does not exist. It may have moved, or the address may be
        slightly different from the one intended.
      </p>

      <ul className="mt-8 flex flex-col gap-3">
        <li>
          <Link href="/" className="text-accent underline underline-offset-4">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services/" className="text-accent underline underline-offset-4">
            Services
          </Link>
        </li>
        <li>
          <Link href="/locations/" className="text-accent underline underline-offset-4">
            Service areas
          </Link>
        </li>
        <li>
          <Link href="/contact/" className="text-accent underline underline-offset-4">
            Contact
          </Link>
        </li>
      </ul>

      <div className="mt-10">
        <ButtonLink href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</ButtonLink>
      </div>
    </Section>
  )
}
