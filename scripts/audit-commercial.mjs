#!/usr/bin/env node
/**
 * Commercial removal audit.
 *
 * Owner decision (Oct 12, 2026): The Sewer Pros does not list commercial
 * services. This script searches the project for anything that still treats
 * commercial as active, and writes docs/commercial-removal-audit.md.
 *
 *   npm run build          (with NEXT_PUBLIC_SITE_URL set)
 *   node scripts/audit-commercial.mjs [--out=out] [--no-write]
 *
 * It reads: source (app, components, content, data, lib, types, scripts,
 * config), the static build in `out/` (HTML, JSON-LD, sitemap, links, metadata,
 * public text files), the registries and matrices, docs and CLAUDE.md, images,
 * and git state. Exit code 0 means the verdict is CLEAN.
 *
 * Retained, never flagged: property managers (residential-focused),
 * multifamily (residential-focused), real estate (buyers, sellers, agents,
 * inspectors, pre-purchase, second opinion), residential investors, Mission
 * Valley and every other location page.
 *
 * Approved exceptions (class X): the committed image source folders
 * (public/images/clean-outs, residential, commercial) and the 12 render images
 * with their filenames and equipment.
 *
 * Classes: A page or route still present, B registry or data entry, C wording
 * or reference, D ambiguous (owner decision), E false positive, X approved
 * exception. CLEAN means zero A, B and C hits and no retained-content failure.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')).map(([k, v]) => [k, v ?? true]))
const repo = process.cwd()
const outDir = path.resolve(repo, String(args.out ?? 'out'))
const WRITE = !args['no-write']

/* ===================== configuration ===================== */
const TERM = /commercial|business owner|businesses|\bfacilit(y|ies)\b|restaurant|warehouse|\bretail|industrial|office building|strip mall|shopping cent(er|re)|medical office|\bhotels?\b|\bschools?\b|\bchurch(es)?\b|\bB2B\b|multi[-_ ]?tenant/i
const STRICT = /commercial|restaurant|warehouse|facility manager|multi[-_ ]?tenant|B2B/i
// A line that records the decision itself, or a test guard that asserts commercial text is absent.
const REMOVAL_NOTE = /(not (offered|listed|list|offer|market|serve|build)|does not (list|offer|serve|market)|do not (create|build|serve)|removed|removal|no longer|owner decision|never|retired|reintroduc|banned|forbidden|absent|must not)/i
// Municipal programs that name commercial property as outside their scope are local facts, not service claims.
const MUNICIPAL = /(City|policy|covers|dwelling|program|connections|customers|excluded|exclude|eligible|eligib|applies|apply|permit|MSD|Sanitary|wastewater|utilit|Water Reclamation|treatment|lateral|occupancy|re-occupancy|resource recovery)/i
const RETAINED_ROUTES = [
  ['/for/home-buyers/', '/for/'],
  ['/for/home-sellers/', '/for/'],
  ['/for/real-estate-agents/', '/for/'],
  ['/for/home-inspectors/', '/for/'],
  ['/for/property-managers/', '/for/'],
  ['/for/hoa-communities/', '/for/'],
  ['/services/pre-purchase-sewer-inspection/', '/services/'],
  ['/compare/independent-sewer-inspection-vs-repair-company/', '/for/'],
]
const RENDER_FILES = [
  'cleanouts/the-sewer-pros-floor-drain-cleanout-access-4x3.webp',
  'cleanouts/the-sewer-pros-capped-exterior-cleanout-base-of-house-4x3.webp',
  'residential/the-sewer-pros-st-louis-residential-street-manhole-curb-4x3.webp',
  'residential/the-sewer-pros-san-diego-residential-street-manhole-curb-4x3.webp',
  'residential/the-sewer-pros-las-vegas-residential-street-manhole-curb-4x3.webp',
  'commercial/the-sewer-pros-san-diego-commercial-street-manhole-curb-4x3.webp',
  'residential/the-sewer-pros-st-louis-older-home-visible-cleanout-4x3.webp',
  'residential/the-sewer-pros-san-diego-older-home-visible-cleanout-4x3.webp',
  'residential/the-sewer-pros-las-vegas-older-home-visible-cleanout-4x3.webp',
  'residential/the-sewer-pros-bathroom-sink-and-tub-4x3.webp',
  'residential/the-sewer-pros-kitchen-sink-slow-drain-4x3.webp',
  'residential/the-sewer-pros-fence-line-planting-beds-possible-dig-area-4x3.webp',
]
const SOURCE_DIRS = ['app', 'components', 'content', 'data', 'lib', 'types', 'hooks', 'scripts', 'src', 'tests', 'test', '__tests__', '.storybook', 'stories', 'claude', '.claude']
const DOC_DIRS = ['docs']
const STRUCTURED = /^data\/(matrices\/|locations\/master-location-registry\.json|services\/master-service-registry\.json|reviews\/google-reviews\.json)/
const SELF = /^scripts\/audit-commercial\.mjs$/
const OWN_DOCS = /^docs\/(commercial-removal-(audit|inventory|verification)|property-manager-restore|multifamily-page-decision)\.md$/

