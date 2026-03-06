import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
}

export default function App() {
  useEffect(() => {
    const theme = getInitialTheme();
    document.documentElement.dataset.theme = theme;
  }, []);

  return (
    <div className="min-h-full">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
