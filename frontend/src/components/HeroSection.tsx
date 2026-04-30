import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    image: heroBg,
    headline: "Automotive IT & Cybersecurity Solutions for Modern Vehicle Businesses",
    subhead: "Secure, automate and optimize your operations with smart technology systems",
  },
  {
    image: heroBg,
    headline: "Smart Fleet Technology & Data-Driven Operations",
    subhead: "Real-time tracking, reporting and operational visibility for transport businesses",
  },
  {
    image: heroBg,
    headline: "Protect Your Business with Advanced Cybersecurity",
    subhead: "Safeguard your systems, data and workflows from modern digital threats",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-cyber-navy/70" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cyber-navy-foreground leading-tight animate-fade-in-up-delay-1">
          {slides[current].headline}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-cyber-navy-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          {slides[current].subhead}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <Link
            to="/book-consultation"
            className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors animate-pulse-glow"
          >
            Book Consultation
          </Link>
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center rounded-md border-2 border-cyber-navy-foreground/50 px-8 py-4 text-base font-semibold text-cyber-navy-foreground hover:border-cyber-navy-foreground hover:bg-cyber-navy-foreground/10 transition-colors"
          >
            View Solutions
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="mt-12 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-cyber-red w-8" : "bg-cyber-navy-foreground/40"}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
