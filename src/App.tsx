import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <CursorGlow />
        {/* Main blob decorations */}
        <div className="blob-decoration blob-1"></div>
        <div className="blob-decoration blob-2"></div>
        <div className="blob-decoration blob-3"></div>
        <div className="blob-decoration blob-4"></div>
        
        {/* Additional organic floating elements */}
        <div className="blob-decoration blob-5"></div>
        <div className="blob-decoration blob-6"></div>
        <div className="blob-decoration blob-7"></div>
        
        {/* Floating lines */}
        <div className="organic-line organic-line-1"></div>
        <div className="organic-line organic-line-2"></div>
        <div className="organic-line organic-line-3"></div>
        
        {/* Floating spheres */}
        <div className="floating-sphere sphere-1"></div>
        <div className="floating-sphere sphere-2"></div>
        <div className="floating-sphere sphere-3"></div>
        
        {/* Wave elements */}
        <div className="wave-line wave-1"></div>
        <div className="wave-line wave-2"></div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
