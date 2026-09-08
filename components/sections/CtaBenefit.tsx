import type { ReactNode } from 'react'
import { SECTION_ICONS } from './section-icons'

/**
 * One line of a closing CTA's "what you can expect" list.
 *
 * ===========================================================================
 * ⚠ SHARED SINCE 2026-09-08, LOCAL TO SAN DIEGO BEFORE THAT
 * ===========================================================================
 * The original lived inside `content/pages/san-diego.tsx` with a note
 * saying it was four list items on one section of one page rather than
 * a pattern. Las Vegas now renders the same list on the same section of
 * its own hub, which makes it one, and the alternative was a second
 * copy of the same six lines in a second content file.
 *
 * ⚠ IT IS NOT A CARD AND MUST NOT BECOME ONE. The closing CTA already
 * carries a bordered form beside it and a ruled trust statement below;
 * a bordered list item there would be the third boxed thing in one
 * column (18 §5.6).
 *
 * ⚠ THE MARK IS DECORATIVE. `SECTION_ICONS` sets `aria-hidden`, and the
 * item's own text carries the meaning. An icon that repeated the text
 * would be announced twice.
 *
 * ⚠ NO COLOUR IS NAMED HERE, DELIBERATELY. These CTAs sit on a
 * photograph and `CtaSection` sets `text-white` on the body wrapper;
 * the icon inherits `currentColor` from it, so a page that ever renders
 * this list on a light surface gets a legible mark rather than a white
 * one.
 */
export function CtaBenefit({
  icon,
  children,
}: {
  icon: 'guidance' | 'camera' | 'explanation' | 'document'
  children: ReactNode
}) {
  const Icon = SECTION_ICONS[icon]
  return (
    <li className="flex gap-3">
      <Icon className="mt-1 h-5 w-5 shrink-0" />
      <span>{children}</span>
    </li>
  )
}
