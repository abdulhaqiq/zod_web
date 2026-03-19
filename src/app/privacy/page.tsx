import type { Metadata } from "next";
import PolicyPage, { P, H3, UL, InfoBox, ContactBlock } from "@/components/landing/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Zod collects, uses, and protects your personal information. We are committed to your privacy and data security.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <InfoBox>
          Zevello, Inc. ("Zod", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, and related services (collectively, the "Service").
        </InfoBox>
        <P>
          Please read this policy carefully. By accessing or using Zod, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree, please do not use our Service.
        </P>
        <P>
          We may update this policy from time to time. We will notify you of any material changes by posting the new policy on this page and, where required by law, seeking your consent. Your continued use of the Service after any changes constitutes your acceptance of the revised policy.
        </P>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <H3>Information you provide directly</H3>
        <UL items={[
          "Account registration data: name, email address, date of birth, gender identity, and sexual orientation",
          "Profile information: photos, bio, interests, lifestyle preferences, relationship goals, height, education, occupation, and location (city-level)",
          "Authentication credentials: password (stored as a one-way hash), or OAuth tokens from third-party sign-in providers (Apple, Google)",
          "Identity verification data: government-issued ID images and/or selfie photos processed by our third-party verification partner (never stored on Zod servers after verification is complete)",
          "Communications: messages, media, and other content you send to other users through our encrypted messaging system",
          "Payment information: billing details processed by our PCI-DSS-compliant payment processors (Stripe, Apple Pay, Google Pay). We do not store full card numbers",
          "Customer support interactions: information you provide when contacting our support team",
          "Survey and feedback data: responses to optional surveys, ratings, and product feedback forms",
        ]} />

        <H3>Information collected automatically</H3>
        <UL items={[
          "Device information: device type, operating system version, unique device identifiers (IDFV on iOS, Android Advertising ID), app version, screen resolution, language settings",
          "Usage data: features accessed, time spent on the app, swipe patterns (aggregated and anonymised), match interactions, session duration",
          "Log data: IP address, browser type, referring URLs, error logs, and crash reports",
          "Location data: precise GPS location (only when you grant permission, and only while the app is in use), or approximate location derived from IP address",
          "Cookies and similar technologies: see our Cookie Policy for full details",
        ]} />

        <H3>Information from third parties</H3>
        <UL items={[
          "Social sign-in providers (Apple, Google): public profile data you authorise to be shared",
          "Identity verification partners: a pass/fail verification result and the age-band confirmed",
          "Analytics providers: aggregated, anonymised behavioural data to help us improve the app",
          "Safety and fraud-detection partners: risk signals to protect users from scams and abuse",
        ]} />

        <H3>Sensitive personal data</H3>
        <P>
          By choosing to include information about your sexual orientation, gender identity, religion, ethnicity, or health on your profile, you explicitly consent to Zod processing this special-category data for the sole purpose of enabling the app to function as a dating service. You may remove such information at any time via your profile settings.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        <P>We use your information for the following purposes, each supported by a lawful basis under applicable law:</P>
        <H3>To operate and improve the Service</H3>
        <UL items={[
          "Create and manage your account",
          "Power our AI compatibility engine and serve you relevant matches",
          "Enable communication between matched users",
          "Process payments and manage subscriptions",
          "Provide customer support",
          "Detect and prevent fraud, abuse, and safety violations",
          "Maintain and improve the security and reliability of the platform",
        ]} />
        <H3>To personalise your experience</H3>
        <UL items={[
          "Customise the matches and content shown to you based on your preferences and behaviour",
          "Show you users in your geographic area using your location data",
          "Remember your settings and preferences across sessions",
        ]} />
        <H3>To communicate with you</H3>
        <UL items={[
          "Send transactional notifications (new matches, messages, account activity)",
          "Deliver safety alerts and account security notifications",
          "Send product updates and feature announcements (you can opt out at any time)",
          "Send marketing communications where you have opted in",
        ]} />
        <H3>To comply with legal obligations</H3>
        <UL items={[
          "Respond to lawful requests from courts, law enforcement, and regulators",
          "Enforce our Terms of Service and Community Guidelines",
          "Maintain records as required by applicable law",
        ]} />
        <H3>What we do NOT do with your data</H3>
        <UL items={[
          "We do not sell your personal data to third parties",
          "We do not display third-party advertising within the app",
          "We do not use your data to train external AI models without your explicit consent",
          "We do not share your precise location with other users — only city-level location is shown",
        ]} />
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    content: (
      <>
        <H3>With other users</H3>
        <P>
          Information you add to your public profile (photos, bio, age, city, interests) is visible to other users in accordance with your privacy settings. Messages you send are visible only to the recipient. Your full name, email, and phone number are never shared with other users.
        </P>
        <H3>With service providers</H3>
        <P>
          We share data with trusted vendors who help us operate the Service, including cloud hosting (AWS), payment processors (Stripe), identity verification (Jumio), analytics (Amplitude), customer support (Zendesk), and push notifications (Firebase). All vendors are bound by data processing agreements and may only use your data to provide services to us.
        </P>
        <H3>For safety and legal reasons</H3>
        <UL items={[
          "To comply with a legal obligation, court order, or government request",
          "To investigate potential violations of our Terms of Service",
          "To protect the safety of our users or the public",
          "To enforce our rights or defend against legal claims",
        ]} />
        <H3>Business transfers</H3>
        <P>
          If Zod is involved in a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on the Service before your data is transferred and becomes subject to a different privacy policy.
        </P>
        <H3>Aggregated and anonymised data</H3>
        <P>
          We may share aggregated, anonymised statistics (e.g. "4 million users in 120 countries") publicly or with partners for research and marketing purposes. This data cannot be used to identify you.
        </P>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <P>
          We retain your personal data for as long as your account is active or as needed to provide you with the Service. Specific retention periods:
        </P>
        <UL items={[
          "Active account data: retained for the lifetime of your account plus 30 days after deletion",
          "Messages: retained for 12 months from the date sent, then automatically deleted from our servers",
          "Identity verification images: deleted within 24 hours of a successful verification result",
          "Payment records: retained for 7 years to comply with financial regulations",
          "Safety-related data (reports, ban records): retained for up to 5 years to prevent re-registration by banned users",
          "Log data and analytics: retained for up to 90 days in identifiable form, then anonymised indefinitely",
          "Deleted profile data: purged from live systems within 30 days and from backups within 90 days",
        ]} />
        <P>
          You can delete your account at any time from Settings → Account → Delete Account. Deletion is permanent and irreversible.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    content: (
      <>
        <P>
          Depending on your location, you may have the following rights regarding your personal data:
        </P>
        <UL items={[
          "Right of access: request a copy of the personal data we hold about you",
          "Right to rectification: correct inaccurate or incomplete data",
          "Right to erasure ('right to be forgotten'): request deletion of your personal data",
          "Right to portability: receive your data in a structured, machine-readable format",
          "Right to restriction: ask us to limit how we process your data in certain circumstances",
          "Right to object: object to processing based on legitimate interests or direct marketing",
          "Rights related to automated decision-making: you have the right not to be subject to decisions based solely on automated processing that significantly affects you",
          "Right to withdraw consent: where processing is based on consent, withdraw it at any time without affecting prior processing",
        ]} />
        <P>
          To exercise any of these rights, go to Settings → Privacy, or contact our Privacy Team. We will respond within 30 days (or as required by applicable law). We may need to verify your identity before processing your request.
        </P>
        <P>
          If you are a resident of the European Economic Area, see our GDPR page. If you are a California resident, see our CCPA page.
        </P>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <>
        <P>
          We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction:
        </P>
        <UL items={[
          "All data in transit is encrypted using TLS 1.3",
          "Data at rest is encrypted using AES-256",
          "Messages are end-to-end encrypted — not even Zod can read them",
          "Passwords are hashed using bcrypt with a minimum work factor of 12",
          "We conduct regular third-party penetration testing and security audits",
          "Access to production systems is restricted to authorised personnel and requires multi-factor authentication",
          "We operate a responsible disclosure programme for security researchers",
        ]} />
        <P>
          Despite our efforts, no transmission over the internet or electronic storage is completely secure. If you suspect a security issue, please contact security@dhabli.com immediately.
        </P>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: (
      <>
        <P>
          Zod is a global service. Your data may be processed in countries other than your own, including the United States, United Kingdom, and European Union. When transferring data from the EEA or UK to countries not deemed adequate by the European Commission, we rely on:
        </P>
        <UL items={[
          "Standard Contractual Clauses (SCCs) approved by the European Commission",
          "The UK International Data Transfer Agreement (IDTA)",
          "Binding Corporate Rules where applicable",
          "Your explicit consent for specific transfers",
        ]} />
        <P>
          You can request a copy of the safeguards we rely on by contacting privacy@dhabli.com.
        </P>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <>
        <InfoBox>
          Zod is strictly for adults aged 18 and over. We do not knowingly collect personal data from anyone under the age of 18.
        </InfoBox>
        <P>
          All users are required to confirm their age during registration. We use identity verification to further confirm this. If we discover that a user under 18 has created an account, we will immediately delete their account and all associated data.
        </P>
        <P>
          If you believe a minor has registered on Zod, please report it immediately to safety@dhabli.com.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <P>
          For privacy-related questions, requests, or complaints, please contact our Privacy Team:
        </P>
        <ContactBlock
          email="privacy@dhabli.com"
          address="71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom"
        />
        <P>
          We have a dedicated Data Protection Officer (DPO) for EU/UK users. You may contact our DPO directly at dpo@dhabli.com.
        </P>
        <P>
          If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority. In the UK, this is the Information Commissioner's Office (ico.org.uk). In the EU, contact your local supervisory authority.
        </P>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      badge="Legal · Privacy"
      title="Privacy Policy"
      subtitle="We built Zod on a foundation of privacy. This policy explains exactly what data we collect, why we collect it, and how you can control it — with no jargon."
      lastUpdated="March 1, 2026"
      effectiveDate="March 1, 2026"
      sections={sections}
    />
  );
}
