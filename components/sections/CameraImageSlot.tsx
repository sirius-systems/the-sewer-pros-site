import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import {
  resolveCameraImage,
  type CameraImageKey,
} from '@/data/business/camera-inspection-images'

/**
 * One sewer camera hub image slot.
 *
 * Renders the real image when the file exists, a labelled placeholder
 * frame in development, and nothing in a production build. See
 * `data/business/camera-inspection-images.ts`.
 *
 * ⚠ THE PLACEHOLDER IS A WORKING TOOL, NOT CONTENT. It names the slot,
 * the filename and the capture notes so the photographer and the
 * developer read the same brief. It never reaches production and never
 * reaches structured data.
 */
export interface CameraImageSlotProps {
  slot: CameraImageKey
  sizes?: string
  priority?: boolean
  /** Hides the caption, where the surrounding section already carries one. */
  hideCaption?: boolean
  className?: string
}

export function CameraImageSlot({
  slot,
  sizes = '(min-width: 1024px) 40vw, 100vw',
  priority = false,
  hideCaption = false,
  className,
}: CameraImageSlotProps) {
  const image = resolveCameraImage(slot)
  if (image === null) return null

  return (
    <figure className={className}>
      <div
        className="relative overflow-hidden rounded-md border border-border bg-surface-muted"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        {image.placeholder ? (
          <div
            data-image-placeholder={slot}
            className={cn(
              'flex h-full w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-border p-4 text-center',
              'text-caption text-muted-foreground',
            )}
          >
            <p className="font-semibold text-foreground">
              Image placeholder: {slot}
            </p>
            <p>
              {image.preferred.split('/').pop()} ({image.width}x{image.height})
            </p>
            <p>{image.subject}</p>
            {image.requiresRelease && <p>Requires release and anonymizing.</p>}
            <p>Development only. Not rendered in production.</p>
          </div>
        ) : (
          <Image
            src={image.preferred}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes}
            priority={priority}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {!hideCaption && (
        <figcaption className="mt-2 text-caption text-muted-foreground">
          {image.caption}
        </figcaption>
      )}
    </figure>
  )
}
