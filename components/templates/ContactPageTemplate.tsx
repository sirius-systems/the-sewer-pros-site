import Image from 'next/image'
import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  StatsBand,
  ProcessSteps,
  FaqSection,
  CtaSection,
  SectionHeading,
  ContactForm,
  MobileContactBar,
  ReviewMarquee,
  contactStepIcons,
  LocationSelectorCards,
  UrgencyPanel,
  MarketBusinessDetails,
  faqSectionRenders,
} from '@/components/sections'
import { resolveContactImage } from '@/data/business/contact-backdrop'
import { averageRating } from '@/data/business/organization'
import { marketList, marketPathname } from '@/data/markets/markets'
import { resolveApprovedLinks } from '@/lib/links/approved-link'
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
    'dense', // trust strip
    'standard', // proof stats
    'standard', // location cards
    'dense', // urgent vs scheduled panel
    'standard', // form
    'dense', // what happens next
    'standard', // business details
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
      {/*
        Full-bleed backdrop, the same treatment `/about/` uses: a static
        photograph (not `HeroBackdrop`, which cross-fades a set) under the
        project's one measured `.hero-scrim`. `Hero` flips its copy white
        whenever `backdrop` is supplied. The image is decoration (`alt=""`);
        the eyebrow, H1, and intro carry the page's meaning.
      */}
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
            <Image
              src={heroImage.src}
              alt=""
              fill
              priority
              sizes="100vw"
              // The reel, monitor, and cleanout sit right of centre and low
              // in the frame; weighting the crop there keeps them visible
              // on the narrow, tall crops phones produce.
              className="h-full w-full object-cover object-[80%_65%]"
            />
            <div className="hero-scrim absolute inset-0" />
          </div>
        }
      />

      {/* Verified positioning statements (data/business/positioning.ts). */}
      <TrustBar density="dense" surface="brand" />

      {/*
        Owner-confirmed figures only, scoped in organization.ts. The
        markets-served count is omitted: it describes coverage, not
        business performance.
      */}
      <StatsBand density="standard" surface="muted" omitIds={['markets-served']} />

      <LocationSelectorCards />

      <UrgencyPanel />

      {/*
        Background photograph via `Section`'s `backgroundImage`, which adds
        the project's measured scrim and turns unstyled text white. The
        copy below therefore uses `text-white` (not muted-foreground), and
        the form sits in its own opaque card with `text-foreground`.
        Decorative, so `alt` stays empty at render. `surface` remains the
        fallback if the image is ever removed.
      */}
      <Section
        density="standard"
        surface="muted"
        labelledBy="contact-heading"
        backgroundImage={{
          src: '/images/contact/the-sewer-pros-contact-request-inspection-background-16x9.webp',
          alt: 'Sewer camera reel and monitor beside an open sewer cleanout on a residential driveway',
          source: 'Owner-supplied contact page background (3344x1882 WebP).',
        }}
      >
        <div id="request-service" className="grid scroll-mt-24 gap-10 lg:grid-cols-12 lg:items-center">
          {content.request !== undefined && (
            <div className="lg:col-span-5">
              <h2
                id="contact-heading"
                className="text-h2 font-semibold tracking-tight text-balance"
              >
                {content.request.title}
              </h2>
              <div className="mt-5 space-y-4 text-body text-white">
                {content.request.body}
              </div>
            </div>
          )}
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8 lg:col-span-7">
            <ContactForm
              idPrefix="contact"
              shortcuts
              hideHeading={content.request !== undefined}
              labelledBy="contact-heading"
            />
          </div>
        </div>
      </Section>

      <ProcessSteps
        density="dense"
        surface="default"
        id="what-happens-next"
        title={content.process.title}
        intro={content.process.intro}
        steps={content.process.steps.map((step, index) => ({
          ...step,
          icon: contactStepIcons[index],
        }))}
        variant="cards"
      />

      <MarketBusinessDetails />

      {/* Visible proof only: no review count or platform is on record. */}
      <Section
        density="dense"
        surface="default"
        labelledBy="rating-heading"
        className="marquee-section"
      >
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

        {/* The homepage review marquee, reused: same approved reviews and pause control. */}
        <ReviewMarquee embedded />
      </Section>

      {showsFaq && content.faq !== undefined && (
        <FaqSection
          entries={content.faq}
          title="Sewer Service and Scheduling FAQs"
          surface="muted"
          columns={2}
        />
      )}

      {/*
        The same three approved links `RelatedLinks` rendered, restyled as
        secondary buttons so they are easier to see and tap. Resolved
        through `resolveApprovedLinks` (registry hrefs and page names), so
        labels and destinations are unchanged. `secondary` is the design
        system's second tier: the green market buttons in the closing CTA
        stay the stronger action. Focus and active states are added here
        because the base button style defines only hover.
      */}
      <Section density="dense" surface="default" labelledBy="related">
        <SectionHeading
          id="related"
          title="Explore Sewer Services and Service Areas"
          level="h2"
          intro="Compare sewer inspection and cleaning services, check the markets we serve, or browse answers to common sewer and drain questions."
        />
        <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {resolveApprovedLinks(content.relatedPageIds ?? []).map((link) => (
            <li key={link.href} className="sm:min-w-56">
              <ButtonLink
                href={link.href}
                variant="secondary"
                className="w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary active:bg-border"
              >
                {link.label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </Section>

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
