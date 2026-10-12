#!/usr/bin/env node
/**
 * Local test of the lead Pages Function against a MOCK GoHighLevel server.
 *
 * It builds a temporary project (the function, its two library files, a stub page
 * and a .dev.vars with FAKE credentials), runs `wrangler pages dev` there, starts a
 * mock GHL on localhost, and checks validation, spam protection, rate limiting, the
 * payload sent to GHL, the field mapping, and that no secret, phone number, name or
 * consent value appears in the function's logs or in any reply.
 *
 * It never reads the repo's real .dev.vars and never contacts GoHighLevel.
 *
 * Usage: node scripts/test-lead-function.mjs
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import http from 'node:http'
import { spawn } from 'node:child_process'

const repo = process.cwd()
const FAKE_TOKEN = 'pit-FAKE-TEST-TOKEN-0000'
const FAKE_LOCATION = 'LOCFAKETEST0000'
const FAKE_TS_SECRET = '0xFAKE-TURNSTILE-SECRET-0000'
const GOOD_TS_TOKEN = 'ts-token-VALID-1111'
const MOCK_PORT = 5990
const FN_PORT = 8799
const PHONE_DIGITS = '3145550199'
const FIRST = 'Testfirst'
const LAST = 'Testlast'

/* ---- temporary project ---- */
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lead-fn-'))
const put = (rel, text) => {
  fs.mkdirSync(path.dirname(path.join(tmp, rel)), { recursive: true })
  fs.writeFileSync(path.join(tmp, rel), text)
}
put('functions/api/lead.ts', fs.readFileSync(path.join(repo, 'functions/api/lead.ts'), 'utf8'))
put('lib/forms/lead-server.ts', fs.readFileSync(path.join(repo, 'lib/forms/lead-server.ts'), 'utf8'))
put('lib/forms/sms-consent.ts', fs.readFileSync(path.join(repo, 'lib/forms/sms-consent.ts'), 'utf8'))
put('public/index.html', '<!doctype html><title>stub</title>')
put('.dev.vars', `GHL_PRIVATE_INTEGRATION_TOKEN=${FAKE_TOKEN}\nGHL_LOCATION_ID=${FAKE_LOCATION}\nGHL_API_BASE=http://127.0.0.1:${MOCK_PORT}\nTURNSTILE_SECRET_KEY=${FAKE_TS_SECRET}\nTURNSTILE_VERIFY_URL=http://127.0.0.1:${MOCK_PORT}/turnstile/v0/siteverify\n`)

/* ---- mock GHL ---- */
let received = []
let tsCalls = []
let mode = 'ok'
const mock = http.createServer((req, res) => {
  let body = ''
  req.on('data', (c) => (body += c))
  req.on('end', () => {
    res.setHeader('Content-Type', 'application/json')
    if (req.url === '/turnstile/v0/siteverify') {
      const b = JSON.parse(body)
      tsCalls.push(b)
      if (mode === 'ts-error') return res.writeHead(500).end('{}')
      return res.writeHead(200).end(JSON.stringify({ success: b.secret === FAKE_TS_SECRET && b.response === GOOD_TS_TOKEN }))
    }
    received.push({ method: req.method, url: req.url, headers: req.headers, body: body === '' ? undefined : JSON.parse(body) })
    if (req.url === '/contacts/upsert') {
      const hasFields = Array.isArray(JSON.parse(body).customFields)
      if (mode === 'server-error') return res.writeHead(500).end('{"message":"RAW GHL ERROR SECRET-TEXT"}')
      if (mode === 'fields-missing' && hasFields) return res.writeHead(422).end('{"message":"custom field not found"}')
      return res.writeHead(200).end('{"new":true,"contact":{"id":"contact_abc123"},"traceId":"t"}')
    }
    return res.writeHead(201).end('{}')
  })
})
await new Promise((r) => mock.listen(MOCK_PORT, '127.0.0.1', r))

/* ---- wrangler ---- */
let logs = ''
const wr = spawn('npx', ['--yes', 'wrangler', 'pages', 'dev', 'public', '--port', String(FN_PORT), '--ip', '127.0.0.1'], { cwd: tmp, shell: true })
wr.stdout.on('data', (d) => (logs += d))
wr.stderr.on('data', (d) => (logs += d))
const base = `http://127.0.0.1:${FN_PORT}`
const t0 = Date.now()
while (Date.now() - t0 < 120000) {
  try {
    const r = await fetch(`${base}/index.html`)
    if (r.ok) break
  } catch {}
  await new Promise((r) => setTimeout(r, 1000))
}

