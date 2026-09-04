import type { SVGProps } from 'react'
import Link from 'next/link'
import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import { authorityProofPoints } from '@/data/business/authority'
import {
  authorityProcess,
  type AuthorityProcessStep,
} from '@/data/business/process'

/**
 * Authority band — the page's single dark section.
 *
 * Governed by docs/18-design-system.md §11, §63, §64, §71, §108;
 * CLAUDE.md §23, §32, §71.
 *
 * The reference composition places a "deep brand-color or charcoal
 * band" carrying four proof points on every page type.
 *
 * ===========================================================================
 * ONE PER PAGE, NEVER ADJACENT TO ANOTHER DARK SECTION
 * ===========================================================================
 * The reference style's own anti-patterns list says "don't stack two
 * dark sections back to back", and 18 §11 warns against alternating
 * background colours for decoration — surfaces carry meaning, rhythm
 * comes from density.
 *
 * The final `CtaSection variant="panel"` is the only other brand
 * surface in the system, so every template map must keep at least one
 * non-brand section between the two. Check this when composing, not
 * after.
 *
 * ---------------------------------------------------------------------------
 * COPY IS NOT A PROP
 * ---------------------------------------------------------------------------
 * Proof points come from `authorityProofPoints`, where each item cites
 * the document establishing it as fact. Ad-hoc strings are deliberately
 * not accepted — that is the route by which an unverifiable claim
 * reaches the page. `TrustBar` takes the same position for the same
 * reason.
 *
 * The band renders nothing below three points rather than padding the
 * grid, so deleting an item that cannot be sourced is always safe.
 *
 * The heading and intro ARE props, because they frame the section for
 * its page and carry no factual claim of their own.
 *
 * ---------------------------------------------------------------------------
 * TWO VARIANTS
 * ---------------------------------------------------------------------------
 *   proof-points  The original, and the default. `authorityProofPoints`
 *                 in a card grid. Every non-homepage template renders
 *                 this and NOTHING about it changed.
 *
 *   process       The homepage's four-step inspection sequence, from
 *                 `authorityProcess`. Homepage only.
 *
 * ⚠ WHY A VARIANT RATHER THAN AN EDIT TO THE SHARED BAND. Nine
 * templates render this section off one four-item dataset whose whole
 * discipline is that copy is not a prop. The homepage needed an
 * eyebrow, a different heading, an intro, four full paragraphs with
 * inline links, per-step marks, an asymmetric fourth step, and two
 * actions. None of that fits `authorityProofPoints`, and widening that
 * shape for one caller would have put the other eight at risk of the
 * exact ad-hoc copy this file refuses. `data/business/authority.ts` is
 * untouched.
 *
 * ⚠ NO `HowTo` SCHEMA, ON EXPLICIT OWNER INSTRUCTION (2026-09-04).
 * These steps describe a service the business performs, not
 * instructions a reader carries out, and `HowTo` would misrepresent
 * that. The step headings carry ids for in-page anchors only. Do not
 * add `HowTo`/`HowToStep` markup here later because the shape looks
 * like it fits.
 */
interface AuthorityBandBaseProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
}

interface AuthorityBandProofPointsProps extends AuthorityBandBaseProps {
  variant?: 'proof-points'
  eyebrow?: string
  title: string
  intro?: string
  /**
   * Pass `null` to omit the CTA where the page already converts nearby.
   *
   * 18 §62 warns against making every CTA visually identical, and
   * Appendix B flags "a CTA appearing after every section rather than
   * at moments of rising intent".
   */
  action?: { href: string; label: string } | null
}

interface AuthorityBandProcessProps extends AuthorityBandBaseProps {
  variant: 'process'
  /**
   * ⚠ NO `title`/`intro`/`eyebrow`/`action` ON THIS VARIANT, AND THAT
   * IS THE POINT. `authorityProcess` owns all four, so there is
   * exactly one source for them. Same resolution as `Differentiator`'s
   * comparison: a per-page override would put a second heading beside
   * the one the content already carries and let the two drift.
   */
  process?: typeof authorityProcess
}

