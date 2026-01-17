import { Shield, Terminal, Server, Network, Wrench, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Shield,
    title: "SOC / IR",
    skills: ["Alert Triage", "Incident Documentation", "Phishing Analysis", "Escalation Workflows"]
  },
  {
    icon: Server,
    title: "Systems",
    skills: ["Linux CLI", "Windows Fundamentals"]
  },
  {
    icon: Code,
    title: "Scripting",
    skills: ["Python Basics", "SQL Basics"]
  },
  {
    icon: Network,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "HTTP(S)", "Packet Analysis (Wireshark)"]
  },
  {
    icon: Wrench,
    title: "Tools & Concepts",
    skills: ["Vulnerability Scanning", "IDS/IPS Concepts", "Compliance Scanning (Nmap/OpenSCAP)"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> skills --list
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm font-mono bg-secondary/50 text-secondary-foreground rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
