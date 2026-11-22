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
import { anchorStats, anchorContexts, MAX_SHARE, MIN_LINKS } from './anchors.mjs'
import { canonicalCoverage, clusterMatrix, moneyPages, contextualGaps, editorialDepth } from './clusters.mjs'
import { buildEntities } from './entities.mjs'
import { decode } from '../lib/link-graph.mjs'

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
for (const x of R.commercial) add('removed-route-link', 'A', x.from, `${x.from} -> ${x.to}`, 'remove the link to a removed route')
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
/* Cluster, canonical-service, anchor and money-page analysis. */
const CC = canonicalCoverage(g)
const CM = clusterMatrix(g)
const AN = anchorStats(g, F.answers)
const MP = moneyPages(g)
const mainText = (u) => {
  const f = path.join(root, u === '/' ? '' : u, 'index.html')
  if (!fs.existsSync(f)) return ''
  const h = fs.readFileSync(f, 'utf8')
  const i = h.indexOf('<main')
  if (i < 0) return ''
  // Only running prose: text in <p> elements, with existing links removed, so a card title or label is not a "mention".
  const paras = [...h.slice(i).matchAll(/<p[\s>][\s\S]*?<\/p>/g)].map((m) => m[0].replace(/<a\s[\s\S]*?<\/a>/g, ' ').replace(/<[^>]+>/g, ' '))
  return decode(paras.join(' ')).replace(/\s+/g, ' ')
}
const CG = contextualGaps(g, buildEntities(g), mainText)
const pct = (a, b) => (b === 0 ? 100 : Math.round((a / b) * 1000) / 10)
const covAny = Object.values(CC.families).reduce((s2, f) => s2 + f.anyContent, 0)
const covCtx = Object.values(CC.families).reduce((s2, f) => s2 + f.contextual, 0)
const covN = Object.values(CC.families).reduce((s2, f) => s2 + f.pages, 0)
const clusterGaps = Object.values(CM).reduce((s2, c) => s2 + c.gaps.length, 0)
const clusterExpected = Object.values(CM).reduce((s2, c) => s2 + c.expected, 0)
fs.writeFileSync(path.join(outDir, 'canonical-coverage.json'), JSON.stringify({ generated: date, ...CC }, null, 1))
fs.writeFileSync(path.join(outDir, 'cluster-matrix.json'), JSON.stringify({ generated: date, clusters: CM }, null, 1))
fs.writeFileSync(path.join(outDir, 'anchor-variety.json'), JSON.stringify({ generated: date, violations: AN.violations, sitewideModules: AN.sitewide, stats: AN.stats }, null, 1))
fs.writeFileSync(path.join(outDir, 'money-pages.json'), JSON.stringify({ generated: date, ...MP }, null, 1))
fs.writeFileSync(path.join(outDir, 'contextual-gaps.json'), JSON.stringify({ generated: date, gaps: CG }, null, 1))
const metrics = {
  canonicalServiceLinkPct: pct(covAny, covN),
  canonicalServiceContextualPct: pct(covCtx, covN),
  clusterEdgesExpected: clusterExpected,
  clusterGaps,
  anchorVarietyViolations: AN.violations.length,
  contextOnlyCardOrModule: CG.filter((x) => x.onlyCardOrModule).length,
  contextNoLinkAtAll: CG.filter((x) => !x.onlyCardOrModule).length,
  moneyInboundContextual: Object.fromEntries(MP.rows.map((r) => [r.path, r.inboundContextual])),
  moneyEditorialDepth: Object.fromEntries(MP.rows.map((r) => [r.path, r.editorialDepth])),
  ...{ pages: urls.length, indexable: idx.length, links: edges.length, orphans: R.orphans.length, broken: R.broken.length, avgEditorialInboundCoreServices: +avg(coreSvc, 'editorialInbound'), faqBlocks: faqPages.length, faqAnswers: F.answerLinkTotals.answers, faqAnswersWithLinks: F.answerLinkTotals.withLinks, faqLinks: F.answerLinkTotals.links, openFaqOpportunities: oppTotals.open, faqSchemaMismatches: F.schemaMismatch.length } }
fs.writeFileSync(path.join(outDir, 'metrics.json'), JSON.stringify({ generated: date, ...metrics }, null, 1))
const fmt = (v) => (typeof v === 'object' && v !== null ? JSON.stringify(v) : v)
const table = (head, rows) => `| ${head.join(' | ')} |\n|${head.map(() => '---').join('|')}|\n${rows.map((r) => `| ${r.join(' | ')} |`).join('\n')}\n`
const pre = before?.metrics ?? before
const ba = before
  ? table(['Metric', 'Before', 'After'], Object.keys(metrics).map((k) => [k, fmt(pre?.[k] ?? 'n/a'), fmt(metrics[k])]))
  : '_No before snapshot supplied (pass --before <metrics.json>)._\n'

