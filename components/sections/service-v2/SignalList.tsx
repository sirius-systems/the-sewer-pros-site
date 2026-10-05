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
  items,
  image,
}: {
  id: string
  eyebrow?: string
  title: string
  note?: ReactNode
  items: readonly { title: string; description: string }[]
  image?: HubImageKey
}) {
  const showImage = image !== undefined && resolveHubImage(image) !== null
  return (
    <Section density="standard" surface="muted" labelledBy={id}>
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
        <div className={showImage ? 'lg:col-span-7' : 'lg:col-span-12'}>
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
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
