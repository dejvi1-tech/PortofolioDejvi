/**
 * Reusable section heading: small indigo eyebrow, solid title, muted subtitle.
 */
export const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${alignment} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight t-strong">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 t-soft text-base md:text-lg leading-relaxed max-w-2xl ${align === "left" ? "" : "mx-auto"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
