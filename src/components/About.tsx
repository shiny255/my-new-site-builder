import profileImage from '@/assets/profile.jpg';

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-4">WHO I AM?</h2>
              <h3 className="text-xl text-muted-foreground mb-6">Who I am?</h3>
            </div>
            
            <div className="text-lg leading-relaxed text-muted-foreground">
              <p>
                My name is Shani Varun, I am a passionate cybersecurity professional specializing in 
                ethical hacking and security analysis. I thrive on solving complex security challenges 
                and continuously work on enhancing my expertise. Currently, I am pursuing dual degrees 
                in Data Science at IIT Madras and Computer Science with a specialization in cybersecurity 
                at Quantum University. I am seeking opportunities in cybersecurity, penetration testing, 
                and data-driven security applications where I can contribute my skills and grow further.
              </p>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden animate-pulse-glow">
                <img 
                  src={profileImage} 
                  alt="Shani K. Varun" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorative element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full opacity-50 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;