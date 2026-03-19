import type { Metadata } from "next";
import PolicyPage, { P, H3, UL, InfoBox, ContactBlock } from "@/components/landing/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Zod's Terms of Service. These terms govern your use of the Zod app and website.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <InfoBox>
          By creating an account, downloading the app, or otherwise using Zod's services, you agree to be legally bound by these Terms of Service ("Terms"). Please read them carefully.
        </InfoBox>
        <P>
          These Terms constitute a legally binding agreement between you and Zevello, Inc. ("Zod", "we", "us", or "our"), a company incorporated in Delaware, USA, with offices in London, UK and Dubai, UAE.
        </P>
        <P>
          If you do not agree to these Terms, you may not access or use the Service. We reserve the right to modify these Terms at any time. Material changes will be communicated via email or an in-app notification. Continued use after changes take effect constitutes acceptance of the revised Terms.
        </P>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: (
      <>
        <P>To use Zod, you must:</P>
        <UL items={[
          "Be at least 18 years of age",
          "Not be prohibited from using the Service under applicable law",
          "Not have been previously banned from Zod for a Terms violation",
          "Have the legal capacity to enter into a binding contract in your jurisdiction",
          "Not be a convicted sex offender or appear on any sex offender registry",
        ]} />
        <P>
          By using the Service, you represent and warrant that you meet all of the above eligibility requirements. If you do not meet these requirements, you must not access or use the Service. Zod reserves the right to verify your eligibility at any time and terminate your account if you are found to be ineligible.
        </P>
      </>
    ),
  },
  {
    id: "account",
    title: "Your Account",
    content: (
      <>
        <H3>Registration</H3>
        <P>
          You may register using your email address or through a supported third-party sign-in provider (Apple, Google). You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
        </P>
        <H3>Account accuracy</H3>
        <P>
          You agree to provide accurate, complete, and current information during registration and to keep your profile truthful at all times. Misrepresenting your identity, age, or other material facts is a material breach of these Terms and may result in immediate account termination.
        </P>
        <H3>One account per person</H3>
        <P>
          Each person may maintain only one active account. Creating multiple accounts to evade a ban, circumvent safety measures, or manipulate other users is strictly prohibited.
        </P>
        <H3>Account security</H3>
        <P>
          Notify us immediately at security@dhabli.com if you suspect unauthorised access to your account. We are not liable for any loss resulting from your failure to protect your login credentials.
        </P>
      </>
    ),
  },
  {
    id: "conduct",
    title: "User Conduct",
    content: (
      <>
        <P>You agree not to use the Service to:</P>
        <UL items={[
          "Harass, abuse, stalk, threaten, intimidate, or harm any other user",
          "Post content that is illegal, defamatory, obscene, pornographic (unless within our designated opt-in spaces), or hateful",
          "Impersonate any person or entity or misrepresent your affiliation with any person or entity",
          "Solicit money, gifts, or financial assistance from other users",
          "Advertise, promote, or solicit any commercial goods, services, or business",
          "Transmit spam, chain letters, or unsolicited communications of any kind",
          "Collect or harvest any data about other users without their explicit consent",
          "Attempt to reverse engineer, decompile, or otherwise derive the source code of the app",
          "Use automated tools, bots, scrapers, or scripts to interact with the Service",
          "Engage in or facilitate prostitution, sex trafficking, or any form of sexual exploitation",
          "Share another person's private information without their consent ('doxxing')",
          "Facilitate or encourage others to violate these Terms",
        ]} />
        <P>
          We use a combination of automated systems and human review to enforce our Community Guidelines. Violations may result in content removal, warnings, temporary suspension, or permanent account termination depending on the severity and frequency of violations.
        </P>
      </>
    ),
  },
  {
    id: "content",
    title: "Content and Intellectual Property",
    content: (
      <>
        <H3>Your content</H3>
        <P>
          You retain ownership of all content you post on Zod ("User Content"), including your photos, bio, and messages. By posting User Content, you grant Zod a non-exclusive, worldwide, royalty-free, sublicensable, transferable licence to use, copy, modify, distribute, and display your User Content solely for the purpose of operating and improving the Service.
        </P>
        <P>
          You represent and warrant that you own or have the necessary rights to post your User Content, and that it does not infringe any third party's intellectual property, privacy, or other rights.
        </P>
        <H3>Prohibited content</H3>
        <UL items={[
          "Nudity or sexually explicit content in your public profile photos",
          "Content depicting minors in any sexual context (zero tolerance — will be reported to law enforcement)",
          "Violent, graphically disturbing, or gore content",
          "Content that promotes self-harm, suicide, or eating disorders",
          "Copyrighted material you do not have the right to use",
          "Misinformation that could cause harm to others",
        ]} />
        <H3>Zod's intellectual property</H3>
        <P>
          All technology, design, software, trademarks, logos, and other materials constituting the Service are owned by or licensed to Zod and protected by intellectual property laws. You may not use, copy, reproduce, or distribute any part of the Service without our prior written consent.
        </P>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions and Payments",
    content: (
      <>
        <H3>Free and paid tiers</H3>
        <P>
          Zod offers a free tier with full core matching functionality, and optional paid subscription plans (Zod Plus, Zod Premium) that unlock additional features. No features are paywalled that would prevent you from finding a match.
        </P>
        <H3>Billing</H3>
        <P>
          Subscriptions are billed in advance on a recurring basis (monthly or annual) through your chosen payment method. All prices are shown in USD unless otherwise specified. Applicable taxes may be added based on your location.
        </P>
        <H3>Cancellation</H3>
        <P>
          You may cancel your subscription at any time from Settings → Subscription. Cancellation takes effect at the end of the current billing period. No partial refunds are provided for unused portions of a subscription period, except where required by law.
        </P>
        <H3>Refund policy</H3>
        <P>
          Subscriptions purchased through the App Store are governed by Apple's refund policy. Subscriptions purchased through Google Play are governed by Google's refund policy. Direct web purchases: contact billing@dhabli.com within 7 days for a full refund if you have not materially used the paid features.
        </P>
        <H3>Price changes</H3>
        <P>
          We reserve the right to change subscription prices at any time. You will be notified at least 30 days in advance of any price change and may cancel if you do not accept the new pricing.
        </P>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <>
        <InfoBox>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </InfoBox>
        <P>
          We do not warrant that the Service will be uninterrupted, error-free, or free from viruses or other harmful components. We do not guarantee that any user you meet on Zod has been honest in their profile, and we strongly encourage you to exercise caution and common sense when meeting people from the internet.
        </P>
        <P>
          Zod is a platform that facilitates connections between users. We are not responsible for the conduct, statements, or actions of any user, either on or off the platform. You assume all risk when choosing to meet other users in person.
        </P>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ZOD TECHNOLOGIES, INC., ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
        </P>
        <P>
          ZOD'S TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO ZOD IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) USD $100.
        </P>
        <P>
          Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability, so the above limitations may not apply to you to the extent prohibited by applicable law.
        </P>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <>
        <P>
          You may delete your account at any time via Settings → Account → Delete Account. Deletion is permanent and irreversible.
        </P>
        <P>
          Zod reserves the right to suspend or permanently terminate your account at any time, with or without notice, for any reason including but not limited to violation of these Terms, fraudulent activity, safety concerns, or extended inactivity.
        </P>
        <P>
          Upon termination, your licence to use the Service is immediately revoked. Provisions of these Terms that by their nature should survive termination (including ownership provisions, warranty disclaimers, indemnity, and limitations of liability) shall survive.
        </P>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Disputes",
    content: (
      <>
        <P>
          These Terms are governed by and construed in accordance with the laws of the State of Delaware, USA, without regard to its conflict of law principles.
        </P>
        <H3>Dispute resolution</H3>
        <P>
          We encourage you to contact us first if you have a dispute. Most disputes can be resolved quickly and informally by contacting legal@dhabli.com. For users in the EU/EEA, disputes may also be submitted through the EU Online Dispute Resolution platform.
        </P>
        <H3>Arbitration</H3>
        <P>
          For users located in the United States: any dispute that cannot be resolved informally shall be submitted to binding arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules. You waive any right to a jury trial and to participate in a class action. This arbitration clause does not apply to claims for injunctive relief or intellectual property disputes.
        </P>
        <P>
          For users located outside the United States: the courts of England and Wales shall have non-exclusive jurisdiction.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <P>
          Questions or concerns about these Terms may be directed to our Legal Team:
        </P>
        <ContactBlock
          email="legal@dhabli.com"
          address="71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom"
        />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      badge="Legal · Terms"
      title="Terms of Service"
      subtitle="These are the rules that govern your use of Zod. We've worked hard to make them clear and fair. Please read them carefully."
      lastUpdated="March 1, 2026"
      effectiveDate="March 1, 2026"
      sections={sections}
    />
  );
}
