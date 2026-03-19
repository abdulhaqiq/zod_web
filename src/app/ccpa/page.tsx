import type { Metadata } from "next";
import PolicyPage, { P, H3, UL, InfoBox, ContactBlock } from "@/components/landing/PolicyPage";

export const metadata: Metadata = {
  title: "CCPA — California Privacy Rights",
  description: "Information for California residents about their privacy rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).",
  keywords: ["Zod CCPA", "California privacy rights", "CPRA Zod", "Zod California users", "dating app CCPA"],
  alternates: { canonical: "https://zod.app/ccpa" },
  openGraph: {
    title: "Zod — CCPA California Privacy Rights",
    description: "Your California privacy rights explained. How Zod complies with CCPA and CPRA.",
    url: "https://zod.app/ccpa",
    type: "website",
  },
};

const DATA_CATEGORIES = [
  {
    category: "Identifiers",
    examples: "Name, email address, date of birth, device identifiers, IP address",
    purpose: "Account creation, authentication, fraud prevention",
    sold: false,
    shared: false,
  },
  {
    category: "Personal characteristics",
    examples: "Age, gender identity, sexual orientation (if provided)",
    purpose: "Match recommendations, personalisation",
    sold: false,
    shared: false,
  },
  {
    category: "Commercial information",
    examples: "Subscription tier, transaction history, payment method type",
    purpose: "Billing, customer support",
    sold: false,
    shared: false,
  },
  {
    category: "Internet or electronic network activity",
    examples: "Feature usage, session duration, app interactions",
    purpose: "Product improvement, analytics",
    sold: false,
    shared: true,
  },
  {
    category: "Geolocation data",
    examples: "Approximate location (city-level) derived from IP or GPS",
    purpose: "Showing nearby users, localisation",
    sold: false,
    shared: false,
  },
  {
    category: "Profile and user-generated content",
    examples: "Profile photos, bio, interests, messages",
    purpose: "Core dating features",
    sold: false,
    shared: false,
  },
  {
    category: "Inferences",
    examples: "Compatibility scores, preference predictions",
    purpose: "AI matching engine",
    sold: false,
    shared: false,
  },
  {
    category: "Sensitive personal information",
    examples: "Sexual orientation, precise geolocation, account credentials",
    purpose: "Core service only",
    sold: false,
    shared: false,
  },
];

