import Link from 'next/link'
import { breadcrumbTrail } from '@/data/pages'
import type { PageId } from '@/types'

/**
 * Breadcrumb trail.
 *
 * Governed by docs/05-url-routing-strategy.md §82, §118;
 * docs/03-information-architecture.md §53;
 * docs/16-internal-linking-strategy.md §25;
 * docs/15-schema-entity-strategy.md §54-55.
 *
 * ===========================================================================
 * ⚠ AN UNRESOLVED DOCUMENT CONFLICT IS VISIBLE HERE
 * ===========================================================================
 * The trail is built by walking `parentId` through the approved page
 * registry, which encodes 03 §53's hierarchy:
 *
 *   Market → Parent → Markets Hub
 *   Location → Parent → Market
 *
 * That produces, for a service + location page:
 *
 *   Home > Locations > San Diego > Mission Valley > Hydro Jetting
 *
 * But 05 §118's worked example shows:
 *
 *   Home → San Diego Market → Carlsbad → Sewer Camera Inspection
 *
 * without the Locations hub. Both cannot be right for rendered
 * breadcrumbs.
 *
 * This follows 03 §53 because that section states parentage as a rule
 * for every page family, while 05 §118's trail is an illustration
 * inside a section about resolving parents from entities rather than
 * strings — the point it actually argues is the one both agree on.
 * Following the registry also keeps the rendered trail identical to the
 * validated `parentId` graph, so breadcrumbs cannot drift from the data
 * that route generation uses.
 *
 * ⚠ Resolve before step 15. `BreadcrumbList` schema must match the
 * visible trail (15 §67, §54), so whichever shape is chosen gets baked
 * into structured data too.
 *
 * ---------------------------------------------------------------------------
 * Every item is an approved page — validation guarantees parents
 * resolve — so a trail can never link to a route that does not exist
 * (05 §117, 16 §25). The current page is rendered as text, not a link.
 */
export interface BreadcrumbsProps {
  pageId: PageId
  className?: string
}

export function Breadcrumbs({ pageId, className }: BreadcrumbsProps) {
  const trail = breadcrumbTrail(pageId)

  // A single entry means this is the home page; a trail to itself adds
  // nothing (18 §120 — omit rather than render an empty shell).
  if (trail.length < 2) return null

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-muted-foreground">
        {trail.map((page, index) => {
          const isCurrent = index === trail.length - 1
          return (
            <li key={page.id} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              )}

              {isCurrent ? (
                <span aria-current="page" className="text-foreground">
                  {page.name}
                </span>
              ) : (
                <Link
                  href={page.pathname}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {page.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
