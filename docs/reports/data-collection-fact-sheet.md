# Data collection fact sheet (input for the privacy, terms and accessibility pages)

Basis: `main` at f09e2db and the local build in `out/`. Read-only inventory. This is not legal text and makes no compliance claim. Each fact has a file and line. Anything the repo cannot confirm is marked **UNCONFIRMED** with who can confirm it. Variable names only; no secret and no personal data appears here.

## 0. Counts

| Item | Count |
|---|---|
| Forms that collect personal data (rendered) | 3: contact form, survey form, careers form |
| Server endpoints that receive form data | 2: `/api/lead`, `/api/careers` |
| Third-party scripts the site code can load | 2: Google Analytics 4 (only if an id is set), Cloudflare Turnstile |
| Pixels, tag managers, heatmaps, reCAPTCHA, call tracking, embeds, maps, video hosts | 0 found in code or in the built pages |
| Browser storage keys written | 1: `sp-contact-market` (localStorage, written by 3 components) |
| Cookies written by site code | 0 |
| Analytics event names | 11 |
| Consent banner or opt-out control | 0 |
| Privacy, terms, accessibility, cookie or consent routes | 0 |

## 1. Forms and server flows

### 1.1 Where each form lives

| Form | File | Endpoint | Analytics form type |
|---|---|---|---|
| Contact form (contact hub and market contact pages) | `components/sections/ContactForm.tsx` | `/api/lead` | `contact_request` |
| Survey form (service, location and other pages) | `components/sections/SurveyLeadForm.tsx` | `/api/lead` | `general_service` |
| Careers form (`/careers/`) | `components/sections/CareersForm.tsx` | `/api/careers` | `careers` |
| Legacy `LeadFormSection` stub | `components/sections/LeadFormSection.tsx` | none (sends nothing) | none. Not rendered in any built page; `scripts/verify-lead-routing.mjs` fails if it is |

### 1.2 Fields sent

**Contact form** (`ContactForm.tsx`, payload built from line 411; `LeadPayload` in `lib/forms/submit-lead.ts:21-58`): market, service or problem chosen, one follow-up answer, first name, phone, property ZIP, email (optional), preferred contact method (Call, Text or Email), preferred appointment window, free-text message, two optional SMS consent checkboxes plus the consent wording version, page path, form type, honeypot value, Turnstile token, time the visitor first touched the form.

**Survey form** (`SurveyLeadForm.tsx:227-242`): full name (split into first and last), phone, email (optional), preferred contact method, free-text message, service location (a city or area label and its id), service, property type (home or rental or multifamily), page path, SMS consent, honeypot, Turnstile token, form-open time. ZIP is sent as an empty string.

**Careers form** (`CareersForm.tsx`, body built in `handleSubmit`; limits in `lib/forms/careers-server.ts:71-84`): market applied for, full name, phone, email, preferred contact method (phone or email), optional employment type, optional availability, optional skills or certifications, optional message, optional resume file, page path, honeypot, Turnstile token, form-open time. No street address, date of birth, SSN, demographic or supervisor fields.

`docs/17-conversion-architecture.md` section 82 (line 1713) records the rule not to collect SSN, payment data or legal contract information through standard lead forms.

### 1.3 Where the data goes

All three forms POST to the site's own Cloudflare Pages Functions (`functions/api/lead.ts`, `functions/api/careers.ts`). The functions create or update a GoHighLevel (GHL) contact. The site sends no email itself (`docs/lead-routing.md`, DEC-159).

