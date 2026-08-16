/**
 * Tracking components.
 *
 * Build sequence step 23 (docs/02-nextjs-technical-architecture.md §103).
 * Location per 02 §10 (`components/tracking/`).
 *
 * ⚠ NO CONSENT LAYER EXISTS YET (19 §106).
 *
 * 19 §106 requires consent handling "where applicable", and no consent
 * decision has been recorded for this project. The three markets span
 * Missouri, California, and Nevada; California's rules are the binding
 * constraint and have not been assessed.
 *
 * Analytics is currently unconfigured — NEXT_PUBLIC_GA_MEASUREMENT_ID
 * is optional and unset, so nothing loads and nothing is collected.
 * That is the correct state until the consent question is answered, and
 * it is why `Analytics` returns null rather than degrading to a partial
 * implementation. Setting the measurement id without resolving consent
 * would start collection under an unexamined obligation.
 */

export { Analytics } from './Analytics'
export { PageViewTracker } from './PageViewTracker'
export type { PageViewTrackerProps } from './PageViewTracker'
export { TrackedPhoneLink } from './TrackedPhoneLink'
export type { TrackedPhoneLinkProps } from './TrackedPhoneLink'
