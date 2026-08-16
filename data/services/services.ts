/**
 * Service registry.
 *
 * Authority: docs/06-master-service-registry.md
 * Data:      data/services/master-service-registry.json
 *
 * Build sequence step 10 (02 §103). Loads the 18 canonical service
 * records, validates them at module load, and exposes typed accessors.
 *
 * ---------------------------------------------------------------------------
 * VALIDATION RUNS AT IMPORT
 * ---------------------------------------------------------------------------
 * The assertions below execute when this module is first imported, which
 * during `next build` means they run before any page renders. Invalid
 * source data fails the build rather than producing broken public pages
 * (CLAUDE.md §45, 02 §95).
 *
 * ---------------------------------------------------------------------------
 * ⚠ SLUGS ARE NOT UNIQUE
 * ---------------------------------------------------------------------------
 * Five slugs appear twice — each residential service and its commercial
 * counterpart share one:
 *
 *   sewer-camera-inspection   /services/…  and  /commercial/…
 *   sewer-cleaning            /services/…  and  /commercial/…
 *   hydro-jetting             /services/…  and  /commercial/…
 *   sewer-line-locating       /services/…  and  /commercial/…
 *   drain-cleaning            /services/…  and  /commercial/…
 *
 * This is correct: 06's `canonical_url_rules` namespace them under
 * different URL prefixes, and slugs ARE unique within each namespace.
 *
 * The consequence is an API constraint. There is no `getServiceBySlug`,
 * because for 5 of 18 services that question has two answers. Look up
 * by `serviceId` or `canonicalUrl`, or use the namespaced
 * `getServiceBySlugInNamespace()`.
 */

import type {
  MarketId,
  MarketServiceStatus,
  RawServiceHub,
  RawServiceRecord,
  RawServiceRegistry,
  Service,
  ServiceFamily,
  ServiceId,
  ServiceRecordType,
} from '@/types'
import { MARKET_IDS, isServiceAvailableInMarket, marketServiceStatusCategory } from '@/types'
import registryJson from './master-service-registry.json'

/* ==========================================================================
   Expected identifiers
   ========================================================================== */

/**
 * The 18 canonical service ids, mirroring the `ServiceId` union.
 *
 * Exists so the data can be checked against the type. TypeScript cannot
 * verify that a JSON string matches a literal union at runtime, so
 * without this a service renamed in the data would typecheck and fail
 * silently at render time.
 */
const EXPECTED_SERVICE_IDS = [
  'svc-sewer-camera-inspection',
  'svc-sewer-cleaning',
  'svc-hydro-jetting',
  'svc-sewer-cleaning-camera-inspection',
  'svc-sewer-line-locating',
  'svc-drain-cleaning',
  'svc-pre-purchase-sewer-inspection',
  'svc-recurring-sewer-backup-diagnosis',
  'svc-preventative-sewer-maintenance',
  'svc-independent-sewer-second-opinion',
  'svc-stl-sewer-lateral-inspection-reporting',
  'svc-commercial-sewer-camera-inspection',
  'svc-commercial-sewer-cleaning',
  'svc-commercial-hydro-jetting',
  'svc-commercial-drain-cleaning',
  'svc-commercial-sewer-line-locating',
  'svc-commercial-preventative-maintenance',
  'svc-commercial-grease-sludge-removal',
] as const satisfies readonly ServiceId[]

/** Canonical URL shape per record type (06 `canonical_url_rules`). */
const CANONICAL_URL_PATTERN: Record<ServiceRecordType, RegExp> = {
  core_service: /^\/services\/[a-z0-9-]+\/$/,
  derived_service: /^\/services\/[a-z0-9-]+\/$/,
  commercial_service: /^\/commercial\/[a-z0-9-]+\/$/,
  market_specific_service: /^\/st-louis-mo\/[a-z0-9-]+\/$/,
}

/* ==========================================================================
   Validation
   ========================================================================== */

function fail(message: string): never {
  throw new Error(`Service registry invalid: ${message}`)
}

