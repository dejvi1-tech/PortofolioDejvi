import { useEffect } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg" aria-label="Primary navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Dejvi<span className="text-blue-500">.Tech</span>{" "}
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="w-10 h-10 flex items-center justify-center rounded md:hidden text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black z-40"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              aria-label="Go to Home section"
              className={`relative text-sm transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-blue-500 after:origin-left after:transition-transform after:duration-200 after:scale-x-0 hover:text-white ${
                active === "home" ? "text-white after:scale-x-100" : "text-gray-300"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              aria-label="Go to About section"
              className={`relative text-sm transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-blue-500 after:origin-left after:transition-transform after:duration-200 after:scale-x-0 hover:text-white ${
                active === "about" ? "text-white after:scale-x-100" : "text-gray-300"
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              aria-label="Go to Projects section"
              className={`relative text-sm transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-blue-500 after:origin-left after:transition-transform after:duration-200 after:scale-x-0 hover:text-white ${
                active === "projects" ? "text-white after:scale-x-100" : "text-gray-300"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              aria-label="Go to Contact section"
              className={`relative text-sm transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-blue-500 after:origin-left after:transition-transform after:duration-200 after:scale-x-0 hover:text-white ${
                active === "contact" ? "text-white after:scale-x-100" : "text-gray-300"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};