import { cn } from '@/lib/utils/cn'
import type { CardImage } from '@/types'

/**
 * Labelled review-build box for an unfilled image slot ("Image slot: <id>").
 *
 * Renders nothing unless the image carries `placeholder` metadata, which only
 * `resolveSlotImage` produces, and only while `SHOW_IMAGE_SLOTS` is on. Shared
 * by `Photo` and by the opt-in `slotPlaceholder` fields (hero, service cards,
 * final CTA). Never present in production.
 */
export function SlotPlaceholderBox({
  image,
  className,
}: {
  image: CardImage | undefined
  className?: string
}) {
  const placeholder = image?.placeholder
  if (placeholder === undefined) return null
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border bg-surface-muted p-4 text-center text-sm text-muted-foreground',
        placeholder.ratio === '16:9' ? 'aspect-video' : 'aspect-[4/3]',
        className,
      )}
    >
      <p className="font-semibold text-foreground">Image slot: {placeholder.slotId}</p>
      <p>{placeholder.ratio}</p>
      <p>{placeholder.shot}</p>
    </div>
  )
}
