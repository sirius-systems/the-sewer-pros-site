import { Children, Fragment, cloneElement, isValidElement, type ReactNode } from 'react'
import Link from 'next/link'
import { getPage } from '@/data/pages'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import { localServicePageId } from '@/lib/links/link-plan'
import { resolveVariants } from '@/lib/links/variants'
import type { PageId } from '@/types'

/**
 * Links the first mention of a service in FAQ answers.
 *
 * Authority: docs/16-internal-linking-strategy.md section 126.
 *
 * ===========================================================================
 * THE VISIBLE TEXT IS NOT CHANGED, AND THE SCHEMA IS NOT TOUCHED
 * ===========================================================================
 * Only an existing phrase is wrapped in an anchor. The FAQPage JSON-LD is
 * built from the content's own `answer` nodes (lib/schema/faq.ts), never from
 * the linked copy this module returns, so the schema text stays plain and
 * identical to the visible words.
 *
 * Rules, all bounded:
 *   - registered service names only (plus the long form of the
 *     "Sewer Cleaning & Camera Inspection" name written with "and"), the
 *     synonym "sewer scope" (camera inspection) and registered audiences;
 *   - market names (market hub), location names (location hub), the two
 *     comparison pages, the inspection-video guide and "free second opinion"
 *     (the market contact page, or the main contact page), each under the
 *     restrictions in `blocked()` below: no cross-market links from a market
 *     page, location links only from market, resource and location pages;
 *   - on a service + location page, the link goes to that location's own
 *     service page; elsewhere (location hubs included) it goes to the core
 *     service page, which keeps a hub within its bounded set of local links;
 *   - each target is linked once per page, at most `MAX_PER_ANSWER` per answer;
 *   - never a link to the page itself, and never inside an existing link;
 *   - never inside third-party text. A phrase is not linked when it sits (a) between
 *     straight or curly double quotation marks, (b) inside a <q>, <blockquote> or
 *     <cite> element, or (c) inside an element marked `data-no-link`. Use (c) for text
 *     that reports what a city, utility or other third party says without quotation
 *     marks (for example "it says to contact a plumber or sewer cleaning contractor"):
 *     a link there would put our service name in someone else's mouth. The same rule
 *     is checked on the built HTML by scripts/verify-internal-links.mjs.
 */

const MAX_PER_ANSWER = 2

/**
 * The money pages (item 5 of the 2026-11-22 follow-up): an FAQ mention of one of these on a
 * service + location page links to the canonical service page, not to the same-location
 * sibling, so the canonical page collects the contextual links. The location-bounded sibling
 * links for these services still come from the related-links block (link-plan.ts).
 */
const MONEY_SERVICES: ReadonlySet<string> = new Set([
  'svc-pre-purchase-sewer-inspection',
  'svc-sewer-camera-inspection',
  'svc-sewer-cleaning-camera-inspection',
])

