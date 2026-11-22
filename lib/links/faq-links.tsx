import { Children, Fragment, cloneElement, isValidElement, type ReactNode } from 'react'
import Link from 'next/link'
import { getPage } from '@/data/pages'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import { localServicePageId } from '@/lib/links/link-plan'
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
 *   - never a link to the page itself, and never inside an existing link.
 */

const MAX_PER_ANSWER = 2

/** Longest phrase first, so "sewer cleaning and camera inspection" wins over "sewer cleaning". */
const PHRASES: readonly { re: RegExp; serviceId: string }[] = [
  // Audiences named by their registered page (09 audience matrix). `serviceId`
  // is the page id here; audience links never switch to a local page.
  { re: /real estate agents?/i, serviceId: 'aud-real-estate-agents' },
  { re: /home inspectors?/i, serviceId: 'aud-home-inspectors' },
  { re: /home buyers?/i, serviceId: 'aud-home-buyers' },
  { re: /property managers?/i, serviceId: 'aud-property-managers' },
  { re: /sewer cleaning (?:&|and) camera inspection/i, serviceId: 'svc-sewer-cleaning-camera-inspection' },
  { re: /pre-purchase sewer inspection/i, serviceId: 'svc-pre-purchase-sewer-inspection' },
  { re: /recurring sewer backup diagnosis/i, serviceId: 'svc-recurring-sewer-backup-diagnosis' },
  { re: /preventative sewer maintenance/i, serviceId: 'svc-preventative-sewer-maintenance' },
  { re: /sewer camera inspection/i, serviceId: 'svc-sewer-camera-inspection' },
  { re: /sewer line locating/i, serviceId: 'svc-sewer-line-locating' },
  // "Sewer scope" is the everyday name for the camera inspection (06 registry aliases).
  { re: /sewer scope/i, serviceId: 'svc-sewer-camera-inspection' },
  { re: /hydro jetting (?:vs\.?|versus) (?:sewer )?snaking/i, serviceId: 'cmp-hydro-vs-snaking' },
  { re: /independent (?:sewer )?inspection (?:vs\.?|versus) (?:a )?repair company/i, serviceId: 'cmp-independent-vs-repair' },
  { re: /inspection video/i, serviceId: 'res-read-video' },
  { re: /free second opinion/i, serviceId: 'cta-second-opinion' },
  { re: /hydro jetting/i, serviceId: 'svc-hydro-jetting' },
  { re: /drain cleaning/i, serviceId: 'svc-drain-cleaning' },
  { re: /sewer cleaning/i, serviceId: 'svc-sewer-cleaning' },
  // Geography. A market is named by its hub; "St. Louis City" and "St. Louis County" are not the market.
  // "City of X" names the municipality and its sewer department, not our service market, so it is not linked.
  { re: /(?<!City of )St\. Louis(?! City| County)/, serviceId: 'market-st-louis-mo' },
  { re: /(?<!City of )San Diego(?! County)/, serviceId: 'market-san-diego-ca' },
  { re: /(?<!City of |North )Las Vegas(?! Valley)/, serviceId: 'market-las-vegas-nv' },
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
    const id =
      ctx.locationId !== undefined && resolved.startsWith('svc-')
        ? (localServicePageId(ctx.locationId, resolved) ?? (resolved as PageId))
        : (resolved as PageId)
    if (id === ctx.pageId || used.has(id)) return undefined
    if (getPage(id) === undefined) return undefined
    return resolveLinkableOnly([id]).length > 0 ? id : undefined
  }

  const linkString = (text: string, budget: { left: number }): ReactNode => {
    if (budget.left <= 0) return text
    // Find the earliest phrase match, longest phrase on a tie.
    let best: { index: number; length: number; id: PageId } | undefined
    for (const p of PHRASES) {
      const m = p.re.exec(text)
      if (m === null) continue
      const id = targetFor(p.serviceId)
      if (id === undefined) continue
      if (best === undefined || m.index < best.index) best = { index: m.index, length: m[0].length, id }
    }
    if (best === undefined) return text
    used.add(best.id)
    budget.left -= 1
    const page = getPage(best.id)
    const rest = text.slice(best.index + best.length)
    return (
      <>
        {text.slice(0, best.index)}
        <Link href={page?.pathname ?? '/'} className="underline underline-offset-4">
          {text.slice(best.index, best.index + best.length)}
        </Link>
        {linkString(rest, budget)}
      </>
    )
  }

  const walk = (node: ReactNode, budget: { left: number }): ReactNode => {
    if (typeof node === 'string') return linkString(node, budget)
    if (Array.isArray(node)) return node.map((n, i) => <Fragment key={i}>{walk(n, budget)}</Fragment>)
    if (!isValidElement(node)) return node
    // Leave existing links and non-DOM components alone.
    if (node.type === Fragment) {
      const fragmentProps = node.props as { children?: ReactNode }
      return <>{Children.map(fragmentProps.children, (c) => walk(c, budget))}</>
    }
    if (typeof node.type !== 'string' || node.type === 'a') return node
    const props = node.props as { children?: ReactNode }
    if (props.children === undefined) return node
    return cloneElement(node, undefined, Children.map(props.children, (c) => walk(c, budget)))
  }

  return (answer: ReactNode): ReactNode => {
    // An answer that names several markets is a coverage answer: link each (16 §52 allows it).
    const text = plainText(answer)
    const markets = MARKET_RES.filter((re) => re.test(text)).length
    return walk(answer, { left: markets >= 2 ? Math.max(MAX_PER_ANSWER, markets) : MAX_PER_ANSWER })
  }
}
