/**
 * Business configuration barrel.
 *
 * Build sequence step 8 (docs/02-nextjs-technical-architecture.md §103).
 * Location per 02 §10 (`data/business/`).
 *
 *   import { organization, siteOrigin } from '@/data/business'
 *
 * Market-specific facts (per-market GBP status, contact data) live in
 * the market registry — step 9, `data/markets/` — per 02 §19 and §55.
 */

export {
  SITE_NAME,
  SITE_URL_ENV,
  siteOrigin,
  absoluteUrl,
  hasSiteOrigin,
} from './site'

export {
  organization,
  businessCategories,
  contact,
  hours,
  foundingYear,
  publishedServiceArea,
  affiliations,
  CLAIMS_REQUIRING_VERIFICATION,
  WITHHELD_PENDING_SUBSTANTIATION,
} from './organization'
