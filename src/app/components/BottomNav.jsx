import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Home, Briefcase, Mail } from "lucide-react";

export function BottomNav() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sections = [
        { id: "home", name: "home" },
        { id: "work", name: "work" },
        { id: "projects", name: "work" }, 
        { id: "about", name: "about" },
        { id: "contact", name: "contact" }
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-min"
    >
      <div
        className="backdrop-blur-xl rounded-full border shadow-2xl px-5 py-3 md:px-8 md:py-4 mx-auto"
        style={{
          backgroundColor: 'rgba(13, 13, 13, 0.8)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {/* Navigation Items */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative p-1.5 md:p-2 transition-all duration-300"
            aria-label="Home"
          >
            <Home
              size={20}
              className="transition-colors duration-300"
              style={{
                color: activeSection === "home" ? "#00FF41" : "rgba(255,255,255,0.5)",
              }}
            />
            {activeSection === "home" && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: "#00FF41" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>

          <button
            onClick={() => scrollToSection("work")}
            className="group relative p-1.5 md:p-2 transition-all duration-300"
            aria-label="Work"
          >
            <Briefcase
              size={20}
              className="transition-colors duration-300"
              style={{
                color: activeSection === "work" ? "#00FF41" : "rgba(255,255,255,0.5)",
              }}
            />
            {activeSection === "work" && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: "#00FF41" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>

          <div className="w-[1px] h-4 md:h-6 bg-white/10 shrink-0" />

          {/* Progress Bar */}
          <div className="relative w-12 sm:w-20 md:w-32 h-1 bg-white/10 rounded-full overflow-hidden shrink-0">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${scrollProgress}%`,
                backgroundColor: "#00FF41",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="w-[1px] h-4 md:h-6 bg-white/10 shrink-0" />

          <button
            onClick={() => scrollToSection("about")}
            className="group relative p-1.5 md:p-2 transition-all duration-300"
            aria-label="About"
          >
            <div
              className="w-5 h-5 rounded-full border-2 transition-colors duration-300"
              style={{
                borderColor: activeSection === "about" ? "#00FF41" : "rgba(255,255,255,0.5)",
              }}
            />
            {activeSection === "about" && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: "#00FF41" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group relative p-1.5 md:p-2 transition-all duration-300"
            aria-label="Contact"
          >
            <Mail
              size={20}
              className="transition-colors duration-300"
              style={{
                color: activeSection === "contact" ? "#00FF41" : "rgba(255,255,255,0.5)",
              }}
            />
            {activeSection === "contact" && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: "#00FF41" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Time Display */}
      <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2">
        <p className="font-mono text-[10px] md:text-xs text-white/40 tracking-wider whitespace-nowrap">
          {new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          })}
        </p>
      </div>
    </motion.div>
  );
}