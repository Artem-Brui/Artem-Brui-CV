import {
  Bootstrap,
  Bulma,
  Css,
  DeFlag,
  Express,
  Figma,
  Git,
  Html,
  Javascript,
  Mongodb,
  React,
  Redux,
  Sass,
  Socket,
  Tailwind,
  Typescript,
} from "../components/SVGs/Icons";

const skills = [
  {
    name: "html",
    logo: Html,
    logoColor: "#e95829",
    descreption:
      "Die Grundlage jeder Website, eine Markupsprache zum Strukturieren und Anzeigen von Inhalten.",
  },
  {
    name: "css",
    logo: Css,
    logoColor: "#27a3d9",
    descreption:
      "Eine Sprache zum Styling von Webseiten, zur Definition von Farben, Schriftarten, Abständen und anderen visuellen Elementen.",
  },
  {
    name: "bootstrap",
    logo: Bootstrap,
    logoColor: "#7711f2",
    descreption:
      "Ein Set vorgefertigter Stile und Komponenten, um schnell responsive und stilvolle Webseiten zu erstellen.",
  },
  {
    name: "bulma",
    logo: Bulma,
    logoColor: "#09caad",
    descreption:
      "Ein leichtgewichtiges CSS-Framework mit eleganten Komponenten, das den Aufbau moderner Webseiten vereinfacht.",
  },
  {
    name: "tailwind",
    logo: Tailwind,
    logoColor: "#24cabb",
    descreption:
      "Ein leichtgewichtiges CSS-Framework mit eleganten Komponenten, das den Aufbau moderner Webseiten vereinfacht.",
  },
  {
    name: "sass",
    logo: Sass,
    logoColor: "#cb6197",
    descreption:
      "Ein CSS-Präprozessor, der Variablen, Verschachtelung und andere Funktionen hinzufügt, um das Styling einfacher und organisierter zu gestalten.",
  },
  {
    name: "git",
    logo: Git,
    logoColor: "#e84e32",
    descreption:
      "Ein Versionskontrollsystem zur Nachverfolgung und Verwaltung von Codeänderungen, ideal für Teamarbeit.",
  },
  {
    name: "figma",
    logo: Figma,
    logoColor: "#29befe",
    descreption:
      "Ein leistungsstarkes Design- und Prototyping-Tool, das Echtzeit-Zusammenarbeit und optimierte UI/UX-Workflows ermöglicht.",
  },
  {
    name: "javascript",
    logo: Javascript,
    logoColor: "#c19e38",
    descreption:
      "Eine Programmiersprache, die Websites interaktiv macht (z. B. Schaltflächen, Pop-ups).",
  },
  {
    name: "typescript",
    logo: Typescript,
    logoColor: "#0076c6",
    descreption:
      'Eine "aufgepowerte" Version von JavaScript mit Typüberprüfung, die die Entwicklung vereinfacht und Fehler reduziert.',
  },
  {
    name: "react",
    logo: React,
    logoColor: "#0bb4d2",
    descreption:
      "Eine Bibliothek zum Erstellen interaktiver Benutzeroberflächen mit Komponenten.",
  },
  {
    name: "redux",
    logo: Redux,
    logoColor: "#7348b6",
    descreption:
      "Ein Tool zur Verwaltung des Anwendungszustands, das die Arbeit mit Daten erleichtert.",
  },
  {
    name: "express",
    logo: Express,
    logoColor: "#000000",
    descreption:
      "Ein minimalistisches Backend-Framework zum Erstellen von APIs und Webanwendungen auf Node.js-Basis.",
  },
  {
    name: "socket.io",
    logo: Socket,
    logoColor: "#000000",
    descreption:
      "Eine Echtzeit-Bidirektionale Kommunikationsbibliothek für Webanwendungen.",
  },
  {
    name: "mongodb",
    logo: Mongodb,
    logoColor: "#559034",
    descreption:
      "Eine Datenbank, in der Daten als JSON-ähnliche Objekte gespeichert werden, ideal für moderne Anwendungen.",
  },
];

