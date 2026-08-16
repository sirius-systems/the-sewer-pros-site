// Route: /commercial/[service]/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import { notFound } from 'next/navigation'
import { CommercialPageTemplate } from '@/components/templates'
import { getCommercialContent } from '@/content'
import { commercialServiceParams } from '@/lib/routing'
import { getPageByPathname } from '@/data/pages'

export function generateStaticParams() {
  return commercialServiceParams()
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service } = await params
  const page = getPageByPathname(`/commercial/${service}/`)
  if (page === undefined) notFound()

  const content = getCommercialContent(page.id)
  if (content === undefined) notFound()

  return <CommercialPageTemplate page={page} content={content} />
}
