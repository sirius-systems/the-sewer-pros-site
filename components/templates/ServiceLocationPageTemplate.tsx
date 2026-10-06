import Image from 'next/image'
import {
  Children,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react'
import { Section, Prose, Card, ButtonLink, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ExperienceCounterStrip,
  ProblemGrid,
  InclusionsGrid,
  ProcessSteps,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  ServiceIndex,
  CoverageSection,
  FaqSection,
  RelatedLinks,
  CtaSection,
  authorityBandRenders,
  processStepsRenders,
  relatedLinksRenders,
  coverageSectionRenders,
  ServiceAreaSection,
  serviceAreaRenders,
  faqSectionRenders,
  problemGridRenders,
  inclusionsGridRenders,
} from '@/components/sections'
import { SourcesBlock } from '@/components/sections/location'
import { SurveyLeadForm } from '@/components/sections/SurveyLeadForm'
import {
  approvedServicesIntro,
  approvedServicesTitle,
  homeServiceCards,
} from '@/content/pages/home-service-cards'
import { FaqGrouped } from '@/components/sections/service-v2'
import { getService } from '@/data/services'
import { resolveSlotImage } from '@/lib/image-slots'
import { requireLocation } from '@/data/locations'
import { getMarketContent } from '@/content'
import { getMarket, marketOperatingDetail } from '@/data/markets/markets'
import { PageShell } from './PageShell'
import type {
  MasterPageRecord,
  PageId,
  ServiceAreaContent,
  ServiceId,
  ServiceLocationPageContent,
} from '@/types'

/**
 * Service + location page.
 *
 * Governed by docs/05-url-routing-strategy.md §119;
 * docs/14-content-specification.md; docs/18-design-system.md §108;
 * CLAUDE.md §19-21, §62.
 *
 * ===========================================================================
 * THE PAGE FAMILY THE WHOLE GOVERNANCE MODEL EXISTS TO CONSTRAIN
 * ===========================================================================
 * There are 10,422 service × location relationships and FOURTEEN
 * approved service + location pages. This template renders those
 * fourteen.
 *
 * 18 §108 names the exact failure to avoid: service + location pages
 * "should not all appear as Hero / 3 Cards / Text / FAQ / CTA with only
 * token substitutions."
 *
 * So the structure here is intentionally minimal — hero, prose, an
 * optional process, FAQ, related links, CTA — and nothing is
 * auto-composed from registry data. Every one of these pages has to
 * earn its existence through writing, and both of CLAUDE.md §21's
 * relevant tests apply at once:
 *
 *   location test — could the city name be swapped and the page stand?
 *   service test  — could the service name be swapped and the copy hold?
 *
 * If either passes, the page should not ship. No template can enforce
 * that; it can only decline to make the shortcut easy, which is why
 * there is no "nearby areas" grid and no generated service list here.
 *
 * 05 §119: a local service page is a separate canonical page, not a
 * variant of the canonical service page. Its `relatedPageIds` should
 * point to the canonical service and the parent location so the reader
 * can move up the hierarchy (16 §25).
 *
 * ---------------------------------------------------------------------------
 * THE FULL PORTED MAP, NOT A THINNED ONE
 * ---------------------------------------------------------------------------
 * The reference composition warns explicitly against treating this type
 * as "the service page plus content changes" - a service+location page
 * needs enough location-specific structure (its own coverage section,
 * local proof, a location-blended FAQ) to earn its URL. So it gets the
 * full sequence rather than the lighter location-page one.
 *
 * That does NOT relax the substitution tests above. Structure earns the
 * URL only if the writing does too.
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection
 * variant="panel"` are the only brand surfaces; related, coverage, and
 * FAQ sit between them (18 §11).
 */
export interface ServiceLocationPageTemplateProps {
  page: MasterPageRecord
  content: ServiceLocationPageContent
}


/**
 * Splits a body written as `<h2>` + content runs into cards.
 *
 * Returns undefined with fewer than two `<h2>` sections, so a body that is not
 * sectioned keeps rendering as reading-width prose. Content before the first
 * `<h2>` is returned as `lead`.
 */
function splitBodySections(body: ReactNode):
  | { lead: ReactNode[]; sections: { title: string; content: ReactNode[] }[] }
  | undefined {
  const nodes =
    isValidElement(body) && body.type === Fragment
      ? Children.toArray((body as ReactElement<{ children?: ReactNode }>).props.children)
      : Children.toArray(body)

  const lead: ReactNode[] = []
  const sections: { title: string; content: ReactNode[] }[] = []
  for (const node of nodes) {
    if (isValidElement(node) && node.type === 'h2') {
      const title = Children.toArray(
        (node as ReactElement<{ children?: ReactNode }>).props.children,
      )
        .filter((child): child is string => typeof child === 'string')
        .join('')
      sections.push({ title, content: [] })
    } else if (sections.length > 0) {
      sections[sections.length - 1].content.push(node)
    } else {
      lead.push(node)
    }
  }
  return sections.length >= 2 ? { lead, sections } : undefined
}


/** One shared slot for the services section's right column. */
const SERVICES_IMAGE = resolveSlotImage({
  id: 'slc-services-section',
  ratio: '4:3',
  alt: 'Technician and inspection equipment at a residential property',
  shot: 'Technician with inspection equipment at a residential property, no identifiable address or people',
})

export function ServiceLocationPageTemplate({
  page,
  content,
}: ServiceLocationPageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The three gated sections contribute no entry - they render nothing.
  const detail =
    page.marketId !== undefined ? marketOperatingDetail[page.marketId] : undefined
  const phone =
    detail !== undefined
      ? { label: detail.phone, href: `tel:${detail.phoneE164}` }
      : undefined
  const bodySections =
    content.body !== undefined ? splitBodySections(content.body) : undefined
  const faqTitle =
    page.serviceId !== undefined && page.locationId !== undefined
      ? `Common questions about ${getService(page.serviceId).name}` +
        ` in ${requireLocation(page.locationId).name}`
      : undefined
  const faqIsGrouped =
    content.faq !== undefined &&
    content.faq.length > 0 &&
    content.faq.every((entry) => entry.group !== undefined)
  // "Other areas": the market hub's own location cards (image, ZIPs, action
  // label) minus this page's location, so the visitor sees the same cards as
  // on the hub rather than a text list (owner, 2026-10-05).
  const hubArea =
    page.marketId !== undefined
      ? getMarketContent(`market-${page.marketId}` as PageId)?.serviceArea
      : undefined
  const otherAreas: ServiceAreaContent | undefined =
    hubArea !== undefined && page.marketId !== undefined && page.locationId !== undefined
      ? {
          // A page without its own `coverage` copy gets a market-level title and
          // a neutral sentence; the cards themselves come from the hub.
          title:
            content.coverage?.title ??
            `Other ${getMarket(page.marketId).city} area locations`,
          intro:
            content.coverage?.intro ??
            `This page covers ${requireLocation(page.locationId).name}. Sewer agencies and lateral rules differ from place to place, so use the page for your address.`,
          cities: {
            title: 'Featured service locations',
            items: hubArea.cities.items.filter((item) => (item.pageId as string) !== (page.locationId as string | undefined)),
            layout: 'grid',
          },
          closing: hubArea.closing,
        }
      : undefined
  const showsOtherAreas = serviceAreaRenders(otherAreas)

  // The homepage's nine service cards, unmodified (owner, 2026-10-05).
  const showsServiceCards = page.marketId !== undefined

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The gated sections contribute no entry - they render nothing.
  const densities: SectionDensity[] = [
    'sparse', // hero
    // Trust strip, then the business stats below it (owner, 2026-10-05).
    'dense',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(problemGridRenders(content.problems)
      ? (['standard'] as const)
      : []),
    ...(inclusionsGridRenders(content.inclusions)
      ? (['dense'] as const)
      : []),
    ...(content.process !== undefined && processStepsRenders(content.process)
      ? (['standard'] as const)
      : []),
    ...(showsServiceCards ? (['standard'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    ...(showsOtherAreas
      ? (['standard'] as const)
      : coverageSectionRenders(content.coverage)
        ? (['standard'] as const)
        : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    ...(content.sources !== undefined ? (['dense'] as const) : []),
    'sparse',
  ]

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
        // DEC-114: FAQPage is on wherever the page renders an FAQ. Same array
        // the FaqSection renders, so markup and visible text cannot diverge.
        faq: content.faq,
        // One Service node per visible card (15 §67), as on the location pages.
        serviceCards: homeServiceCards.map((card) => ({
          serviceId: card.pageId as unknown as ServiceId,
          name: getService(card.pageId as unknown as ServiceId).name,
          description: card.description ?? '',
        })),
      }}
    >
      {/*
        Full-width background picture behind the hero copy (owner, 2026-10-05).
        A real photo gets the dark scrim so the white copy holds contrast. An
        unfilled slot draws a labelled review-build box on the brand surface,
        away from the copy. `backdrop={null}` switches the Hero to its white-
        copy treatment; the layer here is the background.
      */}
      <div className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand">
          {content.heroImage !== undefined &&
            (content.heroImage.placeholder === undefined ? (
              <>
                <Image
                  src={content.heroImage.src}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="hero-scrim absolute inset-0" />
              </>
            ) : null)}
        </div>
        <Hero
          variant="editorial"
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          intro={content.hero.intro}
          backdrop={null}
          // The market's own number, owner-confirmed per market (DEC-083).
          secondaryAction={
            phone !== undefined
              ? { href: phone.href, label: `Call ${phone.label}` }
              : undefined
          }
        />
      </div>

      {/*
        ⚠ ORDER, OWNER 2026-10-05: trust strip directly below the hero, the
        business stats directly below the trust strip. `TrustBar` is the
        `brand` band, so the stats take `muted` to stay distinct from it and
        from the `default` prose that follows.
      */}
      <TrustBar />

      <ExperienceCounterStrip surface="muted" />

      {content.body !== undefined &&
        (bodySections !== undefined ? (
          <>
            {bodySections.lead.length > 0 && (
              <Section density="standard" width="reading">
                <Prose>{bodySections.lead}</Prose>
              </Section>
            )}
            {/* The local-fact sections as cards: four render 2x2 (owner, 2026-10-05). */}
            <Section density="standard">
              <div className="grid gap-6 sm:grid-cols-2">
                {bodySections.sections.map((section, index) => (
                  <Card
                    key={section.title}
                    className={
                      bodySections.sections.length % 2 !== 0 &&
                      index === bodySections.sections.length - 1
                        ? 'sm:col-span-2'
                        : undefined
                    }
                  >
                    <h2 className="text-h3 font-semibold tracking-tight text-foreground">
                      {section.title}
                    </h2>
                    <Prose className="mt-4 max-w-none [&_p]:text-sm [&_p]:leading-6 [&_li]:text-sm [&_li]:leading-6 [&>*+*]:mt-4">
                      {section.content}
                    </Prose>
                  </Card>
                ))}
              </div>
            </Section>
          </>
        ) : (
          <Section density="standard" width="reading">
            <Prose>{content.body}</Prose>
          </Section>
        ))}

      {content.problems !== undefined && (
        // Four cards render 2x2; six render two rows of three.
        <ProblemGrid
          id="when-to-call"
          title="When to call"
          items={content.problems}
        />
      )}

      {content.inclusions !== undefined && (
        <InclusionsGrid
          id="whats-included"
          title="What's included"
          items={content.inclusions}
          // Six cards render two rows of three; four render 2x2.
          columns={content.inclusions.length % 3 === 0 ? 3 : 2}
        />
      )}

      {content.process !== undefined && (
        <ProcessSteps
          id="what-happens"
          title="What happens on site"
          steps={content.process}
        />
      )}

      {showsServiceCards && (
        <ServiceIndex
          density="standard"
          id="services"
          title={approvedServicesTitle}
          intro={<p>{approvedServicesIntro}</p>}
          items={homeServiceCards}
          variant="cards"
          // Two columns: heading and intro left, image slot right (owner, 2026-10-05).
          aside={
            SERVICES_IMAGE === undefined ? undefined : SERVICES_IMAGE.placeholder !== undefined ? (
              <div
                data-image-placeholder={SERVICES_IMAGE.placeholder.slotId}
                className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border bg-surface-muted p-4 text-center text-caption text-muted-foreground"
              >
                <p className="font-semibold text-foreground">
                  Image slot: {SERVICES_IMAGE.placeholder.slotId}
                </p>
                <p>
                  {SERVICES_IMAGE.placeholder.ratio} - {SERVICES_IMAGE.placeholder.shot}
                </p>
              </div>
            ) : (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <Image
                  src={SERVICES_IMAGE.src}
                  alt={SERVICES_IMAGE.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )
          }
        />
      )}

      <AuthorityBand title="How we work" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
        />
      )}

      {showsOtherAreas && otherAreas !== undefined ? (
        <ServiceAreaSection
          density="standard"
          id="service-area"
          content={otherAreas}
          phone={
            detail !== undefined
              ? { label: detail.phone, phoneE164: detail.phoneE164 }
              : undefined
          }
        />
      ) : content.coverage !== undefined && (
        <CoverageSection
          id="service-area"
          title={content.coverage.title}
          intro={content.coverage.intro}
          pageIds={content.coverage.pageIds}
          names={content.coverage.names}
          availabilityStatement={content.coverage.availabilityStatement}
        />
      )}

      {/*
        The FAQ heading names the page's entity rather than using
        `FaqSection`'s shared "Common questions" default.

        Same reasoning as the service index descriptions and the final
        CTA: a heading that repeats the page's primary keyword
        reinforces the entity signal the H1, meta description and CTA
        already carry. The name is resolved from the registry against
        the id on the page record, so it is data this page already
        holds rather than a string to hand-write per page.

        `undefined` rather than a literal fallback: FaqSection owns the
        default, and repeating it here would be a second place to
        change it. No page record currently reaches this path without
        the id (audited across all 14 service+location pages), so the branch is a guard, not
        an expected state.
      */}
      {content.faq !== undefined && faqTitle !== undefined && (
        faqIsGrouped ? (
          // Every entry has a topic: pill-and-category FAQ, as on the service
          // pages. Labels are navigation only; FAQPage markup is unchanged.
          <FaqGrouped
            id="faq"
            layout="tabs"
            title={faqTitle}
            entries={content.faq.map((entry) => ({
              group: entry.group ?? '',
              question: entry.question,
              answer: entry.answer,
            }))}
          />
        ) : (
          <FaqSection title={faqTitle} entries={content.faq} />
        )
      )}

      {content.sources !== undefined && <SourcesBlock content={content.sources} />}

      {/*
        ⚠ `action={null}`: the CTA's own button is omitted because the form in
        `proof` carries its submit button.

        ⚠ NO CONTACT-PAGE BUTTON BESIDE THE FORM (owner, 2026-10-05, after
        briefly adding one). 18 §62: a second ask next to a form competes with
        it. The phone, email and hours above the form are the only extras.

        ⚠ `defaultMarketId={page.marketId}`. A service+location page
        already names its market, so the form starts with that answer
        filled in rather than asking the visitor to repeat it.
      */}
      <div className="relative">
      <CtaSection
        id="request-service"
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
        action={null}
        backgroundImage={
          content.ctaImage !== undefined && content.ctaImage.placeholder === undefined
            ? content.ctaImage
            : undefined
        }
        proof={
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            {page.marketId === undefined && (
              <>
            {detail !== undefined && phone !== undefined && (
              // Per-market contact details (DEC-083): this page's market only,
              // never another market's.
              <dl className="mb-6 grid gap-x-8 gap-y-2 border-b border-border pb-6 text-sm sm:grid-cols-[auto_1fr]">
                <dt className="font-semibold">Phone</dt>
                <dd>
                  <a className="underline underline-offset-4" href={phone.href}>
                    {phone.label}
                  </a>
                </dd>
                <dt className="font-semibold">Email</dt>
                <dd>
                  <a
                    className="underline underline-offset-4"
                    href={`mailto:${detail.email}`}
                  >
                    {detail.email}
                  </a>
                </dd>
                <dt className="font-semibold">Hours</dt>
                <dd>{detail.hours}</dd>
              </dl>
            )}
            {phone !== undefined && (
              <div className="mb-6 flex flex-wrap gap-3">
                <ButtonLink href={phone.href} variant="accent">
                  Call {phone.label}
                </ButtonLink>
              </div>
            )}
              </>
            )}
            {page.marketId !== undefined ? (
              <SurveyLeadForm
                idPrefix="cta-survey"
                marketId={page.marketId}
                locationId={page.locationId}
                defaultServiceId={page.serviceId}
              />
            ) : (
              <LeadFormSection
                bare
                density="standard"
                id="cta-request-form"
                idPrefix="cta-lead"
                defaultMarketId={page.marketId}
              />
            )}
          </div>
        }
      />
      </div>
    </PageShell>
  )
}
