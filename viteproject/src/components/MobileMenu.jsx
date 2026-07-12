import { useEffect } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../context/LanguageContext";
import { ThemeToggle, LangToggle } from "./NavToggles";

const SECTIONS = ["home", "about", "experience", "education", "projects", "skills", "languages", "contact"];
const cvUrl = (lang) => `${import.meta.env.BASE_URL}cv-${lang}.pdf`;
const cvName = (lang) => (lang === "de" ? "Dejvi-Kacollja-Lebenslauf.pdf" : "Dejvi-Kacollja-CV.pdf");

/**
 * Full-screen mobile menu. Animates only opacity/transform (GPU-composited —
 * no height animation, no reflow, no jank). Locks body scroll while open,
 * closes on Escape, and is hidden from focus/AT when closed via `invisible`.
 */
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();
  const { t, lang } = useLanguage();

  // Scroll lock + Escape while open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, setMenuOpen]);

  const linkClass = (section) =>
    `group relative text-2xl font-semibold my-3 transition-[opacity,transform] duration-300 ease-out
    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
    ${active === section ? "text-accent" : "t-soft hover:t-strong"}`;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className={`fixed inset-0 h-[100dvh] bg-[var(--bg)] z-50 flex flex-col items-center justify-center
        transition-[opacity,visibility] duration-300 ease-out
        ${menuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}`}
    >
      <button
        type="button"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full s-1 border bd t-strong active:scale-95 transition-transform"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {SECTIONS.map((s, i) => (
        <a
          key={s}
          href={s === "contact" ? "mailto:dejvikacollja@gmail.com" : `#${s}`}
          onClick={() => setMenuOpen(false)}
          aria-current={active === s ? "page" : undefined}
          className={linkClass(s)}
          style={{ transitionDelay: menuOpen ? `${i * 40 + 60}ms` : "0ms" }}
        >
          {t(`nav_${s}`)}
          {/* animated underline grows from active / on hover */}
          <span
            aria-hidden="true"
            className={`block h-0.5 rounded-full bg-accent mx-auto transition-all duration-300 ${
              active === s ? "w-8" : "w-0 group-hover:w-8"
            }`}
          />
        </a>
      ))}

      <a
        href={cvUrl(lang)}
        download={cvName(lang)}
        onClick={() => setMenuOpen(false)}
        className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl s-1 border bd t-strong font-semibold active:scale-95
          transition-[opacity,transform] duration-300 ease-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        style={{ transitionDelay: menuOpen ? `${SECTIONS.length * 40 + 60}ms` : "0ms" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
        </svg>
        {t("nav_cv")}
      </a>

      <div
        className={`mt-6 flex items-center gap-3 transition-[opacity,transform] duration-300 ease-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        style={{ transitionDelay: menuOpen ? `${SECTIONS.length * 40 + 120}ms` : "0ms" }}
      >
        <LangToggle size="lg" />
        <ThemeToggle size="lg" />
      </div>
    </div>
  );
};
