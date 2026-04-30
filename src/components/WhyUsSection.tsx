import whyUsImg from "@/assets/why-us.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-cyber-red/10 border border-border">
              <img
                src={whyUsImg}
                alt="PSCyberCore team in action"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-cyber-navy text-cyber-navy-foreground rounded-xl p-5 shadow-lg border border-cyber-navy-foreground/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cyber-red/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyber-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-cyber-navy-foreground/60">Threats Blocked Daily</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Why Choose Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              What Sets PSCyberCore Apart
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We go beyond standard security — delivering proactive, intelligent, and relentless cyber protection.
            </p>

            <div className="mt-10 space-y-6">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="flex gap-5 bg-card rounded-xl p-6 border border-border hover:border-cyber-red/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-cyber-red text-cyber-red-foreground flex items-center justify-center font-bold text-sm">
                    {reason.number}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
