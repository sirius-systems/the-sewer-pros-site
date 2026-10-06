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
import { chulaVistaCleaningContent } from './sl-sd-chula-vista-cleaning'
import { chulaVistaHydroContent } from './sl-sd-chula-vista-hydro'
import { chulaVistaCleaningCameraContent } from './sl-sd-chula-vista-cleaning-camera'
import { chulaVistaLocatingContent } from './sl-sd-chula-vista-locating'
import { chulaVistaDrainContent } from './sl-sd-chula-vista-drain'
import { chulaVistaPrePurchaseContent } from './sl-sd-chula-vista-prepurchase'
import { chulaVistaBackupContent } from './sl-sd-chula-vista-backup'
import { chulaVistaMaintenanceContent } from './sl-sd-chula-vista-maintenance'
import { missionValleyCameraContent } from './sl-sd-mission-valley-camera'
import { missionValleyCleaningContent } from './sl-sd-mission-valley-cleaning'
import { missionValleyCleaningCameraContent } from './sl-sd-mission-valley-cleaning-camera'
import { missionValleyLocatingContent } from './sl-sd-mission-valley-locating'
import { missionValleyDrainContent } from './sl-sd-mission-valley-drain'
import { missionValleyPrePurchaseContent } from './sl-sd-mission-valley-prepurchase'
import { missionValleyBackupContent } from './sl-sd-mission-valley-backup'
import { missionValleyMaintenanceContent } from './sl-sd-mission-valley-maintenance'
import { carlsbadCleaningContent } from './sl-sd-carlsbad-cleaning'
import { carlsbadHydroContent } from './sl-sd-carlsbad-hydro'
import { carlsbadCleaningCameraContent } from './sl-sd-carlsbad-cleaning-camera'
import { carlsbadLocatingContent } from './sl-sd-carlsbad-locating'
import { carlsbadDrainContent } from './sl-sd-carlsbad-drain'
import { carlsbadBackupContent } from './sl-sd-carlsbad-backup'
import { carlsbadMaintenanceContent } from './sl-sd-carlsbad-maintenance'
import { sanMarcosCleaningContent } from './sl-sd-san-marcos-cleaning'
import { sanMarcosHydroContent } from './sl-sd-san-marcos-hydro'
import { sanMarcosCleaningCameraContent } from './sl-sd-san-marcos-cleaning-camera'
import { sanMarcosLocatingContent } from './sl-sd-san-marcos-locating'
import { sanMarcosDrainContent } from './sl-sd-san-marcos-drain'
import { sanMarcosPrePurchaseContent } from './sl-sd-san-marcos-prepurchase'
import { sanMarcosBackupContent } from './sl-sd-san-marcos-backup'
import { sanMarcosMaintenanceContent } from './sl-sd-san-marcos-maintenance'
import { escondidoCameraContent } from './sl-sd-escondido-camera'
import { escondidoHydroContent } from './sl-sd-escondido-hydro'
import { escondidoCleaningCameraContent } from './sl-sd-escondido-cleaning-camera'
import { escondidoLocatingContent } from './sl-sd-escondido-locating'
import { escondidoDrainContent } from './sl-sd-escondido-drain'
import { escondidoPrePurchaseContent } from './sl-sd-escondido-prepurchase'
import { escondidoBackupContent } from './sl-sd-escondido-backup'
import { escondidoMaintenanceContent } from './sl-sd-escondido-maintenance'
import { oceansideCameraContent } from './sl-sd-oceanside-camera'
import { oceansideHydroContent } from './sl-sd-oceanside-hydro'
import { oceansideCleaningCameraContent } from './sl-sd-oceanside-cleaning-camera'
import { oceansideLocatingContent } from './sl-sd-oceanside-locating'
import { oceansideDrainContent } from './sl-sd-oceanside-drain'
import { oceansidePrePurchaseContent } from './sl-sd-oceanside-prepurchase'
import { oceansideBackupContent } from './sl-sd-oceanside-backup'
import { oceansideMaintenanceContent } from './sl-sd-oceanside-maintenance'

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
  [id('sl-chula-vista-cleaning')]: chulaVistaCleaningContent,
  [id('sl-chula-vista-hydro')]: chulaVistaHydroContent,
  [id('sl-chula-vista-cleaning-camera')]: chulaVistaCleaningCameraContent,
  [id('sl-chula-vista-locating')]: chulaVistaLocatingContent,
  [id('sl-chula-vista-drain')]: chulaVistaDrainContent,
  [id('sl-chula-vista-prepurchase')]: chulaVistaPrePurchaseContent,
  [id('sl-chula-vista-backup')]: chulaVistaBackupContent,
  [id('sl-chula-vista-maintenance')]: chulaVistaMaintenanceContent,
  [id('sl-mission-valley-camera')]: missionValleyCameraContent,
  [id('sl-mission-valley-cleaning')]: missionValleyCleaningContent,
  [id('sl-mission-valley-cleaning-camera')]: missionValleyCleaningCameraContent,
  [id('sl-mission-valley-locating')]: missionValleyLocatingContent,
  [id('sl-mission-valley-drain')]: missionValleyDrainContent,
  [id('sl-mission-valley-prepurchase')]: missionValleyPrePurchaseContent,
  [id('sl-mission-valley-backup')]: missionValleyBackupContent,
  [id('sl-mission-valley-maintenance')]: missionValleyMaintenanceContent,
  [id('sl-carlsbad-cleaning')]: carlsbadCleaningContent,
  [id('sl-carlsbad-hydro')]: carlsbadHydroContent,
  [id('sl-carlsbad-cleaning-camera')]: carlsbadCleaningCameraContent,
  [id('sl-carlsbad-locating')]: carlsbadLocatingContent,
  [id('sl-carlsbad-drain')]: carlsbadDrainContent,
  [id('sl-carlsbad-backup')]: carlsbadBackupContent,
  [id('sl-carlsbad-maintenance')]: carlsbadMaintenanceContent,
  [id('sl-san-marcos-cleaning')]: sanMarcosCleaningContent,
  [id('sl-san-marcos-hydro')]: sanMarcosHydroContent,
  [id('sl-san-marcos-cleaning-camera')]: sanMarcosCleaningCameraContent,
  [id('sl-san-marcos-locating')]: sanMarcosLocatingContent,
  [id('sl-san-marcos-drain')]: sanMarcosDrainContent,
  [id('sl-san-marcos-prepurchase')]: sanMarcosPrePurchaseContent,
  [id('sl-san-marcos-backup')]: sanMarcosBackupContent,
  [id('sl-san-marcos-maintenance')]: sanMarcosMaintenanceContent,
  [id('sl-escondido-camera')]: escondidoCameraContent,
  [id('sl-escondido-hydro')]: escondidoHydroContent,
  [id('sl-escondido-cleaning-camera')]: escondidoCleaningCameraContent,
  [id('sl-escondido-locating')]: escondidoLocatingContent,
  [id('sl-escondido-drain')]: escondidoDrainContent,
  [id('sl-escondido-prepurchase')]: escondidoPrePurchaseContent,
  [id('sl-escondido-backup')]: escondidoBackupContent,
  [id('sl-escondido-maintenance')]: escondidoMaintenanceContent,
  [id('sl-oceanside-camera')]: oceansideCameraContent,
  [id('sl-oceanside-hydro')]: oceansideHydroContent,
  [id('sl-oceanside-cleaning-camera')]: oceansideCleaningCameraContent,
  [id('sl-oceanside-locating')]: oceansideLocatingContent,
  [id('sl-oceanside-drain')]: oceansideDrainContent,
  [id('sl-oceanside-prepurchase')]: oceansidePrePurchaseContent,
  [id('sl-oceanside-backup')]: oceansideBackupContent,
  [id('sl-oceanside-maintenance')]: oceansideMaintenanceContent,
}
