const reasons = [
  {
    number: "01",
    title: "24/7 Security Operations Center",
    description: "Our SOC team monitors your infrastructure around the clock, ensuring threats are detected and neutralized in real-time.",
  },
  {
    number: "02",
    title: "Certified Security Professionals",
    description: "Our team holds top industry certifications including CISSP, CEH, OSCP, and CompTIA Security+ credentials.",
  },
  {
    number: "03",
    title: "Customized Defense Strategies",
    description: "We don't believe in one-size-fits-all. Every solution is tailored to your specific industry and threat landscape.",
  },
  {
    number: "04",
    title: "Proven Track Record",
    description: "With hundreds of successful engagements, we've protected businesses across finance, healthcare, and technology sectors.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            What Sets PSCyberCore Apart
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We go beyond standard security — delivering proactive, intelligent, and relentless cyber protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="flex gap-6 bg-card rounded-xl p-8 border border-border hover:border-cyber-red/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyber-red text-cyber-red-foreground flex items-center justify-center font-bold text-lg">
                {reason.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
