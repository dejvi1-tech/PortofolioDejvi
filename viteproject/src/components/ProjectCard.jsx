import { useEffect, useId, useState } from "react";

export function ProjectCard({ title, description, tags = [], link, image, alt, accentBorder }) {
  const [open, setOpen] = useState(false);
  const modalId = useId();

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

  return (
    <>
      <div className={`group bg-gray-900 border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] ${accentBorder ? `${accentBorder} hover:border-green-400/60` : "border-gray-700/50 hover:border-blue-500/40"}`}>

        {/* Image with overlay on hover */}
        <button
          type="button"
          aria-label={`Preview ${title}`}
          onClick={() => setOpen(true)}
          className="relative w-full h-44 sm:h-48 overflow-hidden block"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Fallback */}
          <div className="hidden w-full h-full bg-gray-800 items-center justify-center text-gray-500 absolute inset-0">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              Click to preview
            </span>
          </div>
        </button>

        {/* Card body */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-200">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{description}</p>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-600/15 text-blue-300 py-0.5 px-2.5 rounded-full text-xs border border-blue-500/25 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex-1 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white py-2 px-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-3 rounded-xl text-sm font-medium transition-all duration-200 text-center flex items-center justify-center gap-1.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Site
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${modalId}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl transition-colors"
            >
              &times;
            </button>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-gray-950 shadow-2xl">
              <img
                src={image}
                alt={alt}
                className="w-full h-auto object-contain max-h-[65vh] bg-gray-950"
              />
              <div className="flex items-center justify-between gap-3 p-5 border-t border-white/10">
                <div className="min-w-0">
                  <h4 id={`${modalId}-title`} className="text-lg font-bold text-white truncate">{title}</h4>
                  <p className="text-sm text-gray-400 mt-0.5">{description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="border border-white/20 text-gray-300 py-2 px-4 rounded-xl hover:bg-white/10 transition-all text-sm"
                  >
                    Close
                  </button>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl font-medium transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-sm flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
