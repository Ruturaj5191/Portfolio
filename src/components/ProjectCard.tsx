
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Github, Zap } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

export const ProjectCard = ({ title, description, technologies, features }: ProjectCardProps) => {
  return (
    <Card className="h-full border border-cyan-500/30 shadow-xl bg-black/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Side accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-600/30 animate-pulse"></div>
            <Code className="text-white relative z-10" size={24} />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl text-cyan-400 animate-glow group-hover:text-cyan-300 transition-colors duration-300 flex items-center">
              {title}
              <ExternalLink className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
            </CardTitle>
          </div>
        </div>
        
        <CardDescription className="text-base leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        <div>
          <h4 className="font-semibold mb-3 text-cyan-400 flex items-center animate-glow">
            <Zap className="mr-2" size={16} />
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-500/30 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3 text-purple-400 flex items-center animate-glow">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            Key Features:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group/item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-3 pt-4 border-t border-cyan-500/20">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-sm">
            <Github size={16} />
            <span>Code</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm">
            <ExternalLink size={16} />
            <span>Demo</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
