> Historical snapshot, written 2026-10-12. Current baselines: 198 approved pages (201 HTML files in out/), 197 sitemap URLs, 11 service records, 6,369 service + location matrix rows, 10 audience ids, 579 locations, 0 placeholder boxes, 30 image files (929 boxes on the shot list, all wired). See docs/image-placeholder-inventory.md and the decisions log for the current state.

# Multifamily verification

Date: Oct 12, 2026. Verification of commit `eb0fdd6` (multifamily section on `/for/property-managers/`). Nothing was changed except this file.

## 1. Audit exclusion rule

The only change to the audit script (`scripts/`, the file named in step 5) in `eb0fdd6` is line 74:

```js
const OWN_DOCS = /^docs\/(commercial-removal-(audit|inventory|verification)|property-manager-restore|multifamily-page-decision)\.md$/
```

The expression is anchored with `^` and `$` and every alternative is a literal file name, so it matches only these exact paths and no others:

- `docs/commercial-removal-audit.md` (existing)
- `docs/commercial-removal-inventory.md` (existing)
- `docs/commercial-removal-verification.md` (added)
- `docs/property-manager-restore.md` (existing)
- `docs/multifamily-page-decision.md` (added)

It is not broader than the two paths added. No narrowing was needed. Note that `docs/multifamily-verification.md` (this file) is not excluded; it avoids the audited words.

## 2. Production build

`NEXT_PUBLIC_SITE_URL=https://www.thesewerpros.com npm run build` exit 0.

| Measure | Expected | Found |
|---|---|---|
| HTML documents in `out/` | 200 | 201 files: 200 `index.html` (198 approved pages plus the two framework documents counted before) and `404.html` |
| Sitemap URLs | 197 | 197 |
| Placeholder boxes | 393 | **528 visible boxes on 160 pages. Does not match.** |

Placeholder reconciliation. Counting only the drawn box (`<p class="font-semibold text-foreground">Image slot: `, not the duplicate copy in the page data), by page type:

| Page type | Boxes now | Documented (`docs/image-placeholder-inventory.md`) |
|---|---|---|
| Location hubs (16 pages) | 159 | 159 (match, page by page for the three spot checks) |
| Service + location (144 pages) | 369 | 225 |
| Core service pages | 0 | 9 on 2 pages |
| Total | 528 | 393 |

- The 144-box gap on service + location pages is exactly one box per page: the shared slot `slc-services-section` in `components/templates/ServiceLocationPageTemplate.tsx`. The inventory doc does not mention that slot, so the documented 225 omits it. This is a documentation gap, not a change caused by the multifamily work (that template file was not touched).
- The core service pages no longer draw the 9 documented `Image slot:` boxes. `/services/sewer-camera-inspection/` renders its root-intrusion image file, and `/services/recurring-sewer-backup-diagnosis/` draws 14 dashed boxes in a different markup. The inventory's 9 was counted another way, so I could not reproduce it.
- A naive count of the string `Image slot:` gives 1,056 and the old audit pattern gives 1,065, because the page data repeats each box. Those numbers are not box counts.
- Pages with at least one box: 160, against 162 documented. The 393 and 162 in `docs/image-placeholder-inventory.md` need re-deriving; I did not edit them because this task allows changing only this file.

## 3. Multifamily section and FAQs: claim check

Source: `content/pages/audiences.tsx` lines 520 to 596 (section) and 629 to 676 (FAQs). Full text as published:

**H2:** Multifamily homes: duplexes, fourplexes and residential apartment buildings

Owners and managers of multifamily homes ask the same question as anyone with a recurring backup: where does it start, and what can be shown for it? The answers below apply to duplexes, fourplexes and residential apartment buildings.

**H3:** When several units share one sewer line, how do you find where a backup starts?

Start with a sewer camera inspection of the shared lateral or main line. The camera records video of the accessible line, so the place where a restriction sits can be seen rather than guessed at.

In a multifamily home, more than one unit can drain to the same lateral or main line, and a backup that shows up in one unit may start further along the line than the unit that notices it. A camera inspection documents what is visible in the accessible part of the line, such as roots, an offset joint or buildup, and where along the line it is. That helps separate a problem in one unit's fixture from a condition in the line the units share.

Next step: read how a sewer camera inspection works, or how recurring sewer backup diagnosis looks for the cause of a backup that keeps coming back. (links to the camera inspection and recurring backup diagnosis pages)

**H3:** What can be shared with owners, managers and buyers?

The inspection video and the written findings. When a camera is used, you receive both, and either can go to an owner, a manager or a buyer who needs to see the same evidence.

