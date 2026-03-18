import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../../context/LanguageContext";

const DKAvatar = () => (
  <div className="relative w-40 h-40 mx-auto mb-6">
    {/* Outer glow ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-600 animate-spin-slow p-[3px]">
      <div className="w-full h-full rounded-full bg-black"></div>
    </div>
    {/* Inner gradient circle with initials */}
    <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
      <span className="text-4xl font-black text-white tracking-widest select-none" style={{ fontFamily: "JetBrains Mono, monospace" }}>DK</span>
    </div>
    {/* Floating dots */}
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
  </div>
);

const SkillChip = ({ name, icon, color }) => (
  <div className={`group flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-default ${color}`}>
    <span className="text-base">{icon}</span>
    <span>{name}</span>
  </div>
);

export const About = () => {
  const { t } = useLanguage();

  const frontendSkills = [
    { name: "React", icon: "⚛️", color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-cyan-500/20" },
    { name: "TypeScript", icon: "📘", color: "bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:shadow-blue-500/20" },
    { name: "Vue", icon: "💚", color: "bg-green-500/10 border-green-500/30 text-green-300 hover:bg-green-500/20 hover:shadow-green-500/20" },
    { name: "TailwindCSS", icon: "🎨", color: "bg-sky-500/10 border-sky-500/30 text-sky-300 hover:bg-sky-500/20 hover:shadow-sky-500/20" },
    { name: "Next.js", icon: "▲", color: "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:shadow-white/10" },
    { name: "Svelte", icon: "🧡", color: "bg-orange-500/10 border-orange-500/30 text-orange-300 hover:bg-orange-500/20 hover:shadow-orange-500/20" },
    { name: "Vite", icon: "⚡", color: "bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:shadow-purple-500/20" },
    { name: "Flutter", icon: "🐦", color: "bg-blue-400/10 border-blue-400/30 text-blue-200 hover:bg-blue-400/20 hover:shadow-blue-400/20" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢", color: "bg-green-500/10 border-green-500/30 text-green-300 hover:bg-green-500/20 hover:shadow-green-500/20" },
    { name: "Python", icon: "🐍", color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/20 hover:shadow-yellow-500/20" },
    { name: "AWS", icon: "☁️", color: "bg-orange-500/10 border-orange-500/30 text-orange-300 hover:bg-orange-500/20 hover:shadow-orange-500/20" },
    { name: "MongoDB", icon: "🍃", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:shadow-emerald-500/20" },
    { name: "GraphQL", icon: "🔗", color: "bg-pink-500/10 border-pink-500/30 text-pink-300 hover:bg-pink-500/20 hover:shadow-pink-500/20" },
    { name: "Java", icon: "☕", color: "bg-red-500/10 border-red-500/30 text-red-300 hover:bg-red-500/20 hover:shadow-red-500/20" },
    { name: "REST APIs", icon: "🔌", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:shadow-indigo-500/20" },
    { name: "Docker", icon: "🐳", color: "bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:shadow-blue-500/20" },
  ];

  const itSupportSkills = [
    { name: "Windows & Linux", icon: "🖥️", color: "bg-slate-500/10 border-slate-500/30 text-slate-300 hover:bg-slate-500/20 hover:shadow-slate-500/20" },
    { name: "Active Directory", icon: "🔐", color: "bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:shadow-blue-500/20" },
    { name: "TCP/IP & DNS", icon: "🌐", color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-cyan-500/20" },
    { name: "Microsoft 365", icon: "📧", color: "bg-sky-500/10 border-sky-500/30 text-sky-300 hover:bg-sky-500/20 hover:shadow-sky-500/20" },
    { name: "ITIL Framework", icon: "🎫", color: "bg-violet-500/10 border-violet-500/30 text-violet-300 hover:bg-violet-500/20 hover:shadow-violet-500/20" },
    { name: "Virtualization", icon: "📦", color: "bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:shadow-amber-500/20" },
    { name: "Azure / Entra ID", icon: "☁️", color: "bg-blue-600/10 border-blue-600/30 text-blue-200 hover:bg-blue-600/20 hover:shadow-blue-600/20" },
    { name: "Help Desk", icon: "🔧", color: "bg-orange-500/10 border-orange-500/30 text-orange-300 hover:bg-orange-500/20 hover:shadow-orange-500/20" },
  ];

  const achievements = [
    { number: "20+", label: t("about_stats_projects") },
    { number: "3+", label: t("about_stats_years") },
    { number: "100%", label: t("about_stats_satisfaction") },
    { number: "24/7", label: t("about_stats_availability") },
  ];

  const services = [
    {
      icon: "🎨",
      title: t("svc_fe_title"),
      desc: t("svc_fe_desc"),
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-400/60",
    },
    {
      icon: "🛠️",
      title: t("svc_it_title"),
      desc: t("svc_it_desc"),
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 hover:border-amber-400/60",
    },
    {
      icon: "📱",
      title: t("svc_mob_title"),
      desc: t("svc_mob_desc"),
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-400/60",
    },
    {
      icon: "☁️",
      title: t("svc_cloud_title"),
      desc: t("svc_cloud_desc"),
      color: "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-400/60",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent"></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {t("about_title")}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("about_subtitle")}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((stat, i) => (
              <div key={i} className="glass text-center p-6 hover:glass-strong hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story + Avatar */}
          <div className="glass-strong p-8 md:p-12 mb-12 hover:-translate-y-1 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">{t("about_story_title")}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{t("about_story_p1")}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{t("about_story_p2")}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl shrink-0">
                    👨‍💻
                  </div>
                  <div>
                    <div className="font-semibold text-blue-400">{t("about_learning")}</div>
                    <div className="text-gray-400 text-sm">{t("about_learning_sub")}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <DKAvatar />
                <div className="text-blue-400 font-semibold text-lg">{t("about_location")}</div>
                <div className="text-gray-400 text-sm mt-1">{t("about_location_sub")}</div>
                {/* Status badge */}
                <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">{t("about_open")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">{t("about_services_title")}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <div key={i} className={`bg-gradient-to-br ${s.color} border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                  <div className="font-bold text-white mb-2 text-sm">{s.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills — chip grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Frontend */}
            <div className="glass p-7 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-5 text-cyan-400 flex items-center gap-2">
                <span>🎨</span> {t("about_frontend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((s, i) => <SkillChip key={i} {...s} />)}
              </div>
            </div>

            {/* Backend */}
            <div className="glass p-7 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-5 text-green-400 flex items-center gap-2">
                <span>⚙️</span> {t("about_backend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((s, i) => <SkillChip key={i} {...s} />)}
              </div>
            </div>

            {/* IT Support */}
            <div className="glass p-7 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-5 text-amber-400 flex items-center gap-2">
                <span>🛠️</span> {t("about_it_support")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {itSupportSkills.map((s, i) => <SkillChip key={i} {...s} />)}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
                <span>🎓</span> {t("about_education")}
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 group">
                  <div className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">{t("about_edu_it")}</div>
                  <div className="text-gray-300">{t("about_edu_it_school")}</div>
                  <div className="text-gray-400 text-sm">{t("about_edu_it_date")}</div>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6 group">
                  <div className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">{t("about_edu_sda")}</div>
                  <div className="text-gray-400 text-sm mb-2">{t("about_edu_sda_date")}</div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>— Java Fundamentals & Advanced</li>
                    <li>— Software Engineering & Design Patterns</li>
                    <li>— HTML, CSS, JavaScript & React.js</li>
                    <li>— Spring Framework & Final Projects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-8 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center gap-3">
                <span>💼</span> {t("about_experience")}
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6 group">
                  <div className="text-lg font-semibold text-orange-400 group-hover:text-orange-300 transition-colors">{t("about_exp_cofounder")}</div>
                  <div className="text-gray-300">EsimFly.tel</div>
                  <div className="text-gray-400 text-sm mb-2">2023 – Present</div>
                  <p className="text-gray-300 text-sm">{t("about_exp_cofounder_desc")}</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6 group">
                  <div className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">{t("about_exp_freelance")}</div>
                  <div className="text-gray-400 text-sm mb-2">2021 – Present</div>
                  <p className="text-gray-300 text-sm">{t("about_exp_freelance_desc")}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
