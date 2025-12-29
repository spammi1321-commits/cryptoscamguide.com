import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { scamCategories, type ScamData } from "@/data/scams";

interface ScamModalProps {
  isOpen: boolean;
  onClose: () => void;
  scam: ScamData | null;
}

const ScamModal = ({ isOpen, onClose, scam }: ScamModalProps) => {
  if (!scam) return null;

  const category = scamCategories.find(cat => cat.id === scam.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-md" 
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-border/50"
          >
            {/* Header gradient */}
            <div className={cn(
              "absolute top-0 left-0 right-0 h-32 rounded-t-2xl opacity-20",
              scam.riskLevel === "Critical" && "bg-gradient-to-b from-alert to-transparent",
              scam.riskLevel === "High" && "bg-gradient-to-b from-orange-500 to-transparent",
              scam.riskLevel === "Medium" && "bg-gradient-to-b from-yellow-500 to-transparent"
            )} />

            <div className="relative p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Risk badges */}
              <div className="flex items-center gap-3 mb-4">
                {category && (
                  <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-sm", category.color)}>
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </div>
                )}
                <div
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
                    scam.riskLevel === "Critical" && "bg-alert/20 text-alert",
                    scam.riskLevel === "High" && "bg-orange-500/20 text-orange-400",
                    scam.riskLevel === "Medium" && "bg-yellow-500/20 text-yellow-400"
                  )}
                >
                  <AlertTriangle className="w-3 h-3" />
                  {scam.riskLevel} Risk
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 pr-8">{scam.title}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">{scam.description}</p>

              {/* How it works */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold font-display mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-alert/20">
                    <AlertTriangle className="w-3.5 h-3.5 text-alert" />
                  </span>
                  How The Scam Works
                </h3>
                <div className="space-y-3">
                  {scam.howItWorks.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed pt-0.5">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Defense strategy */}
              <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                <h3 className="text-lg font-semibold font-display mb-4 flex items-center gap-2 text-success">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-success/20">
                    <Shield className="w-3.5 h-3.5 text-success" />
                  </span>
                  Defense Strategy
                </h3>
                <div className="space-y-3">
                  {scam.defense.map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{tip}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScamModal;
