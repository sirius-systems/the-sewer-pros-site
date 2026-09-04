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

import type { CardImage } from '@/types'

/** One `label: value` row inside an offer card. */
export interface VerifiedOfferFact {
  label: string
  value: string
  /**
   * Renders the whole value at heading weight.
   *
   * ⚠ THE WHOLE VALUE, NEVER PART OF IT. This exists for the
   * availability row, where DEC-088 conditions the entire claim on its
   * hedge. Bolding "Same-day" and leaving "when scheduling permits" in
   * lighter text would be the exact subordination that entry forbids,
   * so emphasis is applied to the complete sentence or not at all.
   */
  emphasis?: boolean
}

export interface VerifiedOffer {
  /** Short label for compact placements (trust bar, confidence module). */
  label: string
  /** One sentence of accurate, non-guaranteeing detail. */
  detail: string
  /** Who confirmed this and when. */
  source: string
  /**
   * Optional approved artwork.
   *
   * Unset on both entries and intended to stay that way until real
   * photography exists. A card only grows to hold an image when it has
   * one; see the render in ConfidenceModule.tsx.
   */
  image?: CardImage
  /**
   * Expanded card content for `ConfidenceModule` (owner, 2026-09-04).
   *
   * ⚠ MORE STRUCTURE AROUND THE SAME TWO FACTS, NOT A NEW OFFER. DEC-088
   * approved exactly two things: a free estimate is available on
   * request, and same-day appointments are sometimes available on
   * weekdays. Everything below restates those in more detail. Nothing
   * here adds a price, a turnaround, a guarantee, a weekend, or an
   * emergency claim, and this field is not the place to smuggle one in
   * — a new offer still needs its own owner confirmation and
   * decision-log entry, exactly as the header says.
   *
   * Optional so `label`/`detail` alone still satisfies any future
   * compact consumer of this array.
   */
  card?: {
    eyebrow: string
    heading: string
    body: string
    facts: readonly VerifiedOfferFact[]
    action: { href: string; label: string }
    /**
     * Which accent the card wears.
     *
     * `blue` is `--accent-secondary`, `green` is `--accent`. Both are
     * DEC-096 tokens; neither is a new colour. The accent is carried by
     * a top rule and the mark, never by the claim text.
     */
    accent: 'blue' | 'green'
  }
}

export const verifiedOffers: readonly VerifiedOffer[] = [
  {
    label: 'Free estimate',
    detail:
      'Ask about a free estimate before scheduling a sewer inspection or cleaning.',
    source: 'Owner-confirmed 2026-09-01 — DEC-088',
    card: {
      eyebrow: 'Estimate options',
      heading: 'Ask About a Free Estimate',
      /*
        ⚠ "MAY BE AVAILABLE" IS WEAKER THAN DEC-088 ALLOWS, ON PURPOSE.
        That entry approved "available; ask before scheduling". Hedging
        further is always safe; the reverse is not. Do not tighten this
        to "free estimates are available" without re-reading DEC-088.

        No price, no dollar figure, no discount or coupon framing. This
        card says "ask whether you qualify", not "save money".
      */
      body:
        'Free estimates may be available before a sewer camera inspection or sewer cleaning. Tell us what is happening, which service you are considering, and where the property is located. We will explain what can be estimated before an appointment is scheduled.',
      facts: [
        {
          label: 'Available for',
          value: 'Sewer inspection and cleaning requests',
        },
        { label: 'Next step', value: 'Ask about eligibility before scheduling' },
      ],
      action: { href: '/contact/', label: 'Request an Estimate' },
      accent: 'blue',
    },
  },
  {
    label: 'Same-day appointments when available',
    detail:
      'Same-day appointments can be arranged when scheduling permits, Monday through Friday, 8:00am–4:00pm. Not available on weekends.',
    source: 'Owner-confirmed 2026-09-01 — DEC-088',
    card: {
      eyebrow: 'Scheduling',
      heading: 'Same-Day Appointments When Available',
      body:
        'Same-day sewer appointments may be available when the weekday schedule permits. Contact us early with your service and location information so we can check current availability.',
      /*
        ⚠ THE THIRD ROW IS NOT FINE PRINT AND MUST NOT BECOME IT. DEC-088
        requires this claim never imply weekend or 24-7 coverage, and the
        owner asked for the limits to build trust rather than hide. It
        renders at the same size, weight and colour as the two rows above
        it. Do not move it to a footnote, an asterisk, or a tooltip.
      */
      facts: [
        {
          label: 'Scheduling hours',
          value: 'Monday through Friday, 8:00am to 4:00pm',
        },
        {
          label: 'Availability',
          value: 'Same-day when scheduling permits',
          emphasis: true,
        },
        {
          label: 'Service limits',
          value:
            'Not available on weekends. We do not offer 24/7 or emergency service.',
        },
      ],
      action: { href: '/contact/', label: 'Check Appointment Availability' },
      accent: 'green',
    },
  },
] as const
