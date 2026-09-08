import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Workspaces from './pages/Workspaces';
import Residential from './pages/Residential';
import AcousticPanels from './pages/AcousticPanels';
import ProjectsPage from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Ecovation — multi-page site.
 *   /                  Home
 *   /workspaces        Workspace design & fit-outs
 *   /residential       Residential interiors & acoustic solutions
 *   /acoustic-panels   PET panels & acoustic solutions
 *   /projects          Featured projects
 *   /projects/:slug    Project detail
 *   /contact           Real contact details + enquiry form
 *   /about             Legacy — now redirects to Home.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Navigate to="/" replace />} />
        <Route path="workspaces" element={<Workspaces />} />
        <Route path="residential" element={<Residential />} />
        <Route path="acoustic-panels" element={<AcousticPanels />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}