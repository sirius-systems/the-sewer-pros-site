/**
 * Approved-link resolution.
 *
 * Authority: docs/16-internal-linking-strategy.md §25
 *            docs/04-master-page-build-list.md §4
 *            docs/05-url-routing-strategy.md §51, §113-117
 *            docs/18-design-system.md §129
 *
 * ===========================================================================
 * INTERNAL LINKS NAME A PAGE, NEVER AN HREF
 * ===========================================================================
 * Every internal link in a section or nav component resolves through
 * here. Consequences, all of them enforced rather than documented:
 *
 *   - a link to a nonexistent route cannot be written (16 §25)
 *   - a link cannot point through a redirect, because the href comes
 *     from the registry's canonical pathname (05 §51, CLAUDE.md §51)
 *   - a `launch_pending_validation` page cannot appear in an indexable
 *     link module (04 §4)
 *
 * 18 §129: "The design system should render approved relationships
 * rather than inventing them."
 */

import type { MasterPageRecord, PageId } from '@/types'
import { getPage, indexablePages } from '@/data/pages'

export interface ApprovedLink {
  href: string
  label: string
  pageId: PageId
}

const indexableIds = new Set(indexablePages.map((p) => p.id))

function fail(message: string): never {
  throw new Error(`Approved link invalid: ${message}`)
}

export interface ResolveOptions {
  /** Overrides the registry page name. */
  label?: string
  /**
   * Whether the link appears in an indexable link module.
   *
   * Default true. Header, footer, related-content modules, and body
   * links are all indexable link modules under 04 §4, so gated pages
   * are rejected. Set false only for a link on the gated page itself —
   * a breadcrumb on `/las-vegas-nv/`, for instance, where suppressing
   * the trail would be worse than linking within a non-indexed page.
   */
  indexableContext?: boolean
}

/**
 * Resolves a page id to a renderable link.
 *
 * Throws rather than returning undefined: a broken internal link is a
 * build-time data error, and silently dropping it would hide the
 * problem while leaving a gap in the UI (02 §95).
 */
export function resolveApprovedLink(
  pageId: PageId,
  options: ResolveOptions = {},
): ApprovedLink {
  const { label, indexableContext = true } = options
  const page: MasterPageRecord | undefined = getPage(pageId)

  if (page === undefined) {
    fail(
      `"${pageId}" is not in the approved page registry. Internal links may ` +
        `only target approved pages (16 §25, CLAUDE.md §16).`,
    )
  }

  if (indexableContext && !indexableIds.has(page.id)) {
    fail(
      `"${page.id}" (${page.pathname}) has status "${page.status}" and is not ` +
        `indexable, so it must not appear in an indexable link module ` +
        `(04 §4). Pass indexableContext: false only for links rendered on ` +
        `the gated page itself.`,
    )
  }

  return { href: page.pathname, label: label ?? page.name, pageId: page.id }
}

/** Resolves several links, preserving order. */
export function resolveApprovedLinks(
  pageIds: readonly PageId[],
  options: ResolveOptions = {},
): ApprovedLink[] {
  return pageIds.map((id) => resolveApprovedLink(id, options))
}

/**
 * Resolves only the ids that are currently linkable, dropping the rest.
 *
 * For generated relationship modules — related services, market
 * coverage — where a gated page should disappear from the list rather
 * than fail the build. Use `resolveApprovedLink` when a missing link
 * means the data is wrong.
 *
 * A nonexistent page id still throws. Only the indexability gate is
 * treated as a filter, because that state is expected and temporary.
 */
export function resolveLinkableOnly(
  pageIds: readonly PageId[],
  options: Omit<ResolveOptions, 'indexableContext'> = {},
): ApprovedLink[] {
  return pageIds
    .filter((id) => {
      if (getPage(id) === undefined) {
        fail(`"${id}" is not in the approved page registry.`)
      }
      return indexableIds.has(id)
    })
    .map((id) => resolveApprovedLink(id, options))
}
