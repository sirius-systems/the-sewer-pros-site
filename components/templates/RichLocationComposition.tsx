import Image from 'next/image'
import { heroContactAction } from '@/lib/links/hero-contact-action'
import type { SectionDensity } from '@/components/ui'
import {
  Hero,
  ExperienceCounterStrip,
  FaqSection,
  CtaSection,
  ReviewMarquee,
  LeadFormSection,
  MobileContactBar,
  faqSectionRenders,
} from '@/components/sections'
import {
  ServiceCardGrid,
  PreselectServiceListener,
  HeroRequestCard,
  KeyTakeaways,
  ResponsibilitySection,
  SystemExplainer,
  HousingAgeSection,
  WhoToCallSection,
  MunicipalProgramSection,
  SecondOpinionSection,
  BuyingGuideSection,
  NearbyAreasSection,
  SourcesBlock,
} from '@/components/sections/location'
import { SlotPlaceholderBox } from '@/components/sections/location/SlotPlaceholderBox'
import { marketOperatingDetail } from '@/data/markets/markets'
import { PageShell } from './PageShell'
import type { LocationHeroForm, LocationPageContent, MasterPageRecord } from '@/types'

/**
 * The rich location composition.
 *
 * Mounted by `LocationPageTemplate` ONLY when `content.heroForm` is set, so
 * every location page that does not set it renders the sparse composition
 * it always did. Each section below is individually gated on its own
 * content field.
 *
 * ⚠ SURFACES ALTERNATE, DENSITIES ARE WRITTEN OUT IN RENDER ORDER. The
 * `densities` array below must stay in the same order as the JSX; the
 * rhythm check in `PageShell` reads it. Surface runs:
 *
 *   hero (dark photo) / counters (muted) / takeaways (default) /
 *   services (muted) / reviews (default, St. Charles only) / responsibility (default) / system (muted) /
 *   age (default) / who-to-call (brand) / program (default) /
 *   second opinion (brand) / buying (muted) / areas (default) /
 *   faq (muted) / final CTA (photo, or brand panel without one) / sources (muted)
 *
 * No two neighbours share one. Densities never run four alike.
 */
const HERO_SERVICE_SELECT_ID = 'hero-lead-service'

