/**
 * Google reviews - The Sewer Pros, St. Louis and San Diego Google Business
 * Profiles.
 *
 * Authority: docs/01-business-brand-foundation.md sections 20-21, 35
 *            docs/18-design-system.md sections 69-70, 120
 *            docs/22-decisions-change-log.md DEC-020, DEC-028, DEC-035,
 *              DEC-036, DEC-072, DEC-083, DEC-084, DEC-085, DEC-100, DEC-103
 *            CLAUDE.md sections 23, 24, 28
 *
 * ===========================================================================
 * REAL, ATTRIBUTED, THIRD-PARTY REVIEW DATA - ONE COMPANY, ALL MARKETS
 * ===========================================================================
 * `google-reviews.json` is an export of the public text reviews on the
 * two Google Business Profiles The Sewer Pros operates (St. Louis and
 * San Diego), read live on `capturedOn`. Every entry carries the
 * reviewer's public name and a link to their public Google profile, so
 * every quote on the site is checkable against its source.
 *
 * The Sewer Pros is one company. Reviews from either profile may appear
 * on any page, including San Diego and Las Vegas pages. The `market`
 * field records which profile a review was written on so the reviews
 * page can say so; it is NOT a display restriction. (Owner decision,
 * 2026-11-22.) What stays forbidden is unchanged: no quote here may be
 * edited, merged, shortened, or re-attributed, and none of this implies
 * a physical office or Google profile in a market that has none
 * (CLAUDE.md sections 10-11).
 *
 * ---------------------------------------------------------------------------
 * NO REVIEW SCHEMA - DEC-028
 * ---------------------------------------------------------------------------
 * Reviews and ratings are visible presentation only. Do NOT emit
 * `Review`, `AggregateRating`, `ratingValue` or `reviewCount` from this
 * data. DEC-085 approved the figures as human-readable text and restates
 * DEC-028 as remaining in force.
 *
 * ---------------------------------------------------------------------------
 * STATIC SNAPSHOT - IT WILL GO STALE
 * ---------------------------------------------------------------------------
 * This is an export, not a live feed. It does not reflect reviews posted,
 * edited, or deleted on Google after `capturedOn`. Refresh it by
 * re-exporting both profiles and updating `ratingSnapshot`.
 */

import raw from './google-reviews.json'

/**
 * One public Google review, exactly as captured.
 *
 * No `date`: Google publishes only relative time ("3 months ago"), and
 * converting that to a calendar date would invent precision the source
 * does not have (CLAUDE.md §23, §78).
 */
export type ReviewMarket = 'st-louis-mo' | 'san-diego-ca'

/** Themes a review touches. A review may carry several, or none. */
export type ReviewTopic =
  | 'real-estate'
  | 'landlord'
  | 'cleaning'
  | 'honest'
  | 'inspection'

/**
 * One public Google review, exactly as captured.
 *
 * No `date`: Google publishes only relative time ("3 months ago"), and
 * converting that to a calendar date would invent precision the source
 * does not have (CLAUDE.md section 23).
 */
export interface GoogleReview {
  /** Reviewer's public display name on Google. Never abbreviated here. */
  name: string
  /** Public Google profile - makes every quote checkable at source. */
  profileUrl: string
  /** Relative, as Google shows it. Rendered verbatim. */
  relativeDate: string
  /** Full text as captured, expanded past Google's "More" cut-off. */
  quote: string
  isLocalGuide: boolean
  reviewerReviewCount: number | null
  reviewerPhotoCount: number | null
  /** Star rating read from the live listing for every record. */
  stars: number | null
  /** Which Google Business Profile the review was written on. */
  market: ReviewMarket
  /** Keyword-derived themes, used only for filtering on /reviews/. */
  topics: readonly ReviewTopic[]
}

const allReviews = raw as readonly GoogleReview[]

/** Date both profiles were read. Everything here is a snapshot of this day. */
export const capturedOn = '2026-11-22'

