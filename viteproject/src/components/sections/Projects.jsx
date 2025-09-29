import { ProjectCard } from "../ProjectCard";
import placeholder from "../../assets/projects/placeholder.svg";

/**
 * Image wiring
 * - Drop PNG/JPG/SVG thumbnails into: src/assets/projects/
 * - Name them to match keys below (e.g., weather.jpg, todo.png, restaurant.jpg, esimfly.jpg, esim-frontend.png)
 * - The mapping below will auto-pick them; unknown names fallback to the placeholder.
 */
const rawImages = import.meta.glob("../../assets/projects/*.{png,jpg,jpeg,svg}", { eager: true });
const imagesMap = Object.fromEntries(
  Object.entries(rawImages).map(([p, m]) => [p, m.default || m])
);
function getImage(name) {
  const dash = name.replace(/\s+/g, "-").toLowerCase();
  const candidates = [
    `${name}.png`, `${name}.jpg`, `${name}.jpeg`, `${name}.svg`,
    `${name.toLowerCase()}.png`, `${name.toLowerCase()}.jpg`, `${name.toLowerCase()}.jpeg`, `${name.toLowerCase()}.svg`,
    `${dash}.png`, `${dash}.jpg`, `${dash}.jpeg`, `${dash}.svg`,
  ];
  for (const [path, url] of Object.entries(imagesMap)) {
    const base = path.split("/").pop().toLowerCase();
    if (candidates.includes(base)) return url;
  }
  return placeholder;
}

const projects = [
  // Latest Projects (Featured)
  {
    key: "dejvi-generator",
    title: "Dejvi Generator",
    description:
      "Advanced QR Code generator website with custom styling options and instant download functionality. Features include batch generation, custom colors, logos, and multiple export formats for professional use.",
    tags: ["React", "JavaScript", "QR Generation", "UI/UX"],
    link: "https://dejvigenerator.netlify.app/",
    image: getImage("dejvi-generator"),
    alt: "Dejvi Generator preview",
    featured: true,
    latest: true,
  },
  {
    key: "devi-agency",
    title: "Devi Agency",
    description:
      "Professional digital agency website showcasing comprehensive services, portfolio gallery, and team presentation with modern responsive design and smooth animations.",
    tags: ["React", "Javascript", "Agency", "Portfolio"],
    link: "https://deviagency.netlify.app/",
    image: getImage("devi-agency"),
    alt: "Devi Agency preview",
    featured: true,
    latest: true,
  },
  {
    key: "rewe-app-clone",
    title: "Rewe App Clone",
    description:
      "Flutter-based iOS application clone of the Rewe grocery app for the German company. Features modern mobile UI with product browsing, shopping cart functionality, and native iOS performance. Note: Some product photos may not load as this is optimized for iOS, not web deployment.",
    tags: ["Flutter", "iOS", "Mobile App", "E-commerce"],
    link: "https://reweappclone.netlify.app/",
    image: getImage("ReweAppClone"),
    alt: "Rewe App Clone preview",
    featured: true,
    latest: true,
  },
  {
    key: "resume-ai-app",
    title: "Resume AI Creator",
    description:
      "AI-powered resume creator application built with Flutter for frontend development. Features intelligent resume generation, customizable templates, and user-friendly interface for creating professional resumes. Frontend-only implementation with modern UI/UX design.",
    tags: ["Flutter", "AI", "Resume", "Frontend"],
    link: "https://github.com/dejvi1-tech/resumeAi-App",
    image: getImage("resumeapp"),
    alt: "Resume AI Creator app preview",
    featured: true,
    latest: true,
  },
  {
    key: "e-commerce",
    title: "Mobile Shop E-commerce",
    description:
      "Full-featured e-commerce platform for mobile devices and accessories with admin panel, inventory management, secure checkout, payment integration, and responsive design for optimal mobile shopping experience.",
    tags: ["React", "JavaScript", "Vite", "E-commerce"],
    link: "https://dejvimobileshop.netlify.app/",
    image: getImage("e-commerce"),
    alt: "Mobile Shop E-commerce preview",
    featured: true,
  },
  {
    key: "esimFly",
    title: "EsimFly",
    description:
      "Innovative eSIM platform providing global internet connectivity. Features country selection, data plan comparison, instant eSIM delivery, and seamless activation for travelers worldwide.",
    tags: ["eSIM", "Travel", "Global Data", "Business"],
    link: "https://esimfly.al",
    image: getImage("esimfly"),
    alt: "EsimFly website preview",
    featured: true,
  },
  // Additional Projects
  {
    key: "esimFrontend",
    title: "eSIM Website Frontend",
    description:
      "Modern frontend interface for eSIM services featuring responsive design, intuitive data plan browsing, streamlined purchase flow, and optimized performance for mobile and desktop users.",
    tags: ["React", "Vite", "TailwindCSS", "Frontend"],
    link: "https://esimdejvi.netlify.app/",
    image: getImage("esim-frontend"),
    alt: "eSIM Website Frontend preview",
  },
  {
    key: "weather",
    title: "Weather App",
    description:
      "Clean and intuitive weather application providing real-time weather information, forecasts, and location-based weather data with a user-friendly interface and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://dejvikacollja.netlify.app",
    image: getImage("weather"),
    alt: "Weather App preview",
  },
  {
    key: "todo",
    title: "To-Do List App",
    description:
      "Efficient task management application built with React and Vite, featuring task creation, completion tracking, priority settings, and local storage for productivity enhancement.",
    tags: ["React", "Vite", "Productivity"],
    link: "https://dejvi-todoapp.netlify.app/",
    image: getImage("todo"),
    alt: "To-Do List App preview",
  },
  {
    key: "restaurant",
    title: "Restaurant Website",
    description:
      "Professional restaurant website featuring menu showcase, online reservations, location information, and responsive design optimized for both desktop and mobile dining experiences.",
    tags: ["HTML", "CSS", "JavaScript", "Restaurant"],
    link: "https://dejvi-restoraunt.netlify.app/",
    image: getImage("restaurant"),
    alt: "Restaurant Website preview",
  },
];

