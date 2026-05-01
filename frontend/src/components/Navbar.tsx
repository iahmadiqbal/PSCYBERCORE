import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useState, useRef, useEffect, type RefObject } from "react";
import logo from "@/assets/logo.png";

// ─── Mega Menu Data ────────────────────────────────────────────────────────
type MenuLink = { label: string; to: string; hash?: string };
type MenuCategory = {
  id: string;
  label: string;
  to: string;
  links: MenuLink[];
  mostRequested: MenuLink[];
};

const megaMenuCategories: MenuCategory[] = [
  {
    id: "solutions",
    label: "Solutions",
    to: "/solutions",
    links: [
      { label: "Automotive IT Solutions", to: "/solutions", hash: "automotive-it" },
      { label: "Fleet Technology & GPS Tracking", to: "/solutions", hash: "fleet-technology" },
      { label: "Cybersecurity Support", to: "/solutions", hash: "cybersecurity" },
      { label: "Custom Software Development", to: "/solutions", hash: "custom-software" },
      { label: "Website Development", to: "/solutions", hash: "website-development" },
      { label: "CRM & Booking Systems", to: "/solutions", hash: "crm-booking" },
      { label: "Business Process Automation", to: "/solutions", hash: "automation" },
      { label: "Data Reporting & Dashboards", to: "/solutions", hash: "data-reporting" },
      { label: "Cloud & IT Support", to: "/solutions", hash: "cloud-it" },
      { label: "CAD & 3D Modelling Support", to: "/solutions", hash: "cad-3d" },
    ],
    mostRequested: [
      { label: "IT Audit", to: "/solutions", hash: "cybersecurity" },
      { label: "Security Setup", to: "/solutions", hash: "cybersecurity" },
      { label: "Fleet Tracking", to: "/solutions", hash: "fleet-technology" },
      { label: "Book Consultation", to: "/book-consultation" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    to: "/industries",
    links: [
      { label: "Repair Shops", to: "/industries", hash: "repair-shops" },
      { label: "Dealerships", to: "/industries", hash: "dealerships" },
      { label: "Fleet Operators", to: "/industries", hash: "fleet-operators" },
      { label: "Transport Companies", to: "/industries", hash: "transport-companies" },
      { label: "Logistics Businesses", to: "/industries", hash: "logistics-businesses" },
      { label: "Mobility & Automotive Startups", to: "/industries", hash: "mobility-startups" },
    ],
    mostRequested: [
      { label: "Fleet Operators", to: "/industries", hash: "fleet-operators" },
      { label: "Auto Dealerships", to: "/industries", hash: "dealerships" },
      { label: "Get a Quote", to: "/book-consultation" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    id: "how-it-works",
    label: "How It Works",
    to: "/how-it-works",
    links: [
      { label: "Step 1: Consultation", to: "/how-it-works" },
      { label: "Step 2: Analysis", to: "/how-it-works" },
      { label: "Step 3: System Design", to: "/how-it-works" },
      { label: "Step 4: Development", to: "/how-it-works" },
      { label: "Step 5: Deployment", to: "/how-it-works" },
      { label: "Step 6: Support & Optimization", to: "/how-it-works" },
    ],
    mostRequested: [
      { label: "Start a Project", to: "/book-consultation" },
      { label: "View Our Process", to: "/how-it-works" },
      { label: "Book Consultation", to: "/book-consultation" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    id: "about",
    label: "About Us",
    to: "/about",
    links: [
      { label: "Who We Are", to: "/about" },
      { label: "Mission & Vision", to: "/about" },
      { label: "What We Do", to: "/about" },
      { label: "Our Approach", to: "/about" },
      { label: "Why PSCyberCore", to: "/about" },
      { label: "Our Role", to: "/about" },
    ],
    mostRequested: [
      { label: "Our Story", to: "/about" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Book Consultation", to: "/book-consultation" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    to: "/contact",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Book a Consultation", to: "/book-consultation" },
      { label: "Send Us a Message", to: "/contact" },
      { label: "Office Location", to: "/contact" },
    ],
    mostRequested: [
      { label: "Call +1 825 807 6307", to: "tel:+18258076307" },
      { label: "Email Us", to: "mailto:info@pscybercore.com" },
      { label: "Free Consultation", to: "/book-consultation" },
      { label: "All Solutions", to: "/solutions" },
    ],
  },
];

// ─── Mega Menu ─────────────────────────────────────────────────────────────
function MegaMenu({
  onClose,
  headerHeight,
  menuRef,
}: {
  onClose: () => void;
  headerHeight: number;
  menuRef: RefObject<HTMLDivElement | null>;
}) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(megaMenuCategories[0]);
  const navigate = useNavigate();

  function handleLinkClick(link: MenuLink) {
    onClose();
    if (link.to.startsWith("tel:") || link.to.startsWith("mailto:")) {
      window.location.href = link.to;
      return;
    }
    navigate(link.to);
    if (link.hash) {
      setTimeout(() => {
        const el = document.getElementById(link.hash!);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div
      ref={menuRef}
      className="fixed left-0 right-0 z-50 border-t-2 border-cyber-red shadow-2xl"
      style={{ top: headerHeight }}
    >
      <div className="flex" style={{ height: 340 }}>
        {/* Left sidebar — dark */}
        <div className="flex flex-col bg-[#1a1a2e] overflow-hidden" style={{ minWidth: 260, width: 260 }}>
          {megaMenuCategories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat)}
              onClick={() => { if (cat.links.length === 0) { handleLinkClick({ label: cat.label, to: cat.to }); } }}
              className={`flex w-full items-center justify-between px-6 py-3.5 text-left text-sm font-medium transition-colors ${
                activeCategory.id === cat.id
                  ? "bg-white text-gray-900"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
              {activeCategory.id === cat.id && cat.links.length > 0 && (
                <ChevronRight className="size-3.5 shrink-0 text-gray-500" />
              )}
            </button>
          ))}
        </div>

        {/* Right panel — white */}
        <div className="flex flex-1 gap-16 bg-white px-10 py-7 overflow-hidden">
          {/* Left col: category title + links */}
          <div style={{ minWidth: 240 }}>
            <button
              onClick={() => handleLinkClick({ label: activeCategory.label, to: activeCategory.to })}
              className="mb-5 block border-b-2 border-cyber-red pb-2 text-xl font-black text-gray-900 hover:text-cyber-red text-left"
            >
              {activeCategory.label}
            </button>
            <ul className="space-y-3">
              {activeCategory.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="group flex items-start gap-2 text-sm text-cyber-navy text-left"
                  >
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-cyber-red transition-transform group-hover:scale-125" />
                    <span className="underline underline-offset-2 group-hover:no-underline group-hover:text-cyber-red/70">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right col: Most requested */}
          <div style={{ minWidth: 240 }}>
            <ul className="space-y-3 mt-7">
              {activeCategory.mostRequested.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="group flex items-start gap-2 text-sm text-cyber-navy text-left"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400 transition-colors group-hover:bg-cyber-red" />
                    <span className="underline underline-offset-2 group-hover:no-underline group-hover:text-cyber-red/70">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Menu ───────────────────────────────────────────────────────────
function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const navigate = useNavigate();

  function handleLinkClick(link: MenuLink) {
    onClose();
    if (link.to.startsWith("tel:") || link.to.startsWith("mailto:")) {
      window.location.href = link.to;
      return;
    }
    navigate(link.to);
    if (link.hash) {
      setTimeout(() => {
        const el = document.getElementById(link.hash!);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <button onClick={() => { onClose(); navigate("/"); window.scrollTo({ top: 0 }); }} aria-label="PSCyberCore home">
          <img src={logo} alt="PSCyberCore" className="h-12 w-auto object-contain" />
        </button>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-2 overflow-y-auto">
        {megaMenuCategories.map((cat) => (
          <div key={cat.id} className="border-b border-gray-100">
            <button
              className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold text-gray-900"
              onClick={() => setOpenSection(openSection === cat.id ? null : cat.id)}
            >
              <span>{cat.label}</span>
              <ChevronRight
                className={`size-4 shrink-0 text-cyber-red transition-transform duration-200 ${
                  openSection === cat.id ? "rotate-90" : ""
                }`}
              />
            </button>
            {openSection === cat.id && (
              <div className="mb-3 space-y-1 rounded-lg border border-cyber-red/10 bg-gray-50 p-3">
                <button
                  onClick={() => handleLinkClick({ label: cat.label, to: cat.to })}
                  className="block w-full rounded-md px-3 py-2 text-sm font-bold text-cyber-red hover:bg-cyber-red/10 text-left"
                >
                  {cat.label} — Overview
                </button>
                <div className="my-1 border-t border-gray-200" />
                {cat.links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-cyber-red/10 hover:text-cyber-red text-left"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-cyber-red/40" />
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="border-t border-gray-200 px-4 py-4 space-y-2">
        <a
          href="tel:+18258076307"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-cyber-red py-3 text-sm font-bold text-white"
          onClick={onClose}
        >
          <Phone className="size-4" /> Talk to an Expert
        </a>
        <a
          href="mailto:info@pscybercore.com"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-cyber-navy bg-cyber-navy py-3 text-sm font-bold text-white"
          onClick={onClose}
        >
          <span>✉</span> info@pscybercore.com
        </a>
      </div>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────
export function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const headerRef = useRef<HTMLElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Keep header height in sync for mega menu positioning
  useEffect(() => {
    function measure() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Close mega menu on outside click — check both header and mega menu panel
  useEffect(() => {
    if (!megaOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      const target = e.target as Node;
      const inHeader = headerRef.current?.contains(target);
      const inMegaMenu = megaMenuRef.current?.contains(target);
      if (!inHeader && !inMegaMenu) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [megaOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center pt-1">
            {/* Logo */}
            <button
              onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              aria-label="PSCyberCore home"
            >
              <img src={logo} alt="PSCyberCore" className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" style={{ transform: "scale(1.75)", transformOrigin: "center" }} />
            </button>

            {/* Desktop MENU button */}
            <button
              className={`hidden lg:flex w-full items-center justify-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors ${
                megaOpen ? "bg-cyber-red/85" : "bg-cyber-red hover:bg-cyber-red/85"
              }`}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => setMegaOpen((v) => !v)}
            >
              <Menu className="size-4" />
              MENU
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mobile MENU button */}
            <button
              className="flex lg:hidden w-full items-center justify-center gap-2 bg-cyber-red px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu className="size-3.5" />
              MENU
            </button>
          </div>

          {/* Right — action buttons */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Desktop */}
            <a
              href="tel:+18258076307"
              className="hidden lg:flex items-center gap-2 rounded-md border border-cyber-red px-4 py-2 text-sm font-semibold text-cyber-red hover:bg-cyber-red hover:text-white transition-colors"
            >
              <Phone className="size-4" />
              +1 825 807 6307
            </a>
            <button
              onClick={() => { navigate("/book-consultation"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="hidden lg:flex items-center gap-2 rounded-md bg-cyber-navy px-5 py-2 text-sm font-bold text-white hover:bg-cyber-navy/85 transition-colors"
            >
              Book Consultation
            </button>

            {/* Mobile */}
            <a
              href="tel:+18258076307"
              className="flex lg:hidden items-center gap-1.5 rounded-md border border-cyber-red px-3 py-2 text-xs font-bold text-cyber-red whitespace-nowrap"
            >
              <Phone className="size-3.5 shrink-0" />
              Call Us
            </a>
            <button
              onClick={() => { navigate("/book-consultation"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex lg:hidden items-center gap-1.5 rounded-md bg-cyber-navy px-3 py-2 text-xs font-bold text-white whitespace-nowrap"
            >
              Consult
            </button>
          </div>
        </div>

        {/* Mega menu — desktop only, triggered by hover on MENU button */}
        {megaOpen && (
          <MegaMenu
            onClose={() => setMegaOpen(false)}
            headerHeight={headerHeight}
            menuRef={megaMenuRef}
          />
        )}
      </header>

      {/* Spacer so page content doesn't hide under fixed header */}
      <div style={{ height: headerHeight }} />
    </>
  );
}
