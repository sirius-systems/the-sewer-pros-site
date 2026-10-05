import { getService } from '@/data/services'
import { marketOperatingDetail } from '@/data/markets/markets'
import { resolveSlotImage } from '@/lib/image-slots'
import type {
  CardImage,
  LeadFormConfig,
  LocationPageContent,
  LocationServiceCard,
  PageId,
  ServiceId,
} from '@/types'

/**
 * Oceanside, CA location page (`loc-sd-oceanside`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `san-diego.tsx`. Same structure as the City of San Diego, Carlsbad, Chula
 * Vista, Escondido and San Marcos modules: only copy, data, links and image
 * slots differ. No review band (no San Diego review dataset). Like Escondido it
 * has a housing-age section, built from primary Census values (ACS 2020-2024,
 * tables B25034 and B25035, Oceanside city, read 2026-10-04). Local facts were
 * read from the City of Oceanside pages on 2026-10-04. Every one of those pages
 * shows no current date.
 *
 * ⚠ THIS PAGE REPLACES A BORROWED RULE AND REMOVES UNSUPPORTED CLAIMS. The old
 * page said laterals are generally the owner's "as in most San Diego County
 * jurisdictions" and that no Oceanside statement was located. The City's Water
 * Utilities contact page does state one: private sewer lines "from the street
 * to your house" are the owner's. This page quotes that short phrase, cites it,
 * and says plainly that the City does not publish the exact connection point.
 *
 * ⚠ REMOVED, NOT CARRIED OVER: the 1984 median labelled "ACS 2019-2023", the
 * ground-movement and settlement narrative, "coastal conditions", "coastal and
 * suburban housing across a wide span of construction eras" and the comparison
 * with Carlsbad and Chula Vista. None has a primary source.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. (760) 435-5800 is the Water Utilities customer
 * service number. (760) 435-3900 is the City's water emergency line, which the
 * City does not describe as a sewer line; it appears only as plain text in the
 * Who to call panel and FAQ 4. No office hours, office address, email address,
 * Water Engineering number or license information is published here.
 *
 * ⚠ OCEANSIDE IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin
 * or GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['san-diego-ca']` (DEC-071), never typed.
 *
 * ⚠ NO PERMIT, PAYMENT OR PIPE CLAIMS. The page never says a permit is or is not
 * required to repair an existing lateral, never says the City will pay for any
 * damage, never states a breakpoint, and draws no conclusion about housing age,
 * pipe material or how laterals fail. 450 miles, two plants and 34 lift stations
 * appear only in the takeaway, the responsibility module, the system explainer
 * and FAQ 1; the Census figures only in the housing-age section and FAQ 8.
 *
 * ⚠ IMAGES: no existing or rendered art is reused on this page. Every slot is
 * defined in `IMAGE_SLOTS`. While `SHOW_IMAGE_SLOTS` is on, every slot shows a
 * labelled placeholder (the hero, cards and final CTA through `placeholderSlot`;
 * the final CTA box is dropped by the composition). Setting `src` and `source`
 * on a slot replaces its placeholder automatically. Nothing on this page renders
 * an `ImagePlaceholder`.
 *
 * Follow-up: `card()`, the image-slot registry and the form config are
 * duplicated from the other location modules; extract a shared module in a
 * separate refactor.
 */

const id = (value: string): PageId => value as PageId

/** San Diego's own phone, hours and founding year (DEC-071). */
const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

/* ==========================================================================
   Image slots
   ========================================================================== */

type ImageSlotRatio = '16:9' | '4:3'

interface ImageSlot {
  id: string
  ratio: ImageSlotRatio
  /** Alt text to use once a photo exists. */
  alt: string
  /** One-line shot description. */
  shot: string
  /** Set when an approved file exists in `public/`. */
  src?: string
  /** Provenance. Required whenever `src` is set. */
  source?: string
}

