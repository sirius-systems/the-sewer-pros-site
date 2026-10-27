/**
 * Meta title and description audit engine, shared by scripts/audit-meta.mjs (report)
 * and scripts/verify-meta.mjs (gate).
 */
import fs from 'node:fs'
import path from 'node:path'
import { readMeta } from './meta-inventory.mjs'
import { norm, hasAny, specFor, SERVICES, LOCATIONS, MARKET_CITY } from './editorial-keywords.mjs'
import { titleWidth, descWidth, TITLE_BUDGET, DESC_BUDGET } from '../../lib/seo/text-width.mjs'

export const DESC_MIN = 110
export const DESC_MAX = 160
export const NEAR_DUP = 0.8

const ORIGIN = 'https://www.thesewerpros.com'
const BANNED = [
  [/\bfree estimates?\b/i, 'free estimate'],
  [/\b(repair(s|ing)?|replac(e|es|ing|ement)|trenchless|relining|pipe lining|sewer lining|excavat\w+|pipe bursting)\b/i, 'repair or replacement wording'],
  [/\b(commercial|restaurants?|industrial|retail|warehouses?|office buildings?|mixed[- ]use|businesses|business owners?)\b/i, 'commercial wording'],
  [/\blicen[cs](ed|e|ing|es)\b/i, 'licensing'],
  [/\b(24\/7|24-hour|emergency|guarantee[ds]?|warrant(y|ies)|lowest price|cheap|affordable|best|top-rated|#1|number one|leading|premier|state-of-the-art|professional-grade)\b/i, 'unapproved claim or empty superlative'],
  [/\$\d|\bfree (inspection|quote|consultation)\b/i, 'price or free offer'],
  [/\b(years? in business|since \d{4}|\d+\+? years)\b/i, 'years in business'],
]
// Repair words that describe the City's program or the independent-evaluation framing are allowed.
const REPAIR_ALLOWED = /(city|county|municipal|program|agency|district|msd|grant|lateral program)[^.]{0,80}(repair|replacement|replac)|(repair|replacement)[^.]{0,50}(program|claim|grant|recommendation|quote|decision|upsell)|(no|without|not|never)[^.]{0,30}(repair|replacement)|before (you )?(approve|authoriz|replac|repair)|second opinion/i
const FEAR = /\b(danger(ous)?|disaster|nightmare|devastating|costly|before it is too late|do not wait|don't wait|urgent|hazard(ous)?|health risk)\b/i
const OFFICE = /\b(our (office|location|branch|shop|storefront|showroom)|visit (us|our)|stop by|walk-?ins?|headquarter\w*|located (at|in)|near me|open now|google business|google maps)\b/i
const CTA = /\b(request|schedule|ask|see|learn|find out|get|compare|read|book|call|understand|know|check)\b/i

const MARKETS = {
  'st-louis-mo': { names: ['St. Louis'], others: ['San Diego', 'Las Vegas'] },
  'san-diego-ca': { names: ['San Diego'], others: ['St. Louis', 'Las Vegas'] },
  'las-vegas-nv': { names: ['Las Vegas'], others: ['St. Louis', 'San Diego'] },
}
const marketOf = (url) => {
  const m = url.match(/^\/locations\/([^/]+)\//) || url.match(/^\/([^/]+)\//)
  return m && MARKETS[m[1]] ? m[1] : null
}
const LOCS_BY_MARKET = {}
for (const l of Object.values(LOCATIONS)) (LOCS_BY_MARKET[l.market] ??= []).push(l.name)

const bigrams = (s) => {
  const w = norm(s).split(' ')
  const out = new Set()
  for (let i = 0; i < w.length - 1; i++) out.add(w[i] + ' ' + w[i + 1])
  return out
}
const dice = (a, b) => {
  if (a.size === 0 || b.size === 0) return 0
  let i = 0
  for (const x of a) if (b.has(x)) i++
  return (2 * i) / (a.size + b.size)
}
// Mask places and service names so a pure find-and-replace shows up as identical.
const maskTokens = [...Object.values(SERVICES).map((s) => s.name), ...Object.values(LOCATIONS).map((l) => l.name), 'St. Louis', 'San Diego', 'Las Vegas', 'MO', 'CA', 'NV'].sort((a, b) => b.length - a.length)
const mask = (s) => {
  let t = s
  for (const x of maskTokens) t = t.split(x).join('X')
  return norm(t)
}

function schemaDescriptions(html) {
  const out = []
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1])
      for (const n of j['@graph'] ?? [j]) if (n.description && ['WebPage', 'Service', 'Article', 'CollectionPage', 'AboutPage', 'ContactPage', 'FAQPage'].includes([].concat(n['@type']).find((t) => t !== 'Thing') ?? '')) out.push({ type: n['@type'], description: n.description })
    } catch {}
  }
  return out
}

