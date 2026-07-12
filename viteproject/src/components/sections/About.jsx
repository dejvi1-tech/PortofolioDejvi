import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

/**
 * About — emrehanci.de style: a flowing first-person narrative on the left,
 * two "focus" cards on the right. No photo (the hero already carries it).
 */
const FocusCard = ({ label, title, desc }) => (
  <div className="panel-strong p-7">
    <div className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-2">{label}</div>
    <h3 className="text-lg md:text-xl font-bold t-strong leading-snug">{title}</h3>
    <p className="mt-2 text-sm t-soft leading-relaxed">{desc}</p>
  </div>
);

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 items-start">
            {/* Left: heading + narrative */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight t-strong">
                {t("about_title")}
              </h2>
              <div className="mt-6 space-y-4 max-w-2xl">
                <p className="t-body leading-relaxed">{t("about_p1")}</p>
                <p className="t-soft leading-relaxed">{t("about_p2")}</p>
                <p className="t-soft leading-relaxed">{t("about_p3")}</p>
              </div>
            </div>

            {/* Right: focus cards */}
            <div className="space-y-5">
              <FocusCard
                label={t("about_card1_label")}
                title={t("about_card1_title")}
                desc={t("about_card1_desc")}
              />
              <FocusCard
                label={t("about_card2_label")}
                title={t("about_card2_title")}
                desc={t("about_card2_desc")}
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
