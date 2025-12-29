import { motion } from "framer-motion";
import { Shield, AlertTriangle, Twitter, MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(220_20%_12%),transparent_70%)]" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-xl tracking-tight">
              CryptoScam<span className="text-primary">Guide</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-md mb-8">
            Protecting the crypto community through education. 
            Knowledge is your strongest defense.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CryptoScamGuide. Educational resource only.</p>
          <p className="flex items-center gap-1">
            Made for the crypto community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
