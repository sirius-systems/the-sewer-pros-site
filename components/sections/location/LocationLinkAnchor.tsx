import Link from 'next/link'
import type { ReactNode } from 'react'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { LocationLink } from '@/types'

/**
 * One anchor for a `LocationLink`.
 *
 * An internal link names an approved page by id and resolves through the
 * registry, so a link to a route that does not exist fails the build
 * rather than shipping a 404 (05 §113, 16 §25). An external link renders
 * a plain anchor with `rel="noopener"`.
 */
export function locationLinkHref(link: LocationLink): string {
  if (link.pageId !== undefined) return resolveApprovedLink(link.pageId).href
  if (link.href !== undefined) return link.href
  throw new Error(`LocationLink "${link.label}" has neither pageId nor href.`)
}

export function LocationLinkAnchor({
  link,
  className,
  children,
}: {
  link: LocationLink
  className?: string
  children?: ReactNode
}) {
  const href = locationLinkHref(link)
  const label = children ?? link.label

  if (link.pageId !== undefined) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} rel="noopener" className={className}>
      {label}
    </a>
  )
}
