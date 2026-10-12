/**
 * Repo-level launch switch.
 *
 * `false` (the current setting): this is a preview build. Unfilled image slots
 * draw labelled placeholder boxes so the photo list can be reviewed on the
 * pages themselves.
 *
 * `true` (set it at launch): every unfilled image slot and every image
 * placeholder renders nothing, and `SHOW_IMAGE_SLOTS` is forced off whatever
 * `NEXT_PUBLIC_SHOW_IMAGE_SLOTS` says. No environment variable or hosting
 * setting is needed or consulted.
 *
 * Set LAUNCH_MODE to true at launch. Do not set it before the photographs are
 * in place without accepting that those slots will be empty.
 *
 * The build prints the list of pages with unfilled slots either way
 * (`scripts/report-unfilled-slots.mjs`): as a warning while this is false, and
 * as an error message (the build still exits 0) while this is true.
 */
export const LAUNCH_MODE = false

/**
 * Used only by `scripts/report-unfilled-slots.mjs`: when it audits a launch
 * build it renders a throwaway copy with the placeholders on, so the unfilled
 * slots can be counted per page. Never set this by hand.
 */
export const SLOT_AUDIT_BUILD = process.env.NEXT_PUBLIC_SLOT_AUDIT === '1'
