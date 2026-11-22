/**
 * Server side of the careers form: validation, resume checks, GoHighLevel (GHL)
 * mapping and the HTTP handler. It runs in the Cloudflare Pages Function
 * `functions/api/careers.ts` and never in browser code, because it holds the GHL token.
 *
 * Data flow: browser form (multipart) -> POST /api/careers (same origin) -> cheap spam
 * checks -> Cloudflare Turnstile -> resume checks -> GHL contact upsert -> add tags ->
 * add note -> attach the resume to a File Upload custom field -> reply.
 *
 * The reply is `{ ok: true }` (everything done, or no resume sent), `{ ok: true,
 * partial: true }` (the contact and answers were saved but the resume could not be
 * attached) or `{ ok: false }`. It never carries a name, phone, email, file name or
 * message, and the logs carry only a request id, a step and a status code.
 *
 * Tags: `website-careers`, `form-careers` and one of `careers-st-louis`,
 * `careers-san-diego`, `careers-las-vegas`. None contains `market-`, and this file
 * never imports `leadTags`, so the per-market lead workflows cannot fire on a
 * careers contact. The existing `market` custom field is not written either.
 * Every careers tag is routed to info@thesewerpros.com in GHL (docs/lead-routing.md).
 *
 * GHL API for the resume (HighLevel developer docs, checked 2026-11-22):
 *   POST {base}/forms/upload-custom-files?contactId=...&locationId=...
 *   multipart/form-data, one file part named `<custom_field_id>_<random id>`,
 *   scope `forms.write` (the lead function's token only has `contacts.write`, so the
 *   token needs this extra scope before the attach step can work; until then the
 *   attach fails safe, see `resume-failed` below). The custom field must be a File
 *   Upload type field on contacts; its id is the env variable GHL_CAREERS_RESUME_FIELD_ID.
 */
import {
  GHL_BASE,
  GHL_TIMEOUT_MS,
  GHL_VERSION,
  TURNSTILE_VERIFY_URL,
  clean,
  createRateLimiter,
  normalizePhone,
  verifyTurnstile,
  type LeadEnv,
  type RateLimiter,
} from './lead-server'

/* ---------------------------------------------------------------------------
   Configuration
   ------------------------------------------------------------------------- */

export interface CareersEnv extends LeadEnv {
  /** Id of the File Upload custom field on contacts that holds the resume. Not a secret; keep it in env anyway. */
  GHL_CAREERS_RESUME_FIELD_ID?: string
}

export const MAX_RESUME_BYTES = 5 * 1024 * 1024
/** Resume plus a small allowance for the text fields and the multipart framing. */
export const MAX_BODY_BYTES = MAX_RESUME_BYTES + 64 * 1024
const MIN_SECONDS_TO_SUBMIT = 2
const MAX_AGE_HOURS = 24

export type CareersMarketKey = 'st-louis' | 'san-diego' | 'las-vegas'
export const CAREERS_MARKETS: Record<string, { key: CareersMarketKey; label: string }> = {
  'st-louis-mo': { key: 'st-louis', label: 'St. Louis' },
  'san-diego-ca': { key: 'san-diego', label: 'San Diego' },
  'las-vegas-nv': { key: 'las-vegas', label: 'Las Vegas' },
}
const CONTACT_METHODS: Record<string, string> = { call: 'Call', email: 'Email' }
const EMPLOYMENT_TYPES: Record<string, string> = {
  'part-time': 'Part time',
  'full-time': 'Full time',
  temp: 'Temp',
  intern: 'Intern',
}

const TEXT_LIMITS: Record<string, number> = {
  marketId: 40,
  fullName: 120,
  phone: 30,
  email: 120,
  contactMethod: 10,
  employmentType: 20,
  availability: 300,
  skills: 500,
  message: 2000,
  sourcePath: 200,
  spRef: 200,
  turnstileToken: 2100,
  formOpenedAt: 20,
}
const ALLOWED_FIELDS = new Set<string>([...Object.keys(TEXT_LIMITS), 'resume'])

/** The tag names this function adds. Read by scripts/verify-lead-routing.mjs. */
export const CAREERS_TAGS = {
  all: ['website-careers', 'form-careers'],
  byMarket: {
    'st-louis': 'careers-st-louis',
    'san-diego': 'careers-san-diego',
    'las-vegas': 'careers-las-vegas',
  },
  resumeFailed: 'careers-resume-failed',
} as const

