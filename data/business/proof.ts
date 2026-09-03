/**
 * Proof data — gallery images and testimonials.
 *
 * Authority: docs/18-design-system.md §28-34 (photography), §69-70 (reviews)
 *            docs/01-business-brand-foundation.md §35
 *            CLAUDE.md §23, §76, §77
 *
 * ===========================================================================
 * BOTH ARRAYS ARE DELIBERATELY EMPTY
 * ===========================================================================
 * No approved photography exists (18 §28-34; §34 rules out unrealistic
 * AI imagery and staged stock).
 *
 * `testimonials` is empty for a different reason. Verified review data
 * DOES exist — DEC-084 built the review carousel from real St. Louis
 * Google reviews, in `data/reviews/reviews.ts`. Those reviews are
 * ST. LOUIS-scoped, and `TestimonialBand` renders on six templates
 * including `MarketPageTemplate`, so populating this array from them
 * would place St. Louis reviews on `/san-diego-ca/` and
 * `/las-vegas-nv/` automatically. CLAUDE.md §77 forbids reassigning a
 * review's market context (01 §35, 18 §69-70). See
 * `components/sections/ReviewMarquee.tsx` — that section exists
 * precisely so this one can stay gated.
 *
 * The sections that read these arrays return null while they are empty,
 * and the page composition closes around them. That is the intended
 * state, not an unfinished one.
 *
 * ⚠ DO NOT POPULATE EITHER ARRAY WITHOUT REAL, ATTRIBUTABLE SOURCE
 * MATERIAL.
 *
 * `source` is required on both types for exactly that reason: adding an
 * invented item means writing a citation that does not exist, which is
 * a deliberate obstacle rather than an inconvenience. The reference
 * style this composition came from specifies "one editable placeholder
 * testimonial" per page; this project cannot ship that, because a
 * placeholder quote on a public page is an invented one (CLAUDE.md §77).
 */

/** One gallery image. */
export interface ProofImage {
  /** Path under `public/`. Pre-optimized: `output: 'export'` disables the optimizer (02 §7, §8). */
  src: string
  /** Meaningful alt text (CLAUDE.md §55, §57). */
  alt: string
  /**
   * Caption.
   *
   * 18 §31: label example footage clearly, and never imply a specific
   * frame belongs to a specific customer's job unless it does.
   */
  caption: string
  /** Provenance of the asset. Required — see the header. */
  source: string
}

/**
 * No approved photography exists — 18 §28-34.
 *
 * When assets arrive, 18 §31 describes the strongest form this can
 * take: a real inspection frame paired with a plain-language
 * explanation of one condition (root intrusion, offset joint, buildup,
 * standing water), which §31 calls ownable to The Sewer Pros. Prefer
 * that over a generic four-photo strip.
 */
export const proofImages: readonly ProofImage[] = []

/** One verified testimonial. */
export interface Testimonial {
  quote: string
  /** First name or initial only (18 §69-70). Never a full name. */
  attribution: string
  /** Where the review was collected, and when. Required — see the header. */
  source: string
}

/**
 * Empty by design — not for want of reviews.
 *
 * Verified reviews live in `data/reviews/reviews.ts` (DEC-084), scoped
 * to St. Louis. Filling this array would surface them on every template
 * that renders `TestimonialBand`, including market pages for San Diego
 * and Las Vegas — reassigning their market context, which CLAUDE.md §77
 * forbids (01 §35, 18 §69-70). It needs a review cleared for
 * cross-market display, or market-scoped data this array does not model.
 *
 * CLAUDE.md §77 additionally forbids merging reviews or altering their
 * meaning. Reviews enter here verbatim with attribution, or not at all.
 */
export const testimonials: readonly Testimonial[] = []
