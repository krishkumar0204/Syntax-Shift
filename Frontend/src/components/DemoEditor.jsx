import { useState } from "react";
import Editor from "@monaco-editor/react";

const demoData = {
  python: {
    javascript: {
      input: `print("Hello World")`,
      output: `console.log("Hello World")`,
    },
  },

  javascript: {
    python: {
      input: `console.log("Hello World")`,
      output: `print("Hello World")`,
    },
  },
  java: {
    cpp: {
      input: `system.out.println("Hello")`,
      output: `cout << "Hello";`,
    },
  },
};

const editorOptions = {
  readOnly: true,
  minimap: { enabled: false },
  fontSize: 14,
  fontFamily: "'JetBrains Mono', monospace",
  lineHeight: 22,
  padding: { top: 18, bottom: 18 },
  scrollBeyondLastLine: false,
  automaticLayout: true,
  renderLineHighlight: "none",
  overviewRulerBorder: false,
  hideCursorInOverviewRuler: true,
};

const setupEditorTheme = (monaco) => {
  monaco.editor.defineTheme("syntax-shift-black", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "", foreground: "D7E3F4", background: "05070D" },
      { token: "keyword", foreground: "C4B5FD" },
      { token: "string", foreground: "7DD3FC" },
      { token: "number", foreground: "FBBF24" },
      { token: "comment", foreground: "64748B" },
    ],
    colors: {
      "editor.background": "#05070D",
      "editor.foreground": "#D7E3F4",
      "editorLineNumber.foreground": "#334155",
      "editorLineNumber.activeForeground": "#00D4FF",
      "editorCursor.foreground": "#00D4FF",
      "editor.selectionBackground": "#164E63",
      "editor.inactiveSelectionBackground": "#0F172A",
      "editorIndentGuide.background1": "#111827",
      "editorIndentGuide.activeBackground1": "#1F2937",
      "scrollbarSlider.background": "#1F293780",
      "scrollbarSlider.hoverBackground": "#334155AA",
      "scrollbarSlider.activeBackground": "#475569CC",
    },
  });
};

const DemoEditor = () => {
  const [inputCode] = useState(demoData.python.javascript.input);
  const [outputCode, setOutputCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = () => {
    setOutputCode("");
    setLoading(true);
    setTimeout(() => {
      setOutputCode(demoData.python.javascript.output);
      setLoading(false);
    }, 1500);
  };
  return (
    <div className="w-full rounded-lg border border-cyan-400/15 bg-black/80 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="title text-xs uppercase tracking-[0.18em] text-cyan-300/80">
            Live Demo
          </p>
          <h2 className="title mt-1 text-lg font-semibold text-slate-100">
            Python to JavaScript
          </h2>
        </div>

        <button
          type="button"
          onClick={handleConvert}
          disabled={loading}
          className="title shrink-0 rounded-md bg-[#00D4FF] px-5 py-2 text-sm font-semibold text-[#0A0F1E] shadow-lg shadow-cyan-500/20 transition hover:bg-[#38E1FF] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="overflow-hidden rounded-md border border-slate-800 bg-[#05070D]">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
            <span className="title text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Input
            </span>
            <span className="title rounded bg-cyan-400/10 px-2 py-1 text-[11px] text-cyan-300">
              Python
            </span>
          </div>
          <Editor
            height="250px"
            language="python"
            theme="syntax-shift-black"
            beforeMount={setupEditorTheme}
            value={inputCode}
            options={editorOptions}
          />
        </div>

        <div className="overflow-hidden rounded-md border border-slate-800 bg-[#05070D]">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
            <span className="title text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Output
            </span>
            <span className="title rounded bg-violet-400/10 px-2 py-1 text-[11px] text-violet-300">
              JavaScript
            </span>
          </div>
          <Editor
            height="250px"
            language="javascript"
            theme="syntax-shift-black"
            beforeMount={setupEditorTheme}
            value={
              loading
                ? "// Converting..."
                : outputCode || "// Converted code will appear here"
            }
            options={editorOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default DemoEditor;
