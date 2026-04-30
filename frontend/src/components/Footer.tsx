import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-amber-50 py-16 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + short text */}
          <div className="md:col-span-1">
            <img src={logo} alt="PSCyberCore" className="w-36 h-auto" />
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Automotive IT, cybersecurity and digital solutions for modern vehicle businesses.
            </p>
          </div>

          {/* Quick Links — includes Home */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Solutions", to: "/solutions" },
                { label: "Industries", to: "/industries" },
                { label: "How It Works", to: "/how-it-works" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.to)}
                    className="text-sm text-gray-600 hover:text-cyber-red transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["IT Solutions", "Fleet Tech", "Cybersecurity", "CRM", "Automation"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick("/solutions")}
                    className="text-sm text-gray-600 hover:text-cyber-red transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+18258076307" className="text-sm text-gray-600 hover:text-cyber-red transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyber-red flex-shrink-0" /> +1 825 807 6307
                </a>
              </li>
              <li>
                <a href="mailto:info@pscybercore.com" className="text-sm text-gray-600 hover:text-cyber-red transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyber-red flex-shrink-0" /> info@pscybercore.com
                </a>
              </li>
              <li>
                <a href="https://www.pscybercore.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-cyber-red transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyber-red flex-shrink-0" /> www.pscybercore.com
                </a>
              </li>
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyber-red flex-shrink-0 mt-0.5" /> 219-1210 20 Ave SE, Calgary, AB, Canada T2G 1M8
              </li>
            </ul>

            {/* Social icons — lucide-react, redirect to sample pages */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-cyber-red hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-cyber-red hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-cyber-red hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-100 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PSCyberCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
