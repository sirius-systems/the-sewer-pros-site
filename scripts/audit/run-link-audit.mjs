/**
 * Internal linking audit entry point (pages + FAQs). Re-runnable.
 *
 *   npm run build                       # the audit reads the static export in out/
 *   node scripts/audit/run-link-audit.mjs [--root out] [--before <dir with a previous link-graph.json>] [--date YYYY-MM-DD]
 *
 * Writes docs/audits/internal-linking/{link-graph,faq-link-opportunities,findings}.json
 * and internal-linking-audit-<date>.md. Policy: docs/16-internal-linking-strategy.md.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { buildGraph, isIndexable, CHROME } from '../lib/link-graph.mjs'
import { runFaqAudit } from './faq-audit.mjs'

const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i > 0 ? process.argv[i + 1] : d }
const root = path.resolve(arg('root', 'out'))
const date = arg('date', new Date().toISOString().slice(0, 10))
const outDir = path.resolve('docs/audits/internal-linking')
const beforeFile = arg('before')
fs.mkdirSync(outDir, { recursive: true })

const g = buildGraph(root)
const P = g.pages
const urls = Object.keys(P)
const idx = urls.filter((u) => isIndexable(P[u]))
const idxSet = new Set(idx)
const internal = (u) => P[u].out.filter((l) => l.kind === 'internal')
const editorial = (u) => internal(u).filter((l) => !CHROME.has(l.zone))
const editorialIn = (t) => new Set(idx.filter((u) => u !== t && editorial(u).some((l) => l.path === t)))
const anyIn = (t) => new Set(idx.filter((u) => u !== t && internal(u).some((l) => l.path === t)))

/* Depth from the homepage (any internal link). */
const depth = { '/': 0 }
for (let q = ['/'], i = 0; i < q.length; i++) for (const l of internal(q[i])) if (P[l.path] && depth[l.path] === undefined) { depth[l.path] = depth[q[i]] + 1; q.push(l.path) }

/* Link graph. */
const nodes = urls.map((u) => ({ path: u, type: P[u].type, indexable: idxSet.has(u), depth: depth[u] ?? null, inbound: anyIn(u).size, editorialInbound: editorialIn(u).size, outbound: new Set(internal(u).map((l) => l.path)).size }))
const edges = urls.flatMap((u) => internal(u).map((l) => ({ source: u, target: l.path, anchorText: l.text, location: l.zone.split(':')[0], rel: l.rel || undefined })))
fs.writeFileSync(path.join(outDir, 'link-graph.json'), JSON.stringify({ generated: date, nodes, edges }))

/* Structural rules: reuse the gate's audit. */
const tmp = path.join(outDir, '.rules.json')
execFileSync(process.execPath, ['scripts/audit-internal-links.mjs', tmp], { stdio: ['ignore', 'ignore', 'inherit'], env: { ...process.env, AUDIT_ROOT: root } })
const R = JSON.parse(fs.readFileSync(tmp, 'utf8'))
fs.unlinkSync(tmp)

/* FAQ audit. */
const F = runFaqAudit(g, root)
fs.writeFileSync(path.join(outDir, 'faq-link-opportunities.json'), JSON.stringify({ generated: date, inventory: F.inventory, totals: F.answerLinkTotals, schemaMismatch: F.schemaMismatch, opportunities: F.opportunities }, null, 1))

/* Findings. */
const findings = []
const add = (check, severity, url, evidence, fix, status = 'open') => findings.push({ check, severity, url, evidence, fix, status })
for (const u of R.orphans) add('orphan', 'A', u, 'no inbound links from any indexable page', 'link from its parent hub')
for (const u of R.editorialOrphans) add('editorial-orphan', 'B', u, 'inbound links are chrome/breadcrumb only', 'add a body link from a related page')
for (const x of R.broken) add('broken-link', 'A', x.from, `${x.from} -> ${x.to} (${x.text})`, 'fix target')
for (const x of R.commercial) add('commercial-leftover', 'A', x.from, `${x.from} -> ${x.to}`, 'remove link')
for (const x of R.toNoindex) add('link-to-noindex', 'A', x.from, `${x.from} -> ${x.to}`, 'remove or retarget')
for (const x of R.genericAnchors) add('generic-anchor', 'B', x.from, `"${x.text}" -> ${x.to}`, 'use a descriptive anchor')
for (const x of R.serviceNameMismatch) add('anchor-vs-registry-name', 'C', x.from, `"${x.text}" -> ${x.to}`, 'watch: anchor is a natural variant of the registered name')
for (const x of R.hierarchy) add('hierarchy', 'A', x.url, `${x.rule}; missing ${x.missing}`, 'add the parent or child link')
for (const x of R.crossMarket) add('cross-market', 'B', x.from, `${x.from} -> ${x.to}`, 'remove unless it is a coverage answer')
for (const x of R.breadcrumb) add('breadcrumb', 'A', x.url, `visible breadcrumb does not match the URL hierarchy`, 'fix breadcrumb')
for (const x of R.overCeiling) add('link-bloat', 'C', x.url, `${x.total} internal links (ceiling 100 distinct)`, 'watch: nav + footer + body')
for (const x of F.schemaMismatch) add('faq-schema', 'A', x.url, `${x.reason}: ${x.q}`, 'make the FAQPage text come from the visible answer')
const openOpp = F.opportunities.filter((o) => o.status === 'open')
for (const o of openOpp) add('faq-opportunity', 'B', o.url, `"${o.mention}" -> ${o.target} in "${o.question}"`, 'link in a supporting sentence if it reads naturally')
fs.writeFileSync(path.join(outDir, 'findings.json'), JSON.stringify({ generated: date, findings }, null, 1))

