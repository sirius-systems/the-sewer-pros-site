import type { SVGProps } from 'react'
import Image from 'next/image'
import {
  Section,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { SectionHeading } from './SectionHeading'
import { processMotif } from '@/data/business/positioning'
import type { CardImage } from '@/types'

/**
 * Numbered process.
 *
 * Governed by docs/18-design-system.md §65, §5.6, §90 and Appendix A
 * ("Numbered process — simple vertical numbered steps… Can run with no
 * cards (Section 5.6), no decorative icons (Section 27), and no
 * gradient (Appendix B).").
 *
 * That guidance is followed literally: numbers and text, a rule between
 * steps, nothing else. 18 §65 also warns against "overengineering with
 * animation", so there is no scroll-reveal here. Appendix A's "sticky
 * process" variant is reserved for a sequence genuinely worth walking
 * through slowly and is not this component.
 *
 * Rendered as an ordered list so assistive technology announces the
 * sequence and its length — the numerals are decorative reinforcement,
 * marked `aria-hidden` to avoid double announcement.
 *
 * ---------------------------------------------------------------------------
 * ⚠ `cards` SHOWS AN ICON WHERE `grid` SHOWS A NUMERAL (owner, 2026-09-04)
 * ---------------------------------------------------------------------------
 * A second departure from Appendix A on this component, on top of the
 * card treatment: §27 says no decorative icons. Owner-directed and
 * scoped to `cards`, which is homepage-only. `grid` — the variant
 * `CommercialPageTemplate` renders — keeps its numerals and is
 * untouched.
 *
 * NO `sr-only` NUMERAL WAS ADDED, DELIBERATELY. The paragraph above is
 * the reason: sequence already comes from `<ol>`/`<li>`, which is why
 * the numerals were `aria-hidden` from the start. A visually hidden
 * "01" would reintroduce exactly the double announcement that decision
 * avoids — assistive technology would say "1, 01, Inspect". Losing the
 * visible numeral costs a sighted reader a cue and costs a screen
 * reader nothing.
 *
 * The icons are therefore `aria-hidden` too. Each sits above a visible
 * `<h3>` that already names the step, so they reinforce rather than
 * carry meaning — the same standing the trust bar's marks have.
 *
 * ===========================================================================
 * THE INDEPENDENT-INSPECTION MOTIF (18 §141)
 * ===========================================================================
 * 18 §141 defines a recurring visual concept:
 *
 *   Inspect → Understand → Decide
 *
 * and says it "can appear through: process icons, diagrams, section
 * dividers, branded steps", and that "it should become a recognizable
 * part of the design system." A numbered process band is one of the
 * placements §141 names, so this is where it goes live.
 *
 * `steps` is therefore optional: omit it and this section renders the
 * motif. Pass steps and the page's own sequence wins.
 *
 * ⚠ THE MOTIF IS LABELS ONLY. §141 supplies three words and no
 * descriptions, so the motif renders three words and no descriptions.
 * Do not write supporting copy to fill the gap — that would be new
 * claim-bearing content invented at the component layer, which is
 * exactly what `data/business/positioning.ts` exists to prevent.
 *
 * Three steps is deliberate and within the 3-4 the composition maps
 * allow; it is not padded to four to match a reference example.
 */
export interface ProcessStep {
  title: string
  description?: string
  /**
   * Optional approved artwork. `cards` variant only.
   *
   * Unset on every step today, and the `grid` branch ignores it: that
   * branch is the hairline band, where a crop would break the seamless
   * grid it exists to produce. A card grows to hold a 7:4 crop only
   * when one is present (18 §40-42).
   */
  image?: CardImage
}

/**
 * 18 §141's motif as a step sequence.
 *
 * Derived from `processMotif` rather than restated, so the labels
 * cannot drift from the data module that cites §141.
 */
const motifSteps: readonly ProcessStep[] = processMotif.map((title) => ({
  title,
}))

export interface ProcessStepsProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  /**
   * Overrides the section's natural surface.
   *
   * Surface is a SEQUENCE decision, like `density` above: only the
   * composing template knows what sits either side of this section,
   * and the owner directed clear separation between adjacent sections
   * (2026-09-04). A section cannot pick its own contrast against
   * neighbours it cannot see.
   */
  surface?: SectionSurface
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  /**
   * Cell treatment for the step band.
   *
   * `grid` is the documented default described in this file's header:
   * a seamless hairline grid, no cards. It stays the default because
   * four other templates render this band and none of them asked to
   * change (AudiencePageTemplate, CommercialPageTemplate,
   * ServiceLocationPageTemplate, ServicePageTemplate).
   *
   * `cards` is an OWNER-DIRECTED EXCEPTION, scoped to the homepage
   * (2026-09-03). It departs from the header's "no cards" note the same
   * way DEC-087's trust-bar icons departed from an equally documented
   * default — an explicit instruction from the business, recorded here
   * rather than silently overwriting the original rationale. Only
   * HomePageTemplate passes it.
   */
  variant?: 'grid' | 'cards'
  /**
   * The page's own sequence.
   *
   * Omit to render 18 §141's `Inspect → Understand → Decide` motif —
   * see the header. A page that authors its own process keeps it; the
   * motif never overrides authored content.
   */
  steps?: readonly ProcessStep[]
}

