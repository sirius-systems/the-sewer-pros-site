/**
 * Image inventory of the static export (out/) for scripts/audit-images.mjs and
 * scripts/verify-images.mjs.
 *
 * For every built page it records each image reference: <img>, <picture>/<source>,
 * <video poster>, preloaded images, CSS background-image, inline SVG images,
 * og:image / twitter:image, icons, manifest, and JSON-LD image/logo fields. Each
 * record carries the resolved file, its format, pixel size and byte size, the
 * width/height/loading/fetchpriority attributes, alt text, and whether the image
 * is the page's LCP candidate. File facts are read from the file headers; no
 * image library is needed.
 */
import fs from 'node:fs'
import path from 'node:path'
import { walkOut, urlOf, pageType, decode } from './link-graph.mjs'

export const ORIGIN = 'https://www.thesewerpros.com'

/* ---- file facts ---------------------------------------------------------- */

const fileCache = new Map()

export function fileFacts(abs) {
  if (fileCache.has(abs)) return fileCache.get(abs)
  let facts = { exists: false }
  try {
    const st = fs.statSync(abs)
    if (st.isFile()) {
      const ext = path.extname(abs).slice(1).toLowerCase()
      facts = { exists: true, bytes: st.size, format: ext, ...dimensions(abs, ext) }
    }
  } catch {
    /* missing */
  }
  fileCache.set(abs, facts)
  return facts
}

function dimensions(abs, ext) {
  try {
    if (ext === 'svg') {
      const s = fs.readFileSync(abs, 'utf8').slice(0, 2000)
      const vb = s.match(/viewBox="[\d.\-]+[ ,]+[\d.\-]+[ ,]+([\d.]+)[ ,]+([\d.]+)"/)
      const w = s.match(/\swidth="([\d.]+)/)
      const h = s.match(/\sheight="([\d.]+)/)
      if (w && h) return { width: Math.round(+w[1]), height: Math.round(+h[1]) }
      if (vb) return { width: Math.round(+vb[1]), height: Math.round(+vb[2]) }
      return {}
    }
    if (!['png', 'jpg', 'jpeg', 'webp', 'ico', 'gif', 'avif'].includes(ext)) return {}
    const fd = fs.openSync(abs, 'r')
    const buf = Buffer.alloc(65536)
    const n = fs.readSync(fd, buf, 0, buf.length, 0)
    fs.closeSync(fd)
    const b = buf.subarray(0, n)
    if (ext === 'png' && b.toString('latin1', 1, 4) === 'PNG') {
      return { width: b.readUInt32BE(16), height: b.readUInt32BE(20), alpha: [4, 6].includes(b[25]) }
    }
    if (ext === 'webp' && b.toString('latin1', 0, 4) === 'RIFF') {
      const kind = b.toString('latin1', 12, 16)
      if (kind === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff }
      if (kind === 'VP8L') {
        const v = b.readUInt32LE(21)
        return { width: (v & 0x3fff) + 1, height: ((v >> 14) & 0x3fff) + 1 }
      }
      if (kind === 'VP8X') return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) }
    }
    if (ext === 'jpg' || ext === 'jpeg') {
      let i = 2
      while (i < b.length - 9) {
        if (b[i] !== 0xff) { i++; continue }
        const marker = b[i + 1]
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) }
        }
        i += 2 + b.readUInt16BE(i + 2)
      }
    }
    if (ext === 'ico') {
      const count = b.readUInt16LE(4)
      let best = 0
      for (let k = 0; k < count; k++) best = Math.max(best, b[6 + k * 16] || 256)
      return { width: best, height: best }
    }
  } catch {
    /* unreadable header */
  }
  return {}
}