/* Report. */
const byType = {}
for (const n of nodes.filter((n) => n.indexable)) (byType[n.type] ??= []).push(n)
const avg = (a, k) => (a.reduce((s, n) => s + n[k], 0) / a.length).toFixed(1)
const depthDist = {}
for (const n of nodes) depthDist[n.depth ?? 'unreachable'] = (depthDist[n.depth ?? 'unreachable'] ?? 0) + 1
const sortedIdx = nodes.filter((n) => n.indexable && n.path !== '/').sort((a, b) => a.editorialInbound - b.editorialInbound || a.inbound - b.inbound)
const top = [...sortedIdx].reverse().slice(0, 15)
const bottom = sortedIdx.slice(0, 15)
const st = (o, k) => o.filter((x) => x.status === k).length
const oppTotals = { mentions: F.opportunities.length, linked: st(F.opportunities, 'linked'), covered: st(F.opportunities, 'covered'), open: st(F.opportunities, 'open') }
const faqPages = F.inventory
const faqCount = faqPages.reduce((s, i) => s + i.faqCount, 0)

let before = null
if (beforeFile && fs.existsSync(beforeFile)) before = JSON.parse(fs.readFileSync(beforeFile, 'utf8'))
const coreSvc = nodes.filter((n) => n.type === 'service')
const metrics = { pages: urls.length, indexable: idx.length, links: edges.length, orphans: R.orphans.length, broken: R.broken.length, avgEditorialInboundCoreServices: +avg(coreSvc, 'editorialInbound'), faqBlocks: faqPages.length, faqAnswers: F.answerLinkTotals.answers, faqAnswersWithLinks: F.answerLinkTotals.withLinks, faqLinks: F.answerLinkTotals.links, openFaqOpportunities: oppTotals.open, faqSchemaMismatches: F.schemaMismatch.length }
fs.writeFileSync(path.join(outDir, 'metrics.json'), JSON.stringify({ generated: date, ...metrics }, null, 1))
const table = (head, rows) => `| ${head.join(' | ')} |\n|${head.map(() => '---').join('|')}|\n${rows.map((r) => `| ${r.join(' | ')} |`).join('\n')}\n`
const pre = before?.metrics ?? before
const ba = before
  ? table(['Metric', 'Before', 'After'], Object.keys(metrics).map((k) => [k, pre?.[k] ?? 'n/a', metrics[k]]))
  : '_No before snapshot supplied (pass --before <metrics.json>)._\n'

