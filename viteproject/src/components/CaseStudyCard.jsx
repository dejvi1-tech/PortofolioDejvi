import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { BrowserFrame } from "./BrowserFrame";
import { CountUp } from "./CountUp";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const IconExternal = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const IconGithub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

/**
 * Featured project card — scannable and visual: framed screenshot (hover zoom)
 * with a result badge, a one-line tagline, a short description, checkmark
 * highlights, tech tags, and links. Media alternates sides (`reverse`).
 */
export function CaseStudyCard({
  title, category, tagline, image, alt, contain,
  description, highlights = [], metric,
  tags = [], live, code, reverse = false,
}) {
  const { t } = useLanguage();
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (prefersReducedMotion()) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 5).toFixed(2)}deg`);
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative panel-strong overflow-hidden grid lg:grid-cols-2 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:shadow-[0_30px_80px_-32px_rgba(0,0,0,0.65)]"
    >
      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "radial-gradient(480px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent), 0.10), transparent 60%)" }}
      />

      {/* Media */}
      <div
        className={`relative flex items-center bg-grid bg-grid-mask p-6 sm:p-8 [perspective:1200px] ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        {contain ? (
          /* iOS app icon presentation */
          <div className="relative w-full min-h-[15rem] flex items-center justify-center">
            {image ? (
              <img src={image} alt={alt} loading="lazy" decoding="async" className="w-32 h-32 rounded-[22%] object-cover border bd shadow-lg transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <span className="w-16 h-16 flex items-center justify-center rounded-xl s-1 border bd text-lg font-bold t-body">{title.slice(0, 2)}</span>
            )}
          </div>
        ) : (
          <div
            className="w-full transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]"
            style={{ transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
          >
          <BrowserFrame
            url={live}
            className="w-full min-h-[15rem] transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          >
            {image ? (
              <img
                src={image}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 flex items-center justify-center rounded-xl s-1 border bd text-lg font-bold t-body">{title.slice(0, 2)}</span>
              </div>
            )}
            {/* gradient + result badge */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
            {metric && (
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold py-1.5 px-3 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <CountUp text={metric} />
              </span>
            )}
          </BrowserFrame>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 md:p-9 flex flex-col">
        {category && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{category}</span>
        )}
        <h3 className="mt-2 text-2xl font-bold t-strong leading-tight">{title}</h3>
        {tagline && <p className="mt-1 t-soft text-sm">{tagline}</p>}

        <p className="mt-4 t-soft text-sm leading-relaxed">{description}</p>

        {highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm t-body">
                <IconCheck />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {tags.map((tg) => (
            <span key={tg} className="s-1 t-soft py-1 px-2.5 rounded-md text-xs border bd">{tg}</span>
          ))}
        </div>

        {(live || code) && (
          <div className="mt-auto pt-6 flex items-center gap-3">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 bg-gradient-to-br from-[#eef3ff] to-[#b8cbff] hover:opacity-95 text-[#0d1320] py-2.5 px-5 rounded-full font-semibold text-sm transition-[opacity,transform] hover:-translate-y-0.5 shadow-[0_10px_28px_-10px_rgba(126,151,255,0.5)]"
              >
                <span className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"><IconExternal /></span>
                {t("proj_live")}
              </a>
            )}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 border bd t-strong hover:s-1 py-2.5 px-5 rounded-full font-semibold text-sm transition-colors"
              >
                <span className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"><IconGithub /></span>
                {t("proj_code")}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
