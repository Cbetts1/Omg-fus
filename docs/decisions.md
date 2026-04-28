# Betts Foundations — Locked Decisions

> This document records all locked decisions and their acceptance dates.
> **Do not remove entries.** Add a note if a decision is revised.

---

## Decision Log

| # | Decision | Locked | Due / Deadline |
|---|---|---|---|
| D-001 | Entity name: **Betts Foundations** | 2026-04-28 | — |
| D-002 | Legal email: legal@bettsfoundations.org | 2026-04-28 | — |
| D-003 | Support email: support@bettsfoundations.org | 2026-04-28 | — |
| D-004 | Mailing address: **TBD** | 2026-04-28 | **2026-05-05** |
| D-005 | Jurisdiction: State of Georgia, United States | 2026-04-28 | — |
| D-006 | Production URL: https://bettsfoundations.org | 2026-04-28 | — |
| D-007 | Dual naming system (creative primary + professional subtitle) | 2026-04-28 | — |
| D-008 | Routes and zone map structure (see spec.md §Block 1) | 2026-04-28 | — |
| D-009 | Next.js (App Router) + TypeScript stack | 2026-04-28 | — |
| D-010 | VPS: AlmaLinux + Docker Compose + NGINX + Cloudflare | 2026-04-28 | — |
| D-011 | Database: Neon (managed PostgreSQL) | 2026-04-28 | — |
| D-012 | Storage: Cloudflare R2 | 2026-04-28 | — |
| D-013 | Auth: Email+password + Google OAuth; SendGrid for email | 2026-04-28 | — |
| D-014 | 2FA: Admin-only TOTP | 2026-04-28 | — |
| D-015 | Roles: user, admin (seller deferred) | 2026-04-28 | — |
| D-016 | UnderNet unlock: any qualifying purchase | 2026-04-28 | — |
| D-017 | Downloads: 5 max / 72-hour expiry | 2026-04-28 | — |
| D-018 | AI chat: logged-in only; 30-day retention | 2026-04-28 | — |
| D-019 | Blog authoring: Admin-only, Markdown editor | 2026-04-28 | — |
| D-020 | AI-generated content: allowed, must be labelled "AI-assisted" | 2026-04-28 | — |
| D-021 | Ebook defaults: 8 chapters, PDF + EPUB | 2026-04-28 | — |
| D-022 | Podcast tools: text-only (outline + script + show notes) | 2026-04-28 | — |
| D-023 | Admin modules: Users, Products, Orders, Content, Virtual Eyes, AI analytics | 2026-04-28 | — |
| D-024 | Audit logging: Yes, 90-day retention | 2026-04-28 | — |
| D-025 | Refund policy: All digital sales final | 2026-04-28 | — |
| D-026 | Age requirement: 13+ | 2026-04-28 | — |
| D-027 | Analytics: PostHog; opt-in only; no marketing pixels in V1 | 2026-04-28 | — |
| D-028 | Cookie consent: GDPR-style bottom bar; block analytics until opt-in | 2026-04-28 | — |
| D-029 | Virtual Eyes image handling: thumbnails only; originals discarded after analysis | 2026-04-28 | — |
| D-030 | Data export: JSON + CSV; deletion grace: 7 days | 2026-04-28 | — |
| D-031 | Environments: dev (.env.local) / staging (Vercel) / prod (Docker env_file) | 2026-04-28 | — |
| D-032 | AI disclosure: /legal/ai-disclosure page + per-item store/blog labels | 2026-04-28 | — |
| D-033 | NEXTAUTH_SECRET, Google OAuth keys, Stripe keys, Neon URL | 2026-04-28 | **2026-05-05** |
| D-034 | PostHog key (POSTHOG_KEY) | 2026-04-28 | **2026-05-05** |
| D-035 | Cloudflare R2 keys and bucket names | 2026-04-28 | **2026-05-05** |
| D-036 | Turnstile keys | 2026-04-28 | **2026-05-05** |

---

## Production Readiness Gate

**The site MUST NOT be deployed to production until all items below are resolved:**

| Item | Status | Due |
|---|---|---|
| Mailing address (D-004) | ⏳ Pending | 2026-05-05 |
| NEXTAUTH_SECRET (D-033) | ⏳ Pending | 2026-05-05 |
| Google OAuth keys (D-033) | ⏳ Pending | 2026-05-05 |
| Stripe keys (D-033) | ⏳ Pending | 2026-05-05 |
| DATABASE_URL / Neon (D-033) | ⏳ Pending | 2026-05-05 |
| POSTHOG_KEY (D-034) | ⏳ Pending | 2026-05-05 |
| R2 keys (D-035) | ⏳ Pending | 2026-05-05 |
| Turnstile keys (D-036) | ⏳ Pending | 2026-05-05 |
| Phase 2 auth + Stripe implementation | ⏳ Pending | TBD |

**Build gate:** `next.config.ts` will throw an error in production builds if `MAILING_ADDRESS` in `src/lib/site-config.ts` still starts with `TBD`. Update the value after the address is confirmed.

---

## Revision History

| Date | Change | Author |
|---|---|---|
| 2026-04-28 | Initial locked decisions from Blocks 1–5 | Founder + AI |
