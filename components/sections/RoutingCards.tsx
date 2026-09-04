import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  Section,
  Card,
  CardGrid,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import {
  resolveApprovedLink,
  resolveLinkableOnly,
} from '@/lib/links/approved-link'
import type { CardImage, PageId } from '@/types'

/**
 * Intent-routing cards — "how we can help".
 *
 * Governed by docs/18-design-system.md §5.6, §47, §48;
 * docs/16-internal-linking-strategy.md §25;
 * docs/04-master-page-build-list.md §4; CLAUDE.md §16, §37, §48.
 *
 * The reference composition's homepage item 3: 3-4 cards routing a
 * visitor to the right next step, sitting immediately after the hero.
 *
 * ===========================================================================
 * ROUTING IS NOT THE SERVICES CATALOG
 * ===========================================================================
 * The reference style's own composition note requires this section and
 * the services grid below it to stay visually distinct — routing is
 * DECISION SUPPORT toward services, areas, audiences, and contact; the
 * services section is the catalog.
 *
 * Here that separation is structural rather than cosmetic: this section
 * is an EVEN card grid, and `ServiceIndex` below it renders as an
 * uneven MOSAIC. Two different Appendix A patterns, which also
 * satisfies 18 §5.6's "vary composition pattern between adjacent
 * sections".
 *
 * ---------------------------------------------------------------------------
 * DESTINATIONS ARE APPROVED PAGE IDS, NEVER HREFS
 * ---------------------------------------------------------------------------
 * Resolved through `resolveLinkableOnly`, so a gated route cannot
 * become a link on an indexable page (04 §4). CLAUDE.md §37: never
 * surface a URL solely because it could exist. 16 §25 says the same.
 */
export interface RoutingCardItem {
  pageId: PageId
  /**
   * What the visitor gets by going here.
   *
   * ⚠ `ReactNode`, not `string`. The homepage's descriptions name
   * specific pages and link each one inline (owner, 2026-09-04).
   */
  description: ReactNode
  /**
   * Closing link beneath the description.
   *
   * Approved page id only, resolved through the approved-link layer at
   * render — never an href (CLAUDE.md §37, 16 §25).
   *
   * Optional: a caller without one renders a card with no closing
   * link, which is what every non-homepage caller does today.
   */
  secondaryLink?: { pageId: PageId; label: string }
  /**
   * Optional approved artwork.
   *
   * Unset on all four homepage entries. A card grows to hold an image
   * only when it has one; see the render below.
   */
  image?: CardImage
}

export interface RoutingCardsProps {
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
  title: string
  intro?: string
  items: readonly RoutingCardItem[]
  /**
   * Full-bleed artwork behind the whole section (owner, 2026-09-04).
   *
   * ⚠ DIFFERENT THING FROM `RoutingCardItem.image`, which is a 7:4 crop
   * inside one card. This sits behind every card at once, so it is a
   * property of the section rather than of an item, and the two can be
   * used together.
   *
   * The cards are opaque, so the heading is the only thing that ends up
   * over the photograph. See `Section` for what the backdrop does and
   * for the scrim measurement.
   */
  backgroundImage?: CardImage
}

/**
 * Whether `RoutingCards` renders anything.
 *
 * Routing destinations whose pages are gated drop out, and a
 * routing grid with no destinations left omits itself (18 §120).
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function routingCardsRenders(
  items: readonly RoutingCardItem[] | undefined,
): boolean {
  if (items === undefined) return false
  return resolveLinkableOnly(items.map((item) => item.pageId)).length > 0
}

export function RoutingCards({
  density = 'standard',
  surface = 'default',
  id = 'how-we-can-help',
  eyebrow,
  title,
  intro,
  items,
  backgroundImage,
}: RoutingCardsProps) {
  const links = resolveLinkableOnly(items.map((item) => item.pageId))
  const descriptions = new Map(
    items.map((item) => [item.pageId, item.description]),
  )
  // Parallel to `descriptions`, and keyed the same way, so a card that
  // has no artwork simply misses from the map rather than carrying an
  // undefined image field around.
  const images = new Map(
    items
      .filter((item) => item.image !== undefined)
      .map((item) => [item.pageId, item.image as CardImage]),
  )
  // Same keying as `descriptions` and `images`: a card without a
  // closing link simply misses from the map.
  const secondaryLinks = new Map(
    items
      .filter((item) => item.secondaryLink !== undefined)
      .map((item) => [
        item.pageId,
        item.secondaryLink as NonNullable<RoutingCardItem['secondaryLink']>,
      ]),
  )

  // 18 §120 — omit entirely rather than render an empty shell.
  if (links.length === 0) return null

  const columns = links.length % 3 === 0 ? 3 : 2

  return (
    <Section
      density={density}
      surface={surface}
      backgroundImage={backgroundImage}
      labelledBy={id}
    >
      <SectionHeading
        id={id}
        title={title}
        eyebrow={eyebrow}
        intro={intro}
        /*
          The `<h2>` sets no colour of its own and inherits the white
          `Section` puts on the wrapper. The eyebrow and intro DO set
          `text-muted-foreground`, which is tuned for a light surface,
          so they are overridden here rather than left to fail quietly
          the first time a caller passes one alongside a background.
          `cn()` is a plain join, not tailwind-merge, so this has to be
          a descendant selector rather than a competing text class.

          Nothing else needs it: every card below is opaque and its
          contents never touch the photograph.
        */
        className={
          backgroundImage !== undefined
            ? '[&_p]:text-white [&_div]:text-white'
            : undefined
        }
      />

      <CardGrid columns={columns} itemCount={links.length} className="mt-10">
        {links.map((link) => {
          const image = images.get(link.pageId)

          const secondary = secondaryLinks.get(link.pageId)

          /*
            ⚠ `Card`, NOT `LinkCard`, AND THAT IS FORCED.

            `LinkCard` wraps the whole card in one anchor on purpose:
            18 §48 wants a large target and assistive technology
            announcing one action rather than a card plus a nested
            link. The descriptions now carry inline links to the pages
            they name, and those cannot live inside another anchor —
            nested anchors are invalid HTML and the inner links would
            not be reachable at all.

            So the heading is its own link, the description sits beside
            it as prose, and the closing link is a third sibling. Same
            trade `MarketCoverage` made for the same reason: one large
            target becomes several small ones, which is the cost of
            having links inside the card rather than an oversight.

            With artwork the card drops its own padding so the 7:4 crop
            can run edge to edge, and the text takes the padding back
            inside. Without artwork nothing changes (18 §40-42).
          */
          return (
            <Card
              key={link.pageId}
              padded={image === undefined}
              className={
                image !== undefined ? 'flex flex-col overflow-hidden' : undefined
              }
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
              <div className={image !== undefined ? 'block p-6' : undefined}>
                <h3 className="text-h4 font-medium tracking-tight">
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-accent-secondary"
                  >
                    {link.label}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
                  {descriptions.get(link.pageId)}
                </p>
                {secondary !== undefined && (
                  <Link
                    href={resolveApprovedLink(secondary.pageId).href}
                    className="mt-4 inline-block text-caption text-accent-secondary underline underline-offset-4 hover:text-foreground"
                  >
                    {secondary.label}
                    <span aria-hidden="true"> →</span>
                  </Link>
                )}
              </div>
            </Card>
          )
        })}
      </CardGrid>
    </Section>
  )
}
