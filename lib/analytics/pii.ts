/**
 * PII guard for analytics parameters.
 *
 * Authority: docs/19-analytics-measurement.md §22, §104, §105
 *            CLAUDE.md §13, §40
 *
 * ===========================================================================
 * THE ONE RULE THIS FILE ENFORCES
 * ===========================================================================
 * CLAUDE.md §40 and 19 §104 prohibit sending names, emails, phone
 * numbers, street addresses, and free-form messages into analytics.
 *
 * That prohibition is easy to state and easy to violate by accident —
 * someone passes a whole form object, or interpolates a message into a
 * label, and it ships silently because analytics failures are invisible.
 *
 * So this is a runtime check, not a convention. Every parameter passes
 * through `scrubPii()` before it reaches the transport layer.
 *
 * ---------------------------------------------------------------------------
 * WHY IT STRIPS RATHER THAN THROWS IN PRODUCTION
 * ---------------------------------------------------------------------------
 * Throwing would break a page for a visitor over a measurement problem.
 * Sending the event without the offending parameter preserves the
 * conversion signal while guaranteeing the PII never leaves the browser.
 *
 * In development it throws, so the mistake surfaces before it ships.
 * That asymmetry is deliberate: loud where it can be fixed, safe where
 * it cannot.
 */

import { ALLOWED_PARAMETERS } from './events'

/* ==========================================================================
   Detection
   ========================================================================== */

/** Matches an email address anywhere in a value. */
const EMAIL = /[\w.+-]+@[\w-]+\.[\w.]+/

/**
 * Matches a North American phone number in common formats.
 *
 * Deliberately broad — (314) 821-1600, 314-821-1600, 3148211600,
 * +1-314-821-1600. A false positive costs one dropped parameter; a
 * false negative sends a customer's number to Google.
 */
const PHONE = /(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/

/** Matches a street address opener, e.g. "123 Main St". */
const STREET_ADDRESS = /\b\d{1,6}\s+[A-Za-z][\w'.-]*(?:\s+[A-Za-z][\w'.-]*)*\s+(?:st|street|ave|avenue|rd|road|dr|drive|ln|lane|blvd|boulevard|ct|court|way|pl|place|ter|terrace|cir|circle|hwy|highway)\b/i

/**
 * Length above which a value is treated as free-form text.
 *
 * Every legitimate parameter is a stable identifier — the longest in
 * the vocabulary is `svc-stl-sewer-lateral-inspection-reporting` at 42
 * characters. Anything appreciably longer is prose, and prose is where
 * a customer's message ends up.
 */
const MAX_IDENTIFIER_LENGTH = 96

export type PiiReason =
  | 'email'
  | 'phone'
  | 'street_address'
  | 'free_text'
  | 'unknown_parameter'

/** Returns why a value looks like PII, or undefined if it is clean. */
export function detectPii(key: string, value: unknown): PiiReason | undefined {
  if (!(ALLOWED_PARAMETERS as readonly string[]).includes(key)) {
    return 'unknown_parameter'
  }

  if (typeof value !== 'string') return undefined

  if (EMAIL.test(value)) return 'email'
  if (PHONE.test(value)) return 'phone'
  if (STREET_ADDRESS.test(value)) return 'street_address'
  if (value.length > MAX_IDENTIFIER_LENGTH) return 'free_text'

  return undefined
}

/* ==========================================================================
   Scrubbing
   ========================================================================== */

export interface ScrubResult {
  clean: Record<string, string>
  removed: { key: string; reason: PiiReason }[]
}

/**
 * Removes any parameter that fails the PII check.
 *
 * Unknown keys are removed too — 19 §131 requires one controlled
 * vocabulary, and an unrecognised key is both a reporting problem and
 * the most likely vehicle for an accidental leak.
 */
export function scrubPii(params: Record<string, unknown>): ScrubResult {
  const clean: Record<string, string> = {}
  const removed: { key: string; reason: PiiReason }[] = []

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') continue

    const reason = detectPii(key, value)
    if (reason !== undefined) {
      removed.push({ key, reason })
      continue
    }

    clean[key] = String(value)
  }

  return { clean, removed }
}

/**
 * Scrubs, and reports anything removed.
 *
 * Throws in development so the call site gets fixed; warns in
 * production so the visitor is unaffected and the event still carries
 * its remaining context.
 */
export function scrubAndReport(
  event: string,
  params: Record<string, unknown>,
): Record<string, string> {
  const { clean, removed } = scrubPii(params)

  if (removed.length > 0) {
    const detail = removed.map((r) => `${r.key} (${r.reason})`).join(', ')
    const message =
      `[analytics] Refused to send ${removed.length} parameter(s) on ` +
      `"${event}": ${detail}. Analytics must never receive names, emails, ` +
      `phone numbers, addresses, or free-form text (19 §104, CLAUDE.md §40).`

    if (process.env.NODE_ENV !== 'production') {
      throw new Error(message)
    }
    console.error(message)
  }

  return clean
}
