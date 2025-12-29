import { motion } from "framer-motion";
import { ChevronDown, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToScams = () => {
    document.getElementById("scams")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,hsl(210_100%_52%/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,hsl(0_72%_51%/0.08),transparent_50%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_20%_15%/0.5)_1px,transparent_1px),linear-gradient(90deg,hsl(220_20%_15%/0.5)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Warning badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-alert/30 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-alert"></span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">$14B+ lost to crypto scams in 2025</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display mb-6 leading-[1.1] tracking-tight">
            Don't Be the{" "}
            <span className="gradient-text-alert">Next Crypto Scam Victim.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            The definitive guide to identifying and neutralizing crypto scams 
            before they hit your wallet.
          </motion.p>

          {/* CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <Button variant="hero" size="xl" onClick={scrollToScams} className="group">
              <ShieldAlert className="w-5 h-5 transition-transform group-hover:scale-110" />
              Learn to Protect Yourself
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-16 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>100% Free, Always</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>30+ Scams Cataloged</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning" />
              <span>No Jargon, No BS</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;