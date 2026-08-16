/**
 * Analytics barrel.
 *
 * Build sequence step 23 (docs/02-nextjs-technical-architecture.md §103).
 * Governed by docs/19-analytics-measurement.md.
 *
 *   import { track, pageContext } from '@/lib/analytics'
 *
 * ---------------------------------------------------------------------------
 * THREE RULES THIS MODULE ENFORCES RATHER THAN DOCUMENTS
 * ---------------------------------------------------------------------------
 * 1. No PII reaches analytics. Every parameter passes `scrubPii()`;
 *    unknown keys and anything resembling an email, phone number,
 *    street address, or free text is dropped before transport
 *    (19 §104, CLAUDE.md §40).
 *
 * 2. `form_submit` means the submission was ACCEPTED. It is reachable
 *    only through `trackFormSubmitted()`, named for the outcome, so it
 *    cannot be wired to a click handler by habit (19 §15, CLAUDE.md §59).
 *
 * 3. A phone click is intent, not a lead. `phone_lead` does not exist
 *    in the vocabulary and must not be added until call tracking does
 *    (19 §19, PENDING-009).
 */

export type {
  AnalyticsEvent,
  AnalyticsContext,
  FormType,
  LeadType,
  CtaLocation,
  ContentCluster,
} from './events'
export { ALLOWED_PARAMETERS } from './events'

export { detectPii, scrubPii, scrubAndReport } from './pii'
export type { PiiReason, ScrubResult } from './pii'

export {
  measurementId,
  isAnalyticsEnabled,
  track,
  trackFormSubmitted,
  trackFormError,
  trackFormStart,
  trackPhoneClick,
  trackCtaClick,
  trackPageView,
} from './track'

export { pageContext } from './context'
