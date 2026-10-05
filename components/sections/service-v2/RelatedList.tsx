import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Related pages as ruled text links, not cards.
 *
 * Four or fewer stay in one column. More than four flow into two columns
 * from 640px up, down the first column and then the second (CSS columns,
 * `break-inside: avoid`), so reading order follows the DOM order.
 */
export function RelatedList({
  id = 'related',
  eyebrow,
  title,
  pageIds,
  descriptions,
}: {
  id?: string
  eyebrow?: string
  title: string
  pageIds: readonly PageId[]
  descriptions?: Readonly<Partial<Record<PageId, string>>>
}) {
  const links = resolveLinkableOnly(pageIds, { indexableContext: true })
  if (links.length === 0) return null
  const twoColumns = links.length > 4
  return (
    <Section density="dense" surface="default" as="aside" labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} />
      <ul
        className={`mt-6 border-t border-border ${twoColumns ? 'sm:columns-2 sm:gap-x-12' : ''}`}
      >
        {links.map((link) => {
          const description = descriptions?.[link.pageId]
          return (
            <li key={link.pageId} className="break-inside-avoid border-b border-border">
              <Link
                href={link.href}
                className="block min-h-11 py-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-secondary"
              >
                <span className="text-base font-semibold text-accent-secondary underline underline-offset-4">
                  {link.label}
                </span>
                {description !== undefined && (
                  <span className="mt-1 block text-body-sm text-muted-foreground">
                    {description}
                  </span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
