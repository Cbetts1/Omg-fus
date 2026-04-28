import type { Metadata } from "next";
import { ZONES, SUPPORT_EMAIL } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/support")!;

export const metadata: Metadata = {
  title: zone.subtitle,
  description: zone.description,
};

export default function SupportPage() {
  return (
    <ZonePage zone={zone}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: 720 }}>
        {[
          {
            q: "How do I access my purchases?",
            a: "After purchase, your downloads appear in your account dashboard under Purchases & Downloads. Signed links are valid for 72 hours and limited to 5 downloads per purchase. (Dashboard launches in Phase 2.)",
          },
          {
            q: "What is UnderNet?",
            a: "UnderNet is an advanced operator tier unlocked automatically when you have made at least one qualifying purchase. No additional subscription is required.",
          },
          {
            q: "Is my data safe?",
            a: "Yes. We do not sell your data. Review our Privacy Policy for full details on what we collect and how long we keep it.",
          },
          {
            q: "Can I get a refund?",
            a: "All digital product sales are final. If you believe there was an error with your order, contact support within 7 days.",
          },
        ].map(({ q, a }) => (
          <div key={q} className="card">
            <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{q}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{a}</p>
          </div>
        ))}

        <div style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Can&apos;t find what you need?{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "var(--accent)" }}>
            Email support
          </a>
        </div>
      </div>
    </ZonePage>
  );
}
