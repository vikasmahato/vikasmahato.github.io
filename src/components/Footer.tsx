import { Code2, Github, Linkedin, Mail, Instagram, FileText, BookOpen } from "lucide-react";
import { SiX } from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">Vikas Mahato</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/vikasmahato" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vikas-mahato/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/VikasMahato5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <SiX className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/camera.wala.dost/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1_ywfPEQlSl5I802zluPVqweuYC6jxND1/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Resume/CV"
            >
              <FileText className="w-5 h-5" />
            </a>
            <a 
              href="http://gettingstartedwithlibreoffice.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GSoC Blog"
            >
              <BookOpen className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@vikasmahato.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vikas Mahato. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
