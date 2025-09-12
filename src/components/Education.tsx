const Education = () => {
  const education = [
    {
      period: "May 2024 - May 2028",
      degree: "B.Sc., Data Science & Applications", 
      institution: "Indian Institute of Technology (IIT) Madras",
      description: "Coursework: Machine Learning, Big Data Analytics, AI, Data-Driven Security Applications"
    },
    {
      period: "Aug 2023 - Jun 2027",
      degree: "B. Tech, Computer Science & Engineering",
      institution: "Quantum University",
      description: "Coursework: Cybersecurity, Cryptography, Ethical Hacking, Cloud Security"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-32 h-px bg-gradient-primary mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full shadow-glow"></div>
                </div>

                {/* Left side - Period */}
                <div className="lg:w-1/2 lg:text-right lg:pr-12">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center animate-pulse-glow">
                      <div className="w-6 h-6 bg-gradient-primary rounded opacity-80"></div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{edu.period}</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Education details */}
                <div className="lg:w-1/2 lg:pl-12">
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-primary mb-4">{edu.institution}</h4>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>

              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-4 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center gradient-text-secondary mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-2">Google Cybersecurity Professional Certificate</h4>
              <p className="text-muted-foreground">Coursera, 2024</p>
            </div>
            <div className="p-6 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-2">Certified Ethical Hacker (CEH)</h4>
              <p className="text-muted-foreground">In Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;