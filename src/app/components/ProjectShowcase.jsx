import { motion } from "motion/react";

export function ProjectShowcase({ projects }) {
  return (
    <section id="projects" className="py-20 md:py-32 px-[5%] md:px-[10%]">
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <div 
              className="w-full max-h-[80vh] rounded-sm overflow-y-auto overflow-x-hidden bg-white/5 relative custom-scrollbar border border-white/10"
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
                  className="w-full h-auto object-top transition-opacity duration-500 hover:opacity-90 block"
                />
              </a>
            </div>

            <div>
              <span className="text-[#00FF41] font-mono text-xs md:text-sm tracking-widest">
                {project.number}
              </span>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                {project.title}
              </h3>
              
              <p className="text-white/40 text-xs md:text-sm mt-1 uppercase tracking-wider">
                {project.category}
              </p>
              
              <p className="text-white/70 leading-relaxed text-sm md:text-base lg:text-lg font-light mt-4 md:mt-6">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}