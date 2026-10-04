/**
 * Sitewide market-phone check over the static export in `out/`.
 *
 *   node scripts/verify-market-phones.mjs
 *
 * Owner requirement (DEC-071): every market has its own number and a
 * market-scoped page shows that market's number only. For every page in the
 * approved registry that has a `marketId` (market hubs, market contact pages,
 * location, service + location and market-scoped service pages), the WHOLE
 * document (header, footer, mobile contact bar, forms, body) must:
 *   - contain no other market's number, in any written form, and
 *   - contain its own market's number as a `tel:` link.
 * The JSON-LD blocks are left out of the scan: the Organization node
 * legitimately lists all three markets' contact points.
 *
 * Market-neutral pages (no `marketId`) are only reported: they keep the
 * company-wide footer with all three markets, each labelled by market.
 * Numbers come from `marketOperatingDetail`; none is typed here.
 */
import fs from 'node:fs'
import path from 'node:path'
import { marketPhones, otherMarketPhoneHits } from './lib/market-phones.mjs'

const OUT = path.resolve('out')
const phones = marketPhones()
const src = fs.readFileSync(path.resolve('data/pages/approved-pages.ts'), 'utf8')
const pages = []
for (const b of src.split(/\n  \{\n/).slice(1)) {
  const id = (b.match(/id: '([^']+)'/) || [])[1]
  const p = (b.match(/toPathname\('([^']+)'\)/) || [])[1]
  const m = (b.match(/marketId: '([^']+)'/) || [])[1]
  if (id && p) pages.push({ id, p, m })
}

let failures = 0
let scoped = 0
let neutral = 0
for (const pg of pages) {
  const file = path.join(OUT, pg.p === '/' ? '' : pg.p, 'index.html')
  if (!fs.existsSync(file)) continue
  const html = fs.readFileSync(file, 'utf8')
  if (pg.m === undefined) {
    neutral += 1
    continue
  }
  scoped += 1
  const own = phones[pg.m]
  const problems = otherMarketPhoneHits(html, pg.m)
  if (own === undefined) problems.push(`no phone constant for ${pg.m}`)
  else if (!html.includes(`href="tel:${own.e164}"`)) problems.push(`own number ${own.e164} not found as a tel: link`)
  if (problems.length > 0) {
    failures += 1
    console.log(`FAIL  ${pg.p}: ${problems.join('; ')}`)
  }
}
console.log(`INFO  ${scoped} market-scoped pages checked, ${neutral} market-neutral pages left as they are`)
console.log(failures === 0 ? 'All market-scoped pages show their own market number only.' : `${failures} page(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
