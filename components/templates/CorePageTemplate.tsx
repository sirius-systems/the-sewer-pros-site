import { Section, Prose, type SectionDensity } from '@/components/ui'
import { FaqSection, RelatedLinks, CtaSection } from '@/components/sections'
import { PageShell } from './PageShell'
import type { CorePageContent, MasterPageRecord } from '@/types'

/**
 * Core page — `/about/`, `/contact/`, `/faq/`.
 *
 * Governed by docs/18-design-system.md §118, §120;
 * docs/15-schema-entity-strategy.md §32-33;
 * docs/01-business-brand-foundation.md §35.
 *
 * A plain reading-width layout. 18 §118 asks that simpler pages use the
 * same typography and chrome with a simplified content layout rather
 * than bespoke design.
 *
 * ---------------------------------------------------------------------------
 * ⚠ /contact/ CANNOT YET SHOW CONTACT DETAILS
 * ---------------------------------------------------------------------------
 * No phone number, address, or email is documented anywhere in the
 * project (established when the business config was built), and
 * PENDING-008 leaves the service form's fields undecided, so no form is
 * rendered either.
 *
 * That is an uncomfortable but honest state for a contact page, and it
 * is the correct one under 01 §35 and CLAUDE.md §23: a fabricated
 * number is worse than a page that cannot yet take a call. Resolving
 * PENDING-002 and PENDING-008 is what completes this page — not a
 * placeholder.
 *
 * ---------------------------------------------------------------------------
 * ⚠ /about/ CLAIMS
 * ---------------------------------------------------------------------------
 * 01 §35 lists what the About page may not assert without evidence:
 * years in business, inspections completed, customers served, staff
 * counts, certifications, licensing. 15 §67 additionally requires
 * schema match visible content, so anything added here has to be true
 * before it can be marked up later.
 */
export interface CorePageTemplateProps {
  page: MasterPageRecord
  content: CorePageContent
  /** Suppresses the closing CTA — e.g. on `/contact/` itself. */
  hideCta?: boolean
}

export function CorePageTemplate({
  page,
  content,
  hideCta = false,
}: CorePageTemplateProps) {
  const densities: SectionDensity[] = [
    'standard',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.faq !== undefined ? (['dense'] as const) : []),
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []),
    ...(hideCta ? [] : (['sparse'] as const)),
  ]

  return (
    <PageShell page={page} densities={densities}>
      <Section density="standard" width="reading">
        <header>
          <h1 className="text-h1 font-semibold tracking-tight text-balance">
            {content.hero.title}
          </h1>
          {content.hero.intro !== undefined && (
            <div className="mt-5 text-body-lg text-muted-foreground">
              {content.hero.intro}
            </div>
          )}
        </header>
      </Section>

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.faq !== undefined && (
        <FaqSection entries={content.faq} openFirst />
      )}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
          pageIds={content.relatedPageIds}
        />
      )}

      {!hideCta && (
        <CtaSection
          variant="panel"
          title={content.cta?.title ?? 'Schedule an inspection'}
          body={content.cta?.body}
        />
      )}
    </PageShell>
  )
}
