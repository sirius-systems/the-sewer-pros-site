/**
 * Service registry barrel.
 *
 * Build sequence step 10 (docs/02-nextjs-technical-architecture.md §103).
 *
 *   import { getService, servicesOfferedIn } from '@/data/services'
 *
 * ⚠ There is no `getServiceBySlug`. Five slugs are shared between a
 * residential service and its commercial counterpart, so an unqualified
 * slug is ambiguous. Use `getServiceBySlugInNamespace()`, or look up by
 * `serviceId` / `canonicalUrl`.
 */

export {
  serviceList,
  serviceHubs,
  aliasRegister,
  getService,
  getServiceByCanonicalUrl,
  getServiceBySlugInNamespace,
  servicesByFamily,
  servicesByRecordType,
  childServices,
  serviceMarketStatus,
  isServiceOfferedIn,
  servicesOfferedIn,
  marketOffersAnyService,
  resolveServiceAlias,
} from './services'
