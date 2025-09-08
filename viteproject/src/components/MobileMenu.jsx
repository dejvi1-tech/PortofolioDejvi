import { useActiveSection } from "../hooks/useActiveSection";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const active = useActiveSection();
  return (
    <div
      id="mobile-menu"
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        aria-current={active === "home" ? "page" : undefined}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300
                    ${
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }
                    ${active === "home" ? "text-white" : "text-gray-300"}
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        aria-current={active === "about" ? "page" : undefined}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            ${active === "about" ? "text-white" : "text-gray-300"}
    `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        aria-current={active === "projects" ? "page" : undefined}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            ${active === "projects" ? "text-white" : "text-gray-300"}
    `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        aria-current={active === "contact" ? "page" : undefined}
        className={`text-2xl font-semibold my-4 transform transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            ${active === "contact" ? "text-white" : "text-gray-300"}
    `}
      >
        Contact
      </a>
    </div>
  );
};