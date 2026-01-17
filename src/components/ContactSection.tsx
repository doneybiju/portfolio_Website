import { useState } from "react";
import { Terminal, Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "doneybiju@gmail.com",
    href: "mailto:doneybiju@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+370 61792782",
    href: "tel:+37061792782"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kaunas, Lithuania",
    href: null
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/doney-biju-203642203",
    href: "https://www.linkedin.com/in/doney-biju-203642203/"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/doneybiju",
    href: "https://github.com/doneybiju"
  }
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create mailto link as fallback
      const mailtoLink = `mailto:doneybiju@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> contact --connect
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="bg-card/80 border-border/50 overflow-hidden h-fit">
            {/* Terminal Header */}
            <div className="bg-secondary/30 px-4 py-3 border-b border-border/50 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-5/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">contact_info.sh</span>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <div 
                    key={link.label}
                    className="group"
                  >
                    {link.href ? (
                      <a 
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{link.label}</p>
                          <p className="text-foreground font-medium truncate">{link.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 border border-border/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{link.label}</p>
                          <p className="text-foreground font-medium">{link.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm font-mono text-center">
                  <span className="text-primary">~/</span> Ready to secure your digital assets?
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-card/80 border-border/50 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-secondary/30 px-4 py-3 border-b border-border/50 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-5/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">send_message.sh</span>
            </div>

            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                    <span className="text-primary">$</span> name:
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="font-mono bg-secondary/20 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                    <span className="text-primary">$</span> email:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-mono bg-secondary/20 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono text-muted-foreground">
                    <span className="text-primary">$</span> subject:
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="font-mono bg-secondary/20 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                    <span className="text-primary">$</span> message:
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="font-mono bg-secondary/20 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-mono shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
