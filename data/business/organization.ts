/**
 * Verified business facts.
 *
 * Authority: docs/01-business-brand-foundation.md §2, §3, §21, §22, §35, §36
 *            docs/02-nextjs-technical-architecture.md §54
 *            docs/15-schema-entity-strategy.md §8, §102, §103
 *
 * ===========================================================================
 * ⚠  EVERY VALUE HERE MUST BE A VERIFIED FACT
 * ===========================================================================
 * This is the single source for business information across the site
 * (02 §54: "Do not hard-code phone numbers or addresses into dozens of
 * components").
 *
 * That makes it the highest-risk file in the repository. A fabricated
 * value added here does not stay here — it propagates into schema,
 * metadata, page copy, and forms at once.
 *
 * The rule when a fact is unknown is OMISSION, not a placeholder
 * (15 §102-103, 01 §35, CLAUDE.md §23, §100):
 *
 *   correct    field absent
 *   WRONG      phone: '000-000-0000'
 *   WRONG      phone: 'TBD'
 *   WRONG      phone: ''
 *   WRONG      a plausible-looking invented number
 *
 * A smaller accurate object beats a larger inaccurate one (15 §103).
 *
 * ---------------------------------------------------------------------------
 * SOURCED FROM THE BUSINESS'S OWN PUBLISHED SITE (DEC-070)
 * ---------------------------------------------------------------------------
 * The contact, founding, and affiliation facts below come from
 * thesewerpros.com — the business publishing them about itself. Under
 * 01 §24 that makes them Confirmed Business Facts rather than
 * inference, which is what distinguishes them from the placeholders
 * this file previously refused to invent.
 *
 * ---------------------------------------------------------------------------
 * STILL ABSENT, AND WHY
 * ---------------------------------------------------------------------------
 * No address        — not published anywhere on the business's own site.
 *                     PENDING-002 remains open, and 15 §11 is explicit
 *                     that the existing St. Louis GBP does NOT authorize
 *                     publishing one. `permitsLocalBusinessEntity()`
 *                     therefore still returns false for every market.
 * No licence number — not published on the business's site.
 * No geo            — 15 §79; never approximate.
 * No ratings,       — 01 §35. Still undocumented.
 *    review counts
 * No sameAs         — 01 §22 records San Diego social presence but gives
 *                     no URLs, and 15 §27 requires each profile be
 *                     verified as official and controlled before
 *                     linking. Follower counts are not URLs.
 * No logo           — no asset provided.
 * No knowsAbout     — schema layer (step 15), derived from the service
 *                     registry rather than hand-listed (15 §69, §91).
 *
 * ---------------------------------------------------------------------------
 * ⚠ THREE CLAIMS ARE APPROVED BUT MARKET-SCOPED (DEC-072)
 * ---------------------------------------------------------------------------
 * The owner approved republication of "#1 choice in St. Louis", "over
 * 100 years of combined experience", and "over 100,000 camera
 * inspections completed".
 *
 * Permission is not the constraint; SCOPE is. Two of the three are
 * St. Louis site claims, and 01 §20 forbids carrying one market's facts
 * into another — so they must never appear on a San Diego or Las Vegas
 * page. See `MARKET_SCOPED_CLAIMS` below.
 *
 * The superlative also remains unsubstantiated by any third party.
 * 18 §71 treats that as challengeable on an authority platform; the
 * owner's decision and the reasoning are recorded in DEC-072.
 */

import type { OrganizationConfig } from '@/types'
import { SITE_NAME } from './site'

/**
 * The single Organization entity (15 §4, §8).
 *
 * ONE organization across all three markets. Markets are not separate
 * companies and must never be modelled as such (15 §111).
 *
 * `url` is omitted from this object deliberately — it depends on the
 * unresolved canonical origin (PENDING-001) and is supplied at the
 * schema/metadata boundary via `siteOrigin()`, so that a missing origin
 * fails loudly there rather than being frozen into a constant here.
 */
export const organization: Omit<OrganizationConfig, 'url'> = {
  name: SITE_NAME,

  /**
   * Approved core positioning, verbatim from 01 §3.
   *
   * Schema descriptions must match visible content (15 §67), so this
   * wording should be reflected on the About page rather than diverging
   * from it.
   */
  description:
    'Specialized sewer inspection, diagnostics, locating, and cleaning ' +
    'without repair-driven upselling.',

  contactPoints: [
    {
      contactType: 'customer service',
      telephone: '+1-314-821-1600',
      email: 'info@thesewerpros.com',
      areaServed: ['st-louis-mo'],
    },
  ],
}

/**
 * Published contact details (thesewerpros.com/contact).
 *
 * ⚠ ONE NUMBER, PUBLISHED AGAINST A MISSOURI SERVICE AREA.
 *
 * 01 §20 forbids copying business facts between markets. This number is
 * published alongside a service area of St. Louis, St. Charles, and
 * Jefferson counties, so it is attributed to St. Louis rather than
 * treated as a per-market number for San Diego or Las Vegas.
 */
