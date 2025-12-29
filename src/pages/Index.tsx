import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScamsCatalog from "@/components/ScamsCatalog";
import HardwareWall from "@/components/HardwareWall";
import SecurityAudit from "@/components/SecurityAudit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CryptoScamGuide - Don't Be the Next Victim</title>
        <meta
          name="description"
          content="The definitive guide to identifying and neutralizing crypto scams. Learn about address poisoning, ice phishing, approval exploits, and how to protect your wallet."
        />
        <meta name="keywords" content="crypto scams, cryptocurrency security, hardware wallet, phishing, blockchain security" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ScamsCatalog />
          <HardwareWall />
          <SecurityAudit />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
