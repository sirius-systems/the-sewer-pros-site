# Audit: customer-facing emails and form delivery state

Basis: `main` at b648420 plus the local build in `out/` (203 pages). Read-only. No source, data, content or verifier file was changed. This report is the only file created, and it is not committed. No secret value is printed here.

## 0. Headline findings

1. **Every email on the site matches its market.** St. Louis shows `info@thesewerpros.com`, San Diego shows `admin@thesewerpros.com`, Las Vegas shows `bookaninspection@thesewerpros.com`. No San Diego page shows `info@`. No market page shows another market's address. Market-agnostic pages show all three, labelled by city.
2. **The premise in the prompt is out of date.** Forms are not unwired. DEC-147 (2026-10-12) built a Cloudflare Pages Function, `POST /api/lead` (`functions/api/lead.ts`, logic in `lib/forms/lead-server.ts`), that creates or updates a GoHighLevel (GHL) contact. `NEXT_PUBLIC_LEAD_ENDPOINT` is retired and no longer read. Two documents still say the opposite (see section 3.6).
3. **The site sends no email.** A submission becomes a GHL contact with tags and a note. Any email to the business happens inside GHL (notifications or workflows), outside this repo. There is no sending service, sender domain or recipient table in the code.
4. **Per-market routing has a placeholder, not an implementation.** `LEAD_ROUTING` in `lib/forms/lead-server.ts` is marked as the place to add it. Today every lead goes to the one GHL location in `GHL_LOCATION_ID`, and the market is a tag and a custom field.
5. **Not verifiable from the repo:** whether the Cloudflare Pages variables are set and the function is deployed. `PENDING-018` is marked "BUILT; TESTED ... NOT DEPLOYED; CLOUDFLARE VARIABLES AND A DEPLOY STILL REQUIRED" (as of 2026-10-12). The repo cannot show whether that has since happened.
6. **No `tracy@` address appears anywhere.** No token or secret is committed (only `.env.example` is tracked; `.dev.vars` and `.env.local` are gitignored).

## 1. Every email occurrence

26 source hits in 11 files, plus the rendered output. Kinds: Data = typed data file, Copy = visible text, Link = `mailto:`, LD = JSON-LD, Comment = code comment, Docs = documentation.

### 1.1 Source

| File:line | Address | Market context | Kind | Status |
|---|---|---|---|---|
| `data/markets/markets.ts:256` | `info@thesewerpros.com` | St. Louis (`marketOperatingDetail['st-louis-mo'].email`) | Data | Source of truth. Correct |
| `data/markets/markets.ts:268` | `admin@thesewerpros.com` | San Diego | Data | Source of truth. Correct (DEC-097 moved San Diego from `info@` to `admin@`) |
| `data/markets/markets.ts:292` | `bookaninspection@thesewerpros.com` | Las Vegas | Data | Source of truth. Correct |
| `content/pages/las-vegas.tsx:559-560` | `bookaninspection@thesewerpros.com` | Las Vegas hub contact panel | Copy and Link (hardcoded label and `mailto:`) | Correct, but hardcoded (see section 2) |
| `data/business/organization.ts:108` | `info@thesewerpros.com` | St. Louis (`organization.contactPoints[0]`) | Data | Hardcoded. Nothing reads `organization.contactPoints`; the JSON-LD `contactPoint` is built separately in `lib/schema/organization.ts` from market data and carries phones only |
| `data/business/organization.ts:129` | `info@thesewerpros.com` | St. Louis (`contact.email`) | Data | Hardcoded. `contact.phone` is used by St. Louis pages; no reader of `contact.email` was found |
| `content/pages/san-diego-carlsbad.tsx:660, 827` | `wastewater@carlsbadca.gov` | Carlsbad location page | Copy | **Third party** (City of Carlsbad), shown as the City's own contact. Not a company address. Pinned by `scripts/verify-carlsbad-page.mjs:227` |
| `docs/19-analytics-measurement.md:2148` | `customer@example.com` | n/a | Docs | An example URL showing what must not go into analytics |
| `docs/22-decisions-change-log.md` (12 lines: 1886, 2229, 3054-3056, 3690, 3694-3696, 3704, 3708, 3712) | the three addresses | history of DEC-083 and DEC-097 | Docs | History. Lines 3055 and 3704 record San Diego as `info@` before DEC-097 changed it to `admin@`; they are superseded by lines 3690, 3695 and 3708 |
| `docs/audits/second-opinion/page-export-2026-11-22.md:979-983` | the three addresses | footer table in the page export (untracked) | Docs | Rendered footer links, correct |

