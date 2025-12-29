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
  return (
    <>
      <Helmet>
        <title>Crypto Scam Guide | Protect Your Crypto and Yourself</title>
        <meta
          name="description"
          content="Stay safe from 30+ crypto scams like phishing, address poisoning, rug pulls, and more. An interactive guide with clear steps for better crypto security."
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