/**
 * Registry of the photo slots this page is designed for.
 *
 * ⚠ TO ADD A PHOTO, set `src` and `source` (provenance) on its slot: one edit,
 * no component change, and it replaces the labelled placeholder with the
 * image and this slot's alt text. A slot with no `src` draws a placeholder
 * while `SHOW_IMAGE_SLOTS` is on and renders nothing when it is off. Photos
 * that show crew, equipment, footage, customers or reports must be real job
 * photos. Never point a slot at an unrelated asset.
 *
 * No slot has a `src` yet and none reuses existing art. Use Oceanside wording
 * in the alt text for `oceanside-hero` and `final-bg` (for example
 * "Technician with a sewer camera at an Oceanside, CA home") only if the photo
 * is from an Oceanside-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'oceanside-hero',
    ratio: '16:9',
    alt: 'Technician feeding a sewer camera into a cleanout',
    shot: 'Technician feeding a camera into a residential cleanout, truck and monitor in frame',
  },
  {
    id: 'svc-camera',
    ratio: '4:3',
    alt: 'Sewer camera being fed into a cleanout',
    shot: 'Camera head and push cable at a cleanout',
  },
  {
    id: 'svc-cleaning',
    ratio: '4:3',
    alt: 'Sewer cleaning equipment at work at a home',
    shot: 'Cleaning machine and cable or hose at a cleanout',
  },
  {
    id: 'svc-jetting',
    ratio: '4:3',
    alt: 'Hydro jetting nozzle ready for use',
    shot: 'Jetting nozzle and hose at the line',
  },
  {
    id: 'svc-cleaning-camera',
    ratio: '4:3',
    alt: 'Technician reviewing camera footage after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind',
  },
  {
    id: 'svc-locating',
    ratio: '4:3',
    alt: 'Technician using a sewer line locator in a yard',
    shot: 'Technician with a locator receiver, paint marks on pavement',
  },
  {
    id: 'svc-drain',
    ratio: '4:3',
    alt: 'Drain cleaning equipment at a fixture',
    shot: 'Drain machine at a floor or tub drain',
  },
  {
    id: 'svc-prepurchase',
    ratio: '4:3',
    alt: 'Inspector explaining findings to a home buyer',
    shot: 'Technician scoping a for-sale property, clipboard visible',
  },
  {
    id: 'svc-backup',
    ratio: '4:3',
    alt: 'Camera monitor showing the condition of a sewer line',
    shot: 'Floor drain with cleanout access, nothing graphic',
  },
  {
    id: 'svc-maintenance',
    ratio: '4:3',
    alt: 'Technician on a scheduled sewer maintenance visit',
    shot: 'Crew member recording a post-cleaning camera pass',
  },
  {
    id: 'system-street',
    ratio: '4:3',
    alt: 'Residential street with a manhole cover near the curb',
    shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
  },
  {
    id: 'call-cleanout',
    ratio: '4:3',
    alt: 'Capped sewer cleanout beside a house foundation',
    shot: 'Exterior cleanout cap at the base of a house',
  },
  {
    id: 'program-footage',
    ratio: '4:3',
    alt: 'Monitor showing sewer lateral footage with a visible defect',
    shot: 'Real camera still with distance counter visible, owner consent on file',
  },
  {
    id: 'so-inspect',
    ratio: '4:3',
    alt: 'Sewer camera entering a cleanout',
    shot: 'Camera head entering a cleanout, close up',
  },
  {
    id: 'so-document',
    ratio: '4:3',
    alt: 'Monitor showing recorded footage of a pipe interior',
    shot: 'Monitor or tablet with the report open beside it, address redacted',
  },
  {
    id: 'so-decide',
    ratio: '4:3',
    alt: 'Property owner reviewing a printed inspection findings report',
    shot: 'Technician and homeowner reviewing findings, faces not identifiable',
  },
  {
    id: 'buy-buyer',
    ratio: '4:3',
    alt: 'Inspector walking a home buyer through sewer inspection findings outside a house',
    shot: 'Technician at a for-sale property starting a pre-purchase scope',
  },
  {
    id: 'buy-agent',
    ratio: '4:3',
    alt: 'Real estate agent viewing an inspection report and video on a tablet',
    shot: 'Report handed to an agent, hands only, redacted',
  },
  {
    id: 'final-bg',
    ratio: '16:9',
    alt: 'Residential home exterior with a crew truck at the curb',
    shot: 'Crew truck at a residential curb, reel visible, no plate',
  },
]

function slotImage(slotId: string): CardImage | undefined {
  return resolveSlotImage(IMAGE_SLOTS.find((s) => s.id === slotId))
}

/**
 * For the hero backdrop and the service cards, whose components render an
 * image through `next/image` and cannot draw a placeholder box themselves. An
 * unfilled slot resolves to nothing here; the box comes from `placeholderSlot`
 * through each component's opt-in `slotPlaceholder` field. A filled slot shows
 * its photo.
 */
function inlineSlotImage(slotId: string): CardImage | undefined {
  const image = slotImage(slotId)
  return image?.placeholder === undefined ? image : undefined
}

/**
 * The labelled box for an unfilled slot, for the opt-in `slotPlaceholder`
 * fields (hero, service cards, final CTA). Undefined once the slot has a photo
 * or when `SHOW_IMAGE_SLOTS` is off.
 */
function placeholderSlot(slotId: string): CardImage | undefined {
  const image = slotImage(slotId)
  return image?.placeholder === undefined ? undefined : image
}

/* ==========================================================================
   Service cards. One source for the grid, the form select and the schema.
   ========================================================================== */

const card = (
  serviceId: ServiceId,
  slotId: string,
  fields: Omit<LocationServiceCard, 'serviceId' | 'image'>,
): LocationServiceCard => ({
  serviceId,
  image: inlineSlotImage(slotId),
  slotPlaceholder: placeholderSlot(slotId),
  ...fields,
})

