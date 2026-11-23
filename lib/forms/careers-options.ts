/**
 * Option lists for the careers form's multi-select groups. Shared by the form (browser)
 * and the function (server), so the labels a visitor sees are exactly the values GHL stores
 * in the matching Dropdown (multiple) custom fields. Keep them identical to the GHL options
 * (docs/ghl-lead-setup.md); scripts/verify-lead-routing.mjs pins them.
 */
export const CAREERS_EMPLOYMENT_TYPES = ['Part Time', 'Full Time', 'Temp/Inter'] as const
export const CAREERS_AVAILABILITY_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const
export const CAREERS_AVAILABILITY_TIMES = ['Morning', 'Afternoon', 'Evening', 'Any'] as const
