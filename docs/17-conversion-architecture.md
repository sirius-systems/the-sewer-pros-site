# The Sewer Pros — Conversion Architecture

**Document:** `17-conversion-architecture.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Project-Specific Conversion Strategy / Source of Truth

---

# 1. Purpose

This document defines the conversion architecture for The Sewer Pros website.

It establishes:

* primary conversion goals
* page-level conversion intent
* CTA hierarchy
* phone-call strategy
* form strategy
* inspection-request flows
* commercial inquiry flows
* real-estate conversion paths
* market-specific conversion handling
* trust architecture
* friction reduction
* conversion components
* mobile conversion behavior
* post-submission experience
* attribution requirements
* guardrails for claims, urgency, and lead capture

This document does **not** duplicate generalized Site OS Master procedures for:

* CRO research methodology
* experimentation workflows
* QA processes
* heatmap review
* testing frameworks
* analytics implementation
* release gates
* optimization cadence

Site OS Master governs **how conversion performance is tested and improved**.

This document defines **how The Sewer Pros website should convert visitors into qualified inquiries**.

---

# 2. Primary Conversion Objective

The website should move qualified visitors toward a clear next action.

The primary customer journey is:

```text
Problem or Need
        ↓
Understand the Situation
        ↓
Identify the Appropriate Service
        ↓
Understand Why The Sewer Pros Is Different
        ↓
Establish Trust
        ↓
Request Service or Call
```

The conversion strategy should not rely primarily on aggressive urgency.

The strongest conversion driver should be:

> **Clarity before a major sewer decision.**

---

# 3. Primary Conversion Types

The website should support several distinct primary conversions.

## 3.1 Phone Call

The visitor calls The Sewer Pros directly.

This will likely remain one of the highest-intent conversion actions.

---

## 3.2 Service Request

A visitor submits a form requesting:

* sewer inspection
* sewer camera inspection
* sewer cleaning
* hydro jetting
* drain cleaning
* sewer line locating
* another approved service

---

## 3.3 Pre-Purchase Sewer Inspection Request

A buyer, seller, agent, inspector, or investor requests service associated with a real-estate transaction.

This should be treated as a distinct conversion path because the information needed may differ from a normal residential inquiry.

---

## 3.4 Commercial Service Request

A property manager, business, facility manager, or commercial property owner requests commercial sewer/drain service.

Commercial inquiries should not be forced through a purely residential form.

---

# 4. Secondary Conversions

Secondary conversions may include:

* clicking a phone number
* viewing a service page
* viewing a market page
* viewing contact information
* opening a service request form
* selecting a market
* selecting a service
* reading inspection FAQs
* viewing reviews
* visiting a real-estate audience page
* visiting commercial content
* moving from educational content to a commercial page

These actions matter because many visitors will not convert on the first page viewed.

---

# 5. Conversion Philosophy

The Sewer Pros should convert through:

```text
Expertise
+
Transparency
+
Evidence
+
Specialization
+
Low Friction
+
Clear Next Steps
```

rather than:

```text
Fear
+
Artificial Scarcity
+
Aggressive Discounts
+
Repair Pressure
```

The conversion experience should support the brand's independent-diagnostics positioning.

---

# 6. Core Conversion Message

The strongest conversion narrative is:

> **Before you agree to a major sewer repair or make an important property decision, find out what is actually happening inside the line.**

Supporting conversion language may include:

* Get an independent sewer inspection.
* See the condition of the sewer line before making a major decision.
* Request a sewer camera inspection.
* Get clear information about the condition of your sewer.
* Schedule an inspection before buying a property.
* Have recurring sewer problems properly evaluated.
* Request commercial sewer or drain service.

---

# 7. Conversion and Business Positioning

Conversion architecture must reinforce the central differentiator:

> **Independent sewer inspection and cleaning without repair-driven upselling.**

The conversion experience should not suddenly make the company appear to be a repair contractor.

Examples of appropriate conversion framing:

```text
Schedule an Independent Sewer Inspection
```

```text
Request a Sewer Camera Inspection
```

```text
Find Out What Is Happening Inside the Line
```

Avoid:

```text
Get Your Sewer Repaired Today
```

unless repair services are explicitly approved later.

---

# 8. Core Conversion Journey

The ideal website journey is:

```text
Search / Referral / Direct Visit
        ↓
Relevant Landing Page
        ↓
Immediate Intent Confirmation
        ↓
Problem or Service Explanation
        ↓
Why The Sewer Pros
        ↓
Trust / Proof
        ↓
CTA
        ↓
Call or Form
        ↓
Confirmation
        ↓
