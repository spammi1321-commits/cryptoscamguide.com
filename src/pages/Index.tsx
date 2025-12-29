import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScamsCatalog from "@/components/ScamsCatalog";
import HardwareWall from "@/components/HardwareWall";
import SecurityAudit from "@/components/SecurityAudit";
import FAQ from "@/components/FAQ";
// import TrezorAffiliate from "@/components/TrezorAffiliate"; // Temporarily removed
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Free Crypto Scam Guide 2025 | Protect Your Wallet from 30+ Scams</title>
        <meta
          name="description"
          content="Learn to identify and avoid 30+ cryptocurrency scams including address poisoning, phishing, and rug pulls. Free interactive guide with hardware wallet security tips."
        />
        <link rel="canonical" href="https://www.cryptoscamguide.com/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main role="main">
          <article>
            <Hero />
            <ScamsCatalog />
          </article>
          <aside>
            <HardwareWall />
          </aside>
          <section aria-label="Security tools">
            <SecurityAudit />
          </section>
          <section aria-label="Frequently asked questions">
            <FAQ />
          </section>
          {/* <TrezorAffiliate /> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
