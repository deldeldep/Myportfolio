import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2200); // 인트로 전체 재생 시간

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
          >
            <motion.h1
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.2em] text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              PORTFOLIO
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-[10%] relative overflow-hidden">
        {/* Corner Details */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? -20 : 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? -20 : 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute top-8 right-[10%]"
        >
          <p className="font-mono text-xs tracking-wider uppercase text-white/60">
            Available for projects
          </p>
        </motion.div>

        <div className="w-full max-w-6xl mt-20 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: showIntro ? 0 : 1,
              x: showIntro ? -50 : 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative group w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden relative rounded-sm">
              <img
                src="/img/my-profile.png"
                alt="프로필"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#00FF41]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#00FF41] opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#00FF41] opacity-50" />
          </motion.div>

          {/* Right: Profile Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: showIntro ? 0 : 1,
                y: showIntro ? 30 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p
                className="font-mono text-sm tracking-[0.3em] uppercase mb-6"
                style={{ color: "#00FF41" }}
              >
                Hello, I'm
              </p>
              <h1
                className="text-5xl lg:text-7xl tracking-tight mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  color: "#FFFFFF",
                }}
              >
                채서영
              </h1>
              <p className="text-2xl lg:text-3xl font-light text-white/80 mb-8 font-mono">
                Web Publisher
              </p>
              <p className="text-white/60 leading-relaxed keep-all text-lg mb-12">
                사용자를 배려하는 직관적인 UI와 디테일한 인터랙션을 고민합니다.
                시각적인 아름다움뿐만 아니라 탄탄한 마크업과 웹 표준을 준수하며,
                코드로 브랜드의 가치를 전달하는 퍼블리셔입니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showIntro ? 0 : 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-5 border-t border-white/10 pt-8 font-mono text-sm"
            >
              <div className="flex items-center gap-8 group">
                <span className="text-[#00FF41] w-24 tracking-wider uppercase">
                  Phone
                </span>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  010-1234-5678
                </span>
              </div>
              <div className="flex items-center gap-8 group">
                <span className="text-[#00FF41] w-24 tracking-wider uppercase">
                  Email
                </span>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  deldeldep@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-8 group">
                <span className="text-[#00FF41] w-24 tracking-wider uppercase">
                  Location
                </span>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  Seoul, South Korea
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#00FF41] to-transparent"
          />
        </motion.div>
      </section>
    </>
  );
}