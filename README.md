# FİM GROUP CONSULTİNG MMC — Corporate Website

Full-stack Next.js 14 website for FİM GROUP CONSULTİNG MMC, an Azerbaijani professional valuation and consulting company.

## Tech Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS** — Styling
- **Framer Motion** — 3D animations, scroll reveals, floating shapes
- **Prisma + PostgreSQL** — Database ORM
- **Jose** — JWT authentication for admin panel

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and set:
- `JWT_SECRET` — any long random string for JWT signing
- `ADMIN_USERNAME` — admin login username
- `ADMIN_PASSWORD` — admin login password

### 3. Set up PostgreSQL

For local dev, use a local PostgreSQL instance or a free [Neon](https://neon.tech) database.
Set `DATABASE_URL` in `.env` to a `postgresql://...` connection string.

```bash
npx prisma migrate dev --name init
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Pages

### Public
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, about, why us, contact |
| `/xidmetler` | Services page — all 5 service areas |
| `/haqqimizda` | About page — company info, team, timeline |
| `/xeberler` | News/blog listing |
| `/xeberler/[slug]` | Single news article |
| `/elaqe` | Contact page with form + Google Maps |

### Admin Panel
| Route | Description |
|-------|-------------|
| `/admin` | Login |
| `/admin/dashboard` | Stats overview |
| `/admin/xeberler` | News CRUD (create, edit, delete, publish toggle) |
| `/admin/mesajlar` | Contact form submissions with read/unread, filter, delete |

---

## Design

- **Gold palette**: `#B8963E` (primary), `#D4AF6A` (light), `#8B6914` (dark)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Animations**: Framer Motion — floating 3D shapes, scroll reveals, card tilts, counter animations
- **Glass morphism** cards on dark sections

---

## Database Commands

```bash
npx prisma studio          # Visual DB browser
npx prisma migrate dev     # Apply schema changes (local dev)
```

**Migrations are not run during the Vercel build.** `vercel.json`'s build command only
runs `prisma generate && next build`. Apply schema migrations manually against the Neon
database using its direct connection string, either from local dev (`npx prisma migrate
dev`) or in CI/CD with `npx prisma migrate deploy` before/after a deploy.

---

## Default Admin Credentials

Defined in `.env`:
```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=fim2024admin
```

**Change these before deploying to production.**

---

## Deploy to Vercel

### 1. Set up a PostgreSQL database

Use [Neon](https://neon.tech) (free tier) or any PostgreSQL provider (Supabase, Railway):
- Create a new project/database
- Copy the connection string (`postgresql://...`)

### 2. Push code to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Import to Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo
2. Add **Environment Variables** in the Vercel dashboard:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | `postgresql://...` (from Neon/Supabase) |
| `ADMIN_USERNAME` | your admin username |
| `ADMIN_PASSWORD` | your admin password |
| `JWT_SECRET` | random 32+ character string |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |

3. Deploy — Vercel runs `prisma generate && next build` automatically

### 4. Run migrations (before first use)

Vercel build does **not** run migrations — run these manually against the Neon database
using its direct (non-pooled) connection string:

```bash
# Pull Vercel env vars locally
npx vercel env pull .env.local

# Apply migrations
DATABASE_URL="<your_neon_direct_connection_string>" npx prisma migrate deploy
```

### 5. Add custom domain

1. Vercel Dashboard → Project → **Settings** → **Domains** → add your domain
2. Point your domain DNS to Vercel:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

---

# FIMGroupConsulting-web-site
