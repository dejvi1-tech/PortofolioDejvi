import { useEffect, useId, useRef, useState } from "react";
import { BrowserFrame } from "./BrowserFrame";

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
const IconApple = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const CardLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/link inline-flex items-center gap-1.5 text-sm font-medium t-body hover:t-strong transition-colors [&>svg]:transition-transform [&>svg]:duration-200 group-hover/link:[&>svg]:-translate-y-0.5 group-hover/link:[&>svg]:translate-x-0.5"
  >
    {children}
  </a>
);

export function ProjectCard({ title, description, tags = [], image, alt, live, appStore, code, badge, status, contain }) {
  const [open, setOpen] = useState(false);
  const modalId = useId();
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const hasLinks = live || appStore || code;

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        className="group relative h-full flex flex-col panel rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bd-2 hover:shadow-[0_16px_50px_-18px_rgba(0,0,0,0.7)]"
      >
        {/* Cursor-following spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%), rgba(169,192,255,0.14), transparent 70%)" }}
        />

        {/* Media */}
        <div className="relative bg-grid bg-grid-mask p-3.5 pb-0">
          {badge && (
            <span className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border bd-2 t-strong text-xs font-medium py-1 px-2.5 rounded-md">
              <span className={`w-1.5 h-1.5 rounded-full ${badge === "Concept" ? "bg-amber-400" : "bg-emerald-400"}`} />
              {badge}
            </span>
          )}

          {image && contain ? (
            <div className="w-full aspect-[16/10] flex items-center justify-center">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="w-24 h-24 rounded-[22%] object-cover border bd shadow-lg transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ) : image ? (
            <button
              type="button"
              aria-label={`Preview ${title}`}
              onClick={() => setOpen(true)}
              className="block w-full text-left"
            >
              <BrowserFrame
                url={live}
                compact
                className="aspect-[16/10] transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
              >
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 t-strong text-sm font-medium bg-black/45 backdrop-blur-sm border bd-2 px-3.5 py-1.5 rounded-md">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Preview
                  </span>
                </span>
              </BrowserFrame>
            </button>
          ) : (
            <div className="w-full aspect-[16/10] flex flex-col items-center justify-center gap-3 text-center p-5">
              <span className="w-12 h-12 flex items-center justify-center rounded-lg s-1 border bd text-base font-bold t-body">
                {title.slice(0, 2)}
              </span>
              <div className="flex flex-wrap justify-center gap-1.5 max-w-[14rem]">
                {tags.slice(0, 3).map((tg, i) => (
                  <span key={i} className="s-1 t-faint py-0.5 px-1.5 rounded text-[10px] border bd">{tg}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-semibold t-strong">{title}</h3>
          <p className="mt-2 t-soft text-sm leading-relaxed line-clamp-2">{description}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tech, i) => (
              <span key={i} className="s-1 t-soft py-0.5 px-2 rounded text-xs border bd">{tech}</span>
            ))}
          </div>

          <div className="mt-auto pt-4 flex items-center gap-4 border-t bd">
            {live && <CardLink href={live}><IconExternal /> Live</CardLink>}
            {appStore && <CardLink href={appStore}><IconApple /> App Store</CardLink>}
            {code && <CardLink href={code}><IconGithub /> Code</CardLink>}
            {!hasLinks && status && (
              <span className="inline-flex items-center gap-1.5 text-sm t-faint">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {status === "wip" ? "Concept" : "Private"}
              </span>
            )}
            {image && !contain && (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="ml-auto text-sm font-medium t-faint hover:t-strong transition-colors"
              >
                Preview
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Preview modal */}
      {open && image && !contain && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${modalId}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8 animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-7xl animate-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 t-soft hover:t-strong text-3xl transition-colors"
            >
              &times;
            </button>
            <BrowserFrame url={live} className="shadow-2xl">
              <img src={image} alt={alt} className="w-full h-auto object-contain max-h-[62vh] bg-[var(--bg-soft)]" />
              <div className="flex items-center justify-between gap-3 p-5 border-t bd bg-[var(--bg-3)]">
                <div className="min-w-0">
                  <h4 id={`${modalId}-title`} className="text-base font-semibold t-strong truncate">{title}</h4>
                  <p className="text-sm t-soft mt-0.5 line-clamp-2">{description}</p>
                </div>
                {(live || appStore || code) && (
                  <a
                    href={live || appStore || code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 s-1 hover:s-2 border bd t-strong py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                  >
                    {live ? "Visit site" : appStore ? "App Store" : "Code"}
                  </a>
                )}
              </div>
            </BrowserFrame>
          </div>
        </div>
      )}
    </>
  );
}
