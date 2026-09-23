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
  resolveHydroImage,
  type HydroImageKey,
  type ResolvedHydroImage,
} from './hydro-images'

/**
 * One lookup over every service hub's image slots, so the shared hub
 * sections do not need to know which hub they are rendering.
 */
export type HubImageKey = CameraImageKey | CleaningImageKey | HydroImageKey
export type ResolvedHubImage = ResolvedCameraImage | ResolvedCleaningImage | ResolvedHydroImage

export function resolveHubImage(key: HubImageKey): ResolvedHubImage | null {
  if (key in cameraImageSlots) return resolveCameraImage(key as CameraImageKey)
  if (key in cleaningImageSlots) return resolveCleaningImage(key as CleaningImageKey)
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
