import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OasisSite from "./OasisSite";
import ProjectSlugPage from "./pages/projects/[projectSlug]";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OasisSite />} />
        <Route path="/projects/:projectSlug" element={<ProjectSlugPage />} />
      </Routes>
    </Router>
  );
}
