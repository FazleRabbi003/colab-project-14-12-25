# GrowthFlux — Performance Marketing Agency Website

**Domain:** growthflux.co.uk  
**Stack:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion · Laravel 11 API

---

## Project Structure

```
├── frontend/          # Next.js 14 App (React + TypeScript + Tailwind)
└── backend/           # Laravel 11 REST API
```

---

## Frontend — Next.js 14

### Tech Stack
| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | SSR / SSG framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Hook Form + Zod | Form validation |
| Axios | API calls |
| react-intersection-observer | Scroll-triggered animations |

### Pages
| Route | Description |
|---|---|
| `/` | Homepage — Hero, Stats, Services, Results, Testimonials, CTA |
| `/about` | About — Mission, Team, Values |
| `/services` | Services — 6 detailed service sections, Process |
| `/contact` | Contact — Form + info |

### Setup
```bash
cd frontend
npm install
# Create .env.local and set:
# NEXT_PUBLIC_API_URL=http://localhost:8000/api
npm run dev       # http://localhost:3000
npm run build     # Production build
```

### Design System
- **Background:** `#0A0A0A` (near-black luxury dark)
- **Gold Accent:** `#C9A84C` (primary brand colour)
- **Fonts:** Playfair Display (headings) + DM Sans (body) + Space Grotesk (labels)
- **Components:** Glassmorphism cards, gold gradients, Framer Motion scroll animations, animated counters

---

## Backend — Laravel 11 API

### Tech Stack
| Technology | Purpose |
|---|---|
| Laravel 11 | PHP framework |
| Laravel Mail | Email notifications |
| Rate Limiter | Spam protection |

### API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/health` | Health check |
| `POST` | `/api/contact` | Submit contact form |

### Contact Form Payload
```json
{
  "name": "Alex Reynolds",
  "email": "alex@company.co.uk",
  "company": "Company Ltd",
  "phone": "+44 7700 000000",
  "service": "Paid Media & PPC",
  "budget": "£3,000 – £7,500 / month",
  "message": "We are looking to scale our paid acquisition..."
}
```

### Setup
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Configure MAIL_* credentials in .env
php artisan serve      # http://localhost:8000
```

### Rate Limiting
Contact form: **3 submissions per IP per 10 minutes**.

---

## Deployment

### Frontend — Vercel
```bash
cd frontend && vercel deploy --prod
# Env: NEXT_PUBLIC_API_URL=https://api.growthflux.co.uk/api
```

### Backend — VPS / Laravel Forge
```bash
php artisan config:cache && php artisan route:cache && php artisan optimize
# .env: FRONTEND_URL=https://growthflux.co.uk
```
