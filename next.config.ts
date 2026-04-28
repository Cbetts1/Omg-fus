import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

/**
 * Production readiness gate — fails production builds when MAILING_ADDRESS is still TBD.
 */
function checkProductionGate() {
  if (process.env.NODE_ENV !== "production") return;

  const configPath = path.join(process.cwd(), "src/lib/site-config.ts");
  const configContent = fs.readFileSync(configPath, "utf-8");
  const match = configContent.match(/MAILING_ADDRESS\s*=\s*["']([^"']+)["']/);
  const mailingAddress = match?.[1] ?? "";

  if (mailingAddress.startsWith("TBD")) {
    throw new Error(
      "\n\n🚫 Production build gate failed for Betts Foundations.\n" +
        "  ✗ MAILING_ADDRESS is still TBD (due by 2026-05-05)\n\n" +
        "Update MAILING_ADDRESS in src/lib/site-config.ts with the real address and rebuild.\n"
    );
  }
}

checkProductionGate();

const nextConfig: NextConfig = {
  /* Phase 2+: add image domains, headers, redirects here */
};

export default nextConfig;
