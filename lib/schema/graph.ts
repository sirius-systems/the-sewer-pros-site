/**
 * Per-page JSON-LD graph.
 *
 * Authority: docs/15-schema-entity-strategy.md §28-30, §34, §38-39,
 *            §41-44, §47-51, §54-58, §67, §82-86, §102-103, §113-115
 *
 * ===========================================================================
 * ONE GRAPH, CROSS-REFERENCED BY @id (15 §84-85)
 * ===========================================================================
 * Each page emits a single `<script type="application/ld+json">`
 * containing one `@graph`. The Organization appears in full once and is
 * referenced by `@id` thereafter — 15 §85 forbids repeating the full
 * object, which is how entity identity fragments.
 *
 * ---------------------------------------------------------------------------
 * ⚠ SCHEMA MUST MATCH VISIBLE CONTENT (15 §67)
 * ---------------------------------------------------------------------------
 * Everything below is derived from the same approved page record and
 * the same content object the page renders. Nothing is asserted in
 * markup that a reader cannot see, which is the failure mode 15 §67 and
 * §68 exist to prevent.
 *
 * The breadcrumb is the clearest case: it is built from the same
 * `breadcrumbTrail()` the visible `<nav>` uses, so the two cannot
 * diverge. That also settles the 03 §53 versus 05 §118 question flagged
 * at step 19 — whichever hierarchy is right, markup and page agree.
 *
 * ---------------------------------------------------------------------------
 * ⚠ FAQPage IS DEFAULT-ON WHERE AN FAQ RENDERS (15 §58, DEC-114)
 * ---------------------------------------------------------------------------
 * DEC-089 started with the home page only; DEC-108 approved the
 * principle for all pages and DEC-114 made it the default.
 *
 * The input is still the `faq` array below, not a boolean. A template
 * hands over the SAME array the page renders, so the node cannot be
 * emitted for content the reader cannot see. No FAQ means no node.
 */

import type {
  ArticleNode,
  BreadcrumbListNode,
  FaqContent,
  ItemListNode,
  ListItemNode,
  MasterPageRecord,
  PlaceNode,
  SchemaGraph,
  SchemaNode,
  SchemaRef,
  ServiceId,
  ServiceNode,
  WebPageNode,
  WebPageType,
} from '@/types'
import { SCHEMA_FRAGMENT, isIndexable } from '@/types'
import { absoluteUrl, siteOrigin, SITE_NAME } from '@/data/business'
import { breadcrumbTrail } from '@/data/pages'
import { getService, getServiceByCanonicalUrl } from '@/data/services'
import {
  founders,
  marketPlace,
  organizationId,
  organizationNode,
  serviceId,
  servedMarkets,
  websiteId,
} from './organization'
import { faqPageNode } from './faq'

function ref(id: string): SchemaRef {
  return { '@id': id }
}

/* ==========================================================================
   WebPage subtype — 15 §30, §82
   ========================================================================== */

/**
 * The subtype for a page family.
 *
 * 15 §30: "Do not select a subtype simply because it sounds more
 * SEO-friendly. The type must reflect actual visible page purpose."
 */
function webPageType(page: MasterPageRecord): WebPageType {
  switch (page.pageType) {
    case 'core':
      if (page.pathname === '/about/') return 'AboutPage'
      if (page.pathname === '/contact/') return 'ContactPage'
      return 'WebPage'
    case 'market-contact':
      return 'ContactPage'
    case 'service-hub':
    case 'markets-hub':
    case 'audience-hub':
    case 'commercial-hub':
    case 'resource-hub':
    case 'market':
      return 'CollectionPage'
    default:
      return 'WebPage'
  }
}

/* ==========================================================================
   Nodes
   ========================================================================== */

function webPageNode(page: MasterPageRecord, title: string, description?: string): WebPageNode {
  return {
    '@type': webPageType(page),
    '@id': `${absoluteUrl(page.pathname)}${SCHEMA_FRAGMENT.webPage}`,
    name: title,
    ...(description !== undefined && { description }),
    url: absoluteUrl(page.pathname),
    isPartOf: ref(websiteId()),
    // `breadcrumb` is attached in pageSchema(), and only when a
    // BreadcrumbList is actually emitted. Referencing an @id that no
    // node in the graph defines leaves a consumer resolving nothing.
  }
}

/**
 * BreadcrumbList, built from the same trail the page renders.
 *
 * Returns undefined for a trail of one — the home page's breadcrumb to
 * itself carries no information, and 15 §102 prefers omission to an
 * empty structure.
 */
