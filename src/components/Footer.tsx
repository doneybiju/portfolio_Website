import { Shield, Code, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-mono font-bold text-foreground">Doney Biju John</span>
            </div>
            <span className="text-sm text-muted-foreground font-mono hidden sm:inline">|</span>
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} Security Operations Analyst
            </p>
          </div>

          {/* Social Links & Status */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/doneybiju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/doney-biju-203642203/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <div className="flex items-center gap-2 text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground hidden sm:inline">Open to opportunities</span>
              <span className="text-muted-foreground sm:hidden">Available</span>
            </div>
          </div>
        </div>

        {/* Optional: Built with tech stack - uncomment if desired */}
        {/* <div className="mt-4 pt-4 border-t border-border/50">
          <p className="text-center text-xs text-muted-foreground font-mono flex items-center justify-center gap-2">
            <Code className="w-3 h-3" />
            Built with React, TypeScript, Tailwind CSS & shadcn/ui
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
