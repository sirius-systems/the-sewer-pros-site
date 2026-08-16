/**
 * Analytics transport.
 *
 * Authority: docs/19-analytics-measurement.md §6, §15-19, §101, §135, §141
 *            CLAUDE.md §59
 *
 * Every event goes through `track()`, which scrubs PII, drops unknown
 * parameters, and no-ops when analytics is not configured.
 *
 * ---------------------------------------------------------------------------
 * CONVERSION INTEGRITY IS ENFORCED BY THE API SHAPE (19 §15, CLAUDE.md §59)
 * ---------------------------------------------------------------------------
 * "A successful lead-form submission should trigger only when the
 * submission has actually been accepted. Do not fire form_submit merely
 * because the submit button was clicked, validation began, the request
 * failed, or a loading state started."
 *
 * A generic `track('form_submit')` makes that rule easy to break from a
 * click handler. So `form_submit` is not reachable that way — it is
 * emitted only by `trackFormSubmitted()`, which is named for the
 * outcome rather than the interaction and documented accordingly.
 *
 * The same reasoning keeps `phone_lead` out of the vocabulary entirely
 * (19 §19, PENDING-009).
 */

import type { AnalyticsContext, AnalyticsEvent, CtaLocation, FormType } from './events'
import { scrubAndReport } from './pii'

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      target: string,
      params?: Record<string, unknown>,
    ) => void
  }
}

/** The GA4 measurement id, or undefined when analytics is not configured. */
export function measurementId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  return id !== undefined && id.trim() !== '' ? id.trim() : undefined
}

/** True when analytics is configured for this build. */
export function isAnalyticsEnabled(): boolean {
  return measurementId() !== undefined
}

/**
 * Sends an event.
 *
 * No-ops silently when analytics is unconfigured or `gtag` has not
 * loaded — the site must work without measurement, and a missing
 * script must never break an interaction (19 §135).
 */
export function track(event: AnalyticsEvent, context: AnalyticsContext = {}): void {
  if (typeof window === 'undefined') return
  if (!isAnalyticsEnabled()) return

  const params = scrubAndReport(event, context as Record<string, unknown>)

  if (typeof window.gtag !== 'function') return
  window.gtag('event', event, params)
}

/* ==========================================================================
   Named events where the rule matters
   ========================================================================== */

/**
 * A form submission that the server ACCEPTED.
 *
 * ⚠ Call this only after a successful response. Not on click, not on
 * validation, not on a pending request, and never in a `catch` or
 * `finally` block — 19 §15 and CLAUDE.md §59 treat all of those as
 * inflated conversions.
 *
 * If you are unsure whether the submission succeeded, that uncertainty
 * is the answer: do not call this.
 */
export function trackFormSubmitted(
  formType: FormType,
  context: Omit<AnalyticsContext, 'form_type'> = {},
): void {
  track('form_submit', { ...context, form_type: formType })
}

/** A form that failed validation or was rejected (19 §17). */
export function trackFormError(
  formType: FormType,
  context: Omit<AnalyticsContext, 'form_type'> = {},
): void {
  track('form_error', { ...context, form_type: formType })
}

/**
 * Meaningful interaction with a form (19 §16).
 *
 * ⚠ Not on render. "Do not fire the event simply because the form
 * became visible on screen" — that is `form_view`.
 */
export function trackFormStart(
  formType: FormType,
  context: Omit<AnalyticsContext, 'form_type'> = {},
): void {
  track('form_start', { ...context, form_type: formType })
}

/**
 * A click on a `tel:` link.
 *
 * ⚠ This is call INTENT, not a completed call (19 §18-19). It must not
 * be reported as a phone lead. A connected or qualified call needs
 * call-tracking data, which is PENDING-009.
 */
export function trackPhoneClick(
  ctaLocation: CtaLocation,
  context: Omit<AnalyticsContext, 'cta_location'> = {},
): void {
  track('phone_click', { ...context, cta_location: ctaLocation })
}

/** A click on a primary or secondary CTA (19 §31-33). */
export function trackCtaClick(
  ctaLocation: CtaLocation,
  context: Omit<AnalyticsContext, 'cta_location'> = {},
): void {
  track('cta_click', { ...context, cta_location: ctaLocation })
}

/**
 * A page view.
 *
 * Called on initial load and on client-side route changes (19 §134) —
 * App Router navigation does not reload the document, so without this
 * every session would report a single page view.
 */
export function trackPageView(context: AnalyticsContext): void {
  track('page_view', context)
}
