/**
 * The lead form's "Service location?" pills must match the built location pages.
 *
 *   node scripts/verify-survey-locations.mjs
 *
 * Every registry page of type `location` must have a pill in
 * `lib/forms/survey-locations.ts` (same `loc-` id, same market), and every
 * `loc-` pill must have a page. The `other-<market>` pills are exempt.
 */
import fs from 'node:fs'
import path from 'node:path'

const registry = fs.readFileSync(path.resolve('data/pages/approved-pages.ts'), 'utf8')
const pages = new Map()
for (const b of registry.split(/\n  \{\n/).slice(1)) {
  if (!/pageType: 'location'/.test(b)) continue
  const locationId = (b.match(/locationId: '([^']+)'/) || [])[1]
  const marketId = (b.match(/marketId: '([^']+)'/) || [])[1]
  if (locationId !== undefined) pages.set(locationId, marketId)
}

const source = fs.readFileSync(path.resolve('lib/forms/survey-locations.ts'), 'utf8')
const pills = new Map()
for (const m of source.matchAll(/\{ id: '(loc-[^']+)', label: '[^']+', marketId: '([^']+)' \}/g)) {
  pills.set(m[1], m[2])
}

let failures = 0
for (const [id, market] of pages) {
  if (!pills.has(id)) {
    failures += 1
    console.log(`FAIL  location page ${id} has no pill`)
  } else if (pills.get(id) !== market) {
    failures += 1
    console.log(`FAIL  ${id}: pill market ${pills.get(id)} but page market ${market}`)
  }
}
for (const id of pills.keys()) {
  if (!pages.has(id)) {
    failures += 1
    console.log(`FAIL  pill ${id} has no location page`)
  }
}
console.log(`INFO  ${pages.size} location pages, ${pills.size} location pills`)
console.log(failures === 0 ? 'Pills match the location pages.' : `${failures} problem(s) found.`)
process.exit(failures === 0 ? 0 : 1)
