/**
 * Contact hub and market contact pages.
 *
 * Authority: docs/01-business-brand-foundation.md §20, §35
 *            `data/markets/markets.ts` (`marketOperatingDetail`)
 *
 * ⚠ EVERY OPERATING FACT ON THESE PAGES COMES FROM
 * `marketOperatingDetail`, rendered by the section components, not typed
 * here. This file holds only explanatory copy. It states no address,
 * pricing, guarantee, review figure, emergency, same-day, or
 * response-time claim, and it does not describe repair or replacement as
 * a service (CLAUDE.md §9, §24).
 *
 * ⚠ THE THREE MARKET PAGES ARE WRITTEN SEPARATELY ON PURPOSE. They share
 * a shape, not sentences: each one's `localSection`, `serviceLinks`, and
 * FAQ answer different questions, so changing the city name in one does
 * not produce another (CLAUDE.md §22).
 */

import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import type { ContactPageContent, MarketContactContent, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

const PROCESS = {
  title: 'What happens after you contact us',
  intro: 'A plain sequence, so you know what to expect before you reach out.',
  steps: [
    {
      title: 'We review your request',
      description: 'We look at your market, the service you need, and your property ZIP code.',
    },
    {
      title: 'A team member follows up',
      description:
        'A team member confirms availability and gathers any details needed, using the contact method you chose.',
    },
    {
      title: 'You choose an appointment',
      description: 'You receive the next available appointment options or scheduling instructions.',
    },
    {
      title: 'We complete the service',
      description:
        'The requested inspection, cleaning, or locating work is done at your property, and the findings are explained.',
    },
  ],
} as const

/* ==========================================================================
   Global contact hub — /contact/
   ========================================================================== */

export const contactHubContent: ContactPageContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'Contact The Sewer Pros',
    intro: (
      <p>
        Need a sewer camera inspection, drain cleaning, hydro jetting, sewer cleaning, or
        line locating? Select your market to request service, schedule an inspection, or
        call The Sewer Pros.
      </p>
    ),
    primaryAction: { href: '#choose-location', label: 'Select Your Location' },
    secondaryAction: { href: '#urgent', label: 'Call Now' },
  },
  seoTitle: 'Contact: St. Louis, San Diego & Las Vegas',
  metaDescription:
    'Contact The Sewer Pros to request sewer inspection, drain cleaning, hydro jetting, sewer cleaning, or line locating in St. Louis, San Diego, or Las Vegas.',
  process: PROCESS,
  faq: [
    {
      question: 'How do I schedule a sewer camera inspection?',
      answer: (
        <p>
          Choose your location above, then use the request form or call the number for your
          market. Tell us the property ZIP code and what you want inspected. A team member
          follows up to confirm availability and appointment options. See{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
            sewer camera inspection
          </ApprovedInlineLink>{' '}
          for what the service covers.
        </p>
      ),
    },
    {
      question: 'Which areas does The Sewer Pros serve?',
      answer: (
        <p>
          The Sewer Pros serves St. Louis, San Diego, and Las Vegas. Each market has its own
          contact page listing the communities it works across, so pick your city to see the
          areas and the phone number for your property. If your property sits near an edge of
          an area, ask when you call.
        </p>
      ),
    },
    {
      question: 'Can I request service for a sewer backup or recurring drain problem?',
      answer: (
        <p>
          Yes. Choose the sewer backup option on the form or call your market&apos;s number.
          We inspect, diagnose, locate, and clean sewer and drain lines. We do not perform
          sewer repair or replacement. A recurring problem is usually best handled with an
          inspection first; see{' '}
          <ApprovedInlineLink pageId={id('svc-recurring-sewer-backup-diagnosis')}>
            recurring sewer backup diagnosis
          </ApprovedInlineLink>
          .
        </p>
      ),
    },
    {
      question: 'Can home buyers schedule a sewer inspection before closing?',
      answer: (
        <p>
          Yes. Select the home-buyer sewer scope option and tell us whether you are under
          contract or within an inspection period, so we can plan around your timeline. Read
          about the{' '}
          <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>
            pre-purchase sewer inspection
          </ApprovedInlineLink>{' '}
          before you book.
        </p>
      ),
    },
    {
      question: 'Can real estate agents and home inspectors coordinate an appointment?',
      answer: (
        <p>
          Yes. Choose the agent or inspector option, add the property timeline, and say how
          you would like to coordinate. Agents can also read how{' '}
          <ApprovedInlineLink pageId={id('aud-real-estate-agents')}>
            sewer inspections work for real estate agents
          </ApprovedInlineLink>
          .
        </p>
      ),
    },
    {
      question: 'What information should I provide when requesting service?',
      answer: (
        <p>
          Your market, the service or problem, your property ZIP code, and a phone number.
          Helpful extras: which fixtures are affected, whether it has happened before, what
          work was already done, and whether there is an accessible cleanout. Everything
          beyond the first four is optional.
        </p>
      ),
    },
    {
      question: 'Do I need to be home for the appointment?',
      answer: (
        <p>
          The team needs access to your sewer line, usually through a cleanout. When you
          request service, mention who can provide access and whether a cleanout is
          available, and a team member will confirm what is needed for your appointment.
        </p>
      ),
    },
    {
      question: 'How will The Sewer Pros contact me after I submit a request?',
      answer: (
        <p>
          By the method you choose on the form: call, text, or email. Phone lines are staffed
          Monday to Friday, 8:00am to 4:00pm. For an active backup, call the number for your
          market instead of waiting on a form.
        </p>
      ),
    },
  ],
  relatedPageIds: [id('hub-services'), id('hub-locations'), id('core-faq')],
}

