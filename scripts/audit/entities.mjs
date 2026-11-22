/** Entity index: services, markets, locations, audiences, resources -> target path + mention patterns. */
import fs from 'node:fs'
import path from 'node:path'

const registry = JSON.parse(fs.readFileSync(path.resolve('data/services/master-service-registry.json'), 'utf8'))
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const SERVICE_VARIANTS = {
  'sewer-cleaning-camera-inspection': ['sewer cleaning (?:&|and) camera inspection'],
  'sewer-camera-inspection': ['sewer camera inspections?', 'sewer scope', 'sewer scoping'],
  'pre-purchase-sewer-inspection': ['pre-purchase sewer inspections?', 'pre-purchase inspections?'],
  'sewer-line-locating': ['sewer line locating', 'locating (?:a|the|your) sewer line'],
  'hydro-jetting': ['hydro jetting', 'hydro-jetting'],
  'drain-cleaning': ['drain cleaning'],
  'sewer-cleaning': ['sewer cleaning'],
  'recurring-sewer-backup-diagnosis': ['recurring sewer backup diagnosis'],
  'preventative-sewer-maintenance': ['preventative sewer maintenance', 'preventive sewer maintenance'],
}

export function buildEntities(graph) {
  const E = []
  const add = (kind, key, target, patterns, label) => {
    if (!graph.pages[target]) return
    E.push({ kind, key, target, label, re: new RegExp(`\\b(?:${patterns.join('|')})`, 'i') })
  }
  for (const s of registry.services) {
    const pats = [...(SERVICE_VARIANTS[s.slug] ?? [esc(s.name.toLowerCase()).replace('&', '(?:&|and)')])]
    add('service', s.slug, `/services/${s.slug}/`, pats, s.name)
  }
  add('market', 'st-louis-mo', '/st-louis-mo/', ['St\\. Louis(?! (?:City|County))', 'greater St\\. Louis'], 'St. Louis')
  add('market', 'san-diego-ca', '/san-diego-ca/', ['San Diego(?! County)?'], 'San Diego')
  add('market', 'las-vegas-nv', '/las-vegas-nv/', ['Las Vegas(?: Valley)?'], 'Las Vegas')
  for (const u of Object.keys(graph.pages)) {
    const m = u.match(/^\/locations\/([^/]+)\/([^/]+)\/$/)
    if (!m) continue
    const name = { 'st-louis-city': 'St. Louis City', 'st-charles': 'St. Charles', 'mission-valley': 'Mission Valley', 'north-las-vegas': 'North Las Vegas', 'chula-vista': 'Chula Vista', 'san-marcos': 'San Marcos' }[m[2]] ?? m[2].replace(/(^|-)(\w)/g, (_, a, b) => (a ? ' ' : '') + b.toUpperCase())
    if (['san-diego', 'las-vegas'].includes(m[2])) continue // same name as the market
    add('location', `${m[1]}/${m[2]}`, u, [esc(name)], name)
  }
  add('audience', 'home-buyers', '/for/home-buyers/', ['home ?buyers?'], 'home buyers')
  add('audience', 'home-sellers', '/for/home-sellers/', ['home ?sellers?'], 'home sellers')
  add('audience', 'real-estate-agents', '/for/real-estate-agents/', ['real estate agents?'], 'real estate agents')
  add('audience', 'home-inspectors', '/for/home-inspectors/', ['home inspectors?'], 'home inspectors')
  add('audience', 'property-managers', '/for/property-managers/', ['property managers?', 'landlords?'], 'property managers')
  add('audience', 'hoa-communities', '/for/hoa-communities/', ['HOAs?', 'homeowners associations?'], 'HOA communities')
  add('resource', 'camera-report', '/resources/what-is-in-a-sewer-camera-inspection-report/', ['sewer camera inspection reports?', 'inspection report'], 'camera inspection report')
  add('resource', 'camera-video', '/resources/how-to-read-a-sewer-camera-inspection-video/', ['camera inspection video', 'inspection video'], 'camera inspection video')
  add('resource', 'lateral-report', '/resources/st-louis-sewer-lateral-report/', ['sewer lateral report'], 'sewer lateral report')
  add('resource', 'city-lateral', '/resources/st-louis-city-sewer-lateral-program/', ['St\\. Louis City sewer lateral program'], 'city lateral program')
  add('resource', 'county-lateral', '/resources/st-louis-county-sewer-lateral-program/', ['St\\. Louis County sewer lateral program'], 'county lateral program')
  add('compare', 'jetting-vs-snaking', '/compare/hydro-jetting-vs-sewer-snaking/', ['hydro jetting (?:vs\\.?|versus) (?:sewer )?snaking'], 'jetting vs snaking')
  add('compare', 'inspection-vs-repair', '/compare/independent-sewer-inspection-vs-repair-company/', ['independent (?:sewer )?inspection (?:vs\\.?|versus)'], 'inspection vs repair')
  add('cta', 'second-opinion', '/contact/', ['free second opinion'], 'free second opinion')
  return E
}

/** Mentions of eligible targets in an answer, with whether each is already linked. */
export function findMentions(text, ents, pageUrl, answerLinks) {
  const out = []
  const linked = new Set(answerLinks.map((l) => l.href.replace(/^https?:\/\/[^/]+/, '').split('#')[0].replace(/\/?$/, '/')))
  for (const e of ents) {
    if (e.target === pageUrl) continue
    // A location mention on a service+location page of that same location is the page's own context.
    const m = e.re.exec(text)
    if (!m) continue
    out.push({ kind: e.kind, target: e.target, mention: m[0], index: m.index, alreadyLinked: linked.has(e.target), sentence: sentenceAround(text, m.index) })
  }
  return out
}

function sentenceAround(text, i) {
  const s = Math.max(text.lastIndexOf('. ', i) + 2, 0)
  let e = text.indexOf('. ', i)
  if (e < 0) e = text.length
  return text.slice(s, e + 1).slice(0, 260)
}
