import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Splash from "./components/Splash";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import TeachingPage from "./pages/TeachingPage";
import AwardsPage from "./pages/AwardsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("splash-seen");
  });
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if (!showSplash) {
      sessionStorage.setItem("splash-seen", "1");
      const t = setTimeout(() => setContentReady(true), 60);
      return () => clearTimeout(t);
    }
  }, [showSplash]);

  return (
    <HashRouter>
      {showSplash && <Splash onDone={() => setShowSplash(false)} />}
      <Background />
      <div
        style={{
          opacity: contentReady ? 1 : 0,
          transform: contentReady ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 700ms ease, transform 700ms ease",
        }}
      >
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
