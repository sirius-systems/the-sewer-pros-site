import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  FaqSection,
  RelatedLinks,
  CtaSection,
  relatedLinksRenders,
  faqSectionRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ResourcePageContent } from '@/types'

/**
 * Resource article.
 *
 * Structure from docs/18-design-system.md §115:
 *
 *   Article Hero → Optional TOC → Direct Answer → Detailed Sections
 *   → Visuals/Diagrams → Related Questions → Related Resources
 *   → Relevant Service CTA
 *
 * §115 listed the service CTA between the FAQ and the related strip
 * until 2026-08-23. This file never rendered that order, and DEC-082
 * corrected the document to the rendered one rather than moving the
 * CTA in code.
 *
 * 18 §41 and §109: editorial and educational. The hero is a plain
 * heading block rather than the `Hero` section — 18 §41 warns against
 * "oversized conversion banners before the user receives the answer",
 * so there is no CTA above the content.
 *
 * ---------------------------------------------------------------------------
 * ANSWER-FIRST IS STRUCTURAL, NOT STYLISTIC
 * ---------------------------------------------------------------------------
 * `directAnswer` renders immediately after the title, before the
 * detailed sections. 14 §35 specifies Question → Direct Answer →
 * Explanation, and 12's AEO strategy depends on that answer being
 * early, plain, and in the static HTML.
 *
 * It is rendered openly rather than inside an accordion — 18 §68
 * forbids pushing core content into accordions to shorten a page.
 *
 * ---------------------------------------------------------------------------
 * ⚠ dateModified
 * ---------------------------------------------------------------------------
 * Displayed only when supplied. 18 §78 and CLAUDE.md §78: never update
 * it to make content look fresh — only when substantive changes justify
 * it. No default of "today" exists here for that reason, and a
 * build-time `new Date()` would silently restamp every article on every
 * deploy.
 *
 * No author byline. 15 §49: omit rather than invent an author.
 *
 * ---------------------------------------------------------------------------
 * DELIBERATELY EXCLUDED FROM THE PORTED COMPOSITION
 * ---------------------------------------------------------------------------
 * This family takes NONE of it: no trust strip, no problem grid, no
 * inclusions grid, no authority band, no proof, no testimonial, no
 * form, and the closing CTA stays a `band` rather than a `panel`.
 *
 * Two reasons, and neither is oversight:
 *
 * 1. 17 §19 requires informational content to progress without forcing
 *    the reader into a form. Stacking a service page's conversion
 *    machinery onto an article inverts that.
 * 2. 18 §115 is the subject-specific authority for this type and
 *    already prescribes its order (hero -> direct answer -> detail ->
 *    related questions -> related resources -> service CTA). Under
 *    CLAUDE.md §97 the subject-specific document wins over a general
 *    composition port.
 *
 * The section ORDER is therefore also unchanged - including the FAQ
 * sitting before the related strip, which is the reverse of every other
 * family after the port. That is §115's order, not drift. Do not
 * "correct" it for consistency.
 */
export interface ResourcePageTemplateProps {
  page: MasterPageRecord
  content: ResourcePageContent
}

export function ResourcePageTemplate({
  page,
  content,
}: ResourcePageTemplateProps) {
  const densities: SectionDensity[] = [
    'standard',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    // The closing CTA is a `band`, not a `panel`, and CtaSection
    // renders a band at `dense` (`isPanel ? sparse : dense`). This
    // entry read `sparse` and therefore described a page that does not
    // exist -- the rhythm check was validating a fiction on this family.
    // Verified against rendered output.
    'dense',
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
      <Section density="standard" width="reading" as="article">
        <header>
          {content.hero.eyebrow !== undefined && (
            <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              {content.hero.eyebrow}
            </p>
          )}

          <h1 className="mt-3 text-h1 font-semibold tracking-tight text-balance">
            {content.hero.title}
          </h1>

          {content.dateModified !== undefined && (
            <p className="mt-4 text-caption text-muted-foreground">
              Updated{' '}
              <time dateTime={content.dateModified}>
                {content.dateModified}
              </time>
            </p>
          )}
        </header>

        {content.directAnswer !== undefined && (
          <div className="mt-8 border-l-4 border-l-accent bg-surface-muted py-5 pr-5 pl-6">
            <Prose className="max-w-none">{content.directAnswer}</Prose>
          </div>
        )}

        {content.hero.intro !== undefined && (
          <div className="mt-8 text-body-lg text-muted-foreground">
            {content.hero.intro}
          </div>
        )}
      </Section>

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {/*
        ⚠ ORDER IS DELIBERATE: FAQ BEFORE RELATED. DO NOT "FIX" THIS.
        ---------------------------------------------------------------
        Every other template runs related → FAQ → CTA after the
        composition port. This one is the reverse, and that is correct.

        18 §115 prescribes this family's order directly: detailed
        sections → Related Questions → Related Resources → service CTA.
        Under CLAUDE.md §97 a subject-specific document beats a general
        composition standard, so §115 governs here and the port does not.

        Reordering these two to match the other eleven templates would
        be a regression against §115, not a consistency improvement.
        See this file's header, DEC-081, and DEC-082.

        (Only the FAQ/related pair is inverted. The closing CTA is last
        here exactly as it is everywhere else — §115 said otherwise
        until DEC-082 corrected it to the order this file renders.)
      */}
      {content.faq !== undefined && (
        <FaqSection title="Related questions" entries={content.faq} />
      )}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related resources'}
          pageIds={content.relatedPageIds}
        />
      )}

      {/*
        18 §115 places a relevant SERVICE CTA at the end of an article,
        after the reader has the answer — a band rather than the full
        panel, since a resource page's job is comprehension first.

        NOT wrapped in a `Container`. `CtaSection` renders a `Section`,
        which supplies its own container, so an outer one nested a
        second identical `max-w`/`px` pair inside the first: the band's
        `bg-surface-muted` stopped at the container edge instead of
        bleeding, and its content carried doubled gutters. On the page
        that read as a boxed card sitting between the full-bleed related
        strip above it and the full-bleed footer below.
      */}
      <CtaSection
        variant="band"
        title={content.cta?.title ?? 'Want the condition documented?'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