Lead Handling
```

Every major page should support this journey.

---

# 9. Conversion Intent by Page Family

Different page families should use different conversion emphasis.

| Page Family         | Primary Conversion Intent               |
| ------------------- | --------------------------------------- |
| Homepage            | Choose service/market or contact        |
| Core Service        | Request that service                    |
| Market Hub          | Find local service / contact            |
| Location Page       | Request service in that area            |
| Service + Location  | Request specific local service          |
| Audience Page       | Request service appropriate to audience |
| Audience + Location | Request audience-specific local service |
| Commercial Hub      | Request commercial service              |
| Commercial Service  | Request specific commercial service     |
| Comparison Page     | Move toward diagnostic service          |
| Alternative Page    | Request independent evaluation          |
| Resource Article    | Move toward relevant service            |
| About               | Build trust, then contact               |
| Contact             | Submit inquiry or call                  |

---

# 10. Primary CTA Hierarchy

The site should use a clear CTA hierarchy.

## Primary CTA

The most important action for the page.

Examples:

* Schedule a Sewer Inspection
* Request a Sewer Camera Inspection
* Request Service
* Schedule a Pre-Purchase Sewer Inspection
* Request Commercial Service

---

## Secondary CTA

Alternative high-value action.

Usually:

* Call The Sewer Pros
* View Services
* Find Your Market
* Learn About Independent Inspections

---

## Tertiary CTA

Lower-friction informational progression.

Examples:

* See What a Sewer Camera Inspection Finds
* Learn About Hydro Jetting
* Read Home Buyer FAQs

---

# 11. CTA Specificity

Generic CTAs should be minimized when a more specific action is available.

Prefer:

```text
Schedule a Sewer Camera Inspection
```

over:

```text
Get Started
```

Prefer:

```text
Request Commercial Sewer Service
```

over:

```text
Contact Us
```

Generic CTAs may still be used when the user's exact need is unknown.

---

# 12. Homepage CTA Strategy

The homepage should provide two immediate high-intent paths:

### Primary

```text
Request Service
```

or an approved equivalent.

### Secondary

```text
Call The Sewer Pros
```

The homepage should also allow visitors to choose:

* service
* market
* audience

without forcing all users immediately into a form.

---

# 13. Homepage Hero Conversion

The hero should establish:

1. what The Sewer Pros does
2. who the company helps
3. major differentiator
4. primary CTA
5. phone-call alternative

Conceptually:

```text
Independent Sewer Inspection, Diagnostics & Cleaning
Know what is happening inside the line before making a major repair decision.

[Schedule an Inspection] [Call The Sewer Pros]
```

Final copy is governed by approved brand and content documents.

---

# 14. Service Page CTA Strategy

Each service page should use a service-specific CTA.

Examples:

### Sewer Camera Inspection

```text
Schedule a Sewer Camera Inspection
```

### Hydro Jetting

```text
Request Hydro Jetting Service
```

### Sewer Line Locating

```text
Request Sewer Line Locating
```

### Pre-Purchase Sewer Inspection

```text
Schedule a Pre-Purchase Sewer Inspection
```

---

# 15. Market Page CTA Strategy

Market pages should reinforce local intent.

Examples:

```text
Request Sewer Service in St. Louis
```

```text
Schedule a Sewer Inspection in San Diego
```

```text
Request Sewer or Drain Service in Las Vegas
```

Only use service availability that has been approved for the market.

---

# 16. Service + Location CTA Strategy

These pages should have highly aligned CTAs.

Example:

Page:

```text
Sewer Camera Inspection in St. Louis
```

Primary CTA:

```text
Schedule a Sewer Camera Inspection in St. Louis
```

Avoid sending high-intent users through a generic homepage first.

---

# 17. Audience Page CTA Strategy

Audience CTAs should reflect the user's situation.

## Home Buyers

```text
Schedule a Pre-Purchase Sewer Inspection
```

## Real Estate Agents

```text
Request a Sewer Inspection for a Client
```

## Property Managers

```text
Request Property Sewer or Drain Service
```

## Homeowners

```text
Schedule a Sewer Inspection
```

---

# 18. Commercial CTA Strategy

Commercial pages should clearly distinguish their conversion path.

Primary CTA examples:

```text
Request Commercial Sewer Service
```

```text
Request Commercial Drain Service
```

```text
Discuss a Commercial Sewer Problem
```

Commercial inquiries should not use consumer-style messaging such as:

```text
Fix My Drain
```

unless specifically appropriate.

---

# 19. Informational Content CTA Strategy

Educational resources should not open with aggressive sales CTAs.

Preferred journey:

```text
Answer the Question
        ↓
Provide Useful Context
        ↓
Explain When Professional Evaluation Is Appropriate
        ↓
