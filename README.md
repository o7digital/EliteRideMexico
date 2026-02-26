# EliteRideMexico

Clone de la home `gearshifttemplate.webflow.io` réalisé en **Astro + React**.

## Stack

- Astro 5
- React 19 (`@astrojs/react`)
- CSS Webflow du template source + overrides locaux

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:4321`.

## Build production

```bash
npm run build
npm run preview
```

## Fichiers clés

- `src/pages/index.astro`
- `src/components/gearshift/GearshiftHome.tsx`
- `src/layouts/Layout.astro`
- `src/styles/clone-overrides.css`

## Backend (Supabase + Stripe)

Un squelette backend est disponible dans `supabase/` avec:

- migration SQL (`supabase/migrations`)
- fonctions Edge (`supabase/functions`)
- documentation d'usage (`docs/backend-supabase-stripe.md`)
- page dashboard réservations (`/dashboard/reservations`)