const projects = [
  {
    name: "Das MET-Museum",
    link: "https://artem-brui.github.io/MET-Landing-page",
    previewImage: "https://artem-brui.github.io/MET-Landing-page/preview.webp",
    created: "Mai 2024",
    challenges: [
      "Einbindung eines Menüs ohne Verwendung von JavaScript.",
      "Die gleiche Komponente (Kontakte im Header) wird abhängig von der Menü-Sichtbarkeit zweimal verwendet.",
      "Styling von Eingabefeldern während der Autovervollständigung.",
    ],
    skills: ["git", "html", "css", "sass", "figma"],
  },
  {
    name: "2048-Spiel",
    link: "https://artem-brui.github.io/Game-2048/",
    previewImage: "https://artem-brui.github.io/Game-2048/preview.webp",
    created: "Oktober 2024",
    challenges: [
      "Flexibles Bewegen von Zahlen auf dem Spielfeld.",
      "Animation während der Verschmelzung von Zahlen.",
    ],
    skills: ["git", "html", "css", "sass", "javascript"],
  },
  {
    name: "Mein Portfolio",
    link: "https://artem-brui.github.io/Game-2048/",
    previewImage: "https://artem-brui.github.io/Game-2048/preview.webp",
    created: "Dezember 2024",
    challenges: [
      "Implementierung von Themenverwaltung.",
      "Implementierung von Mehrsprachigkeitsmodi.",
      "Abrundung des Fähigkeits-Dashboards.",
      "Verarbeitung von Kontaktdaten über Google-Scripts.",
    ],
    skills: [
      "git",
      "html",
      "css",
      "sass",
      "figma",
      "javascript",
      "typescript",
      "react",
    ],
  },
];

const jobs = [
  {
    company: "DCI Digital Career Institute",
    location: "Berlin, Deutschland",
    jobType: "Remote",
    role: "Tutor im Full-Stack-Webentwickler-Kurs",
    challenges: [
      "Knappe Zeitrahmen für das Studium neuer Themen bis zum Niveau, sie zu unterrichten.",
    ],
    achievements: [
      "Effektives Lernen neuer Inhalte in begrenzter Zeit erlernt.",
      "Während der Arbeit und Ausbildung wurden über 70 praktische Aufgaben gelöst (SCSS, JavaScript, TypeScript, React, Express, MongoDB).",
      "Durchführung von Live-Coding-Sitzungen mit Aufgabenlösungen in Echtzeit mit Studenten.",
    ],
    startDate: "01.05.2024",
    endDate: "18.02.2025",
  },
  {
    company: "Air Team",
    location: "Brno, Tschechien",
    jobType: "Hybrid",
    role: "Spezialist für digitales Marketing",
    achievements: [
      "Umsatzsteigerung bei einigen Produkten um mehr als 50% durch die von mir erstellte Werbung.",
      "Erstellung der Grundstruktur einer neuen Website mit Elementor (WordPress) und eigenen Komponenten.",
      "Implementierung einer neuen Website in das Hubspot-System des Unternehmens, einschließlich der Erstellung und Konfiguration aller erforderlichen Verbindungen.",
    ],
    challenges: [
      "Selbststudium neuer Technologien wie Google Ads, Einbindung und Anpassung von Ads-Analysetools.",
      "Erstellung benutzerdefinierter Website-Komponenten mit HTML/CSS als neuen Technologien für sich selbst in kurzer Zeit.",
    ],
    startDate: "01.01.2021",
    endDate: "01.10.2023",
  },
  {
    company: "Ukrainian Agricultural Market",
    location: "Kiew, Ukraine",
    jobType: "Vor Ort",
    role: "Leiter der Einkaufsabteilung für Landwirtschaft",
    achievements: [
      "Drei Einkaufsabteilungen wurden von Grund auf neu geschaffen.",
      "Über 50 Einkaufsspezialisten wurden in effizientem Einkauf geschult.",
      "Zahlreiche Verträge über die Lieferung von mehr als einer Million Tonnen Getreide wurden abgeschlossen und erfüllt.",
    ],
    challenges: [
      "Implementierung einer IT-Lösung in das bestehende Mitarbeitersystem.",
      "Erweiterung der Abteilungsaktivitäten um die Erfüllung von Exportlieferverträgen.",
    ],
    startDate: "01.09.2009",
    endDate: "31.12.2020",
  },
];

