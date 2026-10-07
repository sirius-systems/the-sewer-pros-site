import { Fragment, type ReactNode } from 'react'
import { heroContactAction } from '@/lib/links/hero-contact-action'
import Link from 'next/link'
import { type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ExperienceCounterStrip,
  IndependentProcess,
  ProofGallery,
  TestimonialBand,
  MarketRouter,
  RequestServiceSection,
  MobileContactBar,
  BackdropImage,
  RelatedServiceCards,
} from '@/components/sections'
import { SurveyLeadForm } from '@/components/sections/SurveyLeadForm'
import { Section } from '@/components/ui'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { CameraImageSlot } from '@/components/sections/CameraImageSlot'
import { resolveHubImage } from '@/data/business/hub-images'
import {
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
  ServiceHeroRequestCard,
  MethodsTable,
  MythList,
  SituationList,
  IndependentBand,
  TellUsList,
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

  // Section ids and labels, kept for anchors. The "On this page" bar is removed.
  const tracked: { key: string; id: string; label: string; listed: boolean }[] = []
  const track = (key: string, id: string, label: string, listed = true) => {
    tracked.push({ key, id, label, listed })
  }

  const ids = {
    definition: v2.definition !== undefined ? slug(v2.definition.title) : '',
    signals: v2.signals !== undefined ? slug(v2.signals.title) : '',
    causes: v2.causes !== undefined ? slug(v2.causes.title) : '',
    triage: v2.triage !== undefined ? slug(v2.triage.title) : '',
    terms: v2.terms !== undefined ? slug(v2.terms.title) : '',
    limits: v2.limits !== undefined ? slug(v2.limits.title) : '',
    secondaryLimits:
      v2.secondaryLimits !== undefined ? slug(v2.secondaryLimits.title) : '',
    process: v2.process !== undefined ? slug(v2.process.title) : '',
    decision: v2.decision !== undefined ? slug(v2.decision.title) : '',
    methods: v2.methods !== undefined ? slug(v2.methods.title) : '',
    comparison: v2.comparison !== undefined ? slug(v2.comparison.title) : '',
    ask: v2.ask !== undefined ? slug(v2.ask.title) : '',
    factors: v2.factors !== undefined ? slug(v2.factors.title) : '',
    myths: v2.myths !== undefined ? slug(v2.myths.title) : '',
    situations: v2.situations !== undefined ? slug(v2.situations.title) : '',
    evidence: v2.evidence !== undefined ? slug(v2.evidence.title) : '',
    audiences: v2.audiences !== undefined ? slug(v2.audiences.title) : '',
  }

  const showEvidence =
    v2.evidence !== undefined && evidenceMosaicRenders(v2.evidence.items)

  // Register the navigable sections first, in render order, so the list
  // can be built before the definition section that hosts it.
  const limitsLate = v2.limitsAfterProcess === true
  const methodsLate = v2.methodsAfterIndependent === true
  const trackSecondary = () => {
    if (v2.secondaryLimits !== undefined) {
      track('secondaryLimits', ids.secondaryLimits, v2.secondaryLimits.title)
    }
  }
  if (v2.definition !== undefined) track('definition', ids.definition, v2.definition.title, false)
  if (v2.signals !== undefined) track('signals', ids.signals, v2.signals.title)
  if (v2.causes !== undefined) track('causes', ids.causes, v2.causes.title)
  if (v2.triage !== undefined) track('triage', ids.triage, v2.triage.title)
  if (v2.limits !== undefined && !limitsLate) track('limits', ids.limits, v2.limits.title)
  if (v2.process !== undefined) track('process', ids.process, v2.process.title)
  if (v2.methods !== undefined && !methodsLate) track('methods', ids.methods, v2.methods.title)
  if (v2.limits !== undefined && limitsLate) track('limits', ids.limits, v2.limits.title)
  if (!methodsLate) trackSecondary()
  if (v2.decision !== undefined) track('decision', ids.decision, v2.decision.title)
  track('independent', 'independent', 'Why an independent opinion matters')
  if (v2.methods !== undefined && methodsLate) track('methods', ids.methods, v2.methods.title)
  if (methodsLate) trackSecondary()
  if (v2.comparison !== undefined) track('comparison', ids.comparison, v2.comparison.title)
  if (v2.ask !== undefined) track('ask', ids.ask, v2.ask.title)
  if (v2.factors !== undefined) track('factors', ids.factors, v2.factors.title)
  if (showEvidence && v2.evidence !== undefined) track('evidence', ids.evidence, v2.evidence.title)
  if (v2.audiences !== undefined) track('audiences', ids.audiences, v2.audiences.title)
  if (v2.myths !== undefined) track('myths', ids.myths, v2.myths.title)
  const situationsLate = v2.situationsAfterFaq === true
  if (v2.situations !== undefined && !situationsLate) {
    track('situations', ids.situations, v2.situations.title)
  }
  if (v2.markets !== undefined) track('markets', v2.markets.id, v2.markets.title)
  if (v2.terms !== undefined) track('terms', ids.terms, v2.terms.title)
  track('faq', 'faq', v2.faqTitle ?? 'Common questions')
  if (v2.situations !== undefined && situationsLate) {
    track('situations', ids.situations, v2.situations.title)
  }
  track('related', 'related', v2.relatedTitle ?? 'Related services')

  const heroImage = v2.images?.hero ?? HERO_IMAGE
  const requestImage = v2.images?.request ?? REQUEST_IMAGE
  const flatFaq = v2.faq.map(({ question, answer }) => ({ question, answer }))

  const scopeList = (
    <ul className="flex flex-col gap-2">
      {v2.hero.scope.map((point) => (
        <li key={point} className="flex gap-2">
          <span aria-hidden="true">-</span>
          <span className="font-semibold">{point}</span>
        </li>
      ))}
    </ul>
  )
  // Two branches so an entry without `scopeStatement` renders the same tree as before.
  const heroIntro =
    v2.hero.scopeStatement === undefined ? (
      <>
        {content.hero.intro}
        {scopeList}
      </>
    ) : (
      <>
        {content.hero.intro}
        {scopeList}
        <p className="rounded-md border border-white/40 bg-black/40 p-4 text-body-sm font-semibold">
          {v2.hero.scopeStatement}
        </p>
      </>
    )

  // A pending-photography slot, shown only while no approved photograph exists.
  const heroSlot =
    v2.hero.slot !== undefined && resolveHubImage(v2.hero.slot)?.placeholder === true
      ? v2.hero.slot
      : undefined

  add(
    'sparse',
    'hero',
    <Hero
      variant="editorial"
      eyebrow={content.hero.eyebrow}
      title={content.hero.title}
      intro={
        heroSlot === undefined ? (
          heroIntro
        ) : (
          <>
            {heroIntro}
            <CameraImageSlot slot={heroSlot} hideCaption className="max-w-sm" />
          </>
        )
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
      hideAsideBelowLg
      mobileContactAction={heroContactAction(page)}
      aside={
        <ServiceHeroRequestCard
          title={v2.hero.cardTitle}
          intro={v2.hero.cardIntro}
          serviceLabel={v2.hero.serviceLabel ?? content.hero.title}
          defaultServiceId={v2.defaultServiceId}
          survey
          {...(v2.messageLabel !== undefined ? { messageLabel: v2.messageLabel } : {})}
          {...(v2.extraServiceOptions !== undefined
            ? { extraServiceOptions: v2.extraServiceOptions }
            : {})}
        />
      }
    />,
  )

  add('dense', 'trust', <TrustBar surface="default" />)
  add('dense', 'counters', <ExperienceCounterStrip surface="muted" />)

  if (v2.definition !== undefined) {
    const definitionImage =
      v2.definition.image !== undefined && resolveHubImage(v2.definition.image) !== null
        ? v2.definition.image
        : undefined
    const definitionHeading = (
      <SectionHeading
        id={ids.definition}
        eyebrow={v2.definition.eyebrow}
        title={v2.definition.title}
        intro={<p className="text-foreground">{v2.definition.answer}</p>}
      />
    )
    const definitionText = (
      <div className="mt-6 max-w-[var(--container-reading)] space-y-4 text-body text-muted-foreground">
        {v2.definition.supporting.map((paragraph, index) => (
          <p
            key={typeof paragraph === 'string' ? paragraph : index}
            {...(typeof paragraph === 'string'
              ? {}
              : {
                  className:
                    '[&_a]:font-semibold [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground',
                })}
          >
            {paragraph}
          </p>
        ))}
      </div>
    )
    const definitionScope = v2.definition.scope !== undefined && (
      <p className="mt-6 max-w-[var(--container-reading)] rounded-md border border-border bg-surface-muted p-5 text-body-sm font-semibold text-foreground">
        {v2.definition.scope}
      </p>
    )
    // Two branches so an entry without a definition photo renders the same tree as before.
    add(
      'standard',
      'definition',
      definitionImage === undefined ? (
        <Section density="standard" surface="default" labelledBy={ids.definition}>
          {definitionHeading}
          {definitionText}
          {definitionScope}
        </Section>
      ) : (
        <Section density="standard" surface="default" labelledBy={ids.definition}>
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {definitionHeading}
              {definitionText}
              {definitionScope}
            </div>
            <div className="lg:col-span-5">
              <CameraImageSlot
                slot={definitionImage}
                hideCaption
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Section>
      ),
    )
  }

  if (v2.signals !== undefined && v2.signals.items.length >= 3) {
    add(
      'standard',
      'signals',
      <SignalList
        id={ids.signals}
        eyebrow={v2.signals.eyebrow}
        title={v2.signals.title}
        note={v2.signals.note}
        after={v2.signals.after}
        items={v2.signals.items}
        image={v2.signals.image}
      />,
    )
  }

  if (v2.causes !== undefined && v2.causes.items.length >= 3) {
    add(
      'dense',
      'causes',
      <SignalList
        id={ids.causes}
        eyebrow={v2.causes.eyebrow}
        title={v2.causes.title}
        note={v2.causes.note}
        after={v2.causes.after}
        items={v2.causes.items}
        image={v2.causes.image}
        surface="default"
        numbered={false}
        density="dense"
      />,
    )
  }

  // A triage table, or a causes list, shifts the next sections one surface so they keep alternating.
  const triaged = v2.triage !== undefined || v2.causes !== undefined
  if (v2.triage !== undefined && v2.triage.rows.length >= 3) {
    add('dense', 'triage', <ServiceComparisonTable id={ids.triage} {...v2.triage} />)
  }

  const addLimits = () => {
    if (v2.limits !== undefined) {
      add(
        'dense',
        'limits',
        triaged ? (
          <LimitsPanel id={ids.limits} surface="muted" {...v2.limits} />
        ) : (
          <LimitsPanel id={ids.limits} {...v2.limits} />
        ),
      )
    }
  }
  if (!limitsLate) addLimits()

  if (v2.process !== undefined) {
    add(
      'standard',
      'process',
      <ProcessTimeline
        id={ids.process}
        eyebrow={v2.process.eyebrow}
        title={v2.process.title}
        intro={v2.process.intro}
        steps={v2.process.steps}
        prep={v2.process.prep}
        surface={limitsLate || triaged ? 'default' : 'muted'}
      />,
    )
  }

  const addMethods = () => {
    if (v2.methods !== undefined) {
      add(
        'dense',
        'methods',
        methodsLate ? (
          <MethodsTable id={ids.methods} surface="default" {...v2.methods} />
        ) : (
          <MethodsTable id={ids.methods} {...v2.methods} />
        ),
      )
    }
  }
  // Two branches so an entry without a second panel renders the same tree as before.
  const addSecondaryLimits = () => {
    if (v2.secondaryLimits !== undefined) {
      add(
        'dense',
        'secondaryLimits',
        <LimitsPanel
          id={ids.secondaryLimits}
          surface={methodsLate ? 'muted' : 'default'}
          {...v2.secondaryLimits}
        />,
      )
    }
  }
  if (!methodsLate) addMethods()

  if (limitsLate) addLimits()
  if (!methodsLate) addSecondaryLimits()

  if (v2.decision !== undefined) {
    // A decision panel carrying its own table is the long section of the run: dense.
    const decisionDense = v2.decision.table !== undefined
    add(
      decisionDense ? 'dense' : 'standard',
      'decision',
      <DecisionPanel
        id={ids.decision}
        surface={limitsLate || triaged ? 'muted' : 'default'}
        {...(decisionDense ? { density: 'dense' as const } : {})}
        {...v2.decision}
      />,
    )
  }

  add(
    'standard',
    'independent',
    v2.independent !== undefined ? (
      <IndependentBand {...v2.independent} />
    ) : (
      <IndependentProcess density="standard" />
    ),
  )

  if (methodsLate) {
    addMethods()
    addSecondaryLimits()
  }

  if (v2.comparison !== undefined && v2.comparison.rows.length >= 3) {
    add(
      'dense',
      'comparison',
      <ServiceComparisonTable id={ids.comparison} {...v2.comparison} />,
    )
  }

  if (v2.ask !== undefined) {
    add(
      'standard',
      'ask',
      methodsLate ? (
        <AskList id={ids.ask} surface="default" {...v2.ask} />
      ) : (
        <AskList id={ids.ask} {...v2.ask} />
      ),
    )
  }

  if (v2.factors !== undefined) {
    add(
      'standard',
      'factors',
      <AskList id={ids.factors} surface="default" {...v2.factors} />,
    )
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

  if (v2.myths !== undefined) {
    add('dense', 'myths', <MythList id={ids.myths} {...v2.myths} />)
  }

  const addSituations = () => {
    if (v2.situations !== undefined) {
      add('dense', 'situations', <SituationList id={ids.situations} {...v2.situations} />)
    }
  }
  if (!situationsLate) addSituations()

  // Data-gated: both render nothing until their governed datasets are
  // populated, so they carry no entry in the rhythm list.
  add(null, 'proof', <ProofGallery title="Recent work" />)
  add(null, 'testimonial', <TestimonialBand />)

  if (v2.markets !== undefined) {
    add('standard', 'markets', <MarketRouter content={v2.markets} />)
  }

  if (v2.terms !== undefined) {
    add('dense', 'terms', <SituationList id={ids.terms} {...v2.terms} />)
  }

  add(
    'dense',
    'faq',
    v2.faqSurface === undefined ? (
      <FaqGrouped
        id="faq"
        eyebrow={v2.eyebrows?.faq}
        title={v2.faqTitle ?? 'Common questions'}
        entries={v2.faq}
      />
    ) : (
      <FaqGrouped
        id="faq"
        eyebrow={v2.eyebrows?.faq}
        title={v2.faqTitle ?? 'Common questions'}
        entries={v2.faq}
        surface={v2.faqSurface}
      />
    ),
  )

  if (situationsLate) addSituations()

  if (content.relatedPageIds !== undefined) {
    add(
      v2.relatedColumns === undefined ? 'dense' : 'standard',
      'related',
      v2.relatedColumns === undefined ? (
        <RelatedServiceCards
          id="related"
          title={v2.relatedTitle ?? 'Related services'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
        />
      ) : (
        <RelatedServiceCards
          id="related"
          title={v2.relatedTitle ?? 'Related services'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
          columns={v2.relatedColumns}
          density="standard"
        />
      ),
    )
  }

  add(
    'sparse',
    'request',
    <RequestServiceSection
      id={REQUEST_ID}
      density="sparse"
      content={{
        eyebrow: v2.eyebrows?.request,
        title: v2.request.title,
        intro:
          v2.request.scopeNote !== undefined && v2.request.tellUs === undefined
            ? [...v2.request.intro, v2.request.scopeNote]
            : v2.request.intro,
      }}
      imageSrc={requestImage}
      introAfter={
        v2.request.tellUs === undefined ? undefined : (
          <>
            <TellUsList title={v2.request.tellUs.title} items={v2.request.tellUs.items} />
            {v2.request.scopeNote !== undefined && (
              <p className="mt-6 max-w-[var(--container-reading)] text-body-lg">
                {v2.request.scopeNote}
              </p>
            )}
          </>
        )
      }
    >
      {/*
        The shared form carries its own default "Request service" h2, which
        would repeat the section heading directly above it. It is hidden
        visually (still a labelled heading for assistive technology) rather
        than edited out of the shared form.
      */}
      {(() => {
        const leadForm = (
          <SurveyLeadForm
            idPrefix="request-survey"
            {...(v2.defaultServiceId !== undefined ? { defaultServiceId: v2.defaultServiceId } : {})}
          />
        )
        // Two branches so an entry without `secondaryAction` renders the same tree as before.
        return v2.request.secondaryAction === undefined ? (
          <div className="[&_h2]:sr-only">{leadForm}</div>
        ) : (
          <div className="[&_h2]:sr-only">
            <p className="mb-4 text-body-sm">
              <Link
                href={v2.request.secondaryAction.href}
                className="font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
              >
                {v2.request.secondaryAction.label}
              </Link>
            </p>
            {leadForm}
          </div>
        )
      })()}
    </RequestServiceSection>,
  )

  const densities: SectionDensity[] = blocks.flatMap(([density]) =>
    density === null ? [] : [density],
  )

  /*
    The sections from the definition to the related list share one
    wrapper. It adds no padding, background or width. (The sticky "On this
    page" bar that once sat inside it was removed, 2026-10-06.)
  */
  const OUTSIDE = new Set(['hero', 'trust', 'counters', 'request'])
  const renderBlocks = () => {
    const before: ReactNode[] = []
    const inside: ReactNode[] = []
    const after: ReactNode[] = []
    let seenWrapped = false
    for (const [, key, node] of blocks) {
      if (OUTSIDE.has(key)) {
        ;(seenWrapped ? after : before).push(<Fragment key={key}>{node}</Fragment>)
        continue
      }
      seenWrapped = true
      inside.push(<Fragment key={key}>{node}</Fragment>)
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
      displayName={v2.displayName}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
        serviceDescription: content.serviceDescription,
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