Present Relevant CTA
```

Example:

> If you are trying to determine whether a recurring backup is caused by buildup, roots, damage, or another condition, a sewer camera inspection can provide more information.

CTA:

```text
Schedule a Sewer Camera Inspection
```

---

# 20. Comparison Page Conversion

Comparison pages should move visitors toward diagnosis when the correct choice depends on actual line condition.

Example:

```text
Hydro Jetting vs. Drain Snaking
```

CTA:

```text
Not Sure Which Service You Need?
Have the line evaluated first.
```

Then:

```text
Schedule a Sewer Inspection
```

This is preferable to forcing one option as universally superior.

---

# 21. Alternative Page Conversion

Alternative pages should convert toward independent verification.

Example:

```text
What to Do Before Replacing a Sewer Line
```

CTA:

```text
Get an Independent Sewer Inspection Before You Decide
```

This is a strategically important conversion pathway.

---

# 22. Phone Conversion Strategy

Phone calls should remain highly visible on mobile and desktop.

Phone links should:

* use clickable `tel:` links
* use the correct approved number
* be market-specific where verified
* appear consistently
* be trackable where appropriate

Do not invent market-specific phone numbers for local SEO.

---

# 23. Phone Number Placement

High-value placement may include:

* header
* mobile navigation
* hero
* service CTA sections
* footer
* contact page
* sticky mobile CTA where appropriate

Avoid placing the phone number so frequently that the page becomes visually aggressive.

---

# 24. Mobile Phone CTA

Mobile pages should make calling easy.

A sticky bottom action bar may be considered with actions such as:

```text
Call
```

and:

```text
Request Service
```

The component should not obstruct content or violate accessibility standards.

---

# 25. Phone CTA Labeling

Prefer:

```text
Call The Sewer Pros
```

or:

```text
Call for Sewer Inspection Service
```

rather than displaying only an unexplained number.

The visible phone number should still be available where appropriate.

---

# 26. Call Tracking Guardrail

If dynamic call tracking is implemented later:

* NAP consistency must be protected
* schema should use approved canonical business numbers
* tracking numbers should not create entity confusion
* source attribution should remain accurate

Detailed analytics implementation belongs in:

`19-analytics-measurement.md`

---

# 27. Form Architecture

The site should avoid one giant universal form asking every possible question.

The preferred architecture is:

```text
Simple Primary Form
+
Conditional Fields Where Helpful
+
Specialized Forms for High-Value Use Cases
```

---

# 28. Recommended Primary Service Request Form

Potential fields:

### Required

* Name
* Phone
* Email or preferred contact field
* Service needed
* Market/location
* Message/problem description

### Optional

* Property address
* Best time to contact
* Property type

Final field requirements should reflect operational needs.

---

# 29. Form Friction Principle

Only ask for information that helps:

* qualify the inquiry
* route it correctly
* prepare for contact
* schedule service

Do not ask users to complete unnecessary intake before the first conversation.

---

# 30. Required vs. Optional Fields

Keep required fields limited.

Potential minimum:

```text
Name
Phone or Email
Service / Need
Location
```

A detailed message should generally remain optional unless operations require it.

---

# 31. Phone vs. Email Requirement

If operationally practical, avoid forcing both phone and email when one reliable contact method is sufficient.

If both are required for workflow reasons, the user experience should remain short and clear.

---

# 32. Service Selection

The form should use approved services from:

`06-master-service-registry.md`

Do not allow the form taxonomy to drift from the website taxonomy.

Example options may include:

* Sewer Inspection
* Sewer Camera Inspection
* Sewer Cleaning
* Hydro Jetting
* Sewer Line Locating
* Drain Cleaning
* Pre-Purchase Sewer Inspection
* Commercial Service
* Not Sure / Other

---

# 33. "Not Sure" Option

A visitor may know the problem without knowing the service.

The service form should allow:

```text
I'm Not Sure Which Service I Need
```

This prevents service terminology from becoming a conversion barrier.

---

# 34. Market Selection

For general forms, market selection should support:

* St. Louis
* San Diego
* Las Vegas

Additional approved locations may be derived from the provided address rather than requiring users to navigate hundreds of geographic options.

---

# 35. Address Collection

Property address may be useful for:

* confirming service area
* identifying the property
* real-estate inspection requests
* routing

However, avoid requiring a full property address before it is operationally necessary.

---

# 36. Pre-Purchase Inspection Form

Real-estate inquiries may justify a specialized form.

Potential fields:

* Name
* Phone
* Email
* Property address
* Market
* Buyer / Agent / Seller / Other
* Inspection deadline or closing timeline
* Preferred scheduling information
* Additional notes

Do not ask for sensitive financial or contractual information unnecessarily.

---

# 37. Real Estate Timeline Field

A useful field may be:

```text
When do you need the inspection?
```

Options might include:

* As soon as possible
* Within a few days
* This week
* Flexible
* Specific date

Do not imply guaranteed availability.

---

# 38. Real Estate Professional Conversion

Agent-oriented pages may use:

```text
Request an Inspection for a Client
```

The form may optionally ask:

* client/property name reference
* property address
* inspection timing
* contact preference

Do not create unnecessary complexity.

---

# 39. Commercial Inquiry Form

Commercial forms may request different information.

Potential fields:

* Contact name
* Company
* Phone
* Email
* Property address
* Property type
* Service needed
* Description of issue
* Number of properties if relevant
* Preferred contact method

Avoid forcing commercial users through homeowner terminology.

---

# 40. Commercial Property Types

Potential selections may include only approved categories such as:

* Office
* Retail
* Restaurant
* Hospitality
* Multifamily
* Property Management
* Other Commercial Property

Only include industries actually served.

---

# 41. Multi-Property Commercial Leads

Where relevant, commercial forms may include:

```text
Is this request for more than one property?
```

This can help identify property-management and portfolio opportunities.

It should remain optional unless necessary.

---

# 42. Form Routing

Form submissions should support routing by:

```text
Market
+
Service
+
Audience / Commercial Type
```

Example:

```text
Las Vegas
+
Commercial Hydro Jetting
+
Property Manager
```

should be distinguishable from:

```text
St. Louis
+
Pre-Purchase Sewer Inspection
+
Home Buyer
```

Detailed CRM workflow implementation should be documented separately if applicable.

---

# 43. Form Source Tracking

Each submission should preserve where the lead originated.

Useful source data may include:

* page URL
* page title
* page family
* market
* service
* audience
* campaign parameters
* referrer

Do not require the customer to enter information already known from the page context.

---

# 44. Contextual Form Prefill

When technically appropriate, a service page form should already know:

```text
Service = Sewer Camera Inspection
```

A local page should already know:

```text
Market = St. Louis
```

This reduces friction and improves lead attribution.

---

# 45. Embedded vs. Dedicated Forms

High-intent pages may include embedded forms where the layout supports them.

However, the site should also maintain a dedicated conversion destination such as:

```text
/request-service/
```

or the approved equivalent.

Exact routing belongs in:

`05-url-routing-strategy.md`

---

# 46. Modal Form Guardrail

Modals may be used carefully.

Avoid:

* instant popups on arrival
* repeated interruption
* exit-intent pressure
* forms that obscure important content

The site should feel helpful rather than aggressive.

---

# 47. Form Confirmation

After submission, users should receive a clear confirmation.

The confirmation should explain:

* that the request was received
* what happens next
* how The Sewer Pros may contact them
* what to do if the issue is urgent, if an approved process exists

Do not promise a response time unless operationally verified.

---

# 48. Thank-You Page

A dedicated thank-you page is recommended if form architecture supports it.

Potential purpose:

* confirm submission
* fire analytics conversion events
* provide next steps
* offer phone contact
* reduce uncertainty

Example:

```text
Thanks — your request has been received.