/* ==========================================================================
   Market contact pages — /{market}/contact/
   ========================================================================== */

export const marketContactContent: Partial<Record<PageId, MarketContactContent>> = {
  [id('contact-st-louis-mo')]: {
    hero: {
      eyebrow: 'St. Louis, MO',
      title: 'Contact The Sewer Pros in St. Louis, MO',
      intro: (
        <p>
          Request a sewer camera inspection, drain or sewer cleaning, hydro jetting, or line
          locating for a property in the St. Louis area, or call to talk it through first.
        </p>
      ),
      primaryAction: { href: '#request-service', label: 'Request Service' },
    },
    seoTitle: 'Contact The Sewer Pros in St. Louis, MO | Sewer Inspection & Drain Service',
    metaDescription:
      'Contact The Sewer Pros in St. Louis, MO for sewer camera inspection, drain cleaning, sewer cleaning, hydro jetting, and line locating in St. Louis, St. Charles, and Jefferson counties.',
    localSection: {
      eyebrow: 'St. Louis area',
      title: 'Serving St. Louis County, St. Charles County, and Jefferson County',
      body: (
        <>
          <p>
            St. Louis is the most established market for The Sewer Pros, and the service area covers St. Louis
            County, St. Charles County, Jefferson County, Missouri, and surrounding areas. Tell
            us your property ZIP code and we will confirm whether it falls within the area.
          </p>
          <p>
            Sewer lateral rules differ by municipality across the metro, so a requirement in
            one community does not automatically apply in the next. If your request is tied to
            a municipal program or a real estate closing, say so on the form. The{' '}
            <ApprovedInlineLink pageId={id('svc-stl-sewer-lateral-inspection-reporting')}>
              St. Louis sewer lateral inspection and reporting
            </ApprovedInlineLink>{' '}
            page explains how that work is documented.
          </p>
        </>
      ),
    },
    serviceLinks: [
      {
        pageId: id('svc-stl-sewer-lateral-inspection-reporting'),
        label: 'Sewer lateral inspection and reporting',
        description: 'Documented inspection for St. Louis area lateral requirements.',
      },
      {
        pageId: id('svc-pre-purchase-sewer-inspection'),
        label: 'Pre-purchase sewer inspection',
        description: 'A sewer scope with video evidence before you close.',
      },
      {
        pageId: id('svc-sewer-camera-inspection'),
        label: 'Sewer camera inspection',
        description: 'See the line condition before you decide on next steps.',
      },
      {
        pageId: id('svc-hydro-jetting'),
        label: 'Hydro jetting',
        description: 'Cleaning for grease, scale, and buildup on pipe walls.',
      },
    ],
    process: PROCESS,
    faq: [
      {
        question: 'What areas around St. Louis do you serve?',
        answer: (
          <p>
            St. Louis County, St. Charles County, Jefferson County in Missouri, and
            surrounding areas. Enter your property ZIP code on the request form and a team
            member will confirm coverage for your address. See the{' '}
            <ApprovedInlineLink pageId={id('market-st-louis-mo')}>St. Louis page</ApprovedInlineLink>{' '}
            for the communities we list.
          </p>
        ),
      },
      {
        question: 'Do you handle sewer lateral inspections for municipal programs?',
        answer: (
          <p>
            We perform documented sewer lateral inspections in the St. Louis area. Program
            terms differ by municipality, so check what your community requires and mention it
            when you request service. Details are on the{' '}
            <ApprovedInlineLink pageId={id('svc-stl-sewer-lateral-inspection-reporting')}>
              lateral inspection and reporting
            </ApprovedInlineLink>{' '}
            page.
          </p>
        ),
      },
      {
        question: 'Can I book a sewer scope while I am under contract on a St. Louis home?',
        answer: (
          <p>
            Yes. Choose the home-buyer sewer scope option, note your inspection deadline, and
            we will work toward it. Buyers should confirm timing with their agent, since
            inspection periods are short.
          </p>
        ),
      },
      {
        question: 'When can I reach the St. Louis phone line?',
        answer: (
          <p>
            Monday to Friday, 8:00am to 4:00pm. Outside those hours, submit the request form
            and a team member follows up by the method you choose.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('market-st-louis-mo'), id('hub-services')],
  },

  [id('contact-san-diego-ca')]: {
    hero: {
      eyebrow: 'San Diego, CA',
      title: 'Contact The Sewer Pros in San Diego, CA',
      intro: (
        <p>
          Request sewer inspection, cleaning, hydro jetting, or line locating for a San Diego
          area property, or call to ask about your situation before you book.
        </p>
      ),
      primaryAction: { href: '#request-service', label: 'Request Service' },
    },
    seoTitle: 'Contact The Sewer Pros in San Diego, CA | Sewer Inspection & Drain Service',
    metaDescription:
      'Contact The Sewer Pros in San Diego, CA for sewer camera inspection, drain cleaning, sewer cleaning, hydro jetting, and line locating across San Diego, Carlsbad, Escondido, and nearby areas.',
    localSection: {
      eyebrow: 'San Diego area',
      title: 'Working across San Diego, North County, and the South Bay',
      body: (
        <>
          <p>
            The Sewer Pros works across San Diego, San Marcos, Carlsbad, Escondido, Oceanside,
            Chula Vista, and Mission Valley. These are separate communities with different
            property ages and layouts, so the property ZIP code on the request form is what we
            use to route your request.
          </p>
          <p>
            The Sewer Pros is a service-area business in San Diego: the work happens at your
            property, and there is no office to visit. For a sewer recommendation you want
            checked independently, an inspection with video is a common starting point; see{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
              sewer camera inspection
            </ApprovedInlineLink>
            .
          </p>
        </>
      ),
    },
    serviceLinks: [
      {
        pageId: id('svc-sewer-camera-inspection'),
        label: 'Sewer camera inspection',
        description: 'Video of the line, so decisions rest on what is actually there.',
      },
      {
        pageId: id('svc-sewer-cleaning'),
        label: 'Sewer cleaning',
        description: 'Clearing buildup and blockages from the main line.',
      },
      {
        pageId: id('svc-sewer-line-locating'),
        label: 'Sewer line locating',
        description: 'Find where the line runs and at what depth.',
      },
      {
        pageId: id('svc-pre-purchase-sewer-inspection'),
        label: 'Pre-purchase sewer inspection',
        description: 'A sewer scope during your inspection period.',
      },
    ],
    process: PROCESS,
    faq: [
      {
        question: 'Which San Diego-area communities do you work in?',
        answer: (
          <p>
            San Diego, San Marcos, Carlsbad, Escondido, Oceanside, Chula Vista, and Mission
            Valley. If your property is nearby but not listed, enter the ZIP code on the form
            and a team member will tell you whether we can take the request. More on the{' '}
            <ApprovedInlineLink pageId={id('market-san-diego-ca')}>San Diego page</ApprovedInlineLink>.
          </p>
        ),
      },
      {
        question: 'Is there a San Diego office I can visit?',
        answer: (
          <p>
            No. The Sewer Pros serves San Diego properties on site and does not list an office
            or storefront address here. Use the request form or the phone number on this page
            to reach the team.
          </p>
        ),
      },
      {
        question: 'I was told I need major sewer work. Can you inspect first?',
        answer: (
          <p>
            Yes. We inspect, diagnose, and clean; we do not perform sewer repair or
            replacement, so an inspection is independent of any repair sale. The video shows
            the line condition you can share with whoever advises you next.
          </p>
        ),
      },
      {
        question: 'How do I reach the San Diego phone line?',
        answer: (
          <p>
            Call the San Diego number on this page Monday to Friday, 8:00am to 4:00pm, or send
            the request form and choose call, text, or email for the follow-up.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('market-san-diego-ca'), id('hub-services')],
  },

  [id('contact-las-vegas-nv')]: {
    hero: {
      eyebrow: 'Las Vegas, NV',
      title: 'Contact The Sewer Pros in Las Vegas, NV',
      intro: (
        <p>
          Request sewer camera inspection, cleaning, hydro jetting, or line locating for a Las
          Vegas area property, or call to ask before you schedule.
        </p>
      ),
      primaryAction: { href: '#request-service', label: 'Request Service' },
    },
    seoTitle: 'Contact The Sewer Pros in Las Vegas, NV | Sewer Inspection & Drain Service',
    metaDescription:
      'Contact The Sewer Pros in Las Vegas, NV for sewer camera inspection, drain cleaning, sewer cleaning, hydro jetting, and line locating in Las Vegas, Henderson, North Las Vegas, and Summerlin.',
    localSection: {
      eyebrow: 'Las Vegas area',
      title: 'Working across Las Vegas, Henderson, North Las Vegas, and Summerlin',
      body: (
        <>
          <p>
            Las Vegas is a newer market for The Sewer Pros, and requests here are handled by
            phone and by the form on this page: there is no office to visit. The work happens
            at your property in Las Vegas, Henderson, North Las Vegas, or Summerlin.
          </p>
          <p>
            Homeowners, buyers, and property managers usually start with the same question:
            what is actually happening inside the line? A{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
              sewer camera inspection
            </ApprovedInlineLink>{' '}
            answers it with video, and{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-line-locating')}>line locating</ApprovedInlineLink>{' '}
            helps when you need to know where the line runs.
          </p>
        </>
      ),
    },
    serviceLinks: [
      {
        pageId: id('svc-sewer-camera-inspection'),
        label: 'Sewer camera inspection',
        description: 'Video evidence of what is inside the line.',
      },
      {
        pageId: id('svc-sewer-line-locating'),
        label: 'Sewer line locating',
        description: 'Mark the line path before digging or planning work.',
      },
      {
        pageId: id('svc-drain-cleaning'),
        label: 'Drain cleaning',
        description: 'For slow or repeatedly clogging drains.',
      },
      {
        pageId: id('svc-pre-purchase-sewer-inspection'),
        label: 'Pre-purchase sewer inspection',
        description: 'Check the sewer line before you buy.',
      },
    ],
    process: PROCESS,
    faq: [
      {
        question: 'Which Las Vegas-area cities do you cover?',
        answer: (
          <p>
            Las Vegas, Henderson, North Las Vegas, and Summerlin. Enter your property ZIP code
            on the request form if you are nearby and unsure. See the{' '}
            <ApprovedInlineLink pageId={id('market-las-vegas-nv')}>Las Vegas page</ApprovedInlineLink>{' '}
            for the areas we list.
          </p>
        ),
      },
      {
        question: 'Do you have a Las Vegas office?',
        answer: (
          <p>
            No. Las Vegas requests are handled by phone and online, and the service is done at
            your property. This page lists no storefront address because there is none to
            visit.
          </p>
        ),
      },
      {
        question: 'How do I book a sewer inspection as a Las Vegas property manager?',
        answer: (
          <p>
            Choose the commercial or multi-unit option on the form and give the number of
            properties and the best operational contact. See{' '}
            <ApprovedInlineLink pageId={id('aud-property-managers')}>
              sewer services for property managers
            </ApprovedInlineLink>{' '}
            for how recurring work is approached.
          </p>
        ),
      },
      {
        question: 'When is the Las Vegas phone line staffed?',
        answer: (
          <p>
            Monday to Friday, 8:00am to 4:00pm. The request form is always available, and a
            team member follows up by the method you choose.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('market-las-vegas-nv'), id('hub-services')],
  },
}
