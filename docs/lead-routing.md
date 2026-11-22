# Lead routing: how a form request reaches the right market

Status: the site side is built (DEC-147). Per-market notification email is configured in GoHighLevel (GHL), not in site code. This document is the owner's checklist and the reference for the tag names. It makes no promise about how quickly anyone replies.

## 1. The flow

```text
Visitor fills a form (survey form or contact form)
  |  the form needs a market before it will send
  v
POST /api/lead                      Cloudflare Pages Function (functions/api/lead.ts)
  |  checks: honeypot, minimum time, rate limit, Cloudflare Turnstile
  v
GoHighLevel contact upsert          (by phone or email; no duplicate contacts)
  |  writes the custom fields, adds a note, then removes and re-adds the market tag
  v
GHL workflow per market tag         one workflow per tag emails that market's address
  |
  v
The market's published address      a person follows up
```

- The site sends no email itself. `NEXT_PUBLIC_LEAD_ENDPOINT` is retired.
- The visitor reaches `/contact/thank-you/?market=...` only after the function accepted the request. If it did not, the visitor sees "We could not send your request" with that market's published phone number.
- The function replies only ok or not ok and never logs names, phone numbers, emails or messages.

## 2. Tags the function adds

Read from `lib/forms/lead-server.ts` (`leadTags`, `FORM_TYPES`, `MARKETS`). Tags are added, never overwritten, and no marketing tag is ever added.

| Tag | When |
|---|---|
| `website-lead` | every lead |
| `form-contact` | the contact form (`contact_request`, the `/contact/` pages) |
| `form-survey` | the survey form (`general_service`, every other page) |
| `market-st-louis` | the lead's market is St. Louis |
| `market-san-diego` | the lead's market is San Diego |
| `market-las-vegas` | the lead's market is Las Vegas |

There is no service tag. The service the visitor asked about is in the contact's note ("Service requested") and the page they came from is in the `source_page` custom field. A lead with no known market gets no `market-*` tag, and the `market` custom field reads `none`.

Re-fire: GHL fires "Tag added" only for a newly added tag, so on every submission the function removes the lead's `market-*` tag (`DELETE /contacts/{id}/tags`) and adds the tags again, after the custom fields and the note are saved. A failed remove is logged and the add still runs. `website-lead` and `form-*` are never removed. In GHL set "Allow Duplicate Contact" off and match on Phone.

Custom fields written: `market`, `source_page`, `preferred_contact_method`, `service_requested` (label), `inquiry_message` and `service_location` (city or ZIP; these two are written even when empty), and the SMS consent fields (`sms_nonmarketing_consent`, `sms_marketing_consent`, `sms_consent_version`, `sms_consent_timestamp`) only when a consent box was checked.

## 3. Market, tag and recipient

The recipient is the address the site already publishes for that market (`marketOperatingDetail` in `data/markets/markets.ts`). The owner can change a recipient in GHL at any time; if the published address changes, update this table in the same commit as the data file (`scripts/verify-lead-routing.mjs` checks that they agree).

| Market | Tag | Recipient |
|---|---|---|
| St. Louis | `market-st-louis` | info@thesewerpros.com |
| San Diego | `market-san-diego` | admin@thesewerpros.com |
| Las Vegas | `market-las-vegas` | bookaninspection@thesewerpros.com |

Do not add a recipient that the site does not publish.

## 3A. Careers applications (DEC-160)

Careers applications are a separate flow. Their recipient is separate from the `market-*` lead recipients above: **every careers submission, in every market, goes to `info@thesewerpros.com`.** The market tag is kept only so the owner can see which area the applicant chose.

```text
Visitor fills the careers form on /careers/ (market required, resume optional)
  v
POST /api/careers                   Cloudflare Pages Function (functions/api/careers.ts)
  |  checks: honeypot, minimum time, rate limit, Cloudflare Turnstile, resume type, size and signature
  v
GoHighLevel contact upsert          (by phone or email; merges with an existing lead contact)
  |  writes the custom fields, attaches the resume to a File Upload custom field, adds a note with the answers, then removes and re-adds website-careers with the other careers tags
  v
One GHL workflow on website-careers   internal notification to info@thesewerpros.com
```

