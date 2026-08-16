import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  RelatedLinks,
  FaqSection,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { LocationPageContent, MasterPageRecord } from '@/types'

/**
 * Location page.
 *
 * Governed by docs/18-design-system.md §79, §112;
 * docs/14-content-specification.md; CLAUDE.md §20-21, §62, §73.
 *
 * ===========================================================================
 * THE HARDEST FAMILY TO KEEP HONEST
 * ===========================================================================
 * Location pages are where thin programmatic content appears if it is
 * going to. CLAUDE.md §21's location test is the standard: "Could the
 * city name be replaced with another market while leaving the page
 * largely unchanged? If yes, localization is insufficient."
 *
 * The template is therefore deliberately SPARSE in structure. It offers
 * a hero, a prose body, related service+location links, FAQ, and a CTA
 * — and nothing that could be auto-filled from a registry.
 *
 * There is no "local statistics" slot, no map, and no auto-generated
 * nearby-areas grid. Each would render identically for all 579
 * locations with a token swapped, which is precisely what 04 §2,
 * 14, and CLAUDE.md §19-20 prohibit. 18 §79 also rules out generic
 * skyline imagery and fake local technician photos.
 *
 * 18 §86 and §135: no map pins and no "office" language. No market has
 * a verified physical location, so a location page asserts service
 * relevance, never presence.
 */
export interface LocationPageTemplateProps {
  page: MasterPageRecord
  content: LocationPageContent
}

export function LocationPageTemplate({
  page,
  content,
}: LocationPageTemplateProps) {
  const densities: SectionDensity[] = [
    'sparse',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.servicePageIds !== undefined ? (['standard'] as const) : []),
    ...(content.faq !== undefined ? (['dense'] as const) : []),
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
      />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.servicePageIds !== undefined && (
        <RelatedLinks
          id="local-services"
          title={content.relatedTitle ?? 'Services in this area'}
          pageIds={content.servicePageIds}
          surface="default"
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
