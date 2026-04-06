import { motion } from "motion/react";

export function AboutSection() {
  const techStack = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "Node.js",
    "Figma",
    "WebGL",
  ];

  return (
    <section className="min-h-screen py-32 px-[10%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-sm font-mono uppercase tracking-[0.3em] mb-16"
            style={{ color: '#00FF41' }}
          >
            About
          </h2>

          <div className="space-y-8">
            <p className="text-2xl leading-relaxed text-white/90" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              I'm a digital artisan focused on creating sophisticated interfaces 
              where precision meets creativity. Every pixel serves a purpose.
            </p>

            <p className="text-lg leading-relaxed text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              With over 8 years of experience in digital product design and 
              development, I specialize in crafting experiences that blend 
              minimalist aesthetics with cutting-edge technology.
            </p>

            <motion.div
              className="pt-8"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-[1px] bg-gradient-to-r from-[#00FF41] to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Services & Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-sm font-mono uppercase tracking-[0.3em] mb-16"
            style={{ color: '#00FF41' }}
          >
            Services
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                Digital Product Design
              </h3>
              <p className="text-white/60 font-mono text-sm leading-relaxed">
                End-to-end design solutions from concept to deployment
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                Interactive Experiences
              </h3>
              <p className="text-white/60 font-mono text-sm leading-relaxed">
                Motion design and WebGL-powered immersive interfaces
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                Brand & Visual Identity
              </h3>
              <p className="text-white/60 font-mono text-sm leading-relaxed">
                Crafting distinctive visual languages for digital products
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3
              className="text-sm font-mono uppercase tracking-[0.3em] mb-8"
              style={{ color: '#00FF41' }}
            >
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white/10 px-6 py-4 hover:border-[#00FF41] hover:bg-[#00FF41]/5 transition-all duration-300 cursor-default"
                >
                  <span className="font-mono text-sm text-white/80">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Value Proposition Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-32 pt-16 border-t border-white/10"
      >
        <div className="text-center">
          <motion.h3
            className="text-5xl lg:text-7xl tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TURNING COMPLEX PROBLEMS
            <br />
            INTO <span style={{ color: '#00FF41' }}>ELEGANT SOLUTIONS</span>
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
}
