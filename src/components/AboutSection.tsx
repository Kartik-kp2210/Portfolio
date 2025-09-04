import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import Kartik from '@/assets/Kartik.jpg'; // Import your profile image

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <Card className="card-gradient shadow-elegant hover-lift">
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-2">
                  <img 
                    src={Kartik}
                    alt="Kartik Parmar - Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Kartik Parmar</h3>
                  <p className="text-muted-foreground text-lg">Computer Engineering Student</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Passionate Developer & AI Enthusiast</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a final-year Computer Engineering student specializing in Artificial Intelligence & Machine Learning, 
                with a strong foundation in Python, Java, and modern frameworks. My journey in software development 
                is fueled by curiosity, creativity, and the drive to solve real-world problems through code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience across full-stack web development, AI/ML applications, and cloud technologies, 
                I enjoy tackling complex challenges and turning ideas into impactful solutions. I've built projects 
                ranging from intelligent chatbots to healthcare prediction systems, gaining hands-on experience 
                in problem solving, data analysis, and system design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond technical skills, I'm recognized for my problem-solving mindset, quick learning ability, 
                and dedication to delivering efficient, reliable solutions. I aim to design AI-driven innovations 
                that improve lives in areas like healthcare, e-commerce, and digital transformation.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 border border-border rounded-lg hover-lift fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">4+</div>
                  <div className="text-muted-foreground text-sm">Projects</div>
                </div>
                {/* <div className="text-center p-4 border border-border rounded-lg hover-lift fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex justify-center mb-2">
                    <Briefcase className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-1">2</div>
                  <div className="text-muted-foreground text-sm">Internships</div>
                </div> */}
                <div className="text-center p-4 border border-border rounded-lg hover-lift fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex justify-center mb-2">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">4+</div>
                  <div className="text-muted-foreground text-sm">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;