export function RichLocationComposition({
  page,
  content,
  heroForm,
}: {
  page: MasterPageRecord
  content: LocationPageContent
  heroForm: LocationHeroForm
}) {
  const detail =
    page.marketId !== undefined ? marketOperatingDetail[page.marketId] : undefined
  const phone =
    detail !== undefined
      ? { label: detail.phone, href: `tel:${detail.phoneE164}` }
      : undefined

  const showsFaq = faqSectionRenders(content.faq)
  // The final CTA background feeds `CtaSection` (not `Photo`), which cannot
  // draw a placeholder, so a review-build placeholder is dropped here.
  const finalCtaBackground =
    content.finalCta?.background?.placeholder === undefined
      ? content.finalCta?.background
      : undefined

  const finalCtaForm =
    content.finalCta !== undefined ? (
      <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
        <LeadFormSection
          bare
          id="final-request-heading"
          idPrefix="final-lead"
          title={content.finalCta.formTitle}
          submitLabel={content.finalCta.submitLabel}
          messageLabel={content.finalCta.messageLabel}
          config={content.finalCta.form}
        />
      </div>
    ) : null

  const densities: SectionDensity[] = [
    'sparse', // hero
    'dense', // counters
    ...(content.keyTakeaways ? (['dense'] as const) : []),
    ...(content.serviceCards ? (['standard'] as const) : []),
    // Dense, so services / reviews / responsibility / system never read as a
    // run of four `standard` sections.
    ...(content.reviewBand ? (['dense'] as const) : []),
    ...(content.responsibility ? (['standard'] as const) : []),
    ...(content.systemExplainer ? (['standard'] as const) : []),
    ...(content.housingAge ? (['dense'] as const) : []),
    ...(content.whoToCall ? (['standard'] as const) : []),
    ...(content.municipalProgram ? (['standard'] as const) : []),
    ...(content.secondOpinion ? (['sparse'] as const) : []),
    ...(content.buyingGuide ? (['standard'] as const) : []),
    ...(content.nearbyAreas ? (['standard'] as const) : []),
    ...(showsFaq ? (['dense'] as const) : []),
    // `split` (photo) renders dense; `panel` (no photo) renders sparse.
    finalCtaBackground !== undefined ? 'dense' : 'sparse',
    ...(content.sources ? (['dense'] as const) : []),
  ]

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
        // DEC-114: on by default wherever an FAQ renders. `faqSchemaApproved:
        // false` is the opt-out; unset and `true` both emit FAQPage.
        faq: content.faqSchemaApproved === false ? undefined : content.faq,
        serviceCards: content.serviceCards?.cards.map((card) => ({
          serviceId: card.serviceId,
          name: card.title,
          description: card.description,
        })),
      }}
    >
      <PreselectServiceListener
        selectId={HERO_SERVICE_SELECT_ID}
        fallbackSelectId="final-lead-service"
        fallbackTargetId="final-request-heading"
      />

      <div className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand">
          {heroForm.backdrop !== undefined && (
            <>
              <Image
                src={heroForm.backdrop.src}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="hero-scrim absolute inset-0" />
            </>
          )}
        </div>
        <Hero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          intro={
            <>
              {content.hero.intro}
              <ul className="list-disc space-y-1 pl-5 text-base">
                {heroForm.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </>
          }
          primaryAction={heroForm.primaryAction}
          secondaryAction={
            phone !== undefined
              ? { href: phone.href, label: heroForm.secondaryActionLabel }
              : undefined
          }
          backdrop={null}
          hideAsideBelowLg
          mobileContactAction={heroContactAction(page)}
          aside={
            phone !== undefined ? (
              heroForm.slotPlaceholder?.placeholder !== undefined ? (
                // Opt-in review-build box above the request card, never behind
                // the hero copy, so contrast and the form are unaffected.
                <div className="space-y-4">
                  <SlotPlaceholderBox
                    image={heroForm.slotPlaceholder}
                    className="aspect-auto py-3"
                  />
                  <div className="max-lg:hidden">
                    <HeroRequestCard card={heroForm.card} phone={phone} />
                  </div>
                </div>
              ) : (
                <div className="max-lg:hidden">
                  <HeroRequestCard card={heroForm.card} phone={phone} />
                </div>
              )
            ) : undefined
          }
        />
      </div>

      <ExperienceCounterStrip
        surface="muted"
        foundingYear={detail?.foundingYear}
      />

      {content.keyTakeaways && <KeyTakeaways content={content.keyTakeaways} />}

      {content.serviceCards && page.marketId !== undefined && phone !== undefined && (
        <ServiceCardGrid
          content={content.serviceCards}
          marketId={page.marketId}
          phone={phone}
        />
      )}

      {/*
        The review band shares the responsibility slot instead of adding a child
        of its own, so a page without `reviewBand` keeps the exact element
        sequence (and static output) it had before the band existed.
      */}
      {content.reviewBand ? (
        <>
          <ReviewMarquee
            density="dense"
            surface="default"
            title={content.reviewBand.title}
            caption={content.reviewBand.caption}
          />
          {content.responsibility && <ResponsibilitySection content={content.responsibility} />}
        </>
      ) : (
        content.responsibility && <ResponsibilitySection content={content.responsibility} />
      )}
      {content.systemExplainer && <SystemExplainer content={content.systemExplainer} />}
      {content.housingAge && <HousingAgeSection content={content.housingAge} />}
      {content.whoToCall && <WhoToCallSection content={content.whoToCall} />}
      {content.municipalProgram && (
        <MunicipalProgramSection content={content.municipalProgram} />
      )}
      {content.secondOpinion && <SecondOpinionSection content={content.secondOpinion} />}
      {content.buyingGuide && <BuyingGuideSection content={content.buyingGuide} />}
      {content.nearbyAreas && <NearbyAreasSection content={content.nearbyAreas} />}

      {showsFaq && content.faq !== undefined && (
        <FaqSection
          eyebrow="Common questions"
          title={content.faqHeading ?? 'Common questions'}
          entries={content.faq}
          columns={2}
          surface="muted"
        />
      )}

      {content.finalCta !== undefined && (
        <CtaSection
          variant={finalCtaBackground !== undefined ? 'split' : 'panel'}
          eyebrow={content.finalCta.eyebrow}
          title={content.finalCta.title}
          body={
            <>
              {content.finalCta.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="list-disc space-y-1 pl-5">
                {content.finalCta.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </>
          }
          action={null}
          phone={phone}
          phoneVariant="button"
          backgroundImage={finalCtaBackground}
          proof={
            content.finalCta.slotPlaceholder?.placeholder !== undefined ? (
              <div className="space-y-6">
                <SlotPlaceholderBox image={content.finalCta.slotPlaceholder} />
                {finalCtaForm}
              </div>
            ) : (
              finalCtaForm
            )
          }
        />
      )}

      {content.sources && <SourcesBlock content={content.sources} />}

      {phone !== undefined && (
        <MobileContactBar
          marketId={page.marketId}
          scheduleHref="#request"
          scheduleLabel="Request Inspection"
          showCityPicker={false}
        />
      )}
    </PageShell>
  )
}
