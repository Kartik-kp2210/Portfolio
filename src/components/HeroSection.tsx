import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText, ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Java', 'Python', 'AI & ML', 'Cloud Computing', 'Web Development', 'TensorFlow', 'Docker', 'AWS'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    // Option 1: Open Google Drive link (recommended for mobile compatibility)
    window.open('https://drive.google.com/file/d/1VwPdUpDcCREhABSVajYKfdvFokNZCGp-/view?usp=sharing', '_blank');
    
    // Option 2: Download resume file (for desktop)
    // const link = document.createElement('a');
    // link.href = '/resume.pdf';
    // link.download = 'Kartik_Parmar_Resume.pdf';
    // link.target = '_blank';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Kartik <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">Parmar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              Aspiring Software Engineer | AI & ML Enthusiast
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-300 mb-4">Passionate about:</p>
            <div className="text-2xl md:text-3xl font-mono h-12 flex items-center justify-center">
              <span className="text-primary-glow typing-animation">
                {skills[currentSkill]}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="secondary" 
              size="lg" 
              className="animate-pulse-glow hover:scale-105 transition-transform"
              onClick={handleResumeClick}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-transform"
              onClick={() => window.open('https://github.com/Kartik-kp2210', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-transform"
              onClick={() => window.open('https://www.linkedin.com/in/kartik2210', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>

          <div 
            className="animate-bounce cursor-pointer" 
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-8 w-8 text-white mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;