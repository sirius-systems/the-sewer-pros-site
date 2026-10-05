import type { ReactNode } from 'react'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { CameraImageSlot } from '../CameraImageSlot'
import { resolveHubImage, type HubImageKey } from '@/data/business/hub-images'

/**
 * "When it may be useful": a photo beside a ruled, numbered list.
 * Replaces the six-card schedule grid. Numerals and rules carry the
 * hierarchy; there are no cards and no icon bubbles.
 */
export function SignalList({
  id,
  eyebrow,
  title,
  note,
  after,
  items,
  image,
  surface = 'muted',
  numbered = true,
  density = 'standard',
}: {
  id: string
  eyebrow?: string
  title: string
  note?: ReactNode
  after?: ReactNode
  items: readonly { title: string; description?: string }[]
  image?: HubImageKey
  /** Absent: muted. */
  surface?: 'default' | 'muted'
  /** `false` renders plain bullets (no numerals, no headings). Absent: numbered. */
  numbered?: boolean
  /** Spacing; the template declares the same value to the rhythm check. Absent: standard. */
  density?: 'standard' | 'dense'
}) {
  const showImage = image !== undefined && resolveHubImage(image) !== null
  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-start">
        {showImage && (
          <div className="lg:col-span-5">
            <CameraImageSlot
              slot={image}
              hideCaption
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        )}
        {(() => {
          const heading = (
            <SectionHeading
            id={id}
            eyebrow={eyebrow}
            title={title}
            intro={
              note === undefined ? undefined : typeof note === 'string' ? (
                <p>{note}</p>
              ) : (
                <p className="[&_a]:font-semibold [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
                  {note}
                </p>
              )
            }
          />
          )
          const list = numbered === false ? (
          <ul className="mt-8 border-t border-border">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex gap-3 border-b border-border py-3 text-body-sm text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-secondary"
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          ) : (
          <ol className="mt-8 border-t border-border">
            {items.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-border py-4"
              >
                <span
                  aria-hidden="true"
                  className="text-h4 font-semibold text-accent-secondary tabular-nums"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-h4 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.description !== undefined && (
                    <p className="mt-1 text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
          )
          const columnClass = showImage ? 'lg:col-span-7' : 'lg:col-span-12'
          // Two branches so an entry without `after` renders the same tree as before.
          return after === undefined ? (
            <div className={columnClass}>
              {heading}
              {list}
            </div>
          ) : (
            <div className={columnClass}>
              {heading}
              {list}
              <p className="mt-6 max-w-[var(--container-reading)] text-body text-muted-foreground [&_a]:font-semibold [&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
                {after}
              </p>
            </div>
          )
        })()}
      </div>
    </Section>
  )
}
