import Image from 'next/image'
import {
  Section,
  Prose,
  ImagePlaceholder,
  ButtonLink,
  type SectionDensity,
} from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import {
  CameraIcon,
  MonitorIcon,
  PipeIcon,
  ChecklistIcon,
} from '@/components/sections/section-icons'
import {
  Hero,
  TrustBar,
  ExperienceCounterStrip,
  ProblemGrid,
  InclusionsGrid,
  ProcessSteps,
  IndependentProcess,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  MarketCoverage,
  FaqSection,
  RelatedLinks,
  CtaSection,
  AudiencePathways,
  LimitationsPanel,
  ServiceComparison,
  BackdropImage,
  authorityBandRenders,
  processStepsRenders,
  marketCoverageRenders,
  relatedLinksRenders,
  faqSectionRenders,
  problemGridRenders,
  inclusionsGridRenders,
} from '@/components/sections'
import { getService } from '@/data/services'
import { PageShell } from './PageShell'
import { ServiceHubTemplate } from './ServiceHubTemplate'
import type { MasterPageRecord, ServicePageContent } from '@/types'

/**
 * Canonical service page.
 *
 * Structure ported from the `power` composition maps, resolved against
 * docs/18-design-system.md §111 — see docs/22-decisions-change-log.md
 * for the decision and its exclusions:
 *
 *   Hero → Trust strip → Service overview → Independent-model split
 *   → When you may need this → What's included → Process
 *   → Authority band → Proof* → Testimonial* → Form*
 *   → Markets → Related → FAQ → Final CTA
 *
 * `*` renders nothing until its data gate opens. See
 * `components/sections/index.ts`.
 *
 * ---------------------------------------------------------------------------
 * TAIL ORDER CHANGED
 * ---------------------------------------------------------------------------
 * Related now precedes the FAQ. Both the reference composition and its
 * type-level spec place the FAQ "after the related-services strip,
 * before the closing CTA band"; this template previously ran FAQ →
 * related → CTA.
 *
 * ---------------------------------------------------------------------------
 * BOTH THE SPLIT AND THE BAND
 * ---------------------------------------------------------------------------
 * The reference map carries an editorial why-choose-us split AND a dark
 * authority band as separate sections, so both appear here and they are
 * not alternatives:
 *
 *   IndependentProcess  the independent-opinion band (Inspect, Document,
 *                   Decide, both callouts, closing statement), on the
 *                   brand surface. Opt-in per page via
 *                   `showDifferentiator` — same gate, same name, since
 *                   the 2026-09-22 site-wide swap replaced the old
 *                   `Differentiator` comparison table here without
 *                   touching the flag any page sets. It owns its own
 *                   heading; this template passes none.
 *   AuthorityBand   the brand-surface proof points, always rendered.
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection variant="panel"`
 * are the only two brand surfaces in the system, and stacking dark
 * sections is a named anti-pattern (18 §11). At least one non-brand
 * section must sit between them — in practice the related strip and the
 * FAQ. A service page with neither would place them adjacent.
 *
 * 18 §109: "Core Service — service-led and technical." The hero is
 * `variant="editorial"` (no `media`/`aside` split) either way, staying
 * true to 18 §37 ("a hero must not depend on a decorative image to
 * explain the page"). `content.heroImage` is a separate, opt-in
 * photographic BACKDROP behind that same editorial copy — not a split
 * — for a page whose photography has actually been approved (18 §28-34);
 * every page that omits it renders exactly as before.
 *
 * The middle explanatory block arrives as `content.body`, so the
 * template fixes the ORDER and the RHYTHM while the writing stays free
 * (14 §21's substitution tests demand genuinely different copy per
 * service — a field-per-heading schema would work against that).
 */
/** Icon lookup for `ServicePageContent.howWeWork` items. */
const HOW_WE_WORK_ICONS = {
  camera: CameraIcon,
  monitor: MonitorIcon,
  pipe: PipeIcon,
  checklist: ChecklistIcon,
} as const

export interface ServicePageTemplateProps {
  page: MasterPageRecord
  content: ServicePageContent
}

