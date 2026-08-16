/**
 * Shared primitive types.
 *
 * Governed by:
 *   docs/02-nextjs-technical-architecture.md §32, §33, §44
 *   docs/22-decisions-change-log.md DEC-011, DEC-017
 *
 * ---------------------------------------------------------------------------
 * RAW vs DOMAIN
 * ---------------------------------------------------------------------------
 * The committed research datasets under `data/` use snake_case keys.
 * The models described in docs 06 §47, 07 §14, 08 §47 and 09 §9 use
 * camelCase.
 *
 * Both are represented:
 *
 *   Raw*    — mirrors the JSON exactly. Use when reading `data/*.json`.
 *   Domain  — the camelCase model the documentation describes. Use
 *             throughout application code.
 *
 * Mapping between them belongs in `lib/content/` (build sequence steps
 * 9-11), not in components. Do not read raw snake_case shapes directly
 * inside React components.
 */

/* ==========================================================================
   Markets
   ========================================================================== */

/**
 * The three approved markets (DEC-011).
 *
 * A literal union is appropriate here: the set is small, stable, and
 * expansion requires an explicit decision entry plus registry updates
 * (07 §76). 02 §32 endorses literal unions where the dataset is stable.
 *
 * Adding a market means editing this type — which is the intent. It
 * forces the change through review rather than letting a new string
 * flow silently through the system.
 */
export type MarketId = 'st-louis-mo' | 'san-diego-ca' | 'las-vegas-nv'

export const MARKET_IDS = [
  'st-louis-mo',
  'san-diego-ca',
  'las-vegas-nv',
] as const satisfies readonly MarketId[]

export function isMarketId(value: string): value is MarketId {
  return (MARKET_IDS as readonly string[]).includes(value)
}

/* ==========================================================================
   Matrix eligibility
   ========================================================================== */

/**
 * Eligibility of a location to participate in a given matrix
 * (07 §6, 08 §49).
 *
 * Applies to serviceMatrix, audienceMatrix, and commercialMatrix.
 *
 * Note: eligibility is NOT page authorisation. A location marked `full`
 * may still receive zero approved pages (07 §54, 08 §29).
 */
export type MatrixEligibility = 'full' | 'selective' | 'conditional' | 'hold'

/* ==========================================================================
   Branded identifiers
   ========================================================================== */

declare const brand: unique symbol

type Brand<T, B> = T & { readonly [brand]: B }

/**
 * Canonical location identifier, e.g. `loc-sd-carlsbad`.
 *
 * ⚠ NOT PRESENT IN THE COMMITTED DATA.
 *
 * `data/locations/master-location-registry.json` has no id field.
 * Location identity there is (market + slug). However docs 04 §13,
 * 09 §122-123 and 07 §59 all reference ids in `loc-{market}-{slug}`
 * form.
 *
 * These ids must therefore be DERIVED deterministically, not invented
 * per call site. See `locationId()` in `./location` and DEC-067.
 *
 * Branded so a bare string cannot be passed where an id is expected.
 */
export type LocationId = Brand<string, 'LocationId'>

/**
 * Canonical page identifier from the Master Page Build List,
 * e.g. `sl-carlsbad-camera` (04 §44).
 */
export type PageId = Brand<string, 'PageId'>

/* ==========================================================================
   Canonical pathname
   ========================================================================== */

/**
 * A canonical site pathname.
 *
 * Invariants (05 §66):
 *   - starts with `/`
 *   - ends with `/`            ← DEC-061
 *   - lowercase
 *   - no spaces, no underscores
 *   - no duplicate slashes
 *   - no query string, no fragment
 *
 * Branding prevents an arbitrary string from being treated as a
 * validated canonical path. Construct via the routing helpers in
 * lib/routing (step 13) rather than casting.
 */
export type Pathname = Brand<string, 'Pathname'>

const PATHNAME_PATTERN = /^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*\/)*$/

/**
 * Validates a canonical pathname against 05 §66 and DEC-061.
 *
 * Accepts the site root `/`.
 */
export function isPathname(value: string): value is Pathname {
  return PATHNAME_PATTERN.test(value)
}

/**
 * Asserts and brands a canonical pathname.
 *
 * Throws rather than returning a fallback: 02 §95 and 05 §132 require
 * malformed routing data to fail the build loudly rather than silently
 * producing a broken public URL.
 */
export function toPathname(value: string): Pathname {
  if (!isPathname(value)) {
    throw new Error(
      `Invalid canonical pathname: ${JSON.stringify(value)}. ` +
        `Must be lowercase, slash-delimited, and end with "/" (05 §66, DEC-061).`,
    )
  }
  return value
}
