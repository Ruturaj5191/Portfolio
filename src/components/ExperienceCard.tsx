
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const ExperienceCard = () => {
  return (
    <Card className="border border-cyan-500/30 shadow-xl bg-black/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] animate-slide-up group">
      <CardHeader className="relative overflow-hidden">
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Glowing top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="flex items-center mb-4 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 animate-pulse"></div>
            <Briefcase className="text-white relative z-10 animate-float" size={28} />
          </div>
          <div>
            <CardTitle className="text-2xl text-cyan-400 animate-glow group-hover:text-cyan-300 transition-colors duration-300">
              Software Developer Intern
            </CardTitle>
            <div className="flex items-center space-x-4 mt-2">
              <p className="text-lg text-gray-300 font-semibold">A2Z IT HUB Pvt  Ltd</p>
              <div className="flex items-center space-x-1 text-cyan-400">
                <Calendar size={16} />
                <span className="text-sm">6 Months</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-purple-400 mt-1">
              <MapPin size={16} />
              <span className="text-sm">Ahilyanagar</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 relative">
        {/* Side accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"></div>
        
        <div className="grid gap-4 pl-4">
          <div className="flex items-start space-x-3 group/item hover:scale-105 transition-transform duration-200">
            <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <p className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
              Developed and implemented web applications using <span className="text-cyan-400 font-semibold">HTML, CSS, JavaScript, and Python</span> to enhance user experience.
            </p>
          </div>
          
          <div className="flex items-start space-x-3 group/item hover:scale-105 transition-transform duration-200">
            <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse animation-delay-200 shadow-lg shadow-blue-400/50"></div>
            <p className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
              Built backend services with <span className="text-blue-400 font-semibold">Python, Django and MySQL</span> to manage and process data efficiently.
            </p>
          </div>
          
          <div className="flex items-start space-x-3 group/item hover:scale-105 transition-transform duration-200">
            <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse animation-delay-400 shadow-lg shadow-purple-400/50"></div>
            <p className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
              Advanced knowledge to design and optimize applications with <span className="text-purple-400 font-semibold">modern frameworks</span>.
            </p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-cyan-500/30">
          <h4 className="font-semibold mb-4 text-cyan-400 flex items-center animate-glow">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Technologies Mastered:
          </h4>
          <div className="flex flex-wrap gap-3">
            {["Nodejs", "Express","Python", "Django", "MySQL","MongoDB","HTML", "CSS","Bootstrap","JavaScript","jquery","Ajax"].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50  border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
    
  );
};
