import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { CameraImageSlot } from '../CameraImageSlot'
import { resolveHubImage, type HubImageKey } from '@/data/business/hub-images'

/**
 * What to ask for before booking: a numbered, ruled list on the left and
 * a "keep" panel with a 4:3 image on the right. It lists questions, not
 * deliverables, so it asserts nothing the service includes.
 */
export function AskList({
  id,
  eyebrow,
  title,
  intro,
  items,
  keep,
  surface = 'muted',
}: {
  id: string
  eyebrow?: string
  title: string
  intro: string
  items: readonly { title: string; description: string }[]
  keep: { title: string; body: readonly string[]; image?: HubImageKey }
  surface?: 'default' | 'muted'
}) {
  const keepImage =
    keep.image !== undefined && resolveHubImage(keep.image) !== null
      ? keep.image
      : undefined
  return (
    <Section density="standard" surface={surface} labelledBy={id}>
      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <SectionHeading
            id={id}
            eyebrow={eyebrow}
            title={title}
            intro={<p>{intro}</p>}
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
                  {index + 1}
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
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-md border border-border bg-surface">
            {keepImage !== undefined && (
              <CameraImageSlot
                slot={keepImage}
                hideCaption
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="[&>div]:rounded-none [&>div]:border-0"
              />
            )}
            <div className="p-6 sm:p-8">
              <h3 className="text-h4 font-semibold text-foreground">{keep.title}</h3>
              {keep.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-body-sm text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
