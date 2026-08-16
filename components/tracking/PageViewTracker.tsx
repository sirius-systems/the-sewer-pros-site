'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'
import type { AnalyticsContext } from '@/lib/analytics'

/**
 * Page-view tracking across client-side navigation.
 *
 * Authority: docs/19-analytics-measurement.md §134, §143
 *            docs/02-nextjs-technical-architecture.md §30
 *
 * One of the few genuinely necessary client components in this project
 * (02 §30). App Router navigation does not reload the document, so
 * without this a session would report a single page view regardless of
 * how many pages the visitor read.
 *
 * ---------------------------------------------------------------------------
 * ⚠ DUPLICATE GUARD (19 §143)
 * ---------------------------------------------------------------------------
 * React runs effects twice in development Strict Mode, and a re-render
 * can retrigger an effect whose dependencies look unchanged. Either
 * would double-count. The last-sent pathname is tracked in a ref and
 * repeats are skipped — 19 §143's duplicate-event guardrail is easier
 * to satisfy here than to diagnose later in reporting.
 *
 * ---------------------------------------------------------------------------
 * Context is passed in from the server, derived from the approved page
 * record via `pageContext()`. This component adds no attribution of its
 * own and reads nothing from user input, so there is nothing here for
 * the PII guard to catch.
 */
export interface PageViewTrackerProps {
  context: AnalyticsContext
}

export function PageViewTracker({ context }: PageViewTrackerProps) {
  const pathname = usePathname()
  const lastSent = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (lastSent.current === pathname) return
    lastSent.current = pathname

    trackPageView({ ...context, page_path: pathname })
  }, [pathname, context])

  return null
}
