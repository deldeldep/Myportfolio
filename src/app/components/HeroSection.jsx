import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-[10%] relative overflow-hidden">
      {/* Corner Details */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-8 left-[10%]"
      >
        <p className="font-mono text-xs tracking-wider uppercase" style={{ color: '#00FF41' }}>
          Seoul, KR
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute top-8 right-[10%]"
      >
        <p className="font-mono text-xs tracking-wider uppercase text-white/60">
          Available for projects
        </p>
      </motion.div>

      {/* Main Title */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 
            className="text-[12vw] leading-[0.9] tracking-tight mb-4"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 900,
              color: '#FFFFFF'
            }}
          >
            CHAE SEOYEONG
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p 
            className="text-[2.5vw] tracking-[0.2em] uppercase"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 700,
              color: '#00FF41'
            }}
          >
            Web Publisher
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <p 
            className="font-mono text-sm tracking-wide text-white/40 max-w-2xl mx-auto"
          >
            Where Code Meets Craft
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#00FF41] to-transparent"
        />
      </motion.div>
    </section>
  );
}
