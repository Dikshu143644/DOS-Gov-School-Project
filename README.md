# Pathraj Government Ashram School — Digital Platform

Public website and configuration foundation for **Government Secondary & Higher Secondary Ashram School, Pathraj** (UDISE `27240210901`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

- **School identity & phones:** `config/school.json`
- **Integration roadmap (API/paid flags):** `config/platform-features.json`
- **Discovery notes:** `docs/DISCOVERY-UPDATES.md`

### Editable phone numbers

- **Now:** Edit `config/school.json` → `contact.phones` (supports multiple entries).
- **API:** `GET /api/school/contact` — public read.
- **API:** `PATCH /api/school/contact` — requires header `x-platform-admin-key` matching env `PLATFORM_CONTACT_EDIT_KEY` (until Platform Admin UI in V0).

## Visual assets

Generated brand images live under `public/assets/`. Prompt specs: `docs/design/image-prompts.md`.

## Scope

This slice is the **English-design public web** plus config hooks. Admission workflow, IAM, registers digitization, and integrations are documented and flagged — not fully implemented until architecture approval and phased delivery.
