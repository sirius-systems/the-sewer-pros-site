import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'

/**
 * Common misconceptions as ruled rows: the quoted claim on the left, the
 * plain answer on the right. No cards, no icons. The claim is quoted so it
 * reads as something being corrected, never as something the page asserts.
 */
export function MythList({
  id,
  eyebrow,
  title,
  items,
}: {
  id: string
  eyebrow?: string
  title: string
  items: readonly { myth: string; answer: string }[]
}) {
  return (
    <Section density="dense" surface="muted" labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} />
      <ul className="mt-8 border-t border-border">
        {items.map((item) => (
          <li
            key={item.myth}
            className="grid gap-x-8 gap-y-2 border-b border-border py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <h3 className="text-h4 font-semibold text-foreground">
              {'“'}
              {item.myth}
              {'”'}
            </h3>
            <p className="text-body-sm text-muted-foreground">{item.answer}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
