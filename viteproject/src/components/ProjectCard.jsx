import { useEffect, useId, useState } from "react";

export function ProjectCard({ title, description, tags = [], link, image, alt }) {
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
      <div className="group glass p-6 rounded-xl border border-white/10 hover:glass-strong hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all duration-300">
        <button
          type="button"
          aria-label={`Preview ${title}`}
          onClick={() => setOpen(true)}
          className="group/image relative h-40 sm:h-48 md:h-56 w-full overflow-hidden rounded-lg mb-6 bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover/image:scale-110 group-hover/image:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover/image:opacity-100 transition-opacity" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-300">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto border border-white/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Click to preview</span>
            </div>
          </div>

          {/* Corner badge */}
          <div className="absolute top-3 right-3 opacity-0 group-hover/image:opacity-100 transition-opacity">
            <span className="inline-flex items-center rounded-md bg-blue-500/80 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white border border-white/20">
              View Details
            </span>
          </div>
        </button>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm border border-blue-500/20 transition-all hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(59,130,246,0.25)] hover:border-blue-500/40"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Preview
            </button>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-blue-500/50 text-blue-400 py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:border-blue-400 hover:text-blue-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-center"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${modalId}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 md:-top-12 text-white/80 hover:text-white text-3xl"
            >
              &times;
            </button>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
              <img
                src={image}
                alt={alt}
                className="w-full h-auto object-contain max-h-[70vh] bg-black"
              />
              <div className="flex items-center justify-between gap-3 p-4 border-t border-white/10">
                <div className="min-w-0">
                  <h4 id={`${modalId}-title`} className="text-lg font-semibold truncate">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="border border-white/20 text-gray-200 py-2 px-3 rounded hover:bg-white/10 transition"
                  >
                    Close
                  </button>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-3 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
                  >
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