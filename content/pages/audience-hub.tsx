/**
 * Who We Serve hub content: `/for/`.
 *
 * Authority: CLAUDE.md §9, §11, §24, §27
 *
 * ⚠ A ROUTING PAGE, NOT A SALES PAGE. Each card carries one job: tell a
 * visitor in a role that this is for them and send them to the page that
 * goes deep. No card describes repair or replacement as a service, states
 * a price, guarantee, response time, or availability, or claims a local
 * office (CLAUDE.md §9, §24). Business proof figures are not typed here;
 * the template renders them from `StatsBand`.
 *
 * ⚠ THE SIX CARDS ARE THE SIX AUDIENCE PAGES THAT EXIST. Homeowners and
 * contractors have no audience page today, so they are not cards (a card
 * without a real destination is a dead link). Homeowner intent is served
 * by the "start with your need" router, which links straight to the
 * service pages homeowners search for.
 */

import type { AudienceHubContent, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

export const audienceHubContent: AudienceHubContent = {
  hero: {
    eyebrow: 'WHO WE HELP',
    title: 'Sewer and Drain Help for Every Property Situation',
    intro: (
      <p>
        Whether you own, buy, sell, inspect, or manage a property, The Sewer Pros provides
        sewer and drain inspection, diagnostics, and cleaning to help you understand what is
        happening underground. Get documented findings and a clearer basis for deciding what
        to do next.
      </p>
    ),
    primaryAction: { href: '#audiences', label: 'Find Your Situation' },
    secondaryAction: { href: '/locations/', label: 'Choose Your Location' },
  },
  // Already ends with the brand suffix, so `brandedTitle()` leaves it as is.
  seoTitle: 'Who We Serve | Sewer Inspection & Drain Services | The Sewer Pros',
  metaDescription:
    'The Sewer Pros helps home buyers, sellers, real estate agents, home inspectors, property managers, and HOA communities with sewer camera inspections, drain cleaning, hydro jetting, and line locating.',
  audiences: {
    title: 'Choose the support that fits your role',
    intro:
      'The same underground pipe raises a different question for each person. Pick the role closest to yours.',
    cards: [
      {
        pageId: id('aud-home-buyers'),
        description:
          'Get a sewer camera inspection of the line before closing, with documented findings that show what is visible on the day, so the purchase decision rests on evidence.',
        needs: ['Pre-purchase inspection', 'Documented findings', 'Closing timeline'],
        linkLabel: 'Explore home-buyer inspections',
      },
      {
        pageId: id('aud-home-sellers'),
        description:
          'Find out what a buyer’s inspection is likely to see in the sewer line, and have documented findings on hand before the property is listed.',
        needs: ['Pre-listing inspection', 'Documented condition', 'Buildup that hides the line'],
        linkLabel: 'Explore pre-listing sewer inspections',
      },
      {
        pageId: id('aud-real-estate-agents'),
        description:
          'Give clients a straight, documented answer about the sewer line, so inspection-period questions are handled with evidence rather than guesswork.',
        needs: ['Transaction timing', 'Findings to share', 'Client questions'],
        linkLabel: 'Explore sewer inspections for agents',
      },
      {
        pageId: id('aud-home-inspectors'),
        description:
          'Refer sewer camera work that sits outside a general inspection and share the camera findings with your client, while your own report keeps its scope.',
        needs: ['Camera scope', 'Client documentation', 'Referring specialized work'],
        linkLabel: 'Explore home-inspector support',
      },
      {
        pageId: id('aud-property-managers'),
        description:
          'Diagnose recurring backups and slow drains across your properties instead of repeating the same service call, with recorded evidence for each one.',
        needs: ['Recurring backups', 'Multiple properties', 'Preventative cleaning'],
        linkLabel: 'Explore property-management support',
      },
      {
        pageId: id('aud-hoa-communities'),
        description:
          'Give a board documented evidence about shared sewer lines, so a decision about maintenance or responsibility rests on what the camera shows.',
        needs: ['Shared sewer lines', 'Board decisions', 'Documented evidence'],
        linkLabel: 'Explore HOA sewer inspections',
      },
    ],
  },
  needs: {
    title: 'Not Sure Which Sewer Pros Service You Need?',
    intro: 'Tell us what’s going on, and we’ll help you find the right service.',
    items: [
      { label: 'Recurring Sewer Backup or Clog', href: '/services/recurring-sewer-backup-diagnosis/' },
      {
        label: 'Need a Second Opinion on a Repair Quote',
        href: '/compare/independent-sewer-inspection-vs-repair-company/',
      },
      { label: 'Buying a Home', href: '/for/home-buyers/' },
      { label: 'Sewer Camera Inspection', href: '/services/sewer-camera-inspection/' },
      { label: 'Drain Cleaning', href: '/services/drain-cleaning/' },
      { label: 'Hydro Jetting', href: '/services/hydro-jetting/' },
      { label: 'Sewer Line Locating', href: '/services/sewer-line-locating/' },
      { label: 'Managing Multiple Properties', href: '/for/property-managers/' },
    ],
  },
  locations: {
    title: 'Find your local Sewer Pros team',
    intro:
      'Choose your service area for local contact options, scheduling, and the communities served.',
  },
  cta: {
    title: 'Ready to get a clearer answer?',
    body: 'Choose your market to schedule a sewer inspection, request drain or sewer service, or call The Sewer Pros.',
  },
}
