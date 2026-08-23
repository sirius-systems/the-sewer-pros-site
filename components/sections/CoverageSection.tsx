import Link from 'next/link'
import { Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Service-area coverage.
 *
 * Governed by docs/07-master-location-registry.md;
 * docs/16-internal-linking-strategy.md §25;
 * docs/22-decisions-change-log.md PENDING-002;
 * CLAUDE.md §26, §29, §30, §48.
 *
 * ===========================================================================
 * NO MAP, NO ADDRESS, NO DIRECTIONS
 * ===========================================================================
 * The reference composition offers a map / directions / hours card on
 * location pages, and its own composition note says to confirm the
 * business model before building one.
 *
 * PENDING-002 resolved that question: no address exists. Service is
 * delivered at the customer's property — a service-area business. So
 * this section is a community list plus an availability statement, and
 * nothing else.
 *
 * CLAUDE.md §29-30 additionally forbid implying an office, storefront,
 * or public address in San Diego or Las Vegas. A map pin would do
 * exactly that.
 *
 * ---------------------------------------------------------------------------
 * GEOGRAPHIC ACCURACY
 * ---------------------------------------------------------------------------
 * Names must come from the location registry (07) with correct
 * geographic types. CLAUDE.md §26: city, neighborhood, county,
 * unincorporated community, and metro are not interchangeable, and a
 * municipal program does not apply metro-wide by inference.
 *
 * Linked entries resolve through the approved-link layer so a gated
 * route cannot leak onto an indexable page (04 §4). Registry names with
 * no approved page render as plain text rather than dead links.
 */
export interface CoverageSectionProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  /** Approved location pages, rendered as links. */
  pageIds?: readonly PageId[]
  /** Registry names with no approved page, rendered as plain text. */
  names?: readonly string[]
  /**
   * e.g. "Not sure whether we serve your address? Contact us to check."
   *
   * Required: the reference composition treats this as the section's
   * point, and it is what keeps a partial community list honest rather
   * than implying the list is exhaustive.
   */
  availabilityStatement: string
}

/**
 * Whether `CoverageSection` renders anything.
 *
 * Linked communities can drop out through page status while the
 * plain-text names cannot. The section needs at least one of the two
 * and omits itself with neither (18 §120).
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function coverageSectionRenders(
  coverage:
    | { pageIds?: readonly PageId[]; names?: readonly string[] }
    | undefined,
): boolean {
  if (coverage === undefined) return false
  const links = resolveLinkableOnly(coverage.pageIds ?? [])
  return links.length > 0 || (coverage.names ?? []).length > 0
}

export function CoverageSection({
  density = 'standard',
  id = 'service-area',
  eyebrow,
  title,
  intro,
  pageIds = [],
  names = [],
  availabilityStatement,
}: CoverageSectionProps) {
  const links = resolveLinkableOnly(pageIds)

  // 18 §120 — omit entirely rather than render an empty shell.
  if (links.length === 0 && names.length === 0) return null

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      {/*
        A plain bordered list, not cards. This is one of the sections
        that keeps Appendix B's "cards for every list-like section"
        check satisfied on pages that already carry two card grids.
      */}
      <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.pageId} className="border-t border-border pt-3">
            <Link
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {names.map((name) => (
          <li
            key={name}
            className="border-t border-border pt-3 text-sm text-muted-foreground"
          >
            {name}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-[var(--container-reading)] text-sm leading-6 text-muted-foreground">
        {availabilityStatement}
      </p>
    </Section>
  )
}
