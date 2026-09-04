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
 * Still no cards or borders per item — this remains a single band, not
 * a card grid.
 *
 * ---------------------------------------------------------------------------
 * ⚠ BRAND SURFACE AND GREEN ICONS (owner decision, 2026-09-04) —
 * SUPERSEDES "quiet band, low visual weight" ABOVE
 * ---------------------------------------------------------------------------
 * This band was `muted` with grey text: Appendix A's "thin horizontal
 * band, low visual weight". The owner directed brand blue, white text
 * at a larger size, and green icons, which makes it a loud band rather
 * than a quiet one. That is a deliberate reversal of the register, not
 * drift, and it applies on all nine templates that render this.
 *
 * ⚠⚠ THE GREEN ICONS BREAK A DOCUMENTED TOKEN RULE, KNOWINGLY.
 * `app/globals.css` says in as many words: "GREEN IS FOR CONVERSION
 * ACTIONS. `--accent` is the CTA colour and should not be scattered
 * across icons, borders, or headings." Before this, green appeared in
 * exactly three places, all primary conversion buttons (DEC-096).
 *
 * It also measures 2.61:1 against `--brand`, under the 3:1 floor for a
 * meaningful graphic. That is survivable ONLY because every icon is
 * `aria-hidden` beside text that states the same thing, so the mark is
 * decoration and the meaning is carried in words — the same argument
 * `--rating-gold` runs on. If an icon here ever becomes the sole
 * carrier of its statement, this colour is the wrong tool.
 *
 * Recorded rather than quietly done, because the next person to see
 * green on an icon should be able to tell an owner decision from a
 * mistake.
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
    /*
      2, not 1.5. Owner asked for more prominent icons (2026-09-04),
      and on a stroked pictogram weight does more of that work than
      size alone. It also buys back a little of what the 2.61:1 green
      on this surface costs: a heavier stroke is simply more of the
      mark to see.
    */
    strokeWidth: 2,
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
  surface = 'brand',
}: TrustBarProps = {}) {
  return (
    /*
      `width="full"` drops the 1280px reading container to the viewport
      gutters. The four statements run to roughly 150 characters plus
      icons, and at the larger size they no longer fit one line inside
      the standard container — the extra width is what keeps them on
      one line rather than wrapping or scrolling.

      No bottom border: it was `border-border`, a pale line that made
      sense under a muted band and reads as a stray light rule between
      this navy strip and the white section beneath it. The colour
      change separates the sections on its own.
    */
    <Section
      density={density}
      surface={surface}
      as="aside"
      width="full"
      /*
        `[&>div]:px-3` reaches into Section's Container to cut its
        gutter from 24px to 12px. Section passes `width` through but
        not padding, and this is the only section that needs a gutter
        narrower than the site's, so the override lives here rather
        than becoming a Container prop nine other sections would then
        have to reason about.

        The 24px it buys back is exactly what keeps the row on one line
        at 1280px, the most common desktop width, once the icons went
        to 24px.
      */
      className="[&>div]:px-3"
    >
      <ul className="flex flex-nowrap items-center justify-center gap-x-5 gap-y-2 overflow-x-auto">
        {trustStatements.map((statement) => {
          const Icon = TRUST_ICONS[statement.label]
          return (
            <li
              key={statement.label}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-base leading-6"
            >
              {/*
                `text-accent` is the owner-directed green — see the
                token warning in the header. Opaque, not tinted down:
                at 2.61:1 on this surface there is no contrast left to
                spend on an opacity.
              */}
              {Icon !== undefined && (
                <Icon className="h-6 w-6 shrink-0 text-accent" />
              )}
              <span>{statement.label}</span>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
