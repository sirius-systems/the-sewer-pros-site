'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { TrackedPhoneLink } from '@/components/tracking/TrackedPhoneLink'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'
import type { MarketId } from '@/types'

/**
 * Market-aware confirmation copy for `/contact/thank-you/`.
 *
 * Reads `?market=` in the browser (the page is statically exported).
 * With no valid market, it lists all three numbers instead of guessing.
 * The page is only reached after a submission the endpoint accepted.
 */
function Details() {
  const params = useSearchParams()
  const value = params.get('market')
  const market = marketList.find((m) => m.id === value)
  const detail = market === undefined ? undefined : marketOperatingDetail[market.id as MarketId]

  if (market !== undefined && detail !== undefined) {
    return (
      <>
        <p className="text-body-lg text-muted-foreground">
          Your request for {market.name} was received. A team member will follow up about your
          requested service and appointment options, using the contact method you chose.
        </p>
        <p className="mt-4 text-body text-foreground">
          If you have an active sewer backup, call{' '}
          <TrackedPhoneLink
            phoneE164={detail.phoneE164}
            ctaLocation="inline"
            context={{ market_id: market.id }}
            className="font-semibold text-accent-secondary underline underline-offset-4"
          >
            {detail.phone}
          </TrackedPhoneLink>{' '}
          instead of waiting. {detail.hours}.
        </p>
      </>
    )
  }
  return <Generic />
}

function Generic() {
  return (
    <>
      <p className="text-body-lg text-muted-foreground">
        Your request was received. A team member will follow up about your requested service and
        appointment options, using the contact method you chose.
      </p>
      <p className="mt-4 text-body text-foreground">
        If you have an active sewer backup, call the number for your market:
      </p>
      <ul className="mt-2 space-y-1 text-body">
        {marketList.map((m) => {
          const d = marketOperatingDetail[m.id]
          if (d === undefined) return null
          return (
            <li key={m.id}>
              {m.name}:{' '}
              <TrackedPhoneLink
                phoneE164={d.phoneE164}
                ctaLocation="inline"
                context={{ market_id: m.id }}
                className="font-semibold text-accent-secondary underline underline-offset-4"
              >
                {d.phone}
              </TrackedPhoneLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export function ThankYouDetails() {
  return (
    <Suspense fallback={<Generic />}>
      <Details />
    </Suspense>
  )
}