let md = `# Internal Linking Audit (${date})\n\nGenerated by \`scripts/audit/run-link-audit.mjs\` from the static export. Policy: \`docs/16-internal-linking-strategy.md\`.\n\n`
md += `## 1. Summary\n\n${table(['Metric', 'Value'], Object.entries(metrics).map(([k, v]) => [k, fmt(v)]))}\n`
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

/* Follow-up implementation (canonical service, clusters, contextual links, anchors, money pages). */
const fbDir = arg('followup-before')
const readJson = (f) => (fbDir && fs.existsSync(path.join(path.resolve(fbDir), f)) ? JSON.parse(fs.readFileSync(path.join(path.resolve(fbDir), f), 'utf8')) : null)
const bM = readJson('metrics.json')
const bCC = readJson('canonical-coverage.json')
const bCM = readJson('cluster-matrix.json')?.clusters
const bMP = readJson('money-pages.json')
const bAN = readJson('anchor-variety.json')
const bCG = readJson('contextual-gaps.json')?.gaps
const dash = '-'
md += `\n## 8. Follow-up implementation: before / after\n\n`
md += `Counting rules. "Body" means any link outside the header, footer, breadcrumb and site chrome, card grids included. "Contextual" means a link inside running prose or an FAQ answer. Cluster edges are checked on body links only (breadcrumbs excluded). Click depth is measured on body links only; through the header menu every service is 1 click from the homepage.\n\n`
md += `### 8.1 Link to the canonical service\n\n${table(['Page family', 'Pages', 'Body link before', 'Body link after', 'Contextual before', 'Contextual after'], Object.entries(CC.families).map(([f, a]) => { const b = bCC?.families?.[f]; return [f, a.pages, b ? `${pct(b.anyContent, b.pages)}%` : dash, `${pct(a.anyContent, a.pages)}%`, b ? `${pct(b.contextual, b.pages)}%` : dash, `${pct(a.contextual, a.pages)}%`] }))}\n`
md += `Pages with no canonical-service link in body, FAQ or card content: before ${bCC ? bCC.gaps.filter((x) => !x.soft).length : dash}, after ${CC.gaps.filter((x) => !x.soft).length}. Service + location pages that link a same-service local page instead of the canonical service: ${CC.substitute.length}.\n\n`
md += `### 8.2 Cluster matrix (expected vs actual body links)\n\n${table(['Cluster', 'Expected edges', 'Actual before', 'Actual after', 'Gaps before', 'Gaps after'], Object.entries(CM).map(([c, a]) => [c, a.expected, bCM ? bCM[c].actual : dash, a.actual, bCM ? bCM[c].gaps.length : dash, a.gaps.length]))}\n`
md += `Edges: every registered service relation both ways (\`SERVICE_RELATIONS\` in link-plan.ts), each audience and its lead service both ways, market hub <-> each location hub, and for every published local page its location hub, market hub and canonical service. Market hub -> /locations/ is the breadcrumb parent and is not counted. Location hub -> local service pages is bounded by design (link-plan TOP_LOCAL_SERVICES, 3 to 6 pages) and is not an expected edge. Remaining gaps:\n\n${Object.entries(CM).flatMap(([c, a]) => a.gaps.map((g2) => `- ${c}: \`${g2.from}\` -> \`${g2.to}\` (${g2.kind})`)).join('\n') || 'None.'}\n\n`
const cgAfter = CG
md += `### 8.3 Contextual links\n\nPages whose running prose names a service, market or audience that only a card, module or nothing links: before ${bCG ? bCG.length : dash}, after ${cgAfter.length} (${cgAfter.filter((x) => x.onlyCardOrModule).length} linked from a card or module only, ${cgAfter.filter((x) => !x.onlyCardOrModule).length} not linked from the page at all). The count can rise when an FAQ link moves out of an opening sentence (see section 7), so the FAQ pass is measured separately: FAQ answers with links ${bM ? bM.faqAnswersWithLinks : dash} before, ${F.answerLinkTotals.withLinks} after; FAQ links ${bM ? bM.faqLinks : dash} before, ${F.answerLinkTotals.links} after. The list is in \`contextual-gaps.json\`.\n\n`
md += `### 8.4 Anchor variety\n\nEditorial links (prose and FAQ, identical shared copy counted once) to a target where one exact anchor is over ${MAX_SHARE * 100}% and the target has at least ${MIN_LINKS} editorial links: before ${bAN ? bAN.violations.filter((v) => v.total >= MIN_LINKS).length : dash}, after ${AN.violations.filter((v) => v.total >= MIN_LINKS).length}.\n\n${table(['Target', 'Links', 'Distinct anchors', 'Top anchor', 'Top share before', 'Top share after'], AN.violations.filter((v) => v.total >= MIN_LINKS).map((v) => { const b = bAN?.violations?.find((x) => x.target === v.target); return [v.target, v.total, v.distinct, v.topAnchor, b ? b.topShare : dash, v.topShare] }))}\nThe remaining targets are the baseline in \`scripts/lib/anchor-variety-baseline.json\`: the gate fails if one gets worse or a new one appears. They are definition-style FAQ answers on service + location pages where the registered service name is the only natural phrase.\n\n`
md += `### 8.5 Money pages\n\n${table(['Page', 'Contextual inbound before', 'Contextual inbound after', 'Body inbound after', 'Body click depth'], MP.rows.map((r) => [r.name, bMP?.rows?.find((x) => x.path === r.path)?.inboundContextual ?? dash, r.inboundContextual, r.inboundEditorial, r.editorialDepth]))}\nContextual inbound across the nine service pages: ${Object.entries(MP.serviceContextualInbound).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k.split('/')[2]} ${v}`).join(', ')}. There is no dedicated second-opinion route; the independent-inspection comparison page is the closest registered page, so it is tracked here and "free second opinion" links go to the contact pages.\n\n`
md += `### 8.6 What the Resources hub and the Reviews page should link when they change\n\n- \`/resources/\` (exists, ${urls.filter((u) => P[u].type === 'resource').length} guides): each guide card should keep its parent service in the sentence under the title (camera-inspection guides -> Sewer Camera Inspection, lateral guides -> Pre-Purchase Sewer Inspection and the St. Louis market hub), the hub intro should link Sewer Camera Inspection and Pre-Purchase Sewer Inspection, and a new guide should be added to GUIDE_RULES in link-plan.ts so the matching service pages and location hubs link it (max 3 per page).\n- \`/reviews/\` (exists): keep it linked from the footer and the homepage review band only. Each review card that names a service should link that service page (Pre-Purchase, Camera Inspection, Sewer Cleaning & Camera Inspection) and each market review group should link its market hub, so the page passes relevance to the money pages. Do not add it to service-page body copy.\n- Both pages should link back to the Contact page for the free second opinion offer using the market contact page where the review or guide is market-specific.\n\n`

