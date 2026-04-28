import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "8rem auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "4rem", lineHeight: 1, marginBottom: "1rem" }}>
        404
      </p>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Page Not Found
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        The page you are looking for does not exist on {SITE_NAME}.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.75rem 2rem",
          background: "var(--accent)",
          color: "#fff",
          borderRadius: 8,
          fontWeight: 600,
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Return to The Gateway
      </Link>
    </div>
  );
}
