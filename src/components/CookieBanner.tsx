"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentState = {
  necessary: true;
  analytics: boolean;
};

const CONSENT_KEY = "bf_cookie_consent";

function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
}

/**
 * Initialises PostHog analytics — only called after explicit user opt-in.
 * PostHog key must be set via NEXT_PUBLIC_POSTHOG_KEY environment variable.
 * Phase 1: stub that logs intent; real initialisation added in Phase 2.
 */
function initAnalytics(): void {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) {
    // Key not configured yet — no-op until Phase 2
    return;
  }
  // Phase 2: Replace this stub with the real PostHog initialisation:
  //   import posthog from "posthog-js";
  //   posthog.init(key, { api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST });
  console.info("[Analytics] PostHog initialisation queued — key present");
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored === null) {
      setVisible(true);
    } else if (stored.analytics) {
      initAnalytics();
    }
  }, []);

  function handleAcceptAll() {
    const consent: ConsentState = { necessary: true, analytics: true };
    writeConsent(consent);
    setVisible(false);
    initAnalytics();
  }

  function handleSaveChoices() {
    const consent: ConsentState = { necessary: true, analytics: analyticsChecked };
    writeConsent(consent);
    setVisible(false);
    if (analyticsChecked) initAnalytics();
  }

  function handleDeclineAll() {
    const consent: ConsentState = { necessary: true, analytics: false };
    writeConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        padding: "1.25rem 1.5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "flex-start",
        justifyContent: "space-between",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ flex: "1 1 300px", maxWidth: 640 }}>
        <p style={{ fontWeight: 600, marginBottom: "0.35rem" }}>Cookie Preferences</p>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
          We use <strong>necessary cookies</strong> to operate the site. With your opt-in we also
          use <strong>analytics cookies</strong> (PostHog) to understand usage — no marketing pixels.
          See our{" "}
          <Link href="/legal/privacy" style={{ color: "var(--accent)" }}>
            Privacy Policy
          </Link>.
        </p>
        <label style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "0.75rem", fontSize: "0.875rem", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={analyticsChecked}
            onChange={(e) => setAnalyticsChecked(e.target.checked)}
            style={{ accentColor: "var(--accent)", width: 16, height: 16 }}
          />
          Enable analytics cookies (optional)
        </label>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap", alignSelf: "flex-end" }}>
        <button onClick={handleDeclineAll} style={{ padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: 8, background: "transparent", color: "var(--text-secondary)", cursor: "pointer", fontSize: "0.875rem" }}>
          Decline all
        </button>
        <button onClick={handleSaveChoices} style={{ padding: "0.5rem 1rem", border: "1px solid var(--accent)", borderRadius: 8, background: "transparent", color: "var(--accent)", cursor: "pointer", fontSize: "0.875rem" }}>
          Save choices
        </button>
        <button onClick={handleAcceptAll} style={{ padding: "0.5rem 1.25rem", border: "none", borderRadius: 8, background: "var(--accent)", color: "#fff", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600 }}>
          Accept all
        </button>
      </div>
    </div>
  );
}
