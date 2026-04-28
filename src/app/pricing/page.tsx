import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/pricing")!;

export const metadata: Metadata = {
  title: zone.subtitle,
  description: zone.description,
};

export default function PricingPage() {
  return (
    <ZonePage zone={zone}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
        {[
          {
            name: "Free",
            price: "$0",
            desc: "Access to The Archives, select Tools Hub resources, and public content.",
            features: ["Knowledge base access", "Free tools", "Community support"],
          },
          {
            name: "Operator",
            price: "TBD",
            desc: "Full access to StoreX, AI Lab, and downloadable products.",
            features: ["All free tier features", "StoreX purchases", "AI Lab tools (Phase 3)", "Download entitlements"],
            highlight: true,
          },
          {
            name: "UnderNet",
            price: "TBD",
            desc: "Advanced operator-tier tools and exclusive content for power users.",
            features: ["All Operator features", "UnderNet access", "Priority support", "Early access to new tools"],
          },
        ].map(({ name, price, desc, features, highlight }) => (
          <div
            key={name}
            className="card"
            style={highlight ? { borderColor: "var(--accent)", boxShadow: "0 0 20px var(--accent-glow)" } : {}}
          >
            {highlight && (
              <span style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.5rem" }}>
                Most Popular
              </span>
            )}
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>{name}</h2>
            <p style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent)", marginBottom: "0.75rem" }}>{price}</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1rem" }}>{desc}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {features.map((f) => (
                <li key={f} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  ✓ {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "2.5rem" }}>
        Pricing finalised prior to public launch. All sales subject to our{" "}
        <a href="/legal/terms" style={{ color: "var(--accent)" }}>Terms of Service</a>.
      </p>
    </ZonePage>
  );
}
