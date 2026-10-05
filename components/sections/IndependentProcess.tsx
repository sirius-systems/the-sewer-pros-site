import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import {
  CameraIcon,
  DocumentIcon,
  ChecklistIcon,
  IndependenceIcon,
  ExplanationIcon,
} from './section-icons'

/**
 * Independence section: Inspect, Document, Decide.
 *
 * Originally built to replace the homepage's use of `Differentiator`
 * (the comparison table, "Diagnosis separated from the sale"). As of
 * 2026-09-22 it replaces every other use of `Differentiator` too:
 * `HubPageTemplate` (`/services/`), `ServicePageTemplate` (four
 * individual service pages plus the St. Louis lateral-reporting page),
 * `MarketPageTemplate` (all three market hubs) and
 * `AudiencePageTemplate` (all six audience pages). `Differentiator.tsx`
 * and `differentiatorComparison` (`data/business/positioning.ts`) were
 * removed as part of that swap — nothing calls them anymore. See
 * `docs/22-decisions-change-log.md` for the entry recording this.
 *
 * Content is the fixed, approved copy below — the same on every page
 * that renders it, by default (carrying forward DEC-099's "one source
 * for every page" rule) — UNLESS a caller passes `content`, an optional,
 * fully partial override. Every field left out keeps this file's
 * approved copy, so no existing page changes unless it explicitly opts
 * in. `density` is the only other thing that varies per caller, matching
 * each page's own section rhythm.
 *
 * ⚠ 2026-09-27: the sewer-cleaning-camera-inspection hub is the first
 * page to pass `content` (a hub-specific rewrite — repair positioned as
 * something The Sewer Pros does not do at all, not just something it
 * has no contract to sell — was requested for that one page). Adding
 * this override rather than editing the copy below in place keeps every
 * other DEC-099 page byte-for-byte unchanged.
 *
 * Tone (01 §72, CLAUDE.md §9, §27): describes what The Sewer Pros does
 * and does not do, and what having no repair contract to sell means
 * for the incentive. Says nothing about repair contractors' conduct in
 * general — no claim that competitors mislead or over-recommend.
 *
 * ⚠ RIDGID. Owner-confirmed equipment fact, named exactly once in the
 * Inspect card body. CLAUDE.md §24 lists equipment specifications among
 * facts Claude must not invent; this one is not invented, it is
 * supplied. Recorded here rather than only in this component because
 * nothing else in the repository names it — worth a decision-log entry
 * if it is meant to recur on other pages.
 *
 * ⚠ CONTRAST. `--accent` green measures about 2.6:1 on the navy
 * surface, below the 3:1 a graphic needs, so the cards and the callouts
 * are light surfaces. Green icons sit on white (5.45:1). Green outside
 * a conversion action is an owner-directed exception, as in
 * `Differentiator` and `TrustBar` (DEC-096).
 *
 * ⚠ THE SECOND CALLOUT USES `--warning`, NOT A NEW COLOUR. It is the
 * same approved semantic-state token `LateralResponsibility` and
 * `ProblemGrid` already use for a caution note (18 §8), reused here
 * rather than adding an "amber" of its own.
 *
 * ⚠ NO TRIANGLE. 18 §89 and CLAUDE.md §27 rule out urgency/alarm
 * visuals, and a warning triangle is exactly that. `ExplanationIcon`
 * (a speech bubble, already used elsewhere for plain-language
 * explanation) carries the "read this" role without it.
 *
 * ⚠ FOCUS. The global focus ring is `--accent-secondary`, which is
 * near-invisible on navy. The CTA overrides it to white, and the
 * override is important because unlayered global CSS beats utilities.
 *
 * Copy is owner-supplied and reproduced exactly, aside from the em
 * dashes: no em dashes in customer-facing copy, so each is replaced
 * with a comma.
 */

