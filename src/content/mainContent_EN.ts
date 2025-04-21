import { Bootstrap, Bulma, Css, Socket, Express, Figma, Git, Html, Javascript, Mongodb, React, Redux, Sass, Tailwind, Typescript, EnFlag } from "../components/SVGs/Icons";

const skills = [
  {
    name: 'html',
    logo: Html,
    logoColor: '#e95829',
    descreption: 'The foundation of any website, a markup language for structuring and displaying content.',
  },
  {
    name: 'css',
    logo: Css,
    logoColor: '#27a3d9',
    descreption: 'A language for styling web pages, defining colors, fonts, spacing, and other visual elements.',
  },
  {
    name: 'bootstrap',
    logo: Bootstrap,
    logoColor: '#7711f2',
    descreption: 'A set of pre-designed styles and components to quickly create responsive and stylish web pages.',
  },
  {
    name: 'bulma',
    logo: Bulma,
    logoColor: '#09caad',
    descreption: 'A lightweight CSS framework with elegant components that simplifies building modern websites.',
  },
  {
    name: 'tailwind',
    logo: Tailwind,
    logoColor: '#24cabb',
    descreption: 'A lightweight CSS framework with elegant components that simplifies building modern websites.',
  },
  {
    name: 'sass',
    logo: Sass,
    logoColor: '#cb6197',
    descreption: 'A preprocessor of CSS that adds variables, nesting, and other features to make styling easier and more organized.',
  },
  {
    name: 'git',
    logo: Git,
    logoColor: '#e84e32',
    descreption: 'A version control system for tracking and managing code changes, great for teamwork.',
  },
  {
    name: 'figma',
    logo: Figma,
    logoColor: '#29befe',
    descreption: 'A powerful design and prototyping tool that allows for real-time collaboration and streamlined UI/UX workflows.',
  },
  {
    name: 'javascript',
    logo: Javascript,
    logoColor: '#c19e38',
    descreption: 'A programming language that makes websites interactive (e.g., buttons, pop-ups).',
  },
  {
    name: 'typescript',
    logo: Typescript,
    logoColor: '#0076c6',
    descreption: 'A "supercharged" version of JavaScript with type-checking to simplify development and reduce errors.',
  },
  {
    name: 'react',
    logo: React,
    logoColor: '#0bb4d2',
    descreption: 'A library for building interactive user interfaces using components.',
  },
  {
    name: 'redux',
    logo: Redux,
    logoColor: '#7348b6',
    descreption: 'A tool for managing application state, making it easier to work with data.',  
  },
  {
    name: 'express',
    logo: Express,
    logoColor: '#000000',
    descreption: 'A minimalist backend framework for building APIs and web applications on Node.js.',  
  },
  {
    name: 'socket.io',
    logo: Socket,
    logoColor: '#000000',
    descreption: 'А real-time, bidirectional communication library for web applications.',  
  },
  {
    name: 'mongodb',
    logo: Mongodb,
    logoColor: '#559034',
    descreption: 'A database where data is stored as JSON-like objects, perfect for modern applications.',  
  },
];

const projects = [
  {
    name: 'The MET Museum',
    link: 'https://artem-brui.github.io/MET-Landing-page',
    previewImage: 'https://artem-brui.github.io/MET-Landing-page/preview.webp',
    created: 'May 2024',
    challenges: [
      'An implementation of a menu managing without JavaScript.',
      'Using the same element (contacts in a header) twice in different places, depending on a menu visibility status.',
      'A stylling inputs during an autofill.',
    ],
    skills: [
      'git',
      'html',
      'css',
      'sass',
      'figma',
    ],
  },
  {
    name: '2048 Game',
    link: 'https://artem-brui.github.io/Game-2048/',
    previewImage: 'https://artem-brui.github.io/Game-2048/preview.webp',
    created: 'October 2024',
    challenges: [
      'The flexible movement of numbers through the field.',
      'An animation during the merging.',
    ],
    skills: [
      'git',
      'html',
      'css',
      'sass',
      'javascript',
    ]
  },
  {
    name: 'My Portfolio',
    link: 'https://artem-brui.github.io/Artem_Brui_Portfolio/',
    previewImage: 'https://artem-brui.github.io/Artem_Brui_Portfolio/preview.webp',
    created: 'December 2024',
    challenges: [
      'Implementation of theme managing.',
      'Implementation of the use of multiple languages.',
      'The skills board rounding.',
      "The processing contact form's data via google-scripts.",
    ],
    skills: [
      'git',
      'html',
      'css',
      'sass',
      'figma',
      'javascript',
      'typescript',
      'react',
    ]
  },
];

