# Betts Foundations — Project Specification (Phase 1)

> **Status:** Phase 1 foundation. All decisions locked as of 2026-04-28.
> Mailing address and keys due by 2026-05-05.

---

## Block 1 — Platform Identity

| Field | Value |
|---|---|
| Entity name | Betts Foundations |
| Legal email | legal@bettsfoundations.org |
| Support email | support@bettsfoundations.org |
| Mailing address | TBD by 2026-05-05 |
| Jurisdiction | State of Georgia, United States |
| Production URL | https://bettsfoundations.org |

### Dual Naming System

Every zone has a **creative name** (primary, brand-first display) and a **professional subtitle**.

| Path | Creative Name | Professional Subtitle |
|---|---|---|
| `/` | The Gateway | Home |
| `/ai-lab` | The Forge | AI Lab |
| `/security` | The Citadel | Security Center |
| `/store` | StoreX | Store |
| `/tools` | Tools Hub | Tools |
| `/knowledge` | The Archives | Knowledge Base |
| `/advanced` | UnderNet | Advanced Access (gated) |
| `/pricing` | Pricing | Plans & Pricing |
| `/contact` | Contact | Contact Us |
| `/support` | Support | Help & Support |
| `/status` | Status | System Status |

---

## Block 2 — Infrastructure (Phase 2+)

| Component | Decision |
|---|---|
| Server | VPS running AlmaLinux |
| Container | Docker Compose |
| Reverse proxy | NGINX (TLS via Certbot) |
| CDN / DNS | Cloudflare |
| Database | Neon (managed PostgreSQL) |
| File storage | Cloudflare R2 (S3-compatible) |
| AI service | Custom AI proxy at /api/ai |
| Deployment | CI → VPS via SSH deploy |

---

## Block 3 — Frontend Architecture

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** CSS Modules + CSS custom properties (design tokens)
- **World map:** 2D cinematic SVG zone map on desktop; Zone List + mini-map button on mobile
- **Motion:** Subtle premium transitions; `prefers-reduced-motion` respected globally; no flashing/strobe
- **Accessibility:** WCAG 2.1 AA target; focus-visible outlines; semantic HTML; ARIA landmarks

---

## Block 4 — Auth + Accounts + Content (Phase 2–3)

### Authentication
- Login methods: Email + password, Google OAuth
- Email provider: SendGrid
- 2FA: Admin-only TOTP (Phase 2)
- Roles: `user`, `admin` (seller role deferred)
- UnderNet unlock: Purchase required (any paid product)

### User Dashboard (Phase 2)
- Modules: Profile/Security, Purchases/Downloads, AI Chat History, Virtual Eyes Sessions
- Entitlements: Tied to user account only (no guest claim)
- Downloads: Max 5 per purchase; signed links expire after 72 hours

### AI Chat (Phase 3)
- Logged-in users only
- Chat retention: 30 days
- Actions: Chat-to-product/content draft generation
- No credit system; unlimited but rate-limited

### Content Engine (Phase 3)
- Blog authoring: Admin-only
- Editor: Markdown
- Knowledge categories: AI Automation, Security & Threat Models, Developer Tools, Productivity Systems, Operator Workflows, Infrastructure & VPS, AURA OS Architecture, Case Studies & Breakdowns
- AI-generated blog: Allowed but must be labelled "AI-assisted"
- Ebook defaults: 8 chapters, PDF + EPUB
- Podcast tools: Outline + script + show notes (text-only)

### Admin Panel (Phase 2)
- Modules: Users, Products CRUD, Product generation (AI drafts + approve/publish), Orders, Content, Virtual Eyes (sessions + delete uploads), AI usage analytics
- Audit logging: Yes, 90-day retention

---

## Block 5 — Legal / Compliance

### Privacy Policy
- Data collected: Account, Google OAuth, Security logs, Chat, Virtual Eyes, Store/Stripe IDs, Download logs, Admin audit logs, Analytics
- Virtual Eyes image handling: Derive thumbnails → discard originals after analysis
- Chat private by default: Yes
- Virtual Eyes sessions private by default: Yes
- Public user profiles: No
- Data export: JSON + CSV
- Deletion grace period: 7 days

### Retention
| Data type | Retention |
|---|---|
| Security logs | 90 days |
| Chat history | 30 days |
| Virtual Eyes | 30 days |
| Purchase/order records | 7 years |
| Admin audit logs | 90 days |
| Analytics | 12 months |

### Cookie Consent
- Provider: PostHog (analytics)
- Style: GDPR-style (Necessary + Analytics opt-in)
- Placement: Bottom bar
- Analytics blocked until opt-in: Yes
- Marketing pixels: None in V1

### Terms of Service
- Refund policy: All digital sales final
- Chargeback handling: Contact support first; access may be revoked
- Age: 13+
- Prohibited: Illegal activity, malware generation, unauthorised hacking; security content is educational only

### AI Disclosure
- Implementation: Dedicated `/legal/ai-disclosure` page + per-item labels in store and blog
- Label text: "Some content and products on Betts Foundations are AI-generated or AI-assisted. Do not rely on them as professional, legal, medical, or financial advice. Always verify critical information."
- Responsibility: User responsible for use; no warranties; not professional advice

---

## Block 5F — Environment Strategy

| Env | Secret store |
|---|---|
| Development | `.env.local` |
| Staging | Vercel Environment Variables |
| Production | Docker Compose `env_file` (`.env.production`) |

See `.env.example` for all required keys and their due dates.

---

## Production Readiness Gate

> **The build will hard-fail in production if `MAILING_ADDRESS` in `src/lib/site-config.ts` still starts with `TBD`.**

Gate implemented in `next.config.ts`. Update `MAILING_ADDRESS` by 2026-05-05.

---

## Phase Roadmap Summary

| Phase | Scope |
|---|---|
| 1 (current) | Next.js scaffold, all routes, zone map, cookie consent, legal pages, docs |
| 2 | Auth (NextAuth), dashboard, Stripe store, Neon DB, R2 storage, downloads |
| 3 | AI Lab tools, chat, content engine, Virtual Eyes, admin panel |
| 4 | Podcast tools, ebook generation, API keys for developers |
| 5 | Marketplace expansion, seller roles, advanced analytics |
