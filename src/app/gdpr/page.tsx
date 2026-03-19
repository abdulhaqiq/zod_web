import type { Metadata } from "next";
import PolicyPage, { P, H3, UL, InfoBox, ContactBlock } from "@/components/landing/PolicyPage";

export const metadata: Metadata = {
  title: "GDPR — Your EU/EEA Privacy Rights",
  description: "Information for users in the European Union and European Economic Area about how Zod complies with GDPR and processes your personal data.",
};

const sections = [
  {
    id: "who-we-are",
    title: "Who We Are (Data Controller)",
    content: (
      <>
        <InfoBox>
          For users in the European Economic Area (EEA), United Kingdom, and Switzerland, the Data Controller responsible for your personal data is Zevello, Inc., with our EU representative office at: Zevello EU Ltd., Sandyford Business Park, Dublin 18, Ireland.
        </InfoBox>
        <P>
          As the Data Controller, we determine the purposes and means of processing your personal data. We are registered with the Irish Data Protection Commission (DPC) as our lead supervisory authority under the EU's one-stop-shop mechanism.
        </P>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    content: (
      <>
        <P>
          Under the GDPR, we must have a valid legal basis for every processing activity. Here is how we justify each category of processing:
        </P>
        <H3>Performance of a contract (Art. 6(1)(b))</H3>
        <UL items={[
          "Creating and managing your account",
          "Running our AI compatibility engine and generating matches",
          "Enabling in-app messaging",
          "Processing subscription payments",
          "Providing customer support",
        ]} />
        <H3>Legitimate interests (Art. 6(1)(f))</H3>
        <UL items={[
          "Detecting and preventing fraud, abuse, and spam",
          "Improving and developing new product features using aggregated analytics",
          "Maintaining the security and integrity of our systems",
          "Defending against legal claims",
        ]} />
        <H3>Consent (Art. 6(1)(a))</H3>
        <UL items={[
          "Marketing communications via email (you can withdraw at any time)",
          "Non-essential cookies and tracking technologies",
          "Processing of special-category data you voluntarily add to your profile (sexual orientation, religion, ethnicity, health-related preferences)",
          "Sharing anonymised data with research partners",
        ]} />
        <H3>Legal obligation (Art. 6(1)(c))</H3>
        <UL items={[
          "Responding to court orders and lawful law enforcement requests",
          "Retaining financial records for statutory periods",
          "Child safety reporting obligations",
        ]} />
        <H3>Special-category data (Art. 9(2)(a))</H3>
        <P>
          Where your profile contains special-category data (e.g. sexual orientation), we process it based on your explicit consent. You can remove such data from your profile at any time, and doing so does not affect your ability to use the Service.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights Under GDPR",
    content: (
      <>
        <P>As a data subject in the EEA, UK, or Switzerland, you have the following rights:</P>

        <H3>Right of access (Art. 15)</H3>
        <P>
          You can request a copy of all personal data we hold about you, along with information about how it is processed. Access requests are fulfilled within 30 days and are free of charge for the first request.
        </P>

        <H3>Right to rectification (Art. 16)</H3>
        <P>
          You can correct inaccurate or incomplete personal data directly in the app via Settings → Edit Profile, or by contacting our Privacy Team.
        </P>

        <H3>Right to erasure / "right to be forgotten" (Art. 17)</H3>
        <P>
          You can request deletion of your personal data. We will comply unless we are required to retain it for legal reasons (e.g. fraud prevention, safety, legal proceedings). Data is purged from live systems within 30 days and from backups within 90 days.
        </P>

        <H3>Right to restriction (Art. 18)</H3>
        <P>
          In certain circumstances, you can request that we restrict processing of your data (e.g. while you contest its accuracy or object to its processing).
        </P>

        <H3>Right to portability (Art. 20)</H3>
        <P>
          You can request your personal data in a structured, commonly used, machine-readable format (JSON). Go to Settings → Privacy → Download My Data, or contact our Privacy Team.
        </P>

        <H3>Right to object (Art. 21)</H3>
        <P>
          You can object at any time to processing based on our legitimate interests. We will cease processing unless we can demonstrate compelling legitimate grounds. You have an absolute right to object to processing for direct marketing purposes.
        </P>

        <H3>Rights related to automated decision-making (Art. 22)</H3>
        <P>
          Our AI matching engine uses automated processing to suggest compatible users. This does not produce legal or similarly significant effects — you can always choose not to match with a suggested user. You have the right to request human review of any decision that you believe has significantly affected you.
        </P>

        <H3>Right to withdraw consent</H3>
        <P>
          Where we process your data based on consent, you can withdraw it at any time without affecting the lawfulness of prior processing. Withdraw consent via Settings → Privacy, or by contacting privacy@dhabli.com.
        </P>
      </>
    ),
  },
  {
    id: "how-to-exercise",
    title: "How to Exercise Your Rights",
    content: (
      <>
        <P>You can exercise most rights directly within the app:</P>
        <UL items={[
          "Download your data: Settings → Privacy → Download My Data",
          "Delete your account: Settings → Account → Delete Account",
          "Update profile information: Settings → Edit Profile",
          "Manage communication preferences: Settings → Notifications",
          "Withdraw marketing consent: Settings → Privacy → Marketing",
          "Manage cookie preferences: our Cookie Settings page",
        ]} />
        <P>
          For rights that cannot be exercised in-app, contact our Privacy Team at privacy@dhabli.com. We will verify your identity (to protect against fraudulent requests) and respond within 30 days. For complex requests, we may extend this to 90 days with notice.
        </P>
        <InfoBox>
          We do not charge a fee for data subject requests except where requests are manifestly unfounded, excessive, or repetitive, in which case we may charge a reasonable administrative fee or decline to act.
        </InfoBox>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: (
      <>
        <P>
          Zod operates globally, and your data may be transferred to and processed in countries outside the EEA, including the United States. These countries may not offer the same level of data protection as the EEA.
        </P>
        <P>Safeguards we use for international transfers:</P>
        <UL items={[
          "Standard Contractual Clauses (SCCs) adopted by the European Commission — used for transfers to our US parent entity and most third-party vendors",
          "UK International Data Transfer Agreements (IDTA) — used for transfers from the UK",
          "Adequacy decisions — where available (e.g. transfers to Canada, Japan)",
          "Transfer Impact Assessments (TIAs) — conducted before each new transfer to a non-adequate country",
        ]} />
        <P>
          You can obtain a copy of our SCCs by emailing privacy@dhabli.com.
        </P>
      </>
    ),
  },
  {
    id: "dpo",
    title: "Data Protection Officer",
    content: (
      <>
        <P>
          We have appointed a Data Protection Officer (DPO) as required by the GDPR. The DPO is responsible for overseeing our data protection strategy and ensuring compliance with GDPR requirements.
        </P>
        <P>
          You may contact our DPO directly at any time:
        </P>
        <div className="border border-white/10 p-5 space-y-1 text-xs text-gray-500 font-mono mt-4">
          <p className="text-gray-300 font-sans font-bold text-sm mb-1" style={{ fontFamily: "'Product Sans', sans-serif" }}>
            Data Protection Officer
          </p>
          <p className="text-gray-300 font-sans font-bold text-sm mb-3" style={{ fontFamily: "'Product Sans', sans-serif" }}>
            Zevello EU Ltd.
          </p>
          <p>Sandyford Business Park, Dublin 18, Ireland</p>
          <p>
            Email:{" "}
            <a href="mailto:dpo@dhabli.com" className="text-gray-300 hover:text-white transition-colors underline">
              dpo@dhabli.com
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    id: "supervisory-authority",
    title: "Right to Lodge a Complaint",
    content: (
      <>
        <P>
          If you believe we have violated your rights under the GDPR, you have the right to lodge a complaint with the supervisory authority in your EU member state of residence, place of work, or where the alleged violation occurred.
        </P>
        <P>
          Our lead supervisory authority is the Irish Data Protection Commission (DPC):
        </P>
        <div className="border border-white/10 p-5 space-y-1 text-xs text-gray-500 font-mono mt-4">
          <p className="text-gray-300 font-sans font-bold text-sm mb-3" style={{ fontFamily: "'Product Sans', sans-serif" }}>
            Data Protection Commission (Ireland)
          </p>
          <p>21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland</p>
          <p>
            Website:{" "}
            <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors underline">
              dataprotection.ie
            </a>
          </p>
          <p>Phone: +353 (0)1 765 0100</p>
        </div>
        <P>
          UK users may also contact the Information Commissioner's Office (ICO) at ico.org.uk.
        </P>
        <P>
          We ask that you contact us first — most issues can be resolved quickly. You are not, however, required to do so before contacting your supervisory authority.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Our Privacy Team",
    content: (
      <>
        <P>For all GDPR-related requests or questions:</P>
        <ContactBlock
          email="privacy@dhabli.com"
          address="Zevello EU Ltd., Sandyford Business Park, Dublin 18, Ireland"
        />
      </>
    ),
  },
];

export default function GDPRPage() {
  return (
    <PolicyPage
      badge="Legal · GDPR"
      title="GDPR & EU Privacy Rights"
      subtitle="Information specifically for users in the European Union, European Economic Area, and United Kingdom about how we process your data and your rights under the GDPR."
      lastUpdated="March 1, 2026"
      effectiveDate="March 1, 2026"
      sections={sections}
    />
  );
}
