import Image from 'next/image'
import { Section, LinkCard, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import type { CardImage, PageId } from '@/types'

/**
 * Related-content module.
 *
 * Governed by docs/16-internal-linking-strategy.md §25;
 * docs/18-design-system.md §129, §120;
 * docs/04-master-page-build-list.md §4;
 * CLAUDE.md §37.
 *
 * ===========================================================================
 * RELATIONSHIPS ARE PASSED IN, NEVER DISCOVERED
 * ===========================================================================
 * This component takes explicit page ids. It does not query the service
 * registry for "services in the same family" or the matrix for
 * "relationships involving this location".
 *
 * CLAUDE.md §37 draws the line precisely — a good source is "approved
 * route data + explicit related IDs"; a bad one is "all matrix
 * combinations". 18 §129: "The design system should render approved
 * relationships rather than inventing them." 16 §25 forbids surfacing a
 * URL merely because it could exist.
 *
 * Gated pages are filtered out rather than failing the build (04 §4),
 * so a related module on a live page cannot leak a pending Las Vegas
 * route into an indexable link list. If every relation is gated the
 * section renders nothing at all, per 18 §120 — "omit the section
 * entirely" beats an empty shell.
 *
 * ===========================================================================
 * HORIZONTAL CARDS SINCE THE COMPOSITION PORT
 * ===========================================================================
 * This was a plain vertical list of underlined links. The ported
 * composition specifies a related-services strip of cards, and this is
 * the LAST card section on most pages — so it must not repeat the shape
 * of the first (18 §5.6: "vary composition pattern and density between
 * adjacent sections").
 *
 * Hence horizontal: a leading rule with the title and description
 * beside it, at a wider aspect than the problem and inclusions grids
 * above. Same Appendix A family, visibly different shape.
 *
 * `descriptions` is optional. Where a page supplies none, cards render
 * title-only rather than inventing a summary — 18 §51 already makes the
 * page name the dominant element.
 */
/**
 * Artwork for one related-content card.
 *
 * Alias of the shared `CardImage` (types/media.ts), which three card
 * sections now read. Kept as a name because it is exported and reads
 * better at this call site; it is not a second, near-identical type.
 */
export type RelatedLinkImage = CardImage

export interface RelatedLinksProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  title: string
  intro?: string
  pageIds: readonly PageId[]
  /**
   * Optional one-line summaries, keyed by page id.
   *
   * Absent entries render title-only. Never generate a summary to fill
   * the gap — 14 §21's substitution tests exist precisely to stop
   * token-swapped filler, and 18 §51 already makes the name dominant.
   */
  descriptions?: Readonly<Partial<Record<PageId, string>>>
  /**
   * Optional artwork, keyed by page id. Only read by `variant="image"`.
   *
   * Absent entries render the card text-only at the larger size. A card
   * with no image must NOT fall back to a grey box, a gradient, or a
   * stock photograph — an empty crop is a placeholder in effect, which
   * is what 18 §40-42 and this project's photography gate rule out.
   */
  images?: Readonly<Partial<Record<PageId, RelatedLinkImage>>>
  /**
   * Card treatment.
   *
   * `horizontal` is the leading-rule row used on every page today and
   * stays the default — ten templates render this section, and its
   * shape is deliberately different from the card grids above it
   * (18 §11's variation rule). Changing it globally would remove that
   * contrast everywhere.
   *
   * `image` is the larger card with a 7:4 artwork slot, opted into by
   * HomePageTemplate only (owner-directed, 2026-09-03).
   */
  variant?: 'horizontal' | 'image'
  /** `muted` sets this apart from the body content above it. */
  surface?: 'default' | 'muted'
  /**
   * Whether this module is an indexable link module (04 §4).
   *
   * Default true, which drops gated pages. Pass false when the module
   * is rendered ON a page that is itself not indexed — a gated market
   * hub linking to its gated locations. Those links reach no crawler
   * through an indexed path, and suppressing them would orphan the
   * cluster from its own hub and make it un-QA-able (DEC-063 requires
   * these pages be QA'd).
   */
  indexableContext?: boolean
}

/**
 * Column count by link count.
 *
 * Anything larger falls back to three and wraps; at four or more the
 * final row reads as a continuation rather than a hole.
 */
const COLUMNS: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2',
}

