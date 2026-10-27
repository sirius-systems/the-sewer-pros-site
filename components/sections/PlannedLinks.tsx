import Link from 'next/link'
import { Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Short block of planned links, grouped by purpose.
 *
 * Authority: docs/16-internal-linking-strategy.md section 126. The page ids
 * come from `lib/links/link-plan.ts` (guides for a service, markets and local
 * pages for an audience, the FAQ and audiences for a contact page), so the
 * block is bounded by the plan and never lists the service x location matrix.
 *
 * Plain titled rows, not cards: it sits beside card sections and must stay
 * short. Gated and unauthored pages are dropped by the resolver, and a group
 * left empty renders nothing.
 */
export interface PlannedLinkGroup {
  title?: string
  pageIds: readonly PageId[]
}

function resolvedGroups(groups: readonly PlannedLinkGroup[]) {
  return groups
    .map((g) => ({ title: g.title, links: resolveLinkableOnly(g.pageIds) }))
    .filter((g) => g.links.length > 0)
}

export function plannedLinksRenders(groups: readonly PlannedLinkGroup[]): boolean {
  return resolvedGroups(groups).length > 0
}

export function PlannedLinks({
  id,
  title,
  intro,
  groups,
  density = 'dense',
  surface = 'default',
}: {
  id: string
  title: string
  intro?: string
  groups: readonly PlannedLinkGroup[]
  density?: SectionDensity
  surface?: 'default' | 'muted'
}) {
  const resolved = resolvedGroups(groups)
  if (resolved.length === 0) return null
  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <SectionHeading id={id} title={title} intro={intro !== undefined ? <p>{intro}</p> : undefined} />
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {resolved.map((group, i) => (
          <div key={group.title ?? i}>
            {group.title !== undefined && (
              <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                {group.title}
              </p>
            )}
            <ul className="mt-3 divide-y divide-border border-y border-border">
              {group.links.map((link) => (
                <li key={link.pageId}>
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center justify-between gap-3 py-3 text-base font-medium text-accent-secondary underline-offset-4 hover:text-foreground hover:underline"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
