import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ServiceIndex,
  ProcessSteps,
  Differentiator,
  MarketCoverage,
  FaqSection,
  RelatedLinks,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { HomePageContent, MasterPageRecord } from '@/types'

/**
 * Home page.
 *
 * Structure from docs/18-design-system.md §110:
 *
 *   Hero → Trust/Differentiator Bar → Core Services
 *   → Why Independent Inspection Matters → Markets → How It Works
 *   → Who We Help → Commercial → Proof → Resources → FAQ → Final CTA
 *
 * 18 §38: the homepage hero should feel brand-defining. It uses the
 * `display` type scale and the editorial pattern — no approved
 * photography exists (18 §28-34), and 18 §37 already says a hero must
 * not depend on a decorative image to explain the page.
 *
 * PROOF is omitted: no verified review or case-study data exists
 * (01 §35, §77; CLAUDE.md §76-77).
 *
 * Density runs sparse → dense → standard → standard → standard → dense
 * → dense → sparse. The strongest treatment is reserved for the final
 * CTA panel rather than repeated from the hero, per 18 §108.
 */
export interface HomePageTemplateProps {
  page: MasterPageRecord
  content: HomePageContent
}

export function HomePageTemplate({ page, content }: HomePageTemplateProps) {
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    'standard',
    ...(content.differentiator !== undefined ? (['standard'] as const) : []),
    'standard',
    ...(content.process !== undefined ? (['standard'] as const) : []),
    ...(content.body !== undefined ? (['standard'] as const) : []),
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
        secondaryAction={{ href: '/services/', label: 'View services' }}
      />

      <TrustBar />

      <ServiceIndex
        id="services"
        title="What we do"
        items={content.services}
        numbered
      />

      {content.differentiator !== undefined && (
        <Differentiator
          title={content.differentiator.title}
          intro={content.differentiator.intro}
        />
      )}

      <MarketCoverage />

      {content.process !== undefined && (
        <ProcessSteps
          id="how-it-works"
          title="How it works"
          steps={content.process}
        />
      )}

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Guides and resources'}
          pageIds={content.relatedPageIds}
        />
      )}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Find out what is happening in the line'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
