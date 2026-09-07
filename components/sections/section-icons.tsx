import type { SVGProps } from 'react'
import type { ExperienceIconName } from '@/types'

/**
 * The section icon family.
 *
 * Governed by docs/18-design-system.md §96; CLAUDE.md §39.
 *
 * ===========================================================================
 * ONE FAMILY, ONE FILE, BECAUSE FOUR COPIES HAD ALREADY APPEARED
 * ===========================================================================
 * These marks were defined inside `ExperienceSection` and copied by
 * hand into three other section files as each was written; the page
 * ended up carrying four identical `DocumentIcon` definitions. Icons
 * are a design system, not per-section decoration, and a family that
 * lives in one place cannot drift out of step with itself.
 *
 * ⚠ THE ST. LOUIS CTA IMPORTS FROM HERE TOO, WHICH IS WHY THIS IS A
 * MODULE RATHER THAN AN EXPORT ON ONE SECTION. That copy lives in a
 * content file and needs the same three marks the experience list
 * uses; hand-rolling the SVG paths a fifth time in `content/` is how a
 * page ends up with two versions of the same camera.
 *
 * ⚠ EVERY MARK IS `aria-hidden` AND MUST STAY THAT WAY. 18 §96 allows
 * an icon only where it decorates a statement already made in words.
 * None of these is ever the sole carrier of its meaning, which is also
 * what lets one of them wear green on the experience cards.
 *
 * Line weight matches `TrustBar`, so every icon on the site reads as
 * one set. No bubbles, no fills: CLAUDE.md §39 names icon bubbles among
 * the patterns that make a site read as generated.
 */

export type IconProps = SVGProps<SVGSVGElement>

/**
 * Shared defaults for every mark: one viewBox, one stroke weight, and
 * `aria-hidden` applied here rather than remembered at each call site.
 */
export function baseIconProps(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

/** Time in the trade — a clock. */
export function ExperienceIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

/** Camera inspection — a camera body over a lens. */
export function CameraIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 8.5h3.5L8 6.5h8l1.5 2H21v10H3Z" />
      <circle cx="12" cy="13.5" r="3.25" />
    </svg>
  )
}

/** Documented findings — a page with lines. */
export function DocumentIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M14 3H6.5v18h11V6.5Z" />
      <path d="M14 3v3.5h3.5M9 12h6M9 16h4" />
    </svg>
  )
}

/**
 * Independence — a shield with a check.
 *
 * The same mark `TrustBar` uses for "No repair-driven upselling", so
 * the differentiator carries one glyph across the site rather than two.
 */
export function IndependenceIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 3.5c3.5 1 6.5 1 8.5.5-.5 7-3.5 12-8.5 16.5-5-4.5-8-9.5-8.5-16.5 2 .5 5 .5 8.5-.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

/**
 * A benefit marker, for the list inside a benefit panel.
 *
 * ⚠ `aria-hidden`, AND THE LIST IS STILL A `<ul>` OF REAL TEXT. The
 * mark replaces a `border-l` rule visually and nothing else: 18 §96
 * requires meaning never rest on an icon, and a screen reader hears the
 * list semantics plus the item text exactly as it did before.
 */
export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

/** A plain-language explanation — a speech bubble. */
export function ExplanationIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M20.5 12c0 3.9-3.8 7-8.5 7a10 10 0 0 1-2.4-.3L4.5 20.5l1.2-3.4A6.8 6.8 0 0 1 3.5 12c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z" />
      <path d="M8.5 10.5h7M8.5 13.5h4" />
    </svg>
  )
}

/** Which way to go next — a compass. */
export function GuidanceIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8Z" />
    </svg>
  )
}

/** Weighing a major decision — a balance. */
export function DecisionIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 4.5v15M7.5 19.5h9M4.5 8h15" />
      <path d="M4.5 8 2 13h5Z" />
      <path d="M19.5 8 17 13h5Z" />
    </svg>
  )
}

/**
 * ⚠ A CHECK IS THE FALLBACK, NOT THE DEFAULT CHOICE. An item that
 * names no icon gets this; an item that names one gets a mark that
 * carries a little of its meaning. Owner direction, 2026-09-07.
 */
export const SECTION_ICONS: Record<
  ExperienceIconName,
  (props: IconProps) => React.JSX.Element
> = {
  experience: ExperienceIcon,
  camera: CameraIcon,
  document: DocumentIcon,
  independence: IndependenceIcon,
  explanation: ExplanationIcon,
  guidance: GuidanceIcon,
  decision: DecisionIcon,
}
