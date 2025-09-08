import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view and returns its id.
 * Sections observed: #home, #about, #projects, #contact
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.6, 0.75],
        root: null,
        rootMargin: "0px 0px -30% 0px", // favor sections more centered in viewport
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}