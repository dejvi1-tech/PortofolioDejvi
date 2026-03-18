import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();
  const { lang, toggleLang, t } = useLanguage();
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(pct, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (section) =>
    `relative text-sm transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-blue-500 after:origin-left after:transition-transform after:duration-200 after:scale-x-0 hover:text-white ${
      active === section ? "text-white after:scale-x-100" : "text-gray-300"
    }`;

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-b border-white/10 shadow-lg" aria-label="Primary navigation">
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-100 shadow-[0_0_6px_rgba(59,130,246,0.8)]"
        style={{ width: `${scrollPct}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollPct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors">
            Dejvi<span className="text-blue-500">.Tech</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="w-10 h-10 flex items-center justify-center rounded md:hidden text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black z-40"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {["home","about","projects","contact"].map((s) => (
              <a key={s} href={`#${s}`} aria-label={`Go to ${t(`nav_${s}`)} section`} className={navLinkClass(s)}>
                {t(`nav_${s}`)}
              </a>
            ))}

            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/20 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
              aria-label={`Switch to ${lang === "en" ? "German" : "English"}`}
            >
              {lang === "en" ? "🇩🇪 DE" : "🇬🇧 EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
