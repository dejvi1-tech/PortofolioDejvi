import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export const IconSun = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4" strokeWidth={1.8} />
    <path strokeLinecap="round" strokeWidth={1.8} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
  </svg>
);
export const IconMoon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);
export const IconGlobe = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
    <path strokeWidth={1.6} strokeLinecap="round" d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
  </svg>
);

/* Single, quiet icon button. Sun/moon crossfade so only one icon shows at a time. */
export const ThemeToggle = ({ size = "sm" }) => {
  const { theme, toggleTheme } = useTheme();
  const big = size === "lg";
  const box = big ? "w-11 h-11" : "w-9 h-9";
  const icon = big ? "w-5 h-5" : "w-[18px] h-[18px]";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative ${box} grid place-items-center rounded-full t-soft hover:t-strong hover:s-1 transition-colors`}
    >
      <IconSun
        className={`${icon} absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      />
      <IconMoon
        className={`${icon} absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      />
    </button>
  );
};

/* Single, quiet language button: globe + current language code. */
export const LangToggle = ({ size = "sm" }) => {
  const { lang, toggleLang } = useLanguage();
  const big = size === "lg";
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={`Switch language — currently ${lang === "en" ? "English" : "German"}`}
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold t-soft hover:t-strong hover:s-1 transition-colors ${
        big ? "px-4 h-11 text-base" : "px-2.5 h-9 text-sm"
      }`}
    >
      <IconGlobe className={big ? "w-4 h-4" : "w-[15px] h-[15px]"} />
      <span className="tracking-wide">{lang === "en" ? "EN" : "DE"}</span>
    </button>
  );
};
