"use client";
import { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const QUESTIONS = [
  {
    id: "relationship_goal",
    question: "What are you looking for right now?",
    options: [
      { label: "Something serious & long-term", value: "serious" },
      { label: "Dating and seeing where it goes", value: "casual" },
      { label: "Friendship that could become more", value: "friendship" },
      { label: "Not sure yet — open to anything", value: "open" },
    ],
  },
  {
    id: "lifestyle",
    question: "How do you recharge after a long day?",
    options: [
      { label: "Quiet night in — book, film, or nothing", value: "introvert" },
      { label: "Out with friends or meeting new people", value: "extrovert" },
      { label: "Solo activity — gym, walk, music", value: "solo" },
      { label: "Depends entirely on my mood", value: "mixed" },
    ],
  },
  {
    id: "values",
    question: "What matters most to you in a partner?",
    options: [
      { label: "Emotional intelligence & empathy", value: "emotional" },
      { label: "Ambition and drive", value: "ambition" },
      { label: "Humour and lightness", value: "humour" },
      { label: "Shared values and worldview", value: "values" },
    ],
  },
  {
    id: "communication",
    question: "How do you communicate in a relationship?",
    options: [
      { label: "I say what I feel, directly", value: "direct" },
      { label: "I need time to process before talking", value: "reflective" },
      { label: "I show it through actions, not words", value: "actions" },
      { label: "I adapt depending on the person", value: "adaptive" },
    ],
  },
  {
    id: "conflict",
    question: "When there's tension, you usually...",
    options: [
      { label: "Address it immediately and talk it through", value: "immediate" },
      { label: "Step back, cool down, then discuss", value: "cooldown" },
      { label: "Prefer to write it out or message first", value: "written" },
      { label: "Hope it resolves naturally over time", value: "passive" },
    ],
  },
  {
    id: "future",
    question: "Where do you see yourself in 5 years?",
    options: [
      { label: "Settled — stable life, maybe a family", value: "settled" },
      { label: "Still growing — career and travel first", value: "growth" },
      { label: "Somewhere unexpected — life surprises me", value: "spontaneous" },
      { label: "With the right person — that shapes everything", value: "partner_first" },
    ],
  },
  {
    id: "dealbreaker",
    question: "What would be an instant dealbreaker?",
    options: [
      { label: "Dishonesty in any form", value: "dishonesty" },
      { label: "Different life goals", value: "goals" },
      { label: "No emotional availability", value: "emotional" },
      { label: "Poor communication habits", value: "communication" },
    ],
  },
  {
    id: "attachment",
    question: "In past relationships, you've tended to be...",
    options: [
      { label: "Secure — comfortable with closeness", value: "secure" },
      { label: "Anxious — worried about losing the person", value: "anxious" },
      { label: "Independent — needing a lot of space", value: "avoidant" },
      { label: "Still figuring it out", value: "unknown" },
    ],
  },
];

const PROFILES: Record<string, { title: string; description: string; traits: string[]; score: number }> = {
  serious_emotional: {
    title: "The Deep Connector",
    description: "You value emotional depth above almost everything else. You're not here to waste time — you want something real, and you're willing to be vulnerable to get it. Zod's AI is built for exactly this type.",
    traits: ["Emotionally intelligent", "Long-term focused", "Genuine communicator", "Values-driven"],
    score: 94,
  },
  casual_humour: {
    title: "The Easy Going Explorer",
    description: "You bring lightness and fun wherever you go. You're open, not in a rush, and you let connections develop naturally. The right person won't feel forced — they'll just fit.",
    traits: ["Spontaneous", "Low pressure", "Good energy", "Socially confident"],
    score: 88,
  },
  default: {
    title: "The Thoughtful Match",
    description: "You know what you want even if you can't always articulate it. You lead with curiosity and care, and you're drawn to people who do the same. Zod will find them.",
    traits: ["Self-aware", "Emotionally available", "Patient", "Genuine"],
    score: 91,
  },
};

function getProfile(answers: Record<string, string>) {
  const goal = answers["relationship_goal"];
  const value = answers["values"];
  const key = `${goal}_${value}`;
  return PROFILES[key] ?? PROFILES["default"];
}

export default function QuizPage() {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const question = QUESTIONS[current];
  const progress = Math.round((current / QUESTIONS.length) * 100);
  const profile = getProfile(answers);

  function handleSelect(value: string) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      setStep("result");
    }
  }

  function handleRestart() {
    setStep("intro");
    setCurrent(0);
    setAnswers({});
    setSelected(null);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Intro */}
          {step === "intro" && (
            <div className="flex flex-col gap-8 pt-12">
              <div className="flex flex-col gap-4">
                <span className="self-start px-3 py-1 text-[10px] uppercase tracking-widest text-gray-500 border border-white/10">
                  Compatibility Quiz
                </span>
                <h1
                  className="text-4xl sm:text-5xl font-black text-white leading-tight"
                  style={{ fontFamily: "'Product Sans', sans-serif" }}
                >
                  Find out who<br />
                  <span className="text-gray-500">you&apos;re built for.</span>
                </h1>
                <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                  8 questions. Powered by Zod&apos;s AI compatibility engine. No sign-up required — just honest answers and a result that actually means something.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  "Takes about 3 minutes",
                  "Based on psychology & attachment theory",
                  "Your answers are never stored or sold",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    <span className="text-xs text-gray-500">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep("quiz")}
                className="self-start flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-white hover:bg-gray-100 transition-colors"
              >
                Start the quiz
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          )}

          {/* Quiz */}
          {step === "quiz" && (
            <div className="flex flex-col gap-8 pt-8">
              {/* Progress */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-gray-600">
                    Question {current + 1} of {QUESTIONS.length}
                  </span>
                  <span className="text-[10px] text-gray-600">{progress}% complete</span>
                </div>
                <div className="h-px bg-white/8 w-full relative">
                  <div
                    className="h-px bg-white transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="flex flex-col gap-6">
                <h2
                  className="text-2xl sm:text-3xl font-black text-white leading-snug"
                  style={{ fontFamily: "'Product Sans', sans-serif" }}
                >
                  {question.question}
                </h2>

                <div className="flex flex-col gap-2">
                  {question.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`text-left px-5 py-4 border text-sm transition-all duration-150 ${
                        selected === opt.value
                          ? "border-white text-white bg-white/6"
                          : "border-white/10 text-gray-400 hover:border-white/25 hover:text-white hover:bg-white/4"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Next */}
              <div className="flex items-center justify-between">
                {current > 0 ? (
                  <button
                    onClick={() => { setCurrent(current - 1); setSelected(answers[QUESTIONS[current - 1].id] ?? null); }}
                    className="text-xs text-gray-600 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                ) : <span />}
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all ${
                    selected
                      ? "text-black bg-white hover:bg-gray-100"
                      : "text-gray-700 bg-white/10 cursor-not-allowed"
                  }`}
                >
                  {current + 1 === QUESTIONS.length ? "See my result" : "Next"}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Result */}
          {step === "result" && (
            <div className="flex flex-col gap-10 pt-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-600">Your compatibility profile</span>
                <h2
                  className="text-4xl sm:text-5xl font-black text-white leading-tight"
                  style={{ fontFamily: "'Product Sans', sans-serif" }}
                >
                  {profile.title}
                </h2>
              </div>

              {/* Score ring */}
              <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/2">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                    <circle
                      cx="40" cy="40" r="34" fill="none"
                      stroke="white" strokeWidth="6"
                      strokeDasharray={`${2 * Math.PI * 34}`}
                      strokeDashoffset={`${2 * Math.PI * 34 * (1 - profile.score / 100)}`}
                      strokeLinecap="round"
                      style={{ transition: "stroke-dashoffset 1.2s ease" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                      {profile.score}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">AI compatibility score</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{profile.description}</p>
                </div>
              </div>

              {/* Traits */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-widest text-gray-600">Your key traits</span>
                <div className="flex flex-wrap gap-2">
                  {profile.traits.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-xs text-gray-300 border border-white/12 bg-white/3">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-4 p-6 border border-white/10">
                <p className="text-sm text-white font-semibold" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                  Ready to meet someone who actually matches this?
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Download Zod and let the AI find your real match — not just a profile that looks good on paper.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#download"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-white hover:bg-gray-100 transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download for iOS
                  </a>
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-2 px-5 py-2.5 text-sm text-gray-400 border border-white/10 hover:border-white/25 hover:text-white transition-colors"
                  >
                    Retake quiz
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
