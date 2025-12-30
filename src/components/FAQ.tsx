import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is my seed phrase so important, and how should I protect it?",
    answer: "Your seed phrase (12-24 words) is the master key to all your crypto. Anyone with it has complete, irreversible access to your funds. NEVER type it on any website, app, or online form—no legitimate service will ever ask for it. Write it down on paper (or metal for fire/water resistance), store it in multiple secure physical locations, and never photograph, screenshot, or store it digitally. If someone asks for your seed phrase, it's always a scam—no exceptions."
  },
  {
    question: "What's the safest way to store my crypto?",
    answer: "A hardware wallet (like Trezor) is the gold standard. It keeps your private keys offline, making them impossible to steal remotely. For everyday use, keep only small amounts in hot wallets."
  },
  {
    question: "How do I know if a website or DApp is legitimate?",
    answer: "Always verify URLs character by character—scammers use lookalike domains (e.g., 'uniswáp.com' with an accent). Bookmark official sites, check social media for verified links, and never click links from DMs or emails."
  },
  {
    question: "What should I do if I accidentally approved a malicious contract?",
    answer: "Act immediately: use tools like Revoke.cash or Etherscan's Token Approval Checker to revoke the approval. Move remaining assets to a fresh wallet. In the future, always review what permissions you're granting before signing."
  },
  {
    question: "Can scammers steal my crypto just by knowing my wallet address?",
    answer: "No—your public address is safe to share. However, scammers use it for address poisoning attacks, sending tiny transactions from similar-looking addresses hoping you'll copy the wrong one later. Always verify the full address."
  },
  {
    question: "Are crypto recovery services legitimate?",
    answer: "99% are scams. Legitimate recovery is extremely limited and usually only possible if you have partial seed phrase info. Anyone guaranteeing recovery or asking for upfront fees is almost certainly a scammer."
  },
  {
    question: "Why do scammers ask me to 'validate' or 'sync' my wallet?",
    answer: "These are phishing attempts. There's no such thing as wallet validation or syncing in crypto. These fake sites trick you into entering your seed phrase, which gives scammers complete access to your funds."
  },
  {
    question: "Is it safe to connect my wallet to DApps?",
    answer: "Connecting only shares your public address—that's safe. The danger comes from signing transactions or approving token spending. Always read what you're signing, use transaction simulation tools, and revoke unused approvals regularly."
  },
  {
    question: "How can I verify if an airdrop is real?",
    answer: "Real airdrops never ask you to send crypto first or connect to unknown sites. Check the project's official channels (Twitter, Discord) for announcements. If you received random tokens, don't interact with them—they might trigger malicious contracts."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Got Questions?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Common questions about keeping your crypto safe from scammers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
