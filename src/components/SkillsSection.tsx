import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export const SkillsSection = () => {
const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
    ],
    color: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
  },
  {
    category: "Frontend Technologies",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "React.js",
    ],
    color: "bg-blue-500/20 text-blue-400 border border-blue-400/30"
  },
  {
    category: "Backend Technologies",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "FastAPI"
    ],
    color: "bg-purple-500/20 text-purple-400 border border-purple-400/30"
  },
  {
    category: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Database Design"
    ],
    color: "bg-orange-500/20 text-orange-400 border border-orange-400/30"
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Git & GitHub",
      "Docker (Basic)",
      "AWS (Basic)",
      "Vercel",
      "Postman",
    ],
    color: "bg-green-500/20 text-green-400 border border-green-400/30"
  }
];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-black/50 backdrop-blur-sm relative"
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 animate-glow flex items-center justify-center gap-3">
          <Code size={32} />
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-black/60 border border-cyan-500/30 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-center text-cyan-400">
                  {category.category}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${category.color} px-3 py-1 rounded-md transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
