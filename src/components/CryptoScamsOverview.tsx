import { motion } from "framer-motion";
import { AlertTriangle, Target, DollarSign, Shield } from "lucide-react";

const CryptoScamsOverview = () => {
  const keyPoints = [
    {
      icon: AlertTriangle,
      title: "Deception",
      description: "Scammers use fake identities, websites, and promises to trick victims"
    },
    {
      icon: Target,
      title: "Targeting",
      description: "They exploit emotions like fear, greed, and urgency to manipulate decisions"
    },
    {
      icon: DollarSign,
      title: "Theft",
      description: "The goal is always to steal your crypto, private keys, or personal data"
    },
    {
      icon: Shield,
      title: "Prevention",
      description: "Knowledge and vigilance are your best defense against these attacks"
    }
  ];

  return (
    <section id="overview" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Are Crypto Scams?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Crypto scams are fraudulent schemes designed to steal your cryptocurrency, 
            private keys, or personal information. Scammers exploit the decentralized 
            and irreversible nature of blockchain transactions—once your crypto is gone, 
            it's nearly impossible to recover.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              The Scammer's Playbook
            </h3>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              While tactics vary, all crypto scams share common goals and methods:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          Below you'll find a comprehensive catalog of 30+ scam types, 
          organized by category, with real-world examples and proven defense strategies.
        </motion.p>
      </div>
    </section>
  );
};

export default CryptoScamsOverview;
