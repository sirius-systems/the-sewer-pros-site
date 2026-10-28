#!/usr/bin/env node
/**
 * Image audit of the production build (out/).
 *
 *   node scripts/audit-images.mjs --label=before|after [--out=out]
 *
 * Writes docs/source-reports/image-audit-<date>-<label>.json (every image
 * reference on every page, plus the findings) and ...-<label>.csv (the readable
 * inventory table). Prints a metrics summary. Rules live in
 * scripts/lib/image-findings.mjs, shared with scripts/verify-images.mjs.
 */
import fs from 'node:fs'
import { auditSite, publicFiles, sourceReferences } from './lib/image-audit.mjs'
import { summarize, loadSlotRegistry, isDecorative, isLogo } from './lib/image-findings.mjs'
import { readPages } from './lib/placeholder-count.mjs'

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3)
const OUT = arg('out') ?? 'out'
const LABEL = arg('label') ?? 'after'
const DATE = '2026-10-27'
const dir = 'docs/source-reports'

const pages = auditSite(OUT)
const files = publicFiles('public')
const srcRefs = sourceReferences()
const shot = loadSlotRegistry('.')
const shotByFile = new Map(shot.map((r) => [r.file.replace(/^public\/images\//, ''), r]))
const s = summarize(pages, files)

// Orphans: not in any built page and not named in source.
const orphans = []
const clientOnly = []
for (const f of s.unreferenced) {
  const inSrc = srcRefs(f.path)
  if (inSrc.length) clientOnly.push({ path: f.path, bytes: f.bytes, source: inSrc })
  else orphans.push({ path: f.path, bytes: f.bytes, width: f.width, height: f.height })
}

const rows = []
for (const p of pages) {
  for (const i of p.images) {
    const key = i.resolved?.replace(/^images\//, '')
    rows.push({
      page: p.url, pageType: p.type, indexable: p.indexable, kind: i.kind,
      shotId: shotByFile.get(key)?.id ?? '',
      declaredIn: i.resolved ? srcRefs(i.resolved).slice(0, 3).join(' ; ') : '',
      section: i.section ?? '', src: i.src ?? '', inRepo: i.inRepo ?? '', inOut: i.exists ?? '',
      format: i.format ?? '', naturalWxH: i.naturalWidth ? `${i.naturalWidth}x${i.naturalHeight}` : '',
      bytes: i.bytes ?? '', widthAttr: i.width ?? '', heightAttr: i.height ?? '', box: i.box ?? '',
      loading: i.loading ?? '', fetchpriority: i.fetchpriority ?? '', preloaded: i.preloaded ?? false,
      alt: i.kind === 'img' ? (i.alt ?? '(missing)') : '', decorative: i.kind === 'img' ? isDecorative(i) : '',
      lcp: i.lcp ?? false,
    })
  }
}

const esc = (v) => `"${String(v).replace(/"/g, '""')}"`
const header = Object.keys(rows[0])
const csv = [header.join(','), ...rows.map((r) => header.map((h) => esc(r[h])).join(','))].join('\n')
fs.writeFileSync(`${dir}/image-audit-${DATE}-${LABEL}.csv`, csv)

const summary = {
  label: LABEL, date: DATE,
  pages: s.pages, indexablePages: s.indexablePages, imageReferences: s.refs, imgTags: s.imgs,
  uniqueFilesReferenced: s.uniqueFilesReferenced,
  brokenReferences: s.broken.length,
  placeholderStrings: s.placeholderStrings.length,
  placeholderBoxes: readPages(OUT).reduce((n, p) => n + p.boxes.length, 0),
  missingAlt: s.missingAlt, emptyAlt: s.emptyAlt, emptyAltDecorative: s.decorative,
  emptyAltMeaningful: s.altProblems.filter((a) => a.issues.some((i) => /empty alt/.test(i))).length,
  altProblemRefs: s.altProblems.length,
  altOver125: s.altProblems.filter((a) => a.issues.some((i) => /over 125/.test(i))).length,
  altEquipmentWording: s.altProblems.filter((a) => a.issues.some((i) => /equipment/.test(i))).length,
  altBannedClaims: s.altProblems.filter((a) => a.issues.some((i) => /banned/.test(i))).length,
  missingDimensions: s.noDims.length,
  lazyLoadedHeroImages: s.lazyHero.length,
  heroWithoutFetchPriority: s.heroNoPriority.length,
  eagerBelowFold: s.belowFoldEager.length,
  filesOverBudget: s.overBudget.length,
  uniqueImageBytes: s.totalImageBytes, publicImageBytes: s.totalPublicBytes,
  pagesMissingOgImage: s.ogProblems.length,
  schemaImageProblems: s.schemaProblems.length,
  commercialReferences: s.commercial.length,
  orphanFiles: orphans.length, clientOnlyFiles: clientOnly.length,
  weightByType: Object.fromEntries(Object.entries(s.weightByType).map(([k, v]) => [k, { pages: v.pages, avgKB: Math.round(v.totalBytes / v.pages / 1024), maxKB: Math.round(v.maxBytes / 1024), avgImages: +(v.images / v.pages).toFixed(1) }])),
}

// Page-family profile: how many content images each family renders.
const profile = {}
for (const p of pages) {
  const content = p.images.filter((i) => i.kind === 'img' && i.src && !isLogo(i.src))
  const hero = p.images.find((i) => i.lcp)
  const f = (profile[p.type] ||= { pages: 0, noImages: 0, noHero: 0, total: 0, min: 1e9, max: 0, marketSpecific: 0 })
  f.pages++
  f.total += content.length
  f.min = Math.min(f.min, content.length)
  f.max = Math.max(f.max, content.length)
  if (!content.length) f.noImages++
  if (!hero) f.noHero++
  if (content.some((i) => /st-louis|san-diego|las-vegas|markets\//.test(i.src))) f.marketSpecific++
}

// Reuse
const use = {}
for (const p of pages) for (const i of p.images) if (i.resolved && i.kind === 'img') (use[i.resolved] ||= new Set()).add(p.url)
const reuse = Object.entries(use).map(([f, set]) => ({ file: f, pages: set.size })).sort((a, b) => b.pages - a.pages)

// Naming
const badNames = files.filter((f) => !/\/brand\//.test('/' + f.path) && !/^[a-z0-9]+(-[a-z0-9.]+)*\.(webp|png|jpe?g|svg|mp4|ico)$/.test(f.path.split('/').pop()))
  .concat(files.filter((f) => !/brand\//.test(f.path) && !/^the-sewer-pros-/.test(f.path.split('/').pop())))
const namingOutliers = [...new Set(badNames.map((f) => f.path))]

const doc = { summary, profile, reuse: reuse.slice(0, 40), namingOutliers, orphans, clientOnly, findings: {
  broken: s.broken.map((b) => ({ page: b.page, src: b.src })), altProblems: s.altProblems, overBudget: s.overBudget,
  heroNoPriority: s.heroNoPriority, ogProblems: s.ogProblems, schemaProblems: s.schemaProblems, belowFoldEager: s.belowFoldEager,
  repeatedAlt: s.repeatedAlt }, icons: pages[0].icons, share: pages[0].share, pagesDetail: pages.map((p) => ({ url: p.url, type: p.type, indexable: p.indexable, preloads: p.preloads, share: p.share, schemaImages: p.schemaImages, images: p.images.map(({ ancestors, inOut, attrs, ...r }) => r) })) }
fs.writeFileSync(`${dir}/image-audit-${DATE}-${LABEL}.json`, JSON.stringify(doc, null, 1))
console.log(JSON.stringify(summary, null, 2))
console.log('profile', JSON.stringify(profile))
console.log('orphans', orphans.length, 'clientOnly', clientOnly.length)

/* ---- After-run comparison and the slot table ------------------------------------------ */
if (LABEL === 'after' && fs.existsSync(`${dir}/image-audit-${DATE}-before.json`)) {
  const before = JSON.parse(fs.readFileSync(`${dir}/image-audit-${DATE}-before.json`, 'utf8'))
  const b = before.summary
  const kb = (n) => `${Math.round(n / 1024).toLocaleString('en-US')} KB`
  const mb = (n) => `${(n / 1e6).toFixed(1)} MB`
  const metric = (label, key, fmt = (v) => v) => `| ${label} | ${fmt(b[key])} | ${fmt(summary[key])} |`
  const lines = []
  lines.push('| Metric | Before | After |', '|---|---|---|')
  lines.push(
    metric('Pages crawled (indexable)', 'pages', (v) => v).replace(/\| (\d+) \| (\d+) \|$/, `| $1 (${b.indexablePages}) | $2 (${summary.indexablePages}) |`),
    metric('Image references', 'imageReferences'),
    metric('Unique image files referenced', 'uniqueFilesReferenced'),
    metric('Broken image references', 'brokenReferences'),
    metric('Placeholder boxes or placeholder strings', 'placeholderStrings'),
    `| Slots with no file (visible placeholder boxes) | ${b.placeholderBoxes ?? 0} (build log: "Unfilled image slots: none") | ${summary.placeholderBoxes} |`,
    metric('Missing alt attribute', 'missingAlt'),
    metric('Empty alt on a meaningful image', 'emptyAltMeaningful'),
    metric('Alt over 125 characters (references)', 'altOver125'),
    metric('Alt with unconfirmed equipment wording (references)', 'altEquipmentWording'),
    metric('Alt with a banned claim (references)', 'altBannedClaims'),
    metric('Images without width/height or an aspect box', 'missingDimensions'),
    metric('Lazy-loaded hero images', 'lazyLoadedHeroImages'),
    metric('Pages whose hero lacks fetchpriority=high', 'heroWithoutFetchPriority'),
    metric('Files over the weight budget', 'filesOverBudget'),
    metric('Image bytes referenced by pages (unique files)', 'uniqueImageBytes', mb),
    metric('Image and video bytes published from public/', 'publicImageBytes', mb),
    metric('Pages missing a valid og:image or twitter:image', 'pagesMissingOgImage'),
    metric('Schema image URLs broken or relative', 'schemaImageProblems'),
    metric('Commercial images referenced', 'commercialReferences'),
    metric('Unreferenced files in public/ (not in any page or in source)', 'orphanFiles'),
    metric('Files loaded only on the client (hero frames, video)', 'clientOnlyFiles'),
  )
  const wt = ['| Page type | Pages | Avg image KB before | After | Largest page before | After | Avg images |', '|---|---|---|---|---|---|---|']
  for (const [k, v] of Object.entries(summary.weightByType)) {
    const o = b.weightByType[k]
    wt.push(`| ${k} | ${v.pages} | ${o?.avgKB ?? ''} | ${v.avgKB} | ${o?.maxKB ?? ''} | ${v.maxKB} | ${v.avgImages} |`)
  }
  // slot table, one row per file
  const use2 = new Map()
  for (const p of pages) for (const i of p.images) {
    if (i.kind !== 'img' || !i.resolved || !i.exists) continue
    const e = use2.get(i.resolved) || { pages: new Set(), types: new Set(), bytes: i.bytes, dims: `${i.naturalWidth}x${i.naturalHeight}`, alts: new Set(), lcp: false }
    e.pages.add(p.url); e.types.add(p.type); if (i.alt) e.alts.add(i.alt); if (i.lcp) e.lcp = true
    use2.set(i.resolved, e)
  }
  const slotRows = [...use2.entries()].map(([f, e]) => {
    const rel = f.replace(/^images\//, '')
    const sh = shotByFile.get(rel)
    return { f, rel, id: sh?.id ?? '', pages: e.pages.size, types: [...e.types].join(', '), bytes: e.bytes, dims: e.dims, lcp: e.lcp }
  }).sort((x, y) => y.pages - x.pages)
  const slots = ['| Slot | Pages | File | Size | Page types | Status |', '|---|---|---|---|---|---|']
  for (const r of slotRows) {
    const status = r.id ? 'wired; generated render (approved, DEC-145)' : /brand\//.test(r.f) ? 'wired; brand asset' : 'wired; existing asset'
    slots.push(`| ${r.id || '(unregistered)'} | ${r.pages} | \`${r.f}\` | ${kb(r.bytes)} ${r.dims} | ${r.types} | ${status} |`)
  }
  const fam = ['| Page family | Pages | Pages with no content image | Pages with no hero image | Content images per page (min-max) | Pages with a market-specific image |', '|---|---|---|---|---|---|']
  for (const [k, v] of Object.entries(profile)) fam.push(`| ${k} | ${v.pages} | ${v.noImages} | ${v.noHero} | ${v.min}-${v.max} | ${v.marketSpecific} |`)
  const reuseT = ['| Pages using it | File |', '|---|---|', ...reuse.filter((r) => !/brand\/logos/.test(r.file)).slice(0, 15).map((r) => `| ${r.pages} | \`${r.file}\` |`)]
  fs.writeFileSync(`${dir}/image-audit-${DATE}-tables.md`, ['## Before and after', '', ...lines, '', '## Image weight by page type', '', ...wt, '', '## Page families: image coverage', '', ...fam, '', '## Most reused files', '', ...reuseT, '', '## Slot table (one row per file in use)', '', ...slots, ''].join('\n'))
  console.log('wrote tables')
}