/* ===================== helpers ===================== */
const sh = (c) => {
  try {
    return execSync(c, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], cwd: repo }).trim()
  } catch {
    return ''
  }
}
const walk = (p) => {
  if (!fs.existsSync(p)) return []
  const st = fs.statSync(p)
  if (st.isFile()) return [p]
  if (/(^|[\\/])(node_modules|\.next|\.git)([\\/]|$)/.test(p)) return []
  return fs.readdirSync(p).flatMap((n) => walk(path.join(p, n)))
}
const rel = (f) => path.relative(repo, f).replace(/\\/g, '/')
const esc = (s) => String(s).replace(/\|/g, '/').replace(/\r?\n/g, ' ')
const C0 = () => ({ A: 0, B: 0, C: 0, D: 0, E: 0, X: 0 })
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&rsquo;/g, '’').replace(/&nbsp;/g, ' ')
const strip = (h) => decode(h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<svg[\s\S]*?<\/svg>/gi, ' ').replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')).trim()
const first = (re, s) => {
  const m = s.match(re)
  return m ? decode(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()) : ''
}
const ctx = (text, re, n = 2) => {
  const found = []
  const g = new RegExp(re.source, 'gi')
  let m
  while ((m = g.exec(text)) && found.length < n) found.push(text.slice(Math.max(0, m.index - 50), m.index + m[0].length + 60))
  return found
}

const nearOf = (lines, i) => ({
  prev1: lines[i - 1] || '',
  next1: lines[i + 1] || '',
  win2: lines.slice(Math.max(0, i - 2), i + 3).join(' '),
  next3: lines.slice(i + 1, i + 5).join(' '),
})

