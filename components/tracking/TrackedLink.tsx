'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { track, trackCtaClick } from '@/lib/analytics'
import type { AnalyticsContext, CtaLocation } from '@/lib/analytics'

/**
 * A crawlable internal link that records which routing choice was made.
 *
 * Still a real `<a href>` (via `next/link`), so it works without
 * JavaScript. The handler only reports; it never blocks navigation.
 * Context carries stable ids only, never display strings or PII (19 §132).
 */
export interface TrackedLinkProps {
  href: string
  /** `audience_select` and `market_select` name the choice; `cta_click` a plain CTA. */
  event: 'audience_select' | 'market_select' | 'service_select' | 'cta_click'
  context?: Omit<AnalyticsContext, 'cta_location'>
  ctaLocation?: CtaLocation
  className?: string
  children: ReactNode
}

export function TrackedLink({
  href,
  event,
  context = {},
  ctaLocation = 'inline',
  className,
  children,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (event === 'cta_click') trackCtaClick(ctaLocation, context)
        else track(event, { ...context, cta_location: ctaLocation })
      }}
    >
      {children}
    </Link>
  )
}