const sections = [
  {
    id: "scope",
    title: "Scope and Applicability",
    content: (
      <>
        <InfoBox>
          This section applies to California residents and describes your rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA). This supplements but does not replace our main Privacy Policy.
        </InfoBox>
        <P>
          "Personal information" under the CCPA means information that identifies, relates to, or could reasonably be linked to a particular consumer or household. It does not include publicly available information or de-identified/aggregated data.
        </P>
        <P>
          Zevello, Inc. is a "business" under the CCPA because we collect personal information from California consumers, determine the purposes and means of processing, and meet the applicable revenue or data volume thresholds.
        </P>
      </>
    ),
  },
  {
    id: "categories",
    title: "Categories of Personal Information We Collect",
    content: (
      <>
        <P>
          In the preceding 12 months, we have collected the following categories of personal information from California consumers:
        </P>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                {["Category", "Examples", "Purpose", "Sold?", "Shared?"].map((h) => (
                  <th key={h} className="text-left py-2 pr-4 text-gray-500 font-semibold tracking-wide uppercase text-[10px]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DATA_CATEGORIES.map((row, i) => (
                <tr key={i} className="border-b border-white/6">
                  <td className="py-3 pr-4 text-gray-300 font-medium align-top">{row.category}</td>
                  <td className="py-3 pr-4 text-gray-500 align-top">{row.examples}</td>
                  <td className="py-3 pr-4 text-gray-500 align-top">{row.purpose}</td>
                  <td className="py-3 pr-4 align-top">
                    <span className={`text-[10px] font-medium px-2 py-0.5 ${row.sold ? "text-red-400 bg-red-950/40" : "text-gray-600 bg-white/5"}`}>
                      {row.sold ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="py-3 align-top">
                    <span className={`text-[10px] font-medium px-2 py-0.5 ${row.shared ? "text-amber-400 bg-amber-950/40" : "text-gray-600 bg-white/5"}`}>
                      {row.shared ? "Analytics only" : "No"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          "Shared" in the table above refers to sharing for cross-context behavioural advertising purposes. We share aggregated, anonymised analytics data with Amplitude and Google Analytics. We do not sell personal information or share it for advertising purposes inside the app.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your California Privacy Rights",
    content: (
      <>
        <H3>Right to Know (CCPA § 1798.100)</H3>
        <P>
          You have the right to request that we disclose: (1) the categories of personal information we have collected about you; (2) the categories of sources from which we collected it; (3) our business or commercial purpose for collecting it; (4) the categories of third parties with whom we share it; and (5) the specific pieces of personal information we have collected about you.
        </P>

        <H3>Right to Delete (CCPA § 1798.105)</H3>
        <P>
          You have the right to request that we delete personal information we have collected from you, subject to certain exceptions (e.g. where retention is required to complete a transaction, detect fraud, comply with a legal obligation, or protect against unlawful activity).
        </P>

        <H3>Right to Correct (CPRA)</H3>
        <P>
          You have the right to request that we correct inaccurate personal information we maintain about you, taking into account the nature of the data and the purposes of processing.
        </P>

        <H3>Right to Opt-Out of Sale/Sharing (CCPA § 1798.120)</H3>
        <P>
          You have the right to direct us not to sell or share your personal information. Zod does not sell personal information. We do share anonymised analytics data with analytics providers; you can opt out of this via our Cookie Settings page.
        </P>

        <H3>Right to Limit Use of Sensitive Personal Information (CPRA)</H3>
        <P>
          You have the right to limit our use of sensitive personal information (including sexual orientation and precise geolocation) to the purposes necessary to perform the services you requested. We already limit such use — see our Privacy Policy for details.
        </P>

        <H3>Right to Non-Discrimination (CCPA § 1798.125)</H3>
        <P>
          We will not discriminate against you for exercising any of your CCPA rights. We will not deny you goods or services, charge you different prices, provide a different level of quality, or suggest you will receive a different level of service as a result of exercising your rights.
        </P>
      </>
    ),
  },
  {
    id: "do-not-sell",
    title: "Do Not Sell or Share My Personal Information",
    content: (
      <>
        <InfoBox>
          Zod does not sell your personal information to third parties for monetary or other consideration. We do not share personal information for cross-context behavioural advertising. You do not need to opt out of something we do not do.
        </InfoBox>
        <P>
          We do use analytics tools (Amplitude, Google Analytics) that receive usage data to help us improve the product. This data is anonymised and aggregated before sharing. If you wish to opt out of this analytics sharing, you can do so via our Cookie Settings page.
        </P>
        <P>
          If our practices ever change such that personal information is sold or shared for advertising, we will update this notice and provide you with a clear "Do Not Sell or Share My Personal Information" link.
        </P>
      </>
    ),
  },
  {
    id: "how-to-exercise",
    title: "How to Exercise Your Rights",
    content: (
      <>
        <P>You may submit a verifiable consumer request to exercise your rights by:</P>
        <UL items={[
          "In-app: Settings → Privacy (for data download and account deletion)",
          "Email: ccpa@dhabli.com",
          "Toll-free: 1-833-ZOD-PRIV (1-833-963-7748), available Mon–Fri 9am–5pm PT",
          "Written request: Zevello, Inc., 1209 Orange Street, Wilmington, DE 19801",
        ]} />
        <H3>Verification</H3>
        <P>
          To protect your privacy and prevent fraud, we must verify your identity before processing your request. We will match information you provide against information we have on file. We may ask for additional verification for sensitive requests such as data disclosure.
        </P>
        <H3>Authorised agents</H3>
        <P>
          You may designate an authorised agent to make a request on your behalf. The agent must provide written proof of your authorisation (signed permission or power of attorney). We may still require direct verification from you unless you have provided a power of attorney.
        </P>
        <H3>Response timeline</H3>
        <P>
          We will respond within 45 days. If additional time is needed, we will notify you within the initial 45-day period and may extend by a further 45 days (90 days total). We will disclose data from the preceding 12 months, free of charge, up to twice per calendar year.
        </P>
      </>
    ),
  },
  {
    id: "financial-incentives",
    title: "Financial Incentives",
    content: (
      <>
        <P>
          We do not offer financial incentives or price differences in exchange for the collection, sale, or retention of personal information. Our subscription pricing is uniform and not contingent on your consent to any data practices beyond those required to operate the Service.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <P>For California privacy rights inquiries:</P>
        <ContactBlock
          email="ccpa@dhabli.com"
          address="1209 Orange Street, Wilmington, Delaware 19801, USA"
        />
        <P>
          Toll-free phone: 1-833-ZOD-PRIV (1-833-963-7748)
        </P>
      </>
    ),
  },
];

export default function CCPAPage() {
  return (
    <PolicyPage
      badge="Legal · CCPA"
      title="California Privacy Rights"
      subtitle="Information for California residents about your rights under the CCPA and CPRA, the categories of data we collect, and how to exercise your rights."
      lastUpdated="March 1, 2026"
      effectiveDate="March 1, 2026"
      sections={sections}
    />
  );
}
