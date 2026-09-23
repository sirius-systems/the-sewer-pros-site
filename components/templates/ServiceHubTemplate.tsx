import { Fragment, type ReactNode } from 'react'
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
  BackdropImage,
  SymptomRouter,
  MarketRouter,
  DefinitionSection,
  LimitationsPanel,
  InspectionProcess,
  AudiencePathways,
  EvidenceGallery,
  ServiceComparison,
  RequestServiceSection,
  MobileContactBar,
  evidenceRenders,
  authorityBandRenders,
  faqSectionRenders,
  problemGridRenders,
  deliverablesSectionRenders,
} from '@/components/sections'
import { homeServiceCards } from '@/content/pages/home-service-cards'
import { resolveHubImage } from '@/data/business/hub-images'
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
 * Default order (sewer camera inspection):
 *
 *   Hero -> Trust strip -> Market router -> Definition
 *   -> When to schedule -> Can / cannot show -> Process + prep + image
 *   -> What you receive -> Independent-model band -> Audiences
 *   -> Evidence* -> Comparison -> Authority band -> Proof* -> Testimonial*
 *   -> Form* -> Related -> FAQ -> Final CTA
 *
 * `hub.decisionFirst` (sewer cleaning) moves the comparison ahead of the
 * market router and audiences:
 *
 *   ... Process -> Deliverables* -> Comparison -> Market router
 *   -> Audiences -> Evidence* -> Independent-model band -> Authority band ...
 *
 * `*` renders nothing until its data gate opens.
 *
 * ⚠ TWO BRAND SURFACES MUST NEVER TOUCH (18 §11). The trust strip is
 * followed by the market router (or the definition); the independent-model
 * band sits between deliverables and audiences; the authority band is
 * followed by related links, then the FAQ, before the closing CTA panel.
 *
 * The hero is copy over a full-width backdrop, with no image column.
 *
 * ⚠ IMAGES DEFAULT TO THE CAMERA HUB'S. Another hub overrides them through
 * `hub.images`; a backdrop file that does not exist yet renders the brand
 * surface under the scrim (see `BackdropImage`), so nothing breaks while
 * photography is pending.
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

const SCHEDULE_HEADING = {
  title: 'When to Consider a Sewer Camera Inspection',
  intro:
    'Use a camera inspection when you need visual information about a recurring drainage problem or want to understand the condition of an accessible portion of a sewer line.',
} as const

export interface ServiceHubTemplateProps {
  page: MasterPageRecord
  content: ServicePageContent
}

