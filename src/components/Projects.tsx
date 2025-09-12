const Projects = () => {
  const projects = [
    {
      name: "Network Traffic Analyzer",
      tools: ["Python", "Wireshark API", "Scikit-learn", "Linux"],
      role: "Security Analyst & Developer",
      description: "Built a Python tool leveraging Wireshark APIs for real-time packet capture and analysis. Automated detection of malicious traffic patterns (DDoS, port scans) using Scikit-learn anomaly detection, improving response time by 20%."
    },
    {
      name: "Game Development Suite", 
      tools: ["Python", "Pygame", "SQLite", "Pathfinding Algorithms"],
      role: "Full Stack Developer",
      description: "Engineered Snake and Sudoku games using Python's Pygame library with optimized pathfinding algorithms. Implemented a secure scoreboard system with SQLite database encryption to prevent tampering."
    },
    {
      name: "Cybersecurity Workshop Training",
      tools: ["Kali Linux", "Metasploit", "Nmap", "Penetration Testing"],
      role: "Security Trainer & Team Member", 
      description: "Conducted, as a team member, a workshop on ethical hacking with Kali Linux at Quantum University, training 80+ students on penetration testing tools and methodologies."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-32 h-px bg-gradient-primary mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold gradient-text">PROJECTS</h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="code-block max-w-4xl mx-auto">
                <div className="pt-8">
                  <pre className="text-sm leading-relaxed">
                    <code>
                      <span className="text-code-keyword">const</span>{' '}
                      <span className="text-code-function">project</span>{' '}
                      <span className="text-foreground">= {'{'}</span>
                      {'\n  '}
                      <span className="text-code-keyword">name</span>
                      <span className="text-foreground">: </span>
                      <span className="text-code-string">'{project.name}'</span>
                      <span className="text-foreground">,</span>
                      {'\n  '}
                      <span className="text-code-keyword">tools</span>
                      <span className="text-foreground">: [</span>
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex}>
                          <span className="text-code-string">'{tool}'</span>
                          {toolIndex < project.tools.length - 1 && (
                            <span className="text-foreground">, </span>
                          )}
                        </span>
                      ))}
                      <span className="text-foreground">],</span>
                      {'\n  '}
                      <span className="text-code-keyword">myRole</span>
                      <span className="text-foreground">: </span>
                      <span className="text-code-string">'{project.role}'</span>
                      <span className="text-foreground">,</span>
                      {'\n  '}
                      <span className="text-code-keyword">description</span>
                      <span className="text-foreground">: </span>
                      <span className="text-code-string">'{project.description}'</span>
                      {'\n'}
                      <span className="text-foreground">{'}'}</span>
                      <span className="text-foreground">;</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;