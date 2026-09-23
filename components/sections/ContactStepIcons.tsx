import type { ReactNode, SVGProps } from 'react'

/**
 * Icons for the contact page's "What happens after you contact us" steps.
 *
 * Drawn in the same style as the `ProcessSteps` card icons (24px grid,
 * 1.5 stroke, rounded caps) and passed in through `ProcessStep.icon`.
 * Decorative: each step's heading carries the meaning, so they are hidden
 * from assistive technology.
 */
type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    className: 'h-10 w-10 text-accent-secondary',
    ...props,
  }
}

/** Request: a form / document. */
function RequestIcon() {
  return (
    <svg {...base({})}>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  )
}

/** Discuss: two speech bubbles. */
function ConversationIcon() {
  return (
    <svg {...base({})}>
      <path d="M4 4.5h10a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1H8.5L5 15v-3H4a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z" />
      <path d="M15 9h5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-1V20l-3.5-3.5H11a1 1 0 0 1-1-1V15" />
    </svg>
  )
}

/** Options: a calendar. */
function CalendarIcon() {
  return (
    <svg {...base({})}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h2M14 14h2M8 17h2" />
    </svg>
  )
}

/** Service: a camera reel with its cable and lens. */
function InspectionIcon() {
  return (
    <svg {...base({})}>
      <circle cx="9" cy="10" r="6" />
      <circle cx="9" cy="10" r="2" />
      <path d="M15 10c3 0 5 1.8 5 5v1" />
      <rect x="17.5" y="16" width="5" height="4" rx="1" />
    </svg>
  )
}

/** In step order: request, discuss, options, service. */
export const contactStepIcons: readonly ReactNode[] = [
  <RequestIcon key="request" />,
  <ConversationIcon key="conversation" />,
  <CalendarIcon key="calendar" />,
  <InspectionIcon key="inspection" />,
]
