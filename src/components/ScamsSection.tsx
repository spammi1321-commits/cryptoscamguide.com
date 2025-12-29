import { 
  Fish, 
  TrendingDown, 
  Gift, 
  Users, 
  Wallet, 
  MessageCircle,
  Coins,
  Lock
} from "lucide-react";
import ScamCard from "./ScamCard";

const scams = [
  {
    title: "Phishing Attacks",
    description: "Fake websites and emails designed to steal your wallet credentials and private keys.",
    icon: Fish,
    threatLevel: "critical" as const,
    examples: [
      "Fake exchange login pages",
      "Wallet connection popups",
      "Urgent security alert emails"
    ]
  },
  {
    title: "Rug Pulls",
    description: "Developers abandon a project and run away with investors' funds after hyping it up.",
    icon: TrendingDown,
    threatLevel: "critical" as const,
    examples: [
      "Anonymous team members",
      "No locked liquidity",
      "Unrealistic promises"
    ]
  },
  {
    title: "Fake Airdrops",
    description: "Scammers promise free tokens but steal your funds when you connect your wallet.",
    icon: Gift,
    threatLevel: "high" as const,
    examples: [
      "Unsolicited airdrop offers",
      "Requests for private keys",
      "Unknown token approvals"
    ]
  },
  {
    title: "Pump & Dump",
    description: "Coordinated efforts to artificially inflate a token's price before selling off.",
    icon: Coins,
    threatLevel: "high" as const,
    examples: [
      "Sudden price spikes",
      "Aggressive social media hype",
      "Celebrity endorsements"
    ]
  },
  {
    title: "Romance Scams",
    description: "Building fake relationships to manipulate victims into sending cryptocurrency.",
    icon: Users,
    threatLevel: "high" as const,
    examples: [
      "Met on dating apps",
      "Crypto investment advice",
      "Requests for money"
    ]
  },
  {
    title: "Fake Wallets",
    description: "Malicious wallet apps that steal your seed phrase and drain your funds.",
    icon: Wallet,
    threatLevel: "critical" as const,
    examples: [
      "Unofficial app stores",
      "Cloned wallet interfaces",
      "Requests for seed phrase"
    ]
  },
  {
    title: "Impersonation",
    description: "Scammers pretending to be support staff, influencers, or company representatives.",
    icon: MessageCircle,
    threatLevel: "medium" as const,
    examples: [
      "DMs from 'support'",
      "Fake giveaways",
      "Verification requests"
    ]
  },
  {
    title: "Ransomware",
    description: "Malware that encrypts your data and demands cryptocurrency payment.",
    icon: Lock,
    threatLevel: "high" as const,
    examples: [
      "Suspicious downloads",
      "Locked computer files",
      "Bitcoin payment demands"
    ]
  }
];

const ScamsSection = () => {
  return (
    <section id="scams" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(174_72%_46%/0.05),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-danger/10 text-danger text-sm font-medium mb-4">
            Know Your Enemy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Common <span className="gradient-text-warning">Crypto Scams</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Familiarize yourself with these tactics used by scammers to steal your crypto assets.
          </p>
        </div>

        {/* Scam cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scams.map((scam, index) => (
            <ScamCard
              key={scam.title}
              {...scam}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScamsSection;
