import { motion } from "motion/react";

export function ProjectShowcase({ projects }) {
  return (
    <section className="py-32 px-[10%]">
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            {/* 💡 수정된 큰 이미지 영역 */}
            <div 
              // h-[600px] 또는 h-[60vh] 등 원하는 최대 높이를 설정하세요.
              // custom-scrollbar 클래스는 아래 2번에서 스타일링할 예정입니다.
              className="w-full h-[70vh] rounded-sm overflow-y-auto overflow-x-hidden bg-white/5 relative custom-scrollbar border border-white/10"
            >
              <img 
                src={project.image} 
                alt={project.title}
                // object-cover 대신 h-auto를 주어 원본 비율대로 세로로 길어지게 합니다.
                className="w-full h-auto object-top transition-opacity duration-500 hover:opacity-90"
              />
            </div>

            {/* 텍스트 설명 영역 (이전과 동일) */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <span className="text-[#00FF41] font-mono text-sm tracking-widest">{project.number}</span>
                <h3 className="text-4xl font-bold mt-2">{project.title}</h3>
                <p className="text-white/40 text-sm mt-1 uppercase tracking-wider">{project.category}</p>
              </div>
              
              <div className="md:w-1/2">
                <p className="text-white/70 leading-relaxed text-lg font-light">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}