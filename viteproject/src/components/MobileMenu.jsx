import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../context/LanguageContext";
import { ThemeToggle, LangToggle } from "./NavToggles";

const SECTIONS = ["home", "about", "experience", "education", "projects", "skills", "languages", "contact"];
const cvUrl = (lang) => `${import.meta.env.BASE_URL}cv-${lang}.pdf`;
const cvName = (lang) => (lang === "de" ? "Dejvi-Kacollja-Lebenslauf.pdf" : "Dejvi-Kacollja-CV.pdf");

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();
  const { t, lang } = useLanguage();

  const linkClass = (section) =>
    `group relative text-2xl font-semibold my-3 transition-all duration-300
    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
    ${active === section ? "text-accent" : "t-soft hover:t-strong"}`;

  return (
    <div
      id="mobile-menu"
      className={`fixed top-0 left-0 w-full bg-[var(--bg)] backdrop-blur-xl z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 t-strong text-3xl focus:outline-none"
        aria-label="Close menu"
      >
        &times;
      </button>

      {SECTIONS.map((s, i) => (
        <a
          key={s}
          href={s === "contact" ? "mailto:dejvikacollja@gmail.com" : `#${s}`}
          onClick={() => setMenuOpen(false)}
          aria-current={active === s ? "page" : undefined}
          className={linkClass(s)}
          style={{ transitionDelay: menuOpen ? `${i * 45 + 80}ms` : "0ms" }}
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
        className={`mt-6 inline-flex items-center px-6 py-3 rounded-xl s-1 hover:s-2 border bd t-strong font-semibold transition-colors
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {t("nav_cv")}
      </a>

      <div
        className={`mt-6 flex items-center gap-3 transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: menuOpen ? "520ms" : "0ms" }}
      >
        <LangToggle size="lg" />
        <ThemeToggle size="lg" />
      </div>
    </div>
  );
};
