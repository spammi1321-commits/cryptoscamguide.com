import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Target,
  DollarSign,
  Shield,
  ChevronDown,
  Check,
  X,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Eye,
  MessageSquare,
  Wallet,
  Ban,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
];

// Expandable Key Point Card
const KeyPointCard = ({ point, index }: { point: (typeof keyPoints)[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-full flex flex-col items-center text-center p-4 rounded-xl bg-background/50 border transition-all duration-300",
          isExpanded
            ? "border-destructive/50 ring-2 ring-destructive/20 ring-offset-2 ring-offset-background"
            : "border-border/30 hover:border-destructive/30",
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-3 relative">
          <point.icon className="w-6 h-6 text-destructive" />
          {/* Pulsing effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-destructive/20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-semibold">{point.title}</h4>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>
        <p className="text-sm text-muted-foreground">{point.description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden w-full"
            >
              <ul className="mt-4 pt-4 border-t border-border/50 space-y-2 text-left">
                {point.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-destructive mt-0.5">•</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

// Quiz Component
const ScamQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === quizQuestions[currentQuestion].isScam) {
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

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.isScam;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8"
    >
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
                variant="outline"
                className="gap-2 border-green-500/50 text-green-500 hover:bg-green-500/10"
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
                  isCorrect ? "bg-green-500/10 text-green-500" : "bg-destructive/10 text-destructive",
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
    </motion.div>
  );
};

// Timeline Component
const ScamTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-xl font-semibold text-center mb-2">Anatomy of a Scam</h3>
      <p className="text-muted-foreground text-center mb-8 text-sm">How scammers typically operate</p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-yellow-500 to-destructive hidden md:block" />

        <div className="space-y-4">
          {scamTimeline.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10",
                  step.color,
                )}
              >
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-muted-foreground">Step {step.step}</span>
                </div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CryptoScamsOverview = () => {
  return (
    <section id="overview" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Are <span className="text-destructive">Crypto Scams</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Crypto scams are fraudulent schemes designed to steal your cryptocurrency, private keys, or personal
            information. Scammers exploit the decentralized and irreversible nature of blockchain transactions. Once
            your crypto is gone, it's basically impossible to recover.
          </p>
        </motion.div>

        {/* Scammer's Playbook - Expandable cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
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
        </motion.div>

        {/* Timeline and Quiz Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          <ScamTimeline />
          <ScamQuiz />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          Below you'll find a comprehensive catalog of 30+ scam types, organized by category, with real-world examples
          and proven defense strategies.
        </motion.p>
      </div>
    </section>
  );
};

export default CryptoScamsOverview;
