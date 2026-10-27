/**
 * Writes the internal link graph for the static export in `out/`.
 *
 *   node scripts/build-link-graph.mjs [output.json]
 *
 * Run `npm run build` first. Methodology and findings are in
 * docs/source-reports/internal-link-audit-2026-10-27.md.
 */
import fs from 'node:fs'
import path from 'node:path'
import { buildGraph, CHROME } from './lib/link-graph.mjs'

const outFile = process.argv[2] || 'docs/source-reports/internal-link-graph-2026-10-27.json'
const g = buildGraph()
const slim = {
  generated: new Date().toISOString().slice(0, 10),
  pageCount: Object.keys(g.pages).length,
  pages: Object.fromEntries(
    Object.values(g.pages).map((p) => [
      p.url,
      {
        type: p.type,
        title: p.title,
        h1: p.h1,
        noindex: p.noindex,
        inSitemap: p.inSitemap,
        // Inbound links from page content (nav, footer and breadcrumbs are sitewide and summarised).
        inboundCount: new Set(g.inbound[p.url].map((i) => i.from)).size,
        inboundFromContent: [...new Set(g.inbound[p.url].filter((i) => !CHROME.has(i.zone)).map((i) => i.from))],
        // [target, anchor text, zone]; internal links only. Nav/footer/breadcrumb links are counted in `chromeLinks`, external links in `externalLinks`.
        out: p.out.filter((l) => l.kind === 'internal' && !CHROME.has(l.zone)).map((l) => [l.path, l.text.length > 120 ? l.text.slice(0, 117) + '...' : l.text, l.zone]),
        externalLinks: p.out.filter((l) => l.kind === 'external').length,
        chromeLinks: p.out.filter((l) => l.kind === 'internal' && CHROME.has(l.zone)).reduce((a, l) => ((a[l.zone] = (a[l.zone] ?? 0) + 1), a), {}),
      },
    ]),
  ),
}
fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(slim))
console.log(`${(fs.statSync(outFile).size / 1024).toFixed(0)} KB`)
console.log(`wrote ${outFile}: ${slim.pageCount} pages`)
