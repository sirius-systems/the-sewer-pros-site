/**
 * Lead routing guard (DEC-147, DEC-159).
 *
 * Per-market notification email is a GoHighLevel workflow on each `market-*` tag
 * (docs/lead-routing.md). This check keeps the code, the market data and that
 * document in step, and makes sure the legacy `LeadFormSection` stub (which
 * sends nothing) is never rendered.
 *
 *   node scripts/verify-lead-routing.mjs
 *
 * Needs a build for the last check (it reads `out/`); the others read source.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

let failures = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || detail === '' ? '' : `: ${detail}`}`)
  if (!ok) failures += 1
}

const server = fs.readFileSync(path.resolve('lib/forms/lead-server.ts'), 'utf8')
const markets = fs.readFileSync(path.resolve('data/markets/markets.ts'), 'utf8')
const docs = fs.readFileSync(path.resolve('docs/lead-routing.md'), 'utf8')

// Market ids and published emails, from marketOperatingDetail.
const detailStart = markets.indexOf('export const marketOperatingDetail')
const detail = markets.slice(detailStart)
const emails = {}
for (const m of detail.matchAll(/'([a-z]+(?:-[a-z]+)*-[a-z]{2})':\s*\{[\s\S]*?email:\s*'([^']+)'/g)) emails[m[1]] = m[2]
const ids = Object.keys(emails)
check('market ids and emails were read from marketOperatingDetail', ids.length >= 3, ids.join(', '))

// Market keys the function turns into `market-*` tags.
const marketBlock = (server.match(/const MARKETS:[\s\S]*?\n\}/) || [''])[0]
const keyById = {}
for (const m of marketBlock.matchAll(/'([a-z-]+-[a-z]{2})':\s*\{\s*key:\s*'([a-z-]+)'/g)) keyById[m[1]] = m[2]
check('the function emits a market tag from `market-${key}`', /`market-\$\{lead\.marketKey\}`/.test(server))

// The tag names in the doc must be the ones the function emits.
const formTypesBlock = (server.match(/const FORM_TYPES:[\s\S]*?\n\}/) || [''])[0]
const formTags = [...formTypesBlock.matchAll(/:\s*'([a-z]+)',?/g)].map((m) => `form-${m[1]}`)
const staticTags = ['website-lead', ...formTags]
check('docs/lead-routing.md lists website-lead and every form-* tag', staticTags.every((t) => docs.includes(`\`${t}\``)), staticTags.join(', '))

const bad = []
for (const id of ids) {
  const key = keyById[id]
  if (key === undefined) {
    bad.push(`${id}: no entry in lead-server.ts MARKETS, so no market tag`)
    continue
  }
  const tag = `market-${key}`
  const rows = docs.split('\n').filter((l) => l.startsWith('|') && l.includes(`\`${tag}\``))
  if (rows.length === 0) bad.push(`${id}: no docs row for ${tag}`)
  else if (!rows.some((l) => l.includes(emails[id]))) bad.push(`${id}: no docs row for ${tag} carries ${emails[id]}`)
}
check('every market has a market-* tag in lead-server.ts and a docs row whose recipient is its published email', bad.length === 0, bad.join(' | '))

/* ---------------------------------------------------------------------------
   Careers (DEC-160). All careers submissions go to info@thesewerpros.com; a careers
   tag must never be able to fire a market-* lead workflow.
   ------------------------------------------------------------------------- */
const CAREERS_RECIPIENT = 'info@thesewerpros.com'
const careersServer = fs.readFileSync(path.resolve('lib/forms/careers-server.ts'), 'utf8')
const tagsBlock = (careersServer.match(/export const CAREERS_TAGS = \{[\s\S]*?\n\} as const/) || [''])[0]
const careersAll = [...((tagsBlock.match(/all:\s*\[([^\]]*)\]/) || ['', ''])[1].matchAll(/'([a-z-]+)'/g))].map((m) => m[1])
const careersByMarket = {}
for (const m of ((tagsBlock.match(/byMarket:\s*\{([\s\S]*?)\},/) || ['', ''])[1]).matchAll(/'([a-z-]+)':\s*'([a-z-]+)'/g)) careersByMarket[m[1]] = m[2]
const careersFailed = (tagsBlock.match(/resumeFailed:\s*'([a-z-]+)'/) || [])[1]
const careersTags = [...careersAll, ...Object.values(careersByMarket), ...(careersFailed ? [careersFailed] : [])]
check('the careers function declares website-careers, form-careers and a careers tag per market', careersAll.includes('website-careers') && careersAll.includes('form-careers'), careersAll.join(', '))

const missingCareers = []
for (const id of ids) {
  const key = keyById[id]
  const tag = key === undefined ? undefined : careersByMarket[key]
  if (tag !== `careers-${key}`) missingCareers.push(`${id}: no careers-${key} tag in careers-server.ts`)
}
check('every market has a careers-* tag in careers-server.ts', missingCareers.length === 0, missingCareers.join(' | '))

