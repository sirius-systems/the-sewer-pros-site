/**
 * Navigation configuration.
 *
 * Authority: docs/03-information-architecture.md §63-64
 *            docs/16-internal-linking-strategy.md §25
 *            docs/18-design-system.md §42, §45, §116
 *            docs/04-master-page-build-list.md §4
 *
 * ===========================================================================
 * NAVIGATION REFERENCES PAGE IDS, NEVER LITERAL HREFS
 * ===========================================================================
 * Every item names an approved page by id and resolves its href through
 * the registry. A link to a route that does not exist is therefore not
 * expressible — the build fails instead (05 §113, 16 §25, CLAUDE.md §16).
 *
 * ---------------------------------------------------------------------------
 * ⚠ GATED PAGES ARE EXCLUDED FROM NAVIGATION
 * ---------------------------------------------------------------------------
 * 04 §4 states that `launch_pending_validation` pages must not enter
 * "indexable internal-link modules". The header and footer are exactly
 * that.
 *
 * So Las Vegas does NOT appear in navigation, even though
 * `/las-vegas-nv/` builds and is reachable. Linking to it sitewide
 * would pass it to crawlers through every page on the site, which is
 * the outcome DEC-063 exists to prevent — and the market has zero of
 * 18 services confirmed (PENDING-012), so promoting it would also imply
 * availability that has not been verified (01 §20).
 *
 * `assertNavigable()` enforces this: a nav entry naming a non-indexable
 * page fails the build. When PENDING-012 resolves and doc 04 promotes
 * those five records to `launch`, Las Vegas appears automatically with
 * no code change.
 */

import type { PageId } from '@/types'
import { resolveApprovedLink, resolveLinkableOnly } from '@/lib/links/approved-link'

/** A navigation entry. `label` overrides the registry page name. */
export interface NavItem {
  pageId: PageId
  label?: string
}

/** A titled group of links, used in the footer. */
export interface NavGroup {
  title: string
  items: NavItem[]
}

/** A resolved link, ready to render. */
export interface ResolvedNavItem {
  href: string
  label: string
  pageId: PageId
}

function id(value: string): PageId {
  return value as PageId
}

/* ==========================================================================
   Primary navigation — 03 §63
   ========================================================================== */

/**
 * Top-level header navigation.
 *
 * 03 §63: "Do not place every SEO page into the primary navigation."
 * Seven curated entries, all hubs or core pages. Individual services,
 * markets, and locations are reached from their hubs.
 *
 * Grouped dropdowns (18 §44) are deliberately not implemented here —
 * they are step 17/18 work and need the design system. This flat list
 * is complete and usable without them.
 */
export const primaryNav: NavItem[] = [
  { pageId: id('hub-services'), label: 'Services' },
  { pageId: id('hub-locations'), label: 'Locations' },
  { pageId: id('hub-audiences'), label: 'Who We Serve' },
  { pageId: id('hub-commercial'), label: 'Commercial' },
  { pageId: id('hub-resources'), label: 'Resources' },
  { pageId: id('core-about'), label: 'About' },
  { pageId: id('core-contact'), label: 'Contact' },
]

/* ==========================================================================
   Footer — 18 §116
   ========================================================================== */

/**
 * Footer link groups.
 *
 * 18 §116: organised, "not an SEO link dump". Four groups covering the
 * families a visitor actually navigates by.
 *
 * Two omissions are deliberate:
 *
 * CONTACT INFORMATION — 18 §116 lists it, but no phone number, address,
 * or email is documented anywhere in the project (verified at step 8).
 * The footer links to `/contact/` instead of inventing one
 * (01 §35, 15 §102-103, CLAUDE.md §23).
 *
 * LEGAL LINKS — 18 §116 and §118 assume privacy, terms, and
 * accessibility pages. None is approved in doc 04, and 05 §9 lists
 * those segments as PROSPECTIVE reservations, not live routes. Linking
 * to them would produce 404s, so the group is absent until doc 04
 * approves the pages.
 */
export const footerNav: NavGroup[] = [
  {
    title: 'Services',
    items: [
      { pageId: id('svc-sewer-camera-inspection') },
      { pageId: id('svc-sewer-cleaning') },
      { pageId: id('svc-hydro-jetting') },
      { pageId: id('svc-sewer-line-locating') },
      { pageId: id('svc-drain-cleaning') },
      { pageId: id('hub-services'), label: 'All services' },
    ],
  },
  {
    title: 'Service areas',
    items: [
      { pageId: id('market-st-louis-mo'), label: 'St. Louis, MO' },
      { pageId: id('market-san-diego-ca'), label: 'San Diego, CA' },
      { pageId: id('hub-locations'), label: 'All service areas' },
    ],
  },
  {
    title: 'Who we serve',
    items: [
      { pageId: id('aud-home-buyers'), label: 'Home buyers' },
      { pageId: id('aud-real-estate-agents'), label: 'Real estate agents' },
      { pageId: id('aud-property-managers'), label: 'Property managers' },
      { pageId: id('hub-commercial'), label: 'Commercial' },
    ],
  },
  {
    title: 'Company',
    items: [
      { pageId: id('core-about'), label: 'About' },
      { pageId: id('core-contact'), label: 'Contact' },
      { pageId: id('core-faq'), label: 'FAQs' },
      { pageId: id('hub-resources'), label: 'Resources' },
    ],
  },
]

/* ==========================================================================
   Resolution and validation
   ========================================================================== */

/**
 * Resolves a nav item to an href and label.
 *
 * Delegates to the shared resolver so navigation and section link
 * modules enforce one rule rather than two copies of it. Throws when
 * the page is missing or not indexable — see the module header.
 */
function resolve(item: NavItem): ResolvedNavItem {
  return resolveApprovedLink(item.pageId, { label: item.label })
}

/**
 * Header navigation, resolved.
 *
 * Strict: every primary nav item is a hub or core page that must exist.
 * A missing one is a structural error, not a transient content gap.
 */
export function resolvePrimaryNav(): ResolvedNavItem[] {
  return primaryNav.map(resolve)
}

/**
 * Footer groups, resolved, with unbuilt destinations dropped.
 *
 * Unlike the header, footer groups list individual services, markets,
 * and audiences — pages that are approved but may not be written yet.
 * Linking to one would 404 (05 §77), so those entries are filtered and
 * a group left with nothing is omitted entirely (18 §120: "omit the
 * section entirely" rather than render an empty shell).
 *
 * This is why the footer currently shows no markets: both St. Louis and
 * San Diego are approved and indexable but await local research, and
 * Las Vegas is gated. They reappear automatically as content lands.
 */
export function resolveFooterNav(): { title: string; items: ResolvedNavItem[] }[] {
  return footerNav
    .map((group) => ({
      title: group.title,
      items: resolveLinkableOnly(
        group.items.map((item) => item.pageId),
      ).map((link) => {
        const override = group.items.find((i) => i.pageId === link.pageId)?.label
        return { ...link, label: override ?? link.label }
      }),
    }))
    .filter((group) => group.items.length > 0)
}

// Validate the whole configuration at import so a bad reference fails
// the build rather than one page render.
resolvePrimaryNav()
resolveFooterNav()
