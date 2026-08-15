# Service × Location Master Matrix

- **Locations:** 579
- **Services:** 18
- **Complete mathematical relationships:** 10,422

## Canonical URL patterns

```text
/{market}/{location}/{service}/
/{market}/{location}/commercial/{service}/
```

## Matrix status totals

| Status | Rows |
|---|---:|
| `launch_candidate` | 715 |
| `phase_2_candidate` | 2,932 |
| `conditional_location` | 402 |
| `operational_confirmation_required` | 1,388 |
| `selective_candidate` | 747 |
| `selective_low_commercial_fit` | 2,975 |
| `selective_low_intent_fit` | 122 |
| `manual_review_location` | 0 |
| `research_only_location` | 154 |
| `hold_location` | 626 |
| `not_applicable_market` | 361 |

## Market totals

| Market | Relationships |
|---|---:|
| `st-louis-mo` | 3,924 |
| `san-diego-ca` | 3,996 |
| `las-vegas-nv` | 2,502 |

## Publication guardrails

- Every service × location relationship remains in the master matrix, even when it should not yet create a page.
- `launch_candidate` rows are the strongest immediate indexable candidates, subject to final content and operational review.
- `operational_confirmation_required` is especially important for Las Vegas because the service registry does not yet mark its individual service menu as confirmed.
- `selective_low_commercial_fit` keeps commercial relationships visible without pretending every residential geography merits a commercial landing page.
- `not_applicable_market` prevents the St. Louis sewer-lateral service from being generated into San Diego or Las Vegas.
- `hold_location` and `research_only_location` rows are retained for planning but should not generate indexable pages.

## Files

- `service-location-master-matrix.csv` — spreadsheet-friendly full matrix
- `service-location-master-matrix.json` — programmatic source of truth