# Svelte Launchpad

This is a sveltekit starter template for new projects which need a signup page to store waiting list signups.

# Motivation

This template is made to be a good foundation to start a SAAS project by using good defaults for a SvelteKit stack. 


It includes the following:
- SvelteKit
- Tailwind
- Svelte Superforms
- Prisma

Prisma was chosen to manage access to the database because it can be used with multiple databases like PostgreSQL, MySQL and Microsoft SQL.

Svelte Launchpad uses JSDoc instead of TypeScript for type safety because this eliminates a lot of build complexity. It uses the vercel adapter for hosting by default but can easily be modified to use [other hosting adapters](https://kit.svelte.dev/docs/adapter-node).

# Getting Started

- Clone the repo
- Install pnpm  ([howto](https://pnpm.io/installation))
- revame `.env.example` to `.env` and add your database url
- `pnpm install` to install dependencies
- `pnpm prisma db push` to run database migrations
- `pnpm dev` to run the development server. that's it

# Deployment
- You need a database server (fly.io offers free postgres packages)
- set the DATABASE_URL at your hosting providers Enviroment Variable section
- Deploy your app (e.g. with Vercel)

# Export the Waitinglist (Signups)

## Export to CSV file
- Connect with postgres client `psql $DATABASE_URL`.
- Export data `\COPY "Waitinglist" TO 'waitinglist.csv' CSV HEADER`
- Exit psql with `exit`

You can now open the file `waitinglist.csv`.

## Visually 
Use a db client like pgadmin and use your DATABASE_URL to connect to the server

