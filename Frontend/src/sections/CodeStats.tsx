import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Globe, Shield, TrendingUp } from 'lucide-react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const stats: StatItem[] = [
  {
    label: 'REST APIs',
    value: 30,
    suffix: '+',
    icon: <Zap size={28} />,
    description: 'Designed & secured with JWT Auth and RBAC',
    color: 'from-primary to-secondary'
  },
  {
    label: 'Live Platforms',
    value: 3,
    suffix: '+',
    icon: <Globe size={28} />,
    description: 'Production-grade fintech & SaaS applications',
    color: 'from-secondary to-accent'
  },
  {
    label: 'Test Coverage',
    value: 80,
    suffix: '%',
    icon: <Shield size={28} />,
    description: 'Unit tests reducing regression defects by 25%',
    color: 'from-accent to-primary'
  },
  {
    label: 'Query Speed',
    value: 30,
    suffix: '%',
    icon: <TrendingUp size={28} />,
    description: 'Faster response time through optimization',
    color: 'from-primary to-accent'
  }
];

const AnimatedCounter: React.FC<{ target: number; suffix: string; inView: boolean }> = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="stat-shimmer text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
};

const CodeStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            Impact Metrics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results, <span className="gradient-text">Measured</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Numbers that reflect the quality and scale of my work across production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-shine glass rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-500 text-center group"
            >
              <div className={`w-14 h-14 mx-auto mb-6 rounded-xl bg-gradient-to-br ${stat.color} p-[1px]`}>
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              
              <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={isInView} />
              
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">{stat.label}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeStats;
