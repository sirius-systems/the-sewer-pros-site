#!/usr/bin/env node
/**
 * Image bytes a phone downloads for a page, computed from the built HTML in out/.
 *
 *   node scripts/measure-mobile-bytes.mjs [--width=390] [--dpr=2] [/ /st-louis-mo/ ...]
 *
 * For every <img> it evaluates `sizes` at the viewport width, multiplies by the
 * device pixel ratio, and picks the smallest srcset candidate at least that wide
 * (the largest if none is), the way a browser does. Without srcset the single
 * `src` is used. "Eager" is images not marked loading=lazy (fetched on load);
 * "all" adds the lazy ones (a full scroll). It does not know which images CSS hides
 * at this width, so both columns slightly over-count, equally before and after.
 *
 * The "single src" column ignores srcset, which is what the site served before the
 * variants existed; the "srcset" column is what it serves now. The "pre-audit" column
 * uses the file sizes at commit 04fdf9d (before the recompression) with a single src.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { auditPage, fileFacts, resolveSrc } from './lib/image-audit.mjs'

const arg = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3) ?? d
const VW = +arg('width', 390)
const DPR = +arg('dpr', 2)
const PRE = '04fdf9d'
const pages = process.argv.slice(2).filter((a) => a.startsWith('/'))
const OUT = 'out'

function cssWidth(sizes, fill, widthAttr) {
  const s = sizes || (fill ? '100vw' : null)
  if (!s) return widthAttr ? Math.min(+widthAttr, VW) : VW
  for (const part of s.split(',')) {
    const m = part.trim().match(/^(?:\(min-width:\s*(\d+)px\)\s*)?(.+)$/)
    if (!m) continue
    if (m[1] && VW < +m[1]) continue
    const v = m[2].trim()
    let w = v.match(/^([\d.]+)vw$/) ? (+RegExp.$1 / 100) * VW : v.match(/^([\d.]+)px$/) ? +RegExp.$1 : v.match(/^([\d.]+)rem$/) ? +RegExp.$1 * 16 : VW
    return Math.min(w, VW)
  }
  return VW
}

const preSize = (publicPath) => {
  try { return +execSync(`git cat-file -s ${PRE}:public${publicPath}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString() } catch { return null }
}

function measure(url) {
  const file = path.join(OUT, url, 'index.html')
  const pg = auditPage(file, OUT)
  const r = { url, eager: { pre: 0, single: 0, srcset: 0 }, all: { pre: 0, single: 0, srcset: 0 }, images: 0 }
  for (const i of pg.images) {
    if (i.kind !== 'img' || !i.src) continue
    const abs = resolveSrc(i.src, OUT)
    if (!abs.path) continue
    const single = fileFacts(abs.path).bytes ?? 0
    const pre = preSize(abs.publicPath) ?? single
    let chosen = single
    if (i.srcset) {
      const need = cssWidth(i.sizes, i.fill, i.width) * DPR
      const cands = i.srcset.split(',').map((x) => x.trim().split(/\s+/)).filter((c) => c[1]).map((c) => ({ url: c[0], w: parseInt(c[1], 10) })).sort((a, b) => a.w - b.w)
      const pick = cands.find((c) => c.w >= need) ?? cands[cands.length - 1]
      if (pick) chosen = fileFacts(resolveSrc(pick.url, OUT).path).bytes ?? single
    }
    r.images++
    const lazy = i.loading === 'lazy'
    for (const bucket of lazy ? [r.all] : [r.all, r.eager]) { bucket.pre += pre; bucket.single += single; bucket.srcset += chosen }
  }
  return r
}

const kb = (n) => `${Math.round(n / 1024).toLocaleString('en-US')} KB`
console.log(`Viewport ${VW}px, DPR ${DPR}\n`)
console.log('| Page | Images | Eager: pre-audit | single src | srcset | Full scroll: pre-audit | single src | srcset |')
console.log('|---|---|---|---|---|---|---|---|')
for (const u of pages) {
  const m = measure(u)
  console.log(`| ${u} | ${m.images} | ${kb(m.eager.pre)} | ${kb(m.eager.single)} | ${kb(m.eager.srcset)} | ${kb(m.all.pre)} | ${kb(m.all.single)} | ${kb(m.all.srcset)} |`)
}