/**
 * ⚠ A UNION, NOT ONE OPTIONAL-EVERYTHING SHAPE. `proof-points`
 * requires a `title`; `process` refuses one. The compiler enforces the
 * distinction, so neither variant can be called with the other's
 * fields.
 */
export type AuthorityBandProps =
  | AuthorityBandProofPointsProps
  | AuthorityBandProcessProps

/**
 * Whether `AuthorityBand` renders anything.
 *
 * The band omits itself below three proof points rather than padding
 * the grid, so a template that lists this section in its `densities`
 * array must gate that entry on this predicate. Otherwise the declared
 * rhythm describes a section the page does not have, and
 * `sectionRhythmIssues()` validates a page that was never built — the
 * drift class this port hit twice already (DEC-081).
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition instead of two copies of it.
 */
export function authorityBandRenders(): boolean {
  return authorityProofPoints.length >= 3
}

/* ==========================================================================
   Step marks — `process` only. 18 §27, CLAUDE.md §56
   ========================================================================== */

/**
 * Hand-drawn rather than imported.
 *
 * `package.json` has no icon library and CLAUDE.md §56 warns against
 * adding one for a handful of marks, so these follow the same inline
 * convention `TrustBar`, `ProcessSteps` and `Differentiator` already
 * use. Each is `aria-hidden` beside a visible heading that names the
 * step, so it reinforces rather than carries meaning.
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

/** 01 Inspect — a camera, because this step is a camera down the line. */
function InspectIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  )
}

/** 02 Document — a written record, not a second camera. */
function DocumentIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  )
}

/**
 * 03 Understand — a conversation, not a magnifier.
 *
 * This step is someone walking you through footage, so the mark is
 * speech. A magnifier would repeat step 01's idea of looking.
 */
function UnderstandIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M20 15a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  )
}

/**
 * 04 Decide — a shield with a check.
 *
 * The customer's position is protected by the evidence they hold. A
 * fork would repeat `ProcessSteps`' "Decide" mark, and this step is
 * about what the evidence secures rather than the branching itself.
 */
function DecideIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 3.5c3.5 1 6.5 1 8.5.5-.5 7-3.5 12-8.5 16.5-5-4.5-8-9.5-8.5-16.5 2 .5 5 .5 8.5-.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

/**
 * Step icon by name.
 *
 * A map rather than conditionals in the render, so a new step means an
 * entry here and the compiler names the omission.
 */
const STEP_ICONS: Record<
  AuthorityProcessStep['icon'],
  (props: IconProps) => React.JSX.Element
> = {
  inspect: InspectIcon,
  document: DocumentIcon,
  understand: UnderstandIcon,
  decide: DecideIcon,
}

/* ==========================================================================
   Light-card treatments on the brand surface
   ========================================================================== */

/**
 * The ordinary step card.
 *
 * `bg-surface-muted` with `text-foreground` — the exact pairing
 * `Differentiator`'s comparison cells established on this same brand
 * surface, reused rather than introducing a second light-card value.
 * Measured 13.7:1 for body text.
 *
 * ⚠ The `proof-points` variant's cards are NOT this. Those are
 * transparent with a `border-white/15` rule and stay that way.
 */
const STEP_CARD = 'bg-surface-muted text-foreground'

/**
 * The fourth step.
 *
 * ⚠ THE HIGHLIGHT MARKS "THIS STEP IS YOURS", NOT "THE OTHER THREE
 * MATTER LESS". The other three keep a full-strength light card; this
 * one adds a tint and a rule rather than dimming anything beside it.
 *
 * Tint and border are `--accent` — the same green and the same
 * `color-mix` derivation as `Differentiator`'s "ours" column, which is
 * where this site already marks the customer's own decision point.
 * Measured 13.2:1 for body text, 4.9:1 for the rule against its card.
 * No red anywhere: nothing here is a warning.
 */
