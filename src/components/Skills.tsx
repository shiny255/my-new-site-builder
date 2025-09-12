const Skills = () => {
  const skills = [
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "JavaScript", category: "Programming" },
    { name: "C/C++", category: "Programming" },
    { name: "SQL", category: "Database" },
    { name: "PHP", category: "Programming" },
    { name: "Burp Suite", category: "Security Tools" },
    { name: "Metasploit", category: "Security Tools" },
    { name: "Nmap", category: "Security Tools" },
    { name: "Linux", category: "Operating Systems" },
    { name: "Kali Linux", category: "Operating Systems" },
    { name: "Ubuntu", category: "Operating Systems" },
    { name: "Windows", category: "Operating Systems" },
    { name: "Pandas", category: "Data Science" },
    { name: "NumPy", category: "Data Science" },
    { name: "NLP", category: "Data Science" },
    { name: "Pygame", category: "Frameworks" },
    { name: "ISO 27001", category: "Frameworks" },
    { name: "NIST", category: "Frameworks" },
    { name: "Wireshark", category: "Security Tools" },
    { name: "Nessus", category: "Security Tools" },
    { name: "Snort", category: "Security Tools" }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">Skills</h2>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-secondary">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (index * 100)}ms`
                    }}
                  >
                    <div className="relative p-6 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:bg-muted/80 hover:shadow-glow cursor-pointer">
                      <div className="flex flex-col items-center space-y-4">
                        {/* Skill icon placeholder */}
                        <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors">
                          <div className="w-6 h-6 bg-gradient-primary rounded opacity-80"></div>
                        </div>
                        
                        {/* Skill name */}
                        <div className="text-center">
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
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