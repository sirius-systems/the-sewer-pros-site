/**
 * Lead routing guard (DEC-147, DEC-159).
 *
 * Per-market notification email is a GoHighLevel workflow on each `market-*` tag
 * (docs/lead-routing.md). This check keeps the code, the market data and that
 * document in step, and makes sure the legacy `LeadFormSection` stub (which
 * sends nothing) is never rendered.
 *
 *   node scripts/verify-lead-routing.mjs
 *
 * Needs a build for the last check (it reads `out/`); the others read source.
 */
import fs from 'node:fs'
import path from 'node:path'

let failures = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || detail === '' ? '' : `: ${detail}`}`)
  if (!ok) failures += 1
}

const server = fs.readFileSync(path.resolve('lib/forms/lead-server.ts'), 'utf8')
const markets = fs.readFileSync(path.resolve('data/markets/markets.ts'), 'utf8')
const docs = fs.readFileSync(path.resolve('docs/lead-routing.md'), 'utf8')

// Market ids and published emails, from marketOperatingDetail.
const detailStart = markets.indexOf('export const marketOperatingDetail')
const detail = markets.slice(detailStart)
const emails = {}
for (const m of detail.matchAll(/'([a-z]+(?:-[a-z]+)*-[a-z]{2})':\s*\{[\s\S]*?email:\s*'([^']+)'/g)) emails[m[1]] = m[2]
const ids = Object.keys(emails)
check('market ids and emails were read from marketOperatingDetail', ids.length >= 3, ids.join(', '))

// Market keys the function turns into `market-*` tags.
const marketBlock = (server.match(/const MARKETS:[\s\S]*?\n\}/) || [''])[0]
const keyById = {}
for (const m of marketBlock.matchAll(/'([a-z-]+-[a-z]{2})':\s*\{\s*key:\s*'([a-z-]+)'/g)) keyById[m[1]] = m[2]
check('the function emits a market tag from `market-${key}`', /`market-\$\{lead\.marketKey\}`/.test(server))

// The tag names in the doc must be the ones the function emits.
const formTypesBlock = (server.match(/const FORM_TYPES:[\s\S]*?\n\}/) || [''])[0]
const formTags = [...formTypesBlock.matchAll(/:\s*'([a-z]+)',?/g)].map((m) => `form-${m[1]}`)
const staticTags = ['website-lead', ...formTags]
check('docs/lead-routing.md lists website-lead and every form-* tag', staticTags.every((t) => docs.includes(`\`${t}\``)), staticTags.join(', '))

const bad = []
for (const id of ids) {
  const key = keyById[id]
  if (key === undefined) {
    bad.push(`${id}: no entry in lead-server.ts MARKETS, so no market tag`)
    continue
  }
  const tag = `market-${key}`
  const rows = docs.split('\n').filter((l) => l.startsWith('|') && l.includes(`\`${tag}\``))
  if (rows.length === 0) bad.push(`${id}: no docs row for ${tag}`)
  else if (!rows.some((l) => l.includes(emails[id]))) bad.push(`${id}: no docs row for ${tag} carries ${emails[id]}`)
}
check('every market has a market-* tag in lead-server.ts and a docs row whose recipient is its published email', bad.length === 0, bad.join(' | '))

// The legacy stub sends nothing, so it must not appear in any built page.
const out = path.resolve('out')
if (fs.existsSync(out)) {
  const hits = []
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) walk(p)
      else if (e.name === 'index.html' && fs.readFileSync(p, 'utf8').includes('name="lastName"')) hits.push(path.relative(out, path.dirname(p)))
    }
  }
  walk(out)
  check('no built page renders the legacy LeadFormSection stub (it sends nothing)', hits.length === 0, hits.slice(0, 5).join(', '))
} else {
  console.log('NOTE  out/ not found; run npm run build to check the built pages')
}

if (failures > 0) {
  console.log(`\n${failures} check(s) failed.`)
  process.exit(1)
}
console.log('\nAll checks passed.')