/* Round 3: Sewer Cleaning & Camera Inspection boost and template-level anchor variants. */
const r3Dir = arg('round3-before')
if (r3Dir && fs.existsSync(path.resolve(r3Dir))) {
  const rj = (f) => JSON.parse(fs.readFileSync(path.join(path.resolve(r3Dir), f), 'utf8'))
  const bMP3 = rj('money-pages.json')
  const bAN3 = rj('anchor-variety.json')
  const bHash = rj('answer-hashes.json')
  const nowHash = {}
  for (const a of F.answers) nowHash[`${a.url}|${a.q}`] = true
  const crypto = await import('node:crypto')
  let changed = 0
  let compared = 0
  for (const a of F.answers) {
    const k = `${a.url}|${a.q}`
    if (bHash[k] === undefined) continue
    compared++
    if (bHash[k] !== crypto.createHash('sha1').update(a.text).digest('hex').slice(0, 10)) changed++
  }
  const rank = (m) => Object.entries(m).sort((a, b) => b[1] - a[1]).map(([k]) => k)
  const bRank = rank(bMP3.serviceContextualInbound)
  const aRank = rank(MP.serviceContextualInbound)
  md += `\n## 9. Round 3: Sewer Cleaning & Camera Inspection and template-level anchor variants\n\n`
  md += `### 9.1 Contextual inbound links per service\n\n${table(['Service', 'Before', 'Rank before', 'After', 'Rank after'], aRank.map((k) => [k.split('/')[2], bMP3.serviceContextualInbound[k], bRank.indexOf(k) + 1, MP.serviceContextualInbound[k], aRank.indexOf(k) + 1]))}\n`
  md += `### 9.2 Anchor distribution (targets with ${MIN_LINKS} or more editorial links)\n\n${table(['Target', 'Links before', 'Top anchor before', 'Top share before', 'Links after', 'Distinct anchors after', 'Top anchor after', 'Top share after'], [...new Set([...bAN3.violations.map((v) => v.target), ...AN.violations.map((v) => v.target)])].map((t) => { const b = bAN3.violations.find((v) => v.target === t); const a = AN.stats.find((v) => v.target === t); return [t, b?.total ?? dash, b?.topAnchor ?? dash, b?.topShare ?? dash, a?.total ?? dash, a?.distinct ?? dash, a?.topAnchor ?? dash, a?.topShare ?? dash] }))}\n`
  md += `Answers compared: ${compared}. Visible answer text changed on ${changed} (shared answers resolve one \`{{a|b|c}}\` option per route, and a few answers gained a one-line pointer to the combined service). FAQPage text equals the visible text on every page (${F.schemaMismatch.length} mismatches).\n\n`
}

