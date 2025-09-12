const Experience = () => {
  const experiences = [
    {
      period: "(Nov 2024 - Dec 2024)",
      title: "Cybersecurity Intern",
      company: "Mastercard (Forage)",
      description: "Investigated phishing attempts using Python and Linux tools, which improved awareness training and reduced phishing incidents. Assisted in incident response for APT detection using ISO 27001 standards, enhancing the organization's threat response capabilities."
    },
    {
      period: "(Oct 2024 - Nov 2024)", 
      title: "Security Analyst Intern",
      company: "Tata Cybersecurity (Forage)",
      description: "Simulated Identity and Access Management (IAM) strategies to enhance security protocols. Identified vulnerabilities (e.g., misconfigured IAM roles) and prioritized remediation based on CVSS scores."
    },
    {
      period: "(Sep 2024 - Oct 2024)",
      title: "Cybersecurity Intern", 
      company: "Prodigy Infotech",
      description: "Detected key logger threats using deep packet inspection with MITRE ATT&CK, enhancing system security. Identified 15+ vulnerabilities using Nessus and Snort, strengthening the security posture of the network."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-32 h-px bg-gradient-primary mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold gradient-text">Experiences</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full shadow-glow"></div>
                </div>

                {/* Left side - Company info */}
                <div className="lg:w-1/2 lg:text-right lg:pr-12">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center animate-pulse-glow">
                      <div className="w-6 h-6 bg-gradient-primary rounded opacity-80"></div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{exp.period}</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Role details */}
                <div className="lg:w-1/2 lg:pl-12">
                  <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-primary mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>

              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-4 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;