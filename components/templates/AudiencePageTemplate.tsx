import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  ServiceIndex,
  ProcessSteps,
  Differentiator,
  FaqSection,
  RelatedLinks,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { AudiencePageContent, MasterPageRecord } from '@/types'

/**
 * Audience page.
 *
 * Structure from docs/18-design-system.md §113:
 *
 *   Audience Hero → Audience Problem → Relevant Services → Process
 *   → Why Independent Inspection Matters → Market Availability
 *   → Resources → FAQ → CTA
 *
 * 18 §109: "Audience — problem/use-case led." The differentiator is on
 * by default here, unlike the service template: 09 §79-83 route every
 * audience through the independent-inspection argument, and for buyers
 * and agents it is the reason the page exists.
 *
 * ⚠ CLAUDE.md §21's audience test governs the copy: "Could 'home
 * buyers' be replaced with 'property managers' without rewriting most
 * of the page? If yes, audience differentiation is insufficient."
 * 09 §63 adds that audience pages need distinct questions, distinct
 * conversion intent, and distinct service relationships — the template
 * cannot supply any of that, only the frame.
 *
 * ⚠ 18 §140 and 09 §79: real-estate audiences get a specific
 * inspection CTA rather than the generic one. Pass `content.cta` to set
 * it; the label still comes from the global constant (18 §155).
 *
 * No legal or contractual language — 09, 31, and CLAUDE.md §31 and §75
 * forbid legal advice on real-estate content.
 */
export interface AudiencePageTemplateProps {
  page: MasterPageRecord
  content: AudiencePageContent
}

export function AudiencePageTemplate({
  page,
  content,
}: AudiencePageTemplateProps) {
  const densities: SectionDensity[] = [
    'sparse',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.services !== undefined ? (['standard'] as const) : []),
    ...(content.process !== undefined ? (['standard'] as const) : []),
    'standard',
    ...(content.faq !== undefined ? (['dense'] as const) : []),
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []),
    'sparse',
  ]

  return (
    <PageShell page={page} densities={densities}>
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
      />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.services !== undefined && (
        <ServiceIndex
          id="relevant-services"
          title="Services that apply"
          items={content.services}
        />
      )}

      {content.process !== undefined && (
        <ProcessSteps
          id="what-to-expect"
          title="What to expect"
          steps={content.process}
        />
      )}

      <Differentiator title="Why an independent inspection matters here" />

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related reading'}
          pageIds={content.relatedPageIds}
        />
      )}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
