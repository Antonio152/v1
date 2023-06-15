import { Routes, Route, Navigate } from "react-router-dom";
import { ProjectsPage } from "../pages/ProjectsPage";
import { RadialCircle } from "../components/RadialCircle";
import { useEffect, useState } from "react";
import { LanguageApp } from "../shared/types/language";
import { MainPage } from "../pages/MainPage";
export const AppRouter = () => {
  const [browserLanguage, setBrowserLanguage] = useState("en");
  useEffect(() => {
    const detectedLanguage = navigator.language.split("-")[0];
    setBrowserLanguage(detectedLanguage);
  }, []);

  // validate language and set as default "en" if not supported
  const cLanguage: LanguageApp =
    browserLanguage !== "es" && browserLanguage !== "en"
      ? "en"
      : browserLanguage;

  return (
    <div className="bg-slate-900 relative">
      {/* Pointer */}
      <RadialCircle />
      {/* Container App */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        {/* Container columns */}
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Routes>
            {/* Home */}
            <Route path="/" element={<MainPage cLanguage={cLanguage} />} />
            {/* Projects*/}
            <Route path="/projects" element={<ProjectsPage />} />
            {/* No route found */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
