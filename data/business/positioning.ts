/**
 * Approved positioning statements.
 *
 * Authority: docs/01-business-brand-foundation.md §3, §4, §5, §19, §21
 *            docs/18-design-system.md §63, §64, §71, §72
 *            docs/22-decisions-change-log.md DEC-011
 *
 * ===========================================================================
 * EVERY STRING HERE CITES ITS SOURCE
 * ===========================================================================
 * 18 §63 permits a trust bar of differentiators but requires: "Only use
 * factual statements."
 *
 * That is a narrow allowance. 01 §35 lists what may not be claimed
 * without documented evidence — years in business, inspections
 * completed, response times, licensing, ratings, certifications — and
 * 18 §71 forbids unsubstantiated superlatives ("#1", "best",
 * "top-rated", "most trusted", "leading").
 *
 * So each item below is a statement of business MODEL or SCOPE, both of
 * which are documented, rather than a claim of performance or
 * credentials, which are not. If a statement cannot cite a document,
 * it does not belong in this file.
 */

/** A trust-bar item. `source` is required — see the header. */
export interface TrustStatement {
  label: string
  /** The document section that establishes this as fact. */
  source: string
}

/**
 * Trust bar statements (18 §63).
 *
 * Deliberately four, matching 18 §63's own example count, and
 * deliberately unquantified.
 */
export const trustStatements: readonly TrustStatement[] = [
  {
    label: 'Independent inspection and diagnostics',
    source: '01 §4 — primary differentiator',
  },
  {
    label: 'Sewer and drain specialists, not general plumbing',
    source: '01 §2.2 — business category',
  },
  {
    label: 'No repair-driven upselling',
    source: '01 §3 — core positioning',
  },
  {
    /*
      ⚠ THE BULLETS ARE THE SEPARATOR, ON OWNER DIRECTION (2026-09-05).
      Commas and "and" were removed so the three markets read as a list
      of equals rather than a sentence.

      ⚠ THIS EXACT STRING IS ALSO A KEY IN `TRUST_ICONS`
      (components/sections/TrustBar.tsx). The icon is looked up by
      label, so editing one without the other drops the map pin
      SILENTLY - the component renders the statement with no mark
      rather than failing. Change both or neither.
    */
    label: 'Serving St. Louis • San Diego • Las Vegas',
    source: '01 §19, DEC-011 — approved markets',
  },
]

/**
 * ⚠ THE COMPARISON-TABLE VARIANT THAT USED TO LIVE HERE IS RETIRED.
 * `ComparisonRow`, `DifferentiatorComparison` and `differentiatorComparison`
 * ("Diagnosis separated from the sale", the "contractor that also sells
 * repairs" vs. "The Sewer Pros" table) were removed 2026-09-22 when the
 * site-wide swap to `IndependentProcess` (`components/sections/
 * IndependentProcess.tsx`) removed their last caller,
 * `components/sections/Differentiator.tsx`, also removed. See
 * `docs/22-decisions-change-log.md` for the decision-log entry.
 * `IndependentProcess`'s content is fixed inline in that component
 * rather than data-driven from this file — it is the same on every
 * page it renders on, so there is nothing here for it to read.
 */

/**
 * The recurring process motif (18 §141).
 *
 * "Inspect → Understand → Decide" should become a recognisable part of
 * the design system.
 */
export const processMotif = ['Inspect', 'Understand', 'Decide'] as const