| Data | `/api/lead` (`lib/forms/lead-server.ts`) | `/api/careers` (`lib/forms/careers-server.ts`) |
|---|---|---|
| Contact record | `/contacts/upsert` by phone or email (line 480): name, phone, email, source `The Sewer Pros website` (475) | same call (about line 407): name, phone, email, source `The Sewer Pros website (careers)` (400) |
| Custom fields | `preferred_contact_method`, `market`, `source_page`, and four SMS consent fields only when a box was checked (`customFieldValues`, 261-280; keys 70-78) | `preferred_contact_method`, `source_page`, and the resume File Upload field |
| Tags | `website-lead`, `form-contact` or `form-survey`, `market-st-louis`, `market-san-diego` or `market-las-vegas` (`leadTags`, 283-287) | `website-careers`, `form-careers`, `careers-st-louis`, `careers-san-diego` or `careers-las-vegas`, and `careers-resume-failed` when the attach fails (`CAREERS_TAGS`, 89) |
| Note on the contact | message, service, follow-up answer, service location, property type, ZIP, appointment window, contact method, source page, market, SMS consent record, UTC time (`noteBody`, 289-301) | market, contact method, employment type, availability, skills, message, resume status, source page, UTC time (`noteBody`) |
| Resume file | not applicable | `POST /forms/upload-custom-files` to the contact's File Upload field (lines 22, 452); PDF or DOCX, 5 MB (51), generated file name |
| Notification email | a GHL workflow per `market-*` tag emails the market's published address (`docs/lead-routing.md` section 3) | one GHL workflow on `website-careers` emails `info@thesewerpros.com` (section 3A) |

GHL contacts merge across forms: the upsert matches on phone or email, so a careers applicant who is also a lead lands on one contact (`docs/lead-routing.md` section 3A).

### 1.4 What is stored on the site or in Cloudflare

- **No site database, KV or R2.** There is no `wrangler.toml` and no binding in the repo. A binding added in the Cloudflare dashboard would be **UNCONFIRMED** (owner, Cloudflare settings).
- **Rate limit counters:** in memory per function instance, keyed by the visitor's IP address, lost on restart (`lead-server.ts:316-331`, limits at 84; `careers-server.ts:290`). The IP is read from `CF-Connecting-IP`, falling back to `X-Forwarded-For` (`lead-server.ts:399`, `careers-server.ts:316`). The IP is also passed to Cloudflare Turnstile when known (`lead-server.ts:365`).
- **Function logs:** `console.log` of a JSON line with a request id, a step name and a numeric status only (`lead-server.ts:386-390`, `careers-server.ts:303-306`). Names, phones, emails, messages, file names, file contents, tokens and consent values are not logged (`scripts/test-lead-function.mjs` and `scripts/test-careers-function.mjs` check this). Whether Cloudflare keeps these logs, for how long and who can read them is **UNCONFIRMED** (owner, Cloudflare Workers and Pages logging settings).
- **Request bodies** are read in memory and not written anywhere by the site. The lead body cap is 16 KB (`lead-server.ts:81`); the careers body cap is 5 MB plus 64 KB (`careers-server.ts:51-53`).
- **Files:** the resume is held in memory during the request and sent to GHL. Where GHL stores it and who can open it is **UNCONFIRMED** (owner, GHL settings).

### 1.5 Cloudflare Turnstile

- **Script:** `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit` (`lib/forms/turnstile.ts:16`). It is loaded by `loadScript` (42-55) when `start()` runs, which each form calls on the visitor's first interaction (pointer, key or input), not on page load.
- **Widget:** rendered with `appearance: 'interaction-only'` (turnstile.ts:23 and its `render` call) so it stays invisible unless Cloudflare asks for a challenge. The public site key is a constant (line 14).
- **Server check:** the function sends the secret key (`TURNSTILE_SECRET_KEY`, server only), the visitor's token and, when known, the visitor's IP to Cloudflare's siteverify endpoint (`lead-server.ts:354-374`, IP at 365). It fails closed when no secret is set (`lead-server.ts:427`, `careers-server.ts:342`).
- **What Cloudflare itself collects, and any cookies or storage it sets in the browser:** **UNCONFIRMED** from the repo (Cloudflare documentation or counsel).

### 1.6 Other form facts

