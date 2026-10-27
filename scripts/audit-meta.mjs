/**
 * Meta title and description audit over the static export in `out/`.
 *
 *   node scripts/audit-meta.mjs [report.json] [inventory.csv]
 *
 * Engine: scripts/lib/meta-audit.mjs. Report: docs/source-reports/meta-audit-2026-10-27.md.
 */
import fs from 'node:fs'
import { runMetaAudit } from './lib/meta-audit.mjs'

const { summary, byType, rows, dupTitles, dupDescs, nearDup, templateOnly, cannibal, camera, independent } = runMetaAudit('out')
console.log(JSON.stringify(summary, null, 2))
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify({ summary, byType, dupTitles, dupDescs, nearDup, templateOnly, cannibal, camera, independent, rows }, null, 1))
if (process.argv[3]) {
  const esc = (s) => `"${String(s).replace(/"/g, '""')}"`
  const head = ['url', 'type', 'title', 'titleChars', 'titlePx', 'description', 'descChars', 'descPx', 'canonical', 'robots', 'ogTitle', 'ogDescription', 'ogImage', 'ogUrl', 'ogType', 'twitterCard', 'twitterTitle', 'twitterDescription', 'h1', 'severity']
  fs.writeFileSync(process.argv[3], [head.join(','), ...rows.map((r) => head.map((h) => esc(r[h] ?? '')).join(','))].join('\n'))
}
