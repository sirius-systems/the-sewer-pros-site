/**
 * Server side of the lead forms: validation, GoHighLevel (GHL) mapping and the
 * HTTP handler. It runs in the Cloudflare Pages Function `functions/api/lead.ts`
 * and never in browser code, because it holds the GHL token.
 *
 * Data flow: browser form -> POST /api/lead (same origin) -> validation and spam
 * checks -> GHL contact upsert -> add tags -> add note -> generic reply.
 *
 * Secrets come from environment variables (GHL_PRIVATE_INTEGRATION_TOKEN,
 * GHL_LOCATION_ID). Nothing here prints, logs or returns a secret, a name, a
 * phone number, an email address, a message or a consent value. The only things
 * logged are a request id and numeric status codes.
 *
 * GHL API (checked against HighLevel's developer docs on 2026-10-12):
 * - base URL https://services.leadconnectorhq.com, headers
 *   `Authorization: Bearer <Private Integration token>` and `Version: 2021-07-28`
 * - POST /contacts/upsert (create or update by phone or email, follows the
 *   location's "Allow Duplicate Contact" setting), scope contacts.write. Custom
 *   fields are sent as `{ key: "<unique_key>", fieldValue }` with NO `contact.`
 *   prefix: tested against the live API on 2026-10-12, a key with the prefix is
 *   accepted (HTTP 201) but silently ignored, while the bare key, the field id
 *   and id plus key all store the value. GHL also ignores a key that names a
 *   field that does not exist, with no error, so the consent record is always
 *   repeated in the note as well.
 * - POST /contacts/{id}/tags (adds tags; the upsert `tags` field would overwrite
 *   every existing tag, so tags are added with this call instead)
 * - POST /contacts/{id}/notes (the free-text details)
 * Do Not Disturb (`dnd`, `dndSettings`) is deliberately NOT set: the docs describe
 * it as a channel block, not a consent record, so consent is kept in custom
 * fields instead.
 */
import { SMS_CONSENT_VERSION } from './sms-consent'

/* ---------------------------------------------------------------------------
   Configuration
   ------------------------------------------------------------------------- */

export interface LeadEnv {
  GHL_PRIVATE_INTEGRATION_TOKEN?: string
  GHL_LOCATION_ID?: string
  /** Test hook only: points the GHL calls at a mock server. Leave unset in production. */
  GHL_API_BASE?: string
}

const GHL_BASE = 'https://services.leadconnectorhq.com'
const GHL_VERSION = '2021-07-28'

/**
 * PLACEHOLDER FOR PER-MARKET ROUTING (owner has not decided yet).
 * Today every lead goes to the single location in GHL_LOCATION_ID. The market is
 * recorded as a custom field and a tag only. To route a market elsewhere later,
 * add an entry to `byMarket` (the name of an environment variable that holds
 * that market's location id) and read it in `locationIdFor`. Do not create
 * separate addresses or pipelines until the owner decides.
 */
export const LEAD_ROUTING: {
  defaultLocationEnv: 'GHL_LOCATION_ID'
  byMarket: Partial<Record<'st-louis' | 'san-diego' | 'las-vegas', string>>
} = {
  defaultLocationEnv: 'GHL_LOCATION_ID',
  byMarket: {},
}

/** Custom field keys. Create these in GHL (Settings, Custom Fields) as single-line text fields. */
export const GHL_CUSTOM_FIELD_KEYS = [
  'preferred_contact_method',
  'sms_nonmarketing_consent',
  'sms_marketing_consent',
  'sms_consent_version',
  'sms_consent_timestamp',
  'market',
  'source_page',
] as const

const KNOWN_CONSENT_VERSIONS: readonly string[] = [SMS_CONSENT_VERSION]
const MAX_BODY_BYTES = 16 * 1024
const MIN_SECONDS_TO_SUBMIT = 3
const MAX_AGE_HOURS = 24
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 }
const GHL_TIMEOUT_MS = 8000

/* ---------------------------------------------------------------------------
   Validation
   ------------------------------------------------------------------------- */

type MarketKey = 'st-louis' | 'san-diego' | 'las-vegas' | 'none'
const MARKETS: Record<string, { key: Exclude<MarketKey, 'none'>; label: string }> = {
  'st-louis-mo': { key: 'st-louis', label: 'St. Louis' },
  'san-diego-ca': { key: 'san-diego', label: 'San Diego' },
  'las-vegas-nv': { key: 'las-vegas', label: 'Las Vegas' },
}
const CONTACT_METHODS: Record<string, string> = { call: 'Call', text: 'Text', email: 'Email' }
const FORM_TYPES: Record<string, string> = {
  contact_request: 'contact',
  general_service: 'survey',
}

