import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScamsSection from "@/components/ScamsSection";
import TipsSection from "@/components/TipsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CryptoSafe - Protect Yourself from Crypto Scams</title>
        <meta 
          name="description" 
          content="Learn to identify and protect yourself from cryptocurrency scams. Educational resource covering phishing, rug pulls, fake airdrops, and more." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ScamsSection />
          <TipsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
