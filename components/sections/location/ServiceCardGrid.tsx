import Image from 'next/image'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { LocationLinkAnchor } from './LocationLinkAnchor'
import { SlotPlaceholderBox } from './SlotPlaceholderBox'
import { cn } from '@/lib/utils/cn'
import type { LocationServiceCards, MarketId } from '@/types'

/**
 * Service card grid for a location page.
 *
 * A server component. Each booking CTA is a real `#request` anchor carrying
 * `data-preselect-service`; `PreselectServiceListener` reads that attribute
 * to preselect the hero form's "Service needed" select. With JavaScript off
 * the visitor still lands on the form, just without the preselection.
 *
 * ⚠ ANALYTICS ATTRIBUTES ARE IDS ONLY. `data-service-id`, `data-market-id`
 * and `data-page-type` carry registry ids; nothing here touches PII.
 */

const OUTLINE_CTA =
  'inline-flex min-h-11 items-center justify-center rounded-md border-2 border-accent px-4 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary'

export function ServiceCardGrid({
  id = 'services',
  content,
  marketId,
  phone,
  pageType = 'location',
  requestHref = '#request',
}: {
  id?: string
  content: LocationServiceCards
  marketId: MarketId
  phone: { label: string; href: string }
  /** Analytics page type. Location pages keep the default. */
  pageType?: string
  /** Where the booking CTAs land. Location pages keep `#request`. */
  requestHref?: string
}) {
  return (
    <Section density="standard" surface="muted" labelledBy={id}>
      <SectionHeading eyebrow={content.eyebrow} title={content.title} id={id} />

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.cards.map((card) => (
          <li
            key={card.serviceId}
            className="flex flex-col overflow-hidden rounded-md border border-border bg-surface"
          >
            {card.image !== undefined ? (
              <div className="relative aspect-[4/3] w-full bg-surface-muted">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : card.slotPlaceholder?.placeholder !== undefined ? (
              // Opt-in review-build box. Other pages pass no `slotPlaceholder`.
              <div className="p-3 pb-0">
                <SlotPlaceholderBox image={card.slotPlaceholder} />
              </div>
            ) : (
              false
            )}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-h4 font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">{card.bestWhen}</p>
              <div className="mt-auto flex flex-col items-start gap-3 pt-5">
                <a
                  href={requestHref}
                  className={cn(OUTLINE_CTA)}
                  data-event="service_cta_click"
                  data-service-id={card.serviceId}
                  data-market-id={marketId}
                  data-page-type={pageType}
                  data-preselect-service={card.serviceId}
                >
                  {card.bookingLabel}
                </a>
                <LocationLinkAnchor
                  link={card.secondaryLink}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-accent-secondary underline underline-offset-4 hover:text-foreground"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-5 rounded-md border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-h4 font-semibold">{content.helpBar.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{content.helpBar.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={requestHref}
            className={OUTLINE_CTA}
            data-preselect-service="other"
          >
            {content.helpBar.primaryLabel}
          </a>
          <a href={phone.href} className={OUTLINE_CTA}>
            {content.helpBar.phoneLabel}
          </a>
        </div>
      </div>
    </Section>
  )
}
