import type { Metadata } from "next";
import PolicyPage, { P, H3, UL, InfoBox, ContactBlock } from "@/components/landing/PolicyPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Zod's commitment to digital accessibility. Learn about our WCAG compliance, accessible features, and how to contact us with accessibility concerns.",
};

const sections = [
  {
    id: "commitment",
    title: "Our Commitment",
    content: (
      <>
        <InfoBox>
          Zod is committed to ensuring digital accessibility for people with disabilities. We continuously improve the user experience for everyone and apply relevant accessibility standards.
        </InfoBox>
        <P>
          We believe everyone deserves to find meaningful connections, regardless of ability. Accessibility is not an afterthought at Zod — it is a core part of our design and engineering process. Every new feature we ship is reviewed against accessibility criteria before it reaches users.
        </P>
        <P>
          This Accessibility Statement covers the Zod website (zod.app), the Zod iOS app, and the Zod Android app.
        </P>
      </>
    ),
  },
  {
    id: "standards",
    title: "Conformance Standards",
    content: (
      <>
        <P>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA. WCAG 2.2 is developed by the World Wide Web Consortium (W3C) and defines how to make web content more accessible to people with disabilities.
        </P>
        <H3>Current conformance status</H3>
        <P>
          The Zod website is <strong className="text-white">partially conformant</strong> with WCAG 2.2 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to resolve known issues (see the Known Issues section below).
        </P>
        <H3>Mobile apps</H3>
        <P>
          Our iOS app is designed to work with Apple's VoiceOver screen reader and Dynamic Type. Our Android app is designed to work with TalkBack and supports system font size scaling. Both apps are tested regularly with assistive technologies on each major platform release.
        </P>
        <P>
          We align mobile app accessibility with WCAG 2.2 Level AA where applicable, and additionally follow platform-specific guidelines: Apple Human Interface Guidelines (Accessibility) and Android Accessibility Guidelines.
        </P>
      </>
    ),
  },
  {
    id: "features",
    title: "Accessible Features",
    content: (
      <>
        <H3>Visual accessibility</H3>
        <UL items={[
          "High-contrast dark theme with a minimum 4.5:1 contrast ratio for body text",
          "Text sizes respect your OS-level font size preferences on both iOS and Android",
          "All informational images include descriptive alt text",
          "Profile photos can be navigated and described using your device's screen reader",
          "No information is conveyed by colour alone",
          "Animations and transitions respect your OS Reduce Motion setting",
        ]} />
        <H3>Motor and interaction accessibility</H3>
        <UL items={[
          "All interactive elements are reachable and operable via keyboard on the web",
          "Touch targets on mobile are a minimum 44×44pt (Apple) / 48×48dp (Android)",
          "The app supports Switch Control (iOS) and Switch Access (Android)",
          "No time limits are imposed on core matching or messaging interactions",
          "We do not use CAPTCHAs that require visual recognition without audio alternatives",
        ]} />
        <H3>Cognitive accessibility</H3>
        <UL items={[
          "Simple, plain language used throughout the interface",
          "Consistent navigation and predictable layouts across all screens",
          "Error messages clearly describe what went wrong and how to fix it",
          "Multi-step processes (e.g. profile creation) include progress indicators",
          "No auto-playing audio or video in the core app experience",
        ]} />
        <H3>Screen reader support</H3>
        <UL items={[
          "Semantic HTML with proper heading hierarchy on the web (H1 → H6)",
          "ARIA labels and roles applied to custom interactive components",
          "Focus management maintained during navigation and modal interactions",
          "Live regions used for dynamic content updates (e.g. new message notifications)",
          "Form fields have programmatically associated labels",
        ]} />
      </>
    ),
  },
  {
    id: "known-issues",
    title: "Known Issues",
    content: (
      <>
        <P>
          We are actively working to resolve the following known accessibility issues. Target resolution dates are estimates and subject to change.
        </P>
        <div className="space-y-3 mt-4">
          {[
            {
              issue: "Photo gallery in profile viewer",
              detail: "Swipe gestures in the photo gallery are not fully accessible via VoiceOver/TalkBack. A tap-based navigation alternative is in development.",
              eta: "Q2 2026",
            },
            {
              issue: "Video profile prompts",
              detail: "Video content in video prompts does not currently include captions. We are integrating automatic caption generation.",
              eta: "Q2 2026",
            },
            {
              issue: "Interactive match map",
              detail: "The distance visualisation map is not fully accessible to screen reader users. A text-only alternative is being designed.",
              eta: "Q3 2026",
            },
            {
              issue: "Third-party payment UI",
              detail: "Some elements of the Stripe payment sheet on web may not meet full WCAG 2.2 AA requirements. We are working with Stripe on improvements.",
              eta: "Ongoing",
            },
          ].map((item) => (
            <div key={item.issue} className="border border-white/8 p-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-sm font-bold text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                  {item.issue}
                </p>
                <span className="text-[10px] px-2 py-0.5 bg-white/6 text-gray-500 shrink-0 font-mono">
                  Target: {item.eta}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Content",
    content: (
      <>
        <P>
          Zod includes content and functionality from third-party services (e.g. Stripe for payments, Zendesk for customer support). While we choose partners who take accessibility seriously, we cannot fully control their accessibility compliance.
        </P>
        <P>
          If you encounter an accessibility issue on a third-party component embedded within Zod, please let us know. We will raise it with the relevant vendor and, where possible, provide an accessible alternative.
        </P>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Feedback and Assistance",
    content: (
      <>
        <P>
          We welcome your feedback on the accessibility of Zod. If you experience barriers or have suggestions for improvement, please contact our Accessibility Team:
        </P>
        <ContactBlock
          email="accessibility@dhabli.com"
          address="71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom"
        />
        <P>
          We try to respond to accessibility feedback within 2 business days. If you need information from our website in a different format (such as accessible PDF, large print, or audio), please email accessibility@dhabli.com and we will do our best to accommodate your request within 10 business days.
        </P>
        <H3>Enforcement</H3>
        <P>
          If you are not satisfied with our response to your accessibility concern, you may escalate to:
        </P>
        <UL items={[
          "UK: Equality and Human Rights Commission (equalityhumanrights.com) or contact the Equality Advisory Support Service (EASS)",
          "USA: US Department of Justice (ada.gov) or file a complaint under Section 508 if applicable",
          "EU: Your national disability rights authority or ombudsperson",
        ]} />
      </>
    ),
  },
  {
    id: "technical-info",
    title: "Technical Information",
    content: (
      <>
        <H3>Technologies relied upon</H3>
        <UL items={[
          "HTML5, CSS3, JavaScript (ES2022+)",
          "React / Next.js for the web application",
          "React Native (iOS and Android apps)",
          "WAI-ARIA 1.2 for accessible rich internet applications",
          "SVG for icons (with title elements for screen reader access)",
        ]} />
        <H3>Assessment approach</H3>
        <P>
          Zod assessed the accessibility of our products through the following methods:
        </P>
        <UL items={[
          "Self-evaluation against WCAG 2.2 AA checklist",
          "Automated testing using axe-core (web) and Accessibility Scanner (Android)",
          "Manual testing with VoiceOver (iOS/macOS), TalkBack (Android), NVDA (Windows), and JAWS",
          "User testing sessions with participants who use assistive technologies (conducted bi-annually)",
          "Third-party accessibility audit (most recent: January 2026, conducted by Deque Systems)",
        ]} />
        <P>
          This statement was last reviewed on March 1, 2026.
        </P>
      </>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <PolicyPage
      badge="Legal · Accessibility"
      title="Accessibility Statement"
      subtitle="Our commitment to making Zod accessible for everyone, including our conformance targets, the features we've built, and how to reach us if you encounter a barrier."
      lastUpdated="March 1, 2026"
      effectiveDate="March 1, 2026"
      sections={sections}
    />
  );
}
