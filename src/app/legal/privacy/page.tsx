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
  title: "Privacy Policy",
  description: `Privacy Policy for ${ENTITY_NAME}`,
};

const EFFECTIVE_DATE = "2026-05-05";

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "0.875rem" }}>
        Effective: {EFFECTIVE_DATE} &nbsp;|&nbsp; Entity: {ENTITY_NAME}
      </p>

      <Section title="1. Who We Are">
        <p>
          {ENTITY_NAME} (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates the website at{" "}
          <a href="https://bettsfoundations.org">bettsfoundations.org</a>. Our
          mailing address is: <strong>{MAILING_ADDRESS}</strong>. Legal inquiries:{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
        </p>
      </Section>

      <Section title="2. Data We Collect">
        <ul>
          <li><strong>Account data:</strong> email, password hash (bcrypt), display name.</li>
          <li><strong>Google OAuth:</strong> Google subject ID, email, name, and avatar if provided.</li>
          <li><strong>Security logs:</strong> IP address, user-agent string, login timestamps.</li>
          <li><strong>AI chat:</strong> prompts and AI responses (retained 30 days).</li>
          <li><strong>Virtual Eyes:</strong> uploaded images are analysed then discarded; derived thumbnails and analysis results are stored. Original images are not retained.</li>
          <li><strong>Store / payments:</strong> Stripe customer ID, checkout session ID, payment intent ID, product IDs. We do not store card numbers or CVVs.</li>
          <li><strong>Downloads:</strong> signed-link issuance logs (timestamp, file ID).</li>
          <li><strong>Admin audit logs:</strong> actions taken by admin accounts.</li>
          <li><strong>Analytics:</strong> page views and click events (PostHog) — only if you opt in via the cookie consent banner.</li>
        </ul>
      </Section>

      <Section title="3. How Long We Keep It">
        <ul>
          <li>Security logs: 90 days</li>
          <li>AI chat history: 30 days</li>
          <li>Virtual Eyes data: 30 days</li>
          <li>Purchase and order records: 7 years (financial compliance)</li>
          <li>Admin audit logs: 90 days</li>
          <li>Analytics events: 12 months</li>
        </ul>
      </Section>

      <Section title="4. How We Use Your Data">
        <p>
          We use your data to deliver and improve the services you request,
          authenticate your account, process purchases, respond to support
          inquiries, and comply with legal obligations. We do not sell your
          personal data.
        </p>
      </Section>

      <Section title="5. Cookies and Tracking">
        <p>
          We use strictly necessary cookies for session management. With your
          opt-in, we use PostHog for analytics. No marketing pixels or
          third-party ad networks are used. You can adjust your preferences at
          any time via the cookie consent banner.
        </p>
      </Section>

      <Section title="6. Data Export and Deletion">
        <p>
          You may request an export of your personal data in JSON or CSV format.
          You may also request deletion of your account and associated data.
          Deletion requests are processed within a 7-day grace period, after
          which data is permanently removed (except where retention is required
          by law, such as purchase records).
        </p>
        <p>
          Contact <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> with
          subject line &quot;Data Export Request&quot; or &quot;Data Deletion Request.&quot;
        </p>
      </Section>

      <Section title="7. Privacy by Default">
        <p>
          Chat histories and Virtual Eyes sessions are private by default. There
          are no public user profiles.
        </p>
      </Section>

      <Section title="8. Governing Law">
        <p>
          This policy is governed by the laws of {JURISDICTION_FULL}. Any
          disputes shall be resolved in the courts of {JURISDICTION_FULL}.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>
          For privacy inquiries:{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.<br />
          For general support:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
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
