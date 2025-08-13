
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Java"],
      color: "bg-green-100 text-green-700 hover:bg-green-200"
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
      color: "bg-blue-100 text-blue-700 hover:bg-blue-200"
    },
    {
      category: "Backend Technologies",
      skills: ["Python", "Django", "REST APIs"],
      color: "bg-purple-100 text-purple-700 hover:bg-purple-200"
    },
    {
      category: "Databases",
      skills: ["MySQL", "Database Design", "Query Optimization"],
      color: "bg-orange-100 text-orange-700 hover:bg-orange-200"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-center text-slate-800">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`${category.color} transition-colors duration-200`}
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
