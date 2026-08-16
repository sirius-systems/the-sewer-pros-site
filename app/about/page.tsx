// Route: /about/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import { notFound } from 'next/navigation'
import { CorePageTemplate } from '@/components/templates'
import { getCoreContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'core-about' as PageId

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getCoreContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return <CorePageTemplate page={page} content={content} />
}
