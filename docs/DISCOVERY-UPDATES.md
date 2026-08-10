# Discovery update — confirmed inputs (2026-08-10)

## Institution profile

| Field | Value | Status |
|-------|--------|--------|
| Name (EN) | Government Secondary & Higher Secondary Ashram School, Pathraj, Taluka Karjat, District Raigad, Maharashtra | **Confirmed** |
| Taluka | Karjat | **Confirmed** |
| District | Raigad | **Confirmed** |
| UDISE Sr. No | 27240210901 | **Confirmed** |
| Email | hmpathraj22@gmail.com | **Confirmed** |
| Primary phone | 7666971183 (editable via admin / config API) | **Confirmed** |
| Medium | Marathi only | **Confirmed** |
| Standards | 1st–12th | **Confirmed** |
| 11th / 12th streams | Arts only | **Confirmed** (Science removed from prior assumption) |

## Division model

Divisions are derived from **two axes** (both required for class placement):

1. **Residence:** Day scholar | Hostel  
2. **Gender section:** Boys | Girls  

Combinations: DS-B, DS-G, H-B, H-G (labels configurable to match registers).

## Data & governance

- **Legal owner:** School owns student data and website.
- **Government access:** ITDP Raigad / Tribal Dept — permission-based with audit (not open admin).
- **Admission authority:** Principal + Admission Committee + SMC as applicable per case.
- **Reporting:** Mandatory district-format exports.
- **Registers:** Existing paper registers **must be digitized** (in scope).
- **Hosting:** Hybrid — MeitY empanelled cloud + on-premises.

## Integration features (tracked in `config/platform-features.json`)

| Feature | API / paid |
|---------|------------|
| Aadhaar production | API + UIDAI compliance + paid provider |
| Autonomous deploy agent | CI tokens; no auto-prod without approval |
| District MIS dashboards | Access agreements |
| Google Sheets two-way sync | Google OAuth + API keys |
| WhatsApp | Paid BSP + school approval |

Public UI for this list: `/platform/integrations`.

## Public website (this repo slice)

- English design copy for public pages (Marathi i18n layer planned).
- Custom generated visuals under `public/assets/` — see `docs/design/image-prompts.md`.

## Next architecture step

Await your approval to proceed to **Architecture slice 1** (ERD draft, RBAC matrix, threat model outline) using the confirmed structure above.