const serviceCards: readonly LocationServiceCard[] = [
  card('svc-sewer-camera-inspection', 'svc-camera', {
    title: 'Sewer Camera Inspection',
    description:
      'See recorded video of the accessible sewer line. An inspection can help identify observed conditions and support an informed next-step decision.',
    bestWhen: 'Best when you want to see what is inside the line.',
    bookingLabel: 'Schedule a Camera Inspection',
    // No approved Oceanside camera page exists, so this links the service page.
    secondaryLink: {
      label: 'About sewer camera inspection',
      pageId: id('svc-sewer-camera-inspection'),
    },
  }),
  card('svc-sewer-cleaning', 'svc-cleaning', {
    title: 'Sewer Cleaning',
    description:
      'Remove buildup and obstructions from sewer lines when cleaning is appropriate. A camera inspection can help document line conditions before or after cleaning.',
    bestWhen: 'Best when a line is slow or partly blocked.',
    bookingLabel: 'Request Sewer Cleaning',
    // The card type holds one secondary link. The approved Oceanside cleaning page
    // links back here; /services/sewer-cleaning/ is linked from the Service JSON-LD
    // node and the rest of the site.
    secondaryLink: {
      label: 'Sewer cleaning in Oceanside',
      pageId: id('sl-oceanside-cleaning'),
    },
  }),
  card('svc-hydro-jetting', 'svc-jetting', {
    title: 'Hydro Jetting',
    description:
      'Use high-pressure water to clear eligible sewer lines. Whether jetting is appropriate depends on the line’s observed condition.',
    bestWhen: 'Best when buildup keeps returning.',
    bookingLabel: 'Request Hydro Jetting',
    secondaryLink: { label: 'About hydro jetting', pageId: id('svc-hydro-jetting') },
  }),
  card('svc-sewer-cleaning-camera-inspection', 'svc-cleaning-camera', {
    title: 'Sewer Cleaning & Camera Inspection',
    description:
      'Combine cleaning with visual documentation of the line. See what was observed and whether cleaning changed the conditions visible on camera.',
    bestWhen: 'Best when you want proof of what cleaning changed.',
    bookingLabel: 'Request Cleaning with Camera',
    secondaryLink: {
      label: 'About cleaning with camera',
      pageId: id('svc-sewer-cleaning-camera-inspection'),
    },
  }),
  card('svc-sewer-line-locating', 'svc-locating', {
    title: 'Sewer Line Locating',
    description:
      'Help identify the route of an accessible sewer line and locate a specific area when conditions allow. Useful when planning evaluation or work.',
    bestWhen: 'Best when you need to know where the line runs.',
    bookingLabel: 'Request Line Locating',
    secondaryLink: {
      label: 'How line locating works',
      pageId: id('svc-sewer-line-locating'),
    },
  }),
  card('svc-drain-cleaning', 'svc-drain', {
    title: 'Drain Cleaning',
    description:
      'Address buildup or blockages in drain lines, sinks, tubs and fixtures. The service focuses on the affected drain and the reported symptoms.',
    bestWhen: 'Best when one sink, tub or fixture is clogged.',
    bookingLabel: 'Request Drain Cleaning',
    secondaryLink: { label: 'About drain cleaning', pageId: id('svc-drain-cleaning') },
  }),
  card('svc-pre-purchase-sewer-inspection', 'svc-prepurchase', {
    title: 'Pre-Purchase Sewer Inspection',
    description:
      'Get a visual assessment of accessible portions of the sewer line before buying a property. The findings can help inform your due diligence.',
    bestWhen: 'Best when you are buying a home.',
    bookingLabel: 'Schedule a Pre-Purchase Inspection',
    secondaryLink: {
      label: 'About pre-purchase inspection',
      pageId: id('svc-pre-purchase-sewer-inspection'),
    },
  }),
  card('svc-recurring-sewer-backup-diagnosis', 'svc-backup', {
    title: 'Recurring Sewer Backup Diagnosis',
    description:
      'Investigate recurring backups and document conditions observed during the inspection. Findings can help clarify what may be contributing to the problem.',
    bestWhen: 'Best when backups keep coming back.',
    bookingLabel: 'Request a Diagnosis',
    secondaryLink: {
      label: 'How diagnosis works',
      pageId: id('svc-recurring-sewer-backup-diagnosis'),
    },
  }),
  card('svc-preventative-sewer-maintenance', 'svc-maintenance', {
    title: 'Preventative Sewer Maintenance',
    description:
      'Arrange sewer inspection or cleaning based on the line’s condition and needs. Recommendations should be guided by observed evidence.',
    bestWhen: 'Best when you want to stay ahead of problems.',
    bookingLabel: 'Request Maintenance',
    secondaryLink: {
      label: 'About maintenance',
      pageId: id('svc-preventative-sewer-maintenance'),
    },
  }),
]

/* ==========================================================================
   Request form configuration, shared by the hero and the final CTA
   ========================================================================== */

/** Service select order. Labels come from the service registry. */
const FORM_SERVICE_ORDER: readonly ServiceId[] = [
  'svc-sewer-camera-inspection',
  'svc-pre-purchase-sewer-inspection',
  'svc-sewer-cleaning',
  'svc-sewer-cleaning-camera-inspection',
  'svc-hydro-jetting',
  'svc-sewer-line-locating',
  'svc-drain-cleaning',
  'svc-recurring-sewer-backup-diagnosis',
  'svc-preventative-sewer-maintenance',
]

