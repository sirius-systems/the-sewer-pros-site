import { Section, Prose, Container, type SectionDensity } from '@/components/ui'
import { FaqSection, RelatedLinks, CtaSection } from '@/components/sections'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ResourcePageContent } from '@/types'

/**
 * Resource article.
 *
 * Structure from docs/18-design-system.md §115:
 *
 *   Article Hero → Optional TOC → Direct Answer → Detailed Sections
 *   → Visuals/Diagrams → Related Questions → Relevant Service CTA
 *   → Related Resources
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
 *    related questions -> service CTA). Under CLAUDE.md §97 the
 *    subject-specific document wins over a general composition port.
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
    ...(content.faq !== undefined ? (['dense'] as const) : []),
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []),
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
      */}
      <Container>
        <CtaSection
          variant="band"
          title={content.cta?.title ?? 'Want the condition documented?'}
          body={content.cta?.body}
        />
      </Container>
    </PageShell>
  )
}
