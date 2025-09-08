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
      <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
        <button
          type="button"
          aria-label={`Preview ${title}`}
          onClick={() => setOpen(true)}
          className="group relative h-40 md:h-48 w-full overflow-hidden rounded-lg mb-4 bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-3 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-gray-200 border border-white/10">
              Click to preview
            </span>
          </div>
        </button>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Preview
          </button>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500/50 text-blue-400 py-2 px-4 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Visit Site
          </a>
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