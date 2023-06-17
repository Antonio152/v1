import { IProjectsList } from "../shared/interfaces/projects";
import { SvgArrow } from "./SvgArrow";

export const RowProjects = ({
  madeAt,
  nameEN,
  nameES,
  technologies,
  urlsProject,
  year,
  cLanguage,
}: IProjectsList) => {
  const nameProject = cLanguage === "es" ? nameES : nameEN;

  const replaceVCad = (url: string): string => {
    return url.replace(/(http(s)?:\/\/)?(www\.)?/g, "");
  };

  const componentByUrl = (url: string): JSX.Element => {
    if (url.includes("github.com")) {
      return (
        <span>
          <span>GitHub</span>
          <i className="fa-brands fa-github ml-1.5 h-3.5 w-3.5 shrink-0"></i>
        </span>
      );
    }
    if (url.includes("github.io") || url !== "") {
      return (
        <span>
          <span className="inline-block">
            {replaceVCad(url)}
            <SvgArrow className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0" />
          </span>
        </span>
      );
    }

    return <></>;
  };

  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px text-slate-400">{year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <div>
          <div className="block sm:hidden">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
              href={urlsProject[0]}
              target="_blank"
              rel="noreferrer"
              aria-label={nameProject}
            >
              <span>
                <span className="inline-block">
                  {nameProject}
                  <SvgArrow className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0 translate-y-px" />
                </span>
              </span>
            </a>
          </div>
          <div className="hidden sm:block">{nameProject}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="translate-y-px whitespace-nowrap text-slate-400">
          {madeAt}
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {technologies.map((tech, index) => (
            <li className="my-1 mr-1.5" key={index}>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          {urlsProject.map((url, index) => (
            <li className="mb-1 flex items-center" key={index}>
              <a
                className="inline-flex items-baseline font-medium leading-tigh hover:text-teal-300 text-sm text-slate-400 focus-visible:text-teal-300 group/link"
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={url}
              >
                {componentByUrl(url)}
              </a>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
