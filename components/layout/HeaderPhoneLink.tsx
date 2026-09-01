'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { TrackedPhoneLink } from '@/components/tracking'
import { marketOperatingDetail } from '@/data/markets/markets'
import type { MarketId } from '@/types'
import type { CtaLocation } from '@/lib/analytics'

/**
 * Market-aware header phone control.
 *
 * ---------------------------------------------------------------------------
 * WHY THIS EXISTS (supersedes the earlier "Call" -> /contact/ default)
 * ---------------------------------------------------------------------------
 * `SiteHeader`'s original note explained why a single sitewide number
 * could not be shown: St. Louis, San Diego, and Las Vegas each publish
 * a DIFFERENT real number (DEC-070, DEC-071, DEC-073), 01 §20 forbids
 * carrying one market's contact facts onto another, and the header is a
 * shared layout component with — at the time — no way to know which
 * market a visitor was on under `output: 'export'`.
 *
 * The fix here is not a guess or a placeholder. `marketOperatingDetail`
 * already holds a verified, owner-confirmed number for all three
 * markets (DEC-070, DEC-071, DEC-073). What was missing was a way to
 * read the CURRENT ROUTE — not the visitor's location — and the route
 * itself already encodes the market (`/st-louis-mo/`, `/san-diego-ca/`,
 * `/las-vegas-nv/`, and their sub-pages). Reading the pathname is
 * exact, not inferred, so it carries none of the risk a geo-IP guess
 * would.
 *
 * A client component is the smallest way to do that under static
 * export (02 §30 — client components only when browser behaviour is
 * genuinely needed; determining "which market page is this" from the
 * URL is exactly that). No other part of the header becomes client-side.
 *
 * Sitewide pages (the homepage, `/services/`, `/about/`, etc.) match no
 * market slug and fall back to the original safe behaviour: a "Call"
 * link to `/contact/`, which lists every market's number separately.
 * That fallback is intentional, not a regression — a sitewide page has
 * no single correct number to show (01 §20 again).
 */
const MARKET_SLUGS: MarketId[] = ['st-louis-mo', 'san-diego-ca', 'las-vegas-nv']

function marketIdFromPathname(pathname: string): MarketId | undefined {
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  return MARKET_SLUGS.find((id) => id === firstSegment)
}

export interface HeaderPhoneLinkProps {
  ctaLocation: Extract<CtaLocation, 'header' | 'mobile_bar'>
  className?: string
}

export function HeaderPhoneLink({
  ctaLocation,
  className,
}: HeaderPhoneLinkProps) {
  const pathname = usePathname()
  const marketId = marketIdFromPathname(pathname)
  const detail =
    marketId !== undefined ? marketOperatingDetail[marketId] : undefined

  if (detail !== undefined) {
    return (
      <TrackedPhoneLink
        phoneE164={detail.phoneE164}
        ctaLocation={ctaLocation}
        context={{ market_id: marketId }}
        className={className}
      >
        {detail.phone}
      </TrackedPhoneLink>
    )
  }

  return (
    <Link href="/contact/" className={className}>
      Call
    </Link>
  )
}
