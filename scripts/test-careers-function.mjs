#!/usr/bin/env node
/**
 * Test of the careers function logic (lib/forms/careers-server.ts) against a MOCK
 * GoHighLevel and a MOCK Turnstile. No network, no real credentials, no real contact.
 *
 * It copies the two server files to a temporary folder with explicit `.ts` import
 * extensions (Node strips the types natively), builds real multipart requests, calls
 * `handleCareers` with a fake `fetch`, and checks validation, spam protection, resume
 * rules, the GHL calls (tags, note, resume upload), the resume-failed path, and that
 * no secret, name, phone, email, file name or file content appears in any log line or reply.
 *
 * Usage: node scripts/test-careers-function.mjs
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const repo = process.cwd()
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'careers-fn-'))
fs.mkdirSync(path.join(tmp, 'lib/forms'), { recursive: true })
const copy = (name, fix) => {
  let src = fs.readFileSync(path.join(repo, 'lib/forms', name), 'utf8')
  src = fix(src)
  fs.writeFileSync(path.join(tmp, 'lib/forms', name.replace('.ts', '.mts')), src)
}
copy('sms-consent.ts', (s) => s)
copy('lead-server.ts', (s) => s.replace("from './sms-consent'", "from './sms-consent.mts'"))
copy('careers-server.ts', (s) => s.replace("from './lead-server'", "from './lead-server.mts'"))
const { handleCareers, createRateLimiter, CAREERS_TAGS, checkResume } = {
  ...(await import(pathToFileURL(path.join(tmp, 'lib/forms/careers-server.mts')).href)),
  ...(await import(pathToFileURL(path.join(tmp, 'lib/forms/lead-server.mts')).href)),
}

const FAKE_TOKEN = 'pit-FAKE-TEST-TOKEN-0000'
const FAKE_LOCATION = 'LOCFAKETEST0000'
const FAKE_FIELD = 'FIELDFAKE0000'
const FAKE_TS_SECRET = '0xFAKE-TURNSTILE-SECRET-0000'
const GOOD_TS = 'ts-token-VALID-1111'
const NAME = 'Testfirst Testlast'
const EMAIL = 'applicant.test@example.com'
const PHONE_DIGITS = '3145550199'
const ORIGINAL_FILE_NAME = 'My Secret Resume Name.pdf'
const BASE = 'https://www.example.test'

/* ---- file builders ---- */
const pdf = (size = 2000) => {
  const b = new Uint8Array(size)
  b.set(new TextEncoder().encode('%PDF-1.7\nTEST-FILE-CONTENT-MARKER'))
  return b
}
// A minimal stored (no compression) zip with the named entries.
function zip(names) {
  const enc = new TextEncoder()
  const locals = []
  const centrals = []
  let offset = 0
  for (const name of names) {
    const n = enc.encode(name)
    const local = new Uint8Array(30 + n.length)
    const lv = new DataView(local.buffer)
    lv.setUint32(0, 0x04034b50, true)
    lv.setUint16(26, n.length, true)
    local.set(n, 30)
    const central = new Uint8Array(46 + n.length)
    const cv = new DataView(central.buffer)
    cv.setUint32(0, 0x02014b50, true)
    cv.setUint16(28, n.length, true)
    cv.setUint32(42, offset, true)
    central.set(n, 46)
    locals.push(local)
    centrals.push(central)
    offset += local.length
  }
  const cdSize = centrals.reduce((a, c) => a + c.length, 0)
  const end = new Uint8Array(22)
  const ev = new DataView(end.buffer)
  ev.setUint32(0, 0x06054b50, true)
  ev.setUint16(8, names.length, true)
  ev.setUint16(10, names.length, true)
  ev.setUint32(12, cdSize, true)
  ev.setUint32(16, offset, true)
  return new Uint8Array([...locals.flatMap((l) => [...l]), ...centrals.flatMap((c) => [...c]), ...end])
}
const docx = () => zip(['[Content_Types].xml', 'word/document.xml', '_rels/.rels'])

