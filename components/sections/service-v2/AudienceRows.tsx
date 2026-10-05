import type { ReactNode } from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Audiences as ruled rows (name, one-line value, arrow), not cards. The
 * whole row is one link, so each destination appears once.
 */
export function AudienceRows({
  id,
  title,
  intro,
  items,
}: {
  id: string
  title: string
  intro?: string
  items: readonly {
    pageId?: PageId
    audience: string
    description: ReactNode
    actionLabel?: string
  }[]
}) {
  return (
    <Section density="dense" surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={title} intro={intro !== undefined ? <p>{intro}</p> : undefined} />
      <ul className="mt-8 border-t border-border">
        {items.map((item, index) =>
          item.pageId !== undefined ? (
            <li key={item.pageId} className="border-b border-border">
              <Link
                href={resolveApprovedLink(item.pageId).href}
                className="group grid min-h-11 gap-x-8 gap-y-1 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary md:grid-cols-[14rem_1fr_auto] md:items-baseline"
              >
                <h3 className="text-h4 font-semibold text-foreground">
                  {item.audience}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {item.description}
                </p>
                <span className="text-body-sm font-semibold text-accent-secondary underline-offset-4 group-hover:underline">
                  {item.actionLabel} <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ) : (
            <li key={`${item.audience}-${index}`} className="border-b border-border">
              <div className="grid gap-x-8 gap-y-1 py-5 md:grid-cols-[14rem_1fr] md:items-baseline">
                <h3 className="text-h4 font-semibold text-foreground">
                  {item.audience}
                </h3>
                <p className="text-body-sm text-muted-foreground [&_a]:font-semibold [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ),
        )}
      </ul>
    </Section>
  )
}
