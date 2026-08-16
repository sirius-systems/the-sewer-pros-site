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
 * WHAT IS ABSENT AND WHY — audited against the documentation
 * ---------------------------------------------------------------------------
 * No phone number   — none appears in any project document. The only
 *                     phone-shaped string in the docs is the placeholder
 *                     `000-000-0000` at 17 §-. Not a fact.
 * No address        — PENDING-002. 15 §11 is explicit that the existing
 *                     St. Louis GBP does NOT authorize publishing an
 *                     address.
 * No email          — not documented anywhere.
 * No hours          — 15 §77; never guess.
 * No geo            — 15 §79; never approximate.
 * No foundingDate,  — 01 §35 lists these among claims that must not be
 *    legalName,       added without documented evidence. None has been
 *    licences,        provided.
 *    ratings,
 *    certifications
 * No sameAs         — 01 §22 records a San Diego Instagram and Facebook
 *                     presence, but gives NO URLs, and 15 §27 requires
 *                     each profile be verified as official, controlled,
 *                     correctly branded, and accurate before linking.
 *                     Follower counts are not URLs.
 * No logo           — no asset has been provided.
 * No knowsAbout     — belongs to the schema layer (step 15), derived
 *                     from the approved service registry rather than
 *                     hand-listed here (15 §69, §91).
 *
 * When any of these is confirmed, add it here AND record it per
 * 01 §35 / 22 §32.
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
}

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