- A hidden honeypot field named `sp_ref` is on every form (off-screen, `aria-hidden`). A filled value is dropped.
- A minimum of 2 seconds from first interaction, and a 24-hour maximum age, are enforced server-side (`lead-server.ts:82-83`, `careers-server.ts:54-55`).
- Consent values and phone numbers are never sent to analytics (`CLAUDE.md` section 42, `lib/analytics/pii.ts`).
- The market prefill never uses IP or geolocation (`ContactForm.tsx:305-306`, `CareersForm.tsx:79`).

## 2. Analytics and tracking

| Item | Provider | What it receives | When it loads | Waits for consent | Cookies or storage |
|---|---|---|---|---|---|
| Google Analytics 4 (`gtag.js`) | Google | page views and the events in section 3, with page type, page path, market, service, location, audience ids; the visitor's IP and browser data reach Google as with any GA4 tag (provider behavior) | `afterInteractive` (`components/tracking/Analytics.tsx:52-63`), mounted in `app/layout.tsx:91`, **only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set** (`lib/analytics/track.ts:40-44`); `send_page_view: false`, page views are sent by `PageViewTracker` | **No.** There is no consent layer (`Analytics.tsx:42-50`, `components/tracking/index.ts:7-20`) | `_ga` and `_ga_<container id>` are the cookies GA4 normally sets; the repo does not set or configure them. **UNCONFIRMED** in practice |
| Cloudflare Turnstile | Cloudflare | see section 1.5 | first form interaction | No | **UNCONFIRMED** |
| Google Fonts | none at runtime | n/a | Archivo and Source Sans 3 are self-hosted at build time by `next/font`; no request to `fonts.googleapis.com` (`app/layout.tsx:2, 40-41`) | n/a | none |
| Google Tag Manager, Search Console tag, Bing, Meta pixel, call tracking, heatmaps, reCAPTCHA, maps embeds, video hosts, social embeds | none | none | none | n/a | none. No such script, tag or `iframe` in `app`, `components` or `lib`, and the built `out/` pages contain no third-party `src`, `srcset` or `poster` |

**Is GA4 live?** `components/tracking/index.ts:14-16` says the id is unset so nothing loads. `.env.local` does not set it and `.env.example:44` has it commented out. Whether the Cloudflare Pages production build has `NEXT_PUBLIC_GA_MEASUREMENT_ID` set is **UNCONFIRMED** (owner, Cloudflare Pages variables). The variable is inlined at build time, so the answer is whatever the deployed build used. No built page in the local `out/` contains `gtag` or `googletagmanager`.

**Search Console and Bing verification:** no verification meta tag or file exists in the repo. **UNCONFIRMED** (owner, Google and Bing accounts).

**Cloudflare Web Analytics** can be switched on for a Pages project in the dashboard without any code. **UNCONFIRMED** (owner, Cloudflare settings).

**Consent banner, opt-out, "Do not share" or similar controls:** none exist. `docs/19-analytics-measurement.md:2160-2169` (section 106) requires consent handling "where applicable" and says legal and privacy decisions are reviewed separately; `components/tracking/index.ts:7-12` records that no consent decision was made and that California's rules have not been assessed.

## 3. Analytics events

Names (`lib/analytics/events.ts:47-57`): `page_view`, `cta_click`, `phone_click`, `email_click`, `form_view`, `form_start`, `form_submit`, `form_error`, `service_select`, `market_select`, `audience_select`. Of these, the code in `app`, `components` and `lib` sends `page_view`, `cta_click`, `phone_click`, `form_start`, `form_submit`, `form_error`, `service_select`, `market_select`, `audience_select`. `email_click` and `form_view` are declared but no sender was found in `app`, `components` or `lib`.

Allowed parameters (`events.ts:108-122`): `page_type`, `market_id`, `service_id`, `location_id`, `audience_id`, `lead_type` (residential or real estate), `form_type` (`general_service`, `prepurchase_inspection`, `contact_request`, `careers`), `cta_location`, `content_cluster`, `landing_page_type`, `page_path`.

