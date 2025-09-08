import { useEffect } from "react";

export function CVModal({ open, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="CV Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close CV preview"
          onClick={onClose}
          className="absolute -top-10 right-0 md:-top-12 text-white/80 hover:text-white text-3xl"
        >
          &times;
        </button>

        <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
          {/* Preview area */}
          <div className="w-full bg-black">
            {/* If /cv.pdf exists in public/, this will render a PDF preview.
                Place your file at: viteproject/public/cv.pdf */}
            <object
              data="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
              type="application/pdf"
              className="w-full h-[70vh]"
            >
              <div className="w-full h-[70vh] flex items-center justify-center bg-black">
                <div className="text-center px-6">
                  <div className="text-2xl font-semibold mb-2">CV preview unavailable</div>
                  <p className="text-gray-400 mb-4">
                    Add your CV as <span className="text-blue-400 font-medium">viteproject/public/cv.pdf</span> to enable inline preview and downloads.
                  </p>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
                  >
                    Try open /cv.pdf
                  </a>
                </div>
              </div>
            </object>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between gap-3 p-4 border-t border-white/10">
            <div className="min-w-0">
              <h4 className="text-lg font-semibold truncate">Curriculum Vitae</h4>
              <p className="text-sm text-gray-400">
                Preview your CV inline and download the PDF.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="border border-white/20 text-gray-200 py-2 px-3 rounded hover:bg-white/10 transition"
              >
                Close
              </button>
              <a
                href="/cv.pdf"
                download="Dejvi-Kacollja-CV.pdf"
                className="bg-blue-500 text-white py-2 px-3 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}