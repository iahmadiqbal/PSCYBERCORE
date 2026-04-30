import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const solutionsMenu = [
  {
    label: "Automotive IT Solutions",
    id: "automotive-it",
    links: [
      "Vehicle-based IT systems",
      "Customer & vehicle data management",
      "Workflow automation for garages",
      "Service tracking & job management",
    ],
  },
  {
    label: "Fleet Technology & GPS Tracking",
    id: "fleet-technology",
    links: [
      "Real-time GPS vehicle tracking",
      "Route optimization & dispatch",
      "Driver activity monitoring",
      "Fleet performance dashboards",
    ],
  },
  {
    label: "Cybersecurity Support",
    id: "cybersecurity",
    links: [
      "Vulnerability assessments",
      "Data protection & encryption",
      "Threat monitoring & response",
      "Security policy implementation",
    ],
  },
  {
    label: "Custom Software Development",
    id: "custom-software",
    links: [
      "Tailored business applications",
      "Workflow & process automation",
      "Custom dashboards & reporting",
      "System integrations & APIs",
    ],
  },
  {
    label: "Website Development",
    id: "website-development",
    links: [
      "Professional automotive websites",
      "Mobile-friendly responsive design",
      "SEO-optimized structure",
      "Booking & lead generation forms",
    ],
  },
  {
    label: "CRM & Booking Systems",
    id: "crm-booking",
    links: [
      "Customer relationship management",
      "Appointment scheduling systems",
      "Automated reminders",
      "Service history tracking",
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(solutionsMenu[0]);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    navigate("/solutions");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: MENU Button and Logo */}
          <div className="flex items-center">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-3 bg-[#444] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#333] transition-all"
              >
                MENU{" "}
                <ChevronDown className={`transition-transform ${menuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* MEGA MENU - Styled like image_c6467d.png */}
              {menuOpen && (
                <div className="fixed left-0 right-0 top-20 bg-white shadow-2xl border-t border-gray-300 w-screen animate-in fade-in slide-in-from-top-2">
                  <div className="max-w-7xl mx-auto flex min-h-[500px]">
                    {/* SIDEBAR (Dark Section) */}
                    <div className="w-80 bg-[#444] flex flex-col">
                      {solutionsMenu.map((item) => {
                        const isActive = hoveredItem.id === item.id;
                        return (
                          <div key={item.id} className="relative group">
                            <button
                              onMouseEnter={() => setHoveredItem(item)}
                              onClick={() => handleLinkClick(item.id)}
                              className={`w-full text-left px-6 py-4 text-[15px] border-b border-[#555] transition-all
                                ${
                                  isActive
                                    ? "bg-white text-black font-bold border-l-4 border-cyber-red"
                                    : "text-white hover:bg-[#555]"
                                }`}
                            >
                              {item.label}
                            </button>
                            {/* Focus ring/box look from image */}
                            {isActive && (
                              <div className="absolute inset-0 border-2 border-black pointer-events-none"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* CONTENT AREA (White Section) */}
                    <div className="flex-1 bg-white p-12 flex gap-12">
                      <div className="flex-1">
                        <h2 className="text-4xl font-bold text-black mb-8 border-b-4 border-cyber-red pb-2 inline-block">
                          {hoveredItem.label}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                          {hoveredItem.links.map((link) => (
                            <button
                              key={link}
                              onClick={() => handleLinkClick(hoveredItem.id)}
                              className="text-left text-lg text-blue-800 underline hover:text-cyber-red transition-colors w-fit"
                            >
                              {link}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* "Most Requested" Sidebar from Image */}
                      <div className="w-72">
                        <h3 className="text-2xl font-bold text-black mb-6">Most requested</h3>
                        <ul className="space-y-4">
                          {["IT Audit", "Security Setup", "Emergency Support"].map((req) => (
                            <li key={req} className="flex items-start gap-2">
                              <span className="text-black text-xl">•</span>
                              <span className="text-blue-800 underline cursor-pointer hover:text-cyber-red">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/" className="ml-8">
              <img src={logo} alt="Logo" className="w-28 h-auto" />
            </Link>
          </div>

          {/* Right Side: Action Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/book-consultation"
              className="bg-[#26374a] text-white px-6 py-2 text-sm font-bold uppercase hover:bg-[#1a2533]"
            >
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
