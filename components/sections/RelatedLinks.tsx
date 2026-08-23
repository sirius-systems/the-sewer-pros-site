import { Section, LinkCard, type SectionDensity } from '@/components/ui'
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
 *
 * ===========================================================================
 * HORIZONTAL CARDS SINCE THE COMPOSITION PORT
 * ===========================================================================
 * This was a plain vertical list of underlined links. The ported
 * composition specifies a related-services strip of cards, and this is
 * the LAST card section on most pages — so it must not repeat the shape
 * of the first (18 §5.6: "vary composition pattern and density between
 * adjacent sections").
 *
 * Hence horizontal: a leading rule with the title and description
 * beside it, at a wider aspect than the problem and inclusions grids
 * above. Same Appendix A family, visibly different shape.
 *
 * `descriptions` is optional. Where a page supplies none, cards render
 * title-only rather than inventing a summary — 18 §51 already makes the
 * page name the dominant element.
 */
export interface RelatedLinksProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  title: string
  intro?: string
  pageIds: readonly PageId[]
  /**
   * Optional one-line summaries, keyed by page id.
   *
   * Absent entries render title-only. Never generate a summary to fill
   * the gap — 14 §21's substitution tests exist precisely to stop
   * token-swapped filler, and 18 §51 already makes the name dominant.
   */
  descriptions?: Readonly<Partial<Record<PageId, string>>>
  /** `muted` sets this apart from the body content above it. */
  surface?: 'default' | 'muted'
  /**
   * Whether this module is an indexable link module (04 §4).
   *
   * Default true, which drops gated pages. Pass false when the module
   * is rendered ON a page that is itself not indexed — a gated market
   * hub linking to its gated locations. Those links reach no crawler
   * through an indexed path, and suppressing them would orphan the
   * cluster from its own hub and make it un-QA-able (DEC-063 requires
   * these pages be QA'd).
   */
  indexableContext?: boolean
}

/**
 * Column count by link count.
 *
 * Anything larger falls back to three and wraps; at four or more the
 * final row reads as a continuation rather than a hole.
 */
const COLUMNS: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2',
}

/**
 * Whether `RelatedLinks` renders anything.
 *
 * Ids that resolve to no linkable page leave nothing to link to,
 * and the module omits itself rather than rendering an empty aside
 * (18 §120). Gated and retired pages drop out here, so this is a
 * function of page STATUS, not of whether the ids were supplied.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function relatedLinksRenders(
  pageIds: readonly PageId[] | undefined,
  options: { indexableContext?: boolean } = {},
): boolean {
  if (pageIds === undefined) return false
  return (
    resolveLinkableOnly(pageIds, {
      indexableContext: options.indexableContext ?? true,
    }).length > 0
  )
}

export function RelatedLinks({
  density = 'dense',
  id = 'related',
  title,
  intro,
  pageIds,
  descriptions,
  surface = 'muted',
  indexableContext = true,
}: RelatedLinksProps) {
  const links = resolveLinkableOnly(pageIds, { indexableContext })

  if (links.length === 0) return null

  return (
    <Section density={density} surface={surface} as="aside" labelledBy={id}>
      <SectionHeading id={id} title={title} level="h2" intro={intro} />

      {/*
        Horizontal cards. Not `CardGrid`: related counts vary by page,
        so the column count follows the actual number of links rather
        than assuming three.

        Half the pages in this project pass two related ids and half
        pass three. A fixed three-column grid orphaned a cell on every
        two-item page — the same class of bug as the hardcoded
        four-column process band, and exactly what 18 §5.6's "do not
        force an item count into a grid it doesn't divide evenly into"
        prohibits.
      */}
      <ul className={`mt-6 grid grid-cols-1 gap-4 ${COLUMNS[links.length] ?? 'md:grid-cols-3'}`}>
        {links.map((link) => {
          const description = descriptions?.[link.pageId]

          return (
            <li key={link.pageId}>
              <LinkCard
                href={link.href}
                actionLabel={link.label}
                // Leading rule instead of a full border, and a row
                // layout — the horizontal treatment described above.
                className="flex h-full gap-4 border-0 border-l-2 border-l-border p-0 pl-4 hover:bg-transparent hover:border-l-foreground/40"
              >
                <span className="flex flex-col">
                  <span className="text-base font-medium text-foreground">
                    {link.label}
                  </span>
                  {description !== undefined && (
                    <span className="mt-1 text-sm leading-6 text-muted-foreground">
                      {description}
                    </span>
                  )}
                </span>
              </LinkCard>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
