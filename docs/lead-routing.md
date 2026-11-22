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
  |  adds tags, adds a note with the request details, writes custom fields
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

Custom fields written: `market`, `source_page`, `preferred_contact_method`, and the SMS consent fields (`sms_nonmarketing_consent`, `sms_marketing_consent`, `sms_consent_version`, `sms_consent_timestamp`) only when a consent box was checked.

## 3. Market, tag and recipient

The recipient is the address the site already publishes for that market (`marketOperatingDetail` in `data/markets/markets.ts`). The owner can change a recipient in GHL at any time; if the published address changes, update this table in the same commit as the data file (`scripts/verify-lead-routing.mjs` checks that they agree).

| Market | Tag | Recipient |
|---|---|---|
| St. Louis | `market-st-louis` | info@thesewerpros.com |
| San Diego | `market-san-diego` | admin@thesewerpros.com |
| Las Vegas | `market-las-vegas` | bookaninspection@thesewerpros.com |

Do not add a recipient that the site does not publish.

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
