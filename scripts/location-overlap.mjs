/**
 * Copy overlap between built location pages.
 *
 * Reads the static export in `out/` (run `npm run build` first) or a live build
 * (`--origin https://...`). No dependencies: a small hand-written tokenizer reads
 * the built HTML.
 *
 *   node scripts/location-overlap.mjs /las-vegas-nv/henderson/ /las-vegas-nv/las-vegas/
 *   node scripts/location-overlap.mjs --all /las-vegas-nv/henderson/
 *   node scripts/location-overlap.mjs /a/ /b/ --keep second-opinion --json
 *
 * ---------------------------------------------------------------------------
 * STANDARD METHOD (the default; every report should quote this number)
 * ---------------------------------------------------------------------------
 * Text: the built <main> text only, lower-cased, entities decoded, curly quotes
 * folded to straight, image-slot placeholder boxes ignored.
 *
 * Removed before comparing (modules shared by design across location pages):
 *   services       the service-cards section
 *   request        the hero request card (id="request") and every <form>
 *   second-opinion the independent second-opinion section
 *   areas          the nearby-areas section
 *   cta            the final-CTA section (heading, copy and its form)
 *   reviews        the reviews block, when a page has one
 *   sources        the Sources list and the last-reviewed line
 * Everything else stays, including the key takeaways, the trust strip, the FAQ
 * and the company panel. Use `--keep <module>` (repeatable) to retain one.
 *
 * Metric: containment of page A's n-word shingles in page B, that is the share
 * of A's distinct shingles that also occur in B. Printed for n = 5 and n = 8.
 *
 * Shared runs: the longest runs of words common to both pages (greedy, no word
 * used twice), each with the section it sits in on both pages. A section is the
 * outermost <section> element, named by its aria-labelledby (the hero section,
 * which has none, is "hero"). Text outside any section takes the label of the
 * section before it. Runs are measured on the pages after the removal set, so a
 * run never sits in a removed module.
 */
import fs from 'node:fs'
import path from 'node:path'

const MODULES = ['services', 'request', 'second-opinion', 'areas', 'cta', 'reviews', 'sources']
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])

/* ---------------------------------- args ---------------------------------- */
const argv = process.argv.slice(2)
const flag = (name) => argv.includes(name)
const opt = (name, fallback) => {
  const i = argv.indexOf(name)
  return i > -1 ? argv[i + 1] : fallback
}
const keep = new Set()
argv.forEach((a, i) => {
  if (a === '--keep') keep.add(argv[i + 1])
})
for (const k of keep) if (!MODULES.includes(k)) fail(`--keep ${k}: unknown module. Use one of ${MODULES.join(', ')}`)
const valueFlags = new Set(['--keep', '--origin', '--out', '--top', '--threshold'])
const positional = argv.filter((a, i) => !a.startsWith('--') && !valueFlags.has(argv[i - 1]))
const OUT = path.resolve(opt('--out', 'out'))
const ORIGIN = opt('--origin', undefined)?.replace(/\/+$/, '')
const TOP = Number(opt('--top', 15))
const THRESHOLD = Number(opt('--threshold', 35))
const JSON_OUT = flag('--json')
const ALL = flag('--all')

function fail(message) {
  console.error(message)
  process.exit(1)
}

/* ------------------------------- page loading ------------------------------ */
async function loadHtml(route) {
  if (ORIGIN) {
    const res = await fetch(ORIGIN + route)
    if (!res.ok) fail(`${ORIGIN + route}: HTTP ${res.status}`)
    return res.text()
  }
  const file = path.join(OUT, route, 'index.html')
  if (!fs.existsSync(file)) fail(`${file} not found (run npm run build first)`)
  return fs.readFileSync(file, 'utf8')
}

function listLocationRoutes() {
  const routes = []
  for (const market of fs.readdirSync(OUT)) {
    if (!/-(mo|ca|nv)$/.test(market)) continue
    const dir = path.join(OUT, market)
    for (const child of fs.readdirSync(dir)) {
      const file = path.join(dir, child, 'index.html')
      if (!fs.existsSync(file)) continue
      const html = fs.readFileSync(file, 'utf8')
      // A rich location page has the section anchors this script reads.
      if (html.includes('aria-labelledby="how-system"') || html.includes('aria-labelledby="responsible"')) {
        routes.push(`/${market}/${child}/`)
      }
    }
  }
  return routes
}

