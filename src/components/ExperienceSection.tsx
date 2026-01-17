import { useState } from "react";
import { Briefcase, Calendar, Terminal, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "Extramus",
    period: "07/2025 - 10/2025",
    responsibilities: [
      "Supported security assessments and access reviews; documented findings and remediation actions",
      "Investigated suspicious access/events and escalated with clear incident notes and timelines",
      "Assisted with improving security controls/policies and tracking adherence with stakeholders",
      "Contributed to security tooling evaluation and produced recommendations based on requirements"
    ]
  },
  {
    title: "Cybersecurity Analyst (Forage)",
    company: "Tata",
    period: "05/2025 - 06/2025",
    responsibilities: [
      "Performed SIEM-style alert triage on simulated phishing, suspicious logins, and malware indicators",
      "Wrote incident documentation: impact, evidence, containment suggestions, and escalation messages"
    ]
  },
  {
    title: "Shuffler",
    company: "Evolution",
    period: "10/2024 - 06/2025",
    responsibilities: [
      "Followed strict SOPs and quality standards in a fast-paced, shift-based environment",
      "Escalated issues quickly and communicated clearly in English across a multicultural team",
      "Monitored the floor environment, identified issues quickly, and escalated to shift managers"
    ]
  }
];

const nonITExperience = {
  title: "Store Assistant (Customer Service & Operations)",
  company: "Robinsons Supermarket",
  location: "Kerala, India",
  period: "12/2019 - 08/2022",
  responsibilities: [
    "Assisted customers in-store: answered questions, helped locate products, and suggested alternatives when items were out of stock",
    "Worked at the cashier/POS: processed card/cash payments, issued receipts, and supported basic returns/exchanges following store policy",
    "Handled daily shelf restocking and product facing to keep aisles organized and easy to shop",
    "Checked expiry dates, removed expired items, and maintained clean, safe product displays",
    "Coordinated with the team during busy hours to reduce queue time and keep service smooth",
    "Supported store closing tasks such as organizing sections, quick inventory checks, and preparing the area for the next day"
  ]
};

const ExperienceSection = () => {
  const [showNonIT, setShowNonIT] = useState(false);
  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> experience --history
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-primary font-mono">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-secondary/50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Non-IT Experience Toggle */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowNonIT(!showNonIT)}
              className="font-mono border-primary/50 hover:bg-primary/10 transition-all"
            >
              {showNonIT ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Hide Non-IT Experience
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show Non-IT Experience
                </>
              )}
            </Button>
          </div>

          {/* Non-IT Experience Section */}
          {showNonIT && (
            <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="relative">
                {/* Timeline line continuation */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent transform md:-translate-x-1/2" />

                <div className="relative flex flex-col md:flex-row gap-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-8 md:pr-12">
                    <Card className="bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{nonITExperience.title}</h3>
                            <div className="flex items-center gap-2 text-primary font-mono">
                              <Briefcase className="w-4 h-4" />
                              {nonITExperience.company}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{nonITExperience.location}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-secondary/50 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" />
                            {nonITExperience.period}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {nonITExperience.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <span className="text-primary mt-1.5">▹</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