A member of The Sewer Pros team will review the information and follow up using the contact details you provided.
```

Do not promise:

```text
We'll call within 5 minutes.
```

unless that operational standard is verified.

---

# 49. Thank-You Page Indexing

Thank-you pages should generally not be indexable search landing pages.

They should be excluded from normal organic discovery where appropriate.

---

# 50. Error Handling

Forms must provide understandable errors.

Examples:

```text
Please enter a valid phone number.
```

```text
Please select the market where service is needed.
```

Avoid generic failures such as:

```text
Error 422
```

---

# 51. Submission Failure

If a submission fails:

* preserve entered information where practical
* explain that the form was not submitted
* provide an alternative contact method
* log technical errors appropriately

The user should not believe a failed submission succeeded.

---

# 52. Spam Prevention

Spam controls should create minimal friction.

Preferred methods may include:

* honeypot fields
* server-side validation
* rate limiting
* modern invisible bot protection where required

Avoid difficult CAPTCHA experiences unless necessary.

---

# 53. Trust Architecture

Conversion depends heavily on trust.

The site should incorporate verified trust elements such as:

* business history
* reviews
* actual inspection experience
* independent positioning
* real service photos
* inspection camera imagery
* documented service processes
* verified credentials
* market-specific proof
* commercial experience
* real-estate use cases

---

# 54. Trust Before CTA

Important landing pages should establish enough trust before repeatedly asking for the conversion.

Preferred progression:

```text
What We Do
        ↓
Why It Matters
        ↓
Why The Sewer Pros
        ↓
Proof
        ↓
