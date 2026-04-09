import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";


export function WorksList({ projects }) {
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoveredId !== null) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredId, mouseX, mouseY]);

  return (
    <section id="work" className="min-h-screen py-32 px-[10%]" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-sm font-mono uppercase tracking-[0.3em] mb-24"
          style={{ color: '#00FF41' }}
        >
          Selected Works
        </h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-t border-white/10 py-8 cursor-pointer block"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-16">
                  <motion.span className="font-mono text-xs md:text-sm text-white/40">
                    {project.number}
                  </motion.span>

                  <div className="flex-1">
                    <motion.h3
                      className="text-3xl sm:text-4xl md:text-6xl tracking-tight break-keep"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <motion.span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-white/40">
                    {project.category}
                  </motion.span>
                </div>
              </a>

              {/* Floating Image */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    className="fixed pointer-events-none z-50"
                    style={{
                      left: smoothX,
                      top: smoothY,
                      x: '-50%',
                      y: '-50%',
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="relative w-[400px] h-[300px] rounded-sm overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
