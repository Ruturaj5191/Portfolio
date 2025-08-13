import { useEffect, useRef } from 'react';

export const CircuitBoard = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('.circuit-path');
    
    paths.forEach((path, index) => {
      const element = path as SVGPathElement;
      const length = element.getTotalLength();
      
      element.style.strokeDasharray = `${length}`;
      element.style.strokeDashoffset = `${length}`;
      element.style.animation = `circuit-draw 4s ease-in-out ${index * 0.5}s infinite`;
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 opacity-10">
      <svg ref={svgRef} className="w-full h-full" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#0080ff" />
            <stop offset="100%" stopColor="#8000ff" />
          </linearGradient>
        </defs>
        
        {/* Horizontal circuits */}
        <path 
          className="circuit-path"
          d="M0,200 L300,200 L320,180 L400,180 L420,200 L800,200"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path 
          className="circuit-path"
          d="M1920,400 L1600,400 L1580,420 L1500,420 L1480,400 L1200,400"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path 
          className="circuit-path"
          d="M0,600 L400,600 L420,580 L500,580 L520,600 L900,600"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Vertical circuits */}
        <path 
          className="circuit-path"
          d="M300,0 L300,300 L280,320 L280,400 L300,420 L300,800"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path 
          className="circuit-path"
          d="M800,0 L800,250 L820,270 L820,350 L800,370 L800,700"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path 
          className="circuit-path"
          d="M1400,1080 L1400,750 L1420,730 L1420,650 L1400,630 L1400,300"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Circuit nodes */}
        <circle cx="300" cy="200" r="4" fill="#00ffff" className="animate-pulse" />
        <circle cx="800" cy="400" r="4" fill="#00ffff" className="animate-pulse" />
        <circle cx="1400" cy="600" r="4" fill="#00ffff" className="animate-pulse" />
        <circle cx="420" cy="580" r="4" fill="#8000ff" className="animate-pulse" />
        <circle cx="1580" cy="420" r="4" fill="#8000ff" className="animate-pulse" />
      </svg>
      
    </div>
  );
};