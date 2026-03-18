import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../context/LanguageContext";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();
  const { lang, toggleLang, t } = useLanguage();

  const linkClass = (section) =>
    `text-2xl font-semibold my-4 transform transition-all duration-300
    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
    ${active === section ? "text-white" : "text-gray-300"}`;

  return (
    <div
      id="mobile-menu"
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a href="#home" onClick={() => setMenuOpen(false)} aria-current={active === "home" ? "page" : undefined} className={linkClass("home")}>
        {t("nav_home")}
      </a>
      <a href="#about" onClick={() => setMenuOpen(false)} aria-current={active === "about" ? "page" : undefined} className={linkClass("about")}>
        {t("nav_about")}
      </a>
      <a href="#projects" onClick={() => setMenuOpen(false)} aria-current={active === "projects" ? "page" : undefined} className={linkClass("projects")}>
        {t("nav_projects")}
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)} aria-current={active === "contact" ? "page" : undefined} className={linkClass("contact")}>
        {t("nav_contact")}
      </a>

      <button
        onClick={toggleLang}
        className={`mt-6 px-4 py-2 text-sm font-semibold rounded-lg border border-white/20 text-gray-300 hover:text-white hover:border-blue-500/50 transition-all duration-200
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        aria-label={`Switch to ${lang === "en" ? "German" : "English"}`}
      >
        {lang === "en" ? "Deutsch" : "English"}
      </button>
    </div>
  );
};
