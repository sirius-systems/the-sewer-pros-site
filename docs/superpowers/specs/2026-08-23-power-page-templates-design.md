# Design: Port the `power` Page Templates into The Sewer Pros

**Date:** 2026-08-23
**Status:** Approved (design), pending implementation plan
**Source style:** `site-foundation-template` @ `fc79c79`, `docs/page-templates/power/` + `docs/page-templates/_base/`
**Affects:** `components/sections/`, `components/templates/`, `components/layout/`, `data/`, `types/`, `docs/18-design-system.md`, `docs/22-decisions-change-log.md`

---

## 1. Summary

Adopt the `power` visual composition system as the section architecture for all 12 page templates.

The reference repository ships **composition maps written in Markdown**, not React. Its `src/components/` directory contains only a `.gitkeep`, and it targets Next 14 / React 18 / Tailwind 3 against this repo's Next 16 / React 19 / Tailwind 4. There is therefore no code to copy. What is being ported is section order, section inventory, density rhythm, and image/element roles.

Scope is the presentation layer only. No new routes, no content rewrites, no registry changes, no additions to `04-master-page-build-list.md`. Route count must be identical before and after.

## 2. Goals

1. Every page template follows a documented `power` composition map, or a `power`-derived map where no counterpart type exists.
2. The section library gains the components those maps require and that this project's governance permits.
3. Photography, proof, testimonial, and form slots exist as typed contracts that render nothing until real data exists.
4. `docs/18-design-system.md` §110-111 and `docs/22-decisions-change-log.md` reflect the new architecture, so documentation does not go stale behind code (CLAUDE.md §79, §80).

## 3. Non-goals

- Resolving PENDING-005 (palette) or PENDING-006 (typography). Composition is palette- and typography-agnostic; `22` line 3167 states this explicitly.
- Resolving PENDING-007 (primary CTA label) or PENDING-008 (form fields). The form slot is built; the form is not.
- Sourcing photography, reviews, or case-study data.
- Adopting the `premium`, `authority`, or `_base` style variants.
- Any change to indexation, sitemap, canonical URLs, or internal-link destinations.

## 4. Governing constraints and how each was resolved

`power` was derived from "Silver State Plumbing and similar trade/home-service businesses" with an explicitly "urgent-but-trustworthy, built for a visitor mid-problem" register. Several of its elements are incompatible with this project's approved rules. Per CLAUDE.md §98, the project-specific rule wins.

| `power` element | Governing rule | Resolution |
|---|---|---|
| Full-bleed photo hero, image splits, 4-image gallery per type | `18` §28-34 require real inspection photography; §34 rules out AI imagery and staged stock. `public/` is empty. | Slots typed, graceful absence. Sections reflow text-first. No placeholder boxes, no stock filler. |
| "One editable placeholder testimonial" on every type | CLAUDE.md §77, `01` §35, `18` §69-70 | `TestimonialBand` built and typed; renders `null` while its data module is empty. |
| Inline lead form on all 6 types | CLAUDE.md §58, `17` §27-36, PENDING-007, PENDING-008 open | `LeadFormSection` built as a slot only. Fields are not invented. |
| Optional confidence/offer module: free estimate, financing, warranty, same-day/emergency availability | CLAUDE.md §17, §23; `18` §89, §145; `01` §34 | **Removed from the maps entirely.** Not deferred, not conditional. |
| 4-across icon trust strip | `18` §5.3 (trust through restraint), Appendix B (decorative icons beside self-sufficient text) | Keep `TrustBar` icon-free. Column count becomes a prop; icons do not return. |
| Sticky header with click-to-call phone | DEC-070 / DEC-071 publish two market numbers; `output: 'export'` cannot vary a shared header by route (PENDING-017); `01` §20 forbids cross-market fact-copying | **Sticky: adopted** (pure CSS). **Click-to-call: rejected.** Header keeps "Call" to `/contact/`. |
| Phone displayed prominently in every final CTA banner | Same as above | `CtaSection` gains an optional `phone` prop. Only market-scoped templates pass it, since those pages already carry their own number in content. |
| Map / directions / hours card on location pages | PENDING-002 resolved: no address exists, service-area business model. `power/location-page.md` itself instructs confirming this first. | No map, no pin, no address, no directions. `CoverageSection` stays to served-community lists plus an availability statement. |
| "Urgent, visitor mid-problem" voice | `18` §68, §70; CLAUDE.md §68, §70 | Register overridden to calm and factual. Section *structure* is adopted; section *voice* is not. |