export const content = {
  Header: {
    ownerName: "Artem Brui",
    languageFlag: DeFlag,
  },
  HomeSection: {
    sectionName: "Home",
    greating: ["Hallo,", "Ich bin Artem - ", "Full Stack Entwickler"],
    descreption:
      "Fokussiert auf die Erstellung von hochwertigem Code, den Aufbau effektiver Kommunikation und die Unterstützung des Teams bei der Erreichung von Erfolg.",
    callToAction: "Kontakt",
    counter: {
      projectsAmount: projects.length,
      projectsTitle: "Eigene Projekte",
      carrierStarted: "2021",
      carrierTitle: "Jahre Erfahrung",
      skillsAmount: skills.length,
      skillsTitle: "Technische Fähigkeiten",
    },
  },
  AboutSection: {
    sectionName: "Über mich",
    greating: "Hallo!",
    paragraphsList: [
      {
        paragraph:
          "Mein Name ist Artem und ich spezialisiere mich auf Webentwicklung mit JavaScript, TypeScript, React, Express und MongoDB usw.",
      },
      {
        paragraph:
          "Ich bin eine hochmotivierte Person und ewiger Optimist, der sich darauf konzentriert, klaren, präzisen und robusten Code zu schreiben. Ich strebe danach, niemals aufzuhören zu lernen und mich zu verbessern.",
      },
      {
        paragraph:
          "Mit Erfahrung in der Lösung komplexer Probleme, im Projektmanagement und in der Datenanalyse entwickle ich Weblösungen, die Unternehmensstrategien effektiv unterstützen.",
      },
      {
        paragraph:
          "Wenn ich keinen Code schreibe, widme ich meine Zeit dem Radfahren, Sport, Laufen und glücklichen Momenten mit meiner Frau und meinen zwei wunderbaren Kindern.",
      },
    ],
  },
  SkillsSection: {
    sectionName: "Skills",
    sectionHeader:
      "Ich strebe danach, niemals aufzuhören zu lernen und mich zu verbessern",
    skillsList: skills,
  },
  WorksSection: {
    sectionName: "Arbeiten",
    sectionHeader:
      "Ich hatte das Vergnügen, an diesen großartigen Projekten zu arbeiten",
    works: projects,
    createdTitle: "Erstellt:",
    challengesTitle: "Herausforderungen:",
    buttonTitle: "Demo-Link",
  },
  ExperienceSection: {
    sectionName: "Erfahrung",
    sectionHeader:
      "Ich hatte das Privileg, zu großartigen Teams und einflussreichen Projekten beizutragen",
    present: "heute",
    jobs: jobs,
    titles: {
      challenges: "Herausforderungen",
      achievements: "Erfolge",
    },
  },
  ContactSection: {
    sectionName: "Kontakt",
    sectionHeader: "Ich freue mich über jede Anfrage zur Zusammenarbeit",
    formHeader: "Schreib mir eine Nachricht",
    form: {
      formLabels: {
        name: "Ihr Name *",
        email: "Ihre E-Mail *",
        message: "Ihre Nachricht *",
        button: "Nachricht senden",
      },
      formPlaceholders: {
        name: "Geben Sie Ihren Namen ein",
        email: "Geben Sie Ihre E-Mail-Adresse ein",
        message: "Geben Sie Ihre Nachricht ein",
      },
    },
  },
  Footer: {
    textRights: "© 2024 Artem Brui. Alle Rechte vorbehalten.",
  },
};
