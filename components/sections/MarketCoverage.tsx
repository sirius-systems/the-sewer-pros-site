import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import { pagesOfType } from '@/data/pages'
import type { PageId } from '@/types'

/**
 * Market coverage.
 *
 * Governed by docs/18-design-system.md §52, §86, §87, §134-136;
 * docs/15-schema-entity-strategy.md §11-13;
 * docs/01-business-brand-foundation.md §20-21;
 * CLAUDE.md §29, §30, §135.
 *
 * ===========================================================================
 * SERVICE MARKETS, NOT OFFICES
 * ===========================================================================
 * 18 §87 requires the distinction be "visually explicit": a market map
 * or list communicates "Areas We Serve", never "Our Offices".
 *
 * 18 §135 forbids UI cards reading "San Diego Office" or "Las Vegas
 * Office" with map pins or stock addresses. 18 §86 forbids map pins
 * implying offices where none are verified. No market currently
 * permits a `LocalBusiness` entity — verified when the market registry
 * was built — so this section renders no address, no pin, and no
 * office language at all.
 *
 * The heading default is therefore "Where we work", and callers should
 * keep any override in service-area terms.
 *
 * ---------------------------------------------------------------------------
 * GATED MARKETS DISAPPEAR
 * ---------------------------------------------------------------------------
 * Markets are sourced from approved `market` pages and filtered to
 * indexable ones (04 §4), so Las Vegas is absent until PENDING-012
 * resolves — the same rule the header and footer follow. It returns
 * automatically once doc 04 promotes those records.
 */
export interface MarketCoverageProps {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
}

export function MarketCoverage({
  id = 'markets',
  eyebrow,
  title = 'Where we work',
  intro,
}: MarketCoverageProps) {
  const marketPageIds = pagesOfType('market').map((page) => page.id as PageId)
  const links = resolveLinkableOnly(marketPageIds)

  if (links.length === 0) return null

  return (
    <Section density="standard" labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <ul className="mt-8 border-t border-border">
        {links.map((link) => (
          <li key={link.pageId} className="border-b border-border">
            <Link
              href={link.href}
              className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-surface-muted"
            >
              <span className="text-h3 font-medium tracking-tight text-foreground">
                {link.label}
              </span>
              <span
                aria-hidden="true"
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
