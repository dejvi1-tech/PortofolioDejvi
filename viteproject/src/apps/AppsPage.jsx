import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { LangToggle } from "../components/NavToggles";
import stepsIcon from "../assets/projects/stepsapp.jpg";
import vaulticIcon from "../assets/projects/vaultic.jpg";
import receiptlyIcon from "../assets/projects/receiptly.jpg";

// Back to the main portfolio — must be absolute in production: on
// apps.dejvikacollja.com a relative "/" would rewrite back to the apps page.
const PORTFOLIO_URL = import.meta.env.PROD
  ? "https://dejvikacollja.com/"
  : import.meta.env.BASE_URL;

/* In-app captures (assets/screens/<app>-<n>.jpg), ordered by filename */
const screens = (glob) => Object.keys(glob).sort().map((k) => glob[k]);
const receiptlyShots = screens(import.meta.glob("../assets/screens/receiptly-*.jpg", { eager: true, import: "default" }));
const stepsShots = screens(import.meta.glob("../assets/screens/steps-*.jpg", { eager: true, import: "default" }));
const vaulticShots = screens(import.meta.glob("../assets/screens/vaultic-*.jpg", { eager: true, import: "default" }));

/* ── Icons ── */
const IconApple = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);
const IconGithub = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconLink = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18a2 2 0 012 2v8a2 2 0 01-2 2h-4.5M10.5 6H6a2 2 0 00-2 2v8a2 2 0 002 2h4.5M8 12h8" />
  </svg>
);
const IconBack = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);
const IconDownload = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
  </svg>
);
const IconSun = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
  </svg>
);
const IconMoon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);
const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2l2.955 6.36 6.965.81-5.15 4.76 1.375 6.87L12 17.33 5.855 20.8l1.375-6.87L2.08 9.17l6.965-.81L12 2z" />
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path strokeLinecap="round" d="M10.5 5h3" />
  </svg>
);
const IconChevron = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ── Data: real iOS apps (stats come from the App Store — no invented numbers).
   `screenshots`: in-app captures cycled inside the iPhone mockup via the
   card's arrows (empty = icon placeholder until captures are added). ── */
const apps = [
  {
    key: "receiptly",
    name: "ReceiptlyAI",
    tagline: "apps_receiptly_tagline",
    icon: receiptlyIcon,
    status: "live",
    screenshots: receiptlyShots,
    stats: [
      { text: "React Native" },
      { icon: "phone", text: "iPhone & iPad" },
      { text: "AI / OCR" },
    ],
    description: "apps_receiptly_desc",
    appStore: "https://apps.apple.com/al/app/receiptlyai/id6772552227",
  },
  {
    key: "stepsapp",
    name: "StepsApp",
    tagline: "apps_steps_tagline",
    icon: stepsIcon,
    status: "live",
    screenshots: stepsShots,
    stats: [
      { icon: "star", text: "5.0 /5" },
      { icon: "download", text: "2,000+" },
      { icon: "phone", text: "iPhone & iPad" },
    ],
    description: "apps_steps_desc",
    appStore: "https://apps.apple.com/id/app/steps-pedometer-fit/id6760142770",
  },
  {
    key: "vaultic",
    name: "Vaultic",
    tagline: "apps_vaultic_tagline",
    icon: vaulticIcon,
    status: "live",
    screenshots: vaulticShots,
    stats: [
      { icon: "star", text: "5.0 /5" },
      { icon: "phone", text: "iPhone & iPad" },
      { text: "On-device" },
    ],
    description: "apps_vaultic_desc",
    appStore: "https://apps.apple.com/al/app/vaultic-photo-file-vault/id6763950462",
  },
];

const stats = [
  { value: "2,000+", label: "apps_stats_downloads" },
  { value: "3", label: "apps_stats_live" },
  { value: "3", label: "apps_stats_built" },
];

const socials = [
  { label: "GitHub", sub: "@dejvi1-tech", href: "https://github.com/dejvi1-tech", Icon: IconGithub },
  { label: "LinkedIn", sub: "apps_social_linkedin_sub", href: "https://www.linkedin.com/in/dejvi-kacollja/", Icon: IconLinkedIn },
  { label: "apps_social_page", sub: "apps_social_page_sub", href: PORTFOLIO_URL, Icon: IconLink },
];

/* ── Pieces ── */
const StatusBadge = ({ status }) => {
  const { t } = useLanguage();
  return status === "live" ? (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium t-soft">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {t("apps_status_live")}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium t-soft">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> {t("apps_status_review")}
    </span>
  );
};

const statIcons = {
  star: (props) => <IconStar {...props} />,
  download: (props) => <IconDownload {...props} />,
  phone: (props) => <IconPhone {...props} />,
};

