import type { Metadata } from "next";
import { ZONES, SUPPORT_EMAIL, SITE_NAME } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";
import Link from "next/link";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/support")!;

export const metadata: Metadata = {
  title: zone.subtitle,
  description: zone.description,
};

const FAQS = [
  {
    category: "Purchases & Downloads",
    items: [
      {
        q: "How do I access my purchases?",
        a: "After purchase, your downloads appear in your account dashboard under Purchases & Downloads. Signed links are valid for 72 hours and limited to 5 downloads per purchase. The dashboard launches in Phase 2.",
      },
      {
        q: "My download link has expired. What do I do?",
        a: `Contact ${SUPPORT_EMAIL} with your order ID. We will verify your purchase and issue a new signed link. Include "Download Renewal" in the subject line.`,
      },
      {
        q: "Can I re-download a product I have already purchased?",
        a: "Yes — up to 5 downloads per purchase. If you have used all 5, contact support with your order ID and we will review on a case-by-case basis.",
      },
      {
        q: "Can I share my purchase with someone else?",
        a: "No. Entitlements are tied to your account and are non-transferable. Sharing access or download links is a violation of our Terms of Service.",
      },
    ],
  },
  {
    category: "UnderNet Access",
    items: [
      {
        q: "What is UnderNet?",
        a: "UnderNet is an advanced operator tier unlocked automatically when you have made at least one qualifying purchase through StoreX. No additional subscription is required.",
      },
      {
        q: "Which purchases unlock UnderNet?",
        a: "Any completed purchase of a Phase 2 product unlocks UnderNet access. Sticker packs and wallpaper packs are excluded. Full qualifying product list published before Phase 2 launch.",
      },
      {
        q: "I made a purchase but my UnderNet access isn't showing. What do I do?",
        a: "Entitlement sync launches in Phase 2. If you purchased before launch and are not seeing access, contact support with your order ID.",
      },
    ],
  },
  {
    category: "Account & Security",
    items: [
      {
        q: "Is my data safe?",
        a: "Yes. We do not sell your data to third parties. All passwords are hashed with bcrypt. Review our Privacy Policy for full details on what we collect and how long we keep it.",
      },
      {
        q: "How do I delete my account?",
        a: `Email ${SUPPORT_EMAIL} with the subject "Account Deletion Request". We will process the deletion within 7 days. After 7 days, all personal data is permanently removed.`,
      },
      {
        q: "How do I export my data?",
        a: "Data export in JSON and CSV format launches in Phase 2. Until then, contact support to request a manual export.",
      },
    ],
  },
  {
    category: "Refunds & Disputes",
    items: [
      {
        q: "Can I get a refund?",
        a: "All digital product sales are final. If you believe there was a processing error or technical failure that prevented delivery, contact support within 7 days of the transaction.",
      },
      {
        q: "What happens if I initiate a chargeback?",
        a: "Initiating a chargeback without first contacting support will result in permanent account suspension. We take dispute resolution seriously — contact us first.",
      },
    ],
  },
  {
    category: "AI & Content",
    items: [
      {
        q: "How do I know if a product is AI-assisted?",
        a: "All AI-assisted products are labelled clearly on their product card and detail page. Our AI Disclosure policy covers what 'AI-assisted' means in practice.",
      },
      {
        q: "Can I trust the accuracy of AI-generated content?",
        a: "AI-generated content is reviewed before publication but is not professional advice. Do not rely on it as legal, medical, financial, or security advice. Always verify critical information independently.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <ZonePage zone={zone}>
      {/* Intro */}
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "1rem",
          lineHeight: 1.7,
          maxWidth: 640,
          marginBottom: "2.5rem",
        }}
      >
        {SITE_NAME} is a small operation — every support request is handled personally.
        Check the FAQ below first; if your question isn&apos;t covered, email us directly.
      </p>

      {/* Quick contact strip */}
      <div
        style={{
          background: "rgba(129,140,248,0.07)",
          border: "1px solid rgba(129,140,248,0.22)",
          borderRadius: 10,
          padding: "1rem 1.25rem",
          marginBottom: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
          💬 Need help not covered below?
        </span>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          style={{
            display: "inline-block",
            padding: "0.45rem 1.1rem",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: 7,
            fontWeight: 700,
            fontSize: "0.85rem",
          }}
        >
          Email Support
        </a>
        <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Response within 1–3 business days.</span>
      </div>

      {/* FAQ sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {FAQS.map(({ category, items }) => (
          <section key={category}>
            <h2
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {category}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {items.map(({ q, a }) => (
                <div
                  key={q}
                  className="card"
                  style={{ cursor: "default" }}
                >
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.4rem" }}>{q}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>{a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Knowledge base CTA */}
      <div
        style={{
          marginTop: "3rem",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 700, marginBottom: "0.3rem" }}>Looking for technical guides?</p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
            The Archives has in-depth articles on AI, security, infrastructure, and operator workflows.
          </p>
        </div>
        <Link
          href="/knowledge"
          style={{
            padding: "0.55rem 1.25rem",
            background: "transparent",
            color: "var(--accent)",
            border: "1px solid rgba(129,140,248,0.4)",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: "0.875rem",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Browse The Archives →
        </Link>
      </div>
    </ZonePage>
  );
}