export function ServicePageTemplate({
  page,
  content,
}: ServicePageTemplateProps) {
  // Hub pages (currently the sewer camera inspection page) carry extra
  // sections and their own ordering; see `ServiceHubTemplate`.
  if (content.hub !== undefined) {
    return <ServiceHubTemplate page={page} content={content} />
  }

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  //
  // The three gated sections contribute NO entry, because they render
  // nothing. When a gate opens, add its density at the same position.
  //
  // The process band is `dense` rather than `standard` on purpose:
  // with `problems` and `inclusions` unauthored, body → differentiator
  // → process → authority would otherwise be four consecutive
  // `standard` sections, which is exactly the run 18 §108 rejects.
  const densities: SectionDensity[] = [
    'sparse',
    // ExperienceCounterStrip — inserted below Hero, above `TrustBar`
    // (owner, 2026-09-27). `dense` is the section's own default.
    'dense',
    'dense',
    // Two-column explainer — see types/content.ts `ServicePageContent.explainer`.
    ...(content.explainer !== undefined ? (['standard'] as const) : []),
    ...(content.body !== undefined ? (['standard'] as const) : []),
    // Second two-column block, on `muted` — see
    // types/content.ts `ServicePageContent.considerations`.
    ...(content.considerations !== undefined ? (['dense'] as const) : []),
    ...(content.showDifferentiator === true ? (['standard'] as const) : []),
    // Audience/role router — reuses the hub's `AudiencePathways`; see
    // types/content.ts `ServicePageContent.audiences`.
    ...(content.audiences !== undefined ? (['dense'] as const) : []),
    ...(problemGridRenders(content.problems)
      ? (['standard'] as const)
      : []),
    ...(inclusionsGridRenders(content.inclusions)
      ? (['dense'] as const)
      : []),
    ...(content.process !== undefined && processStepsRenders(content.process)
      ? (['dense'] as const)
      : []),
    // Capabilities/limits panel — reuses the hub's `LimitationsPanel`.
    ...(content.limitations !== undefined ? (['dense'] as const) : []),
    // Either the page's own `howWeWork` band or the shared
    // `AuthorityBand` — always exactly one of the two, both `standard`.
    ...(content.howWeWork !== undefined || authorityBandRenders()
      ? (['standard'] as const)
      : []),
    // Related-services comparison — reuses the hub's `ServiceComparison`.
    // Always brand surface; JSX places `LeadFormSection` directly before
    // it so it never touches `AuthorityBand` (see the JSX comment there).
    // Tracked here right before `showMarkets`, matching JSX order —
    // `ProofGallery`/`TestimonialBand`/`LeadFormSection` between them
    // carry no density entry, same pre-existing convention as elsewhere
    // in this list.
    ...(content.comparison !== undefined ? (['dense'] as const) : []),
    // `MarketCoverage` is rendered at `standard` here, not the component's
    // own `dense` default (see the matching JSX prop below): with
    // `comparison` also authored, `comparison → markets → related → faq`
    // would otherwise run four consecutive `dense` sections (18 §108's
    // rejected run). No page sets `showMarkets` today, so this is the
    // first and carries no regression risk.
    ...(content.showMarkets === true && marketCoverageRenders()
      ? (['standard'] as const)
      : []),
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    'sparse',
  ]

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
      }}
    >
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        copyWidth={content.heroImage !== undefined ? 'narrow' : 'reading'}
        backdrop={
          content.heroImage !== undefined ? (
            /*
              Same treatment as `ServiceHubTemplate`'s photographic hero:
              `BackdropImage` (decorative, `alt=""`, degrades to a
              labelled placeholder outside production), the shared flat
              55% black `.hero-scrim`, and a left-to-right black
              gradient. The copy column always sits on the left, so the
              gradient always runs left→right; a right-focused photo
              gets the heavier stops since the copy side is plainer
              background there.
            */
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 overflow-hidden bg-brand"
            >
              <BackdropImage
                src={content.heroImage.src}
                priority
                className={
                  content.heroImage.focus === 'right'
                    ? 'object-cover object-[85%_50%]'
                    : 'object-cover object-[15%_50%]'
                }
              />
              <div className="hero-scrim absolute inset-0" />
              <div
                className={
                  content.heroImage.focus === 'right'
                    ? 'absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent'
                    : 'absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent'
                }
              />
            </div>
          ) : undefined
        }
      />

      {/*
        ⚠ INSERTED BELOW HERO, ABOVE `TrustBar` (owner, 2026-09-27).
        `surface="muted"`, NOT THE COMPONENT'S OWN `default` — UNLESS
        `content.heroImage` is set. A hero with no backdrop renders on
        `default` too, so the component's own default would stack two
        `default` bands back to back; `muted` keeps this section distinct
        from both neighbours. A photographic-backdrop hero renders on
        `surface="none"` instead (see `Hero`), so `default` (this
        component's own default, same as `ServiceHubTemplate`'s
        photographic hero) already matches neither neighbour there.
        `TrustBar` below is `brand` either way.
      */}
      <ExperienceCounterStrip
        surface={content.heroImage !== undefined ? 'default' : 'muted'}
      />

      <TrustBar />

      {content.explainer !== undefined && (
        /*
          Full section width (not `width="reading"`, unlike the plain
          `body` block below): the right column needs room for the
          image. `lg:items-start` keeps a shorter image from stretching
          to match a taller copy column. DOM order is copy then image
          with no `lg:order-*` override, since that is also the wanted
          desktop order (left column copy, right column image) — unlike
          `PrePurchase`, which swaps them. Below `lg` the grid is one
          column, so the image already follows the copy on mobile with
          no extra rule needed.
        */
        <Section density="standard">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Prose>{content.explainer.content}</Prose>
            </div>
            <div className="lg:col-span-5">
              {'src' in content.explainer.image ? (
                /*
                  Same 4:3 frame `PrePurchase` uses for its approved
                  photograph: the box is reserved before the file
                  decodes (`bg-surface-muted` shows while it loads),
                  `object-cover` keeps the ratio, and the `sizes` value
                  matches this column's actual share of the viewport
                  (`lg:col-span-5` of 12 ≈ 40vw at `lg`, full width
                  below it).
                */
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface-muted">
                  <Image
                    src={content.explainer.image.src}
                    alt={content.explainer.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label={content.explainer.image.label}
                  filename={content.explainer.image.filename}
                  aspect="4/3"
                  className="w-full"
                />
              )}
            </div>
          </div>
        </Section>
      )}

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.considerations !== undefined && (
        /*
          Same two-column shape as `explainer` above, deliberately
          distinct from it in three ways: `surface="muted"` (18 §11 — a
          surface change signals a new topic on its own, without relying
          on a wide gap to do that job); `density="dense"`, which keeps
          this section's own top/bottom padding tighter than
          `explainer`'s `standard` so the two bands sit close while the
          colour change stays the thing that marks the transition; and
          `lg:items-center` rather than `lg:items-start`, since this
          column holds three H2 blocks against a single image — centring
          keeps the image aligned with the middle of that taller
          cluster instead of pinned to its top edge.
        */
        <Section density="dense" surface="muted">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Prose>{content.considerations.content}</Prose>
            </div>
            <div className="lg:col-span-5">
              {'src' in content.considerations.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface-muted">
                  <Image
                    src={content.considerations.image.src}
                    alt={content.considerations.image.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label={content.considerations.image.label}
                  filename={content.considerations.image.filename}
                  aspect="4/3"
                  className="w-full"
                />
              )}
            </div>
          </div>
        </Section>
      )}

      {/*
        ⚠ BRAND SURFACE, AND THE SECTION ABOVE IT MATTERS. `TrustBar`
        is also `brand`, so this must not follow it directly — 18 §11
        names stacked dark sections as an anti-pattern, and the comment
        at the top of this file relies on at least one non-brand
        section separating them.

        `body` and/or `considerations` above are that separator (both
        `muted`/light, never brand). Every page reaching this branch has
        at least one of the two (audited 2026-09-04, extended
        2026-09-28). A page with NEITHER would put two brand surfaces
        together, so if that state ever becomes reachable, give this
        section `surface="muted"` there rather than leaving the pair
        adjacent.
      */}
      {content.showDifferentiator === true && (
        <IndependentProcess density="standard" content={content.secondOpinion} />
      )}

      {content.audiences !== undefined && (
        <AudiencePathways content={content.audiences} />
      )}

      {content.problems !== undefined && (
        <ProblemGrid
          id="when-you-may-need-this"
          title="When you may need this"
          items={content.problems}
        />
      )}

      {content.inclusions !== undefined && (
        <InclusionsGrid
          id="whats-included"
          title="What's included"
          items={content.inclusions}
        />
      )}

      {content.process !== undefined && (
        <ProcessSteps
          density="dense"
          surface={content.processSurface}
          id="how-it-works"
          title={content.processTitle ?? 'How it works'}
          intro={content.processIntro}
          steps={content.process}
        />
      )}

      {content.limitations !== undefined && (
        <LimitationsPanel content={content.limitations} />
      )}

      {content.howWeWork !== undefined ? (
        /*
          Page-specific replacement for the shared `AuthorityBand`
          proof-points band — see `ServicePageContent.howWeWork`.
          Visual treatment matches `AuthorityBand`'s proof-points variant
          exactly (same navy surface, card borders, icon/heading/intro
          sizing, and default `PRIMARY_CTA` button) so the swap is
          invisible in the page's rhythm; only the source of the cards'
          copy differs.
        */
        <Section density="standard" surface="brand" labelledBy="how-we-work">
          <h2
            id="how-we-work"
            className="max-w-2xl text-h2 font-semibold tracking-tight text-balance"
          >
            {content.howWeWork.title}
          </h2>
          {content.howWeWork.intro !== undefined && (
            <p className="mt-4 max-w-[var(--container-reading)] text-body-lg opacity-90">
              {content.howWeWork.intro}
            </p>
          )}
          <ul
            className={`mt-10 grid gap-6 ${
              content.howWeWork.items.length % 2 === 0
                ? 'sm:grid-cols-2'
                : 'sm:grid-cols-3'
            }`}
          >
            {content.howWeWork.items.map((item) => {
              const Icon = HOW_WE_WORK_ICONS[item.icon]
              return (
                <li
                  key={item.title}
                  className="rounded-md border border-white/15 p-6"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-white/80"
                    />
                    <h3 className="text-base font-medium">{item.title}</h3>
                  </div>
                  <p className="mt-1 text-sm leading-6 opacity-80">
                    {item.description}
                  </p>
                </li>
              )
            })}
          </ul>
          <div className="mt-10">
            <ButtonLink href={PRIMARY_CTA.href} variant="secondary">
              {PRIMARY_CTA.label}
            </ButtonLink>
          </div>
        </Section>
      ) : (
        <AuthorityBand title="How we work" />
      )}

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      {/*
        ⚠ `ServiceComparison` is always a brand/navy surface, same as
        `AuthorityBand` above. `ProofGallery` and `TestimonialBand` both
        render null while their governing datasets stay empty (see their
        own file headers), so they are not a reliable separator today —
        `LeadFormSection` (always renders, `surface="muted"` by default)
        is placed directly before `ServiceComparison` instead, so the two
        brand surfaces never touch regardless of proof/testimonial data
        state (18 §11).
      */}
      <LeadFormSection />

      {content.comparison !== undefined && (
        <ServiceComparison content={content.comparison} />
      )}

      {content.showMarkets === true && (
        <MarketCoverage density="standard" title="Where this service is available" />
      )}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related services'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
        />
      )}

      {/*
        The FAQ heading names the page's entity rather than using
        `FaqSection`'s shared "Common questions" default.

        Same reasoning as the service index descriptions and the final
        CTA: a heading that repeats the page's primary keyword
        reinforces the entity signal the H1, meta description and CTA
        already carry. The name is resolved from the registry against
        the id on the page record, so it is data this page already
        holds rather than a string to hand-write per page.

        `undefined` rather than a literal fallback: FaqSection owns the
        default, and repeating it here would be a second place to
        change it. No page record currently reaches this path without
        the id (audited across all 10 service pages), so the branch is a guard, not
        an expected state.
      */}
      {content.faq !== undefined && (
        <FaqSection
          title={
            page.serviceId !== undefined
              ? `Common questions about ${getService(page.serviceId).name}`
              : undefined
          }
          entries={content.faq}
        />
      )}

      {/*
        ⚠ `action={null}`, NOT OMITTED. The form in `proof` carries its
        own submit button, so a second one pointing at `/contact/` is a
        competing ask beside a form already on screen rather than a
        stronger one (18 §62) — the same rule the home page's and
        `/about/`'s closing CTA already follow.
      */}
      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
        action={null}
        proof={
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <LeadFormSection bare density="standard" idPrefix="cta-lead" />
          </div>
        }
      />
    </PageShell>
  )
}
