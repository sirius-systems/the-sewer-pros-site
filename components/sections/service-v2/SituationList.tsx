import type { ReactNode } from 'react'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'

/**
 * Neighbouring situations as ruled rows: a short heading and a sentence or
 * two, which may carry an inline approved link. The rows themselves are not
 * links, so each destination appears once, inside the text.
 *
 * It sits on the white surface and closes with a hairline, because the
 * market cards that follow are on white too.
 */
export function SituationList({
  id,
  eyebrow,
  title,
  items,
  surface = 'default',
}: {
  id: string
  eyebrow?: string
  title: string
  items: readonly { title: string; body: ReactNode }[]
  surface?: 'default' | 'muted'
}) {
  return (
    <Section
      density="dense"
      surface={surface}
      labelledBy={id}
      className={surface === 'default' ? 'border-b border-border' : undefined}
    >
      <SectionHeading id={id} eyebrow={eyebrow} title={title} />
      <ul className="mt-8 border-t border-border">
        {items.map((item) => (
          <li
            key={item.title}
            className="grid gap-x-8 gap-y-1 border-b border-border py-5 last:border-b-0 md:grid-cols-[14rem_1fr] md:items-baseline"
          >
            <h3 className="text-h4 font-semibold text-foreground">{item.title}</h3>
            <p className="text-body-sm text-muted-foreground [&_a]:font-semibold [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
