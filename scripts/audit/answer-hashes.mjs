/**
 * Hash of every visible FAQ answer text (route + question), to count how many answers changed
 * between two builds.  node scripts/audit/answer-hashes.mjs [out-dir] > hashes.json
 */
import crypto from 'node:crypto'
import path from 'node:path'
import { buildGraph } from '../lib/link-graph.mjs'
import { runFaqAudit } from './faq-audit.mjs'

const root = path.resolve(process.argv[2] ?? 'out')
const F = runFaqAudit(buildGraph(root), root)
const out = {}
for (const a of F.answers) out[`${a.url}|${a.q}`] = crypto.createHash('sha1').update(a.text).digest('hex').slice(0, 10)
process.stdout.write(JSON.stringify(out))