/**
 * Whether `RelatedLinks` renders anything.
 *
 * Ids that resolve to no linkable page leave nothing to link to,
 * and the module omits itself rather than rendering an empty aside
 * (18 §120). Gated and retired pages drop out here, so this is a
 * function of page STATUS, not of whether the ids were supplied.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function relatedLinksRenders(
  pageIds: readonly PageId[] | undefined,
  options: { indexableContext?: boolean } = {},
): boolean {
  if (pageIds === undefined) return false
  return (
    resolveLinkableOnly(pageIds, {
      indexableContext: options.indexableContext ?? true,
    }).length > 0
  )
}

export function RelatedLinks({
  density = 'dense',
  id = 'related',
  title,
  intro,
  pageIds,
  descriptions,
  images,
  surface = 'muted',
  indexableContext = true,
  variant = 'horizontal',
}: RelatedLinksProps) {
  const links = resolveLinkableOnly(pageIds, { indexableContext })

  if (links.length === 0) return null

  if (variant === 'image') {
    return (
      <Section density={density} surface={surface} as="aside" labelledBy={id}>
        <SectionHeading id={id} title={title} level="h2" intro={intro} />

        {/*
          Larger cards: `gap-8` over the horizontal variant's `gap-4`,
          `text-h4` over `text-base`, and the standard card padding
          restored (the horizontal variant strips it to `p-0 pl-4`).

          The 7:4 crop applies to the artwork only, never to the card —
          the text block sizes to its content. When a link has no image
          the crop container is not rendered at all, so an image-less
          card is simply a bigger text card rather than a card with a
          hole in it.
        */}
        <ul
          className={`mt-8 grid grid-cols-1 gap-8 ${COLUMNS[links.length] ?? 'md:grid-cols-3'}`}
        >
          {links.map((link) => {
            const description = descriptions?.[link.pageId]
            const image = images?.[link.pageId]

            return (
              <li key={link.pageId}>
                <LinkCard
                  href={link.href}
                  actionLabel={link.label}
                  padded={false}
                  className="flex h-full flex-col overflow-hidden"
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
                  <span className="flex flex-1 flex-col gap-2 p-6">
                    <span className="text-h4 font-medium tracking-tight text-foreground">
                      {link.label}
                    </span>
                    {description !== undefined && (
                      <span className="text-sm leading-6 text-muted-foreground">
                        {description}
                      </span>
                    )}
                  </span>
                </LinkCard>
              </li>
            )
          })}
        </ul>
      </Section>
    )
  }

  return (
    <Section density={density} surface={surface} as="aside" labelledBy={id}>
      <SectionHeading id={id} title={title} level="h2" intro={intro} />

      {/*
        Horizontal cards. Not `CardGrid`: related counts vary by page,
        so the column count follows the actual number of links rather
        than assuming three.

        Half the pages in this project pass two related ids and half
        pass three. A fixed three-column grid orphaned a cell on every
        two-item page — the same class of bug as the hardcoded
        four-column process band, and exactly what 18 §5.6's "do not
        force an item count into a grid it doesn't divide evenly into"
        prohibits.
      */}
      <ul className={`mt-6 grid grid-cols-1 gap-4 ${COLUMNS[links.length] ?? 'md:grid-cols-3'}`}>
        {links.map((link) => {
          const description = descriptions?.[link.pageId]

          return (
            <li key={link.pageId}>
              <LinkCard
                href={link.href}
                actionLabel={link.label}
                // Leading rule instead of a full border, and a row
                // layout: the horizontal treatment described above.
                //
                // `padded={false}` rather than a `p-0` in the class
                // list. `cn()` is a plain join, so `p-0` and LinkCard's
                // own `p-6` both shipped and `.p-6` won on source
                // order, leaving 24px on the top, right and bottom that
                // this treatment never wanted. `pl-4` stays: the left
                // inset is the intended part.
                padded={false}
                className="flex h-full gap-4 border-0 border-l-2 border-l-border pl-4 hover:bg-transparent hover:border-l-foreground/40"
              >
                <span className="flex flex-col">
                  <span className="text-base font-medium text-foreground">
                    {link.label}
                  </span>
                  {description !== undefined && (
                    <span className="mt-1 text-sm leading-6 text-muted-foreground">
                      {description}
                    </span>
                  )}
                </span>
              </LinkCard>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
