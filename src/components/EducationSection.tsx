import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Award, GraduationCap, BookOpen } from 'lucide-react';

const EducationSection = () => {
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

  const education = [
    {
      degree: "Bachelor of Engineering - Computer Engineering (AI & ML)",
      school: "A. P. Shah Institute of Technology",
      location: "Thane, Maharashtra",
      period: "2022  - 2026",
      grade: "CGPA: 8.22/10",
      icon: GraduationCap,
      highlights: [
        "🤖 Specialized in Artificial Intelligence & Machine Learning with focus on Data Science, Deep Learning, and NLP.",
        "📊 Applied concepts in Data Structures, Algorithms, and Database Management through real-world projects.",
        "🖥️ Developed hands-on expertise in Computer Graphics, Neural Networks, and Cloud Computing",
        "🏆 Academic Highlight: Consistently performed in top percentile of the class."
      ]
    },
    {
      degree: "Higher Secondary Education (Science - PCM)",
      school: "Maharashtra Board",
      location: "Maharashtra, India",
      period: "2020 - 2022",
      grade: "Percentage: 74.4%",
      icon: BookOpen,
      highlights: [
        "📐 Core subjects: Mathematics, Physics, Chemistry with a strong foundation in problem-solving and analytical reasoning",
        "💻 Built early skills in Programming & Computer Science, laying the groundwork for engineering studies",
        "🏅 Recipient of Academic Excellence Award for consistent performance"
      ]
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="card-gradient shadow-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <edu.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="ml-3 flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary font-semibold">
                            {edu.school}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                          {edu.grade}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
