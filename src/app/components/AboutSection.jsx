import { motion } from "motion/react";

export function AboutSection() {
  const techStack = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "JQuery", 
    "React", 
    "Figma", 
    "Photoshop", 
    "Illustrator", 
    "Premiere Pro", 
    "After Effects"
  ];
  const licenses = [
    "GTQ (포토샵) 1급", 
    "GTQI (일러스트레이터) 1급", 
    "웹디자인개발기능사"
  ];

  return (
    <section id="about" className="min-h-screen py-20 md:py-32 px-[5%] md:px-[10%] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* License 영역 */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] mb-8 md:mb-16" style={{ color: '#00FF41' }}>License</h2>
          <div className="space-y-3 md:space-y-4">
            {licenses.map((license, index) => (
              <motion.div key={license} className="border border-white/10 px-4 py-4 md:px-6 md:py-5 hover:border-[#00FF41] hover:bg-[#00FF41]/5 transition-all duration-300 cursor-default group">
                <span className="font-mono text-xs md:text-sm text-white/80 group-hover:text-[#00FF41] transition-colors">{license}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack 영역 */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] mb-8 md:mb-16" style={{ color: '#00FF41' }}>Tech Stack</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {techStack.map((tech) => (
              <motion.div key={tech} className="border border-white/10 px-4 py-3 md:px-6 md:py-4 hover:border-[#00FF41] hover:bg-[#00FF41]/5 transition-all duration-300 cursor-default group">
                <span className="font-mono text-xs md:text-sm text-white/80 group-hover:text-[#00FF41] transition-colors">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}