import { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection.jsx";
import { WorksList } from "./components/WorksList.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { BottomNav } from "./components/BottomNav.jsx";
import {ProjectShowcase} from "./components/ProjectShowcase.jsx"

import { projectsData } from "../data.js";

function App() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden relative"
      style={{
        backgroundColor: "#0D0D0D",
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Grain Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cursor Glow Effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, rgba(0, 255, 65, 0.05), transparent 80%)`,
        }}
      />

      {/* Main Content */}
      <HeroSection />
      <WorksList projects={projectsData} />
      <ProjectShowcase projects={projectsData} />
      <AboutSection />
      <ContactSection />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
