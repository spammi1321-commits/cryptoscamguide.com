import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const checklistItems = [
  { id: 1, label: "I use a hardware wallet for significant holdings", category: "Wallet Security" },
  { id: 2, label: "I never share my seed phrase with anyone", category: "Wallet Security" },
  { id: 3, label: "I verify every character of addresses before sending", category: "Transaction Safety" },
  { id: 4, label: "I never copy addresses from transaction history", category: "Transaction Safety" },
  { id: 5, label: "I only use bookmarked official DeFi sites", category: "Web Safety" },
  { id: 6, label: "I read signature requests carefully before signing", category: "Web Safety" },
  { id: 7, label: "I regularly revoke unused token approvals", category: "Maintenance" },
  { id: 8, label: "I use separate wallets for different activities", category: "Maintenance" },
];

const SecurityAudit = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const progress = (checkedItems.length / checklistItems.length) * 100;

  const toggleItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getStatusColor = () => {
    if (progress === 100) return "success";
    if (progress >= 50) return "warning";
    return "alert";
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
            className="sticky top-4 z-20 mb-8"
          >
            <div
              className={cn(
                "flex items-center justify-between p-5 rounded-2xl border transition-all duration-500",
                getStatusColor() === "success" && "bg-success/10 border-success/30",
                getStatusColor() === "warning" && "bg-warning/10 border-warning/30",
                getStatusColor() === "alert" && "bg-alert/10 border-alert/30"
              )}
            >
              <div className="flex items-center gap-3">
                {getStatusColor() === "success" ? (
                  <ShieldCheck className="w-8 h-8 text-success" />
                ) : (
                  <ShieldAlert
                    className={cn(
                      "w-8 h-8",
                      getStatusColor() === "warning" ? "text-warning" : "text-alert"
                    )}
                  />
                )}
                <div>
                  <p
                    className={cn(
                      "font-bold font-display text-lg",
                      getStatusColor() === "success" && "text-success",
                      getStatusColor() === "warning" && "text-warning",
                      getStatusColor() === "alert" && "text-alert"
                    )}
                  >
                    {getStatusText()}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {checkedItems.length} of {checklistItems.length} practices followed
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={cn(
                    "text-3xl font-bold font-display",
                    getStatusColor() === "success" && "text-success",
                    getStatusColor() === "warning" && "text-warning",
                    getStatusColor() === "alert" && "text-alert"
                  )}
                >
                  {Math.round(progress)}%
                </p>
              </div>
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

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {checklistItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => toggleItem(item.id)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300",
                  checkedItems.includes(item.id)
                    ? "bg-success/5 border-success/30"
                    : "bg-card border-border/50 hover:border-border"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300",
                    checkedItems.includes(item.id)
                      ? "bg-success border-success"
                      : "border-muted-foreground/30"
                  )}
                >
                  {checkedItems.includes(item.id) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <Check className="w-4 h-4 text-success-foreground" />
                    </motion.div>
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={cn(
                      "font-medium transition-colors duration-300",
                      checkedItems.includes(item.id) ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.category}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAudit;
