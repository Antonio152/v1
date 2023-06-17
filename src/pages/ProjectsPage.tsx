import { useNavigate } from "react-router-dom";
import { RowProjects } from "../components/RowProjects";
import {
  built,
  listAllProjects,
  madeAt,
  project,
  titleProjects,
  year,
} from "../data/allProjectsTranslation";
import { LanguageApp } from "../shared/types/language";
interface IProjectsPage {
  cLanguage: LanguageApp;
}
export const ProjectsPage = ({ cLanguage }: IProjectsPage) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="lg:py-24">
      <button
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 text-lg"
        onClick={handleNavigate}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
        Marco Antonio
      </button>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        {titleProjects[cLanguage]}
      </h1>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              {year[cLanguage]}
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              {project[cLanguage]}
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              {madeAt[cLanguage]}
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              {built[cLanguage]}
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {listAllProjects.map((project, index) => (
            <RowProjects {...project} cLanguage={cLanguage} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
/* https://easytrack.mx/rutabus */
