# GoHighLevel lead capture: setup and data flow

Status as of Oct 12, 2026: the function and the form wiring are built, tested against a mock GoHighLevel (GHL), and tested once against the real GHL account from a local run (results at the end). Nothing is deployed. The owner steps below are still to do.

## Data flow

```text
Lead form in the browser (ContactForm or SurveyLeadForm)
  -> POST /api/lead (same origin only)
  -> Cloudflare Pages Function  functions/api/lead.ts
       logic in lib/forms/lead-server.ts
       origin check, content-type check, per-IP rate limit, size limit
       validation, honeypot and time-to-submit checks
  -> GHL  POST /contacts/upsert        (create or update by phone or email)
  -> GHL  POST /contacts/{id}/tags     (adds tags; never overwrites tags)
  -> GHL  POST /contacts/{id}/notes    (free-text details)
  -> reply {"ok":true} or {"ok":false}  (nothing else)
Browser on success -> /contact/thank-you/ (the only page that fires the form-submit analytics event; no personal data in it)
```

The site stays a static export. `functions/` is deployed by Cloudflare Pages next to `out/`. The token never reaches browser code.

## GHL API facts (checked against HighLevel's developer docs on Oct 12, 2026)

| Item | Value |
|---|---|
| Base URL | `https://services.leadconnectorhq.com` |
| Auth | `Authorization: Bearer <Private Integration token>` |
| Version header | `Version: 2021-07-28`. **Confirmed against the live API** (upsert, tags, notes and the read calls all succeeded). The upsert page of the newer v3 docs lists `v3`; it was not needed. |
| Upsert | `POST /contacts/upsert`, body needs `locationId`; accepts `firstName`, `lastName`, `phone`, `email`, `source`, `customFields`, `tags`, `dnd`, `dndSettings`. Follows the location's "Allow Duplicate Contact" setting, so a repeat submission updates the existing contact. Response has `new`, `contact`, `traceId`. |
| Scope | `contacts.write` |
| Custom field items | `{ key: "<unique_key>", fieldValue: "..." }` with **no `contact.` prefix**. Confirmed against the live API: a key written `contact.<name>` is accepted (HTTP 201) but silently ignored; the bare key, the field id, and id plus key all store the value. GHL also silently ignores a key for a field that does not exist. |
| Tags | The upsert `tags` field overwrites every existing tag, so tags are added with `POST /contacts/{id}/tags` instead. |
| Notes | `POST /contacts/{id}/notes` with `body`. |
| Rate limits | Documented for OAuth Marketplace apps: 100 requests per 10 seconds and 200,000 per day, counted per app per location. The docs do not state limits for Private Integration tokens (sandbox tokens have 25 per 10 seconds and 10,000 per day). Each lead uses 3 calls. Check the `X-RateLimit-*` response headers on live responses. |
| Do Not Disturb | Not set. The docs describe `dnd` and `dndSettings` as a channel block, not a consent record, so consent is stored in custom fields. |

## Fields

Standard GHL contact fields: First Name, Last Name, Phone (E.164, for example +13145550123), Email (optional), Source ("The Sewer Pros website").

Custom fields. Create these in GHL (Settings, Custom Fields) as **Single Line** text fields, using these exact unique keys. (`preferred_contact_method` may be a Radio field if its options are exactly Call, Text and Email; this is how it exists in the account today.)

| Unique key | Value sent |
|---|---|
| `preferred_contact_method` | Call, Text or Email |
| `sms_nonmarketing_consent` | `true` or `false` (true only if the box was checked) |
| `sms_marketing_consent` | `true` or `false` (true only if the box was checked) |
| `sms_consent_version` | for example `sms-consent-v1` |
| `sms_consent_timestamp` | UTC ISO time of receipt, set by the server, only when at least one box was checked |
| `market` | St. Louis, San Diego, Las Vegas, or none |
| `source_page` | the page path, for example `/contact/` |

GHL does not refuse a custom field that is missing or misnamed: it returns success and stores nothing. Because the field alone is therefore not proof, **every note repeats the consent record** (both values, version, UTC time). If GHL ever does reject the custom fields with a 4xx, the function retries the upsert without them. Create the fields before launch so the data lands in the fields.

Tags added to every lead: `website-lead`, the form type (`form-contact` or `form-survey`) and the market (`market-st-louis`, `market-san-diego`, `market-las-vegas`; none when the lead has no market). No marketing tag is ever added.

Note (plain text): additional information, service requested, follow-up answer, service location, property type, ZIP, appointment window, preferred contact, source page and market.

