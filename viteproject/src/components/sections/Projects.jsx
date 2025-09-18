import { RevealOnScroll } from "../RevealOnScroll";
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
  {
    key: "e-commerce",
    title: "Mobile Shop E-commerce",
    description:
      "I created a simple e-commerce shop for selling phones and accessories, with a clean modern design, an admin panel to manage products, checkout and payment features, and a mobile-friendly layout so customers can browse, add to cart, and buy easily.",
    tags: ["React", "JavaScript", "Vite"],
    link: "https://dejvimobileshop.netlify.app/",
    image: getImage("e-commerce"),
    alt: "Mobile Shop E-commerce preview",
  },
  {
    key: "weather",
    title: "Weather App",
    description:
      "Weather with Dejvi is a simple application that provides information about weather conditions in a specific location. Users can view the current temperature.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://dejvikacollja.netlify.app",
    image: getImage("weather"),
    alt: "Weather App preview",
  },
  {
    key: "todo",
    title: "To-Do List App",
    description:
      "Organize your work and life with a simple and fast task manager built with React and Vite.",
    tags: ["React", "Vite"],
    link: "https://dejvi-todoapp.netlify.app/",
    image: getImage("todo"),
    alt: "To-Do List App preview",
  },
  {
    key: "restaurant",
    title: "Restaurant Website",
    description: "Restaurant website for a restaurant business.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://dejvi-restoraunt.netlify.app/",
    image: getImage("restaurant"),
    alt: "Restaurant Website preview",
  },
  {
    key: "esimFly",
    title: "EsimFly",
    description:
      "Welcome to eSIMFly.al! eSIMFly.al is a website that gives you internet anywhere in the world. Choose a country and a data plan, buy the eSIM, and use it instantly on your phone.",
    tags: ["eSIM", "Travel", "Global Data", "Website"],
    link: "https://esimfly.al",
    image: getImage("esimfly"),
    alt: "EsimFly website preview",
  },
  {
    key: "esimFrontend",
    title: "eSIM Website Frontend",
    description:
      "Website phone e‑SIM — responsive frontend for browsing and purchasing data plans, focused on clean UX and performance.",
    tags: ["React", "Vite", "TailwindCSS"],
    link: "https://esimdejvi.netlify.app/",
    image: getImage("esim-frontend"),
    alt: "eSIM Website Frontend preview",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard
                key={p.key}
                title={p.title}
                description={p.description}
                tags={p.tags}
                link={p.link}
                image={p.image}
                alt={p.alt}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};