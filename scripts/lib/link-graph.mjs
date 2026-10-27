/**
 * Internal link graph built from the static export in `out/`.
 *
 * No dependencies: a small tag scanner keeps a landmark stack (header, footer,
 * nav, main, aside, section, details) so every <a> is recorded with the zone it
 * sits in. Used by scripts/build-link-graph.mjs (report) and
 * scripts/verify-internal-links.mjs (gate).
 */
import fs from 'node:fs'
import path from 'node:path'

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'use'])

export const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&rsquo;/g, '’')
const textOf = (h) => decode(h.replace(/<!-- -->/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').replace(/\s+([.,;:)?!])/g, '$1').trim()
const attr = (a, n) => (a.match(new RegExp(`(?:^|\\s)${n}="([^"]*)"`)) || [])[1]

export function walkOut(root) {
  const pages = []
  const rec = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) rec(p)
      else if (e.name === 'index.html') pages.push(p)
    }
  }
  rec(root)
  return pages
}

export function urlOf(root, file) {
  const rel = path.relative(root, path.dirname(file)).split(path.sep).join('/')
  return rel === '' ? '/' : `/${rel}/`
}

export function pageType(url) {
  const seg = url.split('/').filter(Boolean)
  if (url === '/') return 'home'
  if (seg[0] === 'locations') return seg.length === 1 ? 'locations-hub' : seg.length === 3 ? 'location' : seg.length === 4 ? 'service-location' : 'locations-other'
  if (seg[0] === 'services') return seg.length === 1 ? 'services-hub' : 'service'
  if (seg[0] === 'for') return seg.length === 1 ? 'audience-hub' : 'audience'
  if (seg[0] === 'resources') return seg.length === 1 ? 'resources-hub' : 'resource'
  if (seg[0] === 'compare') return 'compare'
  if (/^(st-louis-mo|san-diego-ca|las-vegas-nv)$/.test(seg[0])) return seg.length === 1 ? 'market-hub' : seg[1] === 'contact' ? 'market-contact' : 'market-other'
  if (['about', 'faq', 'contact'].includes(seg[0])) return seg[1] === 'thank-you' ? 'thank-you' : seg[0]
  return 'other'
}

/** Parse one page into { title, h1, robots, canonical, links[] }. */
export function parsePage(html) {
  const head = html.slice(0, html.indexOf('</head>'))
  const title = textOf((head.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '')
  const robots = (head.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || ''
  const canonical = (head.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || ''
  const body = html.slice(html.indexOf('<body')).replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
  const h1 = textOf((body.match(/<h1[\s\S]*?<\/h1>/) || [''])[0])
  const links = []
  const stack = []
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)>/g
  let m
  let sectionIndexInMain = 0
  let openA = null
  while ((m = re.exec(body))) {
    const [, close, tagRaw, attrs] = m
    const tag = tagRaw.toLowerCase()
    if (close) {
      if (tag === 'a' && openA) {
        openA.rec.text = textOf(body.slice(openA.start, m.index))
        links.push(openA.rec)
        openA = null
      }
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag) {
          stack.length = i
          break
        }
      }
      continue
    }
    if (VOID.has(tag) || attrs.endsWith('/')) continue
    const frame = { tag }
    if (tag === 'nav') frame.nav = attr(attrs, 'aria-label') || attr(attrs, 'aria-labelledby') || 'nav'
    if (tag === 'section') {
      frame.sec = attr(attrs, 'aria-labelledby') || attr(attrs, 'id') || ''
      if (stack.some((f) => f.tag === 'main') && !stack.some((f) => f.tag === 'section')) {
        frame.first = sectionIndexInMain === 0
        sectionIndexInMain += 1
      }
    }
    if (tag === 'aside') frame.aside = attr(attrs, 'aria-labelledby') || attr(attrs, 'aria-label') || 'aside'
    stack.push(frame)
    if (tag === 'a') {
      const href = attr(attrs, 'href')
      if (href === undefined) continue
      const inFooter = stack.some((f) => f.tag === 'footer')
      const inHeader = stack.some((f) => f.tag === 'header')
      const navF = [...stack].reverse().find((f) => f.nav)
      const secF = [...stack].reverse().find((f) => f.tag === 'section')
      const inMain = stack.some((f) => f.tag === 'main')
      const inDetails = stack.some((f) => f.tag === 'details')
      const aside = [...stack].reverse().find((f) => f.aside)
      let zone
      if (inFooter) zone = 'footer'
      else if (navF && /breadcrumb/i.test(navF.nav)) zone = 'breadcrumb'
      else if (inHeader || (navF && /primary/i.test(navF.nav))) zone = 'nav'
      else if (!inMain) zone = 'chrome'
      else if (inDetails) zone = 'faq'
      else if (secF && secF.first) zone = 'hero'
      else if (secF && secF.sec) zone = 'body:' + secF.sec
      else if (aside) zone = 'aside:' + aside.aside
      else zone = 'body'
      openA = { start: m.index + m[0].length, rec: { href, zone, rel: attr(attrs, 'rel') || '', text: '' } }
    }
  }
  return { title, h1, robots, canonical, links }
}

const ORIGIN_RE = /^https?:\/\/(www\.)?thesewerpros\.com/i

/** Normalise an href to { kind, path }. kind: internal | external | mailto | tel | hash | asset. */
export function normHref(href) {
  if (href === '' || href === '#') return { kind: 'hash', path: '' }
  if (/^mailto:/i.test(href)) return { kind: 'mailto', path: href }
  if (/^tel:/i.test(href)) return { kind: 'tel', path: href }
  let h = href.replace(ORIGIN_RE, '')
  if (/^https?:\/\//i.test(h)) return { kind: 'external', path: href }
  if (h.startsWith('#')) return { kind: 'hash', path: h }
  if (!h.startsWith('/')) return { kind: 'external', path: href }
  h = h.split('#')[0].split('?')[0]
  if (/\.(webp|png|jpe?g|svg|ico|pdf|xml|txt|webmanifest|css|js)$/i.test(h)) return { kind: 'asset', path: h }
  if (!h.endsWith('/')) h += '/'
  return { kind: 'internal', path: h }
}

export function buildGraph(root = path.resolve('out')) {
  const files = walkOut(root)
  const sitemap = fs.existsSync(path.join(root, 'sitemap.xml')) ? fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8') : ''
  const inSitemap = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => normHref(x[1]).path))
  const pages = {}
  for (const f of files) {
    const url = urlOf(root, f)
    if (url === '/_not-found/' || url === '/404/') continue
    const p = parsePage(fs.readFileSync(f, 'utf8'))
    pages[url] = {
      url,
      type: pageType(url),
      title: p.title,
      h1: p.h1,
      noindex: /noindex/i.test(p.robots),
      inSitemap: inSitemap.has(url),
      out: p.links.map((l) => ({ ...normHref(l.href), raw: l.href, text: l.text, zone: l.zone, rel: l.rel })),
    }
  }
  const inbound = {}
  for (const u of Object.keys(pages)) inbound[u] = []
  for (const pg of Object.values(pages)) {
    for (const l of pg.out) {
      if (l.kind === 'internal' && l.path !== pg.url && inbound[l.path]) inbound[l.path].push({ from: pg.url, zone: l.zone, text: l.text })
    }
  }
  return { pages, inbound, root }
}

export const isIndexable = (pg) => !pg.noindex && pg.inSitemap
export const CHROME = new Set(['nav', 'footer', 'chrome', 'breadcrumb'])
