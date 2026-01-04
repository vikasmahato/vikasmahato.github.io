import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ];

  // Wait for an element with `id` to appear in the DOM, polling until timeout.
  const waitForElement = (id: string, timeout = 1200, interval = 50): Promise<HTMLElement | null> => {
    const start = Date.now();
    return new Promise((resolve) => {
      const check = () => {
        const el = document.getElementById(id);
        if (el) return resolve(el);
        if (Date.now() - start >= timeout) return resolve(null);
        setTimeout(check, interval);
      };
      check();
    });
  };

  const scrollToSection = async (hash: string) => {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      return;
    }

    // Navigate to the home route and wait for the element to be available.
    navigate("/");
    const nextEl = await waitForElement(id);
    if (nextEl) nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-mono font-semibold text-foreground hover:text-primary transition-colors">
            &lt;vikas /&gt;
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/resume"
              className="px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all"
            >
              View Resume
            </Link>
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
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-lg text-center"
              >
                View Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
