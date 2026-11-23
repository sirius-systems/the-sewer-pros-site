import { ServiceIndex, serviceIndexRenders } from './ServiceIndex'
import { homeServiceCards } from '@/content/pages/home-service-cards'
import { comparisonCardImages } from '@/content/pages/comparisons'
import type { SectionDensity, SectionSurface } from '@/components/ui'
import type { CardImage, PageId } from '@/types'

/**
 * "Related services" section, rendered as the homepage service cards.
 *
 * Wraps `ServiceIndex variant="cards"` and looks each page id up in
 * `homeServiceCards`, so artwork and copy have one source with the
 * homepage grid. An explicit `descriptions` entry wins over the shared
 * blurb. A page outside the nine core services falls back to
 * `comparisonCardImages` for its image, or renders without one.
 *
 * Every page's related-services section should use this component
 * rather than a link list.
 */
export function RelatedServiceCards({
  id = 'related-services',
  density = 'dense',
  title,
  intro,
  pageIds,
  descriptions,
  columns = 3,
  images,
  surface,
}: {
  /** Optional per-page image overrides; win over the shared service card art. */
  images?: Readonly<Partial<Record<PageId, CardImage>>>
  surface?: SectionSurface
  id?: string
  density?: SectionDensity
  title: string
  intro?: string
  pageIds: readonly PageId[]
  descriptions?: Readonly<Partial<Record<PageId, string>>>
  columns?: 2 | 3 | 4
}) {
  if (!serviceIndexRenders(pageIds.map((pageId) => ({ pageId })))) return null
  return (
    <ServiceIndex
      variant="cards"
      columns={columns}
      density={density}
      surface={surface}
      id={id}
      title={title}
      intro={intro !== undefined ? <p>{intro}</p> : undefined}
      items={pageIds.map((pageId) => {
        const card = homeServiceCards.find((c) => c.pageId === pageId)
        return {
          pageId,
          description: descriptions?.[pageId] ?? card?.description,
          image: images?.[pageId] ?? card?.image ?? comparisonCardImages[pageId],
        }
      })}
    />
  )
}
