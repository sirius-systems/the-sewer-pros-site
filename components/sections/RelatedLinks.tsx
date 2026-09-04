import type { SVGProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section, LinkCard, ButtonLink, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import {
  resolveApprovedLink,
  resolveLinkableOnly,
} from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { CardImage, PageId, RelatedMeta } from '@/types'

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

/* ==========================================================================
   Card marks — `featured` only. 18 §27, CLAUDE.md §56
   ========================================================================== */

/**
 * Hand-drawn rather than imported.
 *
 * `package.json` has no icon library and CLAUDE.md §56 warns against
 * adding one, so these follow the inline convention `TrustBar`,
 * `ProcessSteps`, `Differentiator`, `AuthorityBand`, `ConfidenceModule`
 * and `RoutingCards` already use. Each is `aria-hidden` beside a
 * visible heading that names the card.
 */
type IconProps = SVGProps<SVGSVGElement>

function baseIconProps(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

/** A clipboard with ruled lines — what a report contains. */
function ClipboardListIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M9 4H7a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2" />
      <rect x="9" y="2.5" width="6" height="3" rx="1" />
      <path d="M9 10h6M9 13.5h6M9 17h4" />
    </svg>
  )
}

/** A file with a play frame — reading the footage. */
function FileVideoIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="m11 12.5 3.5 2-3.5 2v-4Z" />
    </svg>
  )
}

/** Balance scales — one method weighed against another. */
function ScaleIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 4v16M8 20h8M5 7h14M12 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
      <path d="M5 7 2.5 13a2.75 2.75 0 0 0 5 0Z" />
      <path d="M19 7l-2.5 6a2.75 2.75 0 0 0 5 0Z" />
    </svg>
  )
}

/**
 * Mark by name.
 *
 * A map rather than conditionals in the render, so a new category means
 * an entry here and the compiler names the omission.
 */
const RELATED_ICONS: Record<
  NonNullable<RelatedMeta[PageId]>['icon'],
  (props: IconProps) => React.JSX.Element
> = {
  'clipboard-list': ClipboardListIcon,
  'file-video': FileVideoIcon,
  scale: ScaleIcon,
}

/**
 * Accent tints for the supporting cards.
 *
 * ⚠ ALL THREE ARE EXISTING PALETTE TOKENS — `--accent-secondary`,
 * `--accent`, `--brand`. No fourth colour. The tile is that token mixed
 * 10% into white, the same derivation `RoutingCards`, `Differentiator`
 * and `AuthorityBand` use, so a palette change carries through rather
 * than stranding a hard-coded pastel.
 */
const ACCENT_TILE: Record<NonNullable<RelatedMeta[PageId]>['accent'], string> = {
  blue: 'bg-[color-mix(in_srgb,var(--color-accent-secondary)_10%,white)]',
  green: 'bg-[color-mix(in_srgb,var(--color-accent)_10%,white)]',
  navy: 'bg-[color-mix(in_srgb,var(--color-brand)_10%,white)]',
}

