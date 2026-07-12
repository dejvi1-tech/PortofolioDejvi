import { useEffect, useRef, useState } from "react";

/**
 * Animates the first number found in `text` from 0 to its value when the badge
 * scrolls into view, preserving any prefix/suffix and the original thousands
 * grouping (e.g. "4,000+ customers" counts 0 → 4,000). Strings without a number
 * (e.g. "Live demo") render unchanged. Honors prefers-reduced-motion.
 */
export function CountUp({ text, duration = 1400, className = "" }) {
  const ref = useRef(null);
  const match = String(text).match(/(\d[\d.,]*)/);
  const target = match ? parseInt(match[1].replace(/[.,]/g, ""), 10) : 0;
  const grouped = match ? /[.,]/.test(match[1]) : false;
  const prefix = match ? String(text).slice(0, match.index) : "";
  const suffix = match ? String(text).slice(match.index + match[1].length) : "";

  const [n, setN] = useState(0);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf, start;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const tick = (now) => {
          if (!start) start = now;
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setN(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [match, target, duration]);

  if (!match) return <span className={className}>{text}</span>;

  const shown = grouped ? n.toLocaleString("en-US") : String(n);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
