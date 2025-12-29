import { useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint, Link2, ShieldX, Users, ChevronRight } from "lucide-react";
import ScamModal from "./ScamModal";
import { cn } from "@/lib/utils";

const scams = [
  {
    id: 1,
    title: "Address Poisoning",
    shortDesc: "Attackers send tiny transactions from lookalike addresses to trick you into copying the wrong one.",
    icon: Fingerprint,
    riskLevel: "Critical",
    description: "Address poisoning exploits your transaction history by flooding it with transactions from addresses that look nearly identical to ones you've used before.",
    howItWorks: [
      "Scammers analyze your on-chain transaction history",
      "They create wallet addresses with similar first and last characters",
      "They send tiny amounts (dust) to your wallet from these lookalike addresses",
      "When you copy an address from history, you accidentally copy the scammer's"
    ],
    defense: [
      "Never copy addresses from transaction history",
      "Always use a saved address book or fresh copy from the source",
      "Verify EVERY character of an address before sending",
      "Use hardware wallets with address verification on device"
    ]
  },
  {
    id: 2,
    title: "Ice Phishing",
    shortDesc: "Malicious signature requests that grant attackers permission to drain your tokens.",
    icon: Link2,
    riskLevel: "Critical",
    description: "Ice phishing tricks users into signing seemingly harmless transactions that actually grant the attacker permission to transfer tokens from your wallet.",
    howItWorks: [
      "You visit a fake DeFi site or click a malicious link",
      "A signature request appears that looks legitimate",
      "The request actually grants token approval to the attacker",
      "They can now drain approved tokens at any time"
    ],
    defense: [
      "Only interact with verified, bookmarked DeFi sites",
      "Read every signature request carefully before signing",
      "Use tools like Revoke.cash to audit and remove approvals",
      "Never sign transactions from unsolicited links"
    ]
  },
  {
    id: 3,
    title: "Approval Exploits",
    shortDesc: "Unlimited token approvals give hackers a permanent backdoor to your wallet.",
    icon: ShieldX,
    riskLevel: "High",
    description: "When you approve a smart contract to spend your tokens, you often grant unlimited access. If that contract is compromised, so are your tokens.",
    howItWorks: [
      "You approve a DApp to spend your tokens (common in DeFi)",
      "The approval is often set to 'unlimited' by default",
      "If the DApp gets hacked, attackers can use your approval",
      "Your tokens can be drained without any new signature"
    ],
    defense: [
      "Set custom approval limits instead of unlimited",
      "Regularly audit and revoke unused approvals",
      "Use dedicated wallets for different DeFi activities",
      "Keep the majority of funds in cold storage"
    ]
  },
  {
    id: 4,
    title: "Social Engineering",
    shortDesc: "Impersonators posing as support, influencers, or team members to steal your funds.",
    icon: Users,
    riskLevel: "High",
    description: "Scammers impersonate project team members, support staff, or influencers to manipulate you into revealing sensitive information or sending funds.",
    howItWorks: [
      "Scammers monitor Discord, Telegram, and Twitter for users needing help",
      "They create convincing fake profiles of team members",
      "They reach out via DM offering 'support' or 'exclusive opportunities'",
      "They request seed phrases, private keys, or direct payments"
    ],
    defense: [
      "Official support NEVER DMs first",
      "Never share seed phrases or private keys with anyone",
      "Verify identities through official channels only",
      "Be skeptical of 'urgent' or 'exclusive' opportunities"
    ]
  }
];

const ScamsCatalog = () => {
  const [selectedScam, setSelectedScam] = useState<typeof scams[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="scams" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,hsl(210_100%_52%/0.05),transparent_50%)]" />

      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-alert/10 text-alert text-sm font-semibold mb-4">
            Know Your Enemy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            The Scam <span className="gradient-text-alert">Library</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Click any card to learn the attack pattern and your defense strategy.
          </p>
        </motion.div>

        {/* Scam cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {scams.map((scam) => (
            <motion.div
              key={scam.id}
              variants={cardVariants}
              onClick={() => setSelectedScam(scam)}
              className="group relative bg-card rounded-2xl border border-border/50 p-6 card-interactive overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-secondary/50 text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <scam.icon className="w-6 h-6" />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-semibold px-3 py-1 rounded-full",
                      scam.riskLevel === "Critical" && "bg-alert/20 text-alert",
                      scam.riskLevel === "High" && "bg-orange-500/20 text-orange-400"
                    )}
                  >
                    {scam.riskLevel}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold font-display mb-2 group-hover:text-primary transition-colors duration-300">
                  {scam.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {scam.shortDesc}
                </p>

                {/* Learn more */}
                <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn defense strategy
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <ScamModal
        isOpen={!!selectedScam}
        onClose={() => setSelectedScam(null)}
        scam={selectedScam}
      />
    </section>
  );
};

export default ScamsCatalog;
