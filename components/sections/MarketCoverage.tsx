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
 * ⚠ THE CARD BACKGROUNDS ADDED ON 2026-09-04 ARE MAPS, AND THAT IS
 * DELIBERATELY NOT A CONTRADICTION OF THE ABOVE. 18 §50 permits a map
 * that represents "Areas We Serve" and forbids fake office pins; 18
 * §70 lists "office map pins", not maps, among the visuals that imply
 * unverified facts. The three frames are metro-scale street maps with
 * no marker, no address and no business name on them, so they show
 * reach rather than a place the business occupies. A replacement map
 * carrying a pin would break this section's whole premise — see
 * `marketImages` for that warning and for the Google attribution one.
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

        No pin and no address: 18 §86-87 — these are service markets,
        not branches. The map behind the card shows the area served,
        which 18 §50 allows; a name plus an arrow over it implies no
        office.
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
          /*
            Artwork is optional per market.

            A card with one becomes an image card: the frame fills the
            card as its BACKGROUND, the content sits at the bottom in
            white over a scrim, and the card grows tall enough for that
            composition to read (owner direction, 2026-09-04). A card
            without one keeps exactly its previous compact shape, with
            no image layer rendered at all — no grey box, no gradient
            standing in for a missing picture (18 §40-42).
          */
          const image = marketImages[link.pageId]

          return (
            <Card
              key={link.pageId}
              padded={image === undefined}
              className={cn(
                image !== undefined &&
                  /*
                    ⚠ THE HEIGHT IS ON THE CARD, NOT ON A CROP BOX.

                    The image is a background here, so there is no
                    aspect-ratio container to size. `min-h` rather than
                    `h`: the location list is registry-driven and its
                    length differs per market, so a fixed height would
                    clip St. Louis or leave Las Vegas hollow. Cards in a
                    grid row stretch to the tallest anyway.
                  */
                  'relative flex min-h-[20.8rem] flex-col justify-end overflow-hidden',
              )}
            >
              {image !== undefined && (
                <>
                  {/*
                    ⚠ `alt=""` IS CORRECT, NOT AN OMISSION.

                    Unlike the previous crop — a picture above the
                    label — this frame sits behind text as decoration,
                    and the card's own heading link already names the
                    market. Announcing "Map of the Las Vegas valley"
                    on top of that says the place twice.
                    `CardImage.alt` still carries a real description so
                    the set stays readable in source.
                  */}
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="absolute inset-0 object-cover"
                  />

                  {/*
                    ⚠⚠ THE SCRIM IS LOAD-BEARING. DO NOT LIGHTEN IT.

                    Every piece of copy in this card turns white when
                    there is an image behind it, including the location
                    links at `text-sm` and the closing link at
                    `text-caption` — both small text, both needing
                    4.5:1.

                    Black/55% is the value already measured for the
                    homepage hero and the What we do cards, and it was
                    measured against PURE WHITE rather than against the
                    files of the day: the worst background any frame
                    could ever present still gives 4.76:1. That is what
                    makes it safe to reuse for these three maps without
                    remeasuring, and it is why swapping in a brighter
                    map later cannot break it.

                    ⚠ 0.26 OF MARGIN. Black/50% gives 4.39:1 and fails.
                    Do not lighten this, and do not dim the text with an
                    opacity, without redoing the measurement.

                    ⚠ IT DOES NOT LIGHTEN ON HOVER. Hover feedback lives
                    on the individual links; changing the scrim under a
                    pointer would drop the whole card under AA for as
                    long as it sat there.
                  */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/55"
                  />
                </>
              )}

              {/*
                `relative` lifts the content above the two absolute
                layers without a z-index: a positioned later sibling
                paints over positioned earlier ones.
              */}
              <div className={cn(image !== undefined && 'relative p-6')}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-4"
                >
                  <span
                    className={cn(
                      'text-h3 font-medium tracking-tight',
                      image !== undefined ? 'text-white' : 'text-foreground',
                    )}
                  >
                    {heading}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'shrink-0 transition-transform group-hover:translate-x-0.5',
                      image !== undefined
                        ? 'text-white'
                        : 'text-muted-foreground',
                    )}
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
                    <ul
                      className={cn(
                        'mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm',
                        /*
                          Opaque white over an image, not a muted tone
                          and not white at an opacity: the 4.76:1 above
                          is measured on opaque white and there is no
                          margin to spend dimming it. Hierarchy against
                          the heading comes from size, as it does on the
                          What we do cards.
                        */
                        image !== undefined
                          ? 'text-white'
                          : 'text-muted-foreground',
                      )}
                    >
                      {locations.map((location, i) => (
                        <li
                          key={location.pageId}
                          className="flex items-center gap-2"
                        >
                          {i > 0 && <span aria-hidden="true">·</span>}
                          <Link
                            href={location.href}
                            className={cn(
                              'underline-offset-4 hover:underline',
                              // Hover cannot brighten text that is
                              // already white, so the underline alone
                              // carries the feedback there.
                              image === undefined && 'hover:text-foreground',
                            )}
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
                      className={cn(
                        'mt-4 inline-block text-caption underline underline-offset-4',
                        /*
                          `text-accent-secondary` is tuned for the light
                          card surface and has nothing like the margin
                          to survive on an image. White is the only tone
                          the 4.76:1 measurement covers.
                        */
                        image !== undefined
                          ? 'text-white'
                          : 'text-accent-secondary hover:text-foreground',
                      )}
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
