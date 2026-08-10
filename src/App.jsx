import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Workspaces from './pages/Workspaces';
import AcousticPanels from './pages/AcousticPanels';
import ProjectsPage from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Ecovation Interiors — multi-page site.
 *   /                  Home
 *   /about             Editorial story
 *   /workspaces        Workspace design & types
 *   /acoustic-panels   PET panels & acoustic solutions
 *   /projects          Portfolio index
 *   /projects/:slug    Project detail
 *   /contact           Real contact details + enquiry form
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="workspaces" element={<Workspaces />} />
        <Route path="acoustic-panels" element={<AcousticPanels />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}