/* ---- mock services ---- */
let calls = []
let logs = []
let mode = 'ok'
const mockFetch = async (url, init = {}) => {
  const u = String(url)
  const headers = init.headers ?? {}
  if (u.includes('/turnstile/')) {
    const b = JSON.parse(init.body)
    calls.push({ kind: 'turnstile', body: b })
    return new Response(JSON.stringify({ success: b.secret === FAKE_TS_SECRET && b.response === GOOD_TS }), { status: 200 })
  }
  const path = u.replace('http://mock.ghl', '')
  if (path.startsWith('/forms/upload-custom-files')) {
    const entries = [...init.body.entries()].map(([k, v]) => ({ key: k, name: v.name, size: v.size, type: v.type }))
    calls.push({ kind: 'upload', path, headers, entries })
    return new Response('{}', { status: mode === 'upload-fail' ? 403 : mode === 'upload-throw' ? 500 : 200 })
  }
  const body = init.body === undefined ? undefined : JSON.parse(init.body)
  calls.push({ kind: 'ghl', method: init.method, path, headers, body })
  if (path === '/contacts/upsert') {
    if (mode === 'contact-fail') return new Response('{"message":"RAW GHL ERROR SECRET-TEXT"}', { status: 500 })
    return new Response('{"new":true,"contact":{"id":"contact_abc123"}}', { status: 200 })
  }
  if (path.endsWith('/tags') && mode === 'remove-fail' && init.method === 'DELETE') return new Response('{}', { status: 500 })
  if (path.endsWith('/tags') && init.method === 'POST' && mode === 'tags-fail') return new Response('{}', { status: 500 })
  return new Response('{}', { status: 201 })
}
const env = (over = {}) => ({
  GHL_PRIVATE_INTEGRATION_TOKEN: FAKE_TOKEN,
  GHL_LOCATION_ID: FAKE_LOCATION,
  GHL_CAREERS_RESUME_FIELD_ID: FAKE_FIELD,
  TURNSTILE_SECRET_KEY: FAKE_TS_SECRET,
  TURNSTILE_VERIFY_URL: 'http://mock.turnstile/turnstile/v0/siteverify',
  GHL_API_BASE: 'http://mock.ghl',
  ...over,
})

/* ---- request helper ---- */
let ip = 0
const fields = (over = {}) => ({
  marketId: 'san-diego-ca',
  fullName: NAME,
  phone: '(314) 555-0199',
  email: EMAIL,
  contactMethod: 'email',
  employmentType: 'part-time',
  availability: 'Weekdays <b>after</b> 3',
  skills: 'CDL',
  message: 'Plain note',
  sourcePath: '/careers/',
  spRef: '',
  turnstileToken: GOOD_TS,
  formOpenedAt: String(Date.now() - 60000),
  ...over,
})
async function send({ f = fields(), file, fileName = ORIGINAL_FILE_NAME, extra = [], origin = BASE, ctype, envOver, limiter } = {}) {
  const fd = new FormData()
  for (const [k, v] of Object.entries(f)) if (v !== undefined) fd.append(k, v)
  for (const [k, v] of extra) fd.append(k, v)
  if (file !== undefined) fd.append('resume', new File([file], fileName))
  const probe = new Request(`${BASE}/api/careers`, { method: 'POST', body: fd })
  const buf = new Uint8Array(await probe.arrayBuffer())
  const headers = {
    'Content-Type': ctype ?? probe.headers.get('content-type'),
    'Content-Length': String(buf.length),
    'CF-Connecting-IP': `10.0.0.${++ip}`,
  }
  if (origin) headers.Origin = origin
  const req = new Request(`${BASE}/api/careers`, { method: 'POST', headers, body: buf })
  const res = await handleCareers(req, env(envOver), {
    fetchImpl: mockFetch,
    log: (l) => logs.push(l),
    limiter,
    requestId: () => 'req-test',
  })
  return { status: res.status, text: await res.text() }
}
const reset = () => {
  calls = []
  logs = []
  mode = 'ok'
}
const ghl = (suffix) => calls.filter((c) => c.kind === 'ghl' && c.path.endsWith(suffix))
const tagPosts = () => ghl('/tags').filter((c) => c.method === 'POST')
const uploads = () => calls.filter((c) => c.kind === 'upload')
const nothingSent = () => calls.every((c) => c.kind === 'turnstile') || calls.length === 0

let pass = 0
let fail = 0
const check = (name, ok, extra = '') => {
  if (ok) pass++
  else fail++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  ' + extra}`)
}

/* ---- resume checks ---- */
check('checkResume: PDF with the PDF signature passes', checkResume('a.pdf', pdf()).ok === true)
check('checkResume: DOCX with [Content_Types].xml and word/ passes', checkResume('a.docx', docx()).ok === true)
check('checkResume: DOCX zip without word/ fails', checkResume('a.docx', zip(['[Content_Types].xml', 'other/x'])).ok === false)
check('checkResume: DOCX zip without [Content_Types].xml fails', checkResume('a.docx', zip(['word/document.xml'])).ok === false)
check('checkResume: a PDF named .docx (wrong signature) fails', checkResume('a.docx', pdf()).ok === false)
check('checkResume: a DOCX named .pdf fails', checkResume('a.pdf', docx()).ok === false)
check('checkResume: .doc, .exe and no extension fail', ['a.doc', 'a.exe', 'resume'].every((n) => checkResume(n, pdf()).ok === false))
check('checkResume: empty file and a file over 5 MB fail', checkResume('a.pdf', new Uint8Array(0)).ok === false && checkResume('a.pdf', pdf(5 * 1024 * 1024 + 1)).ok === false)
check('checkResume: exactly 5 MB passes', checkResume('a.pdf', pdf(5 * 1024 * 1024)).ok === true)

