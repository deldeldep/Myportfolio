import { motion } from "motion/react";

export function AboutSection() {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "After Effects",
  ];

  return (
    <section className="min-h-screen py-32 px-[10%] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Tech Stack 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2
              className="text-sm font-mono uppercase tracking-[0.3em]"
              style={{ color: '#00FF41' }}
            >
              Tech Stack
            </h2>
            <div className="h-[1px] w-12 bg-[#00FF41] mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 px-6 py-8 flex items-center justify-center hover:border-[#00FF41] hover:bg-[#00FF41]/5 transition-all duration-300 cursor-default group"
              >
                <span className="font-mono text-sm text-white/60 group-hover:text-[#00FF41] transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 하단 구분선 (선택 사항) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-32 border-t border-white/10"
      />
    </section>
  );
}