export function runMetaAudit(root = 'out') {
  const P = readMeta(root)
  const rows = []
  for (const p of Object.values(P)) {
    if (/noindex/.test(p.robots)) continue
    const spec = specFor(p.url, p.type)
    const html = fs.readFileSync(path.join(root, p.url === '/' ? '' : p.url, 'index.html'), 'utf8')
    const r = {
      ...p,
      titleChars: p.title.length,
      titlePx: titleWidth(p.title),
      descChars: p.description.length,
      descPx: descWidth(p.description),
      primary: spec?.primary?.label ?? null,
      issues: [],
    }
    const add = (sev, msg) => r.issues.push({ sev, msg })

    /* ---- technical ---- */
    if (!p.title) add('high', 'missing title')
    if (!p.description) add('high', 'missing meta description')
    if (r.titlePx > TITLE_BUDGET) add('medium', `title is about ${r.titlePx}px (budget ${TITLE_BUDGET}px); likely to truncate`)
    else if (r.titlePx > TITLE_BUDGET - 25) add('low', `title is about ${r.titlePx}px, close to the ${TITLE_BUDGET}px budget`)
    if (r.descPx > DESC_BUDGET || p.description.length > DESC_MAX) add('medium', `description is about ${r.descPx}px / ${p.description.length} characters (budget ${DESC_BUDGET}px, ${DESC_MAX} characters); likely to truncate`)
    if (p.description && p.description.length < DESC_MIN) add('medium', `description is ${p.description.length} characters (minimum ${DESC_MIN})`)
    if (p.description && p.description.length < 130 && p.description.length >= DESC_MIN) add('medium', `description is ${p.description.length} characters (aim 130 to 158)`)
    const expectCanon = ORIGIN + p.url
    if (p.canonical !== expectCanon) add('high', `canonical is ${p.canonical}, expected ${expectCanon}`)
    if (p.ogUrl !== expectCanon) add('high', `og:url is ${p.ogUrl}, expected ${expectCanon}`)
    if (!p.ogTitle || !p.ogDescription || !p.ogImage || !p.ogType) add('high', 'og tags missing (title, description, image or type)')
    if (p.ogTitle !== p.title) add('medium', 'og:title differs from the title')
    if (p.ogDescription !== p.description) add('medium', 'og:description differs from the description')
    if (p.ogImage && !fs.existsSync(path.join('public', p.ogImage.replace(ORIGIN, '')))) add('high', `og:image file not found: ${p.ogImage}`)
    if (p.twitterCard !== 'summary_large_image' || p.twitterTitle !== p.title || p.twitterDescription !== p.description) add('medium', 'twitter card tags missing or differ from title and description')
    for (const [el, t] of [['title', p.title], ['description', p.description]]) {
      if (/[—–]/.test(t)) add('high', `${el} contains an em or en dash`)
      if (/["“”]/.test(t)) add('medium', `${el} contains quotation marks`)
      if (/&(amp|lt|gt|quot|#\d+);/.test(t)) add('medium', `${el} contains an unescaped entity`)
      if (/\b[A-Z]{4,}\b/.test(t.replace(/\b(HOA|SeeSnake|RIDGID|CCWRD|MSD|CIPP)\b/g, ''))) add('low', `${el} contains an all-caps word`)
    }
    const seps = (p.title.match(/\s[|:·-]\s/g) ?? []).length
    if (p.title.includes('|') && !/ \| The Sewer Pros$/.test(p.title)) add('medium', 'title uses a pipe that is not the brand separator')
    if (seps > 2) add('low', `title carries ${seps} separators`)

    /* ---- banned wording (title + description) ---- */
    for (const [el, t] of [['title', p.title], ['description', p.description]]) {
      for (const [re, label] of BANNED) {
        const m = t.match(re)
        if (!m) continue
        if (label === 'repair or replacement wording' && REPAIR_ALLOWED.test(t)) continue
        // The comparison page's subject is how an independent inspection differs from a repair company's.
        if (label === 'repair or replacement wording' && p.url === '/compare/independent-sewer-inspection-vs-repair-company/') continue
        add('high', `${el} contains ${label}: "${m[0]}"`)
      }
      if (FEAR.test(t)) add('medium', `${el} contains fear or urgency language: "${t.match(FEAR)[0]}"`)
      if (OFFICE.test(t)) add('high', `${el} implies an office or store: "${t.match(OFFICE)[0]}"`)
    }

    /* ---- intent and keyword ---- */
    if (spec) {
      const V = spec.primary.variants
      const tn = norm(p.title)
      const first = V.map((v) => (v instanceof RegExp ? tn.search(v) : tn.indexOf(norm(v)))).filter((i) => i >= 0)
      if (first.length === 0) {
        if (!(spec.partsOnly && hasAny(p.title, spec.partsOnly.service) && hasAny(p.title, spec.partsOnly.place))) add('high', `primary keyword "${spec.primary.label}" missing from the title`)
      } else if (Math.min(...first) > 22 && !['home', 'about', 'contact', 'faq', 'market-contact'].includes(p.type)) add('low', `primary keyword starts ${Math.min(...first)} characters into the title`)
      if (!hasAny(p.description, V) && !(spec.partsOnly && hasAny(p.description, spec.partsOnly.service) && hasAny(p.description, spec.partsOnly.place)) && !['faq', 'contact', 'about', 'audience-hub', 'locations-hub', 'resources-hub', 'market-contact', 'market-other'].includes(p.type)) add('medium', `primary keyword "${spec.primary.label}" (or its natural form) missing from the description`)
    }
    // Registered service name exact on service pages
    if (p.type === 'service' || p.type === 'service-location') {
      const slug = p.type === 'service' ? p.url.split('/')[2] : p.url.split('/')[4]
      if (!p.title.includes(SERVICES[slug].name)) add('high', `title does not carry the registered name "${SERVICES[slug].name}" exactly`)
    }
    if (/sewer cleaning and camera inspection/i.test(p.title)) add('high', 'title spells the combined service with "and" instead of "&"')

    /* ---- local intent ---- */
    const mk = marketOf(p.url)
    if (mk && ['service-location', 'location', 'market-hub', 'market-contact', 'market-other'].includes(p.type)) {
      const other = [...MARKETS[mk].others, ...Object.entries(LOCS_BY_MARKET).filter(([k]) => k !== mk).flatMap(([, v]) => v)]
      for (const o of other) {
        const re = new RegExp(`(^|[^A-Za-z])${o.replace('.', '\\.')}([^A-Za-z]|$)`)
        if (re.test(p.title) || re.test(p.description)) add('high', `cross-market mention of "${o}" on a ${mk} page`)
      }
      const place = p.type === 'service-location' || p.type === 'location' ? LOCATIONS[`${p.url.split('/')[2]}/${p.url.split('/')[3]}`]?.name : MARKET_CITY[mk]
      if (place && !new RegExp(place.replace('.', '\\.'), 'i').test(p.title)) add('medium', `title does not name the place "${place}"`)
      if (place && !new RegExp(place.replace('.', '\\.'), 'i').test(p.description)) add('medium', `description does not name the place "${place}"`)
    }
    if (p.type === 'audience') {
      const aud = { 'real-estate-agents': /real estate agent/i, 'home-buyers': /home buyer|buying|purchas/i, 'home-sellers': /sell/i, 'home-inspectors': /home inspector/i, 'property-managers': /property manager|rental|landlord/i, 'hoa-communities': /hoa|association/i }[p.url.split('/')[2]]
      if (aud && !aud.test(p.description)) add('medium', 'description has no audience anchor')
    }

    /* ---- AEO and engagement ---- */
    if (p.description && !CTA.test(p.description)) add('low', 'description has no soft next step or reader verb')
    const diffs = ['independent', 'video', 'written findings', 'second opinion', 'evidence', 'documented']
    if (!['service-location'].includes(p.type) && !diffs.some((d) => p.description.toLowerCase().includes(d))) r.noDifferentiator = true
    const sd = schemaDescriptions(html).filter((s) => s.type === 'WebPage' || (Array.isArray(s.type) && s.type.includes('WebPage')))
    if (sd.length && !sd.some((s) => norm(s.description) === norm(p.description))) add('medium', 'description differs from the WebPage schema description')
    r.severity = r.issues.some((i) => i.sev === 'high') ? 'high' : r.issues.some((i) => i.sev === 'medium') ? 'medium' : r.issues.length ? 'low' : 'ok'
    rows.push(r)
  }

  /* ---- duplicates and near duplicates (full set) ---- */
  const group = (key) => {
    const g = {}
    for (const r of rows) (g[norm(r[key])] ??= []).push(r.url)
    return Object.values(g).filter((x) => x.length > 1)
  }
  const dupTitles = group('title')
  const dupDescs = group('description')
  for (const g of dupTitles) for (const u of g) rows.find((r) => r.url === u).issues.push({ sev: 'high', msg: `title duplicated on ${g.length} pages` })
  for (const g of dupDescs) for (const u of g) rows.find((r) => r.url === u).issues.push({ sev: 'high', msg: `description duplicated on ${g.length} pages` })
  const nearDup = []
  const templateOnly = []
  const bg = rows.map((r) => ({ r, d: bigrams(r.description), m: mask(r.description) }))
  const seenMask = {}
  for (const b of bg) (seenMask[b.m] ??= []).push(b.r.url)
  for (const g of Object.values(seenMask)) if (g.length > 1) templateOnly.push(g)
  for (let i = 0; i < bg.length; i++) {
    for (let j = i + 1; j < bg.length; j++) {
      const s = dice(bg[i].d, bg[j].d)
      if (s >= NEAR_DUP) nearDup.push({ a: bg[i].r.url, b: bg[j].r.url, similarity: +s.toFixed(2) })
    }
  }
  for (const n of nearDup) for (const u of [n.a, n.b]) rows.find((r) => r.url === u).issues.push({ sev: 'medium', msg: `description ${(n.similarity * 100).toFixed(0)}% similar to ${u === n.a ? n.b : n.a}` })
  for (const g of templateOnly) for (const u of g) rows.find((r) => r.url === u).issues.push({ sev: 'medium', msg: `description differs only by place or service name from ${g.length - 1} other page(s)` })

  /* ---- cannibalization in titles: same title core after removing brand and place ---- */
  const core = {}
  for (const r of rows) {
    if (['service-location', 'location'].includes(r.type)) continue
    const key = norm(r.title.replace(/ \| The Sewer Pros$/, '')).replace(/\b(in|for) [a-z. ]+(, [a-z]{2})?$/, '').trim()
    ;(core[key] ??= []).push(r.url)
  }
  const cannibal = Object.entries(core).filter(([, v]) => v.length > 1).map(([k, v]) => ({ query: k, pages: v }))
  const camera = rows.filter((r) => !['service-location', 'market-hub'].includes(r.type) && /sewer camera inspection/i.test(r.title)).map((r) => r.url)
  const independent = rows.filter((r) => !['service-location'].includes(r.type) && /independent sewer inspection and cleaning/i.test(r.title)).map((r) => r.url)

  const rank = { ok: 0, low: 1, medium: 2, high: 3 }
  for (const r of rows) {
    r.severity = 'ok'
    for (const i of r.issues) if (rank[i.sev] > rank[r.severity]) r.severity = i.sev
  }
  const byType = {}
  for (const r of rows) {
    const o = (byType[r.type] ??= { pages: 0, titleChars: 0, titlePx: 0, descChars: 0, descPx: 0 })
    o.pages++
    o.titleChars += r.titleChars
    o.titlePx += r.titlePx
    o.descChars += r.descChars
    o.descPx += r.descPx
  }
  for (const o of Object.values(byType)) for (const k of ['titleChars', 'titlePx', 'descChars', 'descPx']) o[k] = Math.round(o[k] / o.pages)
  const count = (re) => rows.filter((r) => r.issues.some((i) => re.test(i.msg))).length
  const summary = {
    pages: rows.length,
    titleTruncating: count(/^title is about \d+px \(budget/),
    descTruncating: count(/^description is about \d+px/),
    descTooShort: count(/characters \(minimum/),
    duplicateTitles: dupTitles.length,
    duplicateDescriptions: dupDescs.length,
    nearDuplicateDescriptionPairs: nearDup.length,
    templateOnlyDescriptionGroups: templateOnly.length,
    ogMissingOrMismatched: count(/^og |og:title differs|og:description differs|twitter card/),
    bannedWording: count(/contains (free estimate|repair|commercial|licensing|unapproved|price|years)/),
    crossMarket: count(/cross-market/),
    officeImplied: count(/implies an office/),
    primaryMissingFromTitle: count(/missing from the title/),
    noAnchor: count(/does not name the place|no audience anchor/),
    schemaMismatch: count(/WebPage schema/),
    severity: { high: rows.filter((r) => r.severity === 'high').length, medium: rows.filter((r) => r.severity === 'medium').length, low: rows.filter((r) => r.severity === 'low').length, ok: rows.filter((r) => r.severity === 'ok').length },
  }
  return { summary, byType, rows, dupTitles, dupDescs, nearDup, templateOnly, cannibal, camera, independent, pages: P }
}