export function ServiceHubTemplate({ page, content }: ServiceHubTemplateProps) {
  const hub = content.hub
  if (hub === undefined) return null

  const images = hub.images
  const heroImage = images?.hero ?? HERO_IMAGE
  const decisionFirst = hub.decisionFirst === true
  const scheduleHeading = hub.headings?.schedule ?? SCHEDULE_HEADING

  const deliverablesImage = resolveHubImage(images?.deliverables ?? 'findings-review')
  const showEvidence = evidenceRenders(hub.evidence)
  const showDeliverables = deliverablesSectionRenders(hub.deliverables)

  /*
    Each entry is a section and the density it contributes to the rhythm
    check, in render order, so the two can never drift apart. `null`
    density means the section is not counted (it renders nothing or sits
    outside the rhythm, as before).
  */
  const blocks: [SectionDensity | null, string, ReactNode][] = []
  const add = (density: SectionDensity | null, key: string, node: ReactNode) => {
    blocks.push([density, key, node])
  }

  /*
    Full-width photograph behind the copy. `Hero` flips its copy white
    whenever `backdrop` is supplied, so the scrim must hold that text:
    the project's measured `.hero-scrim` plus a left-weighted gradient.
    The image is decoration (`alt=""`); the eyebrow, H1 and intro carry
    the meaning. Static export means no responsive downscale, so this is
    the full-size file (see `services-hub-backdrop.ts`). A missing file
    leaves the brand surface under the same scrim.
  */
  add(
    'sparse',
    'hero',
    <Hero
      variant="editorial"
      eyebrow={content.hero.eyebrow}
      title={content.hero.title}
      intro={content.hero.intro}
      primaryAction={content.hero.primaryAction}
      secondaryAction={content.hero.secondaryAction}
      copyWidth="narrow"
      backdrop={
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-brand">
          <BackdropImage src={heroImage} priority className="object-cover object-[15%_50%]" />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        </div>
      }
    />,
  )

  add('dense', 'trust', <TrustBar />)

  const router =
    hub.marketRouter !== undefined ? <MarketRouter content={hub.marketRouter} /> : null

  if (!decisionFirst && router !== null) add('standard', 'router', router)

  if (hub.definition !== undefined) {
    add(
      'standard',
      'definition',
      <DefinitionSection content={hub.definition} slots={images?.definition} />,
    )
  }

  if (hub.symptomRouter !== undefined) {
    add('standard', 'symptoms', <SymptomRouter content={hub.symptomRouter} />)
  } else if (content.problems !== undefined) {
    add(
      problemGridRenders(content.problems) ? 'standard' : null,
      'schedule',
      <ScheduleGrid
        id="when-to-schedule"
        title={scheduleHeading.title}
        intro={scheduleHeading.intro}
        items={content.problems}
        imageSrc={images?.schedule ?? SCHEDULE_IMAGE}
      />,
    )
  }

  if (hub.limitations !== undefined) {
    add('dense', 'limitations', <LimitationsPanel content={hub.limitations} />)
  }

  if (content.process !== undefined) {
    add(
      'standard',
      'process',
      <InspectionProcess
        title={hub.headings?.process ?? 'What happens during a sewer camera inspection?'}
        steps={content.process}
        prep={hub.prep}
        imageSlot={images?.process}
        icons={hub.processIcons}
      />,
    )
  }

  if (showDeliverables && hub.deliverables !== undefined) {
    add(
      'standard',
      'deliverables',
      <DeliverablesSection
        content={hub.deliverables}
        imageSlot={
          deliverablesImage !== null ? (
            <CameraImageSlot
              slot={deliverablesImage.key}
              hideCaption
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          ) : undefined
        }
      />,
    )
  }

  const independent = content.showDifferentiator === true ? <IndependentProcess density="standard" /> : null
  const audiences =
    hub.audiences !== undefined ? <AudiencePathways content={hub.audiences} /> : null
  const evidence =
    showEvidence && hub.evidence !== undefined ? <EvidenceGallery content={hub.evidence} /> : null
  const comparison =
    hub.comparison !== undefined ? (
      <ServiceComparison content={hub.comparison} imageSrc={images?.comparison ?? COMPARISON_IMAGE} />
    ) : null

  if (decisionFirst) {
    if (comparison !== null) add('dense', 'comparison', comparison)
    if (router !== null) add('standard', 'router', router)
    if (audiences !== null) add('dense', 'audiences', audiences)
    if (evidence !== null) add('standard', 'evidence', evidence)
    if (independent !== null) add('standard', 'independent', independent)
  } else {
    if (independent !== null) add('standard', 'independent', independent)
    if (audiences !== null) add('dense', 'audiences', audiences)
    if (evidence !== null) add('standard', 'evidence', evidence)
    if (comparison !== null) add('dense', 'comparison', comparison)
  }

  add(authorityBandRenders() ? 'standard' : null, 'authority', (
    <AuthorityBand title="How we work" icons actionVariant="primary" />
  ))
  add(null, 'proof', <ProofGallery title="Recent work" />)
  add(null, 'testimonial', <TestimonialBand />)

  add(
    hub.request !== undefined ? 'standard' : null,
    'request',
    hub.request !== undefined ? (
      <RequestServiceSection
        id={hub.request.id}
        content={hub.request}
        imageSrc={images?.request ?? REQUEST_IMAGE}
      >
        <LeadFormSection
          bare
          density="standard"
          idPrefix="request-lead"
          defaultServiceId={hub.defaultServiceId}
        />
      </RequestServiceSection>
    ) : (
      <LeadFormSection defaultServiceId={hub.defaultServiceId} />
    ),
  )

  if (content.relatedPageIds !== undefined) {
    add(
      'dense',
      'related',
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
      />,
    )
  }

  if (content.faq !== undefined) {
    add(
      faqSectionRenders(content.faq) ? 'standard' : null,
      'faq',
      <FaqSection
        title={hub.headings?.faq ?? 'Common Questions About Sewer Camera Inspection'}
        entries={content.faq}
        columns={2}
        surface="muted"
        density="standard"
      />,
    )
  }

  if (hub.closing !== undefined) {
    add(
      null,
      'closing',
      <RequestServiceSection
        id="cta"
        content={hub.closing}
        imageSrc={images?.closing ?? CLOSING_IMAGE}
        density="sparse"
      >
        <LeadFormSection
          bare
          density="standard"
          idPrefix="cta-lead"
          id="cta-request-service"
          defaultServiceId={hub.defaultServiceId}
        />
      </RequestServiceSection>,
    )
  }

  const densities: SectionDensity[] = [
    ...blocks.flatMap(([density]) => (density === null ? [] : [density])),
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
      {blocks.map(([, key, node]) => (
        <Fragment key={key}>{node}</Fragment>
      ))}
      {hub.mobileBar === true && <MobileContactBar />}
    </PageShell>
  )
}
