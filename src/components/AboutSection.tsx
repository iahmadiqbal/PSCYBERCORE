export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cyber-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">About PSCyberCore</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-cyber-navy-foreground">
              Your Trusted Partner in Cybersecurity
            </h2>
            <p className="mt-6 text-cyber-navy-foreground/70 leading-relaxed">
              PSCyberCore is a leading cybersecurity firm dedicated to protecting businesses from ever-evolving digital threats. With years of industry experience, our team of certified security professionals delivers tailored solutions that safeguard your most valuable digital assets.
            </p>
            <p className="mt-4 text-cyber-navy-foreground/70 leading-relaxed">
              We combine cutting-edge technology with deep expertise to provide proactive defense, rapid incident response, and strategic security consulting — all designed to keep your business running securely.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Security Experts" },
                { value: "15+", label: "Industry Awards" },
                { value: "99%", label: "Client Retention" },
              ].map((stat) => (
                <div key={stat.label} className="bg-cyber-navy-foreground/5 rounded-lg p-5 border border-cyber-navy-foreground/10">
                  <div className="text-2xl font-bold text-cyber-red">{stat.value}</div>
                  <div className="text-sm text-cyber-navy-foreground/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — visual element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyber-red/20 to-cyber-navy-foreground/5 border border-cyber-navy-foreground/10 flex items-center justify-center overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }} />
              <div className="relative text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-cyber-red/20 border-2 border-cyber-red flex items-center justify-center mb-6 animate-float">
                  <svg className="w-12 h-12 text-cyber-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-cyber-navy-foreground">Certified & Trusted</h3>
                <p className="mt-2 text-sm text-cyber-navy-foreground/60">ISO 27001 | SOC 2 | GDPR Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
