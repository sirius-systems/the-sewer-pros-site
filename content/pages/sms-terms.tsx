/**
 * SMS Terms (core-sms-terms, /sms-terms/).
 *
 * LAUNCH BLOCKER. The owner's existing SMS Opt-In Program terms have not been
 * pasted in yet. Do not write terms text here; paste the owner's text. Until
 * then the page is noindex, is not linked from the footer, and is linked only
 * from the Privacy Policy so that link does not 404.
 */
export const smsTermsSeo = {
  title: 'SMS Terms',
  description: 'Terms for The Sewer Pros text messaging program.',
} as const

export function SmsTermsBody() {
  return (
    <>
      {/* TODO(owner): paste SMS opt-in program terms */}
      <p>TODO(owner): paste SMS opt-in program terms</p>
    </>
  )
}
