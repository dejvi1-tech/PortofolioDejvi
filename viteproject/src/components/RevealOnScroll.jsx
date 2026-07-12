import { useEffect, useRef } from "react";

/**
 * Fades + lifts children into view on scroll. Pass `delay` (ms) to stagger
 * sibling items, and `className` to keep the wrapper as a layout cell
 * (e.g. `h-full` inside a grid). Disconnects once revealed.
 */
export const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
