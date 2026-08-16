// Route: /resources/[resource]/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import { notFound } from 'next/navigation'
import { ResourcePageTemplate } from '@/components/templates'
import { getResourceContent } from '@/content'
import { resourceParams } from '@/lib/routing'
import { getPageByPathname } from '@/data/pages'

export function generateStaticParams() {
  return resourceParams()
}

export default async function Page({
  params,
}: {
  params: Promise<{ resource: string }>
}) {
  const { resource } = await params
  const page = getPageByPathname(`/resources/${resource}/`)
  if (page === undefined) notFound()

  const content = getResourceContent(page.id)
  if (content === undefined) notFound()

  return <ResourcePageTemplate page={page} content={content} />
}
