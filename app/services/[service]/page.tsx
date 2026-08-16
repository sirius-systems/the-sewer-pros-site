// Route: /services/[service]/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import { notFound } from 'next/navigation'
import { ServicePageTemplate } from '@/components/templates'
import { getServiceContent } from '@/content'
import { serviceParams } from '@/lib/routing'
import { getPageByPathname } from '@/data/pages'

export function generateStaticParams() {
  return serviceParams()
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service } = await params
  const page = getPageByPathname(`/services/${service}/`)
  if (page === undefined) notFound()

  const content = getServiceContent(page.id)
  if (content === undefined) notFound()

  return <ServicePageTemplate page={page} content={content} />
}
