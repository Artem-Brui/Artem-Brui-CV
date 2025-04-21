import {
  Bootstrap,
  Bulma,
  Css,
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
  UaFlag,
} from "../components/SVGs/Icons";

const skills = [
  {
    name: "html",
    logo: Html,
    logoColor: "#e95829",
    descreption:
      "Основа будь-якого вебсайту, мова розмітки для структурування та відображення контенту.",
  },
  {
    name: "css",
    logo: Css,
    logoColor: "#27a3d9",
    descreption:
      "Мова для стилізації вебсторінок, що визначає кольори, шрифти, відступи та інші візуальні елементи.",
  },
  {
    name: "bootstrap",
    logo: Bootstrap,
    logoColor: "#7711f2",
    descreption:
      "Набір попередньо розроблених стилів та компонентів для швидкого створення адаптивних і стильних вебсторінок.",
  },
  {
    name: "bulma",
    logo: Bulma,
    logoColor: "#09caad",
    descreption:
      "Легка CSS-фреймворк з елегантними компонентами, що спрощує створення сучасних вебсайтів.",
  },
  {
    name: "tailwind",
    logo: Tailwind,
    logoColor: "#24cabb",
    descreption:
      "Легка CSS-фреймворк з елегантними компонентами, що спрощує створення сучасних вебсайтів.",
  },
  {
    name: "sass",
    logo: Sass,
    logoColor: "#cb6197",
    descreption:
      "Препроцесор CSS, що додає змінні, вкладення та інші функції для спрощення та організації стилізації.",
  },
  {
    name: "git",
    logo: Git,
    logoColor: "#e84e32",
    descreption:
      "Система контролю версій для відстеження та управління змінами коду, ідеальна для командної роботи.",
  },
  {
    name: "figma",
    logo: Figma,
    logoColor: "#29befe",
    descreption:
      "Потужний інструмент для дизайну та прототипування, який дозволяє спільно працювати в реальному часі та оптимізувати процеси UI/UX.",
  },
  {
    name: "javascript",
    logo: Javascript,
    logoColor: "#c19e38",
    descreption:
      "Мова програмування, яка робить вебсайти інтерактивними (наприклад, кнопки, спливаючі вікна).",
  },
  {
    name: "typescript",
    logo: Typescript,
    logoColor: "#0076c6",
    descreption:
      "«Посилена» версія JavaScript з перевіркою типів для спрощення розробки та зменшення кількості помилок.",
  },
  {
    name: "react",
    logo: React,
    logoColor: "#0bb4d2",
    descreption:
      "Бібліотека для створення інтерактивних користувацьких інтерфейсів за допомогою компонентів.",
  },
  {
    name: "redux",
    logo: Redux,
    logoColor: "#7348b6",
    descreption:
      "Інструмент для управління станом додатків, що полегшує роботу з даними.",
  },
  {
    name: "express",
    logo: Express,
    logoColor: "#000000",
    descreption:
      "Мінімалістичний бекенд-фреймворк для створення API та вебдодатків на Node.js.",
  },
  {
    name: "socket.io",
    logo: Socket,
    logoColor: "#000000",
    descreption:
      "Бібліотека двостороннього зв'язку в реальному часі для веб-застосунків.",
  },
  {
    name: "mongodb",
    logo: Mongodb,
    logoColor: "#559034",
    descreption:
      "База даних, у якій дані зберігаються у вигляді об’єктів, схожих на JSON, ідеальна для сучасних додатків.",
  },
];

