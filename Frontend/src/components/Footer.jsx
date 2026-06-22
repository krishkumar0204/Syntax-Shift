import { CodeXml, ExternalLink, Mail, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/10 bg-[#070B16]/85 px-6 py-8 text-slate-400 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <NavLink to="/" className="inline-flex items-center gap-2">
            <CodeXml className="h-7 w-7 text-[#00D4FF]" />
            <span className="title text-lg font-semibold tracking-wide text-slate-100">
              Syntax<span className="text-amber-400">Shift</span>
            </span>
          </NavLink>
          <p className="mt-3 text-sm leading-6">
            Convert, explain, debug, and optimize code with a focused AI
            workspace built for developers.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <nav className="flex flex-wrap gap-4 text-sm">
            {footerLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-[#00D4FF]"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="SyntaxShift on GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-400/15 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-[#00D4FF]"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-3 border-t border-cyan-400/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {year} SyntaxShift. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Secure code assistance for everyday development.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
