#!/usr/bin/env node
/**
 * Offline test of the lead function's GHL calls (lib/forms/lead-server.ts) against a MOCK
 * GoHighLevel and a MOCK Turnstile. No network, no real credentials, no real contact.
 * Checks the notification-email custom fields, the order (fields and note before the tag) and
 * the remove-then-add of the market tag. Usage: node scripts/test-lead-fields.mjs
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const repo = process.cwd()
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lead-fn-'))
fs.mkdirSync(path.join(tmp, 'lib/forms'), { recursive: true })
for (const [name, fix] of [
  ['sms-consent.ts', (s) => s],
  ['lead-server.ts', (s) => s.replace("from './sms-consent'", "from './sms-consent.mts'")],
]) {
  fs.writeFileSync(path.join(tmp, 'lib/forms', name.replace('.ts', '.mts')), fix(fs.readFileSync(path.join(repo, 'lib/forms', name), 'utf8')))
}
const { handleLead, createRateLimiter } = await import(pathToFileURL(path.join(tmp, 'lib/forms/lead-server.mts')).href)

const BASE = 'https://www.example.test'
let calls = []
let mode = 'ok'
const mockFetch = async (url, init = {}) => {
  const u = String(url)
  if (u.includes('/turnstile/')) return new Response('{"success":true}', { status: 200 })
  const p = u.replace('http://mock.ghl', '')
  const body = init.body === undefined ? undefined : JSON.parse(init.body)
  calls.push({ method: init.method, path: p, body })
  if (p === '/contacts/upsert') return new Response('{"new":false,"contact":{"id":"c1"}}', { status: 200 })
  if (mode === 'remove-fail' && init.method === 'DELETE') return new Response('{}', { status: 500 })
  return new Response('{}', { status: 201 })
}
const env = {
  GHL_PRIVATE_INTEGRATION_TOKEN: 'pit-FAKE',
  GHL_LOCATION_ID: 'LOCFAKE',
  TURNSTILE_SECRET_KEY: 'fake',
  TURNSTILE_VERIFY_URL: 'http://mock.turnstile/turnstile/v0/siteverify',
  GHL_API_BASE: 'http://mock.ghl',
}
const payload = (over = {}) => ({
  marketId: 'st-louis-mo',
  issue: 'svc-sewer-camera-inspection',
  followUp: '',
  firstName: 'Testfirst',
  lastName: '',
  phone: '(314) 555-0199',
  email: '',
  zip: '63101',
  contactMethod: 'call',
  appointmentWindow: '',
  message: 'Basement drain backs up',
  sourcePath: '/services/sewer-camera-inspection/',
  smsNonMarketingConsent: false,
  smsMarketingConsent: false,
  smsConsentVersion: 'sms-consent-v1',
  formType: 'contact_request',
  spRef: '',
  turnstileToken: 'ok',
  formOpenedAt: Date.now() - 60000,
  ...over,
})
let n = 0
const send = async (over) => {
  calls = []
  const req = new Request(`${BASE}/api/lead`, {
    method: 'POST',
    headers: { Origin: BASE, 'Content-Type': 'application/json', 'CF-Connecting-IP': `10.0.1.${++n}` },
    body: JSON.stringify(payload(over)),
  })
  const res = await handleLead(req, env, { fetchImpl: mockFetch, log: () => {}, limiter: createRateLimiter() })
  return { status: res.status, text: await res.text() }
}
let fail = 0
const check = (name, ok, extra = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  ' + extra}`)
  if (!ok) fail += 1
}
const fieldsOf = () => Object.fromEntries(calls.find((c) => c.path === '/contacts/upsert').body.customFields.map((f) => [f.key, f.fieldValue]))
const seq = () => calls.map((c) => `${c.method} ${c.path.replace('c1', 'ID')}`)

let r = await send()
check('valid lead: 200 {"ok":true}', r.status === 200 && r.text === '{"ok":true}', r.text)
let f = fieldsOf()
check('service_requested is the label, not the id', f.service_requested === 'Sewer Camera Inspection', f.service_requested)
check('inquiry_message, service_location (ZIP), market label, preferred contact and source page are written', f.inquiry_message === 'Basement drain backs up' && f.service_location === '63101' && f.market === 'St. Louis' && f.preferred_contact_method === 'Call' && f.source_page === '/services/sewer-camera-inspection/', JSON.stringify(f))
check('no SMS consent field is written when no box was checked', !('sms_marketing_consent' in f) && !('sms_consent_timestamp' in f))
const s = seq()
check(
  'order: upsert, note, remove market tag, add tags',
  JSON.stringify(s) === JSON.stringify(['POST /contacts/upsert', 'POST /contacts/ID/notes', 'DELETE /contacts/ID/tags', 'POST /contacts/ID/tags']),
  s.join(' > '),
)
check('remove call carries only the market tag', JSON.stringify(calls[2].body) === '{"tags":["market-st-louis"]}', JSON.stringify(calls[2].body))
check('add call carries website-lead, form-contact and the market tag', JSON.stringify(calls[3].body) === '{"tags":["website-lead","form-contact","market-st-louis"]}', JSON.stringify(calls[3].body))

r = await send({ message: '', zip: '', issue: 'not-sure', formType: 'general_service', serviceLocation: 'Escondido', marketId: 'san-diego-ca' })
f = fieldsOf()
check('empty message is still written as an empty value; survey location label is used; not-sure maps to a label', f.inquiry_message === '' && f.service_location === 'Escondido' && f.service_requested === 'Not sure', JSON.stringify(f))

r = await send({ marketId: '', sourcePath: '/contact/' })
check('no known market: no remove call, no market tag', !seq().some((x) => x.startsWith('DELETE')) && !JSON.stringify(calls).includes('market-'), seq().join(' > '))

mode = 'remove-fail'
r = await send()
check('a failed remove call does not fail the lead and the tags are still added', r.text === '{"ok":true}' && seq().at(-1) === 'POST /contacts/ID/tags', r.text + ' ' + seq().join(' > '))

console.log(fail === 0 ? '\nAll checks passed.' : `\n${fail} check(s) failed.`)
fs.rmSync(tmp, { recursive: true, force: true })
process.exit(fail === 0 ? 0 : 1)