/* ---- helpers ---- */
let pass = 0
let fail = 0
const check = (name, ok, extra = '') => {
  if (ok) pass++
  else fail++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  ' + extra}`)
}
let ipCounter = 0
const lead = (over = {}) => ({
  marketId: 'st-louis-mo',
  issue: 'camera-inspection',
  followUp: '',
  firstName: FIRST,
  lastName: LAST,
  phone: `(314) 555-0199`,
  email: '',
  zip: '63011',
  contactMethod: 'text',
  appointmentWindow: '',
  message: 'Plain text note <b>bold</b>',
  sourcePath: '/contact/',
  smsNonMarketingConsent: false,
  smsMarketingConsent: false,
  smsConsentVersion: 'sms-consent-v1',
  formType: 'contact_request',
  spRef: '',
  turnstileToken: GOOD_TS_TOKEN,
  formOpenedAt: Date.now() - 60000,
  ...over,
})
const post = async (body, { origin = base, ip, ctype = 'application/json', raw } = {}) => {
  const res = await fetch(`${base}/api/lead`, {
    method: 'POST',
    headers: { 'Content-Type': ctype, ...(origin ? { Origin: origin } : {}), 'CF-Connecting-IP': ip ?? `10.0.0.${++ipCounter}` },
    body: raw ?? JSON.stringify(body),
  })
  return { status: res.status, text: await res.text() }
}
const reset = () => {
  received = []
  tsCalls = []
  mode = 'ok'
}
const upsert = () => received.find((r) => r.url === '/contacts/upsert')
const cf = (b, key) => b.customFields.find((f) => f.key === key)?.fieldValue

/* ---- tests ---- */
reset()
let r = await post(lead())
check('valid lead returns 200 {"ok":true} only', r.status === 200 && r.text === '{"ok":true}', r.text)
const up = upsert()
check('GHL called with Bearer token and Version 2021-07-28', up?.headers.authorization === `Bearer ${FAKE_TOKEN}` && up?.headers.version === '2021-07-28')
check('upsert uses the location id from the environment', up?.body.locationId === FAKE_LOCATION)
check('standard fields: first name, last name, E.164 phone', up?.body.firstName === FIRST && up?.body.lastName === LAST && up?.body.phone === `+1${PHONE_DIGITS}`)
check('upsert sends no tags (tags are added separately) and no dnd settings', up && !('tags' in up.body) && !('dnd' in up.body) && !('dndSettings' in up.body))
check('custom field preferred_contact_method = Text', cf(up.body, 'preferred_contact_method') === 'Text')
check('no box checked: no consent field, version or timestamp is sent (cannot overwrite an earlier true)', ['sms_nonmarketing_consent', 'sms_marketing_consent', 'sms_consent_version', 'sms_consent_timestamp'].every((k) => cf(up.body, k) === undefined))
const nb0 = received.find((x) => x.url.endsWith('/notes'))?.body.body ?? ''
check('no box checked: the note still records both choices as false, the version and the UTC time', nb0.includes('SMS non-marketing consent: false') && nb0.includes('SMS marketing consent: false') && nb0.includes('SMS consent version: sms-consent-v1') && /Received \(UTC\): \d{4}-\d\d-\d\dT/.test(nb0))
check('market = St. Louis and source_page = /contact/', cf(up.body, 'market') === 'St. Louis' && cf(up.body, 'source_page') === '/contact/')
const tags = received.find((x) => x.url === '/contacts/contact_abc123/tags')
check('tags: website-lead, form-contact, market-st-louis; no marketing tag', JSON.stringify(tags?.body.tags) === JSON.stringify(['website-lead', 'form-contact', 'market-st-louis']))
const note = received.find((x) => x.url === '/contacts/contact_abc123/notes')
check('note holds the additional information as plain text (no angle brackets)', typeof note?.body.body === 'string' && note.body.body.includes('Plain text note b bold /b') && !note.body.body.includes('<'))