Two form facts to know:
- Neither form has a separate Last Name field (the contact form asks First name; the survey form asks Full name, which is split on the first space). The function requires First Name and Phone and accepts Last Name when present. To make Last Name required, add a field to the contact form.
- The forms offer Email as a third preferred contact method (Call, Text, Email), so the function accepts all three.

## Spam protection

A hidden honeypot field, a 3 second minimum time-to-submit and a per-IP limit (5 per 10 minutes, kept in memory per Cloudflare isolate, so it limits bursts but is not a hard global cap). Bots that trip the honeypot or the timer get the same success reply as a person and nothing is sent. Cloudflare Turnstile (needs site and secret keys from the dashboard) or a Cloudflare rate limiting rule is the follow-up.

## Per-market routing

Every lead goes to the single location in `GHL_LOCATION_ID`. The market is a custom field and a tag only. `LEAD_ROUTING` in `lib/forms/lead-server.ts` is a clearly marked placeholder where per-market routing can be added once the owner decides.

## Environment variables

Names only; never put values in the repo, in chat or behind a `NEXT_PUBLIC_` prefix.

| Name | Where |
|---|---|
| `GHL_PRIVATE_INTEGRATION_TOKEN` | `.dev.vars` locally (gitignored); encrypted variable in Cloudflare Pages |
| `GHL_LOCATION_ID` | same |
| `GHL_API_BASE` | test hook only; leave unset in production |

## What the owner must do

In GHL:
1. Create a Private Integration token with the `contacts.write` scope (add `locations/customFields.readonly` only if the function is later changed to look up field ids). Production account, not a sandbox.
2. Create the seven custom fields above, as Single Line text.
3. Check Settings, Business Profile: "Allow Duplicate Contact" and its match order (phone or email) decide how repeat submissions merge.
4. Rotate the token every 90 days (GHL recommendation) and update it in Cloudflare.

In Cloudflare Pages:
1. Project, Settings, Variables and Secrets: add `GHL_PRIVATE_INTEGRATION_TOKEN` (secret) and `GHL_LOCATION_ID` for Production, and for Preview if previews should send leads.
2. Deploy. Pages picks up `functions/` automatically from the repo root; no build setting changes.
3. After the first deploy, make one test submission with a fake name and a phone you control (do not use a real customer number), confirm the contact, tags, note and custom fields in GHL, then delete the test contact.
4. Optional: add Turnstile and a Cloudflare rate limiting rule on `/api/lead`.

## Testing

The mock suite: `node scripts/test-lead-function.mjs` runs the real function under `wrangler pages dev` in a temporary folder with fake credentials and a mock GHL on localhost. It checks validation, honeypot and timer rejection, rate limiting, origin and content-type checks, the exact payloads sent to GHL, the field mapping, the custom-field fallback, and that no token, location id, phone number or name appears in logs or replies.

## Live test, Oct 12, 2026 (local function against the real GHL account)

Run with `wrangler pages dev` and the real `.dev.vars`, through the real contact form, with the name "Test Website Lead" and a test phone number the owner controls. No SMS or email was sent, and no contact was deleted.

* Two identical submissions (non-marketing box checked, marketing unchecked, Text, "Test submission, delete me") produced **one contact**: the phone-based upsert de-duplicated. Each submission added its own note and the tags were not duplicated.
* Version header `2021-07-28`: worked. Upsert, tags and notes returned 201. The token also had read access (contact lookup, contact read, custom field list).
* Tags on the contact: exactly `website-lead`, `form-contact`, `market-las-vegas`. No marketing tag.
* First pass: the custom fields were **not stored**, because the key was sent as `contact.<name>` (accepted but ignored). Variants tested against the live API: `id` plus `fieldValue` stored; `key` with the `contact.` prefix did not; bare `key` stored; `id` plus `key` stored; deprecated `field_value` with `id` stored. The function now sends the bare key (no extra read scope needed).
* After the fix, one more submission stored all seven fields with these values: `preferred_contact_method` = Text, `sms_nonmarketing_consent` = true, `sms_marketing_consent` = false, `sms_consent_version` = sms-consent-v1, `sms_consent_timestamp` = a UTC ISO time, `market` = Las Vegas, `source_page` = /contact/.
* Function logs held only request ids and status codes: no token, location id, name, phone number or message text.
* The Do Not Disturb setting was not touched (the contact shows no DND flag set).

Cleanup for the owner: the test contact "Test Website Lead" and its three notes are still in GHL. Delete them by hand.
