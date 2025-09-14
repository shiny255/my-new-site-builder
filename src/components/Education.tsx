import educationIllustration from '@/assets/education-illustration.png';

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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Illustration */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96">
              <img 
                src={educationIllustration} 
                alt="Education Illustration" 
                className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Education content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold gradient-text-secondary mb-8">Academic Journey</h3>

            {education.map((edu, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                <h5 className="text-lg text-primary mb-3">{edu.institution}</h5>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
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