CTA
```

A CTA may still appear in the hero, but the rest of the page should support it.

---

# 55. Review Placement

Verified reviews may appear:

* near major CTAs
* after service explanations
* on market pages
* on audience pages
* on commercial pages

Prefer reviews that match the page context.

Example:

A homebuyer review is more persuasive on a pre-purchase sewer inspection page than a generic drain-cleaning review.

---

# 56. Review Accuracy

Do not:

* fabricate reviews
* combine reviews
* alter their meaning
* assign reviews to a different market
* create fake star counts

Review architecture should align with:

`15-schema-entity-strategy.md`

---

# 57. Proof Hierarchy

Useful proof can include:

```text
Verified Reviews
Actual Inspection Photos
Real Service Videos
Case Studies
Business History
Documented Service Process
Verified Credentials
Local Market Experience
```

The strongest proof is concrete and specific.

---

# 58. Inspection Deliverable Proof

If verified, the site should show or explain what customers receive from inspection.

Potential proof may include:

* camera footage
* inspection findings
* line location information
* documentation
* screenshots of actual pipe conditions

Only promise deliverables that the business actually provides.

---

# 59. Visual Conversion Support

Service visuals should reinforce understanding.

Examples:

* camera inspection equipment
* sewer camera footage
* clean hydro-jetting equipment
* locating equipment
* drain-cleaning equipment
* pipe-condition diagrams

Visuals should not create false repair positioning.

---

# 60. CTA Placement Strategy

Major commercial pages should generally include CTAs:

* near the top
* after major educational sections
* near proof/trust sections
* near the bottom

The exact number should depend on page depth.

Do not insert a CTA after every paragraph.

---

# 61. Long-Form Page Conversion

Long service or market pages may use repeated CTA sections with different context.

Example:

Top:

```text
Schedule a Sewer Inspection
```

Mid-page:

```text
Not Sure What's Causing the Problem?
Request an Inspection.
```

Bottom:

```text
Ready to Get the Sewer Line Checked?
Contact The Sewer Pros.
```

This avoids mechanical repetition.

---

# 62. Sticky CTA Strategy

A sticky CTA may be useful on mobile.

Potential actions:

```text
Call
Request Service
```

Desktop sticky behavior should be used more selectively.

Avoid persistent UI that blocks or distracts from content.

---

# 63. Market-Aware Conversion

Where the user enters through a market page, forms and CTAs should preserve that market context.

Example:

```text
Page:
San Diego Sewer Camera Inspection
```

Form metadata:

```text
Market: San Diego
Service: Sewer Camera Inspection
```

The customer should not have to restate information the page already knows.

---

# 64. Audience-Aware Conversion

Similarly:

```text
Page:
Sewer Inspections for Home Buyers
```

should preserve:

```text
Audience: Home Buyer
Likely Service: Pre-Purchase Sewer Inspection
```

This allows more accurate follow-up and reporting.

---

# 65. Commercial-Aware Conversion

Commercial page submissions should preserve:

```text
Lead Type: Commercial
```

and the relevant service/market where known.

Commercial inquiries should be distinguishable operationally from normal residential service requests.

---

# 66. Conversion Paths by Search Intent

## Transactional Query

Example:

```text
sewer camera inspection st louis
```

Path:

```text
Local Service Page
→ Immediate CTA
→ Service Request
```

---

## Informational Query

Example:

```text
what does a sewer camera inspection show
```

Path:

```text
Resource
→ Answer
→ Relevant Service
→ CTA
```

---

## Decision Query

Example:

```text
do I need sewer replacement
```

Path:

```text
Decision Resource
→ Independent Inspection Explanation
→ Sewer Camera Inspection
→ CTA
```

---

## Audience Query

Example:

```text
sewer inspection before buying house
```

Path:

```text
Pre-Purchase Inspection Page
→ Buyer-Specific Trust
→ Inspection Request
```

---

# 67. Conversion and Search Intent Alignment

Do not send every visitor to the same generic contact page immediately.

A high-intent page should offer a high-intent action.

An informational page should allow the user to learn before converting.

The conversion path should align with why the visitor arrived.

---

# 68. Independent Inspection Conversion Funnel

One of the site's most important funnels should be:

```text
Repair Recommendation / Concern
        ↓
Independent Inspection Content
        ↓
Why Independent Diagnosis Matters
        ↓
What a Camera Inspection Can Verify
        ↓
Schedule Independent Inspection
```

This should become a distinct acquisition pathway.

---

# 69. Home Buyer Conversion Funnel

Preferred funnel:

```text
Buying a Property
        ↓
Why the Sewer Should Be Checked
        ↓
What a Sewer Scope Can Reveal
        ↓
What the Buyer Receives
        ↓
Schedule Pre-Purchase Inspection
```

The page should reduce uncertainty about timing and process.

---

# 70. Real Estate Agent Conversion Funnel

Preferred funnel:

```text
Agent Needs Sewer Inspection
        ↓
Understand Service / Process
        ↓
Confidence in Independent Findings
        ↓
Property Information
        ↓
Request Inspection
```

Agent conversion should prioritize convenience and clear communication.

---

# 71. Homeowner Conversion Funnel

Preferred funnel:

```text
Recurring Sewer / Drain Problem
        ↓
Understand Possible Causes
        ↓
Inspection / Cleaning Options
        ↓
Why Diagnosis Matters
        ↓
Request Service
```

---

# 72. Commercial Conversion Funnel

Preferred funnel:

```text
Commercial Drain / Sewer Issue
        ↓
Business-Specific Service Page
        ↓
Operational Relevance
        ↓
Capabilities / Trust
        ↓