reset()
r = await post(lead({ smsNonMarketingConsent: true, smsMarketingConsent: true }))
const u2 = upsert()
check('both consents true are stored as "true" with a UTC timestamp', cf(u2.body, 'sms_nonmarketing_consent') === 'true' && cf(u2.body, 'sms_marketing_consent') === 'true' && /^\d{4}-\d\d-\d\dT.*Z$/.test(cf(u2.body, 'sms_consent_timestamp') ?? ''))
reset()
await post(lead({ smsMarketingConsent: true, contactMethod: 'call' }))
const u3 = upsert()
check('Call preference does not imply consent; only the checked box is true', cf(u3.body, 'sms_nonmarketing_consent') === 'false' && cf(u3.body, 'sms_marketing_consent') === 'true')
reset()
await post(lead({ marketId: '', sourcePath: '/about/', formType: 'general_service' }))
const tg = received.find((x) => x.url.endsWith('/tags'))
check('no market: market field "none" and no market tag; survey tag', cf(upsert().body, 'market') === 'none' && !tg.body.tags.some((t) => t.startsWith('market-')) && tg.body.tags.includes('form-survey'))

// Browser honeypot path (source check; the rendered behavior was checked in a browser against a stub endpoint):
// a filled sp_ref shows the failed-send notice and returns before any request is made.
for (const file of ['components/sections/ContactForm.tsx', 'components/sections/SurveyLeadForm.tsx']) {
  const src = fs.readFileSync(path.join(repo, file), 'utf8').replace(/\r\n/g, '\n')
  const at = src.indexOf("if (value('sp_ref') !== '') {")
  const block = at === -1 ? '' : src.slice(at, at + 140)
  check(file.split('/').pop() + ': filled honeypot sets the send-failed notice and returns before submitLead', at !== -1 && at < src.indexOf('await submitLead(') && /setNotice\(sendFailedNotice\(\)\)\s+return/.test(block), block)
  check(file.split('/').pop() + ': timer starts at the first interaction, not on mount', src.includes('stampFirstInteraction(openedAt)') && !/openedAt\.current = Date\.now\(\)/.test(src))
}

reset()
r = await post(lead({ spRef: 'filled by a bot' }))
check('direct post with the honeypot filled: fake success {"ok":true} (200), nothing sent to GHL', r.status === 200 && r.text === '{"ok":true}' && received.length === 0)
reset()
r = await post(lead({ spRef: 'filled by a bot', formOpenedAt: Date.now() - 100 }))
check('honeypot filled and also fast: still the fake success, never the retry reply', r.status === 200 && r.text === '{"ok":true}' && received.length === 0)
reset()
const quickOpenedAt = Date.now() - 500
r = await post(lead({ formOpenedAt: quickOpenedAt }))
check('submit faster than 2 seconds: distinct retry reply (429 {"ok":false,"retry":true}), nothing sent', r.status === 429 && r.text === '{"ok":false,"retry":true}' && received.length === 0, r.text)
await new Promise((res) => setTimeout(res, 1700))
r = await post(lead({ formOpenedAt: quickOpenedAt }), { ip: '10.8.8.8' })
check('the same submit after the 2 second minimum has passed succeeds and reaches GHL', r.status === 200 && r.text === '{"ok":true}' && received.some((x) => x.url === '/contacts/upsert'), r.text)
reset()
r = await post(lead({ formOpenedAt: Date.now() - 1900 }))
check('1.9 seconds is still too fast; the minimum is 2 seconds', r.status === 429 && received.length === 0)
reset()
r = await post(lead({ formOpenedAt: Date.now() - 2300 }))
check('2.3 seconds is accepted', r.status === 200 && received.some((x) => x.url === '/contacts/upsert'))

// Cloudflare Turnstile.
reset()
r = await post(lead())
check('valid Turnstile token: lead accepted and sent to GHL', r.status === 200 && received.some((x) => x.url === '/contacts/upsert') && tsCalls.length === 1)
check('Turnstile check sends the server secret and the visitor token (and the visitor ip)', tsCalls[0]?.secret === FAKE_TS_SECRET && tsCalls[0]?.response === GOOD_TS_TOKEN && typeof tsCalls[0]?.remoteip === 'string')
check('the Turnstile token is not forwarded to GHL', !JSON.stringify(received).includes(GOOD_TS_TOKEN))
reset()
r = await post(lead({ turnstileToken: 'ts-token-BAD' }))
check('wrong Turnstile token: refused (403), nothing sent to GHL', r.status === 403 && r.text === '{"ok":false}' && received.length === 0 && tsCalls.length === 1, r.text)
reset()
r = await post(lead({ turnstileToken: '' }))
check('missing Turnstile token: refused (403) without calling Cloudflare, nothing sent to GHL', r.status === 403 && received.length === 0 && tsCalls.length === 0)
reset()
const noTs = lead()
delete noTs.turnstileToken
r = await post(noTs)
check('payload without the token field: refused (403), nothing sent to GHL', r.status === 403 && received.length === 0)
reset()
mode = 'ts-error'
r = await post(lead())
check('Turnstile service error: generic failure (502), nothing sent to GHL', r.status === 502 && r.text === '{"ok":false}' && received.length === 0)
reset()
r = await post(lead({ spRef: 'filled by a bot', turnstileToken: '' }))
check('direct honeypot post is dropped before the Turnstile check (fake success, no calls)', r.status === 200 && r.text === '{"ok":true}' && tsCalls.length === 0 && received.length === 0)
reset()
r = await post(lead({ formOpenedAt: Date.now() - 300 }))
check('too-fast submit gets the retry reply without using up the Turnstile token', r.status === 429 && r.text === '{"ok":false,"retry":true}' && tsCalls.length === 0)