/**
 * TCPA text-message consent line.
 *
 * ⚠ HIDDEN UNTIL THE COPY IS APPROVED. Replace `CONSENT_LINE` with the
 * approved wording and set the flag to true. Until then neither form renders
 * a consent line.
 */
const SHOW_CONSENT_LINE = false
const CONSENT_LINE = 'Placeholder: text-message consent language goes here once approved.'

const formConfig: LeadFormConfig = {
  serviceOptions: [
    ...FORM_SERVICE_ORDER.map((serviceId) => ({
      value: serviceId,
      label: getService(serviceId).name,
    })),
    { value: 'hub-commercial', label: 'Commercial Sewer & Drain Services' },
    { value: 'other', label: 'Not sure which service I need' },
  ],
  locationLabel: 'Property location',
  locationOptions: [
    { value: 'oceanside', label: 'Oceanside, CA' },
    { value: 'other-san-diego-county', label: 'Other San Diego County, CA' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'oceanside',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}

const CITY_WU_URL = 'https://www.ci.oceanside.ca.us/government/water-utilities'
const CITY_CONTACT_URL = 'https://www.ci.oceanside.ca.us/government/water-utilities/contact-us'
const CITY_IMPROVE_URL =
  'https://www.ci.oceanside.ca.us/government/water-utilities/administration/improvement-plan-submittals'
const CITY_PERMITS_URL =
  'https://www.ci.oceanside.ca.us/government/development-services/building/building-permits'
const CITY_CODE_URL = 'https://www.ci.oceanside.ca.us/government/city-clerk/municipal-code'
const CENSUS_B25034_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US0653322'
const CENSUS_B25035_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25035?g=160XX00US0653322'

export const oceansideContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in Oceanside, CA',
  metaDescription:
    'Sewer camera inspection and cleaning in Oceanside, CA. See what the City says about private sewer lines, who to call, and what we did not find.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Oceanside, CA',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and sewer
        cleaning for Oceanside properties. The City of Oceanside Water Utilities Department runs the
        public sewer system, and the City says private sewer lines, “from the street to your house,”
        are the property owner’s responsibility. Get clear evidence of what is inside your line
        before you clean it, buy a home, or approve major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting when the evidence supports it',
      `Serving the San Diego area since ${sd.foundingYear}`,
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${sd.phone}`,
    // A photo in the `oceanside-hero` slot replaces the labelled box and
    // becomes the backdrop.
    backdrop: inlineSlotImage('oceanside-hero'),
    slotPlaceholder: placeholderSlot('oceanside-hero'),
    card: {
      title: 'Request a Sewer Inspection',
      intro: 'Tell us what is going on. We will follow up during business hours.',
      phoneLineSuffix: sd.hours,
      nextStepsTitle: 'What happens next',
      nextSteps: [
        'Send your request or call us',
        'We schedule your inspection',
        'You review the recorded findings',
      ],
      note: (
        <>
          To report a sewage overflow in the public sewer, contact the City of Oceanside Water
          Utilities Department. Its number is under &ldquo;Who to call&rdquo; below.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Oceanside sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of Oceanside Water Utilities Department runs the public sewer system, which it describes as over 450 miles of pipelines, two wastewater treatment plants and 34 sewer lift stations.',
      'The City says private sewer lines, “from the street to your house,” are the owner’s responsibility, and tells customers with a sewer leak on their property to call a plumber. We did not find the exact point where the City’s part ends.',
      'We found no City lateral repair, grant or reimbursement program, and no rule requiring a sewer inspection when a home is sold. That is “none found” in the pages we reviewed, not a confirmed absence.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Oceanside', href: '#how-system' },
      // The section component fixes this anchor as `age`.
      { label: 'Homes in Oceanside', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'City program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Oceanside',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Oceanside',
    cards: serviceCards,
    helpBar: {
      title: 'Not sure which service you need?',
      body: 'Tell us what is happening and we will point you to the right inspection or cleaning.',
      primaryLabel: 'Describe Your Problem',
      phoneLabel: `Call ${sd.phone}`,
    },
  },
  responsibility: {
    eyebrow: 'Who is responsible for what',
    title: 'Who is responsible for the sewer line at an Oceanside property?',
    answer: (
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, and the City
        says private sewer lines, “from the street to your house,” are the property owner’s
        responsibility. For a sewer leak on your property, the City’s instruction is to call a
        plumber. We did not find a City statement of the exact point where its system ends and the
        private line begins, or of whether the owner’s part includes the section under the street,
        so confirm that with{' '}
        <a href={CITY_CONTACT_URL} rel="noopener">
          Water Utilities
        </a>{' '}
        before you plan work or assign cost.
      </p>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The public sewer system',
        body: 'The City says its Water Utilities Department is responsible for the operation and maintenance of the City’s wastewater collection and treatment facilities. The department describes that system as over 450 miles of pipelines, two wastewater treatment plants and 34 sewer lift stations.',
      },
      {
        tag: 'Property - Owner',
        title: 'The private sewer line',
        body: 'The City’s own term is “private sewer lines,” and it says they are the responsibility of the property owner. Plumbers and inspectors usually call the pipe that carries wastewater from a building out to the public system the sewer lateral. The City’s page does not use that word.',
      },
    ],
    table: {
      caption: 'Public sewer system compared with the private sewer line',
      columns: ['Question', 'Public sewer system', 'Private sewer line (lateral)'],
      rows: [
        {
          label: 'Who runs or arranges it',
          publicMain: 'The City of Oceanside Water Utilities Department.',
          privateLateral: 'The property owner, per the City.',
        },
        {
          label: 'Where it ends',
          publicMain:
            'The City does not publish the exact connection point. It describes the private line as running “from the street to your house.”',
          privateLateral:
            'We did not find a City statement on whether the owner’s part includes the section under the street.',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'City customer service, (760) 435-5800, for questions about the public system. See “Who to call”.',
          privateLateral: 'For a sewer leak on your property, the City says to call a plumber.',
        },
        {
          label: 'What help exists',
          publicMain: 'The City operates and maintains its collection and treatment facilities.',
          privateLateral:
            'We found no City program for repairing or replacing an existing lateral.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection records the visible condition of the line and where along it a condition sits.',
        },
      ],
    },
    note: 'This is general information from City of Oceanside sources, not legal advice. Contact City Water Utilities to confirm how its rules apply to your address.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Oceanside',
    title: 'How sewers work in Oceanside',
    paragraphs: [
      'In Oceanside, the City itself runs sewer collection and treatment. The City’s own pages describe the system.',
      <>
        <strong>Run by the City.</strong> The Water Utilities Department says it operates and
        maintains the City’s wastewater collection and treatment facilities, including an industrial
        waste inspection program.
      </>,
      <>
        <strong>Scale.</strong> The department describes over 450 miles of pipelines, two
        wastewater treatment plants and 34 sewer lift stations.
      </>,
      <>
        <strong>Plans the City lists.</strong> The Water Utilities page lists a 2021 Sewer System
        Management Plan and a 2015 Sewer Master Plan among its planning documents. We cite them only
        as documents the City lists.
      </>,
      <>
        <strong>Which agency serves an address.</strong> We did not find a map or statement placing
        any property inside the city under a different wastewater agency. Confirm your address with
        Water Utilities at (760) 435-5800.
      </>,
      'The pages we reviewed do not say whether the system is combined or separate, and they do not give an age for the sewer mains or laterals serving any neighborhood. We make no claim about either.',
      'Nothing on those pages tells you the condition of any individual property’s lateral. Only an inspection of your line can show that.',
    ],
    card: {
      image: slotImage('system-street'),
      title: 'What a camera inspection can show on your lateral',
      bullets: [
        'Blockages and grease build-up',
        'Root intrusion',
        'Separated or offset joints',
        'Cracks and visible pipe damage',
        'Standing water or low spots (bellies)',
        'Where the line runs, with locating',
      ],
      closing:
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where a property line, the connection to the City’s main or the City’s responsibility begins.',
    },
  },
  // Census counts homes, not sewer pipes. The section component fixes the anchor
  // as `age`. The shared type has no closing-paragraph field, so the attribution
  // and the closing paragraph share `sourceNote` (rendered inside a <p>, hence the
  // block spans).
  housingAge: {
    eyebrow: 'Homes in Oceanside',
    title: 'How old are Oceanside’s homes, and what does it tell you about your lateral?',
    paragraphs: [
      'Oceanside’s median year built is 1984, according to the U.S. Census Bureau’s American Community Survey (2020-2024 5-year estimates, Oceanside city, with a margin of error of 2 years). About 16.9 percent of the city’s housing units were built before 1970, 48.6 percent from 1970 to 1989, and 34.5 percent in 1990 or later. The 1980s is the largest single decade, with 27.6 percent of units.',
    ],
    table: {
      caption: 'Oceanside housing units by year built',
      columns: ['Built', 'Housing units', 'Share'],
      rows: [
        ['Before 1970', '11,328', '16.9%'],
        ['1970 to 1989', '32,537', '48.6%'],
        ['1990 or later', '23,132', '34.5%'],
        ['Total', '66,997', '100%'],
      ],
    },
    sourceNote: (
      <>
        <span className="block">
          The counts come from Census table{' '}
          <a href={CENSUS_B25034_URL} rel="noopener">
            B25034
          </a>{' '}
          for Oceanside city. The groupings and percentages are our arithmetic from the table’s
          decade rows. The median comes from table{' '}
          <a href={CENSUS_B25035_URL} rel="noopener">
            B25035
          </a>
          .
        </span>
        <span className="mt-4 block">
          The year a house was built does not tell you the condition or material of its lateral. A
          lateral can be repaired, rerouted or replaced after a house is built, and two houses from
          the same decade can have lines in very different shape. Only an inspection of your line
          can show what is there. The Census figures describe Oceanside city as a Census place,
          which may not match every property with an Oceanside mailing address or every address the
          City’s sewer system serves.
        </span>
      </>
    ),
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'City sewer system or private line? Start with the right contact.',
    paragraphs: [
      'For questions about the public sewer system, contact the City of Oceanside Water Utilities Department. For a sewer leak on your property, the City says to call a plumber. If a plumber or the City points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // Oceanside has one agency, so the City is `agency` and there is no
    // `secondaryAgency`. The panel type holds one phone per panel, so the water
    // emergency number is plain text in the paragraph, labelled as the City's.
    agency: {
      label: 'City of Oceanside Water Utilities Department',
      phone: { label: '(760) 435-5800', href: 'tel:+17604355800' },
      text: 'This is the department’s customer service number, published on its contact page. The City publishes a separate number, (760) 435-3900, for water emergencies such as a leaking fire hydrant or a water main break, with option 4 during the day and option 1 after hours. The City frames that number around City water, and we did not find a sewer-specific backup or overflow instruction on its pages, so we do not present it as a sewer line. We also did not find published office hours for the department. These are the City’s numbers and statements, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${sd.phone}, ${sd.hours}.`,
    },
  },
  // `LocationMunicipalProgram` normally renders a program. Here it renders a
  // none-found lede with two lists. Fields map: lede = opening, whoCanApply = who
  // these rules apply to, covers = what the City publishes about private lines
  // and permits, doesNotCover = what we did not find, no steps, no afterSteps,
  // callout = before you rely on this, closing = the last paragraph. The section
  // component fixes the anchor as `city-program`.
  municipalProgram: {
    eyebrow: 'City program',
    title:
      'We found no City lateral repair program, and the City says the private sewer line is the owner’s',
    lede: 'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program from the City of Oceanside on the City pages we reviewed (Water Utilities, its contact page, improvement-plan submittals and the Development Services permit pages). That is “none found”, not a statement that none exists, and the City’s pages carry no current date. The City’s contact page tells a customer with a sewer leak on their property to call a plumber and does not describe a City repair or reimbursement for it.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City publishes about private lines and permits',
      items: [
        'Private sewer lines, “from the street to your house,” are the responsibility of the property owner.',
        'Sewer improvements added, removed, replaced or altered in a public right-of-way, a City easement or City-owned property need an improvement plan reviewed and approved by Water Utilities, prepared under the direction of and signed by a Registered Civil Engineer.',
        'Improvements, grading or alterations on private property or in the City right-of-way may trigger a City permit and other plans or documents. The City says to consult Development Services and City code before planning.',
        'Building permit applications with plans go through the City’s online permit portal.',
      ],
    },
    doesNotCover: {
      title: 'What we did not find',
      items: [
        'A City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral.',
        'The exact connection point where the City’s system ends and the private line begins, or whether the owner’s part includes the section under the street.',
        'A City statement about damage to a private line that the City itself caused.',
        'A statement that every repair or replacement of an existing lateral needs a particular permit. The improvement-plan rule describes work in the public right-of-way, City easements and City property.',
        'A sewer-specific backup or overflow instruction or number from the City.',
        'A City inspection requirement for existing laterals.',
        'A statement of whether the system is combined or separate.',
      ],
    },
    whoCanApply: {
      title: 'Who these rules apply to',
      paragraphs: [
        'Owners of a property served by the City of Oceanside’s sewer system.',
        'Confirm that the City serves your address with Water Utilities before you apply any rule on this page.',
      ],
    },
    callout: {
      title: 'Before you rely on this',
      paragraphs: [
        'Confirm with City Water Utilities that the City serves your address, and ask Water Utilities and Development Services which approvals apply before you pay for any work on a lateral or in the street. A camera inspection records what the camera sees and where. It does not tell you which approvals apply and it does not replace any review the City requires. The City’s pages show no current date, so confirm details with the City.',
      ],
    },
    closing:
      'Nothing we reviewed says any agency pays for our services. The Sewer Pros does not perform repairs or replacements and does not arrange reimbursement.',
  },
  secondOpinion: {
    eyebrow: 'Independent sewer inspection & second opinions',
    title: 'Before You Approve an Expensive Sewer Repair, Get an Opinion With Nothing to Sell',
    ledes: [
      'A sewer backup or major repair recommendation can make a costly decision feel urgent. The Sewer Pros inspects and documents the condition inside your sewer line so you can understand what is actually happening before you approve cleaning, excavation, lining, or replacement.',
      'Because we do not perform sewer repairs or replacements, we do not profit from selling you the work. Our role is to give you clear video evidence, straightforward findings, and an honest opinion you can use to make the next decision.',
    ],
    cta: {
      label: 'Get an Independent Second Opinion',
      supportLine:
        'Already received a repair recommendation? Bring us in for an independent second opinion before you sign off on major work.',
    },
    steps: [
      {
        title: 'Inspect',
        body: 'We use a sewer camera to examine the line for blockages, roots, damage, offsets, standing water, and other visible conditions.',
        image: slotImage('so-inspect'),
      },
      {
        title: 'Document',
        body: 'Receive video evidence and clear findings that show what was observed inside the line, so you are not forced to rely only on a verbal repair recommendation.',
        image: slotImage('so-document'),
      },
      {
        title: 'Decide',
        body: 'Use the findings to determine whether the issue calls for cleaning, monitoring, a repair estimate, or another qualified opinion, without pressure to buy a repair from us.',
        image: slotImage('so-decide'),
      },
    ],
    callout: {
      title: 'Do Not Let a Sales-Driven Recommendation Make the Decision for You',
      body: 'A repair recommendation should be based on documented conditions inside the sewer line, not pressure to approve work before you understand the problem. When the company diagnosing the problem can also sell the repair, getting a second opinion can help you separate the actual condition of the line from the proposed solution.',
    },
  },
  buyingGuide: {
    eyebrow: 'Buying in Oceanside',
    title: 'Sewer inspection before buying an Oceanside home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover. The City says private sewer lines, “from the street to your house,” are the property owner’s responsibility, so after closing that responsibility belongs to the owner of the property, which is you.',
    // `body` is a single string in the shared type, so the source paragraphs
    // are joined into one.
    body: 'We did not find a rule on the City of Oceanside pages we reviewed that requires a sewer lateral inspection, certification or seller disclosure when a home is sold. That reads as none found, not a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. In practice an inspection is something a buyer chooses to ask for. Two practical points. Confirm with City Water Utilities, at (760) 435-5800, that the City serves the address. And ask it where the City’s part of the system ends and the private line begins, because we did not find that published. Findings are informational and not legal advice.',
    image: slotImage('buy-buyer'),
    links: [
      { label: 'Sewer inspection for home buyers', pageId: id('aud-home-buyers') },
      {
        label: 'About pre-purchase inspection',
        pageId: id('svc-pre-purchase-sewer-inspection'),
      },
    ],
    cta: { label: 'Schedule a Pre-Purchase Sewer Inspection' },
    agents: {
      eyebrow: 'For agents and inspectors',
      title: 'Working with real estate professionals',
      body: 'We provide video when a camera is used, and written findings. Findings are informational and not legal advice.',
      link: {
        label: 'Sewer inspection for real estate agents',
        pageId: id('aud-real-estate-agents'),
      },
      image: slotImage('buy-agent'),
    },
  },
  nearbyAreas: {
    eyebrow: 'Nearby service areas',
    title: 'Serving the wider San Diego area',
    body: 'This page covers the City of Oceanside only. Sewer agencies and lateral rules differ across San Diego County, so check the page for your address.',
    items: [
      { title: 'San Diego', description: 'Local sewer details', pageId: id('loc-sd-san-diego') },
      { title: 'Carlsbad', description: 'Local sewer details', pageId: id('loc-sd-carlsbad') },
      { title: 'Escondido', description: 'Local sewer details', pageId: id('loc-sd-escondido') },
      { title: 'San Marcos', description: 'Local sewer details', pageId: id('loc-sd-san-marcos') },
      { title: 'Chula Vista', description: 'Local sewer details', pageId: id('loc-sd-chula-vista') },
      {
        title: 'Mission Valley',
        description: 'Commercial-leaning property sewer services',
        pageId: id('loc-sd-mission-valley'),
      },
      {
        title: 'All San Diego service areas',
        description: 'See the full San Diego market',
        pageId: id('market-san-diego-ca'),
      },
    ],
  },
  faq: [
    {
      question: 'Who runs the public sewer system in Oceanside?',
      answer: (
        <p>
          The City of Oceanside Water Utilities Department says it is responsible for the operation
          and maintenance of the City’s wastewater collection and treatment facilities. The
          department describes the system as over 450 miles of pipelines, two wastewater treatment
          plants and 34 sewer lift stations. We did not find a map or statement placing any property
          inside the city under a different wastewater agency, so confirm your address with Water
          Utilities at (760) 435-5800. Sources: City of Oceanside Water Utilities page; Water
          Utilities contact page.
        </p>
      ),
    },
    {
      question: 'Is the private sewer line the owner’s responsibility in Oceanside?',
      answer: (
        <p>
          Yes, according to the City. The Water Utilities Department says private sewer lines,
          “from the street to your house,” are the responsibility of the property owner, and it
          tells a customer with a sewer leak on their property to call a plumber. We did not find a
          City statement about damage to a private line that the City itself caused. Source: City of
          Oceanside Water Utilities contact page.
        </p>
      ),
    },
    {
      question: 'Where does the City’s responsibility end and the owner’s begin?',
      answer: (
        <p>
          The City’s published wording is that private sewer lines run “from the street to your
          house.” We did not find a City statement of the exact connection point, or of whether the
          owner’s part includes the section under the street or other public right-of-way. Ask Water
          Utilities before you plan work or assign cost. Source: City of Oceanside Water Utilities
          contact page.
        </p>
      ),
    },
    {
      question: 'Who do I call about a sewer leak or backup in Oceanside?',
      answer: (
        <p>
          For a sewer leak on your property the City says to call a plumber. The City’s customer
          service number is (760) 435-5800. It also publishes (760) 435-3900 for water emergencies
          such as a leaking fire hydrant or a water main break, with option 4 during the day and
          option 1 after hours. The City frames that number around City water, and we did not find a
          sewer-specific backup or overflow instruction, so we do not present it as a sewer line. If
          a plumber or the City points to your lateral, a camera inspection can show what is in it.
          These are the City’s numbers and instructions, not ours. Sources: City of Oceanside Water
          Utilities contact page; Water Utilities page.
        </p>
      ),
    },
    {
      question: 'Does Oceanside have a lateral repair grant or reimbursement program?',
      answer: (
        <p>
          We did not find one on the City’s Water Utilities, contact, improvement-plan or permit
          pages. That is “none found”, not a statement that none exists, and the City’s pages carry
          no current date. The City’s contact page tells a customer with a sewer leak on their
          property to call a plumber and does not describe a City repair or reimbursement for it.
          Sources: City of Oceanside Water Utilities pages; Development Services building permits
          page.
        </p>
      ),
    },
    {
      question: 'Do I need City approval to work on a lateral in the street or a City easement?',
      answer: (
        <p>
          The City says sewer improvements added, removed, replaced or altered in a public
          right-of-way, a City easement or City-owned property need an improvement plan reviewed and
          approved by Water Utilities, prepared under the direction of and signed by a Registered
          Civil Engineer. For work on private property, the City says improvements may trigger a
          permit and points to Development Services and City code. We did not find a published rule
          that covers every repair of an existing lateral, so ask the City which approvals apply to
          your address before you plan work. Sources: City of Oceanside improvement-plan submittals
          page; Development Services building permits page.
        </p>
      ),
    },
    {
      question: 'Is a sewer inspection required when buying an Oceanside home?',
      answer: (
        <p>
          We did not find a rule on the City of Oceanside pages we reviewed that requires a sewer
          lateral inspection, certification or seller disclosure when a home is sold. That reads as
          none found, not a confirmed absence, and it does not address state disclosure law. The
          City says the private sewer line is the owner’s responsibility, so a buyer who wants
          evidence of its condition has to ask for it. Sources: City of Oceanside municipal code
          pages; Water Utilities pages; Development Services pages.
        </p>
      ),
    },
    {
      question: 'How old is Oceanside’s housing, and does that tell me about my lateral?',
      answer: (
        <p>
          Oceanside’s median year built is 1984, plus or minus 2 years (ACS 2020-2024 5-year
          estimates, Oceanside city). About 16.9 percent of housing units were built before 1970
          and 48.6 percent from 1970 to 1989, from our arithmetic on the Census decade counts. The
          year a house was built does not tell you the condition or material of its lateral, and the
          Census place boundary may not match the area the City’s sewer system serves. Sources: U.S.
          Census Bureau ACS tables B25035 and B25034, Oceanside city, California.
        </p>
      ),
    },
    {
      question: 'What does a sewer camera inspection show?',
      answer: (
        <p>
          It can reveal blockages, root intrusion, separated joints, offsets, cracks, standing
          water and other observable conditions in accessible sewer piping, recorded on video.
        </p>
      ),
    },
    {
      question: 'Do you repair or replace sewer lines?',
      answer: (
        <p>
          No. We inspect, locate, diagnose and clean. That independence is the point: our
          recommendations are not built around selling a repair.
        </p>
      ),
    },
  ],
  finalCta: {
    eyebrow: 'Evidence before expensive decisions',
    title: 'Schedule a sewer camera inspection in Oceanside.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a repair recommendation you want checked, or an Oceanside property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
      'We document what the camera shows and explain the findings in plain language, so you can decide whether the evidence points to cleaning, monitoring, or further evaluation.',
    ],
    bullets: [
      'See the visible condition of the line on video',
      'Receive documented findings you can review',
      'Choose your next step without a repair sale',
    ],
    // The composition drops a placeholder background, so the labelled box comes
    // from `slotPlaceholder`; a photo replaces both automatically.
    background: inlineSlotImage('final-bg'),
    slotPlaceholder: placeholderSlot('final-bg'),
    formTitle: 'Request service',
    submitLabel: 'Request Service',
    messageLabel: 'Message (optional)',
    form: formConfig,
  },
  sources: {
    title: 'Sources',
    links: [
      {
        label: 'City of Oceanside: Water Utilities (page date not shown; accessed Oct 4, 2026)',
        href: CITY_WU_URL,
      },
      {
        label:
          'City of Oceanside: Water Utilities contact us (page date not shown; accessed Oct 4, 2026)',
        href: CITY_CONTACT_URL,
      },
      {
        label:
          'City of Oceanside: Improvement plan submittals (page date not shown; accessed Oct 4, 2026)',
        href: CITY_IMPROVE_URL,
      },
      {
        label: 'City of Oceanside: Building permits (page date not shown; accessed Oct 4, 2026)',
        href: CITY_PERMITS_URL,
      },
      {
        label: 'City of Oceanside: Municipal code (page date not shown; accessed Oct 4, 2026)',
        href: CITY_CODE_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2020-2024 5-year, table B25035, Oceanside city, California (accessed Oct 4, 2026)',
        href: CENSUS_B25035_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2020-2024 5-year, table B25034, Oceanside city, California (accessed Oct 4, 2026)',
        href: CENSUS_B25034_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote:
      'Official guidance can change, so confirm details with the City of Oceanside.',
  },
  servicePageIds: [id('sl-oceanside-cleaning')],
}
