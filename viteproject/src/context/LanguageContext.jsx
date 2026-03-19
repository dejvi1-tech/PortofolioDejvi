import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Home
    home_badge: "Available for work in Germany",
    home_greeting: "Hi, I'm",
    home_subtitle: "Hey there! I'm a",
    home_role: "Front-End Engineer & IT Professional",
    home_location: "based in Germany,",
    home_passion: "who builds performant web apps with a",
    home_ux: "great user experience",
    home_status: "Currently building amazing web experiences",
    home_cta_work: "View My Work",
    home_cta_cv: "View Resume",

    // About
    about_title: "About Me",
    about_subtitle: "Front-End Engineer & IT Professional based in Germany",
    about_stats_projects: "Projects Completed",
    about_stats_years: "Years Experience",
    about_stats_satisfaction: "Client Satisfaction",
    about_stats_availability: "Availability",
    about_story_title: "My Story",
    about_story_p1:
      "I'm a Front-End Engineer & IT Professional based in Germany, combining web development expertise with strong IT infrastructure skills. With a Bachelor's in Information Technology, I build performant, accessible web applications while supporting the systems they run on.",
    about_story_p2:
      "I specialize in React, TypeScript, and modern frontend architectures, with hands-on experience in IT support, system administration, and cloud services. As co-founder of EsimFly.al, I lead frontend development and technical operations for a growing eSIM platform serving customers across Europe.",
    about_learning: "Always Learning",
    about_learning_sub: "Staying current with latest technologies",
    about_location: "Based in Germany",
    about_location_sub: "Available across Europe & remotely",
    about_frontend: "Frontend",
    about_backend: "Backend",
    about_it_support: "IT Support",
    about_education: "Education",
    about_experience: "Experience",
    about_edu_it: "Information Technology",
    about_edu_it_school: "Aleksandër Xhuvani University of Elbasan",
    about_edu_it_date: "Bachelor's Degree (2017–2020)",
    about_edu_sda: "Software Development Academy",
    about_edu_sda_date: "Mar 2023 – Dec 2023",
    about_exp_cofounder: "Co-Founder",
    about_exp_cofounder_desc:
      "Building innovative eSIM solutions to help people stay connected worldwide. Leading frontend development and user experience design.",
    about_exp_freelance: "Freelance Developer",
    about_exp_freelance_desc:
      "Creating custom web applications and helping businesses establish their digital presence with modern, responsive designs.",

    // Projects
    projects_title: "My Projects",
    projects_subtitle: "A selection of recent work and side projects",
    projects_latest: "Latest Projects",
    projects_featured: "Featured Work",
    projects_additional: "Additional Projects",
    projects_cta_title: "Have a Project in Mind?",
    projects_cta_text: "Let's work together to bring your ideas to life",
    projects_cta_button: "Get in Touch",

    // Contact
    contact_title: "Let's Work Together",
    contact_subtitle:
      "Have a project in mind? I'd love to hear from you. Let's create something amazing together.",
    contact_get_in_touch: "Get in Touch",
    contact_intro:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_location: "Location",
    contact_location_value: "Germany",
    contact_follow: "Follow Me",
    contact_send: "Send a Message",
    contact_name: "Full Name",
    contact_name_placeholder: "Your full name",
    contact_email_label: "Email Address",
    contact_email_placeholder: "your.email@example.com",
    contact_message: "Message",
    contact_message_placeholder: "Tell me about your project or just say hello...",
    contact_submit: "Send Message",
    contact_sending: "Sending...",
    contact_success: "Message sent successfully! I'll get back to you soon.",
    contact_error: "Oops! Something went wrong. Please try again.",

    // Footer
    footer_rights: "All rights reserved.",
    footer_made: "Made in Germany",

    // About – What I Do
    about_services_title: "What I Do",
    about_open: "Open to opportunities",
    svc_fe_title: "Frontend Development",
    svc_fe_desc: "React, TypeScript, TailwindCSS — fast, accessible, mobile-first web apps.",
    svc_it_title: "IT Support & Admin",
    svc_it_desc: "System administration, Active Directory, Microsoft 365, help desk & networking.",
    svc_mob_title: "Mobile Apps",
    svc_mob_desc: "Cross-platform apps with Flutter for iOS & Android.",
    svc_cloud_title: "Cloud & DevOps",
    svc_cloud_desc: "AWS, Azure, Docker deployments and CI/CD pipelines.",

    // Contact – timezone
    contact_timezone: "Timezone",
  },
  de: {
    // Navbar
    nav_home: "Start",
    nav_about: "Über mich",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",

    // Home
    home_badge: "Verfügbar für Arbeit in Deutschland",
    home_greeting: "Hallo, ich bin",
    home_subtitle: "Ich bin ein",
    home_role: "Front-End Engineer & IT-Fachkraft",
    home_location: "mit Sitz in Deutschland,",
    home_passion: "der performante Webanwendungen mit einer",
    home_ux: "hervorragenden User Experience",
    home_status: "Aktuell baue ich moderne Web-Erlebnisse",
    home_cta_work: "Meine Arbeit",
    home_cta_cv: "Lebenslauf",

    // About
    about_title: "Über mich",
    about_subtitle: "Front-End Engineer & IT-Fachkraft mit Sitz in Deutschland",
    about_stats_projects: "Projekte abgeschlossen",
    about_stats_years: "Jahre Erfahrung",
    about_stats_satisfaction: "Kundenzufriedenheit",
    about_stats_availability: "Erreichbarkeit",
    about_story_title: "Meine Geschichte",
    about_story_p1:
      "Ich bin Front-End Engineer & IT-Fachkraft mit Sitz in Deutschland. Ich verbinde Webentwicklung mit fundierten IT-Infrastruktur-Kenntnissen. Mit einem Bachelor in Informationstechnologie entwickle ich performante, barrierefreie Webanwendungen und betreue die Systeme, auf denen sie laufen.",
    about_story_p2:
      "Ich bin spezialisiert auf React, TypeScript und moderne Frontend-Architekturen, mit praktischer Erfahrung in IT-Support, Systemadministration und Cloud-Diensten. Als Mitgründer von EsimFly.al leite ich die Frontend-Entwicklung und den technischen Betrieb einer wachsenden eSIM-Plattform für Kunden in ganz Europa.",
    about_learning: "Immer am Lernen",
    about_learning_sub: "Stets auf dem neuesten Stand der Technik",
    about_location: "Standort Deutschland",
    about_location_sub: "Europaweit & remote verfügbar",
    about_frontend: "Frontend",
    about_backend: "Backend",
    about_it_support: "IT-Support",
    about_education: "Ausbildung",
    about_experience: "Berufserfahrung",
    about_edu_it: "Informationstechnologie",
    about_edu_it_school: "Universität Aleksandër Xhuvani, Elbasan",
    about_edu_it_date: "Bachelor-Abschluss (2017–2020)",
    about_edu_sda: "Software Development Academy",
    about_edu_sda_date: "März 2023 – Dez. 2023",
    about_exp_cofounder: "Mitgründer",
    about_exp_cofounder_desc:
      "Entwicklung innovativer eSIM-Lösungen für weltweite Konnektivität. Leitung der Frontend-Entwicklung und UX-Design.",
    about_exp_freelance: "Freiberuflicher Entwickler",
    about_exp_freelance_desc:
      "Erstellung individueller Webanwendungen und Unterstützung von Unternehmen beim Aufbau ihrer digitalen Präsenz mit modernem, responsivem Design.",

    // Projects
    projects_title: "Meine Projekte",
    projects_subtitle: "Eine Auswahl aktueller Arbeiten und Nebenprojekte",
    projects_latest: "Neueste Projekte",
    projects_featured: "Ausgewählte Arbeiten",
    projects_additional: "Weitere Projekte",
    projects_cta_title: "Haben Sie ein Projekt im Sinn?",
    projects_cta_text: "Lassen Sie uns zusammenarbeiten, um Ihre Ideen umzusetzen",
    projects_cta_button: "Kontakt aufnehmen",

    // Contact
    contact_title: "Zusammenarbeiten",
    contact_subtitle:
      "Haben Sie ein Projekt im Sinn? Ich freue mich von Ihnen zu hören. Lassen Sie uns gemeinsam etwas Großartiges schaffen.",
    contact_get_in_touch: "Kontakt aufnehmen",
    contact_intro:
      "Ich bin immer offen für neue Möglichkeiten, interessante Projekte oder einfach einen Austausch über Technologie und Entwicklung.",
    contact_email: "E-Mail",
    contact_phone: "Telefon",
    contact_location: "Standort",
    contact_location_value: "Deutschland",
    contact_follow: "Folgen Sie mir",
    contact_send: "Nachricht senden",
    contact_name: "Vollständiger Name",
    contact_name_placeholder: "Ihr vollständiger Name",
    contact_email_label: "E-Mail-Adresse",
    contact_email_placeholder: "ihre.email@beispiel.de",
    contact_message: "Nachricht",
    contact_message_placeholder: "Erzählen Sie mir von Ihrem Projekt oder sagen Sie einfach Hallo...",
    contact_submit: "Nachricht senden",
    contact_sending: "Wird gesendet...",
    contact_success: "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.",
    contact_error: "Ups! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",

    // Footer
    footer_rights: "Alle Rechte vorbehalten.",
    footer_made: "Made in Germany",

    // About – What I Do
    about_services_title: "Was ich tue",
    about_open: "Offen für Angebote",
    svc_fe_title: "Frontend-Entwicklung",
    svc_fe_desc: "React, TypeScript, TailwindCSS — schnelle, barrierefreie, mobile-first Web-Apps.",
    svc_it_title: "IT-Support & Administration",
    svc_it_desc: "Systemadministration, Active Directory, Microsoft 365, Helpdesk & Netzwerk.",
    svc_mob_title: "Mobile Apps",
    svc_mob_desc: "Plattformübergreifende Apps mit Flutter für iOS & Android.",
    svc_cloud_title: "Cloud & DevOps",
    svc_cloud_desc: "AWS, Azure, Docker-Deployments und CI/CD-Pipelines.",

    // Contact – timezone
    contact_timezone: "Zeitzone",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("de");

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
