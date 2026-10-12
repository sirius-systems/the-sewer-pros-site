/**
 * Lead submission adapter.
 *
 * The site is `output: 'export'`, so the browser cannot hold a CRM token. Leads
 * are POSTed to `/api/lead`, a Cloudflare Pages Function (`functions/api/lead.ts`,
 * logic in `lib/forms/lead-server.ts`) that validates the payload and creates or
 * updates a GoHighLevel contact with a server-side token. The reply is only
 * ok or not ok; `submitLead` never reports success for a request the server
 * did not accept (CLAUDE.md section 24).
 *
 * The payload carries personal details because that is the point of a lead
 * form, so it only ever goes to this site's own function and never to analytics.
 */

/** Same origin. A static preview without the Pages Function gets a 404 and shows the call fallback. */
export const LEAD_ENDPOINT = '/api/lead'

export interface LeadPayload {
  marketId: string
  issue: string
  followUp: string
  firstName: string
  /** Empty when the form has no separate last-name field. */
  lastName: string
  phone: string
  email: string
  zip: string
  contactMethod: string
  appointmentWindow: string
  message: string
  /** Page the request came from, canonical pathname only. */
  sourcePath: string
  /**
   * Survey form only: the visitor's service location for the CRM. `locationId` is a
   * derived registry id (`loc-sd-escondido`) or `other-<market>`; `serviceLocation` is
   * its display label. `marketId` above is that location's market.
   */
  locationId?: string
  serviceLocation?: string
  /** Survey form only: `home` or `rental-multifamily`. */
  propertyType?: string
  /**
   * SMS consent, from the two optional checkboxes (lib/forms/sms-consent.ts).
   * Both are false unless the visitor checked the box. Never sent to analytics.
   */
  smsNonMarketingConsent: boolean
  smsMarketingConsent: boolean
  /** Id of the consent wording shown, for example `sms-consent-v1`. */
  smsConsentVersion: string
  /** Analytics form type of the form that sent this (`contact_request` or `general_service`). */
  formType: string
  /** Honeypot (the input is named sp_ref). Always empty from a person; the server drops a lead where it is filled. */
  spRef: string
  /** When the form was opened (ms since epoch). The server drops a submit that is too fast. */
  formOpenedAt: number
}

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'rejected' | 'network' }

export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  try {
    const response = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return response.ok ? { ok: true } : { ok: false, reason: 'rejected' }
  } catch {
    return { ok: false, reason: 'network' }
  }
}
