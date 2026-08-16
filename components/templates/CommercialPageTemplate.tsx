import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  ProcessSteps,
  FaqSection,
  RelatedLinks,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { CommercialPageContent, MasterPageRecord } from '@/types'

/**
 * Commercial service page.
 *
 * Structure from docs/18-design-system.md §114:
 *
 *   Commercial Hero → Operational Problems → Commercial Services
 *   → Property Types → Process → Why The Sewer Pros → Markets
 *   → Proof → FAQ → Commercial CTA
 *
 * 18 §109: "Commercial — operational and business-focused."
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE CTA MUST NOT BE THE RESIDENTIAL ONE
 * ---------------------------------------------------------------------------
 * 18 §139: "This CTA should not route users through a residential-
 * focused form." 17 lists "Request Commercial Service" as its own
 * approved conversion concept, so this template defaults its CTA label
 * to that rather than inheriting the global primary.
 *
 * The destination is still `/contact/` — the only approved conversion
 * page in doc 04. PENDING-008 (final form fields) is where the
 * commercial form path gets defined; until then a separate route would
 * be a fabricated one.
 *
 * ---------------------------------------------------------------------------
 * ⚠ COMMERCIAL COPY MUST BE GENUINELY COMMERCIAL
 * ---------------------------------------------------------------------------
 * CLAUDE.md §33 and §74, 09 §112: do not take residential content and
 * insert "commercial" into the headings. 09 §112 names industry-swap
 * publishing as prohibited, and CLAUDE.md §21's commercial test asks
 * whether "commercial property" could be swapped for "home" without
 * meaningful change.
 *
 * Only mention industries actually served (CLAUDE.md §33). Four of the
 * seven commercial services carry
 * `capability_confirmed_commercial_packaging_requires_validation` in
 * the service registry, so commercial packaging detail must not be
 * presented as an established offering (06 §43).
 */
export interface CommercialPageTemplateProps {
  page: MasterPageRecord
  content: CommercialPageContent
}

export function CommercialPageTemplate({
  page,
  content,
}: CommercialPageTemplateProps) {
  const densities: SectionDensity[] = [
    'sparse',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.process !== undefined ? (['standard'] as const) : []),
    ...(content.faq !== undefined ? (['dense'] as const) : []),
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []),
    'sparse',
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
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        primaryAction={{
          href: '/contact/',
          label: 'Request Commercial Service',
        }}
      />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.process !== undefined && (
        <ProcessSteps
          id="commercial-process"
          title="How commercial service works"
          steps={content.process}
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related commercial services'}
          pageIds={content.relatedPageIds}
        />
      )}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Request commercial service'}
        body={content.cta?.body}
        action={{ href: '/contact/', label: 'Request Commercial Service' }}
      />
    </PageShell>
  )
}