const recipientProblems = []
for (const tag of [...careersAll, ...Object.values(careersByMarket)]) {
  const rows = docs.split('\n').filter((l) => l.startsWith('|') && l.includes(`\`${tag}\``))
  if (rows.length === 0) recipientProblems.push(`no docs row for ${tag}`)
  else if (!rows.some((l) => l.includes(CAREERS_RECIPIENT))) recipientProblems.push(`${tag} row does not carry ${CAREERS_RECIPIENT}`)
  else if (rows.some((l) => /@thesewerpros\.com/.test(l) && !l.includes(CAREERS_RECIPIENT))) recipientProblems.push(`${tag} row names another recipient`)
}
check(`every careers tag has a docs row whose only recipient is ${CAREERS_RECIPIENT}`, recipientProblems.length === 0, recipientProblems.join(' | '))

const leadTagNames = ['website-lead', 'form-contact', 'form-survey']
const collisions = careersTags.filter((t) => t.includes('market-') || leadTagNames.includes(t))
check('no careers tag contains market- or equals a lead tag, so no market-* workflow can match it', collisions.length === 0, collisions.join(', '))
const careersCode = careersServer.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
check('the careers function never uses leadTags or the market-* tag template', !/leadTags|market-\$\{/.test(careersCode))

/* ---------------------------------------------------------------------------
   Notification-email fields and tag re-fire (GHL "Tag added" workflows).
   ------------------------------------------------------------------------- */
const keysBlock = (server.match(/export const GHL_CUSTOM_FIELD_KEYS = \[([\s\S]*?)\] as const/) || ['', ''])[1]
const leadKeys = [...keysBlock.matchAll(/'([a-z_]+)'/g)].map((m) => m[1])
const needKeys = ['market', 'preferred_contact_method', 'source_page', 'service_requested', 'inquiry_message', 'service_location']
check('lead-server.ts writes the six email merge fields', needKeys.every((k) => leadKeys.includes(k)), needKeys.filter((k) => !leadKeys.includes(k)).join(', '))
check('docs/ghl-lead-setup.md lists the three new field keys', ['service_requested', 'inquiry_message', 'service_location'].every((k) => fs.readFileSync(path.resolve('docs/ghl-lead-setup.md'), 'utf8').includes(`\`${k}\``)))

const issueBlock = (server.match(/export const ISSUE_LABELS[\s\S]*?\n\}/) || [''])[0]
const labelled = new Set([...issueBlock.matchAll(/^\s*'?([a-z-]+)'?:\s*'/gm)].map((m) => m[1]))
const contactForm = fs.readFileSync(path.resolve('components/sections/ContactForm.tsx'), 'utf8')
const surveyForm = fs.readFileSync(path.resolve('components/sections/SurveyLeadForm.tsx'), 'utf8')
const issueValues = [
  ...[...(contactForm.match(/const ISSUES: [\s\S]*?\n\]/) || [''])[0].matchAll(/value:\s*'([a-z-]+)'/g)].map((m) => m[1]),
  ...[...(surveyForm.match(/const SERVICE_PILLS[\s\S]*?\n\]/) || [''])[0].matchAll(/value:\s*'([a-z-]+)'/g)].map((m) => m[1]),
  'not-sure',
]
const unlabelled = issueValues.filter((v) => !labelled.has(v))
check('every service or issue value a form can send has a display label in ISSUE_LABELS', issueValues.length > 10 && unlabelled.length === 0, unlabelled.join(', '))

const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
const leadCode = strip(server)
const inOrder = (code, anchors) => {
  let at = -1
  for (const a of anchors) {
    const i = code.indexOf(a, at + 1)
    if (i === -1) return false
    at = i
  }
  return true
}
check(
  'lead function order: upsert, note, remove market tag (DELETE), add tags',
  inOrder(leadCode, ["'/contacts/upsert'", '/notes`', "'DELETE')", 'leadTags(lead)']),
)
check(
  'careers function order: upsert, note, remove website-careers (DELETE), add tags',
  inOrder(careersCode, ["'/contacts/upsert'", '/notes`', "'DELETE')", 'careersTags(application)']),
)
check('careers function writes the market and inquiry_message fields', /key: 'market'/.test(careersCode) && /key: 'inquiry_message'/.test(careersCode))
check('the lead form payload sends no new field (location comes from the existing zip and serviceLocation)', !/\bcity\b|\blocation:\s/.test((fs.readFileSync(path.resolve('lib/forms/submit-lead.ts'), 'utf8').match(/export interface LeadPayload[\s\S]*?\n\}/) || [''])[0].replace(/\/\*[\s\S]*?\*\//g, '')))

/* ---------------------------------------------------------------------------
   SMS consent copy (DEC-146, DEC-161): one source, names The Sewer Pros, no old sender name anywhere.
   ------------------------------------------------------------------------- */
const consentSrc = fs.readFileSync(path.resolve('lib/forms/sms-consent.ts'), 'utf8')
const oldSender = 'S' + 'HH'
const consentVersion = (consentSrc.match(/export const SMS_CONSENT_V2[\s\S]*?version:\s*'([^']+)'/) || [])[1]
check('the current SMS consent version is sms-consent-v2 and SMS_CONSENT points at it', consentVersion === 'sms-consent-v2' && /export const SMS_CONSENT = SMS_CONSENT_V2/.test(consentSrc), String(consentVersion))
check('both SMS consent sentences name The Sewer Pros as the sender', /non-marketing text messages from The Sewer Pros about appointments/.test(consentSrc) && /marketing text messages from The Sewer Pros about special offers/.test(consentSrc))
check('the SMS consent sentence is defined in one file only', (() => {
  const files = execFileSync('git', ['grep', '-I', '-l', '-F', 'I consent to receive', '--', 'components', 'lib', 'functions', 'app', 'content', 'data'], { encoding: 'utf8' }).split('\n').filter(Boolean)
  return files.length === 1 && files[0] === 'lib/forms/sms-consent.ts'
})())
check('the old sender name appears nowhere in the tracked repo', (() => {
  try {
    const hits = execFileSync('git', ['grep', '-I', '-n', '-w', oldSender, '--', '.', ':!package-lock.json'], { encoding: 'utf8' })
    return hits.trim() === ''
  } catch (e) {
    return e.status === 1
  }
})())

const careersData = fs.readFileSync(path.resolve('data/business/careers.ts'), 'utf8')
const openingTitles = [...careersData.matchAll(/^\s*title:\s*'([^']+)'/gm)].map((m) => m[1])

// The legacy stub sends nothing, so it must not appear in any built page.
const out = path.resolve('out')
if (fs.existsSync(out)) {
  const hits = []
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) walk(p)
      else if (e.name === 'index.html' && fs.readFileSync(p, 'utf8').includes('name="lastName"')) hits.push(path.relative(out, path.dirname(p)))
    }
  }
  walk(out)
  check('no built page renders the legacy LeadFormSection stub (it sends nothing)', hits.length === 0, hits.slice(0, 5).join(', '))

  // The built /careers/ page: copy rules (DEC-160). Only <main> is read, so the header and footer are not.
  const careersFile = path.join(out, 'careers', 'index.html')
  if (!fs.existsSync(careersFile)) {
    check('the built /careers/ page exists', false, 'out/careers/index.html not found')
  } else {
    const html = fs.readFileSync(careersFile, 'utf8')
    const main = html.slice(html.indexOf('<main'), html.indexOf('</main>'))
    const text = main.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
    const banned = [
      ['office', /\boffices?\b/i],
      ['branch', /\bbranch(es)?\b/i],
      ['local team', /\blocal team\b/i],
      ['our ... location', /\bour [a-z. ]{0,20} location\b/i],
      ['free', /\bfree\b/i],
      ['superlative', /\b(best|top-rated|leading|premier|number one|finest|unmatched)\b|#1/i],
      ['pay or benefits', /\$\d|\b(per hour|hourly|salary|wages?|pay|benefits?|perks?|bonus(es)?|401k|insurance)\b/i],
      ['schedule, headcount or start date', /\b(schedules?|shifts?|full-time|start date|openings? available|positions? available|we are hiring)\b/i],
      ['urgency', /\b(now hiring|urgent(ly)?|immediate(ly)?|apply today|limited|hurry)\b/i],
      ['retention promise', /\b(retain|retention|delete[sd]? after|kept for|stored for)\b/i],
    ]
    // "Full time" is an option label in the form; the pattern above uses the hyphenated word only.
    const hitsBanned = banned.filter(([, re]) => re.test(text)).map(([name]) => name)
    check('/careers/ copy has no office, branch, free, superlative, pay, schedule, urgency or retention wording', hitsBanned.length === 0, hitsBanned.join(', '))
    check('/careers/ shows no email address', !/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(main) && !/mailto:/.test(main))
    check('/careers/ has no JobPosting markup', !/JobPosting/.test(html))
    // Any role listed must come from data/business/careers.ts (an invented role fails the build).
    const listed = [...main.matchAll(/<ul class="mt-3 list-disc[^>]*>([\s\S]*?)<\/ul>/g)].flatMap((m) =>
      [...m[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((x) => x[1].replace(/<[^>]+>/g, '').trim()),
    )
    const unknown = listed.filter((t) => !openingTitles.some((title) => t.startsWith(title)))
    check('every role on /careers/ comes from careersOpenings', unknown.length === 0, unknown.join(' | '))
    const thanks = path.join(out, 'careers', 'thank-you', 'index.html')
    check('/careers/thank-you/ is noindex', fs.existsSync(thanks) && /noindex/.test(fs.readFileSync(thanks, 'utf8')))
  }
} else {
  console.log('NOTE  out/ not found; run npm run build to check the built pages')
}

if (failures > 0) {
  console.log(`\n${failures} check(s) failed.`)
  process.exit(1)
}
console.log('\nAll checks passed.')