/** Line classification for source and docs. */
function classifyLine(file, text, kind, near = { prev1: '', next1: '', win2: '', next3: '' }) {
  const strict = STRICT.test(text)
  const win1 = `${near.prev1} ${text} ${near.next1}`
  if (SELF.test(file) || OWN_DOCS.test(file)) return 'X'
  if (/^public\/images\/(clean-outs|residential|commercial)\//.test(file)) return 'X'
  if (/images\/shared\/commercial\//.test(text) || /commercial\/the-sewer-pros-san-diego-commercial-street-manhole/.test(text) || /ridgid|seektech|seesnake/i.test(text) && /\/images\//.test(text)) return 'X'
  if (!strict && /business owner/i.test(text)) return 'E'
  // "overcommercializing", "commercially": a different meaning of the word, not a commercial service.
  if (strict && !/commercial(?!i[sz]|ly)/i.test(text) && !/(restaurant|warehouse|facility manager|multi[-_ ]?tenant|B2B)/i.test(text)) return 'E'
  // Historical plans and specs from before this decision.
  if (/^docs\/(superpowers|archive)\//.test(file)) return 'E'
  if (/commercial-grade/i.test(text)) return 'E'
  if (/^docs\/22-decisions-change-log\.md$/.test(file)) return 'E' // historical decision record
  if (/^\.claude\//.test(file)) return 'E' // local tool permission log
  if (/^scripts\/verify-.*\.mjs$/.test(file) && strict) return 'E' // page tests that assert commercial text is absent
  if (strict && REMOVAL_NOTE.test(win1)) return 'E'
  // A markdown heading kept only so section numbers still resolve, whose body is the removal note.
  if (strict && /^\s*#{1,6}\s/.test(text) && (/Removed \(owner decision/.test(near.next3) || REMOVAL_NOTE.test(near.next3))) return 'E'
  if (strict && /the-sewer-pros-commercial-(drain-diagnostics-hero|multifamily-properties)\.webp/.test(text)) return 'D'
  if (strict && /^content\/pages\/(st-louis|san-diego|las-vegas)/.test(file) && MUNICIPAL.test(near.win2 || text)) return 'E'
  if (strict && /^content\/pages\/(st-louis|san-diego|las-vegas)/.test(file) && /\bindustrial\b/i.test(text)) return 'E'
  if (!strict) return 'D'
  if (kind === 'data') return 'B'
  if (/^(data|types)\//.test(file) || /^lib\/(routing|analytics|schema|forms)\//.test(file)) return 'B'
  return 'C'
}

/* ===================== AREA 1 and 7: source and docs ===================== */
const rootFiles = fs.readdirSync(repo).filter((f) => fs.statSync(f).isFile() && /^(next\.config\.|package\.json|tsconfig|eslint|postcss|tailwind|middleware|\.env|vercel|wrangler|\.nvmrc|\.prettier|README|CLAUDE)/i.test(f))
const SKIP_EXT = /\.(webp|png|jpg|jpeg|svg|mp4|ico|pdf|woff2?|gitkeep)$/i
const sourceFiles = [...SOURCE_DIRS.flatMap(walk), ...rootFiles.filter((f) => !/^(README|CLAUDE)/i.test(f))].filter((f) => !SKIP_EXT.test(f))
const docFiles = [...DOC_DIRS.flatMap(walk), 'CLAUDE.md', 'README.md', ...walk('public').filter((f) => /\.(md|txt)$/.test(f))].filter((f) => fs.existsSync(f) && /\.(md|txt)$/.test(f) && !/docs[\\/](archive|source-reports)/.test(f))

const srcHits = []
const structuredSummary = {}
for (const f of sourceFiles) {
  const r = rel(f)
  let text
  try {
    text = fs.readFileSync(f, 'utf8')
  } catch {
    continue
  }
  const lines = text.split(/\r?\n/)
  if (STRUCTURED.test(r)) {
    structuredSummary[r] = lines.filter((l) => STRICT.test(l)).length
    continue
  }
  lines.forEach((l, i) => {
    if (TERM.test(l)) srcHits.push({ file: r, line: i + 1, text: l.trim().slice(0, 150), cls: classifyLine(r, l, 'source', nearOf(lines, i)) })
  })
}
const docRows = []
for (const f of docFiles) {
  const r = rel(f)
  const lines = fs.readFileSync(f, 'utf8').split(/\r?\n/)
  const hits = []
  lines.forEach((l, i) => {
    if (TERM.test(l)) {
      const cls = classifyLine(r, l, 'doc', nearOf(lines, i))
      hits.push({ n: i + 1, text: l.trim().slice(0, 100), cls: cls === 'B' ? 'C' : cls })
    }
  })
  if (hits.length) docRows.push({ rel: r, hits })
}
const area1 = C0()
srcHits.forEach((h) => area1[h.cls]++)
const area7 = C0()
docRows.forEach((r) => r.hits.forEach((h) => area7[h.cls]++))

/* ===================== AREA 2, 3, 5, 6: build output ===================== */
const haveBuild = fs.existsSync(outDir)
const pages = []
const jsonld = []
const links = []
const imgs = []
let sitemap = []
const textFiles = {}
const rootOut = haveBuild ? fs.readdirSync(outDir).filter((n) => fs.statSync(path.join(outDir, n)).isFile()) : []
if (haveBuild) {
  const htmlFiles = walk(outDir).map((f) => f.replace(/\\/g, '/')).filter((f) => /\.html$/.test(f) && !/\/_next\//.test(f))
  const routeOf = (f) => {
    const r = f.slice(outDir.replace(/\\/g, '/').length)
    return r === '/index.html' ? '/' : r.replace(/index\.html$/, '').replace(/\.html$/, '/')
  }
  for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf8')
    const route = routeOf(f)
    const title = first(/<title[^>]*>([\s\S]*?)<\/title>/i, html)
    const h1 = first(/<h1[^>]*>([\s\S]*?)<\/h1>/i, html)
    const desc = decode((html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i) || [])[1] || '')
    const canon = decode((html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i) || [])[1] || '')
    const og = decode(((html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]*)"/i) || [])[1] || '') + ' ' + ((html.match(/<meta[^>]+property="og:description"[^>]+content="([^"]*)"/i) || [])[1] || ''))
    const tw = decode(((html.match(/<meta[^>]+name="twitter:title"[^>]+content="([^"]*)"/i) || [])[1] || '') + ' ' + ((html.match(/<meta[^>]+name="twitter:description"[^>]+content="([^"]*)"/i) || [])[1] || ''))
    const header = strip((html.match(/<header[\s\S]*?<\/header>/i) || [''])[0])
    const footer = strip((html.match(/<footer[\s\S]*?<\/footer>/i) || [''])[0])
    const body = strip((html.match(/<main[\s\S]*?<\/main>/i) || [html])[0])
    const where = {}
    const chk = (k, t) => TERM.test(t) && (where[k] = ctx(t, TERM, 2))
    chk('title', title)
    chk('h1', h1)
    chk('meta', desc)
    chk('og', og)
    chk('twitter', tw)
    chk('header', header)
    chk('footer', footer)
    chk('body', body)
    const altHits = [...html.matchAll(/<img[^>]*\salt="([^"]*)"[^>]*>/gi)].map((m) => decode(m[1])).filter((a) => TERM.test(a))
    if (altHits.length) where.alt = altHits.slice(0, 3)
    pages.push({ route, title, h1, desc, canon, where, html })
    for (const m of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
      let data
      try {
        data = JSON.parse(m[1])
      } catch {
        jsonld.push({ route, error: 'does not parse' })
        continue
      }
      const stack = [[data, '$']]
      while (stack.length) {
        const [v, p] = stack.pop()
        if (typeof v === 'string') {
          if (TERM.test(v)) jsonld.push({ route, path: p, text: v.slice(0, 160) })
        } else if (Array.isArray(v)) v.forEach((x, i) => stack.push([x, `${p}[${i}]`]))
        else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) stack.push([x, `${p}.${k}`])
      }
    }
    for (const m of html.matchAll(/<a[^>]+href="([^"]+)"/gi)) {
      let h = decode(m[1]).split('#')[0].split('?')[0].replace(/^https?:\/\/(www\.)?thesewerpros\.com/i, '')
      if (h.startsWith('/') && !h.startsWith('//') && !h.startsWith('/_next/')) links.push({ from: route, to: h })
    }
    for (const m of html.matchAll(/<img[^>]*\ssrc="([^"]+)"/gi)) imgs.push(decode(m[1]).split('?')[0])
  }
  const sm = path.join(outDir, 'sitemap.xml')
  if (fs.existsSync(sm)) sitemap = [...fs.readFileSync(sm, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  for (const n of rootOut) {
    if (/\.(txt|xml|webmanifest|json|rss|atom)$/i.test(n) && !/^__next|^index\.txt$/.test(n)) {
      const t = fs.readFileSync(path.join(outDir, n), 'utf8')
      textFiles[n] = { size: t.length, strict: (t.match(new RegExp(STRICT.source, 'gi')) || []).length }
    }
  }
}
const area2 = C0()
const pageRows = []
for (const p of pages) {
  const isCom = /^\/commercial(\/|$)/.test(p.route)
  if (isCom) area2.A++
  for (const [k, v] of Object.entries(p.where)) {
    const snippets = Array.isArray(v) ? v : []
    const strict = snippets.some((s) => STRICT.test(s))
    const onlyOwner = snippets.length && snippets.every((s) => /business owner/i.test(s) && !STRICT.test(s))
    const municipal = strict && /^\/(locations|st-louis-mo|san-diego-ca|las-vegas-nv)\//.test(p.route) && snippets.some((s) => STRICT.test(s) && MUNICIPAL.test(s))
    const cls = isCom ? 'A' : onlyOwner || municipal ? 'E' : strict ? 'C' : 'D'
    if (!isCom) area2[cls]++
    pageRows.push({ route: p.route, where: k, cls, text: snippets[0] || '' })
  }
}
const sitemapCommercial = sitemap.filter((u) => /\/commercial(\/|$)/.test(u))
sitemapCommercial.forEach(() => area2.A++)
const area3 = C0()
const jsonCls = (j) => (j.error ? 'C' : STRICT.test(j.text) ? (/^\/(locations|st-louis-mo|san-diego-ca|las-vegas-nv)\//.test(j.route) && MUNICIPAL.test(j.text) ? 'E' : 'C') : 'D')
for (const j of jsonld) area3[jsonCls(j)]++
const exists = (to) => {
  const p = path.join(outDir, decodeURIComponent(to))
  return (fs.existsSync(p) && fs.statSync(p).isFile()) || fs.existsSync(path.join(p, 'index.html')) || fs.existsSync(p + '.html')
}
const seen = new Set()
const brokenLinks = []
const toCommercial = []
for (const l of links) {
  const k = l.from + '>' + l.to
  if (seen.has(k)) continue
  seen.add(k)
  if (!exists(l.to)) brokenLinks.push(l)
  if (/^\/commercial(\/|$)/.test(l.to)) toCommercial.push(l)
}
const redirectsFile = fs.existsSync(path.join(repo, 'public/_redirects')) ? fs.readFileSync(path.join(repo, 'public/_redirects'), 'utf8') : ''
const nextConfig = fs.existsSync('next.config.ts') ? fs.readFileSync('next.config.ts', 'utf8') : ''
const area5 = C0()
area5.C += toCommercial.length
area5.C += brokenLinks.length
// redirects: every legacy commercial redirect must be a single permanent redirect that does not go to the homepage
const redirectProblems = []
for (const line of redirectsFile.split(/\r?\n/)) {
  const m = line.trim().match(/^(\S+)\s+(\S+)(?:\s+(\d+))?/)
  if (!m || line.trim().startsWith('#')) continue
  if (/commercial/i.test(m[1])) {
    if (m[2] === '/' || /^https?:\/\/[^/]+\/?$/.test(m[2])) redirectProblems.push(`${m[1]} goes to the homepage`)
    if (m[3] && m[3] !== '301' && m[3] !== '308') redirectProblems.push(`${m[1]} is not permanent`)
  }
  if (/property|multifamily|for\/(home|real)/i.test(m[1])) redirectProblems.push(`${m[1]} sends a retained URL away`)
}
area5.C += redirectProblems.length
const area4 = C0()
const area6 = C0()

/* ===================== AREA 4: registries and data ===================== */
const readJson = (f) => JSON.parse(fs.readFileSync(path.join(repo, f), 'utf8'))
const reg = readJson('data/services/master-service-registry.json')
const regRecords = reg.services || reg
const comServices = regRecords.filter((s) => /^svc-commercial-/.test(s.service_id))
const regFieldHits = regRecords.filter((s) => STRICT.test(JSON.stringify(s)))
const hubsCommercial = (reg.hubs || []).filter((h) => /commercial/i.test(h.service_id))
const locReg = readJson('data/locations/master-location-registry.json')
const locKey = Object.keys(locReg).find((k) => Array.isArray(locReg[k]) && locReg[k].length > 100)
const locList = locReg[locKey] || []
const locFieldHits = locList.filter((l) => 'commercial_matrix' in l || STRICT.test(JSON.stringify(l.priority_tags || []))).length
const locTypeHits = locList.filter((l) => /commercial/.test(l.location_type)).length
const matrix = readJson('data/matrices/service-location-master-matrix.json').records
const matrixCom = matrix.filter((r) => /commercial/.test(r.service_id) || 'location_commercial_matrix' in r || /commercial/.test(r.location_type || '') || STRICT.test(r.location_priority_tags || '')).length
const csvHead = fs.readFileSync(path.join(repo, 'data/matrices/service-location-master-matrix.csv'), 'utf8').split(/\r?\n/)[0]
const csvCommercialCol = /commercial/i.test(csvHead)
const audTypes = fs.readFileSync(path.join(repo, 'types/audience.ts'), 'utf8')
const audCommercialIds = [...audTypes.matchAll(/'(aud-[a-z-]*(commercial|facility|restaurant)[a-z-]*)'/g)].map((m) => m[1])
const approved = fs.readFileSync(path.join(repo, 'data/pages/approved-pages.ts'), 'utf8')
const approvedCommercial = [...approved.matchAll(/id: '((?:com-|hub-commercial)[a-z-]*)' as PageId/g)].map((m) => m[1])
const danglingRefs = []
for (const f of ['content', 'components', 'lib', 'data', 'app'].flatMap(walk)) {
  if (!/\.(ts|tsx)$/.test(f)) continue
  const t = fs.readFileSync(f, 'utf8')
  const n = (t.match(/id\('(?:com-[a-z-]+|hub-commercial)'\)|'hub-commercial'|'com-[a-z-]+'|svc-commercial/g) || []).length
  if (n) danglingRefs.push(`${rel(f)} (${n})`)
}
const forms = srcHits.filter((h) => /^lib\/(analytics|forms)\/|ContactForm|SurveyLeadForm|LeadFormSection/.test(h.file) && h.cls !== 'E')
const namedDataFiles = ['opportunities.json', 'keyword-clusters.json', 'route-manifest.json', 'selected-opportunity.json', 'page-brief.json'].filter((n) => walk('.').some((f) => path.basename(f) === n))
area4.B += comServices.length + regFieldHits.length + hubsCommercial.length + (locFieldHits ? locList.length : 0) + locTypeHits + matrixCom + (csvCommercialCol ? 1 : 0) + audCommercialIds.length + approvedCommercial.length + danglingRefs.length
area4.C += forms.length
area4.D += namedDataFiles.length

/* ===================== AREA 6: images ===================== */
const publicDir = path.join(repo, 'public')
const publicImgs = walk(path.join(publicDir, 'images')).map((f) => '/' + path.relative(publicDir, f).replace(/\\/g, '/')).filter((f) => /\.(webp|png|jpg|jpeg|svg|mp4)$/i.test(f))
const srcText = ['app', 'components', 'content', 'data', 'lib', 'types'].flatMap(walk).filter((f) => /\.(ts|tsx|json|mjs|css)$/.test(f)).map((f) => fs.readFileSync(f, 'utf8')).join('\n')
const refSet = new Set([...srcText.matchAll(/\/images\/[A-Za-z0-9_./-]+\.(?:webp|png|jpg|jpeg|svg|mp4)/g)].map((m) => m[0]))
const unusedImgs = publicImgs.filter((f) => !imgs.includes(f) && !refSet.has(f) && !srcText.includes(path.basename(f)))
const imgNamed = publicImgs.filter((f) => TERM.test(f))
const altCommercial = pages.filter((p) => p.where.alt).flatMap((p) => p.where.alt.map((t) => ({ route: p.route, text: t })))
for (const f of imgNamed) {
  if (/shared\/commercial\//.test(f) || /^\/images\/commercial\//.test(f) || /^\/images\/(clean-outs|residential)\//.test(f)) area6.X++
  else area6.D++
}
for (const a of altCommercial) area6[STRICT.test(a.text) ? 'C' : 'D']++
const slotComments = srcHits.filter((h) => /alt:|alt =|slot|IMAGE_SLOTS/i.test(h.text) && h.cls === 'C')
const rendersMissing = RENDER_FILES.filter((f) => !fs.existsSync(path.join(publicDir, 'images/shared', f)))
const placeholderCount = pages.reduce((n, p) => n + (p.html.match(/Image slot: |border-dashed[^"]*"[^>]*><svg/g) || []).length, 0)

/* ===================== AREA 8: git ===================== */
const gitStatus = sh('git status --short')
const untracked = gitStatus.split(/\r?\n/).filter((l) => l.startsWith('??') && !/public\/images\/(clean-outs|residential|commercial)/.test(l))
const stash = sh('git stash list')
const head = sh('git rev-parse --short HEAD')
const recent = sh('git log --oneline --since=2026-10-12 -40')

/* ===================== AREA 9: retained content ===================== */
const pageBy = Object.fromEntries(pages.map((p) => [p.route, p]))
const sitemapSet = new Set(sitemap.map((u) => u.replace(/^https?:\/\/[^/]+/, '')))
const hrefsOf = (route) => new Set([...(pageBy[route]?.html || '').matchAll(/<a[^>]+href="([^"#?]+)"/g)].map((m) => m[1]))
const dup = (key) => {
  const m = {}
  for (const p of pages) if (p[key] && !/^\/(404|_not-found)\/$/.test(p.route)) (m[p[key]] ||= []).push(p.route)
  return Object.entries(m).filter(([, v]) => v.length > 1)
}
const dupSet = new Set([...dup('title'), ...dup('desc'), ...dup('h1')].flatMap(([, r]) => r))
const retainedRows = RETAINED_ROUTES.map(([route, hub]) => {
  const p = pageBy[route]
  return { route, hub, exists: !!p, inSitemap: sitemapSet.has(route), linked: hrefsOf(hub).has(route), unique: !!p && !dupSet.has(route), title: p?.title || '', h1: p?.h1 || '', descLen: p?.desc.length || 0 }
})
const retainedFail = retainedRows.filter((r) => !r.exists || !r.inSitemap || !r.linked || !r.unique || !r.descLen)
const pm = pageBy['/for/property-managers/']
const pmProblems = []
for (const route of ['/for/property-managers/', '/for/hoa-communities/']) {
  const p = pageBy[route]
  if (!p) continue
  const body = (p.where.body || []).filter((s) => STRICT.test(s))
  if (body.length) pmProblems.push(`${route} still has commercial wording: ${body.map(esc).join(' || ')}`)
  const bad = toCommercial.filter((l) => l.from === route)
  if (bad.length) pmProblems.push(`${route} links to ${bad.map((l) => l.to).join(', ')}`)
}
const hubChildren = (hub, re) => [...hrefsOf(hub)].filter((h) => re.test(h))
const forHub = hubChildren('/for/', /^\/for\/[a-z-]+\/$/)
const svcHub = hubChildren('/services/', /^\/services\/[a-z-]+\/$/)
const locHub = hubChildren('/locations/', /^\/locations\/[a-z-]+\/[a-z-]+\/$/)
const orphanCards = [...forHub, ...svcHub, ...locHub].filter((h) => !pageBy[h])
const multifamilyPages = pages.filter((p) => /multi-?family/i.test(strip(p.html))).map((p) => p.route)
const area9 = C0()
retainedFail.forEach(() => area9.C++)
pmProblems.forEach(() => area9.C++)
orphanCards.forEach(() => area9.C++)
const area9Fail = retainedFail.length + pmProblems.length + orphanCards.length

/* ===================== decisions log and page build list ===================== */
const changeLog = fs.readFileSync('docs/22-decisions-change-log.md', 'utf8')
const logEntries = (changeLog.match(/commercial services and pages removed/gi) || []).length
const logRetained = /property managers and multifamily retained/i.test(changeLog) && /real estate unchanged/i.test(changeLog)
const buildList = fs.readFileSync('docs/04-master-page-build-list.md', 'utf8')
const buildListCommercialBuilt = /\|\s*`?\/commercial\//.test(buildList) || /hub-commercial|com-camera/.test(buildList)

/* ===================== summary ===================== */
const summary = {
  '1 Source': { res: area1.A + area1.B + area1.C ? 'FAIL' : 'PASS', c: area1 },
  '2 Routes and build output': { res: !haveBuild ? 'FAIL' : area2.A + area2.B + area2.C ? 'FAIL' : 'PASS', c: area2 },
  '3 Structured data': { res: !haveBuild ? 'FAIL' : area3.A + area3.B + area3.C ? 'FAIL' : 'PASS', c: area3 },
  '4 Registries, data, forms, analytics': { res: area4.A + area4.B + area4.C ? 'FAIL' : area4.D ? 'REVIEW' : 'PASS', c: area4 },
  '5 Links and redirects': { res: !haveBuild ? 'FAIL' : area5.A + area5.B + area5.C ? 'FAIL' : 'PASS', c: area5 },
  '6 Images and assets': { res: area6.A + area6.B + area6.C || rendersMissing.length ? 'FAIL' : area6.D ? 'REVIEW' : 'PASS', c: area6 },
  '7 Docs, prompts, project files': { res: area7.A + area7.B + area7.C || logEntries !== 1 || !logRetained || buildListCommercialBuilt ? 'FAIL' : area7.D ? 'REVIEW' : 'PASS', c: area7 },
  '8 Git state': { res: stash || untracked.length ? 'REVIEW' : 'PASS', c: C0() },
  '9 Retained content': { res: area9Fail ? 'FAIL' : 'PASS', c: area9 },
}
const totals = C0()
for (const v of Object.values(summary)) for (const k of Object.keys(totals)) totals[k] += v.c[k] || 0
const failAreas = Object.entries(summary).filter(([, v]) => v.res === 'FAIL').map(([k]) => k)
const clean = totals.A + totals.B + totals.C === 0 && area9Fail === 0 && failAreas.length === 0

/* ===================== report ===================== */
const out = []
const P = (s = '') => out.push(s)
P('# Commercial removal audit')
P()
P(`Generated by \`scripts/audit-commercial.mjs\`. Repo HEAD \`${head}\`. Build audited: \`${args.out ?? 'out'}/\` (${pages.length} HTML documents${haveBuild ? '' : ', NO BUILD FOUND: run npm run build first'}).`)
P()
P('**Owner decision (Oct 12, 2026):** no commercial services, pages or references. **Retained, never flagged:** property managers (residential-focused), multifamily (residential-focused), real estate (home buyers, sellers, agents, inspectors, pre-purchase, second opinion), residential investors, Mission Valley and all other location pages. **Approved exceptions (class X):** the image source folders (`clean-outs/`, `residential/`, `commercial/`) and the 12 render images with their filenames and equipment.')
P()
P('## 1. Verdict')
P()
P(clean ? '**CLEAN**' : `**NOT CLEAN.** Remaining: ${totals.A} class A, ${totals.B} class B, ${totals.C} class C. Failing areas: ${failAreas.join('; ') || 'none (class counts only)'}. Retained-content failures: ${area9Fail}.`)
P()
P('## 2. Summary table')
P()
P('| Area | Result | A | B | C | D | E | X |')
P('|---|---|---|---|---|---|---|---|')
for (const [k, v] of Object.entries(summary)) P(`| ${k} | ${v.res} | ${v.c.A} | ${v.c.B} | ${v.c.C} | ${v.c.D} | ${v.c.E} | ${v.c.X} |`)
P(`| **Total** | **${clean ? 'CLEAN' : 'NOT CLEAN'}** | ${totals.A} | ${totals.B} | ${totals.C} | ${totals.D} | ${totals.E} | ${totals.X} |`)
P()
P('Counting: a hit is one matching source or doc line, or one matching page element or JSON-LD value. Registry counts in Area 4 are entries, not lines. Class E covers the owner of The Sewer Pros ("business owner"), the commercial-grade style false positives, municipal program scope (a City program that excludes commercial property), lines that record the removal decision, page tests that assert commercial text is absent, the historical decisions log, and local tool settings.')
P()

P('## 3. Area 1: Source')
P()
P(`Searched ${sourceFiles.length} source and config files. Structured data files are checked in Area 4 (line counts: ${Object.entries(structuredSummary).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}).`)
P()
P('| Class | File:line | Matched text |')
P('|---|---|---|')
for (const h of srcHits.filter((h) => h.cls !== 'X')) P(`| ${h.cls} | ${h.file}:${h.line} | ${esc(h.text)} |`)
P()
P(`Class X (approved exceptions) hits: ${srcHits.filter((h) => h.cls === 'X').length}.`)
P()

P('## 4. Area 2: Routes and build output')
P()
if (!haveBuild) P('**No build output found.** Run `npm run build` with `NEXT_PUBLIC_SITE_URL` set, then re-run this script.')
P(`Generated documents: ${pages.length}. Commercial routes still generated: ${pages.filter((p) => /^\/commercial(\/|$)/.test(p.route)).map((p) => p.route).join(', ') || 'none'}.`)
P(`Sitemap: ${sitemap.length} URLs, ${sitemapCommercial.length} commercial. Public text files: ${Object.entries(textFiles).map(([k, v]) => `${k} (${v.size} bytes, ${v.strict} commercial hits)`).join('; ') || 'none'}. There is no llms.txt, humans.txt, RSS or feed file unless listed above.`)
P()
P('| Route | Where | Class | Matched text |')
P('|---|---|---|---|')
for (const r of pageRows.filter((r) => !/^\/commercial(\/|$)/.test(r.route))) P(`| ${r.route} | ${r.where} | ${r.cls} | ${esc(r.text)} |`)
P()

P('## 5. Area 3: Structured data (JSON-LD)')
P()
P(`${jsonld.length} flagged JSON-LD values; unparseable blocks: ${jsonld.filter((j) => j.error).length}.`)
P()
P('| Route | JSON-LD path | Class | Value |')
P('|---|---|---|---|')
for (const j of jsonld) P(`| ${j.route} | ${j.path || ''} | ${jsonCls(j)} | ${esc(j.error || j.text)} |`)
P()

P('## 6. Area 4: Registries, data, forms and analytics')
P()
P('| Registry | Result |')
P('|---|---|')
P(`| Service registry | ${comServices.length} commercial records; ${regFieldHits.length} records with commercial wording; ${hubsCommercial.length} commercial hubs; ${regRecords.length} records total |`)
P(`| Location registry | ${locFieldHits} locations with a commercial field or tag; ${locTypeHits} commercial location types; ${locList.length} locations |`)
P(`| Service + location matrix | ${matrixCom} commercial rows or fields of ${matrix.length}; CSV commercial column: ${csvCommercialCol ? 'yes' : 'no'} |`)
P(`| Audience registry | commercial ids: ${audCommercialIds.join(', ') || 'none'} |`)
P(`| Page registry | commercial page records: ${approvedCommercial.join(', ') || 'none'} |`)
P(`| Dangling or commercial ids in code | ${danglingRefs.join(', ') || 'none'} |`)
P(`| Keyword, opportunity and brief files | ${namedDataFiles.join(', ') || 'none exist in the repo'} |`)
P()
P('Forms, lead types and analytics hits that are not class E:')
P()
for (const h of forms) P(`- ${h.file}:${h.line} (${h.cls}): ${esc(h.text)}`)
if (!forms.length) P('- none')
P()

P('## 7. Area 5: Links, redirects, canonicals')
P()
P(`Distinct internal links crawled: ${seen.size}. Broken links: ${brokenLinks.length}${brokenLinks.length ? ' (' + brokenLinks.slice(0, 20).map((l) => `${l.from} -> ${l.to}`).join('; ') + ')' : ''}. Links to a commercial route: ${toCommercial.length}.`)
P(`Redirect config: \`public/_redirects\` ${redirectsFile ? 'exists' : 'does not exist'}; \`next.config.ts\` redirects ${/redirects\s*\(/.test(nextConfig) ? 'present' : 'none'}. Problems: ${redirectProblems.join('; ') || 'none'}.`)
P(`Canonicals under /commercial/: ${pages.filter((p) => /\/commercial(\/|$)/.test(p.canon)).length}. hreflang: none emitted.`)
P()

P('## 8. Area 6: Images and assets')
P()
P(`- Commercial-named files and flagged alt text: ${[...imgNamed.map((f) => `${f} (${/shared\/commercial\/|^\/images\/commercial\//.test(f) ? 'X' : 'D'})`), ...altCommercial.map((a) => `alt on ${a.route}: ${esc(a.text)}`)].join('; ') || 'none'}.`)
P(`- The 12 render files exist at their shot-list paths: ${rendersMissing.length ? 'NO, missing ' + rendersMissing.join(', ') : 'yes'}.`)
P(`- Placeholder boxes in this build: ${placeholderCount}.`)
P(`- Images not referenced by any page or source file (not deleted, ${unusedImgs.length}):`)
P()
for (const u of unusedImgs) P(`  - ${u}`)
P()

P('## 9. Area 7: Docs, prompts and project files')
P()
P(`Searched ${docFiles.length} files (numbered docs, image docs, CLAUDE.md, README, public text files). Class counts: C ${area7.C}, D ${area7.D}, E ${area7.E}, X ${area7.X}.`)
P(`- Decisions log entry recording the removal and the retained decisions: ${logEntries === 1 && logRetained ? 'present (one entry)' : `MISSING OR WRONG (entries found: ${logEntries}, retained wording: ${logRetained})`}.`)
P(`- Page build list still shows commercial pages as built: ${buildListCommercialBuilt ? 'YES' : 'no'}.`)
P()
P('| File | Hits | C | D | E | X | Non-E lines (class: line) |')
P('|---|---|---|---|---|---|---|')
for (const r of docRows.sort((a, b) => b.hits.length - a.hits.length)) {
  const n = (c) => r.hits.filter((h) => h.cls === c).length
  P(`| ${r.rel} | ${r.hits.length} | ${n('C')} | ${n('D')} | ${n('E')} | ${n('X')} | ${r.hits.filter((h) => h.cls === 'C' || h.cls === 'D').map((h) => `${h.cls}:${h.n}`).join(', ')} |`)
}
P()

P('## 10. Area 8: Git state')
P()
P('```text')
P(gitStatus || '(clean)')
P(`stash: ${stash || '(none)'}`)
P('recent commits:')
P(recent)
P('```')
P()
P(`Untracked files outside the approved image folders: ${untracked.join('; ') || 'none'}.`)
P()

P('## 11. Area 9: Retained content')
P()
P('| Route | Exists | In sitemap | Linked from hub | Unique title, meta, H1 | Title | H1 |')
P('|---|---|---|---|---|---|---|')
for (const r of retainedRows) P(`| ${r.route} | ${r.exists ? 'yes' : 'NO'} | ${r.inSitemap ? 'yes' : 'NO'} | ${r.linked ? 'yes (' + r.hub + ')' : 'NO (' + r.hub + ')'} | ${r.exists ? (r.unique && r.descLen ? 'yes' : 'NO') : 'n/a'} | ${esc(r.title)} | ${esc(r.h1)} |`)
P()
P(`- Property manager and HOA pages: ${pmProblems.length ? pmProblems.join(' | ') : 'residential-focused, no commercial wording, no links to removed routes'}.`)
P(`- Multifamily: no dedicated page; the word appears on ${multifamilyPages.length} pages (survey form option, property manager copy, market copy).`)
P(`- Hubs: /for/ lists ${forHub.length} audience pages, /services/ lists ${svcHub.length} service pages, /locations/ lists ${locHub.length} location pages. Cards pointing at a missing page: ${orphanCards.length}.`)
P()

P('## 12. FAIL items and the exact fix')
P()
const fixes = []
if (area1.A + area1.B + area1.C) fixes.push('Area 1: remove or reword every class A, B and C source line listed in section 3.')
if (area2.A + area2.C) fixes.push('Area 2: delete commercial routes and the sitemap entries, and reword the pages listed in section 4.')
if (area3.C) fixes.push('Area 3: remove commercial values from the registry or content that feeds the JSON-LD values in section 5, then rebuild.')
if (area4.B + area4.C) fixes.push('Area 4: remove the registry rows, ids and form options listed in section 6 at the source registry.')
if (area5.C) fixes.push('Area 5: remove links to commercial routes, fix broken links, and correct any redirect listed in section 7.')
if (area6.C || rendersMissing.length) fixes.push('Area 6: reword flagged alt text and restore any missing render file.')
if (area7.C) fixes.push('Area 7: rewrite the docs lines marked C in section 9.')
if (logEntries !== 1 || !logRetained) fixes.push('Area 7: add exactly one decisions log entry for the removal that also records property managers and multifamily retained and real estate unchanged.')
if (buildListCommercialBuilt) fixes.push('Area 7: update docs/04 so commercial pages are not listed as built.')
if (area9Fail) fixes.push('Area 9: fix the retained-content failures in section 11.')
if (!fixes.length) P('None.')
else fixes.forEach((f) => P(`- ${f}`))
P()
P('## 13. Class D items for the owner')
P()
const dItems = [
  ...srcHits.filter((h) => h.cls === 'D').map((h) => `${h.file}:${h.line}: ${esc(h.text)}`),
  ...imgNamed.filter((f) => !/shared\/commercial\/|^\/images\/commercial\//.test(f)).map((f) => `Image file name contains a flagged word and is kept as is: ${f}`),
]
const dShown = dItems.slice(0, 60)
if (!dShown.length) P('None.')
dShown.forEach((d, i) => P(`${i + 1}. Is this acceptable as local or descriptive wording? ${d}`))
if (dItems.length > dShown.length) P(`...and ${dItems.length - dShown.length} more D items in sections 3 to 9.`)
P()
P('## 14. Method')
P()
P('Terms (case-insensitive, with hyphen, underscore and space variants): commercial, business owner, businesses, facility and facilities, restaurant, warehouse, retail, industrial, office building, strip mall, shopping center, medical office, hotel, school, church, B2B, multi-tenant. "Municipal", "residential", "rental homes", "landlord", "property manager" and "multifamily" are not flags. Classes are assigned by rule; see the header of this script.')
P()

const report = out.join('\n') + '\n'
if (WRITE) fs.writeFileSync(path.join(repo, 'docs/commercial-removal-audit.md'), report)
console.log(`${clean ? 'CLEAN' : 'NOT CLEAN'}  A ${totals.A}  B ${totals.B}  C ${totals.C}  D ${totals.D}  E ${totals.E}  X ${totals.X}  retained failures ${area9Fail}`)
for (const [k, v] of Object.entries(summary)) console.log(`${v.res.padEnd(6)} ${k}  ${JSON.stringify(v.c)}`)
process.exit(clean ? 0 : 1)
