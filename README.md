# ZVK Steinmetz · Payload CMS

Headless CMS for the ZVK Steinmetz website — Payload 3 + Next.js 15 + MongoDB.

## Collections

- **Users** — Admin-Zugänge
- **Settings** — Global config (Kontakt, Adresse)
- **Pages** — Statische Seiten
- **News** — News & Aktuelles
- **Team** — Team-Profile
- **Partners** — Partnerorganisationen
- **FAQ** — Häufige Fragen

## Lokal laufen lassen

```bash
npm install
cp .env.example .env.local
# DATABASE_URI + PAYLOAD_SECRET setzen
npm run dev
```

Admin-UI: http://localhost:3000/admin

## Deployment auf Vercel

1. Push zu GitHub
2. Vercel: „Import Project" → Repo auswählen
3. Environment Variables:
   - `DATABASE_URI` — MongoDB Atlas Connection String
   - `PAYLOAD_SECRET` — Random string (mind. 32 Zeichen)
   - `CORS_ORIGINS` — `https://zvk-prototyp.netlify.app` (Frontend-URL)
4. Deploy

## API

REST-Endpoints unter `/api/<collection>`:
- `GET /api/pages`
- `GET /api/news`
- `GET /api/team`
- `GET /api/partners`
- `GET /api/faq`
- `GET /api/settings`

GraphQL unter `/api/graphql`.

## Beim ersten Start

Nach dem ersten Deploy: auf `/admin` gehen → Admin-User anlegen (Email + Passwort).
