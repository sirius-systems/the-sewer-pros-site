import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { CameraImageSlot } from '../CameraImageSlot'
import { resolveHubImage, type HubImageKey } from '@/data/business/hub-images'

/**
 * Numbered process. A horizontal timeline from 1000px up, a vertical
 * stepper below it. Then the preparation row: photo left, list right.
 *
 * The step count is fixed per page in the data (4 to 6); the grid is
 * sized from it so a page with five steps gets five columns.
 */
const COLUMNS: Record<number, string> = {
  4: 'min-[1000px]:grid-cols-4',
  5: 'min-[1000px]:grid-cols-5',
  6: 'min-[1000px]:grid-cols-6',
}

export function ProcessTimeline({
  id,
  eyebrow,
  title,
  intro,
  steps,
  prep,
  surface = 'muted',
}: {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  steps: readonly { title: string; description: string }[]
  prep?: {
    title: string
    items: readonly string[]
    image?: HubImageKey
    access?: { title: string; body: string }
  }
  surface?: 'default' | 'muted'
}) {
  const prepImage =
    prep?.image !== undefined && resolveHubImage(prep.image) !== null
      ? prep.image
      : undefined
  return (
    <Section density="standard" surface={surface} labelledBy={id}>
      <SectionHeading
        id={id}
        eyebrow={eyebrow}
        title={title}
        intro={intro !== undefined ? <p>{intro}</p> : undefined}
      />
      <ol
        className={`mt-10 grid gap-8 min-[1000px]:gap-6 ${COLUMNS[steps.length] ?? 'min-[1000px]:grid-cols-5'}`}
      >
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative grid grid-cols-[2.75rem_1fr] gap-x-4 min-[1000px]:block"
          >
            <span className="flex flex-col items-center min-[1000px]:block">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-body font-semibold text-brand-foreground tabular-nums"
              >
                {index + 1}
              </span>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mt-2 w-px flex-1 bg-border min-[1000px]:hidden"
                />
              )}
            </span>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-[1.375rem] left-14 hidden h-px w-[calc(100%-2rem)] bg-border min-[1000px]:block"
              />
            )}
            <div className="min-[1000px]:mt-4">
              <h3 className="text-h4 font-semibold text-foreground">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-1 text-body-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {prep !== undefined && (
        <div className="mt-14 grid gap-x-12 gap-y-8 border-t border-border pt-10 lg:grid-cols-12 lg:items-center">
          {prepImage !== undefined ? (
            <div className="lg:col-span-5">
              <CameraImageSlot
                slot={prepImage}
                hideCaption
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          ) : (
            prep.access !== undefined && (
              <div className="lg:col-span-5">
                <h3 className="text-h3 font-semibold tracking-tight text-foreground">
                  {prep.access.title}
                </h3>
                <p className="mt-4 text-body-sm text-muted-foreground">{prep.access.body}</p>
              </div>
            )
          )}
          <div
            className={
              prepImage !== undefined
                ? 'lg:col-span-7'
                : prep.access !== undefined
                  ? 'lg:col-span-7'
                  : 'lg:col-span-12'
            }
          >
            <h3 className="text-h3 font-semibold tracking-tight text-foreground">
              {prep.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {prep.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-border pb-3 text-body-sm text-foreground last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Section>
  )
}
