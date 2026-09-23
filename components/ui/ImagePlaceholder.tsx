import { cn } from '@/lib/utils/cn'

/**
 * A pending-photography slot.
 *
 * No approved photograph exists yet for the frames this component
 * fills (18 §28-34 require real inspection photography, and rule out
 * stock or AI imagery as a stand-in). Rather than an empty `<div>` or a
 * generic grey box, this renders a labelled, fixed-aspect placeholder
 * so the layout is real and reviewable, and swapping in the photograph
 * later is a one-line change with no layout shift.
 *
 * ⚠ NOT FOR PRODUCTION INDEXATION. A page carrying this component is
 * not photography-complete and should stay held or `noindex` until
 * every instance is replaced with `next/image` (18 §40-42).
 */
export interface ImagePlaceholderProps {
  /** What the real photograph should show, e.g. "Tracy Coffman, founder portrait". */
  label: string
  /** Target filename once photography is approved, e.g. "tracy-coffman-sewer-pros-founder.webp". */
  filename?: string
  aspect?: '1/1' | '4/3' | '7/4' | '16/9'
  className?: string
}

const ASPECT: Record<NonNullable<ImagePlaceholderProps['aspect']>, string> = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '7/4': 'aspect-[7/4]',
  '16/9': 'aspect-video',
}

export function ImagePlaceholder({
  label,
  filename,
  aspect = '4/3',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-surface-muted p-6 text-center',
        ASPECT[aspect],
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 shrink-0 text-muted-foreground"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10.5" r="1.75" />
        <path d="m4 17 5-4.5 3 2.5 3-3.5 5 5.5" />
      </svg>
      <p className="max-w-[24ch] text-sm leading-5 text-muted-foreground">
        {label}
      </p>
      {filename !== undefined && (
        <p className="font-mono text-xs text-muted-foreground/70">
          {filename}
        </p>
      )}
    </div>
  )
}
