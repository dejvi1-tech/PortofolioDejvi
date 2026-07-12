/**
 * macOS-style browser window chrome around a screenshot. Gives web project
 * previews a polished "live site" feel: traffic-light dots + a URL pill derived
 * from the project's live link. `compact` shrinks the bar for grid thumbnails.
 */
function hostFromUrl(url) {
  if (!url) return "";
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  }
}

const IconLock = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <rect x="5" y="11" width="14" height="9" rx="2" strokeWidth="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeWidth="2" />
  </svg>
);

export function BrowserFrame({ url, compact = false, className = "", children }) {
  const host = hostFromUrl(url);
  const dot = compact ? "w-2 h-2" : "w-2.5 h-2.5";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border bd bg-[var(--bg-3)] shadow-[0_22px_48px_-24px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* Title bar */}
      <div
        className={`relative flex items-center gap-2 border-b bd bg-[var(--bg-3)] ${
          compact ? "h-7 px-2.5" : "h-9 px-3.5"
        }`}
      >
        <div className="flex items-center gap-1.5 shrink-0">
          <span className={`${dot} rounded-full bg-[#ff5f57]`} />
          <span className={`${dot} rounded-full bg-[#febc2e]`} />
          <span className={`${dot} rounded-full bg-[#28c840]`} />
        </div>
        {host && (
          <div
            className={`mx-auto flex items-center gap-1.5 min-w-0 max-w-[78%] rounded-md s-1 border bd t-faint ${
              compact ? "px-2 py-[1px] text-[10px]" : "px-2.5 py-0.5 text-[11px]"
            }`}
          >
            <IconLock className={compact ? "w-2.5 h-2.5 shrink-0" : "w-3 h-3 shrink-0"} />
            <span className="truncate">{host}</span>
          </div>
        )}
      </div>

      {/* Viewport */}
      <div className="shine-host relative flex-1 overflow-hidden bg-[var(--bg-soft)]">{children}</div>
    </div>
  );
}
