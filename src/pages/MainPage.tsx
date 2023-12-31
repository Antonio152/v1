import { memo } from "react";
import { Navbar } from "../components/Navbar";
import { LanguageApp } from "../shared/types/language";
import { menuOne, menuThree, menuTwo } from "../data/navbarTranslations";
import {
  aboutFour,
  aboutOne,
  aboutThree,
  aboutTwo,
  projectsTitle,
  resumeCV,
} from "../data/appTranslation";
import { experienceData } from "../data/experienceTranslations";
import { Experience } from "../components/Experience";
import { bestProjects } from "../data/projectsTranslation";
import { Projects } from "../components/Projects";
import { useNavigate } from "react-router-dom";

interface IMainPage {
  cLanguage: LanguageApp;
}
export const MainPage = memo(({ cLanguage }: IMainPage) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/projects", { replace: true });
    window.scrollTo(0, 0);
  };
  const resumePDF =
    cLanguage === "es"
      ? "./CV-MARCO_ANTONIO-ESPAÑOL.pdf"
      : "./CV-MARCO_ANTONIO-ENGLISH.pdf";
  return (
    <>
      {/* Left column - header */}
      <Navbar browserLanguage={cLanguage} />
      {/* Right column - main content */}
      <main id="content" className="lg:w-1/2 ">
        {/*main*/}
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-8 lg:scroll-mt-24 pt-24 lg:pb-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
            {/* max-lg:w-full 👆 */}
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              {menuOne[cLanguage]}
            </h2>
          </div>
          <div className="text-slate-400">
            <p className="mb-4">{aboutOne[cLanguage]}</p>
            <p className="mb-4">{aboutTwo[cLanguage]}</p>
            <p className="mb-4">{aboutThree[cLanguage]}</p>
            <p className="mb-4">{aboutFour[cLanguage]}</p>
          </div>
        </section>
        <section
          id="experience"
          className="mb-16 pt-24 scroll-mt-16 md:mb-24 lg:mb-8 lg:scroll-mt-24 lg:pb-24 max-lg:pt-0 max-lg:w-full"
          aria-label="Work experience"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              {menuTwo[cLanguage]}
            </h2>
          </div>
          <div>
            <ol className="group/list">
              {/* Experience item */}
              {experienceData.map((experience, index) => (
                <Experience {...experience} cLanguage={cLanguage} key={index} />
              ))}
            </ol>
            <div className="mt-12">
              <a
                className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
                aria-label="View Full Résumé"
                href={resumePDF}
              >
                {/* TODO: ADD RESUME IN ENGLISH AND SPANISH */}
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    {resumeCV[cLanguage]}
                  </span>
                  <span className="whitespace-nowrap">
                    <i className="fa-solid fa-arrow-right fArrow relative t1 ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="mb-16 pt-24 scroll-mt-16 md:mb-24 lg:mb-8 lg:scroll-mt-24 lg:pb-24 max-lg:pt-0 max-lg:w-full"
          aria-label="Selected projects"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              {menuThree[cLanguage]}
            </h2>
          </div>
          <div>
            <ul className="group/list">
              {bestProjects.map((project, index) => (
                <Projects {...project} cLanguage={cLanguage} key={index} />
              ))}
            </ul>
            <div className="mt-12">
              <button className="inline-flex items-center leading-tight font-semibold text-slate-200 group">
                <span>
                  <span
                    onClick={handleNavigate}
                    className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
                  >
                    {projectsTitle[cLanguage]}
                  </span>
                  <span className="whitespace-nowrap">
                    <i className="fa-solid fa-arrow-right fArrow relative t1 ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>
        <footer className="max-w-md pb-16 text-sm text-slate-500 max-sm:pb-2">
          <p>
            This project was based on the design of{" "}
            <a
              href="https://brittanychiang.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Brittany Chiang.
            </a>{" "}
            All the code of this portfolio was coded in{" "}
            <a
              href="https://code.visualstudio.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Visual Studio Code
            </a>{" "}
            by Me :). Built with{" "}
            <a
              href="https://vitejs.dev/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Vite
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS.
            </a>
          </p>
        </footer>
      </main>
    </>
  );
});
