// Route: /for/[audience]/
// Generated from the approved page registry (04 §4, 02 §21-23).
import { notFound } from 'next/navigation'
import { AudiencePageTemplate } from '@/components/templates'
import { getAudienceContent } from '@/content'
import { audienceParams } from '@/lib/routing'
import { getPageByPathname } from '@/data/pages'

export function generateStaticParams() {
  return audienceParams()
}

export default async function Page({
  params,
}: {
  params: Promise<{ audience: string }>
}) {
  const { audience } = await params
  const page = getPageByPathname(`/for/${audience}/`)
  if (page === undefined) notFound()

  const content = getAudienceContent(page.id)
  if (content === undefined) notFound()

  return <AudiencePageTemplate page={page} content={content} />
}