Guard: `lib/analytics/pii.ts` rejects any parameter not on the allow-list and any value that matches an email, a phone number, a street address or is longer than 96 characters; it throws outside production and logs and drops in production (`pii.ts` `detectPii`, `scrubAndReport`). No event carries a name, phone, email, file name or message by design. Careers events send only the form type and the chosen market id (`CareersForm.tsx` calls to `trackFormStart`, `trackFormError`, `trackFormSubmitted`, `market_select`). A `form_submit` fires only after the server accepted the request, including the partial-resume case.

Note: `page_path` is the page's pathname. The thank-you pages carry a `?market=` query in the address bar; the tracker sends the pathname only (`PageViewTracker.tsx`).

## 4. Cookies and local storage

| Key | Where | Purpose | Lifetime |
|---|---|---|---|
| `sp-contact-market` (localStorage) | written by `ContactForm.tsx:347`, `CareersForm.tsx:99`, `MobileContactBar.tsx:195`; read at `ContactForm.tsx:313`, `CareersForm.tsx:85`, `MobileContactBar.tsx:68` | remembers the market a visitor chose (`st-louis-mo`, `san-diego-ca` or `las-vegas-nv`) to prefill forms and the mobile contact bar | no expiry in code; stays until the visitor clears site data |

No other `localStorage`, `sessionStorage`, `indexedDB` or `document.cookie` use was found in `app`, `components` or `lib`. Cookies set by Google Analytics (if loaded) or by Cloudflare (Turnstile, or Pages) are not set by site code and are **UNCONFIRMED**.

## 5. Third parties, links and contact channels

- **Phone:** `tel:` links in the header, footer, mobile bar and pages, tracked as call intent (`TrackedPhoneLink.tsx`, `FooterContacts.tsx:58`). Intent only, not a completed call. Call tracking or call recording: none in the repo (PENDING-009 in `docs/19-analytics-measurement.md`); whether the phone provider records calls is **UNCONFIRMED** (owner).
- **Email:** `mailto:` links (`FooterContacts.tsx:66`, `ContactSections.tsx:286`, `RoutingCards.tsx:602`, `ServiceLocationPageTemplate.tsx:554`). No click event is sent.
- **SMS:** no `sms:` links. The "Text" contact option exists on the contact and survey forms. The two optional unchecked consent checkboxes use owner-provided wording naming The Sewer Pros, version `sms-consent-v2`, 2026-11-22 (`lib/forms/sms-consent.ts`, DEC-146 and DEC-161; v1 named a different business name and is retired). The line "See our Privacy Policy and Terms." is wired but hidden because `SMS_LEGAL_LINKS` is `undefined` (`sms-consent.ts:47`). The careers form offers phone or email only and has no SMS consent. `docs/22-decisions-change-log.md` still carries PENDING-019 as OPEN ("TCPA consent disclosure for the Text option", line 2104) although DEC-146 later supplied consent copy; whether PENDING-019 should be closed is **UNCONFIRMED** (owner).
- **Reviews:** `/reviews/` and the review carousel show Google reviews as captured on 2026-11-22: reviewer public display name, public profile URL, relative date, text, star rating, Local Guide flag, reviewer review and photo counts (`data/reviews/reviews.ts:72-90`). Links go to `share.google` URLs and `google.com/maps/contrib/...` profile URLs and open in a new tab (`ReviewsBrowser.tsx:113`, `ReviewMarquee.tsx:263, 434`, `ReviewsPageTemplate.tsx:71`). No Google widget or embed loads; the data is a local snapshot. Whether the owner has permission or a policy basis to republish reviewer names is **UNCONFIRMED** (owner, counsel).
- **Social links, maps, embedded video, third-party widgets:** none found. The hero videos are self-hosted MP4 files under `public/images` (`HeroVideoBackdrop.tsx:290`, `data/business/services-hub-backdrop.ts:27`).
- **Schema (JSON-LD):** the organization graph publishes the business name, markets, phones and emails already shown on the pages (`lib/schema/organization.ts`). No review or rating markup (DEC-028, DEC-085).
- **Business entity named in SMS copy:** The consent wording names "The Sewer Pros" (changed from a different name in DEC-161). The legal entity name for the policy pages is **UNCONFIRMED** (owner).

