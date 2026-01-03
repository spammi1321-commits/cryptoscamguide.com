import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ShieldAlert, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

const checklistItems = [
  { id: 1, label: "I use a hardware wallet for significant holdings", category: "Wallet Security" },
  { id: 2, label: "I never share my seed phrase with anyone", category: "Wallet Security" },
  { id: 3, label: "I verify every character of addresses before sending", category: "Transaction Safety" },
  { id: 4, label: "I never copy addresses from transaction history", category: "Transaction Safety" },
  { id: 5, label: "I only use bookmarked official DeFi sites", category: "Web Safety" },
  { id: 6, label: "I read signature requests carefully before signing", category: "Web Safety" },
  { id: 7, label: "I regularly revoke unused dApp and token approvals", category: "Maintenance" },
  { id: 8, label: "I use separate wallets for different activities", category: "Maintenance" },
];

// Group items by category
const groupedItems = checklistItems.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, typeof checklistItems>);

const categories = Object.keys(groupedItems);

// Circular Progress Ring Component
const ProgressRing = ({ progress, color }: { progress: number; color: string }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="relative w-20 h-20">
      <svg className="w-20 h-20 transform -rotate-90">
        <circle
          cx="40"
          cy="40"
          r="40"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-secondary"
        />
        <motion.circle
          cx="40"
          cy="40"
          r="40"
          stroke={color}
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("text-lg font-bold font-display")} style={{ color }}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

const SecurityAudit = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [hasReached100, setHasReached100] = useState(false);
  const progress = (checkedItems.length / checklistItems.length) * 100;
  const prevProgressRef = useRef(0);

  const toggleItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Celebration effect when reaching 100%
  useEffect(() => {
    if (progress === 100 && prevProgressRef.current < 100 && !hasReached100) {
      setHasReached100(true);
      // Fire confetti
      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ['#22c55e', '#3b82f6', '#f59e0b']
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ['#22c55e', '#3b82f6', '#f59e0b']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
    if (progress < 100) {
      setHasReached100(false);
    }
    prevProgressRef.current = progress;
  }, [progress, hasReached100]);

  const getStatusColor = () => {
    if (progress === 100) return "success";
    if (progress >= 50) return "warning";
    return "alert";
  };

  const getStatusHex = () => {
    if (progress === 100) return "#22c55e";
    if (progress >= 50) return "#f59e0b";
    return "#ef4444";
  };

  const getStatusText = () => {
    if (progress === 100) return "Excellent Security";
    if (progress >= 75) return "Good Security";
    if (progress >= 50) return "Moderate Risk";
    if (progress >= 25) return "High Risk";
    return "Critical Risk";
  };

  return (
    <section id="audit" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(210_100%_52%/0.05),transparent_50%)]" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Interactive
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            60-Second <span className="gradient-text">Security Audit</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Check off each security practice you follow. Watch your security status improve.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Live status indicator - sticky */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sticky top-16 md:top-20 z-30 mb-8 bg-background/95 backdrop-blur-sm py-2 -mx-2 px-2 rounded-2xl"
          >
            <div
              className={cn(
                "flex items-center justify-between p-5 rounded-2xl border transition-all duration-500",
                getStatusColor() === "success" && "bg-success/10 border-success/30 shadow-[0_0_40px_-10px_hsl(142_76%_36%/0.4)]",
                getStatusColor() === "warning" && "bg-warning/10 border-warning/30",
                getStatusColor() === "alert" && "bg-alert/10 border-alert/30"
              )}
            >
              <div className="flex items-center gap-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={getStatusColor()}
                    initial={{ scale: 0.5, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0.5, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {getStatusColor() === "success" ? (
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ShieldCheck className="w-8 h-8 text-success" />
                      </motion.div>
                    ) : (
                      <motion.div
                        animate={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <ShieldAlert
                          className={cn(
                            "w-8 h-8",
                            getStatusColor() === "warning" ? "text-warning" : "text-alert"
                          )}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
                <div>
                  <motion.p
                    key={getStatusText()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "font-bold font-display text-lg flex items-center gap-2",
                      getStatusColor() === "success" && "text-success",
                      getStatusColor() === "warning" && "text-warning",
                      getStatusColor() === "alert" && "text-alert"
                    )}
                  >
                    {getStatusText()}
                    {progress === 100 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
                        transition={{ delay: 0.2 }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.p>
                  <p className="text-muted-foreground text-sm">
                    {checkedItems.length} of {checklistItems.length} best practices followed
                  </p>
                </div>
              </div>
              
              {/* Progress Ring */}
              <ProgressRing progress={progress} color={getStatusHex()} />
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className={cn(
                  "h-full rounded-full transition-colors duration-500",
                  getStatusColor() === "success" && "bg-success",
                  getStatusColor() === "warning" && "bg-warning",
                  getStatusColor() === "alert" && "bg-alert"
                )}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Checklist grouped by category */}
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-xs text-muted-foreground">
                    {groupedItems[category].filter(item => checkedItems.includes(item.id)).length}/{groupedItems[category].length}
                  </span>
                </div>
                
                {/* Category items */}
                <div className="space-y-3">
                  {groupedItems[category].map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.05 + index * 0.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleItem(item.id)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300",
                        checkedItems.includes(item.id)
                          ? "bg-success/5 border-success/30 shadow-sm"
                          : "bg-card border-border/50 hover:border-border hover:bg-card/80"
                      )}
                    >
                      <motion.div
                        className={cn(
                          "flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300",
                          checkedItems.includes(item.id)
                            ? "bg-success border-success"
                            : "border-muted-foreground/30"
                        )}
                        whileTap={{ scale: 0.8 }}
                      >
                        <AnimatePresence>
                          {checkedItems.includes(item.id) && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ type: "spring", stiffness: 500, damping: 25 }}
                            >
                              <Check className="w-4 h-4 text-success-foreground" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <div className="flex-1">
                        <p
                          className={cn(
                            "font-medium transition-colors duration-300",
                            checkedItems.includes(item.id) ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {item.label}
                        </p>
                      </div>
                      {checkedItems.includes(item.id) && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-success"
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAudit;
