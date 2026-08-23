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
import type { PageId } from '@/types'

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
}: ServiceIndexProps) {
  // Gated pages drop out rather than failing the build — a service
  // whose page is pending validation simply is not listed yet (04 §4).
  const links = resolveLinkableOnly(items.map((item) => item.pageId))
  const descriptions = new Map(
    items.map((item) => [item.pageId, item.description]),
  )

  if (links.length === 0) return null

  if (variant === 'mosaic') {
    const flagship = flagshipPageId ?? links[0]?.pageId

    return (
      <Section density={density} surface={surface} labelledBy={id}>
        <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const isFlagship = link.pageId === flagship

            return (
              <li
                key={link.pageId}
                className={cn(isFlagship && 'sm:col-span-2 lg:row-span-2')}
              >
                {/*
                  One anchor wraps the card, so the target is large
                  (18 §48) and assistive technology announces one action
                  rather than a card plus a nested link.
                */}
                <LinkCard
                  href={link.href}
                  actionLabel={link.label}
                  className={cn(
                    'flex h-full flex-col',
                    isFlagship && 'justify-end',
                  )}
                >
                  <h3
                    className={cn(
                      'font-medium tracking-tight text-balance text-foreground',
                      isFlagship ? 'text-h2' : 'text-h4',
                    )}
                  >
                    {link.label}
                  </h3>
                  {descriptions.get(link.pageId) !== undefined && (
                    <p className="mt-2 max-w-prose text-sm leading-6 text-muted-foreground">
                      {descriptions.get(link.pageId)}
                    </p>
                  )}
                </LinkCard>
              </li>
            )
          })}
        </ul>
      </Section>
    )
  }

  return (
    <Section density={density} surface={surface} labelledBy={id}>
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
