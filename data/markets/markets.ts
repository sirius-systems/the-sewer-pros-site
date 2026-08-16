/**
 * Market registry.
 *
 * Authority: docs/02-nextjs-technical-architecture.md §19, §55
 *            docs/07-master-location-registry.md (market hub records)
 *            docs/01-business-brand-foundation.md §19-21
 *            docs/15-schema-entity-strategy.md §11
 *
 * Three markets (DEC-011). Markets are first-class entities, distinct
 * from the 579 location records — 02 §19: "Do not hard-code market
 * business facts directly inside components."
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS FILE DOES NOT CONTAIN
 * ---------------------------------------------------------------------------
 * Service availability is NOT stored here. It lives per-service,
 * per-market in the service registry (`markets` field, doc 06 §7) and
 * is derived via `isServiceAvailableInMarket()`.
 *
 * Duplicating it would create a second source of truth that silently
 * drifts, and 06 §9 makes the service registry authoritative. The
 * derivation helper arrives with the service registry loader (step 10).
 *
 * Index status is likewise NOT stored here. All three market hubs carry
 * `index_status: 'launch'` in the location registry, but doc 04 gates
 * `/las-vegas-nv/` as `launch_pending_validation` (DEC-063). Page
 * authorisation belongs to the approved page registry (step 12), not
 * to this file.
 */

import type { Market, MarketId } from '@/types'

/**
 * The three approved markets.
 *
 * Names and slugs are taken from the market hub records in
 * `data/locations/master-location-registry.json`, which is the
 * geography authority (07). Do not retype them from memory.
 *
 * ---------------------------------------------------------------------------
 * PHONES YES, ADDRESSES NO
 * ---------------------------------------------------------------------------
 * St. Louis and San Diego each publish a phone number on their own site
 * (DEC-070, DEC-071). Las Vegas publishes none.
 *
 * NO market has a published street address, so `physicalLocation` is
 * absent from all three (01 §35, 15 §102-103).
 *
 * St. Louis is the case worth stating explicitly: it HAS an existing
 * Google Business Profile (01 §21), and that still does not authorise
 * publishing an address. 15 §11: "The GBP itself does not authorize
 * inventing or exposing an address that has not been approved for
 * website publication." PENDING-002 covers the verified details.
 *
 * Consequence: `permitsLocalBusinessEntity()` returns false for all
 * three markets. There is currently no `LocalBusiness` schema entity
 * anywhere on the site. Markets are represented as `Place` +
 * `Service.areaServed` (15 §13).
 *
 * ---------------------------------------------------------------------------
 * ⚠ PER-MARKET CONTACT IS NOT A FORMALITY HERE
 * ---------------------------------------------------------------------------
 * St. Louis and San Diego publish SEPARATE sites with different phone
 * numbers, different hours, and different founding years (DEC-070,
 * DEC-071). That is exactly the situation 01 §20 anticipates in
 * forbidding business facts from being copied between markets, and
 * 02 §55 in calling for market-specific contact data.
 *
 * Showing the St. Louis number on a San Diego page would be wrong, not
 * merely imprecise.
 */
export const markets: Record<MarketId, Market> = {
  'st-louis-mo': {
    id: 'st-louis-mo',
    name: 'St. Louis, MO',
    city: 'St. Louis',
    state: 'Missouri',
    stateCode: 'MO',
    slug: 'st-louis-mo',
    /**
     * 01 §21 records an existing GBP. Neither 01 §21 nor 15 §11 states
     * whether it is a storefront or a service-area business, so the
     * status stops short of claiming either (PENDING-002).
     */
    gbpStatus: 'existing_type_unconfirmed',
    /** thesewerpros.com/contact — DEC-070. */
    phone: '(314) 821-1600',
  },

  'san-diego-ca': {
    id: 'san-diego-ca',
    name: 'San Diego, CA',
    city: 'San Diego',
    state: 'California',
    stateCode: 'CA',
    slug: 'san-diego-ca',
    /**
     * 01 §21: "No current GBP identified." CLAUDE.md §29 forbids
     * implying a San Diego office, storefront, GBP, or public address.
     *
     * Note 01 §22 records a San Diego Instagram and Facebook presence.
     * That is social presence, not a GBP, and no URLs are documented —
     * so it produces no `sameAs` values either (15 §27).
     *
     * ⚠ San Diego IS an operating market. It publishes its own site,
     * thesewerprossd.com, with its own phone and hours and a founding
     * year of 2015 (DEC-071). "No GBP" is not "no operations" — the
     * two are separate facts and were briefly conflated before the
     * San Diego research resolved it.
     */
    gbpStatus: 'none_identified',
    /** thesewerprossd.com/contact — DEC-071. NOT the St. Louis number. */
    phone: '(858) 257-2888',
  },

  'las-vegas-nv': {
    id: 'las-vegas-nv',
    name: 'Las Vegas, NV',
    city: 'Las Vegas',
    state: 'Nevada',
    stateCode: 'NV',
    slug: 'las-vegas-nv',
    /**
     * 01 §21: "No current GBP identified." CLAUDE.md §30 forbids
     * fabricating a physical office.
     *
     * ⚠ Las Vegas carries a second, stronger constraint that GBP status
     * alone does not express: NOT ONE of the 18 services is confirmed
     * or supported in this market. All 17 applicable services are
     * `requires_operational_confirmation` in the service registry; the
     * eighteenth is St. Louis-only and `not_applicable`.
     *
     * So no Las Vegas page may state that any service is offered
     * (01 §20, §26; 06 §42). DEC-063 gates the five Las Vegas pages as
     * `launch_pending_validation` — built and routable, excluded from
     * sitemap and indexing — pending PENDING-012.
     *
     * ⚠ Contact detail is now owner-confirmed (DEC-073), but that does
     * NOT release the gate. A reachable phone number is evidence the
     * business is real; DEC-063 asks whether the SERVICE MENU is
     * operationally confirmed. Those are different questions, and this
     * is the easiest place in the project to conflate them.
     */
    gbpStatus: 'none_identified',
    /** Owner-confirmed 2026-08-17 (DEC-073). No live site to source from. */
    phone: '(725) 292-4030',
  },
}