/** Longest phrase first, so "sewer cleaning and camera inspection" wins over "sewer cleaning". */
const PHRASES: readonly { re: RegExp; serviceId: string }[] = [
  // Audiences named by their registered page (09 audience matrix). `serviceId`
  // is the page id here; audience links never switch to a local page.
  { re: /real estate agents?/i, serviceId: 'aud-real-estate-agents' },
  { re: /home inspectors?/i, serviceId: 'aud-home-inspectors' },
  { re: /home buyers?/i, serviceId: 'aud-home-buyers' },
  { re: /property managers?/i, serviceId: 'aud-property-managers' },
  { re: /sewer cleaning (?:&|and) camera inspection/i, serviceId: 'svc-sewer-cleaning-camera-inspection' },
  { re: /(?<!sewer )cleaning (?:&|and) camera inspection/i, serviceId: 'svc-sewer-cleaning-camera-inspection' },
  // A second opinion on an existing report or video is the dedicated second opinion page (DEC-151).
  { re: /second opinion on (?:an? |another company.s )?(?:inspection )?(?:report|video)/i, serviceId: 'svc-independent-sewer-second-opinion' },
  // Other second-opinion language points to the independent-inspection comparison, never to a repair page.
  { re: /(?<!free )(?:independent )?second opinion/i, serviceId: 'cmp-independent-vs-repair' },
  { re: /pre-purchase (?:sewer )?inspection|sewer (?:inspection|scope) before (?:you buy|closing|buying)/i, serviceId: 'svc-pre-purchase-sewer-inspection' },
  { re: /recurring sewer backup diagnosis/i, serviceId: 'svc-recurring-sewer-backup-diagnosis' },
  { re: /preventative sewer maintenance/i, serviceId: 'svc-preventative-sewer-maintenance' },
  { re: /sewer camera inspection/i, serviceId: 'svc-sewer-camera-inspection' },
  { re: /(?:sewer )?line locating|locating the (?:sewer )?line/i, serviceId: 'svc-sewer-line-locating' },
  // "Sewer scope" is the everyday name for the camera inspection (06 registry aliases).
  { re: /sewer scope/i, serviceId: 'svc-sewer-camera-inspection' },
  { re: /hydro jetting (?:vs\.?|versus) (?:sewer )?snaking/i, serviceId: 'cmp-hydro-vs-snaking' },
  { re: /independent (?:sewer )?inspection (?:vs\.?|versus) (?:a )?repair company/i, serviceId: 'cmp-independent-vs-repair' },
  { re: /inspection video/i, serviceId: 'res-read-video' },
  { re: /free second opinion/i, serviceId: 'cta-second-opinion' },
  { re: /hydro[ -]jetting|water jetting|sewer jetting/i, serviceId: 'svc-hydro-jetting' },
  { re: /drain[ -](?:line )?cleaning|drain clearing|cleaning a drain line/i, serviceId: 'svc-drain-cleaning' },
  { re: /sewer (?:line )?cleaning|cleaning (?:of )?the sewer line/i, serviceId: 'svc-sewer-cleaning' },
  // Geography. A market is named by its hub; "St. Louis City" and "St. Louis County" are not the market.
  // "City of X" names the municipality and its sewer department, not our service market, so it is not linked.
  { re: /(?<!City of )St\. Louis(?! City| County)/, serviceId: 'market-st-louis-mo' },
  { re: /(?<!City of )San Diego(?! County (?:Water|Sheriff|Board|Health))/, serviceId: 'market-san-diego-ca' },
  { re: /(?<!City of |North )Las Vegas/, serviceId: 'market-las-vegas-nv' },
  { re: /St\. Louis City/, serviceId: 'loc-stl-st-louis-city' },
  { re: /Chesterfield/, serviceId: 'loc-stl-chesterfield' },
  { re: /Ballwin/, serviceId: 'loc-stl-ballwin' },
  { re: /Florissant/, serviceId: 'loc-stl-florissant' },
  { re: /St\. Charles(?! County)/, serviceId: 'loc-stl-st-charles' },
  { re: /San Marcos/, serviceId: 'loc-sd-san-marcos' },
  { re: /Carlsbad/, serviceId: 'loc-sd-carlsbad' },
  { re: /Escondido/, serviceId: 'loc-sd-escondido' },
  { re: /Oceanside/, serviceId: 'loc-sd-oceanside' },
  { re: /Chula Vista/, serviceId: 'loc-sd-chula-vista' },
  { re: /Mission Valley/, serviceId: 'loc-sd-mission-valley' },
  { re: /North Las Vegas/, serviceId: 'loc-lv-north-las-vegas' },
  { re: /Henderson/, serviceId: 'loc-lv-henderson' },
  { re: /Summerlin/, serviceId: 'loc-lv-summerlin' },
]

/**
 * Anchor variety (docs/16 anchor rules). The same shared answer is linked from
 * many pages, so one fixed phrase would put the identical exact-match anchor
 * on a target hundreds of times. Where the sentence allows it, the anchor is
 * one of a few natural spans of the SAME words: the phrase itself, a shorter
 * form that still names the service, the phrase with its determiner ("a sewer
 * camera inspection") or the phrase with a following service noun ("hydro
 * jetting service"). The visible text never changes, only how much of it is
 * the link. The choice is a hash of the surrounding words, so it is stable
 * between builds and differs between answers.
 */
const SHORT_FORM: Readonly<Record<string, RegExp>> = {
  'svc-sewer-camera-inspection': /camera inspection$/i,
  'svc-sewer-line-locating': /line locating$/i,
  'svc-sewer-cleaning-camera-inspection': /camera inspection$/i,
}
const FOLLOWING_NOUN = /^ (?:service|services|visit|appointment|option)\b/i
const MARKET_FOLLOWING = /^ (?:area|metro area|market|Valley|County)\b/
const DETERMINER = /\b(?:a|an|your|our|regular|routine|annual|scheduled|full|basic) $/i

/**
 * Sentences that name three or more registered services are lists ("Services
 * include X, Y, Z and W"). Linking only the first one or two items of a list
 * reads as arbitrary and stacks exact-name anchors, so list sentences carry no
 * links; the service cards and the services hub link every item.
 */
