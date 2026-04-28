import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";
import Link from "next/link";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/pricing")!;

export const metadata: Metadata = {
  title: zone.subtitle,
  description: zone.description,
};

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "always",
    tagline: "Start here. No card required.",
    desc: "Public access to The Archives, free tool releases, and the knowledge base. The foundation tier — open to everyone by design.",
    features: [
      "Full knowledge base access",
      "Free tool downloads (Phase 1+)",
      "AI Disclosure & legal transparency",
      "Community support via email",
    ],
    cta: "Start Free",
    ctaHref: "/knowledge",
    highlight: false,
    color: "#8b96b4",
  },
  {
    name: "Operator",
    price: "TBD",
    period: "Phase 2",
    tagline: "For builders who need the full stack.",
    desc: "Full access to StoreX products, AI Lab tools, download entitlements, and the operator knowledge tier. Pricing confirmed before Phase 2 launch.",
    features: [
      "Everything in Free",
      "StoreX — all digital products",
      "AI Lab tools (Phase 3)",
      "Download entitlements (5 per purchase)",
      "72-hour signed download links",
      "Email support priority",
    ],
    cta: "Notify Me",
    ctaHref: "/contact",
    highlight: true,
    color: "#818cf8",
  },
  {
    name: "UnderNet",
    price: "TBD",
    period: "Phase 2",
    tagline: "Advanced access. Unlocked by purchase.",
    desc: "Operator-tier content and exclusive tooling for power users. UnderNet access is granted automatically after any qualifying purchase — no additional subscription required.",
    features: [
      "Everything in Operator",
      "UnderNet zone access",
      "Advanced operator content",
      "Early access to new tools",
      "Priority support",
    ],
    cta: "Learn More",
    ctaHref: "/advanced",
    highlight: false,
    color: "#fb7185",
  },
];

export default function PricingPage() {
  return (
    <ZonePage zone={zone}>
      {/* Phase notice */}
      <div
        style={{
          background: "rgba(255,209,102,0.07)",
          border: "1px solid rgba(255,209,102,0.3)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2.5rem",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
        }}
      >
        🛠️{" "}
        <strong style={{ color: "#ffd166" }}>Paid tiers launch with Phase 2.</strong>{" "}
        Pricing is confirmed before launch — no surprise changes. Free access is permanent and has no cutoff date.
      </div>

      {/* Tier grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: 960,
          marginBottom: "2.5rem",
        }}
      >
        {TIERS.map(({ name, price, period, tagline, desc, features, cta, ctaHref, highlight, color }) => (
          <div
            key={name}
            className="card"
            style={
              highlight
                ? { borderColor: color, boxShadow: "0 0 24px rgba(129,140,248,0.15)", display: "flex", flexDirection: "column" }
                : { display: "flex", flexDirection: "column" }
            }
          >
            {/* Badge */}
            {highlight && (
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color,
                  marginBottom: "0.6rem",
                }}
              >
                ★ Most Popular
              </span>
            )}

            {/* Name + price */}
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.1rem" }}>{name}</h2>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "0.25rem" }}>
              <span style={{ fontSize: "2rem", fontWeight: 900, color }}>{price}</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>{period}</span>
            </div>
            <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", fontStyle: "italic", marginBottom: "0.75rem" }}>
              {tagline}
            </p>

            {/* Desc */}
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              {desc}
            </p>

            {/* Features */}
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
                flex: 1,
                marginBottom: "1.5rem",
              }}
            >
              {features.map((f) => (
                <li
                  key={f}
                  style={{ fontSize: "0.875rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}
                >
                  <span style={{ color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={ctaHref}
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.7rem 1.25rem",
                background: highlight ? color : "transparent",
                color: highlight ? "#fff" : color,
                border: `1px solid ${color}66`,
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "opacity 0.15s ease",
              }}
            >
              {cta}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <section style={{ maxWidth: 680 }}>
        <h2
          style={{
            fontWeight: 700,
            marginBottom: "1.25rem",
            color: "var(--text-secondary)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: "0.85rem",
          }}
        >
          Pricing FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              q: "When will paid tiers be available?",
              a: "Phase 2 — which adds authentication, Stripe payments, and the full product delivery system — is the target. No date is published until it is confirmed.",
            },
            {
              q: "Will the free tier ever disappear?",
              a: "No. Free access to The Archives and free tool releases is a permanent design decision, not a promotional offer. It reflects the platform's public mission.",
            },
            {
              q: "How does UnderNet access work?",
              a: "UnderNet is unlocked automatically after any qualifying purchase. There is no separate UnderNet subscription — it is a benefit that comes with being a customer.",
            },
            {
              q: "Is there a refund policy?",
              a: "All digital product sales are final. If you believe there was an error with your purchase, contact support within 7 days of the transaction.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                padding: "1rem 1.25rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 10,
              }}
            >
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.4rem" }}>{q}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "2.5rem" }}>
        Pricing finalised prior to public launch. All purchases subject to our{" "}
        <Link href="/legal/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link>.
      </p>
    </ZonePage>
  );
}
