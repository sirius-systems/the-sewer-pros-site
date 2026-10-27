/**
 * Post-build title and meta description gate for the static export in `out/`.
 *
 *   node scripts/verify-meta.mjs
 *
 * Run `npm run build` first. Exits 1 on any failure. Engine and rules:
 * scripts/lib/meta-audit.mjs; report: docs/source-reports/meta-audit-2026-10-27.md.
 *
 * Fails on: missing or duplicate titles and descriptions; a title wider than the
 * ~580px search-result budget (estimated, lib/seo/text-width.mjs); a description over
 * 160 or under 110 characters, or wider than ~920px; descriptions 80% or more alike or
 * differing only by a place or service name; a primary keyword missing from the title;
 * a title or H1-level service name that is not the registered name; banned wording
 * (repair or replacement offers, commercial, mixed-use, free estimate, licensing,
 * prices, unapproved claims); em dashes; Open Graph or Twitter tags missing or
 * different from the title and description; canonical or og:url different from the
 * page URL; cross-market mentions; an implied office or store; a location or audience
 * page whose description names no place or audience; a description that differs from
 * the page's WebPage schema description.
 */
import { runMetaAudit, DESC_MIN, DESC_MAX } from './lib/meta-audit.mjs'
import { TITLE_BUDGET, DESC_BUDGET } from '../lib/seo/text-width.mjs'

const { rows, dupTitles, dupDescs, nearDup, templateOnly } = runMetaAudit('out')
let failures = 0
const check = (name, bad) => {
  const ok = bad.length === 0
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : `: ${bad.length}`}`)
  if (!ok) {
    for (const b of bad.slice(0, 8)) console.log(`        ${b}`)
    if (bad.length > 8) console.log(`        ... and ${bad.length - 8} more`)
    failures += 1
  }
}
const issues = (re, sev = ['high', 'medium']) => rows.flatMap((r) => r.issues.filter((i) => sev.includes(i.sev) && re.test(i.msg)).map((i) => `${r.url}: ${i.msg}`))
const handled = []
const named = (name, re) => {
  handled.push(re)
  check(name, issues(re))
}

console.log(`INFO  ${rows.length} indexable pages\n`)
check('every page has a title and a meta description', rows.filter((r) => !r.title || !r.description).map((r) => r.url))
check('no duplicate titles', dupTitles.map((g) => g.join(' = ')))
check('no duplicate meta descriptions', dupDescs.map((g) => g.join(' = ')))
check(`no title wider than about ${TITLE_BUDGET}px (estimated)`, rows.filter((r) => r.titlePx > TITLE_BUDGET).map((r) => `${r.url}: ${r.titlePx}px`))
check(`descriptions are ${DESC_MIN} to ${DESC_MAX} characters and under about ${DESC_BUDGET}px (estimated)`, rows.filter((r) => r.descChars < DESC_MIN || r.descChars > DESC_MAX || r.descPx > DESC_BUDGET).map((r) => `${r.url}: ${r.descChars} characters, ${r.descPx}px`))
check('no description is 80% or more like another, or differs only by place or service name', [...nearDup.map((n) => `${n.a} ~ ${n.b} (${n.similarity})`), ...templateOnly.map((g) => g.join(' ~ '))])
named('the primary keyword is in every title', /missing from the title/)
named('service titles use the registered service name exactly (ampersand included)', /registered name|spells the combined service/)
named('no banned wording (repair or replacement offer, commercial, mixed-use, free estimate, licensing, price, unapproved claim)', /contains (free estimate|repair or replacement|commercial|licensing|unapproved|price|years in business)/)
named('no em or en dashes, quotation marks or unescaped entities', /dash|quotation|entity/)
named('Open Graph and Twitter tags are present and match the title and description', /^og |og:title|og:description|twitter card/)
named('canonical and og:url match the page URL', /canonical is|og:url is|og:image file/)
named('no cross-market mentions and no implied office or store', /cross-market|implies an office/)
named('location pages name the place and audience pages name the audience in the title and description', /does not name the place|no audience anchor/)
named('descriptions match the WebPage schema description', /WebPage schema/)
named('no fear or urgency language', /fear or urgency/)
named('the brand separator is the only pipe in a title', /pipe that is not/)
// Anything else rated high or medium.
const other = rows.flatMap((r) => r.issues.filter((i) => ['high', 'medium'].includes(i.sev) && !handled.some((h) => h.test(i.msg)) && !/likely to truncate|characters \(minimum|aim 130|similar to|differs only by/.test(i.msg)).map((i) => `${r.url}: ${i.msg}`))
check('no other high or medium meta finding', other)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
