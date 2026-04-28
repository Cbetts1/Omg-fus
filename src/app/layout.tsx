import type { Metadata } from "next";
import "./globals.css";
import { SiteNavServer } from "@/components/SiteNavServer";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieBannerWrapper } from "@/components/CookieBannerWrapper";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
  },
  description:
    "Betts Foundations — AI automation, security research, operator tooling, and digital products for the next generation of builders.",
  metadataBase: new URL(
    process.env.APP_BASE_URL ?? "https://bettsfoundations.org"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          background: "var(--bg)",
          color: "var(--text-primary)",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SiteNavServer />
        <main style={{ flex: 1 }}>{children}</main>
        <SiteFooter />
        <CookieBannerWrapper />
      </body>
    </html>
  );
}
