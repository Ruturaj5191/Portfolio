import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+{}[]|\\:";\'<>?,./~`1234567890';

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        setIsGlitching(true);
        
        const glitchDuration = Math.random() * 200 + 100; // 100-300ms
        const glitchCount = Math.floor(Math.random() * 3) + 1; // 1-3 glitches
        
        let currentGlitch = 0;
        const glitchTimer = setInterval(() => {
          const chars = text.split('');
          const glitchPositions = Array.from({length: Math.floor(chars.length * 0.3)}, () => 
            Math.floor(Math.random() * chars.length)
          );
          
          glitchPositions.forEach(pos => {
            chars[pos] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          });
          
          setGlitchText(chars.join(''));
          currentGlitch++;
          
          if (currentGlitch >= glitchCount) {
            clearInterval(glitchTimer);
            setGlitchText(text);
            setIsGlitching(false);
          }
        }, glitchDuration / glitchCount);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [text, glitchChars]);

  return (
    <span 
      className={`relative inline-block ${className} ${
        isGlitching ? 'animate-pulse' : ''
      }`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00'
          : 'none'
      }}
    >
      {glitchText}
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 text-red-500 opacity-80"
            style={{ transform: 'translate(2px, 0)' }}
          >
            {glitchText}
          </span>
          <span 
            className="absolute inset-0 text-cyan-500 opacity-80"
            style={{ transform: 'translate(-2px, 0)' }}
          >
            {glitchText}
          </span>
        </>
      )}
    </span>
  );
};