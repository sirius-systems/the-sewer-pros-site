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
       Cloudflare Turnstile token check (siteverify), after the cheap spam checks
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
| `sms_nonmarketing_consent` | `true` or `false`; sent only when at least one box was checked in that submission |
| `sms_marketing_consent` | `true` or `false`; sent only when at least one box was checked in that submission |
| `sms_consent_version` | for example `sms-consent-v1`; sent only when at least one box was checked |
| `sms_consent_timestamp` | UTC ISO time of receipt, set by the server; sent only when at least one box was checked |
| `market` | St. Louis, San Diego, Las Vegas, or none |
| `source_page` | the page path, for example `/contact/` |

Consent state rule (a records-keeping choice, not legal advice): the four consent fields are written together, and only when the visitor checked at least one box in that submission. A later submission with both boxes unchecked therefore never overwrites an earlier `true` and never leaves an old timestamp next to `false` flags. Declining a box on a later form is not a withdrawal; a withdrawal (a STOP reply or a request) is handled in GHL. Every note still records that submission's own choices (both values, true or false), the consent version and the UTC time of receipt, so the full history stays in the notes. The owner should confirm this rule with whoever advises on SMS consent.

GHL does not refuse a custom field that is missing or misnamed: it returns success and stores nothing. Because the field alone is therefore not proof, **every note repeats the consent record** (both values, version, UTC time). If GHL ever does reject the custom fields with a 4xx, the function retries the upsert without them. Create the fields before launch so the data lands in the fields.

Tags added to every lead: `website-lead`, the form type (`form-contact` or `form-survey`) and the market (`market-st-louis`, `market-san-diego`, `market-las-vegas`; none when the lead has no market). No marketing tag is ever added.

Note (plain text): additional information, service requested, follow-up answer, service location, property type, ZIP, appointment window, preferred contact, source page and market.

Two form facts to know:
- Neither form has a separate Last Name field (the contact form asks First name; the survey form asks Full name, which is split on the first space). The function requires First Name and Phone and accepts Last Name when present. To make Last Name required, add a field to the contact form.
- The forms offer Email as a third preferred contact method (Call, Text, Email), so the function accepts all three.

## Spam protection

A honeypot field, a 2 second minimum time-to-submit and a per-IP limit (5 per 10 minutes, kept in memory per Cloudflare isolate, so it limits bursts but is not a hard global cap). Three spam paths, none of which may lose a real visitor's lead:

* **Direct post with the honeypot filled:** the same success reply as a person (HTTP 200, `{"ok":true}`) and nothing is sent to GHL; the log records only `bot-dropped` and a status. This is checked before the timer, so a bot never sees the retry reply.
* **Honeypot filled in the browser:** the form sends no request and does not go to the thank-you page. It shows the same notice as a failed send ("We could not send your request. Please try again, or call" plus the market phone number). The notice does not say spam or bot. A real visitor whose browser autofilled the hidden field is therefore told the truth and given the number to call.
* **Submit faster than 2 seconds:** the function sends nothing to GHL and replies HTTP 429 with `{"ok":false,"retry":true}` (a plain rate-limit 429 has no `retry`). Both forms then show "That was quick, please press Send again." and stay filled; pressing Send again succeeds once 2 seconds have passed since the visitor first touched the form. The log records only `too-fast` and 429.

The timer starts at the **first interaction** with the form (pointer down, key press or input, including autofill), not at page load, so reading the page first does not count. If a form is somehow submitted with no recorded interaction, the time of the submit is used and the visitor gets the retry notice once.

 The honeypot input is named `sp_ref` (label "Reference code", payload key `spRef`). The name is deliberately neutral so browsers and password managers do not autofill it; it is not a website, url, company, address, phone, email or name variant. It carries `autocomplete="off"`, `tabindex="-1"`, `data-lpignore="true"`, `data-1p-ignore="true"`, sits in a wrapper with `aria-hidden="true"`, and is positioned off-screen (absolute, far left, zero size, overflow hidden) rather than `display:none`, which some bots skip. A Cloudflare rate limiting rule on `/api/lead` is still an optional follow-up.

### Cloudflare Turnstile

Both lead forms (`ContactForm`, `SurveyLeadForm`) carry a Turnstile widget (`lib/forms/turnstile.ts`). The **site key** is public and is a constant in that file. The **secret key** is the server variable `TURNSTILE_SECRET_KEY` (see the table below), never in client code.

