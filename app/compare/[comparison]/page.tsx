// Route: /compare/[comparison]/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import { notFound } from 'next/navigation'
import { ComparisonPageTemplate } from '@/components/templates'
import { getComparisonContent } from '@/content'
import { comparisonParams } from '@/lib/routing'
import { getPageByPathname } from '@/data/pages'

export function generateStaticParams() {
  return comparisonParams()
}

export default async function Page({
  params,
}: {
  params: Promise<{ comparison: string }>
}) {
  const { comparison } = await params
  const page = getPageByPathname(`/compare/${comparison}/`)
  if (page === undefined) notFound()

  const content = getComparisonContent(page.id)
  if (content === undefined) notFound()

  return <ComparisonPageTemplate page={page} content={content} />
}
