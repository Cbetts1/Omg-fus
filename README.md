# Betts Foundations

**Intelligence. Security. Creation.**

Betts Foundations is an AI-powered platform for operators and builders — combining AI automation, security research, digital products, and developer tooling in one interconnected ecosystem.

---

## Running Locally

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/Cbetts1/Omg-fus.git
cd Omg-fus

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local — Phase 1 runs without any secrets set

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

> **Note:** The production build will fail if `MAILING_ADDRESS` in `src/lib/site-config.ts`
> still starts with `TBD`. This is intentional — update it before deploying.

---

## Phase 1 — What's Included

Phase 1 is the foundation scaffold. No auth, payments, or backend services are active yet.

### Routes

| Path | Creative Name | Professional Name |
|---|---|---|
| `/` | The Gateway | Home |
| `/ai-lab` | The Forge | AI Lab |
| `/security` | The Citadel | Security Center |
| `/store` | StoreX | Store |
| `/tools` | Tools Hub | Tools |
| `/knowledge` | The Archives | Knowledge Base |
| `/advanced` | UnderNet | Advanced Access (gated UI) |
| `/pricing` | — | Plans & Pricing |
| `/contact` | — | Contact Us |
| `/support` | — | Help & Support |
| `/status` | — | System Status |
| `/legal/privacy` | — | Privacy Policy |
| `/legal/terms` | — | Terms of Service |
| `/legal/ai-disclosure` | — | AI Disclosure |

### Features

- **Dual naming system** — Creative name primary, professional subtitle throughout
- **2D Zone Map** — SVG cinematic map on desktop; zone list on mobile
- **Cookie consent** — GDPR-style bottom bar; PostHog analytics blocked until opt-in
- **Legal pages** — Real content (Privacy Policy, ToS, AI Disclosure) derived from locked decisions
- **Reduced motion** — `prefers-reduced-motion` respected globally; no flashing or strobe effects
- **Build gate** — Production builds fail if mailing address is still TBD
- **Locked documentation** — `docs/spec.md` and `docs/decisions.md` capture all requirements

---

## Project Structure

```
src/
  app/              # Next.js App Router pages
    legal/          # /legal/privacy, /legal/terms, /legal/ai-disclosure
    ai-lab/         # The Forge
    security/       # The Citadel
    store/          # StoreX
    tools/          # Tools Hub
    knowledge/      # The Archives
    advanced/       # UnderNet (gated)
    pricing/
    contact/
    support/
    status/
  components/       # Shared UI components
    SiteNav         # Sticky header with zone navigation
    SiteFooter      # Footer with legal + utility links
    ZoneMap         # 2D SVG map (desktop) + zone list (mobile)
    CookieBanner    # GDPR-style cookie consent
    ZonePage        # Shared zone page layout
  lib/
    site-config.ts  # Central config: routes, labels, legal values
    build-gate.ts   # Production readiness check logic
docs/
  spec.md           # Full project specification (Blocks 1–5)
  decisions.md      # Locked decisions + production readiness gate
BACKUP.md           # Backup and restore instructions
.env.example        # All required environment variables
```

---

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS custom properties
- **Analytics:** PostHog (opt-in only)

### Phase 2+ additions (not yet implemented)

- Authentication: NextAuth (Email + Google OAuth)
- Database: Neon (PostgreSQL)
- Payments: Stripe
- Storage: Cloudflare R2
- Email: SendGrid

---

## Documentation

- [Project Specification](docs/spec.md)
- [Locked Decisions](docs/decisions.md)
- [Backup & Restore Guide](BACKUP.md)

---

## Legal

© 2026 Betts Foundations. All rights reserved.
See [Privacy Policy](/legal/privacy), [Terms of Service](/legal/terms), and [AI Disclosure](/legal/ai-disclosure).
