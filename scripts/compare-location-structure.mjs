/**
 * Structural parity check for two built location pages.
 *
 * Compares the markup structure inside <main> of two static-export HTML
 * files while ignoring text, hrefs, alt text and image src. It enforces the
 * uniformity rule for municipality pages: a page may differ from the
 * reference only in copy, data, links and which image slots have a photo.
 *
 *   node scripts/compare-location-structure.mjs <reference.html> <candidate.html>
 *   node scripts/compare-location-structure.mjs <reference.html> <candidate.html>  *     --allow-extra-section reviews
 *   node scripts/compare-location-structure.mjs <reference.html> <candidate.html>  *     --allow-missing-section reviews --allow-missing-section age
 *   node scripts/compare-location-structure.mjs \
 *     /path/to/reference-out/st-louis-mo/chesterfield/index.html \
 *     out/st-louis-mo/ballwin/index.html
 *
 * Checks:
 *   a. ordered top-level section ids and tags
 *   b. each section's class list (surface classes shown separately)
 *   c. heading levels (h1-h4) per section
 *   d. component markers: data-* attribute names and the class signature
 *      of every element that carries one
 *   e. counts of images, links, list items, table rows and form fields
 *   f. the set of distinct class tokens (candidate must be a subset)
 *
 * Counts of list items and table rows inside the sections named in
 * COUNT_TOLERANT_SECTIONS, and image counts, are reported as allowed
 * differences. Everything else is a failure. Exits 1 on any failure.
 */
import fs from 'node:fs'

// Sections whose list, table and link counts are data (program terms, panel
// links, FAQ length, source list, MSD project links in the sewer explainer), so a
// different count is not a layout change.
const COUNT_TOLERANT_SECTIONS = new Set(['key-takeaways', 'age', 'how-system', 'who-to-call', 'city-program', 'faq', 'sources'])
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr', 'path', 'circle', 'rect'])

const rawArgs = process.argv.slice(2)
// `--allow-extra-section <id>`: the candidate may carry one top-level section the
// reference lacks (St. Charles adds `reviews`). Its position, classes and tokens
// are left out of the comparison; every other section is still compared exactly.
const allowExtra = new Set()
// `--allow-missing-section <id>`: the reference may carry a top-level section the
// candidate lacks. Only `reviews` and `age` are accepted (the San Diego city page has
// neither review figures nor housing-age data). The section is left out of the
// reference's order and per-section checks; the reference's class tokens still count,
// so the candidate must remain a subset of them.
const ALLOWED_MISSING = new Set(['reviews', 'age'])
const allowMissing = new Set()
const positional = []
for (let i = 0; i < rawArgs.length; i += 1) {
  if (rawArgs[i] === '--allow-extra-section') allowExtra.add(rawArgs[(i += 1)])
  else if (rawArgs[i] === '--allow-missing-section') {
    const value = rawArgs[(i += 1)]
    if (!ALLOWED_MISSING.has(value)) {
      console.error('--allow-missing-section accepts only: ' + [...ALLOWED_MISSING].join(', '))
      process.exit(2)
    }
    allowMissing.add(value)
  }
  else positional.push(rawArgs[i])
}
const [refPath, candPath] = positional
if (!refPath || !candPath) {
  console.error('usage: node scripts/compare-location-structure.mjs <reference.html> <candidate.html>')
  process.exit(2)
}

