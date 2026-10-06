import type { MasterPageRecord, PageId } from '@/types'
import { resolveApprovedLink } from './approved-link'

/**
 * The second hero button shown on small screens, where the hero lead form
 * is hidden: a link to the contact page. A market-scoped page links to its
 * own market's contact page, so it never routes a visitor to another
 * market's numbers (DEC-071); every other page links to the contact hub.
 */
export function heroContactAction(page: MasterPageRecord): {
  href: string
  label: string
} {
  const id = (
    page.marketId !== undefined ? `contact-${page.marketId}` : 'core-contact'
  ) as PageId
  return { href: resolveApprovedLink(id).href, label: 'Contact Us' }
}
