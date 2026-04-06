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
      if (containerRef.current && hoveredId !== null) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredId, mouseX, mouseY]);

  return (
    <section className="min-h-screen py-32 px-[10%]" ref={containerRef}>
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
              <div className="border-t border-white/10 py-8 cursor-pointer">
                <div className="flex items-center gap-16">
                  <motion.span
                    className="font-mono text-sm text-white/40"
                    animate={
                      hoveredId === project.id
                        ? { x: 10, color: '#00FF41' }
                        : { x: 0, color: 'rgba(255,255,255,0.4)' }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {project.number}
                  </motion.span>

                  <div className="flex-1">
                    <motion.h3
                      className="text-6xl tracking-tight"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}
                      animate={
                        hoveredId === project.id
                          ? { x: 20, color: '#FFFFFF' }
                          : { x: 0, color: '#FFFFFF' }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <motion.span
                    className="font-mono text-xs uppercase tracking-wider text-white/40"
                    animate={
                      hoveredId === project.id
                        ? { opacity: 1 }
                        : { opacity: 0.4 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
              </div>

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
