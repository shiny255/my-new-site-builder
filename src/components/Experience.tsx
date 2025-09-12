import { User } from 'lucide-react';
import experienceIllustration from '@/assets/experience-illustration.png';

const Experience = () => {
  const experiences = [
    {
      period: "(Nov 2024 - Dec 2024)",
      title: "CYBERSECURITY INTERN",
      company: "Mastercard (Forage)",
    },
    {
      period: "(Oct 2024 - Nov 2024)", 
      title: "SECURITY ANALYST INTERN",
      company: "Tata Cybersecurity (Forage)",
    },
    {
      period: "(Sep 2024 - Oct 2024)",
      title: "CYBERSECURITY INTERN", 
      company: "Prodigy Infotech",
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-32 h-px bg-gradient-primary mx-auto mb-8"></div>
          <h2 className="text-4xl font-bold gradient-text">Experiences</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - 3D Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={experienceIllustration} 
                alt="Cybersecurity Experience Illustration" 
                className="w-full max-w-md animate-float"
              />
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{animationDelay: '3s'}}></div>
            </div>
          </div>

          {/* Right side - Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative p-6 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-muted/50 group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Time period */}
                <div className="text-primary text-sm font-medium mb-3">
                  {exp.period}
                </div>

                {/* Job title and company */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;