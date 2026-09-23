import Image from 'next/image'
import Link from 'next/link'
import { Section, ButtonLink, buttonClasses } from '@/components/ui'
import { TrackedPhoneLink } from '@/components/tracking/TrackedPhoneLink'
import { marketList, marketOperatingDetail, marketPathname } from '@/data/markets/markets'
import { marketImages } from '@/data/business/card-images'
import type { MarketId, PageId } from '@/types'

/**
 * Contact-page sections that render on the server.
 *
 * ⚠ VERIFIED FACTS ONLY. Phones, hours, email, and service areas come
 * from `marketOperatingDetail`; nothing here is typed in per market. No
 * street address, map, review count, emergency, same-day, or response-time
 * claim appears anywhere in this file (CLAUDE.md §24, 01 §20). Where a
 * market's service area is `derived_from_approved_locations` it is
 * phrased as where the business works, matching the existing published
 * contact copy, not as a coverage guarantee.
 */

function detail(id: MarketId) {
  const d = marketOperatingDetail[id]
  if (d === undefined) {
    throw new Error(`No published operating detail for market "${id}".`)
  }
  return d
}

function areaLine(id: MarketId): string {
  const d = detail(id)
  return d.serviceAreaSource === 'published'
    ? `Serving ${d.serviceArea}.`
    : `Working across ${d.serviceArea}.`
}

/* ==========================================================================
   Location selector cards
   ========================================================================== */

export interface LocationSelectorCardsProps {
  id?: string
  title?: string
  intro?: string
}

/**
 * Three cards, one per market, each linking to that market's contact
 * endpoint. Crawlable links, not a client-side picker.
 */