## 6. Retention and access

- **Retention:** the repo states no retention period for leads, applications or resumes. `docs/reports/careers-page-proposal.md` section 3.3 records that retention is undecided and that the careers page must promise none; `docs/22-decisions-change-log.md` PENDING-020 and DEC-160 say the same. Nothing on any page promises deletion.
- **Deletion:** no deletion workflow, request form or contact for deletion requests exists in the repo. **UNCONFIRMED** (owner).
- **Who can read GHL contacts, notes and resumes:** not in the repo. The proposal says files are not public and are visible to GHL users who can open the contact. **UNCONFIRMED** (owner, GHL user and permission settings).
- **Who receives notification emails:** the market inbox for leads (`info@thesewerpros.com`, `admin@thesewerpros.com`, `bookaninspection@thesewerpros.com`) and `info@thesewerpros.com` for all careers applications (`docs/lead-routing.md`). What the notification email contains (it may include the submitted details) is **UNCONFIRMED** (owner, GHL workflow settings). Mailbox access and retention at those addresses: **UNCONFIRMED** (owner, email host).
- **GHL, Cloudflare and Google data processing terms, hosting regions, and subprocessors:** **UNCONFIRMED** (owner, vendor accounts).
- **Do not disturb and marketing:** the function never sets GHL do-not-disturb and adds no marketing tag (`lead-server.ts:28-30`); whether any GHL workflow sends marketing messages to these contacts is **UNCONFIRMED** (owner, GHL workflows).

## 7. Accessibility facts (no conformance claim)

**Recorded rules:** `docs/18-design-system.md` section 64 (line 2210) requires semantic HTML, keyboard interaction, visible focus, heading hierarchy, sufficient contrast, descriptive labels, meaningful alt text, touch targets, reduced motion and accessible form states. `CLAUDE.md` section 58 repeats it.

**In the code:**
- Skip link to `#main`, visually hidden until focused (`app/layout.tsx:71-77`); `main` has `tabIndex={-1}` as the target.
- Visible focus style `:focus-visible` (`app/globals.css:220`) and component-level focus outlines (for example `components/ui/Field.tsx` controls).
- Reduced motion: a global `prefers-reduced-motion: reduce` block (`globals.css:259-269`), more blocks at 428 and elsewhere; the hero `<video>` is never mounted for a visitor with that preference or on a metered or slow connection (`HeroVideoBackdrop.tsx:40-57`).
- Review carousel has a persistent visible pause control, pauses on hover and focus, and respects reduced motion (`ReviewMarquee.tsx:36-42`).
- Forms: every control has a `<label>` through the `Field` component, required fields are marked, errors render with `role="alert"` and are tied by `aria-describedby` with `aria-invalid`, the first error receives focus on submit, radio groups use `fieldset` and `legend`, the honeypot is `aria-hidden` and out of tab order, status notices use `role="status"`.
- Alt text: `scripts/verify-images.mjs:87-89` fails the check when an image has no alt, a meaningful image has empty alt, or alt is filename-style or "image of"; decorative backdrops use `alt=""`.
- Touch targets: filter and choice buttons use `min-h-11` (44 px) in the forms.

**Known gaps and limits:**
- The hero video autoplays muted and looping for visitors who have not set reduced motion, and has no pause control. The header comment in `HeroVideoBackdrop.tsx:40-50` records this as unresolved.
- No automated accessibility testing tool (axe, pa11y, Lighthouse) is in `package.json` or `scripts/`. No contrast measurement script exists. Manual testing with assistive technology: **UNCONFIRMED** (owner).
- The Turnstile widget is third-party; its accessibility is Cloudflare's. The file input on the careers form is the browser's native control.
- The legacy `LeadFormSection` is not rendered and is not covered.
- No accessibility statement page, no accessibility contact and no conformance target is recorded. `docs/04-master-page-build-list.md` and `docs/22-decisions-change-log.md` mention testing tools only in passing; no audit result is recorded.

