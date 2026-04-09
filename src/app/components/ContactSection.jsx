import { motion } from "motion/react";
import { Mail, Phone, Github } from "lucide-react"; 

export function ContactSection() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:deldeldep@gmail.com", handle: "deldeldep@gmail.com" },
    { icon: Phone, label: "Phone", href: "tel:010-1234-5678", handle: "010-1234-5678" }, 
    { icon: Github, label: "GitHub", href: "https://github.com/deldeldep", handle: "@deldeldep" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-[5%] md:px-[10%] py-20 md:py-32 relative">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2
            className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] mb-8 md:mb-16"
            style={{ color: '#00FF41' }}
          >
            Contact
          </h2>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 md:mb-8 keep-all"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            아이디어를 현실로
          </motion.h3>

          <motion.p
            className="text-sm md:text-lg text-white/60 max-w-2xl mx-auto keep-all leading-relaxed px-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            웹 퍼블리싱 및 프론트엔드 관련 채용 제안이나 협업 문의를 환영합니다.<br /> 
            함께 성장하며 멋진 결과물을 만들어갈 기회를 기다리고 있습니다.
          </motion.p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-24 max-w-md md:max-w-none mx-auto" 
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="group border border-white/10 p-5 md:p-8 hover:border-[#00FF41] transition-all duration-300 relative overflow-hidden block"
              >
                <div className="absolute inset-0 bg-[#00FF41] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4 md:gap-6 w-full pr-4">
                    <Icon
                      size={20}
                      className="text-white/40 group-hover:text-[#00FF41] transition-colors duration-300 shrink-0 md:w-6 md:h-6"
                    />
                    <div className="min-w-0"> 
                      <p className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                        {social.label}
                      </p>
                      <p className="text-sm md:text-lg break-all" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                        {social.handle}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="text-[#00FF41] opacity-0 group-hover:opacity-100 hidden md:block"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-10 md:pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="font-mono text-[10px] md:text-xs text-white/40 tracking-wider">
              © 2026 CHAE SEOYEONG. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex items-center gap-8">
              <div className="font-mono text-[10px] md:text-xs text-white/40 tracking-wider">
                DESIGNED & DEVELOPED BY <span style={{ color: '#00FF41' }}>■</span> CHAE SEOYEONG
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
    </section>
  );
}