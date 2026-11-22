# Verifier cleanup (2026-11-22)

Five checks were red on `main` before the Nov 22 internal linking work. Each was diagnosed on the current build (`out/`). All are now green, and `npm run verify` runs the whole chain (32 checks).

| Check | Failing assertions | Cause | Outcome | Reason |
|---|---|---|---|---|
| `verify-city-page` | `no forbidden claims: reviews` | The footer link "Reviews" to `/reviews/` was added with the Reviews page (74ef0c1). The check scans all page text for the word "reviews". | Check update | The footer link is sitewide chrome, not St. Louis City page copy. The `/reviews/` anchor is removed from the scanned text; the forbidden-word list is unchanged. |
| `verify-florissant-page` | `"reviews" only as the City Engineer reviewing a report` | Same footer link. | Check update | Same reason, same change. |
| `verify-st-charles-page` | `#reviews shows "4.9" and "from 595 Google reviews"`, `... "as of September 1, 2026"`, `review, rating and star wording appears only in the band` | The band is now fed by the merged St. Louis and San Diego review data (879 ratings, verified 2026-11-22), so the hardcoded 595 and September 1 were stale. The third assertion tripped on the footer "Reviews" link. | Check update | The expected rating, count and date are now read from `ratingSnapshot` in `data/reviews/reviews.ts`, the one source the band renders, so a data refresh cannot make the check stale again. The footer link is excluded as chrome. The "wording only in the band" rule is unchanged. |
| `verify-meta` | `descriptions are 110 to 160 characters and under about 920px`: `/reviews/` was 162 characters, 974px | The `/reviews/` meta description (core.tsx) was too long. | Site fix | The description is shortened to "Read Google reviews of The Sewer Pros from St. Louis and San Diego customers on camera inspections, pre-purchase scopes, and cleaning." The limits are unchanged. |
| `audit-commercial.mjs` | One class C (wording) hit: `scripts/audit/run-link-audit.mjs:62`, the check label `commercial-leftover` | A false positive on the audit script's own guard, which flags links to removed routes. No commercial page, route, registry, schema or link was found (A 0, B 0, C 0 after the fix). | Check unchanged, label renamed | The label is now `removed-route-link`. The remaining D (ambiguous) hits are owner-decision items that never fail the audit; the retained-content checks (property managers, multifamily, real estate) all pass. |
| `verify-unique-metadata` | none (passing) | It checked title and description presence, uniqueness and canonical equality. `verify-meta` already checks all of these plus length, similarity, banned wording and Open Graph. | Retired | One source of truth for metadata. `npm run verify:metadata` now runs `verify-meta.mjs`. |

## New: one verify chain

`npm run verify` (`scripts/run-verify.mjs`) runs every `scripts/verify-*.mjs` and the commercial-removal audit in `--no-write` mode, and exits 1 if any fails. Run `npm run build` first.

## Decisions the owner may want to reverse

- Retiring `verify-unique-metadata` (its job is a subset of `verify-meta`).
- Treating the footer "Reviews" link as chrome in the three page checks, rather than banning review wording from the footer.