/* ---- valid application with a PDF ---- */
reset()
let r = await send({ file: pdf() })
check('valid application with a PDF returns 200 {"ok":true} only', r.status === 200 && r.text === '{"ok":true}', r.text)
const up = ghl('/contacts/upsert')[0]
check('GHL called with Bearer token and Version 2021-07-28', up?.headers.Authorization === `Bearer ${FAKE_TOKEN}` && up?.headers.Version === '2021-07-28')
check('upsert uses the location id, E.164 phone, email, first and last name', up?.body.locationId === FAKE_LOCATION && up?.body.phone === `+1${PHONE_DIGITS}` && up?.body.email === EMAIL && up?.body.firstName === 'Testfirst' && up?.body.lastName === 'Testlast')
check('custom fields: preferred_contact_method, source_page, market (label) and inquiry_message; no SMS consent fields', JSON.stringify(up?.body.customFields.map((f) => f.key)) === '["preferred_contact_method","source_page","market","inquiry_message"]' && up.body.customFields[0].fieldValue === 'Email' && up.body.customFields[1].fieldValue === '/careers/' && up.body.customFields[2].fieldValue === 'San Diego' && up.body.customFields[3].fieldValue === 'Plain note')
const tags = tagPosts()
check('tags: website-careers, form-careers, careers-san-diego, and nothing else', tags.length === 1 && JSON.stringify(tags[0].body.tags) === '["website-careers","form-careers","careers-san-diego"]', JSON.stringify(tags.map((t) => t.body)))
check('no tag starts with or contains market- and no lead tag is added', !JSON.stringify(tags).includes('market-') && !JSON.stringify(tags).includes('website-lead') && !JSON.stringify(tags).includes('form-contact'))
const note = ghl('/notes')[0]?.body.body ?? ''
check('note holds market, contact method, employment type, availability (plain text), skills, message and resume status', note.includes('Market applied for: San Diego') && note.includes('Preferred contact: Email') && note.includes('Type of employment desired: Part time') && note.includes('Availability: Weekdays b after /b 3') && !note.includes('<') && note.includes('Skills or certifications: CDL') && note.includes('Message: Plain note') && note.includes('Resume: attached to this contact'))
const upl = uploads()[0]
check('resume upload: POST to /forms/upload-custom-files with contactId and locationId', upl?.path === `/forms/upload-custom-files?contactId=contact_abc123&locationId=${FAKE_LOCATION}`, upl?.path)
check('resume upload: Bearer token, no JSON content type header (multipart boundary is set by fetch)', upl?.headers.Authorization === `Bearer ${FAKE_TOKEN}` && upl?.headers['Content-Type'] === undefined)
check('resume upload: one part named <field id>_<uuid>, a generated safe file name, never the browser file name', upl?.entries.length === 1 && /^FIELDFAKE0000_[0-9a-f-]{36}$/.test(upl.entries[0].key) && /^resume-[0-9a-f]{8}\.pdf$/.test(upl.entries[0].name) && upl.entries[0].size === 2000 && upl.entries[0].type === 'application/pdf')
const logText = logs.join('\n')
const replyAndLogs = r.text + '\n' + logText
check('no secret, name, phone, email, file name or file content in logs or reply', ![FAKE_TOKEN, FAKE_TS_SECRET, 'Testfirst', 'Testlast', PHONE_DIGITS, EMAIL, 'Secret Resume', 'TEST-FILE-CONTENT-MARKER', 'CDL', 'Plain note'].some((s) => replyAndLogs.includes(s)))
check('the Turnstile secret and the visitor token were sent to Turnstile, and the token is not forwarded to GHL', calls.find((c) => c.kind === 'turnstile')?.body.secret === FAKE_TS_SECRET && !JSON.stringify(calls.filter((c) => c.kind !== 'turnstile')).includes(GOOD_TS))

