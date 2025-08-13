import { useEffect, useState } from 'react';

export const CodeTerminal = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const codeLines = [
    "$ git clone https://github.com/developer/portfolio.git",
    "$ cd portfolio && npm install",
    "$ npm run dev",
    "> Starting development server...",
    "> Server running on http://localhost:3000",
    "$ git add .",
    "$ git commit -m 'Enhanced cyber animations'",
    "$ git push origin main",
    "> Deployment successful ✅",
    "$ whoami",
    "> Full Stack Developer",
    "$ skills --list",
    "> React, TypeScript, Node.js, Python, AWS...",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < codeLines.length) {
        const currentLine = codeLines[currentIndex];
        if (displayText.length < currentLine.length) {
          setDisplayText(currentLine.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setDisplayText('');
          }, 2000);
        }
      } else {
        setCurrentIndex(0);
        setDisplayText('');
      }
    }, 100);

    return () => clearInterval(timer);
  }, [displayText, currentIndex, codeLines]);

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 font-mono text-sm text-green-400 z-30 max-w-md">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">Terminal</span>
      </div>
      <div className="h-8 flex items-center">
        <span className="text-cyan-400">dev@portfolio:~$ </span>
        <span>{displayText}</span>
        <span className="animate-pulse text-green-400">█</span>
      </div>
    </div>
  );
};