function listRanges(text: string): [number, number][] {
  const ranges: [number, number][] = []
  const sentence = /[^.?!]+(?:\b(?:St|vs|Mt|Dr)\.[^.?!]*)*[.?!]?/g
  let m: RegExpExecArray | null
  while ((m = sentence.exec(text)) !== null) {
    if (m[0].length === 0) break
    const hits = new Set<string>()
    for (const p of PHRASES) if (p.serviceId.startsWith('svc-') && new RegExp(p.re.source, p.re.flags.replace('g', '')).test(m[0])) hits.add(p.serviceId)
    // "sewer cleaning and camera inspection" also contains two shorter names; count it once.
    if (hits.size >= 3) ranges.push([m.index, m.index + m[0].length])
  }
  return ranges
}

function hashOf(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

function anchorSpan(text: string, index: number, length: number, key: string): { index: number; length: number } {
  const phrase = text.slice(index, index + length)
  const candidates: { index: number; length: number }[] = [{ index, length }]
  const short = SHORT_FORM[key]
  const sm = short?.exec(phrase)
  if (sm !== undefined && sm !== null) candidates.push({ index: index + sm.index, length: sm[0].length })
  if (key.startsWith('svc-')) {
    const before = DETERMINER.exec(text.slice(0, index))
    if (before !== null) candidates.push({ index: index - before[0].length, length: length + before[0].length })
    const after = FOLLOWING_NOUN.exec(text.slice(index + length))
    if (after !== null) candidates.push({ index, length: length + after[0].length })
  }
  if (key.startsWith('market-')) {
    const after = MARKET_FOLLOWING.exec(text.slice(index + length))
    if (after !== null) candidates.push({ index, length: length + after[0].length })
  }
  if (candidates.length === 1) return candidates[0]
  const seed = text.slice(Math.max(0, index - 24), index + length + 24) + key
  return candidates[hashOf(seed) % candidates.length]
}

/** Elements whose text is someone else's words (see the header comment). */
const QUOTE_TAGS: ReadonlySet<string> = new Set(['q', 'blockquote', 'cite'])

/** Ranges of text between double quotation marks, straight or curly. */
function quoteRanges(text: string): [number, number][] {
  return [...text.matchAll(/"[^"]*"|\u201c[^\u201d]*\u201d/g)].map((m) => [m.index as number, (m.index as number) + m[0].length] as [number, number])
}

const MARKET_RES = PHRASES.filter((p) => p.serviceId.startsWith('market-')).map((p) => p.re)

/** Plain text of an answer, for deciding how many links a list-style answer may carry. */
function plainText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(plainText).join('')
  if (!isValidElement(node)) return ''
  return plainText((node.props as { children?: ReactNode }).children)
}

export interface FaqLinkContext {
  /** The page the FAQ is on, so it never links to itself. */
  pageId: PageId
  /** Set on service + location pages: links go to the local service page. */
  locationId?: string
}

/** Per-page state: a target is linked once. */
export function createFaqLinker(ctx: FaqLinkContext) {
  const used = new Set<string>()
  const here = getPage(ctx.pageId)
  /** Restrictions for geography and CTA targets (16 §52: no cross-market links from a market page). */
  const blocked = (serviceId: string): boolean => {
    const target = getPage(serviceId as PageId)
    if (serviceId.startsWith('market-')) {
      // On the city page that shares the market's name ("Las Vegas" in Las Vegas), the name means the city.
      const city = serviceId.replace(/^market-/, '').replace(/-[a-z]{2}$/, '')
      if (here?.pageType === 'location' && here.pathname.endsWith(`/${city}/`)) return true
      return here?.marketId !== undefined && target?.marketId !== undefined && here.marketId !== target.marketId
    }
    if (serviceId.startsWith('loc-')) {
      if (!['market', 'resource', 'location'].includes(here?.pageType ?? '')) return true
      return here?.marketId !== undefined && target?.marketId !== undefined && here.marketId !== target.marketId
    }
    return false
  }
  const targetFor = (serviceId: string): PageId | undefined => {
    if (blocked(serviceId)) return undefined
    const resolved =
      serviceId === 'cta-second-opinion'
        ? ((here?.marketId !== undefined ? `contact-${here.marketId}` : 'core-contact') as PageId)
        : serviceId
    let id =
      ctx.locationId !== undefined && resolved.startsWith('svc-') && !MONEY_SERVICES.has(resolved)
        ? (localServicePageId(ctx.locationId, resolved) ?? (resolved as PageId))
        : (resolved as PageId)
    // On a service + location page, the page's own service links up to the canonical
    // service page (16 §126: a local page names its canonical service, never itself).
    if (id === ctx.pageId && ctx.locationId !== undefined && resolved.startsWith('svc-')) id = resolved as PageId
    if (id === ctx.pageId || used.has(id)) return undefined
    if (getPage(id) === undefined) return undefined
    return resolveLinkableOnly([id]).length > 0 ? id : undefined
  }

  interface Budget {
    left: number
    /** Offset, in the answer's plain text, of the next string node to be visited. */
    pos: number
    /** End of the opening sentence: the direct answer stays unlinked (12 AEO, 16 §126). */
    firstEnd: number
    /** Second pass on a service + location page: only the page's own service, up to the canonical page. */
    ownOnly?: boolean
    /** Absolute ranges of quoted third-party text; nothing inside them is linked. */
    quotes: [number, number][]
  }

  const linkString = (text: string, budget: Budget, base: number): ReactNode => {
    if (budget.left <= 0) return text
    const from = Math.max(0, budget.firstEnd - base)
    if (from >= text.length) return text
    // Find the earliest phrase match after the opening sentence, longest phrase on a tie.
    let best: { index: number; length: number; id: PageId; key: string } | undefined
    const lists = listRanges(text)
    for (const p of PHRASES) {
      const re = new RegExp(p.re.source, p.re.flags.includes('g') ? p.re.flags : `${p.re.flags}g`)
      re.lastIndex = from
      let m = re.exec(text)
      const blocked = (x: RegExpExecArray): boolean =>
        (p.serviceId.startsWith('svc-') && lists.some(([a, b]) => x.index >= a && x.index < b)) ||
        budget.quotes.some(([a, b]) => base + x.index >= a && base + x.index < b)
      while (m !== null && blocked(m)) m = re.exec(text)
      if (m === null) continue
      const id = targetFor(p.serviceId)
      if (id === undefined) continue
      if (budget.ownOnly === true && id !== (p.serviceId as PageId)) continue
      if (best === undefined || m.index < best.index) best = { index: m.index, length: m[0].length, id, key: p.serviceId }
    }
    if (best === undefined) return text
    used.add(best.id)
    budget.left -= 1
    const page = getPage(best.id)
    const span = anchorSpan(text, best.index, best.length, best.key)
    best = { ...best, index: Math.max(span.index, from), length: span.length }
    const rest = text.slice(best.index + best.length)
    return (
      <>
        {text.slice(0, best.index)}
        <Link href={page?.pathname ?? '/'} className="underline underline-offset-4">
          {text.slice(best.index, best.index + best.length)}
        </Link>
        {linkString(rest, budget, base + best.index + best.length)}
      </>
    )
  }

  const walk = (node: ReactNode, budget: Budget): ReactNode => {
    if (typeof node === 'string') {
      const base = budget.pos
      budget.pos += node.length
      return linkString(node, budget, base)
    }
    if (Array.isArray(node)) return node.map((n, i) => <Fragment key={i}>{walk(n, budget)}</Fragment>)
    if (!isValidElement(node)) return node
    // Leave existing links and non-DOM components alone.
    if (node.type === Fragment) {
      const fragmentProps = node.props as { children?: ReactNode }
      return <>{Children.map(fragmentProps.children, (c) => walk(c, budget))}</>
    }
    // Not visited: existing links, components, and quoted or marked third-party text. Their text still
    // counts toward the running offset so the quote ranges stay aligned with the answer's plain text.
    const props0 = node.props as { children?: ReactNode; 'data-no-link'?: unknown }
    if (typeof node.type !== 'string' || node.type === 'a' || QUOTE_TAGS.has(node.type) || props0['data-no-link'] !== undefined) {
      budget.pos += plainText(node).length
      return node
    }
    const props = node.props as { children?: ReactNode }
    if (props.children === undefined) return node
    return cloneElement(node, undefined, Children.map(props.children, (c) => walk(c, budget)))
  }

  return (rawAnswer: ReactNode, question = ''): ReactNode => {
    // Variant markers first: the visible text, the anchor and the FAQPage text all come from this choice.
    const answer = resolveVariants(rawAnswer, `${here?.pathname ?? ''}|${question}`)
    // An answer that names several markets is a coverage answer: link each (16 §52 allows it).
    const text = plainText(answer)
    const markets = MARKET_RES.filter((re) => re.test(text)).length
    // The opening sentence is the direct answer that AEO extraction quotes: keep it clean.
    const end = /(?<!\bSt|\bvs|\bMt|\bDr)[.?!](?:\s|$)/.exec(text)
    const left = markets >= 2 ? Math.max(MAX_PER_ANSWER, markets) : MAX_PER_ANSWER
    const quotes = quoteRanges(text)
    const budget: Budget = { left, pos: 0, firstEnd: end === null ? 0 : end.index + 1, quotes }
    const linked = walk(answer, budget)
    if (budget.left < left || ctx.locationId === undefined) return linked
    // Nothing after the opening sentence: a local page still names its canonical service (item 1, 16 §126).
    return walk(answer, { left: 1, pos: 0, firstEnd: 0, ownOnly: true, quotes })
  }
}
