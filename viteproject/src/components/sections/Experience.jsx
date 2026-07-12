import { SectionHeading } from "../SectionHeading";
import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Reverse-chronological work history — matches the CV exactly. Content (proper
 * nouns) stays in English regardless of UI language. Rail + accent nodes come
 * from the `.timeline-item` utility in index.css.
 */
const entries = [
  {
    title: "IT & Web Developer",
    org: "LDA Digital Solutions",
    location: "Tirana, Albania",
    date: "2023 — 2024",
    summary:
      "Moved fully into development — IT support alongside building and maintaining web applications.",
    points: [
      "Provided technical IT support and system administration for internal infrastructure",
      "Helped build and maintain the company's web applications",
      "Diagnosed and resolved technical issues and optimised systems",
    ],
  },
  {
    title: "Mobile Device Technician — Service & Sales",
    org: "A&D Service Phone",
    location: "Elbasan, Albania",
    date: "2017 — 2023",
    summary:
      "Six years of hands-on technical work — and where I first started writing software.",
    points: [
      "Technical customer service for smartphones and laptops — diagnosis, repair, software installation",
      "Advised and supported customers across mobile and consumer tech",
      "Built an internal software tool to streamline our service process — my first real taste of building software",
    ],
  },
];

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Career"
          title={t("exp_title")}
          subtitle={t("exp_subtitle")}
          align="left"
        />

        <RevealOnScroll>
          <div className="max-w-3xl">
            {entries.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="text-[11px] font-mono uppercase tracking-widest t-faint">
                  {e.date} · {e.location}
                </div>
                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-lg md:text-xl font-bold t-strong">{e.title}</h3>
                  <span className="text-accent font-semibold">@ {e.org}</span>
                </div>
                <p className="mt-2 text-sm t-soft leading-relaxed">{e.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {e.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm t-body">
                      <svg className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
