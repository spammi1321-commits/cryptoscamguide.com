import { useState, forwardRef, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  Target,
  DollarSign,
  Shield,
  ChevronDown,
  Check,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Key points with expanded details
const keyPoints = [
  {
    icon: AlertTriangle,
    title: "Deception",
    description: "Scammers use fake identities, websites, and promises to trick victims",
    details: [
      "Cloned websites that look identical to legitimate exchanges",
      "Fake social media profiles impersonating celebrities",
      "Fraudulent apps in official app stores",
      "Phishing emails with convincing branding",
    ],
  },
  {
    icon: Target,
    title: "Targeting",
    description: "They exploit emotions like fear, greed, and urgency to manipulate decisions",
    details: [
      "FOMO (Fear of Missing Out) on 'guaranteed' gains",
      "Panic-inducing fake security alerts",
      "Romance and trust-building over weeks/months",
      "Authority impersonation (fake support agents)",
    ],
  },
  {
    icon: DollarSign,
    title: "Theft",
    description: "The goal is always to steal your crypto, private keys, or personal data",
    details: [
      "Seed phrase harvesting through fake wallet apps",
      "Approval scams draining wallet permissions",
      "Rug pulls on fake token projects",
      "Direct theft through malware and keyloggers",
    ],
  },
  {
    icon: Shield,
    title: "Prevention",
    description: "Knowledge and vigilance are your best defense against these attacks",
    details: [
      "Always verify URLs and sender identities",
      "Never share your seed phrase with anyone",
      "Use hardware wallets for large holdings",
      "Research projects thoroughly before investing",
    ],
  },
];

// Quiz data
const quizQuestions = [
  {
    id: 1,
    scenario: "You receive a DM from 'Elon Musk' offering to double your Bitcoin if you send 0.5 BTC first.",
    isScam: true,
    explanation:
      "Celebrity giveaway scams are extremely common. No legitimate person will ever ask you to send crypto to receive more back.",
  },
  {
    id: 2,
    scenario: "Your bank's official app sends a notification about a new security update and asks you to log in.",
    isScam: false,
    explanation:
      "Legitimate apps can send notifications. However, always open the app directly rather than clicking links in notifications.",
  },
  {
    id: 3,
    scenario: "A 'support agent' from your exchange asks for your seed phrase to verify your account.",
    isScam: true,
    explanation: "No legitimate support will EVER ask for your seed phrase. This is the #1 rule of crypto security.",
  },
  {
    id: 4,
    scenario: "A new token promises 1000% APY with 'zero risk' and celebrity endorsements on their website.",
    isScam: true,
    explanation:
      "No investment is 'zero risk' and extremely high APY promises are a major red flag. Celebrity endorsements are often fake.",
  },
  {
    id: 5,
    scenario: "Your friend texts you saying they just sent 0.1 ETH to your wallet, and you see the transaction confirmed on Etherscan.",
    isScam: false,
    explanation:
      "Receiving crypto from someone you know personally, with the transaction visible on the blockchain, is a normal and safe interaction.",
  },
];

// Expandable Key Point Card
const KeyPointCard = ({ point, index }: { point: (typeof keyPoints)[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "w-full flex flex-col items-center text-center p-4 rounded-xl bg-background/50 border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        isExpanded
          ? "border-destructive/50 ring-2 ring-destructive/20 ring-offset-2 ring-offset-background"
          : "border-border/30 hover:border-destructive/30",
      )}
    >
      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-3">
        <point.icon className="w-6 h-6 text-destructive" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h4 className="font-semibold">{point.title}</h4>
        <div className={cn("transition-transform duration-300", isExpanded && "rotate-180")}>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{point.description}</p>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out w-full",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 pt-4 border-t border-border/50 space-y-2 text-left">
            {point.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-destructive mt-0.5">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
};

// Quiz Component
const ScamQuiz = forwardRef<HTMLDivElement>((_, ref) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = useMemo(() => quizQuestions[currentQuestion], [currentQuestion]);
  const isCorrect = selectedAnswer === question.isScam;

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === question.isScam) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <div ref={ref} className="max-w-3xl w-full">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Zap className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">Can You Spot the Scam?</h3>
      </div>

      {!quizComplete ? (
        <>
          <div className="flex justify-center gap-2 mb-6">
            {quizQuestions.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i === currentQuestion ? "bg-primary" : i < currentQuestion ? "bg-primary/50" : "bg-muted",
                )}
              />
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Scenario {currentQuestion + 1}:</p>
            <p className="text-foreground">{question.scenario}</p>
          </div>

          {!showResult ? (
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleAnswer(true)} variant="destructive" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                This is a SCAM
              </Button>
              <Button
                onClick={() => handleAnswer(false)}
                className="gap-2 bg-success hover:bg-success/90 text-success-foreground"
              >
                <Check className="w-4 h-4" />
                This is SAFE
              </Button>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
              <div
                className={cn(
                  "flex items-center justify-center gap-2 p-3 rounded-lg",
                  isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
                )}
              >
                {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                <span className="font-medium">{isCorrect ? "Correct!" : "Wrong!"}</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">{question.explanation}</p>
              <div className="flex justify-center">
                <Button onClick={nextQuestion} className="gap-2">
                  {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className="text-6xl font-bold text-primary">
            {score}/{quizQuestions.length}
          </div>
          <p className="text-lg">
            {score === quizQuestions.length
              ? "Perfect! You're scam-proof! 🎉"
              : score >= quizQuestions.length / 2
                ? "Good job! Keep learning to stay safe."
                : "Time to study up on scam tactics!"}
          </p>
          <Button onClick={resetQuiz} variant="outline">
            Try Again
          </Button>
        </motion.div>
      )}
    </div>
  );
});
ScamQuiz.displayName = "ScamQuiz";

const CryptoScamsOverview = forwardRef<HTMLElement>((_, ref) => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = isMobile || prefersReducedMotion;
  
  return (
    <section ref={ref} id="overview" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Static background elements on mobile, animated on desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shouldReduceMotion ? (
          <>
            <div className="absolute top-20 left-10 w-64 h-64 bg-destructive/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </>
        ) : (
          <>
            <motion.div
              className="absolute top-20 left-10 w-64 h-64 bg-destructive/5 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
              animate={{
                x: [0, -20, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Are <span className="text-destructive">Crypto Scams</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Crypto scams are fraudulent schemes designed to steal your cryptocurrency, private keys, or personal
            information. Scammers exploit the decentralized and irreversible nature of blockchain transactions. Once
            your crypto is gone, it's basically impossible to recover.
          </p>
        </div>

        {/* Scammer's Playbook - Expandable cards */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">The Scammer's Playbook</h3>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              While tactics vary, all crypto scams share common goals and methods. Click to learn more:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyPoints.map((point, index) => (
                <KeyPointCard key={point.title} point={point} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Quiz Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          <div className="md:col-span-2 flex justify-center">
            <ScamQuiz />
          </div>
        </div>
      </div>
    </section>
  );
});
CryptoScamsOverview.displayName = "CryptoScamsOverview";

export default CryptoScamsOverview;
