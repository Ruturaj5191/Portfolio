import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import Button from '../components/Button';
import ParticleBackground from '../components/ParticleBackground';

const roles = [
  "Full Stack Developer",
  "Python / Django Specialist",
  "MERN Stack Engineer",
  "REST API Architect",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_DURATION = 2000;

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const techBadges = [
    { label: "Python", x: "10%", y: "15%", delay: 0 },
    { label: "React", x: "85%", y: "20%", delay: 0.5 },
    { label: "Node.js", x: "75%", y: "75%", delay: 1 },
    { label: "Django", x: "5%", y: "70%", delay: 1.5 },
    { label: "MongoDB", x: "90%", y: "50%", delay: 2 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] -z-10" />
      
      {/* Floating Tech Badges */}
      {techBadges.map((badge, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + badge.delay, duration: 0.5 }}
          className="absolute hidden lg:block animate-float-slow z-0"
          style={{ left: badge.x, top: badge.y, animationDelay: `${badge.delay}s` }}
        >
          <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 backdrop-blur-sm">
            {badge.label}
          </div>
        </motion.div>
      ))}
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Open for opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Ruturaj Vidhate</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 h-10">
              {displayText}
              <span className="typing-cursor" />
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Full Stack Developer specializing in <span className="text-white font-medium">Python/Django</span> & <span className="text-white font-medium">Node.js/React</span>, delivering production-grade fintech and SaaS applications with clean, scalable backend architecture.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a href="/Ruturaj_Vidhate_Resume.pdf" download="Ruturaj_Vidhate_Resume.pdf">
              <Button icon={<Download size={18} />}>
                Download Resume
              </Button>
            </a>
            <Button variant="secondary" icon={<ArrowRight size={18} />} onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
              View Projects
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 mt-8"
          >
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Connect with me</p>
            <div className="flex gap-4">
              <a href="https://github.com/Ruturaj5191" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/ruturaj-vidhate" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:ruturajvidhate5656@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Outer animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
            {/* Inner animated ring */}
            <div className="absolute inset-4 rounded-full border border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" />
            {/* Pulsing glow ring */}
            <div className="absolute inset-2 rounded-full animate-pulse-glow" />
            {/* Profile image container */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.25)]">
              <img src="/Gemini_Generated_Image_qp7uejqp7uejqp7u.png" alt="Ruturaj Vidhate" className="w-full h-full object-cover" />
            </div>
            {/* Status badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-2 right-8 bg-background border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300">Available for hire</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
