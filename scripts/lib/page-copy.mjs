/**
 * Extracts the editorial signals of every page in `out/`: title, meta
 * description, H1, H2/H3 headings, opening paragraph(s) and FAQ questions.
 * Shared by scripts/audit-editorial-keywords.mjs and
 * scripts/verify-editorial-keywords.mjs.
 */
import fs from 'node:fs'
import { walkOut, urlOf, pageType, decode } from './link-graph.mjs'

const clean = (h) => decode(h.replace(/<!-- -->/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').replace(/\s+([.,;:)?!])/g, '$1').trim()

export function readPages(root) {
  const pages = {}
  for (const f of walkOut(root)) {
    const url = urlOf(root, f)
    if (url === '/_not-found/' || url === '/404/') continue
    const html = fs.readFileSync(f, 'utf8')
    const head = html.slice(0, html.indexOf('</head>'))
    const title = clean((head.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '')
    const meta = decode((head.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
    const robots = (head.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || ''
    const body = html.slice(html.indexOf('<body')).replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
    const mainStart = body.indexOf('<main')
    const main = mainStart >= 0 ? body.slice(mainStart, body.indexOf('</main>')) : body
    const h1 = clean((main.match(/<h1[\s\S]*?<\/h1>/) || [''])[0])
    const h2 = [...main.matchAll(/<h2[\s\S]*?<\/h2>/g)].map((m) => clean(m[0]))
    const h3 = [...main.matchAll(/<h[34][\s\S]*?<\/h[34]>/g)].map((m) => clean(m[0]))
    // Opening: first two paragraphs after the h1 (hero lede + first body paragraph).
    const afterH1 = main.slice(main.indexOf('</h1>') + 5)
    const opening = [...afterH1.matchAll(/<p[\s\S]*?<\/p>/g)].map((m) => clean(m[0])).filter((t) => t.length > 40).slice(0, 3).join(' ')
    // FAQ questions from FAQPage JSON-LD (the visible FAQ is checked to match elsewhere).
    let faq = []
    for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try {
        const j = JSON.parse(m[1])
        for (const n of j['@graph'] ?? [j]) if (n['@type'] === 'FAQPage') faq = (n.mainEntity ?? []).map((q) => ({ q: q.name, a: q.acceptedAnswer?.text ?? '' }))
      } catch {}
    }
    // Question headings and the first paragraph under each (answer-first check).
    const qa = []
    for (const m of main.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>([\s\S]*?)(?=<h[1-6][\s>]|$)/g)) {
      const q = clean(m[2])
      if (!q.endsWith('?')) continue
      const para = (m[3].match(/<p[\s\S]*?<\/p>/) || [''])[0]
      qa.push({ q, a: clean(para) })
    }
    const text = clean(main)
    pages[url] = { url, type: pageType(url), title, meta, h1, h2, h3, opening, faq, qa, robots, text }
  }
  return pages
}
