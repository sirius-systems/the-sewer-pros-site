# Proposal: `/careers/` page with resume upload (three markets, one recipient)

Basis: `main` at 5d4a85c, the local build in `out/`, the owner's published careers copy from the old site, and three owner inputs: addendum 1 (lean form, privacy, `/careers/` URL, GHL notification), addendum 2 (hiring in all three markets, 2026-11-22) and addendum 3 (all careers submissions go to `info@thesewerpros.com`). Read-only. No source, data, content, function or verifier file was changed. This report is the only file created, and it is not committed. No secret value is printed here.

## 0. Summary

- **Page:** `/careers/`, one intro plus one block per market (the St. Louis area, the San Diego area, the Las Vegas Valley). Each block says only that The Sewer Pros is accepting applications in that area, shows that market's phone from `marketOperatingDetail`, and links to the market's contact page and to the application form. A typed per-market openings list renders nothing while empty. No roles, pay, benefits, perks, schedules, headcounts, start dates or urgency.
- **Form:** lean (section 6.3) with a required "Market you are applying for" select, prefilled from `?market=` or the visitor's remembered market, as `ContactForm` already does.
- **Storage:** attach the resume to the applicant's GoHighLevel (GHL) contact through the API, using a File Upload custom field. Fallback: Cloudflare R2. One file, PDF, DOC or DOCX, 5 MB.
- **New function, not a change to the lead function:** `POST /api/careers`, reusing the Turnstile, honeypot, rate limit and GHL pieces.
- **Tags:** `website-careers`, `form-careers` and one of `careers-st-louis`, `careers-san-diego`, `careers-las-vegas`. None starts with or contains `market-`, so the `market-*` lead workflows cannot match them.
- **Recipient:** every careers tag maps to `info@thesewerpros.com`. One GHL workflow on the `website-careers` tag is enough; the market tag is kept so the owner can see the applicant's chosen area. No new address is published and the careers page shows no email.
- **Biggest gap:** the site has no privacy policy, terms or accessibility pages. A resume upload needs a privacy page before launch (owner and legal review; no legal text is drafted here).
- **Other findings:** `/careers` is not in the migration plan and no redirect file exists. The footer link does not count toward the inbound-link rule, so the page needs body links (this proposal plans four).

## 1. Owner-confirmed inputs

- Old careers page copy: the company is "accepting applications from hard-working, dependable, and motivated individuals in the St. Louis area." After the form is submitted, a team member contacts the applicant.
- **Addendum 2 (2026-11-22):** the careers page lists hiring opportunities in all three markets. This supersedes the St. Louis only scope in addendum 1.
- **Addendum 3 (2026-11-22):** all careers submissions, in every market, go to `info@thesewerpros.com`. This replaces the per-market recipient default.
- Not reused from the old page: the review count, hours, the Service Fusion "Schedule a Service" link, the vendor-hosted privacy, consent, conditions and accessibility links, the tagline with the trademark symbol, the old nav labels, and "one of the best sewer and drain companies in St. Louis" or any other superlative.
- The old page shows `info@thesewerpros.com` as the St. Louis contact, which matches the current St. Louis value in `marketOperatingDetail`.

## 2. Existing pipeline: what is reusable

Read from `functions/api/lead.ts`, `lib/forms/lead-server.ts`, `lib/forms/submit-lead.ts`, `components/sections/ContactForm.tsx`, `lib/forms/turnstile.ts`, the thank-you route and `docs/ghl-lead-setup.md`.

