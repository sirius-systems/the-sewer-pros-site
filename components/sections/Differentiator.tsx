import type { SVGProps } from 'react'
import {
  Section,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import {
  differentiatorComparison,
  type ComparisonRow,
  type DifferentiatorComparison,
} from '@/data/business/positioning'

/**
 * Independent-model differentiator.
 *
 * Governed by docs/18-design-system.md §64, §66, §141, §5.6;
 * docs/01-business-brand-foundation.md §4, §72;
 * CLAUDE.md §32, §72.
 *
 * ===========================================================================
 * THE TONE CONSTRAINT IS THE POINT OF THIS SECTION
 * ===========================================================================
 * 18 §64: "Keep the presentation factual and non-accusatory."
 * 01 §72 and CLAUDE.md §32: do not claim competitors are dishonest or
 * that they recommend unnecessary work.
 *
 * So the contrast is between BUSINESS MODELS, not integrity. Saying a
 * contractor who sells repairs earns from repairs is a description of
 * an incentive structure; saying they exploit it is an accusation. The
 * copy lives in `data/business/positioning.ts`, where that framing is
 * fixed and reviewable, rather than being passed in per page where it
 * could drift into a sharper claim.
 *
 * ⚠ THAT CONSTRAINT IS UNCHANGED BY EVERYTHING BELOW, AND IS THE ONE
 * PART OF THIS COMPONENT THAT IS NOT NEGOTIABLE PER PAGE.
 *
 * ===========================================================================
 * ⚠⚠ THIS DELIBERATELY BREAKS THIS FILE'S OWN "NEITHER COLUMN IS A
 * WINNER" RULE. OWNER-DIRECTED, 2026-09-04. DEC-098, DEC-099.
 * ===========================================================================
 * This section was built to a rule this header used to state flatly:
 * "Neither column is styled as a winner: 18 §66 forbids manipulating
 * visual emphasis to misrepresent alternatives, and while that rule
 * addresses comparison pages, the same honesty applies here."
 *
 * It now does the opposite ON PURPOSE. The Sewer Pros column gets a
 * tinted cell and a green accent border; the contractor column gets the
 * neutral site surface. The owner asked for the distinction to land
 * visually, and that is a knowing exception rather than drift.
 *
 * ⚠ SITE-WIDE, NOT HOMEPAGE-ONLY (DEC-099, superseding DEC-098's page
 * scope). The plain editorial split and its data are GONE rather than
 * left unreferenced: every template that renders this section now
 * renders the comparison, so a second variant would have had no
 * callers and a header claiming otherwise. Git holds it if it is
 * wanted back.
 *
 * ⚠ THE CONTEXTUAL HEADINGS WENT WITH IT. Service pages passed
 * "Inspection without a repair sale attached" and audience pages "Why
 * an independent inspection matters here". `differentiatorComparison`
 * owns one heading for every page now — see `comparison` below for why
 * there is no override.
 *
 * It is the same category of decision as DEC-096's owner-directed green
 * icons on `TrustBar`, which broke the documented "green is for
 * conversion actions" token rule and said so in the file instead of
 * doing it quietly. Recorded here for the same reason: the next person
 * to read 18 §66 against this section should be able to tell an owner
 * decision from a mistake.
 *
 * ⚠ WHAT THE EXCEPTION DOES **NOT** COVER — THE LIMIT IS REAL:
 *
 *   - The TONE guardrail is untouched and still fully applies. Copy
 *     stays factual, non-accusatory, and about business models and
 *     incentives only.
 *   - Emphasis is added to OUR column. Nothing is added AGAINST
 *     theirs. No cross, no X, no red, no warning colour, no strike
 *     through, no "avoid" language. Their cells use the same neutral
 *     surface the rest of the site uses for ordinary content.
 *   - Every row states only what follows from a company performing the
 *     repair it recommends. No new claim about repair contractors in
 *     general enters the site through this table.
 *
 * A future change that marks the contractor column as bad is NOT
 * covered by this exception and would need its own decision.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ONE ARRAY DRIVES BOTH BREAKPOINTS
 * ---------------------------------------------------------------------------
 * The desktop `<table>` and the mobile cards both map
 * `comparison.rows`. Neither restates a word of copy, so the two
 * layouts cannot drift apart — which is the failure a second hand-kept
 * mobile list would eventually produce.
 *
 * A real `<table>` rather than two flowing lists, because the row
 * labels have to line up across both outcome columns: "Business model"
 * must sit level with both of its cells. Two independent lists align
 * only until one cell wraps to a second line.
 */

/* ==========================================================================
   Row marks — 18 §27, CLAUDE.md §56
   ========================================================================== */

/**
 * Hand-drawn rather than imported.
 *
 * `package.json` has no icon library, and CLAUDE.md §56 warns against
 * large icon dependencies. Five marks do not justify adding one, so
 * these follow the same inline-SVG convention `TrustBar` established.
 *
 * They are `aria-hidden` and sit beside a visible label that already
 * names the row, so each reinforces rather than carries meaning.
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

/** Business model — a commercial building. */
function BusinessModelIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 21h18" />
      <path d="M5 21V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15" />
      <path d="M14 10h4a1 1 0 0 1 1 1v10" />
      <path d="M8 9h3M8 13h3M8 17h3" />
    </svg>
  )
}