export const contact = {
  /** Display form. */
  phone: '(314) 821-1600',
  /** E.164, for `tel:` links and schema. */
  phoneE164: '+1-314-821-1600',
  email: 'info@thesewerpros.com',
} as const

/**
 * Published business hours (thesewerpros.com/contact).
 *
 * ⚠ These hours do NOT support an emergency, same-day, or 24/7 claim —
 * they rule one out. 01 §35 lists all three among claims requiring
 * evidence, and CLAUDE.md §11 forbids inventing them. Weekends closed.
 */
export const hours = {
  weekdays: 'Monday to Friday, 7:30am – 4:00pm',
  weekend: 'Closed Saturday and Sunday',
  /** Schema.org openingHours form, for step 15. */
  specification: [{ days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], opens: '07:30', closes: '16:00' }],
} as const

/**
 * Founding year (thesewerpros.com/about).
 *
 * The year itself is published and usable. Note it does NOT license a
 * derived "X years of experience" claim — that is a different assertion,
 * it goes stale, and 01 §35 lists years in business among claims needing
 * documented evidence.
 */
export const foundingYear = 2011

/**
 * Service area exactly as the business publishes it
 * (thesewerpros.com/contact and /about).
 *
 * ⚠ This is the ST. LOUIS site's service area, not the company's.
 *
 * San Diego publishes its own (San Diego County) on its own site, and
 * Las Vegas is launching with its own. Reading this as company-wide was
 * a misinterpretation corrected by the San Diego research — see
 * DEC-071 and PENDING-013.
 */
export const publishedServiceArea =
  'St. Louis County, St. Charles County, Jefferson County, MO, and surrounding areas'

/**
 * Professional affiliations (thesewerpros.com/about).
 *
 * 01 §35 lists memberships among claims requiring documented evidence.
 * The business publishing them about itself is that evidence (01 §24),
 * so these are usable — as affiliations, not as certifications or
 * accreditations, which they are not.
 */
export const affiliations = [
  'St. Louis Association of Realtors',
  'American Society of Home Inspectors (ASHI)',
  "Women's Council of Realtors",
  'St. Charles Realtors',
] as const

/**
 * Claims published by the business that are NOT republished here.
 *
 * Each needs an explicit business decision — republish with
 * substantiation, soften, or omit. Exported so build validation can
 * scan rendered copy for them (step 24) rather than relying on review.
 */
/**
 * Previously withheld, now APPROVED for republication (DEC-072).
 *
 * Retained as a named list so build validation can check WHERE each
 * appears, not whether. Scope matters more than permission here:
 *
 *   'over 100 years of combined experience' — published on BOTH the
 *       St. Louis and San Diego sites, so company-wide. On /about/.
 *
 *   '#1 choice in St. Louis'  } published on the St. Louis site only.
 *   'over 100,000 inspections'} 01 §20 forbids carrying a market's
 *       claims into another, so both stay on St. Louis pages and must
 *       never appear on a San Diego or Las Vegas page.
 *
 * ⚠ The superlative remains unsubstantiated by any third party. The
 * owner approved it and that decision is recorded in DEC-072; 18 §71
 * still treats it as a challengeable claim on an authority platform.
 */
export const MARKET_SCOPED_CLAIMS = {
  companyWide: ['over 100 years of combined experience'],
  stLouisOnly: ['#1 choice in St. Louis', 'over 100,000 camera inspections'],
} as const

/**
 * Approved business categories (01 §2.2).
 *
 * Conceptual positioning categories — NOT Google Business Profile
 * categories, which 01 §2.2 states "will be governed separately."
 *
 * ⚠ The Sewer Pros must not be described broadly as a general plumbing
 * company (01 §2.2), and is not a repair or replacement contractor
 * (01 §5, 15 §65).
 */
export const businessCategories = [
  'sewer inspection company',
  'sewer camera inspection service',
  'sewer diagnostics company',
  'sewer cleaning service',
  'hydro jetting service',
  'sewer line locating service',
  'drain cleaning service',
  'pre-purchase sewer inspection service',
  'commercial sewer and drain service',
] as const

/**
 * Claims that require documented evidence before appearing anywhere on
 * the site (01 §35).
 *
 * Exported so build-time content validation (step 24) can scan rendered
 * copy for these assertions rather than relying on review alone. The
 * list is a governance artefact, not display data — never render it.
 */
export const CLAIMS_REQUIRING_VERIFICATION = [
  'years in business',
  'inspections completed',
  'customers served',
  'average response time',
  'same-day service',
  '24/7 service',
  'emergency availability',
  'financing',
  'guarantees',
  'warranties',
  'flat-rate pricing',
  'free inspections',
  'free estimates',
  'licensed plumber status',
  'bonded status',
  'insured status',
  'BBB rating',
  'review ratings',
  'awards',
  'certifications',
  'memberships',
  'proprietary technology',
  'exclusive equipment',
  'response-time guarantees',
] as const
