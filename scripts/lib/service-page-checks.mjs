/**
 * Checks shared by the service-page verify scripts.
 *
 * Each takes the script's own `check(name, ok, detail)` so failures are
 * counted in one place.
 */

const MARKET_PLACE_IDS = (origin) =>
  [
    `${origin}/st-louis-mo/#place`,
    `${origin}/san-diego-ca/#place`,
    `${origin}/las-vegas-nv/#place`,
  ].sort()

const ALLOWED_TYPES = new Set([
  'Organization',
  'WebSite',
  'WebPage',
  'Service',
  'BreadcrumbList',
  'FAQPage',
])
const FORBIDDEN_TYPES = [
  'LocalBusiness',
  'AggregateRating',
  'Review',
  'PostalAddress',
  'HowTo',
  'Offer',
  'Product',
]

const walk = (value, visit, key = '') => {
  visit(value, key)
  if (Array.isArray(value)) value.forEach((v) => walk(v, visit, key))
  else if (value && typeof value === 'object')
    Object.entries(value).forEach(([k, v]) => walk(v, visit, k))
}

/**
 * One JSON-LD block, Organization first, exactly one Service whose
 * provider resolves to that Organization, areaServed = the three
 * markets, no forbidden types, no address or telephone outside the
 * Organization's per-market contactPoint list.
 */
export function checkServiceSchema({ html, check, origin, serviceName }) {
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1]),
  )
  check('schema: one JSON-LD block', ld.length === 1, String(ld.length))
  const graph = ld[0]?.['@graph'] ?? []
  const types = graph.map((n) => n['@type'])
  check('schema: Organization is the first node', types[0] === 'Organization', JSON.stringify(types))
  check('schema: only the expected node types', types.every((t) => ALLOWED_TYPES.has(t)), JSON.stringify(types))

  const org = graph[0]
  const services = graph.filter((n) => n['@type'] === 'Service')
  check('schema: exactly one Service node', services.length === 1, String(services.length))
  const svc = services[0] ?? {}
  check(
    'schema: Service provider resolves to the Organization',
    org?.['@id'] !== undefined && svc.provider?.['@id'] === org['@id'] && graph.filter((n) => n['@id'] === org['@id']).length === 1,
    JSON.stringify(svc.provider),
  )
  check('schema: Service name equals the owner page name', svc.name === serviceName, JSON.stringify(svc.name))
  check('schema: Service has a description', typeof svc.description === 'string' && svc.description.trim().length > 0, 'description missing')
  check('schema: Service node has no address, telephone or geo', !('address' in svc) && !('telephone' in svc) && !('geo' in svc))
  const area = (Array.isArray(svc.areaServed) ? svc.areaServed : [svc.areaServed]).map((a) => a?.['@id']).sort()
  check('schema: Service areaServed lists the three markets only', JSON.stringify(area) === JSON.stringify(MARKET_PLACE_IDS(origin)), JSON.stringify(area))

  let hasAddress = false
  graph.forEach((node) => walk(node, (v, k) => { if (k === 'address') hasAddress = true }))
  // The Organization's per-market contactPoint telephones are the one
  // sanctioned place for a number; everywhere else is forbidden.
  const nonOrgPhones = []
  graph.slice(1).forEach((node) => walk(node, (v, k) => { if (k === 'telephone') nonOrgPhones.push(v) }))
  const orgTopLevel = ['telephone', 'address'].filter((k) => k in (org ?? {}))
  check('schema: no address anywhere', !hasAddress)
  check('schema: no telephone outside Organization.contactPoint', nonOrgPhones.length === 0 && orgTopLevel.length === 0, JSON.stringify({ nonOrgPhones, orgTopLevel }))
  const used = new Set()
  graph.forEach((n) => walk(n, (v, k) => { if (k === '@type') [].concat(v).forEach((t) => used.add(t)) }))
  const bad = FORBIDDEN_TYPES.filter((t) => used.has(t))
  check('schema: no forbidden types (LocalBusiness, Review, AggregateRating, PostalAddress, HowTo)', bad.length === 0, bad.join(', '))
  console.log(`NOTE  schema nodes: ${JSON.stringify(types)}`)
  return graph
}

/**
 * The related-services section renders the shared service cards: a
 * `<section aria-labelledby="related">` with one card per link, each
 * card carrying exactly one anchor, and the expected destinations.
 */
export function checkRelatedCards({ main, check, expectedHrefs }) {
  const section = (main.match(/<section[^>]*aria-labelledby="related"[\s\S]*?<\/section>/) || [''])[0]
  const hrefs = [...section.matchAll(/<a [^>]*href="(\/[^"]+)"/g)].map((m) => m[1])
  const items = (section.match(/<li[\s>]/g) || []).length
  check('related cards: one card and one anchor per destination', items === expectedHrefs.length && hrefs.length === expectedHrefs.length, `${items} cards, ${hrefs.length} links`)
  check('related cards: destinations match', JSON.stringify([...hrefs].sort()) === JSON.stringify([...expectedHrefs].sort()), JSON.stringify(hrefs))
  check('related cards: every anchor has a descriptive accessible name', [...section.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].every((m) => /sr-only/.test(m[1])))
  check('related cards: grid layout, not the old two-column list', /grid-cols-1/.test(section) && !/sm:columns-2/.test(section))
}

/**
 * Equipment names (DEC-132). The owner confirmed five company products by
 * name only (the owner's "RIDGID 7500" is the RIDGID K-7500, DEC-133). Visible text may carry exactly these spellings, and the brand
 * "RIDGID" on its own; any other equipment brand, model or misspelling
 * fails. No equipment text may appear in a page's own JSON-LD nodes.
 */
export const CONFIRMED_EQUIPMENT_NAMES = [
  'SeeSnake Standard Camera Reel with TruSense',
  'Mongoose 184LT trailer-mounted sewer jetter',
  'SeeSnake CS12x',
  'SeekTech SR-20',
  'RIDGID K-7500',
]
const EQUIPMENT_TOKEN = /ridgid|see ?snake|seek ?tech|sr-?20|cs ?-?12|trusense|mongoose|184 ?-?lt|k-?7500|7500/i

export function checkEquipmentNames({ html, check }) {
  const body = html
    .replace(/<!-- -->/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
  const mainHtml = (body.match(/<main[\s\S]*?<\/main>/) || [body])[0]
  let text = mainHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
  for (const name of [...CONFIRMED_EQUIPMENT_NAMES, 'RIDGID']) text = text.split(name).join(' ')
  const hits = text.match(new RegExp(EQUIPMENT_TOKEN.source, 'gi')) || []
  check('equipment: only the owner-confirmed names (exact spelling) or RIDGID alone', hits.length === 0, [...new Set(hits)].join(', '))
  check('equipment: no "RIDGID Mongoose"', !/ridgid\s+mongoose/i.test(mainHtml))
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))
  const nodes = ld.flatMap((b) => b['@graph'] ?? [b]).filter((n) => n['@type'] !== 'Organization')
  check('equipment: none in the page JSON-LD nodes', !EQUIPMENT_TOKEN.test(JSON.stringify(nodes)))
}
