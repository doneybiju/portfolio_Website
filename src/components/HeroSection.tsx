import { useState } from "react";
import { Shield, Terminal, Mail, MapPin, Phone, Download, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  const { toast } = useToast();
  const [downloadCount, setDownloadCount] = useState(0);
  const MAX_DOWNLOADS = 3;
  const RESET_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

  const handleDownloadResume = () => {
    const lastDownloadTime = localStorage.getItem('lastResumeDownload');
    const downloadCounter = parseInt(localStorage.getItem('resumeDownloadCount') || '0');
    const now = Date.now();

    // Check if we need to reset the counter
    if (lastDownloadTime && (now - parseInt(lastDownloadTime)) > RESET_TIME) {
      localStorage.setItem('resumeDownloadCount', '0');
      localStorage.setItem('lastResumeDownload', now.toString());
      setDownloadCount(0);
    }

    // Check if user has exceeded download limit
    if (downloadCounter >= MAX_DOWNLOADS) {
      const timeLeft = RESET_TIME - (now - parseInt(lastDownloadTime || now.toString()));
      const minutesLeft = Math.ceil(timeLeft / (60 * 1000));
      
      toast({
        title: "Download Limit Reached",
        description: `You've reached the maximum download limit. Please try again in ${minutesLeft} minutes.`,
        variant: "destructive",
      });
      return;
    }

    // Proceed with download
    const link = document.createElement('a');
    link.href = '/documents/Doney_Biju_John_Resume.pdf';
    link.download = 'Doney_Biju_John_Resume.pdf';
    link.click();

    // Update counter
    const newCount = downloadCounter + 1;
    localStorage.setItem('resumeDownloadCount', newCount.toString());
    localStorage.setItem('lastResumeDownload', now.toString());
    setDownloadCount(newCount);

    toast({
      title: "Resume Downloaded!",
      description: `Download ${newCount}/${MAX_DOWNLOADS} used. Resets in 1 hour.`,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Terminal-style intro */}
          <div className="font-mono text-sm text-primary flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span className="opacity-70">~/security$</span>
            <span className="animate-pulse">_</span>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/70 shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
              <img 
                src={profileImage} 
                alt="Doney Biju John" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse scale-110" />
          </div>

          {/* Name with glow effect */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Doney Biju </span>
              <span className="text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]">John</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-primary animate-pulse-glow" />
              <p className="text-xl md:text-2xl font-mono text-muted-foreground">
                Security Operations Analyst
              </p>
              <Shield className="w-6 h-6 text-primary animate-pulse-glow" />
            </div>
          </div>

          {/* Summary */}
          <p className="max-w-3xl text-muted-foreground text-lg leading-relaxed">
            Entry-level SOC candidate with hands-on experience in alert triage, log analysis, 
            and incident documentation. Proficient in TCP/IP, DNS, HTTP(S), Wireshark, Linux CLI, 
            and Python/SQL for investigations and automation.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono">
            <a 
              href="mailto:doneybiju@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              doneybiju@gmail.com
            </a>
            <a 
              href="tel:+37061792782" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +370 61792782
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Kaunas, Lithuania
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="font-mono shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-mono border-primary/50 hover:bg-primary/10"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="w-4 h-4 mr-2" />
              View Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-mono border-primary/50 hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