## 8. Existing legal-type pages, links and what is being replaced

- **Routes:** none. `app/` has no privacy, terms, accessibility, cookie or consent route. The slugs `privacy`, `terms` and `accessibility` are reserved in `lib/routing/pathname.ts:49-51` but unbuilt.
- **Footer:** no legal links. `components/layout/SiteFooter.tsx:23` and `data/navigation/navigation.ts` record "NO LEGAL LINKS". The footer Company group has About, Contact, FAQs, Reviews, Resources, Careers.
- **Sitemap and registry:** no page record exists for any of them.
- **Old site (owner-reported, not in the repo):** the owner's old site used vendor-hosted privacy, consent, conditions of use, notice and take down, and accessibility links. The repo contains no copy of those pages and no list of their URLs (no mention of the vendor name in any document). The exact old URLs, wording and what they promised: **UNCONFIRMED** (owner, the old site). They stop being linked at cutover (PENDING-020, DEC-160).
- **Open items already recorded:** PENDING-020 (privacy, terms and accessibility pages are a cutover blocker), PENDING-019 (SMS consent), PENDING-009 (call tracking), PENDING-010 (redirect inventory).

## 9. Questions only the owner can answer

| # | Question | Needed |
|---|---|---|
| 1 | Is `NEXT_PUBLIC_GA_MEASUREMENT_ID` set in the production Cloudflare Pages build, and will GA4 run at launch? | Required |
| 2 | Offer a consent banner or opt-out for analytics, or keep GA4 off until a decision? (No consent layer exists.) | Required |
| 3 | Retention period for lead contacts, careers applications and resumes, and whether the site may state it | Required |
| 4 | Who handles deletion and access requests, and what contact address or form should the policy name for privacy questions | Required |
| 5 | Legal business name and address for the policy pages (the SMS copy names The Sewer Pros) | Required |
| 6 | Final text-message consent wording and whether SMS terms get their own section; close or update PENDING-019 | Required |
| 7 | Who in GHL can open contacts, notes and resumes; where GHL stores files; what the notification emails contain | Required |
| 8 | Is Cloudflare Web Analytics or any other dashboard-level tool enabled; are function logs kept and for how long | Required |
| 9 | Are Search Console or Bing Webmaster verifications in use (owner accounts) | Optional |
| 10 | Does the phone provider record or track calls | Optional |
| 11 | Permission or policy for showing reviewer names and profile links from Google reviews | Optional |
| 12 | Accessibility: target standard to name, contact for accessibility feedback, whether to add a pause control for the hero video, and whether to commission an audit | Required for the statement, optional for the work |
| 13 | Separate careers GHL location, or share the lead contact pool | Optional |
| 14 | Terms of use: scope the owner wants covered (site use, quote and service terms, SMS terms) | Required |

## 10. UNCONFIRMED list (who can confirm)

- GA4 id set in production; GA cookies in practice: owner (Cloudflare Pages variables, Google account).
- Turnstile data and cookies: Cloudflare documentation, counsel.
- Cloudflare logging, Web Analytics, dashboard bindings, regions: owner (Cloudflare).
- GHL storage, user access, workflow email contents, marketing workflows, data processing terms: owner (GHL).
- Mailbox access and retention for the three published addresses: owner (email host).
- Call recording or tracking: owner (phone provider).
- Old vendor privacy, consent, conditions, take down and accessibility pages (URLs and wording): owner (old site).
- Search Console and Bing verification: owner (accounts).
- Reviewer-name republishing basis: owner, counsel.
- Legal entity name; retention; deletion process; privacy contact; accessibility target and any manual testing: owner.
- Whether PENDING-019 is stale: owner.