const jobs = [
  {
    company: 'DCI Digital Career Institute',
    location: 'Berlin, Germany',
    jobType: 'Remote',
    role: 'Tutor on a Full Stack Web Developer course',
    challenges: [
      "Compressed timeframes for studying new topics to the level of teaching them.",
    ],
    achievements: [
      "Learned how to effectively study new material in a time-limited environment.",
      'During the period of work and training, more than 70 practical tasks were solved (SCSS, JavaScript, TypeScript, React, Express, MongoDB).',
      'Conducting educational live-coding with solving tasks in real time with students.',
    ],
    startDate: '01.05.2024',
    endDate: "18.02.2025",
  },
  {
    company: 'Air Team',
    location: 'Brno, Czech Republic',
    jobType: 'Hybrid',
    role: 'Digital Marketing Specialist',
    achievements: [
      'Increase in sales for some items by more than 50% due to the advertising I created.',
      'Creating the basic structure of a new website using Elementor (WordPress) and custom elements written by me.',
      'Implementation of a new site into the corporate Hubspot system, creation and configuration of all necessary connections.',
    ],
    challenges: [
      "Self-study of new technologies such as Google Ads, embedding and customization Ads Analytical Tools.",
      "Create custom website elements using HTML/CSS, as new technologies for themselves. Studying in a short time.",
    ],
    startDate: '01.01.2021',
    endDate: '01.10.2023',
  },
  {
    company: 'Ukrainian Agricultural Market',
    location: 'Kyiv, Ukraine',
    jobType: 'On-site',
    role: 'Head of Procurement Department in Agriculture',
    achievements: [
      'Three purchasing departments were created from scratch.',
      'More than Fifty procurement specialists were trained in effective procurement.',
      'Many contracts for the supply of grain in the amount of more than One million tons have been signed and fulfilled.',
    ],
    challenges: [
      'Implementation of an IT solution into the existing system of interaction between employees.',
      "Expanding the department's activities to include fulfilling export supply contracts.",
    ],
    startDate: '01.09.2009',
    endDate: '31.12.2020',
  },
];

export const content = {
  Header: {
    ownerName: 'Artem Brui',
    languageFlag: EnFlag,
  },
  HomeSection: {
    sectionName: 'Main',
    greating: [
      "Hey,",
      "I'm Artem - ",
      "Full Stack Developer"
    ],
    descreption: "Focused on creating high-quality code, building effective communication, and supporting the team in achieving success.",
    callToAction: "Let's Talk",
    counter: {
        projectsAmount: projects.length,
        projectsTitle: 'Self Projects',
      carrierStarted: '2021',
      carrierTitle: 'Years of Experiance',
      skillsAmount: skills.length,
      skillsTitle: 'Technical Skills',
    }
  },
  AboutSection: {
    sectionName: 'About Me',
    greating: 'Hello!',
    paragraphsList: [
      {
        paragraph: "My name is Artem and I specialize in Web Developement that utilizes JavaScript TypeScript, React, Express, and MongoDB."
      },
      {
        paragraph: "I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving."
      },
      {
        paragraph: "With experience in solving complex problems, project management, and data analysis, I develop web solutions that effectively support business strategies."
      },
      {
        paragraph: "When I’m not writing code, I dedicate my time to cycling, sports, running, and joyful moments with my wife and two wonderful children."
      },
    ]
  },
  SkillsSection: {
    sectionName: 'Skills',
    sectionHeader: 'I am striving to never stop learning and improving',
    skillsList: skills,
  },
  WorksSection: {
    sectionName: 'Works',
    sectionHeader: 'I had the pleasure of working with these awesome projects',
    works: projects,
    createdTitle: 'Created:',
    challengesTitle: 'Challenges:',
    buttonTitle: 'Demo Link',
  },
  ExperienceSection: {
    sectionName: 'Experience',
    sectionHeader: 'I’ve had the privilege of contributing to amazing teams and impactful projects',
    present: 'present',
    jobs: jobs,
    titles: {
      challenges: 'Challenges',
      achievements: 'Achievements',
    }
  },
  ContactSection: {
    sectionName: "Contact",
    sectionHeader: "I will be happy to consider any proposals for cooperation",
    formHeader: "Send Me a Message",
    form: {
      formLabels: {
        name: "Your name *",
        email: "Your email *",
        message: "Your message *",
        button: "Send Message",
      },
      formPlaceholders: {
        name: "Enter your name",
        email: "Enter your email",
        message: "Enter your message",
      },
    }
  },
  Footer: {
    textRights: '© 2024 Artem Brui. All rights reserved.',
  },
}
