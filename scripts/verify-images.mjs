/**
 * Post-build image gate for the static export in `out/`.
 *
 *   node scripts/verify-images.mjs
 *
 * Run `npm run build` first. Exits 1 on any failure. Engine and rules:
 * scripts/lib/image-audit.mjs and scripts/lib/image-findings.mjs; report:
 * docs/source-reports/image-audit-2026-10-27.md.
 *
 * Fails on: a broken image reference or a registered shot-list file that is
 * missing; a visible placeholder box or placeholder wording on a page; a
 * meaningful image with no alt (or an empty one); alt that is filename-style, keyword
 * stuffed, over 125 characters, names unconfirmed equipment, or claims a real job,
 * before-and-after, customer, address, licence, office, commercial setting, or
 * repair work; an image with no width and height or aspect-ratio box; a lazy-loaded
 * hero image, or a hero that is neither preloaded nor fetchpriority=high; a missing or
 * broken og:image or twitter:image (absolute production URL, 1200x630, file present);
 * a schema image URL that is relative or does not resolve; a file over the weight
 * budget (hero 200KB, other 100KB); a commercial image wired in, or a source
 * folder (clean-outs, residential, commercial) published from public/; favicon,
 * apple-touch-icon or manifest icons that are missing or the wrong size; any image file,
 * folder or URL containing "commercial"; an approved render that is not byte-identical to its
 * recorded SHA-256 (scripts/lib/approved-renders.json, exempt from the weight budget); a hero,
 * card or grid image with variants but no srcset and sizes, or a srcset URL that does not
 * resolve; an audience, location, resource, comparison, FAQ or Resources hub page with no
 * image; and any image with legible text (scripts/lib/image-ocr.json, from scripts/ocr-images.mjs)
 * that is not waived in scripts/lib/image-ocr-waivers.json.
 */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { auditSite, publicFiles, fileFacts } from './lib/image-audit.mjs'
import { summarize, loadSlotRegistry, BUDGET } from './lib/image-findings.mjs'
import { readPages } from './lib/placeholder-count.mjs'

const OUT = 'out'
if (!fs.existsSync(OUT)) {
  console.error('No build output at out/. Run `npm run build` first.')
  process.exit(2)
}

/**
 * Files that cannot reach the weight budget at the quality floor without losing
 * visible detail, written by scripts/compress-images.mjs with their size and the
 * reason. A waived file may not grow (5% slack); a new file over budget has no waiver.
 */
const WEIGHT_WAIVERS = new Map(Object.entries(fs.existsSync('scripts/lib/image-weight-waivers.json') ? JSON.parse(fs.readFileSync('scripts/lib/image-weight-waivers.json', 'utf8')) : {}))

const APPROVED = new Set(Object.keys(JSON.parse(fs.readFileSync('scripts/lib/approved-renders.json', 'utf8'))).map((p) => p))
const pages = auditSite(OUT)
const files = publicFiles('public')
const s = summarize(pages, files)