const ACCENT_MARK: Record<NonNullable<RelatedMeta[PageId]>['accent'], string> = {
  blue: 'text-accent-secondary',
  green: 'text-accent',
  navy: 'text-brand',
}

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
  variant?: 'horizontal' | 'image' | 'featured'
  /** `featured` only. Small line above the heading. */
  eyebrow?: string
  /**
   * `featured` only. Which of `pageIds` becomes the large navy card.
   *
   * ⚠ IT MUST BE ONE OF `pageIds`, AND THE COMPONENT CHECKS. A page id
   * that is not in the list, or a list shorter than three after gating,
   * falls back to `horizontal` rather than rendering a 7/5 split with a
   * hole in it. See the render.
   */
  featuredPageId?: PageId
  /** `featured` only. Category label, mark and accent, keyed by page id. */
  meta?: RelatedMeta
  /** `featured` only. Two or three short lines inside the featured card. */
  featuredPoints?: readonly string[]
  /** `featured` only. Destination for the heading row's closing link. */
  viewAllPageId?: PageId
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
  eyebrow,
  featuredPageId,
  meta,
  featuredPoints,
  viewAllPageId,
}: RelatedLinksProps) {
  const links = resolveLinkableOnly(pageIds, { indexableContext })

  if (links.length === 0) return null

  /*
    ⚠ THE FEATURED LAYOUT VALIDATES ITS OWN INPUTS AND STANDS DOWN.

    The 7/5 split needs a featured page plus at least two supporting
    ones. `featuredPageId` is authored content and `links` is filtered
    by page STATUS, so the two can disagree at any time without anyone
    editing this file: gate the featured resource and the split loses
    its left half; gate one supporting page and the right column is a
    single card in a five-column well.

    Rather than render either, it falls through to `horizontal` — the
    treatment every other page already uses, which handles any count.
    An asymmetric layout is a presentation choice; a broken one is a
    bug, and 18 §120's "omit rather than render an empty shell" is the
    same instinct applied one level up.
  */
  const featured =
    featuredPageId === undefined
      ? undefined
      : links.find((link) => link.pageId === featuredPageId)
  const supporting = links.filter((link) => link.pageId !== featuredPageId)
  const featuredUsable =
    variant === 'featured' && featured !== undefined && supporting.length >= 2

  if (variant === 'featured' && featuredUsable) {
    return renderFeatured()
  }

  function renderFeatured() {
    if (featured === undefined) return null
    const featuredMeta = meta?.[featured.pageId]
    const FeaturedIcon =
      featuredMeta === undefined ? undefined : RELATED_ICONS[featuredMeta.icon]
    const featuredDescription = descriptions?.[featured.pageId]

    return (
      <Section density={density} surface={surface} as="aside" labelledBy={id}>
        {/*
          The heading row puts the closing link beside the title rather
          than under the intro, so the section reads as a shelf with a
          way out of it.

          `viewAllPageId` is optional and resolved through the approved
          registry like everything else. A caller that passes none, or
          names a gated page, simply gets no link.
        */}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            {eyebrow !== undefined && (
              /*
                Green, and legible: this section sits on `muted`, a
                light surface, where `--accent` measures 5.3:1. That is
                the same eyebrow treatment the brief asked for on the
                two brand-surface sections, where it was not possible —
                here the ground is light and it simply works.
              */
              <p className="text-caption font-semibold tracking-wide text-accent uppercase">
                {eyebrow}
              </p>
            )}
            <h2
              id={id}
              className={cn(
                'text-h2 font-semibold tracking-tight text-balance',
                eyebrow !== undefined && 'mt-2',
              )}
            >
              {title}
            </h2>
          </div>

          {viewAllPageId !== undefined && (
            <Link
              href={resolveApprovedLink(viewAllPageId).href}
              className="text-sm font-medium text-accent-secondary underline underline-offset-4 hover:text-foreground"
            >
              View all resources
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          )}
        </div>

        {intro !== undefined && (
          <p className="mt-4 max-w-[var(--container-reading)] text-body-lg text-muted-foreground">
            {intro}
          </p>
        )}

        {/*
          7/5 on desktop, one column below `lg`. The featured card is
          first in source order, so the mobile stack is featured then
          supporting without a second ordering rule.
        */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/*
              ⚠ THE CARD IS `--brand` NAVY WITH A GREEN LEFT RULE. Both
              are existing tokens and the rule is on the left, matching
              `Differentiator`'s "ours" column, so the site has one
              way of marking "this is the one" rather than two.

              No border: `border-border` is a pale line tuned for light
              surfaces and reads as a stray scratch on navy.
            */}
            <div className="flex h-full min-h-[340px] flex-col rounded-lg border-l-4 border-accent bg-brand p-8 text-brand-foreground shadow-[0_12px_30px_rgba(7,31,51,0.12)] transition-shadow hover:shadow-[0_18px_40px_rgba(7,31,51,0.2)] sm:p-10">
              {FeaturedIcon !== undefined && (
                <FeaturedIcon className="h-12 w-12 shrink-0 text-accent" />
              )}

              {featuredMeta !== undefined && (
                <p className="mt-5 text-caption font-semibold tracking-wide uppercase opacity-80">
                  {featuredMeta.category}
                </p>
              )}

              <h3 className="mt-2 text-h3 font-semibold tracking-tight text-balance">
                {featured.label}
              </h3>

              {featuredDescription !== undefined && (
                <p className="mt-3 text-body-lg opacity-90">
                  {featuredDescription}
                </p>
              )}

              {featuredPoints !== undefined && featuredPoints.length > 0 && (
                /*
                  Hyphens rather than icons or disc markers: three
                  short lines inside an already-busy card, where a mark
                  per row would out-weigh the text it introduces.

                  A hyphen, not an en or em dash - house style, and the
                  marker is `aria-hidden` so a screen reader hears the
                  list structure rather than punctuation.
                */
                <ul className="mt-5 flex flex-col gap-1.5 text-sm">
                  {featuredPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden="true" className="opacity-60">
                        -
                      </span>
                      <span className="opacity-90">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto pt-8">
                {/*
                  ⚠ NO OUTLINE, ON OWNER DIRECTION (2026-09-04), AND
                  THE TRADE IS RECORDED RATHER THAN HIDDEN.

                  `--accent` on `--brand` measures 2.61:1. WCAG 1.4.11
                  asks 3:1 for the visual information needed to
                  identify a control, so the button's EDGE against this
                  navy card sits under that floor. The LABEL is
                  unaffected: white on green is 5.45:1 and reads
                  normally.

                  This shipped briefly with `ring-white/60`, which put
                  the boundary at 6.05:1. The owner asked for the
                  outline gone, so it is gone. Anyone reinstating a
                  boundary here should use that value; anyone changing
                  the card's background should re-measure, because a
                  lighter card would fix this on its own.
                */}
                <ButtonLink href={featured.href}>Read the guide</ButtonLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {supporting.map((link) => {
              const cardMeta = meta?.[link.pageId]
              const Icon =
                cardMeta === undefined ? undefined : RELATED_ICONS[cardMeta.icon]
              const description = descriptions?.[link.pageId]

              return (
                <div
                  key={link.pageId}
                  className="flex h-full flex-1 flex-col rounded-lg border border-border bg-surface p-7 shadow-[0_12px_30px_rgba(7,31,51,0.12)] transition-[box-shadow,border-color] hover:border-foreground/25 hover:shadow-[0_18px_40px_rgba(7,31,51,0.2)]"
                >
                  <div className="flex items-start gap-4">
                    {Icon !== undefined && cardMeta !== undefined && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          'flex h-11 w-11 shrink-0 items-center justify-center rounded-md',
                          ACCENT_TILE[cardMeta.accent],
                        )}
                      >
                        <Icon
                          className={cn('h-5 w-5', ACCENT_MARK[cardMeta.accent])}
                        />
                      </span>
                    )}

                    <div>
                      {cardMeta !== undefined && (
                        <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                          {cardMeta.category}
                        </p>
                      )}
                      <h3 className="mt-1 text-h4 font-medium tracking-tight text-balance text-foreground">
                        {link.label}
                      </h3>
                    </div>
                  </div>

                  {description !== undefined && (
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  )}

                  <div className="mt-auto pt-4">
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-secondary underline underline-offset-4 hover:text-foreground"
                    >
                      Read the guide
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>
    )
  }

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
