/**
 * San Diego service + location pages added in the batch rollout.
 * The eight hand-authored pages live in `san-diego-service-location.tsx` and
 * are rebuilt by `service-location-upgrade.ts`.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { sanDiegoCityCleaningContent } from './sl-sd-city-cleaning'
import { sanDiegoCityHydroContent } from './sl-sd-city-hydro'
import { sanDiegoCityCleaningCameraContent } from './sl-sd-city-cleaning-camera'
import { sanDiegoCityLocatingContent } from './sl-sd-city-locating'
import { sanDiegoCityDrainContent } from './sl-sd-city-drain'
import { sanDiegoCityPrePurchaseContent } from './sl-sd-city-prepurchase'
import { sanDiegoCityBackupContent } from './sl-sd-city-backup'
import { sanDiegoCityMaintenanceContent } from './sl-sd-city-maintenance'

const id = (value: string): PageId => value as PageId

export const sanDiegoNewServiceLocationContent: Partial<
  Record<PageId, ServiceLocationPageContent>
> = {
  [id('sl-sd-city-cleaning')]: sanDiegoCityCleaningContent,
  [id('sl-sd-city-hydro')]: sanDiegoCityHydroContent,
  [id('sl-sd-city-cleaning-camera')]: sanDiegoCityCleaningCameraContent,
  [id('sl-sd-city-locating')]: sanDiegoCityLocatingContent,
  [id('sl-sd-city-drain')]: sanDiegoCityDrainContent,
  [id('sl-sd-city-prepurchase')]: sanDiegoCityPrePurchaseContent,
  [id('sl-sd-city-backup')]: sanDiegoCityBackupContent,
  [id('sl-sd-city-maintenance')]: sanDiegoCityMaintenanceContent,
}