## 5. Ordering change

`power/service-page.md` items 13-15 and `_base/service-page.md` ("Placement: after the related-services strip, before the closing CTA band") both order the page tail:

```
related -> FAQ -> final CTA
```

Current templates order it `FAQ -> related -> final CTA`. The tail flips. This applies to every template carrying both a related strip and an FAQ.

## 6. Section library changes

### 6.1 New, text-capable

| Component | Purpose | Key constraint |
|---|---|---|
| `RoutingCards` | Homepage intent-routing, 3-4 cards | Must read visually distinct from `ServiceIndex`. `power/homepage.md` composition notes name the two collapsing together as a failure. Routing is decision support; the services grid is the catalog. |
| `ProblemGrid` | "When you may need X" / "Common scenarios", 4-6 cards | Names the customer's symptom, scenario, or goal. No fear framing (`18` §70): "recurring backups can indicate a condition worth investigating", never "your sewer could collapse". |
| `InclusionsGrid` | "What's included", 4-6 cards | Names the firm's deliverables. Card treatment must differ from `ProblemGrid`. Deliverables must exist in `06-master-service-registry.md`; no repair deliverables (CLAUDE.md §4). |
| `AuthorityBand` | Dark brand band, 4 proof points | Renders `<Section surface="brand">`. **One per page, never adjacent to another dark section** (`_base` anti-pattern, `18` §11). Proof points must be verified facts, sourced like `trustStatements`. |
| `CoverageSection` | Served communities plus availability statement | No map, no address. Community names come from `07-master-location-registry.md` with correct geographic types (CLAUDE.md §26). Links only to approved routes (§16, §48). |

### 6.2 New, data-gated

`ProofGallery`, `TestimonialBand`, `LeadFormSection`. Contract in §7.

### 6.3 Edited

| Component | Change |
|---|---|
| `TrustBar` | Add a column-count prop. Remains icon-free and card-free. |
| `CtaSection` | Add optional `phone?: { label: string; href: string }`. Rendered only when passed. |
| `SiteHeader` | Add sticky positioning. No change to nav contents, the "Call" link, or its Server Component status. |
| `sections/index.ts` | Rewrite the DELIBERATELY ABSENT block to describe the data-gated contract instead of asserting these sections do not exist. |

## 7. The data-gated contract

`components/sections/index.ts` currently argues that shipping an empty proof shell "invites filling it with fabricated content." Building `ProofGallery`, `TestimonialBand`, and `LeadFormSection` partially contradicts that, so the contract is explicit:

1. Each reads from a **governed data module** under `data/`, following the `trustStatements` pattern where every item cites the document establishing it as fact.
2. Each accepts **no ad-hoc string props** for claim-bearing content. Passing a literal testimonial or gallery caption at a call site is not possible by type.
3. An empty module means the section returns `null`. The surrounding composition reflows; nothing renders in its place.
4. Each component's file header states which PENDING or verification gate must resolve before its module may be populated.

Rule 2 is what makes this safe: the failure mode the existing comment warns about is a developer typing a plausible-sounding quote into JSX, and the type system forecloses it.

`LeadFormSection` additionally renders `null` until PENDING-007 and PENDING-008 both resolve, and its field set must come from `17` §28 and §36 rather than from `power`, whose field list is generic.

## 8. Template composition maps

Every template's density array is planned against `sectionRhythmIssues()` rather than backfilled. The gate fails on a run of 4 identical densities or zero variation across the page. With 15-17 sections this is a real constraint.

### 8.1 Canonical service page

| # | Section | Density | Surface |
|---|---|---|---|
| 1 | `Hero` (editorial; `split` when media exists) | sparse | default |
| 2 | `TrustBar` | dense | muted |
| 3 | `Differentiator` (service overview split) | standard | default |
| 4 | `ProblemGrid` | standard | default |
| 5 | `InclusionsGrid` | dense | muted |
| 6 | `ProcessSteps` | standard | default |
| 7 | `AuthorityBand` | standard | **brand** |
| 8 | `ProofGallery` *(gated)* | standard | default |
| 9 | `TestimonialBand` *(gated)* | dense | muted |
| 10 | `LeadFormSection` *(gated)* | standard | default |
| 11 | `RelatedLinks` | dense | default |
| 12 | `FaqSection` | dense | muted |
| 13 | `CtaSection variant="panel"` | sparse | brand |

Densities with all gated sections absent: `sparse, dense, standard, standard, dense, standard, standard, dense, dense, sparse`. Longest run 2.

