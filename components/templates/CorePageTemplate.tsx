import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  TrustBar,
  FaqSection,
  RelatedLinks,
  CtaSection,
  LeadFormSection,
  relatedLinksRenders,
  faqSectionRenders,
} from '@/components/sections'
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
 * ⚠ /contact/ STILL SHOWS NO PHONE NUMBER, ADDRESS, OR EMAIL
 * ---------------------------------------------------------------------------
 * None of the three is documented anywhere in the project (established
 * when the business config was built), and 01 §35/CLAUDE.md §23 treat a
 * fabricated one as worse than a page that cannot yet show it. Resolving
 * PENDING-002 is what completes this page — not a placeholder.
 *
 * This no longer describes the FORM, though — PENDING-008 closed and
 * `LeadFormSection` is live sitewide (`components/sections/LeadFormSection.tsx`).
 * `/contact/` passes `hideCta` and so never reaches the closing
 * `CtaSection` this file renders below; giving that page its own form is
 * a separate, larger change to this route, not something this template
 * edit took on.
 *
 * ---------------------------------------------------------------------------
 * ⚠ /about/ CLAIMS
 * ---------------------------------------------------------------------------
 * 01 §35 lists what the About page may not assert without evidence:
 * years in business, inspections completed, customers served, staff
 * counts, certifications, licensing. 15 §67 additionally requires
 * schema match visible content, so anything added here has to be true
 * before it can be marked up later.
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS TYPE TOOK FROM THE PORT, AND WHAT IT DID NOT
 * ---------------------------------------------------------------------------
 * TOOK: the trust strip, and the related -> FAQ -> CTA tail order.
 *
 * DID NOT TAKE: the authority band. `/about/` is already a page about
 * how the business works, so a band restating four proof points would
 * repeat the body rather than reinforce it (18 §155 treats repetition
 * as a failure). `/faq/` and `/contact/` have no argument to make at
 * all.
 *
 * The band is also the reason the tail order matters here: it is a
 * brand surface and so is the closing CTA panel, and with `/contact/`
 * passing `hideCta` the two could not be reliably separated on every
 * page this template serves.
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
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  const densities: SectionDensity[] = [
    'standard',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    'dense',
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    ...(hideCta ? [] : (['sparse'] as const)),
  ]

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
      }}
    >
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

      <TrustBar />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
        />
      )}

      {content.faq !== undefined && (
        <FaqSection entries={content.faq} openFirst />
      )}

      {/*
        ⚠ `action={null}`, NOT OMITTED. The form in `proof` carries its
        own submit button, so a second one pointing at `/contact/` is a
        competing ask beside a form already on screen rather than a
        stronger one (18 §62) — the same rule the home page's and
        `/about/`'s closing CTA already follow. `/contact/` itself never
        reaches this branch (`hideCta`), so only `/faq/` renders it today.
      */}
      {!hideCta && (
        <CtaSection
          variant="panel"
          title={content.cta?.title ?? 'Schedule an inspection'}
          body={content.cta?.body}
          action={null}
          proof={
            <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
              <LeadFormSection bare density="standard" idPrefix="cta-lead" />
            </div>
          }
        />
      )}
    </PageShell>
  )
}
