import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-cyber-navy/80" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyber-red/20 text-cyber-red border border-cyber-red/30 mb-6">
            Cybersecurity Solutions
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-cyber-navy-foreground leading-tight animate-fade-in-up-delay-1">
          Protect Your Digital
          <br />
          <span className="text-cyber-red">Infrastructure</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-cyber-navy-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          PSCyberCore delivers enterprise-grade cybersecurity solutions to defend your business against evolving digital threats — 24/7.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <Button variant="hero" size="lg" className="text-base px-8 py-6 animate-pulse-glow">
            Start Free Assessment
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in-up-delay-3">
          {[
            { value: "500+", label: "Clients Protected" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "24/7", label: "Threat Monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-red">{stat.value}</div>
              <div className="text-xs sm:text-sm text-cyber-navy-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