function validate(registry: RawServiceRegistry): void {
  const services = registry.services

  if (services.length !== EXPECTED_SERVICE_IDS.length) {
    fail(
      `expected ${EXPECTED_SERVICE_IDS.length} services, found ${services.length}. ` +
        `Adding or removing a service requires the process in 06 §51 and CLAUDE.md §60.`,
    )
  }

  // --- ids: unique, and exactly the set the ServiceId union declares ---
  const ids = services.map((s) => s.service_id)
  const idSet = new Set<string>(ids)
  if (idSet.size !== ids.length) {
    const seen = new Set<string>()
    const dupes = ids.filter((id) => seen.size === seen.add(id).size)
    fail(`duplicate service_id: ${[...new Set(dupes)].join(', ')}`)
  }
  const expected = new Set<string>(EXPECTED_SERVICE_IDS)
  const unexpected = ids.filter((id) => !expected.has(id))
  const missing = EXPECTED_SERVICE_IDS.filter((id) => !idSet.has(id))
  if (unexpected.length > 0 || missing.length > 0) {
    fail(
      `service ids drifted from the ServiceId type. ` +
        `In data but not typed: [${unexpected.join(', ')}]. ` +
        `Typed but not in data: [${missing.join(', ')}]. ` +
        `Update types/service.ts and EXPECTED_SERVICE_IDS together.`,
    )
  }

  // --- canonical URLs: globally unique and matching the record type ---
  const urls = services.map((s) => s.canonical_url)
  if (new Set(urls).size !== urls.length) {
    fail('duplicate canonical_url — two services would claim the same route')
  }
  for (const s of services) {
    const pattern = CANONICAL_URL_PATTERN[s.record_type]
    if (!pattern.test(s.canonical_url)) {
      fail(
        `${s.service_id} has canonical_url ${s.canonical_url}, which does not ` +
          `match the ${s.record_type} pattern ${String(pattern)} (06 canonical_url_rules)`,
      )
    }
    const tail = s.canonical_url.replace(/\/$/, '').split('/').pop()
    if (tail !== s.slug) {
      fail(`${s.service_id}: slug "${s.slug}" disagrees with canonical_url "${s.canonical_url}"`)
    }
  }

  // --- slugs: unique WITHIN a URL namespace, not globally (see header) ---
  const byNamespace = new Map<string, Set<string>>()
  for (const s of services) {
    const namespace = `/${s.canonical_url.split('/')[1]}/`
    const slugs = byNamespace.get(namespace) ?? new Set<string>()
    if (slugs.has(s.slug)) {
      fail(`duplicate slug "${s.slug}" within namespace ${namespace}`)
    }
    slugs.add(s.slug)
    byNamespace.set(namespace, slugs)
  }

  // --- parent references resolve, and the graph is acyclic ---
  for (const s of services) {
    if (s.parent_service_id !== null && !idSet.has(s.parent_service_id)) {
      fail(`${s.service_id} references missing parent ${s.parent_service_id}`)
    }
  }
  const parentOf = new Map(services.map((s) => [s.service_id, s.parent_service_id]))
  for (const s of services) {
    const seen = new Set<string>([s.service_id])
    let cursor = parentOf.get(s.service_id) ?? null
    while (cursor !== null) {
      if (seen.has(cursor)) {
        fail(`parent cycle involving ${[...seen, cursor].join(' -> ')}`)
      }
      seen.add(cursor)
      cursor = parentOf.get(cursor as ServiceId) ?? null
    }
  }

  // --- every service states a status for every market (06 §7) ---
  for (const s of services) {
    for (const market of MARKET_IDS) {
      const status: unknown = s.markets[market]
      if (typeof status !== 'string' || status === '') {
        fail(`${s.service_id} has no market status for ${market}`)
      }
      if (marketServiceStatusCategory(status as string) === 'requires_operational_confirmation'
          && !status.startsWith('requires_operational')) {
        // Unrecognised vocabulary fell through to the safe default.
        // Not fatal — the safe default is correct — but surface it.
        console.warn(
          `[service-registry] ${s.service_id} / ${market}: unrecognised status ` +
            `"${status}" treated as requires_operational_confirmation. ` +
            `Review marketServiceStatusCategory() in types/service.ts.`,
        )
      }
    }
  }
}

/* ==========================================================================
   Load
   ========================================================================== */

/**
 * The cast is backed by `validate()` immediately below it.
 *
 * `resolveJsonModule` infers `string` for every enum-valued field, so a
 * direct assignment cannot typecheck. Rather than weaken the types to
 * match the inference, the raw shape is asserted and then verified at
 * runtime. If the data drifts, the build fails with a specific message
 * instead of rendering wrong pages (CLAUDE.md §84 — this is the
 * documented justification, not a convenience `any`).
 */
const rawRegistry = registryJson as unknown as RawServiceRegistry

validate(rawRegistry)

/* ==========================================================================
   Mapping — raw snake_case to domain camelCase (06 §47)
   ========================================================================== */

function toService(raw: RawServiceRecord): Service {
  return {
    serviceId: raw.service_id,
    name: raw.name,
    slug: raw.slug,
    canonicalUrl: raw.canonical_url,
    recordType: raw.record_type,
    serviceFamily: raw.service_family,
    ...(raw.parent_service_id !== null && { parentServiceId: raw.parent_service_id }),
    launchTier: raw.launch_tier,
    matrixEligibility: raw.matrix_eligibility,
    commercialApplicability: raw.commercial_applicability,
    primaryIntents: raw.primary_intents,
    primaryAudiences: raw.primary_audiences,
    aliases: raw.aliases,
    markets: raw.markets,
    ...(raw.notes !== '' && { notes: raw.notes }),
  }
}

/** All 18 services, in registry order. */
export const serviceList: readonly Service[] = rawRegistry.services.map(toService)

const serviceById = new Map<ServiceId, Service>(
  serviceList.map((s) => [s.serviceId, s]),
)