/**
 * The two Google Business Profiles the reviews come from.
 *
 * `ratings` is the per-star count of every rating read on `capturedOn`
 * (text reviews and rating-only reviews). `listedCount` is the total
 * Google displayed; San Diego listed 284 and 283 loaded, so one rating
 * was not readable and is not counted.
 */
export interface GoogleProfile {
  marketId: ReviewMarket
  /** Short label for the profile. */
  label: string
  /** Link to the profile on Google, supplied by the business owner. */
  url: string
  listedCount: number
  distribution: Readonly<Record<1 | 2 | 3 | 4 | 5, number>>
}

export const googleProfiles: readonly GoogleProfile[] = [
  {
    marketId: 'st-louis-mo',
    label: 'St. Louis',
    url: 'https://share.google/ao4sfGaBLNpbIYygj',
    listedCount: 596,
    distribution: { 5: 576, 4: 7, 3: 0, 2: 1, 1: 12 },
  },
  {
    marketId: 'san-diego-ca',
    label: 'San Diego',
    url: 'https://share.google/dSnq8FvXKTsrc1TmU',
    listedCount: 284,
    distribution: { 5: 277, 4: 4, 3: 0, 2: 0, 1: 2 },
  },
]

/**
 * The combined rating and review count, published as VISIBLE TEXT ONLY
 * (DEC-085, DEC-100, DEC-103).
 *
 * A SNAPSHOT, NOT A COUNTER: `verifiedAt` is the day the listings were
 * read and the UI renders it beside the figure. The count is the number
 * of ratings actually read (879), not Google's listed total (880), and
 * the buckets sum to it. Checked when recorded: the implied mean is
 * 4.9204, which rounds to 4.9.
 *
 * TEXT ONLY, NO SCHEMA (DEC-028). The distribution is the verification
 * basis and is not rendered.
 */
export interface RatingSnapshot {
  rating: number
  reviewCount: number
  /** ISO date the live listings were read. Rendered with the figure. */
  verifiedAt: string
  /** Verification basis. Not for display. */
  distribution: Readonly<Record<1 | 2 | 3 | 4 | 5, number>>
}

export const ratingSnapshot: RatingSnapshot = {
  rating: 4.9,
  reviewCount: 879,
  verifiedAt: '2026-11-22',
  distribution: { 5: 853, 4: 11, 3: 0, 2: 1, 1: 14 },
}

/** Google profile links, for "See all reviews on Google". */
export const googleProfileReviewsUrl: string | null = googleProfiles[0]?.url ?? null

