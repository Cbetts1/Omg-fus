import type { Metadata } from "next";
import { ZONES, AI_DISCLOSURE_LABEL, STORE_PRODUCTS } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/store")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

const CATEGORY_LABELS: Record<string, string> = {
  "ebook": "Ebook",
  "toolkit": "Toolkit",
  "prompt-pack": "Prompt Pack",
  "template": "Templates",
  "guide": "Guide",
};

const CATEGORY_COLORS: Record<string, string> = {
  "ebook": "#6c63ff",
  "toolkit": "#06d6a0",
  "prompt-pack": "#ffd166",
  "template": "#00d4ff",
  "guide": "#9b72cf",
};

export default function StorePage() {
  return (
    <ZonePage zone={zone}>
      {/* AI disclosure */}
      <div
        style={{
          background: "rgba(108,99,255,0.07)",
          border: "1px solid rgba(108,99,255,0.25)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2rem",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
        }}
      >
        🤖 <em>{AI_DISCLOSURE_LABEL}</em>
      </div>

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
        🛠️ <strong style={{ color: "#ffd166" }}>Phase 2 — Pricing &amp; Checkout Coming Soon.</strong>{" "}
        Products listed below are confirmed and in preparation. Purchase flow launches with Stripe integration in Phase 2.
      </div>

      {/* Product grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        {STORE_PRODUCTS.map((product) => {
          const catColor = CATEGORY_COLORS[product.category] ?? "#6c63ff";
          const catLabel = CATEGORY_LABELS[product.category] ?? product.category;
          return (
            <div
              key={product.id}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
            >
              {/* Category + AI badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: catColor,
                    background: `${catColor}18`,
                    border: `1px solid ${catColor}33`,
                    borderRadius: 4,
                    padding: "0.2rem 0.5rem",
                  }}
                >
                  {catLabel}
                </span>
                {product.aiAssisted && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      padding: "0.2rem 0.45rem",
                      background: "rgba(108,99,255,0.12)",
                      color: "var(--accent)",
                      border: "1px solid rgba(108,99,255,0.2)",
                      borderRadius: 4,
                    }}
                  >
                    AI-assisted
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.3rem", lineHeight: 1.3 }}>
                {product.name}
              </h2>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "0.825rem",
                  color: "var(--accent)",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                  fontStyle: "italic",
                }}
              >
                {product.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: "1.25rem",
                }}
              >
                {product.description}
              </p>

              {/* Format */}
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <span>📦</span> {product.format}
              </p>

              {/* Price + CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                  }}
                >
                  Price TBD (Phase 2)
                </span>
                <button
                  disabled
                  style={{
                    padding: "0.45rem 1rem",
                    background: "rgba(108,99,255,0.12)",
                    color: "var(--accent)",
                    border: "1px solid rgba(108,99,255,0.25)",
                    borderRadius: 6,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "not-allowed",
                    opacity: 0.7,
                  }}
                >
                  Notify Me
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
        All digital products are subject to our{" "}
        <a href="/legal/terms" style={{ color: "var(--accent)" }}>Terms of Service</a>.
        All sales are final. Downloads expire after 72 hours (5 download limit per purchase).
      </p>
    </ZonePage>
  );
}

