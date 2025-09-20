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
      <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg">
        <button
          type="button"
          aria-label={`Preview ${title}`}
          onClick={() => setOpen(true)}
          className="relative h-32 sm:h-40 md:h-48 w-full overflow-hidden rounded-lg mb-4 bg-gray-700 border border-gray-600"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full bg-gray-700 items-center justify-center text-gray-400">
            <span>Image Loading...</span>
          </div>
        </button>

        <div className="space-y-3">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tech, key) => (
              <span
                key={key}
                className="bg-blue-600/20 text-blue-400 py-1 px-2 rounded text-xs border border-blue-600/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium"
            >
              Preview
            </button>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-blue-500 text-blue-400 py-2 px-4 rounded text-sm font-medium text-center"
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