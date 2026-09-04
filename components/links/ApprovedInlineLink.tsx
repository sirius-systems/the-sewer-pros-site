import Link from 'next/link'
import type { ReactNode } from 'react'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Inline prose link to an approved page.
 *
 * ⚠ RESOLUTION HAPPENS AT RENDER TIME, NOT MODULE-EVALUATION TIME, AND
 * THAT IS LOAD-BEARING. `approved-link.ts` reads `authoredPageIds` from
 * `content/index.ts`, so any module in that cycle which calls the
 * resolver while its own body is still evaluating throws "Cannot access
 * before initialization". Keeping the call inside the component body is
 * what makes this safe to import from content modules and from
 * `data/business/*` alike.
 *
 * The href comes from the registry rather than a literal, so 16 §25 and
 * CLAUDE.md §51 hold: the link names a PAGE, never a path. A gated or
 * unauthored id fails at the resolver instead of shipping a dead route.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NOT IN THE `components/ui` BARREL, DELIBERATELY
 * ---------------------------------------------------------------------------
 * It reaches `content/index.ts` transitively. Exporting it from the
 * primitives barrel would drag the whole content graph into every
 * module that imports a `Section` or a `Button`, which is both a cycle
 * risk and a bundling one. Import it from this path directly.
 *
 * Extracted from `content/pages/core.tsx` on 2026-09-04, where it was a
 * private function, so `data/business/process.tsx` could link its copy
 * through the same mechanism rather than growing a second one.
 */
export function ApprovedInlineLink({
  pageId,
  children,
}: {
  pageId: PageId
  children: ReactNode
}) {
  return <Link href={resolveApprovedLink(pageId).href}>{children}</Link>
}
