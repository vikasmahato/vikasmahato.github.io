import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Hero = () => {
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
            Building{" "}
            <span className="text-gradient">scalable</span>
            <br />
            data systems
          </h1>

          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Data Engineer at Expedia Group specializing in distributed systems, 
            real-time streaming, and large-scale data processing with Apache Spark & Kafka.
          </p>

          <div 
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <a 
              href="#experience" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-glow hover:scale-105"
            >
              View Experience
            </a>
            <a 
              href="#skills" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium border border-border transition-all hover:bg-muted"
            >
              Skills & Tech Stack
            </a>
          </div>

          <div 
            className="flex gap-4 mt-12 animate-slide-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <Mail className="w-5 h-5" />
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
