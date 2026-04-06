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

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Simple section detection
      if (scrollPosition < window.innerHeight) {
        setActiveSection("home");
      } else if (scrollPosition < window.innerHeight * 2.5) {
        setActiveSection("work");
      } else if (scrollPosition < window.innerHeight * 4) {
        setActiveSection("about");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    let scrollTo = 0;
    switch (sectionId) {
      case "home":
        scrollTo = 0;
        break;
      case "work":
        scrollTo = window.innerHeight;
        break;
      case "about":
        scrollTo = window.innerHeight * 2.5;
        break;
      case "contact":
        scrollTo = document.documentElement.scrollHeight - window.innerHeight;
        break;
    }
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="backdrop-blur-xl rounded-full border shadow-2xl px-8 py-4"
        style={{
          backgroundColor: 'rgba(13, 13, 13, 0.8)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="flex items-center gap-8">
          {/* Navigation Items */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative p-2 transition-all duration-300"
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
            className="group relative p-2 transition-all duration-300"
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

          <div className="w-[1px] h-6 bg-white/10" />

          {/* Progress Bar */}
          <div className="relative w-32 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${scrollProgress}%`,
                backgroundColor: "#00FF41",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="w-[1px] h-6 bg-white/10" />

          <button
            onClick={() => scrollToSection("about")}
            className="group relative p-2 transition-all duration-300"
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
            className="group relative p-2 transition-all duration-300"
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
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <p className="font-mono text-xs text-white/40 tracking-wider">
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
