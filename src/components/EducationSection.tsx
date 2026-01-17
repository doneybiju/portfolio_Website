import { GraduationCap, Terminal, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-primary">$</span> education --show
          </h2>
        </div>

        {/* Education Card */}
        <Card className="max-w-3xl mx-auto bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                  <GraduationCap className="w-10 h-10" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Information Systems and Cybersecurity
                  </h3>
                  <p className="text-lg text-primary font-mono">Bachelor of Science</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 font-mono">
                    <MapPin className="w-4 h-4 text-primary" />
                    Vilnius University
                  </div>
                  <div className="flex items-center gap-2 font-mono bg-secondary/50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    09/2022 - 01/2026
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="pt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="text-primary">▹</span>
                  <span>Comprehensive curriculum covering cybersecurity fundamentals, network security, and information systems</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