export const Projects = () => {
  const latestProjects = projects.filter(p => p.latest);
  const featuredProjects = projects.filter(p => p.featured && !p.latest);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="min-h-screen py-16 md:py-20 relative">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              My Projects
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              A showcase of my latest work and professional projects
            </p>
          </div>

          {/* Latest Projects Section - Mobile First */}
          {latestProjects.length > 0 && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4">Latest Projects</h3>
              </div>

              {/* Simple Grid for Mobile */}
              <div className="space-y-6 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0 mb-12">
                {latestProjects.map((p) => (
                  <div key={p.key} className="relative">
                    {/* Simple NEW badge for mobile */}
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
                        NEW
                      </span>
                    </div>

                    <div className="bg-gray-900 border border-green-500/30 rounded-lg p-4">
                      <ProjectCard
                        title={p.title}
                        description={p.description}
                        tags={p.tags}
                        link={p.link}
                        image={p.image}
                        alt={p.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
                  Featured Work
                </h3>
              </div>

              <div className="space-y-6 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0 mb-12">
                {featuredProjects.map((p) => (
                  <div key={p.key} className="bg-gray-900 border border-blue-500/30 rounded-lg p-4">
                    <ProjectCard
                      title={p.title}
                      description={p.description}
                      tags={p.tags}
                      link={p.link}
                      image={p.image}
                      alt={p.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-4">
                  Additional Projects
                </h3>
              </div>

              <div className="space-y-6 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:space-y-0 mb-12">
                {otherProjects.map((p) => (
                  <div key={p.key} className="bg-gray-900 border border-gray-500/30 rounded-lg p-4">
                    <ProjectCard
                      title={p.title}
                      description={p.description}
                      tags={p.tags}
                      link={p.link}
                      image={p.image}
                      alt={p.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Simple CTA Section */}
          <div className="text-center">
            <div className="bg-gray-900 border border-blue-500/30 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Have a Project in Mind?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's create something amazing together!
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded font-medium"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};