/**
 * Wide-breakpoint column count for a step sequence.
 *
 * 18 §5.6 forbids forcing an item count into a grid it does not divide
 * into evenly. This band was hardcoded to four columns, which orphaned
 * a cell for every sequence that was not exactly four long — including
 * the home page's three authored steps and §141's three-step motif.
 *
 * An interim version mapped 3/4/5 and fell back to four, which merely
 * moved the same assumption to six steps. This picks the largest
 * divisor that actually divides, so nothing silently orphans:
 *
 *   3 -> 3    4 -> 4    6 -> 3    8 -> 4
 *
 * Counts with no divisor at these widths (5, 7) drop to two columns
 * and let `spanClasses` below absorb the odd tail. Five columns is
 * deliberately not offered — a process band that narrow stops being
 * readable, and Appendix A's numbered process is meant to be scanned.
 */
function columnClass(count: number): string {
  if (count % 4 === 0) return 'lg:grid-cols-4'
  if (count % 3 === 0) return 'lg:grid-cols-3'
  if (count % 2 === 0) return 'lg:grid-cols-2'
  return 'lg:grid-cols-2'
}

/**
 * Classes for the trailing step when the count is odd.
 *
 * The band is two columns from the `sm` breakpoint up, so any odd
 * count leaves a gap there regardless of the wide-breakpoint choice.
 * The last step spans both, matching the remainder treatment in
 * `ProblemGrid` and `InclusionsGrid`.
 *
 * Tailwind breakpoints are min-width, so a `sm:col-span-2` would carry
 * into a three-column wide layout and span two of three. `lg` resets it
 * where the wide layout is not also two columns.
 */
function spanClasses(count: number, wide: string): string {
  if (count % 2 === 0) return ''
  return wide === 'lg:grid-cols-2'
    ? 'sm:col-span-2'
    : 'sm:col-span-2 lg:col-span-1'
}

/**
 * Whether `ProcessSteps` renders anything.
 *
 * Steps fall back to 18 §141's motif when none are passed, so this
 * is true for an omitted `steps` prop and false only for an empty
 * one. A template that renders the band conditionally must combine
 * this with its own condition.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function processStepsRenders(
  steps: readonly ProcessStep[] | undefined,
): boolean {
  return (steps ?? motifSteps).length > 0
}

/* ==========================================================================
   Step icons — `cards` variant only
   ========================================================================== */

type StepIconProps = SVGProps<SVGSVGElement>