No `.ts`, `.tsx`, `.json` or `public/` file outside the table holds an email.

### 1.2 Rendered output (all 203 built pages)

Where the addresses appear, by page group:

| Pages | In `<main>` | In footer | In JSON-LD |
|---|---|---|---|
| St. Louis pages (hub, 5 locations, 45 service-plus-location, lateral reporting, market contact: about 52) | none, except the St. Louis contact page: `info@` | `info@` only | none |
| San Diego pages (hub, 7 locations, 63 service-plus-location: about 62) | none, except the San Diego contact page: `admin@` | `admin@` only | none |
| Carlsbad pages (10) | `wastewater@carlsbadca.gov` (City contact) | `admin@` only | the Carlsbad FAQ text carries the City address |
| Las Vegas pages (hub, 4 locations, 36 service-plus-location: about 42) | Las Vegas hub and contact page: `bookaninspection@`; other pages none | `bookaninspection@` only | none |
| Market-agnostic: `/`, `/contact/`, `/services/` | all three, labelled by city (routing cards) | all three | none |
| Market-agnostic: About, compare, resources, audiences, FAQ, 404, `/locations/` and the rest (about 32) | none, except `/locations/` (all three) | all three | none |

### 1.3 Mismatches

- **San Diego page showing `info@`:** none.
- **Market page showing another market's address:** none. The footer is market-aware (`components/layout/FooterContacts.tsx`): on a `/{market}/...` or `/locations/{market}/...` path it shows only that market's block.
- **Address that does not match its page:** none. The only non-company address is the Carlsbad City contact, which is third party by design.
- **Company email in JSON-LD:** none anywhere (Organization `contactPoint` entries carry telephone and area only).
- **Note on the market-agnostic pages:** showing all three addresses there is intended (`ContactSections`, `RoutingCards`, footer), each labelled with its city and phone.

## 2. Source of truth versus hardcoded

| Where an email comes from | Used by |
|---|---|
| `marketOperatingDetail` (`data/markets/markets.ts`) | footer (`FooterContacts.tsx`), `/contact/` and market contact pages (`ContactSections.tsx`), routing cards (`RoutingCards.tsx`), service-plus-location template (`ServiceLocationPageTemplate.tsx`) |
| **Hardcoded** | 1. `content/pages/las-vegas.tsx:559-560`, the Las Vegas hub's contact panel (label and `mailto:` typed in; currently equal to the data value). 2. `data/business/organization.ts:108` (`contactPoints`) and `:129` (`contact.email`), both St. Louis `info@`, with no reader |
| Third party, typed in copy | `wastewater@carlsbadca.gov` (Carlsbad) |

If a market's address changes, the data file updates every consumer except the three hardcoded sites above, which would drift. Neither the San Diego nor the St. Louis hub shows an email, so the Las Vegas hub is the only content file that hardcodes a company address.

## 3. Form delivery state

### 3.1 In plain words

A visitor who fills in a form and presses send is posting to `/api/lead` on the same site. If the Pages Function is deployed and its variables are set, the function validates the request, checks Cloudflare Turnstile, upserts a GHL contact, adds tags and a note, and returns only "ok". The visitor is then taken to `/contact/thank-you/?market=...`. If the function is missing, misconfigured or rejects the request, the visitor sees "We could not send your request. Please try again, or call {the market's number}." and no thank-you page. No success message is shown unless the server accepted the request.

### 3.2 What exists in the repo

