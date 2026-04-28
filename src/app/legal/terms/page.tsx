import type { Metadata } from "next";
import {
  ENTITY_NAME,
  LEGAL_EMAIL,
  SUPPORT_EMAIL,
  MAILING_ADDRESS,
  JURISDICTION_FULL,
} from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${ENTITY_NAME}`,
};

const EFFECTIVE_DATE = "2026-05-05";

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Terms of Service</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "0.875rem" }}>
        Effective: {EFFECTIVE_DATE} &nbsp;|&nbsp; Entity: {ENTITY_NAME}
      </p>

      <Section title="1. Acceptance">
        <p>
          By accessing or using any part of bettsfoundations.org (&quot;the
          Site&quot;), you agree to these Terms of Service. If you do not agree,
          do not use the Site.
        </p>
      </Section>

      <Section title="2. Who May Use This Site">
        <p>
          You must be at least 13 years of age to use the Site. By using the
          Site you represent that you meet this requirement.
        </p>
      </Section>

      <Section title="3. Digital Products and Purchases">
        <p>
          All digital product sales are <strong>final</strong>. Because digital
          goods are delivered immediately upon purchase, we do not offer refunds
          except where required by applicable law. If you believe there was a
          processing error, contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> within 7 days
          of purchase.
        </p>
        <p>
          Downloads are delivered via signed links valid for 72 hours. Each
          purchase grants a maximum of 5 downloads. Entitlements are tied to
          your account and are non-transferable.
        </p>
      </Section>

      <Section title="4. Chargebacks">
        <p>
          If you initiate a chargeback without first contacting support, we
          reserve the right to revoke access to purchased products and suspend
          your account pending review. Contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> to resolve
          disputes.
        </p>
      </Section>

      <Section title="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site for any illegal activity under applicable law.</li>
          <li>Use AI tools on the Site to generate malware, phishing content, or any material designed to harm individuals or systems.</li>
          <li>Attempt to gain unauthorised access to systems, accounts, or data not belonging to you.</li>
          <li>Use security research content from the Site to conduct attacks on systems you do not own or have explicit written permission to test.</li>
          <li>Reverse-engineer, redistribute, or resell products without written permission from {ENTITY_NAME}.</li>
        </ul>
        <p>
          All security content on the Site is <strong>educational only</strong>.
        </p>
      </Section>

      <Section title="6. AI-Generated Content">
        <p>
          Some content and products on this Site are AI-generated or
          AI-assisted. You are responsible for verifying any information before
          acting on it. {ENTITY_NAME} makes no warranties regarding the accuracy
          of AI-generated content. See our{" "}
          <a href="/legal/ai-disclosure">AI Disclosure</a> for details.
        </p>
      </Section>

      <Section title="7. UnderNet Access">
        <p>
          Access to the UnderNet zone is granted to accounts that have completed
          at least one qualifying purchase. {ENTITY_NAME} reserves the right to
          revoke access if these Terms are violated.
        </p>
      </Section>

      <Section title="8. Accounts">
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials. Notify us immediately at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> if you suspect
          unauthorised access.
        </p>
      </Section>

      <Section title="9. Disclaimer of Warranties">
        <p>
          The Site and all content are provided &quot;as is&quot; without warranty of
          any kind, express or implied. {ENTITY_NAME} does not warrant that the
          Site will be uninterrupted, error-free, or secure.
        </p>
      </Section>

      <Section title="10. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, {ENTITY_NAME} shall not be
          liable for any indirect, incidental, special, or consequential damages
          arising from your use of the Site or its content.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms are governed by the laws of {JURISDICTION_FULL}. Any
          disputes shall be resolved exclusively in the courts of{" "}
          {JURISDICTION_FULL}.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          {ENTITY_NAME}<br />
          {MAILING_ADDRESS}<br />
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--accent)" }}>
        {title}
      </h2>
      <div style={{ color: "var(--text-secondary)", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {children}
      </div>
    </section>
  );
}
