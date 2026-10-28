import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import { editorialImage } from '@/data/business/editorial-images'

/**
 * Header picture for a page that has an entry in `data/business/editorial-images.ts`.
 * Renders nothing when the page has none, so a template can mount it
 * unconditionally.
 *
 * `hero` sits in the hero's media column (4:3, above the fold, so it is the
 * page's priority image). `article` sits in the reading column under the page
 * header (7:4, lazy). The alt text comes from the data file and is scene-only.
 */
export interface EditorialMediaProps {
  pathname: string
  variant?: 'hero' | 'article'
  className?: string
}

export function EditorialMedia({ pathname, variant = 'article', className }: EditorialMediaProps) {
  const image = editorialImage(pathname)
  if (image === undefined) return null
  const hero = variant === 'hero'
  return (
    <figure className={cn(!hero && 'mt-8', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-md border border-border bg-surface-muted',
          hero ? 'aspect-[4/3]' : 'aspect-[7/4]',
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          {...(hero ? { priority: true, fetchPriority: 'high' as const } : {})}
          sizes={hero ? '(min-width: 1024px) 40vw, 100vw' : '(min-width: 768px) 44rem, 100vw'}
          className="object-cover"
        />
      </div>
    </figure>
  )
}