const STRING_LIMITS: Record<string, number> = {
  marketId: 40,
  issue: 80,
  followUp: 300,
  firstName: 60,
  lastName: 60,
  phone: 30,
  email: 120,
  zip: 10,
  contactMethod: 10,
  appointmentWindow: 80,
  message: 2000,
  sourcePath: 200,
  locationId: 60,
  serviceLocation: 100,
  propertyType: 40,
  smsConsentVersion: 40,
  formType: 40,
  website: 200,
}
const BOOLEAN_FIELDS = ['smsNonMarketingConsent', 'smsMarketingConsent'] as const
const NUMBER_FIELDS = ['formOpenedAt'] as const
const ALLOWED_FIELDS = new Set<string>([...Object.keys(STRING_LIMITS), ...BOOLEAN_FIELDS, ...NUMBER_FIELDS])

export interface Lead {
  firstName: string
  lastName: string
  phone: string
  email: string
  contactMethod: string
  marketLabel: string
  marketKey: MarketKey
  formTag: string
  sourcePage: string
  smsNonMarketingConsent: boolean
  smsMarketingConsent: boolean
  smsConsentVersion: string
  details: { label: string; value: string }[]
}

/** Plain text only: control characters and angle brackets removed, spaces collapsed. */
function clean(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/[<>]/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim()
}

/** E.164 for US numbers; other numbers must already start with + and have 8 to 15 digits. */
export function normalizePhone(raw: string): string | undefined {
  const digits = raw.replace(/\D/g, '')
  if (raw.trim().startsWith('+')) return digits.length >= 8 && digits.length <= 15 ? `+${digits}` : undefined
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  return undefined
}

function marketFromPath(path: string): string | undefined {
  const m = path.match(/(st-louis-mo|san-diego-ca|las-vegas-nv)/)
  return m?.[1]
}

export type Validated =
  | { kind: 'invalid' }
  | { kind: 'bot' }
  | { kind: 'ok'; lead: Lead }

