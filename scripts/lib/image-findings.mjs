/**
 * Findings and metrics over the image inventory (scripts/lib/image-audit.mjs).
 * Shared by scripts/audit-images.mjs (the report) and scripts/verify-images.mjs
 * (the gate), so both apply the same rules.
 */
import fs from 'node:fs'
import path from 'node:path'
import { CONFIRMED_EQUIPMENT_NAMES } from './service-page-checks.mjs'

export const BUDGET = { hero: 200 * 1024, other: 100 * 1024 }
export const ALT_MAX = 125

/** The one wired file whose folder and name carry "commercial" (IMG-28, an ordinary city street render). */
export const COMMERCIAL_NAMED_EXCEPTIONS = new Set(['images/shared/commercial/the-sewer-pros-san-diego-commercial-street-manhole-curb-4x3.webp'])

const EQUIPMENT_TOKEN = /ridgid|see ?snake|seek ?tech|sr-?20|cs ?-?12|trusense|mongoose|184 ?-?lt|k-?7500|7500/gi
const OTHER_BRANDS = /\b(vactor|envirosight|cues|rothenberger|spartan|gorlitz|general wire|picote|electric eel|sewer ?rat|jetter ?pro|hydro ?flo|pf ?1500|milwaukee|dewalt|makita|rigid(?!\w)|ridgid ?mongoose)\b/i

