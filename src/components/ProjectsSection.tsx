import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, Activity, Eye, RotateCcw } from 'lucide-react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

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

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    {
      title: "Engineering Mathematics Solver (Major Project – Ongoing)",
      timeline: "📅 June 2025 – Present",
      description: "A smart academic assistant for solving and understanding complex engineering mathematics (M1–M4).",
      longDescription: "Interactive solver that covers Mumbai University M1–M4 topics with step-by-step solutions using symbolic computation. Includes manual, image-based (OCR), and NLP inputs with a chatbot assistant that explains steps and suggests alternate methods. Integrated formula sheets and clean UI help students learn by doing.",
      icon: Activity,
      technologies: [
        "Python",
        "Flask",
        "SymPy",
        "NumPy",
        "SciPy",
        "Tesseract OCR",
        "HTML",
        "CSS",
        "JavaScript",
        "MathJax",
        "Bootstrap/Tailwind"
      ],
      github: "#",
      demo: "#",
      features: [
        "Full syllabus coverage (M1–M4) with topic-wise modules",
        "Step-by-step solutions using symbolic computation (SymPy)",
        "Supports manual, image-based (OCR), and NLP input",
        "Chatbot assistant to explain steps and suggest alternate methods",
        "Interactive solver with integrated formula sheets"
      ],
      status: "🚧 Ongoing Major Project"
    },
    {
      title: "Vitamin Deficiency Detection (Deep Learning)",
      timeline: "📅 Jan 2025 – May 2025",
      description: "A computer vision system that analyzes facial images to detect early signs of vitamin deficiencies for preventive healthcare.",
      longDescription: "A deep learning–powered healthcare solution for early, non-invasive detection of vitamin deficiencies from nail images. Built for accessible screening and assisting early medical intervention.",
      icon: Bot,
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Flask",
        "Matplotlib",
        "Seaborn"
      ],
      github: "#",
      demo: "#",
      features: [
        "CNN model to detect deficiencies (A, B, C, D, E) from nail images",
        "~2,000 labeled nail images across 8 classes dataset",
        "80–20 split; Conv2D/MaxPooling/Dense with ReLU + Softmax",
        "Achieved 91% validation accuracy",
        "Flask web interface for user testing",
        "Non-invasive, cost‑effective diagnostic approach"
      ],
      status: "✅ Completed Project"
    },
    {
      title: "Diabetes Prediction using Machine Learning",
      timeline: "📅 July 2024 – Nov 2024",
      description: "An intelligent ML-based web app for early diabetes risk assessment and health monitoring.",
      longDescription: "Implements a Support Vector Machine (SVM) classifier for diabetes risk prediction with class imbalance handled via SMOTE. Uses clinical inputs like Age, Hypertension, Heart Disease, BMI, HbA1c, and Blood Glucose to assess risk and present results in a clean Streamlit UI.",
      icon: Eye,
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "SMOTE",
        "Streamlit",
        "Matplotlib"
      ],
      github: "https://github.com/Kartik-kp2210/TE_DIV_B_SEM5_24-25",
      demo: "https://diabetes-prediction-demo.vercel.app",
      features: [
        "SVM classifier to predict diabetes risk",
        "SMOTE to address imbalanced dataset",
        "Inputs: Age, Hypertension, Heart Disease, BMI, HbA1c, Blood Glucose",
        "95% accuracy for diabetic vs non‑diabetic classification",
        "Streamlit app with Registration & Login",
        "Prediction dashboard with visual health trends",
        "Profile page storing past predictions",
        "Health remedies & lifestyle tips after each prediction"
      ]
    },
    {
      title: "ShopBot – Personal Shopping Assistant (Android App)",
      timeline: "📅 Jan 2024 – May 2024",
      description: "A conversational commerce Android app designed to assist users with product search, recommendations, and purchases through an interactive chatbot interface.",
      longDescription: "Android app with an interactive chatbot that helps users browse, compare, and purchase mobile phones seamlessly. Provides personalized recommendations using BrainShop API and manages real-time data, auth, and orders with Firebase.",
      icon: Bot,
      technologies: ["Java", "Android Studio", "Firebase", "BrainShop API", "XML"],
      github: "https://github.com/Kartik-kp2210/SE_DIV_B_SEM4_23-24",
      demo: "#",
      features: [
        "Chatbot assistant for interactive shopping",
        "Browse, compare, and purchase mobile phones",
        "Personalized recommendations via BrainShop API",
        "Firebase for real-time storage, auth, and order tracking",
        "Secure checkout and invoice generation"
      ],
      status: "✅ Completed Project"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 pb-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isFlipped = flippedCards.includes(index);
            
            return (
              <div
                key={index}
                className="fade-in-up project-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`project-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  {/* Front of Card */}
                  <Card className="project-card-front card-gradient shadow-elegant border-border/50">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        {project.timeline && (
                          <p className="text-xs text-muted-foreground mb-2">{project.timeline}</p>
                        )}
                        {/* Show only long description on front */}
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-8">
                          {project.longDescription}
                        </p>
                      </div>

                      <div className="flex-1" />

                      <div className="space-y-4">
                        <div className="text-center">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => toggleCard(index)}
                            className="w-full"
                          >
                            <RotateCcw className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Back of Card */}
                  <Card className="project-card-back card-gradient shadow-elegant border-border/50">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{project.timeline}</p>
                        <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1" />

                      <div className="space-y-3">
                        {/* Technology badges on back */}
                        <div className="flex flex-wrap gap-1 justify-start">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs whitespace-nowrap">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        {project.status && project.status.includes('Ongoing') ? (
                          <Button size="sm" variant="outline" className="w-full" disabled>
                            🚧 Ongoing
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="h-4 w-4 mr-1" />
                            View Code
                          </Button>
                        )}
                        
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleCard(index)}
                          className="w-full"
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Back to Overview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
