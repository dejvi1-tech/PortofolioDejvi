import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Vue", level: 85, icon: "💚" },
    { name: "TypeScript", level: 80, icon: "📘" },
    { name: "TailwindCSS", level: 95, icon: "🎨" },
    { name: "Svelte", level: 75, icon: "🧡" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "AWS", level: 70, icon: "☁️" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "GraphQL", level: 75, icon: "🔗" },
  ];

  const achievements = [
    { number: "20+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Availability" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent"></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate developer crafting digital experiences that matter
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((stat, index) => (
              <div
                key={index}
                className="glass text-center p-6 hover:glass-strong hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="glass-strong p-8 md:p-12 mb-12 hover:-translate-y-1 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">My Story</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm a passionate Front-End Engineer based in Albania with a deep love for creating
                  beautiful, functional, and user-friendly web applications. My journey in tech started
                  with curiosity and has evolved into a mission to build digital experiences that truly matter.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I specialize in modern React development, with expertise in building scalable
                  applications using the latest technologies. I'm also the co-founder of EsimFly.al,
                  where I help people stay connected worldwide through innovative eSIM solutions.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                  <div>
                    <div className="font-semibold text-blue-400">Always Learning</div>
                    <div className="text-gray-400 text-sm">Staying current with latest technologies</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl animate-float">
                    👋
                  </div>
                  <div className="text-blue-400 font-semibold">Based in Albania</div>
                  <div className="text-gray-400 text-sm">Available worldwide remotely</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-8 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                <span className="text-3xl">🎨</span> Frontend Skills
              </h3>
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center gap-2 text-gray-300">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-3">
                <span className="text-3xl">⚙️</span> Backend Skills
              </h3>
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center gap-2 text-gray-300">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-green-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
                <span className="text-3xl">🎓</span> Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="text-lg font-semibold text-blue-400">Information Technology</div>
                  <div className="text-gray-300">Aleksandër Xhuvani University of Elbasan</div>
                  <div className="text-gray-400 text-sm">Bachelor's Degree (2017–2020)</div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <div className="text-lg font-semibold text-cyan-400">Software Development Academy</div>
                  <div className="text-gray-400 text-sm mb-2">Mar 2023 – Dec 2023</div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Java Fundamentals & Advanced</li>
                    <li>• Software Engineering & Design Patterns</li>
                    <li>• HTML, CSS, JavaScript & React.js</li>
                    <li>• Spring Framework & Final Projects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-8 hover:glass-strong hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center gap-3">
                <span className="text-3xl">💼</span> Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="text-lg font-semibold text-orange-400">Co-Founder</div>
                  <div className="text-gray-300">EsimFly.al</div>
                  <div className="text-gray-400 text-sm mb-2">2023 - Present</div>
                  <p className="text-gray-300 text-sm">
                    Building innovative eSIM solutions to help people stay connected worldwide.
                    Leading frontend development and user experience design.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="text-lg font-semibold text-blue-400">Freelance Developer</div>
                  <div className="text-gray-400 text-sm mb-2">2021 - Present</div>
                  <p className="text-gray-300 text-sm">
                    Creating custom web applications and helping businesses establish their
                    digital presence with modern, responsive designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};