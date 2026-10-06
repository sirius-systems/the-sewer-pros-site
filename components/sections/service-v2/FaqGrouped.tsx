import type { ReactNode } from 'react'
import { Section, Accordion, AccordionItem } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { FaqTopicPills } from './FaqTopicPills'

export interface GroupedFaqEntry {
  group: string
  question: string
  answer: ReactNode
}

function slug(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Grouped FAQ with a topic list.
 *
 * The topics are server-rendered anchors shown as pills above the list; a
 * small client enhancement adds an "All" pill and filters by group (see
 * `FaqTopicPills`). Group labels are navigation only: the answers, and
 * the FAQPage markup the template derives from the same entries, never
 * include them. Native `<details>` keeps the accordion keyboard operable
 * with no script.
 */
export function FaqGrouped({
  id = 'faq',
  eyebrow,
  title,
  entries,
  surface = 'muted',
}: {
  id?: string
  eyebrow?: string
  title: string
  entries: readonly GroupedFaqEntry[]
  surface?: 'default' | 'muted'
}) {
  const groups: { label: string; id: string; items: GroupedFaqEntry[] }[] = []
  for (const entry of entries) {
    const last = groups[groups.length - 1]
    if (last !== undefined && last.label === entry.group) last.items.push(entry)
    else
      groups.push({
        label: entry.group,
        id: `faq-${slug(entry.group)}`,
        items: [entry],
      })
  }
  return (
    <Section density="dense" surface={surface} labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} />
      <div className="mt-8">
        <nav aria-labelledby="faq-topics">
          <p
            id="faq-topics"
            className="text-caption font-semibold tracking-wide text-muted-foreground uppercase"
          >
            Topics
          </p>
          <FaqTopicPills
            topics={groups.map((group) => ({ id: group.id, label: group.label }))}
          />
        </nav>
        <div className="mt-10 grid items-start gap-x-12 gap-y-10 min-[1000px]:grid-cols-2">
          {groups.map((group) => (
            <div key={group.id}>
              <h3
                id={group.id}
                className="scroll-mt-24 text-h3 font-semibold tracking-tight text-foreground"
              >
                {group.label}
              </h3>
              <Accordion className="mt-3">
                {group.items.map((entry) => (
                  <AccordionItem
                    key={entry.question}
                    question={entry.question}
                    headingLevel="h4"
                  >
                    {entry.answer}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
