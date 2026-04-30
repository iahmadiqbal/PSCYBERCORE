import aboutImg from "@/assets/about-team.jpg";

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

          {/* Right side — real image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-cyber-navy-foreground/10 shadow-2xl shadow-cyber-red/10">
              <img
                src={aboutImg}
                alt="PSCyberCore Security Operations Center"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-cyber-red text-cyber-red-foreground rounded-xl p-5 shadow-lg shadow-cyber-red/30">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm font-medium opacity-90">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
