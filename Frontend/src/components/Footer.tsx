import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">Ruturaj<span className="text-primary">.dev</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer specializing in Python/Django & MERN Stack. Building production-grade, scalable web applications.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/Ruturaj5191" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <GithubIcon size={18} />
              </a>
              <a href="https://linkedin.com/in/ruturaj-vidhate" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:ruturajvidhate5656@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:ruturajvidhate5656@gmail.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-primary transition-colors">
                <Mail size={16} />
                ruturajvidhate5656@gmail.com
              </a>
              <p className="text-sm text-slate-500">
                Pune, Maharashtra, India — 411033
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Ruturaj Vidhate. Built with <Heart size={14} className="text-red-400 fill-red-400 inline" /> and React.
          </p>
          <p className="text-xs text-slate-600">
            Designed & Developed by Ruturaj Vidhate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
