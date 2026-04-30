import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PSCyberCore — Cybersecurity Solutions" },
      { name: "description", content: "PSCyberCore delivers enterprise-grade cybersecurity solutions to defend your business against evolving digital threats — 24/7." },
      { property: "og:title", content: "PSCyberCore — Cybersecurity Solutions" },
      { property: "og:description", content: "Enterprise-grade cybersecurity solutions to defend your business against evolving digital threats." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
