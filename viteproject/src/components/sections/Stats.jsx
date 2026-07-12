import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Stats — a thin band of trust callouts directly under the hero.
 * Every figure is derived from real assets (no invented metrics):
 *   5+ years freelancing, 10+ shipped products, 3 live App Store apps,
 *   4,000+ EsimFly.tel customers worldwide.
 */
const useStats = (t) => [
  { value: t("stats_years_value"), label: t("stats_years_label") },
  { value: t("stats_products_value"), label: t("stats_products_label") },
  { value: t("stats_apps_value"), label: t("stats_apps_label") },
  { value: t("stats_users_value"), label: t("stats_users_label") },
];

export const Stats = () => {
  const { t } = useLanguage();
  const stats = useStats(t);

  return (
    <section id="stats" className="relative -mt-8 pb-8 md:pb-12" aria-label="Key facts">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <dl className="panel-strong grid grid-cols-2 lg:grid-cols-4 divide-y divide-[color:var(--border)] sm:divide-y-0 lg:divide-x lg:divide-[color:var(--border)]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center text-center px-4 py-7 md:py-8"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-4xl md:text-5xl font-extrabold tracking-tight t-strong">
                  {s.value}
                </dd>
                <span className="mt-2 text-xs md:text-sm t-soft leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
};
