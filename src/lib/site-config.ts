/**
 * Central site configuration for Betts Foundations.
 * Maps routes to creative (primary) and professional (subtitle) labels.
 * Used across layout, navigation, zone map, and metadata.
 */

export const SITE_NAME = "Betts Foundations";
export const SITE_TAGLINE = "Intelligence. Security. Creation.";

/**
 * Mailing address — MUST be resolved before production deployment.
 * Build-time gate will fail prod build if this remains "TBD".
 */
export const MAILING_ADDRESS = "TBD_BY_2026-05-05";

export const LEGAL_EMAIL = "legal@bettsfoundations.org";
export const SUPPORT_EMAIL = "support@bettsfoundations.org";
export const ENTITY_NAME = "Betts Foundations";
export const JURISDICTION = "Georgia";
export const JURISDICTION_FULL = "the State of Georgia, United States";

export const POSTHOG_HOST = "https://us.posthog.com";

/** Route configuration — each zone has a creative name and professional subtitle */
export interface ZoneConfig {
  /** URL path */
  path: string;
  /** Creative / brand name (primary display) */
  creativeName: string;
  /** Professional subtitle */
  subtitle: string;
  /** Short description shown in zone cards and map tooltips */
  description: string;
  /** Whether the zone is gated (requires purchase) */
  gated?: boolean;
  /** Nav group: main | legal | utility */
  group: "main" | "legal" | "utility";
}

export const ZONES: ZoneConfig[] = [
  {
    path: "/",
    creativeName: "The Gateway",
    subtitle: "Home",
    description: "Your entry point to the Betts Foundations ecosystem.",
    group: "main",
  },
  {
    path: "/ai-lab",
    creativeName: "The Forge",
    subtitle: "AI Lab",
    description:
      "Build, test, and deploy AI-powered workflows and automation tools.",
    group: "main",
  },
  {
    path: "/security",
    creativeName: "The Citadel",
    subtitle: "Security Center",
    description:
      "Threat models, educational security research, and defensive tooling.",
    group: "main",
  },
  {
    path: "/store",
    creativeName: "StoreX",
    subtitle: "Store",
    description:
      "AI-generated and operator-crafted products, ebooks, and toolkits.",
    group: "main",
  },
  {
    path: "/tools",
    creativeName: "Tools Hub",
    subtitle: "Tools",
    description:
      "Productivity systems, scripts, and utilities for operators and developers.",
    group: "main",
  },
  {
    path: "/knowledge",
    creativeName: "The Archives",
    subtitle: "Knowledge Base",
    description:
      "Guides, deep-dives, and case studies across AI, security, and infrastructure.",
    group: "main",
  },
  {
    path: "/advanced",
    creativeName: "UnderNet",
    subtitle: "Advanced Access",
    description:
      "Advanced operator-tier content and tooling. Purchase required to unlock.",
    gated: true,
    group: "main",
  },
  {
    path: "/pricing",
    creativeName: "Pricing",
    subtitle: "Plans & Pricing",
    description: "Transparent pricing for tools, access tiers, and products.",
    group: "utility",
  },
  {
    path: "/contact",
    creativeName: "Contact",
    subtitle: "Contact Us",
    description: "Reach out for support, partnerships, or general inquiries.",
    group: "utility",
  },
  {
    path: "/support",
    creativeName: "Support",
    subtitle: "Help & Support",
    description: "Documentation, FAQs, and direct support channels.",
    group: "utility",
  },
  {
    path: "/status",
    creativeName: "Status",
    subtitle: "System Status",
    description: "Live status of Betts Foundations services and uptime.",
    group: "utility",
  },
];

/** Main nav zones (shown in header) */
export const MAIN_NAV_ZONES = ZONES.filter((z) => z.group === "main");

/** Utility nav zones (shown in footer) */
export const UTILITY_NAV_ZONES = ZONES.filter((z) => z.group === "utility");

/** Knowledge base content categories */
export const KNOWLEDGE_CATEGORIES = [
  "AI Automation",
  "Security & Threat Models",
  "Developer Tools",
  "Productivity Systems",
  "Operator Workflows",
  "Infrastructure & VPS",
  "AURA OS Architecture",
  "Case Studies & Breakdowns",
] as const;

export type KnowledgeCategory = (typeof KNOWLEDGE_CATEGORIES)[number];

/** AI disclosure label — shown per-item in store and blog */
export const AI_DISCLOSURE_LABEL =
  "Some content and products on Betts Foundations are AI-generated or AI-assisted. Do not rely on them as professional, legal, medical, or financial advice. Always verify critical information.";
