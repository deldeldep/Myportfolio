import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:contact@alexkim.design", handle: "contact@alexkim.design" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", handle: "/in/alexkim" },
    { icon: Github, label: "GitHub", href: "https://github.com", handle: "@alexkim" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", handle: "@alexkim_design" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-[10%] py-32 relative">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2
            className="text-sm font-mono uppercase tracking-[0.3em] mb-16"
            style={{ color: '#00FF41' }}
          >
            Let's Connect
          </h2>

          <motion.h3
            className="text-6xl lg:text-8xl tracking-tight leading-tight mb-8"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            READY TO CREATE
            <br />
            <span style={{ color: '#00FF41' }}>SOMETHING GREAT?</span>
          </motion.h3>

          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm currently available for freelance projects and collaborations.
            Let's turn your vision into reality.
          </motion.p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24"
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
                className="group border border-white/10 p-8 hover:border-[#00FF41] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#00FF41] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-6">
                    <Icon
                      size={24}
                      className="text-white/40 group-hover:text-[#00FF41] transition-colors duration-300"
                    />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                        {social.label}
                      </p>
                      <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                        {social.handle}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="text-[#00FF41] opacity-0 group-hover:opacity-100"
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
          className="border-t border-white/10 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-mono text-xs text-white/40 tracking-wider">
              © 2026 ALEX KIM. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex items-center gap-8">
              <div className="font-mono text-xs text-white/40 tracking-wider">
                DESIGNED & DEVELOPED WITH <span style={{ color: '#00FF41' }}>■</span> PRECISION
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#00FF41' }}>
              Where Code Meets Craft
            </p>
          </motion.div>
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
