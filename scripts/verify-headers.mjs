/**
 * Post-build check for `out/_headers` (DEC-154).
 *
 * The *.pages.dev hosts get `X-Robots-Tag: noindex`; the custom domains
 * (thesewerpros.com, www.thesewerpros.com) must not. `out/_headers` must exist
 * (copied from `public/_headers`), carry the two host-scoped noindex rules, and
 * hold no unscoped noindex.
 *
 *   node scripts/verify-headers.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const file = path.resolve('out', '_headers')
let failures = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || detail === '' ? '' : `: ${detail}`}`)
  if (!ok) failures += 1
}

check('out/_headers exists (copied from public/_headers)', fs.existsSync(file))
if (fs.existsSync(file)) {
  const lines = fs
    .readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .filter((l) => l.trim() !== '' && !l.trim().startsWith('#'))
  // Blocks: an unindented line is a URL pattern, indented lines are its headers.
  const blocks = []
  for (const l of lines) {
    if (/^\S/.test(l)) blocks.push({ pattern: l.trim(), headers: [] })
    else if (blocks.length) blocks[blocks.length - 1].headers.push(l.trim())
  }
  const noindex = blocks.filter((b) => b.headers.some((h) => /^x-robots-tag:\s*noindex/i.test(h)))
  const has = (pattern) => noindex.some((b) => b.pattern === pattern)
  check('rule for https://:project.pages.dev/*', has('https://:project.pages.dev/*'))
  check('rule for https://:version.:project.pages.dev/*', has('https://:version.:project.pages.dev/*'))
  const unscoped = noindex.filter((b) => !/^https:\/\/(:[a-z]+\.)*(:[a-z]+|[a-z0-9-]+)\.pages\.dev\//i.test(b.pattern))
  check('no noindex outside the pages.dev hosts (no catch-all, no custom domain)', unscoped.length === 0, unscoped.map((b) => b.pattern).join(', '))
  check('no noindex rule names thesewerpros.com', !noindex.some((b) => /thesewerpros\.com/i.test(b.pattern)))
  console.log(`NOTE  noindex patterns: ${noindex.map((b) => b.pattern).join(' | ')}`)
}
if (failures > 0) {
  console.log(`\n${failures} check(s) failed.`)
  process.exit(1)
}
console.log('\nAll checks passed.')
