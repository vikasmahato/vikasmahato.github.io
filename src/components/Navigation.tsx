import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono font-semibold text-foreground hover:text-primary transition-colors">
            &lt;vikas /&gt;
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:hello@vikasmahato.com"
              className="px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:hello@vikasmahato.com"
                className="px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-lg text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
