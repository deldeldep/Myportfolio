import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Intro Overlay */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* background glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="absolute left-1/2 top-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FF41]/10 blur-3xl" />
            </motion.div>

            {/* decorative lines */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 pointer-events-none"
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 240, y: -8 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center justify-center text-center px-6"
            >
              <motion.p
                initial={{ opacity: 0, y: -10, letterSpacing: "0.4em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.32em" }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mb-5 font-mono text-[10px] sm:text-xs uppercase text-[#00FF41]"
              >
                Creative Developer Portfolio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14, letterSpacing: "0.38em", scale: 0.98 }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.18em", scale: 1 }}
                exit={{ opacity: 0, x: 260, letterSpacing: "0.08em", scale: 1.02 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black text-white whitespace-nowrap leading-none"
                style={{
                  fontFamily: "Inter, sans-serif",
                  textShadow: "0 0 30px rgba(255,255,255,0.08)",
                }}
              >
                PORTFOLIO
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 120 }}
                exit={{ opacity: 0, width: 0, x: 160 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="h-px bg-[#00FF41] mt-6 mb-5"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.75, y: 0 }}
                exit={{ opacity: 0, x: 180 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="text-white/55 text-xs sm:text-sm tracking-[0.25em] uppercase font-mono"
              >
                Web Publisher · UI Markup · Frontend
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-[10%] relative overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(0,255,65,0.08),transparent_30%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_28%)]" />
        </div>

        {/* Corner Details */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{
            opacity: showIntro ? 0 : 1,
            y: showIntro ? -16 : 0,
          }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-8 left-[10%]"
        >
          <p
            className="font-mono text-xs tracking-wider uppercase"
            style={{ color: "#00FF41" }}
          >
            Seoul, KR
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{
            opacity: showIntro ? 0 : 1,
            y: showIntro ? -16 : 0,
          }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-8 right-[10%]"
        >
          <p className="font-mono text-xs tracking-wider uppercase text-white/60">
            Available for projects
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mt-12 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div className="relative group w-full max-w-[280px] sm:max-w-md mx-auto lg:mx-0">
            <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden relative rounded-sm">
              <img src="/img/my-profile.png" alt="프로필" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 left-0 font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-white/35">
              Web Publisher · UI Markup · Frontend
            </div>
          </motion.div>

          {/* Right: Profile Info */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <motion.div>
              <p
                className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6"
                style={{ color: "#00FF41" }}
              >
                Hello, I'm
              </p>

              <h1
                className="text-4xl sm:text-4xl lg:text-6xl tracking-tight mb-2 md:mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  color: "#FFFFFF",
                }}
              >
                채서영
              </h1>

              <p className="text-xl md:text-3xl font-light text-white/80 mb-6 md:mb-8 font-mono">
                Web Publisher
              </p>
              
              <p className="text-white/60 leading-relaxed text-sm md:text-base mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 break-keep">
                사용자를 배려하는 직관적인 UI와 섬세한 인터랙션을 고민합니다. 코드로 브랜드의 가치를 전달하겠습니다.
              </p>
            </motion.div>

            <motion.div className="space-y-4 font-mono text-xs md:text-sm max-w-sm mx-auto lg:mx-0 border-b border-white/10 pb-8">
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center group">
                <span className="text-[#00FF41] tracking-wider uppercase text-left">
                  Phone
                </span>
                <span className="text-white/80 transition-colors text-left">
                  010-1234-5678
                </span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center group">
                <span className="text-[#00FF41] tracking-wider uppercase text-left">
                  Email
                </span>
                <span className="text-white/80 transition-colors text-left">
                  deldeldep@gmail.com
                </span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-center group">
                <span className="text-[#00FF41] tracking-wider uppercase text-left">
                  Location
                </span>
                <span className="text-white/80 transition-colors text-left">
                  Seoul, KR
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: showIntro ? 0 : 1,
            y: showIntro ? 8 : 0,
          }}
          transition={{
            delay: 0.58,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#00FF41] to-transparent"
          />
        </motion.div>
      </section>
    </>
  );
}