/** What you receive — a video file, because the deliverable is footage. */
function WhatYouReceiveIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="m11 12.5 3.5 2-3.5 2v-4Z" />
    </svg>
  )
}

/**
 * What happens next — a path that splits.
 *
 * The same mark `ProcessSteps` uses for "Decide", and for the same
 * reason: a tick would read as "done", where this row is about the
 * customer choosing between routes.
 */
function WhatHappensNextIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 21v-5" />
      <path d="M12 16 6.9 11.4M12 16l5.1-4.6" />
      <circle cx="5.5" cy="8.5" r="2.5" />
      <circle cx="18.5" cy="8.5" r="2.5" />
    </svg>
  )
}

/** Repair incentive — currency, because the row is about who earns. */
function RepairIncentiveIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5v11" />
      <path d="M14.5 9.25A2.25 2.25 0 0 0 12.25 8h-.75a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4h-.75a2.25 2.25 0 0 1-2.25-1.25" />
    </svg>
  )
}

/** The closing statement — a shield with a check. */
function ConclusionIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 3.5c3.5 1 6.5 1 8.5.5-.5 7-3.5 12-8.5 16.5-5-4.5-8-9.5-8.5-16.5 2 .5 5 .5 8.5-.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

/**
 * Row id to mark.
 *
 * A map rather than conditionals in the render, so adding a row means
 * adding an entry here and the compiler names the omission.
 */
const ROW_ICONS: Record<
  ComparisonRow['icon'],
  (props: IconProps) => React.JSX.Element
> = {
  'business-model': BusinessModelIcon,
  'what-you-receive': WhatYouReceiveIcon,
  'what-happens-next': WhatHappensNextIcon,
  'repair-incentive': RepairIncentiveIcon,
}

/* ==========================================================================
   Shared cell treatments
   ========================================================================== */

/**
 * The "ours" cell, at both breakpoints.
 *
 * ⚠ THE TINT IS DERIVED FROM `--accent`, NOT A NEW COLOUR. `app/
 * globals.css` has no light-green token and this is not the place to
 * invent one, so the fill is `--accent` mixed 8% into white. Change the
 * token and the tint follows.
 *
 * Green rather than `--accent-secondary` blue: DEC-096 already
 * established green as the owner's emphasis colour on `TrustBar`, and
 * a third accent here would make the page's emphasis language less
 * legible, not more.
 *
 * ⚠ THIS IS THE SECOND KNOWING USE OF `--accent` OUTSIDE A CONVERSION
 * ACTION. `app/globals.css` says "GREEN IS FOR CONVERSION ACTIONS…
 * should not be scattered across icons, borders, or headings."
 * DEC-096 was the first. Both are owner-directed and both are written
 * down; a third should be a decision, not a habit.
 *
 * Contrast: `--foreground` on the tint measures 13.2:1, and the
 * `border-accent` rule against it 4.9:1, both comfortably clear.
 */
const OURS_CELL =
  'bg-[color-mix(in_srgb,var(--color-accent)_8%,white)] text-foreground'

/**
 * The contractor cell.
 *
 * The site's ordinary neutral surface, deliberately: it is the absence
 * of emphasis, not the presence of a negative one. See the exception
 * note in the header.
 */
const CONTRACTOR_CELL = 'bg-surface-muted text-foreground'

/* ==========================================================================
   Props
   ========================================================================== */

export interface DifferentiatorProps {
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
   *
   * ⚠ DEFAULTS TO `brand`, AND THE DEFAULT IS PART OF THE DESIGN. The
   * dark band is what the tinted cells read against. A caller changing
   * it is changing the treatment, not just the background.
   */
  surface?: SectionSurface
  id?: string
  /**
   * The comparison to render. Defaults to the canonical one.
   *
   * ⚠ NO `title`/`intro` PROP, AND THAT IS THE POINT. The comparison
   * owns its own `heading` and `intro`, so there is exactly one source
   * for them across every page that renders this. A per-page override
   * would put a second one beside it and let a page state the
   * differentiator differently from the table underneath it.
   */
  comparison?: DifferentiatorComparison
}