The findings describe what was visible in the accessible line. They are not a repair recommendation: The Sewer Pros does not perform sewer repairs or replacements, so the findings stay separate from a repair sale.

Next step: see how an independent inspection differs from a repair company's. (link to the comparison page)

**H3:** Is there a pre-purchase sewer inspection for a multi-unit home?

Yes. A pre-purchase sewer inspection documents the visible condition of the accessible sewer line before you close, and a multi-unit home has the same need as a single-family one.

In a multifamily home, the line that serves several units is the part worth seeing on video before closing. The video and written findings give a buyer, and the people advising the buyer, the same documented picture of what the camera could reach.

Next step: read about a pre-purchase sewer inspection, or the page for home buyers. (links to the pre-purchase and home buyers pages)

**FAQs (5, in the page's FAQPage schema with the 2 existing, 7 total):**

1. Which multifamily properties does the multifamily section cover? Duplexes, fourplexes and residential apartment buildings. Property managers of rental homes are covered by the rest of this page.
2. Who receives the inspection video and written findings? You do. When a camera is used, the inspection video and the written findings come to you, and you can share them with an owner, a manager or a buyer.
3. Can a camera inspection show where a recurring backup starts on a shared line? It can show conditions in the accessible part of the line, such as roots, an offset joint or buildup, and where along the line they are. It cannot show parts of the line it cannot reach, and the findings document what was visible; they do not by themselves establish why a backup recurs.
4. Do you repair or replace sewer lines in multifamily homes? No. The Sewer Pros inspects, diagnoses, locates and cleans. It does not perform repairs or replacements.
5. Is a pre-purchase sewer inspection available for a duplex or fourplex? Yes. A pre-purchase sewer inspection documents the visible condition of the accessible sewer line before closing, and the same inspection applies to a multi-unit home.

Claim check. Checked for: pricing, response times, tenant scheduling, multi-unit discounts, availability, guarantees, non-residential service.

- **Not present:** pricing, response times, scheduling around tenants, discounts or portfolio rates, emergency or same-day availability, guarantees, equipment names or specs, and any non-residential wording. The audited word does not appear in the page text (checked in the built HTML).
- **Owner confirmed Oct 12, 2026 (see `docs/owner-confirmed-service-deliverables.md`, DEC-143), and still open:**
  - "Yes" to a pre-purchase sewer inspection for a duplex, fourplex or multi-unit home (section answer and FAQ 5): **owner confirmed Oct 12, 2026.**
  - Covered building types are duplexes, fourplexes and residential apartment buildings (H2, FAQ 1): **owner confirmed Oct 12, 2026.**
  - Still open: "You receive both" the video and the written findings (section and FAQ 2). This matches existing copy on `/services/sewer-camera-inspection/` ("You receive the inspection video and written findings"), so it is consistent with the site, but it is a delivery promise the owner should keep confirming.
  - Still open: technical statements about shared lines (units can drain to one lateral or main line; a backup can start downstream of the unit that notices it; roots, an offset joint or buildup can be seen). General plumbing explanation, no business claim, but not owner-reviewed.
- **Reads as safe on repair:** the repair/replace statements say it is not offered, which matches the repair guardrail.

## 4. Archive and internal folders

| Check | Result |
|---|---|
| Files under `out/` or `public/` with `archive`, `source-reports` or `superpowers` in the path | 0 |
| Files in `out/`, `app/`, `public/` or `next.config.*` containing the text `docs/archive`, `source-reports` or `superpowers` | 0 |
| Sitemap entries containing those words | 0 |
| Top-level routes in `out/` | `about`, `compare`, `contact`, `faq`, `for`, `las-vegas-nv`, `locations`, `resources`, `san-diego-ca`, `services`, `st-louis-mo`, plus `images` and framework files. No docs route |
| Tracked files in `public/` ending `.md` | 10 `README.md` files, all under `public/images/`, none from `docs/` |

`docs/archive`, `docs/source-reports` and `docs/superpowers` are not built, not routed, not copied to `public/`, and not in the sitemap. One caveat: the 10 image README files under `public/images/` are copied into `out/images/` as static files and so are served at their URLs. That predates this work and is unrelated to the three docs folders.

## 5. Audit verdict

`node scripts/audit-commercial.mjs`: **CLEAN** (A 0, B 0, C 0, D 121, E 566, X 1176, retained failures 0). The script rewrites `docs/commercial-removal-audit.md` on every run; that rewrite was reverted so this file is the only change.
