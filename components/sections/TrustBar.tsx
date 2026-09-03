import type { SVGProps } from 'react'
import {
  Section,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { trustStatements } from '@/data/business/positioning'

/**
 * Trust bar.
 *
 * Governed by docs/18-design-system.md §63, §5.3, §88 and Appendix A
 * ("Metric strip / credential strip — a thin horizontal band, low
 * visual weight. Not a card grid.").
 *
 * ⚠ Content comes from `trustStatements`, where every item cites the
 * document establishing it as fact (18 §63: "Only use factual
 * statements"). Do not pass ad-hoc strings in here — that is the route
 * by which an unverifiable claim reaches the page.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ICONS RESTORED (owner decision, 2026-09-01) — supersedes the
 * icon-free rationale below
 * ---------------------------------------------------------------------------
 * The 2026-08-23 port kept this band icon-free, citing 18 §5.3 ("trust
 * through restraint") and Appendix B's warning against "icons used as
 * decoration next to text that already communicates the idea on its
 * own." That was a stylistic reading of §5.3, not a hard prohibition —
 * nothing in 18 requires an icon-free trust bar, only that icons not be
 * purely decorative.
 *
 * The four marks below are not decoration: each is a distinct pictogram
 * tied to its own statement (independent evaluation, sewer/drain
 * specialization, the no-upselling model, multi-market coverage), drawn
 * as plain inline SVG rather than an icon-library import (CLAUDE.md §56
 * — avoid unnecessary large icon dependencies for four static marks).
 * No badge, credential, or certification graphic is implied by any of
 * them — that would reintroduce exactly what Appendix B warns against.
 *
 * Still no cards, borders, or backgrounds per item — this remains a
 * quiet band, not a card grid.
 *
 * Density is `dense` deliberately: this band sits between two weightier
 * sections and should read as a quiet strip, contributing rhythm rather
 * than competing (Appendix A density system).
 */
export interface TrustBarProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   * The reference composition places this strip in a different slot on
   * each page type, which is why it became overridable.
   */
  density?: SectionDensity
  surface?: SectionSurface
}

type IconProps = SVGProps<SVGSVGElement>

function baseIconProps(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

/** Independent inspection and diagnostics — a magnifier over a feed. */
function IndependentInspectionIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.5 14.5 20 20" />
    </svg>
  )
}

/** Sewer and drain specialists — a pipe section, not general plumbing. */
function SewerSpecialistIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <rect x="3" y="9" width="18" height="6" rx="1" />
      <path d="M7 9V6a2 2 0 0 1 2-2M17 15v3a2 2 0 0 1-2 2" />
    </svg>
  )
}

/** No repair-driven upselling — evidence, not a sale. */
function NoUpsellingIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 3.5c3.5 1 6.5 1 8.5.5-.5 7-3.5 12-8.5 16.5-5-4.5-8-9.5-8.5-16.5 2 .5 5 .5 8.5-.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

/** Serving three markets — a simple map pin. */
function MultiMarketIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 21s7-6.4 7-11.5a7 7 0 1 0-14 0C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  )
}

const TRUST_ICONS: Record<string, (props: IconProps) => React.JSX.Element> = {
  'Independent inspection and diagnostics': IndependentInspectionIcon,
  'Sewer and drain specialists, not general plumbing': SewerSpecialistIcon,
  'No repair-driven upselling': NoUpsellingIcon,
  'Serving St. Louis, San Diego, and Las Vegas': MultiMarketIcon,
}

export function TrustBar({
  density = 'dense',
  surface = 'muted',
}: TrustBarProps = {}) {
  return (
    <Section
      density={density}
      surface={surface}
      as="aside"
      className="border-b border-border"
    >
      <ul className="flex flex-nowrap items-center justify-center gap-x-8 gap-y-2 overflow-x-auto">
        {trustStatements.map((statement) => {
          const Icon = TRUST_ICONS[statement.label]
          return (
            <li
              key={statement.label}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm leading-6 text-muted-foreground"
            >
              {Icon !== undefined && (
                <Icon className="h-4 w-4 shrink-0 text-foreground/70" />
              )}
              <span>{statement.label}</span>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
