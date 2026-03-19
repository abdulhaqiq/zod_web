import type { Metadata } from "next";
import PolicyPage, { P, H3, UL, InfoBox, ContactBlock } from "@/components/landing/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Zod's full Terms of Service. These terms govern your use of the Zod app, website, and all related services.",
  alternates: { canonical: "https://zod.app/terms" },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <InfoBox>
          By creating an account, downloading the app, browsing the website, or otherwise accessing or using any part of Zod's services, you agree to be legally bound by these Terms of Service ("Terms"). If you do not agree, you must not access or use the Service.
        </InfoBox>
        <P>
          These Terms constitute a legally binding agreement between you ("User", "you", or "your") and Zevello, Inc. ("Zod", "we", "us", or "our"), a corporation incorporated in Delaware, USA, with registered offices in London, United Kingdom and Dubai, United Arab Emirates.
        </P>
        <P>
          These Terms apply to all users of the Zod mobile application (iOS and Android), the Zod web application at zod.app, all related APIs, features, content, and services (collectively, the "Service"). By using any part of the Service, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference.
        </P>
        <P>
          We reserve the right to modify, update, or replace these Terms at any time at our sole discretion. For material changes, we will provide at least 30 days' notice via email to your registered address or via in-app notification. Your continued use of the Service after the effective date of any change constitutes your acceptance of the revised Terms. It is your responsibility to check these Terms periodically. The most current version is always available at zod.app/terms.
        </P>
        <P>
          If you are using the Service on behalf of a business or organisation, you represent and warrant that you have the authority to bind that entity to these Terms, and the terms "you" and "your" shall refer to both you and that entity.
        </P>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: (
      <>
        <P>To register for and use the Service, you must:</P>
        <UL items={[
          "Be at least 18 years of age — Zod is strictly an adult platform",
          "Not be prohibited from using or receiving the Service under any applicable law or regulation",
          "Not have been previously suspended or permanently banned from Zod for a violation of these Terms",
          "Have the full legal capacity to enter into a binding contract in your jurisdiction",
          "Not be a registered sex offender or appear on any sex offender registry in any jurisdiction",
          "Not be located in a country subject to a U.S. Government embargo or designated as a 'terrorist supporting' country",
          "Not be listed on any U.S. Government list of prohibited or restricted parties",
        ]} />
        <P>
          By using the Service, you represent and warrant that you meet all of the above eligibility requirements at all times. Zod reserves the right to verify your eligibility at any time and to terminate your account immediately and without notice if you are found to be or become ineligible.
        </P>
        <P>
          If you are under 18, you must not access or use the Service. If we become aware that a user is under 18, we will immediately terminate their account and delete all associated data. If you believe a minor has registered, please report it immediately to safety@dhabli.com.
        </P>
      </>
    ),
  },
  {
    id: "account",
    title: "3. Account Registration and Security",
    content: (
      <>
        <H3>Registration</H3>
        <P>
          You may register using a valid email address or through a supported third-party sign-in provider (such as Apple Sign In or Google Sign In). Each registration creates one unique account tied to one individual. By registering, you consent to receiving service-related communications from Zod to your registered email address.
        </P>
        <H3>Accurate information</H3>
        <P>
          You agree to provide accurate, complete, truthful, and current information at the time of registration and to keep all account and profile information up to date at all times. Providing false information, including false age, name, location, or photographs, constitutes a material breach of these Terms and may result in immediate account termination without notice or refund.
        </P>
        <H3>One account per person</H3>
        <P>
          Each person may hold only one active account. You may not create a new account after termination, suspension, or deletion of a previous account without our prior written consent. Creating multiple accounts to evade a ban, manipulate the matching system, or otherwise circumvent these Terms is strictly prohibited.
        </P>
        <H3>Account security</H3>
        <P>
          You are solely responsible for maintaining the confidentiality and security of your login credentials. You must not share your account credentials with any third party. You must notify us immediately at security@dhabli.com if you suspect any unauthorised access to, use of, or compromise of your account. Zod will not be liable for any loss, damage, or harm arising from your failure to maintain the security of your credentials.
        </P>
        <H3>Account transfer</H3>
        <P>
          Your account is personal to you and may not be transferred, sold, assigned, or gifted to any other person under any circumstances. Any such attempted transfer will be void and may result in the termination of both accounts involved.
        </P>
        <H3>Inactivity</H3>
        <P>
          Accounts that remain inactive for more than 24 consecutive months may be deactivated and their content permanently deleted at Zod's sole discretion. We will attempt to provide 30 days' notice to your registered email address before deactivation.
        </P>
      </>
    ),
  },
  {
    id: "conduct",
    title: "4. User Conduct and Prohibited Activities",
    content: (
      <>
        <P>
          You agree to use the Service in a lawful, respectful, and responsible manner. You must not, directly or indirectly, use the Service to:
        </P>
        <H3>Harm to others</H3>
        <UL items={[
          "Harass, abuse, stalk, threaten, bully, intimidate, or cause harm — physical, emotional, or financial — to any other user or third party",
          "Engage in hate speech, including content targeting race, ethnicity, nationality, religion, gender, sexual orientation, disability, or age",
          "Send unsolicited explicit, pornographic, or sexually harassing content to any user",
          "Share or threaten to share intimate images of another person without their consent ('revenge porn') — a criminal offence in many jurisdictions",
          "Engage in or facilitate human trafficking, sexual exploitation, prostitution, or escort services",
          "Solicit money, gifts, loans, or any form of financial assistance from other users",
        ]} />
        <H3>Fraud and deception</H3>
        <UL items={[
          "Impersonate any person, entity, or organisation, or misrepresent your affiliation with any person or entity",
          "Create a profile using another person's photographs without their explicit consent",
          "Misrepresent your identity, age, profession, location, relationship status, or any other material fact",
          "Engage in romance scams, phishing, catfishing, or any scheme to defraud other users",
          "Use the Service to obtain or attempt to obtain another user's financial or personal information through deception",
        ]} />
        <H3>Platform abuse</H3>
        <UL items={[
          "Advertise, promote, or solicit any commercial goods, services, business, or multi-level marketing scheme",
          "Distribute spam, chain letters, pyramid schemes, or any unsolicited bulk communications",
          "Use automated tools, bots, scrapers, crawlers, scripts, or any non-human means to access or interact with the Service",
          "Reverse engineer, decompile, disassemble, or attempt to derive the source code or underlying algorithms of the Service",
          "Circumvent, disable, or interfere with security-related features, including those that prevent copying or limit use of the Service",
          "Access or attempt to access any account or data other than your own",
          "Exploit bugs, vulnerabilities, or errors in the Service for any purpose — report them to security@dhabli.com instead",
          "Interfere with or disrupt the integrity or performance of the Service or its infrastructure",
          "Collect, harvest, or store any personally identifiable information of other users without their explicit written consent",
        ]} />
        <H3>Illegal activity</H3>
        <UL items={[
          "Engage in any activity that violates any applicable local, national, or international law or regulation",
          "Use the Service for any purpose that is unlawful, harmful, fraudulent, threatening, abusive, or otherwise objectionable",
          "Distribute, upload, or facilitate the distribution of malware, viruses, ransomware, spyware, or any malicious code",
          "Engage in or facilitate drug dealing, weapons trafficking, or any other illegal commerce",
        ]} />
        <P>
          Zod uses a combination of AI-powered automated moderation systems, community reporting, and human review to enforce these rules. Violations may result in content removal, account warnings, temporary suspension, or permanent termination depending on severity and frequency. Serious violations — including those involving minors, threats of violence, or sexual exploitation — will be reported to relevant law enforcement authorities.
        </P>
      </>
    ),
  },
  {
    id: "content",
    title: "5. User Content and Intellectual Property",
    content: (
      <>
        <H3>Ownership of your content</H3>
        <P>
          You retain full ownership of all content you create and post on Zod, including photographs, profile text, messages, voice notes, and any other material ("User Content"). Zod does not claim ownership of your User Content.
        </P>
        <H3>Licence you grant to Zod</H3>
        <P>
          By posting, uploading, or otherwise providing User Content to the Service, you grant Zod a non-exclusive, worldwide, royalty-free, sublicensable, and transferable licence to host, store, use, copy, modify, distribute, reproduce, and display your User Content solely for the purpose of: (a) operating and providing the Service; (b) improving and developing the Service and our AI systems; (c) safety and moderation purposes. This licence terminates when you delete your User Content or account, except to the extent your content has been shared with others who have not deleted it.
        </P>
        <H3>Your representations</H3>
        <P>You represent and warrant that:</P>
        <UL items={[
          "You own or have the necessary rights, licences, and permissions to post your User Content",
          "Your User Content does not infringe any third party's copyright, trademark, privacy, publicity, or other rights",
          "You have obtained all necessary consents from individuals identifiable in your photographs",
          "Your User Content does not contain any material that is false, defamatory, misleading, or violates any law",
        ]} />
        <H3>Prohibited content</H3>
        <P>You may not post or share:</P>
        <UL items={[
          "Nudity or sexually explicit content in your public profile — this is never permitted on public-facing content",
          "Any content depicting minors in a sexual context — zero tolerance, will result in immediate termination and law enforcement referral",
          "Content glorifying, promoting, or instructing on self-harm, suicide, or eating disorders",
          "Graphic violence, gore, or content designed to shock or disturb",
          "Content that promotes or facilitates illegal activity",
          "Another person's private information, private photographs, or intimate content shared without their consent",
          "Copyrighted material, trademarks, or other intellectual property you do not have the right to use",
          "Misinformation or deliberately misleading content that could endanger or harm others",
          "Content designed to manipulate, defraud, or deceive other users",
        ]} />
        <H3>Zod's intellectual property</H3>
        <P>
          All software, technology, design, user interfaces, text, graphics, logos, trademarks, service marks, trade names, photographs, audio, and video materials constituting or incorporated in the Service are owned by or licensed to Zod and protected by applicable copyright, trademark, and other intellectual property laws worldwide. "Zod" and the Zod logo are trademarks of Zevello, Inc. You may not use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, sublicence, sell, or otherwise exploit any part of the Service or its content without our prior express written consent.
        </P>
        <H3>Feedback</H3>
        <P>
          If you provide us with feedback, suggestions, ideas, or proposals regarding the Service ("Feedback"), you grant Zod an irrevocable, perpetual, worldwide, royalty-free licence to use and incorporate such Feedback for any purpose without any obligation of compensation or attribution to you.
        </P>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "6. Subscriptions, Payments, and Billing",
    content: (
      <>
        <H3>Free and paid tiers</H3>
        <P>
          Zod offers a free tier that includes the full core matching experience. No feature that is essential to finding a match is placed behind a paywall. Optional paid subscription plans ("Zod Plus", "Zod Premium") unlock additional features such as enhanced filtering, priority visibility, and profile boosts. The specific features included in each tier are described on our Pricing page and may be updated from time to time.
        </P>
        <H3>Billing and auto-renewal</H3>
        <P>
          Paid subscriptions are billed in advance on a recurring basis — monthly or annually depending on your selected plan. By subscribing, you authorise Zod (or our third-party payment processor) to charge your designated payment method at the then-current subscription price at the beginning of each billing cycle. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. All prices are displayed inclusive of applicable taxes where required by law.
        </P>
        <H3>Free trials</H3>
        <P>
          From time to time, Zod may offer free trials of paid plans. Unless you cancel before the trial period ends, your payment method will be charged the applicable subscription fee at the end of the trial. Only one free trial is available per person per plan.
        </P>
        <H3>Cancellation</H3>
        <P>
          You may cancel your subscription at any time via: (a) Settings → Subscription within the app; (b) your App Store or Google Play account settings; or (c) by contacting billing@dhabli.com. Cancellation takes effect at the end of the current paid billing period. You will retain access to paid features until that date. Cancellation does not delete your account.
        </P>
        <H3>Refunds</H3>
        <P>
          Subscriptions purchased through the Apple App Store are subject to Apple's refund policy and must be requested through Apple. Subscriptions purchased through Google Play are subject to Google's refund policy and must be requested through Google. For subscriptions purchased directly through our website: you may request a full refund by contacting billing@dhabli.com within 7 days of purchase, provided you have not materially used the paid features. We do not provide partial refunds for unused portions of subscription periods, except where required by applicable law (including EU/UK consumer protection legislation).
        </P>
        <H3>Price changes</H3>
        <P>
          Zod reserves the right to change subscription prices at any time. We will notify you of any price increase at least 30 days in advance of the change taking effect. If you do not accept the new price, you may cancel your subscription before the price change takes effect. Continued use of the Service after the effective date of a price change constitutes acceptance of the new price.
        </P>
        <H3>Payment disputes and chargebacks</H3>
        <P>
          If you believe you have been charged incorrectly, please contact billing@dhabli.com before initiating a chargeback with your bank or card provider. Initiating a chargeback without first attempting to resolve the issue with us may result in the suspension of your account pending resolution of the dispute.
        </P>
        <H3>Taxes</H3>
        <P>
          You are responsible for all applicable taxes, levies, and duties arising from your subscription, except where Zod is legally required to collect such taxes on your behalf. Prices displayed may or may not include VAT, GST, or other applicable taxes depending on your jurisdiction; applicable taxes will be clearly shown at checkout.
        </P>
      </>
    ),
  },
  {
    id: "safety",
    title: "7. Safety",
    content: (
      <>
        <P>
          Your safety matters to us. While we implement robust safety features including ID verification, AI moderation, end-to-end encrypted messaging, and one-tap reporting, you must understand and acknowledge the following:
        </P>
        <UL items={[
          "Zod is a platform that facilitates introductions between users. We are not responsible for the conduct, character, identity, statements, intentions, or actions of any user, whether on or off the platform.",
          "Despite ID verification, we cannot guarantee that all users are who they claim to be. You should exercise independent caution and judgment when communicating with and meeting other users.",
          "You assume full personal responsibility for any risk associated with meeting other users in person. We strongly recommend following our Safety Tips at zod.app/safety-tips.",
          "We do not conduct criminal background checks on users. If safety is a concern, consider using independent background check services.",
          "You should never send money, share financial account details, or provide financial assistance to anyone you have met through the Service.",
        ]} />
        <P>
          You agree to report to Zod any users who violate these Terms or our Community Guidelines, and to cooperate with any investigation we undertake in connection with such a report. You can report users in-app or at zod.app/report.
        </P>
      </>
    ),
  },
  {
    id: "privacy",
    title: "8. Privacy and Data",
    content: (
      <>
        <P>
          Your privacy is important to us. Our Privacy Policy, available at zod.app/privacy, explains in detail how we collect, process, store, transfer, and protect your personal data. By using the Service, you acknowledge that you have read and understood our Privacy Policy.
        </P>
        <P>
          In summary: we do not sell your personal data to third parties, we do not use your data for advertising, and we give you full control over your data including the right to access, correct, and delete it at any time.
        </P>
        <P>
          For users in the European Economic Area, United Kingdom, and Switzerland, our processing of your personal data is governed by the General Data Protection Regulation (GDPR) and applicable national implementing legislation. Details are available at zod.app/gdpr.
        </P>
        <P>
          For California residents, additional rights apply under the California Consumer Privacy Act (CCPA). Details are available at zod.app/ccpa.
        </P>
      </>
    ),
  },
  {
    id: "thirdparty",
    title: "9. Third-Party Services and Links",
    content: (
      <>
        <P>
          The Service may contain links to third-party websites, applications, or services that are not owned or controlled by Zod. We have no control over, and assume no responsibility for, the content, privacy policies, practices, or terms of any third-party services. We do not endorse or make any representations about third-party services.
        </P>
        <P>
          Your use of third-party services linked from or integrated with Zod (including Apple Sign In, Google Sign In, payment processors, and video providers) is governed solely by the terms and privacy policies of those third parties. We encourage you to review those terms before use.
        </P>
        <P>
          If you choose to connect third-party social media accounts to your Zod profile, you grant Zod permission to access the information you make available through those accounts, subject to the permissions you grant and the privacy settings of those platforms.
        </P>
      </>
    ),
  },
  {
    id: "dmca",
    title: "10. Copyright and DMCA",
    content: (
      <>
        <P>
          Zod respects the intellectual property rights of others and expects users to do the same. We respond to notices of alleged copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA) and equivalent legislation in other jurisdictions.
        </P>
        <H3>Filing a DMCA notice</H3>
        <P>If you believe your copyrighted work has been used on Zod in a way that constitutes infringement, please send a written notice to legal@dhabli.com including:</P>
        <UL items={[
          "Your full name, address, telephone number, and email address",
          "A description of the copyrighted work you claim has been infringed",
          "The URL or specific location of the allegedly infringing content on Zod",
          "A statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent, or the law",
          "A statement that the information in your notice is accurate, and under penalty of perjury, that you are authorised to act on behalf of the copyright owner",
          "Your physical or electronic signature",
        ]} />
        <P>
          We will review all valid notices and, where appropriate, remove or disable access to the allegedly infringing content. We will also notify the user who posted the content of the claim.
        </P>
        <H3>Counter-notices</H3>
        <P>
          If you believe your content was removed in error, you may submit a counter-notice to legal@dhabli.com. We will provide the counter-notice to the original complainant, and if they do not file a court action within 10 business days, we may restore the content.
        </P>
        <H3>Repeat infringers</H3>
        <P>
          Zod will terminate the accounts of users who are found to be repeat infringers of third-party intellectual property rights.
        </P>
      </>
    ),
  },
  {
    id: "modifications",
    title: "11. Modifications to the Service",
    content: (
      <>
        <P>
          Zod reserves the right to modify, suspend, discontinue, or remove any part of the Service at any time, with or without notice, for any reason including maintenance, technical improvements, legal compliance, or changes in business direction. We will use reasonable efforts to provide advance notice of significant changes or discontinuations.
        </P>
        <P>
          Zod shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service or any feature thereof. If the Service is discontinued in its entirety, any prepaid subscription fees for unused periods will be refunded on a pro-rata basis.
        </P>
        <P>
          We may introduce new features, change existing features, or impose limits on certain features or restrict access to certain parts of the Service at any time without notice or liability.
        </P>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "12. Indemnification",
    content: (
      <>
        <P>
          You agree to defend, indemnify, and hold harmless Zevello, Inc., its affiliates, subsidiaries, officers, directors, employees, contractors, agents, licensors, and service providers from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
        </P>
        <UL items={[
          "Your violation of these Terms or any applicable law or regulation",
          "Your User Content, including any claim that your User Content infringes any third-party right",
          "Your use of the Service or any activity conducted through your account",
          "Your interaction with any other user of the Service, whether online or in person",
          "Any misrepresentation made by you in connection with your use of the Service",
        ]} />
        <P>
          Zod reserves the right, at your expense, to assume exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defence of such claims. You agree not to settle any such claim without our prior written consent.
        </P>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "13. Disclaimers and Warranties",
    content: (
      <>
        <InfoBox>
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
        </InfoBox>
        <P>Zod does not warrant or represent that:</P>
        <UL items={[
          "The Service will be uninterrupted, timely, secure, or error-free at all times",
          "The results obtained from use of the Service will be accurate, reliable, or complete",
          "Any defects or errors in the Service will be corrected",
          "The Service or the servers that make it available are free of viruses, malware, or other harmful components",
          "Any user you encounter on the Service is who they claim to be, has honest intentions, or is suitable for any particular purpose",
          "Use of the Service will lead to a relationship, match, or any specific outcome",
          "The AI matching algorithm will produce any particular result for any user",
        ]} />
        <P>
          Zod is a platform that facilitates introductions between adults. We do not screen users for criminal history, provide any guarantee as to the character or intentions of users, and are not responsible for any interactions between users on or off the platform. You assume full personal responsibility for all risks arising from your use of the Service and any interactions with other users.
        </P>
        <P>
          Some jurisdictions do not permit the exclusion of certain implied warranties. To the extent any such exclusions are not permitted by applicable law, those exclusions shall not apply to you, and the disclaimers above shall apply to the fullest extent permitted.
        </P>
      </>
    ),
  },
  {
    id: "liability",
    title: "14. Limitation of Liability",
    content: (
      <>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ZEVELLO, INC., ITS AFFILIATES, SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR ANY:
        </P>
        <UL items={[
          "INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES",
          "LOSS OF PROFITS, REVENUE, DATA, BUSINESS, OR GOODWILL",
          "COST OF SUBSTITUTE GOODS OR SERVICES",
          "LOSS OF USE OR INABILITY TO ACCESS THE SERVICE",
          "PERSONAL INJURY, PROPERTY DAMAGE, OR EMOTIONAL DISTRESS",
          "ANY OTHER INTANGIBLE LOSSES",
          "ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE SERVICE OR ANY CONTENT THEREON, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ZOD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
        ]} />
        <P>
          ZOD'S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING UNDER OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU PAID TO ZOD IN THE 12-MONTH PERIOD IMMEDIATELY PRECEDING THE CLAIM; OR (B) USD $100 (ONE HUNDRED US DOLLARS).
        </P>
        <P>
          THE LIMITATIONS IN THIS SECTION APPLY REGARDLESS OF THE FORM OF ACTION OR THE BASIS OF THE CLAIM (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE), AND EVEN IF ZOD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        </P>
        <P>
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN TYPES OF LIABILITY. IN SUCH JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW. NOTHING IN THESE TERMS SHALL LIMIT OR EXCLUDE ZOD'S LIABILITY FOR: (I) DEATH OR PERSONAL INJURY CAUSED BY OUR NEGLIGENCE; (II) FRAUD OR FRAUDULENT MISREPRESENTATION; OR (III) ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
        </P>
      </>
    ),
  },
  {
    id: "termination",
    title: "15. Termination and Suspension",
    content: (
      <>
        <H3>Termination by you</H3>
        <P>
          You may terminate your account and these Terms at any time by deleting your account via Settings → Account → Delete Account. Deletion is permanent, irreversible, and will result in the permanent removal of your profile, matches, messages, and all associated User Content in accordance with our Privacy Policy.
        </P>
        <H3>Termination or suspension by Zod</H3>
        <P>
          Zod reserves the right to suspend, restrict, or permanently terminate your access to the Service at any time, with or without notice, and without liability to you, for any reason including but not limited to:
        </P>
        <UL items={[
          "Violation of these Terms, our Community Guidelines, or any applicable law",
          "Conduct that we determine, in our sole discretion, is harmful to other users, third parties, or Zod",
          "Fraudulent activity or misrepresentation",
          "Safety concerns or reports of threatening or dangerous behaviour",
          "Court order, law enforcement request, or legal obligation",
          "Extended account inactivity",
          "Failure to pay amounts owed",
        ]} />
        <H3>Effect of termination</H3>
        <P>
          Upon termination of your account for any reason: (a) your licence to use the Service is immediately and permanently revoked; (b) you must immediately cease all use of the Service; (c) all provisions of these Terms that by their nature should survive termination shall survive, including without limitation Sections 5 (Intellectual Property), 12 (Indemnification), 13 (Disclaimers), 14 (Limitation of Liability), 16 (Governing Law), and 17 (General Provisions).
        </P>
        <P>
          If your account is terminated by Zod for a violation of these Terms, you are not entitled to a refund of any prepaid subscription fees unless required by applicable law.
        </P>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "16. Governing Law, Arbitration, and Dispute Resolution",
    content: (
      <>
        <H3>Governing law</H3>
        <P>
          These Terms, and any dispute arising out of or relating to these Terms or your use of the Service, shall be governed by and construed in accordance with the laws of the State of Delaware, United States of America, without regard to its conflict of law provisions.
        </P>
        <H3>Informal resolution first</H3>
        <P>
          Before initiating any formal dispute resolution proceeding, you agree to first attempt to resolve the dispute informally by contacting Zod at legal@dhabli.com with a written description of the dispute. We will attempt to resolve the dispute within 30 days. This is mandatory and a condition precedent to any formal proceeding.
        </P>
        <H3>Binding arbitration (US users)</H3>
        <P>
          For users located in the United States: if informal resolution fails, any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Service shall be resolved by binding individual arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. The arbitration shall be conducted in English and shall take place remotely unless both parties agree otherwise.
        </P>
        <H3>Class action and jury trial waiver</H3>
        <P>
          YOU AND ZOD EACH WAIVE ANY RIGHT TO A JURY TRIAL. YOU AGREE THAT DISPUTES WILL BE RESOLVED ONLY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. IF FOR ANY REASON A CLAIM PROCEEDS IN COURT RATHER THAN ARBITRATION, BOTH PARTIES WAIVE ALL RIGHT TO A JURY TRIAL.
        </P>
        <H3>Exceptions to arbitration</H3>
        <P>
          The following are excluded from the arbitration agreement and may be brought in any court of competent jurisdiction: (a) claims for injunctive or other equitable relief to prevent unauthorised use or abuse of the Service; (b) claims related to intellectual property rights; (c) small claims that qualify for small claims court.
        </P>
        <H3>EU/EEA and UK users</H3>
        <P>
          For users located in the European Economic Area or United Kingdom, nothing in these Terms affects your statutory rights as a consumer. You may bring a claim in the courts of your country of residence. The courts of England and Wales shall have non-exclusive jurisdiction over all other matters. Disputes may also be submitted through the EU Online Dispute Resolution platform at https://ec.europa.eu/consumers/odr.
        </P>
        <H3>Time limitation</H3>
        <P>
          Any claim or cause of action arising out of or related to your use of the Service must be filed within one (1) year after the cause of action arose, or it is permanently barred. This limitation period does not apply where prohibited by applicable law.
        </P>
      </>
    ),
  },
  {
    id: "general",
    title: "17. General Provisions",
    content: (
      <>
        <H3>Entire agreement</H3>
        <P>
          These Terms, together with the Privacy Policy, Cookie Policy, Community Guidelines, and any other policies or agreements referenced herein, constitute the entire agreement between you and Zod regarding your use of the Service and supersede all prior agreements, understandings, negotiations, and discussions between the parties, whether oral or written.
        </P>
        <H3>Severability</H3>
        <P>
          If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or if it cannot be so modified, severed from these Terms. The remaining provisions shall continue in full force and effect.
        </P>
        <H3>Waiver</H3>
        <P>
          Zod's failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver by Zod of a breach of any provision of these Terms shall not be deemed a waiver of any subsequent breach of the same or any other provision.
        </P>
        <H3>Assignment</H3>
        <P>
          You may not assign, transfer, or sublicence your rights or obligations under these Terms to any third party without Zod's prior written consent. Zod may freely assign these Terms in connection with a merger, acquisition, reorganisation, sale of assets, or by operation of law.
        </P>
        <H3>Force majeure</H3>
        <P>
          Zod shall not be liable for any failure or delay in performing its obligations under these Terms where such failure or delay is caused by circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, pandemic, civil unrest, government action, fire, flood, power outages, internet failures, or third-party service failures.
        </P>
        <H3>Notices</H3>
        <P>
          We may provide notices to you by email to your registered address, by in-app notification, or by posting on our website. Notices to Zod should be sent in writing to legal@dhabli.com or to our registered address below.
        </P>
        <H3>Language</H3>
        <P>
          These Terms are written in English. If they are translated into any other language, the English version shall govern in the event of any conflict or inconsistency between the versions.
        </P>
        <H3>No third-party beneficiaries</H3>
        <P>
          These Terms are for the sole benefit of you and Zod and do not create any third-party beneficiary rights.
        </P>
        <H3>Export compliance</H3>
        <P>
          You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations maintained by the US Department of Commerce, and the sanctions programmes administered by the US Office of Foreign Assets Control (OFAC). You represent that you are not on any US Government prohibited or restricted parties list.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    title: "18. Contact",
    content: (
      <>
        <P>
          Questions, concerns, or complaints about these Terms should be directed to our Legal Team:
        </P>
        <ContactBlock
          email="legal@dhabli.com"
          address={"Zevello, Inc.\n71–75 Shelton Street\nCovent Garden\nLondon WC2H 9JQ\nUnited Kingdom"}
        />
        <P>
          For data protection enquiries: privacy@dhabli.com<br />
          For security vulnerabilities: security@dhabli.com<br />
          For billing disputes: billing@dhabli.com<br />
          For safety emergencies: safety@dhabli.com
        </P>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      badge="Legal · Terms"
      title="Terms of Service"
      subtitle="These Terms govern your use of Zod. We have written them to be comprehensive and clear. Please read every section — they protect both you and us."
      lastUpdated="March 19, 2026"
      effectiveDate="March 19, 2026"
      sections={sections}
    />
  );
}
