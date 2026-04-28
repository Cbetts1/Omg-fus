import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";
import Link from "next/link";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/advanced")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

export default function AdvancedPage() {
  return (
    <ZonePage zone={zone}>
      {/* Locked gate UI */}
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          textAlign: "center",
          padding: "4rem 2rem",
          background: "var(--bg-card)",
          border: "1px solid rgba(255, 107, 107, 0.4)",
          borderRadius: 16,
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
          Access Restricted
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
          <strong style={{ color: "var(--gated)" }}>UnderNet</strong> is reserved
          for verified Betts Foundations customers. To unlock access, you must
          have completed at least one purchase through{" "}
          <Link href="/store" style={{ color: "var(--accent)" }}>StoreX</Link>.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "2rem" }}>
          Once you have made a qualifying purchase, your account will be granted
          operator-tier access automatically. Authentication and entitlement
          enforcement launch in Phase 2.
        </p>
        <Link
          href="/store"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Browse StoreX
        </Link>
      </div>
    </ZonePage>
  );
}