/**
 * Per-market published operating detail (DEC-070, DEC-071).
 *
 * Sourced from each market's own site. Deliberately separate from the
 * `Market` record because these are published facts about a market's
 * operation rather than its identity, and because a missing entry must
 * read as "not published" rather than defaulting to another market's.
 *
 * Las Vegas's entry is owner-confirmed rather than site-sourced
 * (DEC-073) and carries no founding year — the market is newly
 * launching, and importing another market's would imply a history it
 * does not have.
 */
export interface MarketOperatingDetail {
  phone: string
  phoneE164: string
  hours: string
  /** 0 where the market has no operating history to state (Las Vegas). */
  foundingYear: number
  /** Service area exactly as that market publishes it. */
  serviceArea: string
}

export const marketOperatingDetail: Partial<
  Record<MarketId, MarketOperatingDetail>
> = {
  'st-louis-mo': {
    phone: '(314) 821-1600',
    phoneE164: '+1-314-821-1600',
    hours: 'Monday to Friday, 7:30am – 4:00pm',
    foundingYear: 2011,
    serviceArea:
      'St. Louis County, St. Charles County, Jefferson County, MO, and surrounding areas',
  },
  'san-diego-ca': {
    phone: '(858) 257-2888',
    phoneE164: '+1-858-257-2888',
    hours: 'Monday to Friday, 8:00am – 4:00pm',
    foundingYear: 2015,
    serviceArea: 'San Diego County, CA',
  },
  /**
   * ⚠ Owner-confirmed rather than site-sourced (DEC-073). No Las Vegas
   * site or GBP exists.
   *
   * No `foundingYear`: the market is newly launching, and a founding
   * year would imply an operating history that does not exist. 01 §20
   * forbids importing St. Louis's 2011 or San Diego's 2015 here.
   */
  'las-vegas-nv': {
    phone: '(725) 292-4030',
    phoneE164: '+1-725-292-4030',
    hours: 'Monday to Friday, 8:00am – 4:00pm',
    foundingYear: 0,
    serviceArea: 'Las Vegas Valley, NV',
  },
}

/* ==========================================================================
   Accessors
   ========================================================================== */

/** Markets in canonical order: St. Louis, San Diego, Las Vegas (01 §19). */
export const marketList: readonly Market[] = [
  markets['st-louis-mo'],
  markets['san-diego-ca'],
  markets['las-vegas-nv'],
]

/**
 * Returns a market by id.
 *
 * Throws rather than returning undefined: every call site passes a
 * `MarketId`, so a miss means the registry and the type have diverged,
 * which should fail the build loudly (02 §95).
 */
export function getMarket(id: MarketId): Market {
  const market = markets[id]
  if (market === undefined) {
    throw new Error(
      `No market record for ${JSON.stringify(id)}. ` +
        `The market registry and MarketId have diverged.`,
    )
  }
  return market
}

/**
 * Canonical pathname for a market hub, e.g. `/st-louis-mo/`.
 *
 * Matches the `market` canonical pattern in the location registry
 * (`/{market}/`) and keeps the trailing slash (DEC-061).
 */
export function marketPathname(id: MarketId): string {
  return `/${getMarket(id).slug}/`
}

/**
 * Display name for a market, e.g. "St. Louis, MO".
 *
 * Use `market.city` where the state suffix would be redundant — for
 * example the Locations dropdown in 18 §44, which lists "St. Louis",
 * "San Diego", "Las Vegas".
 */
export function marketName(id: MarketId): string {
  return getMarket(id).name
}
