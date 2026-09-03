/**
 * Google reviews — St. Louis Google Business Profile.
 *
 * Authority: docs/01-business-brand-foundation.md §20, §21, §35
 *            docs/18-design-system.md §69-70, §120
 *            docs/22-decisions-change-log.md DEC-020, DEC-028, DEC-035,
 *              DEC-036, DEC-072, DEC-083, DEC-084
 *            CLAUDE.md §23, §71, §77
 *
 * ===========================================================================
 * THIS IS REAL, ATTRIBUTED, THIRD-PARTY REVIEW DATA
 * ===========================================================================
 * `google-reviews.json` is a one-time export of the public reviews on
 * the St. Louis Google Business Profile, supplied by the business owner
 * on 2026-08-31 (DEC-084). Every entry carries the reviewer's public
 * name and a link to their public Google profile, so every quote on the
 * site is checkable against its source.
 *
 * This is what CLAUDE.md §77 requires and what `data/business/proof.ts`
 * has been waiting for. It does NOT relax §77 for anything else: no
 * quote here may be edited, merged, shortened into a punchier version,
 * or re-attributed, and no market other than St. Louis may show these.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ST. LOUIS ONLY — THIS IS NOT A SITEWIDE PROOF ASSET
 * ---------------------------------------------------------------------------
 * Only St. Louis has a Google Business Profile (01 §21; DEC-020).
 * San Diego and Las Vegas have none identified (DEC-021, DEC-022), and
 * 01 §20 forbids copying one market's business facts to another.
 *
 * These reviews may appear on the sitewide homepage and on St. Louis
 * pages. They must NOT appear on `/san-diego-ca/` or `/las-vegas-nv/`
 * or their location pages.
 *
 * This is why the carousel is a SEPARATE section from `TestimonialBand`
 * rather than a population of `data/business/proof.ts`. `TestimonialBand`
 * renders on six templates including `MarketPageTemplate`, so filling
 * its array would have put St. Louis reviews onto San Diego and Las
 * Vegas market pages automatically. `proof.ts` stays empty.
 *
 * ---------------------------------------------------------------------------
 * NO REVIEW SCHEMA — DEC-028
 * ---------------------------------------------------------------------------
 * DEC-028 rejects self-serving review markup pursued for rating stars.
 * These reviews are presentation and conversion material only. Do NOT
 * emit `Review`, `AggregateRating`, or a `ratingValue` from this data.
 *
 * That holds even though eight records now carry a verified `stars`
 * value (DEC-084). Visible stars on a quote are presentation, which
 * DEC-028 explicitly permits — "authentic reviews remain important
 * visually and for conversion". Emitting them as markup to chase rating
 * snippets is the thing DEC-028 rejects. The two are not the same act.
 *
 * ⚠ The profile's OVERALL average and total review count ARE now
 * published, as visible text only — see `ratingSnapshot` below
 * (DEC-085). That approval is explicitly for human-readable content and
 * does NOT extend to schema: no `AggregateRating` node, no
 * `ratingValue`, no `reviewCount` property. DEC-085 restates DEC-028 as
 * remaining in force.
 *
 * ---------------------------------------------------------------------------
 * STATIC SNAPSHOT — IT WILL GO STALE
 * ---------------------------------------------------------------------------
 * This is a hand-transcribed export, not a live feed. It will not
 * reflect reviews posted, edited, or deleted on Google after
 * `capturedOn`. Refresh it periodically by re-exporting.
 *
 * Google's own Places API returns at most five reviews, so a live sync
 * at this scale means a paid third-party widget service. That remains a
 * reasonable future upgrade; it is not what this is.
 */

import raw from './google-reviews.json'

/**
 * One public Google review, exactly as captured.
 *
 * No `date`: Google publishes only relative time ("3 months ago"), and
 * converting that to a calendar date would invent precision the source
 * does not have (CLAUDE.md §23, §78).
 */
