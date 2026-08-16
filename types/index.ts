/**
 * Core type barrel.
 *
 * Build sequence step 7 (docs/02-nextjs-technical-architecture.md §103).
 * Directory layout per 02 §33.
 *
 * Import from `@/types` rather than reaching into individual modules:
 *
 *   import type { MasterPageRecord, ServiceId } from '@/types'
 *
 * ===========================================================================
 * THE GOVERNING DISTINCTION
 * ===========================================================================
 * These types encode a separation the documentation insists on
 * repeatedly, because collapsing it is the project's central failure
 * mode:
 *
 *   OPPORTUNITY                        AUTHORISATION
 *   -----------                        -------------
 *   RawServiceRegistry     18          MasterPageRecord      70
 *   RawLocationRegistry   579
 *   RawMatrixRecord    10,422
 *   AudienceLocation…   7,527
 *   CommercialLocation… 4,632
 *
 * Only `MasterPageRecord` authorises a page. `generateStaticParams()`
 * reads the approved page registry and nothing else
 * (04 §2, §4, §66; 08 §2; 09 §120; 02 §21, §46; CLAUDE.md §26).
 */

export * from './common'
export * from './business'
export * from './service'
export * from './location'
export * from './matrix'
export * from './page'
export * from './audience'
export * from './commercial'
export * from './content'
export * from './seo'
export * from './schema'
