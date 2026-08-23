import {
  Section,
  LinkCard,
  CardGrid,
  type SectionDensity,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

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
  /** One line on what the visitor gets by going here. */
  description: string
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
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  items: readonly RoutingCardItem[]
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
  id = 'how-we-can-help',
  eyebrow,
  title,
  intro,
  items,
}: RoutingCardsProps) {
  const links = resolveLinkableOnly(items.map((item) => item.pageId))
  const descriptions = new Map(
    items.map((item) => [item.pageId, item.description]),
  )

  // 18 §120 — omit entirely rather than render an empty shell.
  if (links.length === 0) return null

  const columns = links.length % 3 === 0 ? 3 : 2

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <CardGrid columns={columns} itemCount={links.length} className="mt-10">
        {links.map((link) => (
          // One anchor wraps the whole card, so the target is large
          // (18 §48) and assistive technology announces one action
          // rather than a card plus a nested "learn more" link.
          <LinkCard key={link.pageId} href={link.href} actionLabel={link.label}>
            <h3 className="text-h4 font-medium tracking-tight text-foreground">
              {link.label}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {descriptions.get(link.pageId)}
            </p>
          </LinkCard>
        ))}
      </CardGrid>
    </Section>
  )
}
