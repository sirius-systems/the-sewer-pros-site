import type { ReactNode } from 'react'
import { Section, Accordion, AccordionItem, type SectionSurface } from '@/components/ui'
import { SectionHeading } from './SectionHeading'

/**
 * FAQ section.
 *
 * Governed by docs/18-design-system.md §67-68, §133;
 * docs/14-content-specification.md §35 (answer-first);
 * docs/15-schema-entity-strategy.md §56-58.
 *
 * Density is `dense` per Appendix A — FAQs are named there as a dense
 * pattern, and a run of collapsed rows should read tighter than the
 * explanatory sections around it.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO FAQPage SCHEMA IS EMITTED HERE
 * ---------------------------------------------------------------------------
 * 15 §57-58 set a deliberate policy: do not mark up every FAQ block
 * automatically. Schema is step 15 and belongs to the schema layer,
 * where the decision to emit `FAQPage` is made per page against 15 §56.
 * Rendering FAQ markup from a presentational component would apply that
 * policy by accident.
 *
 * 18 §67 notes that important direct-answer content should not be
 * hidden when visibility improves the experience — hence `defaultOpen`
 * on the first item where the answer IS the page's primary value.
 * 18 §68 is the counterweight: do not push core content into
 * accordions merely to shorten the page.
 */
export interface FaqEntry {
  question: string
  answer: ReactNode
}

export interface FaqSectionProps {
  id?: string
  title?: string
  intro?: string
  entries: readonly FaqEntry[]
  /** Opens the first entry — for pages where the answer is the point. */
  openFirst?: boolean
  /** Heading level for questions, matching the page outline (18 §15). */
  questionLevel?: 'h3' | 'h4'
  /**
   * Surface for the FAQ band.
   *
   * Defaults to `default` so existing pages are unchanged. Composing
   * templates set `muted` where the FAQ follows a full-width section:
   * this section is `width="reading"`, so its left edge sits well inside
   * the one above it. On a shared white background that inset reads as a
   * misalignment; with a surface change it reads as a distinct band,
   * which is what it is. Same reasoning as `RelatedLinks`, which already
   * defaults to `muted` for supplementary content.
   */
  surface?: SectionSurface
  /**
   * Column count for the question list.
   *
   * `1` is the default and stays byte-identical to today's output for
   * every other caller — most pages carry three to six entries, where a
   * split would leave a column of one or two beside a column of two.
   *
   * `2` is opted into by HomePageTemplate, whose 14 entries split 7/7
   * (owner-directed, 2026-09-03). The two-column branch drops
   * `width="reading"`: a single reading measure cannot hold two
   * accordion columns without each becoming unreadably narrow, so it
   * uses the container's `standard` width instead.
   */
  columns?: 1 | 2
}

/**
 * Whether `FaqSection` renders anything.
 *
 * An authored but empty entry list renders nothing rather than an
 * empty accordion (18 §120), so supplying `faq` is not the same as
 * having one.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function faqSectionRenders(
  entries: readonly FaqEntry[] | undefined,
): boolean {
  return entries !== undefined && entries.length > 0
}

export function FaqSection({
  id = 'faq',
  title = 'Common questions',
  intro,
  entries,
  openFirst = false,
  questionLevel = 'h3',
  surface = 'default',
  columns = 1,
}: FaqSectionProps) {
  // 18 §120 — render nothing rather than an empty shell.
  if (entries.length === 0) return null

  // `startIndex` keeps `openFirst` meaning "the first entry on the
  // page", not "the first entry in this column" — otherwise the split
  // would open the top of both columns.
  const renderList = (list: readonly FaqEntry[], startIndex: number) => (
    <Accordion>
      {list.map((entry, i) => (
        <AccordionItem
          key={entry.question}
          question={entry.question}
          headingLevel={questionLevel}
          defaultOpen={openFirst && startIndex + i === 0}
        >
          {entry.answer}
        </AccordionItem>
      ))}
    </Accordion>
  )

  if (columns === 2) {
    // `ceil` puts the extra entry in the left column on odd counts, so
    // the columns never differ by more than one.
    const mid = Math.ceil(entries.length / 2)

    return (
      <Section density="dense" surface={surface} labelledBy={id}>
        <SectionHeading id={id} title={title} intro={intro} />

        <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
          {renderList(entries.slice(0, mid), 0)}
          {renderList(entries.slice(mid), mid)}
        </div>
      </Section>
    )
  }

  return (
    <Section density="dense" width="reading" surface={surface} labelledBy={id}>
      <SectionHeading id={id} title={title} intro={intro} />

      <div className="mt-8">{renderList(entries, 0)}</div>
    </Section>
  )
}