/**
 * Reviews withheld from the carousel, each with the rule that withholds
 * it.
 *
 * ===========================================================================
 * WHY A NAMED LIST INSTEAD OF A PRE-FILTERED FILE
 * ===========================================================================
 * `google-reviews.json` holds every text review from the export UNCHANGED, and exclusions live
 * here as data. So the count that was removed is visible, each removal
 * states its reason, and reversing one is a one-line edit rather than a
 * re-export. Quietly deleting rows from the JSON would leave no trace
 * that a selection was ever made.
 *
 * ⚠ NONE of this is a claim these reviews are fake or that they are
 * hidden. They are public on Google and stay public on Google. This
 * list governs the marketing carousel and the /reviews/ page.
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
  market: ReviewMarket
  reason: string
}

export const excludedReviews: readonly ReviewExclusion[] = [
  {
    name: 'Sabi singh',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/114875746466232913807/reviews?hl=en-US',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Laura Rudolphi',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/105071389469450359314/reviews?hl=en-US',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Sara Neil',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/113739447178348707984/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Rachel Hart',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/112671959166368772986/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Amanda Megl',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/103082190718036203152/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Phil K',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/117027551400007115457/reviews?hl=en',
    reason:
      'NEGATIVE - a 2-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'RD LW',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/111461430097187974991/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Rhonda Lutker',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/105419040868835802101/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'J Island',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/117155816906815176734/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Justin Michael',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/105391961396971969062/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Brian Markowitz',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/105258453558610668556/reviews?hl=en',
    reason:
      'NEGATIVE - disputes technician licensing and experience. Public on ' +
      'Google; not carousel material. Note its subject: it contests ' +
      'licensing, which is the evidence question left open at DEC-063 ' +
      'criterion 7 and still unresolved (see DEC-080). Do not treat ' +
      'excluding it as answering it.',
  },
  {
    name: 'Rachel Freeman',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/107766536303901652894/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'MrRebelyell83 bo',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/109754601836000240617/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Steven Martin',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/117499520586012735752/reviews?hl=en-US',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'Ruben Contreras',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/110114066315195939984/reviews?hl=en',
    reason:
      'NEGATIVE - a 1-star review. Public on Google and stays public there; a marketing carousel is not the venue for an unresolved dispute.',
  },
  {
    name: 'andy dv',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/108382948439845096398/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "came out same-day to help me with an urgent matter". Advertises same-day and emergency availability. DEC-035.',
  },
  {
    name: 'Ben',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/108941836893863475537/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "completed it same day" plus "still cheaper than the quotes from their competitors". Same-day availability and a comparative price claim. DEC-035, DEC-036.',
  },
  {
    name: 'SH',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/116791268133088296139/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "about half the price of the other companies". Unsubstantiated comparative pricing claim. DEC-036.',
  },
  {
    name: 'Vicki J. Harp',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/100306114139655826380/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "You work on Saturdays if I need you" contradicts the published hours (Monday to Friday, DEC-083).',
  },
  {
    name: 'Victoria Krylov',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/102939052114483520392/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "finish the job in the same day" plus exposing a buried sewer vent. Same-day completion (DEC-035) and excavation-shaped work, which is not an approved service.',
  },
  {
    name: 'lisa schmalz',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/108250722827329918166/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Emergency backup reported on a Sunday evening and booked for Monday. Reads as emergency and weekend availability. DEC-035, DEC-083.',
  },
  {
    name: 'Bridget Kelly',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/103284708019406323196/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Response and service time frames ("less than 24 hours", "less than 45 minutes"). Unverified response-time claims. CLAUDE.md section 24.',
  },
  {
    name: 'Jessica Craig',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/104544664834973114177/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "report and video ... within a couple of hours". Unverified turnaround claim.',
  },
  {
    name: 'Heather',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/106792622145227357938/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "very short notice. (24 hours)". Unverified scheduling-speed claim.',
  },
  {
    name: 'Hannah Wickers',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/118163193435391536537/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Booked "the next day". Unverified scheduling-speed claim.',
  },
  {
    name: 'Brittany Stevenson',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/111620534944157768877/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Report received "that same day". Same-day claim. DEC-035.',
  },
  {
    name: 'Blake Bredensteiner',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/113833324971022142335/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Report "in less than two hours". Unverified turnaround claim.',
  },
  {
    name: 'Debbie Boyce',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/115462374131215610363/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - On site "within a couple hours". Same-day / response-time claim. DEC-035.',
  },
  {
    name: 'Greg Sumpter',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/102756154932619028020/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Contractor list emailed "within a few minutes". Unverified response-time claim.',
  },
  {
    name: 'clifford conway',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/108334322830128181850/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Appointment "the next day". Unverified scheduling-speed claim.',
  },
  {
    name: 'Heather Austin',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/109407584971287207436/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "I had the report same day". Same-day claim. DEC-035.',
  },
  {
    name: 'LM SF',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/109010206029442659179/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - References a master plumber completing repair work. Implies repair capability that is not offered.',
  },
  {
    name: 'Kay Kahn-Henderson',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/106283836301977407165/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "find the problem and fix it". Ambiguous; can read as repair capability that is not offered.',
  },
  {
    name: 'Mary Winslow',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/115226874673197322170/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Describes a site that "required digging". Excavation is not an approved service.',
  },
  {
    name: 'Lawrence Meier',
    market: 'st-louis-mo',
    profileUrl:
      'https://www.google.com/maps/contrib/101299731377881530111/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "Cost more than I would like to pay". A price complaint; not carousel material.',
  },
  {
    name: 'Nicolas Bonnafoux',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/100835484796166033423/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - On site "within two days", report "the next day". Unverified turnaround claim.',
  },
  {
    name: 'Jason Bedsole (Real Estate Simplified)',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/103529991929924316026/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Full report "later that day". Same-day claim. DEC-035.',
  },
  {
    name: 'R Franco',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/108910768485731972586/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "the most affordable" plus "here the next day". Comparative price and scheduling-speed claims. DEC-036.',
  },
  {
    name: 'Ali Enteshari',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/104994615189053186484/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Booked "the next day", report "soon after". Unverified scheduling-speed claim.',
  },
  {
    name: 'Veronica Mejia-Guillen',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/107426956967330526986/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "The report was sent to us the same day". Same-day claim. DEC-035.',
  },
  {
    name: 'NATHAN RUSSELL',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/110208940133593957620/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Report "within hours of the inspection". Unverified turnaround claim.',
  },
  {
    name: 'Nick Parker-Cole',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/114861725228480573980/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Compares the fee with another plumber ("for less than the first plumber"). Comparative price claim. DEC-036.',
  },
  {
    name: 'Lisa Standke',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/114438047308142924059/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "stand above the competition" plus what the "affordable base price" includes. Comparative and pricing claim. DEC-036.',
  },
  {
    name: 'Andrew Morris',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/100189955727982943915/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "jetting at no additional cost". Free-service offer claim. CLAUDE.md section 24.',
  },
  {
    name: 'Michael Phillips',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/105342148934676701494/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "utilizing SewerPros to complete the recommended repairs". Implies repair capability that is not offered.',
  },
  {
    name: 'Julia Castronova',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/104870966641246924602/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - Phone estimate "for installing" a cleanout. Installation is not an approved service; also an estimate and price claim.',
  },
  {
    name: 'David Zecha',
    market: 'san-diego-ca',
    profileUrl:
      'https://www.google.com/maps/contrib/106207984089913743851/reviews?hl=en',
    reason:
      'CLAIM CONFLICT - "both my commercial and residential projects". Commercial services are not listed (CLAUDE.md section 28).',
  },
]

/**
 * Google profile URLs differ between exports only in their `hl=` suffix
 * (`hl=en` vs `hl=en-US`), so identity is the numeric contributor id.
 */
