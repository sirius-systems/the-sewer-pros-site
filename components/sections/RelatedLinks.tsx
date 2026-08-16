import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Related-content module.
 *
 * Governed by docs/16-internal-linking-strategy.md §25;
 * docs/18-design-system.md §129, §120;
 * docs/04-master-page-build-list.md §4;
 * CLAUDE.md §37.
 *
 * ===========================================================================
 * RELATIONSHIPS ARE PASSED IN, NEVER DISCOVERED
 * ===========================================================================
 * This component takes explicit page ids. It does not query the service
 * registry for "services in the same family" or the matrix for
 * "relationships involving this location".
 *
 * CLAUDE.md §37 draws the line precisely — a good source is "approved
 * route data + explicit related IDs"; a bad one is "all matrix
 * combinations". 18 §129: "The design system should render approved
 * relationships rather than inventing them." 16 §25 forbids surfacing a
 * URL merely because it could exist.
 *
 * Gated pages are filtered out rather than failing the build (04 §4),
 * so a related module on a live page cannot leak a pending Las Vegas
 * route into an indexable link list. If every relation is gated the
 * section renders nothing at all, per 18 §120 — "omit the section
 * entirely" beats an empty shell.
 */
export interface RelatedLinksProps {
  id?: string
  title: string
  intro?: string
  pageIds: readonly PageId[]
  /** `muted` sets this apart from the body content above it. */
  surface?: 'default' | 'muted'
}

export function RelatedLinks({
  id = 'related',
  title,
  intro,
  pageIds,
  surface = 'muted',
}: RelatedLinksProps) {
  const links = resolveLinkableOnly(pageIds)

  if (links.length === 0) return null

  return (
    <Section density="dense" surface={surface} as="aside" labelledBy={id}>
      <SectionHeading id={id} title={title} level="h2" intro={intro} />

      <ul className="mt-6 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.pageId}>
            <Link
              href={link.href}
              className="text-sm text-accent underline underline-offset-4 hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