const HIGHLIGHT_CARD =
  'bg-[color-mix(in_srgb,var(--color-accent)_8%,white)] text-foreground border-l-4 border-accent'

export function AuthorityBand(props: AuthorityBandProps) {
  if (!authorityBandRenders()) return null

  const { density = 'standard', id = 'why-the-sewer-pros' } = props

  if (props.variant === 'process') {
    const content = props.process ?? authorityProcess

    return (
      <Section density={density} surface="brand" labelledBy={id}>
        {/*
          ⚠⚠ THE EYEBROW IS A DERIVED PALE GREEN, NOT `text-accent`.

          The owner asked for a green eyebrow. `--accent` on `--brand`
          measures 2.61:1 — the figure `TrustBar` already records for
          the same pairing. That survives there ONLY because those
          marks are `aria-hidden` decoration beside text saying the
          same thing. An eyebrow IS text, at caption size, and 2.61:1
          is not close to the 4.5:1 it needs.

          So the green is lightened toward white until it clears:
          `--accent` mixed 40% into white measures 7.7:1 on this
          surface and still reads unmistakably green. Derived from the
          token rather than hard-coded, so it tracks a palette change.

          ⚠ DO NOT "FIX" THIS BACK TO `text-accent`. It would match the
          other green on the page and be illegible.
        */}
        <p className="text-caption font-semibold tracking-wide text-[color-mix(in_srgb,var(--color-accent)_40%,white)] uppercase">
          {content.eyebrow}
        </p>

        <h2
          id={id}
          className="mt-3 max-w-2xl text-h2 font-semibold tracking-tight text-balance"
        >
          {content.title}
        </h2>

        {/*
          `--container-reading` (42rem / 672px) rather than a bespoke
          760px. It is what this band's own intro already used and what
          `Differentiator` uses one section up; a one-off pixel width
          here would be the only measure on the page answering to
          nothing.
        */}
        <p className="mt-4 max-w-[var(--container-reading)] text-body-lg opacity-90 [&_a]:font-medium [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4">
          {content.intro}
        </p>

        {/*
          ⚠ AN `<ol>`, NOT THE `<ul>` THE OTHER VARIANT USES. These four
          are a sequence — you cannot document footage you have not
          shot — so the order carries meaning and assistive technology
          should announce it. The proof points below are genuinely
          unordered and stay a `<ul>`.

          `list-none` is deliberate: `01`-`04` are already visible in
          the content, and a list marker would say the position twice.
        */}
        <ol className="mt-10 grid list-none gap-6 sm:grid-cols-2">
          {content.steps.map((step) => {
            const Icon = STEP_ICONS[step.icon]

            return (
              <li
                key={step.id}
                className={`flex h-full flex-col rounded-md p-6 ${
                  step.highlight === true ? HIGHLIGHT_CARD : STEP_CARD
                }`}
              >
                {/*
                  ⚠ NO VISIBLE NUMERAL, AND NO `sr-only` ONE EITHER
                  (owner, 2026-09-04).

                  The `01`-`04` markers are gone from the card. Sequence
                  still comes from the `<ol>`/`<li>` below, which is why
                  the numerals were `aria-hidden` in the first place: a
                  screen reader has always announced "1, Inspect the
                  sewer line" from the list itself.

                  So this loses a sighted reader a cue and costs a
                  screen reader nothing. Adding a hidden numeral back
                  would reintroduce the double announcement the markup
                  was written to avoid — the same reasoning
                  `ProcessSteps` records for its own `cards` variant.
                */}
                <Icon className="h-9 w-9 shrink-0 text-accent-secondary" />

                <h3
                  id={`process-${step.id}`}
                  className="mt-4 text-base font-medium"
                >
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
                  {step.body}
                </p>
              </li>
            )
          })}
        </ol>

        {/*
          The closing statement, set apart rather than run on as a
          fifth paragraph: it is the section's summary of what the
          business does, not another step.
        */}
        <p className="mt-8 max-w-[var(--container-reading)] border-t border-white/15 pt-6 text-body-lg [&_a]:font-medium [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4">
          {content.closing}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          {/*
            ⚠ `secondary`, NOT `primary`, AND NOT AN OVERSIGHT.

            This IS the primary action — it is the solid button, and the
            secondary action beside it is a text link. But the solid
            fill has to be the light one: `primary` is `bg-accent`, and
            green on brand navy measures 2.61:1, under the 3:1 a
            control's boundary needs to be identifiable. The light
            button is what makes a primary action legible on this
            surface, which is the reason this file already gave for the
            single-CTA version.

            The values come from `PRIMARY_CTA` via `authorityProcess`,
            so PENDING-007 stays a one-line change.
          */}
          <ButtonLink href={content.primaryAction.href} variant="secondary">
            {content.primaryAction.label}
          </ButtonLink>

          {/*
            A text link, not a second button (18 §62: do not make every
            CTA visually identical). White rather than the `tertiary`
            variant's `--accent-secondary`, which measures 2.44:1 here.
          */}
          <Link
            href={content.secondaryAction.href}
            className="text-sm font-medium text-white underline underline-offset-4 hover:opacity-80"
          >
            {content.secondaryAction.label}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </Section>
    )
  }

  const { eyebrow, title, intro, action = PRIMARY_CTA } = props

  return (
    <Section density={density} surface="brand" labelledBy={id}>
      {eyebrow !== undefined && (
        <p className="text-caption font-semibold tracking-wide uppercase opacity-70">
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className={`max-w-2xl text-h2 font-semibold tracking-tight text-balance${
          eyebrow !== undefined ? ' mt-3' : ''
        }`}
      >
        {title}
      </h2>

      {intro !== undefined && (
        <p className="mt-4 max-w-[var(--container-reading)] text-body-lg opacity-90">
          {intro}
        </p>
      )}

      {/*
        Columns follow the point count rather than assuming four.

        The guard above permits three, and `authority.ts` states that
        deleting a point that cannot be sourced is always safe — so
        three is a reachable, documented state, and three points in a
        fixed two-column grid would orphan a cell. 18 §5.6 prohibits
        forcing a count into a grid it does not divide into.
      */}
      {/*
        Card boundaries added on owner direction (2026-09-03). This band
        sits on the brand surface, where `border-border` is invisible, so
        the border is `border-white/15` — the value SiteFooter.tsx
        already uses for a rule on this same surface, reused rather than
        introducing a second dark-surface border value.

        `rounded-md` matches components/ui/Card.tsx, so these read as the
        same card family as the rest of the page despite not being able
        to use `Card` itself (which hardcodes the light `bg-surface`).
      */}
      <ul
        className={`mt-10 grid gap-6 ${
          authorityProofPoints.length % 2 === 0
            ? 'sm:grid-cols-2'
            : 'sm:grid-cols-3'
        }`}
      >
        {authorityProofPoints.map((point) => (
          <li
            key={point.label}
            className="rounded-md border border-white/15 p-6"
          >
            <h3 className="text-base font-medium">{point.label}</h3>
            <p className="mt-1 text-sm leading-6 opacity-80">{point.detail}</p>
          </li>
        ))}
      </ul>

      {action !== null && (
        <div className="mt-10">
          {/*
            `secondary` renders as a light button, which is the legible
            choice on the brand surface. `primary` would put the accent
            colour against the brand colour, and those two are too close
            in value to carry a button.
          */}
          <ButtonLink href={action.href} variant="secondary">
            {action.label}
          </ButtonLink>
        </div>
      )}
    </Section>
  )
}
