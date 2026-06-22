import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Check, MoveRight } from "lucide-react";
import DemoEditor from "../components/DemoEditor";

const FULL_TEXT = "Convert Code Between\nProgramming Languages\nInstantly";
const LANGUAGES = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "Go",
  "Rust",
  "Swift",
];
const FEATURES = [
  {
    title: "Code Conversion",
    description: "Translate code between popular languages with clean syntax.",
  },
  {
    title: "Code Explanation",
    description: "Understand unfamiliar snippets with concise AI summaries.",
  },
  {
    title: "Bug Detection",
    description: "Spot common logic, syntax, and runtime issues faster.",
  },
  {
    title: "Code Optimization",
    description: "Improve readability and performance without losing intent.",
  },
];

export default function Hero() {
  const [displayed, setDisplayed] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [doneTyping, setDoneTyping] = useState(false);
  const indexRef = useRef(0);
  const demoRef = useRef(null);

  const navigate = useNavigate();

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const i = indexRef.current;
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          setDoneTyping(true);
          return;
        }
        setDisplayed((prev) => [...prev, FULL_TEXT[i]]);
        indexRef.current += 1;
      }, 50);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!doneTyping) return;
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, [doneTyping]);

  const renderHeading = () => {
    const lines = [];
    let current = [];
    displayed.forEach((ch, i) => {
      if (ch === "\n") {
        lines.push(
          <span key={i} style={{ display: "block" }}>
            {current}
          </span>,
        );
        current = [];
      } else {
        current.push(
          <span key={i} style={{ opacity: 1 }}>
            {ch}
          </span>,
        );
      }
    });
    if (current.length > 0) {
      lines.push(
        <span key="last" style={{ display: "block" }}>
          {current}
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "1.1em",
              background: "#00D4FF",
              verticalAlign: "text-bottom",
              marginLeft: 2,
              opacity: showCursor ? 1 : 0,
              transition: "opacity 0.1s",
            }}
            aria-hidden="true"
          />
        </span>,
      );
    }
    return lines;
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#0A0F1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 2rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: "#00D4FF",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          opacity: 0.85,
          position: "relative",
        }}
      >
        &gt; AI-powered code conversion
      </p>

      {/* Animated heading */}
      <h1
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(20px, 3.5vw, 32px)",
          fontWeight: 700,
          color: "#F8FAFC",
          textAlign: "center",
          lineHeight: 1.4,
          maxWidth: 640,
          minHeight: 96,
          position: "relative",
          marginBottom: "1.5rem",
        }}
      >
        {renderHeading()}
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontSize: 15,
          color: "#8892B0",
          textAlign: "center",
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: "2.5rem",
          position: "relative",
          opacity: doneTyping ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        Transform{" "}
        <span style={{ color: "#C4B5FD" }}>
          Python, JavaScript, Java, C++, Go
        </span>{" "}
        and more.
        <br />
        Debug, optimize, and explain code — instantly.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          opacity: doneTyping ? 1 : 0,
          transform: doneTyping ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <button
          style={{
            background: "#00D4FF",
            color: "#0A0F1E",
            border: "none",
            padding: "12px 28px",
            borderRadius: 6,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
          onClick={() => {
            /* handle CTA */
            navigate("/login");
          }}
        >
          Start Converting →
        </button>
        <button
          style={{
            background: "transparent",
            color: "#C4B5FD",
            border: "1px solid rgba(196,181,253,0.35)",
            padding: "12px 28px",
            borderRadius: 6,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            fontWeight: 400,
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
          onClick={scrollToDemo}
        >
          See an Example
        </button>
      </div>

      {/* Language pills */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
          position: "relative",
          opacity: doneTyping ? 1 : 0,
          transition: "opacity 0.6s ease 0.3s",
        }}
      >
        {LANGUAGES.map((lang) => (
          <span
            key={lang}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              padding: "4px 12px",
              borderRadius: 20,
              border: "1px solid rgba(0,212,255,0.2)",
              color: "rgba(0,212,255,0.6)",
              background: "rgba(0,212,255,0.04)",
              letterSpacing: "0.05em",
            }}
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Demo */}
      <div
        ref={demoRef}
        className="mt-16 flex scroll-mt-24 items-center justify-center gap-2 md:mt-20"
      >
        <ChevronRight className="h-5 w-5 text-[#00D4FF]" />
        <h1 className="title text-[#00D4FF] tracking-wide">DEMO</h1>
      </div>

      <div className="mt-8 w-full max-w-5xl">
        <DemoEditor />
      </div>

      {/* Features */}
      <div className="mt-16 flex items-center justify-center gap-2 md:mt-20">
        <ChevronRight className="h-5 w-5 text-[#00D4FF]" />
        <h1 className="title text-[#00D4FF] tracking-wide">FEATURES</h1>
      </div>

      <div className="mt-8 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-lg border border-cyan-400/15 bg-black/80 p-5 shadow-xl shadow-cyan-950/20 backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-amber-300/20 bg-amber-300/10 text-amber-300">
              <Check className="h-5 w-5" />
            </div>
            <h2 className="title text-base font-semibold text-slate-100">
              {feature.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {feature.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-2 md:mt-20">
        <h1 className="title text-[#00D4FF] text-2xl">
          Ready to boost productivity ?
        </h1>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="w-full mt-6 py-2.5 rounded-md  font-semibold title tracking-wide flex items-center justify-center gap-2 border-2 border-[rgba(0,212,255,0.15)]"
        >
          <span>Create Account</span>
          <MoveRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
