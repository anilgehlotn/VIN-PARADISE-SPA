import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { PHONE, WHATSAPP_DEFAULT } from "@/data/services";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Premium Services", href: "#premium" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gold/30 ${
          scrolled ? "h-[50px] bg-[#080808]/95 backdrop-blur-md" : "h-[65px] md:h-[65px] bg-[#080808]/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="flex flex-col justify-center" data-testid="nav-logo">
            <span className="font-heading text-gold text-lg md:text-xl leading-tight font-semibold tracking-wide">Vin Paradise</span>
            <span className="text-cream/50 text-[10px] md:text-xs font-body leading-tight">Unisex Salon & Spa | Nagarbhavi</span>
          </a>

          {/* Center Links - desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                data-testid={`nav-link-${link.href.replace("#", "")}`}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 text-sm font-body transition-colors relative group ${
                  activeSection === link.href.replace("#", "") ? "text-gold" : "text-cream/70 hover:text-gold"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gold transition-all duration-300 ${
                  activeSection === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            ))}
          </div>

          {/* Right CTA - desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              data-testid="nav-call-btn"
              className="flex items-center gap-2 px-4 py-1.5 border border-gold text-gold text-sm font-body rounded-full hover:bg-gold/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-btn"
              className="flex items-center gap-2 px-4 py-1.5 bg-[#25D366] text-white text-sm font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gold p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div data-testid="mobile-menu" className="fixed inset-0 z-[60] bg-[#080808] flex flex-col items-center justify-center animate-fade-in">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 z-[70] text-gold p-2" data-testid="mobile-menu-close">
            <X className="w-7 h-7" />
          </button>
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-cream text-xl font-heading hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-10 w-64">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors"
              data-testid="mobile-menu-call"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors"
              data-testid="mobile-menu-whatsapp"
            >
              <WhatsAppIcon /> WhatsApp Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
