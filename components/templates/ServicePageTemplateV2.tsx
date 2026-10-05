import { Fragment, type ReactNode } from 'react'
import { type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ExperienceCounterStrip,
  IndependentProcess,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  MarketRouter,
  RequestServiceSection,
  MobileContactBar,
  BackdropImage,
} from '@/components/sections'
import { Section } from '@/components/ui'
import { SectionHeading } from '@/components/sections/SectionHeading'
import {
  SectionNav,
  SECTION_NAV_MIN,
  SignalList,
  LimitsPanel,
  ProcessTimeline,
  DecisionPanel,
  ServiceComparisonTable,
  AskList,
  EvidenceMosaic,
  evidenceMosaicRenders,
  AudienceRows,
  FaqGrouped,
  RelatedList,
  ServiceHeroRequestCard,
  type SectionNavItem,
} from '@/components/sections/service-v2'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ServicePageContent } from '@/types'

/**
 * Service Page Template v2.
 *
 * One data-driven template for the canonical service pages; a lighter
 * page is the same template with fewer sections. Order, surfaces and
 * densities follow `service-page-template-spec.md` section 2:
 *
 *   Hero (image, request card) -> Trust strip -> Counters
 *   -> Definition + On this page -> Signals -> Limits -> Process + prep
 *   -> Decision* -> Independent band (brand) -> Comparison -> Ask*
 *   -> Evidence* -> Audiences -> Proof* -> Testimonial* -> Markets
 *   -> FAQ (grouped) -> Related -> Final request (image, brand)
 *
 * `*` renders nothing until its data gate opens.
 *
 * ⚠ TWO BRAND SURFACES, NEVER ADJACENT (18 §11): the independent band
 * and the final request. The trust strip is rendered on the white
 * surface here (spec section 2) so the hero image is the only dark
 * section above the fold, and the counters strip is muted beneath it.
 *
 * ⚠ NO VIDEO. The hero is a still under the shared scrim, which keeps it
 * the LCP element.
 *
 * ⚠ THE TEMPLATE CARRIES NO COPY THAT MAKES A CLAIM. Every heading and
 * sentence comes from the content; the only literals here are
 * navigation labels.
 */
const HERO_IMAGE =
  '/images/services/sewer-camera-inspection/hero/the-sewer-pros-ridgid-seesnake-camera-inspection-hero-16x9.webp'

const REQUEST_IMAGE =
  '/images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-sewer-inspection-request-form-background-16x9.webp'

/** Id of the final request section: the target of every "request" action. */
const REQUEST_ID = 'request'

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export interface ServicePageTemplateV2Props {
  page: MasterPageRecord
  content: ServicePageContent
}

