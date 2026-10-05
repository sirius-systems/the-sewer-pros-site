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
  title,
  answer,
  note,
  listTitle,
  list,
  links,
}: {
  id: string
  title: string
  answer: string
  note?: string
  listTitle: string
  list: readonly string[]
  links: readonly ServiceV2Link[]
}) {
  return (
    <Section density="standard" surface="default" labelledBy={id}>
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <SectionHeading id={id} title={title} intro={<p>{answer}</p>} />
          {note !== undefined && (
            <p className="mt-4 max-w-[var(--container-reading)] text-body text-muted-foreground">
              {note}
            </p>
          )}
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-md border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-h4 font-semibold text-foreground">{listTitle}</h3>
            <ul className="mt-4 border-t border-border">
              {list.map((item) => (
                <li
                  key={item}
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
