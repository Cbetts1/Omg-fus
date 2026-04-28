/**
 * Build-time gate: fails production builds when required config values are still TBD.
 * Run this script via: node src/lib/build-check.mjs
 * It is invoked automatically in next.config.ts during production builds.
 */

import { MAILING_ADDRESS, ENTITY_NAME } from "./site-config.js";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

interface GateCheck {
  label: string;
  value: string;
  dueBy?: string;
}

const REQUIRED_PROD_VALUES: GateCheck[] = [
  {
    label: "MAILING_ADDRESS",
    value: MAILING_ADDRESS,
    dueBy: "2026-05-05",
  },
];

export function runBuildGate(): void {
  if (!IS_PRODUCTION) return;

  const failures: GateCheck[] = REQUIRED_PROD_VALUES.filter(({ value }) =>
    value.startsWith("TBD")
  );

  if (failures.length > 0) {
    const msgs = failures
      .map(
        ({ label, dueBy }) =>
          `  ✗ ${label} is still TBD (due by ${dueBy ?? "ASAP"})`
      )
      .join("\n");

    throw new Error(
      `\n\n🚫 Production build gate failed for ${ENTITY_NAME}.\n` +
        `The following required values must be set before deploying to production:\n\n` +
        msgs +
        `\n\nUpdate src/lib/site-config.ts with the real values and rebuild.\n`
    );
  }
}
