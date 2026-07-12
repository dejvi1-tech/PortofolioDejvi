import { CaseStudyCard } from "../CaseStudyCard";
import { ProjectCard } from "../ProjectCard";
import { SectionHeading } from "../SectionHeading";
import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Image wiring
 * - Drop PNG/JPG/SVG thumbnails into: src/assets/projects/
 * - Name them to match the getImage("name") calls below.
 * - Unknown names fall back to `null` (cards show a neutral placeholder).
 */
const rawImages = import.meta.glob("../../assets/projects/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const imagesMap = Object.fromEntries(
  Object.entries(rawImages).map(([p, m]) => [p, m.default || m])
);
function getImage(name) {
  const dash = name.replace(/\s+/g, "-").toLowerCase();
  const candidates = [
    `${name}.webp`, `${name}.png`, `${name}.jpg`, `${name}.jpeg`, `${name}.svg`,
    `${name.toLowerCase()}.webp`, `${name.toLowerCase()}.png`, `${name.toLowerCase()}.jpg`, `${name.toLowerCase()}.jpeg`, `${name.toLowerCase()}.svg`,
    `${dash}.webp`, `${dash}.png`, `${dash}.jpg`, `${dash}.jpeg`, `${dash}.svg`,
  ];
  for (const [path, url] of Object.entries(imagesMap)) {
    const base = path.split("/").pop().toLowerCase();
    if (candidates.includes(base)) return url;
  }
  return null;
}

/* ── Featured projects ── */
const featured = [
  {
    key: "esimfly",
    category: "Live product",
    title: "EsimFly.tel",
    tagline: "International eSIM platform",
    image: getImage("esimfly"),
    alt: "EsimFly.tel eSIM platform homepage",
    description:
      "A complete eSIM store where travellers buy a data plan and receive their eSIM instantly. I designed and built the React front end and the full ordering flow.",
    highlights: [
      "Instant eSIM delivery by email & QR code",
      "Stripe checkout with automated fulfilment",
      "React front end · Node & Supabase back end",
    ],
    metric: "4,000+ customers worldwide",
    tags: ["React", "TypeScript", "Node.js", "Supabase", "Stripe"],
    live: "https://esimfly.tel",
  },
  {
    key: "flowpilot",
    category: "SaaS dashboard",
    title: "FlowPilot",
    tagline: "All-in-one dashboard for small businesses",
    image: getImage("flowpilot"),
    alt: "FlowPilot SaaS dashboard preview",
    description:
      "A clean, data-dense dashboard that brings subscriptions, invoicing, ticketing and analytics together in one place.",
    highlights: [
      "Subscriptions, invoices & tickets in one UI",
      "Reusable, component-driven architecture",
      "Fast, responsive and fully accessible",
    ],
    metric: "Live demo",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://flowpilotsaas.netlify.app/",
  },
];

/* ── Additional projects ── */
const more = [
  { key: "devi-agency", title: "Devi Agency", description: "Digital agency site with services, portfolio gallery, and team presentation.", tags: ["React", "JavaScript"], image: getImage("devi-agency"), alt: "Devi Agency preview", live: "https://deviagency.netlify.app/" },
  { key: "e-commerce", title: "Mobile Shop E-commerce", description: "E-commerce platform with admin panel, inventory management, and secure checkout.", tags: ["React", "Vite"], image: getImage("e-commerce"), alt: "Mobile Shop preview", live: "https://dejvimobileshop.netlify.app/" },
  { key: "rewe-app-clone", title: "Rewe App Clone", description: "Flutter iOS clone of the Rewe grocery app — product browsing and shopping cart.", tags: ["Flutter", "iOS"], image: getImage("ReweAppClone"), alt: "Rewe App Clone preview", live: "https://reweappclone.netlify.app/" },
  { key: "todo", title: "To-Do List App", description: "Task manager with completion tracking, priorities, and local storage.", tags: ["React", "Vite"], image: getImage("todo"), alt: "To-Do App preview", live: "https://dejvi-todoapp.netlify.app/" },
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Work"
          title={t("projects_title")}
          subtitle={t("projects_subtitle")}
          align="left"
        />

        {/* Featured projects */}
        <div className="space-y-8">
          {featured.map((p, i) => (
            <RevealOnScroll key={p.key} delay={i * 90}>
              <CaseStudyCard {...p} reverse={i % 2 === 1} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Additional */}
        <div className="mt-20 pt-14 border-t bd">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold t-strong">{t("projects_more")}</h3>
              <p className="t-soft text-sm mt-1">{t("projects_more_sub")}</p>
            </div>
            <span className="hidden sm:inline-flex shrink-0 items-center s-1 border bd t-faint text-xs font-medium py-1 px-3 rounded-full">
              {more.length} projects
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((p, i) => (
              <RevealOnScroll key={p.key} delay={(i % 3) * 90} className="h-full">
                <ProjectCard {...p} />
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 panel-strong p-8 md:p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-3 t-strong">{t("projects_cta_title")}</h3>
          <p className="t-soft mb-6 max-w-lg mx-auto">{t("projects_cta_text")}</p>
          <a
            href="mailto:dejvikacollja@gmail.com"
            className="group/cta inline-flex items-center gap-2 s-1 hover:s-2 border bd t-strong py-3 px-7 rounded-xl font-semibold transition-colors"
          >
            {t("projects_cta_button")}
            <svg className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
