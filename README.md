# FİM GROUP CONSULTİNG MMC — Corporate Website

Full-stack Next.js 14 website for FİM GROUP CONSULTİNG MMC, an Azerbaijani professional valuation and consulting company.

## Tech Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS** — Styling
- **Framer Motion** — 3D animations, scroll reveals, floating shapes
- **Prisma + SQLite** — Database ORM
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

### 3. Create and migrate the database

```bash
npx prisma migrate dev --name init
```

### 4. Seed the database

```bash
npx prisma db seed
```

This populates:
- 5 service categories
- 3 sample news articles
- Site settings (phone, email, addresses)

### 5. Run development server

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
| `/admin/mesajlar` | Contact form submissions with read/unread |
| `/admin/xidmetler` | Service descriptions + visibility toggle |
| `/admin/ayarlar` | Site settings (phone, email, addresses) |

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
npx prisma migrate dev     # Apply schema changes
npx prisma db seed         # Re-seed data
npm run db:reset           # Reset + re-migrate (⚠️ deletes all data)
```

---

## Default Admin Credentials

Defined in `.env`:
```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=fim2024admin
```

**Change these before deploying to production.**
# FIMGroupConsulting-web-site