export interface GoogleReview {
  /** Reviewer's public display name on Google. Never abbreviated here. */
  name: string
  /** Public Google profile — makes every quote checkable at source. */
  profileUrl: string
  /** Relative, as Google shows it. Rendered verbatim. */
  relativeDate: string
  /** Full text as captured. See `isTruncated`. */
  quote: string
  isLocalGuide: boolean
  reviewerReviewCount: number | null
  reviewerPhotoCount: number | null
  /**
   * Star rating, ONLY where it was individually verified against the
   * live listing. `null` everywhere else.
   *
   * =========================================================================
   * ⚠ COVERAGE IS PARTIAL — 8 OF 278, AND null MEANS UNKNOWN
   * =========================================================================
   * The original export carried no star values. A live verification pass
   * confirmed 5 stars for eight reviews individually; Google Maps
   * throttled the scroll before the rest could be read (DEC-084).
   *
   * `null` means NOT VERIFIED. It does not mean unrated, and it
   * certainly does not mean low.
   *
   * ⚠ DO NOT backfill these from the aggregate. The profile's overall
   * average is high, and it is still a distribution containing one-star
   * and two-star reviews — assuming 5 for an unverified record would
   * manufacture a rating for a specific named person's review, which is
   * exactly what CLAUDE.md §23 and §77 forbid. Backfilling requires
   * per-review verification, not arithmetic.
   *
   * The component renders a star row only where this is non-null, and
   * shows nothing at all otherwise — no placeholder, no greyed row, no
   * assumed value.
   */
  stars: number | null
}

const allReviews = raw as readonly GoogleReview[]

/**
 * Date the export was taken. Everything here is a snapshot of this day.
 */
export const capturedOn = '2026-08-31'

/** The only market these reviews may be shown for. See the header. */
export const reviewsMarketId = 'st-louis-mo'

/**
 * The profile's overall rating and review count — approved for
 * publication as VISIBLE TEXT ONLY (DEC-085).
 *
 * ===========================================================================
 * A SNAPSHOT, NOT A COUNTER
 * ===========================================================================
 * `verifiedAt` is the point this was read off the live listing. It is a
 * required field, not decoration: DEC-085 approves publishing the
 * figure *labelled as a point-in-time reading*, and the UI renders that
 * date alongside it. A bare "4.9 from 595 reviews" with no date would
 * assert something this project cannot support — that the number is
 * current.
 *
 * Refresh it whenever the review dataset itself is refreshed.
 *
 * ---------------------------------------------------------------------------
 * ⚠ TEXT ONLY — NO SCHEMA
 * ---------------------------------------------------------------------------
 * DEC-028 rejects self-serving review markup and DEC-085 explicitly
 * leaves it in force. Do NOT feed these values into `AggregateRating`,
 * `ratingValue`, `reviewCount`, or any other structured-data property.
 * The approval covers what a visitor reads, not what a crawler parses.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ST. LOUIS ONLY
 * ---------------------------------------------------------------------------
 * This is the St. Louis profile's rating. 01 §20-21 and DEC-085 forbid
 * showing or implying it for San Diego or Las Vegas, which have no GBP.
 *
 * ---------------------------------------------------------------------------
 * The distribution is recorded but NOT rendered
 * ---------------------------------------------------------------------------
 * DEC-085 approves the rating and the count. The per-star breakdown is
 * its verification basis, kept here because it is the evidence and
 * because it is the standing argument against backfilling `stars` from
 * the average — the profile contains one- and two-star reviews, so "the
 * average is 4.9" does not make any particular unverified review a 5.
 *
 * Checked when recorded: the five buckets sum to 595, and the implied
 * mean is 4.9025, which rounds to the stated 4.9. The figures
 * corroborate each other rather than being three separate assertions.
 */
export interface RatingSnapshot {
  rating: number
  reviewCount: number
  /** ISO date the live listing was read. Rendered with the figure. */
  verifiedAt: string
  /** Verification basis. Not for display — see above. */
  distribution: Readonly<Record<1 | 2 | 3 | 4 | 5, number>>
}

export const ratingSnapshot: RatingSnapshot = {
  rating: 4.9,
  reviewCount: 595,
  verifiedAt: '2026-09-01',
  distribution: { 5: 575, 4: 7, 3: 0, 2: 1, 1: 12 },
}

/**
 * Link to the full, unfiltered profile on Google.
 *
 * ⚠ NULL because no Google Business Profile URL is documented anywhere
 * in this repository — not in `organization.ts` (which has no `sameAs`
 * at all, per 15 §27), not in the market registry, not in doc 01 or 11.
 *
 * CLAUDE.md §23 forbids filling that gap with a plausible-looking Maps
 * URL. When the owner supplies the real one, set it here and the
 * carousel's "See all reviews on Google" link appears on its own.
 *
 * That link matters beyond convenience: it is where a visitor sees the
 * complete picture including the reviews excluded below. Until it
 * exists, the carousel says so in plain words rather than implying the
 * selection is everything.
 */
export const googleProfileReviewsUrl: string | null = null

