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
 * City of Las Vegas, NV location page (`loc-lv-las-vegas`).
 *
 * Full rich composition, replacing the short inline entry that used to live in
 * `las-vegas.tsx`. Same structure as the Oceanside, San Diego City, Carlsbad,
 * Chula Vista, Escondido and San Marcos modules: only copy, data, links and
 * image slots differ. No review band (no Las Vegas review dataset). Like
 * Oceanside it has a housing-age section, built from primary Census values (ACS
 * 2020-2024, tables B25034 and B25035, Las Vegas city, read 2026-10-04). Local
 * facts were read from City of Las Vegas pages on 2026-10-04. Two of those pages
 * are dated (the sewer-backup post, March 10, 2021, and the sewer standards
 * addenda, revised November 9, 2021); the rest show no date.
 *
 * ⚠ THIS PAGE REPLACES UNSUPPORTED AND WRONG CLAIMS. The old page quoted a
 * warranty price, "no coverage cap" and "no deductible or service fee" that are
 * not on the City page, said no City statement on owner responsibility was
 * located (the City states it in two places), named a "Water Pollution Control"
 * division no City source supports, labelled 2020-2024 housing figures
 * "2019-2023", said "most laterals here are PVC" with no source, and showed
 * "Since 2011", the St. Louis year. None of that is carried over.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. 702-229-6227 (Streets & Sanitation Division)
 * and 702-229-6541 (Sanitary Sewer Engineering) are tappable in their own
 * labelled panels. 702-229-6251 (Building & Safety) is plain text in the City
 * program list and FAQ 7 only. No agency street address, after-hours number or
 * Streets & Sanitation hours are published. The warranty provider's phone number
 * and price are not published either.
 *
 * ⚠ NO CITY POLICY CLAIMS. The page never says the City repairs a lateral in the
 * right-of-way or pays for damage it causes, never says what LVMC 14.04.120
 * says (only that the City's addenda cite it and we have not reviewed it), and
 * never says a permit is or is not required for a camera inspection or cleaning.
 * The warranty appears only as an optional paid product from a private company,
 * in the takeaway, the City program closing paragraph and FAQ 5.
 *
 * ⚠ THE CLARK COUNTY WATER RECLAMATION DISTRICT SENTENCE IS NOT ON THIS PAGE.
 * The district's page returned HTTP 403 to automated fetches on 2026-10-04, so
 * its service-area statement could not be re-read. The conditional system
 * sentence, FAQ 3 and the source line were dropped together. Restore them once
 * the page is re-read.
 *
 * ⚠ LAS VEGAS IS A SERVICE MARKET, NOT A LOCATION. No office, address, map pin
 * or GBP statement appears. Phone, hours and the founding year are read from
 * `marketOperatingDetail['las-vegas-nv']` (DEC-071), never typed. The founding
 * year is 0 (unknown), so the trust strip drops its founding-year cell.
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

/** Las Vegas's own phone, hours and founding year (DEC-071). */
const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

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
 * No slot has a `src` yet and none reuses existing art (the Las Vegas hub art in
 * `public/images/markets/las-vegas-nv/` is rendered scenes, not job photos). Use
 * Las Vegas wording in the alt text for `las-vegas-hero` and `final-bg` (for
 * example "Technician with a sewer camera at a Las Vegas, NV home") only if the
 * photo is from a Las Vegas-area property.
 */
const IMAGE_SLOTS: readonly ImageSlot[] = [
  {
    id: 'las-vegas-hero',
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
    // No approved Las Vegas camera page exists, so this links the service page.
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
    // No approved Las Vegas cleaning page exists, so this links the service page.
    secondaryLink: { label: 'About sewer cleaning', pageId: id('svc-sewer-cleaning') },
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
    { value: 'las-vegas', label: 'Las Vegas, NV' },
    { value: 'other-las-vegas-valley', label: 'Other Las Vegas Valley, NV' },
    { value: 'other-location', label: 'Other location' },
  ],
  defaultLocationValue: 'las-vegas',
  errors: {
    firstName: 'Please enter your first name.',
    lastName: 'Please enter your last name.',
    phone: 'Please enter a phone number we can reach you at.',
    service: 'Please choose a service, or Not sure.',
  },
  consentLine: SHOW_CONSENT_LINE ? CONSENT_LINE : undefined,
}
const CITY_BLOG_URL = 'https://www.lasvegasnevada.gov/News/Blog/Detail/sewer-back-up-issues'
const CITY_WARRANTY_URL =
  'https://www.lasvegasnevada.gov/Government/Departments/Public-Works/Sewer-Line-Warranty'
const CITY_ENGINEERING_URL =
  'https://www.lasvegasnevada.gov/Government/Departments/Public-Works/City-Engineering'
const CITY_ADDENDA_URL =
  'https://files.lasvegasnevada.gov/public-works/CLV-DCSWCS-and-CCWRD-AML-Addendum.pdf'
const CITY_PERMITS_LIST_URL =
  'https://www.lasvegasnevada.gov/Business/Permits-Licenses/Online-Permits-List'
const CITY_PERMIT_GUIDE_URL =
  'https://files.lasvegasnevada.gov/building-safety/When-Do-I-Need-a-Permit.pdf'
const CITY_INSPECTION_URL =
  'https://files.lasvegasnevada.gov/building-safety/Inspection-Request-Types-Or-Codes.pdf'
const CENSUS_B25034_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25034?g=160XX00US3240000'
const CENSUS_B25035_URL = 'https://data.census.gov/table/ACSDT5Y2024.B25035?g=160XX00US3240000'

export const lasVegasCityContent: LocationPageContent = {
  seoTitle: 'Sewer Inspection & Cleaning in Las Vegas, NV',
  metaDescription:
    'Sewer camera inspection and cleaning in Las Vegas, NV. See what the City says about private sewer lines, who to call, and how old local homes are.',
  hero: {
    title: 'Sewer Inspection and Cleaning in Las Vegas, NV',
    intro: (
      <p>
        Independent sewer camera inspection, diagnostics, line locating, hydro jetting and sewer
        cleaning for properties in the City of Las Vegas. The City says the owner maintains a private
        sewer lateral up to the point where it connects into the City sewer main, so get clear
        evidence of what is inside your line before you clean it, buy a home, or approve major work.
      </p>
    ),
  },
  heroForm: {
    bullets: [
      'Camera inspection with documented findings',
      'Cleaning and hydro jetting when the evidence supports it',
      'Serving the Las Vegas Valley, a newer market for us',
    ],
    primaryAction: { href: '#request', label: 'Schedule a Sewer Inspection' },
    secondaryActionLabel: `Call ${lv.phone}`,
    // A photo in the `las-vegas-hero` slot replaces the labelled box and
    // becomes the backdrop.
    backdrop: inlineSlotImage('las-vegas-hero'),
    slotPlaceholder: placeholderSlot('las-vegas-hero'),
    card: {
      title: 'Request a Sewer Inspection',
      intro: 'Tell us what is going on. We will follow up during business hours.',
      phoneLineSuffix: lv.hours,
      nextStepsTitle: 'What happens next',
      nextSteps: [
        'Send your request or call us',
        'We schedule your inspection',
        'You review the recorded findings',
      ],
      note: (
        <>
          To report a stoppage in the City sewer main, or a manhole that is overflowing, contact the
          City&rsquo;s Streets &amp; Sanitation Division. Its number is under &ldquo;Who to
          call&rdquo; below.
        </>
      ),
      form: formConfig,
    },
  },
  faqHeading: 'Las Vegas sewer questions, answered',
  // DEC-114: FAQPage markup is on by default; `true` keeps it explicit here.
  faqSchemaApproved: true,
  keyTakeaways: {
    title: 'Key takeaways',
    items: [
      'The City of Las Vegas says it maintains the public sewer main, which is normally under public streets and may also sit in designated property easements. Confirm that the City serves your address before you rely on any City rule on this page.',
      'The City says owners maintain private sewer laterals up to the point where they connect into the City main, and its sewer standards addenda say a private sewer stays private even in the public right-of-way until that connection.',
      'We found no City lateral repair, grant or reimbursement program. The City promotes an optional warranty offered with a private company, which is a product you choose to buy, not a City repair program.',
    ],
    jumpNavLabel: 'On this page:',
    jumpNav: [
      { label: 'Services', href: '#services' },
      { label: 'Who is responsible', href: '#responsible' },
      { label: 'Sewers in Las Vegas', href: '#how-system' },
      // The section component fixes this anchor as `age`.
      { label: 'Homes in Las Vegas', href: '#age' },
      { label: 'Who to call', href: '#who-to-call' },
      // The section component fixes this anchor as `city-program`.
      { label: 'City program', href: '#city-program' },
      { label: 'Second opinion', href: '#second-opinion' },
      { label: 'Buying a home', href: '#buying' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  serviceCards: {
    eyebrow: 'Services in Las Vegas',
    title: 'Sewer Inspection, Diagnostics and Cleaning Services in Las Vegas',
    cards: serviceCards,
    helpBar: {
      title: 'Not sure which service you need?',
      body: 'Tell us what is happening and we will point you to the right inspection or cleaning.',
      primaryLabel: 'Describe Your Problem',
      phoneLabel: `Call ${lv.phone}`,
    },
  },
  responsibility: {
    eyebrow: 'Who is responsible for what',
    title: 'Who is responsible for the sewer line at a Las Vegas property?',
    answer: (
      <>
        <p>
          In the City of Las Vegas, the City maintains the public sewer main. The City says private
          property owners maintain private sewer laterals that originate on their property, up to the
          point where the lateral connects into the City sewer main. The City&rsquo;s sewer standards
          addenda go further: they say private sewers are private, even the portion in the public
          right-of-way, until the point of connection with the public sewer main. So the
          owner&rsquo;s responsibility can extend under the street.
        </p>
        <p className="mt-4">
          A stoppage in the City main can affect several properties at once, and that is the
          City&rsquo;s to address. For a problem specific to your property, the City says you may
          need a contractor to investigate. A camera inspection can show which of the two you have.
        </p>
      </>
    ),
    cards: [
      {
        tag: 'Public - City',
        title: 'The public sewer main',
        body: 'The City says it provides maintenance for public sewer main facilities. The mains are normally under public streets and may also be in designated property easements. For an obstruction, a pipe failure or damage from area construction on a public main, the City says its team will address it.',
      },
      {
        tag: 'Property - Owner',
        title: 'The private sewer lateral',
        body: 'The City’s own term is private sewer laterals: the pipe that originates on your property and runs to the City main. Plumbers and inspectors usually just say lateral. The City’s standards addenda say it stays private through any part in the public right-of-way.',
      },
    ],
    table: {
      caption: 'Public sewer main compared with the private sewer lateral',
      columns: ['Question', 'Public sewer main', 'Private sewer lateral'],
      rows: [
        {
          label: 'Who maintains it',
          publicMain: 'The City of Las Vegas.',
          privateLateral: 'The property owner, per the City.',
        },
        {
          label: 'Where it ends',
          publicMain:
            'Normally under public streets, and sometimes in designated property easements.',
          privateLateral:
            'The owner’s responsibility runs to the point where the lateral connects into the City main, including any part in the public right-of-way, per the City’s standards addenda.',
        },
        {
          label: 'Who to contact first',
          publicMain:
            'The City’s Streets & Sanitation Division, 702-229-6227, for a stoppage that affects several properties or overflows manholes.',
          privateLateral:
            'For a problem specific to your property, the City says a contractor may need to investigate.',
        },
        {
          label: 'What help exists',
          publicMain:
            'The City says it will address an obstruction, pipe failure or construction damage on a public main.',
          privateLateral:
            'We found no City program for repairing or replacing a lateral. See “City program”.',
        },
        {
          label: 'Where an inspection helps',
          publicMain: 'Not applicable',
          privateLateral:
            'A camera inspection records the visible condition of the line and where along it a condition sits.',
        },
      ],
    },
    note: 'This is general information from City of Las Vegas sources, not legal advice. The City’s sewer-backup post is dated March 10, 2021 and its sewer standards addenda were last revised November 9, 2021, so confirm with the City how the rules apply to your address. We did not find a City statement about damage to a private lateral caused by City work, so we make no claim about it.',
  },
  systemExplainer: {
    eyebrow: 'Sewers in Las Vegas',
    title: 'How sewers work in the City of Las Vegas',
    paragraphs: [
      'Inside the City, the Department of Public Works handles sewer service. Its City Engineering division oversees the sanitary sewer system, and its Streets & Sanitation Division takes calls about main stoppages. The City’s own pages describe the system.',
      <>
        <strong>Public mains.</strong> The City maintains the public sewer mains, which it says are
        normally under public streets and may also sit in designated property easements.
      </>,
      <>
        <strong>Condition assessment.</strong> City Engineering describes a condition assessment
        program that identifies and prioritizes rehabilitation of what it calls an aging wastewater
        collection system. That is the City’s stated mission, not a finding about any street or
        property.
      </>,
      <>
        <strong>Main stoppages.</strong> The City says a stoppage in its sewer main affects multiple
        upstream properties and can overflow affected manholes.
      </>,
      <>
        <strong>A public sewer map.</strong> The City publishes a sanitary sewer map with layers for
        sewer mains, sewer manholes and privately maintained sewer lines, and record drawings you can
        search online.
      </>,
      <>
        <strong>Which agency serves an address.</strong> A Las Vegas mailing address does not by
        itself show that the City serves a property. Use the City’s sewer map or Sanitary Sewer
        Engineering to check yours.
      </>,
      'Properties on septic systems are permitted and regulated by the Southern Nevada Health District, not the City.',
      'The pages we reviewed do not say whether the system is combined or separate, and they do not give an age for the mains or laterals serving any street. We make no claim about either.',
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
        'You get recorded evidence with a distance count, so you can tell a line that needs cleaning from one that needs a bigger decision. The footage records where along the line a condition sits, measured from where the camera entered. It does not establish where the connection to the City main is, or where the owner’s responsibility ends.',
    },
  },
  // Census counts homes, not sewer pipes. The section component fixes the anchor
  // as `age`. The shared type has no closing-paragraph field, so the attribution
  // and the closing paragraph share `sourceNote` (rendered inside a <p>, hence the
  // block spans).
  housingAge: {
    eyebrow: 'Homes in Las Vegas',
    title: 'How old are Las Vegas homes, and what does it tell you about your lateral?',
    paragraphs: [
      'Las Vegas’s median year built is 1994, according to the U.S. Census Bureau’s American Community Survey (2020-2024 5-year estimates, Las Vegas city, with a margin of error of 1 year). The 1990s are the largest single decade, with 74,732 housing units, or 27.9 percent. About 61.3 percent of the city’s housing units were built in 1990 or later, 25.9 percent from 1970 to 1989, and 12.8 percent before 1970.',
    ],
    table: {
      caption: 'Las Vegas housing units by year built',
      columns: ['Built', 'Housing units', 'Share'],
      rows: [
        ['Before 1970', '34,280', '12.8%'],
        ['1970 to 1989', '69,371', '25.9%'],
        ['1990 or later', '164,003', '61.3%'],
        ['Total', '267,654', '100%'],
      ],
    },
    sourceNote: (
      <>
        <span className="block">
          The counts come from Census table{' '}
          <a href={CENSUS_B25034_URL} rel="noopener">
            B25034
          </a>{' '}
          for Las Vegas city. The groupings and percentages are our arithmetic from the table’s
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
          can show what is there. The Census figures describe Las Vegas city as a Census place,
          which may not match every property with a Las Vegas mailing address or every address the
          City’s sewer system serves.
        </span>
      </>
    ),
  },
  whoToCall: {
    eyebrow: 'Know who to call',
    title: 'City main or private lateral? Start with the right contact.',
    paragraphs: [
      'For a suspected stoppage in the City sewer main, or a manhole that is overflowing, call the City’s Streets & Sanitation Division. For a problem specific to your property, the City says you may need a contractor to investigate. If a contractor or the City points to your lateral, or you want proof of its condition, that is where an independent camera inspection helps.',
    ],
    image: slotImage('call-cleanout'),
    // Two City panels (`agency`, `secondaryAgency`) and the company, no type
    // change. Each panel is one label, one phone and one text paragraph.
    agency: {
      label: 'City of Las Vegas Streets & Sanitation Division',
      phone: { label: '702-229-6227', href: 'tel:+1-702-229-6227' },
      text: 'The City asks you to call this division for a stoppage in the City sewer main that affects several upstream properties or overflows manholes. The City page we reviewed does not give hours for this line or an after-hours sewer number, so we do not either. This is the City’s number and instruction, not ours.',
      links: [],
    },
    secondaryAgency: {
      label: 'City of Las Vegas Sanitary Sewer Engineering',
      phone: { label: '702-229-6541', href: 'tel:+1-702-229-6541' },
      text: 'For general sewer information, including the nearest public sewer location and point-of-connection conditions. The City also has a contact form: choose “Sewer Location.” The City’s page lists the same number for its Flood Control section, and we list it here only as the Sanitary Sewer Engineering contact the City names. This is the City’s number, not ours.',
      links: [],
    },
    company: {
      label: 'The Sewer Pros',
      text: `Inspection, locating and cleaning for your lateral. ${lv.phone}, ${lv.hours}. Las Vegas is a newer market for us (our longest-running work is in St. Louis and San Diego), and we would rather say that plainly than imply a local track record we have not built here yet.`,
    },
  },
  // `LocationMunicipalProgram` normally renders a program. Here it renders a
  // none-found lede with two lists. Fields map: lede = opening, whoCanApply = who
  // these rules apply to, covers = what the City publishes about private lines
  // and permits, doesNotCover = what we did not find, no steps, no afterSteps,
  // callout = before you rely on this, closing = the warranty paragraph. The
  // section component fixes the anchor as `city-program`.
  municipalProgram: {
    eyebrow: 'City program',
    title:
      'We found no City lateral repair program, and the City says the private lateral is the owner’s',
    lede: 'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program run by the City of Las Vegas on the City pages we reviewed (the Public Works sewer pages, City Engineering, the Building & Safety permit guide and permit lists, and the City’s sewer-backup post). That is “none found”, not a statement that none exists. The City’s sewer-backup post tells an owner with a problem specific to their property that a contractor may need to investigate, and it describes no City repair or reimbursement for it.',
    paragraphs: [],
    image: slotImage('program-footage'),
    covers: {
      title: 'What the City publishes about private lines and permits',
      items: [
        'Owners maintain private sewer laterals up to the point where they connect into the City sewer main (City sewer-backup page, March 10, 2021).',
        'The City’s sewer standards addenda, last revised November 9, 2021, say private sewers are private, even the portion in the public right-of-way, until the point of connection with the public sewer main. The addenda cite Las Vegas Municipal Code section 14.04.120, which we have not reviewed.',
        'The City lists “building water and sewer repairs/replacements (no new connections)” as an online permit category. Work that is not on its online list needs plans submitted and reviewed.',
        'The City’s inspection list includes a “Bldg Sewer (Yard Lines)” inspection type.',
        'The City’s homeowner permit guide says a permit is required when a remodel or add-on relocates existing plumbing, including installation of building sewers. The guide calls itself a guide only, not all-inclusive, and sends readers to the Building & Safety Department at 702-229-6251 (the City’s number).',
      ],
    },
    doesNotCover: {
      title: 'What we did not find',
      items: [
        'A City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral.',
        'A City statement about damage to a private lateral caused by City work, or about who repairs a lateral in the public right-of-way.',
        'A statement that cleaning or a camera inspection needs a permit, or that every repair of an existing lateral needs a particular permit.',
        'A City after-hours sewer number, or a sewer-specific online reporting page, on the pages we reviewed.',
        'A City inspection requirement for existing laterals.',
        'A statement of whether the system is combined or separate, or how old it is.',
      ],
    },
    whoCanApply: {
      title: 'Who these rules apply to',
      paragraphs: [
        'Owners of a property served by the City of Las Vegas sewer system.',
        'Confirm that the City serves your address with Sanitary Sewer Engineering before you rely on any rule on this page.',
      ],
    },
    callout: {
      title: 'Before you rely on this',
      paragraphs: [
        'Confirm with Sanitary Sewer Engineering that the City serves your address, and ask Building & Safety which approvals apply before you pay for any work on a lateral or in the street. A camera inspection records what the camera sees and where. It does not tell you which approvals apply and it does not replace any review the City requires. Two of the City pages we relied on date from 2021, so confirm details with the City.',
      ],
    },
    closing:
      'The City also promotes an optional warranty program offered with Service Line Warranties of America, a private company. It is a paid product you choose to buy, not a City program that contributes to a repair, and the City’s page does not list a price or terms, so we do not either. Ask the provider for its current terms and read them before you decide. Nothing we reviewed says any agency pays for our services. The Sewer Pros does not perform repairs or replacements and does not arrange reimbursement.',
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
    eyebrow: 'Buying in Las Vegas',
    title: 'Sewer inspection before buying a Las Vegas home',
    lede: 'A sewer camera inspection shows the visible condition of the lateral before you close, which a standard home inspection does not cover. The City says owners maintain private sewer laterals up to the point where they connect into the City main, and its sewer standards addenda say that includes any part in the public right-of-way, so after closing that responsibility belongs to the owner of the property, which is you.',
    // `body` is a single string in the shared type, so the source paragraphs
    // are joined into one.
    body: 'We did not find a rule on the City of Las Vegas pages we reviewed that requires a sewer lateral inspection, certification or seller disclosure when a home is sold. That reads as none found, not a confirmed absence, and it does not address state-level disclosure rules, which are outside this page. In practice an inspection is something a buyer chooses to ask for. Two practical points. The City’s sewer map and Sanitary Sewer Engineering (702-229-6541, the City’s number) can show the nearest public sewer and point-of-connection conditions, and the map has a layer for privately maintained sewer lines. It is not a diagram of every private line on a property, so a locating service or inspection fills that gap. And the City says permits and inspections create a permanent record of work done on a home, which can matter for insurance and resale. Findings are informational and not legal advice.',
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
    title: 'Serving the wider Las Vegas Valley',
    body: 'This page covers the City of Las Vegas only. Sewer agencies and lateral rules differ across the Las Vegas Valley, so check the page for your address.',
    items: [
      { title: 'Summerlin', description: 'Local sewer details', pageId: id('loc-lv-summerlin') },
      { title: 'Henderson', description: 'Local sewer details', pageId: id('loc-lv-henderson') },
      {
        title: 'North Las Vegas',
        description: 'Local sewer details',
        pageId: id('loc-lv-north-las-vegas'),
      },
      {
        title: 'All Las Vegas service areas',
        description: 'See the full Las Vegas market',
        pageId: id('market-las-vegas-nv'),
      },
    ],
  },
  faq: [
    {
      question:
        'Who is responsible for a sewer lateral at a City of Las Vegas property, and who maintains the main?',
      answer: (
        <p>
          The City says private property owners maintain private sewer laterals that originate on
          their property, up to the point where they connect into the City sewer main. The City’s
          sewer standards addenda say a private sewer stays private, even the portion in the public
          right-of-way, until it connects to the public sewer main. The City says it maintains the
          public sewer main, which is normally under public streets and may also be in designated
          property easements. We did not find a City statement about damage to a private lateral
          caused by City work. Sources: City of Las Vegas sewer-backup post (March 10, 2021); City of
          Las Vegas Sewer Line Warranty page; City sewer standards addenda (last revised November 9,
          2021).
        </p>
      ),
    },
    {
      question: 'How old are Las Vegas homes, and does that tell me about my lateral?',
      answer: (
        <p>
          Las Vegas’s median year built is 1994, plus or minus 1 year (ACS 2020-2024 5-year
          estimates, Las Vegas city). The 1990s are the largest decade at 27.9 percent of housing
          units. About 61.3 percent were built in 1990 or later and 12.8 percent before 1970, from
          our arithmetic on the Census decade counts. The year a house was built does not tell you
          the condition or material of its lateral, and the Census place boundary may not match the
          area the City’s sewer system serves. Sources: U.S. Census Bureau ACS tables B25035 and
          B25034, Las Vegas city, Nevada.
        </p>
      ),
    },
    {
      question: 'Who do I call about a sewer backup in Las Vegas?',
      answer: (
        <p>
          For a suspected stoppage in the City sewer main that affects several upstream properties
          or overflows manholes, the City asks you to call its Streets &amp; Sanitation Division at
          702-229-6227. For a problem specific to your property, the City says a contractor may need
          to investigate. The City page we reviewed gives no hours for that line and no after-hours
          sewer number. If a contractor or the City points to your lateral, a camera inspection can
          show what is in it. These are the City’s number and instructions, not ours. Sources: City
          of Las Vegas sewer-backup post; City Engineering page.
        </p>
      ),
    },
    {
      question: 'Does the City of Las Vegas help with lateral costs, and what is its warranty?',
      answer: (
        <p>
          We did not find a City-run lateral repair, grant or reimbursement program on the City
          pages we reviewed. That is none found, not a statement that none exists. The City does
          promote an optional warranty program offered with Service Line Warranties of America, a
          private company, which it describes as an optional solution providing warranty coverage to
          repair private lines when they fail. It is a product you buy, not City assistance, and the
          City’s page does not list a price or terms. Read the provider’s terms before you decide.
          Sources: City of Las Vegas Sewer Line Warranty page; City Engineering page.
        </p>
      ),
    },
    {
      question: 'How do I find where my lateral connects to the City main?',
      answer: (
        <p>
          The City says Sanitary Sewer Engineering handles requests for the nearest public sewer
          location and point-of-connection conditions. Use the City’s contact form and choose Sewer
          Location, or call 702-229-6541 (the City’s number). The City also publishes a sanitary
          sewer map with layers for sewer mains, sewer manholes and privately maintained sewer
          lines. The map does not show every private line on a property, so a locating service or
          inspection can fill that gap. Source: City of Las Vegas City Engineering page.
        </p>
      ),
    },
    {
      question: 'Does lateral work in Las Vegas need a permit?',
      answer: (
        <p>
          The City lists “building water and sewer repairs/replacements (no new connections)” as an
          online permit category, and says work not on its online list needs plans submitted and
          reviewed. Its inspection list includes a Bldg Sewer (Yard Lines) inspection type. Its
          homeowner guide says a permit is required when a remodel or add-on relocates existing
          plumbing, including installation of building sewers, and says it is a guide only. We did
          not find a City page saying whether a camera inspection or cleaning needs a permit, so ask
          Building &amp; Safety at 702-229-6251 (the City’s number). Sources: City of Las Vegas
          online permits list; City inspection request codes; City homeowner permit guide.
        </p>
      ),
    },
    {
      question: 'Does Las Vegas require a sewer inspection when a home is sold?',
      answer: (
        <p>
          We did not find a rule on the City of Las Vegas pages we reviewed that requires a sewer
          lateral inspection, certification or seller disclosure when a home is sold. That reads as
          none found, not a confirmed absence, and it does not address state disclosure law. The
          City says the private sewer lateral is the owner’s responsibility, so a buyer who wants
          evidence of its condition has to ask for it. Sources: City of Las Vegas Public Works, City
          Engineering and Building &amp; Safety pages.
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
    title: 'Schedule a sewer camera inspection in Las Vegas.',
    paragraphs: [
      'Schedule a camera inspection when you are dealing with recurring backups, slow drains, unexplained blockages, a repair recommendation you want checked, or a Las Vegas property you plan to buy. You get video evidence of visible conditions inside the accessible line.',
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
        label: 'City of Las Vegas: Sewer Back Up Issues (March 10, 2021; accessed Oct 4, 2026)',
        href: CITY_BLOG_URL,
      },
      {
        label:
          'City of Las Vegas: Sewer Line Warranty (page date not shown; accessed Oct 4, 2026)',
        href: CITY_WARRANTY_URL,
      },
      {
        label: 'City of Las Vegas: City Engineering (page date not shown; accessed Oct 4, 2026)',
        href: CITY_ENGINEERING_URL,
      },
      {
        label:
          'City of Las Vegas: Addenda for Design and Construction Standards for Wastewater Collection Systems (last revised November 9, 2021; accessed Oct 4, 2026)',
        href: CITY_ADDENDA_URL,
      },
      {
        label: 'City of Las Vegas: Online Permits List (page date not shown; accessed Oct 4, 2026)',
        href: CITY_PERMITS_LIST_URL,
      },
      {
        label:
          'City of Las Vegas: When Do I Need a Permit? A Homeowner’s Guide (date not shown; accessed Oct 4, 2026)',
        href: CITY_PERMIT_GUIDE_URL,
      },
      {
        label:
          'City of Las Vegas: Inspection Request Types or Codes (date not shown; accessed Oct 4, 2026)',
        href: CITY_INSPECTION_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2020-2024 5-year, table B25035, Las Vegas city, Nevada (accessed Oct 4, 2026)',
        href: CENSUS_B25035_URL,
      },
      {
        label:
          'U.S. Census Bureau: ACS 2020-2024 5-year, table B25034, Las Vegas city, Nevada (accessed Oct 4, 2026)',
        href: CENSUS_B25034_URL,
      },
    ],
    lastReviewed: '2026-10-04',
    closingNote: 'Official guidance can change, so confirm details with the City of Las Vegas.',
  },
}