* The Turnstile script is loaded on the visitor's first interaction with a form, not on page load. The widget is `interaction-only`, so it stays invisible unless Cloudflare asks for a challenge.
* The token goes to the function as `turnstileToken`. After the honeypot and timer checks, the function posts the secret, the token and the visitor ip to Cloudflare's siteverify endpoint. A refused token returns 403 `{"ok":false}`, a missing token 403, a Cloudflare outage 502; nothing reaches GHL in any of these cases. The log records only `turnstile-failed`, `turnstile-missing` or `turnstile-error` and a status. The token is never stored or sent to GHL.
* **Fails closed:** with no `TURNSTILE_SECRET_KEY` set, the function refuses every lead (500, `not-configured`). Set it in Cloudflare Pages before deploying.
* If the visitor presses Send before the token has arrived, the form says "One moment, please press Send again." and sends nothing. If the script is blocked (for example by an ad blocker) or the challenge errors, the form shows the failed-send notice with the market phone number.
* Tokens are single use. The widget is reset after each send that reached the server; after a "That was quick" retry reply the same token is reused because it was not consumed.
* **Allowed hostnames:** a Turnstile site key only works on the hostnames listed for it in the Cloudflare dashboard (Turnstile, the widget, Hostname management). Add `www.thesewerpros.com`, `thesewerpros.com` and the Pages `*.pages.dev` hostname you test on. On an unlisted host (including `localhost`) the widget errors with code 110200 and the form shows the failed-send notice. For local testing Cloudflare's published test keys can be used instead (a site key and secret that always pass); never ship them.

## Per-market routing

Every lead goes to the single location in `GHL_LOCATION_ID`. The market is a custom field and a tag only. `LEAD_ROUTING` in `lib/forms/lead-server.ts` is a clearly marked placeholder where per-market routing can be added once the owner decides.

## Environment variables

Names only; never put values in the repo, in chat or behind a `NEXT_PUBLIC_` prefix.

| Name | Where |
|---|---|
| `GHL_PRIVATE_INTEGRATION_TOKEN` | `.dev.vars` locally (gitignored); encrypted variable in Cloudflare Pages |
| `GHL_LOCATION_ID` | same |
| `TURNSTILE_SECRET_KEY` | `.dev.vars` and `.env.local` locally (both gitignored); Cloudflare Pages as a **Secret** (encrypted) |
| `GHL_API_BASE`, `TURNSTILE_VERIFY_URL` | test hooks only; leave unset in production |

## What the owner must do

In GHL:
1. Create a Private Integration token with the `contacts.write` scope (add `locations/customFields.readonly` only if the function is later changed to look up field ids). Production account, not a sandbox.
2. Create the seven custom fields above, as Single Line text.
3. Check Settings, Business Profile: "Allow Duplicate Contact" and its match order (phone or email) decide how repeat submissions merge.
4. Rotate the token every 90 days (GHL recommendation) and update it in Cloudflare.

In Cloudflare Pages:
1. Project, Settings, Variables and Secrets: add `GHL_PRIVATE_INTEGRATION_TOKEN` (secret), `TURNSTILE_SECRET_KEY` (secret) and `GHL_LOCATION_ID` for Production, and for Preview if previews should send leads.
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

### Branch tests, same contact, one submission each

| Step | Submission | GHL calls | Result on the contact |
|---|---|---|---|
| a (before the consent rule) | Contact form, no boxes, Call | upsert 201, tags 201, note 201 | The earlier `sms_nonmarketing_consent` = true was **overwritten with false**, and `sms_consent_timestamp` stayed at the older time while the new note carried a newer time (stale). This is what the consent state rule above fixes. |
| b | Survey form, both boxes, Email | upsert 201, tags 201, note 201 | Tag `form-survey` added. Both consent fields true, version `sms-consent-v1`, new timestamp, preferred contact Email. No marketing tag. |
| a again (after the rule) | Contact form, no boxes, Call | upsert 201, tags 201, note 201 | Both consent fields stayed true, the version and the step b timestamp were unchanged, only the non-consent fields (Call, source page) changed. The new note recorded false and false, the version and its own UTC time. |
| c | Honeypot filled | none | The browser sent no request. A direct POST with the honeypot filled got HTTP 200 `{"ok":true}`, the log showed only `bot-dropped`, and the contact, tags, fields and notes did not change. |

Observations: tags only accumulate (the contact now holds both `form-contact` and `form-survey`, one per form used). The survey form splits "Full name" on the first space, so the same person submitted through it is saved as first name "Test" and last name "Website Lead" until another submission rewrites it. Function logs again held only request ids and statuses.

Cleanup for the owner: the test contact "Test Website Lead" and its notes are still in GHL. Delete them by hand.