/* ---- Minimal HTML parser ---- */
function parse(html) {
  const clean = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<!--[\s\S]*?-->/g, '')
  const root = { tag: '#root', attrs: {}, children: [] }
  const stack = [root]
  const re = /<(\/?)([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g
  let m
  while ((m = re.exec(clean))) {
    const [, close, rawTag, rawAttrs] = m
    const tag = rawTag.toLowerCase()
    if (close) {
      for (let i = stack.length - 1; i > 0; i -= 1) {
        if (stack[i].tag === tag) {
          stack.length = i
          break
        }
      }
      continue
    }
    const attrs = {}
    for (const a of rawAttrs.matchAll(/([a-zA-Z_:][\w:.-]*)(?:=(?:"([^"]*)"|'([^']*)'))?/g)) {
      attrs[a[1]] = a[2] ?? a[3] ?? ''
    }
    const node = { tag, attrs, children: [] }
    stack[stack.length - 1].children.push(node)
    if (!VOID.has(tag) && !/\/\s*$/.test(rawAttrs)) stack.push(node)
  }
  return root
}

const find = (n, tag) => {
  if (n.tag === tag) return n
  for (const c of n.children) {
    const r = find(c, tag)
    if (r) return r
  }
  return null
}
const walk = (n, fn) => {
  fn(n)
  n.children.forEach((c) => walk(c, fn))
}
const classes = (n) => (n.attrs.class ?? '').split(/\s+/).filter(Boolean)
const isSurface = (c) => /^(bg|text)-/.test(c) && !/^text-(xs|sm|base|lg|xl|[2-9]xl|h\d|body|left|center|right|balance|pretty|wrap|nowrap|ellipsis|clip)/.test(c)

/* ---- Section extraction ---- */
function sectionsOf(file, skip = new Set(), omit = new Set()) {
  const main = find(parse(fs.readFileSync(file, 'utf8')), 'main')
  if (!main) throw new Error(`no <main> in ${file}`)
  // Descend through single-child wrappers so the sections are the top level.
  let host = main
  while (host.children.length === 1 && host.children[0].tag !== 'section') host = host.children[0]
  const keyOf = (n, i) => {
    let firstId
    walk(n, (x) => {
      if (!firstId && x.attrs.id) firstId = x.attrs.id
    })
    return n.attrs.id ?? firstId ?? `#${i}`
  }
  const skipped = new Set(host.children.filter((n, i) => skip.has(keyOf(n, i))))
  const tokens = new Set()
  const collect = (n) => {
    if (skipped.has(n)) return
    classes(n).forEach((c) => tokens.add(c))
    n.children.forEach(collect)
  }
  collect(main)
  const omitted = new Set(host.children.filter((n, i) => omit.has(keyOf(n, i))))
  const sections = host.children.filter((n) => !skipped.has(n) && !omitted.has(n)).map((n, i) => {
    const counts = { img: 0, a: 0, li: 0, tr: 0, field: 0 }
    const headings = []
    const markers = []
    walk(n, (x) => {
      if (x.tag === 'img') counts.img += 1
      if (x.tag === 'a') counts.a += 1
      if (x.tag === 'li') counts.li += 1
      if (x.tag === 'tr') counts.tr += 1
      if (['input', 'select', 'textarea'].includes(x.tag)) counts.field += 1
      if (/^h[1-4]$/.test(x.tag)) headings.push(x.tag)
      // Images are left out of the marker check: whether a slot has a photo is
      // already reported (and allowed) through the image counts below.
      const data = Object.keys(x.attrs).filter((k) => k.startsWith('data-'))
      if (data.length > 0 && x.tag !== 'img') markers.push(`${x.tag}[${data.sort().join(',')}] .${classes(x).sort().join('.')}`)
    })
    const cls = classes(n)
    // The anchor id is often on a child, so fall back to the first descendant id.
    let firstId
    walk(n, (x) => {
      if (!firstId && x.attrs.id) firstId = x.attrs.id
    })
    return {
      key: n.attrs.id ?? firstId ?? `#${i}`,
      tag: n.tag,
      classes: cls.filter((c) => !isSurface(c)).sort().join(' '),
      surface: cls.filter(isSurface).sort().join(' '),
      headings: headings.join(','),
      markers: markers.join(' | '),
      counts,
    }
  })
  return { sections, tokens }
}

const ref = sectionsOf(refPath, new Set(), allowMissing)
const cand = sectionsOf(candPath, allowExtra)
if (allowExtra.size > 0) console.log(`NOTE  candidate section(s) left out of the comparison by --allow-extra-section: ${[...allowExtra].join(', ')}`)

if (allowMissing.size > 0) console.log(`NOTE  reference section(s) left out of the comparison by --allow-missing-section: ${[...allowMissing].join(', ')}`)

let failures = 0
const allowed = []
const fail = (msg) => {
  failures += 1
  console.log(`FAIL  ${msg}`)
}

/* a. order of ids and tags */
const order = (s) => s.sections.map((x) => `${x.tag}#${x.key}`).join(' > ')
if (order(ref) === order(cand)) console.log('PASS  section order, ids and tags identical')
else {
  fail('section order, ids or tags differ')
  console.log(`  reference: ${order(ref)}`)
  console.log(`  candidate: ${order(cand)}`)
}

/* b-e. per section */
const byKey = new Map(ref.sections.map((s) => [s.key, s]))
for (const c of cand.sections) {
  const r = byKey.get(c.key)
  if (!r) continue
  // In a count-tolerant section a different NUMBER of same-level headings (a fifth
  // step, one more panel) is data, so headings compare with consecutive repeats
  // collapsed there. The level sequence itself must still match.
  const collapse = (h) => h.split(',').filter((v, i, a) => v !== a[i - 1]).join(',')
  for (const field of ['classes', 'surface', 'headings', 'markers']) {
    if (field === 'headings' && COUNT_TOLERANT_SECTIONS.has(c.key) && r.headings !== c.headings && collapse(r.headings) === collapse(c.headings)) {
      allowed.push(`section ${c.key}: heading count ${r.headings.split(',').length} (reference) vs ${c.headings.split(',').length} (candidate), same level sequence`)
      continue
    }
    if (r[field] !== c[field]) {
      fail(`section ${c.key}: ${field} differ`)
      console.log(`  reference: ${r[field]}`)
      console.log(`  candidate: ${c[field]}`)
    }
  }
  for (const k of Object.keys(c.counts)) {
    if (r.counts[k] === c.counts[k]) continue
    const tolerant = k === 'img' || (COUNT_TOLERANT_SECTIONS.has(c.key) && ['li', 'tr', 'a'].includes(k))
    const msg = `section ${c.key}: ${k} count ${r.counts[k]} (reference) vs ${c.counts[k]} (candidate)`
    if (tolerant) allowed.push(msg)
    else fail(msg)
  }
}
if (failures === 0) console.log('PASS  class lists, surface sequence, heading levels, component markers identical')

/* f. class token subset */
const extra = [...cand.tokens].filter((t) => !ref.tokens.has(t))
if (extra.length === 0) console.log(`PASS  candidate class tokens are a subset of the reference (${cand.tokens.size} of ${ref.tokens.size})`)
else fail(`candidate uses class tokens the reference does not: ${extra.join(' ')}`)

if (allowed.length > 0) {
  console.log('\nAllowed differences (counts in tolerant sections, image presence):')
  allowed.forEach((m) => console.log(`  ${m}`))
}
console.log(failures === 0 ? '\nStructure matches the reference.' : `\n${failures} structural difference(s).`)
process.exit(failures === 0 ? 0 : 1)
