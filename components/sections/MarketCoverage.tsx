import Image from 'next/image'
import Link from 'next/link'
import {
  Section,
  CardGrid,
  Card,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { marketImages } from '@/data/business/card-images'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import { getPage, pagesOfType } from '@/data/pages'
import { markets } from '@/data/markets/markets'
import type { MarketId, PageId } from '@/types'

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
 * ⚠ The per-market location list added on 2026-09-04 does not change
 * that. It lists PUBLISHED PAGES, not places the business occupies:
 * no address, no pin, no hours, no office word anywhere in it.
 *
 * ---------------------------------------------------------------------------
 * ⚠ WHERE THE LOCATION LIST COMES FROM, AND WHERE IT MUST NOT
 * ---------------------------------------------------------------------------
 * `data/locations/master-location-registry.json` holds 579 research
 * records at every stage — launch candidate, phase 2, manual review,
 * hold. Most have no page. Rendering from it would put unbuilt and
 * gated places on the homepage, which is the exact failure CLAUDE.md
 * §17 and §21 name: data scale is not index scale.
 *
 * So the list resolves the way the market cards themselves already do:
 * approved `location` page records, filtered by `marketId`, through
 * `resolveLinkableOnly`. An unwritten or gated location drops out on
 * its own — the same protection that kept Las Vegas off this section
 * until DEC-080 released it. No city name is written in this file.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THESE ARE `Card`s, NOT `LinkCard`s, AND THAT IS FORCED
 * ---------------------------------------------------------------------------
 * `LinkCard` wraps its whole surface in one anchor, deliberately: 18
 * §48 wants a large target and assistive technology announcing one
 * action per card. A list of per-location links cannot live inside
 * that — nested anchors are invalid HTML and the inner links would not
 * be reachable at all.
 *
 * So the card is a plain `Card` with an explicit heading link, the
 * location links beside it, and a closing link. That trades one large
 * target for several small ones, which is the cost of the list rather
 * than an oversight.
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
  /**
   * Overrides the section's natural surface.
   *
   * Surface is a SEQUENCE decision, like `density` above: only the
   * composing template knows what sits either side of this section,
   * and the owner directed clear separation between adjacent sections
   * (2026-09-04). A section cannot pick its own contrast against
   * neighbours it cannot see.
   */
  surface?: SectionSurface
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

/**
 * Approved `location` page records, read once at module scope.
 *
 * Hoisted out of the card loop so three markets do not each walk the
 * registry on every render.
 */
const locationPages = pagesOfType('location')

export function MarketCoverage({
  density = 'standard',
  surface = 'default',
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
    <Section
      density={density}
      surface={surface}
      labelledBy={id}
      className={className}
    >
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      {/*
        Three cards across rather than the previous full-width row list
        (owner-directed, 2026-09-03). `CardGrid` + `LinkCard` are the
        primitives `RoutingCards` already uses, so this matches the card
        treatment established elsewhere instead of hand-rolled markup.
        Three markets into three columns divides evenly, so CardGrid's
        orphaned-row warning does not apply.

        ⚠ THE HEADING IS COMPOSED FROM THE MARKET REGISTRY, NOT TAKEN
        FROM `link.label`, AND NOT BY RENAMING THE PAGE RECORD.

        `link.label` is the record's name, "St. Louis, MO Sewer
        Services". The owner asked these cards to read "Service
        Locations" instead (2026-09-04), but that same record drives
        navigation, breadcrumbs and the market page's own <title>, so
        it is not renamed for a homepage card.

        Composing `markets[marketId].name` with the suffix keeps the
        substitution local, and avoids stripping a known suffix off a
        string — which would quietly produce a wrong heading the day a
        record is renamed.

        No map, pin, or address: 18 §86-87 — these are service markets,
        not branches, and a name plus an arrow implies no office.
      */}
      <CardGrid columns={3} itemCount={links.length} className="mt-10">
        {links.map((link) => {
          const marketId = getPage(link.pageId)?.marketId as
            | MarketId
            | undefined

          const heading =
            marketId === undefined
              ? link.label
              : `${markets[marketId].name} Service Locations`

          /*
            Published location pages for this market.

            Empty is a real state rather than an error: a market whose
            location pages are all gated renders the card with no list
            and no closing link, not an empty <ul> or placeholder copy
            (18 §120). The card itself still renders — it links to the
            market hub regardless.
          */
          const locations =
            marketId === undefined
              ? []
              : resolveLinkableOnly(
                  locationPages
                    .filter((page) => page.marketId === marketId)
                    .map((page) => page.id as PageId),
                )
          // Artwork is optional and currently absent for every market.
          // A card with one grows to carry a 7:4 crop above the label
          // row; a card without one keeps exactly its current compact
          // shape, with no crop container rendered at all (18 §40-42).
          const image = marketImages[link.pageId]

          return (
            <Card
              key={link.pageId}
              padded={image === undefined}
              className={cn(image !== undefined && 'overflow-hidden')}
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

              <div className={cn(image !== undefined && 'p-6')}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-4"
                >
                  <span className="text-h3 font-medium tracking-tight text-foreground">
                    {heading}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>

                {locations.length > 0 && (
                  <>
                    {/*
                      The separator is aria-hidden punctuation between
                      links, so a screen reader hears a list of place
                      names rather than "Chesterfield middle dot
                      Ballwin".
                    */}
                    <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                      {locations.map((location, i) => (
                        <li
                          key={location.pageId}
                          className="flex items-center gap-2"
                        >
                          {i > 0 && <span aria-hidden="true">·</span>}
                          <Link
                            href={location.href}
                            className="underline-offset-4 hover:text-foreground hover:underline"
                          >
                            {location.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/*
                      The market hub, the same page the heading links
                      to. 05 §51 forbids linking through an invented
                      route, and no per-market location index exists.
                    */}
                    <Link
                      href={link.href}
                      className="mt-4 inline-block text-caption text-accent-secondary underline underline-offset-4 hover:text-foreground"
                    >
                      See all service locations
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </>
                )}
              </div>
            </Card>
          )
        })}
      </CardGrid>
    </Section>
  )
}
