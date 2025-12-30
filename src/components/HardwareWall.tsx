import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HardDrive, Wifi, Shield, AlertTriangle, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type WalletType = "hot" | "cold";

const features = [{
  name: "Private keys location",
  hot: "On internet-connected device",
  cold: "On a secure offline device"
}, {
  name: "Vulnerability to hacks",
  hot: "High, always connected to internet",
  cold: "Very low, requires physical access"
}, {
  name: "Malware protection",
  hot: "Only as secure as the device used",
  cold: "Protected by being offline"
}, {
  name: "Best for",
  hot: "Everyday use with smaller balances",
  cold: "Saving crypto long-term"
}];

const HardwareWall = () => {
  const [activeType, setActiveType] = useState<WalletType>("cold");
  
  const featureVariants = {
    hidden: { opacity: 0, x: activeType === "hot" ? -20 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut" as const
      }
    })
  };

  return <section id="hardware" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,hsl(142_76%_36%/0.08),transparent_50%)]" />

      <div className="container px-4 md:px-6 relative">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
            The Ultimate Defense
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            The <span className="gradient-text">Hardware Wallet</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Software wallets live on the internet. Scammers live there too.{" "}
            <span className="text-foreground font-medium">Hardware wallets keep your keys offline</span>, 
            where hackers can't reach them.
          </p>
        </motion.div>

        {/* Toggle with animated indicator */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex justify-center mb-12">
          <div className="relative inline-flex p-1 rounded-xl bg-secondary/50 border border-border/50">
            {/* Animated background slider */}
            <motion.div
              className={cn(
                "absolute top-1 bottom-1 rounded-lg shadow-lg",
                activeType === "hot" ? "bg-alert" : "bg-success"
              )}
              initial={false}
              animate={{
                left: activeType === "hot" ? "4px" : "50%",
                right: activeType === "hot" ? "50%" : "4px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setActiveType("hot")} 
              className={cn(
                "relative z-10 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-300",
                activeType === "hot" ? "text-alert-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <motion.div
                animate={activeType === "hot" ? { rotate: [0, -10, 10, -10, 0] } : {}}
                transition={{ duration: 0.5, repeat: activeType === "hot" ? Infinity : 0, repeatDelay: 2 }}
              >
                <Wifi className="w-5 h-5" aria-hidden="true" />
              </motion.div>
              <span>Hot Wallet</span>
            </button>
            <button 
              onClick={() => setActiveType("cold")} 
              className={cn(
                "relative z-10 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-300",
                activeType === "cold" ? "text-success-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <motion.div
                animate={activeType === "cold" ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1.5, repeat: activeType === "cold" ? Infinity : 0 }}
              >
                <HardDrive className="w-5 h-5" aria-hidden="true" />
              </motion.div>
              <span>Cold Wallet</span>
            </button>
          </div>
        </motion.div>

        {/* Comparison with glow effect */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className={cn(
        "max-w-4xl mx-auto transition-all duration-500 rounded-2xl",
        activeType === "cold" && "shadow-[0_0_60px_-10px_hsl(142_76%_36%/0.3)]"
      )}>
          {/* Status indicator */}
          <div className={cn("flex items-center justify-center gap-3 p-4 rounded-t-2xl border border-b-0 transition-colors duration-500", activeType === "hot" ? "bg-alert/10 border-alert/30" : "bg-success/10 border-success/30")}>
            <AnimatePresence mode="wait">
              {activeType === "hot" ? (
                <motion.div
                  key="hot"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: [0, -15, 15, -15, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.5 }}
                  >
                    <AlertTriangle className="w-5 h-5 text-alert" aria-hidden="true" />
                  </motion.div>
                  <span className="font-semibold text-alert">Higher Risk Profile</span>
                </motion.div>
              ) : (
                <motion.div
                  key="cold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Shield className="w-5 h-5 text-success" aria-hidden="true" />
                  </motion.div>
                  <span className="font-semibold text-success">Maximum Security</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Feature list with staggered animation */}
          <div className="bg-card rounded-b-2xl border border-border/50 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={activeType}>
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={featureVariants}
                    className={cn(
                      "flex items-center justify-between p-4 md:p-5",
                      index !== features.length - 1 && "border-b border-border/50"
                    )}
                  >
                    <span className="font-medium text-sm md:text-base">{feature.name}</span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground text-right max-w-[160px] sm:max-w-[220px] md:max-w-none">
                      {activeType === "hot" ? (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                          >
                            <X className="w-4 h-4 text-alert flex-shrink-0" aria-hidden="true" />
                          </motion.div>
                          <span>{feature.hot}</span>
                        </>
                      ) : (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                          >
                            <Check className="w-4 h-4 text-success flex-shrink-0" aria-hidden="true" />
                          </motion.div>
                          <span>{feature.cold}</span>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Pro tip */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="max-w-2xl mx-auto mt-12">
          <div className="pro-tip animate-pulse-glow">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold font-display mb-1">Pro Tip</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Use a hot wallet for day-to-day transactions with small amounts. Keep the majority 
                  of your holdings in cold storage. Never store your seed phrase digitally.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HardwareWall;