/* ---- order and re-fire (a returning applicant must fire "Tag added" again) ---- */
{
  const seq = calls.map((c) => (c.kind === 'ghl' ? `${c.method} ${c.path.replace('contact_abc123', 'ID')}` : c.kind))
  const iUpsert = seq.indexOf('POST /contacts/upsert')
  const iNote = seq.indexOf('POST /contacts/ID/notes')
  const iDel = seq.indexOf('DELETE /contacts/ID/tags')
  const iAdd = seq.indexOf('POST /contacts/ID/tags')
  check('order: upsert, resume upload, note, remove website-careers, add tags', iUpsert < seq.indexOf('upload') && seq.indexOf('upload') < iNote && iNote < iDel && iDel < iAdd && iDel > -1, seq.join(' > '))
  const del = ghl('/tags').find((c) => c.method === 'DELETE')
  check('remove call is DELETE /contacts/{id}/tags with only website-careers', JSON.stringify(del?.body) === '{"tags":["website-careers"]}', JSON.stringify(del?.body))
}
reset()
mode = 'remove-fail'
r = await send({ file: pdf() })
check('a failed remove-tag call does not fail the application and the tags are still added', r.text === '{"ok":true}' && tagPosts().length === 1, r.text)

/* ---- DOCX, no resume, each market ---- */
reset()
r = await send({ file: docx(), fileName: 'x.DOCX' })
check('valid DOCX is accepted and uploaded as .docx', r.text === '{"ok":true}' && /\.docx$/.test(uploads()[0]?.entries[0].name ?? ''), r.text)
reset()
r = await send({ f: fields({ marketId: 'las-vegas-nv' }) })
check('no resume: 200 {"ok":true}, no upload call, note says not sent, Las Vegas tag', r.text === '{"ok":true}' && uploads().length === 0 && ghl('/notes')[0].body.body.includes('Resume: not sent') && tagPosts()[0].body.tags.includes('careers-las-vegas'))
reset()
r = await send({ f: fields({ marketId: 'st-louis-mo' }) })
check('St. Louis tag is careers-st-louis', tagPosts()[0].body.tags.includes('careers-st-louis'))
check('exported tag table matches: no entry contains market-', JSON.stringify(CAREERS_TAGS).includes('market-') === false)

/* ---- validation ---- */
const rejected = async (name, opts, status = 400) => {
  reset()
  const res = await send(opts)
  check(name, res.status === status && res.text.startsWith('{"ok":false') && nothingSentToGhl(), `${res.status} ${res.text} ${calls.map((c) => c.kind + (c.path ?? '')).join(',')}`)
}
const nothingSentToGhl = () => calls.every((c) => c.kind === 'turnstile')
await rejected('.exe resume is refused and nothing is sent to GHL', { file: pdf(), fileName: 'a.exe' })
await rejected('.doc resume is refused', { file: docx(), fileName: 'a.doc' })
await rejected('a PDF with the wrong signature is refused', { file: new Uint8Array([1, 2, 3, 4, 5, 6]), fileName: 'a.pdf' })
await rejected('a DOCX without the word/ entry is refused', { file: zip(['[Content_Types].xml']), fileName: 'a.docx' })
await rejected('resume of 5 MB + 1 byte is refused (413)', { file: pdf(5 * 1024 * 1024 + 1) }, 413)
await rejected('request body over the cap is refused before it is read (413)', { file: pdf(5 * 1024 * 1024 + 70 * 1024) }, 413)
await rejected('unknown field is refused', { extra: [['isAdmin', 'true']] })
await rejected('a text value sent as the resume field is refused', { extra: [['resume', 'not a file']] })
await rejected('two resume parts are refused', { file: pdf(), extra: [['resume', new File([pdf()], 'b.pdf')]] })
await rejected('market not one of the three is refused', { f: fields({ marketId: 'other-ny' }) })
await rejected('missing market is refused', { f: fields({ marketId: '' }) })
await rejected('missing email is refused', { f: fields({ email: '' }) })
await rejected('bad phone is refused', { f: fields({ phone: '123' }) })
await rejected('contact method "text" is not offered and is refused', { f: fields({ contactMethod: 'text' }) })
await rejected('unknown employment type is refused', { f: fields({ employmentType: 'contractor' }) })
await rejected('over-long message is refused', { f: fields({ message: 'x'.repeat(2001) }) })
await rejected('source path that is not a path is refused', { f: fields({ sourcePath: 'careers' }) })
await rejected('JSON content type is refused (415)', { ctype: 'application/json' }, 415)
await rejected('wrong Origin is refused (403)', { origin: 'https://evil.example' }, 403)
await rejected('missing Origin is refused (403)', { origin: '' }, 403)