/* iPhone mockup — crossfades through the app's captures at their natural
   aspect (nothing cropped; real captures bring their own status bar/island),
   or shows an icon placeholder until captures exist */
const PhoneMockup = ({ app, shots = [], active = 0 }) => (
  <div className="relative w-[230px] sm:w-[260px] shrink-0">
    <div className="rounded-[3rem] bg-[#0a0d16] border border-white/10 p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]">
      <div className="relative overflow-hidden rounded-[2.4rem] bg-[var(--bg-soft)]">
        {shots.length > 0 ? (
          <>
            {/* invisible sizer keeps the frame at the capture's full aspect */}
            <img src={shots[0]} alt="" aria-hidden="true" className="block w-full h-auto opacity-0" />
            {shots.map((s, i) => (
              <img
                key={s}
                src={s}
                alt={i === active ? `${app.name} app screenshot ${active + 1} of ${shots.length}` : ""}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </>
        ) : (
          <div className="relative aspect-[9/19.5] bg-grid flex flex-col items-center justify-center gap-4 p-6 text-center">
            <img
              src={app.icon}
              alt={`${app.name} app icon`}
              loading="lazy"
              decoding="async"
              className="w-20 h-20 rounded-[22%] object-cover border bd shadow-lg"
            />
            <span className="text-sm font-semibold t-strong">{app.name}</span>
            {/* Dynamic Island (real captures come with their own) */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[84px] h-[24px] rounded-full bg-black border border-white/5" />
          </div>
        )}
      </div>
    </div>
  </div>
);

/* One card per app — content beside an iPhone mockup whose arrows/dots cycle
   that app's own screenshots (hidden while an app has fewer than two).
   Captures auto-advance every 3.5s, pausing on hover/focus and for
   reduced-motion users; manual navigation restarts the timer. */
const AppCard = ({ app, reverse = false }) => {
  const { t } = useLanguage();
  const [shotIdx, setShotIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const shots = app.screenshots ?? [];
  const many = shots.length > 1;
  const prevShot = () => setShotIdx((i) => (i - 1 + shots.length) % shots.length);
  const nextShot = () => setShotIdx((i) => (i + 1) % shots.length);

  useEffect(() => {
    if (!many || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!document.hidden) setShotIdx((i) => (i + 1) % shots.length);
    }, 3500);
    return () => clearInterval(timer);
    // shotIdx in deps restarts the countdown after manual arrow/dot use
  }, [many, paused, shots.length, shotIdx]);

  return (
    <article className="panel-strong overflow-hidden grid lg:grid-cols-2">
      {/* Content */}
      <div className={`p-7 sm:p-10 md:p-12 flex flex-col justify-center ${reverse ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-5">
          <img
            src={app.icon}
            alt={`${app.name} app icon`}
            loading="lazy"
            decoding="async"
            className="w-[76px] h-[76px] md:w-[88px] md:h-[88px] rounded-[22%] object-cover border bd shadow-lg shrink-0"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl md:text-3xl font-bold t-strong truncate">{app.name}</h3>
              <StatusBadge status={app.status} />
            </div>
            <p className="t-soft text-sm md:text-base mt-1">{t(app.tagline)}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {app.stats.map(({ icon, text }) => {
            const Icon = icon ? statIcons[icon] : null;
            return (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full s-1 border bd t-body text-sm font-medium px-4 py-2"
              >
                {Icon && <Icon className={`w-4 h-4 ${icon === "star" ? "text-amber-400" : "t-soft"}`} />}
                {text}
              </span>
            );
          })}
        </div>

        <p className="mt-6 t-soft text-sm md:text-base leading-relaxed max-w-xl">{t(app.description)}</p>

        <div className="mt-8">
          <a
            href={app.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#3467eb] hover:bg-[#2b58d4] text-white py-3 px-6 rounded-xl font-semibold text-sm md:text-base transition-colors shadow-[0_14px_38px_-10px_rgba(52,103,235,0.6)]"
          >
            <IconApple className="w-4.5 h-4.5" /> {t("apps_open")}
          </a>
        </div>
      </div>

      {/* Media — phone flanked by photo arrows */}
      <div
        className={`relative flex items-center justify-center gap-3 sm:gap-5 p-8 md:p-10 ${
          reverse ? "lg:order-1" : ""
        }`}
        role={many ? "group" : undefined}
        aria-roledescription={many ? "carousel" : undefined}
        aria-label={many ? `${app.name} screenshots` : undefined}
        onMouseEnter={many ? () => setPaused(true) : undefined}
        onMouseLeave={many ? () => setPaused(false) : undefined}
        onFocus={many ? () => setPaused(true) : undefined}
        onBlur={many ? () => setPaused(false) : undefined}
      >
        {/* faint grid backdrop, masked on its own layer so the phone stays crisp */}
        <div className="absolute inset-0 bg-grid bg-grid-mask pointer-events-none" aria-hidden="true" />
        {many && (
          <button
            type="button"
            onClick={prevShot}
            aria-label="Previous screenshot"
            className="relative w-10 h-10 shrink-0 rounded-full s-1 hover:s-2 border bd flex items-center justify-center t-soft hover:t-strong transition-colors"
          >
            <IconChevron className="w-5 h-5 rotate-180" />
          </button>
        )}
        <PhoneMockup app={app} shots={shots} active={shotIdx} />
        {many && (
          <button
            type="button"
            onClick={nextShot}
            aria-label="Next screenshot"
            className="relative w-10 h-10 shrink-0 rounded-full s-1 hover:s-2 border bd flex items-center justify-center t-soft hover:t-strong transition-colors"
          >
            <IconChevron className="w-5 h-5" />
          </button>
        )}
        {many && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {shots.map((s, idx) => (
              <button
                key={s}
                type="button"
                onClick={() => setShotIdx(idx)}
                aria-label={`Screenshot ${idx + 1}`}
                aria-current={idx === shotIdx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === shotIdx ? "w-5 bg-accent" : "w-1.5 s-2 hover:bg-[color:var(--border-strong)]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

/* ── Page ── */
export const AppsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen t-body">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-[var(--nav-bg)] backdrop-blur-xl border-b bd">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center justify-between gap-3 h-16">
            <a href={PORTFOLIO_URL} className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-full s-1 border bd flex items-center justify-center text-xs font-bold t-strong" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                DK
              </span>
              <span className="font-semibold text-sm t-strong">Dejvi Kacollja</span>
            </a>
            <div className="flex items-center gap-2">
              <LangToggle />
              <a
                href={PORTFOLIO_URL}
                className="hidden sm:inline-flex items-center gap-1.5 text-sm t-soft hover:t-strong transition-colors px-3 py-1.5"
              >
                <IconBack className="w-4 h-4" /> {t("apps_nav_portfolio")}
              </a>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full s-1 hover:s-2 border bd t-strong text-xs font-semibold transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
                <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero */}
        <section className="pt-36 pb-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bd s-1 t-soft text-sm">
            <IconApple className="w-3.5 h-3.5" /> {t("apps_hero_badge")}
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight t-strong leading-[1.02]">
            {t("apps_hero_title")}
          </h1>
          <p className="mt-5 text-base md:text-lg t-soft max-w-xl mx-auto leading-relaxed">
            {t("apps_hero_sub")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#apps"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#eef3ff] to-[#b8cbff] hover:opacity-95 text-[#0d1320] py-3 px-6 rounded-full font-semibold transition-opacity shadow-[0_12px_34px_-6px_rgba(126,151,255,0.45)]"
            >
              <IconApple className="w-4 h-4" /> {t("apps_cta_view")}
            </a>
            <a
              href={PORTFOLIO_URL}
              className="inline-flex items-center gap-2 border bd-2 t-strong hover:s-1 py-3 px-6 rounded-full font-semibold transition-colors"
            >
              <IconBack className="w-4 h-4" /> {t("apps_cta_back")}
            </a>
            <a
              href="mailto:dejvikacollja@gmail.com"
              className="inline-flex items-center gap-2 t-soft hover:t-strong py-3 px-3 font-semibold transition-colors"
            >
              {t("apps_cta_contact")}
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-12">
          <dl className="panel-strong grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[color:var(--border)]">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center text-center px-4 py-7">
                <dt className="sr-only">{t(s.label)}</dt>
                <dd className="text-3xl md:text-4xl font-extrabold tracking-tight t-strong">{s.value}</dd>
                <span className="mt-2 text-xs md:text-sm t-soft">{t(s.label)}</span>
              </div>
            ))}
          </dl>
        </section>

        {/* Apps */}
        <section id="apps" className="pb-16 scroll-mt-24">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">App Store</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight t-strong">Apps</h2>
            <p className="mt-2 t-soft">{t("apps_section_sub")}</p>
          </div>
          <div className="space-y-8">
            {apps.map((app, i) => (
              <AppCard key={app.key} app={app} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* Find me online */}
        <section className="pb-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight t-strong">{t("apps_find_title")}</h2>
            <p className="mt-2 t-soft">{t("apps_find_sub")}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {socials.map(({ label, sub, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="panel flex items-center gap-3.5 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--border-strong)]"
              >
                <span className="w-11 h-11 shrink-0 rounded-xl s-1 border bd flex items-center justify-center text-accent">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold t-strong text-sm">{t(label)}</span>
                  <span className="block t-soft text-xs truncate">{t(sub)}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t bd py-8 text-center">
        <p className="text-sm t-soft">© {new Date().getFullYear()} Dejvi Kacollja</p>
      </footer>
    </div>
  );
};
