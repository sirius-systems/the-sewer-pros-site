/**
 * FAQ inventory and link-opportunity audit over the static export in `out/`.
 * Reads the rendered HTML (what crawlers get), so it is independent of how
 * answers are authored (JSX in content/pages/*.tsx).
 */
import fs from 'node:fs'
import path from 'node:path'
import { walkOut, urlOf, decode } from '../lib/link-graph.mjs'
import { buildEntities, findMentions } from './entities.mjs'

// Block tags separate words; inline tags (a, span, em) do not, or "Chesterfield</a>’s" would gain a space.
const strip = (h) => decode(h.replace(/<!-- -->/g, '').replace(new RegExp('</?(?:p|div|li|ul|ol|br|h[1-6])\\b[^>]*>', 'g'), ' ').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').replace(/\s+([.,;:)?!])/g, '$1').trim()
const norm = (s) => s.replace(/\s+/g, ' ').trim()

/** JSON-LD answer text is paragraphs joined by a blank line; the page shows them as separate blocks. */
const flatten = (s) => norm(s.replace(/\n\n/g, ' '))

function jsonLdFaq(html) {
  const out = []
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let j
    try { j = JSON.parse(m[1]) } catch { continue }
    const nodes = j['@graph'] ?? [j]
    for (const n of nodes) if (n['@type'] === 'FAQPage') for (const q of n.mainEntity ?? []) out.push({ q: q.name, text: q.acceptedAnswer?.text ?? '' })
  }
  return out
}

function visibleFaq(html) {
  const main = html.indexOf('<main')
  if (main < 0) return []
  const body = html.slice(main)
  const out = []
  for (const m of body.matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)) {
    const q = strip(m[1])
    const ansHtml = m[2]
    const links = [...ansHtml.matchAll(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((a) => ({ href: decode(a[1]), text: strip(a[2]) }))
    const qLinks = [...m[1].matchAll(/<a\s/g)].length
    out.push({ q, html: ansHtml, text: strip(ansHtml), links, linksInQuestion: qLinks })
  }
  // FaqGrouped "tabs" layout (service + location pages): h4 question, then a div holding the answer.
  for (const m of body.matchAll(/<h4 class="text-h4 font-semibold tracking-tight text-foreground">([\s\S]*?)<\/h4><div class="mt-3[^"]*">([\s\S]*?)<\/div><\/div>/g)) {
    const ansHtml = m[2]
    const links = [...ansHtml.matchAll(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((a) => ({ href: decode(a[1]), text: strip(a[2]) }))
    out.push({ q: strip(m[1]), html: ansHtml, text: strip(ansHtml), links, linksInQuestion: [...m[1].matchAll(/<a\s/g)].length })
  }
  return out
}

/**
 * Anchor texts in an FAQ answer that sit inside third-party text: between double quotation
 * marks (straight or curly), inside <q>, <blockquote> or <cite>, or inside an element
 * marked data-no-link. The shared linker never creates such a link (lib/links/faq-links.tsx).
 */
export function linksInQuotedText(answerHtml) {
  const out = []
  // Elements that mark third-party text.
  for (const m of answerHtml.matchAll(/<(q|blockquote|cite)\b[^>]*>[\s\S]*?<\/\1>|<(span|div|p)\b[^>]*data-no-link[^>]*>[\s\S]*?<\/\2>/g)) {
    for (const a of m[0].matchAll(/<a\s[^>]*>([\s\S]*?)<\/a>/g)) out.push(strip(a[1]))
  }
  // Quotation marks: mark each anchor, flatten the markup, then look for anchors between quotes.
  const flat = decode(answerHtml.replace(/<!-- -->/g, '').replace(/<a\s[^>]*>/g, '\uE000').replace(/<\/a>/g, '\uE001').replace(/<[^>]+>/g, ''))
  for (const q of flat.matchAll(/"[^"]*"|\u201c[^\u201d]*\u201d/g)) {
    for (const a of q[0].matchAll(/\uE000([^\uE001]*)\uE001/g)) out.push(a[1].trim())
  }
  return out
}

export function runFaqAudit(graph, root = path.resolve('out')) {
  const ents = buildEntities(graph)
  const inventory = []
  const opportunities = []
  const schemaMismatch = []
  const answers = []
  const answerLinkTotals = { answers: 0, withLinks: 0, links: 0 }
  const files = walkOut(root)
  for (const f of files) {
    const url = urlOf(root, f)
    const pg = graph.pages[url]
    if (!pg) continue
    const html = fs.readFileSync(f, 'utf8')
    const vis = visibleFaq(html)
    if (vis.length === 0) continue
    const ld = jsonLdFaq(html)
    const ldByQ = new Map(ld.map((x) => [x.q, x.text]))
    const pageLinked = new Set(vis.flatMap((v) => v.links.map((l) => l.href.replace(/^https?:\/\/[^/]+/, '').split('#')[0].replace(/\/?$/, '/'))))
    inventory.push({ url, type: pg.type, indexable: !pg.noindex && pg.inSitemap, faqCount: vis.length, schema: ld.length > 0, schemaCount: ld.length, linkedAnswers: vis.filter((v) => v.links.length).length, answerLinks: vis.reduce((s, v) => s + v.links.length, 0) })
    for (const v of vis) {
      answerLinkTotals.answers++
      answers.push({ url, q: v.q, links: v.links, text: v.text, html: v.html })
      if (v.links.length) answerLinkTotals.withLinks++
      answerLinkTotals.links += v.links.length
      if (ld.length > 0) {
        const t = ldByQ.get(v.q)
        if (t === undefined) schemaMismatch.push({ url, q: v.q, reason: 'no schema entry for visible question' })
        else if (flatten(t) !== norm(v.text)) schemaMismatch.push({ url, q: v.q, reason: 'schema text differs from visible text', schema: flatten(t).slice(0, 160), visible: norm(v.text).slice(0, 160) })
      }
      if (v.linksInQuestion) schemaMismatch.push({ url, q: v.q, reason: 'link inside question text' })
      for (const mention of findMentions(v.text, ents, url, v.links)) {
        const status = mention.alreadyLinked ? 'linked' : pageLinked.has(mention.target) ? 'covered' : 'open'
        opportunities.push({ url, type: pg.type, question: v.q, status, ...mention })
      }
    }
  }
  return { inventory, opportunities, schemaMismatch, answerLinkTotals, answers }
}
