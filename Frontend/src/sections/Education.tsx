import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <GraduationCap className="text-primary" size={22} />
              </div>
              Education
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-shine glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="flex items-center gap-1.5 text-primary text-xs font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
                    <Calendar size={12} />
                    2024 – 2026
                  </span>
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    CGPA: 8.25
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Master of Computer Applications (MCA)</h4>
                <p className="text-slate-300 text-sm font-medium mb-1">Siddhant Institute of Computer Application, Pune</p>
                <p className="text-slate-500 text-xs">Savitribai Phule Pune University</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-shine glass p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="flex items-center gap-1.5 text-secondary text-xs font-semibold bg-secondary/10 px-2.5 py-1 rounded-full">
                    <Calendar size={12} />
                    2021 – 2024
                  </span>
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    CGPA: 8.63
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Bachelor of Computer Science (B.Sc CS)</h4>
                <p className="text-slate-300 text-sm font-medium mb-1">New Arts, Commerce and Science College, Ahilyanagar</p>
                <p className="text-slate-500 text-xs">Savitribai Phule Pune University</p>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Award className="text-accent" size={22} />
              </div>
              Certifications
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-shine glass p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 bg-gradient-to-br from-accent/5 to-transparent flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  <Award className="text-accent" size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      2024
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">Full Stack Development Certification</h4>
                  <p className="text-slate-400 text-sm">A2Z IT Hub Pvt. Ltd., Ahilyanagar</p>
                </div>
              </motion.div>

              {/* Placeholder for future certs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass p-6 rounded-2xl border border-dashed border-white/10 flex items-center justify-center min-h-[100px]"
              >
                <p className="text-slate-600 text-sm text-center italic">
                  More certifications coming soon...
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
