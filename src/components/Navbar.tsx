import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PSCyberCore" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-5 py-2 text-sm font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors">
              Get Protected
            </a>
          </div>

          {/* Mobile toggle */}
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 flex flex-col gap-3">
            <a href="#services" onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1">Services</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1">About</a>
            <a href="#why-us" onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1">Why Us</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1">Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-5 py-2 text-sm font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors mt-2">
              Get Protected
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
