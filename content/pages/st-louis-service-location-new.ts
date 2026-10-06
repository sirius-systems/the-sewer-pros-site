/**
 * St. Louis service + location pages added in the St. Louis batch (39 pages).
 * The six hand-authored pages live in `st-louis.tsx` and are rebuilt by
 * `service-location-upgrade.ts`.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { stLouisCityCleaningContent } from './sl-stl-city-cleaning'
import { stLouisCityHydroContent } from './sl-stl-city-hydro'
import { stLouisCityCleaningCameraContent } from './sl-stl-city-cleaning-camera'
import { stLouisCityLocatingContent } from './sl-stl-city-locating'
import { stLouisCityDrainContent } from './sl-stl-city-drain'
import { stLouisCityPrePurchaseContent } from './sl-stl-city-prepurchase'
import { stLouisCityBackupContent } from './sl-stl-city-backup'
import { stLouisCityMaintenanceContent } from './sl-stl-city-maintenance'
import { chesterfieldCleaningContent } from './sl-stl-chesterfield-cleaning'
import { chesterfieldCleaningCameraContent } from './sl-stl-chesterfield-cleaning-camera'
import { chesterfieldLocatingContent } from './sl-stl-chesterfield-locating'
import { chesterfieldDrainContent } from './sl-stl-chesterfield-drain'
import { chesterfieldPrePurchaseContent } from './sl-stl-chesterfield-prepurchase'
import { chesterfieldBackupContent } from './sl-stl-chesterfield-backup'
import { chesterfieldMaintenanceContent } from './sl-stl-chesterfield-maintenance'
import { ballwinCameraContent } from './sl-stl-ballwin-camera'
import { ballwinCleaningContent } from './sl-stl-ballwin-cleaning'
import { ballwinHydroContent } from './sl-stl-ballwin-hydro'
import { ballwinCleaningCameraContent } from './sl-stl-ballwin-cleaning-camera'
import { ballwinLocatingContent } from './sl-stl-ballwin-locating'
import { ballwinDrainContent } from './sl-stl-ballwin-drain'
import { ballwinBackupContent } from './sl-stl-ballwin-backup'
import { ballwinMaintenanceContent } from './sl-stl-ballwin-maintenance'
import { stCharlesCameraContent } from './sl-stl-st-charles-camera'
import { stCharlesCleaningContent } from './sl-stl-st-charles-cleaning'
import { stCharlesHydroContent } from './sl-stl-st-charles-hydro'
import { stCharlesCleaningCameraContent } from './sl-stl-st-charles-cleaning-camera'
import { stCharlesLocatingContent } from './sl-stl-st-charles-locating'
import { stCharlesDrainContent } from './sl-stl-st-charles-drain'
import { stCharlesBackupContent } from './sl-stl-st-charles-backup'
import { stCharlesMaintenanceContent } from './sl-stl-st-charles-maintenance'
import { florissantCameraContent } from './sl-stl-florissant-camera'
import { florissantHydroContent } from './sl-stl-florissant-hydro'
import { florissantCleaningCameraContent } from './sl-stl-florissant-cleaning-camera'
import { florissantLocatingContent } from './sl-stl-florissant-locating'
import { florissantDrainContent } from './sl-stl-florissant-drain'
import { florissantPrePurchaseContent } from './sl-stl-florissant-prepurchase'
import { florissantBackupContent } from './sl-stl-florissant-backup'
import { florissantMaintenanceContent } from './sl-stl-florissant-maintenance'

const id = (value: string): PageId => value as PageId

export const stLouisNewServiceLocationContent: Partial<Record<PageId, ServiceLocationPageContent>> =
  {
    [id('sl-stl-city-cleaning')]: stLouisCityCleaningContent,
    [id('sl-stl-city-hydro')]: stLouisCityHydroContent,
    [id('sl-stl-city-cleaning-camera')]: stLouisCityCleaningCameraContent,
    [id('sl-stl-city-locating')]: stLouisCityLocatingContent,
    [id('sl-stl-city-drain')]: stLouisCityDrainContent,
    [id('sl-stl-city-prepurchase')]: stLouisCityPrePurchaseContent,
    [id('sl-stl-city-backup')]: stLouisCityBackupContent,
    [id('sl-stl-city-maintenance')]: stLouisCityMaintenanceContent,
    [id('sl-chesterfield-cleaning')]: chesterfieldCleaningContent,
    [id('sl-chesterfield-cleaning-camera')]: chesterfieldCleaningCameraContent,
    [id('sl-chesterfield-locating')]: chesterfieldLocatingContent,
    [id('sl-chesterfield-drain')]: chesterfieldDrainContent,
    [id('sl-chesterfield-prepurchase')]: chesterfieldPrePurchaseContent,
    [id('sl-chesterfield-backup')]: chesterfieldBackupContent,
    [id('sl-chesterfield-maintenance')]: chesterfieldMaintenanceContent,
    [id('sl-ballwin-camera')]: ballwinCameraContent,
    [id('sl-ballwin-cleaning')]: ballwinCleaningContent,
    [id('sl-ballwin-hydro')]: ballwinHydroContent,
    [id('sl-ballwin-cleaning-camera')]: ballwinCleaningCameraContent,
    [id('sl-ballwin-locating')]: ballwinLocatingContent,
    [id('sl-ballwin-drain')]: ballwinDrainContent,
    [id('sl-ballwin-backup')]: ballwinBackupContent,
    [id('sl-ballwin-maintenance')]: ballwinMaintenanceContent,
    [id('sl-st-charles-camera')]: stCharlesCameraContent,
    [id('sl-st-charles-cleaning')]: stCharlesCleaningContent,
    [id('sl-st-charles-hydro')]: stCharlesHydroContent,
    [id('sl-st-charles-cleaning-camera')]: stCharlesCleaningCameraContent,
    [id('sl-st-charles-locating')]: stCharlesLocatingContent,
    [id('sl-st-charles-drain')]: stCharlesDrainContent,
    [id('sl-st-charles-backup')]: stCharlesBackupContent,
    [id('sl-st-charles-maintenance')]: stCharlesMaintenanceContent,
    [id('sl-florissant-camera')]: florissantCameraContent,
    [id('sl-florissant-hydro')]: florissantHydroContent,
    [id('sl-florissant-cleaning-camera')]: florissantCleaningCameraContent,
    [id('sl-florissant-locating')]: florissantLocatingContent,
    [id('sl-florissant-drain')]: florissantDrainContent,
    [id('sl-florissant-prepurchase')]: florissantPrePurchaseContent,
    [id('sl-florissant-backup')]: florissantBackupContent,
    [id('sl-florissant-maintenance')]: florissantMaintenanceContent,
  }
