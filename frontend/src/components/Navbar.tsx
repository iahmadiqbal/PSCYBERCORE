import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

const solutions = [
  "Automotive IT Solutions",
  "Fleet Technology & GPS Tracking",
  "Cybersecurity Support",
  "Custom Software Development",
  "Website Development",
  "CRM & Booking Systems",
  "Business Process Automation",
  "Data Reporting & Dashboards",
  "Cloud & IT Support",
  "CAD & 3D Modelling Support",
];

const industries = [
  "Repair Shops",
  "Dealerships",
  "Fleet Operators",
  "Transport Companies",
  "Logistics Businesses",
  "Mobility & Automotive Startups",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo = Home button */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PSCyberCore" className="h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-xl py-2 z-50">
                  {solutions.map((item) => (
                    <Link
                      key={item}
                      to="/solutions"
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl py-2 z-50">
                  {industries.map((item) => (
                    <Link
                      key={item}
                      to="/industries"
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>

            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center rounded-md bg-cyber-red px-5 py-2 text-sm font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile full screen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background flex flex-col">
          <div className="flex items-center justify-between px-4 h-20 border-b border-border">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="PSCyberCore" className="h-14 w-auto" />
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-4">
            <Link to="/solutions" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-cyber-red transition-colors py-2 border-b border-border">Solutions</Link>
            <Link to="/industries" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-cyber-red transition-colors py-2 border-b border-border">Industries</Link>
            <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-cyber-red transition-colors py-2 border-b border-border">How It Works</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-cyber-red transition-colors py-2 border-b border-border">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-cyber-red transition-colors py-2 border-b border-border">Contact</Link>
          </div>

          <div className="px-6 py-6 border-t border-border flex flex-col gap-3">
            <a href="tel:+18258076307" className="flex items-center gap-3 text-base font-medium text-foreground hover:text-cyber-red transition-colors">
              <span>📞</span> Talk to an Expert
            </a>
            <a href="mailto:info@pscybercore.com" className="flex items-center gap-3 text-base font-medium text-foreground hover:text-cyber-red transition-colors">
              <span>📧</span> info@pscybercore.com
            </a>
            <Link
              to="/book-consultation"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-cyber-red px-5 py-3 text-sm font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