export function Differentiator({
  density = 'standard',
  surface = 'brand',
  id = 'independent',
  comparison = differentiatorComparison,
}: DifferentiatorProps = {}) {
  return (

      <Section density={density} surface={surface} labelledBy={id}>
        {/*
          The heading is hand-rolled rather than `SectionHeading`, for
          the reason `AuthorityBand` hand-rolls its own: on the brand
          surface `SectionHeading`'s intro is `text-muted-foreground`,
          a mid grey tuned for a light background that has no business
          on navy. `opacity-90` on inherited white is the value
          `AuthorityBand` already uses here, reused rather than adding
          a second dark-surface treatment.
        */}
        <h2
          id={id}
          className="max-w-2xl text-h2 font-semibold tracking-tight text-balance"
        >
          {comparison.heading}
        </h2>
        <p className="mt-4 max-w-[var(--container-reading)] text-body-lg opacity-90">
          {comparison.intro}
        </p>

        {/*
          ===================================================================
          DESKTOP — a real table, because the rows must align
          ===================================================================
          `md:` and up. Row labels line up with both of their cells
          because they are cells in the same `<tr>`; two flowing lists
          would drift apart the moment one side wrapped.

          `border-separate` with spacing gives the cells their own
          rounded blocks while the table still owns the row tracks.
        */}
        <table className="mt-10 hidden w-full border-separate border-spacing-x-3 border-spacing-y-3 text-left md:table">
          <thead>
            <tr>
              {/*
                The criterion column has no visible header — the row
                labels name themselves — but the column still needs one
                for assistive technology, so it is visually hidden
                rather than empty.
              */}
              <th scope="col" className="w-[22%]">
                <span className="sr-only">Criterion</span>
              </th>
              <th
                scope="col"
                className="w-[39%] px-4 pb-1 align-bottom text-caption font-semibold tracking-wide uppercase opacity-70"
              >
                {comparison.contractorLabel}
              </th>
              <th
                scope="col"
                className="w-[39%] px-4 pb-1 align-bottom text-caption font-semibold tracking-wide uppercase opacity-70"
              >
                {comparison.oursLabel}
              </th>
            </tr>
          </thead>

          <tbody>
            {comparison.rows.map((row) => {
              const Icon = ROW_ICONS[row.icon]

              return (
                <tr key={row.id}>
                  <th
                    scope="row"
                    className="align-top text-base font-medium sm:whitespace-normal"
                  >
                    <span className="flex items-start gap-3">
                      {/*
                        28px, up from 20px on owner direction
                        (2026-09-04). The row label sits beside it in a
                        table cell with room to spare, so nothing had
                        to be traded for the size.
                      */}
                      <Icon className="mt-0.5 h-7 w-7 shrink-0 opacity-80" />
                      <span>{row.label}</span>
                    </span>
                  </th>

                  <td
                    className={`rounded-md p-4 align-top text-sm leading-6 ${CONTRACTOR_CELL}`}
                  >
                    {row.contractor}
                  </td>

                  {/*
                    ⚠ The green rule is on OUR column only. It is the
                    emphasis the owner asked for, and there is no
                    corresponding mark on the column beside it — see
                    the exception note in this file's header.
                  */}
                  <td
                    className={`rounded-md border-l-4 border-accent p-4 align-top text-sm leading-6 ${OURS_CELL}`}
                  >
                    {row.ours}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/*
          ===================================================================
          MOBILE — the same rows, stacked
          ===================================================================
          Below `md:`. Maps the SAME array as the table above, so the
          wording cannot diverge between the two layouts. The ours block
          keeps the desktop treatment so the emphasis reads the same at
          both sizes.
        */}
        <ul className="mt-10 flex flex-col gap-4 md:hidden">
          {comparison.rows.map((row) => {
            const Icon = ROW_ICONS[row.icon]

            return (
              <li
                key={row.id}
                className="rounded-md border border-white/15 p-4"
              >
                <h3 className="flex items-center gap-3 text-base font-medium">
                  <Icon className="h-7 w-7 shrink-0 opacity-80" />
                  {row.label}
                </h3>

                <div className={`mt-3 rounded-md p-3 ${CONTRACTOR_CELL}`}>
                  <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                    {comparison.contractorLabel}
                  </p>
                  <p className="mt-1 text-sm leading-6">{row.contractor}</p>
                </div>

                <div
                  className={`mt-2 rounded-md border-l-4 border-accent p-3 ${OURS_CELL}`}
                >
                  <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                    {comparison.oursLabel}
                  </p>
                  <p className="mt-1 text-sm leading-6">{row.ours}</p>
                </div>
              </li>
            )
          })}
        </ul>

        {/*
          The closing statement, set apart as the section's strongest
          single line. It sits on the brand surface rather than in a
          cell, so it reads as the conclusion of the table rather than
          as a fifth row of it.
        */}
        <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-6">
          <ConclusionIcon className="mt-0.5 h-8 w-8 shrink-0 text-accent" />
          <p className="max-w-[var(--container-reading)] text-body-lg">
            {comparison.conclusion}
          </p>
        </div>
      </Section>
  )
}