const STEPS = [
  {
    title: 'Inspect',
    Icon: CameraIcon,
    body: 'We use professional-grade RIDGID sewer camera equipment to examine the line for blockages, roots, damage, offsets, standing water, and other visible conditions.',
  },
  {
    title: 'Document',
    Icon: DocumentIcon,
    body: 'We inspect and document visible conditions inside the line, so you are not forced to rely only on a verbal repair recommendation.',
  },
  {
    title: 'Decide',
    Icon: ChecklistIcon,
    body: 'Use the findings to determine whether the issue calls for cleaning, monitoring, a repair estimate, or another qualified opinion, without pressure to buy a repair from us.',
  },
] as const

/**
 * Every field is optional; a caller passing `content` only overrides what
 * it names, and each of the three `steps` entries only overrides that
 * step's own `title`/`body` — its icon always comes from `STEPS` above
 * by position, since the icon is not something a page rewrites.
 */
export interface IndependentProcessContent {
  eyebrow?: string
  title?: string
  intro?: readonly string[]
  steps?: readonly { title?: string; body?: string }[]
  calloutOne?: { title?: string; body?: readonly string[] }
  /** `null` omits the second callout entirely, rather than falling back to the default. */
  calloutTwo?: { title?: string; body?: readonly string[] } | null
  ctaLabel?: string
  ctaNote?: string
  /** `null` omits the closing paragraph entirely, rather than falling back to the default. */
  closing?: string | null
}

export interface IndependentProcessProps {
  density?: SectionDensity
  id?: string
  /** Per-page override. Omit to render the shared, approved default copy (DEC-099). */
  content?: IndependentProcessContent
}

