/**
 * Anchor-variety analysis for editorial (prose and FAQ) internal links.
 *
 * Template copy repeated on many pages is one editorial decision, so identical
 * (target, anchor, source section or FAQ question) rows collapse to one before
 * shares are computed. Links that appear on more than half of all pages
 * (sitewide modules such as the reviews band) are excluded.
 */
import { CHROME } from '../lib/link-graph.mjs'

export const MAX_SHARE = 0.4
export const MIN_LINKS = 8

export function anchorStats(graph, faqAnswers) {
  const P = graph.pages
  const urls = Object.keys(P)
  const rows = new Map() // key -> {target, anchor, key, pages:Set}
  const add = (target, anchor, key, page) => {
    const k = `${target}\u0000${anchor}\u0000${key}`
    const r = rows.get(k) ?? { target, anchor, key, pages: new Set() }
    r.pages.add(page)
    rows.set(k, r)
  }
  const norm = (s) => s.toLowerCase().replace(/\s+/g, ' ').replace(/[.,;:]+$/, '').trim()
  for (const u of urls) {
    for (const l of P[u].out) {
      if (l.kind !== 'internal' || CHROME.has(l.zone) || l.path === u) continue
      if (l.zone === 'faq' || l.zone.startsWith('body:faq')) continue // taken from the parsed FAQ answers
      if (!l.prose) continue
      add(l.path, norm(l.text), `body|${l.zone}`, u)
    }
  }
  for (const a of faqAnswers) for (const l of a.links) {
    const t = l.href.replace(/^https?:\/\/[^/]+/, '').split('#')[0].replace(/\/?$/, '/')
    if (!P[t] || t === a.url) continue
    add(t, norm(l.text), `faq|${a.q}`, a.url)
  }
  const sitewide = new Set()
  const pagesPerTarget = {}
  for (const r of rows.values()) (pagesPerTarget[r.target] ??= new Set()), r.pages.forEach((p) => pagesPerTarget[r.target].add(p))
  for (const [t, s] of Object.entries(pagesPerTarget)) if (s.size > urls.length / 2) sitewide.add(t)
  const byTarget = {}
  for (const r of rows.values()) {
    if (sitewide.has(r.target)) continue
    const t = (byTarget[r.target] ??= { total: 0, anchors: {} })
    t.total += 1
    t.anchors[r.anchor] = (t.anchors[r.anchor] ?? 0) + 1
  }
  const stats = Object.entries(byTarget).map(([target, t]) => {
    const [anchor, n] = Object.entries(t.anchors).sort((a, b) => b[1] - a[1])[0]
    return { target, total: t.total, distinct: Object.keys(t.anchors).length, topAnchor: anchor, topShare: +(n / t.total).toFixed(2), anchors: t.anchors }
  })
  return { stats, violations: stats.filter((s) => s.total >= MIN_LINKS && s.topShare > MAX_SHARE), sitewide: [...sitewide] }
}

/** Contexts behind each target's anchors (for fixing). */
export function anchorContexts(graph, faqAnswers, targets) {
  const out = {}
  const P = graph.pages
  const seen = new Set()
  for (const a of faqAnswers) for (const l of a.links) {
    const t = l.href.replace(/^https?:\/\/[^/]+/, '').split('#')[0].replace(/\/?$/, '/')
    if (!targets.includes(t) || t === a.url) continue
    const k = `${t}|${a.q}|${l.text}`
    if (seen.has(k)) continue
    seen.add(k)
    ;(out[t] ??= []).push({ kind: 'faq', q: a.q, anchor: l.text, page: a.url })
  }
  for (const u of Object.keys(P)) for (const l of P[u].out) {
    if (l.kind !== 'internal' || !targets.includes(l.path) || !l.prose || l.path === u || l.zone === 'faq' || l.zone.startsWith('body:faq') || ['nav','footer','chrome','breadcrumb'].includes(l.zone)) continue
    const k = `${l.path}|${l.zone}|${l.text}`
    if (seen.has(k)) continue
    seen.add(k)
    ;(out[l.path] ??= []).push({ kind: 'body', zone: l.zone, anchor: l.text, page: u })
  }
  return out
}
