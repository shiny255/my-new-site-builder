const Skills = () => {
  const skills = [
    { 
      name: "Java", 
      icon: "☕", 
      bgColor: "bg-orange-500",
      iconBg: "bg-orange-100"
    },
    { 
      name: "Python", 
      icon: "🐍", 
      bgColor: "bg-blue-500",
      iconBg: "bg-blue-100"
    },
    { 
      name: "JavaScript", 
      icon: "JS", 
      bgColor: "bg-yellow-500",
      iconBg: "bg-yellow-100"
    },
    { 
      name: "C/C++", 
      icon: "C++", 
      bgColor: "bg-blue-700",
      iconBg: "bg-blue-100"
    },
    { 
      name: "SQL", 
      icon: "🗄️", 
      bgColor: "bg-indigo-500",
      iconBg: "bg-indigo-100"
    },
    { 
      name: "Burp Suite", 
      icon: "🔒", 
      bgColor: "bg-red-500",
      iconBg: "bg-red-100"
    },
    { 
      name: "Metasploit", 
      icon: "⚡", 
      bgColor: "bg-purple-500",
      iconBg: "bg-purple-100"
    },
    { 
      name: "Linux", 
      icon: "🐧", 
      bgColor: "bg-gray-800",
      iconBg: "bg-gray-100"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative p-6 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-muted/50 hover:shadow-glow hover:-translate-y-1">
                <div className="flex flex-col items-center space-y-4">
                  {/* Skill icon */}
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-lg ${skill.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  
                  {/* Skill name */}
                  <div className="text-center">
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                      {skill.name}
                    </h4>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;