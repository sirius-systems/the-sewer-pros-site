import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ProblemGrid,
  InclusionsGrid,
  ProcessSteps,
  Differentiator,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  MarketCoverage,
  FaqSection,
  RelatedLinks,
  CtaSection,
  authorityBandRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ServicePageContent } from '@/types'

/**
 * Canonical service page.
 *
 * Structure ported from the `power` composition maps, resolved against
 * docs/18-design-system.md §111 — see docs/22-decisions-change-log.md
 * for the decision and its exclusions:
 *
 *   Hero → Trust strip → Service overview → Independent-model split
 *   → When you may need this → What's included → Process
 *   → Authority band → Proof* → Testimonial* → Form*
 *   → Markets → Related → FAQ → Final CTA
 *
 * `*` renders nothing until its data gate opens. See
 * `components/sections/index.ts`.
 *
 * ---------------------------------------------------------------------------
 * TAIL ORDER CHANGED
 * ---------------------------------------------------------------------------
 * Related now precedes the FAQ. Both the reference composition and its
 * type-level spec place the FAQ "after the related-services strip,
 * before the closing CTA band"; this template previously ran FAQ →
 * related → CTA.
 *
 * ---------------------------------------------------------------------------
 * BOTH THE SPLIT AND THE BAND
 * ---------------------------------------------------------------------------
 * The reference map carries an editorial why-choose-us split AND a dark
 * authority band as separate sections, so both appear here and they are
 * not alternatives:
 *
 *   Differentiator  18 §64's model contrast — muted, editorial, two
 *                   columns. Opt-in per page via `showDifferentiator`.
 *   AuthorityBand   the brand-surface proof points, always rendered.
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection variant="panel"`
 * are the only two brand surfaces in the system, and stacking dark
 * sections is a named anti-pattern (18 §11). At least one non-brand
 * section must sit between them — in practice the related strip and the
 * FAQ. A service page with neither would place them adjacent.
 *
 * 18 §109: "Core Service — service-led and technical." The hero stays
 * editorial: no approved photography exists (18 §28-34), and 18 §37
 * says a hero must not depend on a decorative image to explain the page.
 *
 * The middle explanatory block arrives as `content.body`, so the
 * template fixes the ORDER and the RHYTHM while the writing stays free
 * (14 §21's substitution tests demand genuinely different copy per
 * service — a field-per-heading schema would work against that).
 */
export interface ServicePageTemplateProps {
  page: MasterPageRecord
  content: ServicePageContent
}

export function ServicePageTemplate({
  page,
  content,
}: ServicePageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  //
  // The three gated sections contribute NO entry, because they render
  // nothing. When a gate opens, add its density at the same position.
  //
  // The process band is `dense` rather than `standard` on purpose:
  // with `problems` and `inclusions` unauthored, body → differentiator
  // → process → authority would otherwise be four consecutive
  // `standard` sections, which is exactly the run 18 §108 rejects.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.showDifferentiator === true ? (['standard'] as const) : []),
    ...(content.problems !== undefined ? (['standard'] as const) : []),
    ...(content.inclusions !== undefined ? (['dense'] as const) : []),
    ...(content.process !== undefined ? (['dense'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(content.showMarkets === true ? (['dense'] as const) : []),
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []),
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

      <TrustBar />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.showDifferentiator === true && (
        <Differentiator title="Inspection without a repair sale attached" />
      )}

      {content.problems !== undefined && (
        <ProblemGrid
          id="when-you-may-need-this"
          title="When you may need this"
          items={content.problems}
        />
      )}

      {content.inclusions !== undefined && (
        <InclusionsGrid
          id="whats-included"
          title="What's included"
          items={content.inclusions}
        />
      )}

      {content.process !== undefined && (
        <ProcessSteps
          density="dense"
          id="how-it-works"
          title="How it works"
          steps={content.process}
        />
      )}

      <AuthorityBand title="How we work" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      <LeadFormSection />

      {content.showMarkets === true && (
        <MarketCoverage density="dense" title="Where this service is available" />
      )}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related services'}
          pageIds={content.relatedPageIds}
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
