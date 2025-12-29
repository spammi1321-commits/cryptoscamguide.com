import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScamCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  threatLevel: "low" | "medium" | "high" | "critical";
  examples: string[];
  delay?: number;
}

const threatColors = {
  low: "bg-success/10 text-success border-success/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  high: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  critical: "bg-danger/10 text-danger border-danger/20",
};

const threatLabels = {
  low: "Low Risk",
  medium: "Medium Risk",
  high: "High Risk",
  critical: "Critical Risk",
};

const ScamCard = ({ title, description, icon: Icon, threatLevel, examples, delay = 0 }: ScamCardProps) => {
  return (
    <div 
      className="group relative card-gradient rounded-xl border border-border/50 p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-secondary/50 text-primary group-hover:bg-primary/10 transition-colors duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className={cn("text-xs font-medium px-3 py-1 rounded-full border", threatColors[threatLevel])}>
            {threatLabels[threatLevel]}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold font-display mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Examples */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Common Signs:</p>
          <ul className="space-y-1.5">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-warning mt-0.5">•</span>
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScamCard;
