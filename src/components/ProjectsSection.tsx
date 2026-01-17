import { FolderGit2, Terminal, Shield, Mail, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    icon: Settings,
    title: "Google Workspace Access Governance Automation",
    description: "Automated onboarding/offboarding-style access changes with RBAC logic and audit logging.",
    features: ["RBAC Implementation", "Audit Logging", "Auto Email Templates", "Access Automation"],
    tags: ["Automation", "RBAC", "Governance"]
  },
  {
    icon: Shield,
    title: "Security Policy Compliance Checker",
    description: "Containerized scanner using Nmap/OpenSCAP that generates compliance outputs suitable for reporting.",
    features: ["Nmap Scanning", "OpenSCAP Integration", "Compliance Reports", "Container-based"],
    tags: ["Compliance", "Scanning", "Security"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> projects --showcase
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
