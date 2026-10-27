/**
 * Editorial keyword model for the Prompt 13 audit and its gate.
 *
 * SOURCE OF TRUTH. The repository holds no opportunities.json,
 * keyword-clusters.json, page briefs or Prompt 01/09 outputs for The Sewer Pros
 * (searched 2026-10-27). The researched phrases that DO exist are recorded in:
 *   - data/services/master-service-registry.json (service names, aliases, intents)
 *   - docs/10-seo-strategy.md sections 11 and 15 (keyword categories, FAQ questions)
 *   - docs/12-content-aeo-ai-strategy.md (answer questions, decision questions)
 *   - docs/14-content-specification.md (first-wave FAQ questions)
 *   - docs/09-audience-matrix.md (audience questions)
 * This module turns those into a per-page spec: a primary keyword, secondary
 * keywords (registry aliases) and researched questions, each with a source.
 * When real keyword research is supplied, replace the tables below; the audit
 * and the gate read only this file.
 */
import fs from 'node:fs'
import path from 'node:path'

export const norm = (s) =>
  s
    .toLowerCase()
    .replace(/&amp;/g, '&')
    .replace(/&/g, ' and ')
    .replace(/[’‘]/g, "'")
    .replace(/[-–/]/g, ' ')
    .replace(/[^a-z0-9' ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/** True when any variant (string or RegExp over normalised text) appears in `text`. */
export function hasAny(text, variants) {
  const t = norm(text)
  return variants.some((v) => (v instanceof RegExp ? v.test(t) : t.includes(norm(v))))
}

const registry = JSON.parse(fs.readFileSync(path.resolve('data/services/master-service-registry.json'), 'utf8'))
export const SERVICES = Object.fromEntries(registry.services.map((s) => [s.slug, { id: s.service_id, name: s.name, aliases: s.aliases ?? [] }]))
/** The nine services with their own /services/ page. */
export const CORE_SERVICE_SLUGS = [
  'sewer-camera-inspection',
  'sewer-cleaning',
  'hydro-jetting',
  'sewer-cleaning-camera-inspection',
  'sewer-line-locating',
  'drain-cleaning',
  'pre-purchase-sewer-inspection',
  'recurring-sewer-backup-diagnosis',
  'preventative-sewer-maintenance',
]
/** Registered name as a variant list that tolerates "&" versus "and". */
export const nameVariants = (name) => [norm(name)]

/**
 * Natural short forms of a registered service name. A title and H1 must carry the
 * full registered name; an opening paragraph, meta description or sub-heading may
 * use the registry aliases or one of these short forms, as copy normally does.
 */
const SHORT_FORMS = {
  'sewer-camera-inspection': ['camera inspection', 'sewer scope', 'sewer camera', 'camera'],
  'sewer-cleaning': ['cleaning', 'cleaned', 'clean'],
  'hydro-jetting': ['jetting', 'jetted', 'hydro jet'],
  'sewer-cleaning-camera-inspection': ['cleaning and camera', 'clean and camera', 'cleaning with a camera', 'cleaning and a camera', 'camera inspection and cleaning', 'cleaning with camera', 'cleaning visit', 'camera and cleaning'],
  'sewer-line-locating': ['locating', 'locate', 'locator', 'line location'],
  'drain-cleaning': ['drain', 'drains'],
  'pre-purchase-sewer-inspection': ['pre purchase inspection', 'pre purchase', 'sewer scope', 'a scope', 'buying', 'before closing', 'before you close', 'home purchase', 'before you buy'],
  'recurring-sewer-backup-diagnosis': ['backup diagnosis', 'recurring backup', 'repeat backup', 'repeated backup', 'backups', 'backup', 'diagnos'],
  'preventative-sewer-maintenance': ['sewer maintenance', 'preventive maintenance', 'maintenance'],
}
export const serviceParts = (slug) => {
  const svc = SERVICES[slug]
  return [norm(svc.name), ...svc.aliases.map(norm), ...(SHORT_FORMS[slug] ?? [])]
}

/* ---- Locations: names from the approved page registry ---- */
const approved = fs.readFileSync(path.resolve('data/pages/approved-pages.ts'), 'utf8')
export const LOCATIONS = {}
for (const m of approved.matchAll(/id: '(loc-[a-z-]+)' as PageId,\s*name: '([^']+)',\s*pageType: 'location',\s*pathname: toPathname\('\/locations\/([a-z-]+)\/([a-z-]+)\/'\)/g)) {
  LOCATIONS[`${m[3]}/${m[4]}`] = { id: m[1], name: m[2], market: m[3], slug: m[4] }
}
export const MARKET_CITY = { 'st-louis-mo': 'St. Louis', 'san-diego-ca': 'San Diego', 'las-vegas-nv': 'Las Vegas' }

/* ---- Researched questions (phrase bank) ---- */
/** id -> { q: researched wording, src: where it is recorded, re: how a heading or FAQ question matches }. */
export const QUESTIONS = {
  'cam-show': { q: 'What does a sewer camera inspection show?', src: 'docs/10 s.1107; docs/12 s.438, s.533; docs/14 s.1618', re: /(what|which) (does|can|do) (a |the )?(sewer )?(line )?camera( inspection)? (show|see|find|detect|reveal)|what (a |the )?(sewer )?(line )?camera( inspection)? (may |can |might )?(show|see|find)/ },
  'cam-how': { q: 'How does a sewer camera inspection work?', src: 'docs/10 s.1108; docs/14 s.679', re: /how (does|do|is) (a |the )?(sewer )?(line )?(camera )?(inspection|visit|scope)( work|s work| done)?|how a (sewer )?(line )?camera( inspection)? (visit )?works|how (a |the )?(sewer )?(camera )?(inspection|visit) works/ },
  'cam-when': { q: 'When should a sewer be inspected?', src: 'docs/10 s.1112, s.1127; docs/14 s.1622', re: /when (should|do|does|is|might|may) .{0,40}(inspect|camera|scope|inspection)|when .{0,30}(camera|sewer) inspection (may|might|can|is)/ },
  'cam-include': { q: 'What is included in a sewer inspection (report)?', src: 'docs/10 s.1110; docs/12 s.456, s.1117', re: /what('s| is| does)? (is )?(included|in) .{0,30}(sewer )?(camera )?inspection|what (do|does) .{0,25}(receive|get)|what you (get|receive)|what is included|what to ask for|(inspection )?(video|findings).{0,30}(included|receive)/ },
  'cam-scope': { q: 'What is a sewer scope?', src: 'docs/12 s.2605; docs/14 s.2213', re: /(what is|what's) (a )?sewer scope|sewer scope/ },
  'cam-roots': { q: 'Can a camera detect tree roots?', src: 'docs/14 s.1620', re: /(can|does) (a |the )?(sewer )?camera .{0,20}(detect|show|find|see) .{0,15}roots|roots/ },
  'cam-time': { q: 'How long does a sewer inspection take?', src: 'docs/12 s.584', re: /how long (does|do|will|is) .{0,40}(take|inspection)/ },
  'cam-video': { q: 'Do you provide the inspection video?', src: 'docs/14 s.683', re: /(do you|will you|is the|do i) .{0,25}(provide|get|receive|include).{0,25}(video|footage)|inspection video|get the video|video (and|is)/ },
  'clean-vs-replace': { q: 'Can a sewer line be cleaned instead of replaced?', src: 'docs/14 s.682', re: /clean(ed|ing)? .{0,25}(instead|rather) .{0,10}(of )?replac|will cleaning .{0,40}(fix|solve|help)|cleaning .{0,20}(vs|versus|or) .{0,20}(repair|replac)/ },
  'backup-why': { q: 'Why does my sewer keep backing up?', src: 'docs/10 s.1138; docs/12 s.436, s.2618', re: /why (does|do|is) (my )?(sewer|drain|line|toilet).{0,30}(back|keep|clog)|(sewer|drain|line).{0,20}keeps? (backing|clogging|coming)|(recurring|repeated|repeat) .{0,15}back ?ups?|backs? up (again|repeatedly)/ },
  'backup-causes': { q: 'What causes recurring sewer backups?', src: 'docs/14 s.686, s.2219', re: /what causes .{0,25}back ?ups?|causes? of .{0,25}back ?ups?|what (is|are) .{0,15}(cause|causing)/ },
  'backup-camera': { q: 'When does a sewer backup need a camera inspection?', src: 'docs/10 s.1142', re: /(when|should) .{0,40}(back ?up|clog).{0,40}(camera|inspect)|(camera|inspect).{0,40}(back ?up|clog)/ },
  'jet-what': { q: 'What is hydro jetting?', src: 'docs/12 s.2604', re: /what (is|are) (hydro ?jetting|hydro jets?)|what hydro jetting (is|does)/ },
  'jet-when': { q: 'When is hydro jetting appropriate?', src: 'docs/10 s.1154; docs/14 s.684', re: /when (is|should|might|may|does) .{0,30}(hydro ?jetting|jetting)|(hydro ?jetting|jetting).{0,25}(appropriate|considered|a good fit|make sense)/ },
  'jet-how': { q: 'How does hydro jetting work?', src: 'docs/10 s.2449', re: /how (does|do|is) (hydro ?)?jetting( work| done)?|how hydro ?jetting works/ },
  'jet-damage': { q: 'Can hydro jetting damage a sewer line?', src: 'docs/14 s.2215', re: /(can|does|will|could) (hydro ?)?jetting .{0,20}(damage|harm|hurt|break)|(damage|harm)/ },
  'jet-backups': { q: 'Can hydro jetting help recurring backups?', src: 'docs/10 s.1156', re: /(can|does|will) (hydro ?)?jetting .{0,20}(help|fix|stop|prevent)/ },
  'jet-vs-snake': { q: 'Hydro jetting vs snaking', src: 'docs/10 s.11 (decision keywords)', re: /difference between (hydro )?jetting and (sewer )?(snaking|cable)|(jetting|jetter).{0,20}(vs|versus|or|compared|better than|instead of).{0,20}(snak|cable|rodd?)|(snak|cable).{0,20}(vs|versus|or).{0,20}jetting/ },
  'loc-what': { q: 'What is sewer line locating?', src: 'docs/12 s.2606', re: /what (is|are) (a )?(sewer )?(line )?locating|what (sewer )?(line )?locating (is|means)/ },
  'loc-where': { q: 'Can you locate where the sewer line runs?', src: 'docs/14 s.685', re: /(can|do|will) you (locate|find|trace|mark)|where (the |my )?(sewer )?line runs|locate where/ },
  'loc-remodel': { q: 'Why locate a sewer before remodeling?', src: 'docs/10 s.1168', re: /(before|prior to) (a )?(remodel|dig|digging|build|construction|landscap)|why (locate|find)/ },
  'drain-clog': { q: 'Why does my drain keep clogging?', src: 'docs/12 s.2620', re: /why (does|do|is) (my )?drain.{0,25}(clog|back|slow|keep)|drain.{0,15}keeps? (clogging|backing)|(slow|clogged|recurring) drains?/ },
  'buy-should': { q: 'Should I get a sewer inspection before buying a house?', src: 'docs/10 s.1123; docs/12 s.454, s.2650; docs/14 s.681, s.2214; docs/09 s.2175', re: /(should|do|does|is it|is a|worth).{0,40}(before|prior to).{0,25}(buy|purchas|clos)|(before|prior to) (you )?(buy|buying|purchas|clos)/ },
  'buy-found': { q: 'What happens if a sewer problem is found before closing?', src: 'docs/10 s.1126', re: /(what happens|what if|if) .{0,40}(found|finds|shows|reveals).{0,30}(before|during|clos)|(before|prior to) clos/ },
  'buy-who': { q: 'Who orders a sewer inspection?', src: 'docs/10 s.1124', re: /who (orders|requests|uses|needs|should)/ },
  'agent-needs': { q: 'What does a real estate agent need from a sewer inspection?', src: 'docs/09 s.2183', re: /(real estate )?agents?.{0,40}(need|want|expect|pass|share|client)|(what|how) .{0,30}agents?/ },
  'pm-jetting': { q: 'When should a property manager schedule hydro jetting / maintenance?', src: 'docs/09 s.2179', re: /property manager.{0,40}(schedule|maintenance|jetting|recurring|backup)|(schedule|how often).{0,40}(maintenance|cleaning)/ },
  'second-opinion': { q: 'Should I get a second opinion before sewer replacement?', src: 'docs/12 s.1324, s.2651; docs/14 s.2218', re: /second opinion|(before|prior to) (you )?(approv|replac|authoriz)|independent (inspection|evaluation)/ },
}

/**
 * Researched questions required (r) or expected (e) on each core service page.
 * "Required" = the page's own central question, recorded in docs/10, 12 or 14.
 */
export const SERVICE_QUESTIONS = {
  'sewer-camera-inspection': { r: ['cam-show', 'cam-how', 'cam-when'], e: ['cam-scope', 'cam-roots', 'cam-time', 'cam-video', 'cam-include'] },
  'sewer-cleaning': { r: ['backup-why'], e: ['clean-vs-replace', 'jet-vs-snake'] },
  'hydro-jetting': { r: ['jet-what', 'jet-when', 'jet-how'], e: ['jet-damage', 'jet-backups', 'jet-vs-snake'] },
  'sewer-cleaning-camera-inspection': { r: ['cam-show'], e: ['backup-why', 'cam-how'] },
  'sewer-line-locating': { r: ['loc-what', 'loc-where'], e: ['loc-remodel'] },
  'drain-cleaning': { r: ['drain-clog'], e: ['jet-vs-snake'] },
  'pre-purchase-sewer-inspection': { r: ['buy-should', 'cam-scope'], e: ['buy-found', 'buy-who', 'cam-include', 'cam-time'] },
  'recurring-sewer-backup-diagnosis': { r: ['backup-why', 'backup-causes'], e: ['backup-camera'] },
  'preventative-sewer-maintenance': { r: [], e: ['cam-when', 'backup-why'] },
}

/** Researched questions for non-service pages. */
export const PAGE_QUESTIONS = {
  '/for/home-buyers/': { r: ['buy-should'], e: ['buy-found', 'cam-include'] },
  '/for/real-estate-agents/': { r: ['agent-needs'], e: ['buy-found'] },
  '/for/home-sellers/': { r: [], e: ['buy-should'] },
  '/for/home-inspectors/': { r: [], e: ['cam-scope', 'cam-how'] },
  '/for/property-managers/': { r: ['pm-jetting'], e: ['backup-why'] },
  '/for/hoa-communities/': { r: [], e: ['backup-why'] },
  '/resources/what-is-in-a-sewer-camera-inspection-report/': { r: ['cam-include'], e: ['cam-show'] },
  '/resources/how-to-read-a-sewer-camera-inspection-video/': { r: [], e: ['cam-show', 'cam-how'] },
  '/compare/hydro-jetting-vs-sewer-snaking/': { r: ['jet-vs-snake'], e: ['jet-when'] },
  '/compare/independent-sewer-inspection-vs-repair-company/': { r: ['second-opinion'], e: [] },
}

const place = (url) => {
  const s = url.split('/').filter(Boolean)
  return LOCATIONS[`${s[1]}/${s[2]}`]
}

/**
 * Spec for one page: primary keyword (variants for each element), registry
 * secondary keywords and researched questions. `elements` lists which of
 * title/meta/h1/h2/opening the primary must reach; `h1Exempt` records a
 * documented owner decision that keeps a non-matching H1.
 */
export function specFor(url, type) {
  const s = url.split('/').filter(Boolean)
  const spec = { primary: null, secondary: [], required: [], expected: [], elements: ['title', 'meta', 'h1', 'h2', 'opening'], h1Exempt: null, serviceSlug: null, loc: null }
  const one = (label, ...variants) => ({ label, variants })

  if (type === 'service') {
    const slug = s[1]
    const svc = SERVICES[slug]
    spec.serviceSlug = slug
    spec.primary = one(svc.name.toLowerCase(), norm(svc.name))
    spec.secondary = svc.aliases
    const q = SERVICE_QUESTIONS[slug] ?? { r: [], e: [] }
    spec.required = q.r
    spec.expected = q.e
    if (slug === 'sewer-cleaning-camera-inspection') spec.h1Exempt = 'Owner directed 2026-10-05: the original H1 stays; the service name is the chip, breadcrumb, title and schema name (verify-sewer-cleaning-camera-inspection-page.mjs, DEC-126)'
    return spec
  }
  if (type === 'service-location') {
    const svc = SERVICES[s[3]]
    const loc = place(url)
    spec.serviceSlug = s[3]
    spec.loc = loc
    spec.primary = one(`${svc.name.toLowerCase()} in ${loc.name.toLowerCase()}`, `${norm(svc.name)} in ${norm(loc.name)}`)
    spec.partsOnly = { service: serviceParts(s[3]), place: [norm(loc.name)] }
    spec.secondary = svc.aliases
    return spec
  }
  if (type === 'location') {
    const loc = place(url)
    spec.loc = loc
    spec.primary = one(`sewer inspection ${loc.name.toLowerCase()}`, norm(`sewer inspection and cleaning in ${loc.name}`), norm(`sewer inspection in ${loc.name}`), norm(`${loc.name} sewer inspection`), norm(`sewer camera inspection and cleaning in ${loc.name}`))
    spec.partsOnly = { service: ['sewer inspection', 'sewer camera inspection'], place: [norm(loc.name)] }
    spec.secondary = ['sewer cleaning', 'hydro jetting', 'sewer line locating']
    return spec
  }
  const fixed = {
    '/': one('independent sewer inspection and cleaning', 'independent sewer inspection and cleaning'),
    '/services/': one('sewer and drain services', 'sewer and drain', 'sewer services'),
    '/locations/': one('service areas', 'service area'),
    '/for/': one('who we serve', 'who we serve', 'every property'),
    '/resources/': one('sewer and drain resources', 'sewer and drain resources', 'sewer camera inspection shows', 'sewer and drain guides'),
    '/about/': one('independent sewer inspection', 'independent sewer inspection', 'independent sewer inspection and diagnostics'),
    '/faq/': one('sewer and drain faqs', 'sewer and drain faq', 'sewer faq', 'sewer and drain questions', 'answers about sewer'),
    '/contact/': one('contact the sewer pros', 'contact the sewer pros', /contact.*the sewer pros/),
    '/for/home-buyers/': one('home buyer sewer inspection', 'home buyer', 'home buyers', 'before you buy', 'sewer inspection before buying'),
    '/for/real-estate-agents/': one('sewer inspection for real estate agents', 'real estate agent', 'real estate agents'),
    '/for/home-sellers/': one('sewer inspection before selling', 'home seller', 'home sellers', 'sellers', 'before selling'),
    '/for/home-inspectors/': one('sewer inspection for home inspectors', 'home inspector', 'home inspectors'),
    '/for/property-managers/': one('sewer inspection for property managers', 'property manager', 'property managers'),
    '/for/hoa-communities/': one('sewer inspection for hoa communities', 'hoa', 'hoa communities', 'homeowners association'),
    '/resources/what-is-in-a-sewer-camera-inspection-report/': one('sewer camera inspection report', 'sewer camera inspection report'),
    '/resources/how-to-read-a-sewer-camera-inspection-video/': one('sewer camera inspection video', 'sewer camera inspection video', 'camera inspection video', 'camera inspection footage', 'inspection footage', 'inspection video'),
    '/resources/st-louis-sewer-lateral-report/': one('st. louis sewer lateral report', 'st louis sewer lateral report', 'sewer lateral report'),
    '/resources/st-louis-city-sewer-lateral-program/': one('st. louis city sewer lateral program', 'st louis city sewer lateral program', 'st louis city sewer lateral', 'city sewer lateral program', /st louis city .{0,30}sewer lateral/),
    '/resources/st-louis-county-sewer-lateral-program/': one('st. louis county sewer lateral program', 'st louis county sewer lateral program', 'st louis county sewer lateral', 'county sewer lateral program', /st louis county .{0,60}lateral/),
    '/compare/hydro-jetting-vs-sewer-snaking/': one('hydro jetting vs sewer snaking', 'hydro jetting vs sewer snaking', 'hydro jetting vs snaking', 'hydro jetting and sewer snaking', 'hydro jetting and snaking', 'jetting and snaking', 'snaking and hydro jetting'),
    '/compare/independent-sewer-inspection-vs-repair-company/': one('independent sewer inspection vs repair company', 'independent sewer inspection vs repair company', 'independent sewer inspection vs repair', 'independent sewer inspection with repair', 'independent sewer inspection and repair', 'independent inspection from a repair company', 'independent sewer inspection'),
  }
  if (fixed[url]) {
    spec.primary = fixed[url]
    const q = PAGE_QUESTIONS[url]
    if (q) {
      spec.required = q.r
      spec.expected = q.e
    }
    if (type === 'audience' || type === 'audience-hub') spec.secondary = ['sewer camera inspection', 'pre-purchase sewer inspection']
    // Audience H1s are the owner's messaging headlines (content/pages/audiences.tsx); the keyword is carried by the title tag, eyebrow, meta description and opening.
    if (type === 'audience') spec.h1Exempt = 'Owner-written audience headline (messaging line, kept); keyword carried by title, eyebrow, meta and opening'
    return spec
  }
  if (type === 'market-hub') {
    const city = MARKET_CITY[s[0]]
    spec.primary = one(`sewer inspection and cleaning ${city.toLowerCase()}`, norm(`sewer inspection and cleaning in ${city}`), norm(`sewer camera inspection and cleaning in ${city}`), norm(`sewer camera inspection in ${city}`), norm(`sewer inspection in ${city}`))
    spec.partsOnly = { service: ['sewer camera inspection', 'sewer inspection'], place: [norm(city)] }
    spec.secondary = ['sewer cleaning', 'hydro jetting', 'sewer line locating']
    return spec
  }
  if (type === 'market-contact') {
    const city = MARKET_CITY[s[0]]
    spec.primary = one(`contact the sewer pros in ${city.toLowerCase()}`, norm(`contact the sewer pros in ${city}`), norm(`request sewer inspection in ${city}`), norm(`sewer inspection in ${city}`))
    return spec
  }
  if (type === 'market-other') {
    const city = MARKET_CITY[s[0]]
    spec.primary = one(`sewer lateral inspection reporting ${city.toLowerCase()}`, 'sewer lateral inspection', 'lateral inspection')
    return spec
  }
  return null // thank-you and other utility pages are not audited for keywords
}

/** Elements the primary must reach for each page type (others are informational). */
export const ELEMENTS_BY_TYPE = {
  // Utility and hub pages: the primary phrase is a label ("FAQs", "Contact"), so title, meta and H1 carry it.
  home: ['title', 'meta', 'h1'],
  about: ['title', 'h1'],
  faq: ['title', 'meta', 'h1'],
  contact: ['title', 'meta', 'h1'],
  'market-contact': ['title', 'meta', 'h1'],
  'market-other': ['title', 'meta', 'h1'],
  'audience-hub': ['title', 'h1'],
  'locations-hub': ['title', 'meta', 'h1'],
  'resources-hub': ['title', 'meta', 'h1'],
  'services-hub': ['title', 'meta', 'h1', 'opening'],
  resource: ['title', 'meta', 'h1', 'opening'],
  compare: ['title', 'meta', 'h1', 'opening'],
  audience: ['title', 'meta', 'h1', 'opening'],
  service: ['title', 'meta', 'h1', 'h2', 'opening'],
  'service-location': ['title', 'meta', 'h1', 'opening'],
  location: ['title', 'meta', 'h1', 'opening'],
  'market-hub': ['title', 'meta', 'h1', 'opening'],
}
