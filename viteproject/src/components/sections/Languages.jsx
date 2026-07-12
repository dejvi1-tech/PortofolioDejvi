import { SectionHeading } from "../SectionHeading";
import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

const useLangs = (t) => [
  { name: t("lang_english"), level: t("prof_full") },
  { name: t("lang_german"), level: t("prof_elementary") },
  { name: t("lang_albanian"), level: t("prof_native") },
];

export const Languages = () => {
  const { t } = useLanguage();
  const langs = useLangs(t);

  return (
    <section id="languages" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Languages"
          title={t("lang_title")}
          subtitle={t("lang_subtitle")}
          align="left"
        />

        <RevealOnScroll>
          <div className="panel-strong p-6 md:p-8 max-w-3xl">
            <ul className="divide-y divide-[color:var(--border)]">
              {langs.map((l) => (
                <li
                  key={l.name}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 first:pt-0 last:pb-0"
                >
                  <span className="t-strong font-semibold">{l.name}</span>
                  <span className="t-soft text-sm">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