Commercial Inquiry Form or Call
```

Commercial visitors should not have to navigate through residential content first.

---

# 73. Contact Page Architecture

The Contact page should provide:

* clear phone information
* primary service request form
* market selection
* contact expectations
* commercial pathway
* real-estate inspection pathway if needed

It should not become a generic page with only:

```text
Name
Email
Message
```

if better routing information can be collected without excess friction.

---

# 74. Contact Page Market Handling

The Contact page should recognize the three primary markets:

* St. Louis
* San Diego
* Las Vegas

Do not imply physical office locations unless verified.

Market selection is service-routing information, not proof of a branch.

---

# 75. No Fake Address Conversion Tactic

Do not publish fake offices or addresses merely to make local landing pages appear more credible.

Conversion trust must come from legitimate:

* service availability
* proof
* expertise
* reviews
* local content

---

# 76. Urgency Strategy

Use urgency only when factually justified.

Appropriate:

> Recurring backups can become increasingly disruptive, so identifying the cause early can help you understand the next step.

Avoid:

> Call in the next 10 minutes before it's too late.

---

# 77. Emergency Service Guardrail

Do not use:

* Emergency Sewer Service
* 24/7
* Immediate Dispatch
* Same-Day Guaranteed
* We Arrive in 60 Minutes

unless explicitly verified and approved.

Competitor use of emergency language does not authorize The Sewer Pros to use it.

---

# 78. Pricing Guardrail

Do not:

* invent starting prices
* show fake discounts
* create "$49 inspection" offers
* advertise free services

unless approved by the business.

Pricing is a business decision, not a CRO assumption.

---

# 79. Discount Strategy

Discounts should not become the default conversion mechanism.

The Sewer Pros' strategic advantage is:

```text
Independent Expertise
+
Clear Diagnosis
```

not:

```text
Lowest Introductory Price
```

Promotions may be introduced later if the business approves them.

---

# 80. "Free Estimate" Guardrail

Do not use:

```text
Free Estimate
```

for inspection or cleaning unless the business actually provides that offer.

A sewer camera inspection itself may be a paid diagnostic service.

Do not unintentionally devalue the company's core service.

---

# 81. No Guaranteed Outcome Claims

Avoid:

```text
Avoid Sewer Replacement
```

as a guaranteed outcome.

Prefer:

```text
Get the Line Inspected Before You Decide
```

Cleaning or inspection may determine that replacement really is necessary.

---

# 82. Form Privacy

Forms should collect only information needed for the inquiry.

Do not request:

* Social Security numbers
* payment data
* unnecessary financial information
* legal contract information

through standard lead forms.

---

# 83. Consent Language

If forms trigger:

* SMS
* email marketing
* automated calls

consent language must accurately reflect actual communication practices and applicable requirements.

Operational/legal consent language should be separately reviewed rather than invented for conversion purposes.

---

# 84. Conversion Component Library

The design system should support reusable components such as:

```text
PrimaryCTA
PhoneCTA
ServiceRequestForm
CommercialRequestForm
PrePurchaseRequestForm
MarketCTA
AudienceCTA
InlineCTA
BottomCTA
StickyMobileCTA
ReviewBlock
TrustBar
ProcessSteps
FAQCTA
```

Exact implementation belongs in the technical and design-system documents.

---

# 85. Trust Bar

A reusable trust bar may surface verified facts such as:

* independent sewer inspections
* multiple markets served
* inspection/cleaning specialization
* verified years in business
* verified review data

Never populate the trust bar with assumptions.

---

# 86. Process Component

A simple process component can reduce conversion anxiety.

Example:

```text
1. Tell Us What's Going On
2. We Inspect or Evaluate the Line
3. You Get Clear Information About What Was Found
4. Appropriate Cleaning or Next Steps Are Discussed
```

Exact steps must reflect actual operations.

---

# 87. "What Happens Next" Sections

High-intent pages should explain the next step.

Examples:

* what happens after submitting the form
* what happens during inspection
* what information to have ready
* whether access is required
* what documentation may be provided

This can reduce uncertainty more effectively than adding another promotional CTA.

---

# 88. Objection Handling

Pages should address common concerns naturally.

Potential concerns include:

* Do I really need an inspection?
* Can the camera see the entire line?
* Will I receive video?
* What if the line needs repair?
* Can the line be cleaned instead?
* Should I get an inspection before buying?
* Do you repair sewer lines?
* Do you serve my area?

Answers should be factual.

---

# 89. Repair Objection Handling

If asked:

```text
What happens if you find a broken sewer line?
```

The site should clearly explain the approved process.

The answer should reinforce:

* The Sewer Pros identifies/document conditions.
* The company does not automatically sell repair.
* The customer can make an informed decision based on the findings.

Do not speculate beyond the actual business workflow.

---

# 90. Conversion Through Transparency

The "we do not sell sewer replacement" position can be a conversion asset.

Potential section:

```text
Why an Independent Inspection Matters
```

Then explain the business model without attacking competitors.

This can be particularly powerful on:

* inspection pages
* homebuyer pages
* second-opinion pages
* comparison pages

---

# 91. Social Proof by Funnel

Use proof relevant to the funnel.

## Inspection

Reviews about:

* clear findings
* professionalism
* inspection quality

## Home Buyers

Reviews about:

* transaction timing
* identifying conditions
* confidence before purchase

## Cleaning

Reviews about:

* recurring blockage resolution
* line cleaning
* hydro jetting

## Commercial

Reviews about:

* professionalism
* reliability
* operational service

Only use actual verified reviews.

---

# 92. Market-Specific Proof

Where available:

```text
St. Louis page
→ St. Louis proof
```

is stronger than:

```text
St. Louis page
→ generic review from another market
```

Do not falsely relabel proof.

---

# 93. Conversion and Content Depth

The page should answer enough questions to support the decision.

Do not shorten pages solely because a "short landing page converts better" assumption exists.

Search visitors often need:

* explanation
* trust
* comparison
* evidence

before converting.

---

# 94. Conversion and SEO Balance

Commercial pages must satisfy both:

```text
Search Intent
+
Conversion Intent
```

Avoid two extremes:

### SEO-Only Page

Thousands of words with no clear CTA.

### CRO-Only Page

A thin sales page with little useful information.

The preferred structure combines both.

---

# 95. Conversion and AEO

Direct-answer content can improve conversion by reducing uncertainty.

Example:

## Do you repair sewer lines?

> The Sewer Pros primarily focuses on sewer inspection, diagnostics, cleaning, and locating rather than selling sewer replacement.

Then:

> If you're trying to confirm what is actually wrong before approving a repair, schedule an independent sewer inspection.

This transforms an informational answer into a relevant conversion path.

---

# 96. Exit Paths

Not every visitor will be ready to contact the company.

Useful lower-intent exits include:

* read related guide
* view market services
* learn how inspection works
* understand sewer cleaning
* explore homebuyer information

Keeping the visitor within the relevant topic cluster is preferable to forcing a premature form submission.

---

# 97. Navigation and Conversion

Primary navigation should make high-intent pathways easy to reach.

Potential persistent CTA:

```text
Request Service
```

or:

```text
Schedule an Inspection
```

The exact label should reflect the final business conversion model.

---

# 98. Header CTA

A desktop header may contain:

```text
Phone
+
Primary CTA Button
```

Example:

```text
[Call 000-000-0000] [Request Service]
```

Use actual approved contact information at implementation time.

---

# 99. Footer Conversion

The footer should include a final conversion opportunity without turning into a repetitive sales block.

Potential elements:

* phone
* Request Service
* markets
* commercial inquiry
* contact

---

# 100. Page-Specific Conversion Metadata

The content/data system may track fields such as:

```text
primaryCtaLabel
primaryCtaHref
secondaryCtaLabel
secondaryCtaHref
conversionType
formType
serviceId
marketId
audienceId
leadType
```

This supports reusable but context-aware conversion components.

---

# 101. Conversion Tracking Requirements

Primary conversion events should eventually include:

* phone click
* form start
* form submission
* commercial submission
* pre-purchase submission
* CTA click
* email click if applicable

Detailed measurement belongs in:

`19-analytics-measurement.md`

---

# 102. Lead Source Taxonomy

Where technically feasible, submitted leads should preserve:

```text
Source
Medium
Campaign
Landing Page
Page Family
Market
Service
Audience
Conversion Type
```

This will allow performance analysis by:

* market
* service
* content cluster
* audience
* funnel

---

# 103. Conversion Attribution by Market

The business should eventually be able to answer:

```text
How many qualified leads came from St. Louis?
How many came from San Diego?
How many came from Las Vegas?
```

without relying only on manual interpretation.

---

# 104. Conversion Attribution by Service

Likewise:

```text
Sewer Inspection Leads
Hydro Jetting Leads
Drain Cleaning Leads
Pre-Purchase Inspection Leads
Commercial Leads
```

should be distinguishable where possible.

---

# 105. Conversion Attribution by Audience

High-value audience segmentation should allow reporting such as:

```text
Home Buyer Leads
Agent Leads
Property Manager Leads
Commercial Leads
```

where sufficient data exists.

---

# 106. Qualified vs. Unqualified Leads

The site should optimize for qualified inquiries rather than raw form volume.

Examples of likely low-value submissions include:

* outside service area
* repair-only requests if repair is not offered
* unrelated plumbing work
* spam
* employment inquiries submitted through service forms

Forms and copy can reduce these without becoming overly restrictive.

---

# 107. Repair Lead Routing

Because users may search for repair even when The Sewer Pros does not provide it, conversion content should clarify the company's role.

Potential approach:

> If you've been told the sewer needs repair or replacement and want an independent evaluation before proceeding, request a sewer camera inspection.

This converts relevant repair-intent traffic without misrepresenting services.

---

# 108. General Plumbing Lead Guardrail

The website should clearly communicate specialization so it does not become a lead generator for unrelated requests such as:

* faucet repair
* water heater installation
* toilet replacement
* repiping

unless those services are later approved.

Specialization improves both conversion quality and entity clarity.

---

# 109. Conversion Architecture by Market

## St. Louis

Highest-value conversion pathways:

* sewer inspection
* sewer lateral inspection
* home buyer inspection
* real estate agent referral
* sewer cleaning
* hydro jetting
* line locating

---

## San Diego

Highest-value pathways:

* sewer camera inspection
* pre-purchase inspection
* independent second opinion
* hydro jetting
* property management
* local community service

---

## Las Vegas

Highest-value pathways:

* sewer inspection
* hydro jetting
* drain cleaning
* line locating
* property management
* commercial sewer/drain service

Final priorities remain subject to actual business data.

---

# 110. Conversion Architecture by Funnel Stage

## Awareness

Visitor recognizes a problem.

Content:

* symptom resources
* FAQs
* educational articles

CTA:

```text
Learn What an Inspection Can Show
```

---

## Consideration

Visitor is evaluating solutions.

Content:

* service pages
* comparisons
* buyer guides
* second-opinion content

CTA:

```text
Schedule an Inspection
```

---

## Decision

Visitor knows what service is needed.

Content:

* service + location pages
* market pages
* contact page

CTA:

```text
Request Service
```

---

# 111. Conversion Architecture for AI/LLM Traffic

Visitors arriving from AI-generated answers may enter deep informational pages rather than the homepage.

Therefore every resource should provide:

* clear company identification
* contextually relevant service link
* market pathways where appropriate
* conversion CTA
* trust cues

Do not assume the user has already seen the homepage.

---

# 112. Conversion Architecture for Local Search

Local visitors may enter:

* market pages
* service + location pages
* GBP-linked landing pages

These pages should quickly establish:

```text
Service
+
Market
+
Differentiator
+
Contact Action
```

without requiring navigation to the homepage.

---

# 113. Google Business Profile Landing Pages

Where appropriate, GBP links should point to the most useful approved page for the market.

For St. Louis, the landing-page strategy may involve:

* St. Louis market hub
* another approved high-conversion local landing page

depending on final GBP strategy.

Do not create a thin GBP-only doorway page.

---

# 114. San Diego and Las Vegas Without GBP

Because these markets currently lack GBPs, organic landing pages need particularly strong conversion clarity.

They should establish:

* real service presence
* relevant services
* legitimate market context
* trust
* clear contact action

without pretending to have local offices.

---

# 115. Design System Relationship

Conversion components must align with:

`18-design-system.md`

Important factors include:

* CTA hierarchy
* button prominence
* whitespace
* responsive behavior
* forms
* cards
* trust components
* mobile sticky controls

The conversion architecture defines behavior and purpose.

The design system defines visual execution.

---

# 116. Analytics Relationship

Conversion measurement is governed by:

`19-analytics-measurement.md`

This document establishes what should count as a conversion.

The analytics document establishes:

* event names
* tags
* attribution
* reporting
* validation

---

# 117. Conversion Acceptance Criteria

A build-ready commercial page should answer:

* What is the primary conversion?
* Is the CTA obvious?
* Does the CTA match page intent?
* Can the user call easily?
* Is the service clear?
* Is the market clear where relevant?
* Is trust established?
* Are unsupported promises absent?
* Does the form collect only useful information?
* Does submission preserve page context?
* Is there a clear post-submission state?
* Does the page avoid repair misrepresentation?

---

# 118. Conversion Failure Conditions

A page should be revised if it:

* has no clear next action
* uses only generic CTAs
* sends every visitor through unrelated pages
* obscures the phone number
* makes false urgency claims
* implies repair capability
* uses fake discounts
* collects excessive information
* hides important trust information
* uses a residential form for complex commercial inquiries
* loses market/service attribution
* contains broken forms
* provides no confirmation after submission

---

# 119. Launch Conversion Priorities

At launch, the highest-priority conversion infrastructure should include:

1. visible phone conversion
2. general service request form
3. sewer inspection conversion
4. pre-purchase inspection conversion
5. commercial inquiry path
6. market-aware forms
7. thank-you/confirmation experience
8. basic source attribution
9. mobile CTA accessibility
10. conversion analytics

Advanced experimentation can follow after reliable baseline tracking exists.

---

# 120. Post-Launch Conversion Optimization

Future optimization may evaluate:

* CTA wording
* CTA placement
* form length
* service-specific forms
* call vs. form preference
* proof placement
* review positioning
* mobile sticky CTAs
* commercial lead pathways
* market-specific behavior
* homebuyer conversion behavior

Changes should be based on evidence, not general CRO assumptions.

---

# 121. Primary Conversion Paths Summary

## Path 1 — Inspection

```text
Service / Problem Page
        ↓
