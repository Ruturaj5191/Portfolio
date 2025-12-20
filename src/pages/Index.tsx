
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Code, Briefcase, User, Book, Link, Folder, Phone, Linkedin } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { CyberBackground } from "@/components/CyberBackground";
import { FireCursor } from "@/components/FireCursor";
import { MatrixRain } from "@/components/MatrixRain";
import { CodeTerminal } from "@/components/CodeTerminal";
import { CircuitBoard } from "@/components/CircuitBoard";
import { GlitchText } from "@/components/GlitchText";
import profileImg from "@/assets/profile.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-commerce Web Application (Node.js)",
      description:
        "A scalable e-commerce web application built using Node.js and Express, featuring secure authentication, product management, and a dynamic shopping cart system.",
      technologies: ["Node.js", "Express.js", "MySQL", "EJS", "Bootstrap", "JavaScript"],
      features: [
        "User authentication & authorization",
        "Product management (CRUD)",
        "Dynamic shopping cart",
        "Order tracking system",
        "Image upload & management",
        "Admin dashboard"
      ]
    },
    {
      title: "Hospital Management System",
      description:
        "A role-based hospital management system designed to streamline administrative and clinical workflows through a secure and user-friendly web interface.",
      technologies: ["Python", "Django", "MySQL"],
      features: [
        "Role-based access control",
        "Patient & staff management",
        "Secure data handling",
        "Dynamic and responsive UI"
      ]
    },
    {
      title: "Online Learning Platform",
      description:
        "A full-stack online learning platform enabling instructors to create courses and students to enroll, learn, and manage educational content efficiently.",
      technologies: ["Python", "Django", "MySQL"],
      features: [
        "Course creation & management",
        "Student enrollment system",
        "Admin dashboard",
        "Scalable backend architecture"
      ]
    },
    {
      title: "E-commerce Web Application (Python & Django)",
      description:
        "A full-featured e-commerce platform developed with Django, supporting secure user authentication, product browsing, and order management.",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "User authentication system",
        "Product catalog & search",
        "Add to cart & quantity control",
        "Order management",
        "Admin panel for product control"
      ]
    },
    {
      title: "Online Food Ordering System",
      description:
        "A dynamic food ordering web application that allows users to browse menus, place orders, and manage restaurant operations efficiently.",
      technologies: ["Python", "Django", "MySQL"],
      features: [
        "Menu browsing & ordering",
        "Order management system",
        "Restaurant management",
        "Secure backend workflows"
      ]
    }
  ];


  const navigation = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CyberBackground />
      <MatrixRain />
      <CircuitBoard />
      <FireCursor />


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Ruturaj Vidhate
            </div>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-10 animate-float">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-70"></div>
              <div className="relative w-full h-full rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/60 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Ruturaj Vidhate"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-glow">
              Ruturaj Dilip Vidhate
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
              <GlitchText text="Software Developer | Python, Django, Node.js, MySQL | Backend-Focused Web Developer" />

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 animate-glow">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border border-cyan-500/30 shadow-xl bg-black/50 backdrop-blur-sm animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-cyan-400">Profile Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Results-driven Software Developer with 6+ Months of hands-on experience in designing, developing, and deploying scalable web applications using Python, Django, MySQL, and modern frontend technologies. Proven ability to build robust backend systems, RESTful APIs, and feature-rich applications including e-commerce platforms, hotel management systems, and billing software.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Strong expertise in frontend development with HTML, CSS, JavaScript, and Bootstrap, combined with solid backend skills in Django and database design. Experienced in creating secure, high-performance, and maintainable applications, following best coding practices and optimizing user experience to meet business requirements. Actively learning React Native and Flutter to expand cross-platform development capabilities.
                </p>
                <Separator className="my-8 border-cyan-500/30" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="animate-slide-left">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
                      <Book className="mr-2" size={20} />
                      Education
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white">Master of Computer Application</h4>
                        <p className="text-gray-300">Siddhant Institute of Computer Application, Pune</p>
                        <p className="text-sm text-gray-400">May 2026</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Bachelor of Computer Application</h4>
                        <p className="text-gray-300">New Art's Commerce and Science College, Ahilyanagar</p>
                        <p className="text-sm text-gray-400">May 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-right">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
                      <User className="mr-2" size={20} />
                      Quick Facts
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <p><strong className="text-cyan-400">Location:</strong> Wakad Pune, Maharashtra, India</p>
                      <p><strong className="text-cyan-400">Specialization:</strong> Full Stack Development</p>
                      <p><strong className="text-cyan-400">Experience:</strong> 6 Months Internship</p>
                      <p><strong className="text-cyan-400">Focus:</strong> Software Development</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-900/30 backdrop-blur-sm relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 animate-glow">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <ExperienceCard />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/50 backdrop-blur-sm relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 animate-glow">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400 animate-glow">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto text-center">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-black/50 border-cyan-500/30 backdrop-blur-sm shadow-xl shadow-cyan-500/20 animate-slide-up">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-white hover:scale-105 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-cyan-400 animate-pulse" />
                    <div>
                      <p className="font-semibold text-cyan-400">Phone</p>
                      <a href="tel:+918999758738" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        +91 8999758738
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white hover:scale-105 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-cyan-400 animate-pulse" />
                    <div>
                      <p className="font-semibold text-cyan-400">Email</p>
                      <a href="mailto:ruturajvidhate5656@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        ruturajvidhate5656@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white hover:scale-105 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-cyan-400 animate-pulse" />
                    <div>
                      <p className="font-semibold text-cyan-400">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/ruturaj-vidhate1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        linkedin.com/in/ruturaj-vidhate1
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                    onClick={() => window.location.href = 'mailto:ruturajvidhate5656@gmail.com'}
                  >
                    <Mail className="mr-2" size={20} />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/30 text-white py-8 px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <p className="text-gray-400">
            © 2025 Ruturaj Dilip Vidhate.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