/* ---------------------------------------------------------------------------
   Resume checks
   ------------------------------------------------------------------------- */

export type ResumeVerdict = { ok: true; ext: 'pdf' | 'docx' } | { ok: false }

function startsWith(bytes: Uint8Array, signature: number[]): boolean {
  return bytes.length >= signature.length && signature.every((b, i) => bytes[i] === b)
}

/** Names of the entries in a zip, read from its central directory. Nothing is decompressed. */
function zipEntryNames(bytes: Uint8Array): string[] | undefined {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  // End of central directory record: signature 0x06054b50, within the last 65557 bytes.
  let eocd = -1
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 22 - 65535); i -= 1) {
    if (view.getUint32(i, true) === 0x06054b50) {
      eocd = i
      break
    }
  }
  if (eocd < 0) return undefined
  const count = view.getUint16(eocd + 10, true)
  let offset = view.getUint32(eocd + 16, true)
  const names: string[] = []
  const decoder = new TextDecoder('utf-8')
  for (let n = 0; n < count && n < 5000; n += 1) {
    if (offset + 46 > bytes.length || view.getUint32(offset, true) !== 0x02014b50) return undefined
    const nameLength = view.getUint16(offset + 28, true)
    const extraLength = view.getUint16(offset + 30, true)
    const commentLength = view.getUint16(offset + 32, true)
    if (offset + 46 + nameLength > bytes.length) return undefined
    names.push(decoder.decode(bytes.subarray(offset + 46, offset + 46 + nameLength)))
    offset += 46 + nameLength + extraLength + commentLength
  }
  return names
}

/**
 * Accepts one PDF or DOCX. The extension must be .pdf or .docx, the size at most 5 MB, and the
 * bytes must match: a PDF starts with `%PDF-`; a DOCX is a zip that holds `[Content_Types].xml`
 * and a `word/` entry. The browser's reported type and file name are never trusted or stored.
 * This is a type check, not a virus scan (nothing on this stack scans uploads).
 */
export function checkResume(name: string, bytes: Uint8Array): ResumeVerdict {
  if (bytes.length === 0 || bytes.length > MAX_RESUME_BYTES) return { ok: false }
  const lower = name.toLowerCase()
  if (lower.endsWith('.pdf')) {
    return startsWith(bytes, [0x25, 0x50, 0x44, 0x46, 0x2d]) ? { ok: true, ext: 'pdf' } : { ok: false }
  }
  if (lower.endsWith('.docx')) {
    if (!startsWith(bytes, [0x50, 0x4b, 0x03, 0x04])) return { ok: false }
    const names = zipEntryNames(bytes)
    if (names === undefined) return { ok: false }
    const hasTypes = names.includes('[Content_Types].xml')
    const hasWord = names.some((entry) => entry.startsWith('word/'))
    return hasTypes && hasWord ? { ok: true, ext: 'docx' } : { ok: false }
  }
  return { ok: false }
}

/* ---------------------------------------------------------------------------
   Validation
   ------------------------------------------------------------------------- */

export interface Application {
  firstName: string
  lastName: string
  phone: string
  email: string
  contactMethod: string
  marketLabel: string
  marketKey: CareersMarketKey
  employmentType: string
  availability: string
  skills: string
  message: string
  sourcePage: string
  turnstileToken: string
  /** The resume file, when one was sent. Checked later, after Turnstile. */
  resume: File | undefined
}

export type Validated =
  | { kind: 'invalid' }
  | { kind: 'bot' }
  | { kind: 'retry' }
  | { kind: 'ok'; application: Application }

