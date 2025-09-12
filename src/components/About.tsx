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
            
            <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
              <p>
                My name is Shani K. Varun, a passionate cybersecurity professional with a strong focus on 
                ethical hacking and security analysis. I thrive on solving complex security challenges and 
                am dedicated to making digital systems more secure and resilient.
              </p>
              <p>
                I am a quick learner with a self-motivated attitude, always eager to explore new 
                cybersecurity technologies and enhance my skills. Currently pursuing dual degrees in 
                Data Science from IIT Madras and Computer Science from Quantum University, specializing 
                in cybersecurity and ethical hacking.
              </p>
              <p>
                I am currently seeking job opportunities that align with my expertise in cybersecurity, 
                penetration testing, and data-driven security applications. If you are looking for a 
                versatile and driven security professional, let's connect!
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