const projects = [
  {
    name: "MET Музей",
    link: "https://artem-brui.github.io/MET-Landing-page",
    previewImage: "https://artem-brui.github.io/MET-Landing-page/preview.webp",
    created: "Травень 2024",
    challenges: [
      "Реалізація управління меню без використання JavaScript.",
      "Використання одного і того ж елемента (контакти в шапці) двічі в різних місцях, залежно від стану видимості меню.",
      "Стилізація інпутів під час автозаповнення.",
    ],
    skills: ["git", "html", "css", "sass", "figma"],
  },
  {
    name: "Гра 2048",
    link: "https://artem-brui.github.io/Game-2048/",
    previewImage: "https://artem-brui.github.io/Game-2048/preview.webp",
    created: "Жовтень 2024",
    challenges: ["Гнучкий рух чисел по полю.", "Анімація під час об'єднання."],
    skills: ["git", "html", "css", "sass", "javascript"],
  },
  {
    name: "Моє портфоліо",
    link: "https://artem-brui.github.io/Artem_Brui_Portfolio/",
    previewImage:
      "https://artem-brui.github.io/Artem_Brui_Portfolio/preview.webp",
    created: "Грудень 2024",
    challenges: [
      "Реалізація управління темами.",
      "Реалізація використання декількох мов.",
      "Обертання дошки навичок.",
      "Обробка даних з контактної форми через Google Scripts.",
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
    location: "Берлін, Німеччина",
    jobType: "Віддалено",
    role: "Тутор курсу Full Stack Web Developer",
    challenges: ["Стислі терміни для вивчення нових тем до рівня викладання."],
    achievements: [
      "Навчився ефективно вивчати новий матеріал в умовах обмеженого часу.",
      "Під час роботи і навчання було вирішено понад 70 практичних завдань (SCSS, JavaScript, TypeScript, React, Express, MongoDB).",
      "Проведення навчальних live-coding із розв’язанням завдань у реальному часі зі студентами.",
    ],
    startDate: "01.05.2024",
    endDate: "18.02.2025",
  },
  {
    company: "Air Team",
    location: "Брно, Чехія",
    jobType: "Гібридно",
    role: "Спеціаліст з цифрового маркетингу",
    achievements: [
      "Збільшення продажів деяких позицій більш ніж на 50% завдяки створеній мною рекламі.",
      "Створення базової структури нового вебсайту за допомогою Elementor (WordPress) та кастомних елементів, написаних мною.",
      "Інтеграція нового сайту в корпоративну систему Hubspot, створення та налаштування всіх необхідних з’єднань.",
    ],
    challenges: [
      "Самостійне вивчення нових технологій, таких як Google Ads, інтеграція та налаштування Ads Analytical Tools.",
      "Створення кастомних елементів сайту за допомогою HTML/CSS, вивчення нових для себе технологій у стислі терміни.",
    ],
    startDate: "01.01.2021",
    endDate: "01.10.2023",
  },
  {
    company: "Український аграрний ринок",
    location: "Київ, Україна",
    jobType: "Офісно",
    role: "Керівник відділу закупівель у сільському господарстві",
    achievements: [
      "Три відділи закупівель створено з нуля.",
      "Понад п’ятдесят спеціалістів із закупівель пройшли навчання ефективним закупівлям.",
      "Підписано та виконано багато контрактів на постачання зерна обсягом понад мільйон тонн.",
    ],
    challenges: [
      "Впровадження IT-рішення в існуючу систему взаємодії співробітників.",
      "Розширення діяльності відділу для виконання експортних контрактів.",
    ],
    startDate: "01.09.2009",
    endDate: "31.12.2020",
  },
];

export const content = {
  Header: {
    ownerName: "Артем Бруй",
    languageFlag: UaFlag,
  },
  HomeSection: {
    sectionName: "Головна",
    greating: ["Привіт,", "Я Артем -", "Full Stack Розробник"],
    descreption:
      "Орієнтований на створення якісного коду, побудову ефективної комунікації та допомогу команді в досягненні успіху.",
    callToAction: "Написати",
    counter: {
      projectsAmount: projects.length,
      projectsTitle: "Особисті проєкти",
      carrierStarted: "2021",
      carrierTitle: "Роки досвіду",
      skillsAmount: skills.length,
      skillsTitle: "Технічні навички",
    },
  },
  AboutSection: {
    sectionName: "Про мене",
    greating: "Привіт!",
    paragraphsList: [
      {
        paragraph:
          "Мене звати Артем, і я спеціалізуюся на веб-розробці, використовуючи JavaScript, TypeScript, React, Express та MongoDB тощо.",
      },
      {
        paragraph:
          "Я високомотивована людина та вічний оптиміст, присвячений написанню чіткого, зрозумілого та надійного коду, який працює. Постійно прагну навчатися та вдосконалюватися.",
      },
      {
        paragraph:
          "Маючи досвід у вирішенні складних задач, управлінні проєктами та аналізі даних, я розробляю веб-рішення, які ефективно підтримують бізнес-стратегію.",
      },
      {
        paragraph:
          "Коли я не пишу код, я присвячую час велосипедним прогулянкам, заняттям спортом, пробіжкам та радісним моментам із дружиною і двома чудовими дітьми.",
      },
    ],
  },
  SkillsSection: {
    sectionName: "Навички",
    sectionHeader: "Я прагну ніколи не припиняти навчання та вдосконалення",
    skillsList: skills,
  },
  WorksSection: {
    sectionName: "Роботи",
    sectionHeader: "Мав задоволення працювати над цими чудовими проєктами",
    works: projects,
    createdTitle: "Створено:",
    challengesTitle: "Виклики:",
    buttonTitle: "Демо-версія",
  },
  ExperienceSection: {
    sectionName: "Досвід",
    sectionHeader:
      "Я мав честь співпрацювати з неймовірними командами та впливовими проєктами",
    present: "до тепер",
    jobs: jobs,
    titles: {
      challenges: "Виклики",
      achievements: "Досягнення",
    },
  },
  ContactSection: {
    sectionName: "Контакт",
    sectionHeader: "Буду радий розглянути будь-які пропозиції щодо співпраці",
    formHeader: "Напишіть мені",
    form: {
      formLabels: {
        name: "Ваше ім'я *",
        email: "Ваш email *",
        message: "Ваше повідомлення *",
        button: "Надіслати повідомлення",
      },
      formPlaceholders: {
        name: "Введіть ваше ім'я",
        email: "Введіть ваш email",
        message: "Введіть ваше повідомлення",
      },
    },
  },
  Footer: {
    textRights: "© 2024 Артем Бруй. Всі права захищені.",
  },
};
