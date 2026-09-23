import Image from 'next/image'
import { type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ScheduleGrid,
  IndependentProcess,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  FaqSection,
  ServiceIndex,
  DeliverablesSection,
  CameraImageSlot,
  MarketRouter,
  DefinitionSection,
  LimitationsPanel,
  InspectionProcess,
  AudiencePathways,
  EvidenceGallery,
  ServiceComparison,
  RequestServiceSection,
  evidenceRenders,
  authorityBandRenders,
  faqSectionRenders,
  problemGridRenders,
  deliverablesSectionRenders,
} from '@/components/sections'
import { homeServiceCards } from '@/content/pages/home-service-cards'
import { resolveCameraImage } from '@/data/business/camera-inspection-images'
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
 *   -> When to schedule -> Can / cannot show -> Process + prep + image
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

const SCHEDULE_IMAGE =
  '/images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-camera-reel-cable-equipment-detail-4x3.webp'

const COMPARISON_IMAGE =
  '/images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-sewer-camera-inspection-comparison-background-16x9.webp'

const REQUEST_IMAGE =
  '/images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-sewer-inspection-request-form-background-16x9.webp'

const CLOSING_IMAGE =
  '/images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-camera-inspection-cleanout-cta-background-16x9.webp'

export interface ServiceHubTemplateProps {
  page: MasterPageRecord
  content: ServicePageContent
}

export function ServiceHubTemplate({ page, content }: ServiceHubTemplateProps) {
  const hub = content.hub
  if (hub === undefined) return null

  const findingsReview = resolveCameraImage('findings-review')
  const showEvidence = evidenceRenders(hub.evidence)
  const showDeliverables = deliverablesSectionRenders(hub.deliverables)

  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(hub.marketRouter !== undefined ? (['standard'] as const) : []),
    ...(hub.definition !== undefined ? (['standard'] as const) : []),
    ...(problemGridRenders(content.problems) ? (['standard'] as const) : []),
    ...(hub.limitations !== undefined ? (['dense'] as const) : []),
    ...(content.process !== undefined ? (['standard'] as const) : []),
    ...(showDeliverables ? (['standard'] as const) : []),
    ...(content.showDifferentiator === true ? (['standard'] as const) : []),
    ...(hub.audiences !== undefined ? (['dense'] as const) : []),
    ...(showEvidence ? (['standard'] as const) : []),
    ...(hub.comparison !== undefined ? (['dense'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(hub.request !== undefined ? (['standard'] as const) : []),
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []),
    ...(faqSectionRenders(content.faq) ? (['standard'] as const) : []),
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
        <ScheduleGrid
          id="when-to-schedule"
          title="When to Consider a Sewer Camera Inspection"
          intro="Use a camera inspection when you need visual information about a recurring drainage problem or want to understand the condition of an accessible portion of a sewer line."
          items={content.problems}
          imageSrc={SCHEDULE_IMAGE}
        />
      )}

      {hub.limitations !== undefined && <LimitationsPanel content={hub.limitations} />}

      {content.process !== undefined && (
        <InspectionProcess
          title="What happens during a sewer camera inspection?"
          steps={content.process}
          prep={hub.prep}
        />
      )}

      {showDeliverables && hub.deliverables !== undefined && (
        <DeliverablesSection
          content={hub.deliverables}
          imageSlot={
            findingsReview !== null ? (
              <CameraImageSlot slot="findings-review" hideCaption sizes="(min-width: 1024px) 40vw, 100vw" />
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

      {hub.comparison !== undefined && <ServiceComparison content={hub.comparison} imageSrc={COMPARISON_IMAGE} />}

      <AuthorityBand title="How we work" icons actionVariant="primary" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      {hub.request !== undefined ? (
        <RequestServiceSection content={hub.request} imageSrc={REQUEST_IMAGE}>
          <LeadFormSection bare density="standard" idPrefix="request-lead" />
        </RequestServiceSection>
      ) : (
        <LeadFormSection />
      )}

      {content.relatedPageIds !== undefined && (
        <ServiceIndex
          variant="cards"
          columns={2}
          density="dense"
          id="related-services"
          title={content.relatedTitle ?? 'Related services'}
          items={content.relatedPageIds.map((pageId) => {
            // Same card artwork and copy the /services/ hub uses, where a
            // service has them; the two guides carry only their own text.
            const card = homeServiceCards.find((c) => c.pageId === pageId)
            return {
              pageId,
              description: card?.description ?? content.relatedDescriptions?.[pageId],
              image: card?.image,
            }
          })}
        />
      )}

      {content.faq !== undefined && (
        <FaqSection
          title="Common Questions About Sewer Camera Inspection"
          entries={content.faq}
          columns={2}
          surface="muted"
          density="standard"
        />
      )}

      {hub.closing !== undefined && (
        <RequestServiceSection
          id="cta"
          content={hub.closing}
          imageSrc={CLOSING_IMAGE}
          density="sparse"
        >
          <LeadFormSection bare density="standard" idPrefix="cta-lead" />
        </RequestServiceSection>
      )}
    </PageShell>
  )
}
