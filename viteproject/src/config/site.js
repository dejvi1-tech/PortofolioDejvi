/**
 * Central site configuration.
 *
 * Multi-domain seam: the portfolio lives on the main domain, and the mobile
 * apps showcase will later move to its own subdomain. Keeping the domains and
 * external URLs here means the future split is a one-line config change rather
 * than a refactor — every component reads these constants instead of hardcoding.
 *
 *   dejvikacollja.com        → main portfolio (this site)
 *   apps.dejvikacollja.com   → mobile apps showcase (future)
 */
export const site = {
  name: "Dejvi Kacollja",
  role: "Full Stack Developer",
  email: "dejvikacollja@gmail.com",

  domains: {
    main: "dejvikacollja.com",
    apps: "apps.dejvikacollja.com",
  },

  /**
   * Where the "View all apps" CTA points.
   * Today: in-page anchor to the Mobile Apps section (subdomain not live yet).
   * Later: flip to `https://apps.dejvikacollja.com` to complete the split.
   */
  appsUrl: "#apps",
  appsLive: false,

  social: {
    github: "https://github.com/dejvi1-tech",
    linkedin: "https://www.linkedin.com/in/dejvi-kacollja/",
    email: "mailto:dejvikacollja@gmail.com",
  },
};

export default site;
