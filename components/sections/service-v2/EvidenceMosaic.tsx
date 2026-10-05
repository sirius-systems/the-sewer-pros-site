import type { ReactNode } from 'react'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { CameraImageSlot } from '../CameraImageSlot'
import { resolveHubImage, type HubImageKey } from '@/data/business/hub-images'

interface EvidenceItem {
  slot: HubImageKey
  title: string
  description: string
}

/** Renders only with three or more approved images (spec section 2). */
export function evidenceMosaicRenders(
  items: readonly EvidenceItem[] | undefined,
): boolean {
  return (
    items !== undefined &&
    items.filter((item) => resolveHubImage(item.slot) !== null).length >= 3
  )
}

function Tile({
  item,
  sizes,
  className,
}: {
  item: EvidenceItem
  sizes: string
  className?: string
}) {
  return (
    <figure className={className}>
      <CameraImageSlot slot={item.slot} hideCaption sizes={sizes} />
      <figcaption className="mt-3">
        <h3 className="text-h4 font-semibold text-foreground">{item.title}</h3>
        <p className="mt-1 text-body-sm text-muted-foreground">
          {item.description}
        </p>
      </figcaption>
    </figure>
  )
}

/**
 * One large tile, two small, one wide; a caption under each and a caveat
 * line beneath. The first four items fill the pattern in order.
 */
export function EvidenceMosaic({
  id,
  title,
  intro,
  items,
  caveat,
}: {
  id: string
  title: string
  intro: string | ReactNode
  items: readonly EvidenceItem[]
  caveat: string
}) {
  const [large, smallA, smallB, wide] = items
  return (
    <Section density="standard" surface="default" labelledBy={id}>
      <SectionHeading
        id={id}
        title={title}
        intro={typeof intro === 'string' ? <p>{intro}</p> : intro}
      />
      <div className="mt-8 grid gap-x-8 gap-y-10 lg:grid-cols-12">
        {large !== undefined && (
          <Tile
            item={large}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="lg:col-span-7"
          />
        )}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {smallA !== undefined && (
            <Tile
              item={smallA}
              sizes="(min-width: 1024px) 35vw, (min-width: 640px) 45vw, 100vw"
            />
          )}
          {smallB !== undefined && (
            <Tile
              item={smallB}
              sizes="(min-width: 1024px) 35vw, (min-width: 640px) 45vw, 100vw"
            />
          )}
        </div>
        {wide !== undefined && (
          <figure className="grid items-center gap-x-8 gap-y-4 border-t border-border pt-10 lg:col-span-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <CameraImageSlot
                slot={wide.slot}
                hideCaption
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <figcaption className="lg:col-span-7">
              <h3 className="text-h4 font-semibold text-foreground">{wide.title}</h3>
              <p className="mt-1 text-body-sm text-muted-foreground">
                {wide.description}
              </p>
            </figcaption>
          </figure>
        )}
      </div>
      <p className="mt-8 max-w-[var(--container-reading)] text-body-sm text-muted-foreground">
        {caveat}
      </p>
    </Section>
  )
}
