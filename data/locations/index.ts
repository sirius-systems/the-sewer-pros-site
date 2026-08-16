/**
 * Location registry barrel.
 *
 * Build sequence step 11 (docs/02-nextjs-technical-architecture.md §103).
 *
 *   import { getLocationBySlug, locationsInMarket } from '@/data/locations'
 *
 * ⚠ Server-only. The backing JSON is ~462 KB; importing this into a
 * `'use client'` component inlines the whole registry into the client
 * bundle. Pass mapped subsets to client components instead.
 *
 * ⚠ 579 records, 16 approved location pages. Presence here is not
 * page authorisation (07 §3, §54).
 */

export {
  locationList,
  getLocation,
  requireLocation,
  getLocationByCanonicalUrl,
  getLocationBySlug,
  locationsInMarket,
  marketHubs,
  childLocations,
  locationsByIndexStatus,
  locationsByType,
  indexStatusCounts,
} from './locations'