/* -------------------------------- tokenizer -------------------------------- */
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', ldquo: '"', rdquo: '"' }
function decode(text) {
  let out = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== '&') {
      out += text[i]
      continue
    }
    const end = text.indexOf(';', i)
    if (end === -1 || end - i > 10) {
      out += '&'
      continue
    }
    const name = text.slice(i + 1, end)
    let rep
    if (name[0] === '#') {
      const code = name[1] === 'x' || name[1] === 'X' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10)
      rep = Number.isNaN(code) ? undefined : String.fromCodePoint(code)
    } else rep = ENTITIES[name]
    if (rep === undefined) out += '&'
    else {
      out += rep
      i = end
    }
  }
  return out
}

/** Reads one tag starting at html[i] === '<'. Returns { name, closing, selfClosing, attrs, end }. */
function readTag(html, i) {
  let j = i + 1
  const closing = html[j] === '/'
  if (closing) j++
  let name = ''
  while (j < html.length && /[A-Za-z0-9:-]/.test(html[j])) name += html[j++]
  const attrs = {}
  while (j < html.length && html[j] !== '>') {
    if (/\s/.test(html[j]) || html[j] === '/') {
      j++
      continue
    }
    let key = ''
    while (j < html.length && !/[\s=>/]/.test(html[j])) key += html[j++]
    let value = ''
    if (html[j] === '=') {
      j++
      if (html[j] === '"' || html[j] === "'") {
        const quote = html[j++]
        const stop = html.indexOf(quote, j)
        value = html.slice(j, stop)
        j = stop + 1
      } else {
        while (j < html.length && !/[\s>]/.test(html[j])) value += html[j++]
      }
    }
    if (key) attrs[key.toLowerCase()] = value
  }
  const selfClosing = html[j - 1] === '/'
  return { name: name.toLowerCase(), closing, selfClosing, attrs, end: j + 1 }
}

function skipPast(html, i, closeTag) {
  const stop = html.toLowerCase().indexOf(closeTag, i)
  return stop === -1 ? html.length : stop + closeTag.length
}

/**
 * Returns [{ word, section }] for the <main> text, after the removal set.
 * `section` is the outermost <section>'s aria-labelledby ("hero" when absent).
 */
