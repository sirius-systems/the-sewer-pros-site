/**
 * The verify chain: every post-build check, one after another. Run `npm run build` first.
 *
 *   npm run verify
 *
 * Runs scripts/verify-*.mjs (page, metadata, image, internal-link and survey checks) and
 * scripts/audit-commercial.mjs (asserts the removed pages stay removed). Exits 1 if any fails.
 * A check that always fails stops catching regressions, so none may be left red:
 * fix the site, fix the check, or retire it (docs/audits/verifier-cleanup-2026-11-22.md).
 */
import fs from 'node:fs'
import { spawnSync } from 'node:child_process'

const scripts = fs
  .readdirSync('scripts')
  .filter((f) => /^verify-.*\.mjs$/.test(f))
  .sort()
scripts.push('audit-commercial.mjs --no-write') // removal guard

const failed = []
for (const s of scripts) {
  const r = spawnSync(process.execPath, `scripts/${s}`.split(' '), { encoding: 'utf8' })
  const ok = r.status === 0
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${s}`)
  if (!ok) failed.push(s)
}
console.log(failed.length === 0 ? `\nAll ${scripts.length} checks passed.` : `\n${failed.length} of ${scripts.length} failed: ${failed.join(', ')}`)
process.exit(failed.length === 0 ? 0 : 1)