Independent Inspection Value
        ↓
Trust
        ↓
Schedule Inspection
```

## Path 2 — Home Buyer

```text
Buyer / Real Estate Search
        ↓
Pre-Purchase Inspection
        ↓
Process + Proof
        ↓
Schedule Inspection
```

## Path 3 — Second Opinion

```text
Repair Recommendation
        ↓
Independent Evaluation
        ↓
Camera Inspection
        ↓
Request Inspection
```

## Path 4 — Cleaning

```text
Backup / Blockage
        ↓
Cleaning Option
        ↓
Inspection / Service Explanation
        ↓
Request Service
```

## Path 5 — Commercial

```text
Commercial Problem
        ↓
Commercial Service
        ↓
Operational Trust
        ↓
Commercial Inquiry
```

---

# 122. Core Conversion Guardrails

The following rules are mandatory:

1. Do not position The Sewer Pros as a sewer repair/replacement contractor unless approved.
2. Do not invent 24/7 or emergency availability.
3. Do not invent response times.
4. Do not invent discounts.
5. Do not invent free inspections or estimates.
6. Do not create false scarcity.
7. Do not use fear-based manipulation.
8. Do not force every user through one generic form.
9. Do not fabricate local offices.
10. Do not collect unnecessary personal information.
11. Do not make unsupported guarantees.
12. Do not prioritize raw lead volume over qualified inquiries.
13. CTAs must match page intent.
14. Commercial leads should have a commercial pathway.
15. Real-estate users should have a relevant inspection pathway.

---

# 123. Primary Conversion Promise

The conversion architecture should communicate:

> **You do not need to guess what is happening inside the sewer line. The Sewer Pros can inspect, document, locate, and clean the line where appropriate so you can make the next decision with better information.**

---

# 124. Final Conversion Principle

The Sewer Pros should not rely on pressure to generate conversions.

Its strongest conversion advantage is the opposite:

```text
Less Pressure
+
More Evidence
+
Clear Diagnosis
+
Independent Positioning
+
Simple Next Step
```

The governing standard is:

> **Every high-value page should give the visitor enough information to understand the problem, enough evidence to trust The Sewer Pros' specialized approach, and a clear, low-friction path to request the appropriate service—without exaggerating urgency, inventing capabilities, or turning an independent inspection brand into a repair-driven sales funnel.**