Both the all-absent and all-present sequences must pass the gate. Because the gated sections sit in a contiguous block, the array is built by the same conditional-spread pattern the templates already use, and both sequences are checked.

### 8.2 All 12 templates

| Template | `power` source | Treatment |
|---|---|---|
| `HomePageTemplate` | `homepage` | Gains `RoutingCards` between hero and services grid. Keeps the resources `RelatedLinks` strip, which has no `power` counterpart, placed before the FAQ. |
| `ServicePageTemplate` | `service-page` | §8.1. |
| `MarketPageTemplate` | `location-page` | Market level (St. Louis, San Diego, Las Vegas). **Passes `phone` to the CTA banner.** `CoverageSection` without a map. |
| `LocationPageTemplate` | `location-page` | Sub-market locations. Lighter: no second gallery, no separate coverage section where the parent market page already carries one. |
| `ServiceLocationPageTemplate` | `location-service-page` | Full 17-section map. `power` explicitly warns against thinning this type. `_base` requires the FAQ to blend service and location. |
| `AudiencePageTemplate` | `audience-page` | Operational register. Solutions grid denser than the homepage services grid. |
| `CommercialPageTemplate` | `audience-page` | `power`'s "operationally credible, not just friendly" register maps directly onto CLAUDE.md §33 and §74's demand that commercial content not be residential content with headings changed. |
| `HubPageTemplate` | *derived* | hero -> trust -> index grid -> authority band -> related -> FAQ -> CTA. |
| `ComparisonPageTemplate` | *derived* | `ProblemGrid` repurposed as "when each applies". Neutrality per CLAUDE.md §65: the comparison must not be shaped so the preferred service always wins. |
| `ResourcePageTemplate` | *derived, deliberately lighter* | hero -> prose -> inline service callout -> related resources -> FAQ -> soft CTA. Full conversion machinery on an educational article contradicts `17` §19, which requires informational content to progress without forcing users into a form. |
| `CorePageTemplate` | *derived, minimal* | about / contact / FAQ. Contact is the approved conversion destination and receives the form slot first when PENDING-008 resolves. |
| `PageShell` | — | Unchanged. Schema, breadcrumbs, and rhythm assertion plumbing only. |

## 9. Documentation updates

1. **`docs/18-design-system.md` §110-111** rewritten to the ported composition maps, with §110 covering the homepage and §111 the service page, and the derived maps added for the five types with no `power` counterpart.
2. **`docs/22-decisions-change-log.md`** gains one DEC entry recording: the adoption of the `power` composition system, the tail reordering, the eight new components, and each of the nine resolutions in §4 with its governing rule, distinguishing the elements rejected outright from those adapted. Existing entries are not overwritten (CLAUDE.md §16).
3. Component file headers cite the governing sections, matching the convention every existing component already follows.

## 10. Verification

1. `npm run check` (typecheck, lint, production build) passes.
2. **Route parity:** the set of generated routes in `out/` is identical before and after. This is the operative proof that a presentation-layer change did not leak new indexable pages (CLAUDE.md §19, §48).
3. `sectionRhythmIssues()` returns empty for every template, in both the all-gated-absent and all-gated-present sequences.
4. No `any`, no `@ts-ignore` (CLAUDE.md §84).
5. Heading hierarchy remains one `h1` per page; new grids use semantic lists; the dark band meets contrast against `--brand-foreground` (CLAUDE.md §55).
6. Grep confirms no new hard-coded phone numbers, addresses, prices, or availability claims entered the component layer.

## 11. Risks

| Risk | Mitigation |
|---|---|
| Pages nearly double in length while remaining text-only, reading as thin rather than substantial | The gated sections are absent, not empty. Density planning is per template. If a template's text-only sequence reads poorly, its map drops sections rather than padding them. |
| `ProblemGrid` and `InclusionsGrid` converging into the same card | Distinct card treatments specified up front; `power` names this failure explicitly for both the service and service+audience types. |
| A future contributor populating a gated data module with invented content | Module file headers name the resolving gate; components accept no ad-hoc claim strings; no-fake-data discipline already documented in CLAUDE.md §23, §76, §77. |
| Two dark sections landing adjacent once `AuthorityBand` exists | One `AuthorityBand` per page, and the CTA `panel` is the only other brand surface. Adjacency checked per template map. |
| Doc 18 rewrite conflicting with other §110-111 references | Grep for cross-references to those sections before rewriting; update them in the same workstream. |
