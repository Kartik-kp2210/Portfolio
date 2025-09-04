import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
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

  const certifications = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI & Stanford University (Coursera)",
      instructor: "Andrew Ng",
      date: "April 2025",
      credentialId: "",
      skills: ["Supervised Learning", "Regression", "Classification", "Model Evaluation"],
      verified: true,
      link: "https://coursera.org/verify/CYJNABEE8E5E",
      cta: "View Certificate"
    },
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      issuer: "Google Cloud",
      date: "Sep 2024",
      credentialId: "",
      skills: ["GenAI", "Gemini", "Streamlit"],
      verified: true,
      link: "https://www.credly.com/badges/f315ecd0-7af1-4648-8a0a-3f0dc3025ac3/public_url", // Add Credly badge link if available
      cta: "View Badge"
    },
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      date: "Sep 2024",
      credentialId: "",
      skills: ["Prompt Design", "Vertex AI"],
      verified: true,
      link: "https://www.credly.com/badges/59e47936-b7e4-4808-8873-a18dca1e19c7/public_url", // Add Credly badge link if available
      cta: "View Badge"
    },
    {
      title: "AWS Academy Graduate – Cloud Architecting",
      issuer: "AWS Academy",
      date: "Apr 2025",
      credentialId: "",
      skills: ["AWS", "Cloud Architecting"],
      verified: true,
      link: "https://www.credly.com/badges/fb5e8b5b-ece8-4874-988c-d096066ec245/public_url", // Add Credly badge link if available
      cta: "View Badge"
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      date: "Mar 2025",
      credentialId: "",
      skills: ["AWS", "Cloud Foundations"],
      verified: true,
      link: "https://www.credly.com/badges/39bceb27-c0b1-45df-ab81-085241d28929/public_url", // Add Credly badge link if available
      cta: "View Badge"
    },
    {
      title: "Generative AI Certificate",
      issuer: "Google Cloud / APSIT",
      date: "Sept 2024",
      credentialId: "aa7d8bedbc26733ee12be9edd6fc2e68",
      skills: ["Generative AI"],
      verified: true,
      link: "", // Add certificate link if available
      cta: "View Certificate"
    }
  ];

  const achievements = [
    {
      emoji: "🏆",
      title: "TPO Coordinator (CSE – AI & ML Student Association, 2023–24)",
      bullets: [
        "Coordinated placement-related activities.",
        "Facilitated communication between students and recruiters."
      ],
      date: "2023–24"
    },
    {
      emoji: "💻",
      title: "Major Project – Engineering Mathematics Solver (Ongoing, 2025)",
      bullets: [
        "Developing a centralized math solver covering MU’s Engineering Math syllabus.",
        "Features step-by-step solutions, NLP-based inputs, and OCR support."
      ],
      date: "2025"
    },
    {
      emoji: "🔑",
      title: "Problem-Solving Focus",
      bullets: [
        "Actively improving Data Structures & Algorithms skills.",
        "Practicing consistently on platforms like LeetCode and GeeksforGeeks."
      ]
    },
    {
      emoji: "🎓",
      title: "Academic Performance",
      bullets: [
        "Maintained a strong academic record with 8+ CGPA throughout engineering."
      ]
    },
    {
      emoji: "🥇",
      title: "Winner – EXALT 2023 Innovation Competition",
      bullets: [
        "Secured 1st place by developing an Arduino-based obstacle detection car, demonstrating innovation and practical IoT/embedded systems skills."
      ],
      date: "2023"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 fade-in-up">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="card-gradient shadow-elegant hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        <h4 className="text-lg font-bold">{cert.title}</h4>
                        {cert.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                        )}
                      </div>
                      <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                      {('instructor' in cert && (cert as any).instructor) && (
                        <p className="text-xs text-muted-foreground mt-1">Instructor: {(cert as any).instructor}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Credential ID: {cert.credentialId}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => cert.link && window.open(cert.link, '_blank')}
                    disabled={!cert.link}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {('cta' in cert && (cert as any).cta) ? (cert as any).cta : 'Verify Credential'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 fade-in-up">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((a, index) => (
              <Card
                key={index}
                className="card-gradient shadow-elegant hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0 text-lg">
                      <span role="img" aria-label="icon">{a.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{a.title}</h4>
                    </div>
                    {a.date && (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {a.date}
                      </span>
                    )}
                  </div>
                  <ul className="ml-14 list-disc list-outside space-y-1 text-muted-foreground text-sm">
                    {(a.bullets || []).map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;