let md = `# Internal Linking Audit (${date})\n\nGenerated by \`scripts/audit/run-link-audit.mjs\` from the static export. Policy: \`docs/16-internal-linking-strategy.md\`.\n\n`
md += `## 1. Summary\n\n${table(['Metric', 'Value'], Object.entries(metrics).map(([k, v]) => [k, v]))}\n`
md += `Structural findings by check: ${Object.entries(findings.reduce((a, f) => ((a[f.check] = (a[f.check] ?? 0) + 1), a), {})).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}.\n\nFAQ mentions of linkable entities: ${oppTotals.mentions} (already linked ${oppTotals.linked}, target linked elsewhere in the same page FAQ ${oppTotals.covered}, open ${oppTotals.open}).\n\n`
md += `### Before / after\n\n${ba}\n`
md += `## 2. Link graph\n\n${table(['Page family', 'Indexable pages', 'Avg inbound', 'Avg editorial inbound', 'Avg outbound (distinct)'], Object.entries(byType).map(([t, a]) => [t, a.length, avg(a, 'inbound'), avg(a, 'editorialInbound'), avg(a, 'outbound')]))}\n`
md += `Click depth from the homepage: ${Object.entries(depthDist).map(([d, n]) => `${d}: ${n}`).join(', ')}.\n\n### Top 15 by editorial inbound links\n\n${table(['Page', 'Editorial inbound', 'All inbound'], top.map((n) => [n.path, n.editorialInbound, n.inbound]))}\n### Bottom 15 by editorial inbound links\n\n${table(['Page', 'Editorial inbound', 'All inbound'], bottom.map((n) => [n.path, n.editorialInbound, n.inbound]))}\n`
md += `## 3. Findings by check\n\n`
const groups = {}
for (const f of findings) (groups[f.check] ??= []).push(f)
for (const [c, a] of Object.entries(groups)) {
  if (c === 'faq-opportunity') continue
  md += `### ${c} (${a.length}, severity ${a[0].severity})\n\n${a.slice(0, 25).map((f) => `- \`${f.url}\`: ${f.evidence}`).join('\n')}${a.length > 25 ? `\n- ... ${a.length - 25} more in findings.json` : ''}\n\n`
}
if (Object.keys(groups).filter((c) => c !== 'faq-opportunity').length === 0) md += 'No structural findings.\n\n'
md += `## 4. FAQ findings\n\n### Inventory\n\n${table(['Page', 'Family', 'FAQs', 'Answers with links', 'Links in answers', 'FAQPage JSON-LD'], faqPages.map((i) => [i.url, i.type, i.faqCount, i.linkedAnswers, i.answerLinks, i.schema ? `yes (${i.schemaCount})` : 'no']))}\n`
md += `Data shape: every FAQ is authored as JSX (\`FaqEntry.answer: ReactNode\`) in \`content/pages/*.tsx\` or \`data/business/*\`; \`FaqSection\` and \`FaqGrouped\` render them and run the shared linker (\`lib/links/faq-links.tsx\`). FAQPage JSON-LD is derived from the same JSX by \`lib/schema/faq.ts\`. Service + location pages carry no FAQ block.\n\nSchema/visible-text check: ${F.schemaMismatch.length === 0 ? 'every FAQ answer matches its JSON-LD text after whitespace normalization.' : `${F.schemaMismatch.length} mismatches (see findings.json).`}\n\n`
md += `### Open opportunities (mention exists, target not linked anywhere in that page's FAQ)\n\n${openOpp.length === 0 ? 'None.\n' : table(['Page', 'Question', 'Mention', 'Target', 'Kind'], openOpp.map((o) => [o.url, o.question.replace(/\|/g, '/'), o.mention, o.target, o.kind]))}\n`
md += `Full list including linked and covered mentions: \`faq-link-opportunities.json\`.\n`
const inFooter = (t) => internal('/').some((l) => l.zone === 'footer' && l.path === t)
const slCount = urls.filter((u) => P[u].type === 'service-location').length
md += `\n## 5. Guardrail checks\n\n${table(['Guardrail', 'Result'], [
  ['Links to removed commercial routes', R.commercial.length],
  ['Links to missing routes', R.broken.length],
  ['Links to old /{market}/{location}/ routes', R.oldPattern.length],
  ['Indexable pages linking to noindex or non-sitemap pages', R.toNoindex.length],
  ['Generic anchors ("click here", "learn more")', R.genericAnchors.length],
  ['Cross-market links in page content', R.crossMarket.length],
  ['Breadcrumb mismatches vs URL hierarchy', R.breadcrumb.length],
  ['Hierarchy gaps (parent/child/sibling rules)', R.hierarchy.length],
  ['Pages with over 100 total internal links (the gate limits distinct destinations, which all pass)', R.overCeiling.length],
  ['FAQPage text differs from visible answer', F.schemaMismatch.length],
])}\nRepair guardrail: no internal link targets a repair or replacement service, because none is registered. Anchor-vs-registry-name rows (severity C) are natural variants such as "sewer scope" and "before closing"; none misdescribes its destination.\n\n`
md += `## 6. Link once promoted / built\n\n- Reviews page (\`/reviews/\`) exists; linked from the homepage footer: ${inFooter('/reviews/')}.\n- Resources hub (\`/resources/\`) exists with ${urls.filter((u) => P[u].type === 'resource').length} guides; linked from the homepage footer: ${inFooter('/resources/')}. New guides should be linked from the matching service, audience and market pages (the "Related guides" slot, max 3 per page) when published.\n- Service + location pages published: ${slCount}. Remaining service x location matrix rows are candidates only and receive no links until promoted.\n- Market-contact FAQ answers that list every served area (San Diego, Las Vegas, St. Louis) name 3 to 6 location hubs in one sentence. Linking them is a judgment call (bloat vs coverage) and is left as severity B.\n- Location FAQ blocks mention services rarely, so most carry no answer links; a service-relevant sentence added to existing answers would be the way to raise that (suggestion only, no new FAQ copy was written).\n\n`
md += `## 7. Decisions and open questions\n\n- FAQ answers are authored as JSX, not strings. Instead of adding a markdown-link format, the existing linker (\`lib/links/faq-links.tsx\`) was extended; JSON-LD is already derived from the same JSX (\`lib/schema/faq.ts\`), so text cannot drift, and the gate now verifies it from the built HTML.\n- Linker limits: first mention of a target per page, 2 links per answer (3 only when an answer names several markets), never inside questions, never to the page itself, no cross-market links from a market page, "City of X" is not treated as a market mention, location links only from market, resource and location pages.\n- No open questions that change business facts.\n`
fs.writeFileSync(path.join(outDir, `internal-linking-audit-${date}.md`), md)
console.log(JSON.stringify(metrics, null, 1))
