import { existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  cameraImageSlots,
  resolveCameraImage,
  type CameraImageKey,
  type ResolvedCameraImage,
} from './camera-inspection-images'
import {
  cleaningImageSlots,
  resolveCleaningImage,
  type CleaningImageKey,
  type ResolvedCleaningImage,
} from './cleaning-images'
import {
  combinedImageSlots,
  resolveCombinedImage,
  type CombinedImageKey,
  type ResolvedCombinedImage,
} from './combined-images'
import {
  drainImageSlots,
  resolveDrainImage,
  type DrainImageKey,
  type ResolvedDrainImage,
} from './drain-images'
import {
  resolveHydroImage,
  type HydroImageKey,
  type ResolvedHydroImage,
} from './hydro-images'

import {
  locatingImageSlots,
  resolveLocatingImage,
  type LocatingImageKey,
  type ResolvedLocatingImage,
} from './locating-images'

/**
 * One lookup over every service hub's image slots, so the shared hub
 * sections do not need to know which hub they are rendering.
 */
export type HubImageKey =
  | CameraImageKey
  | CleaningImageKey
  | CombinedImageKey
  | DrainImageKey
  | HydroImageKey
  | LocatingImageKey
export type ResolvedHubImage =
  | ResolvedCameraImage
  | ResolvedCleaningImage
  | ResolvedCombinedImage
  | ResolvedDrainImage
  | ResolvedHydroImage
  | ResolvedLocatingImage

export function resolveHubImage(key: HubImageKey): ResolvedHubImage | null {
  if (key in cameraImageSlots) return resolveCameraImage(key as CameraImageKey)
  if (key in cleaningImageSlots) return resolveCleaningImage(key as CleaningImageKey)
  if (key in combinedImageSlots) return resolveCombinedImage(key as CombinedImageKey)
  if (key in drainImageSlots) return resolveDrainImage(key as DrainImageKey)
  if (key in locatingImageSlots) return resolveLocatingImage(key as LocatingImageKey)
  return resolveHydroImage(key as HydroImageKey)
}

/** Whether any of the slots would render. */
export function anyHubImage(keys: readonly HubImageKey[]): boolean {
  return keys.some((key) => resolveHubImage(key) !== null)
}

/**
 * A full-width backdrop file. `true` when the file exists under `public/`.
 * A missing backdrop renders the brand surface under its black scrim, so
 * the copy on top stays readable while the photograph is pending.
 */
export function backdropExists(src: string): boolean {
  return existsSync(join(process.cwd(), 'public', src))
}