| Piece | State | For careers |
|---|---|---|
| Cloudflare Pages Function wiring | `functions/api/lead.ts`: `onRequestPost` calls `handleLead`; other methods return 405 | New sibling `functions/api/careers.ts` |
| Server variables | `GHL_PRIVATE_INTEGRATION_TOKEN`, `GHL_LOCATION_ID`, `TURNSTILE_SECRET_KEY` | Reuse the same names; no new secrets for the GHL option |
| Turnstile, browser (`useTurnstile`, public site key) | reusable as is | Reuse |
| Turnstile, server (`verifyTurnstile`, fails closed with no secret) | private to `lead-server.ts` | Extract to a shared module |
| Honeypot `sp_ref`, 2-second minimum, 24-hour age | in `validateLead` | Reuse the same rules |
| Rate limiter (`createRateLimiter`, exported) | in memory per isolate, 5 per 10 minutes | Reuse with a lower limit (section 5) |
| `clean()`, `normalizePhone()` | `normalizePhone` exported | Reuse (export `clean`) |
| GHL calls (upsert, add tags, add note, 8-second timeout, one retry, request id logging) | private `call` helper inside `handleLead` | Extract to a shared module |
| Reply (ok or not ok only) and logging (request id and status codes only) | `reply()`, `done()` | Reuse as is |
| Market prefill from `?market=` then a remembered choice (never from IP or geolocation) | `ContactForm.tsx` effect, key `sp-contact-market` | Extract to a small hook and reuse |
| Analytics context | `pageContext(page)` gives `market_id` from the page record; market-agnostic pages carry none | A market-agnostic careers page has no page-level market, so the form's chosen market is passed as an id to the form events |
| **Contact-form specific** | `LeadPayload` (issue, service location, SMS consent), `validateLead`'s allowed fields, `FORM_TYPES`, `GHL_CUSTOM_FIELD_KEYS`, `noteBody`, the JSON body and its 16 KB cap, `leadTags` and its `market-*` tags, `LEAD_ROUTING`, the path-based market fallback | Not reused. Careers has its own payload, validation, tags and note |
| Thank-you page | `/contact/thank-you/` is market and lead specific | New `/careers/thank-you/` |

## 3. Resume storage

### 3.1 Options compared

| Option | How | For | Against |
|---|---|---|---|
| **A. Attach to the GHL contact** (recommended) | After the contact upsert the function posts the file to GHL's custom-file upload endpoint for that contact, into a File Upload custom field | No new infrastructure or vendor; the file sits on the contact next to the tags and note; the owner retrieves it from the contact; one place for access control | Depends on a GHL endpoint whose scope and field-key format must be proven by a test call; no virus scan; applicants who are also customers merge into one contact (section 4.4) |
| B. Store in Cloudflare R2, put a private reference in the GHL note | The function writes the file to a private R2 bucket and puts only the object key in the note | Files stay in a bucket the owner controls; no dependence on the GHL file API | Needs an R2 bucket and a Pages binding (dashboard or wrangler; none exists in the repo); the owner has no ready way to open an R2 object, so a small authenticated download route or the dashboard is needed; a second system to retain, secure and delete from |
| C. Send the file by email | The function emails the resume as an attachment | Arrives in an inbox | Needs a sending service, a sender domain and SPF and DKIM (the repo records none); attachments in mail are harder to delete and control |
| D. Hosted form service | A third-party form with file upload | Fast to stand up | A new processor of applicants' personal data; a separate privacy and retention story; breaks the single pipeline and tag plan; recurring cost |

### 3.2 Why A, and what must be verified first

GHL publishes an endpoint for this: `POST https://services.leadconnectorhq.com/forms/upload-custom-files` takes the contact id as a query parameter and a multipart body, and the help centre says the field must first exist as a File Upload type custom field. A second endpoint, `/locations/{locationId}/customFields/upload`, also exists. The sources do not fully agree on which one a contact file field uses, and the multipart field-name format comes from a third-party connector page, not from HighLevel itself. So this is a proposal, not a confirmed design.

The repo's documented token scope is `contacts.write` only (`docs/ghl-lead-setup.md`). The file endpoint may need another scope. Before any build:

1. The owner creates a File Upload custom field on contacts in GHL (required for option A).
2. One test upload with a throwaway contact confirms which endpoint, which field-name format and which scope work, and what the owner sees on the contact.
3. If the test fails or needs a scope the owner will not grant, use option B.

