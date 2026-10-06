/**
 * Mission Valley + Hydro Jetting (`sl-mission-valley-hydro`) rebuild.
 *
 * Authority: CLAUDE.md sections 9, 22, 24, 28. One local source
 * (`sanDiegoMissionValleyContent`) x one service source (`svc-hydro-jetting`
 * v2). No new research. Mission Valley is a commercial and mixed-use district,
 * so the operating-site angle of the existing page is kept.
 *
 * Section recipe (each section ties a Mission Valley fact to what jetting does):
 *   1. Responsibility - owner maintains the lateral to the City main, past the
 *      lot line; jetting reaches the accessible private line; occupied sites
 *   2. Kitchen grease - the City's FEWD permit program vs. what jetting cleans
 *   3. Shared laterals - many fixtures, one line; water is paced to the line;
 *      camera first; jetting does not fix defects
 *   4. No City help found - schedule on evidence, the City's contacts
 *
 * CITY NUMBERS ARE THE CITY'S. No price, offer, response time, emergency or
 * same-day claim, guarantee, pressure or flow figure, or equipment name appears.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Hydro jetting for Mission Valley, San Diego sewer lines. The City says the owner maintains the lateral to the main. See what jetting clears and cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Mission Valley, San Diego, California.',
  hero: {
    intro: (
      <p>
        Mission Valley is a City of San Diego planning area the City describes as a regional
        center of offices, hotels, retail and a growing residential community, and the City says
        the owner maintains the lateral all the way to the City main. Hydro jetting cleans that
        line with pressurized water, loosening buildup and flushing it out. It is a cleaning
        method, not a repair, and which method suits a kitchen or tenant line should rest on what
        the line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>A lateral you maintain past your lot line, on a site that stays open</h2>
      <p>
        We did not find a Mission Valley sewer utility separate from City of San Diego Public
        Utilities. The City&rsquo;s guidance says the property owner maintains the lateral from
        the building all the way to its connection with the City main, even when that connection
        is in the street, beyond the property line, in an easement or in a canyon. Jetting
        reaches the accessible private line from a cleanout. It does not show where your lot line
        or the connection is, and a particular parcel can still be an exception, so confirm with
        Public Utilities.
      </p>
      <p>
        If you lease space, the City&rsquo;s guidance speaks to the property owner, and how a
        lease divides the duty is a matter for the lease, not legal advice. On an occupied site,
        access means trading hours, tenants, service corridors and other contractors. Raise that
        when you request service.
      </p>

      <h2>Kitchen grease, and the City&rsquo;s permit program</h2>
      <p>
        A restaurant or hotel kitchen sends cooking fat, oil and grease down its line every day,
        and the City names grease, along with roots, as a leading cause of sewer spills. Jetting
        is a way to loosen grease and soap buildup on the pipe wall and flush it out. The City
        says every food service establishment must hold a permit from its Food Establishment
        Wastewater Discharge (FEWD) program, which ensures the facility installs equipment to trap
        grease before it enters the sewer.
      </p>
      <p>
        That equipment, a hydromechanical grease interceptor or a larger gravity grease
        interceptor, is a City permit question: call 858-654-4188 (the City&rsquo;s number, not
        ours). Jetting cleans the lateral. It does not show whether equipment meets the
        City&rsquo;s requirements, and we make no claim that our work satisfies any FEWD or permit
        requirement.
      </p>

      <h2>Many fixtures on one lateral: look before you add water</h2>
      <p>
        A multi-tenant building feeds many fixtures into one lateral, so one failure can reach
        every tenant at once. Added water can contribute to a backup if the line cannot carry it
        away, and whether jetting is safe depends on the pipe&rsquo;s condition and material. The
        nozzle and settings depend on what the line looks like and what is in it, and the work is
        paced to the line. A camera look first, when included, helps pick the method, and visible
        structural defects call for a closer evaluation before cleaning.
      </p>
      <p>
        Jetting does not correct a cracked or broken pipe, an offset or separated joint, a
        collapsed section, or a low spot that holds water. The City&rsquo;s pages we reviewed do
        not say how old the pipes serving Mission Valley are, and the City&rsquo;s date for major
        development there (1958) does not tell you the age or material of any one lateral.
      </p>

      <h2>No City help found, so plan the cleaning around evidence</h2>
      <p>
        We found no active City program that gives owners a grant, reimbursement or other help
        with lateral repair, replacement, cleaning or inspection (&ldquo;none found in the pages
        we reviewed&rdquo;, not a statement that none exists). Where lines carry grease or
        continuous volume, the useful pattern is usually to establish the line&rsquo;s condition,
        clean on an interval the evidence supports, and re-inspect, rather than respond to
        backups as they happen. No single interval fits every property, and if a line needs
        repeated cleaning, a camera can help find out why.
      </p>
      <p>
        For a sewer spill or bad sewer odor the City asks you to call 619-515-3525. It directs a
        licensed plumber who finds a break or collapse beyond the property line to call the same
        number and file a Plumber&rsquo;s Report, and says it will investigate within 24 hours.
        These are the City&rsquo;s numbers and statements. We did not find a City statement of who
        pays for repairs beyond the property line, and The Sewer Pros does not perform repairs or
        replacements.
      </p>
    </>
  ),
  local: {
    title: 'Several tenants report slow drains',
    description:
      'A multi-tenant building feeds many fixtures into one lateral, so one failure can reach every tenant at once. Several slow fixtures can point to a restriction in a shared line, and whether hydro jetting suits it depends on what the line looks like.',
  },
  cta: {
    title: 'Request hydro jetting in Mission Valley',
    body: 'Tell us what the line serves and how the site operates, and ask what a visit includes before you book.',
  },
}
