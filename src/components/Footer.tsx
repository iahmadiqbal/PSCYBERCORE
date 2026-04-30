import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-cyber-navy py-16 border-t border-cyber-navy-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo} alt="PSCyberCore" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-4 text-cyber-navy-foreground/60 text-sm leading-relaxed max-w-sm">
              Defending your digital world with advanced cybersecurity solutions. Trust PSCyberCore to keep your business safe.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyber-navy-foreground uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Network Security", "Penetration Testing", "Threat Intelligence", "Incident Response"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-cyber-navy-foreground/60 hover:text-cyber-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyber-navy-foreground uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About Us", "Why Choose Us", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-sm text-cyber-navy-foreground/60 hover:text-cyber-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyber-navy-foreground/10 text-center">
          <p className="text-xs text-cyber-navy-foreground/40">
            &copy; {new Date().getFullYear()} PSCyberCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
