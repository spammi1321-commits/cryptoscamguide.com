import { motion } from "framer-motion";
import { ExternalLink, Shield, Cpu, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import trezorSafe3 from "@/assets/trezor-safe-3.png";
import trezorSafe5 from "@/assets/trezor-safe-5.png";
import trezorSafe7 from "@/assets/trezor-safe-7.avif";

const trezorProducts = [
  {
    id: "safe-3",
    name: "Trezor Safe 3",
    tagline: "Essential Security",
    description: "Advanced crypto security with secure element chip and physical buttons. Perfect for beginners.",
    icon: Shield,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    url: "https://trezor.io/trezor-safe-3",
    image: trezorSafe3,
  },
  {
    id: "safe-5",
    name: "Trezor Safe 5",
    tagline: "Advanced Protection",
    description: "Color touchscreen display with enhanced usability features for active crypto users.",
    icon: Cpu,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    url: "https://trezor.io/trezor-safe-5",
    image: trezorSafe5,
    featured: true,
  },
  {
    id: "safe-7",
    name: "Trezor Safe 7",
    tagline: "Ultimate Security",
    description: "Most advanced security with the world's first transparent secure element, quantum-ready architecture, and wireless connectivity.",
    icon: Atom,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    url: "https://trezor.io/trezor-safe-7",
    image: trezorSafe7,
  },
];

const TrezorAffiliate = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,hsl(210_100%_52%/0.03),transparent_50%)]" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold mb-3">
            Recommended Hardware
          </span>
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
            Secure Your Crypto with <span className="gradient-text">Trezor</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Industry-leading open-source hardware wallets trusted by millions. Your keys, your crypto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {trezorProducts.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "group relative flex flex-col p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02]",
                product.featured
                  ? "bg-primary/5 border-primary/30 shadow-lg shadow-primary/5"
                  : "bg-card border-border/50 hover:border-border"
              )}
            >
              {product.featured && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}

              {/* Product Image */}
              <div className="flex justify-center mb-4 pt-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className={cn("p-2 rounded-lg", product.bgColor)}>
                  <product.icon className={cn("w-4 h-4", product.color)} />
                </div>
                <div>
                  <h4 className="font-semibold font-display text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <p className={cn("text-xs font-medium", product.color)}>{product.tagline}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {product.description}
              </p>

              <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn More
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          * Affiliate links. We may earn a commission at no extra cost to you.
        </motion.p>
      </div>
    </section>
  );
};

export default TrezorAffiliate;
