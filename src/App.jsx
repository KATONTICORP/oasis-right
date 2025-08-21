import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import OasisSite from "./OasisSite";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OasisSite />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
