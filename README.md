# Payload CMS · ZVK Steinmetz

Headless CMS backend für die ZVK Steinmetz Website.

## Collections

- **Settings** — Global config (Kontakt, Adresse, Logo)
- **Pages** — Statische Seiten (Startseite, Über uns, etc.)
- **News** — News & Aktuelles
- **Team** — Team-Profile
- **Partners** — Partner-Organisationen (BBW, BIV, IG BAU, etc.)
- **FAQ** — Häufig gestellte Fragen

## Setup

```bash
npm install
cp .env.example .env.local
# Passe DATABASE_URI und PAYLOAD_SECRET an
npm run dev
```

Admin-UI läuft auf `http://localhost:3000/admin`

## API Endpoints

- `GET /api/pages` — Alle Seiten
- `GET /api/news` — Alle News
- `GET /api/team` — Team-Members
- `GET /api/partners` — Partner
- `GET /api/faq` — FAQs
- `GET /api/settings` — Global settings

## Deployment auf Vercel

1. Push zu GitHub
2. Vercel verbinden (Auto-Deploy)
3. Environment Variables in Vercel setzen:
   - `DATABASE_URI` (MongoDB Atlas URI)
   - `PAYLOAD_SECRET`
   - `CORS_ORIGINS`

## Database

Verwendet MongoDB (Atlas kostenlos auf atlas.mongodb.com).

Anleitung:
1. Kostenloses Cluster auf MongoDB Atlas erstellen
2. Connection String kopieren → `DATABASE_URI` in .env
