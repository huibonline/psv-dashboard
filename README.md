# PSV Dashboard

Persoonlijke webapp (NL) om PSV Eindhoven nieuws en info op één plek te bundelen.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma + SQLite

## Lokaal draaien

Installeer dependencies:

```bash
npm install
```

Zet de database op (SQLite):

```bash
npx prisma migrate dev
```

Start de dev server:

```bash
npm run dev
```

Open daarna `http://localhost:3000`.

## Pagina's (fase 1)

- `/` — laatste nieuws (dummy cards)
- `/selectie` — selectie (dummy spelerskaarten)
- `/blessures` — blessures (dummy overzicht)

## Notities

- In fase 1 gebruiken we placeholder data. In vervolgstappen voegen we scraping en echte spelers-/blessuredata toe.
- De SQLite database staat lokaal in `dev.db` (zie `.env`).
- Het PSV-logo verwacht je in `public/psv-logo.svg` (transparant). Gebruik hiervoor bij voorkeur de officiële assets uit de PSV brand guidelines.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
