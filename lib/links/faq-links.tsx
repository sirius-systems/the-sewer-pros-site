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
 *     "Sewer Cleaning & Camera Inspection" name written with "and");
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
  { re: /hydro jetting/i, serviceId: 'svc-hydro-jetting' },
  { re: /drain cleaning/i, serviceId: 'svc-drain-cleaning' },
  { re: /sewer cleaning/i, serviceId: 'svc-sewer-cleaning' },
]

export interface FaqLinkContext {
  /** The page the FAQ is on, so it never links to itself. */
  pageId: PageId
  /** Set on service + location pages: links go to the local service page. */
  locationId?: string
}

/** Per-page state: a target is linked once. */
export function createFaqLinker(ctx: FaqLinkContext) {
  const used = new Set<string>()
  const targetFor = (serviceId: string): PageId | undefined => {
    const id =
      ctx.locationId !== undefined && serviceId.startsWith('svc-')
        ? (localServicePageId(ctx.locationId, serviceId) ?? (serviceId as PageId))
        : (serviceId as PageId)
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

  return (answer: ReactNode): ReactNode => walk(answer, { left: MAX_PER_ANSWER })
}
