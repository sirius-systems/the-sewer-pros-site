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
 * ⚠ FAQPage IS OPT-IN, NEVER AUTOMATIC (15 §57-58)
 * ---------------------------------------------------------------------------
 * "Do not schema every FAQ automatically." Most pages carry an FAQ
 * section; emitting `FAQPage` from all of them would apply a policy by
 * accident across 70 pages. `emitFaqSchema` defaults to false.
 */

import type {
  ArticleNode,
  BreadcrumbListNode,
  ListItemNode,
  MasterPageRecord,
  PlaceNode,
  SchemaGraph,
  SchemaNode,
  SchemaRef,
  ServiceNode,
  WebPageNode,
  WebPageType,
} from '@/types'
import { SCHEMA_FRAGMENT, isIndexable } from '@/types'
import { absoluteUrl, siteOrigin, SITE_NAME } from '@/data/business'
import { breadcrumbTrail } from '@/data/pages'
import { getServiceByCanonicalUrl } from '@/data/services'
import {
  marketPlace,
  organizationId,
  organizationNode,
  serviceId,
  servedMarkets,
  websiteId,
} from './organization'

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
function breadcrumbNode(page: MasterPageRecord): BreadcrumbListNode | undefined {
  const trail = breadcrumbTrail(page.id)
  if (trail.length < 2) return undefined

  const itemListElement: ListItemNode[] = trail.map((entry, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: entry.name,
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
function serviceNode(page: MasterPageRecord): ServiceNode | undefined {
  const service = getServiceByCanonicalUrl(page.pathname)
  if (service === undefined) return undefined

  return {
    '@type': 'Service',
    '@id': serviceId(service.canonicalUrl),
    name: service.name,
    serviceType: service.name,
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
  /** ISO date, only where 18 §78 justifies one. */
  dateModified?: string
  /**
   * Emit `FAQPage`. Off by default — 15 §57-58 require this be a
   * per-page decision rather than a side effect of having an FAQ.
   */
  emitFaqSchema?: boolean
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
  dateModified,
  emitFaqSchema = false,
}: PageSchemaInput): SchemaGraph | undefined {
  if (!isIndexable(page)) return undefined

  const nodes: SchemaNode[] = [organizationNode()]

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

  const service = serviceNode(page)
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

  const breadcrumb = breadcrumbNode(page)
  if (breadcrumb !== undefined) {
    nodes.push(breadcrumb)
    webPage.breadcrumb = ref(breadcrumb['@id'])
  }

  if (emitFaqSchema) {
    // Reserved. 15 §57-58 make this a per-page decision, and no page
    // has been approved for it yet — see the barrel note.
  }

  assertGraphIsSelfContained(nodes, page.pathname)

  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}