function tokenize(html, removed) {
  const start = html.indexOf('<main')
  const stop = html.indexOf('</main>')
  if (start === -1 || stop === -1) fail('no <main> found')
  const main = html.slice(start, stop)
  const words = []
  const stack = [] // { name, drop }
  let sectionDepth = 0
  let section = 'header'
  let dropDepth = 0 // > 0 while inside a dropped subtree
  const dropAt = [] // stack depths at which a drop began

  let i = 0
  let text = ''
  const flush = () => {
    if (text !== '' && dropDepth === 0) {
      const folded = decode(text).toLowerCase().replaceAll('’', "'").replaceAll('‘', "'")
      for (const raw of folded.split(/[^a-z0-9'.,-]+/)) {
        const w = raw.replace(/^[.,-]+|[.,-]+$/g, '')
        if (w !== '') words.push({ word: w, section })
      }
    }
    text = ''
  }
  while (i < main.length) {
    if (main[i] !== '<') {
      text += main[i++]
      continue
    }
    if (main.startsWith('<!--', i)) {
      i = skipPast(main, i, '-->')
      continue
    }
    flush()
    const tag = readTag(main, i)
    i = tag.end
    if (tag.closing) {
      // pop to the matching element
      for (let k = stack.length - 1; k >= 0; k--) {
        if (stack[k].name === tag.name) {
          while (stack.length > k) {
            const el = stack.pop()
            if (el.name === 'section' && stack.every((s) => s.name !== 'section')) sectionDepth = 0
            if (dropAt.length > 0 && dropAt[dropAt.length - 1] === stack.length) {
              dropAt.pop()
              dropDepth = dropAt.length
            }
          }
          break
        }
      }
      continue
    }
    if (tag.name === 'script' || tag.name === 'style') {
      i = skipPast(main, i, `</${tag.name}>`)
      continue
    }
    const isVoid = VOID.has(tag.name) || tag.selfClosing
    let label
    if (tag.name === 'section' && sectionDepth === 0) {
      label = tag.attrs['aria-labelledby'] ?? tag.attrs.id ?? 'hero'
      section = label
      sectionDepth = 1
    }
    // Decide whether this element starts a dropped subtree.
    const moduleName = label !== undefined && MODULES.includes(label) ? label : undefined
    const cls = tag.attrs.class ?? ''
    const drop =
      (moduleName !== undefined && removed.has(moduleName)) ||
      (tag.attrs.id === 'request' && removed.has('request')) ||
      (tag.name === 'form' && removed.has('request')) ||
      cls.includes('border-dashed') // image-slot placeholder boxes
    if (!isVoid) {
      stack.push({ name: tag.name })
      if (drop && dropAt.length === 0) {
        dropAt.push(stack.length - 1)
        dropDepth = 1
      }
    }
  }
  flush()
  return words
}

/* --------------------------------- measures -------------------------------- */
function shingleSet(words, n) {
  const set = new Set()
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(' '))
  return set
}
function containment(a, b, n) {
  const sa = shingleSet(a.map((w) => w.word), n)
  const sb = shingleSet(b.map((w) => w.word), n)
  let hit = 0
  for (const s of sa) if (sb.has(s)) hit++
  return { a: sa.size, b: sb.size, shared: hit, percent: sa.size === 0 ? 0 : (100 * hit) / sa.size }
}

/** Longest shared runs, greedy, no word reused. */
function sharedRuns(a, b, top, minLen = 6) {
  const wa = a.map((w) => w.word)
  const wb = b.map((w) => w.word)
  const usedA = new Uint8Array(wa.length)
  const usedB = new Uint8Array(wb.length)
  const runs = []
  for (let r = 0; r < top; r++) {
    let best = 0
    let bi = 0
    let bj = 0
    let prev = new Int32Array(wb.length + 1)
    for (let i = 1; i <= wa.length; i++) {
      const cur = new Int32Array(wb.length + 1)
      for (let j = 1; j <= wb.length; j++) {
        if (wa[i - 1] === wb[j - 1] && !usedA[i - 1] && !usedB[j - 1]) {
          cur[j] = prev[j - 1] + 1
          if (cur[j] > best) {
            best = cur[j]
            bi = i
            bj = j
          }
        }
      }
      prev = cur
    }
    if (best < minLen) break
    const sa = bi - best
    const sb = bj - best
    for (let k = 0; k < best; k++) {
      usedA[sa + k] = 1
      usedB[sb + k] = 1
    }
    runs.push({ words: best, sectionA: a[sa].section, sectionB: b[sb].section, text: wa.slice(sa, sa + best).join(' ') })
  }
  return runs
}

/* ----------------------------------- main ---------------------------------- */
const removed = new Set(MODULES.filter((m) => !keep.has(m)))
const removedList = [...removed].join(', ')

async function pageWords(route) {
  return tokenize(await loadHtml(route), removed)
}

async function comparePair(routeA, routeB, withRuns) {
  const [a, b] = [await pageWords(routeA), await pageWords(routeB)]
  const c5 = containment(a, b, 5)
  const c8 = containment(a, b, 8)
  return {
    a: routeA,
    b: routeB,
    wordsA: a.length,
    wordsB: b.length,
    containment5: +c5.percent.toFixed(1),
    containment8: +c8.percent.toFixed(1),
    shingles5: { a: c5.a, b: c5.b, shared: c5.shared },
    runs: withRuns ? sharedRuns(a, b, TOP) : undefined,
  }
}

if (positional.length === 0) {
  fail('usage: node scripts/location-overlap.mjs <routeA> <routeB> | --all <routeA>  [--keep module] [--json] [--origin url] [--out dir] [--top n] [--threshold pct]')
}
const results = []
if (ALL) {
  if (ORIGIN) fail('--all reads the local export; omit --origin')
  const base = positional[0]
  for (const route of listLocationRoutes()) {
    if (route === base) continue
    const r = await comparePair(base, route, false)
    if (r.containment5 > THRESHOLD) r.runs = sharedRuns(await pageWords(base), await pageWords(route), 10)
    results.push(r)
  }
} else {
  if (positional.length < 2) fail('give two routes, or use --all <route>')
  results.push(await comparePair(positional[0], positional[1], true))
}

if (JSON_OUT) {
  console.log(JSON.stringify({ removed: [...removed], kept: [...keep], threshold: THRESHOLD, results }, null, 2))
} else {
  console.log(`Removal set: ${removedList || '(none)'}${keep.size ? `   kept: ${[...keep].join(', ')}` : ''}`)
  console.log('Metric: share of the first page’s distinct word shingles that also occur in the second page.\n')
  for (const r of results) {
    const mark = r.containment5 > THRESHOLD ? '  <-- above ' + THRESHOLD + '%' : ''
    console.log(`${r.a}  in  ${r.b}   5-word ${r.containment5}%   8-word ${r.containment8}%   (${r.wordsA} / ${r.wordsB} words)${mark}`)
    if (r.runs) {
      console.log(`  Longest shared runs (${r.runs.length}):`)
      r.runs.forEach((run, n) => {
        const words = run.text.split(' ')
        const preview = words.length > 16 ? `${words.slice(0, 16).join(' ')} ...` : run.text
        console.log(`  ${String(n + 1).padStart(2)}. ${String(run.words).padStart(3)} words | ${run.sectionA} / ${run.sectionB} | ${preview}`)
      })
    }
  }
}
