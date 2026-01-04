import { Github, Linkedin, Terminal, Instagram, FileText, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Hero = () => {
  const navigate = useNavigate();

  const waitForElement = useCallback((id: string, timeout = 1200, interval = 50) => {
    const start = Date.now();
    return new Promise<HTMLElement | null>((resolve) => {
      const check = () => {
        const el = document.getElementById(id);
        if (el) return resolve(el);
        if (Date.now() - start >= timeout) return resolve(null);
        setTimeout(check, interval);
      };
      check();
    });
  }, []);

  const scrollToSection = useCallback(async (hash: string) => {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Navigate to home and wait for the element to appear
    navigate("/");
    const nextEl = await waitForElement(id);
    if (nextEl) nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [navigate, waitForElement]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">Software Engineer</span>
            </div>
          </div>

          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Vikas Mahato</span>
          </h1>

          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Data Engineer at Expedia Group specializing in distributed systems, 
            real-time streaming, GenAI solutions, and large-scale data processing with Apache Spark & Kafka.
          </p>

          <div 
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => scrollToSection("#experience")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-glow hover:scale-105"
            >
              View Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("#skills")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium border border-border transition-all hover:bg-muted"
            >
              Skills & Tech Stack
            </button>
          </div>

          <div 
            className="flex gap-4 mt-12 animate-slide-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <a 
              href="https://github.com/vikasmahato" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vikas-mahato/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/camera.wala.dost/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1_ywfPEQlSl5I802zluPVqweuYC6jxND1/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="Resume/CV"
            >
              <FileText className="w-5 h-5" />
            </a>
            <a 
              href="http://gettingstartedwithlibreoffice.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="GSoC Blog"
            >
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
