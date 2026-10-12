/**
 * Cloudflare Pages Function: POST /api/lead
 *
 * Receives a lead form submission from this site and creates or updates a
 * GoHighLevel contact. The logic lives in lib/forms/lead-server.ts so it can be
 * tested without Cloudflare. This file only wires the Pages request context to it.
 *
 * Environment variables (never in the repo; set them in Cloudflare Pages, and in
 * .dev.vars for local testing):
 *   GHL_PRIVATE_INTEGRATION_TOKEN, GHL_LOCATION_ID
 *
 * Pages deploys the functions/ directory next to the static output (out/). The
 * static export itself is unchanged.
 */
import { handleLead, type LeadEnv } from '../../lib/forms/lead-server'

interface PagesContext {
  request: Request
  env: LeadEnv
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  return handleLead(context.request, context.env)
}

/** Any other method gets a generic refusal. */
export async function onRequest(): Promise<Response> {
  return new Response(JSON.stringify({ ok: false }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', Allow: 'POST', 'Cache-Control': 'no-store' },
  })
}
