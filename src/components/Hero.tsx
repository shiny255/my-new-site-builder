import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const codeSnippet = `const securityAnalyst = {
  name: 'Shani K. Varun',
  skills: ['Java', 'Python', 'JavaScript', 'Cybersecurity', 'Ethical Hacking', 'Data Science'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  certifications: ['Google Cybersecurity', 'CEH'],
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hello,<br />
              This is <span className="gradient-text">Shani K. Varun</span>, I'm a
              Professional <span className="gradient-text-secondary">Cybersecurity</span>{' '}
              <span className="gradient-text">Analyst</span>.
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/shanivarun2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-md transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/shanivarun2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-md transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:shanivarun2003@gmail.com"
              className="p-2 hover:bg-primary/10 rounded-md transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact me
            </Button>
            <Button variant="cta" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Get Resume
            </Button>
          </div>
        </div>

        {/* Right side - Code block */}
        <div className="relative">
          <div className="code-block animate-float">
            <div className="pt-8">
              <pre className="text-sm leading-relaxed">
                <code>
                  <span className="text-code-keyword">const</span>{' '}
                  <span className="text-code-function">securityAnalyst</span>{' '}
                  <span className="text-foreground">= {'{'}</span>
                  {'\n  '}
                  <span className="text-code-keyword">name</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-string">'Shani K. Varun'</span>
                  <span className="text-foreground">,</span>
                  {'\n  '}
                  <span className="text-code-keyword">skills</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-code-string">'Java'</span>
                  <span className="text-foreground">, </span>
                  <span className="text-code-string">'Python'</span>
                  <span className="text-foreground">, </span>
                  <span className="text-code-string">'JavaScript'</span>
                  <span className="text-foreground">, </span>
                  <span className="text-code-string">'Cybersecurity'</span>
                  <span className="text-foreground">,</span>
                  {'\n         '}
                  <span className="text-code-string">'Ethical Hacking'</span>
                  <span className="text-foreground">, </span>
                  <span className="text-code-string">'Data Science'</span>
                  <span className="text-foreground">],</span>
                  {'\n  '}
                  <span className="text-code-keyword">hardWorker</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-number">true</span>
                  <span className="text-foreground">,</span>
                  {'\n  '}
                  <span className="text-code-keyword">quickLearner</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-number">true</span>
                  <span className="text-foreground">,</span>
                  {'\n  '}
                  <span className="text-code-keyword">problemSolver</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-number">true</span>
                  <span className="text-foreground">,</span>
                  {'\n  '}
                  <span className="text-code-keyword">hireable</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-keyword">function</span>
                  <span className="text-foreground">() {'{'}</span>
                  {'\n    '}
                  <span className="text-code-keyword">return</span>
                  <span className="text-foreground"> (</span>
                  {'\n      '}
                  <span className="text-code-keyword">this</span>
                  <span className="text-foreground">.</span>
                  <span className="text-code-function">hardWorker</span>
                  <span className="text-foreground"> </span>
                  <span className="text-code-keyword">{'&&'}</span>
                  {'\n      '}
                  <span className="text-code-keyword">this</span>
                  <span className="text-foreground">.</span>
                  <span className="text-code-function">problemSolver</span>
                  <span className="text-foreground"> </span>
                  <span className="text-code-keyword">{'&&'}</span>
                  {'\n      '}
                  <span className="text-code-keyword">this</span>
                  <span className="text-foreground">.</span>
                  <span className="text-code-function">skills</span>
                  <span className="text-foreground">.</span>
                  <span className="text-code-keyword">length</span>
                  <span className="text-foreground"> </span>
                  <span className="text-code-keyword">{'>='}</span>
                  <span className="text-foreground"> </span>
                  <span className="text-code-number">5</span>
                  {'\n    '}
                  <span className="text-foreground">);</span>
                  {'\n  '}
                  <span className="text-foreground">{'}'}</span>
                  {'\n}'}
                  <span className="text-foreground">;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;