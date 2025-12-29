import { useState } from "react";
import { motion } from "framer-motion";
import { HardDrive, Wifi, Shield, AlertTriangle, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
type WalletType = "hot" | "cold";
const features = [{
  name: "Private keys location",
  hot: "On internet-connected device",
  cold: "On offline, secure device"
}, {
  name: "Vulnerability to hacks",
  hot: "High - always connected",
  cold: "Very Low - requires physical confirmation"
}, {
  name: "Malware protection",
  hot: "Relies on device security",
  cold: "Immune - isolated environment"
}, {
  name: "Best for",
  hot: "Small amounts, frequent use",
  cold: "Long-term storage, large amounts"
}];
const HardwareWall = () => {
  const [activeType, setActiveType] = useState<WalletType>("cold");
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

        {/* Toggle */}
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
          <div className="inline-flex p-1 rounded-xl bg-secondary/50 border border-border/50">
            <button onClick={() => setActiveType("hot")} className={cn("flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300", activeType === "hot" ? "bg-alert text-alert-foreground shadow-lg" : "text-muted-foreground hover:text-foreground")}>
              <Wifi className="w-5 h-5" aria-hidden="true" />
              <span>Hot Wallet</span>
            </button>
            <button onClick={() => setActiveType("cold")} className={cn("flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300", activeType === "cold" ? "bg-success text-success-foreground shadow-lg" : "text-muted-foreground hover:text-foreground")}>
              <HardDrive className="w-5 h-5" aria-hidden="true" />
              <span>Cold Wallet</span>
            </button>
          </div>
        </motion.div>

        {/* Comparison */}
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
      }} className="max-w-4xl mx-auto">
          {/* Status indicator */}
          <div className={cn("flex items-center justify-center gap-3 p-4 rounded-t-2xl border border-b-0 transition-colors duration-500", activeType === "hot" ? "bg-alert/10 border-alert/30" : "bg-success/10 border-success/30")}>
            {activeType === "hot" ? <>
                <AlertTriangle className="w-5 h-5 text-alert" aria-hidden="true" />
                <span className="font-semibold text-alert">Higher Risk Profile</span>
              </> : <>
                <Shield className="w-5 h-5 text-success" aria-hidden="true" />
                <span className="font-semibold text-success">Maximum Security</span>
              </>}
          </div>

          {/* Feature list */}
          <div className="bg-card rounded-b-2xl border border-border/50 overflow-hidden">
            {features.map((feature, index) => <div key={feature.name} className={cn("flex items-center justify-between p-4 md:p-5", index !== features.length - 1 && "border-b border-border/50")}>
                <span className="font-medium text-sm md:text-base">{feature.name}</span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground text-right max-w-[160px] sm:max-w-[220px] md:max-w-none">
                  {activeType === "hot" ? <>
                      <X className="w-4 h-4 text-alert flex-shrink-0" aria-hidden="true" />
                      <span>{feature.hot}</span>
                    </> : <>
                      <Check className="w-4 h-4 text-success flex-shrink-0" aria-hidden="true" />
                      <span>{feature.cold}</span>
                    </>}
                </div>
              </div>)}
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