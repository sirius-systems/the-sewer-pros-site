# Sewer camera inspection hub images

Slots for `/services/sewer-camera-inspection/`. Save a real file at the exact
filename below and it is used at the next build. Until then the slot shows a
labelled placeholder in `npm run dev` and renders nothing in production.
The slot list lives in `data/business/camera-inspection-images.ts`.

| Slot | Filename | Size | Shows |
|---|---|---|---|
| monitor | sewer-camera-monitor-pipe-footage.webp | 1200x800 | Monitor with real pipe footage |
| equipment | sewer-camera-reel-equipment.webp | 1200x800 | Reel and camera head at a cleanout |
| consult | home-buyer-sewer-inspection-consultation.webp | 1200x800 | Technician explaining findings |
| root-intrusion | sewer-line-root-intrusion-example.webp | 1200x800 | Anonymized footage still |
| offset | sewer-line-offset-example.webp | 1200x800 | Anonymized footage still |
| standing-water | sewer-line-standing-water-example.webp | 1200x800 | Anonymized footage still |
| report | sewer-camera-inspection-report-example.webp | 1200x800 | Redacted real report |

## Rules

- Real Sewer Pros photos and footage only. No AI pipe interiors, stock, or staged poses.
- Get customer or property permission for footage, faces, and reports.
- Remove addresses, names, phone numbers, plates, and GPS/EXIF data before saving.
- Compress to WebP. The size above is the target, not a minimum.
- Nothing may imply a repair or replacement service, a storefront, or a local office.
