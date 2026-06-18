import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

const projects = [
  {
    title: "Finance Bazar",
    role: "Software Developer",
    description: "A comprehensive fintech platform for loan workflows, payroll processing, compliance tracking, and incentive management — across Admin, HR, and Employee roles.",
    impact: "Designed and secured 15+ REST APIs with JWT Authentication and granular RBAC, reducing unauthorized access to zero. Built Salary Slip generation with automated PDF export and face-api.js biometric verification.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Ruturaj5191",
    live: "#",
    featured: true,
    gradient: "from-indigo-500/20 to-purple-600/20"
  },
  {
    title: "E-Commerce Platform",
    role: "Full Stack Developer",
    description: "Full-stack e-commerce engine with product catalogue, cart, checkout, and separate Admin/Customer dashboards with RBAC across 15+ API endpoints.",
    impact: "Optimized Django ORM using select_related() & prefetch_related(), reducing DB query count by ~40% on product search endpoints.",
    tech: ["Python", "Django", "DRF", "MySQL", "React.js"],
    github: "https://github.com/Ruturaj5191",
    live: "#",
    gradient: "from-cyan-500/20 to-blue-600/20"
  },
  {
    title: "Smart Key Management",
    role: "Full Stack Developer",
    description: "Full-stack key tracking system with real-time status monitoring, automated overdue detection, and JWT-based RBAC across 20+ API endpoints.",
    impact: "Automated overdue tracking using Node.js Cron jobs, ensuring 100% compliance with key return policies.",
    tech: ["Node.js", "Express.js", "MySQL", "React.js"],
    github: "https://github.com/Ruturaj5191",
    live: "#",
    gradient: "from-emerald-500/20 to-teal-600/20"
  },
  {
    title: "Car Rental System",
    role: "Full Stack Developer",
    description: "Full-stack car rental platform with vehicle listing, booking management, and secure user authentication with role-based Admin/Customer access.",
    impact: "Designed Admin dashboard for fleet management, booking approvals, and real-time availability tracking.",
    tech: ["Node.js", "Express.js", "MySQL", "React.js"],
    github: "https://github.com/Ruturaj5191",
    live: "#",
    gradient: "from-orange-500/20 to-amber-600/20"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Real-world applications built with modern tech stacks, focused on scalability and clean architecture.
          </p>
        </div>

        {/* Featured Project — Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="card-shine glass rounded-2xl overflow-hidden border border-primary/30 hover:border-primary/50 transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Side */}
              <div className={`lg:w-2/5 h-48 lg:h-auto relative overflow-hidden bg-gradient-to-br ${projects[0].gradient}`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmMTUiIGQ9Ik00IDRoMTZ2MTZINHoib3BhY2l0eT0iLjIiLz48L3N2Zz4=')] bg-repeat opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full blur-[20px] group-hover:bg-primary/40 transition-all duration-500" />
                    <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold backdrop-blur-sm">
                      ⭐ Featured Project
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-3/5 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded">
                    {projects[0].role}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{projects[0].title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{projects[0].description}</p>
                <div className="mb-6 p-4 rounded-lg bg-white/5 border-l-2 border-primary/50 text-slate-300 text-sm leading-relaxed">
                  <span className="font-bold text-primary">Impact:</span> {projects[0].impact}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <GithubIcon size={18} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects — Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(1).map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-shine glass rounded-2xl overflow-hidden flex flex-col group border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className={`h-40 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmMTUiIGQ9Ik00IDRoMTZ2MTZINHoib3BhY2l0eT0iLjIiLz48L3N2Zz4=')] bg-repeat opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent z-10" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full blur-[30px] group-hover:bg-white/10 transition-all duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-background hover:scale-110 transition-transform">
                    <GithubIcon size={24} />
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded w-fit mb-3">
                  {project.role}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mb-4 p-3 rounded-lg bg-white/5 border-l-2 border-primary/50 text-slate-300 text-xs leading-relaxed">
                  <span className="font-bold text-primary">Impact:</span> {project.impact}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
