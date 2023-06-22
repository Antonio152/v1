import { Link } from "react-scroll";
import {
  phrases,
  menuOne,
  menuTwo,
  menuThree,
} from "../data/navbarTranslations";
import { LanguageApp } from "../shared/types/language";
interface INavbar {
  browserLanguage: LanguageApp;
}

export const Navbar = ({ browserLanguage }: INavbar) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="max-sm:text-center">
        <img
          src="/marco.jpg"
          alt="Marco Antonio"
          className="rounded-full w-32 h-32 object-cover mx-auto hidden max-sm:block mb-5"
        />
        <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl max-sm:text-center">
          <a href="/">Marco Antonio</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl max-sm:text-center">
          Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400 max-sm:m-auto max-sm:mt-4 ">
          {phrases[browserLanguage]}
        </p>
        {/* Navigation Links */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max text-slate-400">
            <li>
              <Link
                activeClass="active"
                className="cursor-pointer"
                spy
                to="about"
              >
                <div className="group flex items-center py-3 ">
                  <span
                    id="lineM"
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  />
                  <span
                    id="textM"
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  >
                    {menuOne[browserLanguage]}
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="cursor-pointer"
                spy
                to="experience"
              >
                <div className="group flex items-center py-3 ">
                  <span
                    id="lineM"
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  />
                  <span
                    id="textM"
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  >
                    {menuTwo[browserLanguage]}
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="cursor-pointer"
                spy
                to="projects"
              >
                <div className="group flex items-center py-3 ">
                  <span
                    id="lineM"
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  />
                  <span
                    id="textM"
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  >
                    {menuThree[browserLanguage]}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul
        className="ml-1 flex items-center text-slate-400 mt-12 max-sm:justify-center"
        aria-label="Social media"
      >
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/Antonio152"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <i className="fa-brands fa-github h-6 w-6 fIcons"></i>
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="mailto:marco_antonio_rosas_barcenas@hotmail.com"
            rel="noreferrer"
          >
            <span className="sr-only">Mail</span>
            <i className="fa-solid fa-envelope w-6 h-6 fIcons"></i>
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/marco-antonio-rosas-barcenas-b79488211"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin w-6 h-6 fIcons"></i>
          </a>
        </li>
      </ul>
    </header>
  );
};
