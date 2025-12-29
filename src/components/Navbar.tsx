import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-display font-bold text-xl">CryptoSafe</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollTo("scams")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Scam Types
            </button>
            <button 
              onClick={() => scrollTo("tips")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Protection Tips
            </button>
            <Button variant="default" size="sm" onClick={() => scrollTo("scams")}>
              Get Protected
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollTo("scams")}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Scam Types
              </button>
              <button 
                onClick={() => scrollTo("tips")}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Protection Tips
              </button>
              <Button variant="default" onClick={() => scrollTo("scams")}>
                Get Protected
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
