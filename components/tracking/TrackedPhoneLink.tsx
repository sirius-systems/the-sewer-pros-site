'use client'

import type { ReactNode } from 'react'
import { trackPhoneClick } from '@/lib/analytics'
import type { AnalyticsContext, CtaLocation } from '@/lib/analytics'

/**
 * A `tel:` link that records call intent.
 *
 * Authority: docs/19-analytics-measurement.md §11, §18, §19, §111
 *
 * ---------------------------------------------------------------------------
 * ⚠ THIS MEASURES INTENT, NOT A LEAD (19 §19)
 * ---------------------------------------------------------------------------
 * "A user clicking the phone number is a website interaction. A
 * connected or qualified call is a stronger business event. Do not
 * treat the two as identical."
 *
 * Whoever reads this in a report is looking at how many people tapped a
 * number — not how many conversations happened, and certainly not how
 * many became customers. Distinguishing the two needs call-tracking
 * data (PENDING-009), and until that exists `phone_lead` is absent from
 * the vocabulary entirely so it cannot be reported by mistake.
 *
 * ---------------------------------------------------------------------------
 * A client component because a click handler requires one. It carries
 * no state and no effects — the smallest client surface that does the
 * job (02 §30).
 *
 * `cta_location` is required rather than optional: 19 §32 exists to
 * answer which placements convert, and an untagged click cannot.
 */
export interface TrackedPhoneLinkProps {
  /** E.164, e.g. `+1-314-821-1600`. */
  phoneE164: string
  ctaLocation: CtaLocation
  context?: Omit<AnalyticsContext, 'cta_location'>
  className?: string
  children: ReactNode
}

export function TrackedPhoneLink({
  phoneE164,
  ctaLocation,
  context = {},
  className,
  children,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={`tel:${phoneE164}`}
      className={className}
      onClick={() => {
        trackPhoneClick(ctaLocation, context)
      }}
    >
      {children}
    </a>
  )
}