| Item | State |
|---|---|
| `functions/api/lead.ts` | exists: `onRequestPost` wired to `handleLead`; any other method returns 405 |
| `lib/forms/lead-server.ts` (504 lines) | validation, spam checks, Turnstile, GHL upsert, tags, note, rate limit |
| `lib/forms/submit-lead.ts` | `POST /api/lead` from the browser; `LEAD_ENDPOINT = '/api/lead'` |
| `lib/forms/turnstile.ts` | widget helper; the site key is a public constant in the file (public by design) |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | **retired**: `.env.example:51` says it is no longer read. It appears nowhere in code |
| Server variables (names only) | `GHL_PRIVATE_INTEGRATION_TOKEN`, `GHL_LOCATION_ID`, `TURNSTILE_SECRET_KEY`; test hooks `GHL_API_BASE`, `TURNSTILE_VERIFY_URL` (leave unset). Present locally in `.dev.vars` (gitignored). `.env.local` holds `NEXT_PUBLIC_SITE_URL` and `TURNSTILE_SECRET_KEY` |
| `wrangler.toml`, `_routes.json` | neither exists. Pages picks up `functions/` from the repo root with no build-setting change (`docs/ghl-lead-setup.md`) |
| `public/_headers` | exists (DEC-154, noindex on `*.pages.dev` only) |
| Other form-service integration | none |

### 3.3 PENDING-018

Status in `docs/22-decisions-change-log.md:2067`: "BUILT; TESTED AGAINST A MOCK AND ONCE AGAINST THE LIVE GHL FROM A LOCAL RUN; NOT DEPLOYED; CLOUDFLARE VARIABLES AND A DEPLOY STILL REQUIRED (updated 2026-10-12, DEC-147)". The build side is closed; the deploy and the Cloudflare variables are open as far as the repo records. Whether they were completed later is not in the repo.

### 3.4 Where the forms are

Two live form components. Every built page that has a form carries the honeypot field and a Turnstile container.

| Component | Used on | Fields sent |
|---|---|---|
| `SurveyLeadForm` (`general_service`) | home, services, audiences, market hubs, location pages, service-plus-location pages, the service-page hero cards (about 190 pages) | service, "Service location?" pill, optional property type, full name (split into first and last), phone, email, preferred contact, message, two SMS consent checkboxes |
| `ContactForm` (`contact_request`) | `/contact/` and the three market contact pages | market radio, issue, follow-up, first name, phone, ZIP, email, preferred contact, appointment window, message, two SMS consent checkboxes |
| `LeadFormSection` | referenced by 7 files (templates and `HeroRequestCard`) | its `handleSubmit` is still a documented stub that sends nothing. **No built page renders it** (none of the 203 pages carries its `lastName` field) |

Risk: a template that still names `LeadFormSection` would render a form that sends nothing if a page ever used it. It is dead in the current build. Retiring or rewiring it is a cleanup, not a launch blocker.

### 3.5 Payload and routing inputs

Fields in `LeadPayload`: `marketId`, `issue`, `followUp`, `firstName`, `lastName`, `phone`, `email`, `zip`, `contactMethod`, `appointmentWindow`, `message`, `sourcePath`, optional `locationId`, `serviceLocation`, `propertyType`, `smsNonMarketingConsent`, `smsMarketingConsent`, `smsConsentVersion`, `formType`, `spRef` (honeypot), `turnstileToken`, `formOpenedAt`. The server rejects unknown fields, wrong types and over-long values.

**Is `marketId` always present?** From the browser, yes: both forms block the submit until a market is known. `ContactForm` requires a market choice ("Choose your location"), prefilled from `?market=`, the page's own market, or a remembered choice. `SurveyLeadForm` derives the market from the chosen service location; on a market-less page there is a required "Service location?" step with an "other area" pill per market. On the server, `marketId` falls back to the market in `sourcePath`, and a direct post with neither is labelled `none` and gets no market tag.

**How market is determined on `/`, `/contact/`, `/services/*`:** the visitor picks it (location pill or market radio). Nothing is inferred from the visitor's location. On market pages the form is pre-set to that market.

**What reaches GHL:** an upsert by phone or email (no duplicates), tags `website-lead`, `form-general_service` or `form-contact_request` style form tag, and `market-st-louis` / `market-san-diego` / `market-las-vegas` (omitted for `none`), a note with the request details, and custom fields (`market`, `source_page`, `preferred_contact_method`, and the SMS consent fields only when a box was checked). Do Not Disturb is deliberately not set.

**Spam and abuse controls:** honeypot input `sp_ref` (a filled value is dropped), a minimum of 2 seconds from first interaction (a faster submit gets a "press send again" retry), a 24-hour maximum age, a 16 KB body cap, a per-IP in-memory rate limit of 5 per 10 minutes (per isolate, so best effort, not a global cap), and Cloudflare Turnstile verified server-side. With no `TURNSTILE_SECRET_KEY` the function refuses every lead (fails closed).

