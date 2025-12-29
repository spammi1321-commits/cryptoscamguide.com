import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScamModalProps {
  isOpen: boolean;
  onClose: () => void;
  scam: {
    title: string;
    description: string;
    howItWorks: string[];
    defense: string[];
    riskLevel: string;
  } | null;
}

const ScamModal = ({ isOpen, onClose, scam }: ScamModalProps) => {
  if (!isOpen || !scam) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-2xl border border-border/50 p-6 md:p-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Risk badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4",
            scam.riskLevel === "Critical" && "bg-alert/20 text-alert",
            scam.riskLevel === "High" && "bg-orange-500/20 text-orange-400",
            scam.riskLevel === "Medium" && "bg-warning/20 text-warning"
          )}
        >
          {scam.riskLevel} Risk
        </div>

        <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">{scam.title}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">{scam.description}</p>

        {/* How it works */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold font-display mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-alert" />
            How It Works
          </h3>
          <ul className="space-y-2">
            {scam.howItWorks.map((step, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Defense strategy */}
        <div className="pro-tip">
          <h3 className="text-lg font-semibold font-display mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Defense Strategy
          </h3>
          <ul className="space-y-2">
            {scam.defense.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScamModal;
