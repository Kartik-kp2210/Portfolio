import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Brain, Wrench } from 'lucide-react';
const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setIsVisible(true);
        }
      });
    }, {
      threshold: 0.2
    });
    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const skillCategories = [{
    title: "Programming & Development",
    icon: Code2,
    skills: [
      'Java', 'Python', 'C++', 'JavaScript', 'Flask', 'HTML', 'CSS'
    ]
  }, {
    title: "AI, Data & Machine Learning",
    icon: Brain,
    skills: [
      'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Keras', 'OpenCV'
    ]
  }, {
    title: "Databases & Cloud",
    icon: Database,
    skills: [
      'SQLite', 'MySQL', 'Git', 'GitHub', 'Docker'
    ]
  }, {
    title: "Tools & Design",
    icon: Wrench,
    skills: [
      'VS Code', 'Google Colab', 'Figma', 'Canva', 'Notion', 'GitHub Copilot', 'Cursor', 'Lovable'
    ]
  }];
  const SkillPill = ({ skill, index }: { skill: string; index: number }) => (
    <Badge 
      variant="outline" 
      className="hover-lift transition-smooth text-[13px] px-3 py-1.5"
      style={{
        animationDelay: `${index * 0.05}s`,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.3s ease-out ${index * 0.05}s`
      }}
    >
      {skill}
    </Badge>
  );
  return <section id="skills" ref={sectionRef} className="py-24 bg-muted/30 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return <Card key={index} className="card-gradient shadow-elegant hover-lift fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillPill key={skill} skill={skill} index={skillIndex} />
                    ))}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Academic Subjects */}
        <div className="mt-20 fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8">
            Academic Subjects
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Structures & Algorithms',
              'Operating Systems',
              'Database Management Systems',
              'Software Engineering',
              'Artificial Intelligence',
              'Machine Learning',
              'Deep Learning'
            ].map((subject, index) => (
              <Badge
                key={subject}
                variant="secondary"
                className="hover-lift transition-smooth"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.3s ease-out ${index * 0.05}s`
                }}
              >
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;