/** Checks the browser's form data. Unknown fields, wrong types and over-long values are rejected. */
export function validateApplication(form: FormData, nowMs: number): Validated {
  const str: Record<string, string> = {}
  for (const key of Object.keys(TEXT_LIMITS)) str[key] = ''
  let resume: File | undefined
  const seen = new Set<string>()
  for (const [key, value] of form.entries()) {
    if (!ALLOWED_FIELDS.has(key) || seen.has(key)) return { kind: 'invalid' }
    seen.add(key)
    if (key === 'resume') {
      if (typeof value === 'string') return { kind: 'invalid' }
      resume = value
      continue
    }
    if (typeof value !== 'string' || value.length > (TEXT_LIMITS[key] ?? 0)) return { kind: 'invalid' }
    str[key] = value
  }

  const opened = Number(str.formOpenedAt)
  if (str.formOpenedAt === '' || !Number.isFinite(opened)) return { kind: 'invalid' }
  const elapsed = (nowMs - opened) / 1000
  // A filled honeypot is dropped quietly; a submit faster than a person can type gets a retry reply.
  if (str.spRef !== '') return { kind: 'bot' }
  if (elapsed < MIN_SECONDS_TO_SUBMIT) return { kind: 'retry' }
  if (elapsed > MAX_AGE_HOURS * 3600) return { kind: 'invalid' }

  const market = CAREERS_MARKETS[str.marketId]
  const fullName = clean(str.fullName)
  const phone = normalizePhone(str.phone)
  const email = clean(str.email)
  const method = CONTACT_METHODS[str.contactMethod]
  if (market === undefined || fullName === '' || phone === undefined || method === undefined) return { kind: 'invalid' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { kind: 'invalid' }
  const employment = str.employmentType === '' ? '' : EMPLOYMENT_TYPES[str.employmentType]
  if (employment === undefined) return { kind: 'invalid' }
  const sourcePage = clean(str.sourcePath)
  if (!sourcePage.startsWith('/')) return { kind: 'invalid' }

  const space = fullName.indexOf(' ')
  const firstName = space === -1 ? fullName : fullName.slice(0, space)
  const lastName = space === -1 ? '' : fullName.slice(space + 1).trim()

  // The browser sends no file part when none was chosen; an empty one counts as none.
  const hasResume = resume !== undefined && (resume.size > 0 || resume.name !== '')

  return {
    kind: 'ok',
    application: {
      firstName,
      lastName,
      phone,
      email,
      contactMethod: method,
      marketLabel: market.label,
      marketKey: market.key,
      employmentType: employment,
      availability: clean(str.availability),
      skills: clean(str.skills),
      message: clean(str.message),
      sourcePage,
      turnstileToken: str.turnstileToken,
      resume: hasResume ? resume : undefined,
    },
  }
}

/* ---------------------------------------------------------------------------
   GHL mapping
   ------------------------------------------------------------------------- */

/** Tags are added, never overwritten. Careers tags only: never `website-lead`, `form-*` lead tags or `market-*`. */
export function careersTags(application: Pick<Application, 'marketKey'>): string[] {
  return [...CAREERS_TAGS.all, CAREERS_TAGS.byMarket[application.marketKey]]
}

function noteBody(application: Application, receivedAtIso: string, resume: 'attached' | 'none' | 'failed'): string {
  const lines = [
    `Market applied for: ${application.marketLabel}`,
    `Preferred contact: ${application.contactMethod}`,
    ...(application.employmentType !== '' ? [`Type of employment desired: ${application.employmentType}`] : []),
    ...(application.availability !== '' ? [`Availability: ${application.availability}`] : []),
    ...(application.skills !== '' ? [`Skills or certifications: ${application.skills}`] : []),
    ...(application.message !== '' ? [`Message: ${application.message}`] : []),
    `Resume: ${resume === 'attached' ? 'attached to this contact' : resume === 'none' ? 'not sent' : 'sent but could not be attached'}`,
    `Source page: ${application.sourcePage}`,
    `Received (UTC): ${receivedAtIso}`,
  ]
  return `Careers application\n${lines.join('\n')}`
}

/* ---------------------------------------------------------------------------
   Handler
   ------------------------------------------------------------------------- */

export interface CareersDeps {
  fetchImpl?: typeof fetch
  now?: () => number
  limiter?: RateLimiter
  requestId?: () => string
  log?: (line: string) => void
}

const sharedLimiter = createRateLimiter()

function reply(ok: boolean, status: number, extra: Record<string, unknown> = {}): Response {
  return new Response(JSON.stringify({ ok, ...extra }), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}

export async function handleCareers(request: Request, env: CareersEnv, deps: CareersDeps = {}): Promise<Response> {
  const fetchImpl = deps.fetchImpl ?? fetch
  const nowMs = (deps.now ?? Date.now)()
  const id = (deps.requestId ?? (() => crypto.randomUUID()))()
  const log = deps.log ?? ((line: string) => console.log(line))
  const done = (ok: boolean, status: number, step: string, extra: Record<string, unknown> = {}): Response => {
    log(JSON.stringify({ requestId: id, step, status }))
    return reply(ok, status, extra)
  }

  // Same origin only, and only a multipart form.
  const origin = request.headers.get('Origin')
  if (origin === null || origin !== new URL(request.url).origin) return done(false, 403, 'origin')
  if (!(request.headers.get('Content-Type') ?? '').toLowerCase().startsWith('multipart/form-data')) {
    return done(false, 415, 'content-type')
  }

  const ip = request.headers.get('CF-Connecting-IP') ?? request.headers.get('X-Forwarded-For') ?? 'unknown'
  if (!(deps.limiter ?? sharedLimiter).allow(ip, nowMs)) return done(false, 429, 'rate-limit')

  // The size is checked from the header before the body is read. A request without a length is refused.
  const length = Number(request.headers.get('Content-Length'))
  if (!Number.isFinite(length) || length <= 0) return done(false, 411, 'no-length')
  if (length > MAX_BODY_BYTES) return done(false, 413, 'too-large')

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return done(false, 400, 'bad-form')
  }

  const result = validateApplication(form, nowMs)
  if (result.kind === 'invalid') return done(false, 400, 'validation')
  // Bots get the same reply a person would, and nothing is sent anywhere.
  if (result.kind === 'bot') return done(true, 200, 'bot-dropped')
  if (result.kind === 'retry') {
    log(JSON.stringify({ requestId: id, step: 'too-fast', status: 429 }))
    return reply(false, 429, { retry: true })
  }
  const application = result.application

  // Cloudflare Turnstile. Fails closed: with no secret configured the function refuses the application.
  const turnstileSecret = env.TURNSTILE_SECRET_KEY
  if (!turnstileSecret) return done(false, 500, 'not-configured')
  if (application.turnstileToken === '') return done(false, 403, 'turnstile-missing')
  const verdict = await verifyTurnstile(
    fetchImpl,
    env.TURNSTILE_VERIFY_URL ?? TURNSTILE_VERIFY_URL,
    turnstileSecret,
    application.turnstileToken,
    ip,
  )
  if (verdict === 'fail') return done(false, 403, 'turnstile-failed')
  if (verdict === 'error') return done(false, 502, 'turnstile-error')

  // The resume is read only now, after the cheap checks and Turnstile. A file that fails the
  // checks is refused as a whole (nothing is saved), so the visitor can fix it and try again.
  let resumeBytes: Uint8Array | undefined
  let resumeExt: 'pdf' | 'docx' | undefined
  if (application.resume !== undefined) {
    if (application.resume.size > MAX_RESUME_BYTES) return done(false, 413, 'resume-too-large')
    resumeBytes = new Uint8Array(await application.resume.arrayBuffer())
    const verdictFile = checkResume(application.resume.name, resumeBytes)
    if (!verdictFile.ok) return done(false, 400, 'resume-rejected')
    resumeExt = verdictFile.ext
  }

  const token = env.GHL_PRIVATE_INTEGRATION_TOKEN
  const locationId = env.GHL_LOCATION_ID
  if (!token || !locationId) return done(false, 500, 'not-configured')

  const base = env.GHL_API_BASE ?? GHL_BASE
  const auth = { Authorization: `Bearer ${token}`, Version: GHL_VERSION, Accept: 'application/json' }
  const call = async (path: string, payload: unknown, method: 'POST' | 'DELETE' = 'POST'): Promise<{ status: number; json?: unknown }> => {
    try {
      const res = await fetchImpl(`${base}${path}`, {
        method,
        headers: { ...auth, 'Content-Type': 'application/json' },
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
  const ok2xx = (status: number) => status >= 200 && status < 300

  const receivedAtIso = new Date(nowMs).toISOString()
  const contact: Record<string, unknown> = {
    locationId,
    firstName: application.firstName,
    email: application.email,
    phone: application.phone,
    source: 'The Sewer Pros website (careers)',
  }
  if (application.lastName !== '') contact.lastName = application.lastName
  const customFields = [
    { key: 'preferred_contact_method', fieldValue: application.contactMethod },
    { key: 'source_page', fieldValue: application.sourcePage },
    // Merge fields for the notification email. Written even when empty so a repeat application
    // never shows the last one's message. Employment type, availability and skills have no field (they are in the note).
    { key: 'market', fieldValue: application.marketLabel },
    { key: 'inquiry_message', fieldValue: application.message },
  ]

  let upsert = await call('/contacts/upsert', { ...contact, customFields })
  log(JSON.stringify({ requestId: id, step: 'ghl-upsert', status: upsert.status }))
  if (upsert.status >= 400 && upsert.status < 500 && ![401, 403, 429].includes(upsert.status)) {
    // Most likely a custom field that does not exist yet. Save the contact without custom fields.
    upsert = await call('/contacts/upsert', contact)
    log(JSON.stringify({ requestId: id, step: 'ghl-upsert-retry', status: upsert.status }))
  }
  const contactId =
    typeof upsert.json === 'object' && upsert.json !== null
      ? ((upsert.json as { contact?: { id?: unknown } }).contact?.id as string | undefined)
      : undefined
  if (!ok2xx(upsert.status) || typeof contactId !== 'string' || contactId === '') {
    return done(false, 502, 'ghl-failed')
  }
  const contactPath = `/contacts/${encodeURIComponent(contactId)}`

  // Order: custom fields (upsert), resume, resume-failed tag, note, and only then the tags that start
  // the notification workflow, so the email already sees this application's data and attachment.
  const wantsResume = resumeBytes !== undefined && resumeExt !== undefined
  // The note is written once, with the resume outcome known, so the order is: attach, then note.
  let resume: 'attached' | 'none' | 'failed' = 'none'
  if (wantsResume) {
    const fieldId = env.GHL_CAREERS_RESUME_FIELD_ID
    if (!fieldId) {
      log(JSON.stringify({ requestId: id, step: 'resume-not-configured', status: 0 }))
      resume = 'failed'
    } else {
      try {
        const body = new FormData()
        // Generated, safe name: the browser's file name is never used or stored.
        const safeName = `resume-${crypto.randomUUID().slice(0, 8)}.${resumeExt}`
        body.append(
          `${fieldId}_${crypto.randomUUID()}`,
          new Blob([resumeBytes as BlobPart], {
            type: resumeExt === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          }),
          safeName,
        )
        const res = await fetchImpl(
          `${base}/forms/upload-custom-files?contactId=${encodeURIComponent(contactId)}&locationId=${encodeURIComponent(locationId)}`,
          { method: 'POST', headers: auth, body, signal: AbortSignal.timeout(GHL_TIMEOUT_MS * 2) },
        )
        log(JSON.stringify({ requestId: id, step: 'ghl-resume', status: res.status }))
        resume = ok2xx(res.status) ? 'attached' : 'failed'
      } catch {
        log(JSON.stringify({ requestId: id, step: 'ghl-resume', status: 0 }))
        resume = 'failed'
      }
    }
  }

  if (resume === 'failed') {
    const failTag = await call(`${contactPath}/tags`, { tags: [CAREERS_TAGS.resumeFailed] })
    log(JSON.stringify({ requestId: id, step: 'ghl-tag-resume-failed', status: failTag.status }))
  }
  let note = await call(`${contactPath}/notes`, { body: noteBody(application, receivedAtIso, resume) })
  if (!ok2xx(note.status)) note = await call(`${contactPath}/notes`, { body: noteBody(application, receivedAtIso, resume) })
  log(JSON.stringify({ requestId: id, step: 'ghl-note', status: note.status }))
  if (!ok2xx(note.status)) return done(false, 502, 'ghl-note-failed')

  // A returning applicant still has website-careers, and "Tag added" fires only for a newly added tag,
  // so remove it first. A failed remove is logged and the add still runs. Other tags are never removed.
  const removed = await call(`${contactPath}/tags`, { tags: [CAREERS_TAGS.all[0]] }, 'DELETE')
  log(JSON.stringify({ requestId: id, step: 'ghl-tag-remove', status: removed.status }))
  // The tags start the notification workflow, so a failure of this step is a failure of the application
  // (the visitor is told, and a retry updates the same contact).
  let tags = await call(`${contactPath}/tags`, { tags: careersTags(application) })
  if (!ok2xx(tags.status)) tags = await call(`${contactPath}/tags`, { tags: careersTags(application) })
  log(JSON.stringify({ requestId: id, step: 'ghl-tags', status: tags.status }))
  if (!ok2xx(tags.status)) return done(false, 502, 'ghl-tags-failed')

  return resume === 'failed' ? done(true, 200, 'ok-resume-failed', { partial: true }) : done(true, 200, 'ok')
}
