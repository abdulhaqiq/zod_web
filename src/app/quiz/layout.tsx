import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compatibility Quiz",
  description: "Take Zod's free AI compatibility quiz. 8 questions based on psychology and attachment theory to find out who you're truly built for.",
  keywords: ["Zod compatibility quiz", "AI dating quiz", "relationship compatibility test", "Zod quiz", "dating personality quiz 2026"],
  alternates: { canonical: "https://zod.app/quiz" },
  openGraph: {
    title: "Zod Compatibility Quiz — Find Out Who You're Built For",
    description: "8 questions. Powered by AI. Find your compatibility profile in 3 minutes — free, no sign-up.",
    url: "https://zod.app/quiz",
    type: "website",
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
