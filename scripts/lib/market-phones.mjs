/**
 * Market phone numbers for the post-build checks.
 *
 * Reads `marketOperatingDetail` from `data/markets/markets.ts` (DEC-071), the
 * one place a market's number lives, so no script types a number.
 */
import fs from 'node:fs'
import path from 'node:path'

export function marketPhones() {
  const src = fs.readFileSync(path.resolve('data/markets/markets.ts'), 'utf8')
  const block = src.slice(src.indexOf('export const marketOperatingDetail'))
  const phones = {}
  for (const m of block.matchAll(/'([a-z-]+)':\s*\{\s*phone:\s*'([^']+)',\s*phoneE164:\s*'([^']+)'/g)) {
    phones[m[1]] = { label: m[2], e164: m[3], digits: m[3].replace(/\D/g, '').slice(-10) }
  }
  return phones
}

/** Every written form of a number: (aaa) bbb-cccc, aaa-bbb-cccc, +1-..., +1aaabbbcccc, aaabbbcccc. */
function forms(digits) {
  const [a, b, c] = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6)]
  return [`(${a}) ${b}-${c}`, `${a}-${b}-${c}`, `${a}.${b}.${c}`, `+1-${a}-${b}-${c}`, `+1${digits}`, digits]
}

/**
 * Other markets' numbers found anywhere in the document, header and footer
 * included. The JSON-LD blocks (and the Organization ContactPoint objects in the
 * serialized component payload) are removed first: the Organization node
 * legitimately lists all three markets' contact points.
 */
export function otherMarketPhoneHits(html, marketId) {
  const doc = html
    .replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, '')
    // The Organization node is also serialized (escaped) into the component payload.
    .replace(/\{(?:\\*")@type(?:\\*"):(?:\\*")ContactPoint[^}]*\}/g, '')
  const phones = marketPhones()
  const hits = []
  for (const [id, p] of Object.entries(phones)) {
    if (id === marketId) continue
    for (const f of forms(p.digits)) if (doc.includes(f)) hits.push(`${id}: ${f}`)
  }
  return hits
}
