import { LanguageApp } from "../types/language";

export interface IExperience {
  timeES: string;
  timeEN: string;
  role: string;
  nameEnterprise: string;
  urlEnterprise: string;
  level: string;
  activitiesES: string;
  activitiesEN: string;
  technologies: string[];
  cLanguage?: LanguageApp;
}
