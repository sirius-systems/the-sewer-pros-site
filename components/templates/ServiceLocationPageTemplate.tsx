import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  ProcessSteps,
  FaqSection,
  RelatedLinks,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ServiceLocationPageContent } from '@/types'

/**
 * Service + location page.
 *
 * Governed by docs/05-url-routing-strategy.md §119;
 * docs/14-content-specification.md; docs/18-design-system.md §108;
 * CLAUDE.md §19-21, §62.
 *
 * ===========================================================================
 * THE PAGE FAMILY THE WHOLE GOVERNANCE MODEL EXISTS TO CONSTRAIN
 * ===========================================================================
 * There are 10,422 service × location relationships and FOURTEEN
 * approved service + location pages. This template renders those
 * fourteen.
 *
 * 18 §108 names the exact failure to avoid: service + location pages
 * "should not all appear as Hero / 3 Cards / Text / FAQ / CTA with only
 * token substitutions."
 *
 * So the structure here is intentionally minimal — hero, prose, an
 * optional process, FAQ, related links, CTA — and nothing is
 * auto-composed from registry data. Every one of these pages has to
 * earn its existence through writing, and both of CLAUDE.md §21's
 * relevant tests apply at once:
 *
 *   location test — could the city name be swapped and the page stand?
 *   service test  — could the service name be swapped and the copy hold?
 *
 * If either passes, the page should not ship. No template can enforce
 * that; it can only decline to make the shortcut easy, which is why
 * there is no "nearby areas" grid and no generated service list here.
 *
 * 05 §119: a local service page is a separate canonical page, not a
 * variant of the canonical service page. Its `relatedPageIds` should
 * point to the canonical service and the parent location so the reader
 * can move up the hierarchy (16 §25).
 */
export interface ServiceLocationPageTemplateProps {
  page: MasterPageRecord
  content: ServiceLocationPageContent
}

export function ServiceLocationPageTemplate({
  page,
  content,
}: ServiceLocationPageTemplateProps) {
  const densities: SectionDensity[] = [
    'sparse',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.process !== undefined ? (['standard'] as const) : []),
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

      {content.process !== undefined && (
        <ProcessSteps
          id="what-happens"
          title="What happens on site"
          steps={content.process}
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
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
