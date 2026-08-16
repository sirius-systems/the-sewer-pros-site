/**
 * Navigation barrel.
 *
 * Build sequence step 16 (docs/02-nextjs-technical-architecture.md §103).
 * Location per 02 §10 (`data/navigation/`).
 *
 * ⚠ Navigation links are resolved from approved page ids. Never write a
 * literal href into a nav config — a link to a nonexistent or
 * non-indexable route must be impossible to express (04 §4, 16 §25).
 */

export { primaryNav, footerNav, resolvePrimaryNav, resolveFooterNav } from './navigation'
export type { NavItem, NavGroup, ResolvedNavItem } from './navigation'
