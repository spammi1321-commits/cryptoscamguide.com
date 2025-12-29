import { motion, useInView } from "framer-motion";
import { ChevronDown, ShieldAlert, Gift, ListChecks, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  const scrollToScams = () => {
    document.getElementById("scams")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label="Introduction">
      {/* Animated aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -inset-[100px] opacity-30"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 50% at 20% 40%, hsl(210 100% 52% / 0.4), transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, hsl(0 72% 51% / 0.3), transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 50% 30%, hsl(210 100% 52% / 0.4), transparent 50%), radial-gradient(ellipse 60% 40% at 30% 70%, hsl(0 72% 51% / 0.3), transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 80% 50%, hsl(210 100% 52% / 0.4), transparent 50%), radial-gradient(ellipse 60% 40% at 60% 40%, hsl(0 72% 51% / 0.3), transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 20% 40%, hsl(210 100% 52% / 0.4), transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, hsl(0 72% 51% / 0.3), transparent 50%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,hsl(210_100%_52%/0.1),transparent_60%)]" />
      
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
            <span className="text-sm text-foreground/90 font-medium">$6 billion+ lost to crypto scams in 2025</span>
          </motion.div>

          {/* Main heading */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display mb-6 leading-[1.15] tracking-tight text-balance">
              Don't Be the Next{" "}
              <span className="gradient-text-alert">Crypto Scam Victim.</span>
            </h1>
          </motion.div>

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
            Your essential guide to spotting and stopping crypto scams 
            before they drain your wallet.
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
            <Button variant="hero" size="xl" onClick={scrollToScams} className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
              <ShieldAlert className="w-5 h-5 transition-transform group-hover:scale-110" />
              Learn to Protect Yourself
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-16 text-muted-foreground text-sm">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <ListChecks className="w-4 h-4 text-primary" />
              <span><AnimatedCounter target={30} suffix="+" /> Scams Listed</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-warning" />
              <span>Interactive Guidance</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-2"
            >
              <Gift className="w-4 h-4 text-success" />
              <span>100% Free, No Sign-Ups</span>
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
        }} className="mt-12 flex justify-center">
          <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="flex flex-col items-center -space-y-3">
              <ChevronDown className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
              <ChevronDown className="w-6 h-6 text-muted-foreground/80" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>;
};
export default Hero;