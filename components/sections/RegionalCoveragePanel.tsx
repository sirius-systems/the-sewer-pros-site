import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { RegionalCoverageContent } from '@/types'

/**
 * Closing regional conversion panel for a market hub.
 *
 * Governed by docs/17-conversion-architecture.md; docs/18-design-system.md §11, §87;
 * docs/01-business-brand-foundation.md §20-21; CLAUDE.md §11, §24, §43.
 *
 * ===========================================================================
 * ⚠ COVERAGE IS NOT A BOUNDARY, AND THIS SECTION IS WHERE THAT SLIPS
 * ===========================================================================
 * A closing panel that lists communities is one careless verb away from
 * asserting a service boundary the business has not published. The copy
 * this renders names FEATURED areas and then asks the visitor to
 * confirm; it must never be edited into "we serve all of", a radius, or
 * a county.
 *
 * For San Diego and Las Vegas specifically, `serviceAreaSource` is
 * `derived_from_approved_locations` - there is no published service
 * area to state, which is exactly why the ask-to-confirm sentence is
 * load-bearing rather than boilerplate (DEC-077).
 *
 * ---------------------------------------------------------------------------
 * ⚠ IT IS LIGHT, AND THAT IS STRUCTURAL RATHER THAN COSMETIC
 * ---------------------------------------------------------------------------
 * It follows the independence band, which is `brand` navy. Two dark
 * sections in sequence read as one long region (18 §11), and this one
 * is a conversion panel that needs to feel like a change of gear, not a
 * continuation of the argument above it.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO OFFICE, ANYWHERE IN THIS SECTION
 * ---------------------------------------------------------------------------
 * No address, no "visit us", no map pin, no hours. A closing panel that
 * names a region and shows a phone number is the most natural place on
 * a page to imply a branch, and none of these markets has one
 * (CLAUDE.md §11, 18 §86-87).
 *
 * ⚠ THE PHONE IS AUTHORED, NOT DERIVED. It is market-scoped, so the
 * template does not supply it: a page inherits no other market's line.
 */
export interface RegionalCoveragePanelProps {
  content: RegionalCoverageContent
  density?: SectionDensity
  id?: string
}

export function RegionalCoveragePanel({
  content,
  density = 'dense',
  id = 'regional-coverage',
}: RegionalCoveragePanelProps) {
  const primary = resolveApprovedLink(content.primary.pageId, {
    label: content.primary.label,
  })
  const secondary =
    content.secondary !== undefined
      ? resolveApprovedLink(content.secondary.pageId, {
          label: content.secondary.label,
        })
      : undefined

  return (
    <Section density={density} surface="muted" labelledBy={id}>
      <div className="rounded-md border border-border bg-background p-6 sm:p-8 lg:p-10">
        <div className="max-w-[52rem]">
          <SectionHeading
            id={id}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          {content.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-body text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {/*
          ⚠ THE PHONE IS A LINK, NOT A THIRD BUTTON. Three equal
          controls make a visitor choose before reading any of them;
          the two actions are the paths and the number is the
          alternative for someone who would rather talk. It stays
          visually distinct at every width.

          Full width below `sm` so a phone gets real tap targets.
        */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href={primary.href} className="w-full sm:w-auto">
            {primary.label}
          </ButtonLink>
          {secondary !== undefined && (
            <ButtonLink
              href={secondary.href}
              variant="accent"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </ButtonLink>
          )}
          {content.phone !== undefined && (
            <a
              href={content.phone.href}
              className="text-body font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
            >
              {content.phone.label}
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}

/** Whether the section has anything to render. */
export function regionalCoverageRenders(
  content: RegionalCoverageContent | undefined,
): content is RegionalCoverageContent {
  return content !== undefined
}
