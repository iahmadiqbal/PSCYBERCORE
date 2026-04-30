import { Link } from "@tanstack/react-router";
import servicesBg from "@/assets/services-bg.jpg";

const coreSolutions = [
  {
    image: servicesBg,
    title: "Automotive IT Solutions",
    icon: "🚗",
  },
  {
    image: servicesBg,
    title: "Fleet Tech & GPS Tracking",
    icon: "🚚",
  },
  {
    image: servicesBg,
    title: "Cybersecurity Support",
    icon: "🛡️",
  },
  {
    image: servicesBg,
    title: "Custom Software Development",
    icon: "💻",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Our Solutions</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Core Solutions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We provide end-to-end technology solutions designed to protect and optimize every layer of your automotive business.
          </p>
        </div>

        {/* 4 cards in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreSolutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative rounded-xl overflow-hidden border border-border hover:border-cyber-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-red/10 hover:-translate-y-1 bg-card"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-cyber-navy/40 group-hover:bg-cyber-navy/20 transition-colors duration-300" />
              </div>
              <div className="p-5">
                <div className="text-2xl mb-2">{solution.icon}</div>
                <h3 className="text-base font-semibold text-foreground">{solution.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Solutions button */}
        <div className="mt-10 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center rounded-md border-2 border-cyber-red text-cyber-red px-8 py-3 text-sm font-semibold hover:bg-cyber-red hover:text-cyber-red-foreground transition-colors"
          >
            View More Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
