import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  ProcessSteps,
  Differentiator,
  MarketCoverage,
  FaqSection,
  RelatedLinks,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ServicePageContent } from '@/types'

/**
 * Canonical service page.
 *
 * Structure from docs/18-design-system.md §111:
 *
 *   Service Hero → Problem/Need → How Service Works → What It Reveals
 *   → Process → Why The Sewer Pros → Related Services → Markets
 *   → FAQ → CTA
 *
 * The middle explanatory block arrives as `content.body`, so the
 * template fixes the ORDER and the RHYTHM while the writing stays free
 * (14 §21's substitution tests demand genuinely different copy per
 * service — a field-per-heading schema would work against that).
 *
 * 18 §109: "Core Service — service-led and technical." The hero is
 * editorial rather than split, since no approved photography exists and
 * 18 §39 warns against heroes that obscure search intent with generic
 * marketing slogans.
 *
 * Density sequence varies deliberately — sparse hero, standard prose,
 * standard process, standard differentiator, standard markets, dense
 * FAQ, dense related, sparse CTA panel — so no run of four lands
 * (18 §108).
 */
export interface ServicePageTemplateProps {
  page: MasterPageRecord
  content: ServicePageContent
}

export function ServicePageTemplate({
  page,
  content,
}: ServicePageTemplateProps) {
  // Explicit sequence, alternating deliberately. With every optional
  // section present this would otherwise run body/process/differentiator/
  // markets all at `standard` — the four-section run 18 §108 calls flat.
  // The rhythm check caught exactly that during development, which is
  // what it is for.
  const densities: SectionDensity[] = [
    'sparse',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.process !== undefined ? (['dense'] as const) : []),
    ...(content.showDifferentiator === true ? (['standard'] as const) : []),
    ...(content.showMarkets === true ? (['dense'] as const) : []),
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
          density="dense"
          id="how-it-works"
          title="How it works"
          steps={content.process}
        />
      )}

      {content.showDifferentiator === true && (
        <Differentiator title="Inspection without a repair sale attached" />
      )}

      {content.showMarkets === true && (
        <MarketCoverage density="dense" title="Where this service is available" />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related services'}
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
