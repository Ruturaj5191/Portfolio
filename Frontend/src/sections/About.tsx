import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '1+', icon: <Code2 className="text-primary" size={24} />, gradient: 'from-primary/20 to-primary/5' },
    { label: 'APIs Developed', value: '30+', icon: <Server className="text-secondary" size={24} />, gradient: 'from-secondary/20 to-secondary/5' },
    { label: 'Live Platforms', value: '3+', icon: <Layout className="text-accent" size={24} />, gradient: 'from-accent/20 to-accent/5' },
    { label: 'Databases', value: 'SQL/NoSQL', icon: <Database className="text-primary" size={24} />, gradient: 'from-primary/20 to-primary/5' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-block py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Passionate about creating <span className="gradient-text">scalable solutions</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a Full Stack Developer based in <span className="text-white font-medium">Pune, Maharashtra, India</span>, specializing in Python, Django, Node.js, and React.js — delivering production-grade fintech and SaaS applications with clean, scalable backend architecture.
              </p>
              <p>
                I've designed and secured <span className="text-white font-medium">30+ REST APIs</span> with JWT Authentication and RBAC across <span className="text-white font-medium">3 live platforms</span>, reducing unauthorized access to zero and improving query response time by 30%.
              </p>
              <p>
                I have a proven ability to ship real-world features — from biometric attendance systems to automated payroll modules — using <span className="text-white font-medium">Agile, CI/CD, Docker, and AWS</span>.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 grid grid-cols-2 gap-4 w-full"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`card-shine glass rounded-2xl p-6 flex flex-col items-start gap-4 border border-white/5 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br ${stat.gradient}`}
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