function breadcrumbNode(
  page: MasterPageRecord,
  displayName?: string,
): BreadcrumbListNode | undefined {
  const trail = breadcrumbTrail(page.id)
  if (trail.length < 2) return undefined

  const itemListElement: ListItemNode[] = trail.map((entry, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    // `displayName` replaces only the current page's own (last) entry.
    name: displayName !== undefined && index === trail.length - 1 ? displayName : entry.name,
    item: absoluteUrl(entry.pathname),
  }))

  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(page.pathname)}${SCHEMA_FRAGMENT.breadcrumb}`,
    itemListElement,
  }
}

/**
 * The Service entity for a service page.
 *
 * `provider` is always the single Organization (15 §21). `areaServed`
 * carries the markets rather than an address, which is the SAB model
 * 15 §13 and §22 describe.
 */
function serviceNode(
  page: MasterPageRecord,
  displayName?: string,
  description?: string,
): ServiceNode | undefined {
  const service = getServiceByCanonicalUrl(page.pathname)
  if (service === undefined) return undefined

  return {
    '@type': 'Service',
    '@id': serviceId(service.canonicalUrl),
    name: displayName ?? service.name,
    serviceType: displayName ?? service.name,
    ...(description !== undefined && { description }),
    provider: ref(organizationId()),
    areaServed: servedMarkets(),
    url: absoluteUrl(page.pathname),
  }
}

/**
 * Article for resource and comparison pages (15 §47-50).
 *
 * ⚠ No `author`. 15 §49: omit rather than invent one. `publisher` is
 * always the Organization (15 §48).
 */
function articleNode(
  page: MasterPageRecord,
  title: string,
  description?: string,
  dateModified?: string,
): ArticleNode {
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl(page.pathname)}${SCHEMA_FRAGMENT.article}`,
    headline: title,
    ...(description !== undefined && { description }),
    url: absoluteUrl(page.pathname),
    publisher: ref(organizationId()),
    ...(dateModified !== undefined && { dateModified }),
  }
}

/* ==========================================================================
   Self-containment guard — 15 §84-85, CLAUDE.md §45
   ========================================================================== */

/**
 * Every `@id` reference must resolve to a node in the same graph.
 *
 * The whole point of cross-referencing by `@id` (15 §85) is that a
 * consumer can follow the reference and find the entity. A reference to
 * an `@id` no node defines is worse than an inlined copy: it asserts a
 * relationship to something that is not there.
 *
 * This runs during static generation, so a broken reference fails
 * `next build` rather than shipping. It caught exactly one real defect —
 * the home page referenced a BreadcrumbList that `breadcrumbNode()`
 * correctly declines to emit for a single-entry trail.
 */
function assertGraphIsSelfContained(nodes: SchemaNode[], pathname: string): void {
  const defined = new Set(
    nodes.map((node) => (node as { '@id'?: string })['@id']).filter(Boolean),
  )

  const dangling: string[] = []

  const walk = (value: unknown): void => {
    if (Array.isArray(value)) {
      value.forEach(walk)
      return
    }
    if (value === null || typeof value !== 'object') return

    const keys = Object.keys(value)
    const id = (value as { '@id'?: string })['@id']

    // A bare { '@id': … } is a reference; anything else is a definition.
    if (keys.length === 1 && id !== undefined) {
      if (!defined.has(id)) dangling.push(id)
      return
    }

    Object.values(value).forEach(walk)
  }

  nodes.forEach(walk)

  if (dangling.length > 0) {
    throw new Error(
      `Schema graph for ${pathname} references @id values no node defines: ` +
        `${dangling.join(', ')}. Every @id reference must resolve within its ` +
        `own graph (15 §84-85).`,
    )
  }
}

/* ==========================================================================
   Graph
   ========================================================================== */

export interface PageSchemaInput {
  page: MasterPageRecord
  title: string
  description?: string
  /**
   * Overrides the current page's name in the Service node and the last
   * BreadcrumbList entry, for a page whose approved display name differs
   * from the shared registry name. Must equal the visible breadcrumb.
   */
  displayName?: string
  /** Description for the Service node on a service page; plain text from the page's own copy. */
  serviceDescription?: string
  /** ISO date, only where 18 §78 justifies one. */
  dateModified?: string
  /**
   * The page's visible FAQ, where `FAQPage` has been approved for it.
   *
   * Templates supply it wherever they render an FAQ (DEC-114). Omit it
   * and no `FAQPage` is emitted.
   *
   * ⚠ Must be the same array the page RENDERS. `faqPageNode()` reads
   * the answer text out of the JSX, so passing a different array would
   * publish markup the reader cannot see (15 §67).
   */
  faq?: readonly FaqContent[]
  /**
   * A hub's VISIBLE member list, emitted as the page's `mainEntity`
   * `ItemList` (15 §34-35). Pass only entries the page renders as links,
   * in the order rendered, each with a real destination.
   */
  itemList?: readonly { name: string; pathname: string }[]
  /**
   * A location page's VISIBLE service cards, one `Service` node each.
   *
   * ⚠ DERIVED FROM THE SAME CARDS THE PAGE RENDERS, so the markup cannot
   * name a service the reader does not see (15 §67). Each node is
   * provided by the single Organization, scoped to the page's market
   * `Place`, and points at the service's canonical page. Never a repair
   * or replacement service: the cards come from the service registry,
   * which has none (15 §65).
   */
  serviceCards?: readonly {
    serviceId: ServiceId
    name: string
    description: string
  }[]
}

