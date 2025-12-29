import { 
  ShieldCheck, 
  KeyRound, 
  Search, 
  Clock, 
  Smartphone, 
  BookOpen 
} from "lucide-react";

const tips = [
  {
    icon: KeyRound,
    title: "Never Share Private Keys",
    description: "Your seed phrase and private keys should never be shared with anyone. No legitimate service will ever ask for them."
  },
  {
    icon: Search,
    title: "Research Before Investing",
    description: "Always verify the legitimacy of a project. Check the team, audit reports, and community before investing."
  },
  {
    icon: Clock,
    title: "Avoid FOMO Decisions",
    description: "Scammers create urgency. Take time to think. If it sounds too good to be true, it probably is."
  },
  {
    icon: ShieldCheck,
    title: "Use Hardware Wallets",
    description: "Store significant amounts in hardware wallets. They keep your keys offline and safe from hackers."
  },
  {
    icon: Smartphone,
    title: "Enable 2FA Everywhere",
    description: "Use authenticator apps, not SMS. Enable two-factor authentication on all crypto-related accounts."
  },
  {
    icon: BookOpen,
    title: "Stay Educated",
    description: "The crypto space evolves fast. Stay updated on new scam techniques and security best practices."
  }
];

const TipsSection = () => {
  return (
    <section id="tips" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,hsl(160_84%_39%/0.05),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            Stay Protected
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Protection Tips</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow these essential security practices to keep your crypto assets safe.
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={tip.title}
              className="group flex gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <tip.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border/50">
            <ShieldCheck className="w-8 h-8 text-success" />
            <div className="text-left">
              <p className="font-display font-semibold">Remember</p>
              <p className="text-sm text-muted-foreground">If it seems too good to be true, it probably is.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
