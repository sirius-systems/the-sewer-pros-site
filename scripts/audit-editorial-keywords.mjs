/**
 * Prompt 13 editorial audit: keyword coverage, uniqueness, stuffing,
 * answer-first structure, token-swapped copy and cannibalization for every page
 * in the static export in `out/`. Engine: scripts/lib/editorial-audit.mjs.
 *
 *   node scripts/audit-editorial-keywords.mjs [report.json]
 */
import fs from 'node:fs'
import { runAudit } from './lib/editorial-audit.mjs'

const { summary, cannibal, swap, dupTitles, dupMetas, rows } = runAudit('out')
console.log(JSON.stringify(summary, null, 2))
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify({ summary, cannibal, swap, dupTitles, dupMetas, rows }, null, 1))
