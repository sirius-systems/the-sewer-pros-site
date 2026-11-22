/**
 * Cloudflare Pages Function: POST /api/careers
 *
 * Receives a careers application (multipart form with an optional PDF or DOCX
 * resume) and creates or updates a GoHighLevel contact, then attaches the resume
 * to the contact. The logic lives in lib/forms/careers-server.ts so it can be
 * tested without Cloudflare. This file only wires the Pages request context to it.
 *
 * Environment variables (never in the repo; set them in Cloudflare Pages, and in
 * .dev.vars for local testing):
 *   GHL_PRIVATE_INTEGRATION_TOKEN, GHL_LOCATION_ID, TURNSTILE_SECRET_KEY,
 *   GHL_CAREERS_RESUME_FIELD_ID
 *
 * This is a separate function from /api/lead on purpose: the lead function is
 * JSON-only with a 16 KB cap and writes the `market-*` tags; this one accepts a file
 * and never writes them.
 */
import { handleCareers, type CareersEnv } from '../../lib/forms/careers-server'

interface PagesContext {
  request: Request
  env: CareersEnv
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  return handleCareers(context.request, context.env)
}

/** Any other method gets a generic refusal. */
export async function onRequest(): Promise<Response> {
  return new Response(JSON.stringify({ ok: false }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', Allow: 'POST', 'Cache-Control': 'no-store' },
  })
}
