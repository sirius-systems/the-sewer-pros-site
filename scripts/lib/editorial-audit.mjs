/**
 * Prompt 13 editorial audit engine, shared by scripts/audit-editorial-keywords.mjs
 * (report) and scripts/verify-editorial-keywords.mjs (gate).
 */
import { readPages } from './page-copy.mjs'
import { norm, hasAny, specFor, QUESTIONS, ELEMENTS_BY_TYPE, SERVICES } from './editorial-keywords.mjs'

export const TITLE_SOFT = 60
export const TITLE_HARD = 70
export const META_MIN = 70
export const META_MAX = 160
export const SIMILARITY_HIGH = 0.5
export const SIMILARITY_MEDIUM = 0.4
export const SIMILARITY_LOW = 0.35

export function runAudit(root = 'out') {
  const P = readPages(root)
  const urls = Object.keys(P).sort()
  const rows = []

  const REPAIR_RE = /\b(repair(s|ing)?|replac(e|es|ing|ement)|install(ation|ing)?|lining|trenchless|excavat\w+)\b/i
  // Pages whose subject is the independent evaluation of a repair recommendation (CLAUDE.md section 9).
  const REPAIR_OK = new Set(['/compare/independent-sewer-inspection-vs-repair-company/'])

  const words = (t) => norm(t).split(' ').filter(Boolean)

  /* ---- boilerplate paragraphs: shared by many pages, ignored for similarity ---- */
  const paraCount = {}
  const paras = {}
  for (const u of urls) {
    paras[u] = [...new Set(P[u].text.split(/(?<=[.?!])\s+/).map((x) => norm(x)).filter((x) => x.length > 30))]
    for (const x of paras[u]) paraCount[x] = (paraCount[x] ?? 0) + 1
  }
  const unique = (u) => paras[u].filter((x) => paraCount[x] <= 3)
  const shingles = (u, n = 5) => {
    const w = unique(u).join(' ').split(' ')
    const out = new Set()
    for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(' '))
    return out
  }
  const jaccard = (a, b) => {
    if (a.size === 0 || b.size === 0) return 0
    let i = 0
    for (const x of a) if (b.has(x)) i++
    return i / (a.size + b.size - i)
  }

  for (const u of urls) {
    const p = P[u]
    if (p.robots.includes('noindex')) continue
    const spec = specFor(u, p.type)
    if (spec === null) continue
    const row = { url: u, type: p.type, primary: spec.primary.label, in: {}, issues: [], missingRequired: [], missingExpected: [], aliasHits: 0, aliasMissing: [], severity: 'ok' }
    const add = (sev, msg) => row.issues.push({ sev, msg })
    const V = spec.primary.variants
    const headingText = [...p.h2, ...p.h3].join(' | ')
    const parts = spec.partsOnly
    const full = (text) => hasAny(text, V)
    const loose = (text) => parts !== undefined && hasAny(text, parts.service) && hasAny(text, parts.place)
    const test = (text) => (full(text) ? 'full' : loose(text) ? 'parts' : 'no')
    row.in.title = test(p.title)
    row.in.meta = test(p.meta)
    row.in.h1 = test(p.h1)
    row.in.h2 = full(headingText) ? 'full' : parts !== undefined ? (hasAny(headingText, parts.service) || hasAny(headingText, parts.place) ? 'parts' : 'no') : 'no'
    row.in.opening = test(p.opening)
    row.in.faq = hasAny(p.faq.map((f) => f.q).join(' | '), V) ? 'full' : parts !== undefined && (hasAny(p.faq.map((f) => f.q).join(' | '), parts.service) || hasAny(p.faq.map((f) => f.q).join(' | '), parts.place)) ? 'parts' : p.faq.length ? 'no' : 'none'
    const need = ELEMENTS_BY_TYPE[p.type] ?? ['title', 'meta', 'h1', 'h2', 'opening']
    // A service + location title and H1 must carry the whole phrase; other elements may carry its parts.
    for (const el of need) {
      const got = row.in[el]
      if (got === 'full') continue
      if (got === 'parts' && !(['title', 'h1'].includes(el) && p.type === 'service-location')) continue
      if (el === 'h1' && spec.h1Exempt) {
        row.h1Exempt = spec.h1Exempt
        continue
      }
      const sev = el === 'title' || el === 'h1' ? 'high' : 'medium'
      add(sev, `primary keyword "${spec.primary.label}" missing from ${el}`)
    }
    /* registered service names: title and H1 carry the exact name; the combined service keeps its ampersand */
    if (p.type === 'service' || p.type === 'service-location') {
      const slug = p.type === 'service' ? u.split('/')[2] : u.split('/')[4]
      const regName = SERVICES[slug].name
      const nm = norm(regName)
      if (!norm(p.title).includes(nm)) add('high', `title does not carry the registered name "${regName}"`)
      if (!norm(p.h1).includes(nm) && !spec.h1Exempt) add('high', `H1 does not carry the registered name "${regName}"`)
    }
    for (const [el, t] of [['title', p.title], ['H1', p.h1]]) if (/sewer cleaning and camera inspection/i.test(t)) add('high', `${el} spells the registered name "Sewer Cleaning & Camera Inspection" with "and": "${t}"`)

    /* lengths and uniqueness are filled in after the loop */
    if (p.title.length > TITLE_HARD) add('medium', `title is ${p.title.length} characters (limit ${TITLE_HARD}, aim ${TITLE_SOFT})`)
    else if (p.title.length > TITLE_SOFT) add('low', `title is ${p.title.length} characters (aim ${TITLE_SOFT})`)
    if (p.meta.length > META_MAX) add('medium', `meta description is ${p.meta.length} characters (limit ${META_MAX})`)
    else if (p.meta.length < META_MIN) add('low', `meta description is ${p.meta.length} characters (minimum ${META_MIN})`)
    if (p.meta === '') add('high', 'no meta description')

    /* repair wording in title, meta, H1 */
    if (!REPAIR_OK.has(u)) {
      for (const [el, t] of [['title', p.title], ['meta', p.meta], ['H1', p.h1]]) {
        const m = t.match(REPAIR_RE)
        if (m && !/(no|not|without|never|do not|does not|don't|doesn't)\b[^.]{0,60}\b(repair|replacement|install)/i.test(t) && !/before (you )?(approv|authoriz|decid|replac)|(repair|replacement) (decision|recommendation|quote)|(a |any |major )?(repair|replacement)(s)? (is|are) (needed|recommended)|repair upsell|repair-driven|(before|on) (a )?(sewer )?repair|(city|county|municipal|program|agency|district)[^.]{0,70}(repair|replacement)|(repair|replacement)[^.]{0,40}(program|claim|grant)/i.test(t)) add('medium', `${el} contains "${m[0]}"; check it does not imply a repair or replacement service: "${t.slice(0, 90)}"`)
      }
    }

    /* commercial wording in titles, metas, headings and FAQ questions (DEC-142: residential only) */
    const COMMERCIAL_RE = /\b(commercial|restaurants?|industrial|retail|warehouses?|office buildings?|mixed[- ]use|businesses|business owners?|contractors?)\b/i
    for (const [el, t] of [['title', p.title], ['meta', p.meta], ['H1', p.h1], ['headings', headingText], ['FAQ questions', p.faq.map((f) => f.q).join(' | ')]]) {
      const m = t.match(COMMERCIAL_RE)
      // "contractor" appears in comparison copy about repair companies and in program wording; only the other terms are flagged on those pages.
      if (m && !(/contractors?/i.test(m[0]) && /(compare|resource|audience|service|location|service-location|market-hub)/.test(p.type))) add('high', `${el} contains commercial wording "${m[0]}": "${t.slice(0, 100)}"`)
    }

    /* secondary keywords (registry aliases): where they appear */
    const faqQ = p.faq.map((f) => f.q).join(' | ')
    const headingsAndFaq = `${headingText} | ${faqQ}`
    for (const a of spec.secondary) {
      if (hasAny(headingsAndFaq, [a])) row.aliasHits += 1
      else row.aliasMissing.push(a)
    }

    /* researched questions in H2, H3 and FAQ questions */
    const questionPool = `${headingText} | ${faqQ} | ${p.title} | ${p.h1}`
    for (const id of spec.required) if (!hasAny(questionPool, [QUESTIONS[id].re])) row.missingRequired.push(id)
    for (const id of spec.expected) if (!hasAny(questionPool, [QUESTIONS[id].re])) row.missingExpected.push(id)
    if (row.missingRequired.length) add('medium', `researched question(s) absent from headings and FAQ: ${row.missingRequired.map((i) => `"${QUESTIONS[i].q}"`).join('; ')}`)

    /* stuffing: how often the primary service phrase repeats in the visible text */
    const wc = words(p.text).length
    const lead = spec.partsOnly ? spec.partsOnly.service[0] : V[0]
    const occurrences = lead ? norm(p.text).split(lead).length - 1 : 0
    row.density = wc > 0 ? +((occurrences * lead.split(' ').length * 100) / wc).toFixed(2) : 0
    if (row.density > 4) add('medium', `possible keyword stuffing: "${lead}" is ${row.density}% of the words`)
    const titleSeps = (p.title.match(/[,&|]/g) ?? []).length
    if (titleSeps > 3) add('low', `title carries ${titleSeps} separators`)

    /* answer-first: a question heading must be followed by a direct answer */
    const weakStart = /^(in this section|there are (many|several)|it depends|when it comes to|whether you|let's|here's|welcome)/i
    row.answerFirst = { questions: p.qa.length, weak: [] }
    for (const x of p.qa) {
      const first = x.a.split(/(?<=[.?!])\s/)[0] ?? ''
      // A heading followed by a list, table or cards (no paragraph) is structured content, not a missing answer.
          if (x.a !== '' && (weakStart.test(x.a) || first.split(' ').length > 45)) row.answerFirst.weak.push(x.q)
    }
    if (row.answerFirst.weak.length) add('low', `answer-first: ${row.answerFirst.weak.length} question heading(s) without a direct opening answer`)

    row.h1 = p.h1
    row.title = p.title
    row.meta = p.meta
    rows.push(row)
  }

  /* ---- uniqueness across the full set ---- */
  const byTitle = {}
  const byMeta = {}
  const byH1 = {}
  for (const r of rows) {
    ;(byTitle[norm(r.title)] ??= []).push(r)
    ;(byMeta[norm(r.meta)] ??= []).push(r)
    ;(byH1[norm(r.h1)] ??= []).push(r)
  }
  const dupTitles = Object.values(byTitle).filter((g) => g.length > 1)
  const dupMetas = Object.values(byMeta).filter((g) => g.length > 1)
  const dupH1 = Object.values(byH1).filter((g) => g.length > 1)
  for (const g of dupTitles) for (const r of g) r.issues.push({ sev: 'high', msg: `title duplicated on ${g.length} pages` })
  for (const g of dupMetas) for (const r of g) r.issues.push({ sev: 'high', msg: `meta description duplicated on ${g.length} pages` })
  for (const g of dupH1) for (const r of g) r.issues.push({ sev: 'medium', msg: `H1 duplicated on ${g.length} pages` })

  /* ---- token-swapped copy: same service, different locations ---- */
  const sig = {}
  for (const u of urls) if (P[u].type === 'service-location' || P[u].type === 'location') sig[u] = shingles(u)
  const swap = []
  const groups = {}
  for (const u of Object.keys(sig)) {
    const key = P[u].type === 'location' ? 'hub' : u.split('/')[4]
    ;(groups[key] ??= []).push(u)
  }
  for (const list of Object.values(groups)) {
    for (const u of list) {
      let best = { sim: 0, with: null }
      for (const v of list) {
        if (u === v) continue
        const sim = jaccard(sig[u], sig[v])
        if (sim > best.sim) best = { sim, with: v }
      }
      const r = rows.find((x) => x.url === u)
      if (r) {
        r.maxSimilarity = +best.sim.toFixed(3)
        r.mostSimilarTo = best.with
        if (best.sim >= SIMILARITY_LOW) {
          r.issues.push({ sev: best.sim >= SIMILARITY_HIGH ? 'high' : best.sim >= SIMILARITY_MEDIUM ? 'medium' : 'low', msg: `copy is ${(best.sim * 100).toFixed(0)}% similar to ${best.with} (possible token swap)` })
          swap.push({ url: u, with: best.with, sim: +best.sim.toFixed(3) })
        }
      }
    }
  }

  /* ---- cannibalization: unqualified service phrase in the title of more than one page ---- */
  const cannibal = []
  const core = ['sewer camera inspection', 'sewer cleaning', 'hydro jetting', 'sewer line locating', 'drain cleaning', 'pre-purchase sewer inspection', 'sewer cleaning and camera inspection']
  for (const c of core) {
    const owners = rows.filter((r) => !['service-location', 'location', 'market-hub', 'market-contact', 'market-other', 'resource', 'compare', 'audience', 'audience-hub', 'faq', 'contact', 'about'].includes(r.type) && hasAny(r.title, [c]) || (r.url === '/' && hasAny(r.title, [c])))
    if (owners.length > 1) cannibal.push({ keyword: c, pages: owners.map((o) => o.url) })
  }

  /* ---- severity and metrics ---- */
  const rank = { ok: 0, low: 1, medium: 2, high: 3 }
  for (const r of rows) {
    for (const i of r.issues) if (rank[i.sev] > rank[r.severity]) r.severity = i.sev
  }
  const pct = (f) => +((rows.filter(f).length / rows.length) * 100).toFixed(1)
  const reach = (el) => pct((r) => r.in[el] === 'full' || (r.in[el] === 'parts' && !(['title', 'h1'].includes(el) && r.type === 'service-location')) || (el === 'h1' && r.h1Exempt))
  const summary = {
    pagesAudited: rows.length,
    primaryInTitlePct: reach('title'),
    primaryInMetaPct: reach('meta'),
    primaryInH1Pct: reach('h1'),
    primaryInH2Pct: pct((r) => r.in.h2 !== 'no'),
    primaryInOpeningPct: reach('opening'),
      primaryInFaqPct: pct((r) => r.in.faq === 'full' || r.in.faq === 'parts'),
      registeredNameErrors: rows.filter((r) => r.issues.some((i) => /registered name/.test(i.msg))).length,
      commercialWordingFlags: rows.filter((r) => r.issues.some((i) => /commercial wording/.test(i.msg))).length,
    duplicateTitles: dupTitles.length,
    duplicateMetas: dupMetas.length,
    duplicateH1s: dupH1.length,
    titlesOver70: rows.filter((r) => r.title.length > TITLE_HARD).length,
    titlesOver60: rows.filter((r) => r.title.length > TITLE_SOFT).length,
    metasOver160: rows.filter((r) => r.meta.length > META_MAX).length,
    metasUnder70: rows.filter((r) => r.meta.length < META_MIN).length,
    requiredQuestionsMissing: rows.reduce((n, r) => n + r.missingRequired.length, 0),
    expectedQuestionsMissing: rows.reduce((n, r) => n + r.missingExpected.length, 0),
    tokenSwapPairsOver35pct: swap.length,
    stuffingFlags: rows.filter((r) => r.issues.some((i) => i.msg.startsWith('possible keyword stuffing'))).length,
    repairWordingFlags: rows.filter((r) => r.issues.some((i) => i.msg.includes('repair or replacement service'))).length,
    cannibalization: cannibal.length,
    severity: { high: rows.filter((r) => r.severity === 'high').length, medium: rows.filter((r) => r.severity === 'medium').length, low: rows.filter((r) => r.severity === 'low').length, ok: rows.filter((r) => r.severity === 'ok').length },
  }
    return { summary, cannibal, swap, dupTitles: dupTitles.map((g) => g.map((r) => r.url)), dupMetas: dupMetas.map((g) => g.map((r) => r.url)), rows, pages: P }
  }
