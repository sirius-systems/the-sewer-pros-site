import Image from 'next/image'
import { Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { CheckIcon } from './section-icons'
import { cn } from '@/lib/utils/cn'
import type { DeliverablesContent } from '@/types'

/**
 * "What you receive" — an editorial split with a checklist.
 *
 * Governed by docs/18-design-system.md §5.6, §11; docs/17-conversion-architecture.md;
 * CLAUDE.md §24, §42.
 *
 * ===========================================================================
 * ⚠ WHY THIS IS NOT `InclusionsGrid`
 * ===========================================================================
 * `InclusionsGrid` is an even grid of equal cards and three other
 * templates render it that way. This is a two-column split: artwork on
 * one side, a checklist and a closing panel on the other. Teaching the
 * grid a second layout would make one component answer two unrelated
 * composition questions, and every existing caller would carry the
 * branch it never takes.
 *
 * The page also renders two card grids immediately above this one. A
 * third would be the templated-site signal 18 §5.6 names by name; the
 * change of composition is the point.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE IMAGE IS OPTIONAL AND ITS ABSENCE IS A COMPLETE LAYOUT
 * ---------------------------------------------------------------------------
 * With no artwork this renders one readable column rather than a
 * two-column grid with a hole in it. That is deliberate: at the time
 * this shipped the intended San Diego asset did not exist in the
 * repository, and pointing at a missing file or substituting an
 * unrelated pipe photograph would both have been worse than no image.
 *
 * ---------------------------------------------------------------------------
 * ⚠ EVERY DELIVERABLE MUST BE SOMETHING THE BUSINESS ACTUALLY PRODUCES
 * ---------------------------------------------------------------------------
 * CLAUDE.md §24 forbids inventing a deliverable. In particular this
 * section must not promise a formal written report unless that is
 * verified for the service in question - "documentation of visible
 * conditions" and "a report" are different promises, and only the
 * first is supported.
 */
export interface DeliverablesSectionProps {
  content: DeliverablesContent
  density?: SectionDensity
  id?: string
}

export function DeliverablesSection({
  content,
  density = 'standard',
  id = 'what-you-receive',
}: DeliverablesSectionProps) {
  const hasImage = content.image !== undefined

  return (
    <Section density={density} labelledBy={id}>
      <div
        className={cn(
          'grid gap-10',
          /*
            ⚠ IMAGE FIRST IN THE SOURCE, SO IT IS SECOND ON MOBILE ONLY
            BY ORDER. The brief asks for heading and intro first on a
            phone; the copy column therefore carries `order-first` below
            `lg`, rather than the image being moved out of the reading
            order for assistive technology.
          */
          hasImage && 'lg:grid-cols-[5fr_7fr] lg:items-start',
        )}
      >
        {hasImage && content.image !== undefined && (
          <div className="order-2 lg:order-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-surface-muted">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        )}

        <div className={cn(hasImage && 'order-1 lg:order-none')}>
          <SectionHeading
            id={id}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          {content.intro?.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-body text-muted-foreground">
              {paragraph}
            </p>
          ))}

          {/*
            ⚠ A LIST, NOT A CARD GRID. These are items a visitor scans
            in order to answer "what do I get", and a grid turns an
            ordered answer into a lookup table.
          */}
          <ul className="mt-8 space-y-4">
            {content.items.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-accent text-white"
                >
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-body font-semibold text-foreground">
                    {item.title}
                  </p>
                  {item.description !== '' && (
                    <p className="mt-1 text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {content.panel !== undefined && (
            <div className="mt-8 rounded-md border border-border bg-surface-muted p-5 sm:p-6">
              <h3 className="text-body font-semibold text-foreground">
                {content.panel.title}
              </h3>
              <p className="mt-2 text-body-sm text-muted-foreground">
                {content.panel.body}
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

/** Whether the section has anything to render. */
export function deliverablesSectionRenders(
  content: DeliverablesContent | undefined,
): content is DeliverablesContent {
  return content !== undefined && content.items.length > 0
}