export function LocationSelectorCards({
  id = 'choose-location',
  title = 'Choose your location',
  intro = 'Select your service area to view local contact options, request sewer service, or learn more about the communities served.',
}: LocationSelectorCardsProps) {
  return (
    <Section density="standard" surface="default" labelledBy={id}>
      <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance">
        {title}
      </h2>
      <p className="mt-3 max-w-[var(--container-reading)] text-body text-muted-foreground">
        {intro}
      </p>

      <ul className="mt-8 grid gap-6 lg:grid-cols-3">
        {marketList.map((market) => {
          const d = detail(market.id)
          // The same unmarked service-area maps the Locations hub uses.
          const image = marketImages[`market-${market.id}` as PageId]
          return (
            <li
              key={market.id}
              className="flex flex-col overflow-hidden rounded-md border border-border bg-surface"
            >
              {/*
                ⚠ THE FRAME'S OWN ASPECT (2600x1352), NOT A CROP. The maps
                carry Google's attribution baked into the bottom-right
                corner, and its terms require it to stay legible (see
                `data/business/card-images.ts`). Sizing the box to the
                image keeps the whole map, attribution included, visible.
              */}
              {image !== undefined && (
                <div className="relative aspect-[2600/1352] bg-brand">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-h4 font-semibold tracking-tight">{market.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {areaLine(market.id)}
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  <TrackedPhoneLink
                    phoneE164={d.phoneE164}
                    ctaLocation="inline"
                    context={{ market_id: market.id }}
                    className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                  >
                    {d.phone}
                  </TrackedPhoneLink>
                </p>
                <p className="mt-1 text-caption text-muted-foreground">{d.hours}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <ButtonLink href={`${marketPathname(market.id)}contact/`}>
                    View {market.city} Contact Options
                  </ButtonLink>
                  <Link
                    href={marketPathname(market.id)}
                    className="text-sm font-medium text-accent-secondary underline underline-offset-4 hover:text-foreground"
                  >
                    View {market.city} services and areas
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

/* ==========================================================================
   Urgent vs scheduled routing panel
   ========================================================================== */

export function UrgencyPanel({ id = 'urgent' }: { id?: string }) {
  return (
    /*
      `wide` container with the gutter cut to 12px each side (the same
      `[&>div]` reach-in `TrustBar` uses, since `Section` passes width
      but not padding). That budget lets the three market buttons sit on
      one row from `xl` up: the copy takes the left column and the
      buttons' own width (`auto`) takes the right. Below `xl` the buttons
      wrap or stack inside the 6/6 split, so nothing overflows.
    */
    <Section
      density="dense"
      surface="brand"
      width="wide"
      labelledBy={id}
      className="[&>div]:px-3"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center xl:grid-cols-[minmax(0,1fr)_auto]">
        <div className="lg:col-span-6 xl:col-auto xl:max-w-xl">
          <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance">
            Is this an urgent sewer or drain problem?
          </h2>
          <p className="mt-3 text-body-lg text-brand-foreground">
            If you have an active sewer backup, an overflowing drain, or wastewater coming up
            where it shouldn’t, call the number for your service area. Call for the next
            available appointment and guidance on your service request.
          </p>
        </div>
        <div className="lg:col-span-6 xl:col-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:flex-nowrap xl:justify-end">
            {marketList.map((market) => {
              const d = detail(market.id)
              return (
                <TrackedPhoneLink
                  key={market.id}
                  phoneE164={d.phoneE164}
                  ctaLocation="section_cta"
                  context={{ market_id: market.id }}
                  className={buttonClasses('secondary', 'w-full whitespace-nowrap sm:w-auto')}
                >
                  Call {market.city} {d.phone}
                </TrackedPhoneLink>
              )
            })}
          </div>
          <p className="mt-4 text-sm text-brand-foreground xl:text-right">
            Not urgent?{' '}
            <a
              href="#request-service"
              className="font-semibold text-brand-foreground underline underline-offset-4"
            >
              Schedule an inspection or request service
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}

/* ==========================================================================
   Business details and service coverage
   ========================================================================== */

export interface MarketBusinessDetailsProps {
  id?: string
  title?: string
  intro?: string
  /** Renders one market only (the market contact pages). */
  marketId?: MarketId
}

/**
 * Phone, email, hours, and service area per market.
 *
 * ⚠ NO ADDRESS AND NO MAP, and the note below says why. All three
 * markets are service-area operations; showing a pin would represent a
 * storefront that does not exist (Google Business Profile guidelines,
 * 01 §20, CLAUDE.md §11).
 */
export function MarketBusinessDetails({
  id = 'business-details',
  title = 'Contact and Service Areas',
  intro,
  marketId,
}: MarketBusinessDetailsProps) {
  const shown = marketId === undefined ? marketList : marketList.filter((m) => m.id === marketId)

  return (
    <Section density="standard" surface="muted" labelledBy={id}>
      <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {intro !== undefined && (
        <p className="mt-3 max-w-[var(--container-reading)] text-body text-muted-foreground">
          {intro}
        </p>
      )}

      <div
        className={
          'mt-8 grid gap-6 ' + (shown.length > 1 ? 'lg:grid-cols-3' : 'max-w-[var(--container-reading)]')
        }
      >
        {shown.map((market) => {
          const d = detail(market.id)
          // Hub only: the same unmarked service-area maps the Locations
          // hub uses. The single-market contact pages keep their card as is.
          const map =
            marketId === undefined
              ? marketImages[`market-${market.id}` as PageId]
              : undefined
          return (
            <article
              key={market.id}
              className="rounded-md border border-border bg-surface p-5"
            >
              <h3 className="text-h4 font-semibold tracking-tight">{market.name}</h3>
              {map !== undefined && (
                /*
                  Sized to the frame's own 2600x1352 aspect with `contain`,
                  so nothing is cropped: the maps carry Google's attribution
                  in the bottom-right corner and it must stay legible (see
                  `data/business/card-images.ts`).
                */
                <div className="relative mt-3 aspect-[2600/1352] overflow-hidden rounded-md border border-border bg-brand">
                  <Image
                    src={map.src}
                    alt={map.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
              <dl className="mt-3 grid gap-2 text-sm">
                <div>
                  <dt className="font-medium text-foreground">Phone</dt>
                  <dd>
                    <TrackedPhoneLink
                      phoneE164={d.phoneE164}
                      ctaLocation="inline"
                      context={{ market_id: market.id }}
                      className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                    >
                      {d.phone}
                    </TrackedPhoneLink>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${d.email}`}
                      className="break-all text-accent-secondary underline underline-offset-4 hover:text-foreground"
                    >
                      {d.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Hours</dt>
                  <dd className="text-muted-foreground">{d.hours}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Service area</dt>
                  <dd className="text-muted-foreground">{d.serviceArea}</dd>
                </div>
              </dl>
              {marketId === undefined && (
                <Link
                  href={`${marketPathname(market.id)}contact/`}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-accent-secondary underline underline-offset-4 hover:text-foreground"
                >
                  {market.city} contact page
                </Link>
              )}
            </article>
          )
        })}
      </div>

      <p className="mt-6 max-w-[var(--container-reading)] text-sm text-muted-foreground">
        The Sewer Pros is a service-area business. The work happens at your property, so there
        is no storefront address to visit or list.
      </p>
    </Section>
  )
}
