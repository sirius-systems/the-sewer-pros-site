import Image from 'next/image'
import { type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ProblemGrid,
  ProcessSteps,
  IndependentProcess,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  FaqSection,
  RelatedLinks,
  CtaSection,
  DeliverablesSection,
  CameraImageSlot,
  MarketRouter,
  DefinitionSection,
  LimitationsPanel,
  PrepPanel,
  AudiencePathways,
  EvidenceGallery,
  ServiceComparison,
  evidenceRenders,
  authorityBandRenders,
  processStepsRenders,
  relatedLinksRenders,
  faqSectionRenders,
  problemGridRenders,
  deliverablesSectionRenders,
} from '@/components/sections'
import { resolveCameraImage } from '@/data/business/camera-inspection-images'
import { getService } from '@/data/services'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ServicePageContent } from '@/types'

/**
 * Service HUB page: `ServicePageTemplate` plus the brand-level sections
 * a flagship service needs (market router, definition, limitations,
 * deliverables, audience pathways, evidence, comparison).
 *
 * `ServicePageTemplate` hands off here when `content.hub` is set, so the
 * other service pages are untouched.
 *
 *   Hero -> Trust strip -> Market router -> Definition
 *   -> When to schedule -> Can / cannot show -> Process + prep
 *   -> What you receive -> Independent-model band -> Audiences
 *   -> Evidence* -> Comparison -> Authority band -> Proof* -> Testimonial*
 *   -> Form* -> Related -> FAQ -> Final CTA
 *
 * `*` renders nothing until its data gate opens.
 *
 * ⚠ TWO BRAND SURFACES MUST NEVER TOUCH (18 §11). The trust strip is
 * followed by the market router; the independent-model band sits between
 * deliverables and audiences; the authority band is followed by related
 * links, then the FAQ, before the closing CTA panel.
 *
 * The hero is copy over a full-width backdrop, with no image column.
 */
const HERO_IMAGE =
  '/images/services/sewer-camera-inspection/hero/the-sewer-pros-ridgid-seesnake-camera-inspection-hero-16x9.webp'

export interface ServiceHubTemplateProps {
  page: MasterPageRecord
  content: ServicePageContent
}

export function ServiceHubTemplate({ page, content }: ServiceHubTemplateProps) {
  const hub = content.hub
  if (hub === undefined) return null

  const consult = resolveCameraImage('consult')
  const showEvidence = evidenceRenders(hub.evidence)
  const showDeliverables = deliverablesSectionRenders(hub.deliverables)

  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(hub.marketRouter !== undefined ? (['standard'] as const) : []),
    ...(hub.definition !== undefined ? (['standard'] as const) : []),
    ...(problemGridRenders(content.problems) ? (['standard'] as const) : []),
    ...(hub.limitations !== undefined ? (['dense'] as const) : []),
    ...(content.process !== undefined && processStepsRenders(content.process)
      ? (['dense'] as const)
      : []),
    ...(hub.prep !== undefined ? (['dense'] as const) : []),
    ...(showDeliverables ? (['standard'] as const) : []),
    ...(content.showDifferentiator === true ? (['standard'] as const) : []),
    ...(hub.audiences !== undefined ? (['dense'] as const) : []),
    ...(showEvidence ? (['standard'] as const) : []),
    ...(hub.comparison !== undefined ? (['dense'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(relatedLinksRenders(content.relatedPageIds) ? (['dense'] as const) : []),
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
      {/*
        Full-width photograph behind the copy. `Hero` flips its copy white
        whenever `backdrop` is supplied, so the scrim must hold that text:
        the project's measured `.hero-scrim` plus a left-weighted gradient,
        because the equipment sits on the left where the copy does. The
        image is decoration (`alt=""`); the eyebrow, H1 and intro carry
        the meaning. Static export means no responsive downscale, so this
        is the full-size file (see `services-hub-backdrop.ts`).
      */}
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        secondaryAction={content.hero.secondaryAction}
        copyWidth="narrow"
        backdrop={
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-brand">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              priority
              sizes="100vw"
              className="h-full w-full object-cover object-[15%_50%]"
            />
            <div className="hero-scrim absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
          </div>
        }
      />

      <TrustBar />

      {hub.marketRouter !== undefined && <MarketRouter content={hub.marketRouter} />}

      {hub.definition !== undefined && <DefinitionSection content={hub.definition} />}

      {content.problems !== undefined && (
        <ProblemGrid
          id="when-to-schedule"
          title="When should you schedule a sewer camera inspection?"
          items={content.problems}
        />
      )}

      {hub.limitations !== undefined && <LimitationsPanel content={hub.limitations} />}

      {content.process !== undefined && (
        <ProcessSteps
          density="dense"
          id="how-it-works"
          title="What happens during a sewer camera inspection?"
          steps={content.process}
        />
      )}

      {hub.prep !== undefined && <PrepPanel content={hub.prep} />}

      {showDeliverables && hub.deliverables !== undefined && (
        <DeliverablesSection
          content={hub.deliverables}
          imageSlot={
            consult !== null ? (
              <CameraImageSlot slot="consult" sizes="(min-width: 1024px) 40vw, 100vw" />
            ) : undefined
          }
        />
      )}

      {content.showDifferentiator === true && (
        <IndependentProcess density="standard" />
      )}

      {hub.audiences !== undefined && <AudiencePathways content={hub.audiences} />}

      {showEvidence && hub.evidence !== undefined && (
        <EvidenceGallery content={hub.evidence} />
      )}

      {hub.comparison !== undefined && <ServiceComparison content={hub.comparison} />}

      <AuthorityBand title="How we work" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      <LeadFormSection />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related services'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
        />
      )}

      {content.faq !== undefined && (
        <FaqSection
          title={
            page.serviceId !== undefined
              ? `Common questions about ${getService(page.serviceId).name}`
              : undefined
          }
          entries={content.faq}
        />
      )}

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
    </PageShell>
  )
}