/** Resolve a src/href found in a page to a local file under out/ (or null for external). */
export function resolveSrc(src, outDir) {
  if (!src) return { external: false, path: null }
  let s = src.trim()
  if (s.startsWith('data:')) return { external: false, data: true, path: null }
  let isAbs = false
  if (/^https?:\/\//i.test(s)) {
    if (s.startsWith(ORIGIN)) { s = s.slice(ORIGIN.length) || '/'; isAbs = true } else return { external: true, path: null }
  }
  s = s.split('#')[0].split('?')[0]
  try { s = decodeURIComponent(s) } catch { /* keep */ }
  const abs = path.join(outDir, s.replace(/^\//, ''))
  return { external: false, absoluteUrl: isAbs, rootRelative: s.startsWith('/'), path: abs, publicPath: s }
}

/* ---- HTML walking -------------------------------------------------------- */

const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'area', 'col', 'embed', 'track', 'wbr', 'base', 'param'])

export function parseAttrs(s) {
  const out = {}
  for (const m of s.matchAll(/([^\s"'=<>\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) {
    out[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? '')
  }
  return out
}

const TAG_RE = /<(\/?)([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g

/** Ancestor-based classification of how an image's box is sized. */
function boxKind(attrs, stack) {
  if (attrs.width && attrs.height) return 'attrs'
  const own = (attrs.class || '') + ' ' + (attrs.style || '')
  if (/aspect-ratio|aspect-/.test(own)) return 'aspect-box'
  const cls = attrs.class || ''
  if (/\babsolute\b/.test(cls) && /\binset-0\b/.test(cls)) {
    // A backdrop fills a container whose height is set by its content, so it cannot shift layout by itself.
    for (let i = stack.length - 1; i >= 0; i--) {
      const a = stack[i].attrs
      const c = (a.class || '') + ' ' + (a.style || '')
      if (/aspect-ratio|aspect-/.test(c)) return 'aspect-box'
      if (/\b(h-|min-h-|max-h-)|\bheight:/.test(c)) return 'sized-container'
      if (/\bsection\b/.test(stack[i].tag)) break
    }
    return 'backdrop'
  }
  for (let i = stack.length - 1; i >= 0; i--) {
    const a = stack[i].attrs
    const c = (a.class || '') + ' ' + (a.style || '')
    if (/aspect-ratio|aspect-/.test(c)) return 'aspect-box'
    if (/(^|\s)(h-\[?[\d.]+|h-(?:full|screen)|min-h-|size-|w-\[?[\d.]+[a-z]*\]? h-)/.test(c) && i >= stack.length - 4) return 'sized-container'
  }
  return 'none'
}

const isLogoSrc = (p) => /\/brand\/logos\//.test(p || '')

export function auditPage(file, outDir) {
  const html = fs.readFileSync(file, 'utf8')
  const url = urlOf(outDir, file)
  const headEnd = html.indexOf('</head>')
  const head = html.slice(0, headEnd)

  // JSON-LD first, then drop every script body so payload strings are not parsed as markup.
  const jsonld = []
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { jsonld.push(JSON.parse(m[1])) } catch { jsonld.push({ __parseError: true }) }
  }
  const cleaned = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '<script></script>').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '<style></style>')

  const refs = []
  const stack = []
  const preloads = []
  const metas = {}
  const links = []
  let inPicture = false
  let order = 0
  let m
  TAG_RE.lastIndex = 0
  while ((m = TAG_RE.exec(cleaned))) {
    const closing = m[1] === '/'
    const tag = m[2].toLowerCase()
    if (closing) {
      for (let i = stack.length - 1; i >= 0; i--) if (stack[i].tag === tag) { stack.length = i; break }
      if (tag === 'picture') inPicture = false
      continue
    }
    const attrs = parseAttrs(m[3].replace(/\/$/, ''))
    const selfClose = /\/\s*$/.test(m[3]) || VOID.has(tag)
    if (tag === 'meta') {
      const key = attrs.property || attrs.name
      if (key) (metas[key] ||= []).push(attrs.content ?? '')
    } else if (tag === 'link') {
      links.push(attrs)
      if (attrs.rel === 'preload' && attrs.as === 'image') preloads.push(attrs.href)
    } else if (tag === 'picture') {
      inPicture = true
    } else if (tag === 'source' && inPicture) {
      refs.push({ kind: 'picture-source', order: order++, src: (attrs.srcset || '').split(/[\s,]/)[0], srcset: attrs.srcset, sizes: attrs.sizes, type: attrs.type, attrs })
    } else if (tag === 'img') {
      refs.push({
        kind: 'img', order: order++, src: attrs.src, srcset: attrs.srcset, sizes: attrs.sizes,
        alt: attrs.alt, hasAlt: 'alt' in attrs, width: attrs.width, height: attrs.height,
        loading: attrs.loading, fetchpriority: attrs.fetchpriority, decoding: attrs.decoding,
        cls: attrs.class, fill: attrs['data-nimg'] === 'fill', ariaHidden: attrs['aria-hidden'], role: attrs.role,
        hiddenAncestor: stack.some((x) => x.attrs['aria-hidden'] === 'true'),
        box: boxKind(attrs, stack),
        ancestors: stack.slice(-6).map((s) => s.tag + (s.attrs.id ? '#' + s.attrs.id : '')),
        section: nearestSection(stack),
      })
    } else if (tag === 'video') {
      refs.push({ kind: 'video', order: order++, src: attrs.poster, poster: attrs.poster, videoSrc: attrs.src, loading: attrs.preload, attrs })
    } else if (tag === 'svg' && (attrs.role === 'img' || attrs['aria-label'])) {
      refs.push({ kind: 'inline-svg', order: order++, src: null, alt: attrs['aria-label'] || '', role: attrs.role })
    }
    if (attrs.style && /background(-image)?\s*:[^;]*url\(/i.test(attrs.style)) {
      const u = attrs.style.match(/url\(\s*['"]?([^'")]+)/i)
      if (u) refs.push({ kind: 'css-background', order: order++, src: u[1], alt: attrs['aria-label'] })
    }
    if (!selfClose) stack.push({ tag, attrs })
  }

  // Stylesheet-level background images are checked once per site, not per page.
  const record = (r) => {
    if (!r.src) return r
    if (r.srcset) {
      r.srcsetUrls = r.srcset.split(',').map((x) => x.trim().split(/\s+/)[0]).filter(Boolean)
      const resolved = r.srcsetUrls.map((u) => resolveSrc(u, outDir)).filter((q) => q.path)
      r.srcsetMissing = resolved.filter((q) => !fileFacts(q.path).exists).map((q) => q.publicPath)
      r.srcsetResolved = resolved.map((q) => path.relative(outDir, q.path).replace(/\\/g, '/'))
    }
    const res = resolveSrc(r.src, outDir)
    r.resolved = res.path ? path.relative(outDir, res.path).replace(/\\/g, '/') : null
    r.external = res.external
    r.absolute = res.absoluteUrl ?? false
    if (res.path) {
      r.inOut = fileFacts(res.path)
      r.exists = r.inOut.exists
      r.repoPath = r.exists ? 'public/' + r.resolved : null
      r.format = r.inOut.format
      r.naturalWidth = r.inOut.width
      r.naturalHeight = r.inOut.height
      r.bytes = r.inOut.bytes
      const repo = path.join('public', r.resolved)
      r.inRepo = fs.existsSync(repo)
    }
    return r
  }
  const images = refs.map(record)

  // LCP candidate: the first non-logo, non-icon image that is prioritized or eager.
  const body = images.filter((r) => r.kind === 'img' && r.src && !isLogoSrc(r.src))
  const prioritized = body.find((r) => r.fetchpriority === 'high' || preloads.includes(r.src))
  const eager = body.find((r) => r.loading !== 'lazy')
  const lcp = prioritized || eager || null
  if (lcp) lcp.lcp = true
  for (const r of images) r.preloaded = r.src ? preloads.includes(r.src) : false

  // Sharing + icons
  const share = {
    ogImage: metas['og:image']?.[0] ?? null,
    ogImageWidth: metas['og:image:width']?.[0] ?? null,
    ogImageHeight: metas['og:image:height']?.[0] ?? null,
    ogImageAlt: metas['og:image:alt']?.[0] ?? null,
    twitterImage: metas['twitter:image']?.[0] ?? null,
    twitterCard: metas['twitter:card']?.[0] ?? null,
    robots: metas['robots']?.[0] ?? '',
  }
  for (const k of ['ogImage', 'twitterImage']) {
    const res = share[k] ? resolveSrc(share[k], outDir) : null
    share[k + 'File'] = res?.path ? { path: path.relative(outDir, res.path).replace(/\\/g, '/'), ...fileFacts(res.path), absolute: res.absoluteUrl ?? false } : null
  }
  const icons = links
    .filter((l) => /icon|manifest/.test(l.rel || ''))
    .map((l) => {
      const res = resolveSrc(l.href, outDir)
      return { rel: l.rel, href: l.href, sizes: l.sizes, type: l.type, ...(res.path ? { file: fileFacts(res.path) } : {}) }
    })

  // JSON-LD image fields
  const schemaImages = []
  const walk = (node, keyPath) => {
    if (Array.isArray(node)) return node.forEach((n, i) => walk(n, keyPath))
    if (!node || typeof node !== 'object') return
    for (const [k, v] of Object.entries(node)) {
      if (['image', 'logo', 'thumbnailUrl', 'primaryImageOfPage', 'photo'].includes(k)) {
        const vals = Array.isArray(v) ? v : [v]
        for (const x of vals) {
          const u = typeof x === 'string' ? x : x && typeof x === 'object' ? x.url || x.contentUrl || x['@id'] : null
          if (typeof u === 'string') {
            const res = resolveSrc(u, outDir)
            schemaImages.push({ field: k, url: u, absolute: /^https?:\/\//.test(u), external: res.external, exists: res.path ? fileFacts(res.path).exists : null, bytes: res.path ? fileFacts(res.path).bytes : null })
          }
        }
      }
      walk(v, k)
    }
  }
  jsonld.forEach((j) => walk(j, ''))

  return {
    url,
    type: pageType(url),
    indexable: !/noindex/i.test(share.robots),
    images,
    preloads,
    share,
    icons,
    schemaImages,
    rawHtmlBytes: html.length,
  }
}

function nearestSection(stack) {
  for (let i = stack.length - 1; i >= 0; i--) {
    const a = stack[i].attrs
    if (a.id) return a.id
    if (a['aria-labelledby']) return a['aria-labelledby']
    if (a['data-section']) return a['data-section']
  }
  return null
}

export function auditSite(outDir = 'out') {
  const pages = []
  for (const f of walkOut(outDir)) {
    const url = urlOf(outDir, f)
    if (url === '/_not-found/' || url === '/404/') continue
    pages.push(auditPage(f, outDir))
  }
  return pages
}

/** Files under public/ that are images or video, with facts. */
export function publicFiles(publicDir = 'public') {
  const out = []
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const f = path.join(d, e.name)
      if (e.isDirectory()) walk(f)
      else if (/\.(png|jpe?g|webp|avif|gif|svg|ico|mp4|webm)$/i.test(e.name)) {
        const rel = path.relative(publicDir, f).replace(/\\/g, '/')
        out.push({ path: rel, ...fileFacts(f) })
      }
    }
  }
  walk(publicDir)
  return out
}

/**
 * Where each image file is named in source. Used to tell a file that is only
 * loaded on the client (hero cross-fade frames, hero video) from a true orphan.
 */
export function sourceReferences(roots = ['app', 'components', 'content', 'data', 'lib']) {
  const text = []
  const walk = (d) => {
    if (!fs.existsSync(d)) return
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const f = path.join(d, e.name)
      if (e.isDirectory()) walk(f)
      else if (/\.(tsx?|mjs|json|css)$/.test(e.name)) text.push({ f: f.replace(/\\/g, '/'), s: fs.readFileSync(f, 'utf8') })
    }
  }
  roots.forEach(walk)
  return (rel) => {
    const base = path.basename(rel).replace(/\.[^.]+$/, '')
    return text.filter((t) => t.s.includes(base)).map((t) => t.f)
  }
}
