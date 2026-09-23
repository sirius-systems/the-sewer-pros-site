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

/** Service area - a map pin. */
export function MapPinIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 21s6.5-5.4 6.5-10.5a6.5 6.5 0 0 0-13 0C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
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

/** A choice made from a list of options — a checklist. */
export function ChecklistIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="m4 6.5 1.5 1.5 2.5-3" />
      <path d="m4 13.5 1.5 1.5 2.5-3" />
      <path d="M11 6.5h9M11 13.5h9M11 19h9" />
      <path d="M4.5 19h2" />
    </svg>
  )
}

/** Seeing the evidence - an eye. */
export function EyeIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

/** Sewer and drain specialists - a pipe run with an elbow and flanges. */
export function PipeIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 8h10a4 4 0 0 1 4 4v9" />
      <path d="M3 13h5.5a1.5 1.5 0 0 0 1.5-1.5" />
      <path d="M1.5 6.5v3M14.5 21h5" />
    </svg>
  )
}

/** An access point - a round cleanout or manhole cover, seen at an angle. */
export function AccessPointIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <ellipse cx="12" cy="9" rx="8.5" ry="3.5" />
      <path d="M3.5 9v5c0 1.9 3.8 3.5 8.5 3.5s8.5-1.6 8.5-3.5V9" />
      <path d="M8.5 9h7" />
    </svg>
  )
}

/** Findings written up - a document with a check. */
export function DocumentCheckIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M14 3H6.5v18h11V6.5Z" />
      <path d="M14 3v3.5h3.5M9.5 14.5l2 2 3.5-4" />
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

/** Several fixtures on one line - three drains feeding a shared main. */
export function FixturesIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="5" cy="5.5" r="2.5" />
      <circle cx="12" cy="5.5" r="2.5" />
      <circle cx="19" cy="5.5" r="2.5" />
      <path d="M5 8v5M12 8v5M19 8v5M5 13h14M12 13v8" />
    </svg>
  )
}

/** Water rising - two waves under an upward arrow. */
export function WaterBackupIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 11.5V3.5M8.5 7 12 3.5 15.5 7" />
      <path d="M3 15.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </svg>
  )
}

/** Something that keeps coming back - a circular arrow. */
export function RepeatIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M20 12a8 8 0 1 1-2.35-5.65" />
      <path d="M20 4.5v4h-4" />
    </svg>
  )
}

/** Roots or debris in a pipe - a pipe run with strands hanging in from the top wall. */
export function RootRestrictionIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M2 5.5h20M2 19h20" />
      <path d="M7 5.5c0 3 2 3.5 2 6.5" />
      <path d="M12.5 5.5c0 2.5-1.5 3.5-1.5 5.5 0 1 .5 1.5 1 2.5" />
      <path d="M17.5 5.5c0 2-1.5 3-1.5 4.5" />
    </svg>
  )
}

/** One fixture drain - a round strainer. */
export function SingleDrainIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 6.5v2M12 15.5v2M6.5 12h2M15.5 12h2" />
    </svg>
  )
}

/** Sewer cleaning - a pipe run with a path and arrow running through it. */
export function CleaningPathIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M2 6.5h20M2 17.5h20" />
      <path d="M5 12h11M13 9l3 3-3 3" />
      <path d="M19.5 12h.01" />
    </svg>
  )
}

/** Hydro jetting - a nozzle throwing three jets of water. */
export function HydroJetIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 12h5" />
      <path d="M8 9.5v5l3.5-1.5v-2Z" />
      <path d="M14.5 8.5 20 5.5M15 12h6M14.5 15.5l5.5 3" />
    </svg>
  )
}

/** Drain cleaning - a sink basin with a faucet. */
export function SinkDrainIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 11h18l-1.8 6.2a2 2 0 0 1-1.9 1.3H6.7a2 2 0 0 1-1.9-1.3Z" />
      <path d="M12 11V5.5h3.5" />
      <path d="M10 21.5h4" />
    </svg>
  )
}

/** Sewer camera inspection - a camera head inside a pipe run. */
export function CameraInPipeIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M2 5.5h20M2 18.5h20" />
      <path d="M6.5 9.5h7v5h-7Z" />
      <path d="M13.5 11.2 17.5 9.5v5l-4-1.7" />
    </svg>
  )
}

/** Cleaning and camera inspection - a cleaning path beside a camera. */
export function CleaningAndCameraIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M2 4.5h10M2 11h10" />
      <path d="M4 7.7h5M7.2 6.2 8.7 7.7 7.2 9.2" />
      <path d="M12.5 14h6.5v5.5h-6.5Z" />
      <path d="M19 15.8l3-1.6v6.3l-3-1.6" />
    </svg>
  )
}

/** Line locating - a marker flag above a dashed underground route. */
export function LocatorRouteIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M2 9h20" />
      <path d="M12 9V2.5l4.5 1.8L12 6.2" />
      <path d="M3 17h3M9 17h3M15 17h3M21 17h.01" />
      <path d="M12 12v5" />
    </svg>
  )
}

/** Property managers - a building with windows. */
export function BuildingIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 21h18M5.5 21V4h9v17M14.5 9.5h4V21" />
      <path d="M8.5 8h3M8.5 12h3M8.5 16h3" />
    </svg>
  )
}

/** Real estate agents - a house with a key. */
export function HouseKeyIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M2.5 11 9 5.5l6.5 5.5" />
      <path d="M4.5 9.5V19h6" />
      <circle cx="17.5" cy="14" r="2.5" />
      <path d="M15.7 15.8 11.5 20M13.3 18l1.5 1.5" />
    </svg>
  )
}

/** A home - roofline and door. */
export function HomeIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5.5h4V20" />
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
