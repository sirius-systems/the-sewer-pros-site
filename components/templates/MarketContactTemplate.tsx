import Image from 'next/image'
import { Section, type SectionDensity } from '@/components/ui'
import {
  Hero,
  ProcessSteps,
  FaqSection,
  CtaSection,
  RelatedLinks,
  ContactForm,
  StatsBand,
  MobileContactBar,
  MarketBusinessDetails,
  faqSectionRenders,
} from '@/components/sections'
import { TrackedPhoneLink } from '@/components/tracking/TrackedPhoneLink'
import { resolveMarketContactImage } from '@/data/business/contact-backdrop'
import { getMarket, marketOperatingDetail } from '@/data/markets/markets'
import { PageShell } from './PageShell'
import type { MarketContactContent, MarketId, MasterPageRecord, PageId } from '@/types'

/**
 * Market contact endpoint: `/{market}/contact/`.
 *
 * The local conversion page for paid traffic, listing links, and local
 * organic visits. The form's market is preset, and the phone, hours, and
 * service area come from `marketOperatingDetail` for THIS market only
 * (01 §20).
 *
 * ⚠ SERVICE-AREA BUSINESS: no address, map pin, or `LocalBusiness`
 * markup here. The page says so in `MarketBusinessDetails` rather than
 * implying a storefront.
 *
 * ⚠ `StatsBand` is scoped to this market: St. Louis claims never appear
 * on the San Diego or Las Vegas pages (01 §20). Star ratings and local
 * reviews are omitted: none is in the repo (CLAUDE.md §24).
 */
export interface MarketContactTemplateProps {
  page: MasterPageRecord
  content: MarketContactContent
  marketId: MarketId
}

export function MarketContactTemplate({ page, content, marketId }: MarketContactTemplateProps) {
  const market = getMarket(marketId)
  const detail = marketOperatingDetail[marketId]
  const image = resolveMarketContactImage(marketId)
  const showsFaq = faqSectionRenders(content.faq)

  const densities: SectionDensity[] = [
    'sparse', // hero
    'standard', // form
    'standard', // local section
    'dense', // services
    'dense', // process
    'standard', // business details
    'dense', // proof stats
    ...(showsFaq ? (['dense'] as const) : []),
    'sparse', // closing CTA
  ]

  const descriptions: Partial<Record<PageId, string>> = Object.fromEntries(
    content.serviceLinks.map((link) => [link.pageId, link.description]),
  )

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
        intro={
          <>
            {content.hero.intro}
            {detail !== undefined && (
              <p className="text-body font-medium text-foreground">
                Call{' '}
                <TrackedPhoneLink
                  phoneE164={detail.phoneE164}
                  ctaLocation="hero"
                  context={{ market_id: marketId }}
                  className="text-accent-secondary underline underline-offset-4"
                >
                  {detail.phone}
                </TrackedPhoneLink>
                . {detail.hours}.
              </p>
            )}
          </>
        }
        primaryAction={content.hero.primaryAction}
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-brand">
            <Image
              src={image.src}
              alt={image.usingInterim ? '' : image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        }
      />

      <Section density="standard" surface="muted" labelledBy={`${marketId}-contact-heading`}>
        <div id="request-service" className="mx-auto max-w-[var(--container-reading)] scroll-mt-24">
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <ContactForm
              idPrefix={`${marketId}-contact`}
              defaultMarketId={marketId}
              title={`Request service in ${market.city}`}
            />
          </div>
        </div>
      </Section>

      <Section density="standard" surface="default" labelledBy="local-heading">
        <div className="max-w-[var(--container-reading)]">
          {content.localSection.eyebrow !== undefined && (
            <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              {content.localSection.eyebrow}
            </p>
          )}
          <h2 id="local-heading" className="mt-2 text-h2 font-semibold tracking-tight text-balance">
            {content.localSection.title}
          </h2>
          <div className="mt-5 space-y-4 text-body text-muted-foreground [&_a]:font-medium [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4">
            {content.localSection.body}
          </div>
        </div>
      </Section>

      <RelatedLinks
        id="services"
        pageIds={content.serviceLinks.map((link) => link.pageId)}
        descriptions={descriptions}
        title={`Services for ${market.city} properties`}
        surface="muted"
      />

      <ProcessSteps
        density="dense"
        surface="default"
        id="what-happens-next"
        title={content.process.title}
        intro={content.process.intro}
        steps={content.process.steps}
      />

      <MarketBusinessDetails
        marketId={marketId}
        title={`${market.city} contact details`}
      />

      <StatsBand density="dense" surface="default" marketId={marketId} />

      {showsFaq && content.faq !== undefined && (
        <FaqSection
          entries={content.faq}
          title={`${market.city} contact questions`}
          surface="default"
        />
      )}

      <CtaSection
        variant="panel"
        title={`Ready to schedule in ${market.city}?`}
        body="Send a request with your property ZIP code and what you need, or call and talk it through."
        action={{ href: '#request-service', label: 'Request Service' }}
        phone={
          detail === undefined
            ? undefined
            : { label: detail.phone, href: `tel:${detail.phoneE164}` }
        }
      />

      <MobileContactBar marketId={marketId} />
    </PageShell>
  )
}
