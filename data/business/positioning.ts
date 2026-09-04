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

/* ==========================================================================
   Differentiator comparison — the homepage `comparison-table` variant
   ========================================================================== */

/** One criterion, with both business models' outcome for it. */
export interface ComparisonRow {
  id: string
  label: string
  /** Which mark represents this row — mapped to a component, not a raw name. */
  icon: 'business-model' | 'what-you-receive' | 'what-happens-next' | 'repair-incentive'
  contractor: string
  ours: string
}

export interface DifferentiatorComparison {
  heading: string
  intro: string
  contractorLabel: string
  oursLabel: string
  rows: readonly ComparisonRow[]
  conclusion: string
}

/**
 * The model contrast as an aligned comparison (owner, 2026-09-04).
 *
 * THE ONLY SOURCE FOR THIS SECTION, ON EVERY PAGE THAT RENDERS IT
 * (DEC-099). It replaced the plain two-column step lists this file
 * used to hold, when the comparison table went site-wide and that
 * export lost its last caller. 18 §141's
 * "Inspection -> Evidence -> Cleaning/Next-Step Decision" motif that
 * they carried now lives in the `what-happens-next` row below, which
 * keeps cleaning in the chain for the same reason: cleaning is an
 * approved service (06; 01 §2.2, §3), not a hand-off.
 *
 * ===========================================================================
 * ⚠ THE TONE CONSTRAINT IS UNCHANGED AND STILL BINDING
 * ===========================================================================
 * 18 §64 requires the presentation stay "factual and non-accusatory";
 * 01 §72 and CLAUDE.md §32 forbid claiming competitors are dishonest
 * or recommend unnecessary work. Every `contractor` string below is
 * hedged to a MODEL and an INCENTIVE — "may perform", "may earn
 * revenue" — because that is a description of how a business earns,
 * not a claim about what it does to a customer.
 *
 * ⚠ DO NOT SHARPEN THESE. Dropping a "may", adding "instead of
 * telling you the truth", or pairing a row with a cross or a warning
 * colour turns a structural contrast into an accusation, which is the
 * one thing this section may not do. The visual emphasis added on the
 * homepage is emphasis on OUR column, never a mark against theirs —
 * see the exception note in `Differentiator`.
 *
 * ⚠ NO NEW CLAIM ABOUT REPAIR CONTRACTORS IN GENERAL. Each row states
 * only what follows from a company performing the repair it
 * recommends, which is a definition rather than a finding.
 *
 * The `ours` side asserts nothing the site does not already say: no
 * repair or replacement (CLAUDE.md §9), video evidence the customer
 * keeps, cleaning as an approved service (06; 01 §2.2, §3).
 */
export const differentiatorComparison: DifferentiatorComparison = {
  heading: 'Diagnosis separated from the sale',
  intro:
    'We inspect, document, and clean sewer lines. We do not perform sewer repair or replacement, so what we find does not become a repair quote from us.',
  contractorLabel: 'A contractor that also sells repairs',
  oursLabel: 'The Sewer Pros',
  rows: [
    {
      id: 'business-model',
      label: 'Business model',
      icon: 'business-model',
      contractor:
        'Inspects the sewer line and may perform the repair it recommends.',
      ours:
        'We inspect, document, and clean sewer lines, but do not perform sewer repair or replacement.',
    },
    {
      id: 'what-you-receive',
      label: 'What you receive',
      icon: 'what-you-receive',
      contractor:
        "Inspection findings that may lead directly to the contractor's own repair quote.",
      ours: 'Video evidence and documented findings you can keep.',
    },
    {
      id: 'what-happens-next',
      label: 'What happens next',
      icon: 'what-happens-next',
      contractor: 'The same company may recommend and sell the repair.',
      ours:
        'You decide whether to clean the line, monitor the condition, or consult a separate repair provider.',
    },
    {
      id: 'repair-incentive',
      label: 'Repair incentive',
      icon: 'repair-incentive',
      contractor: 'The contractor may earn revenue from the repair it recommends.',
      ours: 'We do not profit from a repair recommendation.',
    },
  ],
  conclusion:
    'Our job is to show you what is happening inside the line. The decision about what happens next remains yours.',
}

/**
 * The recurring process motif (18 §141).
 *
 * "Inspect → Understand → Decide" should become a recognisable part of
 * the design system.
 */
export const processMotif = ['Inspect', 'Understand', 'Decide'] as const
