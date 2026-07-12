import { useCallback, useEffect, useRef, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../context/LanguageContext";
import { ThemeToggle, LangToggle } from "./NavToggles";

const SECTIONS = ["about", "experience", "education", "projects", "skills", "contact"];
const cvUrl = (lang) => `${import.meta.env.BASE_URL}cv-${lang}.pdf`;
const cvName = (lang) => (lang === "de" ? "Dejvi-Kacollja-Lebenslauf.pdf" : "Dejvi-Kacollja-CV.pdf");

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();
  const { t, lang } = useLanguage();

  const [hovered, setHovered] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const listRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Position the spotlight pill under the hovered link, falling back to the active section.
  const measure = useCallback(() => {
    const key = hovered ?? active;
    const el = itemRefs.current[key];
    const list = listRef.current;
    if (el && list) {
      const listRect = list.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setPill({ left: r.left - listRect.left, width: r.width, opacity: 1 });
    } else {
      setPill((p) => ({ ...p, opacity: 0 }));
    }
  }, [hovered, active]);

  useEffect(() => {
    measure();
  }, [measure, lang]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 bg-[var(--nav-bg)] backdrop-blur-xl border-b bd" aria-label="Primary navigation">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-3 h-16">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
            <span
              className="w-8 h-8 rounded-full s-1 border bd flex items-center justify-center text-xs font-bold t-strong transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_0_3px_rgba(var(--accent),0.14)]"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              DK
            </span>
            <span className="font-semibold text-base t-strong transition-colors">
              Dejvi Kacollja
            </span>
          </a>

          {/* Desktop links — sliding spotlight pill follows hover, rests on active */}
          <div
            ref={listRef}
            className="hidden lg:flex items-center gap-0.5 relative"
            onMouseLeave={() => setHovered(null)}
          >
            <span
              aria-hidden="true"
              className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full s-1 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] pointer-events-none"
              style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
            />
            {SECTIONS.map((s) => (
              <a
                key={s}
                ref={(el) => (itemRefs.current[s] = el)}
                href={s === "contact" ? "mailto:dejvikacollja@gmail.com" : `#${s}`}
                onMouseEnter={() => setHovered(s)}
                aria-current={active === s ? "page" : undefined}
                className={`relative z-10 px-3.5 py-2 rounded-full text-[15px] font-medium transition-colors duration-200 ${
                  active === s ? "text-accent" : "t-soft hover:t-strong"
                }`}
              >
                {t(`nav_${s}`)}
              </a>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <div className="hidden sm:block">
              <LangToggle />
            </div>

            <a
              href={cvUrl(lang)}
              download={cvName(lang)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl s-1 hover:s-2 border bd hover:border-accent t-strong transition-all duration-200"
            >
              {t("nav_cv")}
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg t-strong hover:s-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
