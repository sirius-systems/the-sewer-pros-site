import type { ReactNode } from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { ServiceV2Link } from '@/types'

/**
 * Where two services overlap: the answer and a note on the left, a
 * bordered "when X may come first" list on the right. Optional; present
 * only where the page has data for it.
 */
export function DecisionPanel({
  id,
  eyebrow,
  title,
  answer,
  note,
  listTitle,
  list,
  links,
  aside,
  table,
  surface = 'default',
  density = 'standard',
}: {
  id: string
  eyebrow?: string
  title: string
  answer: string
  note?: string
  listTitle: string
  list: readonly ReactNode[]
  links: readonly ServiceV2Link[]
  aside?: { title: string; body: string }
  /**
   * A labelled, scrollable table placed full width under the heading and
   * note, above the aside and the list. Absent: the layout is unchanged.
   */
  table?: {
    caption: string
    columns: readonly [string, string, string]
    rows: readonly { service: string; purpose: string; fit: string }[]
  }
  surface?: 'default' | 'muted'
  /** Spacing; the template declares the same value to the rhythm check. Absent: standard. */
  density?: 'standard' | 'dense'
}) {
  if (table !== undefined) {
    return (
      <Section density={density} surface={surface} labelledBy={id}>
        <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={<p>{answer}</p>} />
        {note !== undefined && (
          <p className="mt-4 max-w-[var(--container-reading)] text-body text-muted-foreground">
            {note}
          </p>
        )}
        <div
          role="region"
          aria-label={`${table.caption} (scrollable table)`}
          tabIndex={0}
          className="mt-8 overflow-x-auto rounded-md border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
        >
          <table className="w-full min-w-[40rem] border-collapse text-left text-body-sm">
            <caption className="sr-only">{table.caption}</caption>
            <thead>
              <tr className="border-b border-border bg-surface-muted text-caption tracking-wide text-muted-foreground uppercase">
                {table.columns.map((column) => (
                  <th key={column} scope="col" className="px-4 py-3 font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr
                  key={row.service}
                  className="border-b border-border align-top last:border-b-0"
                >
                  <th scope="row" className="px-4 py-4 font-semibold text-foreground">
                    {row.service}
                  </th>
                  <td className="px-4 py-4 text-muted-foreground">{row.purpose}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-start">
          {aside !== undefined && (
            <div className="lg:col-span-6">
              <h3 className="text-h4 font-semibold text-foreground">{aside.title}</h3>
              <p className="mt-2 max-w-[var(--container-reading)] text-body text-muted-foreground">
                {aside.body}
              </p>
            </div>
          )}
          <div className={aside !== undefined ? 'lg:col-span-6' : 'lg:col-span-12'}>
            <div className="rounded-md border border-border bg-surface p-6 sm:p-8">
              <h3 className="text-h4 font-semibold text-foreground">{listTitle}</h3>
              <ul className="mt-4 border-t border-border">
                {list.map((item, index) => (
                  <li
                    key={typeof item === 'string' ? item : index}
                    className="border-b border-border py-3 text-body-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {links.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
                  {links.map((link) => (
                    <li key={link.pageId}>
                      <Link
                        href={resolveApprovedLink(link.pageId).href}
                        className="inline-flex min-h-11 items-center text-body-sm font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Section>
    )
  }
  return (
    <Section density="standard" surface={surface} labelledBy={id}>
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-start">
        {(() => {
          const heading = (
            <SectionHeading
              id={id}
              eyebrow={eyebrow}
              title={title}
              intro={<p>{answer}</p>}
            />
          )
          const noteEl = note !== undefined && (
            <p className="mt-4 max-w-[var(--container-reading)] text-body text-muted-foreground">
              {note}
            </p>
          )
          // Two branches so an entry without `aside` renders the same tree as before.
          return aside === undefined ? (
            <div className="lg:col-span-6">
              {heading}
              {noteEl}
            </div>
          ) : (
            <div className="lg:col-span-6">
              {heading}
              {noteEl}
              <div className="mt-6 max-w-[var(--container-reading)] border-t border-border pt-4">
                <h3 className="text-h4 font-semibold text-foreground">{aside.title}</h3>
                <p className="mt-2 text-body text-muted-foreground">{aside.body}</p>
              </div>
            </div>
          )
        })()}
        <div className="lg:col-span-6">
          <div className="rounded-md border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-h4 font-semibold text-foreground">{listTitle}</h3>
            <ul className="mt-4 border-t border-border">
              {list.map((item, index) => (
                <li
                  key={typeof item === 'string' ? item : index}
                  className={`border-b border-border py-3 text-body-sm text-foreground${
                    typeof item === 'string'
                      ? ''
                      : ' [&_a]:font-semibold [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            {links.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
                {links.map((link) => (
                  <li key={link.pageId}>
                    <Link
                      href={resolveApprovedLink(link.pageId).href}
                      className="inline-flex min-h-11 items-center text-body-sm font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
