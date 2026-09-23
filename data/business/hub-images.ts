import { existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  cameraImageSlots,
  resolveCameraImage,
  type CameraImageKey,
  type ResolvedCameraImage,
} from './camera-inspection-images'
import {
  resolveCleaningImage,
  type CleaningImageKey,
  type ResolvedCleaningImage,
} from './cleaning-images'

/**
 * One lookup over every service hub's image slots, so the shared hub
 * sections do not need to know which hub they are rendering.
 */
export type HubImageKey = CameraImageKey | CleaningImageKey
export type ResolvedHubImage = ResolvedCameraImage | ResolvedCleaningImage

export function resolveHubImage(key: HubImageKey): ResolvedHubImage | null {
  return key in cameraImageSlots
    ? resolveCameraImage(key as CameraImageKey)
    : resolveCleaningImage(key as CleaningImageKey)
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