function stepIconProps(props: StepIconProps): StepIconProps {
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

/** 01 Inspect — a camera, because this step is a camera down the line. */
function InspectIcon(props: StepIconProps) {
  return (
    <svg {...stepIconProps(props)}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  )
}

/** 02 Understand — a written findings sheet, not a magnifier. */
function UnderstandIcon(props: StepIconProps) {
  return (
    <svg {...stepIconProps(props)}>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  )
}

/**
 * 03 Decide — a fork, not a tick.
 *
 * A checkmark would read as "done". This step is the customer choosing
 * between cleaning, monitoring, or something else, so a path that
 * splits says what the step actually is.
 */
function DecideIcon(props: StepIconProps) {
  return (
    <svg {...stepIconProps(props)}>
      <path d="M12 21v-5" />
      <path d="M12 16 6.9 11.4M12 16l5.1-4.6" />
      <circle cx="5.5" cy="8.5" r="2.5" />
      <circle cx="18.5" cy="8.5" r="2.5" />
    </svg>
  )
}

/**
 * Icons by step position, `cards` only.
 *
 * ⚠ Positional and finite ON PURPOSE. These are drawn for Inspect,
 * Understand and Decide specifically — a camera above a step that is
 * not about a camera would be worse than no icon.
 *
 * A fourth step therefore falls off the end and renders its numeral
 * instead, which is a deliberate fallback rather than a gap: the
 * homepage's three steps are the only `cards` caller today, and a new
 * step should get a drawn icon here rather than inherit an unrelated
 * one.
 */
const CARD_STEP_ICONS: readonly ((props: StepIconProps) => React.JSX.Element)[] =
  [InspectIcon, UnderstandIcon, DecideIcon]

export function ProcessSteps({
  density = 'standard',
  surface = 'default',
  id = 'process',
  eyebrow,
  title,
  intro,
  steps,
  variant = 'grid',
}: ProcessStepsProps) {
  const resolved = steps ?? motifSteps

  if (resolved.length === 0) return null

  // Columns follow the step count, and an odd tail spans rather than
  // orphaning. 18 §5.6's objection to forcing a count into a grid it
  // does not divide into applies to this band for the same reason it
  // applies to cards.
  const wide = columnClass(resolved.length)
  const span = spanClasses(resolved.length, wide)

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      {/*
        Two cell treatments, one column logic. `grid` is the hairline
        band; `cards` separates the same cells with real gaps and the
        project's standard card chrome (`rounded-md border border-border`,
        matching components/ui/Card.tsx rather than a second card style).
        Everything else — numerals, headings, descriptions, column count,
        the odd-tail span — is identical between the two.
      */}
      <ol
        className={cn(
          'mt-10 grid sm:grid-cols-2',
          variant === 'cards' ? 'gap-6' : 'gap-px bg-border',
          wide,
        )}
      >
        {resolved.map((step, index) => {
          // Artwork applies to the `cards` branch only, and only when a
          // step actually has some. The hairline `grid` branch and the
          // `processMotif` fallback carry no image field and are
          // untouched. A step without artwork keeps its current padding
          // and renders no crop container, so nothing changes until a
          // real photograph exists (18 §40-42).
          const image = variant === 'cards' ? step.image : undefined

          // `grid` gets undefined here and falls through to its numeral.
          const StepIcon =
            variant === 'cards' ? CARD_STEP_ICONS[index] : undefined

          return (
            <li
              key={step.title}
              className={cn(
                variant === 'cards'
                  ? 'overflow-hidden rounded-md border border-border bg-background'
                  : 'bg-background',
                image === undefined && 'p-6',
                index === resolved.length - 1 && span,
              )}
            >
              {image !== undefined && (
                <div className="relative aspect-[7/4] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className={cn(image !== undefined && 'p-6')}>
                {/*
                  ⚠ `cards` ONLY. `grid` keeps its numeral, unchanged —
                  that is the variant CommercialPageTemplate renders.

                  The icon takes --accent-secondary, NOT the numeral's
                  --muted-foreground. That is a step up in prominence
                  rather than a like-for-like swap, and it is the
                  colour the owner named. 5.83:1 on the card, well past
                  the 3:1 a graphic needs.
                */}
                {StepIcon !== undefined ? (
                  <StepIcon className="h-7 w-7 text-accent-secondary" />
                ) : (
                  <span
                    aria-hidden="true"
                    className="text-caption tabular-nums text-muted-foreground"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
                <h3 className="mt-3 text-base font-medium text-foreground">
                  {step.title}
                </h3>
                {step.description !== undefined && (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
