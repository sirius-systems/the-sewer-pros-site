import Image from 'next/image'
import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  StatsBand,
  ProcessSteps,
  FaqSection,
  CtaSection,
  RelatedLinks,
  ContactForm,
  MobileContactBar,
  LocationSelectorCards,
  UrgencyPanel,
  MarketBusinessDetails,
  faqSectionRenders,
} from '@/components/sections'
import { resolveContactImage } from '@/data/business/contact-backdrop'
import { averageRating } from '@/data/business/organization'
import { marketList, marketPathname } from '@/data/markets/markets'
import { PageShell } from './PageShell'
import type { ContactPageContent, MasterPageRecord } from '@/types'

/**
 * Contact hub: `/contact/`.
 *
 * A routing layer, not just a form. A visitor picks a market (crawlable
 * cards to each market's contact page), sees the urgent-versus-scheduled
 * split, then the city-aware form, what happens next, verified business
 * details per market, and a city-aware closing CTA.
 *
 * ⚠ IMAGES ARE PLACEHOLDER SLOTS until real photography lands; see
 * `data/business/contact-backdrop.ts` and `public/images/contact/README.md`.
 * The hero uses the technician-monitor slot. It is decorative (`alt=""`)
 * while the interim scene is in use.
 *
 * ⚠ STATS COME FROM `StatsBand` (owner-confirmed figures, scoped in
 * `organization.ts`). The average rating is shown as a value only (no review
 * count or platform is on record) and no `AggregateRating` is emitted.
 */
export interface ContactPageTemplateProps {
  page: MasterPageRecord
  content: ContactPageContent
}

export function ContactPageTemplate({ page, content }: ContactPageTemplateProps) {
  const heroImage = resolveContactImage('hero')
  const ctaImage = resolveContactImage('cta')
  const showsFaq = faqSectionRenders(content.faq)

  const densities: SectionDensity[] = [
    'sparse', // hero
    'standard', // location cards
    'dense', // urgent vs scheduled panel
    'standard', // form
    'dense', // what happens next
    'standard', // business details
    'dense', // trust strip
    'standard', // proof stats
    'dense', // average rating
    ...(showsFaq ? (['dense'] as const) : []),
    'sparse', // closing CTA
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
        variant="split"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        primaryAction={content.hero.primaryAction}
        secondaryAction={content.hero.secondaryAction}
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-brand">
            <Image
              src={heroImage.src}
              alt={heroImage.usingInterim ? '' : heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        }
      />

      <LocationSelectorCards />

      <UrgencyPanel />

      <Section density="standard" surface="muted" labelledBy="contact-heading">
        <div id="request-service" className="mx-auto max-w-[var(--container-reading)] scroll-mt-24">
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <ContactForm idPrefix="contact" shortcuts />
          </div>
        </div>
      </Section>

      <ProcessSteps
        density="dense"
        surface="default"
        id="what-happens-next"
        title={content.process.title}
        intro={content.process.intro}
        steps={content.process.steps}
      />

      <MarketBusinessDetails />

      <TrustBar density="dense" surface="default" />

      <StatsBand density="standard" surface="muted" />

      {/* Visible proof only: no review count or platform is on record. */}
      <Section density="dense" surface="default" labelledBy="rating-heading">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span aria-hidden="true" className="text-2xl tracking-wider text-rating-gold">
            ★★★★★
          </span>
          <h2 id="rating-heading" className="text-h4 font-semibold tracking-tight">
            {averageRating.value} average customer rating
            {averageRating.count !== undefined && ` from ${averageRating.count} reviews`}
            {averageRating.source !== undefined && ` on ${averageRating.source}`}
          </h2>
        </div>
      </Section>

      {showsFaq && content.faq !== undefined && (
        <FaqSection
          entries={content.faq}
          title="Contact and scheduling questions"
          surface="muted"
          columns={2}
        />
      )}

      <RelatedLinks
        pageIds={content.relatedPageIds ?? []}
        title="Explore before you reach out"
        surface="default"
      />

      <CtaSection
        variant="panel"
        title="Ready to get a clearer answer?"
        body="Select your market to schedule a sewer inspection, request drain or sewer service, or call The Sewer Pros."
        action={null}
        backgroundImage={ctaImage}
        proof={
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <h2 className="text-h3 font-semibold tracking-tight">Choose your market</h2>
            <div className="mt-5 flex flex-col gap-3">
              {marketList.map((market) => (
                <ButtonLink key={market.id} href={`${marketPathname(market.id)}contact/`}>
                  {market.name}
                </ButtonLink>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Prefer to call? Each market page lists the number to call.
            </p>
          </div>
        }
      />

      <MobileContactBar />
    </PageShell>
  )
}
