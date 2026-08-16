import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Card shell.
 *
 * Governed by docs/18-design-system.md §5.6, §23-25, §50, §155 and
 * Appendix A.
 *
 * ===========================================================================
 * ⚠ READ §5.6 BEFORE REACHING FOR THIS
 * ===========================================================================
 * "Cards are an organizational tool, not the default layout. A page
 * built entirely from card grids is the single strongest visual signal
 * of a templated or AI-generated site, regardless of how restrained the
 * individual card styling is."
 *
 * Before putting a section in a card grid, check whether one of
 * Appendix A's other patterns fits the content's actual shape:
 *
 *   editorial split   one clear idea beside an image
 *   editorial stack   plain text, no card chrome at all
 *   service index     a scannable list — the right choice when the
 *                     item count does not divide evenly
 *   service mosaic    uneven grid giving the flagship item more space
 *   image break       full-width image between dense sections
 *
 * 18 §155 names two card failures explicitly: using a card grid as the
 * default for every list-like section, and forcing an item count into a
 * grid it does not divide into evenly. `CardGrid` below refuses to
 * silently do the second.
 *
 * Styling follows §23 (restrained radius, no pills), §24 (subtle
 * borders) and §25 (no dramatic floating cards — border, not shadow).
 */
export interface CardProps {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-md border border-border bg-surface p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

export interface LinkCardProps extends CardProps {
  href: string
  /**
   * Accessible name for the card's action.
   *
   * 18 §47 requires descriptive labels — "Learn more" repeated across a
   * grid gives screen-reader users a list of identical links.
   */
  actionLabel: string
}

/**
 * A card whose whole surface is a link.
 *
 * One anchor wraps the card rather than a nested "read more" link, so
 * the target is large (18 §48) and assistive technology announces one
 * action instead of two.
 */
export function LinkCard({
  href,
  actionLabel,
  className,
  children,
}: LinkCardProps) {
  return (
    <Link
      href={href}
      aria-label={actionLabel}
      className={cn(
        'block rounded-md border border-border bg-surface p-6',
        'transition-colors hover:border-foreground/30 hover:bg-surface-muted',
        className,
      )}
    >
      {children}
    </Link>
  )
}

/* ==========================================================================
   Card grid — 18 §5.6, §99, §155
   ========================================================================== */

export interface CardGridProps {
  /** Desktop column count. Mobile is always 1, tablet 2 (18 §99). */
  columns: 2 | 3 | 4
  /**
   * Confirms the item count divides evenly into `columns`.
   *
   * 18 §5.6 forbids forcing an item count into a grid it does not
   * divide into — five services in a three-column grid leaves an
   * orphaned row. Passing the count makes the check possible; a
   * mismatch warns at build time and names the alternatives.
   */
  itemCount: number
  className?: string
  children: ReactNode
}

const COLUMNS: Record<2 | 3 | 4, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

export function CardGrid({
  columns,
  itemCount,
  className,
  children,
}: CardGridProps) {
  if (itemCount % columns !== 0) {
    // A warning rather than an error: an orphaned row is a design
    // problem, not a broken build, and 18 Appendix B asks for findings
    // "as fixes to make, not a score".
    console.warn(
      `[CardGrid] ${itemCount} items in a ${columns}-column grid leaves an ` +
        `orphaned row of ${itemCount % columns}. 18 §5.6 calls for a scannable ` +
        `index, an uneven mosaic giving the flagship item more space, or a ` +
        `different pattern entirely (Appendix A).`,
    )
  }

  return (
    <div className={cn('grid grid-cols-1 gap-6', COLUMNS[columns], className)}>
      {children}
    </div>
  )
}