| Tag | When | Recipient |
|---|---|---|
| `website-careers` | every careers application | info@thesewerpros.com |
| `form-careers` | every careers application | info@thesewerpros.com |
| `careers-st-louis` | the applicant chose the St. Louis area | info@thesewerpros.com |
| `careers-san-diego` | the applicant chose the San Diego area | info@thesewerpros.com |
| `careers-las-vegas` | the applicant chose the Las Vegas Valley | info@thesewerpros.com |
| `careers-resume-failed` | a resume was sent but could not be attached (not a routing tag) | none (filter or review only) |

- One workflow triggered when `website-careers` is added is enough. The market tags exist for filtering and visibility.
- No careers tag contains `market-`, and the careers function never adds `website-lead`, `form-contact`, `form-survey` or a `market-*` tag, so the per-market lead workflows cannot match a careers contact. `scripts/verify-lead-routing.mjs` checks this.
- The careers function writes `market` (the label the applicant chose), `inquiry_message`, `preferred_contact_method` and `source_page`, plus the resume File Upload field. Writing the `market` field is safe because routing is by tag only; the function never adds a `market-*` tag. It removes then re-adds `website-careers` after the note and resume, so a returning applicant fires the workflow again.
- An applicant who is already a customer lead merges into the same GHL contact (the upsert matches on phone or email).
- No new address is published. The careers page shows no email address, only each market's phone from `marketOperatingDetail`.

**Resume failed handling.** If a resume was sent but the attach step fails or is not configured, the contact, tags and note are still saved, the contact gets `careers-resume-failed`, the note says the resume could not be attached, and the visitor sees: "We received your application, but we could not attach your resume. Please call [market phone] and we will take it from there." Review `careers-resume-failed` contacts regularly and ask the applicant to send the resume another way. If the contact itself cannot be created or the tags or note cannot be saved, the visitor sees "We could not send your application" with the market phone and no thank-you page opens.

**Owner checklist for careers.**
1. In GHL, create a File Upload custom field on contacts (for example "Resume") and copy its id. Set `GHL_CAREERS_RESUME_FIELD_ID` in Cloudflare Pages (encrypted variable; never in the repo or in chat).
2. Add the `forms.write` scope to the Private Integration token (the lead function only needs `contacts.write`). Without it the attach step fails safe and applicants see the call message.
3. Create one workflow triggered when the tag `website-careers` is added that sends an internal notification to `info@thesewerpros.com`.
4. Confirm each of the three `market-*` lead workflows triggers on "tag added" with its exact tag, and not on "contact created" or "contact updated". A broader trigger would fire on a careers contact.
5. Test one application per market with a fake name and a phone you control (never a real applicant), once with a PDF and once with a DOCX. Check the contact, the three tags, the note, the attached resume and the notification email. Then submit once with the resume field id unset in a preview and check the `careers-resume-failed` tag and the call message. Delete the test contacts.
6. Privacy policy, terms and accessibility pages must exist and be linked before production cutover (see docs/22 PENDING-020).

## 4. Owner checklist

In Cloudflare Pages (names only, never values in the repo or in chat):
1. The variables `GHL_PRIVATE_INTEGRATION_TOKEN`, `GHL_LOCATION_ID` and `TURNSTILE_SECRET_KEY` are set for Production (secrets stay encrypted).
2. The function is deployed. Pages picks up `functions/` from the repo root with no build setting change.

In GoHighLevel:
3. One workflow per tag in section 3, triggered when the tag is added, that sends an internal notification email to that market's recipient.
4. The seven custom fields exist (see `docs/ghl-lead-setup.md`).

Test, one lead per market, using a fake name and a phone you control (never a real customer's number):
5. Submit the form from a page in each market.
6. Check the contact, the three tags (`website-lead`, a `form-*` tag, the `market-*` tag), the note and that market's notification email arrived.
7. Check the redirect to the thank-you page, then break the send on purpose (for example in a preview without the variables) and check the failure message shows the right market's number and no thank-you page opens.
8. Delete the test contacts.

## 5. Upgrade path: a separate GHL location per market

If a market later gets its own GHL account, `LEAD_ROUTING.byMarket` in `lib/forms/lead-server.ts` is the marked place. Add one environment variable per market holding that location id and read it in `locationIdFor`. Until then every lead goes to the single location in `GHL_LOCATION_ID`. Do not create separate addresses or pipelines before the owner decides.

## 6. If an email service is ever needed

Sending mail from the function (instead of GHL) would need a sending service, a sender domain with SPF and DKIM set up, and a typed recipient table that reads `marketOperatingDetail`. That work is not started. See `docs/reports/email-and-form-routing-audit.md`, section 4, option C.