Sources: [Upload files to custom fields](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields.md), [Uploads File to customFields](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields.md), [Adding files to contacts using a custom field](https://help.gohighlevel.com/support/solutions/articles/48001171922-adding-files-to-contacts-using-a-custom-field), [R2 limits](https://developers.cloudflare.com/r2/platform/limits/index.md), [R2 upload objects](https://developers.cloudflare.com/r2/objects/upload-objects).

### 3.3 File rules

| Rule | Proposal |
|---|---|
| Allowed types | PDF, DOC, DOCX. Flag for the owner: DOC is an old format that can carry macros; dropping it (PDF and DOCX only) lowers risk at little cost |
| Number of files | one |
| Size limit | 5 MB. Resumes are normally well under 1 MB; a low cap limits abuse and storage. Enforce `Content-Length` before parsing, then the parsed file size |
| Server-side checks | extension in the allow list; declared type in the allow list; file signature matches (PDF starts with `%PDF-`, DOCX is a zip starting with `PK`, DOC is the OLE header `D0 CF 11 E0 A1 B1 1A E1`); reject anything else with a generic reply. Store under a generated safe name keeping only the extension. Never trust the browser's filename or type |
| Virus scanning | **Not available on this stack.** Cloudflare Pages Functions, R2 and GHL do not scan uploads. Mitigations: tight type and size limits, no rendering or executing of the file by the site, a generated filename, and the owner opening files in a viewer. A third-party scanning API could be added later as a separate decision |
| Retention | Not decided by the owner and not stated anywhere. The site must not promise a retention period until the owner decides. Suggested default to consider: keep application files only as long as hiring needs them, and delete on request |
| Who can read | Option A: the GHL users who can open that contact; the files are not public. Option B: nobody without bucket access |
| How the owner retrieves | Option A: open the contact in GHL and download the file from the File Upload field; the note shows the details. Option B: the R2 dashboard or a small authenticated download route |
| Logging | Request id and status codes only. Never file contents, file names or any applicant detail |

## 4. Tags, recipient and notification

### 4.1 Tags and fields

| Item | Proposal |
|---|---|
| Tags added | `website-careers`, `form-careers`, and one market tag: `careers-st-louis`, `careers-san-diego` or `careers-las-vegas` |
| Tags never added | `website-lead`, `form-contact`, `form-survey`, any `market-*` tag |
| Custom fields | `preferred_contact_method` (existing), `source_page` (existing, `/careers/`), and the new File Upload field. The existing `market` field is not written, so lead reports and workflows that read it are untouched |
| Note | market applied for, availability, employment type, skills and the short message, as plain text. No new text custom fields are needed |
| SMS | no consent fields: the form offers phone or email only |

### 4.2 Why the `market-*` workflows cannot match these tags

`leadTags` in `lib/forms/lead-server.ts` builds only `website-lead`, `form-${formTag}` and `market-${marketKey}`, and the careers function is separate, so careers code never emits a `market-*` tag. The careers tag names also cannot be matched by name: `careers-st-louis`, `careers-san-diego` and `careers-las-vegas` do not start with, end with or contain `market-`, and none equals `website-lead`, `form-contact` or `form-survey`. The proposed verifier asserts this (section 8.3).

**Owner check required, because the repo cannot see GHL workflow settings:** open each of the three `market-*` workflows and confirm the trigger is "tag added" with that exact tag, and not "contact created" or "contact updated". A broader trigger would fire on a careers contact.

### 4.3 Recipient table

Per addendum 3, every careers tag maps to the same recipient. This is a careers table, separate from the `market-*` lead recipients in `docs/lead-routing.md` section 3.

| Tag | Meaning | Recipient |
|---|---|---|
| `website-careers` | every careers submission | info@thesewerpros.com |
| `form-careers` | the careers form | info@thesewerpros.com |
| `careers-st-louis` | applying for the St. Louis area | info@thesewerpros.com |
| `careers-san-diego` | applying for the San Diego area | info@thesewerpros.com |
| `careers-las-vegas` | applying for the Las Vegas Valley | info@thesewerpros.com |

- **One GHL workflow triggered on the `website-careers` tag is enough.** It sends the internal notification to `info@thesewerpros.com`. The market tag is kept so the owner can see the applicant's chosen area and filter by it.
- **No new address is published.** The careers page shows no email address at all. `info@thesewerpros.com` is the St. Louis address the site already publishes (footer and contact pages), and nothing on `/careers/` adds to that.
- The published San Diego and Las Vegas addresses (`admin@`, `bookaninspection@`) are not used for careers, by the owner's decision.
- The owner can change the recipient in GHL at any time without a code change.
- **Where it goes in the docs (proposal only, do not edit now):** a new "Careers" section in `docs/lead-routing.md` placed after section 3 (market, tag and recipient), with the tag list, the recipient table above, the sentence that careers recipients are separate from the `market-*` lead recipients, and the owner checklist items for careers (File Upload field, one test per market, the workflow trigger check).

### 4.4 Applicants who are also customers

The contact upsert matches on phone or email, so an applicant who is already a customer lead is merged into that contact, and the resume and note land on it. This is a data-separation point for the owner to accept or avoid (for example, a separate careers GHL location). It is not a blocker.

## 5. Spam and abuse

| Control | Applies to careers |
|---|---|
| Cloudflare Turnstile (browser widget and server check, fails closed) | Yes, same keys |
| Honeypot `sp_ref`, 2-second minimum, 24-hour maximum age | Yes |
| Rate limit | Yes, lower than leads: for example 3 per hour per IP. It is per isolate, so best effort. Also recommend a Cloudflare rate limiting rule on `/api/careers` (dashboard, optional) |
| Lower file size | Yes, 5 MB, checked before parsing |
| Body cap | About the file limit plus a small allowance for the fields |
| Field limits | Same unknown-field rejection, length limits and plain-text cleaning. The market must be one of the three known ids |

Risks of a public upload endpoint: junk or oversized files consuming storage, junk contacts filling the CRM (which may count toward a GHL plan), malicious documents reaching staff, and the endpoint being probed. Order the checks so the cheap ones run first (method, content length, honeypot, rate limit) and the file is read only after Turnstile passes. Cost is small at these limits; abuse is the realistic risk.

## 6. Page design

### 6.1 Route and registration

| Item | Proposal |
|---|---|
| Page | `/careers/`, id `core-careers`, `pageType: 'core'`, parent `core-home`, status `launch`, indexable |
| Thank-you | `/careers/thank-you/?market=...`, id `core-careers-thank-you`, noindex, not in the sitemap, not linked from other pages (the pattern of `/contact/thank-you/`) |
| Template | a new `CareersPageTemplate` with a `CareersForm` |
| Schema | WebPage plus the usual Organization, WebSite and BreadcrumbList. No JobPosting. No FAQ block, so no FAQPage markup |
| Breadcrumb | Home > Careers |
| Indexation | indexable (owner allows). Keep it a real page (intro, three blocks, form), not a bare form |

### 6.2 Metadata and width budget

Measured with the repo's own width module (title budget 580 px, description budget 920 px).

| Field | Proposal | Chars | px |
|---|---|---|---|
| Title | Careers in St. Louis, San Diego and Las Vegas | 45 | 419 (579 with the "\| The Sewer Pros" suffix) |
| Meta description | The Sewer Pros is accepting applications in the St. Louis area, the San Diego area and the Las Vegas Valley. Choose your area and send your resume online. | 154 | 913 |

The title fits with the brand by 1 px. If a later edit pushes it over, the template drops the suffix automatically, as it does for other pages. The description is inside the 110 to 160 character and 920 px limits. Do not hardcode the brand.

### 6.3 Copy rules

- Use "in the St. Louis area", "in the San Diego area", "in the Las Vegas Valley".
- Never "office", "branch", "local team", "our San Diego location" or any implied local track record. The Las Vegas newer-market rule still applies (`content/pages/las-vegas.tsx`: "a newer market for us"); the Las Vegas block states only that applications are accepted in the Las Vegas Valley. DEC-156 still applies: the founding year is a company-wide statement, so the careers page claims no San Diego or Las Vegas operating history.
- No superlatives. No "free". No roles, pay, benefits, perks, schedules, headcounts, start dates or urgency. No "now hiring".
- Hyphens, not em dashes.

### 6.4 Outline

1. **Hero:** eyebrow "Careers", H1 "Careers at The Sewer Pros", then one sentence: "The Sewer Pros is accepting applications in the St. Louis area, the San Diego area and the Las Vegas Valley."
2. **Per-market blocks (three, same shape).** Each block:
   - H2: "St. Louis area", "San Diego area" or "Las Vegas Valley"
   - one sentence: "The Sewer Pros is accepting applications in the St. Louis area." (and the matching sentence for the other two)
   - the market's openings list, only if it has entries; nothing if empty
   - "Call {phone}", read from `marketOperatingDetail[market].phone`
   - a link to the market contact page, for example "Contact The Sewer Pros in the St. Louis area"
   - an "Apply" link to `/careers/?market=st-louis-mo#apply`, which prefills the form's market
3. **Apply:** the form (6.6), with the file rules next to the upload ("PDF, DOC or DOCX, up to 5 MB").
4. **What happens next:** "After you submit the form, a team member contacts you." No timeframe.

### 6.5 Per-market openings data (typed, empty allowed)

A small data file, for example `data/business/careers.ts`, so roles can be added without code changes:

```text
export interface CareerOpening {
  /** Stable id, for example 'stl-technician-1'. Never shown. */
  id: string
  /** Role name exactly as the owner supplies it. Plain text. */
  title: string
  /** Optional one plain sentence. No pay, benefits, perks, schedule, headcount, start date or urgency. */
  summary?: string
}

export const careersOpenings: Record<MarketId, readonly CareerOpening[]> = {
  'st-louis-mo': [],
  'san-diego-ca': [],
  'las-vegas-nv': [],
}
```

Rendering rule: an empty list renders nothing (no heading, no "no openings" line, no placeholder). The type is keyed by `MarketId`, so a new market is a compile error until it has an entry. The verifier (section 8.3) checks that any role on the page comes from this file.

### 6.6 Form fields

| Field | Required | Notes |
|---|---|---|
| Market you are applying for | required | select: St. Louis, San Diego, Las Vegas. Prefilled from `?market=` (a market block or a market contact page), then the visitor's remembered market, never from IP or geolocation |
| Full name | required | split into first and last by the server, as the survey form does |
| Phone | required | normalized to E.164 |
| Email | required | basic format check |
| Preferred contact method | required | phone or email only; no "text", so no SMS consent is involved |
| Availability (days and times) | optional | short text |
| Type of employment desired | optional | part time, full time, temp or intern |
| Other skills or certifications | optional | short text |
| Short message | optional | plain text, length limited |
| Resume | **recommend required** | one file, PDF, DOC or DOCX, 5 MB. Required keeps submissions actionable; optional lowers friction but invites messages with nothing to review. Owner's choice |
| Honeypot `sp_ref`, Turnstile | hidden | as the other forms |

Never collected: street address, date of birth, SSN, demographic questions, supervisor or employer contact details.

### 6.7 Old fields to new fields

| Old field | New | Reason |
|---|---|---|
| Name | Full name (required) | kept |
| Phone | Phone (required) | kept |
| Street address, city, state, zip | dropped | personal data not needed to start a conversation; can be asked after contact. The market select replaces the area check. City or ZIP could return as optional if the owner wants it |
| Email | Email (required) | kept |
| Preferred contact method | kept (phone or email) | text removed so no SMS consent is involved |
| Most recent employer: title, address, phone, dates, currently working, supervisor's name, reason for leaving | dropped | the resume covers employment history; employer and supervisor details are other people's personal data, and reference checks belong later in the process |
| Education | dropped | on the resume |
| Other skills and certifications | kept (optional) | short text |
| Availability (days and times) | kept (optional) | |
| Type of employment desired | kept (optional) | part time, full time, temp or intern |
| Resume upload | kept (recommend required) | the point of the page |
| (none) | Market you are applying for (required) | new: hiring is now in three markets, and the market tag and the owner's view depend on it |
| (none) | Short message (optional) | new, lets an applicant add context without a long form |

### 6.8 Thank-you, failure and analytics

- **Success:** the browser goes to `/careers/thank-you/?market=...` only after the function accepted the request. Copy: "Thanks, your application was received. A team member will contact you." No timeframe.
- **Failure:** "We could not send your application. Please try again, or call {phone}." The phone is the chosen market's, from `marketOperatingDetail`. No new contact detail. No success message unless the server accepted the request.
- **Analytics:** ids only. Add a form type (for example `careers_application`) to the analytics form-type list; `form_start`, `form_error` and `form_submit` (the last only after the server accepted the request), with the chosen market id. Never a name, phone, email, message, file name or file content. The existing PII guard (`lib/analytics/pii.ts`) applies.

## 7. Privacy

| Finding | Detail |
|---|---|
| Privacy policy page | **None.** There is no `/privacy/`, `/terms/` or `/accessibility/` page. The slugs are reserved in `lib/routing/pathname.ts` but unbuilt |
| Footer | links Services, Locations, Who we serve and the Company group (About, Contact, FAQs, Reviews, Resources). `SiteFooter.tsx` and `navigation.ts` both record "NO LEGAL LINKS" because none was approved in doc 04 |
| What the site says about forms today | only the SMS consent copy (DEC-146). Its "See our Privacy Policy and Terms." line renders only when the two pages exist; `SMS_LEGAL_LINKS` in `lib/forms/sms-consent.ts` is `undefined` |
| Old site | its privacy, consent, conditions and accessibility links are hosted by the old web vendor and stop being linked at cutover. At cutover the new site would collect lead and resume data with no privacy page and no accessibility statement |
| What a resume upload needs | wording, with owner and legal review, that states what is collected, what it is used for, who can see it, how long it is kept, and how to ask for deletion. Not drafted here |

**Owner-review items:** a privacy policy page covering lead forms and resumes (required before launch); a retention decision (required); an accessibility statement (recommended); and whether the careers form links to the privacy page. Until a privacy page exists, the careers form should not ship.

## 8. Registration, links and verifiers

### 8.1 Registration steps (based on `/contact/` and `/reviews/`)

1. Registry: add `core-careers` and `core-careers-thank-you` to `data/pages/approved-pages.ts`; bump `EXPECTED_PAGE_COUNT` (201 to 203) and `EXPECTED_INDEXABLE_COUNT` (200 to 201) in `data/pages/pages.ts`.
2. Content: add the page content in `content/pages/`; register it in `content/index.ts` and `authoredPageIds`.
3. Routes: `app/careers/page.tsx` and `app/careers/thank-you/page.tsx`, following `app/contact/page.tsx`.
4. Template and form: `CareersPageTemplate`, `CareersForm`, a careers branch of `submit-lead.ts` (multipart instead of JSON), and the openings data file.
5. Function: `functions/api/careers.ts` and `lib/forms/careers-server.ts`; extract the shared Turnstile and GHL call helpers.
6. Analytics: add the careers form type to `lib/analytics/events.ts`.
7. Navigation: add Careers to the footer "Company" group in `data/navigation/navigation.ts`.
8. Docs: `docs/04-master-page-build-list.md` rows; a careers section in `docs/lead-routing.md` and a careers note in `docs/ghl-lead-setup.md`; a decision log entry.

### 8.2 Internal links and the anchor gate

| Link | Where | Anchor (distinct) | Counts toward |
|---|---|---|---|
| Footer "Careers" | Company group in `navigation.ts` | Careers | nothing (chrome is excluded from the inbound rule and the anchor gate) |
| About | body of `content/pages/about.tsx` | "Careers at The Sewer Pros" | inbound rule, anchor rows |
| St. Louis contact page | `contact-st-louis-mo` content in `content/pages/contact.tsx` | "Careers in the St. Louis area" | inbound rule, anchor rows |
| San Diego contact page | `contact-san-diego-ca` content | "Careers in the San Diego area" | inbound rule, anchor rows |
| Las Vegas contact page | `contact-las-vegas-nv` content | "Careers in the Las Vegas Valley" | inbound rule, anchor rows |

- **Inbound rule:** `verify-internal-links` needs 2 or more inbound links from other indexable pages' content, and footer or nav links do not count. This plan gives four (About plus three market contact pages), so it passes.
- **Anchor gate (40%):** the target `/careers/` would have 4 collapsed rows, below the 8-row threshold, so the gate is dormant. All four anchors are different, so it would also pass at any size.
- **Prefill and query strings:** `ApprovedInlineLink` resolves a page id to a path and carries no query. Links with `?market=` in the careers blocks (to the form on the same page) use a plain link; the link graph normalizes `?` and `#` away (`normHref`), so such links are safe for the link rules. The market contact page links can go to `/careers/` without a query, since the form then falls back to the visitor's remembered market. A small `query` option on the inline link component would let them prefill too (optional).
- **Cross-market rule:** a market contact page linking to the market-agnostic `/careers/` is not a cross-market link. The careers page links to all three market contact pages, which is allowed from a market-agnostic page.
- **Noindex rule:** the thank-you page must not be linked from any page.

### 8.3 Verifiers

| Check | Effect |
|---|---|
| Count assertions in `data/pages/pages.ts` | must be bumped or the build fails |
| `verify-internal-links` | inbound rule (above), hierarchy and breadcrumb rules, the market contact pages' "link the FAQ and two audience pages" rule is unaffected by one more link |
| `verify-meta` | title and description length, width and uniqueness |
| `verify-editorial-keywords` | a core page is not audited unless it has an entry in the fixed map (`scripts/lib/editorial-keywords.mjs`); add one (primary "careers") so the title, meta and H1 are checked |
| Removal audit (`audit-commercial.mjs`) | scans the new pages and docs; avoid commercial wording |
| **`scripts/verify-lead-routing.mjs` (extend)** | see below |
| New careers validation check | unit-style check of the careers function: type, size and signature rules, the unknown-field rejection, and reply codes |

Proposed additions to `scripts/verify-lead-routing.mjs`:

1. Every market in `marketList` has a careers tag in the careers function (`careers-st-louis`, `careers-san-diego`, `careers-las-vegas`, derived from the same market keys as the lead tags) and a row in the careers table of `docs/lead-routing.md`.
2. The recipient on every careers row (`website-careers`, `form-careers` and the three market tags) equals `info@thesewerpros.com`.
3. A careers tag never matches a `market-*` workflow trigger: none contains `market-`, and none equals `website-lead`, `form-contact`, `form-survey` or a lead `market-*` tag. The careers function must not import or call `leadTags`.
4. The careers function never sets the `market` custom field or SMS consent fields.
5. A copy check on the built `/careers/` page: no "office", "branch", "local team" or "our ... location"; no "free"; no superlatives ("best", "top", "leading"); no pay, benefits, perks, schedule or urgency words ("$", "per hour", "salary", "benefits", "now hiring", "urgent"); and any role title shown must exist in `careersOpenings` (so an invented role fails the build). The page shows no email address.

## 9. Redirect finding for `/careers`

- The old URL is `/careers` with no trailing slash. The new site builds `/careers/` (`trailingSlash: true` in `next.config.ts`).
- `docs/20-migration-redirect-plan.md` does not mention careers. It records that no redirect is implemented, that there is no `public/_redirects` (the repo has `public/_headers` only, from DEC-154), and that the full legacy URL inventory is not in the repo (PENDING-010, in progress).
- **Gap:** `/careers` is not in the inventory or the plan.
- **Likely behaviour, to confirm on a preview host:** Cloudflare Pages normally answers `/careers` with a single redirect to `/careers/` when the page is built as `careers/index.html`, so no chain and no `_redirects` entry would be needed. The repo cannot prove this. Add `/careers` to the PENDING-010 inventory as a retained URL with `/careers/` as its destination, and test it on the preview before cutover. If the preview does not redirect, add one explicit `/careers /careers/ 308` line.

## 10. Inputs needed from the owner

| Input | Needed for | Status |
|---|---|---|
| Approve storage option A (GHL file attach), with option B as the fallback | storage | required |
| Create a File Upload custom field on contacts in GHL and run one test upload to confirm the endpoint, field-name format and token scope | option A | required |
| R2 bucket and Pages binding | option B only | optional (fallback) |
| One GHL workflow on the `website-careers` tag that notifies `info@thesewerpros.com` (recipient already decided) | notification | required |
| Confirm the three `market-*` lead workflows trigger on "tag added" and not on "contact created" or "contact updated" | routing | required |
| Role names per market, if wanted (they go in as data; an empty list is fine) | openings | optional |
| Privacy policy page for lead forms and resumes, a retention decision and an accessibility statement | launch | required (privacy and retention), optional (accessibility) |
| Resume required or optional | form | required decision (recommend required) |
| Whether DOC stays an allowed type | file rules | optional (recommend PDF and DOCX only) |
| File size limit (default 5 MB) | file rules | optional |
| Add `/careers` to the PENDING-010 inventory and test the redirect on a preview | migration | required |
| Cloudflare rate limiting rule on `/api/careers` | abuse | optional |
| Whether applicants who are also customers may share one GHL contact, or a separate careers location | data separation | optional |
