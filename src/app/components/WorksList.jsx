import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

export function WorksList({ projects }) {
  const [hoveredId, setHoveredId] = useState(null);
  
  // 특정 프로젝트 영역으로 스크롤하는 함수
  const scrollToProject = (projectId) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      const offset = 100; // 상단 여백 조절
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

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
    <section id="work" className="min-h-screen py-32 px-[10%]">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] mb-24" style={{ color: '#00FF41' }}>
          Selected Works
        </h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                onClick={() => scrollToProject(project.id)}
                className="border-t border-white/10 py-8 cursor-pointer block group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-16">
                  <motion.span 
                    className="font-mono text-xs md:text-sm text-white/40"
                    animate={hoveredId === project.id ? { x: 10, color: '#00FF41' } : { x: 0 }}
                  >
                    {project.number}
                  </motion.span>

                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl sm:text-3xl md:text-4xl tracking-tight break-keep"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                      animate={hoveredId === project.id ? { x: 20 } : { x: 0 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <motion.span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-white/40">
                    {project.category}
                  </motion.span>
                </div>
              </div>

              {/* Floating Image (동일) */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    className="fixed pointer-events-none z-50 hidden lg:block"
                    style={{ left: smoothX, top: smoothY, x: '-50%', y: '-50%' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <div className="relative w-[400px] h-[300px] rounded-sm overflow-hidden border border-white/10">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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