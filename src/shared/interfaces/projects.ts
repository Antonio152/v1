export interface IProjects {
  nameES: string;
  nameEN: string;
  descriptionES: string;
  descriptionEN: string;
  urlProject: string;
  technologies: string[];
  imagePath: string;
  nameIcon?: string;
  typeApp?: string;
  cLanguage?: string; //Language of the browser
}

export interface IProjectsList extends IProjects {
  year: string;
  madeAt: string;
  urlsProject: string[]; // Where is deployed and the code (both are optional)
}
