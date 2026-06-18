import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Utech India Pvt. Ltd.",
    location: "Pune, India",
    role: "Software Developer",
    duration: "November 2025 – Present",
    type: "Full-time",
    tech: ["Node.js", "Express.js", "REST API", "React.js", "TypeScript", "MongoDB"],
    highlights: [
      "Engineered full-stack fintech features for Finance Bazar — loan workflows, payroll processing, compliance tracking, and incentive management across Admin, HR, and Employee roles.",
      "Designed and secured 15+ REST APIs with JWT Authentication and granular RBAC, reducing unauthorized access to zero and cutting query response time by ~30%.",
      "Built Salary Slip generation module with automated PDF export and biometric face verification using face-api.js for real-time attendance and identity matching.",
      "Collaborated in Agile code reviews improving API response structure, backend scalability, and CI/CD pipeline efficiency across production deployments and Docker."
    ]
  },
  {
    id: 2,
    company: "A2Z IT Hub Pvt. Ltd.",
    location: "Ahilyanagar, India",
    role: "Python Developer Intern",
    duration: "January 2025 – July 2025",
    type: "Internship",
    tech: ["Python", "Django", "DRF", "MySQL", "HTML5", "Bootstrap"],
    highlights: [
      "Built complete backend for a Shoes Billing Software — CRUD APIs, automated invoice generation with PDF export, and a custom admin dashboard used daily by the client.",
      "Developed a responsive business website with product catalogue, inquiry management, and SEO-optimized pages.",
      "Authored unit tests for 10+ API views using Django TestCase, increasing test coverage to 80% and reducing regression defects by ~25%."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Real-world engineering roles building production systems across fintech and SaaS.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot — Pulsing */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10 mt-8 md:mt-0">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-pulse-glow" />
                </div>
                
                <div className="flex-1 ml-14 md:ml-0 md:px-8">
                  <div className="card-shine glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col gap-3 mb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                          <span className="text-xs font-medium text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center gap-2 text-slate-300 font-medium text-sm">
                            <Briefcase size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-2 text-slate-500 text-sm">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      {/* Bullet Points */}
                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                        {exp.tech.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
