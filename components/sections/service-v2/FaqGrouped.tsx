import type { ReactNode } from 'react'
import { Section, Accordion, AccordionItem } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'

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
 * The topic list is server-rendered anchors, sticky from 1000px and a
 * static list below. Group labels are navigation only: the answers, and
 * the FAQPage markup the template derives from the same entries, never
 * include them. Native `<details>` keeps the accordion keyboard operable
 * with no script.
 */
export function FaqGrouped({
  id = 'faq',
  title,
  entries,
}: {
  id?: string
  title: string
  entries: readonly GroupedFaqEntry[]
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
    <Section density="dense" surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={title} />
      <div className="mt-8 grid gap-x-12 gap-y-8 min-[1000px]:grid-cols-[15rem_1fr]">
        <nav
          aria-labelledby="faq-topics"
          className="min-[1000px]:sticky min-[1000px]:top-24 min-[1000px]:self-start"
        >
          <p
            id="faq-topics"
            className="text-caption font-semibold tracking-wide text-muted-foreground uppercase"
          >
            Topics
          </p>
          <ul className="mt-3 border-t border-border">
            {groups.map((group) => (
              <li key={group.id} className="border-b border-border">
                <a
                  href={`#${group.id}`}
                  className="flex min-h-11 items-center py-2 text-body-sm font-medium text-accent-secondary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
                >
                  {group.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-10">
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
