/**
 * Lead submission adapter.
 *
 * ===========================================================================
 * ⚠ NO ENDPOINT IS WIRED YET (PENDING-018)
 * ===========================================================================
 * The site is `output: 'export'`, so there is no API route or server
 * action to post to. Until a form service or a Cloudflare Pages Function
 * is chosen and its URL is set in `NEXT_PUBLIC_LEAD_ENDPOINT`, this
 * returns `{ ok: false, reason: 'not-configured' }` and the form tells
 * the visitor to call. It never reports success for a request nothing
 * received (CLAUDE.md §24).
 *
 * The payload is JSON with stable ids only where an id exists. It carries
 * personal details because that is the point of a lead form, so it must
 * only ever go to the business's own CRM endpoint and never to analytics.
 */

export interface LeadPayload {
  marketId: string
  issue: string
  followUp: string
  firstName: string
  phone: string
  email: string
  zip: string
  contactMethod: string
  appointmentWindow: string
  message: string
  /** Page the request came from, canonical pathname only. */
  sourcePath: string
}

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'rejected' | 'network' }

export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT
  if (endpoint === undefined || endpoint === '') {
    return { ok: false, reason: 'not-configured' }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return response.ok ? { ok: true } : { ok: false, reason: 'rejected' }
  } catch {
    return { ok: false, reason: 'network' }
  }
}
