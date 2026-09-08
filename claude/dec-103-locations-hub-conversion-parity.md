# DEC-103 — Conversion and Trust Parity on the Locations Hub

**Date issued:** 2026-09-07
**Decision Owner:** Business owner (Sedrick)
**Status:** APPROVED — IMPLEMENTED 2026-09-07
**Register entry:** `docs/22-decisions-change-log.md` DEC-103

> ⚠ **Transcribed record.** This file was written when the decision was
> implemented, from the conversation in which it was issued. It records the
> decision and its reasoning faithfully; it is **not** a verbatim capture of the
> original message. Where wording matters — the Gate 2 rulings in §6 — it is
> quoted as such and marked.

---

## 1. The problem

`/locations/` had one conversion opportunity. A market hub has three.

The hub renders hero → trust bar → body → market cards → FAQ → closing CTA
panel. A visitor who arrives wanting to know whether their area is covered,
reads the market cards, and is satisfied has one place to act, at the bottom of
the page, and no evidence anywhere on it that other people have used this
business.

The market hubs solved the same problem some time ago. The sections exist, are
tested, and are already rendering on three pages.

## 2. Why this hub specifically

`/locations/` catches **market-agnostic intent**. Someone who already knows they
want St. Louis goes to `/st-louis-mo/`, which converts. Someone who does not
know whether they are covered at all lands here — and this is the only page in
the site whose subject is that question.

The other four hubs (`/services/`, `/for/`, `/commercial/`, `/resources/`)
orient a visitor toward a page that already converts. They do **not** get these
sections merely because the mechanism now exists.

## 3. What is portable

Three things, because none of them carries a market-scoped fact:

| Section | Why it is safe sitewide |
| --- | --- |
| `ReviewMarquee` | DEC-100 established the 4.9 / 595 figures as **company-wide and unattributed**. Had they remained attributed to the St. Louis profile, this would not be available. |
| `ConfidenceModule` | Positioning, not fact. Makes no market claim. |
| Hero form + split CTA | The same form the markets render, with the market question left unanswered. |

## 4. What is NOT portable

This is the substance of the decision, not an omission list.

* **The experience section** — its proof statistics are market-scoped
  (DEC-070 St. Louis 2011, DEC-071 San Diego 2015, DEC-072 the 100,000-inspection
  figure as St. Louis only). There is no company-wide equivalent.
* **`coverage` / `serviceArea`** — a service area is a market's, and the three
  differ in kind: St. Louis publishes counties, the other two are
  `derived_from_approved_locations` (DEC-077).
* **The services list** — St. Louis carries a market-specific service the other
  two mark `not_applicable`.
* **Routing cards** — they route within a market.

> **`/locations/` is not a fourth market and must not be built to look like
> one.** It is a hub whose members happen to be markets.

## 5. Business-truth constraints

* **Neither form preselects a market.** The page speaks for three, so defaulting
  the Location field to any one would put a market-scoped answer on a sitewide
  page (01 §20). Unanswered is correct, not unfinished.
* **No phone number in the main content.** Market-scoped. The footer carries all
  three sitewide, unchanged.
* **No CTA background image.** None exists for this hub. Inventing a scene for a
  page about three markets would be a fabricated image (CLAUDE.md §24, §37).
* **No office, address, hours, or local-entity claim.** Unchanged, and the page's
  existing "service markets, not offices" copy stays exactly as written.

## 6. Gate 2 rulings (quoted)

Three questions were raised at Gate 1 that the decision document did not settle.
The owner's rulings, verbatim:

**On the `showAuthority` gate:**

> "no logic change. Its condition (`faqSectionRenders(content.faq) &&
> authorityBandRenders()`) already correctly determines whether `AuthorityBand`
> renders, independent of what the CTA's surface is. Don't touch the condition.
> If there's a code comment explaining the original 'avoid brand-band-meets-brand-panel'
> reasoning, update the comment (not the logic) to note it now does double duty."

**On the missing CTA asset:**

> "Don't invent an image field. Use a single new boolean, `showHeroForm?:
> boolean`, that triggers both the hero aside form and the CTA's `split` variant
> together, since on this page they're one feature (conversion parity), not two
> independently-toggled ones."

**On sequence and surfaces:**

> "Mirror the market hubs' relative ordering, not their exact section list […]
> the only two hard requirements are: no two adjacent sections share a surface,
> and neither Reviews nor Confidence Module gets assigned either of the two
> reserved brand surfaces (`AuthorityBand`, CTA panel), they're neutral trust
> content, not brand statements. Iterate the actual tokens until the checker
> passes."

## 7. What shipped

**Two booleans, not one.** `showHeroForm` does exactly what §6 specifies. A
second flag, `showTrustSections`, carries the review band and confidence module,
because "should this page ask for the job?" and "should this page show
evidence?" are independent questions and one boolean would make the second
combination unreachable without another type change. Both default off.

**Sequence** (owner's relative-ordering rule applied):

```text
Hero + form      image     sparse
TrustBar         brand     dense
body             default   standard
ReviewMarquee    muted     standard    before the member list
MarketCoverage   default   dense
ConfidenceModule muted     standard    after the member list
FaqSection       default   dense       flipped from muted
AuthorityBand    brand     standard    moved below the FAQ
CtaSection split muted     dense
```

No two adjacent surfaces match; longest density run is 2;
`sectionRhythmIssues()` is silent.

**Three constrained choices worth recording:**

1. `ReviewMarquee` hardcoded `surface="default"` with no prop, and the hub's
   body prose is also `default` — they would have clashed. The component gained
   an optional `surface`, defaulting to the white it has always rendered, so the
   three market hubs are unchanged. `/locations/` passes `muted` for the same
   reason the markets keep white: the band must read as a different *kind* of
   content from its neighbour. Same rule, opposite value.
2. The FAQ flips from `muted` to `default` when the confidence module renders
   above it, because that module is muted. The condition reads the module, not
   the flag, because the module is the neighbour.
3. `AuthorityBand` moves below the FAQ **only on the split branch**. A global
   reorder was rejected: `/services/` and `/commercial/` both render
   `AuthorityBand → FAQ` today and would have changed.

## 8. Verification

* 72 of 73 routes byte-identical (rendered body, scripts stripped)
* The four other hubs identical in body **and** head/meta
* All 73 routes identical in head/meta; `sitemap.xml` and `robots.txt` identical
* No duplicate element ids; both Location selects render unanswered
* No `tel:` link in the main content
