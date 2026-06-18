import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Monitor, Server, Database, Cpu, Layers, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={20} />,
    color: "primary",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 65 },
      { name: "SQL", level: 85 },
      { name: "HTML5", level: 92 },
      { name: "CSS", level: 88 },
    ]
  },
  {
    title: "Frameworks",
    icon: <Layers size={20} />,
    color: "secondary",
    skills: [
      { name: "Django", level: 90 },
      { name: "Django REST Framework", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "React.js", level: 85 },
      { name: "React Native", level: 70 },
    ]
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    color: "accent",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
    ]
  },
  {
    title: "Frontend & Styling",
    icon: <Monitor size={20} />,
    color: "primary",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap 5", level: 85 },
      { name: "Framer Motion", level: 75 },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Cpu size={20} />,
    color: "secondary",
    skills: [
      { name: "AWS", level: 65 },
      { name: "Docker", level: 70 },
      { name: "Git & GitHub", level: 90 },
      { name: "Jenkins", level: 60 },
      { name: "Postman", level: 92 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 80 },
      { name: "Linux", level: 70 },
    ]
  },
  {
    title: "Architecture",
    icon: <Server size={20} />,
    color: "accent",
    skills: [
      { name: "RESTful APIs", level: 92 },
      { name: "JWT Auth", level: 90 },
      { name: "RBAC", level: 88 },
      { name: "Microservices", level: 70 },
      { name: "MVC/MVT", level: 85 },
      { name: "OOP", level: 88 },
    ]
  },
  {
    title: "Methodologies",
    icon: <GitBranch size={20} />,
    color: "primary",
    skills: [
      { name: "Agile", level: 85 },
      { name: "Scrum", level: 82 },
      { name: "CI/CD", level: 78 },
    ]
  }
];

const colorMap: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  primary: {
    bg: 'bg-primary/20',
    border: 'border-primary/30',
    text: 'text-primary',
    bar: 'bg-gradient-to-r from-primary to-primary/60'
  },
  secondary: {
    bg: 'bg-secondary/20',
    border: 'border-secondary/30',
    text: 'text-secondary',
    bar: 'bg-gradient-to-r from-secondary to-secondary/60'
  },
  accent: {
    bg: 'bg-accent/20',
    border: 'border-accent/30',
    text: 'text-accent',
    bar: 'bg-gradient-to-r from-accent to-accent/60'
  }
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A comprehensive toolkit spanning the full development lifecycle — from backend architecture to deployment.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category, idx) => {
            const colors = colorMap[category.color];
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? `${colors.bg} ${colors.text} ${colors.border} border shadow-lg shadow-primary/10`
                    : 'bg-white/5 text-slate-400 border border-transparent hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Skills with Animated Bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${colorMap[skillCategories[activeTab].color].bg} flex items-center justify-center ${colorMap[skillCategories[activeTab].color].text}`}>
                  {skillCategories[activeTab].icon}
                </div>
                {skillCategories[activeTab].title}
              </h3>

              <div className="space-y-5">
                {skillCategories[activeTab].skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className={`text-xs font-semibold ${colorMap[skillCategories[activeTab].color].text}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: sIdx * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full ${colorMap[skillCategories[activeTab].color].bar}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Skill Pills — All Skills at a Glance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-center text-sm text-slate-500 font-medium mb-6 uppercase tracking-wider">All technologies at a glance</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap(cat => cat.skills).map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