export function ServicePageTemplateV2({
  page,
  content,
}: ServicePageTemplateV2Props) {
  const v2 = content.v2
  if (v2 === undefined) return null

  const blocks: [SectionDensity | null, string, ReactNode][] = []
  const add = (density: SectionDensity | null, key: string, node: ReactNode) => {
    blocks.push([density, key, node])
  }

  // Sections after the definition, in order, for the "On this page" list.
  const nav: SectionNavItem[] = []
  let contentSections = 0
  const track = (id: string, label: string, listed = true) => {
    contentSections += 1
    if (listed) nav.push({ id, label })
  }

  const ids = {
    definition: v2.definition !== undefined ? slug(v2.definition.title) : '',
    signals: v2.signals !== undefined ? slug(v2.signals.title) : '',
    limits: v2.limits !== undefined ? slug(v2.limits.title) : '',
    process: v2.process !== undefined ? slug(v2.process.title) : '',
    decision: v2.decision !== undefined ? slug(v2.decision.title) : '',
    comparison: v2.comparison !== undefined ? slug(v2.comparison.title) : '',
    ask: v2.ask !== undefined ? slug(v2.ask.title) : '',
    evidence: v2.evidence !== undefined ? slug(v2.evidence.title) : '',
    audiences: v2.audiences !== undefined ? slug(v2.audiences.title) : '',
  }

  const showEvidence =
    v2.evidence !== undefined && evidenceMosaicRenders(v2.evidence.items)

  // Register the navigable sections first, in render order, so the list
  // can be built before the definition section that hosts it.
  if (v2.definition !== undefined) track(ids.definition, v2.definition.title, false)
  if (v2.signals !== undefined) track(ids.signals, v2.signals.title)
  if (v2.limits !== undefined) track(ids.limits, v2.limits.title)
  if (v2.process !== undefined) track(ids.process, v2.process.title)
  if (v2.decision !== undefined) track(ids.decision, v2.decision.title)
  track('independent', 'Why an independent opinion matters')
  if (v2.comparison !== undefined) track(ids.comparison, v2.comparison.title)
  if (v2.ask !== undefined) track(ids.ask, v2.ask.title)
  if (showEvidence && v2.evidence !== undefined) track(ids.evidence, v2.evidence.title)
  if (v2.audiences !== undefined) track(ids.audiences, v2.audiences.title)
  if (v2.markets !== undefined) track(v2.markets.id, v2.markets.title)
  track('faq', v2.faqTitle ?? 'Common questions')
  track('related', v2.relatedTitle ?? 'Related services')

  const heroImage = v2.images?.hero ?? HERO_IMAGE
  const requestImage = v2.images?.request ?? REQUEST_IMAGE
  const flatFaq = v2.faq.map(({ question, answer }) => ({ question, answer }))

  add(
    'sparse',
    'hero',
    <Hero
      variant="editorial"
      eyebrow={content.hero.eyebrow}
      title={content.hero.title}
      intro={
        <>
          {content.hero.intro}
          <ul className="flex flex-col gap-2">
            {v2.hero.scope.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true">-</span>
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ul>
        </>
      }
      primaryAction={content.hero.primaryAction}
      secondaryAction={content.hero.secondaryAction}
      copyWidth="reading"
      backdrop={
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 overflow-hidden bg-brand"
        >
          <BackdropImage
            src={heroImage}
            priority
            className="object-cover object-[15%_50%]"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        </div>
      }
      aside={
        <ServiceHeroRequestCard
          title={v2.hero.cardTitle}
          serviceLabel={content.hero.title}
          defaultServiceId={v2.defaultServiceId}
        />
      }
    />,
  )

  add('dense', 'trust', <TrustBar surface="default" />)
  add('dense', 'counters', <ExperienceCounterStrip surface="muted" />)

  if (v2.definition !== undefined) {
    add(
      'standard',
      'definition',
      <Section density="standard" surface="default" labelledBy={ids.definition}>
        <SectionHeading
          id={ids.definition}
          title={v2.definition.title}
          intro={<p className="text-foreground">{v2.definition.answer}</p>}
        />
        <div className="mt-6 max-w-[var(--container-reading)] space-y-4 text-body text-muted-foreground">
          {v2.definition.supporting.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>,
    )
  }

  if (v2.signals !== undefined && v2.signals.items.length >= 3) {
    add(
      'standard',
      'signals',
      <SignalList
        id={ids.signals}
        title={v2.signals.title}
        note={v2.signals.note}
        items={v2.signals.items}
        image={v2.signals.image}
      />,
    )
  }

  if (v2.limits !== undefined) {
    add('dense', 'limits', <LimitsPanel id={ids.limits} {...v2.limits} />)
  }

  if (v2.process !== undefined) {
    add(
      'standard',
      'process',
      <ProcessTimeline
        id={ids.process}
        title={v2.process.title}
        intro={v2.process.intro}
        steps={v2.process.steps}
        prep={v2.process.prep}
      />,
    )
  }

  if (v2.decision !== undefined) {
    add('standard', 'decision', <DecisionPanel id={ids.decision} {...v2.decision} />)
  }

  add('standard', 'independent', <IndependentProcess density="standard" />)

  if (v2.comparison !== undefined && v2.comparison.rows.length >= 3) {
    add(
      'dense',
      'comparison',
      <ServiceComparisonTable id={ids.comparison} {...v2.comparison} />,
    )
  }

  if (v2.ask !== undefined) {
    add('standard', 'ask', <AskList id={ids.ask} {...v2.ask} />)
  }

  if (showEvidence && v2.evidence !== undefined) {
    add(
      'standard',
      'evidence',
      <EvidenceMosaic
        id={ids.evidence}
        title={v2.evidence.title}
        intro={v2.evidence.intro}
        items={v2.evidence.items}
        caveat={v2.evidence.caveat}
      />,
    )
  }

  if (v2.audiences !== undefined && v2.audiences.items.length >= 2) {
    add('dense', 'audiences', <AudienceRows id={ids.audiences} {...v2.audiences} />)
  }

  // Data-gated: both render nothing until their governed datasets are
  // populated, so they carry no entry in the rhythm list.
  add(null, 'proof', <ProofGallery title="Recent work" />)
  add(null, 'testimonial', <TestimonialBand />)

  if (v2.markets !== undefined) {
    add('standard', 'markets', <MarketRouter content={v2.markets} />)
  }

  add(
    'dense',
    'faq',
    <FaqGrouped
      id="faq"
      title={v2.faqTitle ?? 'Common questions'}
      entries={v2.faq}
    />,
  )

  if (content.relatedPageIds !== undefined) {
    add(
      'dense',
      'related',
      <RelatedList
        id="related"
        title={v2.relatedTitle ?? 'Related services'}
        pageIds={content.relatedPageIds}
        descriptions={content.relatedDescriptions}
      />,
    )
  }

  add(
    'sparse',
    'request',
    <RequestServiceSection
      id={REQUEST_ID}
      density="sparse"
      content={{
        title: v2.request.title,
        intro:
          v2.request.scopeNote !== undefined
            ? [...v2.request.intro, v2.request.scopeNote]
            : v2.request.intro,
      }}
      imageSrc={requestImage}
    >
      {/*
        The shared form carries its own default "Request service" h2, which
        would repeat the section heading directly above it. It is hidden
        visually (still a labelled heading for assistive technology) rather
        than edited out of the shared form.
      */}
      <div className="[&_h2]:sr-only">
        <LeadFormSection
          bare
          density="standard"
          idPrefix="request-lead"
          defaultServiceId={v2.defaultServiceId}
          submitLabel={v2.request.submitLabel}
        />
      </div>
    </RequestServiceSection>,
  )

  const densities: SectionDensity[] = blocks.flatMap(([density]) =>
    density === null ? [] : [density],
  )

  /*
    The sections from the definition to the related list share one
    wrapper, so the sticky "On this page" bar (placed right after the
    definition) stays on screen across all of them. The wrapper adds no
    padding, background or width; the anchors inside it clear both the
    site header and the bar.
  */
  const OUTSIDE = new Set(['hero', 'trust', 'counters', 'request'])
  const showNav = contentSections >= SECTION_NAV_MIN
  const renderBlocks = () => {
    const before: ReactNode[] = []
    const inside: ReactNode[] = []
    const after: ReactNode[] = []
    let seenWrapped = false
    // Without a definition the bar leads the wrapped sections instead.
    if (showNav && v2.definition === undefined) {
      inside.push(<SectionNav key="section-nav" items={nav} />)
    }
    for (const [, key, node] of blocks) {
      if (OUTSIDE.has(key)) {
        ;(seenWrapped ? after : before).push(<Fragment key={key}>{node}</Fragment>)
        continue
      }
      seenWrapped = true
      inside.push(<Fragment key={key}>{node}</Fragment>)
      if (key === 'definition' && showNav) {
        inside.push(<SectionNav key="section-nav" items={nav} />)
      }
    }
    return (
      <>
        {before}
        <div className="min-[1000px]:[&_[id]]:scroll-mt-40">{inside}</div>
        {after}
      </>
    )
  }

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
        // DEC-114: FAQPage mirrors the visible FAQ. Same entries the
        // grouped list renders; the group labels are not part of it.
        faq: flatFaq,
      }}
    >
      {renderBlocks()}
      <MobileContactBar scheduleHref={`#${REQUEST_ID}`} />
    </PageShell>
  )
}
