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
            {/* 이미지 영역 */}
            <div 
              className="w-full h-[80vh] rounded-sm overflow-y-auto overflow-x-hidden bg-white/5 relative custom-scrollbar border border-white/10"
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-top transition-opacity duration-500 hover:opacity-90"
                />
              </a>
            </div>

            {/* 텍스트 영역 */}
            <div>
              <span className="text-[#00FF41] font-mono text-sm tracking-widest">{project.number}</span>
              <h3 className="text-4xl font-bold mt-2">{project.title}</h3>
              <p className="text-white/40 text-sm mt-1 uppercase tracking-wider">{project.category}</p>
              <p className="text-white/70 leading-relaxed text-lg font-light mt-6">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}