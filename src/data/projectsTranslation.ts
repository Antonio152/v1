import { IProjects } from "../shared/interfaces/projects";

export const bestProjects: IProjects[] = [
  {
    nameES: "Snippets App",
    nameEN: "Snippets App",
    descriptionES:
      "Aplicación de escritorio que permite guardar y organizar snippets de programación. Podrás administrar tu biblioteca de snippets desde la aplicación, cada uno de los snippets es guardado en un archivo de texto con extensión .js dentro de los documentos de tu computador. La aplicación es compatible con Windows, Linux y Mac.",
    descriptionEN:
      "Desktop application that allows you to save and organize programming snippets. You can manage your snippet library from the application, with each snippet being saved as a .js text file within your computer's documents. The application is compatible with Windows, Linux, and Mac.",
    urlProject: "https://github.com/Antonio152/tauri-react-desktop-app#readme",
    technologies: ["Tauri", "React", "Zustand", "Tailwind", "Typescript"],
    imagePath: "snippetsApp.jpg",
    typeApp: "Desktop",
    nameIcon: "fa-desktop",
  },
  {
    nameES: "Calculadora de IOS",
    nameEN: "IOS Calculator",
    descriptionES:
      "Replica de la aplicación de calculadora de IOS, puede ser ejecutada en sistemas operativos de android y IOS.",
    descriptionEN:
      "Copy of the IOS calculator application that can be run on both Android and IOS operating systems.",
    urlProject: "https://github.com/Antonio152/ios-calculator-rn#readme",
    technologies: ["React-Native", "Typescript"],
    imagePath: "iosCalculator2.jpg",
    typeApp: "Mobile",
    nameIcon: "fa-mobile",
  },
  {
    nameES: "Aplicación de Notas",
    nameEN: "Journal app",
    descriptionES:
      "Aplicación web para  tomar notas de manera fácil y rápida. La interfaz intuitiva te permite crear y editar notas con solo unos toques, y la sincronización automática garantiza que tus notas estén disponibles en todos tus dispositivos.",
    descriptionEN:
      "Web application for taking notes easily and quickly. The intuitive interface allows you to create and edit notes with just a few taps, and automatic synchronization ensures that your notes are available on all your devices.",
    urlProject: "https://antonio152.github.io/journal-app/",
    technologies: ["React", "Redux", "Firebase", "Material-UI", "Typescript"],
    imagePath: "JournalApp.jpg",
    typeApp: "Web Application",
    nameIcon: "fa-window-maximize",
  },
];
