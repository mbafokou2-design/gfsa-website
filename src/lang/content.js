import { faClock } from "@fortawesome/free-solid-svg-icons";

const content = {
  nav: {
    home:     { de: "Startseite",       en: "Home" },
    about:    { de: "Über uns",          en: "About Us" },
    services: { de: "Dienstleistungen",  en: "Services" },
    news:     { de: "Aktuelles",         en: "News" },
    contact:  { de: "Kontakt",           en: "Contact Us" },
  },

  hero: {
    eyebrow:  { de: "GFSA-DO e.V · Dortmund", en: "GFSA-DO e. V · Dortmund" },
    title:    { de: "Gambians Family Sisters Association", en: "Gambians Family Sisters Association" },
    subtitle: { de: "Gemeinsam stärker – für Gleichberechtigung, Integration und Entwicklung.", en: "Stronger together – for equality, integration and development." },
    cta:      { de: "Mehr erfahren", en: "Learn More" },
  },

  mission: {
    tag:     { de: "Unsere Mission", en: "Our Mission" },
    title:   { de: "Unsere Mission", en: "Our Mission" },
    c1Title: { de: "Frauen stärken",                       en: "Empowering Women" },
    c1Text:  { de: "Wir bieten Empowerment-Angebote für Frauen aus allen Hintergründen.", en: "We offer empowerment programs for women from all backgrounds." },
    c2Title: { de: "Förderung der Gendergleichberechtigung", en: "Promoting Gender Equality" },
    c2Text:  { de: "Wir setzen uns aktiv für die Gleichberechtigung aller Geschlechter in der Gesellschaft ein.", en: "We actively advocate for the equal rights of all genders in society." },
    c3Title: { de: "Integration fördern",                  en: "Fostering Integration" },
    c3Text:  { de: "Durch Bildung, Sprachkurse und kulturellen Austausch unterstützen wir Menschen mit Migrationsgeschichte.", en: "Through education, language courses and cultural exchange, we support people with a migration background." },
    c4Title: { de: "Internationale Projekte",              en: "International Projects" },
    c4Text:  { de: "Wir setzen uns für benachteiligte Kinder und Jugendliche in Ländern südlich der Sahara ein.", en: "We advocate for disadvantaged children and youth in sub-Saharan Africa, guided by the UN SDGs." },
  },

  about: {
    tag:        { de: "Über uns",     en: "About Us" },
    title:      { de: "Wer sind wir", en: "Who We Are" },
    intro:      {
      de: "Der Verein „Gambians Family Sisters Association in Dortmund (GFSA-DO e.V)“ ist ein gemeinnütziger Verein mit Sitz in Dortmund.\n\nZiel des Vereins ist die Förderung der Gleichberechtigung von Frauen und Männern, die Unterstützung von Jugend- und Altenhilfe sowie die Stärkung der Entwicklungszusammenarbeit. Im Mittelpunkt unserer Arbeit stehen Empowerment-Angebote für Frauen, die Förderung von Geschlechtergerechtigkeit und Diversität sowie die Sensibilisierung für gesellschaftliche und interkulturelle Themen.\n\nDurch Bildungsangebote, Workshops, Seminare, Sprachförderung sowie Freizeit- und generationsübergreifende Aktivitäten unterstützen wir die Integration, Teilhabe und persönliche Entwicklung von Menschen mit Migrationsgeschichte.\n\nDarüber hinaus engagiert sich die GFSA-DO e.V für internationale Projekte in den Bereichen Bildung, Gesundheit und Jugendförderung, insbesondere für benachteiligte Kinder und Jugendliche in Ländern südlich der Sahara. Dabei orientieren wir uns an den Nachhaltigkeitszielen (SDGs) der Agenda 2030 der Vereinten Nationen.\n\nDer Verein arbeitet selbstlos und verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke.\n\nEingetragen im Vereinsregister seit dem 18.11.2025.",
      en: "The association \"Gambians Family Sisters Association in Dortmund (GFSA-DO e.V)\" is a non-profit association based in Dortmund.\n\nThe association's goals include promoting gender equality between women and men, supporting youth and elderly welfare, and strengthening development cooperation. At the heart of our work are empowerment programs for women, the promotion of gender justice and diversity, and raising awareness of social and intercultural issues.\n\nThrough educational programs, workshops, seminars, language support, and leisure and intergenerational activities, we support the integration, participation and personal development of people with a migration background.\n\nIn addition, GFSA-DO e.V is committed to international projects in the areas of education, health and youth development, particularly for disadvantaged children and young people in sub-Saharan Africa. We are guided by the Sustainable Development Goals (SDGs) of the United Nations Agenda 2030.\n\nThe association operates selflessly and pursues exclusively and directly charitable purposes.\n\nRegistered in the association register since 18.11.2025."
    },
    goalsTitle: { de: "Unsere Ziele",        en: "Our Goals" },
    goals: [
      { de: "Förderung der Gleichberechtigung von Frauen und Männern",          en: "Promoting gender equality between women and men" },
      { de: "Unterstützung von Jugend- und Altenhilfe",                         en: "Supporting youth and elderly welfare" },
      { de: "Stärkung der Entwicklungszusammenarbeit",                          en: "Strengthening development cooperation" },
      { de: "Integration und Teilhabe von Menschen mit Migrationsgeschichte",   en: "Integration of people with a migration background" },
      { de: "Förderung von Geschlechtergerechtigkeit und Diversität",           en: "Promoting gender justice and diversity" },
    ],
    boardTitle:   { de: "Vorstand",    en: "Board of Directors" },
    board: [
      { role: { de: "Vorsitzende",                  en: "Chairwoman" },        name: "Kaddy Sanneh" },
      { role: { de: "Stellvertretende Vorsitzende",  en: "Deputy Chairwoman" }, name: "Nyima Sanyang" },
      { role: { de: "Schriftführerin",               en: "Secretary" },         name: "Lala Sillah" },
      { role: { de: "Schatzmeisterin",               en: "Treasurer" },         name: "Fatou Jadama" },
    ],
    imageCaption: { de: "Unser Team", en: "Our Team" },
  },

  services: {
    tag:      { de: "Dienstleistungen", en: "Services" },
    title:    { de: "Unsere Angebote",  en: "What We Offer" },
    subtitle: { de: "Wir bieten vielfältige Programme und Aktivitäten für unsere Gemeinschaft.", en: "We offer diverse programs and activities for our community." },
    list: [
      { title: { de: "Bildung & Workshops",    en: "Education & Workshops" },   text: { de: "Bildungsangebote, Seminare und Workshops zu gesellschaftlichen und interkulturellen Themen.", en: "Educational offerings, seminars and workshops on social and intercultural topics." } },
      { title: { de: "Sprachförderung",         en: "Language Support" },        text: { de: "Sprachkurse und Sprachförderung zur Unterstützung der Integration im Alltag.", en: "Language courses and support to help with everyday integration." } },
      { title: { de: "Freizeit & Generationen", en: "Leisure & Generations" },   text: { de: "Generationsübergreifende Freizeit- und Kulturaktivitäten für Jung und Alt.", en: "Cross-generational leisure and cultural activities for young and old." } },
      { title: { de: "Internationale Projekte", en: "International Projects" },  text: { de: "Projekte in Bildung, Gesundheit und Jugendförderung in Ländern südlich der Sahara.", en: "Projects in education, health and youth development in sub-Saharan Africa." } },
    ],
  },

  news: {
    tag:        { de: "Aktuelles",   en: "News" },
    title:      { de: "Aktuelles",   en: "Latest News" },
    subtitle:   { de: "Unsere neuesten Projekte und Veranstaltungen.", en: "Our latest projects and events." },
    youtubeLabel: {
    de: "Auf YouTube ansehen",
    en: "Watch on YouTube"
  },
    list: [
      { tag: { de: "Veranstaltung", en: "Event" },  title: { de: "Sommer BBQ 2026",     en: "Summer BBQ 2026" }, comingSoon: { de: "Demnächst",   en: "Coming Soon" }, paragraph: {faClock},    text: { de: "Ein fröhliches Gemeinschaftsevent für alle Mitglieder und Freunde der GFSA-DO e.V.", en: "A joyful community event for all members and friends of GFSA-DO e.V." } },
      { tag: { de: "Projekt",       en: "Project" }, youtube:"https://youtu.be/YXlNWDaZ1Pw?si=Rq2tNE6bw3rgATyi", title: { de: "Sisters Connect 2026", en: "Sisters Connect 2026" }, text: { de: "Ein Netzwerktreffen für Frauen – Raum für Austausch, Inspiration und gegenseitige Unterstützung.", en: "A networking gathering for women – a space for exchange, inspiration and mutual support." } },
    ],
  },

  contact: {
    tag:          { de: "Kontakt",             en: "Contact" },
    title:        { de: "Kontaktieren Sie uns", en: "Get In Touch" },
    subtitle:     { de: "Wir freuen uns, von Ihnen zu hören.", en: "We look forward to hearing from you." },
    addressTitle: { de: "Adresse",    en: "Address" },
    phoneTitle:   { de: "Telefon",    en: "Phone" },
    webTitle:     { de: "Unsere E-Mail-Adresse",   en: "Our email" },
    formTitle:    { de: "Schreiben Sie uns", en: "Send Us a Message" },
    nameLabel:    { de: "Name",       en: "Name" },
    emailLabel:   { de: "E-Mail",     en: "Email" },
    msgLabel:     { de: "Nachricht",  en: "Message" },
    namePH:       { de: "Ihr Name",          en: "Your Name" },
    emailPH:      { de: "Ihre E-Mail",        en: "Your Email" },
    msgPH:        { de: "Ihre Nachricht...",  en: "Your message..." },
    sendBtn:      { de: "Senden",     en: "Send Message" },
  },

  footer: {
    copy:     { de: "© 2026 GFSA-DO .e. V. Alle Rechte vorbehalten.", en: "© 2026 GFSA-DO .e. V. All rights reserved." },
    register: { de: "Eingetragen im Vereinsregister seit 18.11.2026", en: "Registered in the association register since 18.11.2026" },
  },
};

export default content;