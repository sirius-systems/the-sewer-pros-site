import Image from 'next/image'
import Link from 'next/link'
import {
  Section,
  LinkCard,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { CardImage, PageId } from '@/types'

/**
 * Scannable service index.
 *
 * Governed by docs/18-design-system.md §5.6, §50, §51, §155 and
 * Appendix A ("Service/feature index").
 *
 * ===========================================================================
 * WHY AN INDEX RATHER THAN A CARD GRID
 * ===========================================================================
 * Appendix A: "a scannable list (numbered, iconed, or plain) instead of
 * a grid. Use when item count doesn't divide evenly or items vary in
 * length — the default for Services when there are 4, 5, or 7 items
 * rather than a clean 3 or 6."
 *
 * This project has TEN approved service pages (04 §5). Ten in a
 * three-column grid renders 3+3+3+1 — the orphaned row 18 §5.6
 * prohibits by name. A four-column grid would give 4+4+2. There is no
 * clean grid for ten, so the index is not a stylistic preference here;
 * it is the pattern the content shape calls for.
 *
 * Each row is one link across the full row width, which also gives a
 * large target (18 §48) and one announced action per service rather
 * than a card plus a nested "view service" link.
 *
 * 18 §51: "The service name should remain the dominant element."
 * Descriptions are optional and secondary.
 */
export interface ServiceIndexItem {
  pageId: PageId
  /** Optional one-line summary. Keep it factual and specific. */
  description?: string
  /**
   * Optional card artwork, rendered as the card's BACKGROUND.
   *
   * `mosaic` only. The `index` variant is a row list with no card to
   * put a background on, and ignores this.
   *
   * ⚠ A card with artwork switches to white text over a scrim. See
   * the render for the measurements that fix the scrim's value.
   */
  image?: CardImage
}

export interface ServiceIndexProps {
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
  items: readonly ServiceIndexItem[]
  /** Numbered rows suit a sequence; plain rows suit a set. `index` only. */
  numbered?: boolean
  /**
   * Layout shape — Appendix A.
   *
   *   index   a scannable list. The default, and the right choice when
   *           the item count does not divide evenly or items vary in
   *           length. See the note above on ten approved services.
   *   mosaic  "a deliberately uneven grid where the flagship item
   *           (Sewer Camera Inspection) gets more visual space than
   *           supporting services" — Appendix A names both the pattern
   *           and that exact flagship.
   *
   * The home page uses `mosaic` so it does not repeat the shape of the
   * even `RoutingCards` grid directly above it. That satisfies 18 §5.6's
   * "vary composition pattern between adjacent sections", and it is
   * also the reference style's own requirement that intent-routing and
   * the services catalog stay visually distinct.
   *
   * `mosaic` is deliberately not built on `CardGrid`: its even-division
   * warning describes a failure mode that does not apply to a layout
   * whose whole point is being uneven.
   */
  variant?: 'index' | 'mosaic'
  /**
   * The item given extra space in `mosaic`. Defaults to the first.
   *
   * Pass explicitly rather than relying on ordering when the flagship
   * is not first in the content file.
   */
  flagshipPageId?: PageId
  /**
   * Surface for the index band.
   *
   * Defaults to `default` so existing pages are unchanged. A composing
   * template sets `muted` where this index would otherwise sit in an
   * unbroken run of `default` sections — the same reason `density`
   * is overridable here: only the template knows the full sequence
   * (18 §108, §155).
   */
  surface?: SectionSurface
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
 * Whether `ServiceIndex` renders anything.
 *
 * Items whose pages are gated drop out, and an index with nothing
 * left to list omits itself rather than rendering an empty grid
 * (04 §4, 18 §120).
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function serviceIndexRenders(
  items: readonly ServiceIndexItem[] | undefined,
): boolean {
  if (items === undefined) return false
  return resolveLinkableOnly(items.map((item) => item.pageId)).length > 0
}

export function ServiceIndex({
  density = 'standard',
  id = 'services',
  eyebrow,
  title,
  intro,
  items,
  numbered = false,
  surface = 'default',
  variant = 'index',
  flagshipPageId,
  className,
}: ServiceIndexProps) {
  // Gated pages drop out rather than failing the build — a service
  // whose page is pending validation simply is not listed yet (04 §4).
  const links = resolveLinkableOnly(items.map((item) => item.pageId))
  const descriptions = new Map(
    items.map((item) => [item.pageId, item.description]),
  )
  // Parallel to `descriptions`: a card without artwork simply misses
  // from the map rather than carrying an undefined image around.
  const images = new Map(
    items
      .filter((item) => item.image !== undefined)
      .map((item) => [item.pageId, item.image as CardImage]),
  )

  if (links.length === 0) return null

  if (variant === 'mosaic') {
    const flagship = flagshipPageId ?? links[0]?.pageId

    return (
      <Section
        density={density}
        surface={surface}
        labelledBy={id}
        className={className}
      >
        <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const isFlagship = link.pageId === flagship
            const image = images.get(link.pageId)

            return (
              <li
                key={link.pageId}
                className={cn(isFlagship && 'sm:col-span-2 lg:row-span-2')}
              >
                {/*
                  One anchor wraps the card, so the target is large
                  (18 §48) and assistive technology announces one action
                  rather than a card plus a nested link. Nothing inside
                  is a link, so unlike RoutingCards and MarketCoverage
                  this card can stay a LinkCard.
                */}
                <LinkCard
                  href={link.href}
                  actionLabel={link.label}
                  padded={image === undefined}
                  className={cn(
                    'group relative flex h-full flex-col justify-end overflow-hidden',
                    image !== undefined && 'min-h-[15rem]',
                  )}
                >
                  {image !== undefined && (
                    <>
                      {/*
                        ⚠ `alt=""` IS CORRECT, NOT AN OMISSION.

                        The card is a link whose accessible name is
                        already `actionLabel` (the service name), and
                        this frame sits behind that name as decoration.
                        Describing it too would announce the service
                        twice. `CardImage.alt` still carries a real
                        description, so the set stays readable in
                        source and a future non-decorative use has it.
                      */}
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="absolute inset-0 object-cover"
                      />

                      {/*
                        ⚠⚠ THE SCRIM IS LOAD-BEARING. DO NOT LIGHTEN IT
                        WITHOUT REMEASURING.

                        White card text sits on these photographs. On
                        the BARE images, white at the 95th percentile
                        of luminance runs 1.64:1 to 3.48:1 across the
                        nine — every one fails 4.5:1.

                        At black/55% the worst single pixel across all
                        nine measures 4.76:1 against a 4.5:1 floor, and
                        medians stay above 12. The value is also
                        checked against pure white, the worst any
                        replacement frame could present, where it gives
                        the same 4.76:1.

                        ⚠ 0.26 OF MARGIN. Black/50% gives 4.39:1 and
                        fails. Do not lighten this further, and do not
                        dim the text with an opacity, without redoing
                        the measurement.

                        ⚠ THE SCRIM DOES NOT LIGHTEN ON HOVER, AND
                        THAT IS THE FIX FOR A BUG. An earlier version
                        lifted it to black/50% on hover, which would
                        have dropped the card's own text under AA for
                        as long as the pointer sat on it. LinkCard's
                        border hover carries the feedback instead.

                        Same value as the homepage hero overlay, so the
                        two image treatments on this page agree.
                      */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/55"
                      />
                    </>
                  )}

                  {/*
                    `relative` lifts the text above the two absolute
                    layers without a z-index: a positioned later
                    sibling paints over positioned earlier ones.
                  */}
                  <div className={cn('relative', image !== undefined && 'p-6')}>
                    <h3
                      className={cn(
                        'font-medium tracking-tight text-balance',
                        isFlagship ? 'text-h2' : 'text-h4',
                        image !== undefined ? 'text-white' : 'text-foreground',
                      )}
                    >
                      {link.label}
                    </h3>
                    {descriptions.get(link.pageId) !== undefined && (
                      <p
                        className={cn(
                          'mt-2 max-w-prose text-sm leading-6',
                          /*
                            Opaque white, not white at an opacity. The
                            5.74:1 above is measured on opaque white and
                            there is no margin to spend dimming it.
                          */
                          image !== undefined
                            ? 'text-white'
                            : 'text-muted-foreground',
                        )}
                      >
                        {descriptions.get(link.pageId)}
                      </p>
                    )}
                  </div>
                </LinkCard>
              </li>
            )
          })}
        </ul>
      </Section>
    )
  }

  return (
    <Section
        density={density}
        surface={surface}
        labelledBy={id}
        className={className}
      >
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <ul className="mt-10 border-t border-border">
        {links.map((link, index) => (
          <li key={link.pageId} className="border-b border-border">
            <Link
              href={link.href}
              className="group flex items-baseline gap-4 py-5 transition-colors hover:bg-surface-muted sm:gap-8"
            >
              {numbered && (
                <span
                  aria-hidden="true"
                  className="text-caption tabular-nums text-muted-foreground"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}

              <span className="flex-1">
                <span className="text-h3 font-medium tracking-tight text-foreground">
                  {link.label}
                </span>
                {descriptions.get(link.pageId) !== undefined && (
                  <span className="mt-1 block max-w-prose text-sm leading-6 text-muted-foreground">
                    {descriptions.get(link.pageId)}
                  </span>
                )}
              </span>

              {/* Decorative — the link text already names the destination. */}
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
