import { Routes, Route, Navigate } from "react-router-dom";
import { ProjectsPage } from "../pages/ProjectsPage";
export const AppRouter = () => {
  return (
    <Routes>
      {/* Home */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* Projects*/}
      <Route path="/projects" element={<ProjectsPage />} />
      {/* No route found */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