export function IndependentProcess({
  density = 'dense',
  id = 'independent',
  content,
}: IndependentProcessProps = {}) {
  const eyebrow = content?.eyebrow ?? 'Independent sewer inspection & second opinions'
  const title =
    content?.title ??
    'Before You Approve an Expensive Sewer Repair, Get an Opinion With Nothing to Sell'
  const intro = content?.intro ?? [
    'A sewer backup or major repair recommendation can make a costly decision feel urgent. The Sewer Pros inspects and documents the condition inside your sewer line so you can understand what is actually happening before you approve cleaning, excavation, lining, or replacement.',
    'Because we do not perform sewer repairs or replacements, we do not profit from selling you the work. Our role is to inspect and document visible conditions, explain what we found in plain language, and give you an honest opinion you can use to make the next decision.',
  ]
  const ctaLabel = content?.ctaLabel ?? 'Get an Independent Second Opinion'
  const ctaNote =
    content?.ctaNote ??
    'Already received a repair recommendation? Bring us in for an independent second opinion before you sign off on major work.'
  const steps = STEPS.map((step, index) => ({
    Icon: step.Icon,
    title: content?.steps?.[index]?.title ?? step.title,
    body: content?.steps?.[index]?.body ?? step.body,
  }))
  const calloutOneTitle = content?.calloutOne?.title ?? 'Why an independent opinion matters'
  const calloutOneBody = content?.calloutOne?.body ?? [
    'The Sewer Pros does not perform sewer repair or replacement, by design. We are not trying to turn an inspection into a repair sale, and we do not profit from recommending major work.',
    'Our role is to inspect the line, document the visible condition, explain what we found in plain language, and give you an honest opinion you can use to decide what happens next.',
  ]
  /*
    ⚠ `null` OMITS THE SECOND CALLOUT, `undefined` KEEPS THE DEFAULT.
    Every existing caller either omits `content` entirely or omits
    `calloutTwo` within it, so `content?.calloutTwo === null` is false
    for all of them and this section is unchanged. A page passing
    `calloutTwo: null` explicitly opts out (18 §106 — "one concise
    callout" is a page-specific choice, not a change to the shared
    default).
  */
  const showCalloutTwo = content?.calloutTwo !== null
  const calloutTwoTitle =
    content?.calloutTwo?.title ?? 'Do Not Let a Sales-Driven Recommendation Make the Decision for You'
  const calloutTwoBody = content?.calloutTwo?.body ?? [
    'A repair recommendation should be based on documented conditions inside the sewer line, not pressure to approve work before you understand the problem. When the company diagnosing the problem can also sell the repair, getting a second opinion can help you separate the actual condition of the line from the proposed solution.',
    'The Sewer Pros does not repair or replace sewer lines. We inspect and document visible conditions without a repair contract to sell, so you can understand what was observed and make an informed decision about what happens next.',
  ]
  /** Same `null`-omits, `undefined`-defaults convention as `calloutTwo` above. */
  const showClosing = content?.closing !== null
  const closing =
    content?.closing ??
    'Do not approve a major sewer repair based only on a sales-driven recommendation. The Sewer Pros does not repair or replace sewer lines, by design, so we have no repair contract to sell. Get a documented second opinion before you approve the expense.'

  return (
    <Section density={density} surface="brand" width="wide" labelledBy={id}>
      <p className="text-caption font-semibold tracking-wide uppercase opacity-80">{eyebrow}</p>
      <h2
        id={id}
        className="mt-2 max-w-5xl text-h2 font-semibold tracking-tight text-balance"
      >
        {title}
      </h2>
      <div className="mt-4 max-w-4xl space-y-5 text-body-lg leading-8 opacity-90">
        {intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6">
        <ButtonLink
          href={PRIMARY_CTA.href}
          variant="primary"
          className="ring-2 ring-white focus-visible:outline-white!"
        >
          {ctaLabel}
        </ButtonLink>
        {/*
          `PRIMARY_CTA.href` is `/contact/`, the only approved
          conversion destination in doc 04 (05 §-, 17 §288). There is
          no approved dedicated second-opinion route —
          `svc-independent-sewer-second-opinion` is Phase 2 and not
          built (data/pages/approved-pages.ts) — so this CTA reuses the
          existing inspection-scheduling destination rather than
          creating one.
        */}
        <p className="mt-3 max-w-4xl text-sm leading-6 opacity-80">{ctaNote}</p>
      </div>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map(({ title: stepTitle, Icon, body }) => (
          <li key={stepTitle} className="flex">
            <article className="w-full rounded-md border border-border bg-background p-6 text-foreground">
              <Icon aria-hidden="true" className="h-10 w-10 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{stepTitle}</h3>
              <p className="mt-2 text-lg leading-8 text-muted-foreground">
                {body}
              </p>
            </article>
          </li>
        ))}
      </ol>

      <aside className="mt-8 flex items-start gap-4 rounded-md border-l-4 border-accent bg-[color-mix(in_srgb,var(--color-accent)_8%,white)] p-6 text-foreground">
        <IndependenceIcon
          aria-hidden="true"
          className="mt-0.5 h-8 w-8 shrink-0 text-accent"
        />
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{calloutOneTitle}</h3>
          {calloutOneBody.map((paragraph) => (
            <p key={paragraph} className="max-w-4xl text-lg leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </aside>

      {/*
        Second, visually separate callout. `border-warning` and the
        opaque `--warning`-tinted background are `ProblemGrid`'s and
        `LateralResponsibility`'s own caution treatment (`--warning`, an
        approved semantic-state token, 18 §8) rather than a new colour,
        and the gap from the callout above keeps the two readable as
        separate asides instead of one long block.

        Omitted entirely, not hidden, when `content.calloutTwo` is
        explicitly `null` — see the `showCalloutTwo` note above.
      */}
      {showCalloutTwo && (
        <aside className="mt-6 flex items-start gap-4 rounded-md border-l-4 border-warning bg-[color-mix(in_srgb,var(--color-warning)_10%,white)] p-5 text-foreground">
          <ExplanationIcon
            aria-hidden="true"
            className="mt-0.5 h-8 w-8 shrink-0 text-warning"
          />
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{calloutTwoTitle}</h3>
            {calloutTwoBody.map((paragraph) => (
              <p key={paragraph} className="max-w-4xl text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </aside>
      )}

      {showClosing && (
        <p className="mt-10 max-w-5xl text-body-lg leading-8">{closing}</p>
      )}
    </Section>
  )
}
