import Image from 'next/image'
import { Section, CardGrid, LinkCard, type SectionDensity } from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { marketImages } from '@/data/business/card-images'
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
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  /**
   * Extra classes for this section's own `<Section>`.
   *
   * Used by a composing template to add a boundary between this section
   * and the next, matching the divider TrustBar carries
   * (`border-b border-border`). Optional and additive: a caller that
   * passes nothing renders exactly as before.
   */
  className?: string
}

/**
 * Whether `MarketCoverage` renders anything.
 *
 * The market list is derived from the page registry, not from props,
 * so this section can empty out through a status change no template
 * passes or sees.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function marketCoverageRenders(): boolean {
  return (
    resolveLinkableOnly(
      pagesOfType('market').map((page) => page.id as PageId),
    ).length > 0
  )
}

export function MarketCoverage({
  density = 'standard',
  id = 'markets',
  eyebrow,
  title = 'Where we work',
  intro,
  className,
}: MarketCoverageProps) {
  const marketPageIds = pagesOfType('market').map((page) => page.id as PageId)
  const links = resolveLinkableOnly(marketPageIds)

  if (links.length === 0) return null

  return (
    <Section density={density} labelledBy={id} className={className}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      {/*
        Three cards across rather than the previous full-width row list
        (owner-directed, 2026-09-03). `CardGrid` + `LinkCard` are the
        primitives `RoutingCards` already uses, so this matches the card
        treatment established elsewhere instead of hand-rolled markup.
        Three markets into three columns divides evenly, so CardGrid's
        orphaned-row warning does not apply.

        Each card stays horizontal INTERNALLY — label left, arrow right,
        as the row list read. Only the arrangement of the three cards
        relative to each other changed.

        `link.label` already ends in "Sewer Services" (it renders as
        "St. Louis, MO Sewer Services"), so nothing is appended here —
        doing so would print the phrase twice. The label comes from the
        page registry, which also drives navigation, breadcrumbs and the
        market pages' own titles, so it is read, never rewritten.

        No map, pin, or address: 18 §86-87 — these are service markets,
        not branches, and a name plus an arrow implies no office.
      */}
      <CardGrid columns={3} itemCount={links.length} className="mt-10">
        {links.map((link) => {
          // Artwork is optional and currently absent for every market.
          // A card with one grows to carry a 7:4 crop above the label
          // row; a card without one keeps exactly its current compact
          // shape, with no crop container rendered at all (18 §40-42).
          const image = marketImages[link.pageId]

          return (
            <LinkCard
              key={link.pageId}
              href={link.href}
              actionLabel={link.label}
              padded={image === undefined}
              className={cn('group', image !== undefined && 'overflow-hidden')}
            >
              {image !== undefined && (
                <span className="relative block aspect-[7/4] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </span>
              )}
              <span
                className={cn(
                  'flex items-center justify-between gap-4',
                  image !== undefined && 'p-6',
                )}
              >
                <span className="text-h3 font-medium tracking-tight text-foreground">
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </LinkCard>
          )
        })}
      </CardGrid>
    </Section>
  )
}
