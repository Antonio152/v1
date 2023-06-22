import { IProjects } from "../shared/interfaces/projects";
import { SvgArrow } from "./SvgArrow";

export const Projects = ({
  nameES,
  nameEN,
  descriptionEN,
  descriptionES,
  technologies,
  urlProject,
  imagePath,
  nameIcon,
  typeApp,
  cLanguage,
}: IProjects) => {
  const nameProject = cLanguage === "es" ? nameES : nameEN;
  const descriptionLang = cLanguage === "es" ? descriptionES : descriptionEN;
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href={urlProject}
              target="_blank"
              rel="noreferrer"
              aria-label={nameProject}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {nameProject}{" "}
                <span className="inline-block">
                  <SvgArrow />
                </span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate-400">
            {descriptionLang}
          </p>
          <span className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300">
            <i className={`fa-solid ${nameIcon} mr-1 h-4 w-3`}></i>
            <span className="ml-1">{typeApp}</span>
          </span>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((name) => (
              <li className="mr-1.5 mt-2" key={name}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img
          loading="lazy"
          width={200}
          height={48}
          decoding="async"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          src={`./images/${imagePath}`}
        />
      </div>
    </li>
  );
};
