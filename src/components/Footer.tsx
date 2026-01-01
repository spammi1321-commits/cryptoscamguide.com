import { motion } from "framer-motion";
import { Shield, Linkedin, Facebook, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const Footer = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://www.cryptoscamguide.com";
  const shareTitle = "Free Crypto Scam Guide | Protect Your Crypto and Yourself";
  const shareText = "Stay safe from 30+ crypto scams. Check out this free guide!";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const shareLinks = [
    {
      name: "X",
      icon: XIcon,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

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
            Knowledge is our strongest defense.
          </p>

          {/* Share buttons */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">Share this guide</p>
            <div className="flex items-center gap-3">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${link.name}`}
                  className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
              <button
                onClick={handleCopyLink}
                aria-label="Copy link"
                className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border transition-all duration-300"
              >
                {copied ? <Check className="w-5 h-5 text-success" /> : <Link2 className="w-5 h-5" />}
              </button>
            </div>
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