/**
 * Reviews withheld from the carousel, each with the rule that withholds
 * it.
 *
 * ===========================================================================
 * WHY A NAMED LIST INSTEAD OF A PRE-FILTERED FILE
 * ===========================================================================
 * `google-reviews.json` holds the export UNCHANGED, and exclusions live
 * here as data. So the count that was removed is visible, each removal
 * states its reason, and reversing one is a one-line edit rather than a
 * re-export. Quietly deleting rows from the JSON would leave no trace
 * that a selection was ever made.
 *
 * ⚠ NONE of this is a claim these reviews are fake or that they are
 * hidden. They are public on Google and stay public on Google. This
 * list governs one marketing carousel.
 *
 * Two different reasons are mixed here deliberately, and the second is
 * the one worth understanding:
 *
 *   1. NEGATIVE — a marketing carousel is not the venue for an
 *      unresolved dispute.
 *
 *   2. CLAIM CONFLICT — the review is positive, but quoting it in a
 *      company-curated carousel would publish a claim this project has
 *      specifically ruled out. A customer describing same-day service
 *      is reporting their own experience; The Sewer Pros REPEATING it
 *      as selected marketing copy is making an availability claim.
 *      DEC-035 (no unverified emergency/same-day), DEC-036 (no
 *      unverified pricing claims), and DEC-083 (published hours are
 *      Monday to Friday) all bind the company, and choosing which
 *      quotes to feature is a company act.
 */
export interface ReviewExclusion {
  profileUrl: string
  name: string
  reason: string
}

export const excludedReviews: readonly ReviewExclusion[] = [
  {
    name: 'Brian Markowitz',
    profileUrl:
      'https://www.google.com/maps/contrib/105258453558610668556/reviews?hl=en-US',
    reason:
      'NEGATIVE — disputes technician licensing and experience. Public on ' +
      'Google; not carousel material. ⚠ Note its subject: it contests ' +
      'licensing, which is exactly the evidence question left open at ' +
      'DEC-063 criterion 7 and still unresolved (see DEC-080 and doc 22 ' +
      '§39). Do not treat excluding it as answering it.',
  },
  {
    name: 'andy dv',
    profileUrl:
      'https://www.google.com/maps/contrib/108382948439845096398/reviews?hl=en-US',
    reason:
      'CLAIM CONFLICT — "came out same-day to help me with an urgent ' +
      'matter". Featuring it would advertise same-day and emergency ' +
      'availability. DEC-035; CLAUDE.md §11.',
  },
  {
    name: 'Ben',
    profileUrl:
      'https://www.google.com/maps/contrib/108941836893863475537/reviews?hl=en-US',
    reason:
      'CLAIM CONFLICT — "completed it same day" plus "still cheaper than ' +
      'the quotes from their competitors". Same-day availability and a ' +
      'comparative price claim. DEC-035, DEC-036.',
  },
  {
    name: 'SH',
    profileUrl:
      'https://www.google.com/maps/contrib/116791268133088296139/reviews?hl=en-US',
    reason:
      'CLAIM CONFLICT — "about half the price of the other companies". A ' +
      'comparative pricing claim with no substantiation. DEC-036; ' +
      'CLAUDE.md §71.',
  },
  {
    name: 'Vicki J. Harp',
    profileUrl:
      'https://www.google.com/maps/contrib/100306114139655826380/reviews?hl=en-US',
    reason:
      'CLAIM CONFLICT — "You work on Saturdays if I need you" directly ' +
      'contradicts the published hours this site states, Monday to ' +
      'Friday, closed weekends (DEC-083). Featuring it would advertise ' +
      'weekend availability the business does not publish.',
  },
  {
    name: 'Victoria Krylov',
    profileUrl:
      'https://www.google.com/maps/contrib/102939052114483520392/reviews?hl=en-US',
    reason:
      'CLAIM CONFLICT — "finish the job in the same day" plus exposing a ' +
      'buried sewer vent in the yard. Same-day completion (DEC-035) and ' +
      'excavation-shaped work, which is not an approved service ' +
      '(CLAUDE.md §4, DEC-013).',
  },
]

const excludedUrls = new Set(excludedReviews.map((e) => e.profileUrl))

/**
 * Reviews pinned to the front of the rotation.
 *
 * Chosen because each states the independent-inspection model in a
 * customer's own words — the differentiator 01 §12 and DEC-012 put at
 * the centre of this business — or comes from a named real-estate
 * professional, the audience cluster DEC-029 makes strategic.
 *
 * Ordering choice only. No quote is altered, and nothing here is
 * excluded from the rest of the carousel.
 */
