import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Loader2 } from 'lucide-react';
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/myzdbywn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "kartik.kp2206@gmail.com",
    link: "mailto:kartik.kp2206@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 8855876728",
    link: "tel:+918855876728"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Thane,Maharashtra, India",
    link: "#"
  }];
  const socialLinks = [{
    icon: Github,
    label: "GitHub",
    username: "@Kartik-kp2210",
    link: "https://github.com/Kartik-kp2210",
    color: "hover:text-gray-300"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    username: "kartik2210",
    link: "www.linkedin.com/in/kartik2210",
    color: "hover:text-blue-400"
  }];
  return (
    <section id="contact" className="pt-40 pb-32 bg-muted/30 relative z-10">
      <div className="container px-4 relative mx-auto py-[120px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-gradient shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`mt-1 ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400 text-sm">✅ Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm">❌ Failed to send message. Please try again later.</p>
                  </div>
                )}
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-gradient shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <IconComponent className="h-5 w-5 text-primary mr-4" />
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <div className="text-muted-foreground">{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-muted/50 hover:bg-primary/20 transition-all hover-lift ${social.color}`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;