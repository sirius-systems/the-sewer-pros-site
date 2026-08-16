import type { ReactNode } from 'react'
import { Section, Accordion, AccordionItem } from '@/components/ui'
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
}

export function FaqSection({
  id = 'faq',
  title = 'Common questions',
  intro,
  entries,
  openFirst = false,
  questionLevel = 'h3',
}: FaqSectionProps) {
  // 18 §120 — render nothing rather than an empty shell.
  if (entries.length === 0) return null

  return (
    <Section density="dense" width="reading" labelledBy={id}>
      <SectionHeading id={id} title={title} intro={intro} />

      <Accordion className="mt-8">
        {entries.map((entry, index) => (
          <AccordionItem
            key={entry.question}
            question={entry.question}
            headingLevel={questionLevel}
            defaultOpen={openFirst && index === 0}
          >
            {entry.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
