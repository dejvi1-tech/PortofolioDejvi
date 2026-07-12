import { SectionHeading } from "../SectionHeading";
import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

/* Degrees (most recent first). Proper nouns stay as-is across languages. */
const degrees = [
  {
    key: "msc",
    degree: "M.Sc. Information Technology",
    org: "Aleksandër Xhuvani University of Elbasan",
    location: "Elbasan, Albania",
    date: "2020 — 2022",
    kmk: false,
  },
  {
    key: "bsc",
    degree: "B.Sc. Information Technology",
    org: "Aleksandër Xhuvani University of Elbasan",
    location: "Elbasan, Albania",
    date: "2017 — 2020",
    kmk: true,
  },
];

const certs = [
  { title: "Full-Stack Developer", org: "Software Development Academy", date: "2022 — 2023" },
  { title: "Front-End Developer Professional Certificate", org: "Meta · Coursera", date: "2023 — 2024" },
  { title: "JavaScript Foundations", org: "Mozilla Developer Network", date: "2025" },
];

const IconCheck = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title={t("edu_title")}
          subtitle={t("edu_subtitle")}
          align="left"
        />

        <RevealOnScroll>
          {/* Degrees */}
          <div className="grid md:grid-cols-2 gap-5">
            {degrees.map((d) => (
              <div key={d.key} className="panel-strong p-7 flex flex-col">
                <div className="text-[11px] font-mono uppercase tracking-widest t-faint">
                  {d.date} · {d.location}
                </div>
                <h3 className="mt-2 text-lg md:text-xl font-bold t-strong leading-snug">{d.degree}</h3>
                <p className="mt-1 t-soft text-sm">{d.org}</p>

                {d.kmk && (
                  <div className="mt-4 rounded-xl border border-[color:var(--border-strong)] s-1 p-3.5">
                    <span className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold">
                      <IconCheck /> Recognized in Germany (KMK)
                    </span>
                    <p className="mt-1.5 text-xs t-soft leading-relaxed">{t("edu_kmk")}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-6 panel p-6 md:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-widest t-faint mb-4">{t("edu_certs_title")}</h3>
            <ul className="divide-y divide-[color:var(--border)]">
              {certs.map((c, i) => (
                <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 py-3 first:pt-0 last:pb-0">
                  <span className="t-strong font-semibold text-sm">
                    {c.title} <span className="t-soft font-normal">— {c.org}</span>
                  </span>
                  <span className="t-faint text-xs font-mono">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
