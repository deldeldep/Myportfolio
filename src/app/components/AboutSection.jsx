import { motion } from "motion/react";

export function AboutSection() {
  const techStack = [
    "HTML5",
    "CSS3",
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
    <section className="min-h-screen py-32 px-[10%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-sm font-mono uppercase tracking-[0.3em] mb-16"
            style={{ color: '#00FF41' }}
          >
            About
          </h2>

          <div className="space-y-8">
            <p className="text-2xl leading-relaxed text-white/90 keep-all" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              저는 기획의도와 디자인의 가치를 완벽한 코드로 번역하는 웹 퍼블리셔입니다. 화면의 픽셀 하나, 코드 한 줄에도 타당한 이유를 담아냅니다.
            </p>

            <p className="text-lg leading-relaxed text-white/60 keep-all" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              시각적인 아름다움은 물론, 다양한 디바이스에 최적화된 반응형 웹 환경을 구축합니다. 영상 콘텐츠와 모션 그래픽에 대한 높은 이해도를 바탕으로, 정적인 화면을 넘어 생동감 있고 몰입감 넘치는 사용자 경험을 만들어냅니다.
            </p>

            <motion.div
              className="pt-8"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-[1px] bg-gradient-to-r from-[#00FF41] to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Services & Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-sm font-mono uppercase tracking-[0.3em] mb-16"
            style={{ color: '#00FF41' }}
          >
            Services
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                UI/UX Web Publishing
              </h3>
              <p className="text-white/60 font-mono text-sm leading-relaxed keep-all">
                사용자 중심의 직관적인 인터페이스 설계 및 웹 표준/웹 접근성을 준수한 시맨틱 마크업 구현
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                Interactive Web Contents
              </h3>
              <p className="text-white/60 font-mono text-sm leading-relaxed keep-all">
                동적인 애니메이션과 영상 매체를 활용한 트렌디하고 몰입감 있는 웹 화면 개발
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                Responsive & Cross-Browsing
              </h3>
              <p className="text-white/60 font-mono text-sm leading-relaxed keep-all">
                PC, 태블릿, 모바일 등 모든 디바이스와 브라우저 환경에서 깨짐 없이 완벽하게 동작하는 웹 구축
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3
              className="text-sm font-mono uppercase tracking-[0.3em] mb-8"
              style={{ color: '#00FF41' }}
            >
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white/10 px-6 py-4 hover:border-[#00FF41] hover:bg-[#00FF41]/5 transition-all duration-300 cursor-default"
                >
                  <span className="font-mono text-sm text-white/80">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Value Proposition Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-32 pt-16 border-t border-white/10"
      >
        <div className="text-center">
          <motion.h3
            className="text-5xl lg:text-6xl tracking-tight leading-tight keep-all"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            기획과 디자인의 가치를
            <br />
            <span style={{ color: '#00FF41' }}>생동감 있는 웹 경험으로</span>
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
}