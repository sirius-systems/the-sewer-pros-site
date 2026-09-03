/**
 * Verified customer-facing offers.
 *
 * Authority: docs/22-decisions-change-log.md DEC-088
 *            docs/01-business-brand-foundation.md §35
 *            CLAUDE.md §11, §23
 *
 * ===========================================================================
 * ⚠ EVERY ENTRY HERE MUST BE OWNER-CONFIRMED, NOT INVENTED
 * ===========================================================================
 * `data/business/organization.ts` lists "same-day service", "free
 * inspections", and "free estimates" among `CLAIMS_REQUIRING_VERIFICATION`
 * — claims that must never be invented (CLAUDE.md §11, §23). This file is
 * the verification: the two entries below are owner-confirmed (Sedrick,
 * 2026-09-01, DEC-088), which is what makes them usable rather than a
 * placeholder or a plausible guess (01 §24 — the business's own statement
 * about itself is evidence).
 *
 * That does not make this file a free pass to add more offers later.
 * A new entry needs the same thing these two got: an explicit owner
 * confirmation and a decision-log entry, not an assumption.
 *
 * ---------------------------------------------------------------------------
 * SAME-DAY SERVICE IS HEDGED ON PURPOSE
 * ---------------------------------------------------------------------------
 * Published hours are Monday–Friday, 8:00am–4:00pm, weekends closed
 * (`data/business/organization.ts`). That schedule rules out a same-day
 * GUARANTEE or an emergency/24-7 claim — it does not rule out same-day
 * appointments sometimes being available during the week, which is what
 * the owner confirmed. The copy must preserve that distinction: describe
 * availability, never promise it.
 */

export interface VerifiedOffer {
  /** Short label for compact placements (trust bar, confidence module). */
  label: string
  /** One sentence of accurate, non-guaranteeing detail. */
  detail: string
  /** Who confirmed this and when. */
  source: string
}

export const verifiedOffers: readonly VerifiedOffer[] = [
  {
    label: 'Free estimate',
    detail:
      'Ask about a free estimate before scheduling a sewer inspection or cleaning.',
    source: 'Owner-confirmed 2026-09-01 — DEC-088',
  },
  {
    label: 'Same-day appointments when available',
    detail:
      'Same-day appointments can sometimes be arranged Monday through Friday, 8:00am–4:00pm, depending on scheduling — not guaranteed, and not available on weekends.',
    source: 'Owner-confirmed 2026-09-01 — DEC-088',
  },
] as const
