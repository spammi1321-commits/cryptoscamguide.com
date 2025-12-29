import { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

// Lazy load below-the-fold components
const ScamsCatalog = lazy(() => import("@/components/ScamsCatalog"));
const HardwareWall = lazy(() => import("@/components/HardwareWall"));
const SecurityAudit = lazy(() => import("@/components/SecurityAudit"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="py-24 flex justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("Pro tip: Press / to quickly search scams", {
        icon: "⌨️",
        duration: 5000,
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
        <ScrollProgress />
        <BackToTop />
        <Navbar />
        <main role="main">
          <article>
            <Hero />
            <Suspense fallback={<SectionLoader />}>
              <ScamsCatalog />
            </Suspense>
          </article>
          <Suspense fallback={<SectionLoader />}>
            <aside>
              <HardwareWall />
            </aside>
            <section aria-label="Security tools">
              <SecurityAudit />
            </section>
            <section aria-label="Frequently asked questions">
              <FAQ />
            </section>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