**After success:** the browser goes to `/contact/thank-you/?market={market}` (noindex). Analytics events: `form_start` on first interaction, `market_select` and `service_select`, `form_error` on validation errors and `form_submit` (the conversion) only after the server accepted the request. Events carry ids only (market, service, location, form type); never names, phone, email, address or message text.

### 3.6 Stale statements to correct

- `docs/00-project-overview.md:30` says nothing is sent and `NEXT_PUBLIC_LEAD_ENDPOINT` is unset.
- `README.md:37` says "Nothing is sent yet" and describes the old environment variable.
- `components/sections/location/HeroRequestCard.tsx` and `LeadFormSection.tsx` comments say nothing submits.
- These are documentation and comments only; they do not change behavior.

## 4. Recommended routing design

Start from what already exists: the function already records the market as a tag and a custom field, and the code names a placeholder (`LEAD_ROUTING`) for per-market routing. Nothing sends email today, so "routing" means one of three things.

### Option A: route inside GHL (recommended first step, reversible, no code)

Use the existing `market-st-louis`, `market-san-diego` and `market-las-vegas` tags. In GHL, create one workflow or internal notification per tag that emails that market's address (`info@`, `admin@`, `bookaninspection@`) and assigns the contact to the right user or pipeline. Cost: a GHL configuration task and a test submission per market. Reversal: disable the workflow. No code, deploy or sender-domain work on the site side.

### Option B: separate GHL location per market (uses the placeholder)

Set one environment variable per market holding that market's GHL location id, add the three names to `LEAD_ROUTING.byMarket`, and read them in a small `locationIdFor(market)` helper in `lead-server.ts`. The default stays `GHL_LOCATION_ID` for `none`. This only makes sense if each market is a separate GHL sub-account, which is a business structure decision.

### Option C: send email from the Pages Function

Add a sender (a transactional email service called from `lead-server.ts`) and a typed recipient table in one data file, for example `data/business/lead-recipients.ts`:

```text
type MarketKey = 'st-louis' | 'san-diego' | 'las-vegas'
leadRecipients: Record<MarketKey, string>   // values from marketOperatingDetail, never retyped
fallbackRecipient: string                    // for market 'none'
```

The recipients should be derived from `marketOperatingDetail[...].email` so there is one source of truth. The function would send after the GHL calls succeed (so the lead is never lost if mail fails), log only a request id and status codes, and never put personal data in logs. Use this only if GHL notifications are not enough.

### Reversible defaults

- Market of record: the form-chosen market, falling back to the market in `sourcePath`, then `none`.
- A `none` lead goes to the single default (`GHL_LOCATION_ID` today, or a named fallback recipient in Option C).
- Never send to an address the site does not already publish for that market.
- Keep the reply at only ok or not ok, and keep PII out of logs and analytics.

### What is needed from the owner

| Input | Needed for | Notes |
|---|---|---|
| Choice of A, B or C | all | A needs nothing from DNS or a sender service |
| Who should receive each market's notifications, and whether the three published addresses are the right recipients | A and C | the repo already publishes one address per market; confirm they are monitored and should receive lead alerts |
| Whether GHL is a single location or one per market | B | a business structure decision |
| Sending service, sender domain, and SPF and DKIM state for `thesewerpros.com` | C only | not recorded anywhere in the repo; mail sent from a domain without aligned SPF and DKIM may be filtered |
| Confirmation that the three Cloudflare Pages variables are set and the function is deployed | all | the repo cannot show this; do a test submission per market with a fake name and a phone you control, then delete the test contact (`docs/ghl-lead-setup.md`) |
| Rotation owner for the GHL token | all | GHL recommends every 90 days |

### Suggested order

1. Confirm deploy state and run one test lead per market (no code).
2. Set up Option A in GHL.
3. Only if needed, decide B or C.
4. In a separate cleanup: correct the two stale statements in section 3.6, point the Las Vegas hub at the data value instead of the hardcoded string, and retire the unused `LeadFormSection` stub and the unused `organization.contactPoints` and `contact.email` constants.
