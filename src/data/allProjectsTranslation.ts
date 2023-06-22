import { IProjectsList } from "../shared/interfaces/projects";
/* TODO: CHECK DEPLOY APPS  */
export const listAllProjects: IProjectsList[] = [
  {
    nameES: "Aplicación de Snippets",
    nameEN: "Snippets Application",
    technologies: [
      "React",
      "Vite",
      "Tauri",
      "Zustand",
      "TailwindCSS",
      "Typescript",
    ],
    year: "2023",
    madeAt: "Personal",
    urlsProject: [
      "https://github.com/Antonio152/tauri-react-desktop-app#readme",
    ],
  },
  {
    nameES: "Calculadora de IOS",
    nameEN: "IOS Calculator",
    technologies: ["React", "React-Native", "Typescript", "eslint"],
    year: "2023",
    madeAt: "Personal",
    urlsProject: ["https://github.com/Antonio152/ios-calculator-rn#readme"],
  },
  {
    nameES: "Aplicación de actividades",
    nameEN: "Journal Application",
    technologies: [
      "React",
      "Typescript",
      "Vite",
      "eslint",
      "Redux",
      "Firebase",
      "Material-UI",
    ],
    year: "2023",
    madeAt: "Personal",
    urlsProject: [
      "https://antonio152.github.io/journal-app/",
      "https://github.com/Antonio152/journal-app#readme",
    ],
  },
  {
    nameES: "Intranet Aviso Oportuno",
    nameEN: "Intranet Classifieds",
    technologies: ["Sharepoint 365", "React", "SCSS", "Typescript", "Axios"],
    year: "2023",
    madeAt: "IMPI",
    urlsProject: [""],
  },
  {
    nameES: "Gaceta Búsqueda de Patentes",
    nameEN: "Patent Search Page",
    technologies: ["React", "Vite", "Typescript", "Axios", "SCSS"],
    year: "2023",
    madeAt: "IMPI",
    urlsProject: [""],
  },
  {
    nameES: "Aplicación de calendario",
    nameEN: "Calendar Application",
    technologies: ["React", "Typescript", "Vite", "eslint", "Redux", "Axios"],
    year: "2023",
    madeAt: "Personal",
    urlsProject: [
      "https://antonio152.github.io/calendar-app/",
      "https://github.com/Antonio152/calendar-app#readme",
    ],
  },
  {
    nameES: "Sistema de Registro de Instalaciones",
    nameEN: "Facility Registration System",
    technologies: ["NextJS", "Typescript", "React", "Context", "Axios"],
    year: "2022",
    madeAt: "Easytrack",
    urlsProject: [""],
  },
  {
    nameES: "Portal de pagos",
    nameEN: "Payment Portal",
    technologies: [
      "React",
      "NextJS",
      "Typescript",
      "NodeJS",
      "Conekta",
      "AWS",
      "Route53",
    ],
    year: "2022",
    madeAt: "Easytrack",
    urlsProject: ["https://pagos.easytrack.mx/"],
  },

  {
    nameES: "Página informativa sobre monitoreo",
    nameEN: "Informative Page About Monitoring",
    technologies: ["NextJS", "Typescript", "React", "CSS"],
    year: "2022",
    madeAt: "Easytrack",
    urlsProject: ["https://cutt.ly/awrCZGZf"],
  },
  {
    nameES: "Rutabus",
    nameEN: "Rutabus",
    technologies: ["NextJS", "Typescript", "React", "CSS"],
    year: "2022",
    madeAt: "Easytrack",
    urlsProject: ["https://easytrack.mx/rutabus"],
  },
  {
    nameES: "Sección de Videos",
    nameEN: "Videos Section",
    technologies: ["React", "NextJS", "CSS", "Javascript", "Axios"],
    year: "2022",
    madeAt: "Easytrack",
    urlsProject: ["https://easytrack.mx/videos/"],
  },
  {
    nameES: "Sección de Artículos",
    nameEN: "Articles Section",
    technologies: ["React", "NextJS", "MongoDB", "AWS", "S3", "EC2", "Strapi"],
    year: "2022",
    madeAt: "Easytrack",
    urlsProject: ["https://easytrack.mx/articulos/"],
  },
  {
    nameES: "Aplicación de Gifs",
    nameEN: "Gifts Application",
    technologies: ["React", "Typescript", "Vite", "Jest", "Axios"],
    year: "2022",
    madeAt: "Personal",
    urlsProject: [
      "https://antonio152.github.io/react-gift-app/",
      "https://github.com/Antonio152/react-gift-app#readme",
    ],
  },
  {
    nameES: "Migración de Página web a NextJS",
    nameEN: "Migration of Website to NextJS",
    technologies: ["NextJS", "Javascript", "React", "CSS"],
    year: "2021",
    madeAt: "Easytrack",
    urlsProject: ["https://easytrack.mx/"],
  },
  {
    nameES: "Template Página Institucional",
    nameEN: "Institutional Page Template",
    technologies: ["PHP", "HTML", "CSS", "JQuery", "Javascript"],
    year: "2021",
    madeAt: "Universidad Politécnica de Pachuca",
    urlsProject: [
      "https://www.upp.edu.mx/serviciosescolares/",
      "https://github.com/Antonio152/template_institutional_page",
    ],
  },
  {
    nameES: "Herramientas de Hacking para Sitios CMS",
    nameEN: "Hacking Tools for CMS Websites",
    technologies: ["Python"],
    year: "2021",
    madeAt: "Personal",
    urlsProject: ["https://github.com/Antonio152/Hacking_CMS"],
  },
  {
    nameES: "CovServer Aplicación de Covid-19",
    nameEN: "CovServer Covid-19 Application",
    technologies: [
      "React",
      "Typescript",
      "MOngoDB",
      "Node",
      "Express",
      "Jest",
      "Mocha",
    ],
    year: "2021",
    madeAt: "Personal",
    urlsProject: ["https://github.com/Antonio152/Hacking_CMS"],
  },
  {
    nameES: "Mandatum - Sistema de Gestión de credenciales",
    nameEN: "Mandatum - Credentials Management System",
    technologies: [
      "React",
      "Javascript",
      "MongoDB",
      "Mongoose",
      "Node",
      "Express",
      "Heroku",
    ],
    year: "2020",
    madeAt: "Universidad Politécnica de Pachuca",
    urlsProject: [""],
  },
];

export const titleProjects = {
  es: "Todos mis proyectos",
  en: "All Projects",
};

export const year = {
  es: "Año",
  en: "Year",
};
export const project = {
  es: "Proyecto",
  en: "Project",
};

export const madeAt = {
  es: "Creado en",
  en: "Made at",
};

export const built = {
  es: "Construido con",
  en: "Built with",
};
