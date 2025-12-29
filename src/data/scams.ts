import { 
  Repeat, 
  UserCheck, 
  TrendingUp, 
  FileCode, 
  Monitor, 
  KeyRound, 
  Image,
  Building2
} from "lucide-react";

export interface ScamData {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  howItWorks: string[];
  defense: string[];
  riskLevel: "Critical" | "High" | "Medium";
  category: string;
}

export interface ScamCategory {
  id: string;
  name: string;
  icon: typeof Repeat;
  color: string;
  scams: ScamData[];
}

export const scamCategories: ScamCategory[] = [
  {
    id: "keys",
    name: "Private Key & Seed Phrase",
    icon: KeyRound,
    color: "text-emerald-400",
    scams: [
      {
        id: 25,
        title: "Seed Phrase Phishing",
        shortDesc: "Fake recovery or verification requests asking for your seed.",
        description: "Fake recovery or verification requests. Scammers try to trick you into revealing your seed phrase through fake security alerts or recovery processes.",
        howItWorks: [
          "Scammer sends fake security alert or recovery email",
          "Directs to convincing phishing page",
          "Page asks for seed phrase to 'verify' or 'recover'",
          "Seed phrase is captured and funds drained"
        ],
        defense: [
          "No legitimate service ever asks for your seed phrase",
          "Never enter seed phrases on any website",
          "Use hardware wallets for recovery processes",
          "Verify all communications through official channels"
        ],
        riskLevel: "Critical",
        category: "keys"
      },
      {
        id: 26,
        title: "Fake Wallet Recovery Services",
        shortDesc: "Scammers claiming to recover lost or stolen crypto.",
        description: "Scammers claiming to recover lost funds. They want upfront fees or wallet access, then disappear without recovering anything.",
        howItWorks: [
          "Victim posts about lost funds online",
          "Scammer contacts offering recovery services",
          "Requests upfront fee or wallet access",
          "Takes payment and disappears"
        ],
        defense: [
          "Cryptocurrency transactions are irreversible",
          "Recovery claims for stolen crypto are almost always false",
          "Upfront fees are a major red flag",
          "Legitimate recovery only possible with seed phrase"
        ],
        riskLevel: "High",
        category: "keys"
      },
      {
        id: 27,
        title: "Cloud Backup Seed Theft",
        shortDesc: "Seeds stolen from insecure cloud storage or backups.",
        description: "Seeds stolen from insecure backups. Attackers access cloud data to extract unencrypted seed phrases from photos or documents.",
        howItWorks: [
          "User stores seed phrase in cloud storage, photos, or notes",
          "Attacker gains access to cloud account",
          "Searches for cryptocurrency-related files",
          "Extracts seed phrase and drains wallet"
        ],
        defense: [
          "Never store seed phrases digitally or in plaintext",
          "Use offline, physical storage methods",
          "If digital backup needed, encrypt properly",
          "Use steel backup solutions for fire/water protection"
        ],
        riskLevel: "Critical",
        category: "keys"
      }
    ]
  },
  {
    id: "transaction",
    name: "Transaction & Address",
    icon: Repeat,
    color: "text-red-400",
    scams: [
      {
        id: 1,
        title: "Address Poisoning",
        shortDesc: "Exploits how users copy wallet addresses from transaction history.",
        description: "A scam that exploits how users copy wallet addresses from transaction history. The scammer sends a tiny transaction from an address that visually resembles one you've interacted with.",
        howItWorks: [
          "Scammer analyzes your on-chain transaction history",
          "Creates wallet address that visually resembles ones you've used",
          "Sends tiny transaction from the lookalike address",
          "Hopes you'll copy their address by mistake and send funds later"
        ],
        defense: [
          "Never copy addresses from transaction history",
          "Always verify the entire address character by character",
          "Save trusted addresses explicitly in an address book",
          "Use ENS names cautiously and verify underlying addresses"
        ],
        riskLevel: "Critical",
        category: "transaction"
      },
      {
        id: 2,
        title: "Clipboard Hijacking",
        shortDesc: "Malware that silently alters copied wallet addresses.",
        description: "Malware that alters copied wallet addresses. When you copy a legitimate address, malware replaces it with the scammer's address in your clipboard.",
        howItWorks: [
          "Malware infects your device through downloads or phishing",
          "Monitors clipboard for cryptocurrency address patterns",
          "Replaces copied addresses with scammer's address",
          "You paste and send funds unknowingly to the wrong address"
        ],
        defense: [
          "Always double-check pasted addresses before confirming",
          "Use hardware wallets that display address for confirmation",
          "Avoid pirated software and suspicious downloads",
          "Keep your system clean with updated antivirus"
        ],
        riskLevel: "Critical",
        category: "transaction"
      },
      {
        id: 3,
        title: "Vanity Address Impersonation",
        shortDesc: "Addresses generated to look similar to legitimate ones.",
        description: "Addresses intentionally generated to look similar to legitimate ones. Scammers hope you'll only check the first/last characters and mistake their address for a trusted one.",
        howItWorks: [
          "Scammer identifies target addresses (exchanges, projects)",
          "Uses vanity address generators to create similar-looking addresses",
          "Distributes fake address through phishing or social engineering",
          "Victims send funds after partial address verification"
        ],
        defense: [
          "Don't rely on partial address matching",
          "Compare full addresses character by character",
          "Confirm large transfers through out-of-band communication",
          "Use address book features in your wallet"
        ],
        riskLevel: "High",
        category: "transaction"
      },
      {
        id: 4,
        title: "Dusting Attacks",
        shortDesc: "Tiny crypto amounts sent to track wallet behavior.",
        description: "Sending tiny amounts of crypto to many wallets. The scammer wants to track your wallet behavior, link identities, or trick you into interacting with malicious tokens.",
        howItWorks: [
          "Scammer sends minuscule amounts to thousands of wallets",
          "Tracks when dust is moved to analyze wallet connections",
          "May include malicious tokens that trigger drains when interacted with",
          "Used for deanonymization or phishing preparation"
        ],
        defense: [
          "Ignore unsolicited tokens in your wallet",
          "Don't interact with or try to sell unknown assets",
          "Use wallet privacy features when available",
          "Consider using multiple wallets for different purposes"
        ],
        riskLevel: "Medium",
        category: "transaction"
      },
      {
        id: 5,
        title: "Transaction Replay Attacks",
        shortDesc: "Reusing signed transactions on other blockchains.",
        description: "Reusing a signed transaction on another blockchain or fork. Scammers exploit chains without replay protection to execute your transaction twice, draining funds.",
        howItWorks: [
          "Occurs during blockchain forks or on similar chains",
          "Scammer captures your signed transaction",
          "Replays the same transaction on another chain",
          "Funds are drained from your wallet on the other chain"
        ],
        defense: [
          "Use wallets with built-in replay protection",
          "Be extra cautious during blockchain forks",
          "Avoid reusing signed transactions across chains",
          "Wait for official guidance during chain splits"
        ],
        riskLevel: "High",
        category: "transaction"
      }
    ]
  },
  {
    id: "social",
    name: "Impersonation & Social",
    icon: UserCheck,
    color: "text-orange-400",
    scams: [
      {
        id: 6,
        title: "Support Impersonation",
        shortDesc: "Fake customer support accounts contacting users.",
        description: "Fake customer support accounts contacting users. The scammer pretends to help and tries to get you to share seed phrases, sign transactions, or visit phishing sites.",
        howItWorks: [
          "Scammer monitors public support requests on social media",
          "Creates convincing fake support profile",
          "DMs victim offering to 'help' with their issue",
          "Requests seed phrase or directs to phishing site"
        ],
        defense: [
          "Legitimate support NEVER DMs first",
          "Only use official support channels listed on the project's website",
          "Never share private keys or seed phrases with anyone",
          "Report impersonator accounts immediately"
        ],
        riskLevel: "Critical",
        category: "social"
      },
      {
        id: 7,
        title: "Founder/Influencer Impersonation",
        shortDesc: "Fake accounts posing as public crypto figures.",
        description: "Fake accounts posing as public figures. Scammers exploit trust and authority to push fake giveaways, tokens, or malicious links.",
        howItWorks: [
          "Creates accounts mimicking famous crypto personalities",
          "Posts replies under viral tweets with fake giveaways",
          "Uses deepfakes or old footage in fake livestreams",
          "Promotes fake tokens or phishing links"
        ],
        defense: [
          "Verify account handles carefully (look for subtle misspellings)",
          "Beware of replies under viral posts promoting giveaways",
          "Never trust unsolicited investment offers from 'celebrities'",
          "Check follower count, account age, and verification"
        ],
        riskLevel: "High",
        category: "social"
      },
      {
        id: 8,
        title: "Romance Scams (Pig Butchering)",
        shortDesc: "Long-term emotional manipulation combined with fake investing.",
        description: "Long-term emotional manipulation combined with fake crypto investing. The scammer builds trust over weeks or months, then convinces you to invest on a fake platform they control.",
        howItWorks: [
          "Scammer builds romantic relationship over weeks/months",
          "Gradually introduces topic of crypto investing",
          "Shows fake profits on controlled platform",
          "Encourages larger deposits, then disappears with funds"
        ],
        defense: [
          "Sudden crypto investment talk from online romance is a major red flag",
          "Never invest on platforms recommended by online-only relationships",
          "Fake platforms always show guaranteed/consistent profits",
          "Pressure to move off mainstream platforms is suspicious"
        ],
        riskLevel: "Critical",
        category: "social"
      },
      {
        id: 9,
        title: "Giveaway Scams",
        shortDesc: "Fake promotions promising free crypto in return for payment.",
        description: "Fake promotions promising free crypto. The scammer wants you to send crypto first, claiming you'll receive more in return.",
        howItWorks: [
          "Fake giveaway announced via social media or hacked accounts",
          "Promises to double or multiply your crypto",
          "Requires sending crypto first to 'verify' your wallet",
          "Funds are stolen, nothing is returned"
        ],
        defense: [
          "No legitimate giveaway ever requires sending crypto first",
          "Verify giveaways through official project channels",
          "Beware of livestream giveaways using old/fake footage",
          "Report fake giveaway posts immediately"
        ],
        riskLevel: "High",
        category: "social"
      },
      {
        id: 10,
        title: "Friend-in-Need Scams",
        shortDesc: "Compromised accounts requesting urgent financial help.",
        description: "Compromised accounts requesting urgent help. The scammer wants you to send funds quickly without proper verification.",
        howItWorks: [
          "Scammer compromises friend's social media account",
          "Messages contacts claiming emergency situation",
          "Requests urgent crypto transfer",
          "Creates emotional pressure to act fast"
        ],
        defense: [
          "Always verify urgent requests via another communication channel",
          "Watch for unusual messaging patterns or language",
          "Be skeptical of urgency and emotional pressure tactics",
          "Call the person directly before sending any funds"
        ],
        riskLevel: "High",
        category: "social"
      }
    ]
  },
  {
    id: "investment",
    name: "Investment & Trading",
    icon: TrendingUp,
    color: "text-yellow-400",
    scams: [
      {
        id: 11,
        title: "Rug Pulls",
        shortDesc: "Projects where developers abandon and drain all funds.",
        description: "Projects where developers abandon and drain funds. Scammers attract buyers, then remove liquidity or mint massive supply to steal value.",
        howItWorks: [
          "Team launches token with attractive marketing",
          "Builds community and drives up price",
          "Removes liquidity or mints tokens to crash price",
          "Disappears with investor funds"
        ],
        defense: [
          "Check if liquidity is locked and for how long",
          "Avoid projects with fully anonymous teams",
          "Review token distribution for red flags",
          "Research the project's history and audit status"
        ],
        riskLevel: "Critical",
        category: "investment"
      },
      {
        id: 12,
        title: "Pump-and-Dump Schemes",
        shortDesc: "Artificial price inflation followed by coordinated crash.",
        description: "Artificial price inflation followed by a crash. Scammers hype a token, then sell their holdings while others buy at inflated prices.",
        howItWorks: [
          "Scammers accumulate large position in low-cap token",
          "Coordinate hype campaign across social media",
          "Price rises as retail buyers FOMO in",
          "Scammers dump holdings, crashing the price"
        ],
        defense: [
          "Be wary of sudden hype with no fundamental backing",
          "Watch for coordinated social media posts",
          "Check if insider wallets are selling during hype",
          "If it sounds too good to be true, it is"
        ],
        riskLevel: "High",
        category: "investment"
      },
      {
        id: 13,
        title: "Fake Presales / ICOs",
        shortDesc: "Token sales that never deliver a product.",
        description: "Token sales that never deliver a product. Scammers want you to send funds to a contract or wallet, then disappear with the money.",
        howItWorks: [
          "Fake project announces exclusive presale",
          "Creates urgency with limited slots or time pressure",
          "Collects funds via contract or wallet address",
          "Team disappears without delivering tokens"
        ],
        defense: [
          "Verify project has legitimate audits and roadmap",
          "Be suspicious of unrealistic promises and returns",
          "Don't fall for artificial time pressure",
          "Research team backgrounds thoroughly"
        ],
        riskLevel: "Critical",
        category: "investment"
      },
      {
        id: 14,
        title: "Fake Trading Bots",
        shortDesc: "Bots claiming guaranteed profits from automated trading.",
        description: "Bots claiming guaranteed profits. The scammer convinces you to deposit funds or connect your wallet, which they then drain.",
        howItWorks: [
          "Scammer promotes bot with fake profit screenshots",
          "Requires deposit or wallet connection to 'start'",
          "May show fake profits to encourage more deposits",
          "Eventually drains all connected funds"
        ],
        defense: [
          "Guaranteed returns in crypto don't exist",
          "Never trust closed-source trading bots",
          "Never send funds to wallet addresses for 'bot access'",
          "Be skeptical of testimonials and profit claims"
        ],
        riskLevel: "High",
        category: "investment"
      },
      {
        id: 15,
        title: "Signal Group Scams",
        shortDesc: "Paid groups pretending to offer profitable trade signals.",
        description: "Paid groups pretending to offer profitable trades. Scammers want you to buy after they already bought, then they exit with profits.",
        howItWorks: [
          "Scammer promotes paid signal group with fake results",
          "Buys tokens before signaling to group",
          "Group members buy, driving price up",
          "Scammer sells at peak, members left with losses"
        ],
        defense: [
          "Signals often arrive after price has already moved",
          "Fake testimonials are common",
          "Check if admin wallets profit before members",
          "Free alpha rarely exists in paid groups"
        ],
        riskLevel: "High",
        category: "investment"
      }
    ]
  },
  {
    id: "defi",
    name: "Smart Contract & DeFi",
    icon: FileCode,
    color: "text-purple-400",
    scams: [
      {
        id: 16,
        title: "Approval Draining",
        shortDesc: "Malicious contracts abusing unlimited token approvals.",
        description: "Malicious contracts abusing token approvals. The scammer wants you to approve unlimited token access, allowing them to drain funds later.",
        howItWorks: [
          "User interacts with malicious DeFi site or contract",
          "Approval request asks for unlimited token spending",
          "User approves without reading carefully",
          "Scammer drains all approved tokens at any time"
        ],
        defense: [
          "Never approve unlimited token amounts",
          "Read every approval prompt carefully",
          "Use Revoke.cash to audit and remove unused approvals",
          "Set custom approval limits for each interaction"
        ],
        riskLevel: "Critical",
        category: "defi"
      },
      {
        id: 17,
        title: "Malicious Airdrops / NFTs",
        shortDesc: "Unsolicited assets that trigger wallet drains when interacted with.",
        description: "Unsolicited assets that trigger malicious actions. The scammer wants you to interact with the token or NFT, triggering a drain transaction.",
        howItWorks: [
          "Scammer airdrops tokens or NFTs to wallets",
          "Assets contain malicious contract interactions",
          "Attempting to sell or transfer triggers drain",
          "Sometimes just listing can trigger approval exploits"
        ],
        defense: [
          "Never interact with unknown airdropped assets",
          "Hide suspicious NFTs in your wallet",
          "Use burner wallets for unknown interactions",
          "Don't try to sell or swap unknown tokens"
        ],
        riskLevel: "Critical",
        category: "defi"
      },
      {
        id: 18,
        title: "Fake DeFi Websites (Phishing)",
        shortDesc: "Cloned websites of legitimate DeFi protocols.",
        description: "Cloned websites of legitimate protocols. Scammers want you to connect your wallet and approve transactions on their fake site.",
        howItWorks: [
          "Scammer creates pixel-perfect clone of popular DeFi site",
          "Promotes via ads, SEO, or social media",
          "User connects wallet thinking it's legitimate",
          "Malicious transaction drains wallet"
        ],
        defense: [
          "Bookmark official URLs and only use those",
          "Avoid clicking search ads for DeFi protocols",
          "Double-check domain spelling carefully",
          "Verify SSL certificates and contract addresses"
        ],
        riskLevel: "Critical",
        category: "defi"
      },
      {
        id: 19,
        title: "Flash Loan Exploit Scams",
        shortDesc: "Fake claims of exploit opportunities requiring upfront payment.",
        description: "Fake claims of exploit opportunities. Scammers try to extract upfront fees or investments, pretending to share profits from 'exploits'.",
        howItWorks: [
          "Scammer claims to have discovered DeFi exploit",
          "Offers to share profits if you provide capital",
          "Uses technical jargon to sound legitimate",
          "Takes upfront payment and disappears"
        ],
        defense: [
          "Real exploits are never shared publicly for 'investment'",
          "Excessive technical jargon is often used to confuse",
          "Never pay upfront fees for profit-sharing schemes",
          "If it sounds too good to be true, it's a scam"
        ],
        riskLevel: "High",
        category: "defi"
      },
      {
        id: 20,
        title: "Upgrade/Proxy Contract Abuse",
        shortDesc: "Contracts that can change logic after deployment to steal funds.",
        description: "Contracts that can change logic after deployment. Scammers want users to deposit funds before changing the contract to steal them.",
        howItWorks: [
          "Project deploys upgradeable smart contract",
          "Attracts deposits with normal functionality",
          "Upgrades contract to include malicious logic",
          "Drains all deposited funds"
        ],
        defense: [
          "Check who controls upgrade permissions (multisig, timelock)",
          "Prefer immutable contracts when possible",
          "Read audit reports for upgrade mechanism concerns",
          "Be cautious of new protocols with upgradeable contracts"
        ],
        riskLevel: "High",
        category: "defi"
      }
    ]
  },
  {
    id: "software",
    name: "Software & Infrastructure",
    icon: Monitor,
    color: "text-blue-400",
    scams: [
      {
        id: 21,
        title: "Fake Wallet Apps",
        shortDesc: "Malicious wallet software that steals your seed phrase.",
        description: "Malicious wallet software. Scammers want you to enter your seed phrase into their fake app, giving them full access to your funds.",
        howItWorks: [
          "Fake wallet app mimics legitimate wallet UI",
          "Distributed through unofficial app stores or links",
          "Asks user to create or import wallet",
          "Seed phrase is sent directly to scammer"
        ],
        defense: [
          "Download wallets only from official sources",
          "Verify app publishers and signatures",
          "Never sideload wallet apps",
          "Check reviews and download counts"
        ],
        riskLevel: "Critical",
        category: "software"
      },
      {
        id: 22,
        title: "Browser Extension Scams",
        shortDesc: "Trojan wallet extensions that monitor or steal credentials.",
        description: "Trojan wallet extensions. The scammer wants to monitor your transactions or steal your private keys through malicious browser extensions.",
        howItWorks: [
          "Malicious extension mimics popular wallet",
          "May be installed through phishing or fake updates",
          "Monitors clipboard, keystrokes, or modifies pages",
          "Steals credentials or hijacks transactions"
        ],
        defense: [
          "Verify extension publishers before installing",
          "Keep browser extensions to a minimum",
          "Only install from official extension stores",
          "Regularly audit installed extensions"
        ],
        riskLevel: "Critical",
        category: "software"
      },
      {
        id: 23,
        title: "Supply Chain Attacks",
        shortDesc: "Compromised software dependencies injecting malicious code.",
        description: "Compromised software dependencies. Attackers inject malicious code into libraries to steal keys or manipulate transactions.",
        howItWorks: [
          "Attacker compromises popular code library",
          "Malicious code is included in updates",
          "Apps using the library become infected",
          "User keys or transactions are compromised"
        ],
        defense: [
          "Developers should pin dependency versions",
          "Audit third-party libraries regularly",
          "Monitor for abnormal application behavior",
          "Use reputable, well-maintained libraries"
        ],
        riskLevel: "High",
        category: "software"
      },
      {
        id: 24,
        title: "Keylogger Malware",
        shortDesc: "Malware recording keystrokes or screens to capture secrets.",
        description: "Malware recording keystrokes or screens. The scammer wants to capture your seed phrases, passwords, or other sensitive information.",
        howItWorks: [
          "Malware installed via phishing or downloads",
          "Records all keystrokes or takes screenshots",
          "Captures seed phrases when typed",
          "Sends data to attacker's server"
        ],
        defense: [
          "Use hardware wallets that don't require typing seeds",
          "Never type seed phrases on internet-connected devices",
          "Use clean, dedicated devices for crypto",
          "Keep antivirus updated and run regular scans"
        ],
        riskLevel: "Critical",
        category: "software"
      }
    ]
  },
  {
    id: "nft",
    name: "NFT-Specific",
    icon: Image,
    color: "text-pink-400",
    scams: [
      {
        id: 28,
        title: "Fake Mint Links",
        shortDesc: "Fraudulent NFT mint pages that drain your wallet.",
        description: "Fraudulent NFT mint pages. Scammers want you to connect your wallet and approve a drain transaction disguised as a mint.",
        howItWorks: [
          "Scammer creates fake mint page for hyped collection",
          "Promotes via DMs, fake announcements, or ads",
          "User connects wallet thinking it's legitimate mint",
          "Transaction drains wallet instead of minting"
        ],
        defense: [
          "Verify official mint announcements from project team",
          "Never trust surprise or 'secret' mint links",
          "Use burner wallets for new mints",
          "Wait for community confirmation before minting"
        ],
        riskLevel: "Critical",
        category: "nft"
      },
      {
        id: 29,
        title: "Wash Trading",
        shortDesc: "Artificial NFT trading volume to inflate perceived value.",
        description: "Artificial NFT trading volume. Scammers inflate prices with fake trades to lure real buyers, then exit with profits.",
        howItWorks: [
          "Scammer trades NFT between own wallets",
          "Creates illusion of demand and rising prices",
          "Attracts real buyers at inflated prices",
          "Scammer sells to real buyers and exits"
        ],
        defense: [
          "Check for repeated trades between same wallets",
          "Be suspicious of sudden volume spikes",
          "Look for genuine community and holder diversity",
          "Research trading history before buying"
        ],
        riskLevel: "High",
        category: "nft"
      },
      {
        id: 30,
        title: "Copyright/Takedown Scams",
        shortDesc: "Fake legal threats demanding crypto payment.",
        description: "Fake legal threats demanding payment. Scammers pressure victims to pay crypto quickly to avoid supposed legal consequences.",
        howItWorks: [
          "Scammer sends fake copyright or legal notice",
          "Claims urgent action needed to avoid lawsuit",
          "Demands payment in cryptocurrency",
          "Creates fear and urgency to bypass rational thinking"
        ],
        defense: [
          "Legitimate legal actions don't demand crypto payment",
          "Verify claims independently through official channels",
          "Don't respond emotionally to threats",
          "Consult real legal counsel if concerned"
        ],
        riskLevel: "Medium",
        category: "nft"
      }
    ]
  },
  {
    id: "centralized",
    name: "Centralized Platforms",
    icon: Building2,
    color: "text-cyan-400",
    scams: [
      {
        id: 31,
        title: "Fake Exchanges",
        shortDesc: "Fraudulent trading platforms that block withdrawals.",
        description: "Fraudulent trading platforms. Scammers allow deposits but block withdrawals with endless excuses.",
        howItWorks: [
          "Scammer creates professional-looking exchange",
          "Allows deposits and shows fake trading",
          "Blocks or delays all withdrawal attempts",
          "Eventually disappears with all deposited funds"
        ],
        defense: [
          "Check for regulatory footprint and licenses",
          "Research reputation before depositing",
          "Withdrawal delays and excuses are major red flags",
          "Use established, regulated exchanges"
        ],
        riskLevel: "Critical",
        category: "centralized"
      },
      {
        id: 32,
        title: "Withdrawal Fee Scams",
        shortDesc: "Fake fees required to unlock funds that never arrive.",
        description: "Fake fees to unlock funds. Scammers want repeated payments, but never release the funds.",
        howItWorks: [
          "Platform shows large balance in your account",
          "Withdrawal requires paying 'tax' or 'fee'",
          "After payment, new fees are demanded",
          "Funds remain permanently locked"
        ],
        defense: [
          "Legitimate platforms deduct fees automatically",
          "Multiple escalating fees are a scam",
          "Never pay external fees to unlock funds",
          "If funds are locked behind fees, they don't exist"
        ],
        riskLevel: "Critical",
        category: "centralized"
      }
    ]
  }
];

// Flatten all scams for searching/filtering
export const allScams = scamCategories.flatMap(cat => cat.scams);