reset()
r = await post(lead(), { origin: 'http://evil.example' })
check('other origin rejected (403)', r.status === 403 && received.length === 0)
r = await post(lead(), { origin: '' })
check('missing Origin rejected (403)', r.status === 403)
r = await post(null, { ctype: 'text/plain', raw: 'x' })
check('non-JSON content type rejected (415)', r.status === 415)
r = await post(lead({ extra: 'x' }))
check('unknown field rejected (400)', r.status === 400)
r = await post(lead({ phone: '123' }))
check('bad phone rejected (400)', r.status === 400)
r = await post(lead({ phone: '' }))
check('missing phone rejected (400)', r.status === 400)
r = await post(lead({ firstName: '' }))
check('missing first name rejected (400)', r.status === 400)
r = await post(lead({ message: 'x'.repeat(2001) }))
check('over-long message rejected (400)', r.status === 400)
r = await post(lead({ contactMethod: 'carrier-pigeon' }))
check('invalid preferred contact rejected (400)', r.status === 400)
r = await post(lead({ smsConsentVersion: 'sms-consent-v9' }))
check('unknown consent version rejected (400)', r.status === 400)
r = await post(lead({ smsMarketingConsent: 'yes' }))
check('non-boolean consent rejected (400)', r.status === 400)
r = await post(null, { raw: 'x'.repeat(20000) })
check('oversize body rejected (413)', r.status === 413)
r = await post(null, { raw: '{not json' })
check('malformed JSON rejected (400)', r.status === 400)
check('no rejected request reached GHL', received.length === 0)

reset()
mode = 'fields-missing'
r = await post(lead({ smsNonMarketingConsent: true }))
const calls = received.filter((x) => x.url === '/contacts/upsert')
check('missing custom fields in GHL: retried without them, still success', r.status === 200 && calls.length === 2 && !('customFields' in calls[1].body))
const nb = received.find((x) => x.url.endsWith('/notes'))?.body.body ?? ''
check('consent record is in the note (also when custom fields fail)', nb.includes('SMS non-marketing consent: true') && nb.includes('SMS consent version: sms-consent-v1'))

reset()
mode = 'server-error'
r = await post(lead())
check('GHL failure returns generic {"ok":false} (502), no GHL text', r.status === 502 && r.text === '{"ok":false}' && !r.text.includes('SECRET-TEXT'), r.text)

reset()
const ip = '10.9.9.9'
const statuses = []
for (let i = 0; i < 7; i++) statuses.push((await post(lead({ formOpenedAt: Date.now() - 60000 }), { ip })).status)
check('rate limit: first 5 per IP accepted, then 429', statuses.slice(0, 5).every((s) => s === 200) && statuses.slice(5).every((s) => s === 429), statuses.join(','))

const g = await fetch(`${base}/api/lead`)
check('GET refused (405)', g.status === 405)

await new Promise((r) => setTimeout(r, 500))
const all = logs
check('logs hold no token, location id, Turnstile secret or token, phone number or name', ![FAKE_TOKEN, FAKE_LOCATION, FAKE_TS_SECRET, GOOD_TS_TOKEN, PHONE_DIGITS, '555-0199', FIRST, LAST, 'Plain text note', 'Bearer'].some((s) => all.includes(s)))
check('logs hold request ids and status codes', /"requestId"/.test(all) && /"status":200/.test(all))

console.log(`\n${pass} passed, ${fail} failed`)
wr.kill()
spawn('taskkill', ['/pid', String(wr.pid), '/T', '/F'], { shell: true })
mock.close()
await new Promise((r) => setTimeout(r, 2000))
try {
  fs.rmSync(tmp, { recursive: true, force: true })
} catch {
  // wrangler may still hold the folder; it is in the OS temp directory
}
process.exit(fail === 0 ? 0 : 1)
