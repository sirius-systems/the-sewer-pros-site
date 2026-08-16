// Route: /services/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import { notFound } from 'next/navigation'
import { HubPageTemplate } from '@/components/templates'
import { getHubContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'hub-services' as PageId

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return <HubPageTemplate page={page} content={content} itemsTitle="Our services" numbered />
}
