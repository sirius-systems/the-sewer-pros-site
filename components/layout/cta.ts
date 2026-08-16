/**
 * The global primary call to action.
 *
 * Authority: docs/17-conversion-architecture.md §288
 *            docs/18-design-system.md §46-47
 *            docs/22-decisions-change-log.md PENDING-007
 *
 * ---------------------------------------------------------------------------
 * ⚠ PROVISIONAL — PENDING-007 IS OPEN
 * ---------------------------------------------------------------------------
 * PENDING-007 ("Global primary CTA wording") has not been decided.
 *
 * The label below is not invented: "Schedule a Sewer Inspection" is one
 * of the approved conversion concepts in 17 §288, and doc 18 §38, §39,
 * §47, and §155 were aligned to it under DEC-069. What remains open is
 * which approved concept becomes the sitewide primary — not whether
 * this wording is permissible.
 *
 * It lives in one constant so resolving PENDING-007 is a one-line
 * change rather than a search across components. Doc 18 §155 and
 * Appendix B both flag inconsistent CTA rendering as a design failure,
 * which is a second reason not to inline this string anywhere.
 *
 * The destination is `/contact/` — an approved page (`core-contact`).
 * A dedicated scheduling route is not approved in doc 04, and PENDING-008
 * (final service form fields) is also open, so the CTA routes to the
 * approved conversion page rather than a route that does not exist.
 */

export const PRIMARY_CTA = {
  /** Approved concept from 17 §288. Final selection is PENDING-007. */
  label: 'Schedule a Sewer Inspection',
  /** `core-contact` — the only approved conversion destination in doc 04. */
  href: '/contact/',
} as const
