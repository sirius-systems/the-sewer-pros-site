/**
 * Authority-band proof points.
 *
 * Authority: docs/01-business-brand-foundation.md §2.2, §3, §4.1
 *            docs/18-design-system.md §63, §64
 *            CLAUDE.md §23, §32, §71, §72
 *
 * ===========================================================================
 * EVERY STRING HERE CITES ITS SOURCE
 * ===========================================================================
 * Same rule as `trustStatements` in `positioning.ts`. Each item states
 * the business MODEL or the documented PROCESS, both of which are
 * written down, rather than performance, credentials, response times,
 * ratings, or years of experience, which are not (01 §35, CLAUDE.md §23).
 *
 * No superlatives (CLAUDE.md §71). No accusation of competitors
 * (CLAUDE.md §32, 18 §64's "factual and non-accusatory") — describing
 * an incentive structure is description; describing integrity is not.
 *
 * ---------------------------------------------------------------------------
 * DISTINCT FROM `trustStatements`
 * ---------------------------------------------------------------------------
 * `trustStatements` states SCOPE: what the business is and where it
 * works. These state HOW THE WORK IS DONE. Both appear on most pages —
 * the trust bar near the top, this band lower down — so overlapping
 * copy would read as repetition rather than reinforcement (18 §155).
 */

export interface AuthorityProofPoint {
  label: string
  detail: string
  /** The document section that establishes this as fact. Required. */
  source: string
}

/**
 * Four points, matching the reference composition's 4-item proof row.
 *
 * `AuthorityBand` renders nothing below three items rather than
 * padding the grid, so removing an item that cannot be sourced is
 * always safe.
 */
export const authorityProofPoints: readonly AuthorityProofPoint[] = [
  {
    label: 'The inspection is the product',
    detail:
      'Finding out what is happening in the line is the job, not a step toward selling a repair.',
    source:
      '01 §3 — positioning "without repair-driven upselling"; 01 §4.1 — repair is not the core objective of the inspection',
  },
  {
    label: 'You see the evidence',
    detail:
      'Conditions found in the line are documented so you can look at them yourself.',
    source:
      '01 §4.1 — documentation, evidence, transparency; 18 §64 — Inspection → Evidence',
  },
  {
    label: 'Sewer and drain specialists',
    detail:
      'Sewer inspection, diagnostics, locating, and cleaning, rather than general plumbing.',
    source:
      '01 §2.2 — business category; "should not be broadly described as a general plumbing company"',
  },
  {
    label: 'The next step stays your decision',
    detail:
      'If the line needs work beyond cleaning, you decide what to do about it and who does it.',
    source:
      '01 §4.1 — informed decision-making, before committing to a major sewer decision; 18 §64 — next-step decision',
  },
]
