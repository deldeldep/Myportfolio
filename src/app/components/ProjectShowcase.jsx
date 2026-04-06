import { motion } from "motion/react";

export function ProjectShowcase({ projects }) {
  return (
    <section className="py-32 px-[10%]">
      <div className="space-y-32"> {/* 프로젝트 간의 간격을 넓게 줌 */}
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            {/* 큰 이미지 영역 */}
            <div className="w-full aspect-video rounded-sm overflow-hidden bg-white/5 relative group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 텍스트 설명 영역 */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <span className="text-[#00FF41] font-mono text-sm tracking-widest">{project.number}</span>
                <h3 className="text-4xl font-bold mt-2">{project.title}</h3>
                <p className="text-white/40 text-sm mt-1 uppercase tracking-wider">{project.category}</p>
              </div>
              
              <div className="md:w-1/2">
                <p className="text-white/70 leading-relaxed text-lg font-light">
                  {project.description} {/* data.js에 추가한 설명 출력 */}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}