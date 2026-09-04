import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ProblemGrid,
  InclusionsGrid,
  ServiceIndex,
  ProcessSteps,
  Differentiator,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  FaqSection,
  RelatedLinks,
  CtaSection,
  authorityBandRenders,
  serviceIndexRenders,
  processStepsRenders,
  relatedLinksRenders,
  faqSectionRenders,
  problemGridRenders,
  inclusionsGridRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { AudiencePageContent, MasterPageRecord } from '@/types'

/**
 * Audience page.
 *
 * Structure ported from the `power` composition maps, resolved against
 * docs/18-design-system.md §113:
 *
 *   Hero → Trust strip → Audience problem → Independent-model split
 *   → Scenarios → What's included → Relevant services → Process
 *   → Authority band → Proof* → Testimonial* → Form*
 *   → Related → FAQ → CTA
 *
 * `*` renders nothing until its data gate opens.
 *
 * 18 §109: "Audience — problem/use-case led." The differentiator is on
 * unconditionally here, unlike the service template: 09 §79-83 route
 * every audience through the independent-inspection argument, and for
 * buyers and agents it is the reason the page exists.
 *
 * ---------------------------------------------------------------------------
 * OPERATIONAL REGISTER, NOT CONSUMER
 * ---------------------------------------------------------------------------
 * The reference map for this type is explicit that the tone is
 * "operationally credible, not just friendly" — this reader is
 * evaluating a vendor relationship and cares about process,
 * documentation, and reliability at scale. Its anti-patterns name tone
 * drifting consumer-friendly as the failure.
 *
 * The services section is `dense`, denser than the home page's, for the
 * same reason: it should read as framed around this audience's use
 * cases rather than as the general catalog.
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
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection variant="panel"`
 * are the only brand surfaces. Related and FAQ sit between them
 * (18 §11).
 */
export interface AudiencePageTemplateProps {
  page: MasterPageRecord
  content: AudiencePageContent
}

export function AudiencePageTemplate({
  page,
  content,
}: AudiencePageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The three gated sections contribute no entry — they render nothing.
  //
  // Services is `dense` per the reference map. That also breaks what
  // was previously a four-section `standard` run through body →
  // services → process → differentiator, a live rhythm warning on
  // /for/home-buyers/ and /for/property-managers/ before the port.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    'standard',
    ...(problemGridRenders(content.problems)
      ? (['standard'] as const)
      : []),
    ...(inclusionsGridRenders(content.inclusions)
      ? (['dense'] as const)
      : []),
    ...(serviceIndexRenders(content.services) ? (['dense'] as const) : []),
    ...(content.process !== undefined && processStepsRenders(content.process)
      ? (['standard'] as const)
      : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
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

      <Differentiator title="Why an independent inspection matters here" />

      {content.problems !== undefined && (
        <ProblemGrid
          id="common-situations"
          title="Common situations"
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

      {content.services !== undefined && (
        <ServiceIndex
          density="dense"
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

      <AuthorityBand title="How we work" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      <LeadFormSection />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related reading'}
          pageIds={content.relatedPageIds}
        />
      )}

      {/*
        ⚠ THE AUDIENCE NAME COMES FROM `page.name`, NOT FROM A REGISTRY.

        There is no audience data registry in this project. `types/audience.ts`
        declares an `Audience` interface with a `name`, and
        `LAUNCH_AUDIENCE_IDS`, but nothing under `data/` populates it — so
        there is no `getAudience()` to call, unlike `getService` and
        `requireLocation` used by the sibling templates.

        `page.name` IS the audience's display name on all six approved
        records ("Home Buyers", "Property Managers", "HOA Communities"),
        so it is used directly rather than casing one out of the id,
        which 09's slug note warns against for the analogous case.

        The `audienceId` check is a guard on the page TYPE, not on where
        the name comes from: it asserts this really is an audience page
        before reading `page.name` as an audience name. If an audience
        registry is ever added, this should read from it instead.

        Heading pattern per the owner's FAQ heading structure
        (2026-09-04): audience pages name no service, because an
        audience page shows a filtered index of several (18 §113).
      */}
      {content.faq !== undefined && (
        <FaqSection
          title={
            page.audienceId !== undefined
              ? `Answers to common questions ${page.name} have`
              : undefined
          }
          entries={content.faq}
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
