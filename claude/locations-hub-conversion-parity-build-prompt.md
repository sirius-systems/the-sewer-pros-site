# Build Prompt — Locations Hub Conversion / Trust Parity

**Issued:** 2026-09-07
**Authorises:** DEC-103 (`claude/dec-103-locations-hub-conversion-parity.md`)
**Mode:** Gated, five gates, hard stop after Gate 1 and again after Gate 2
**Outcome:** Completed 2026-09-07

> ⚠ **Transcribed record.** Written when the build completed, from the
> conversation in which the prompt was issued. It records the gate structure,
> the constraints, and what each gate actually returned. It is **not** a verbatim
> capture of the original prompt. Gate 2's rulings are quoted verbatim in the
> decision document, §6.

---

## Objective

Give `/locations/` the three conversion and trust sections the market hubs
carry, per DEC-103, **without changing any other hub**.

## Hard requirements

1. `/services/`, `/for/`, `/commercial/` and `/resources/` must render
   **byte-identical**. Stated as the single most important check in the build.
2. No fabricated business facts. No invented image asset, phone number, office,
   address, or market association.
3. No em dashes in customer-facing copy.
4. Work directly on `main`. No PR, no feature branch, no worktree.
5. `npm run check` before any push.

## Gates

### Gate 1 — Read-only inspection. Report, then stop.

Five items:

1. Whether `HubPageContent` carries any reviews / confidence / form field today.
2. The exact invocation patterns the market hubs use for each section.
3. `HubPageTemplate`'s current render order and density array.
4. The current state of the `hub-locations` content entry.
5. Whether a hero-form equivalent needs a `marketId`-like association, and if so
   whether a sensible non-market value exists. **"If no such value exists
   cleanly, flag this rather than inventing one."**

**Returned:** no such field exists; the patterns and order as captured in the
decision doc §7; `hub-locations` fully populated with no `cta` and no `items`;
and on item 5 — **no blocker**. `LeadFormSection.defaultMarketId` is optional, so
the form renders with Location unanswered, which is the correct state for a page
representing three markets. The narrower fallback the prompt offered (reviews
and confidence only, hero form deferred) was therefore not needed.

Gate 1 also surfaced three questions DEC-103 did not cover — the `showAuthority`
gate, the absent CTA asset, and the surface sequence. Gate 2 ruled on all three.

### Gate 2 — Plan. Stop for approval.

Rulings quoted verbatim in `dec-103-locations-hub-conversion-parity.md` §6.

One conflict was found between two Gate 2 instructions and resolved before
building: the instruction to reorder `AuthorityBand` below the closing CTA
would, if applied globally, have changed `/services/` and `/commercial/` — both
render `AuthorityBand → FAQ` today — breaking hard requirement 1. The reorder
was gated on the same flag that switches the CTA to `split`, so it applies only
where its reasoning does.

### Gate 3 — Build.

`types/content.ts`, `components/sections/ReviewMarquee.tsx`,
`components/templates/HubPageTemplate.tsx`, `content/pages/core.tsx`.

### Gate 4 — Validate.

Baseline built from the pre-change tree and compared route by route:

* 72 of 73 routes byte-identical (rendered body, scripts stripped)
* the four other hubs identical in body **and** head/meta
* all 73 routes identical in head/meta
* `sitemap.xml` and `robots.txt` identical; 70 URLs, 73 routes
* no `sectionRhythmIssues()` warnings; longest density run 2
* no adjacent surfaces match
* no duplicate element ids; both Location selects unanswered
* no `tel:` in main content

⚠ **A stale `out/` was caught mid-validation.** After restoring the stashed
changes the build was not re-run, so one probe read the baseline output. This is
the second time in this project that a `git`-then-probe sequence produced a
false reading without rebuilding. **Rebuild after every checkout or stash before
reading `out/`.**

⚠ `cmp` on the raw HTML reports differences on every route even when nothing
changed, because Next.js asset hashes move on each build. Comparison must strip
`<script>` blocks — including the inline `self.__next_f.push(...)` payloads,
which carry chunk names — before it means anything.

### Gate 5 — Report. No commit or push without explicit confirmation.

## Process note carried out with this build

The owner directed that this directory be created and both documents committed
alongside the code, and that a DEC-103 entry be appended to
`docs/22-decisions-change-log.md`, which still ended at DEC-100.

**DEC-101 and DEC-102 remain unrecorded.** Their content was not reconstructed,
because guessing at a decision is worse than an acknowledged gap.