/** Alt claims the owner rules out: real jobs, before/after, customers, addresses, licences, offices, identities. */
export const BANNED_ALT = [
  [/\b(real|actual|recent|completed|our|customer'?s?|client'?s?) (job|jobs|project|customer|client|installation|inspection|work)\b/i, 'real-job claim'],
  [/\bbefore(?: and |\/|-and-)after\b/i, 'before-and-after claim'],
  [/\b(our|the sewer pros'?) (technician|technicians|crew|team|truck|trucks|van|vehicle|office|branch|location|storefront|employee)\b/i, 'our crew/office claim'],
  [/\b(technician|crew) (from|of|at) the sewer pros\b/i, 'crew identity claim'],
  [/\b\d{2,5} [A-Z][a-z]+ (street|st|avenue|ave|road|rd|drive|dr|lane|ln|blvd|boulevard|way|court|ct)\b/i, 'street address'],
  [/\b(licen[sc]e|licensed|insured|bonded|certified|accredited)\b/i, 'licence/credential claim'],
  [/\b(office|branch|headquarters|storefront|showroom)\b/i, 'office/branch'],
  [/\b(commercial|restaurant|warehouse|business park|strip mall|industrial)\b/i, 'commercial setting'],
  [/\b(excavat\w*|trench\w*|backhoe|pipe ?burst\w*|cipp|liner|relin\w+|pipe replacement|replacing|new pipe|repair(?:ed|ing)?)\b/i, 'repair/replacement imagery'],
  [/\b(satisfied|happy|smiling) (customer|client|homeowner)\b/i, 'customer claim'],
  [/\b(best|state-of-the-art|professional-grade|top-rated|award)\b/i, 'superlative'],
  [/\b(free|guarantee\w*|warranty|same-day|24\/7|emergency)\b/i, 'offer/availability claim'],
]

const FILENAME_ALT = /\.(webp|png|jpe?g|svg|avif)\b|^[a-z0-9]+(-[a-z0-9]+){2,}$|^img[_-]?\d+|^image[_-]?\d*$|^dsc[_-]?\d+/i

export const isLogo = (src) => /\/brand\/logos\//.test(src || '')

export function isDecorative(img) {
  if (img.alt !== '') return false
  const cls = img.cls || ''
  return img.box === 'backdrop' || /(^|\s)-z-10(\s|$)/.test(cls) || img.ariaHidden === 'true' || img.hiddenAncestor || img.role === 'presentation' ||
    // card and list images whose link text or caption carries the meaning, service-area maps (the listed areas beside them carry it, see MarketCoverage) and hero backdrops
    (img.ancestors || []).some((t) => /^(a|li|article|figure)(#|$)/.test(t)) || /service-area-map/.test(img.src || '') || img.lcp || img.preloaded
}

export function altIssues(img) {
  const out = []
  const alt = img.alt
  if (!img.hasAlt) return ['missing alt attribute']
  if (alt === '') {
    if (!isDecorative(img)) out.push('empty alt on a meaningful image')
    return out
  }
  if (FILENAME_ALT.test(alt.trim())) out.push('filename-style alt')
  if (alt.length > ALT_MAX) out.push(`alt over ${ALT_MAX} characters (${alt.length})`)
  const words = alt.toLowerCase().match(/[a-z]+/g) || []
  const counts = {}
  for (const w of words) if (w.length > 3) counts[w] = (counts[w] || 0) + 1
  const stuffed = Object.entries(counts).filter(([, n]) => n >= 4)
  if (stuffed.length) out.push(`keyword-stuffed alt (${stuffed.map(([w, n]) => `${w} x${n}`).join(', ')})`)
  if (/\b(image|picture|photo|photograph|graphic) of\b/i.test(alt)) out.push('alt starts with "image of"')
  for (const [re, label] of BANNED_ALT) if (re.test(alt)) out.push(`banned claim: ${label}`)
  // Equipment names must be exact owner-confirmed spellings or RIDGID alone.
  let t = alt
  for (const n of [...CONFIRMED_EQUIPMENT_NAMES, 'RIDGID']) t = t.split(n).join(' ')
  const hits = t.match(EQUIPMENT_TOKEN)
  if (hits) out.push(`unconfirmed equipment wording (${[...new Set(hits)].join(', ')})`)
  if (OTHER_BRANDS.test(alt)) out.push('unconfirmed equipment brand')
  return out
}

/** Pieces of the repo that say which slot a file belongs to. */
export function loadSlotRegistry(root = '.') {
  const rows = []
  const sl = path.join(root, 'docs/image-shot-list.md')
  if (fs.existsSync(sl)) {
    for (const line of fs.readFileSync(sl, 'utf8').split(/\r?\n/)) {
      const c = line.split('|').map((x) => x.trim())
      if (/^IMG-\d+$/.test(c[1] ?? '') && c.length > 9) rows.push({ id: c[1], file: c[2], ratio: c[3], subject: c[4], scope: c[5], slots: Number(c[6]) || 0, type: c[8] })
    }
  }
  return rows
}

export function summarize(pages, files) {
  const refs = pages.flatMap((p) => p.images.map((i) => ({ ...i, page: p.url, ptype: p.type, indexable: p.indexable })))
  const imgs = refs.filter((r) => r.kind === 'img')
  const withSrc = refs.filter((r) => r.src && !r.external)
  const broken = withSrc.filter((r) => !r.exists)

  const heroSet = new Set()
  for (const r of refs) if (r.lcp || r.preloaded || /\/hero\//.test(r.resolved || '')) heroSet.add(r.resolved)

  const fileUse = new Map()
  for (const r of withSrc) {
    if (!r.exists) continue
    const k = r.resolved
    if (!fileUse.has(k)) fileUse.set(k, { pages: new Set(), refs: 0 })
    fileUse.get(k).pages.add(r.page)
    fileUse.get(k).refs++
  }
  const used = new Set([...fileUse.keys()])
  // icons, manifest and share images reached from head/schema rather than <img>
  for (const p of pages) {
    for (const ic of p.icons) if (ic.href) used.add(ic.href.split('?')[0].replace(/^\//, ''))
    for (const k of ['ogImageFile', 'twitterImageFile']) if (p.share[k]?.path) used.add(p.share[k].path)
    for (const s of p.schemaImages) if (s.url) used.add(s.url.replace('https://www.thesewerpros.com/', '').split('?')[0])
  }
  for (const m of ['images/brand/logos/04-digital/android-chrome-192x192.png', 'images/brand/logos/04-digital/android-chrome-512x512.png', 'favicon.ico']) used.add(m)
  const unreferenced = files.filter((f) => !used.has('images/' + f.path.replace(/^images\//, '')) && !used.has(f.path) && !used.has(f.path.replace(/^/, '')))

  const uniqueFiles = [...fileUse.keys()].map((k) => {
    const f = files.find((x) => 'images/' + x.path.replace(/^images\//, '') === k || x.path === k) || {}
    return { path: k, bytes: f.bytes, width: f.width, height: f.height, format: f.format, hero: heroSet.has(k), pages: fileUse.get(k).pages.size }
  })
  const overBudget = uniqueFiles.filter((f) => f.bytes > (f.hero ? BUDGET.hero : BUDGET.other))

  const noDims = imgs.filter((r) => r.exists !== false && r.src && r.box === 'none')
  const altProblems = []
  for (const r of imgs) {
    const issues = altIssues(r)
    if (issues.length) altProblems.push({ page: r.page, src: r.src, alt: r.alt, issues })
  }
  const lazyHero = refs.filter((r) => r.kind === 'img' && r.lcp && r.loading === 'lazy')
  const heroNoPriority = []
  for (const p of pages) {
    const l = p.images.find((i) => i.lcp)
    if (l && !l.preloaded && l.fetchpriority !== 'high') heroNoPriority.push({ page: p.url, src: l.src })
    if (l && l.fetchpriority !== 'high' && !heroNoPriority.find((x) => x.page === p.url)) heroNoPriority.push({ page: p.url, src: l.src, note: 'preloaded, no fetchpriority=high' })
  }
  const belowFoldEager = []
  for (const p of pages) {
    const body = p.images.filter((i) => i.kind === 'img' && i.src && !isLogo(i.src))
    const heroN = body.findIndex((i) => i.lcp)
    body.forEach((i, ix) => {
      if (i.loading !== 'lazy' && !i.lcp && !i.hiddenAncestor && ix > Math.max(heroN, 0) + 1) belowFoldEager.push({ page: p.url, src: i.src })
    })
  }
  const weightByType = {}
  for (const p of pages) {
    const seen = new Set()
    let bytes = 0
    let n = 0
    for (const r of p.images) {
      if (!r.exists || !r.src || seen.has(r.resolved)) continue
      seen.add(r.resolved)
      bytes += r.bytes || 0
      n++
    }
    const w = (weightByType[p.type] ||= { pages: 0, totalBytes: 0, maxBytes: 0, images: 0 })
    w.pages++
    w.totalBytes += bytes
    w.images += n
    w.maxBytes = Math.max(w.maxBytes, bytes)
  }
  const needsOg = pages.filter((p) => p.indexable)
  const ogProblems = []
  for (const p of needsOg) {
    const s = p.share
    const why = []
    if (!s.ogImage) why.push('no og:image')
    else {
      if (!/^https:\/\/www\.thesewerpros\.com\//.test(s.ogImage)) why.push('og:image not an absolute production URL')
      if (!s.ogImageFile?.exists) why.push('og:image file missing')
      else if (Math.abs(s.ogImageFile.width - 1200) > 2 || Math.abs(s.ogImageFile.height - 630) > 2) why.push(`og:image file is ${s.ogImageFile.width}x${s.ogImageFile.height}, not 1200x630`)
    }
    if (!s.twitterImage) why.push('no twitter:image')
    else if (!/^https:\/\/www\.thesewerpros\.com\//.test(s.twitterImage)) why.push('twitter:image not absolute')
    else if (!s.twitterImageFile?.exists) why.push('twitter:image file missing')
    if (why.length) ogProblems.push({ page: p.url, why })
  }
  const schemaProblems = []
  for (const p of pages) {
    for (const s of p.schemaImages) {
      if (!s.absolute) schemaProblems.push({ page: p.url, field: s.field, url: s.url, why: 'relative URL' })
      else if (!s.external && s.exists === false) schemaProblems.push({ page: p.url, field: s.field, url: s.url, why: 'file does not exist' })
      else if (s.exists === null && !s.external) schemaProblems.push({ page: p.url, field: s.field, url: s.url, why: 'unresolved' })
    }
  }
  const commercial = withSrc.filter((r) => /commercial/i.test(r.resolved || '') && !COMMERCIAL_NAMED_EXCEPTIONS.has(r.resolved))
  const placeholderStrings = []
  for (const p of pages) {
    for (const r of p.images) {
      if (r.src && /placeholder|coming-soon|todo|lorem|stock-|dummy|sample\./i.test(r.src)) placeholderStrings.push({ page: p.url, src: r.src })
    }
  }
  const dupAlt = {}
  for (const r of imgs) if (r.alt) (dupAlt[r.alt] ||= new Set()).add(r.page)
  const repeatedAlt = Object.entries(dupAlt)
    .map(([alt, set]) => ({ alt, pages: set.size }))
    .filter((x) => x.pages > 20)
    .sort((a, b) => b.pages - a.pages)

  return {
    pages: pages.length,
    indexablePages: pages.filter((p) => p.indexable).length,
    refs: refs.length,
    imgs: imgs.length,
    uniqueFilesReferenced: uniqueFiles.length,
    broken,
    unreferenced,
    overBudget,
    uniqueFiles,
    noDims,
    altProblems,
    lazyHero,
    heroNoPriority,
    belowFoldEager,
    weightByType,
    ogProblems,
    schemaProblems,
    commercial,
    placeholderStrings,
    repeatedAlt,
    emptyAlt: imgs.filter((r) => r.hasAlt && r.alt === '').length,
    decorative: imgs.filter((r) => isDecorative(r)).length,
    missingAlt: imgs.filter((r) => !r.hasAlt).length,
    totalImageBytes: uniqueFiles.reduce((a, f) => a + (f.bytes || 0), 0),
    totalPublicBytes: files.reduce((a, f) => a + (f.bytes || 0), 0),
  }
}
