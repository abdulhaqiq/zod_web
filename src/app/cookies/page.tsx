import type { Metadata } from "next";
import PolicyPage, { P, H3, UL, InfoBox, ContactBlock } from "@/components/landing/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how Zod uses cookies and similar tracking technologies, and how you can control them.",
  keywords: ["Zod cookie policy", "Zod cookies", "dating app cookies", "Zod tracking policy"],
  alternates: { canonical: "https://zod.app/cookies" },
  openGraph: {
    title: "Zod Cookie Policy",
    description: "How Zod uses cookies and how you can control them.",
    url: "https://zod.app/cookies",
    type: "website",
  },
};

const COOKIE_TABLE = [
  { name: "zod_session", type: "Essential", purpose: "Maintains your authenticated session", duration: "Session" },
  { name: "zod_csrf", type: "Essential", purpose: "Protects against cross-site request forgery attacks", duration: "Session" },
  { name: "zod_prefs", type: "Functional", purpose: "Stores your language, notification, and UI preferences", duration: "12 months" },
  { name: "zod_onboard", type: "Functional", purpose: "Remembers onboarding completion state", duration: "6 months" },
  { name: "amp_*", type: "Analytics", purpose: "Amplitude — tracks feature usage and session behaviour", duration: "12 months" },
  { name: "_ga, _gid", type: "Analytics", purpose: "Google Analytics — aggregated traffic reporting", duration: "2 years / 24 hours" },
  { name: "ajs_*", type: "Analytics", purpose: "Segment — event pipeline for analytics and attribution", duration: "12 months" },
  { name: "fb_*", type: "Marketing", purpose: "Meta Pixel — ad attribution (opt-in only)", duration: "90 days" },
  { name: "ttclid", type: "Marketing", purpose: "TikTok Pixel — ad attribution (opt-in only)", duration: "7 days" },
];

const sections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    content: (
      <>
        <P>
          Cookies are small text files placed on your device by websites and apps you visit. They are widely used to make digital services work, improve efficiency, and provide information to site owners. Similar technologies include local storage, session storage, pixel tags, and device fingerprinting.
        </P>
        <P>
          When we refer to "cookies" in this policy, we mean all of these similar tracking technologies unless stated otherwise.
        </P>
      </>
    ),
  },
  {
    id: "types-of-cookies",
    title: "Types of Cookies We Use",
    content: (
      <>
        <H3>1. Essential cookies</H3>
        <P>
          These cookies are necessary for the Service to function and cannot be switched off. They are usually set in response to actions you make such as logging in, setting privacy preferences, or filling in forms. Without these cookies, Zod cannot work.
        </P>
        <H3>2. Functional cookies</H3>
        <P>
          These cookies enable enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages. If you disable these, some features may not work as intended.
        </P>
        <H3>3. Analytics cookies</H3>
        <P>
          These cookies help us understand how users interact with Zod — which features are used, where users drop off, and how performance can be improved. All data is aggregated and anonymised. We use Amplitude, Google Analytics, and Segment.
        </P>
        <H3>4. Marketing cookies</H3>
        <P>
          These cookies are set by our advertising partners and are only activated with your explicit consent. They track conversions from our app install campaigns to help us understand which channels are effective. We do not use these cookies to serve ads within the app.
        </P>
      </>
    ),
  },
  {
    id: "cookie-list",
    title: "Full Cookie List",
    content: (
      <>
        <P>The following table lists the specific cookies used on our website and web app:</P>
        <div className="overflow-x-auto -mx-0">
          <table className="w-full text-xs border-collapse mt-2">
            <thead>
              <tr className="border-b border-white/10">
                {["Name", "Type", "Purpose", "Duration"].map((h) => (
                  <th key={h} className="text-left py-2 pr-4 text-gray-500 font-semibold tracking-wide uppercase text-[10px]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COOKIE_TABLE.map((row, i) => (
                <tr key={i} className="border-b border-white/6">
                  <td className="py-2.5 pr-4 text-gray-300 font-mono">{row.name}</td>
                  <td className="py-2.5 pr-4">
                    <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider font-medium ${
                      row.type === "Essential" ? "bg-white/8 text-gray-300" :
                      row.type === "Functional" ? "bg-white/6 text-gray-400" :
                      row.type === "Analytics" ? "bg-white/5 text-gray-500" :
                      "bg-white/4 text-gray-600"
                    }`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 text-gray-500">{row.purpose}</td>
                  <td className="py-2.5 text-gray-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    content: (
      <>
        <P>
          Some cookies on our website are placed by third parties. These third parties have their own privacy policies, which we encourage you to review:
        </P>
        <UL items={[
          "Google Analytics: policies.google.com/privacy",
          "Amplitude: amplitude.com/privacy",
          "Segment (Twilio): twilio.com/legal/privacy",
          "Meta (Facebook Pixel): facebook.com/policy",
          "TikTok: tiktok.com/legal/privacy-policy",
        ]} />
        <P>
          We do not control third-party cookies, and their placement is subject to your consent where required.
        </P>
      </>
    ),
  },
  {
    id: "control",
    title: "How to Control Cookies",
    content: (
      <>
        <H3>Cookie Settings (recommended)</H3>
        <P>
          The easiest way to manage your preferences is through our Cookie Settings page, which allows you to enable or disable each category (except essential cookies).
        </P>
        <H3>Browser settings</H3>
        <P>
          Most browsers allow you to refuse or delete cookies. The method varies by browser:
        </P>
        <UL items={[
          "Chrome: Settings → Privacy and Security → Cookies and other site data",
          "Safari: Preferences → Privacy → Manage Website Data",
          "Firefox: Settings → Privacy & Security → Cookies and Site Data",
          "Edge: Settings → Cookies and site permissions → Cookies and site data",
        ]} />
        <H3>Opt-out tools</H3>
        <UL items={[
          "Google Analytics opt-out: tools.google.com/dlpage/gaoptout",
          "Digital Advertising Alliance opt-out: optout.aboutads.info",
          "Network Advertising Initiative opt-out: optout.networkadvertising.org",
        ]} />
        <InfoBox>
          Blocking all cookies will affect the functionality of many websites. Essential cookies cannot be blocked without causing the Service to malfunction.
        </InfoBox>
      </>
    ),
  },
  {
    id: "mobile",
    title: "Mobile App and Device Identifiers",
    content: (
      <>
        <P>
          On mobile devices, the Zod app uses device identifiers (IDFV on iOS, Android ID on Android) for analytics and crash reporting. These are not cookies in the traditional sense, but perform a similar function.
        </P>
        <P>
          You can limit ad tracking on your device:
        </P>
        <UL items={[
          "iOS: Settings → Privacy & Security → Tracking → turn off 'Allow Apps to Request to Track'",
          "Android: Settings → Privacy → Ads → Opt out of Ads Personalisation",
        ]} />
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <P>
          For questions about our use of cookies, please contact:
        </P>
        <ContactBlock
          email="privacy@dhabli.com"
          address="71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom"
        />
      </>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      badge="Legal · Cookies"
      title="Cookie Policy"
      subtitle="This policy explains what cookies and similar technologies Zod uses, what they do, and how you can control them."
      lastUpdated="March 1, 2026"
      effectiveDate="March 1, 2026"
      sections={sections}
    />
  );
}