/**
 * Builds the page's JSON-LD graph.
 *
 * Returns undefined for pages that must not be indexed. A gated page
 * emits `noindex`, so structured data describing it would invite a
 * crawler to interpret an entity the same page asks it to ignore
 * (15 §115, DEC-063). The five Las Vegas pages therefore carry no
 * markup at all.
 */
export function pageSchema({
  page,
  title,
  description,
  displayName,
  serviceDescription,
  dateModified,
  faq,
  itemList,
  serviceCards,
}: PageSchemaInput): SchemaGraph | undefined {
  if (!isIndexable(page)) return undefined

  const organization = organizationNode()
  const nodes: SchemaNode[] = [organization]

  /*
    Founders, `/about/` only. 15 §67 needs the visible page to carry the
    same names and roles this adds — true of `LeadershipProfile` there
    and nowhere else, so `organization.founder` stays unset (and no
    Person node ships) on every other page.
  */
  if (page.pathname === '/about/') {
    const founderNodes = founders()
    nodes.push(...founderNodes)
    organization.founder = founderNodes.map((person) => ref(person['@id']))
  }

  // WebSite appears on every page; it is the entity WebPage belongs to.
  nodes.push({
    '@type': 'WebSite',
    '@id': websiteId(),
    name: SITE_NAME,
    url: `${siteOrigin()}/`,
    publisher: ref(organizationId()),
  })

  const isArticleFamily =
    page.pageType === 'resource' || page.pageType === 'comparison'

  const webPage = webPageNode(page, title, description)

  // Article families still emit a WebPage — 15 §83 permits multiple
  // types per page, and the WebPage is what the breadcrumb attaches to.
  nodes.push(webPage)

  if (isArticleFamily) {
    nodes.push(articleNode(page, title, description, dateModified))
  }

  const service = serviceNode(page, displayName, serviceDescription)
  if (service !== undefined) {
    nodes.push(service)
    webPage.about = ref(service['@id'])
  }

  // Market and location pages get a Place (15 §38-40).
  if (page.marketId !== undefined && service === undefined) {
    const place: PlaceNode = marketPlace(page.marketId)
    nodes.push(place)
    webPage.about = ref(place['@id'])
  }

  // A location page's visible service cards. The market Place pushed
  // above is what `areaServed` references, so no new place entity exists.
  if (serviceCards !== undefined && serviceCards.length > 0 && page.marketId !== undefined) {
    const placeRef = ref(marketPlace(page.marketId)['@id'])
    for (const card of serviceCards) {
      const record = getService(card.serviceId)
      nodes.push({
        '@type': 'Service',
        '@id': `${absoluteUrl(page.pathname)}#service-${record.slug}`,
        name: card.name,
        serviceType: card.name,
        description: card.description,
        provider: ref(organizationId()),
        areaServed: [placeRef],
        url: absoluteUrl(record.canonicalUrl),
      })
    }
  }

  const breadcrumb = breadcrumbNode(page, displayName)
  if (breadcrumb !== undefined) {
    nodes.push(breadcrumb)
    webPage.breadcrumb = ref(breadcrumb['@id'])
  }

  if (itemList !== undefined && itemList.length > 0) {
    const list: ItemListNode = {
      '@type': 'ItemList',
      '@id': `${absoluteUrl(page.pathname)}${SCHEMA_FRAGMENT.itemList}`,
      itemListElement: itemList.map((entry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: entry.name,
        item: absoluteUrl(entry.pathname),
      })),
    }
    nodes.push(list)
    webPage.mainEntity = ref(list['@id'])
  }

  // DEC-089. Text is derived from the same JSX the page renders, so
  // markup and visible copy cannot drift apart (15 §67) — see
  // ./faq.ts for why that is a derivation rather than a check.
  const faqPage = faqPageNode(
    faq,
    `${absoluteUrl(page.pathname)}${SCHEMA_FRAGMENT.faqPage}`,
    absoluteUrl(page.pathname),
    title,
    ref(websiteId()),
  )
  if (faqPage !== undefined) nodes.push(faqPage)

  assertGraphIsSelfContained(nodes, page.pathname)

  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}