/* ---- spam ---- */
reset()
r = await send({ f: fields({ spRef: 'bot' }), file: pdf() })
check('honeypot filled: fake success, nothing sent to GHL or Turnstile', r.status === 200 && r.text === '{"ok":true}' && calls.length === 0)
reset()
r = await send({ f: fields({ formOpenedAt: String(Date.now() - 500) }) })
check('submit faster than 2 seconds: 429 {"ok":false,"retry":true}, nothing sent', r.status === 429 && r.text === '{"ok":false,"retry":true}' && calls.length === 0, r.text)
reset()
r = await send({ f: fields({ turnstileToken: 'bad' }), file: pdf() })
check('bad Turnstile token: 403, nothing sent to GHL', r.status === 403 && nothingSentToGhl())
reset()
r = await send({ f: fields({ turnstileToken: '' }) })
check('missing Turnstile token: 403', r.status === 403 && nothingSentToGhl())
reset()
r = await send({ envOver: { TURNSTILE_SECRET_KEY: '' } })
check('no Turnstile secret configured: refuses (fails closed, 500)', r.status === 500 && calls.length === 0)
reset()
const limiter = createRateLimiter()
const statuses = []
for (let i = 0; i < 7; i += 1) {
  const fd = new FormData()
  for (const [k, v] of Object.entries(fields())) fd.append(k, v)
  const probe = new Request(`${BASE}/api/careers`, { method: 'POST', body: fd })
  const buf = new Uint8Array(await probe.arrayBuffer())
  const res = await handleCareers(
    new Request(`${BASE}/api/careers`, { method: 'POST', headers: { Origin: BASE, 'Content-Type': probe.headers.get('content-type'), 'Content-Length': String(buf.length), 'CF-Connecting-IP': '10.9.9.9' }, body: buf }),
    env(),
    { fetchImpl: mockFetch, log: () => {}, limiter },
  )
  statuses.push(res.status)
}
check('rate limit: the sixth request from one IP in the window gets 429', statuses.slice(0, 5).every((s) => s === 200) && statuses[5] === 429 && statuses[6] === 429, statuses.join(','))

/* ---- failure paths ---- */
reset()
mode = 'contact-fail'
r = await send({ file: pdf() })
check('contact cannot be created: 502 {"ok":false}, no raw GHL text in the reply or logs, no upload attempted', r.status === 502 && r.text === '{"ok":false}' && uploads().length === 0 && !(r.text + logs.join('')).includes('SECRET-TEXT'), r.text)
reset()
mode = 'tags-fail'
r = await send({ file: pdf() })
check('tags cannot be saved: 502 {"ok":false} (the notification workflow depends on them); the note was already saved', r.status === 502 && r.text === '{"ok":false}' && ghl('/notes').length === 1, r.text)
reset()
mode = 'upload-fail'
r = await send({ file: pdf() })
check('resume attach fails: 200 {"ok":true,"partial":true}', r.status === 200 && r.text === '{"ok":true,"partial":true}', r.text)
check('resume attach fails: tag careers-resume-failed is added and the note says it could not be attached', tagPosts().some((t) => JSON.stringify(t.body.tags) === '["careers-resume-failed"]') && ghl('/notes')[0].body.body.includes('could not be attached'))
reset()
r = await send({ file: pdf(), envOver: { GHL_CAREERS_RESUME_FIELD_ID: '' } })
check('resume field id not configured: partial result, no upload attempted, contact, tags and note kept', r.text === '{"ok":true,"partial":true}' && uploads().length === 0 && ghl('/contacts/upsert').length === 1 && ghl('/notes').length === 1 && tagPosts().some((t) => t.body.tags.includes('careers-resume-failed')), r.text)
reset()
r = await send({ envOver: { GHL_CAREERS_RESUME_FIELD_ID: '' } })
check('resume field id not configured and no resume sent: still a clean success', r.text === '{"ok":true}')
reset()
r = await send({ file: pdf(), envOver: { GHL_PRIVATE_INTEGRATION_TOKEN: '' } })
check('no GHL token: refuses (500) before any GHL call', r.status === 500 && !calls.some((c) => c.kind === 'ghl'))
reset()
r = await (async () => {
  const res = await handleCareers(new Request(`${BASE}/api/careers`, { method: 'GET' }), env(), { fetchImpl: mockFetch, log: () => {} })
  return { status: res.status }
})()
check('GET is refused', r.status !== 200)

console.log(`\n${pass} passed, ${fail} failed.`)
fs.rmSync(tmp, { recursive: true, force: true })
process.exit(fail === 0 ? 0 : 1)