/* Section 11: owner-approved anchor pass (proposal: anchor-pass-proposal-2026-11-22.md). */
{
  const BEFORE11 = { '/services/sewer-cleaning/': 0.69, '/services/hydro-jetting/': 0.53, '/services/sewer-line-locating/': 0.47, '/services/drain-cleaning/': 0.64 }
  const after = (t) => AN.stats.find((x) => x.target === t)
  md += `\n## 11. Anchor pass (owner-approved proposals)\n\n`
  md += `### 11.1 Top-anchor share before and after\n\n${table(['Target', 'Editorial links', 'Top share before', 'Top anchor after', 'Top share after', 'Gate'], Object.entries(BEFORE11).map(([t, b]) => { const a = after(t); return [t, a?.total ?? dash, b, a?.topAnchor ?? dash, a?.topShare ?? dash, a && a.topShare <= MAX_SHARE ? 'at or under 40%, off the baseline' : 'over 40%'] }))}\n`
  md += `### 11.2 Sentences changed\n\n${table(['ID', 'Page(s)', 'Old anchor', 'New anchor'], [
    ['P-C1 + P-H1', 'Home (How we work, closing call-to-action), 3 market hubs, Locations hub, Services hub (data/business/process.tsx)', 'sewer cleaning; hydro jetting', 'main sewer line cleaning; water jetting (registered aliases; "a maintenance issue a" becomes "that")'],
    ['P-C2', 'Drain Cleaning definition (services.tsx)', 'Sewer cleaning', 'Sewer line cleaning'],
    ['P-C3', 'Hydro Jetting definition (services.tsx)', 'sewer cleaning', 'sewer line cleaning'],
    ['P-C4', 'San Diego hub FAQ (san-diego.tsx)', 'sewer cleaning', 'one of: sewer cleaning, main sewer line cleaning, sewer line cleaning (per route)'],
    ['P-H2', 'Recurring Sewer Backup Diagnosis FAQ (services.tsx)', 'hydro jetting', 'one of: hydro jetting, water jetting, the hydro jetting service (per route)'],
    ['P-H3', 'Property Managers FAQ (audiences.tsx)', 'Hydro jetting', 'one of: Water jetting, Sewer jetting, Hydro jetting (per route)'],
    ['P-H4', 'St. Louis City hydro jetting FAQ (st-louis-city.tsx)', 'hydro jetting', 'one of: water jetting, sewer jetting, hydro jetting (per route)'],
    ['P-L1, P-L2', 'Shared locating answers on local pages (services.tsx)', 'one of: Sewer line locating, Line locating, Locating the sewer line', 'one of: Line locating, Locating the sewer line, Sewer line locating service'],
    ['P-D1', 'Hydro Jetting page signs section (services.tsx; the report named service-location-shared.ts, whose sentence is not a link)', 'drain cleaning', 'drain-line cleaning'],
    ['P-D2', 'Sewer Cleaning page signs section (services.tsx)', 'drain cleaning', 'cleaning a single drain'],
    ['P-D3', 'Sewer Cleaning & Camera Inspection page signs section (services.tsx)', 'drain cleaning', 'drain-line cleaning'],
  ])}\nNot applied (rated Not worth it or keep): P-C5, P-L3, P-L4, P-D4. Skipped as pinned: none (each sentence was re-checked against scripts/verify-*.mjs before editing).\n\n`
  md += `### 11.3 Linker rule: no links in third-party text\n\nThe shared FAQ linker now skips text between double quotation marks (straight or curly), inside q, blockquote and cite elements, and inside any element marked data-no-link. The Chula Vista answer that reported the City brochure ("contact a licensed plumber or sewer cleaning contractor") was linking "sewer cleaning" to our Sewer Cleaning page; that sentence is now wrapped in a data-no-link span and carries no link. A scan of the built FAQ output found one other link inside quotation marks, the Services hub answer that quotes the terms "sewer scope" and "sewer camera inspection"; the new rule removes it. \`scripts/verify-internal-links.mjs\` now fails if an FAQ answer link sits inside quoted or marked third-party text.\n\n`
}
md += `## 7. Decisions and open questions\n\n- FAQ answers are authored as JSX, not strings. Instead of adding a markdown-link format, the existing linker (\`lib/links/faq-links.tsx\`) was extended; JSON-LD is already derived from the same JSX (\`lib/schema/faq.ts\`), so text cannot drift, and the gate now verifies it from the built HTML.\n- Linker limits: first mention of a target per page, 2 links per answer (3 only when an answer names several markets), never inside questions, never to the page itself, no cross-market links from a market page, "City of X" is not treated as a market mention, location links only from market, resource and location pages.\n- No open questions that change business facts.\n`
fs.writeFileSync(path.join(outDir, `internal-linking-audit-${date}.md`), md)
console.log(JSON.stringify(metrics, null, 1))