/** Checks the browser payload. Unknown fields, wrong types and over-long values are rejected. */
export function validateLead(input: unknown, nowMs: number): Validated {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { kind: 'invalid' }
  const body = input as Record<string, unknown>
  for (const key of Object.keys(body)) if (!ALLOWED_FIELDS.has(key)) return { kind: 'invalid' }

  const str: Record<string, string> = {}
  for (const [key, limit] of Object.entries(STRING_LIMITS)) {
    const v = body[key]
    if (v === undefined) {
      str[key] = ''
      continue
    }
    if (typeof v !== 'string' || v.length > limit) return { kind: 'invalid' }
    str[key] = v
  }
  for (const key of BOOLEAN_FIELDS) if (body[key] !== undefined && typeof body[key] !== 'boolean') return { kind: 'invalid' }
  const opened = body.formOpenedAt
  if (typeof opened !== 'number' || !Number.isFinite(opened)) return { kind: 'invalid' }

  // Spam: a filled honeypot or a submit faster than a person can type is dropped quietly.
  const elapsed = (nowMs - opened) / 1000
  if (str.website !== '' || elapsed < MIN_SECONDS_TO_SUBMIT) return { kind: 'bot' }
  if (elapsed > MAX_AGE_HOURS * 3600) return { kind: 'invalid' }

  const firstName = clean(str.firstName)
  const lastName = clean(str.lastName)
  const phone = normalizePhone(str.phone)
  const email = clean(str.email)
  const method = CONTACT_METHODS[str.contactMethod]
  if (firstName === '' || phone === undefined || method === undefined) return { kind: 'invalid' }
  if (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { kind: 'invalid' }
  if (str.zip !== '' && !/^\d{5}(-\d{4})?$/.test(str.zip)) return { kind: 'invalid' }
  const consentVersion = str.smsConsentVersion === '' ? SMS_CONSENT_VERSION : str.smsConsentVersion
  if (!KNOWN_CONSENT_VERSIONS.includes(consentVersion)) return { kind: 'invalid' }
  const formTag = FORM_TYPES[str.formType]
  if (formTag === undefined) return { kind: 'invalid' }

  const sourcePage = clean(str.sourcePath)
  if (!sourcePage.startsWith('/')) return { kind: 'invalid' }
  const marketId = MARKETS[str.marketId] !== undefined ? str.marketId : marketFromPath(sourcePage)
  const market = marketId === undefined ? undefined : MARKETS[marketId]

  const details = (
    [
      ['Additional information', clean(str.message)],
      ['Service requested', clean(str.issue)],
      ['Follow-up answer', clean(str.followUp)],
      ['Service location', clean(str.serviceLocation)],
      ['Property type', clean(str.propertyType)],
      ['ZIP code', str.zip],
      ['Preferred appointment window', clean(str.appointmentWindow)],
    ] as const
  )
    .filter(([, v]) => v !== '')
    .map(([label, value]) => ({ label, value }))

  return {
    kind: 'ok',
    lead: {
      firstName,
      lastName,
      phone,
      email,
      contactMethod: method,
      marketLabel: market?.label ?? 'none',
      marketKey: market?.key ?? 'none',
      formTag,
      sourcePage,
      // Consent is true only when the box was checked. It is never inferred from Call or Text.
      smsNonMarketingConsent: body.smsNonMarketingConsent === true,
      smsMarketingConsent: body.smsMarketingConsent === true,
      smsConsentVersion: consentVersion,
      details,
    },
  }
}

/* ---------------------------------------------------------------------------
   GHL mapping
   ------------------------------------------------------------------------- */

export function customFieldValues(lead: Lead, receivedAtIso: string): { key: string; fieldValue: string }[] {
  const anyConsent = lead.smsNonMarketingConsent || lead.smsMarketingConsent
  const values: Record<(typeof GHL_CUSTOM_FIELD_KEYS)[number], string> = {
    preferred_contact_method: lead.contactMethod,
    sms_nonmarketing_consent: String(lead.smsNonMarketingConsent),
    sms_marketing_consent: String(lead.smsMarketingConsent),
    sms_consent_version: lead.smsConsentVersion,
    // Server-side UTC time of receipt, recorded only when a consent box was checked.
    sms_consent_timestamp: anyConsent ? receivedAtIso : '',
    market: lead.marketLabel,
    source_page: lead.sourcePage,
  }
  return GHL_CUSTOM_FIELD_KEYS.filter((k) => values[k] !== '').map((k) => ({
    key: k,
    fieldValue: values[k],
  }))
}

/** Tags are added, never overwritten. No marketing tag is ever added. */
export function leadTags(lead: Lead): string[] {
  const tags = ['website-lead', `form-${lead.formTag}`]
  if (lead.marketKey !== 'none') tags.push(`market-${lead.marketKey}`)
  return tags
}

function noteBody(lead: Lead, receivedAtIso: string): string {
  const lines = lead.details.map((d) => `${d.label}: ${d.value}`)
  lines.push(`Preferred contact: ${lead.contactMethod}`, `Source page: ${lead.sourcePage}`, `Market: ${lead.marketLabel}`)
  // The consent record is always repeated here, because GHL silently ignores a custom
  // field that does not exist, so the field alone is not proof it was saved.
  lines.push(
    `SMS non-marketing consent: ${lead.smsNonMarketingConsent}`,
    `SMS marketing consent: ${lead.smsMarketingConsent}`,
    `SMS consent version: ${lead.smsConsentVersion}`,
    `Received (UTC): ${receivedAtIso}`,
  )
  return `Website request\n${lines.join('\n')}`
}

/* ---------------------------------------------------------------------------
   Rate limiting (best effort, per isolate)
   ------------------------------------------------------------------------- */

export interface RateLimiter {
  allow(key: string, nowMs: number): boolean
}

/**
 * Sliding window per IP, kept in memory. Cloudflare may run several isolates, so
 * this limits bursts but is not a hard global cap. A Cloudflare rate limiting
 * rule or Turnstile (needs dashboard keys) is the follow-up.
 */
export function createRateLimiter(max = RATE_LIMIT.max, windowMs = RATE_LIMIT.windowMs): RateLimiter {
  const hits = new Map<string, number[]>()
  return {
    allow(key, nowMs) {
      const recent = (hits.get(key) ?? []).filter((t) => nowMs - t < windowMs)
      if (recent.length >= max) {
        hits.set(key, recent)
        return false
      }
      recent.push(nowMs)
      hits.set(key, recent)
      if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => nowMs - t >= windowMs)) hits.delete(k)
      return true
    },
  }
}
const sharedLimiter = createRateLimiter()

/* ---------------------------------------------------------------------------
   Handler
   ------------------------------------------------------------------------- */

