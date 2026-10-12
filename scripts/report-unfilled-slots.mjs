#!/usr/bin/env node
/**
 * Post-build report of pages with unfilled image slots. Runs automatically
 * after `npm run build` (the `postbuild` script). It never fails the build:
 * every path ends in exit code 0.
 *
 * LAUNCH_MODE false (lib/launch.ts): placeholders are drawn in out/, so the
 * list comes straight from the build and is logged as a WARNING.
 *
 * LAUNCH_MODE true: unfilled slots render nothing, so out/ has no boxes to
 * count. The script renders a throwaway copy of the site with the placeholders
 * switched on (NEXT_PUBLIC_SLOT_AUDIT=1, written to .slot-audit/), counts that,
 * logs the same list as an ERROR message, and deletes the copy. The real out/
 * is left untouched. This roughly doubles the build time of a launch build.
 *
 * Set REPORT_UNFILLED_SLOTS=skip to skip the report (for example in CI that
 * only needs the build). The log lists every page with its count and a total.
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { readPages, summarize } from './lib/placeholder-count.mjs'

const OUT = 'out'
const AUDIT_DIR = '.slot-audit'

if (process.env.REPORT_UNFILLED_SLOTS === 'skip') process.exit(0)

const launchSource = fs.existsSync('lib/launch.ts') ? fs.readFileSync('lib/launch.ts', 'utf8') : ''
const launchMode = /export const LAUNCH_MODE\s*=\s*true\b/.test(launchSource)

const log = (level, s) => (level === 'error' ? console.error(s) : console.warn(s))

function report(level, label, summary, extra) {
  log(level, '')
  log(level, `${label}: ${summary.totalBoxes} unfilled image slots on ${summary.pagesWithBoxes} of ${summary.pagesInBuild} pages.${extra ?? ''}`)
  for (const row of summary.list) log(level, `  ${String(row.count).padStart(3)}  ${row.route}`)
  log(level, `  ${String(summary.totalBoxes).padStart(3)}  TOTAL`)
  log(level, '')
}

try {
  if (!launchMode) {
    if (!fs.existsSync(OUT)) process.exit(0)
    const summary = summarize(readPages(OUT))
    if (summary.totalBoxes === 0) {
      console.log('Unfilled image slots: none drawn in this build.')
    } else {
      report('warn', 'WARNING (build continues)', summary, ' LAUNCH_MODE is false, so these placeholders are visible on the pages.')
    }
  } else {
    const realOut = fs.existsSync(OUT) ? summarize(readPages(OUT)) : undefined
    const env = { ...process.env, NEXT_PUBLIC_SLOT_AUDIT: '1', NEXT_DIST_DIR: AUDIT_DIR, REPORT_UNFILLED_SLOTS: 'skip' }
    delete env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS
    fs.rmSync(AUDIT_DIR, { recursive: true, force: true })
    const nextBin = path.join('node_modules', 'next', 'dist', 'bin', 'next')
    console.log('LAUNCH_MODE is true: rendering a throwaway copy with placeholders on to list unfilled slots...')
    const run = spawnSync(process.execPath, [nextBin, 'build'], { env, stdio: 'ignore' })
    if (run.status !== 0 || !fs.existsSync(AUDIT_DIR)) {
      console.error(`ERROR: could not render the audit copy (exit ${run.status}). The unfilled-slot list is unavailable. The build itself is not affected.`)
    } else {
      const summary = summarize(readPages(AUDIT_DIR))
      const shown = realOut === undefined ? 'unknown' : String(realOut.totalBoxes)
      report('error', 'ERROR MESSAGE (build still exits 0)', summary, ` These render nothing in out/ (boxes drawn in out/: ${shown}).`)
    }
    fs.rmSync(AUDIT_DIR, { recursive: true, force: true })
  }
} catch (err) {
  console.error(`Unfilled-slot report failed (${err instanceof Error ? err.message : String(err)}). The build itself is not affected.`)
}
process.exit(0)