let failures = 0
const check = (name, bad) => {
  const ok = bad.length === 0
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : `: ${bad.length}`}`)
  if (!ok) {
    for (const b of bad.slice(0, 8)) console.log(`        ${b}`)
    if (bad.length > 8) console.log(`        ... and ${bad.length - 8} more`)
    failures += 1
  }
}
const uniq = (a) => [...new Set(a)]
const alt = (re) => s.altProblems.filter((a) => a.issues.some((i) => re.test(i))).map((a) => `${a.page}: ${a.src.split('/').pop()} (${a.issues.join('; ')})`)

console.log(`INFO  ${s.pages} pages (${s.indexablePages} indexable), ${s.refs} image references, ${s.uniqueFilesReferenced} files\n`)

// Missing and placeholder
check('no broken image references', s.broken.map((b) => `${b.page}: ${b.src}`))
const shot = loadSlotRegistry('.')
check('every shot-list (IMG-xx) file exists', shot.filter((r) => !fs.existsSync(path.join('public/images', r.file.replace(/^public\/images\//, '')))).map((r) => `${r.id}: ${r.file}`))
const boxes = readPages(OUT).filter((p) => p.boxes.length)
check('no visible placeholder boxes', boxes.map((p) => `${p.route}: ${p.boxes.length}`))
const wording = []
for (const p of pages) {
  const f = path.join(OUT, p.url, 'index.html')
  const html = fs.readFileSync(f, 'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '')
  const text = html.replace(/<[^>]+>/g, ' ')
  const m = text.match(/image coming|coming soon|real photo needed|photo (?:needed|pending)|placeholder image|lorem ipsum|\bTODO\b|Image slot:/i)
  if (m) wording.push(`${p.url}: "${m[0]}"`)
}
check('no placeholder wording on any page', wording)
check('no placeholder-style file names referenced', s.placeholderStrings.map((x) => `${x.page}: ${x.src}`))

// Alt text
check('every <img> has an alt attribute', pages.flatMap((p) => p.images.filter((i) => i.kind === 'img' && !i.hasAlt).map((i) => `${p.url}: ${i.src}`)))
check('no meaningful image has empty alt (decorative backdrops, hidden collages and card images are the only empties)', alt(/empty alt/))
check('no filename-style or "image of" alt', alt(/filename-style|image of/))
check('no keyword-stuffed alt', alt(/keyword-stuffed/))
check('alt is 125 characters or fewer', uniq(alt(/over 125/)))
check('alt names no unconfirmed equipment (RIDGID alone or the five confirmed names only)', uniq(alt(/equipment/)))
check('alt makes no real-job, before-and-after, customer, address, licence, office, commercial or repair claim', uniq(alt(/banned claim/)))

// Layout stability and loading
check('every image has width and height, or sits in an aspect-ratio box, a backdrop or a sized container', s.noDims.map((r) => `${r.page}: ${r.src}`))
check('no lazy-loaded hero (LCP) image', s.lazyHero.map((r) => `${r.page}: ${r.src}`))
check('every hero (LCP) image is preloaded and fetchpriority=high', s.heroNoPriority.map((r) => `${r.page}: ${r.src}${r.note ? ` (${r.note})` : ''}`))
check('no eager image far below the hero', s.belowFoldEager.map((r) => `${r.page}: ${r.src}`))

// Weight
check(`every image is within budget (hero ${BUDGET.hero / 1024}KB, other ${BUDGET.other / 1024}KB)`, s.overBudget.filter((f) => !APPROVED.has(f.path) && (!WEIGHT_WAIVERS.has(f.path) || f.bytes > WEIGHT_WAIVERS.get(f.path).bytes * 1.05)).map((f) => `${f.path}: ${Math.round(f.bytes / 1024)}KB${f.hero ? ' (hero)' : ''}`))
console.log(`INFO  ${s.overBudget.filter((f) => WEIGHT_WAIVERS.has(f.path)).length} files are over budget with a recorded waiver (at the quality floor; see scripts/lib/image-weight-waivers.json)`)

// Sharing and entities
check('og:image and twitter:image are present, absolute, 1200x630 and load on every indexable page', s.ogProblems.map((o) => `${o.page}: ${o.why.join('; ')}`))
check('every schema image and logo URL is absolute and resolves to a file', s.schemaProblems.map((o) => `${o.page}: ${o.field} ${o.url} (${o.why})`))
const home = pages.find((p) => p.url === '/')
const iconBad = []
const want = [['icon', '32x32'], ['icon', '16x16'], ['apple-touch-icon', '180x180']]
for (const [rel, size] of want) {
  const ic = home.icons.find((i) => i.rel === rel && i.sizes === size)
  if (!ic) iconBad.push(`missing ${rel} ${size}`)
  else if (!ic.file?.exists) iconBad.push(`${rel} ${size} file missing`)
  else if (`${ic.file.width}x${ic.file.height}` !== size) iconBad.push(`${rel} ${size} is ${ic.file.width}x${ic.file.height}`)
}
if (!home.icons.find((i) => i.rel === 'icon' && /favicon\.ico/.test(i.href) && i.file?.exists)) iconBad.push('favicon.ico missing')
const manifestPath = path.join(OUT, 'manifest.webmanifest')
if (!fs.existsSync(manifestPath)) iconBad.push('manifest.webmanifest missing')
else {
  const man = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  if (!man.icons?.length) iconBad.push('manifest has no icons')
  for (const ic of man.icons ?? []) {
    const f = fileFacts(path.join(OUT, ic.src.replace(/^\//, '')))
    if (!f.exists) iconBad.push(`manifest icon ${ic.src} missing`)
    else if (`${f.width}x${f.height}` !== ic.sizes) iconBad.push(`manifest icon ${ic.src} is ${f.width}x${f.height}, declared ${ic.sizes}`)
  }
}
check('favicon set, apple-touch-icon and manifest icons exist at their declared sizes', iconBad)
const logoBad = []
for (const p of pages) for (const i of p.images) {
  if (i.kind === 'img' && /\/brand\/logos\//.test(i.src || '') && i.width && i.height && i.naturalWidth) {
    if (Math.abs(i.width / i.height - i.naturalWidth / i.naturalHeight) / (i.naturalWidth / i.naturalHeight) > 0.02) logoBad.push(`${p.url}: ${i.src}`)
  }
}
check('logo width/height attributes match the file ratio (no distortion)', uniq(logoBad))

// Policy
check('no commercial image is referenced by any page', s.commercial.map((r) => `${r.page}: ${r.src}`))
check('no source folder is published from public/ (clean-outs, residential, commercial)', ['clean-outs', 'residential', 'commercial'].filter((d) => fs.existsSync(path.join('public/images', d))).map((d) => `public/images/${d}`))
const ratioBad = []
for (const p of pages) for (const i of p.images) {
  if (i.kind === 'img' && i.width && i.height && i.naturalWidth && /\/images\/(?!brand)/.test(i.src)) {
    if (Math.abs(i.width / i.height - i.naturalWidth / i.naturalHeight) / (i.naturalWidth / i.naturalHeight) > 0.02) ratioBad.push(`${p.url}: ${i.src}`)
  }
}
check('width/height attributes match the file ratio', uniq(ratioBad))

// ---- Rules added Oct 27, 2026 (follow-up) ----

// No "commercial" in any published image file name, folder, or URL on a page
const commercialNames = files.filter((f) => /commercial/i.test(f.path)).map((f) => `public/images/${f.path}`)
const commercialUrls = pages.flatMap((p) => p.images.filter((i) => /commercial/i.test(`${i.src ?? ''} ${i.srcset ?? ''}`)).map((i) => `${p.url}: ${i.src}`))
check('no image file, folder or URL contains the word commercial', [...commercialNames, ...uniq(commercialUrls)])

// Approved renders are byte-locked
const approved = JSON.parse(fs.readFileSync('scripts/lib/approved-renders.json', 'utf8'))
const approvedBad = Object.entries(approved).filter(([p, sha]) => !fs.existsSync(path.join('public', p)) || crypto.createHash('sha256').update(fs.readFileSync(path.join('public', p))).digest('hex') !== sha).map(([p]) => p)
check('the 12 approved renders and IMG-12 are byte-identical to the pre-audit files', approvedBad)

// Responsive images: srcset and sizes on every image that has variants, and on every hero
const manifest = JSON.parse(fs.readFileSync('lib/image-variants.json', 'utf8'))
const srcsetBad = []
const srcsetMissing = []
for (const p of pages) for (const i of p.images) {
  if (i.kind !== 'img' || !i.src) continue
  const needs = manifest[i.src] !== undefined || (i.lcp && /\.webp$/.test(i.src))
  if (needs && !(i.srcset && i.sizes)) srcsetBad.push(`${p.url}: ${i.src}`)
  for (const m of i.srcsetMissing ?? []) srcsetMissing.push(`${p.url}: ${m}`)
}
check('hero, card and grid images that have variants carry srcset and sizes', uniq(srcsetBad))
check('every srcset URL resolves to a file', uniq(srcsetMissing))
check('every variant listed in lib/image-variants.json exists on disk', Object.entries(manifest).flatMap(([src, ws]) => ws.filter((w) => !fs.existsSync(path.join('public', src.replace(/\.webp$/, `-${w}w.webp`)))).map((w) => `${src} ${w}w`)))

// Coverage: pages that were image-less now carry an image
const AUDIENCE_PAGES = ['home-buyers', 'home-sellers', 'real-estate-agents', 'home-inspectors', 'property-managers', 'hoa-communities'].map((a) => `/for/${a}/`)
const byUrl = new Map(pages.map((p) => [p.url, p]))
const content = (p) => p.images.filter((i) => i.kind === 'img' && i.src && !/\/brand\/logos\//.test(i.src))
check('every audience page has a hero image from the per-audience renders', AUDIENCE_PAGES.filter((u) => { const p = byUrl.get(u); return !p || !p.images.some((i) => i.lcp && /audience-hub\/the-sewer-pros-/.test(i.src)) }))
check('every location page has a hero image', pages.filter((p) => p.type === 'location' && !p.images.some((i) => i.lcp)).map((p) => p.url))
check('every resource, comparison, FAQ and resources-hub page has a header image', pages.filter((p) => ['resource', 'compare', 'faq', 'resources-hub'].includes(p.type) && content(p).length === 0).map((p) => p.url))

// OCR: any image with legible text must be empty or waived with a reason
const ocr = JSON.parse(fs.readFileSync('scripts/lib/image-ocr.json', 'utf8'))
const ocrWaivers = JSON.parse(fs.readFileSync('scripts/lib/image-ocr-waivers.json', 'utf8'))
const ocrBad = []
const used = uniq(pages.flatMap((p) => p.images.filter((i) => i.kind === 'img' && i.exists && !/-(640|960|1280)w\.webp$/.test(i.resolved)).map((i) => i.resolved)))
for (const rel of used) {
  const e = ocr[rel]
  if (!e) { ocrBad.push(`${rel}: not OCR'd (run node scripts/ocr-images.mjs)`); continue }
  const sha = crypto.createHash('sha256').update(fs.readFileSync(path.join('public', rel))).digest('hex')
  if (e.sha256 !== sha) ocrBad.push(`${rel}: changed since OCR`)
  else if (e.words.length && !ocrWaivers[rel]) ocrBad.push(`${rel}: "${e.words.map((w) => w.text).join(' ').slice(0, 80)}"`)
}
check('every published image is OCR-clean or has a recorded waiver', ocrBad)

console.log(`\n${failures === 0 ? 'All image checks passed.' : `${failures} image check(s) failed.`}`)
process.exit(failures === 0 ? 0 : 1)
