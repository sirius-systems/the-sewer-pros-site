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
    label: 'Serving St. Louis, San Diego, and Las Vegas',
    source: '01 §19, DEC-011 — approved markets',
  },
]

/**
 * The independent-model contrast (18 §64).
 *
 * ⚠ 18 §64: "Keep the presentation factual and non-accusatory."
 * 01 §72 and CLAUDE.md §32 are firmer still — do not claim competitors
 * are dishonest or that they recommend unnecessary work.
 *
 * The framing below therefore contrasts BUSINESS MODELS, not integrity.
 * A repair contractor selling repairs is a description of how that
 * business earns, not an accusation.
 *
 * ---------------------------------------------------------------------------
 * KEEP "CLEANING" IN THE CHAIN
 * ---------------------------------------------------------------------------
 * 18 §64 gives the motif as:
 *
 *   Inspection → Evidence → Cleaning/Next-Step Decision
 *
 * Cleaning belongs in the third step because it is an APPROVED SERVICE
 * (06; 01 §2.2, §3). Collapsing that step to "your decision" alone
 * implies the company only inspects and then hands the customer off,
 * which understates what it actually does and reads against 01 §3's
 * positioning of "inspection, diagnostics, locating, and cleaning".
 *
 * The wording stays plain-language rather than copying the doc's
 * title-case slash form; the three-beat structure and the cleaning
 * step are what §64 fixes.
 */
export const differentiatorContrast = {
  comparison: {
    heading: 'A contractor who also sells the repair',
    steps: ['Inspection', 'Repair recommendation', 'Repair sale'],
  },
  ours: {
    heading: 'The Sewer Pros',
    steps: [
      'Inspection',
      'Documented evidence',
      'Cleaning or your next-step decision',
    ],
  },
} as const

/**
 * The recurring process motif (18 §141).
 *
 * "Inspect → Understand → Decide" should become a recognisable part of
 * the design system.
 */
export const processMotif = ['Inspect', 'Understand', 'Decide'] as const
