import { Award, Terminal, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    date: "12/2025",
    topics: ["Assets, Threats & Vulnerabilities", "Python Automation", "Networks", "Risk Management", "Detection & Response", "Linux & SQL"],
    link: "https://github.com/doneybiju/My_Certificate/blob/main/Coursera%20Google_Cybersecurity.pdf"
  },
  {
    title: "Zendesk Customer Service Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "01/2026",
    topics: ["Customer Service", "Support Systems", "Communication"],
    link: "https://github.com/doneybiju/My_Certificate/blob/main/Linkedin_Zendesk_Customer_Service_Professional.pdf"
  },
  {
    title: "Microsoft Applied Skills: Administer Active Directory Domain Services",
    issuer: "Microsoft",
    date: "01/2026",
    topics: ["Active Directory", "Domain Services", "Hands-on Lab"],
    link: "https://learn.microsoft.com/en-us/users/doneybiju-5428/credentials/49f2244d3f005f1a"
  },
  {
    title: "SIEM 101",
    issuer: "LetsDefend",
    date: "01/2026",
    topics: ["SIEM Basics", "Installation & Configuration"],
    link: "https://app.letsdefend.io/training/lessons/siem-101"
  },
  {
    title: "TryHackMe — SOC Level 1 Path",
    issuer: "TryHackMe",
    date: "12/2025",
    topics: ["Alert Triage", "Log Analysis", "Incident Response Workflow"],
    link: "https://tryhackme.com/path/outline/soclevel1"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-card/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> certs --verify
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] cursor-pointer">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Badge Icon & Link Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-mono mb-4">{cert.issuer}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {cert.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-0.5 text-xs bg-secondary/50 text-muted-foreground rounded border border-border/50 group-hover:border-primary/30 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
