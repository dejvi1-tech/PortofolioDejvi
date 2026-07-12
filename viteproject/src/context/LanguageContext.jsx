import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    // ── Navbar ──
    nav_home: "Home",
    nav_about: "About",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_projects: "Work",
    nav_apps: "Apps",
    nav_skills: "Stack",
    nav_languages: "Languages",
    nav_contact: "Contact",
    nav_cv: "Download CV",

    // ── Hero ──
    home_badge: "Open to roles · Munich, Germany",
    home_role: "Frontend Developer",
    home_h1_pre: "I build ",
    home_h1_accent: "fast, modern web apps",
    home_h1_post: " people love to use.",
    home_stack: "React · Next.js · JavaScript · Tailwind CSS · Node.js",
    home_p1:
      "I'm Dejvi Kacollja — a frontend developer building fast, accessible, modern web apps with React, Next.js and TypeScript. I care about clean UI, performance, and the small details that make products feel effortless.",
    home_p2:
      "I also built and run EsimFly.tel — a live, international eSIM platform, from the React front end through to the Node/Supabase back end and Stripe checkout. Based in Munich, Germany.",
    home_cta_projects: "View Projects",
    home_cta_apps: "App Portfolio",
    home_cta_apps_badge: "3 live",
    home_cta_cv: "Download CV",
    home_cta_contact: "Get in touch",

    // ── Hero profile card ──
    card_exp_label: "Experience",
    card_exp_value: "Frontend Developer · React · Next.js · JavaScript",
    card_industry_label: "Industry",
    card_industry_value: "Software Development",
    card_location_label: "Location",
    card_location_value: "Munich, Germany",

    // ── Stats ──
    stats_years_value: "M.Sc.",
    stats_years_label: "Information Technology",
    stats_products_value: "10+",
    stats_products_label: "Projects built",
    stats_apps_value: "3",
    stats_apps_label: "Apps on the App Store",

    // Apps page (apps.html)
    apps_hero_badge: "iOS apps · indie building",
    apps_hero_title: "Mobile Apps",
    apps_hero_sub: "iOS apps I design and build with React Native and Swift & SwiftUI — shipped to the App Store.",
    apps_cta_view: "View apps",
    apps_cta_back: "Back to portfolio",
    apps_cta_contact: "Get in touch",
    apps_nav_portfolio: "Portfolio",
    apps_stats_downloads: "App Store downloads",
    apps_stats_live: "Live on the App Store",
    apps_stats_built: "Apps built",
    apps_section_sub: "My App Store portfolio in one place.",
    apps_open: "Open on App Store",
    apps_status_live: "Live",
    apps_status_review: "In review",
    apps_find_title: "Find me online",
    apps_find_sub: "Connect with me across platforms.",
    apps_social_linkedin_sub: "Professional profile",
    apps_social_page: "Personal page",
    apps_social_page_sub: "Main portfolio",
    apps_receiptly_tagline: "AI receipt scanner built with React Native",
    apps_receiptly_desc: "Built end to end with React Native and Expo: snap a receipt and AI automatically detects the merchant, totals, taxes, payment method and line items — turning paper into structured, searchable expense data, backed by a Cloudflare Worker API.",
    apps_steps_tagline: "Pedometer & fitness tracker built on HealthKit",
    apps_steps_desc: "A clean native pedometer — steps, calories, distance and active minutes, with daily/weekly/monthly views, streaks and a friends leaderboard.",
    apps_vaultic_tagline: "Privacy-first photo & file vault behind Face ID",
    apps_vaultic_desc: "Hide and protect sensitive photos and documents behind a passcode and Face ID — secure, on-device storage with nothing leaving your iPhone.",
    stats_users_value: "4,000+",
    stats_users_label: "eSIM users served",

    // ── About ──
    about_title: "About",
    about_subtitle:
      "A frontend developer who ships real, production-grade web products.",
    about_role_label: "Frontend Developer",
    about_card1_label: "Professional Direction",
    about_card1_title: "From formal study to shipping real products",
    about_card1_desc:
      "A foundation built through a B.Sc. and M.Sc. in Information Technology, an intensive full-stack academy, and Meta and Mozilla certificates — then applied to live, production projects.",
    about_card2_label: "Current Focus",
    about_card2_title: "Frontend web, built to last",
    about_card2_desc:
      "React, Next.js, JavaScript and Tailwind CSS — clean UI, reliable architecture, and real products like the eSIMFly platform.",
    about_p1:
      "I built my foundation in software through formal study. I earned my Bachelor of Science in Information Technology at Aleksandër Xhuvani University of Elbasan (2017–2020), then continued straight into a Master of Science in Information Technology at the same university (2020–2022), deepening my grounding in computer science, software engineering and modern development.",
    about_p2:
      "To turn that academic foundation into real engineering skill, I completed an intensive Full-Stack Developer program at the Software Development Academy (2022–2023), where I built 10+ web projects with React, Next.js, Node.js and Firebase, including dashboard applications wired to REST APIs and managed with Git/GitHub. I kept sharpening my craft with Meta's Front-End Developer Professional Certificate on Coursera (2023–2024) and a JavaScript Foundations certificate (2025).",
    about_p3:
      "I put all of that into practice by building real products — above all eSIMFly, a live international eSIM platform I built with React, Node.js, a Supabase/PostgreSQL backend and full Stripe checkout, owning authentication, the product catalog and payments end to end. That same React thinking ships on the App Store too: ReceiptlyAI, my AI receipt scanner built with React Native, live alongside StepsApp and Vaultic — plus a Flutter shopping app, a media downloader, and this portfolio. I'm now looking for a frontend role where I can keep building reliable, real-world products.",
    about_open: "Open to opportunities",
    about_h_location_title: "Albania → Munich",
    about_h_location_desc: "Relocation & EU Blue Card",
    about_h_focus_title: "Web · Mobile · SaaS",
    about_h_focus_desc: "Full-stack, end to end",
    about_h_lang_title: "English B2 · German B1",
    about_h_lang_desc: "Albanian (native)",
    about_h_ship_title: "Idea → Production",
    about_h_ship_desc: "Frontend, backend & infra",

    // ── Experience ──
    exp_title: "Experience",
    exp_subtitle:
      "My path from device & IT technician into software development.",
    exp_group_work: "Work",
    exp_group_edu: "Education",

    // ── Education ──
    edu_title: "Education",
    edu_subtitle: "The academic foundation behind the work.",
    edu_kmk: "Recognized in Germany — assessed as equivalent by the Standing Conference of the Ministers of Education (KMK).",
    edu_certs_title: "Certifications",

    // ── Languages ──
    lang_title: "Languages",
    lang_subtitle: "How I communicate across teams and clients.",
    lang_english: "English",
    lang_german: "German",
    lang_albanian: "Albanian",
    lang_turkish: "Turkish",
    prof_full: "Full professional proficiency",
    prof_elementary: "Elementary proficiency",
    prof_native: "Native or bilingual proficiency",

    // ── Projects (case studies) ──
    projects_title: "Selected Work",
    projects_subtitle:
      "Real projects I've designed and built — what they do, how I built them, and why they work.",
    projects_more: "More Projects",
    projects_more_sub: "A broader selection of web and client builds.",
    proj_live: "Live",
    proj_code: "Code",
    proj_app_store: "App Store",
    proj_preview: "Preview",
    proj_wip: "Concept",
    proj_review: "In review",
    proj_private: "Private",
    cs_problem: "Problem",
    cs_solution: "Solution",
    cs_tech: "Stack",
    cs_result: "Result",
    projects_cta_title: "Have a product to build?",
    projects_cta_text:
      "I'm available for frontend roles and freelance projects — onsite in Munich, hybrid, or remote.",
    projects_cta_button: "Get in touch",

    // ── Mobile Apps ──
    apps_title: "Mobile Apps",
    apps_subtitle:
      "Native iOS apps I've designed and built — live on the App Store, with more on the way.",
    apps_note:
      "More apps are on the way — this collection will get its own home at apps.dejvikacollja.com.",
    apps_cta: "View all apps",

    // ── Skills / Tech Stack ──
    skills_title: "Tech Stack",
    skills_subtitle:
      "The tools I use to design, build, and ship reliable products.",
    skills_frontend: "Frontend",
    skills_backend: "Backend & Data",
    skills_mobile: "Mobile",
    skills_ai: "AI & Integrations",
    skills_tooling: "Tooling & DevOps",

    // ── Contact ──
    contact_title: "Let's build something",
    contact_subtitle:
      "Looking for a frontend developer in Munich or remotely? I'd love to hear from you.",
    contact_get_in_touch: "Get in touch",
    contact_intro:
      "I'm open to frontend developer roles, freelance projects, or just a conversation about building products.",
    contact_availability:
      "Available for Munich-based, hybrid, remote, or relocation roles — eligible for the EU Blue Card.",
    contact_email: "Email",
    contact_location: "Location",
    contact_location_value: "Albania · Open to Munich, DE",
    contact_timezone: "Timezone",
    contact_follow: "Find me online",
    contact_send: "Send a message",
    contact_name: "Full name",
    contact_name_placeholder: "Your full name",
    contact_email_label: "Email address",
    contact_email_placeholder: "your.email@example.com",
    contact_message: "Message",
    contact_message_placeholder: "Tell me about the role or project...",
    contact_submit: "Send message",
    contact_sending: "Sending...",
    contact_success: "Message sent successfully! I'll get back to you soon.",
    contact_error: "Oops! Something went wrong. Please try again or email me directly.",

    // ── Footer ──
    footer_rights: "All rights reserved.",
    footer_built: "Built with React, Vite & Tailwind CSS",
  },

  de: {
    // ── Navbar ──
    nav_home: "Start",
    nav_about: "Über mich",
    nav_experience: "Erfahrung",
    nav_education: "Ausbildung",
    nav_projects: "Projekte",
    nav_apps: "Apps",
    nav_skills: "Stack",
    nav_languages: "Sprachen",
    nav_contact: "Kontakt",
    nav_cv: "Lebenslauf",

    // ── Hero ──
    home_badge: "Offen für Stellen · München, Deutschland",
    home_role: "Frontend-Entwickler",
    home_h1_pre: "Ich entwickle ",
    home_h1_accent: "schnelle, moderne Web-Apps",
    home_h1_post: ", die Menschen gerne nutzen.",
    home_stack: "React · Next.js · JavaScript · Tailwind CSS · Node.js",
    home_p1:
      "Ich bin Dejvi Kacollja — Frontend-Entwickler für schnelle, zugängliche, moderne Web-Apps mit React, Next.js und TypeScript. Mir sind sauberes UI, Performance und die kleinen Details wichtig, die Produkte mühelos wirken lassen.",
    home_p2:
      "Außerdem habe ich EsimFly.tel entwickelt und betreibe es — eine internationale Live-eSIM-Plattform, vom React-Frontend bis zum Node-/Supabase-Backend und Stripe-Checkout. Wohnhaft in München, Deutschland.",
    home_cta_projects: "Projekte ansehen",
    home_cta_apps: "App-Portfolio",
    home_cta_apps_badge: "3 live",
    home_cta_cv: "Lebenslauf",
    home_cta_contact: "Kontakt aufnehmen",

    // ── Hero profile card ──
    card_exp_label: "Erfahrung",
    card_exp_value: "Frontend-Entwickler · React · Next.js · JavaScript",
    card_industry_label: "Branche",
    card_industry_value: "Softwareentwicklung",
    card_location_label: "Standort",
    card_location_value: "München, Deutschland",

    // ── Stats ──
    stats_years_value: "M.Sc.",
    stats_years_label: "Informationstechnologie",
    stats_products_value: "10+",
    stats_products_label: "Projekte gebaut",
    stats_apps_value: "3",
    stats_apps_label: "Apps im App Store",

    // Apps-Seite (apps.html)
    apps_hero_badge: "iOS-Apps · Indie-Entwicklung",
    apps_hero_title: "Mobile Apps",
    apps_hero_sub: "iOS-Apps, die ich mit React Native und Swift & SwiftUI entwickle — veröffentlicht im App Store.",
    apps_cta_view: "Apps ansehen",
    apps_cta_back: "Zurück zum Portfolio",
    apps_cta_contact: "Kontakt aufnehmen",
    apps_nav_portfolio: "Portfolio",
    apps_stats_downloads: "App-Store-Downloads",
    apps_stats_live: "Live im App Store",
    apps_stats_built: "Entwickelte Apps",
    apps_section_sub: "Mein App-Store-Portfolio an einem Ort.",
    apps_open: "Im App Store öffnen",
    apps_status_live: "Live",
    apps_status_review: "In Prüfung",
    apps_find_title: "Online finden",
    apps_find_sub: "Vernetze dich mit mir auf allen Plattformen.",
    apps_social_linkedin_sub: "Berufsprofil",
    apps_social_page: "Persönliche Seite",
    apps_social_page_sub: "Haupt-Portfolio",
    apps_receiptly_tagline: "KI-Beleg-Scanner, entwickelt mit React Native",
    apps_receiptly_desc: "Von A bis Z mit React Native und Expo entwickelt: Beleg fotografieren und die KI erkennt automatisch Händler, Beträge, Steuern, Zahlungsart und Positionen — aus Papier werden strukturierte, durchsuchbare Ausgabendaten, gestützt auf eine Cloudflare-Worker-API.",
    apps_steps_tagline: "Schrittzähler & Fitness-Tracker auf HealthKit-Basis",
    apps_steps_desc: "Ein klarer nativer Schrittzähler — Schritte, Kalorien, Distanz und aktive Minuten, mit Tages-/Wochen-/Monatsansichten, Serien und einer Freunde-Rangliste.",
    apps_vaultic_tagline: "Foto- & Datei-Tresor mit Face ID — Privatsphäre zuerst",
    apps_vaultic_desc: "Sensible Fotos und Dokumente hinter Passcode und Face ID verstecken und schützen — sichere Speicherung auf dem Gerät, nichts verlässt dein iPhone.",
    stats_users_value: "4.000+",
    stats_users_label: "eSIM-Nutzer bedient",

    // ── About ──
    about_title: "Über mich",
    about_subtitle:
      "Ein Frontend-Entwickler, der echte, produktionsreife Web-Produkte liefert.",
    about_role_label: "Frontend-Entwickler",
    about_card1_label: "Berufliche Ausrichtung",
    about_card1_title: "Vom Studium zu echten, live betriebenen Produkten",
    about_card1_desc:
      "Ein Fundament aus B.Sc. und M.Sc. in Informationstechnologie, einer intensiven Full-Stack-Academy sowie Meta- und Mozilla-Zertifikaten — angewandt in echten Produktivprojekten.",
    about_card2_label: "Aktueller Fokus",
    about_card2_title: "Frontend-Web, gebaut für die Dauer",
    about_card2_desc:
      "React, Next.js, JavaScript und Tailwind CSS — sauberes UI, zuverlässige Architektur und echte Produkte wie die eSIMFly-Plattform.",
    about_p1:
      "Mein Fundament in der Softwareentwicklung habe ich durch ein formales Studium gelegt. Ich habe meinen Bachelor of Science in Informationstechnologie an der Universität Aleksandër Xhuvani in Elbasan (2017–2020) abgeschlossen und bin direkt in den Master of Science in Informationstechnologie an derselben Universität (2020–2022) übergegangen, der meine Grundlagen in Informatik, Software-Engineering und moderner Entwicklung vertieft hat.",
    about_p2:
      "Um dieses akademische Fundament in echtes Engineering-Können zu verwandeln, absolvierte ich ein intensives Full-Stack-Developer-Programm an der Software Development Academy (2022–2023), in dem ich über 10 Webprojekte mit React, Next.js, Node.js und Firebase gebaut habe — darunter Dashboard-Anwendungen mit REST-API-Anbindung und Versionsverwaltung über Git/GitHub. Anschließend vertiefte ich mein Können mit dem Meta Front-End Developer Professional Certificate auf Coursera (2023–2024) und einem JavaScript-Foundations-Zertifikat (2025).",
    about_p3:
      "All das setze ich in echten Produkten um — allen voran eSIMFly, eine internationale eSIM-Plattform, die ich mit React, Node.js, einem Supabase-/PostgreSQL-Backend und vollständigem Stripe-Checkout entwickelt habe und bei der ich Authentifizierung, Produktkatalog und Zahlungen von A bis Z verantworte. Dasselbe React-Denken liefere ich auch im App Store: ReceiptlyAI, mein mit React Native entwickelter KI-Beleg-Scanner, live neben StepsApp und Vaultic — dazu eine Flutter-Shopping-App, ein Media-Downloader und dieses Portfolio. Ich suche jetzt eine Frontend-Stelle, bei der ich weiter zuverlässige, praxisnahe Produkte bauen kann.",
    about_open: "Offen für Angebote",
    about_h_location_title: "Albanien → München",
    about_h_location_desc: "Relocation & Blaue Karte EU",
    about_h_focus_title: "Web · Mobile · SaaS",
    about_h_focus_desc: "Full-Stack, von A bis Z",
    about_h_lang_title: "Englisch B2 · Deutsch B1",
    about_h_lang_desc: "Albanisch (Muttersprache)",
    about_h_ship_title: "Idee → Produktion",
    about_h_ship_desc: "Frontend, Backend & Infra",

    // ── Experience ──
    exp_title: "Erfahrung",
    exp_subtitle:
      "Mein Weg vom Geräte- & IT-Techniker zur Softwareentwicklung.",
    exp_group_work: "Beruf",
    exp_group_edu: "Ausbildung",

    // ── Education ──
    edu_title: "Ausbildung",
    edu_subtitle: "Die akademische Grundlage hinter der Arbeit.",
    edu_kmk: "In Deutschland anerkannt — von der Kultusministerkonferenz (KMK) als gleichwertig anerkannt.",
    edu_certs_title: "Zertifikate",

    // ── Languages ──
    lang_title: "Sprachen",
    lang_subtitle: "Wie ich mit Teams und Kunden kommuniziere.",
    lang_english: "Englisch",
    lang_german: "Deutsch",
    lang_albanian: "Albanisch",
    lang_turkish: "Türkisch",
    prof_full: "Verhandlungssicher",
    prof_elementary: "Grundkenntnisse",
    prof_native: "Muttersprache oder zweisprachig",

    // ── Projects (case studies) ──
    projects_title: "Ausgewählte Projekte",
    projects_subtitle:
      "Echte Projekte, die ich entworfen und gebaut habe — was sie können, wie ich sie gebaut habe und warum sie funktionieren.",
    projects_more: "Weitere Projekte",
    projects_more_sub: "Eine breitere Auswahl an Web- und Kundenprojekten.",
    proj_live: "Live",
    proj_code: "Code",
    proj_app_store: "App Store",
    proj_preview: "Vorschau",
    proj_wip: "Konzept",
    proj_review: "In Prüfung",
    proj_private: "Privat",
    cs_problem: "Problem",
    cs_solution: "Lösung",
    cs_tech: "Stack",
    cs_result: "Ergebnis",
    projects_cta_title: "Ein Produkt zu bauen?",
    projects_cta_text:
      "Ich bin verfügbar für Frontend-Stellen und Freelance-Projekte — vor Ort in München, hybrid oder remote.",
    projects_cta_button: "Kontakt aufnehmen",

    // ── Mobile Apps ──
    apps_title: "Mobile Apps",
    apps_subtitle:
      "Native iOS-Apps, die ich entworfen und gebaut habe — live im App Store, weitere folgen.",
    apps_note:
      "Weitere Apps sind in Arbeit — diese Sammlung bekommt ihr eigenes Zuhause unter apps.dejvikacollja.com.",
    apps_cta: "Alle Apps ansehen",

    // ── Skills / Tech Stack ──
    skills_title: "Tech-Stack",
    skills_subtitle:
      "Die Werkzeuge, mit denen ich zuverlässige Produkte entwerfe, baue und ausliefere.",
    skills_frontend: "Frontend",
    skills_backend: "Backend & Daten",
    skills_mobile: "Mobile",
    skills_ai: "AI & Integrationen",
    skills_tooling: "Tooling & DevOps",

    // ── Contact ──
    contact_title: "Lassen Sie uns etwas bauen",
    contact_subtitle:
      "Suchen Sie einen Frontend-Entwickler in München oder remote? Ich freue mich auf Ihre Nachricht.",
    contact_get_in_touch: "Kontakt aufnehmen",
    contact_intro:
      "Ich bin offen für Frontend-Entwickler-Stellen, Freelance-Projekte oder einen Austausch über Produktentwicklung.",
    contact_availability:
      "Verfügbar für Stellen in München, Hybrid, Remote oder mit Relocation — qualifiziert für die Blaue Karte EU.",
    contact_email: "E-Mail",
    contact_location: "Standort",
    contact_location_value: "Albanien · Offen für München, DE",
    contact_timezone: "Zeitzone",
    contact_follow: "Online finden Sie mich",
    contact_send: "Nachricht senden",
    contact_name: "Vollständiger Name",
    contact_name_placeholder: "Ihr vollständiger Name",
    contact_email_label: "E-Mail-Adresse",
    contact_email_placeholder: "ihre.email@beispiel.de",
    contact_message: "Nachricht",
    contact_message_placeholder: "Erzählen Sie mir von der Stelle oder dem Projekt...",
    contact_submit: "Nachricht senden",
    contact_sending: "Wird gesendet...",
    contact_success: "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.",
    contact_error: "Ups! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt.",

    // ── Footer ──
    footer_rights: "Alle Rechte vorbehalten.",
    footer_built: "Gebaut mit React, Vite & Tailwind CSS",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Persisted choice follows the visitor across pages (portfolio ↔ apps)
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "de") return saved;
    } catch { /* private mode */ }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch { /* private mode */ }
  }, [lang]);

  const t = (key) => translations[lang]?.[key] ?? key;
  const toggleLang = () => setLang((prev) => (prev === "en" ? "de" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