const pinnedUrls: readonly string[] = [
  // "they don't do repairs themselves, so they're obviously not out
  // there making up problems to get more money" — Brenna Race
  'https://www.google.com/maps/contrib/100323275398145958719/reviews?hl=en-US',
  // "He also discouraged me from doing unnecessary, costly procedures"
  // — Laura Ribeiro
  'https://www.google.com/maps/contrib/108120115031833439467/reviews?hl=en-US',
  // "I was recommended by two others for a second opinion" — Janet Rhodes
  'https://www.google.com/maps/contrib/110016574883528341989/reviews?hl=en-US',
  // "They also didn't try to up sell me" — Nadine Risman
  'https://www.google.com/maps/contrib/105735436110082880381/reviews?hl=en-US',
  // Named real-estate agent, repeat referrer — Christy Christensen-Walls
  'https://www.google.com/maps/contrib/103953318193475797513/reviews?hl=en-US',
  // Most recent detailed review; charged for cleaning only — Yu Ma
  'https://www.google.com/maps/contrib/101463023415017386350/reviews?hl=en-US',
]

/**
 * Approximate age in months, derived from the relative date string.
 *
 * ORDERING KEY ONLY. This is not a publication date and must never be
 * rendered or written into schema — Google publishes relative time, and
 * turning "a year ago" into a specific day would invent precision the
 * source does not have (CLAUDE.md §23; DEC-028 keeps it out of schema
 * regardless).
 *
 * Unparseable strings sort last rather than crashing or silently
 * becoming zero, which would float them to the front as "newest".
 */
function ageInMonths(relativeDate: string): number {
  const cleaned = relativeDate.replace(/^Edited\s+/i, '').trim()
  const match = /^(a|an|\d+)\s+(day|week|month|year)s?\s+ago$/i.exec(cleaned)
  if (match === null) return Number.MAX_SAFE_INTEGER

  const [, rawCount, unit] = match
  const count = /^an?$/i.test(rawCount ?? '') ? 1 : Number(rawCount)
  const perUnit: Record<string, number> = {
    day: 1 / 30,
    week: 1 / 4,
    month: 1,
    year: 12,
  }
  return count * (perUnit[unit?.toLowerCase() ?? ''] ?? Number.MAX_SAFE_INTEGER)
}

/**
 * A quote Google itself cut off, ending in its "… More" affordance.
 *
 * The full text is NOT available — expanding these on Google is what
 * the reviewer link is for. The carousel must not offer a "read more"
 * control on one of these, because there is nothing further to reveal
 * and the control would imply the site is withholding text it has.
 */
export function isTruncated(review: GoogleReview): boolean {
  return review.quote.includes('… More')
}

/**
 * Every review cleared for the carousel, pinned first, then newest.
 *
 * `allReviews` stays available unfiltered for auditing what was cut.
 */
export const publishedReviews: readonly GoogleReview[] = [
  ...allReviews.filter((r) => !excludedUrls.has(r.profileUrl)),
].sort((a, b) => {
  const pinA = pinnedUrls.indexOf(a.profileUrl)
  const pinB = pinnedUrls.indexOf(b.profileUrl)
  if (pinA !== -1 || pinB !== -1) {
    if (pinA === -1) return 1
    if (pinB === -1) return -1
    return pinA - pinB
  }
  return ageInMonths(a.relativeDate) - ageInMonths(b.relativeDate)
})

/** Total captured, before exclusions — for the audit trail. */
export const capturedReviewCount = allReviews.length

/**
 * How many published reviews carry a verified star value.
 *
 * Exported so the gap is countable rather than a claim in a comment.
 * The backfill pass is done when this equals `publishedReviews.length`.
 */
export const verifiedStarCount = publishedReviews.filter(
  (r) => r.stars !== null,
).length

/**
 * How many reviews the marquee carries.
 *
 * 50 is an upper bound, not a target. The marquee duplicates its set
 * back to back for the seamless loop, so this is 100 rendered cards;
 * putting all 278 in would be 556 nodes of DOM for no gain, and would
 * bury the strongest proof behind the merely-present.
 *
 * Do not raise this without re-checking scroll smoothness on a real
 * mid-range phone. The reference implementation this was measured
 * against runs 47 reviews / 94 cards.
 */
export const MARQUEE_REVIEW_COUNT = 50

/**
 * The curated marquee set.
 *
 * `publishedReviews` is already ordered the way this wants: pinned
 * reviews first, because each states the independent-inspection model
 * in a customer's own words, then newest by age. Taking the head of
 * that list is "strongest, then most recent" without a second
 * ordering to keep in sync.
 *
 * Not a claim of completeness. The section's footer says plainly that
 * this is a selection, which is the line that keeps a curated subset
 * honest (CLAUDE.md §23).
 */
export const marqueeReviews: readonly GoogleReview[] = publishedReviews.slice(
  0,
  MARQUEE_REVIEW_COUNT,
)

/** 18 §120 — the section omits itself rather than render an empty shell. */
export function reviewMarqueeRenders(): boolean {
  return publishedReviews.length > 0
}