function contribId(url: string): string {
  return /contrib\/(\d+)/.exec(url)?.[1] ?? url
}

const excludedIds = new Set(excludedReviews.map((e) => contribId(e.profileUrl)))

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
  // Realtor: "ONLY does diagnosis (not repairs)" - Emily Holmes (San Diego profile)
  'https://www.google.com/maps/contrib/108003881274999746450/reviews?hl=en',
  // Most recent detailed review; charged for cleaning only — Yu Ma
  'https://www.google.com/maps/contrib/101463023415017386350/reviews?hl=en-US',
]

const pinnedIds: readonly string[] = pinnedUrls.map(contribId)

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
  ...allReviews.filter((r) => !excludedIds.has(contribId(r.profileUrl))),
].sort((a, b) => {
  const pinA = pinnedIds.indexOf(contribId(a.profileUrl))
  const pinB = pinnedIds.indexOf(contribId(b.profileUrl))
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

/** Display labels for the two profiles. */
export const reviewMarketLabels: Readonly<Record<ReviewMarket, string>> = {
  'st-louis-mo': 'St. Louis',
  'san-diego-ca': 'San Diego',
}

/** Filter labels for /reviews/, in display order. */
export const reviewTopicLabels: Readonly<Record<ReviewTopic, string>> = {
  'real-estate': 'Buying or selling a home',
  inspection: 'Inspections and camera scopes',
  cleaning: 'Cleaning and clearing',
  honest: 'Honest, no upsell',
  landlord: 'Rentals and investment properties',
}

/**
 * Reviews for the /reviews/ page: everything cleared for publication,
 * pinned first, then newest. The carousel takes the head of the same list.
 */
export const reviewsPageReviews: readonly GoogleReview[] = publishedReviews
