import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { PageId } from '@/types'

/**
 * Comparison table for v2: white surface, this service highlighted, links
 * in the row headers. The table scrolls inside a labelled, focusable
 * region on narrow screens rather than reflowing into cards.
 */
export function ServiceComparisonTable({
  id,
  title,
  intro,
  rows,
  note,
}: {
  id: string
  title: string
  intro: string
  rows: readonly {
    service: string
    purpose: string
    fit: string
    pageId?: PageId
    current?: boolean
  }[]
  note?: string
}) {
  return (
    <Section density="dense" surface="default" labelledBy={id}>
      <SectionHeading id={id} title={title} intro={<p>{intro}</p>} />
      <div
        role="region"
        aria-label={`${title} (scrollable table)`}
        tabIndex={0}
        className="mt-8 overflow-x-auto rounded-md border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
      >
        <table className="w-full min-w-[40rem] border-collapse text-left text-body-sm">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="border-b border-border bg-surface-muted text-caption tracking-wide text-muted-foreground uppercase">
              <th scope="col" className="px-4 py-3 font-semibold">
                Service
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Primary purpose
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                May be the right fit when
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const link =
                row.pageId !== undefined ? resolveApprovedLink(row.pageId) : undefined
              return (
                <tr
                  key={row.service}
                  className={cn(
                    'border-b border-border align-top last:border-b-0',
                    row.current === true && 'bg-surface-muted',
                  )}
                >
                  <th scope="row" className="px-4 py-4 font-semibold text-foreground">
                    {link !== undefined ? (
                      <Link
                        href={link.href}
                        className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                      >
                        {row.service}
                      </Link>
                    ) : (
                      <>
                        {row.service}{' '}
                        <span className="font-normal text-muted-foreground">
                          (this page)
                        </span>
                      </>
                    )}
                  </th>
                  <td className="px-4 py-4 text-muted-foreground">{row.purpose}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.fit}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {note !== undefined && (
        <p className="mt-6 max-w-[var(--container-reading)] text-body text-muted-foreground">
          {note}
        </p>
      )}
    </Section>
  )
}
