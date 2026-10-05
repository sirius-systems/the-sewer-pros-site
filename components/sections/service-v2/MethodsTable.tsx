import type { ReactNode } from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Two or more methods compared in a four-column table: the method, how it
 * works, what it is often considered for, and its limits. Same labelled,
 * focusable scroll region as the comparison table, so it scrolls sideways
 * on narrow screens rather than reflowing into cards.
 *
 * Optional; renders only where the page supplies `v2.methods`.
 */
export function MethodsTable({
  id,
  eyebrow,
  title,
  intro,
  caption,
  columns,
  rows,
  note,
}: {
  id: string
  eyebrow?: string
  title: string
  intro: string
  caption: string
  columns: readonly [string, string, string, string]
  rows: readonly {
    method: string
    how: string
    considered: string
    limits: string
    pageId?: PageId
  }[]
  note?: ReactNode
}) {
  return (
    <Section density="dense" surface="muted" labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={<p>{intro}</p>} />
      <div
        role="region"
        aria-label={`${caption} (scrollable table)`}
        tabIndex={0}
        className="mt-8 overflow-x-auto rounded-md border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
      >
        <table className="w-full min-w-[48rem] border-collapse text-left text-body-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-border bg-surface-muted text-caption tracking-wide text-muted-foreground uppercase">
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const link =
                row.pageId !== undefined ? resolveApprovedLink(row.pageId) : undefined
              return (
                <tr
                  key={row.method}
                  className="border-b border-border align-top last:border-b-0"
                >
                  <th scope="row" className="px-4 py-4 font-semibold text-foreground">
                    {link !== undefined ? (
                      <Link
                        href={link.href}
                        className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                      >
                        {row.method}
                      </Link>
                    ) : (
                      row.method
                    )}
                  </th>
                  <td className="px-4 py-4 text-muted-foreground">{row.how}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.considered}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.limits}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {note !== undefined && (
        <p className="mt-6 max-w-[var(--container-reading)] text-body text-muted-foreground [&_a]:font-semibold [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
          {note}
        </p>
      )}
    </Section>
  )
}