const serviceByUrl = new Map<string, Service>(
  serviceList.map((s) => [s.canonicalUrl, s]),
)

/** The two service hubs, `/services/` and `/commercial/` (06 §4). */
export const serviceHubs: readonly RawServiceHub[] = rawRegistry.hubs

/** Alias and exclusion register (06 §36). */
export const aliasRegister = rawRegistry.excluded_or_alias_intents

/* ==========================================================================
   Accessors
   ========================================================================== */

/**
 * Returns a service by id.
 *
 * Throws on a miss: `ServiceId` is a closed union validated against the
 * data at load, so a miss means the registry and the type diverged.
 */
export function getService(id: ServiceId): Service {
  const service = serviceById.get(id)
  if (service === undefined) {
    fail(`no record for ${id}`)
  }
  return service
}

/** Returns the service owning a canonical URL, or undefined. */
export function getServiceByCanonicalUrl(url: string): Service | undefined {
  return serviceByUrl.get(url)
}

/**
 * Returns a service by slug within a URL namespace.
 *
 * Namespaced because 5 slugs are shared between a residential service
 * and its commercial counterpart — see the header note.
 *
 * @example getServiceBySlugInNamespace('/commercial/', 'hydro-jetting')
 */
export function getServiceBySlugInNamespace(
  namespace: '/services/' | '/commercial/' | '/st-louis-mo/',
  slug: string,
): Service | undefined {
  return serviceByUrl.get(`${namespace}${slug}/`)
}

/** Services in one family (06 §6). */
export function servicesByFamily(family: ServiceFamily): Service[] {
  return serviceList.filter((s) => s.serviceFamily === family)
}

/** Services of one record type (06 §5). */
export function servicesByRecordType(type: ServiceRecordType): Service[] {
  return serviceList.filter((s) => s.recordType === type)
}

/**
 * Direct children of a service.
 *
 * Note the graph is two levels deep in places — `grease-sludge-removal`
 * parents to `commercial-hydro-jetting`, which parents to
 * `hydro-jetting`. This returns direct children only.
 */
export function childServices(parentId: ServiceId): Service[] {
  return serviceList.filter((s) => s.parentServiceId === parentId)
}

/* ==========================================================================
   Market availability — the derivation promised in step 9
   ========================================================================== */

/**
 * The governing status category for a service in a market (06 §7).
 *
 * Reduces the registry's 12 raw status strings to the 5 documented
 * categories. Branch on this, never on the raw string.
 */
export function serviceMarketStatus(
  serviceId: ServiceId,
  marketId: MarketId,
): MarketServiceStatus {
  return marketServiceStatusCategory(getService(serviceId).markets[marketId])
}

/**
 * True only when a service may be presented as available in a market.
 *
 * `capability_validate_packaging` returns false — the capability exists
 * but its commercial packaging is unvalidated, and 06 §43 forbids
 * presenting that as offered.
 */
export function isServiceOfferedIn(
  serviceId: ServiceId,
  marketId: MarketId,
): boolean {
  return isServiceAvailableInMarket(getService(serviceId).markets[marketId])
}

/** Every service that may be described as available in a market. */
export function servicesOfferedIn(marketId: MarketId): Service[] {
  return serviceList.filter((s) => isServiceAvailableInMarket(s.markets[marketId]))
}

/**
 * True when ANY service may be described as available in a market.
 *
 * ⚠ Currently FALSE for Las Vegas. All 17 applicable services are
 * `requires_operational_confirmation` and the eighteenth is
 * St. Louis-only. No Las Vegas page may state that a service is offered
 * until PENDING-012 resolves (01 §20, §26; DEC-063).
 *
 * Gate market-level availability copy on this rather than assuming a
 * market with an approved page also has approved services.
 */
export function marketOffersAnyService(marketId: MarketId): boolean {
  return serviceList.some((s) => isServiceAvailableInMarket(s.markets[marketId]))
}

/* ==========================================================================
   Aliases — 06 §36
   ========================================================================== */

/**
 * Resolves a search term or alias to its canonical service, if any.
 *
 * Checks the alias register first, then each service's own `aliases`.
 * Returns undefined for terms dispositioned as `not_offered` or
 * `hold_pending_confirmation` — those must not resolve to a service,
 * since doing so would imply a capability the business has not approved
 * (06 §36, CLAUDE.md §4).
 */
export function resolveServiceAlias(term: string): Service | undefined {
  const needle = term.trim().toLowerCase()

  const entry = aliasRegister.find((a) => a.term.toLowerCase() === needle)
  if (entry !== undefined) {
    if (entry.canonical_target === null) return undefined
    if (entry.disposition === 'not_offered') return undefined
    if (entry.disposition === 'hold_pending_confirmation') return undefined
    return serviceById.get(entry.canonical_target)
  }

  return serviceList.find((s) =>
    s.aliases.some((alias) => alias.toLowerCase() === needle),
  )
}
