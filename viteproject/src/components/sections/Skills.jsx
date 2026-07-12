import { SectionHeading } from "../SectionHeading";
import { SkillBadge } from "../SkillBadge";
import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

const IconDevice = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v3M13 21h4a1 1 0 001-1v-7a1 1 0 00-1-1h-4a1 1 0 00-1 1v7a1 1 0 001 1zM15 18h.01" />
  </svg>
);
const IconLayout = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 9h16M9 9v11" />
  </svg>
);
const IconServer = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5M5 12a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 00-2-2M5 12h14M8 16h.01" />
  </svg>
);
const IconSpark = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);
const IconTools = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4l-7 7 1.5 1.5M11 4l3 3M11 4l3-1 6 6-1 3-3-3M5 12.5L4 16l-1 5 5-1 3.5-1M5 12.5l4 4" />
  </svg>
);

const groups = [
  {
    key: "frontend",
    icon: <IconLayout />,
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML & CSS", "Bootstrap", "Responsive UI", "TypeScript (basics)"],
  },
  {
    key: "backend",
    icon: <IconServer />,
    skills: ["Node.js", "Express.js", "REST APIs", "Supabase", "PostgreSQL", "Firebase", "SQL"],
  },
  {
    key: "mobile",
    icon: <IconDevice />,
    skills: ["React Native", "Expo", "Swift & SwiftUI", "Flutter", "Dart"],
  },
  {
    key: "tooling",
    icon: <IconTools />,
    skills: ["Git", "GitHub", "Vite", "Netlify", "Vercel", "Figma", "VS Code"],
  },
];

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title={t("skills_title")}
          subtitle={t("skills_subtitle")}
          align="left"
        />

        <RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((g) => (
              <div key={g.key} className="panel p-7 transition-colors hover:bd-2">
                <h3 className="flex items-center gap-2.5 text-base font-semibold mb-5 t-strong">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg s-1 border bd text-accent">
                    {g.icon}
                  </span>
                  {t(`skills_${g.key}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <SkillBadge key={s}>{s}</SkillBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
