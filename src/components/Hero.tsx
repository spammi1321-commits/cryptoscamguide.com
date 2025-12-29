import { Shield, AlertTriangle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToScams = () => {
    document.getElementById("scams")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(38_92%_50%/0.08),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 md:left-20 animate-float opacity-20">
        <Shield className="w-16 h-16 md:w-24 md:h-24 text-primary" />
      </div>
      <div className="absolute bottom-1/3 right-10 md:right-20 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <AlertTriangle className="w-12 h-12 md:w-20 md:h-20 text-warning" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">
              Protecting crypto users worldwide
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Don't Become a{" "}
            <span className="gradient-text-warning">Crypto Victim</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Learn to identify and protect yourself from the most common cryptocurrency scams. 
            Knowledge is your best defense in the crypto world.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={scrollToScams}>
              <Shield className="w-5 h-5" />
              Explore Scam Types
            </Button>
            <Button variant="glass" size="xl" onClick={() => document.getElementById("tips")?.scrollIntoView({ behavior: "smooth" })}>
              Protection Tips
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold font-display gradient-text">$14B+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Lost to scams in 2023</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold font-display text-warning">46%</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Victims are 20-40 years old</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold font-display text-success">80%</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Avoidable with education</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
