import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const cvUrl = (lang) => `${import.meta.env.BASE_URL}cv-${lang}.pdf`;
const cvName = (lang) => (lang === "de" ? "Dejvi-Kacollja-Lebenslauf.pdf" : "Dejvi-Kacollja-CV.pdf");
const PROFILE = `${import.meta.env.BASE_URL}profile.jpg`;
// Standalone apps page: real subdomain in production, local file in dev
const APPS_URL = import.meta.env.PROD
  ? "https://apps.dejvikacollja.com/"
  : `${import.meta.env.BASE_URL}apps.html`;

const IconApple = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Social = ({ href, label, external, children }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-xl border bd t-soft hover:t-strong hover:bd-2 transition-colors"
  >
    {children}
  </a>
);

const Fact = ({ label, value }) => (
  <div className="panel px-4 py-3 rounded-2xl">
    <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">{label}</div>
    <div className="mt-0.5 text-sm font-semibold t-strong">{value}</div>
  </div>
);

const ProfileCard = ({ t }) => {
  const [ok, setOk] = useState(true);
  return (
    <div className="panel-strong p-5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[var(--surface-2)] hover:border-[color:var(--border-strong)] hover:shadow-[0_28px_70px_-18px_rgba(0,0,0,0.55)]">
      <div className="group relative w-full max-w-[280px] mx-auto overflow-hidden rounded-[28px] border bd bg-[var(--bg-soft)] aspect-[1/1.1]">
        {ok ? (
          <img
            src={PROFILE}
            alt="Dejvi Kacollja"
            loading="eager"
            decoding="async"
            onError={() => setOk(false)}
            className="w-full h-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl font-extrabold t-strong tracking-widest select-none" style={{ fontFamily: "JetBrains Mono, monospace" }}>
              DK
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <div className="text-lg font-bold t-strong">Dejvi Kacollja</div>
        <div className="text-sm text-accent mt-0.5">{t("about_role_label")}</div>
      </div>

      <div className="mt-5 space-y-2.5">
        <Fact label={t("card_exp_label")} value={t("card_exp_value")} />
        <Fact label={t("card_industry_label")} value={t("card_industry_value")} />
        <Fact label={t("card_location_label")} value={t("card_location_value")} />
      </div>
    </div>
  );
};

export const Home = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Hero glow on the right (reference .hero::after), over the body's navy gradient */}
      <div
        className="pointer-events-none absolute right-[-100px] top-3 w-[560px] h-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--hero-glow), transparent 66%)", filter: "blur(14px)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.3fr_0.78fr] gap-12 lg:gap-16 items-center">
          {/* ── Left: content ── */}
          <div>
            {/* Availability */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bd s-1 t-body text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                {t("home_badge")}
              </span>
            </motion.div>

            {/* Role eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            >
              {t("home_role")}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight t-strong leading-[1.0]"
            >
              {t("home_h1_pre")}{t("home_h1_accent")}{t("home_h1_post")}
            </motion.h1>

            {/* Tech stack line */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-5 text-sm md:text-base t-faint font-mono"
            >
              {t("home_stack")}
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-6 t-soft text-base md:text-lg leading-relaxed max-w-xl"
            >
              {t("home_p1")}
            </motion.p>

            {/* CTAs — light glowing primary + outline pill (reference style) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {/* Primary focus: the App Store portfolio — first, glowing, with a live-count badge */}
              <a
                href={APPS_URL}
                className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#eef3ff] to-[#b8cbff] hover:opacity-95 text-[#0d1320] py-3 px-6 rounded-full font-semibold transition-[opacity,transform] hover:-translate-y-0.5 animate-pulse-glow"
              >
                <IconApple />
                {t("home_cta_apps")}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d1320]/10 px-2.5 py-1 text-xs font-bold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  </span>
                  {t("home_cta_apps_badge")}
                </span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 s-1 hover:s-2 border bd t-strong py-3 px-6 rounded-full font-semibold transition-colors"
              >
                {t("home_cta_projects")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="mailto:dejvikacollja@gmail.com"
                className="inline-flex items-center gap-2 t-soft hover:t-strong py-3 px-3 font-semibold transition-colors"
              >
                {t("home_cta_contact")}
              </a>
              <a
                href={cvUrl(lang)}
                download={cvName(lang)}
                className="inline-flex items-center gap-2 t-soft hover:t-strong py-3 px-3 font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t("home_cta_cv")}
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-8 flex gap-2.5"
            >
              <Social href="https://github.com/dejvi1-tech" label="GitHub" external>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Social>
              <Social href="https://www.linkedin.com/in/dejvi-kacollja/" label="LinkedIn" external>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Social>
              <Social href="mailto:dejvikacollja@gmail.com" label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Social>
            </motion.div>
          </div>

          {/* ── Right: profile card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="hidden lg:block"
          >
            <ProfileCard t={t} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
