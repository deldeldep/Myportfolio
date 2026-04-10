import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react"; // 💡 아이콘 추가

export function ProjectShowcase({ projects }) {
  return (
    <section id="projects" className="py-20 md:py-32 px-[5%] md:px-[10%]">
      <div className="space-y-24 md:space-y-48">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            id={`project-${project.id}`} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 md:gap-8 scroll-mt-24" 
          >
            {/* 이미지 영역 */}
            <div className="w-full max-h-[80vh] rounded-sm overflow-y-auto overflow-x-hidden bg-white/5 relative custom-scrollbar border border-white/10">
              <img src={project.image} alt={project.title} className="w-full h-auto object-top" />
            </div>

            {/* 텍스트 및 링크 영역 */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-2xl">
                <span className="text-[#00FF41] font-mono text-xs md:text-sm">{project.number}</span>
                <h3 className="text-2xl md:text-4xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="text-white/70 text-sm md:text-lg font-light mb-6">{project.description}</p>
              </div>

              {/* 버튼 그룹 */}
              <div className="flex flex-wrap gap-4">
                {/* Visit Site 버튼 */}
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#00FF41] hover:text-[#00FF41] transition-all duration-300 group"
                  >
                    <span className="font-mono text-xs uppercase">Visit Site</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}

                {/* Visit GitHub 버튼 */}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#00FF41] hover:text-[#00FF41] transition-all duration-300 group"
                  >
                    <span className="font-mono text-xs uppercase">Visit GitHub</span>
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}