export interface HandlerDeps {
  fetchImpl?: typeof fetch
  now?: () => number
  limiter?: RateLimiter
  requestId?: () => string
  log?: (line: string) => void
}

function reply(ok: boolean, status: number): Response {
  return new Response(JSON.stringify({ ok }), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}

function locationIdFor(env: LeadEnv, marketKey: MarketKey): string | undefined {
  // Per-market routing placeholder: see LEAD_ROUTING. Everything uses the default location today.
  void marketKey
  return env[LEAD_ROUTING.defaultLocationEnv]
}

export async function handleLead(request: Request, env: LeadEnv, deps: HandlerDeps = {}): Promise<Response> {
  const fetchImpl = deps.fetchImpl ?? fetch
  const nowMs = (deps.now ?? Date.now)()
  const id = (deps.requestId ?? (() => crypto.randomUUID()))()
  const log = deps.log ?? ((line: string) => console.log(line))
  const done = (ok: boolean, status: number, step: string): Response => {
    log(JSON.stringify({ requestId: id, step, status }))
    return reply(ok, status)
  }

  // Same origin only.
  const origin = request.headers.get('Origin')
  if (origin === null || origin !== new URL(request.url).origin) return done(false, 403, 'origin')
  if (!(request.headers.get('Content-Type') ?? '').toLowerCase().startsWith('application/json')) {
    return done(false, 415, 'content-type')
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? request.headers.get('X-Forwarded-For') ?? 'unknown'
  if (!(deps.limiter ?? sharedLimiter).allow(ip, nowMs)) return done(false, 429, 'rate-limit')

  const text = await request.text()
  if (text.length > MAX_BODY_BYTES) return done(false, 413, 'too-large')
  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch {
    return done(false, 400, 'bad-json')
  }

  const result = validateLead(parsed, nowMs)
  if (result.kind === 'invalid') return done(false, 400, 'validation')
  // Bots get the same reply a person would, and nothing is sent anywhere.
  if (result.kind === 'bot') return done(true, 200, 'bot-dropped')
  const lead = result.lead

  const token = env.GHL_PRIVATE_INTEGRATION_TOKEN
  const locationId = locationIdFor(env, lead.marketKey)
  if (!token || !locationId) return done(false, 500, 'not-configured')

  const base = env.GHL_API_BASE ?? GHL_BASE
  const headers = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  const call = async (path: string, payload: unknown): Promise<{ status: number; json?: unknown }> => {
    try {
      const res = await fetchImpl(`${base}${path}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(GHL_TIMEOUT_MS),
      })
      let json: unknown
      try {
        json = await res.json()
      } catch {
        json = undefined
      }
      return { status: res.status, json }
    } catch {
      return { status: 0 }
    }
  }

  const receivedAtIso = new Date(nowMs).toISOString()
  const contact: Record<string, unknown> = {
    locationId,
    firstName: lead.firstName,
    phone: lead.phone,
    source: 'The Sewer Pros website',
  }
  if (lead.lastName !== '') contact.lastName = lead.lastName
  if (lead.email !== '') contact.email = lead.email

  let upsert = await call('/contacts/upsert', { ...contact, customFields: customFieldValues(lead, receivedAtIso) })
  log(JSON.stringify({ requestId: id, step: 'ghl-upsert', status: upsert.status }))
  if (upsert.status >= 400 && upsert.status < 500 && ![401, 403, 429].includes(upsert.status)) {
    // Most likely a custom field that does not exist yet in GHL. Save the contact without
    // the custom fields and keep the consent record in the note instead.
    upsert = await call('/contacts/upsert', contact)
    log(JSON.stringify({ requestId: id, step: 'ghl-upsert-retry', status: upsert.status }))
  }
  const contactId =
    typeof upsert.json === 'object' && upsert.json !== null
      ? ((upsert.json as { contact?: { id?: unknown } }).contact?.id as string | undefined)
      : undefined
  if (upsert.status < 200 || upsert.status >= 300 || typeof contactId !== 'string' || contactId === '') {
    return done(false, 502, 'ghl-failed')
  }

  const tags = await call(`/contacts/${encodeURIComponent(contactId)}/tags`, { tags: leadTags(lead) })
  log(JSON.stringify({ requestId: id, step: 'ghl-tags', status: tags.status }))
  const note = await call(`/contacts/${encodeURIComponent(contactId)}/notes`, {
    body: noteBody(lead, receivedAtIso),
  })
  log(JSON.stringify({ requestId: id, step: 'ghl-note', status: note.status }))

  return done(true, 200, 'ok')
}
